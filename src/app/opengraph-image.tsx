import { buatOgImage, ogSize } from "@/lib/ogTemplate";

export const alt = "Wawasan AI — Portal Review AI Indonesia";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return buatOgImage({
    kicker: "Portal AI",
    title: "Navigasi Dunia AI, dalam Bahasa Kita",
    subtitle:
      "Review repo GitHub, papan skor model LLM, ulasan stack coding AI, dan wawasan otomasi.",
  });
}
