import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { repos, getRepo } from "@/data/repos";
import ReviewDetail from "@/components/ReviewDetail";
import JsonLd from "@/components/JsonLd";
import { fetchGitHubStats } from "@/lib/githubMeta";
import { reviewBreadcrumbJsonLd, reviewDetailMeta, reviewJsonLd } from "@/lib/seo";

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
  return reviewDetailMeta(review, `/repo/${review.slug}`);
}

export default async function RepoDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const review = getRepo((await params).slug);
  if (!review) notFound();
  const githubStats = review.link ? await fetchGitHubStats(review.link) : null;
  const path = `/repo/${review.slug}`;
  return (
    <>
      <JsonLd data={reviewJsonLd(review, path)} />
      <JsonLd
        data={reviewBreadcrumbJsonLd(
          { label: "Review Repo GitHub", path: "/repo" },
          review,
          path,
        )}
      />
      <ReviewDetail
        review={review}
        backHref="/repo"
        backLabel="Semua Review Repo"
        githubStats={githubStats}
      />
    </>
  );
}
