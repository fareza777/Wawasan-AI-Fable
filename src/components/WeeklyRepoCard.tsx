"use client";

import { useState } from "react";
import Link from "next/link";
import { WeeklyTrendingRepo } from "@/lib/trendshift";
import { Tag } from "./Score";
import { translateTopic } from "@/lib/weeklyId";
import WeeklyBookmarkButton from "./WeeklyBookmarkButton";

export default function WeeklyRepoCard({
  repo,
  description,
  highlights,
  reviewHref,
  stars,
  forks,
}: {
  repo: WeeklyTrendingRepo;
  description: string;
  highlights: string[];
  reviewHref?: string;
  stars?: number;
  forks?: number;
}) {
  const [open, setOpen] = useState(false);
  const isTop = repo.rank === 1;
  const isPodium = repo.rank <= 3;

  return (
    <article
      className={`panel-white reveal rounded-2xl border ${
        isTop ? "rank-one border-neon-500/30" : "border-ink-700"
      }`}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full flex-col gap-4 p-5 text-left sm:flex-row sm:items-start sm:gap-5 sm:p-6"
        aria-expanded={open}
      >
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl font-mono text-lg font-bold ${
            isTop
              ? "bg-gradient-to-br from-neon-500/25 to-violet-glow/25 text-neon-400"
              : isPodium
                ? "bg-gradient-to-br from-neon-500/20 to-violet-glow/20 text-neon-400"
                : "bg-ink-800 text-slate-400"
          }`}
          aria-label={`Peringkat ${repo.rank}`}
        >
          {isTop ? "👑" : `#${repo.rank}`}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div className="min-w-0">
              <h2 className="text-lg font-bold text-slate-50 sm:text-xl">{repo.fullName}</h2>
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

          <p className="mt-3 text-sm leading-relaxed text-slate-300">{description}</p>

          {repo.topics.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {repo.topics.slice(0, 4).map((t) => (
                <Tag key={t}>{translateTopic(t)}</Tag>
              ))}
            </div>
          )}

          <p className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-neon-400">
            {open ? "Tutup detail" : "Lihat fungsi & kegunaan"}
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className={`transition-transform ${open ? "rotate-180" : ""}`}
            >
              <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </p>
        </div>
      </button>

      {open && (
        <div className="border-t border-ink-700/60 px-5 pb-5 sm:px-6 sm:pb-6">
          <h3 className="text-sm font-bold text-slate-200">Fungsi & kegunaan</h3>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-300">
            {highlights.map((h) => (
              <li key={h} className="flex gap-2.5">
                <span className="mt-0.5 shrink-0 text-neon-400">•</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex flex-wrap items-center gap-3 text-sm">
            <a
              href={repo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-neon-400 hover:underline"
              onClick={(e) => e.stopPropagation()}
            >
              Lihat di GitHub ↗
            </a>
            <a
              href={repo.trendshiftUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-slate-200"
              onClick={(e) => e.stopPropagation()}
            >
              Trendshift ↗
            </a>
            {reviewHref && (
              <Link
                href={reviewHref}
                className="rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-300 hover:bg-cyan-500/20"
                onClick={(e) => e.stopPropagation()}
              >
                Review Wawasan AI
              </Link>
            )}
          </div>
        </div>
      )}

      <div className="flex justify-end border-t border-ink-700/40 px-5 py-3 sm:px-6">
        <WeeklyBookmarkButton fullName={repo.fullName} githubUrl={repo.githubUrl} />
      </div>
    </article>
  );
}
