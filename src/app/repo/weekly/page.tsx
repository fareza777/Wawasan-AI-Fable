import type { Metadata } from "next";
import Link from "next/link";
import ListHeader from "@/components/ListHeader";
import TrendingCadenceTabs from "@/components/TrendingCadenceTabs";
import TrendingRepoView from "@/components/TrendingRepoView";
import { TrendCadence } from "@/lib/trendshift";

export const metadata: Metadata = {
  title: "Top Trending Repo",
  description:
    "10 repositori GitHub trending harian dan mingguan dari Trendshift, dengan konteks editorial Wawasan AI.",
};

export const revalidate = 3600;

type Props = { searchParams: Promise<{ cadence?: string }> };

export default async function TrendingRepoPage({ searchParams }: Props) {
  const { cadence } = await searchParams;
  const mode: TrendCadence = cadence === "daily" ? "daily" : "weekly";
  const isDaily = mode === "daily";

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
          kicker={isDaily ? "// top daily" : "// top weekly"}
          title={isDaily ? "Top Daily Repo" : "Top Weekly Repo"}
          description={
            isDaily
              ? "Repositori GitHub dengan momentum tertinggi hari ini — diambil dari peringkat harian Trendshift, lalu disajikan dengan konteks editorial Wawasan AI."
              : "Repositori GitHub dengan momentum tertinggi minggu ini — diambil dari peringkat mingguan Trendshift, lalu disajikan dengan konteks editorial Wawasan AI."
          }
        />
      </div>

      <div className="fade-up mt-8">
        <TrendingCadenceTabs active={mode} />
      </div>

      <TrendingRepoView
        cadence={mode}
        currentPath={isDaily ? "/repo/weekly?cadence=daily" : "/repo/weekly"}
      />
    </div>
  );
}
