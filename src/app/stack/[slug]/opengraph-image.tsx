import { getStack } from "@/data/stacks";
import { buatOgImage, ogSize } from "@/lib/ogTemplate";

export const alt = "Review stack & tools — Wawasan AI";
export const size = ogSize;
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const review = getStack((await params).slug);
  return buatOgImage({
    kicker: "Review Stack",
    title: review?.name ?? "Review Stack & Tools",
    subtitle: review?.tagline,
    score: review?.score,
  });
}
