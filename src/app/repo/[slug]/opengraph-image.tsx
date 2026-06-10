import { getRepo } from "@/data/repos";
import { buatOgImage, ogSize } from "@/lib/ogTemplate";

export const alt = "Review repo GitHub — Wawasan AI";
export const size = ogSize;
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const review = getRepo((await params).slug);
  return buatOgImage({
    kicker: "Review Repo",
    title: review?.name ?? "Review Repo GitHub",
    subtitle: review?.tagline,
    score: review?.score,
  });
}
