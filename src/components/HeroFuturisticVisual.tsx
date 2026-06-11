/** Hero kanan — animasi CSS ringan (Neural Orbit). Tanpa canvas/WebGL. */
export default function HeroFuturisticVisual() {
  const nodes = [
    { label: "repo", color: "#22d3ee", duration: 22, reverse: false },
    { label: "model", color: "#a78bfa", duration: 18, reverse: true },
    { label: "stack", color: "#34d399", duration: 26, reverse: false },
    { label: "agent", color: "#f472b6", duration: 20, reverse: true },
    { label: "RAG", color: "#fbbf24", duration: 30, reverse: false },
    { label: "MCP", color: "#60a5fa", duration: 24, reverse: true },
  ];

  return (
    <div className="hero-visual float-slow hidden w-full md:block" aria-hidden>
      <div className="hero-visual-stage">
        <div className="hero-visual-glow" />
        <div className="hero-visual-ring hero-visual-ring-outer" />
        <div className="hero-visual-ring hero-visual-ring-mid" />
        <div className="hero-visual-ring hero-visual-ring-inner" />
        <div className="hero-visual-core">
          <span className="hero-visual-core-text">AI</span>
        </div>
        {nodes.map((n) => (
          <div
            key={n.label}
            className="hero-visual-orbit"
            style={{
              animationDuration: `${n.duration}s`,
              animationDirection: n.reverse ? "reverse" : "normal",
            }}
          >
            <div
              className="hero-visual-node"
              style={{
                backgroundColor: n.color,
                boxShadow: `0 0 18px ${n.color}88`,
              }}
            >
              <span
                className="hero-visual-node-label"
                style={{
                  animationDuration: `${n.duration}s`,
                  animationDirection: n.reverse ? "normal" : "reverse",
                }}
              >
                {n.label}
              </span>
            </div>
          </div>
        ))}
        <svg className="hero-visual-svg" viewBox="0 0 400 400" fill="none">
          <circle cx="200" cy="200" r="148" stroke="url(#heroGrad)" strokeWidth="1" opacity="0.35" />
          <circle cx="200" cy="200" r="100" stroke="url(#heroGrad)" strokeWidth="1" opacity="0.25" strokeDasharray="4 8" />
          <circle cx="200" cy="200" r="52" stroke="url(#heroGrad)" strokeWidth="1" opacity="0.4" />
          <defs>
            <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
        </svg>
        <div className="hero-visual-scan" />
      </div>
      <p className="mt-6 text-center font-mono text-[11px] uppercase tracking-[0.25em] text-slate-500">
        Neural navigation · live
      </p>
    </div>
  );
}
