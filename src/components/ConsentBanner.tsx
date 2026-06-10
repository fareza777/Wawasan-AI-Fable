"use client";

import { useEffect, useState } from "react";

export default function ConsentBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN) return;
    if (!localStorage.getItem("wawasanai:consent")) setShow(true);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-[90] mx-auto max-w-lg rounded-2xl border border-ink-600 bg-ink-900/95 p-4 shadow-2xl backdrop-blur sm:left-auto">
      <p className="text-sm text-slate-300">
        Kami menggunakan analytics ringan untuk memahami konten yang paling dibaca. Tanpa data pribadi.
      </p>
      <div className="mt-3 flex gap-2">
        <button
          onClick={() => {
            localStorage.setItem("wawasanai:consent", "accepted");
            setShow(false);
          }}
          className="rounded-lg bg-gradient-to-r from-neon-500 to-violet-glow px-4 py-2 text-xs font-bold text-ink-950"
        >
          Setuju
        </button>
        <button
          onClick={() => {
            localStorage.setItem("wawasanai:consent", "declined");
            setShow(false);
          }}
          className="rounded-lg border border-ink-600 px-4 py-2 text-xs text-slate-400"
        >
          Tolak
        </button>
      </div>
    </div>
  );
}
