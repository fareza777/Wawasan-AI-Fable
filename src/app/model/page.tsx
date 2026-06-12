import type { Metadata } from "next";
import Link from "next/link";
import { models } from "@/data/models";
import ListHeader from "@/components/ListHeader";
import ContentFilters from "@/components/ContentFilters";
import { scoreColor } from "@/components/Score";
import { canonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Skor & Review Model LLM",
  description:
    "Review model LLM dari pemakaian nyata — penalaran, coding, kecepatan, dan harga.",
  ...canonicalPath("/model"),
};

export default function ModelPage() {
  const sorted = [...models].sort((a, b) => b.score - a.score);
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <ListHeader
        kicker="// review model"
        title="Review Model LLM"
        description="Model bahasa besar dinilai dari penalaran, coding, kecepatan, dan rasio harga/performa."
      />

      <div className="mt-6 text-center">
        <Link
          href="/bandingkan"
          className="panel-white inline-flex items-center gap-2 rounded-xl border border-violet-500/30 px-5 py-2.5 text-sm font-semibold text-violet-300 hover:border-violet-400/50"
        >
          Bandingkan 2 model side-by-side →
        </Link>
      </div>

      <div className="panel-white mx-auto mt-10 max-w-4xl overflow-hidden rounded-2xl border border-ink-700">
        <div className="hidden grid-cols-[3rem_1fr_8rem_5rem] gap-4 border-b border-ink-700/40 bg-ink-800/80 px-5 py-3 font-mono text-xs uppercase tracking-wider text-slate-400 sm:grid">
          <span>#</span>
          <span>Model</span>
          <span className="text-right">Coding</span>
          <span className="text-right">Skor</span>
        </div>
        {sorted.map((m, i) => {
          const codingScore = m.scores.find((s) => s.label === "Coding")?.value;
          return (
            <Link
              key={m.slug}
              href={`/model/${m.slug}`}
              className={`grid grid-cols-[3rem_1fr_5rem] items-center gap-4 border-b border-ink-700/40 px-5 py-4 transition-colors last:border-0 hover:bg-ink-800/80 sm:grid-cols-[3rem_1fr_8rem_5rem] ${
                i === 0 ? "rank-one" : ""
              }`}
            >
              <span className="font-mono text-lg font-bold text-slate-500">
                {i === 0 ? "👑" : String(i + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0">
                <div className="font-bold text-slate-100">{m.name}</div>
                <div className="truncate text-sm text-slate-300">{m.tagline}</div>
              </div>
              <span className="hidden text-right font-mono text-slate-300 sm:block">
                {codingScore?.toFixed(1) ?? "—"}
              </span>
              <span className={`text-right font-mono text-xl font-bold ${scoreColor(m.score)}`}>
                {m.score.toFixed(1)}
              </span>
            </Link>
          );
        })}
      </div>

      <h2 className="mt-16 text-2xl font-extrabold text-slate-50">Review Lengkap</h2>
      <ContentFilters items={models} type="review" basePath="/model" mode="model" />

      <div className="panel-white mt-12 rounded-2xl border border-ink-700/50 bg-gradient-to-br from-ink-800/60 to-ink-900/40 p-6">
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300">
          Tentang skor di halaman ini
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-400">
          Skor di Wawasan AI (0-10) adalah <strong className="text-slate-200">rating editorial</strong> yang
          menggabungkan penalaran, coding, kecepatan, dan rasio harga/performa — bukan benchmark
          murni. Untuk benchmark independen lintas model, lihat{" "}
          <a
            href="https://artificialanalysis.ai/leaderboards/models"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neon-400 hover:underline"
          >
            Artificial Analysis
          </a>
          . Pada review tertentu kami cantumkan <code className="text-xs text-slate-300">aa_intelligence_index</code> sebagai
          pembanding — skala AA berbeda (0-100, median industri ≈ 20).
        </p>
      </div>
    </div>
  );
}
