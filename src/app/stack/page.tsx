import type { Metadata } from "next";
import { stacks } from "@/data/stacks";
import ListHeader from "@/components/ListHeader";
import ContentFilters from "@/components/ContentFilters";
import { canonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Review Tools Coding AI",
  description:
    "Review tool coding AI dan otomasi — dengan konteks pengguna Indonesia.",
  ...canonicalPath("/stack"),
};

export default function StackPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <ListHeader
        kicker="// review tools"
        title="Review Tools Coding AI"
        description="Editor AI, agen coding, dan tool otomasi — diadu langsung di pekerjaan nyata. Mana yang sepadan dengan harganya, dan mana yang cukup versi gratisnya?"
      />
      <ContentFilters items={stacks} type="review" basePath="/stack" mode="stack" />
    </div>
  );
}
