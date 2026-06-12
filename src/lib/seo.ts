import type { Metadata } from "next";
import type { Artikel, Review } from "@/lib/types";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.wawasanai.com";

/** Canonical path + og:url for Next.js metadata (relative paths resolve via metadataBase). */
export function canonicalPath(path: string): Pick<Metadata, "alternates" | "openGraph"> {
  return {
    alternates: { canonical: path },
    openGraph: { url: path },
  };
}

export function reviewDetailMeta(review: Review, path: string): Metadata {
  const title = `Review ${review.name} — Skor ${review.score.toFixed(1)}/10`;
  const description = review.summary;
  return {
    title,
    description,
    ...canonicalPath(path),
    openGraph: { title, description, url: path, type: "article" },
  };
}

export function articleDetailMeta(artikel: Artikel, path: string): Metadata {
  return {
    title: artikel.title,
    description: artikel.excerpt,
    ...canonicalPath(path),
    openGraph: {
      title: artikel.title,
      description: artikel.excerpt,
      url: path,
      type: "article",
    },
  };
}

export function reviewJsonLd(review: Review, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    url: `${SITE_URL}${path}`,
    datePublished: review.date,
    ...(review.updatedAt ? { dateModified: review.updatedAt } : {}),
    author: { "@type": "Organization", name: "Wawasan AI", url: SITE_URL },
    publisher: { "@type": "Organization", name: "Wawasan AI", url: SITE_URL },
    itemReviewed: {
      "@type": "SoftwareApplication",
      name: review.name,
      description: review.tagline,
      ...(review.link ? { url: review.link } : {}),
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.score,
      bestRating: 10,
      worstRating: 0,
    },
    reviewBody: review.summary,
  };
}

export function articleJsonLd(artikel: Artikel, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: artikel.title,
    description: artikel.excerpt,
    url: `${SITE_URL}${path}`,
    datePublished: artikel.date,
    author: { "@type": "Organization", name: "Wawasan AI", url: SITE_URL },
    publisher: { "@type": "Organization", name: "Wawasan AI", url: SITE_URL },
    inLanguage: "id",
    articleSection: artikel.category,
  };
}
