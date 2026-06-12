import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { models, getModel } from "@/data/models";
import ReviewDetail from "@/components/ReviewDetail";
import JsonLd from "@/components/JsonLd";
import { reviewBreadcrumbJsonLd, reviewDetailMeta, reviewJsonLd } from "@/lib/seo";

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
  return reviewDetailMeta(review, `/model/${review.slug}`);
}

export default async function ModelDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const review = getModel((await params).slug);
  if (!review) notFound();
  const path = `/model/${review.slug}`;
  return (
    <>
      <JsonLd data={reviewJsonLd(review, path)} />
      <JsonLd
        data={reviewBreadcrumbJsonLd(
          { label: "Review Model LLM", path: "/model" },
          review,
          path,
        )}
      />
      <ReviewDetail
        review={review}
        backHref="/model"
        backLabel="Review Model"
      />
    </>
  );
}
