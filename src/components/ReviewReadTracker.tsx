"use client";

import { useEffect } from "react";
import { markAsRead } from "@/lib/readTracking";

export default function ReviewReadTracker({ type, slug }: { type: string; slug: string }) {
  useEffect(() => {
    const t = setTimeout(() => markAsRead(type, slug), 3000);
    return () => clearTimeout(t);
  }, [type, slug]);
  return null;
}
