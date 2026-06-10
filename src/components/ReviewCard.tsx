import Link from "next/link";
import { Review } from "@/lib/types";
import { ContentType } from "@/lib/storage";
import { ScoreBadge, Tag } from "./Score";
import BookmarkButton from "./BookmarkButton";
import ItemLogo from "./ItemLogo";
import NewContentBadge from "./NewContentBadge";
import { rubrikStyle } from "@/lib/rubrik";

export default function ReviewCard({
  review,
  basePath,
  contentType,
}: {
  review: Review;
  basePath: string;
  contentType?: ContentType;
}) {
  const type = contentType ?? (basePath.replace("/", "") as ContentType);
  const style = rubrikStyle[type];

  return (
    <Link
      href={`${basePath}/${review.slug}`}
      className={`card-glow reveal group block rounded-2xl border p-6 ${style.border} bg-gradient-to-br ${style.gradient}`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex min-w-0 gap-3">
          <ItemLogo name={review.name} slug={review.slug} type={type} link={review.link} />
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-lg font-bold text-slate-100 transition-colors group-hover:text-neon-400">
                {review.name}
              </h3>
              <NewContentBadge date={review.updatedAt ?? review.date} />
            </div>
            <p className="mt-1 text-sm leading-relaxed text-slate-300">{review.tagline}</p>
          </div>
        </div>
        <ScoreBadge score={review.score} />
      </div>
      <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-slate-300">{review.summary}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {review.tags.slice(0, 3).map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>
      <div className="mt-5 flex items-center justify-between">
        <span className="inline-flex items-center gap-1 text-sm font-semibold text-neon-400">
          Baca review lengkap
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
        <BookmarkButton type={type} slug={review.slug} />
      </div>
    </Link>
  );
}
