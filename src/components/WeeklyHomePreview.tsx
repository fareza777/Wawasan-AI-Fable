import Link from "next/link";
import { repos } from "@/data/repos";
import { fetchGitHubStats } from "@/lib/githubMeta";
import { fetchWeeklyTrendingRepos } from "@/lib/trendshift";
import { getIndonesianDescription, translateTopic } from "@/lib/weeklyId";
import { scoreColor } from "./Score";

function findReview(githubUrl: string) {
  const match = githubUrl.match(/github\.com\/([^/]+\/[^/]+)/i);
  if (!match) return undefined;
  const full = match[1].toLowerCase();
  return repos.find((r) => r.link?.toLowerCase().includes(full));
}

export default async function WeeklyHomePreview() {
  const data = await fetchWeeklyTrendingRepos();
  const top5 = data.repos.slice(0, 5);

  const rows = await Promise.all(
    top5.map(async (repo) => {
      const review = findReview(repo.githubUrl);
      const stats = await fetchGitHubStats(repo.githubUrl);
      return {
        repo,
        description: getIndonesianDescription(repo, review),
        stats,
      };
    }),
  );

  return (
    <div className="panel-white overflow-hidden rounded-2xl border border-ink-700">
      {rows.map(({ repo, description, stats }, i) => (
        <Link
          key={repo.fullName}
          href="/repo/weekly"
          className={`flex items-center gap-4 border-b border-ink-700/40 px-5 py-4 transition-colors last:border-0 hover:bg-ink-800/80 ${
            i === 0 ? "rank-one" : ""
          }`}
        >
          <span className="w-8 font-mono text-lg font-bold text-slate-500">
            {i === 0 ? "👑" : String(repo.rank).padStart(2, "0")}
          </span>
          <div className="min-w-0 flex-1">
            <div className="font-bold text-slate-100">{repo.fullName}</div>
            <div className="truncate text-sm text-slate-400">{description}</div>
          </div>
          <div className="hidden gap-1.5 sm:flex">
            {repo.topics.slice(0, 2).map((t) => (
              <span key={t} className="rounded-md bg-ink-800 px-2 py-0.5 text-xs text-slate-400">
                {translateTopic(t)}
              </span>
            ))}
          </div>
          {stats && (
            <span className={`hidden font-mono text-sm font-bold sm:block ${scoreColor(9)}`}>
              ★ {(stats.stars / 1000).toFixed(1)}k
            </span>
          )}
        </Link>
      ))}
    </div>
  );
}
