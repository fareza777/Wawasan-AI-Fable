import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { berita, getArtikel } from "@/data/berita";
import { formatTanggal } from "@/lib/format";
import { getKategoriStyle } from "@/lib/kategori";
import ReadingProgress from "@/components/ReadingProgress";
import ShareButton from "@/components/ShareButton";
import BookmarkButton from "@/components/BookmarkButton";

export function generateStaticParams() {
  return berita.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const artikel = getArtikel((await params).slug);
  if (!artikel) return {};
  return { title: artikel.title, description: artikel.excerpt };
}

function headingId(teks: string) {
  return teks
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export default async function BeritaDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const artikel = getArtikel((await params).slug);
  if (!artikel) notFound();

  const idx = berita.findIndex((b) => b.slug === artikel.slug);
  const berikutnya = berita[(idx + 1) % berita.length];

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <ReadingProgress />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="font-mono text-xs text-slate-500">
        <Link href="/" className="transition-colors hover:text-neon-400">Beranda</Link>
        <span className="mx-2">/</span>
        <Link href="/berita" className="transition-colors hover:text-neon-400">Berita &amp; Wawasan</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-300">{artikel.category}</span>
      </nav>

      <header className="mt-7">
        <div className="flex items-center gap-3 text-sm text-slate-400">
          <span className={`rounded-md px-2.5 py-1 text-xs font-semibold ${getKategoriStyle(artikel.category)}`}>
            {artikel.category}
          </span>
          <span>{formatTanggal(artikel.date)}</span>
          <span>·</span>
          <span>{artikel.readingTime} baca</span>
        </div>
        <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-slate-50 sm:text-4xl">
          {artikel.title}
        </h1>
        <p className="lead-paragraph mt-4 text-slate-400">{artikel.excerpt}</p>
        <div className="mt-5 flex items-center gap-3">
          <p className="flex-1 text-xs text-slate-500">Oleh Fajar M Reza</p>
          <BookmarkButton type="berita" slug={artikel.slug} />
          <ShareButton title={`${artikel.title} — Wawasan AI`} />
        </div>
      </header>

      <div className="prose-id mt-10 border-t border-ink-700 pt-8">
        {artikel.body.map((section, i) => {
          const id = section.heading ? headingId(section.heading) : undefined;
          return (
            <section key={i}>
              {section.heading && (
                <h2 id={id} className="anchor-heading">
                  {section.heading}
                  <a href={`#${id}`} aria-label={`Tautan ke bagian ${section.heading}`}>
                    #
                  </a>
                </h2>
              )}
              {section.paragraphs.map((p, j) => (
                <p key={j} className={i === 0 && j === 0 ? "drop-cap lead-paragraph" : undefined}>
                  {p}
                </p>
              ))}
            </section>
          );
        })}
      </div>

      {/* Artikel berikutnya */}
      <Link
        href={`/berita/${berikutnya.slug}`}
        className="card-glow mt-12 flex items-center justify-between gap-4 rounded-2xl p-6"
      >
        <div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
            Baca berikutnya
          </p>
          <p className="mt-1.5 font-bold leading-snug text-slate-100">{berikutnya.title}</p>
        </div>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          className="shrink-0 text-neon-400"
        >
          <path d="M5 12h14m-6-6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>
    </article>
  );
}
