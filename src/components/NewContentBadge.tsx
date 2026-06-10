"use client";

import { useEffect, useState } from "react";
import { getLastVisit, recordVisit } from "@/lib/readTracking";

export default function NewContentBadge({ date }: { date: string }) {
  const [isNew, setIsNew] = useState(false);

  useEffect(() => {
    recordVisit();
    const last = getLastVisit();
    if (!last) {
      setIsNew(false);
      return;
    }
    setIsNew(new Date(date) > new Date(last));
  }, [date]);

  if (!isNew) return null;
  return (
    <span className="rounded-md bg-neon-500/15 px-2 py-0.5 text-[10px] font-bold uppercase text-neon-400">
      Baru
    </span>
  );
}
