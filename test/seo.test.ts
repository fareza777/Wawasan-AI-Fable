import assert from "node:assert/strict";
import test from "node:test";
import type { Artikel, Review } from "../src/lib/types.ts";
import {
  articleDetailMeta,
  articleJsonLd,
  articleKeywords,
  isoArticleTime,
  reviewDetailMeta,
  reviewJsonLd,
  reviewKeywords,
} from "../src/lib/seo.ts";
import { listWeeklyArchiveSitemapEntries } from "../src/lib/weekly-sitemap.ts";

const sampleArtikel: Artikel = {
  slug: "gelombang-ai-agent-2026",
  title: "2026: Tahun AI Agent Benar-Benar Masuk ke Pekerjaan Sehari-hari",
  excerpt: "Peta gelombang AI agent untuk pekerja Indonesia.",
  category: "Analisis",
  date: "2026-06-05",
  readingTime: "6 menit",
  body: [{ paragraphs: ["Paragraf uji."] }],
};

const sampleReview: Review = {
  slug: "openclaw",
  name: "OpenClaw",
  tagline: "Agen personal di WhatsApp",
  tags: ["ai-agent", "open-source", "python"],
  score: 8.7,
  scores: [{ label: "Fungsi", value: 9 }],
  summary: "Ringkasan review OpenClaw.",
  pros: ["Mudah dipasang"],
  cons: ["Butuh pengawasan"],
  verdict: "Coba untuk otomasi ringan.",
  body: ["Paragraf review."],
  date: "2026-06-01",
  updatedAt: "2026-06-10",
};

test("articleKeywords uses title and category, not only global keywords", () => {
  const keywords = articleKeywords(sampleArtikel);

  assert.ok(keywords.includes(sampleArtikel.category));
  assert.ok(keywords.includes(sampleArtikel.title));
  assert.ok(keywords.includes("berita AI Indonesia"));
});

test("reviewKeywords includes review tags", () => {
  const keywords = reviewKeywords(sampleReview);

  assert.ok(keywords.some((k) => k.includes(sampleReview.name)));
  assert.ok(keywords.includes(sampleReview.tags[0]));
});

test("articleDetailMeta includes publishedTime and article keywords", () => {
  const meta = articleDetailMeta(sampleArtikel, `/berita/${sampleArtikel.slug}`);

  assert.ok(Array.isArray(meta.keywords));
  assert.equal(meta.openGraph?.publishedTime, isoArticleTime(sampleArtikel.date));
  assert.equal(meta.openGraph?.modifiedTime, isoArticleTime(sampleArtikel.date));
  assert.equal(meta.openGraph?.section, sampleArtikel.category);
});

test("reviewDetailMeta includes published and modified times", () => {
  const meta = reviewDetailMeta(sampleReview, `/repo/${sampleReview.slug}`);

  assert.equal(meta.openGraph?.publishedTime, isoArticleTime(sampleReview.date));
  assert.equal(
    meta.openGraph?.modifiedTime,
    isoArticleTime(sampleReview.updatedAt ?? sampleReview.date),
  );
});

test("articleJsonLd and reviewJsonLd include image and mainEntityOfPage", () => {
  const articlePath = `/berita/${sampleArtikel.slug}`;
  const reviewPath = `/repo/${sampleReview.slug}`;

  const articleSchema = articleJsonLd(sampleArtikel, articlePath) as Record<string, string>;
  const reviewSchema = reviewJsonLd(sampleReview, reviewPath) as Record<string, string>;

  assert.match(articleSchema.image, /\/berita\/.+\/opengraph-image$/);
  assert.equal(articleSchema.mainEntityOfPage, articleSchema.url);
  assert.ok(articleSchema.keywords);

  assert.match(reviewSchema.image, /\/repo\/.+\/opengraph-image$/);
  assert.equal(reviewSchema.mainEntityOfPage, reviewSchema.url);
});

test("weekly archive sitemap entries use valid archive paths", () => {
  const entries = listWeeklyArchiveSitemapEntries(8);

  assert.ok(entries.length >= 7);
  for (const entry of entries) {
    assert.match(entry.path, /^\/repo\/weekly\/\d{4}\/\d{1,2}$/);
    assert.match(entry.lastModified, /^\d{4}-\d{2}-\d{2}$/);
  }
  assert.ok(!entries.some((entry) => entry.path === "/repo/weekly"));
});