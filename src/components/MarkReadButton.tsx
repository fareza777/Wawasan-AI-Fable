"use client";

import { useEffect, useState } from "react";
import { isRead, markAsRead, READ_EVENT } from "@/lib/readTracking";

export default function MarkReadButton({ type, slug }: { type: string; slug: string }) {
  const [read, setRead] = useState(false);

  useEffect(() => {
    const sync = () => setRead(isRead(type, slug));
    sync();
    window.addEventListener(READ_EVENT, sync);
    return () => window.removeEventListener(READ_EVENT, sync);
  }, [type, slug]);

  if (read) {
    return <span className="text-xs text-slate-500">✓ Sudah dibaca</span>;
  }

  return (
    <button
      onClick={() => markAsRead(type, slug)}
      className="text-xs text-neon-400 hover:underline"
    >
      Tandai sudah dibaca
    </button>
  );
}
