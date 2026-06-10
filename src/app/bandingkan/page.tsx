import type { Metadata } from "next";
import ModelCompare from "@/components/ModelCompare";
import ListHeader from "@/components/ListHeader";

export const metadata: Metadata = {
  title: "Bandingkan Model LLM",
  description: "Bandingkan skor model LLM side-by-side — termasuk kemampuan bahasa Indonesia.",
};

export default function BandingkanPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <ListHeader
        kicker="// perbandingan"
        title="Bandingkan Model LLM"
        description="Pilih dua model dan bandingkan skor rinci — termasuk kemampuan bahasa Indonesia yang tidak ada di benchmark global."
      />
      <div className="mt-12">
        <ModelCompare />
      </div>
    </div>
  );
}
