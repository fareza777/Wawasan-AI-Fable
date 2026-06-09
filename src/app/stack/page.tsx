import type { Metadata } from "next";
import { stacks } from "@/data/stacks";
import ReviewCard from "@/components/ReviewCard";
import ListHeader from "@/components/ListHeader";

export const metadata: Metadata = {
  title: "Review Stack & Tools Coding AI",
  description:
    "Review jujur tool coding AI dan stack otomasi: Claude Code, Cursor, Codex, Windsurf, Cline — dibandingkan dari pemakaian nyata dengan konteks pengguna Indonesia.",
};

export default function StackPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <ListHeader
        kicker="// review stack"
        title="Review Stack & Tools"
        description="Editor AI, agen coding, dan tool otomasi — diadu langsung di pekerjaan nyata. Mana yang sepadan dengan harganya, dan mana yang cukup versi gratisnya?"
      />
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {stacks.map((s) => (
          <ReviewCard key={s.slug} review={s} basePath="/stack" />
        ))}
      </div>
    </div>
  );
}
