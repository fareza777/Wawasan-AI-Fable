import type { Metadata } from "next";
import Link from "next/link";
import { models } from "@/data/models";
import ListHeader from "@/components/ListHeader";
import ReviewCard from "@/components/ReviewCard";
import { scoreColor } from "@/components/Score";

export const metadata: Metadata = {
  title: "Skor & Review Model LLM",
  description:
    "Papan skor model LLM versi Indonesia: Claude, GPT, Gemini, DeepSeek, Qwen, Llama — termasuk skor khusus kemampuan bahasa Indonesia yang tidak ada di benchmark global.",
};

export default function ModelPage() {
  const sorted = [...models].sort((a, b) => b.score - a.score);
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <ListHeader
        kicker="// skor model"
        title="Papan Skor Model LLM"
        description="Model bahasa besar dinilai dari pemakaian nyata: penalaran, coding, kecepatan, harga — dan satu hal yang tidak diukur benchmark global: kualitas bahasa Indonesianya."
      />

      <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-2xl border border-ink-700">
        <div className="hidden grid-cols-[3rem_1fr_8rem_5rem] gap-4 border-b border-ink-700 bg-ink-800/80 px-5 py-3 font-mono text-xs uppercase tracking-wider text-slate-400 sm:grid">
          <span>#</span>
          <span>Model</span>
          <span className="text-right">B. Indonesia</span>
          <span className="text-right">Skor</span>
        </div>
        {sorted.map((m, i) => {
          const idScore = m.scores.find((s) => s.label === "Bahasa Indonesia")?.value;
          return (
            <Link
              key={m.slug}
              href={`/model/${m.slug}`}
              className={`grid grid-cols-[3rem_1fr_5rem] items-center gap-4 border-b border-ink-700/60 bg-ink-900/60 px-5 py-4 transition-colors last:border-0 hover:bg-ink-800/80 sm:grid-cols-[3rem_1fr_8rem_5rem] ${
                i === 0 ? "rank-one" : ""
              }`}
            >
              <span className="font-mono text-lg font-bold text-slate-500">
                {i === 0 ? "👑" : String(i + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0">
                <div className="font-bold text-slate-100">{m.name}</div>
                <div className="truncate text-sm text-slate-400">{m.tagline}</div>
              </div>
              <span className="hidden text-right font-mono text-slate-300 sm:block">
                {idScore?.toFixed(1) ?? "—"}
              </span>
              <span className={`text-right font-mono text-xl font-bold ${scoreColor(m.score)}`}>
                {m.score.toFixed(1)}
              </span>
            </Link>
          );
        })}
      </div>

      <h2 className="mt-16 text-2xl font-extrabold text-slate-50">Review Lengkap</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sorted.map((m) => (
          <ReviewCard key={m.slug} review={m} basePath="/model" />
        ))}
      </div>
    </div>
  );
}
