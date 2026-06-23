import type { Metadata } from "next";
import type { Artikel, Review } from "@/lib/types";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.wawasanai.com";

const ORG_PUBLISHER = {
  "@type": "Organization" as const,
  name: "Wawasan AI",
  url: SITE_URL,
  logo: { "@type": "ImageObject" as const, url: `${SITE_URL}/favicon.svg` },
};

/** Canonical path + og:url for Next.js metadata (relative paths resolve via metadataBase). */
export function canonicalPath(path: string): Pick<Metadata, "alternates" | "openGraph"> {
  return {
    alternates: { canonical: path },
    openGraph: { url: path },
  };
}

function socialImages(path: string) {
  const image = `${path}/opengraph-image`;
  return { openGraphImage: [{ url: image }], twitterImage: [image] };
}

export function absoluteAssetUrl(path: string) {
  return `${SITE_URL}${path}`;
}

export function isoArticleTime(date: string) {
  return `${date}T00:00:00.000Z`;
}

export function articleKeywords(artikel: Artikel): string[] {
  const titleTerms = artikel.title
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s-]/gu, " ")
    .split(/\s+/)
    .filter((word) => word.length > 3);

  return [
    artikel.category,
    "berita AI Indonesia",
    "wawasan AI",
    artikel.title,
    ...titleTerms.slice(0, 8),
  ];
}

export function reviewKeywords(review: Review): string[] {
  return [
    `review ${review.name}`,
    review.name,
    ...review.tags.slice(0, 10),
    "Wawasan AI",
    "review AI Indonesia",
  ];
}

export function reviewDetailMeta(review: Review, path: string): Metadata {
  const title = `Review ${review.name} — Skor ${review.score.toFixed(1)}/10`;
  const description = review.summary;
  const { openGraphImage, twitterImage } = socialImages(path);
  const published = isoArticleTime(review.date);
  const modified = isoArticleTime(review.updatedAt ?? review.date);

  return {
    title,
    description,
    keywords: reviewKeywords(review),
    ...canonicalPath(path),
    openGraph: {
      title,
      description,
      url: path,
      type: "article",
      locale: "id_ID",
      publishedTime: published,
      modifiedTime: modified,
      images: openGraphImage,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: twitterImage,
    },
  };
}

export function articleDetailMeta(artikel: Artikel, path: string): Metadata {
  const { openGraphImage, twitterImage } = socialImages(path);
  const published = isoArticleTime(artikel.date);

  return {
    title: artikel.title,
    description: artikel.excerpt,
    keywords: articleKeywords(artikel),
    ...canonicalPath(path),
    openGraph: {
      title: artikel.title,
      description: artikel.excerpt,
      url: path,
      type: "article",
      locale: "id_ID",
      section: artikel.category,
      publishedTime: published,
      modifiedTime: published,
      images: openGraphImage,
    },
    twitter: {
      card: "summary_large_image",
      title: artikel.title,
      description: artikel.excerpt,
      images: twitterImage,
    },
  };
}

type BreadcrumbItem = { name: string; path: string };

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function reviewBreadcrumbJsonLd(
  section: { label: string; path: string },
  review: Review,
  detailPath: string,
) {
  return breadcrumbJsonLd([
    { name: "Beranda", path: "/" },
    { name: section.label, path: section.path },
    { name: review.name, path: detailPath },
  ]);
}

export function articleBreadcrumbJsonLd(artikel: Artikel, path: string) {
  return breadcrumbJsonLd([
    { name: "Beranda", path: "/" },
    { name: "Berita & Wawasan", path: "/berita" },
    { name: artikel.title, path },
  ]);
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Wawasan AI",
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.svg`,
    description: "Portal review AI Indonesia — review repo GitHub, model LLM, dan tools coding AI.",
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Wawasan AI",
    url: SITE_URL,
    description: "Portal review AI Indonesia",
    inLanguage: "id",
    publisher: ORG_PUBLISHER,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/indeks?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function reviewJsonLd(review: Review, path: string) {
  const pageUrl = absoluteAssetUrl(path);

  return {
    "@context": "https://schema.org",
    "@type": "Review",
    url: pageUrl,
    datePublished: review.date,
    ...(review.updatedAt ? { dateModified: review.updatedAt } : {}),
    author: ORG_PUBLISHER,
    publisher: ORG_PUBLISHER,
    image: `${pageUrl}/opengraph-image`,
    mainEntityOfPage: pageUrl,
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
  const pageUrl = absoluteAssetUrl(path);

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: artikel.title,
    description: artikel.excerpt,
    url: pageUrl,
    mainEntityOfPage: pageUrl,
    image: `${pageUrl}/opengraph-image`,
    datePublished: artikel.date,
    dateModified: artikel.date,
    author: ORG_PUBLISHER,
    publisher: ORG_PUBLISHER,
    inLanguage: "id",
    articleSection: artikel.category,
    keywords: articleKeywords(artikel).join(", "),
  };
}
