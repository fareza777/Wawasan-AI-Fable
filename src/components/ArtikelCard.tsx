import Link from "next/link";
import { Artikel } from "@/lib/types";
import { formatTanggal } from "@/lib/format";

export default function ArtikelCard({ artikel }: { artikel: Artikel }) {
  return (
    <Link href={`/berita/${artikel.slug}`} className="card-glow block rounded-2xl p-6">
      <div className="flex items-center gap-3 text-xs text-slate-400">
        <span className="rounded-md bg-violet-glow/15 px-2 py-0.5 font-semibold text-violet-300">
          {artikel.category}
        </span>
        <span>{formatTanggal(artikel.date)}</span>
        <span>·</span>
        <span>{artikel.readingTime}</span>
      </div>
      <h3 className="mt-3 text-lg font-bold leading-snug text-slate-100">{artikel.title}</h3>
      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-400">{artikel.excerpt}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-neon-400">
        Baca selengkapnya
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M5 12h14m-6-6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </Link>
  );
}
