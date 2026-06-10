const topik = [
  "OpenClaw",
  "Claude Code",
  "Ollama & LLM Lokal",
  "DeerFlow",
  "n8n Otomasi",
  "Review Model LLM",
  "MCP",
  "Vibe Coding",
  "Cursor vs Windsurf",
  "DeepSeek",
  "Qwen 3",
  "AI untuk ASN & UMKM",
];

export default function TopicTicker() {
  const items = [...topik, ...topik];
  return (
    <div className="relative overflow-hidden border-y border-ink-700/60 bg-ink-900/60 py-3">
      <div className="marquee-track gap-10">
        {items.map((t, i) => (
          <span
            key={`${t}-${i}`}
            className="flex shrink-0 items-center gap-10 font-mono text-xs uppercase tracking-[0.2em] text-slate-500"
          >
            {t}
            <span className="text-neon-400">✦</span>
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink-950 to-transparent" />
    </div>
  );
}
