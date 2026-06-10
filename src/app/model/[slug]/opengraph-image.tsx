import { getModel } from "@/data/models";
import { buatOgImage, ogSize } from "@/lib/ogTemplate";

export const alt = "Review model LLM — Wawasan AI";
export const size = ogSize;
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const review = getModel((await params).slug);
  return buatOgImage({
    kicker: "Review Model",
    title: review?.name ?? "Review Model LLM",
    subtitle: review?.tagline,
    score: review?.score,
  });
}
