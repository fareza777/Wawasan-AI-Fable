import { scoreColor } from "./Score";

export default function ScoreRing({ score }: { score: number }) {
  const r = 30;
  const c = 2 * Math.PI * r;
  const filled = (score / 10) * c;
  const gradId = `ringGrad-${score.toFixed(1).replace(".", "")}`;

  return (
    <div className="score-ring-wrap relative h-20 w-20 shrink-0">
      <svg viewBox="0 0 72 72" className="h-full w-full -rotate-90">
        <circle
          cx="36"
          cy="36"
          r={r}
          fill="none"
          className="score-ring-track"
          strokeWidth="6"
        />
        <circle
          cx="36"
          cy="36"
          r={r}
          fill="none"
          stroke={`url(#${gradId})`}
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={`${filled} ${c - filled}`}
        />
        <defs>
          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" className="score-ring-stop-from" stopColor="var(--score-ring-from)" />
            <stop offset="100%" className="score-ring-stop-to" stopColor="var(--score-ring-to)" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className={`font-mono text-xl font-bold ${scoreColor(score)}`}>
          {score.toFixed(1)}
        </span>
        <span className="text-[9px] uppercase tracking-wider text-slate-500">/ 10</span>
      </div>
    </div>
  );
}
