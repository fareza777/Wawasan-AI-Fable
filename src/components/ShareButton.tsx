"use client";

import { useState } from "react";

export default function ShareButton({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);

  const share = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title, url });
        return;
      } catch {
        // pengguna membatalkan — lanjut ke fallback copy
      }
    }
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={share}
      className="inline-flex h-10 items-center gap-2 rounded-lg border border-ink-600 bg-ink-800/60 px-4 text-sm font-semibold text-slate-300 transition-colors hover:border-neon-400/40 hover:text-slate-100"
    >
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4" strokeLinecap="round" />
      </svg>
      {copied ? "Tautan disalin!" : "Bagikan"}
    </button>
  );
}
