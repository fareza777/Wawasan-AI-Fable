import Link from "next/link";
import BookmarkButton from "./BookmarkButton";
import { BookmarkItem, weeklyFullName } from "@/lib/storage";

export default function WeeklyKoleksiCard({ item }: { item: BookmarkItem }) {
  const fullName = item.meta?.title ?? weeklyFullName(item.slug);
  const githubUrl = item.meta?.githubUrl ?? item.meta?.href ?? "#";

  return (
    <article className="panel-white card-glow flex flex-col rounded-2xl border border-ink-700 p-5">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="font-mono text-xs uppercase tracking-widest text-neon-400">Top Weekly</p>
          <h3 className="mt-1 truncate font-bold text-slate-100">{fullName}</h3>
        </div>
        <BookmarkButton type="weekly" slug={item.slug} meta={item.meta} />
      </div>
      <div className="mt-4 flex flex-wrap gap-2 text-sm">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-neon-400 hover:underline"
        >
          GitHub ↗
        </a>
        <Link href="/repo/weekly" className="text-slate-400 hover:text-slate-200">
          Lihat Top Weekly →
        </Link>
      </div>
    </article>
  );
}
