import type { Metadata } from "next";
import { repos } from "@/data/repos";
import ReviewCard from "@/components/ReviewCard";
import ListHeader from "@/components/ListHeader";

export const metadata: Metadata = {
  title: "Review Repo GitHub AI",
  description:
    "Review mendalam proyek open-source AI terbaik di GitHub: OpenClaw, DeerFlow, n8n, Dify, Ollama, dan lainnya — dalam bahasa Indonesia, dari pemakaian langsung.",
};

export default function RepoPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <ListHeader
        kicker="// review repo"
        title="Review Repo GitHub AI"
        description="Proyek open-source AI yang layak masuk radarmu — dari asisten personal sampai platform otomasi. Setiap repo diinstal, dioprek, dan dipakai langsung sebelum diulas."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {repos.map((r) => (
          <ReviewCard key={r.slug} review={r} basePath="/repo" />
        ))}
      </div>
    </div>
  );
}
