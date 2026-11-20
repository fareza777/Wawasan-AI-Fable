import { repos, getRepo } from "@/data/repos";
import { buatOgImage, ogSize } from "@/lib/ogTemplate";

export const dynamic = "force-static";

export const alt = "Review repo GitHub — Wawasan AI";
export const size = ogSize;
export const contentType = "image/png";

// Prerender at build time: serving static PNGs keeps Worker CPU low (Cloudflare free plan).
export function generateStaticParams() {
  return repos.map((r) => ({ slug: r.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const review = getRepo((await params).slug);
  return buatOgImage({
    kicker: "Review Repo",
    title: review?.name ?? "Review Repo GitHub",
    subtitle: review?.tagline,
    score: review?.score,
  });
}
