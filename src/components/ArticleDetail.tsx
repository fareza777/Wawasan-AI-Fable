"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Artikel } from "@/lib/types";
import { formatTanggal } from "@/lib/format";
import { getKategoriStyle } from "@/lib/kategori";
import ReadingProgress from "./ReadingProgress";
import BookmarkButton from "./BookmarkButton";
import ShareButton from "./ShareButton";
import RelatedContent from "./RelatedContent";
import { getRelatedReviews } from "@/lib/related";
import { markAsRead } from "@/lib/readTracking";
import { slugifyTag } from "@/lib/rubrik";
import CoverArt from "./CoverArt";

export default function ArticleDetail({ artikel }: { artikel: Artikel }) {
  useEffect(() => {
    const t = setTimeout(() => markAsRead("berita", artikel.slug), 3000);
    return () => clearTimeout(t);
  }, [artikel.slug]);

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <ReadingProgress />
      <Link href="/berita" className="text-sm font-medium text-neon-400 hover:underline">
        ← Semua Berita & Wawasan
      </Link>

      <CoverArt slug={artikel.slug} category={artikel.category} title={artikel.title} />

      <header className="mt-2">
        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-300">
          <Link
            href={`/tag/${slugifyTag(artikel.category)}`}
            className={`rounded-md px-2.5 py-1 text-xs font-semibold ${getKategoriStyle(artikel.category)}`}
          >
            {artikel.category}
          </Link>
          <span>{formatTanggal(artikel.date)}</span>
          <span>·</span>
          <span>{artikel.readingTime} baca</span>
        </div>
        <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-slate-50 sm:text-4xl">
          {artikel.title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-slate-300">{artikel.excerpt}</p>
        <p className="mt-3 text-xs text-slate-500">Editorial Wawasan AI</p>
      </header>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <BookmarkButton type="berita" slug={artikel.slug} size="lg" />
        <ShareButton title={`${artikel.title} — Wawasan AI`} />
      </div>

      <div className="panel-white prose-id mt-10 rounded-2xl border p-6 sm:p-8">
        {artikel.body.map((section, i) => (
          <section key={i}>
            {section.heading && <h2>{section.heading}</h2>}
            {section.paragraphs.map((p, j) => (
              <p key={j}>{p}</p>
            ))}
          </section>
        ))}
      </div>

      <RelatedContent items={getRelatedReviews("berita", artikel.slug, [artikel.category])} />
    </article>
  );
}
