import Link from "next/link";
import { WeeklyTrendingRepo } from "@/lib/trendshift";
import { Tag } from "./Score";

export default function WeeklyRepoCard({
  repo,
  reviewHref,
  stars,
  forks,
}: {
  repo: WeeklyTrendingRepo;
  reviewHref?: string;
  stars?: number;
  forks?: number;
}) {
  const isTop = repo.rank === 1;
  const isPodium = repo.rank <= 3;

  return (
    <article
      className={`panel-white reveal rounded-2xl border p-5 sm:p-6 ${
        isTop ? "rank-one border-neon-500/30" : "border-ink-700"
      }`}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl font-mono text-lg font-bold ${
            isPodium
              ? "bg-gradient-to-br from-neon-500/20 to-violet-glow/20 text-neon-400"
              : "bg-ink-800 text-slate-400"
          }`}
          aria-label={`Peringkat ${repo.rank}`}
        >
          #{repo.rank}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div className="min-w-0">
              <h2 className="text-lg font-bold text-slate-50 sm:text-xl">
                <a
                  href={repo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-neon-400"
                >
                  {repo.fullName}
                </a>
              </h2>
              {repo.language && (
                <p className="mt-1 font-mono text-xs text-slate-500">{repo.language}</p>
              )}
            </div>
            {stars !== undefined && (
              <div className="flex shrink-0 gap-3 font-mono text-xs text-slate-400">
                <span>★ {stars.toLocaleString("id-ID")}</span>
                <span>⑂ {(forks ?? 0).toLocaleString("id-ID")}</span>
              </div>
            )}
          </div>

          {repo.description && (
            <p className="mt-3 text-sm leading-relaxed text-slate-300">{repo.description}</p>
          )}

          {repo.topics.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {repo.topics.slice(0, 4).map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          )}

          <div className="mt-5 flex flex-wrap items-center gap-3 text-sm">
            <a
              href={repo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-neon-400 hover:underline"
            >
              Lihat di GitHub ↗
            </a>
            <a
              href={repo.trendshiftUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-slate-200"
            >
              Trendshift ↗
            </a>
            {reviewHref && (
              <Link
                href={reviewHref}
                className="rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-300 hover:bg-cyan-500/20"
              >
                Review Wawasan AI
              </Link>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
