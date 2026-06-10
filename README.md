# Wawasan AI

**Portal review AI Indonesia** — review repo GitHub, model LLM, review stack & tools, dan berita/wawasan AI oleh tim editorial Wawasan AI.

## Rubrik

- **Review Repo GitHub** (`/repo`) — 11 review open-source AI
- **Review Model LLM** (`/model`) — 11 model dengan evaluasi bahasa Indonesia
- **Review Stack & Tools** (`/stack`) — 10 review tool coding AI
- **Berita & Wawasan** (`/berita`) — 10 artikel analisis, tutorial, dan opini

## Fitur

- **Pencarian global** — `Ctrl/⌘ + K`, full-text search termasuk isi artikel
- **Filter & sort** — di setiap halaman daftar rubrik
- **Koleksi & bookmark** — profil lokal, export/import JSON
- **Bandingkan model** — `/bandingkan` side-by-side
- **Tag pages** — `/tag/[tag]` agregasi lintas rubrik
- **Indeks A–Z** — `/indeks`
- **Changelog skor** — `/changelog` riwayat perubahan editorial
- **RSS feed** — `/feed.xml`
- **Mode terang/gelap** — toggle di navbar
- **Newsletter** — API Resend (atau mode demo lokal)
- **Analytics** — Plausible (opsional via env)
- **OG image** — auto-generated per share
- **GitHub stars** — live di halaman review repo

## Stack

- Next.js 15 (App Router, static generation)
- Tailwind CSS 4
- TypeScript

## Menjalankan Lokal

```bash
npm install
cp .env.example .env.local   # opsional
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

## Environment Variables

Lihat `.env.example` untuk `NEXT_PUBLIC_SITE_URL`, Plausible, dan Resend newsletter.

## Menambah Konten

Semua konten ada di `src/data/`:

- `repos.ts` — review repo GitHub
- `models.ts` — review model LLM
- `stacks.ts` — review tools
- `berita.ts` — artikel berita & wawasan
- `changelog.ts` — riwayat perubahan skor

## Deploy

Siap deploy ke Vercel: import repo, set env vars, selesai.
