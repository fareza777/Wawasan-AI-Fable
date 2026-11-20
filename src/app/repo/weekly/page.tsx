import type { Metadata } from "next";
import Link from "next/link";
import ListHeader from "@/components/ListHeader";
import TrendingRepoView from "@/components/TrendingRepoView";
import CadenceRedirect from "@/components/CadenceRedirect";
import { canonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Top Weekly Repo",
  description:
    "10 repositori GitHub trending mingguan dari Trendshift, dengan konteks editorial Wawasan AI.",
  ...canonicalPath("/repo/weekly"),
};

export default async function WeeklyRepoPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <CadenceRedirect />
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
