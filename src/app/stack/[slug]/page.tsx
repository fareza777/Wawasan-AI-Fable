import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { stacks, getStack } from "@/data/stacks";
import ReviewDetail from "@/components/ReviewDetail";

export function generateStaticParams() {
  return stacks.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const review = getStack((await params).slug);
  if (!review) return {};
  return {
    title: `Review ${review.name} — Skor ${review.score.toFixed(1)}/10`,
    description: review.summary,
  };
}

export default async function StackDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const review = getStack((await params).slug);
  if (!review) notFound();
  return (
    <ReviewDetail
      review={review}
      backHref="/stack"
      backLabel="Review Stack"
    />
  );
}
