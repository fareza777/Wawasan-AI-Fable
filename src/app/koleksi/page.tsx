import type { Metadata } from "next";
import { repos } from "@/data/repos";
import { models } from "@/data/models";
import { stacks } from "@/data/stacks";
import { berita } from "@/data/berita";
import type { Review, Artikel } from "@/lib/types";
import type { ReviewCardData } from "@/components/ReviewCard";
import type { ArtikelCardData } from "@/components/ArtikelCard";
import KoleksiClient from "./KoleksiClient";

export const metadata: Metadata = {
  title: "Koleksi Tersimpan",
  description: "Review dan artikel yang kamu simpan di Wawasan AI.",
  robots: { index: false, follow: false },
};

function slimReview(r: Review): ReviewCardData {
  return {
    slug: r.slug,
    link: r.link,
    name: r.name,
    date: r.date,
    updatedAt: r.updatedAt,
    tagline: r.tagline,
    score: r.score,
    summary: r.summary,
    tags: r.tags.slice(0, 3),
  };
}

function slimArtikel(b: Artikel): ArtikelCardData {
  return {
    slug: b.slug,
    category: b.category,
    title: b.title,
    date: b.date,
    readingTime: b.readingTime,
    excerpt: b.excerpt,
  };
}

export default function KoleksiPage() {
  return (
    <KoleksiClient
      repos={repos.map(slimReview)}
      models={models.map(slimReview)}
      stacks={stacks.map(slimReview)}
      berita={berita.map(slimArtikel)}
    />
  );
}
