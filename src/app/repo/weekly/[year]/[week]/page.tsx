import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ListHeader from "@/components/ListHeader";
import TrendingRepoView from "@/components/TrendingRepoView";
import { canonicalPath } from "@/lib/seo";
import { buildWeeklyPeriodOptions, fetchWeeklyTrendingRepos, type WeeklyPeriod } from "@/lib/trendshift";
import { listWeeklyArchiveSitemapEntries } from "@/lib/weekly-sitemap";

// Static export: prerender the weeks linked from the period picker (8) and the
// sitemap (12). Weeks Trendshift can't serve at build time are skipped instead of
// failing the build. Rebuilt on every deploy (daily commits).
export const dynamicParams = false;

export async function generateStaticParams() {
  const paths = new Set<string>(listWeeklyArchiveSitemapEntries().map((e) => e.path));
  try {
    const current = await fetchWeeklyTrendingRepos();
    const period = current.period && "week" in current.period ? (current.period as WeeklyPeriod) : null;
    for (const opt of buildWeeklyPeriodOptions(period, 13)) paths.add(opt.path);
  } catch {
    // keep sitemap-derived weeks only
  }

  const params: { year: string; week: string }[] = [];
  for (const p of paths) {
    const m = p.match(/^\/repo\/weekly\/(\d{4})\/(\d{1,2})$/);
    if (!m) continue;
    try {
      // Fetch is cached for the build, so the page render below reuses it.
      await fetchWeeklyTrendingRepos({ year: Number(m[1]), week: Number(m[2]) });
      params.push({ year: m[1], week: m[2] });
    } catch (error) {
      console.warn(`[weekly] skip ${p}:`, error instanceof Error ? error.message : error);
    }
  }
  return params;
}

type Props = { params: Promise<{ year: string; week: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { year, week } = await params;
  return {
    title: `Top Weekly Repo — Minggu ke-${week}, ${year}`,
    description: `Arsip Top Weekly Repo minggu ke-${week} tahun ${year} dari Trendshift.`,
    ...canonicalPath(`/repo/weekly/${year}/${week}`),
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

      <TrendingRepoView
        cadence="weekly"
        period={{ year: y, week: w }}
        currentPath={currentPath}
      />
    </div>
  );
}
