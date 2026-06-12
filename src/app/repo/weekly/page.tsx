import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import ListHeader from "@/components/ListHeader";
import TrendingRepoView from "@/components/TrendingRepoView";

export const metadata: Metadata = {
  title: "Top Weekly Repo",
  description:
    "10 repositori GitHub trending mingguan dari Trendshift, dengan konteks editorial Wawasan AI.",
};

export const revalidate = 21_600;

type Props = { searchParams: Promise<{ cadence?: string }> };

export default async function WeeklyRepoPage({ searchParams }: Props) {
  const { cadence } = await searchParams;
  if (cadence === "daily") redirect("/repo/daily");

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
          kicker="// top weekly"
          title="Top Weekly Repo"
          description="Repositori GitHub dengan momentum tertinggi minggu ini — diambil dari peringkat mingguan Trendshift, lalu disajikan dengan konteks editorial Wawasan AI."
        />
      </div>

      <TrendingRepoView cadence="weekly" currentPath="/repo/weekly" />
    </div>
  );
}
