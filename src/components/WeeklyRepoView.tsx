import Link from "next/link";
import WeeklyRepoCard from "@/components/WeeklyRepoCard";
import WeeklyWeekPicker from "@/components/WeeklyWeekPicker";
import { repos } from "@/data/repos";
import { fetchGitHubStats } from "@/lib/githubMeta";
import {
  fetchAvailableWeeklyPeriods,
  fetchWeeklyTrendingRepos,
  WeeklyPeriod,
} from "@/lib/trendshift";
import { formatTanggal } from "@/lib/format";
import { getIndonesianDescription, getWeeklyHighlights } from "@/lib/weeklyId";

function findReview(githubUrl: string) {
  const match = githubUrl.match(/github\.com\/([^/]+\/[^/]+)/i);
  if (!match) return undefined;
  const full = match[1].toLowerCase();
  return repos.find((r) => r.link?.toLowerCase().includes(full));
}

export default async function WeeklyRepoView({
  period,
  currentPath,
}: {
  period?: { year: number; week: number };
  currentPath: string;
}) {
  const [data, periods] = await Promise.all([
    fetchWeeklyTrendingRepos(period),
    fetchAvailableWeeklyPeriods(),
  ]);

  const today = new Date().toISOString().slice(0, 10);

  const enriched = await Promise.all(
    data.repos.map(async (repo) => {
      const review = findReview(repo.githubUrl);
      const stats = await fetchGitHubStats(repo.githubUrl);
      return {
        repo,
        stats,
        reviewHref: review ? `/repo/${review.slug}` : undefined,
        description: getIndonesianDescription(repo, review),
        highlights: getWeeklyHighlights(repo, review),
      };
    }),
  );

  const reviewedCount = enriched.filter((e) => e.reviewHref).length;

  const periodList: WeeklyPeriod[] = periods.length
    ? periods
    : [data.period];

  return (
    <>
      <div className="panel-white fade-up mt-10 flex flex-col gap-4 rounded-2xl border border-neon-500/20 p-5 sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-neon-400">
              {data.weekLabel}
            </p>
            <p className="mt-1 text-sm text-slate-300">
              {reviewedCount} dari 10 repo sudah punya review mendalam di Wawasan AI.
            </p>
          </div>
          <div className="text-sm text-slate-400">
            Diperbarui {formatTanggal(today)} · Sumber{" "}
            <a
              href={data.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neon-400 hover:underline"
            >
              Trendshift
            </a>
          </div>
        </div>
        <WeeklyWeekPicker periods={periodList} currentPath={currentPath} />
      </div>

      <ol className="fade-up delay-1 mt-10 space-y-4" aria-label="Top Weekly Repo">
        {enriched.map(({ repo, stats, reviewHref, description, highlights }) => (
          <li key={repo.fullName}>
            <WeeklyRepoCard
              repo={repo}
              description={description}
              highlights={highlights}
              reviewHref={reviewHref}
              stars={stats?.stars}
              forks={stats?.forks}
            />
          </li>
        ))}
      </ol>

      <section className="panel-white fade-up delay-2 mt-12 rounded-2xl border p-6 sm:p-8">
        <h2 className="text-lg font-bold text-slate-100">Tentang data ini</h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-300">
          Peringkat mingguan diambil dari{" "}
          <a
            href="https://trendshift.io/weekly"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neon-400 hover:underline"
          >
            Trendshift
          </a>
          — platform yang melacak repositori GitHub naik daun berdasarkan momentum
          percakapan, bukan sekadar jumlah bintang. Wawasan AI menyajikan daftar ini
          sebagai radar awal: repo mana yang layak dipelajari, diuji, dan mungkin
          direview lebih dalam.
        </p>
      </section>
    </>
  );
}
