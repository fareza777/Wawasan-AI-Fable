import type { Metadata } from "next";
import { berita } from "@/data/berita";
import ListHeader from "@/components/ListHeader";
import ContentFilters from "@/components/ContentFilters";
import { canonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Berita & Wawasan AI",
  description:
    "Analisis, panduan, dan opini seputar AI dengan konteks Indonesia: tren AI agent, LLM lokal, otomasi, dan banyak lagi.",
  ...canonicalPath("/berita"),
};

export default function BeritaPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <ListHeader
        kicker="// berita & wawasan"
        title="Berita & Wawasan AI"
        description="Bukan sekadar terjemahan berita luar — analisis, panduan, dan opini yang ditulis dengan konteks Indonesia."
      />
      <ContentFilters items={berita} type="artikel" mode="berita" />
    </div>
  );
}
