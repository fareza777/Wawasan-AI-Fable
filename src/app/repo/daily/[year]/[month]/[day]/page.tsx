import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ListHeader from "@/components/ListHeader";
import TrendingCadenceTabs from "@/components/TrendingCadenceTabs";
import TrendingRepoView from "@/components/TrendingRepoView";

export const revalidate = 21_600;

type Props = { params: Promise<{ year: string; month: string; day: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { year, month, day } = await params;
  const date = `${year}-${month}-${day}`;
  return {
    title: `Top Daily Repo — ${date}`,
    description: `Arsip Top Daily Repo ${date} dari Trendshift.`,
  };
}

export default async function DailyArchivePage({ params }: Props) {
  const { year, month, day } = await params;
  const y = Number(year);
  const m = Number(month);
  const d = Number(day);

  if (
    !Number.isFinite(y) || !Number.isFinite(m) || !Number.isFinite(d) ||
    m < 1 || m > 12 || d < 1 || d > 31
  ) {
    notFound();
  }

  const date = `${year}-${month}-${day}`;
  const currentPath = `/repo/daily/${year}/${month}/${day}`;

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <Link
        href="/repo/weekly?cadence=daily"
        className="text-sm font-medium text-neon-400 hover:underline"
      >
        ← Top Daily hari ini
      </Link>

      <div className="mt-6">
        <ListHeader
          kicker="// arsip harian"
          title="Top Daily Repo"
          description={`Arsip peringkat harian ${date} — snapshot Trendshift yang disimpan pada hari itu.`}
        />
      </div>

      <div className="fade-up mt-8">
        <TrendingCadenceTabs active="daily" />
      </div>

      <TrendingRepoView
        cadence="daily"
        period={{ date }}
        currentPath={currentPath}
      />
    </div>
  );
}
