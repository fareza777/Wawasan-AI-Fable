import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ListHeader from "@/components/ListHeader";
import TrendingCadenceTabs from "@/components/TrendingCadenceTabs";
import TrendingRepoView from "@/components/TrendingRepoView";

export const revalidate = 21_600;

type Props = { params: Promise<{ year: string; week: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { year, week } = await params;
  return {
    title: `Top Weekly Repo — Minggu ke-${week}, ${year}`,
    description: `Arsip Top Weekly Repo minggu ke-${week} tahun ${year} dari Trendshift.`,
  };
}

export default async function WeeklyArchivePage({ params }: Props) {
  const { year, week } = await params;
  const y = Number(year);
  const w = Number(week);

  if (!Number.isFinite(y) || !Number.isFinite(w) || w < 1 || w > 53) {
    notFound();
  }

  const currentPath = `/repo/weekly/${year}/${week}`;

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <Link
        href="/repo/weekly"
        className="text-sm font-medium text-neon-400 hover:underline"
      >
        ← Top Weekly minggu ini
      </Link>

      <div className="mt-6">
        <ListHeader
          kicker="// arsip mingguan"
          title="Top Weekly Repo"
          description={`Arsip peringkat minggu ke-${week}, ${year} — data historis dari Trendshift.`}
        />
      </div>

      <div className="fade-up mt-8">
        <TrendingCadenceTabs active="weekly" />
      </div>

      <TrendingRepoView
        cadence="weekly"
        period={{ year: y, week: w }}
        currentPath={currentPath}
      />
    </div>
  );
}
