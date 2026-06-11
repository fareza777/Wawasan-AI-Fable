"use client";

import BookmarkButton from "./BookmarkButton";
import { weeklySlug } from "@/lib/storage";

export default function WeeklyBookmarkButton({
  fullName,
  githubUrl,
}: {
  fullName: string;
  githubUrl: string;
}) {
  return (
    <BookmarkButton
      type="weekly"
      slug={weeklySlug(fullName)}
      size="md"
      meta={{ title: fullName, href: githubUrl, githubUrl }}
    />
  );
}
