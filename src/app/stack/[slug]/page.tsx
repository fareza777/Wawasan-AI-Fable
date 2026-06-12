import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { stacks, getStack } from "@/data/stacks";
import ReviewDetail from "@/components/ReviewDetail";
import JsonLd from "@/components/JsonLd";
import { reviewDetailMeta, reviewJsonLd } from "@/lib/seo";

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
  return reviewDetailMeta(review, `/stack/${review.slug}`);
}

export default async function StackDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const review = getStack((await params).slug);
  if (!review) notFound();
  const path = `/stack/${review.slug}`;
  return (
    <>
      <JsonLd data={reviewJsonLd(review, path)} />
      <ReviewDetail
        review={review}
        backHref="/stack"
        backLabel="Review Tools"
      />
    </>
  );
}
