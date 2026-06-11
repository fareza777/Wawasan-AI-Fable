import type { Metadata } from "next";
import Link from "next/link";
import ListHeader from "@/components/ListHeader";
import WeeklyRepoView from "@/components/WeeklyRepoView";

export const metadata: Metadata = {
  title: "Top Weekly Repo",
  description:
    "10 repositori GitHub paling trending minggu ini — kurasi momentum dari Trendshift, dengan konteks editorial Wawasan AI.",
};

export const revalidate = 21_600;

export default function WeeklyRepoPage() {
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

      <WeeklyRepoView currentPath="/repo/weekly" />
    </div>
  );
}
