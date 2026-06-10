"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Artikel } from "@/lib/types";
import { formatTanggal } from "@/lib/format";
import { getKategoriStyle } from "@/lib/kategori";
import ReadingProgress from "./ReadingProgress";
import BookmarkButton from "./BookmarkButton";
import ShareButton from "./ShareButton";
import MarkReadButton from "./MarkReadButton";
import TableOfContents from "./TableOfContents";
import RelatedContent from "./RelatedContent";
import { getRelatedReviews } from "@/lib/related";
import { markAsRead } from "@/lib/readTracking";
import { slugifyTag } from "@/lib/rubrik";
import CoverArt from "./CoverArt";

export default function ArticleDetail({ artikel }: { artikel: Artikel }) {
  let headingIndex = 0;
  const tocItems = artikel.body
    .filter((s) => s.heading)
    .map((s) => {
      const id = `section-${headingIndex++}`;
      return { id, label: s.heading! };
    });

  useEffect(() => {
    const t = setTimeout(() => markAsRead("berita", artikel.slug), 3000);
    return () => clearTimeout(t);
  }, [artikel.slug]);

  return (
    <article className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <ReadingProgress />
      <div className="lg:grid lg:grid-cols-[1fr_220px] lg:gap-10">
        <div className="min-w-0 max-w-3xl">
          <Link href="/berita" className="text-sm font-medium text-neon-400 hover:underline">
            ← Semua Berita & Wawasan
          </Link>

          <CoverArt category={artikel.category} title={artikel.title} />

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
            <MarkReadButton type="berita" slug={artikel.slug} />
          </div>

          <div className="prose-id mt-10 border-t border-ink-700 pt-8">
            {(() => {
              let hi = 0;
              return artikel.body.map((section, i) => {
                const sectionId = section.heading ? `section-${hi++}` : undefined;
                return (
              <section key={i} id={sectionId} className={sectionId ? "scroll-mt-24" : undefined}>
                {section.heading && <h2>{section.heading}</h2>}
                {section.paragraphs.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </section>
                );
              });
            })()}
          </div>

          <RelatedContent items={getRelatedReviews("berita", artikel.slug, [artikel.category])} />
        </div>

        <TableOfContents items={tocItems} />
      </div>
    </article>
  );
}
