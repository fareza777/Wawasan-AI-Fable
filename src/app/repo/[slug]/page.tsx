import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { repos, getRepo } from "@/data/repos";
import ReviewDetail from "@/components/ReviewDetail";

export function generateStaticParams() {
  return repos.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const review = getRepo((await params).slug);
  if (!review) return {};
  return {
    title: `Review ${review.name} — Skor ${review.score.toFixed(1)}/10`,
    description: review.summary,
  };
}

export default async function RepoDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const review = getRepo((await params).slug);
  if (!review) notFound();
  const idx = repos.findIndex((r) => r.slug === review.slug);
  const berikutnya = repos[(idx + 1) % repos.length];
  return (
    <ReviewDetail
      review={review}
      backHref="/repo"
      backLabel="Review Repo"
      next={{
        href: `/repo/${berikutnya.slug}`,
        name: berikutnya.name,
        tagline: berikutnya.tagline,
      }}
    />
  );
}
