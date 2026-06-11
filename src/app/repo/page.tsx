import type { Metadata } from "next";
import Link from "next/link";
import { repos } from "@/data/repos";
import ListHeader from "@/components/ListHeader";
import ContentFilters from "@/components/ContentFilters";

export const metadata: Metadata = {
  title: "Review Repo GitHub AI",
  description:
    "Review mendalam proyek open-source AI terbaik di GitHub — dalam bahasa Indonesia.",
};

export default function RepoPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <ListHeader
        kicker="// review repo"
        title="Review Repo GitHub AI"
        description="Proyek open-source AI yang layak masuk radarmu — dari asisten personal sampai platform otomasi. Setiap repo diinstal, dioprek, dan dipakai langsung sebelum diulas."
      />

      <Link
        href="/repo/weekly"
        className="panel-white card-glow mt-10 flex flex-col gap-3 rounded-2xl border border-cyan-500/25 bg-gradient-to-br from-cyan-500/10 to-violet-glow/5 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6"
      >
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-neon-400">// top trending</p>
          <p className="mt-1 font-semibold text-slate-100">Top Daily &amp; Weekly Repo</p>
          <p className="mt-1 text-sm text-slate-400">
            Momentum trending harian dan mingguan dari Trendshift — repo yang sedang naik daun.
          </p>
        </div>
        <span className="inline-flex shrink-0 items-center gap-1 text-sm font-bold text-neon-400">
          Lihat peringkat
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14m-6-6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </Link>

      <ContentFilters items={repos} type="review" basePath="/repo" mode="repo" />
    </div>
  );
}
