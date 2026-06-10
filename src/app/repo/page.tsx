import type { Metadata } from "next";
import { repos } from "@/data/repos";
import ListHeader from "@/components/ListHeader";
import ContentFilters from "@/components/ContentFilters";

export const metadata: Metadata = {
  title: "Review Repo GitHub AI",
  description:
    "Review mendalam proyek open-source AI terbaik di GitHub — dalam bahasa Indonesia.",
};

export default function RepoPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <ListHeader
        kicker="// review repo"
        title="Review Repo GitHub AI"
        description="Proyek open-source AI yang layak masuk radarmu — dari asisten personal sampai platform otomasi. Setiap repo diinstal, dioprek, dan dipakai langsung sebelum diulas."
      />
      <ContentFilters items={repos} type="review" basePath="/repo" mode="repo" />
    </div>
  );
}
