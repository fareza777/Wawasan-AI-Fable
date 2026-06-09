import type { Metadata } from "next";
import { berita } from "@/data/berita";
import ArtikelCard from "@/components/ArtikelCard";
import ListHeader from "@/components/ListHeader";

export const metadata: Metadata = {
  title: "Berita & Wawasan AI",
  description:
    "Analisis, panduan, dan opini seputar AI dengan konteks Indonesia: tren AI agent, LLM lokal, otomasi untuk pekerja dan instansi, dan banyak lagi.",
};

export default function BeritaPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <ListHeader
        kicker="// berita & wawasan"
        title="Berita & Wawasan AI"
        description="Bukan sekadar terjemahan berita luar — analisis, panduan, dan opini yang ditulis dengan konteks Indonesia: daya beli kita, bahasa kita, dan cara kerja kita."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {berita.map((b) => (
          <ArtikelCard key={b.slug} artikel={b} />
        ))}
      </div>
    </div>
  );
}
