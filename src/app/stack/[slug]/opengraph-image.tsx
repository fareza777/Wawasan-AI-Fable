import { stacks, getStack } from "@/data/stacks";
import { buatOgImage, ogSize } from "@/lib/ogTemplate";

export const dynamic = "force-static";

export const alt = "Review tools coding AI — Wawasan AI";
export const size = ogSize;
export const contentType = "image/png";

// Prerender at build time: serving static PNGs keeps Worker CPU low (Cloudflare free plan).
export function generateStaticParams() {
  return stacks.map((s) => ({ slug: s.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const review = getStack((await params).slug);
  return buatOgImage({
    kicker: "Review Tools",
    title: review?.name ?? "Review Tools",
    subtitle: review?.tagline,
    score: review?.score,
  });
}
