import type { Metadata } from "next";
import ModelCompare from "@/components/ModelCompare";
import ListHeader from "@/components/ListHeader";

export const metadata: Metadata = {
  title: "Bandingkan Model LLM",
  description: "Bandingkan skor model LLM side-by-side — penalaran, coding, kecepatan, dan harga.",
};

export default function BandingkanPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <ListHeader
        kicker="// perbandingan"
        title="Bandingkan Model LLM"
        description="Pilih dua model dan bandingkan skor, biaya API/langganan, serta modalitas teks, gambar, video, dan audio."
      />
      <div className="mt-12">
        <ModelCompare />
      </div>
    </div>
  );
}
