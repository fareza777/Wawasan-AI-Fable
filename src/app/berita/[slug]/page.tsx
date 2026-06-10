import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { berita, getArtikel } from "@/data/berita";
import { formatTanggal } from "@/lib/format";
import { getKategoriStyle } from "@/lib/kategori";

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

export default async function BeritaDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const artikel = getArtikel((await params).slug);
  if (!artikel) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <Link href="/berita" className="text-sm font-medium text-neon-400 hover:underline">
        ← Semua Berita & Wawasan
      </Link>

      <header className="mt-6">
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
        <p className="mt-4 text-lg leading-relaxed text-slate-400">{artikel.excerpt}</p>
        <p className="mt-3 text-xs text-slate-500">Oleh Fajar M Reza</p>
      </header>

      <div className="prose-id mt-10 border-t border-ink-700 pt-8">
        {artikel.body.map((section, i) => (
          <section key={i}>
            {section.heading && <h2>{section.heading}</h2>}
            {section.paragraphs.map((p, j) => (
              <p key={j}>{p}</p>
            ))}
          </section>
        ))}
      </div>
    </article>
  );
}
