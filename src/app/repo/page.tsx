import type { Metadata } from "next";
import Link from "next/link";
import { repos } from "@/data/repos";
import ListHeader from "@/components/ListHeader";
import ContentFilters from "@/components/ContentFilters";
import { canonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Review Repo GitHub AI",
  description:
    "Review mendalam proyek open-source AI terbaik di GitHub — dalam bahasa Indonesia.",
  ...canonicalPath("/repo"),
};

export default function RepoPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <ListHeader
        kicker="// review repo"
        title="Review Repo GitHub AI"
        description="Proyek open-source AI yang layak masuk radarmu — dari asisten personal sampai platform otomasi. Setiap repo diinstal, dioprek, dan dipakai langsung sebelum diulas."
      />

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        <Link
          href="/repo/daily"
          className="panel-white card-glow flex flex-col gap-3 rounded-2xl border border-cyan-500/25 bg-gradient-to-br from-cyan-500/10 to-violet-glow/5 p-5 sm:p-6"
        >
          <p className="font-mono text-xs uppercase tracking-widest text-neon-400">// top daily</p>
          <p className="font-semibold text-slate-100">Top Daily Repo</p>
          <p className="text-sm text-slate-400">Momentum harian dari Trendshift.</p>
          <span className="mt-auto inline-flex items-center gap-1 text-sm font-bold text-neon-400">
            Lihat peringkat →
          </span>
        </Link>
        <Link
          href="/repo/weekly"
          className="panel-white card-glow flex flex-col gap-3 rounded-2xl border border-violet-glow/25 bg-gradient-to-br from-violet-glow/10 to-neon-500/5 p-5 sm:p-6"
        >
          <p className="font-mono text-xs uppercase tracking-widest text-neon-400">// top weekly</p>
          <p className="font-semibold text-slate-100">Top Weekly Repo</p>
          <p className="text-sm text-slate-400">Peringkat mingguan + arsip.</p>
          <span className="mt-auto inline-flex items-center gap-1 text-sm font-bold text-neon-400">
            Lihat peringkat →
          </span>
        </Link>
      </div>

      <ContentFilters items={repos} type="review" basePath="/repo" mode="repo" />
    </div>
  );
}
