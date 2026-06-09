import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { models, getModel } from "@/data/models";
import ReviewDetail from "@/components/ReviewDetail";

export function generateStaticParams() {
  return models.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const review = getModel((await params).slug);
  if (!review) return {};
  return {
    title: `Review ${review.name} — Skor ${review.score.toFixed(1)}/10`,
    description: review.summary,
  };
}

export default async function ModelDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const review = getModel((await params).slug);
  if (!review) notFound();
  return <ReviewDetail review={review} backHref="/model" backLabel="Semua Review Model" />;
}
