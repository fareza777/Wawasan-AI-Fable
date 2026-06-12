import type { Metadata } from "next";
import Link from "next/link";
import { repos } from "@/data/repos";
import { models } from "@/data/models";
import { stacks } from "@/data/stacks";
import { berita } from "@/data/berita";
import { canonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Tentang Wawasan AI",
  description:
    "Wawasan AI adalah portal review AI Indonesia — review repo GitHub, skor model LLM, ulasan tools coding AI, dan berita dengan konteks lokal.",
  ...canonicalPath("/tentang"),
};

const layanan = [
  {
    judul: "Konsultasi Adopsi AI",
    desc: "Memetakan use case AI yang realistis untuk organisasi — mana yang layak diotomasi sekarang.",
  },
  {
    judul: "Setup Otomasi & AI Agent",
    desc: "Perancangan workflow otomasi dan agent self-hosted yang aman untuk data internal.",
  },
  {
    judul: "Pelatihan & Workshop",
    desc: "Pelatihan praktis AI untuk tim — dari prompt engineering sampai chatbot dokumen internal.",
  },
  {
    judul: "Pengembangan Aplikasi AI",
    desc: "Pembuatan website dan aplikasi berbasis AI dengan integrasi LLM.",
  },
];

const rubrik = [
  { href: "/repo/daily", label: "Top Daily Repo", count: "10" },
  { href: "/repo/weekly", label: "Top Weekly Repo", count: "10" },
  { href: "/repo", label: "Review Repo GitHub", count: String(repos.length) },
  { href: "/model", label: "Skor Model LLM", count: String(models.length) },
  { href: "/stack", label: "Review Tools", count: String(stacks.length) },
  { href: "/berita", label: "Berita & Wawasan", count: String(berita.length) },
];

export default function TentangPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <p className="font-mono text-sm font-semibold uppercase tracking-widest text-neon-400">// tentang kami</p>
      <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-50 sm:text-4xl">
        <span className="text-gradient">Wawasan AI</span> — Navigasi Dunia AI Indonesia
      </h1>

      <div className="prose-id mt-8">
        <p>
          Wawasan AI adalah portal review dan wawasan AI berbahasa Indonesia. Kami menguji repo
          open-source, membandingkan model LLM, mengevaluasi tools coding AI, dan menulis analisis
          dengan konteks lokal — agar organisasi dan profesional di Indonesia bisa membuat keputusan
          AI yang lebih cerdas.
        </p>
        <p>
          Konten AI berbahasa Indonesia masih didominasi terjemahan berita dan hype. Wawasan AI
          mengisi celah itu dengan review mendalam: repo mana yang layak dicoba, model mana yang
          masuk akal untuk workload-mu, dan tool mana yang sepadan harganya.
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {rubrik.map((r) => (
          <Link key={r.href} href={r.href} className="card-glow rounded-2xl p-5">
            <div className="font-mono text-2xl font-extrabold text-gradient">{r.count}</div>
            <h3 className="mt-1 font-bold text-slate-100">{r.label}</h3>
          </Link>
        ))}
      </div>

      <h2 className="mt-14 text-xl font-bold text-slate-100">Layanan Perusahaan</h2>
      <p className="mt-3 text-sm leading-relaxed text-slate-300">
        Wawasan AI juga membantu organisasi mengadopsi AI secara realistis dan aman:
      </p>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {layanan.map((l) => (
          <div key={l.judul} className="panel-white rounded-2xl border p-5">
            <h3 className="font-bold text-neon-400">{l.judul}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-300">{l.desc}</p>
          </div>
        ))}
      </div>

      <div className="panel-white mt-12 rounded-2xl border border-neon-500/30 p-8 text-center">
        <h2 className="text-xl font-bold text-slate-50">Hubungi Wawasan AI</h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-300">
          Punya produk yang ingin direview? Tidak setuju dengan skor kami? Atau butuh bantuan adopsi AI
          di organisasimu?
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href="mailto:hello@wawasan-ai.id"
            className="rounded-xl bg-gradient-to-r from-neon-500 to-violet-glow px-6 py-3 text-sm font-bold text-ink-950 transition-opacity hover:opacity-90"
          >
            hello@wawasan-ai.id
          </a>
          <Link
            href="/berita"
            className="rounded-xl border border-ink-600 bg-ink-800/60 px-6 py-3 text-sm font-bold text-slate-200 transition-colors hover:border-neon-400/50"
          >
            Baca Wawasan Terbaru
          </Link>
        </div>
      </div>
    </div>
  );
}
