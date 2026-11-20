import { berita, getArtikel } from "@/data/berita";
import { buatOgImage, ogSize } from "@/lib/ogTemplate";

export const dynamic = "force-static";

export const alt = "Berita & wawasan AI — Wawasan AI";
export const size = ogSize;
export const contentType = "image/png";

// Prerender at build time: serving static PNGs keeps Worker CPU low (Cloudflare free plan).
export function generateStaticParams() {
  return berita.map((b) => ({ slug: b.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const artikel = getArtikel((await params).slug);
  return buatOgImage({
    kicker: artikel?.category ?? "Berita",
    title: artikel?.title ?? "Berita & Wawasan AI",
    subtitle: artikel?.excerpt,
  });
}
