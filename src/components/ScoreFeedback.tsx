"use client";

import { useEffect, useState } from "react";

export default function ScoreFeedback({ slug }: { slug: string }) {
  const key = `wawasanai:feedback:${slug}`;
  const [vote, setVote] = useState<"up" | "down" | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(key) as "up" | "down" | null;
    if (stored) setVote(stored);
  }, [key]);

  const cast = (v: "up" | "down") => {
    localStorage.setItem(key, v);
    setVote(v);
  };

  return (
    <div className="panel-white mt-6 flex flex-wrap items-center gap-3 rounded-xl border px-4 py-3">
      <span className="text-sm text-slate-400">Setuju dengan skor ini?</span>
      <button
        onClick={() => cast("up")}
        className={`rounded-lg px-3 py-1.5 text-sm transition-colors ${
          vote === "up" ? "bg-emerald-500/20 text-emerald-400" : "text-slate-400 hover:bg-ink-800"
        }`}
      >
        👍 Setuju
      </button>
      <button
        onClick={() => cast("down")}
        className={`rounded-lg px-3 py-1.5 text-sm transition-colors ${
          vote === "down" ? "bg-rose-500/20 text-rose-400" : "text-slate-400 hover:bg-ink-800"
        }`}
      >
        👎 Tidak setuju
      </button>
      {vote && <span className="text-xs text-slate-500">Terima kasih atas masukanmu.</span>}
    </div>
  );
}
