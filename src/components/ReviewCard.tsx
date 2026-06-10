import Link from "next/link";
import { Review } from "@/lib/types";
import { ContentType } from "@/lib/storage";
import { ScoreBadge, Tag } from "./Score";
import Monogram from "./Monogram";
import BookmarkButton from "./BookmarkButton";
import { formatTanggal } from "@/lib/format";

export default function ReviewCard({
  review,
  basePath,
}: {
  review: Review;
  basePath: string;
}) {
  const type = basePath.replace("/", "") as ContentType;

  return (
    <Link href={`${basePath}/${review.slug}`} className="card-glow reveal group block rounded-2xl p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="flex min-w-0 items-start gap-3">
          <Monogram name={review.name} />
          <div className="min-w-0">
            <h3 className="text-lg font-bold text-slate-100 transition-colors group-hover:text-neon-400">
              {review.name}
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-slate-400">{review.tagline}</p>
          </div>
        </div>
        <ScoreBadge score={review.score} />
      </div>
      <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-slate-400">{review.summary}</p>
      <div className="mt-4 flex flex-wrap items-center gap-1.5">
        {review.featured && (
          <span className="rounded-md bg-gradient-to-r from-neon-500/20 to-violet-glow/20 px-2 py-0.5 text-xs font-bold text-neon-400">
            ★ Pilihan Editor
          </span>
        )}
        {review.tags.slice(0, 3).map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>
      <div className="mt-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-neon-400">
            Baca review
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="transition-transform group-hover:translate-x-1"
            >
              <path d="M5 12h14m-6-6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500">
            {formatTanggal(review.date)}
          </span>
        </div>
        <BookmarkButton type={type} slug={review.slug} />
      </div>
    </Link>
  );
}
