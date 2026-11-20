# Migrasi Wawasan AI: Vercel → Cloudflare Workers (paket gratis)

Branch: `cloudflare-migration`. Target: **Cloudflare Workers Free** + **Workers Static Assets**,
deploy otomatis lewat **Workers Builds** (Git integration) dari GitHub.

## Ringkasan arsitektur

| Bagian | Dulu (Vercel) | Sekarang (Cloudflare) |
| --- | --- | --- |
| Halaman (repo/model/stack/berita/tag/daily/weekly, sitemap, RSS, OG image) | Next.js SSG + ISR | **Next.js static export** (`output: "export"`) → folder `out/` |
| Serving halaman | Vercel CDN + functions | **Workers Static Assets** — gratis, tanpa batas, **tidak dihitung** ke 100k request/hari |
| API (`/api/admin/*`, `/api/newsletter`) | Next.js route handlers | **`worker/index.ts`** (Worker kecil, ±10 KB) |
| Gerbang login `/admin` | `cookies()` di server component | Worker cek cookie sesi sebelum menyajikan halaman statis |
| Redirect `/feed`, `/rss`, `/favicon.ico`, `/apple-touch-icon*` | `next.config.ts` `redirects()` | `public/_redirects` |
| Content-Type OG image / icon | otomatis | `public/_headers` |
| Analytics | `@vercel/analytics` + Speed Insights | Hanya aktif saat build di Vercel. Opsional: Cloudflare Web Analytics via `NEXT_PUBLIC_CF_BEACON_TOKEN` |

Kenapa static export dan bukan OpenNext (`@opennextjs/cloudflare`)? Sudah dicoba: bundel Worker OpenNext
= **3,39 MiB gzip** (batas Workers Free = 3 MiB), karena seluruh data konten (`src/data/*.ts`, ±6 MB)
ikut masuk ke Worker — dan terus membesar tiap hari. Dengan static export, Worker hanya berisi API kecil,
semua halaman jadi file statis (±3.100 file, ±180 MB; batas Free: 20.000 file, 25 MiB/file).

## Perubahan kode di branch ini

- `next.config.ts`: `output: "export"`, `images.unoptimized`; redirect dipindah ke `public/_redirects`.
- `src/app/api/*` dan `src/lib/admin-auth.ts` dihapus → logikanya pindah ke `worker/index.ts`
  (format token sesi sama: HMAC-SHA256, cookie `wawasan_admin`, 7 hari). `/api/cron/daily-snapshot`
  (trigger manual opsional) **tidak dipindah** — snapshot harian sudah lewat GitHub Action.
- `/repo/daily/[y]/[m]/[d]`: `generateStaticParams` dari semua snapshot di `src/data/dailySnapshots/`.
  Snapshot rusak (mis. `2026-09-22.json` yang isinya `{}`) sekarang dilewati, jadi tidak bikin build gagal.
- `/repo/weekly/[y]/[w]`: prerender 13 minggu terakhir (opsi picker + sitemap); minggu yang gagal di-fetch
  dari Trendshift saat build dilewati, bukan bikin build gagal.
- `/repo/weekly?cadence=daily` → redirect di sisi klien (`CadenceRedirect`), karena export tidak bisa baca `searchParams`.
- OG image per halaman (`*/[slug]/opengraph-image.tsx`) di-prerender (`generateStaticParams`).
- Optimasi bundel klien (bonus, berlaku juga di Vercel): pencarian memuat `/search-index.json` saat modal
  dibuka; `/koleksi`, `/bandingkan`, dan artikel menerima data ringkas dari server. First Load JS halaman
  artikel turun dari **1,31 MB → ±114 KB**.
- `wrangler.jsonc`, `.node-version` (22), `.dev.vars.example`, `wrangler` di devDependencies.

## Setelan Workers Builds (Git integration)

Dashboard Cloudflare → **Workers & Pages → Create → Import a repository** → pilih GitHub
`fareza777/Wawasan-AI-Fable` (perlu install Cloudflare GitHub App sekali).

| Setelan | Nilai |
| --- | --- |
| Project / Worker name | `wawasan-ai` (harus sama dengan `name` di `wrangler.jsonc`) |
| Production branch | `main` |
| Root directory | `/` |
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy` |
| Non-production branch deploy command | `npx wrangler versions upload` (dapat preview URL per branch/PR) |
| Node version | otomatis dari `.node-version` (22). Alternatif: build variable `NODE_VERSION=22` |
| Builds for non-production branches | aktifkan kalau mau preview per PR |

Sebelum merge ke `main`, set **Production branch** sementara ke `cloudflare-migration` (atau biarkan
preview build) untuk mengetes di `https://wawasan-ai.<subdomain>.workers.dev`.

### Variabel

**Build variables** (Settings → Build → Variables and secrets) — dibaca saat `next build`:

| Nama | Nilai | Wajib |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | `https://www.wawasanai.com` | disarankan (default kode sudah sama) |
| `NEXT_PUBLIC_CF_BEACON_TOKEN` | token Cloudflare Web Analytics | opsional |
| `GITHUB_TOKEN` | GitHub fine-grained token **tanpa izin apa pun** (read-only public) | opsional — menaikkan limit API GitHub dari 60 ke 5.000 req/jam supaya jumlah bintang repo selalu muncul |

