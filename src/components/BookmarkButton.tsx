"use client";

import { useEffect, useState } from "react";
import {
  BookmarkMeta,
  ContentType,
  isBookmarked,
  toggleBookmark,
  STORAGE_EVENT,
} from "@/lib/storage";

export default function BookmarkButton({
  type,
  slug,
  size = "md",
  meta,
}: {
  type: ContentType;
  slug: string;
  size?: "md" | "lg";
  meta?: BookmarkMeta;
}) {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const sync = () => setSaved(isBookmarked(type, slug));
    sync();
    window.addEventListener(STORAGE_EVENT, sync);
    return () => window.removeEventListener(STORAGE_EVENT, sync);
  }, [type, slug]);

  const dim = size === "lg" ? "h-10 w-10" : "h-8 w-8";

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleBookmark(type, slug, meta);
      }}
      aria-label={saved ? "Hapus dari koleksi" : "Simpan ke koleksi"}
      title={saved ? "Hapus dari koleksi" : "Simpan ke koleksi"}
      className={`${dim} flex shrink-0 items-center justify-center rounded-lg border transition-all ${
        saved
          ? "border-neon-400/60 bg-neon-500/15 text-neon-400"
          : "border-ink-600 bg-ink-800/60 text-slate-500 hover:border-neon-400/40 hover:text-slate-300"
      }`}
    >
      <svg
        width={size === "lg" ? 18 : 15}
        height={size === "lg" ? 18 : 15}
        viewBox="0 0 24 24"
        fill={saved ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          d="M19 21l-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
