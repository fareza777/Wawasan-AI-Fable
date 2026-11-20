import { models, getModel } from "@/data/models";
import { buatOgImage, ogSize } from "@/lib/ogTemplate";

export const dynamic = "force-static";

export const alt = "Review model LLM — Wawasan AI";
export const size = ogSize;
export const contentType = "image/png";

// Prerender at build time: serving static PNGs keeps Worker CPU low (Cloudflare free plan).
export function generateStaticParams() {
  return models.map((m) => ({ slug: m.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const review = getModel((await params).slug);
  return buatOgImage({
    kicker: "Review Model",
    title: review?.name ?? "Review Model LLM",
    subtitle: review?.tagline,
    score: review?.score,
  });
}
