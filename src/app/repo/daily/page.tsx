import type { Metadata } from "next";
import Link from "next/link";
import ListHeader from "@/components/ListHeader";
import TrendingCadenceTabs from "@/components/TrendingCadenceTabs";
import TrendingRepoView from "@/components/TrendingRepoView";

export const metadata: Metadata = {
  title: "Top Daily Repo",
  description:
    "10 repositori GitHub trending harian dari Trendshift, dengan konteks editorial Wawasan AI.",
};

export const revalidate = 3600;

export default function DailyRepoPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <Link
        href="/repo"
        className="text-sm font-medium text-neon-400 hover:underline"
      >
        ← Semua Review Repo
      </Link>

      <div className="mt-6">
        <ListHeader
          kicker="// top daily"
          title="Top Daily Repo"
          description="Repositori GitHub dengan momentum tertinggi hari ini — diambil dari peringkat harian Trendshift, lalu disajikan dengan konteks editorial Wawasan AI."
        />
      </div>

      <div className="fade-up mt-8">
        <TrendingCadenceTabs active="daily" />
      </div>

      <TrendingRepoView cadence="daily" currentPath="/repo/daily" />
    </div>
  );
}
