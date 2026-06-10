# Wawasan AI 🇮🇩

**Portal review AI Indonesia** — review repo GitHub, skor model LLM, review stack & tools, dan berita/wawasan AI. Ditulis dari pemakaian nyata oleh [Fajar M Reza](https://prompt-lab.xyz).

## Rubrik

- **Review Repo GitHub** (`/repo`) — 11 review: OpenClaw, Hermes, DeerFlow, n8n, Dify, Ollama, Open WebUI, LangGraph, Flowise, CrewAI, ComfyUI
- **Review Model LLM** (`/model`) — 11 model di papan skor, dengan penilaian khusus kemampuan bahasa Indonesia
- **Review Stack & Tools** (`/stack`) — 10 review: Claude Code, Cursor, Codex, Windsurf, Cline, Gemini CLI, Copilot, v0, Bolt.new, Aider
- **Berita & Wawasan** (`/berita`) — 10 artikel: analisis, tutorial, dan opini dengan konteks Indonesia

## Fitur

- **Pencarian global** — tombol Cari di navbar atau `Ctrl/⌘ + K`, mencari di seluruh review dan artikel
- **Profil lokal & Koleksi** — tombol "Masuk" membuat profil di perangkat (localStorage, tanpa server); bookmark review favorit ke halaman `/koleksi`
- **Reading progress bar**, tombol bagikan, score ring, animasi halus, font khusus (Space Grotesk + Inter + JetBrains Mono)
- **Newsletter form** di footer (saat ini via mailto; siap diganti provider seperti Mailchimp/Resend)

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