**Runtime variables / secrets Worker** (Settings → Variables and Secrets, atau `npx wrangler secret put NAMA`):

| Nama | Jenis | Dipakai untuk |
| --- | --- | --- |
| `ADMIN_EMAILS` | var (sudah di `wrangler.jsonc`) | daftar email admin |
| `ADMIN_PASSWORD` | secret | login `/admin` |
| `ADMIN_SESSION_SECRET` | secret | tanda tangan cookie sesi |
| `RESEND_API_KEY` | secret (opsional) | newsletter via Resend; tanpa ini mode demo |
| `RESEND_AUDIENCE_ID` | secret (opsional) | newsletter via Resend |

`CRON_SECRET` tidak dipakai lagi (route cron dihapus).

## Deploy harian otomatis

Tidak ada yang berubah di alur konten:

1. GitHub Action `.github/workflows/daily-snapshot.yml` (01:30 UTC ≈ 08:30 WIB) commit
   `snapshot: daily top repo …` ke `main`.
2. Commit editorial harian (`feat: editorial harian …`) juga push ke `main`.
3. Setiap push ke `main` → Workers Builds menjalankan `npm run build` + `npx wrangler deploy`.
   Build lokal ±1,5 menit; 2 commit/hari ≈ <300 menit/bulan (kuota Free 3.000 menit, 1 build bersamaan).
4. Hanya file yang berubah yang di-upload ulang ke Static Assets (berdasarkan hash), jadi tidak ada
   "Deployment Storage" yang menumpuk seperti di Vercel.

### Build tahan macet

Build pertama di Workers Builds sempat macet: halaman arsip harian butuh >60 detik karena request ke
`api.github.com` (jumlah bintang) tanpa timeout dan IP builder bersama gampang kena rate limit (60 req/jam).
Perbaikannya (`src/lib/githubMeta.ts`, `src/lib/trendshift.ts`, `next.config.ts`):

- request GitHub timeout 5 detik, Trendshift 15 detik;
- hasil gagal di-cache, dan setelah GitHub membalas 403/429 atau timeout, build berhenti memanggil GitHub
  (halaman tetap jadi, hanya tanpa angka bintang);
- `staticPageGenerationTimeout: 180`;
- opsional build variable `GITHUB_TOKEN` untuk limit 5.000 req/jam.

Build penuh di Workers Builds ±3–4 menit.

Catatan: data live Trendshift (Top Daily/Weekly) dan jumlah bintang GitHub kini diambil **saat build**,
bukan tiap jam (ISR). Karena ada minimal 2 build per hari, data tetap segar harian.

## Pindah domain wawasanai.com + www ke Cloudflare

Workers Custom Domains butuh zona DNS di Cloudflare (paket Free cukup). Domain terdaftar di **Vercel**
(registrar), jadi:

1. Cloudflare Dashboard → **Add a domain** → `wawasanai.com` → paket **Free**. Cloudflare memindai DNS lama;
   **cek dan salin semua record** (terutama MX/TXT kalau ada email/verifikasi) sebelum lanjut.
2. Catat 2 nameserver dari Cloudflare (mis. `xxx.ns.cloudflare.com`).
3. Vercel → Domains → `wawasanai.com` → **Nameservers → Edit** → isi 2 nameserver Cloudflare.
   - **Selama tim Vercel masih tertagih (402 / overdue), dashboard Vercel bisa membatasi aksi ini.** Belum bisa
     dipastikan; kalau tombolnya terkunci, beresi dulu tagihan/dispute di Vercel atau minta Support Vercel
     mengganti nameserver. Propagasi bisa sampai 48 jam.
4. Setelah zona aktif di Cloudflare: Worker `wawasan-ai` → **Settings → Domains & Routes → Add → Custom domain**
   → `wawasanai.com` dan `www.wawasanai.com` (Cloudflare membuat DNS + sertifikat otomatis).
5. Situs memakai canonical `https://www.wawasanai.com`. Opsional: redirect apex → www lewat
   **Rules → Redirect Rules** (gratis).
6. Jangka panjang: domain tetap harus diperpanjang di Vercel (akun harus beres) **atau** transfer ke
   Cloudflare Registrar (harga modal). Transfer registrar biasanya baru bisa 60 hari setelah registrasi/transfer
   terakhir dan butuh kode EPP dari Vercel.

## Development lokal

```bash
npm ci
npm run dev            # Next.js dev server (API /api/* tidak tersedia di sini)
cp .dev.vars.example .dev.vars   # isi ADMIN_PASSWORD dst.
npm run preview        # next build + wrangler dev → http://localhost:8787 (situs + API lengkap)
```

## Fitur yang berbeda di Cloudflare

- Tidak ada ISR: konten/Trendshift/bintang GitHub diperbarui per build (≥2x sehari), bukan per jam.
- Arsip mingguan hanya 13 minggu terakhir yang tersedia (sebelumnya minggu apa saja di-fetch on-demand);
  arsip harian hanya untuk tanggal yang punya snapshot valid (sama seperti sebelumnya).
- `/api/cron/daily-snapshot` dihapus.
- Vercel Analytics/Speed Insights tidak aktif; dashboard `/admin` masih menautkan ke Vercel Analytics.
- Sesi admin lama (cookie dari Vercel) tidak berlaku kalau `ADMIN_SESSION_SECRET` diganti — cukup login ulang.
