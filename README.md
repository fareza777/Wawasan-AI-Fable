# Wawasan AI 🇮🇩

**Portal review AI Indonesia** — review repo GitHub, skor model LLM, review stack & tools, dan berita/wawasan AI. Ditulis dari pemakaian nyata oleh [Fajar M Reza](https://prompt-lab.xyz).

## Rubrik

- **Review Repo GitHub** (`/repo`) — OpenClaw, Hermes, DeerFlow, n8n, Dify, Ollama
- **Review Model LLM** (`/model`) — papan skor dengan penilaian khusus kemampuan bahasa Indonesia
- **Review Stack & Tools** (`/stack`) — Claude Code, Cursor, Codex, Windsurf, Cline
- **Berita & Wawasan** (`/berita`) — analisis, tutorial, dan opini dengan konteks Indonesia

## Stack

- [Next.js 15](https://nextjs.org) (App Router, static generation)
- [Tailwind CSS 4](https://tailwindcss.com)
- TypeScript

## Menjalankan Lokal

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

## Menambah Konten

Semua konten ada di `src/data/`:

- `repos.ts` — review repo GitHub
- `models.ts` — review model LLM
- `stacks.ts` — review tools
- `berita.ts` — artikel berita & wawasan

Tambahkan entri baru ke array, dan halaman daftar + detail + sitemap akan ter-update otomatis saat build.

## Deploy

Siap deploy ke [Vercel](https://vercel.com) tanpa konfigurasi tambahan: import repo, dan selesai. Setelah punya domain sendiri, ganti `metadataBase` di `src/app/layout.tsx` serta `BASE` di `src/app/sitemap.ts`.
