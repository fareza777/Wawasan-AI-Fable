import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tentang Wawasan AI & Fajar M Reza",
  description:
    "Wawasan AI adalah portal review AI Indonesia yang ditulis Fajar M Reza — ASN dan praktisi AI yang mengoprek OpenClaw, Hermes, DeerFlow, Claude Code, dan berbagai stack AI lainnya.",
};

const eksplorasi = [
  "OpenClaw — asisten AI personal self-hosted",
  "Hermes — agent otomasi",
  "DeerFlow — deep research multi-agent",
  "Claude Code — agentic coding di terminal",
  "Cursor, Codex, Windsurf — editor & agen coding AI",
  "n8n & Ollama — otomasi workflow dan LLM lokal",
];

const layanan = [
  {
    judul: "Konsultasi Adopsi AI",
    desc: "Membantu organisasi memetakan use case AI yang realistis — mana yang layak diotomasi sekarang, mana yang masih hype.",
  },
  {
    judul: "Setup Otomasi & AI Agent",
    desc: "Perancangan dan pemasangan workflow otomasi (n8n, agent self-hosted) yang aman untuk data internal organisasi.",
  },
  {
    judul: "Pelatihan & Workshop",
    desc: "Pelatihan praktis AI untuk tim — dari menulis prompt yang efektif sampai membangun chatbot dokumen internal.",
  },
  {
    judul: "Pengembangan Website & Aplikasi AI",
    desc: "Pembuatan website dan aplikasi berbasis AI, dari landing page sampai aplikasi dengan integrasi LLM.",
  },
];

export default function TentangPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="font-mono text-sm font-semibold uppercase tracking-widest text-neon-400">
        // tentang
      </p>
      <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-50 sm:text-4xl">
        Halo, saya <span className="text-gradient">Fajar M Reza</span> 👋
      </h1>

      <div className="prose-id mt-8">
        <p>
          Saya seorang ASN (Aparatur Sipil Negara) dengan satu obsesi di luar jam
          kerja: dunia AI. Bukan sekadar mengikuti beritanya — saya mengoprek
          langsung. Memasang agent di server pribadi, merangkai otomasi,
          membandingkan model, dan mencatat apa yang benar-benar berhasil (dan
          yang tidak).
        </p>
        <p>
          Wawasan AI lahir dari satu kegelisahan sederhana: konten AI berbahasa
          Indonesia masih didominasi berita terjemahan dan hype, sementara
          pertanyaan praktisnya — repo mana yang layak dicoba? model mana yang
          jago bahasa Indonesia? tool mana yang sepadan harganya? — nyaris tidak
          ada yang menjawab dengan serius. Situs ini adalah usaha saya mengisi
          celah itu.
        </p>
      </div>

      <h2 className="mt-12 text-xl font-bold text-slate-100">Yang Pernah Saya Oprek</h2>
      <ul className="mt-5 grid gap-3 sm:grid-cols-2">
        {eksplorasi.map((e) => (
          <li
            key={e}
            className="rounded-xl border border-ink-700 bg-ink-900/60 px-4 py-3 text-sm text-slate-300"
          >
            {e}
          </li>
        ))}
      </ul>

      <h2 className="mt-12 text-xl font-bold text-slate-100">Proyek Saya</h2>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <a
          href="https://prompt-lab.xyz"
          target="_blank"
          rel="noopener noreferrer"
          className="card-glow rounded-2xl p-5"
        >
          <h3 className="font-bold text-slate-100">Prompt Lab ↗</h3>
          <p className="mt-1.5 text-sm text-slate-400">
            Laboratorium eksperimen prompt — eksplorasi teknik prompting untuk hasil maksimal.
          </p>
        </a>
        <a
          href="https://prima-rawajati.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="card-glow rounded-2xl p-5"
        >
          <h3 className="font-bold text-slate-100">Prima Rawajati ↗</h3>
          <p className="mt-1.5 text-sm text-slate-400">
            Proyek web untuk komunitas — bukti bahwa teknologi harus bermanfaat nyata.
          </p>
        </a>
      </div>

      <h2 className="mt-12 text-xl font-bold text-slate-100">Layanan (Segera)</h2>
      <p className="mt-3 text-sm leading-relaxed text-slate-400">
        Seiring berkembangnya Wawasan AI, saya membuka layanan untuk membantu
        organisasi dan individu di Indonesia mengadopsi AI secara realistis:
      </p>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {layanan.map((l) => (
          <div key={l.judul} className="rounded-2xl border border-ink-700 bg-ink-900/60 p-5">
            <h3 className="font-bold text-neon-400">{l.judul}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{l.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-neon-500/30 bg-gradient-to-br from-ink-800 to-ink-900 p-8 text-center">
        <h2 className="text-xl font-bold text-slate-50">Mari Terhubung</h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-400">
          Punya repo atau tool yang ingin diulas? Tidak setuju dengan skor saya?
          Atau ingin berdiskusi soal adopsi AI di organisasimu? Saya senang mendengarnya.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href="mailto:fajar.mreza@gmail.com"
            className="rounded-xl bg-gradient-to-r from-neon-500 to-violet-glow px-6 py-3 text-sm font-bold text-ink-950 transition-opacity hover:opacity-90"
          >
            Kirim Email
          </a>
          <Link
            href="/berita"
            className="rounded-xl border border-ink-600 bg-ink-800/60 px-6 py-3 text-sm font-bold text-slate-200 transition-colors hover:border-neon-400/50"
          >
            Baca Tulisan Saya
          </Link>
        </div>
      </div>
    </div>
  );
}
