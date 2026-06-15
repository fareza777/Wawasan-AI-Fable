import { notFound } from "next/navigation";
import Link from "next/link";
import ListHeader from "@/components/ListHeader";
import TrendingRepoView from "@/components/TrendingRepoView";
import { dailySnapshotExists } from "@/lib/daily-snapshot-store";
import { formatTanggal } from "@/lib/format";
import { canonicalPath } from "@/lib/seo";

export const revalidate = 21_600;

type Props = { params: Promise<{ year: string; month: string; day: string }> };

function toIsoDate(year: string, month: string, day: string): string {
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { year, month, day } = await params;
  const date = toIsoDate(year, month, day);
  const path = `/repo/daily/${year}/${month.padStart(2, "0")}/${day.padStart(2, "0")}`;
  return {
    title: `Top Daily Repo — ${formatTanggal(date)}`,
    description: `Arsip Top Daily Repo ${formatTanggal(date)} dari Trendshift.`,
    ...canonicalPath(path),
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

  const iso = toIsoDate(year, month, day);
  if (!(await dailySnapshotExists(iso))) {
    notFound();
  }

  const currentPath = `/repo/daily/${year}/${month.padStart(2, "0")}/${day.padStart(2, "0")}`;

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <Link
        href="/repo/daily"
        className="text-sm font-medium text-neon-400 hover:underline"
      >
        ← Top Daily hari ini
      </Link>

      <div className="mt-6">
        <ListHeader
          kicker="// arsip harian"
          title="Top Daily Repo"
          description={`Arsip peringkat ${formatTanggal(iso)} — snapshot Trendshift yang disimpan pada hari itu.`}
        />
      </div>

      <TrendingRepoView
        cadence="daily"
        period={{ date: iso }}
        currentPath={currentPath}
      />
    </div>
  );
}
