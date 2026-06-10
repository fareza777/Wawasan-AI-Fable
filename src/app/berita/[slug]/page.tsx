import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { berita, getArtikel } from "@/data/berita";
import ArticleDetail from "@/components/ArticleDetail";

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
  return <ArticleDetail artikel={artikel} />;
}
