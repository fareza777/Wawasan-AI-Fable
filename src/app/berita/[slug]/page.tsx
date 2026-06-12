import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { berita, getArtikel } from "@/data/berita";
import ArticleDetail from "@/components/ArticleDetail";
import JsonLd from "@/components/JsonLd";
import { articleDetailMeta, articleJsonLd } from "@/lib/seo";

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
  return articleDetailMeta(artikel, `/berita/${artikel.slug}`);
}

export default async function BeritaDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const artikel = getArtikel((await params).slug);
  if (!artikel) notFound();
  const path = `/berita/${artikel.slug}`;
  return (
    <>
      <JsonLd data={articleJsonLd(artikel, path)} />
      <ArticleDetail artikel={artikel} />
    </>
  );
}
