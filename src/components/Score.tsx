export function scoreColor(score: number) {
  if (score >= 9) return "text-emerald-400";
  if (score >= 8) return "text-neon-400";
  if (score >= 7) return "text-amber-400";
  return "text-rose-400";
}

export function ScoreBadge({ score, size = "md" }: { score: number; size?: "md" | "lg" }) {
  const dim = size === "lg" ? "h-16 w-16 text-2xl" : "h-11 w-11 text-sm";
  return (
    <div
      className={`${dim} flex shrink-0 items-center justify-center rounded-xl border border-ink-600 bg-ink-800 font-mono font-bold ${scoreColor(score)}`}
    >
      {score.toFixed(1)}
    </div>
  );
}

export function ScoreBar({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between text-sm">
        <span className="text-slate-300">{label}</span>
        <span className={`font-mono font-semibold ${scoreColor(value)}`}>{value.toFixed(1)}</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-ink-700">
        <div
          className="h-full rounded-full bg-gradient-to-r from-neon-500 to-violet-glow"
          style={{ width: `${value * 10}%` }}
        />
      </div>
    </div>
  );
}

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-md border border-ink-600 bg-ink-800/70 px-2 py-0.5 text-xs font-medium text-slate-300">
      {children}
    </span>
  );
}
