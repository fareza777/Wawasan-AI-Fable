/** Hero kanan — Neural Orbit (SVG + SMIL, tanpa konflik transform CSS). */
const NODES = [
  { label: "repo", color: "#06b6d4", angle: 0, dur: 22 },
  { label: "model", color: "#8b5cf6", angle: 60, dur: 18 },
  { label: "stack", color: "#10b981", angle: 120, dur: 26 },
  { label: "agent", color: "#ec4899", angle: 180, dur: 20 },
  { label: "RAG", color: "#f59e0b", angle: 240, dur: 30 },
  { label: "MCP", color: "#3b82f6", angle: 300, dur: 24 },
] as const;

export default function HeroFuturisticVisual() {
  return (
    <div className="hero-visual" aria-hidden>
      <svg
        className="hero-visual-svg-root"
        viewBox="0 0 400 400"
        role="img"
        aria-label="Neural orbit AI navigation"
      >
        <defs>
          <radialGradient id="heroCoreGrad" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#dce4ee" />
          </radialGradient>
          <linearGradient id="heroStrokeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
          <filter id="heroGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Glow */}
        <circle cx="200" cy="200" r="130" fill="none" className="hero-visual-ambient" />

        {/* Rotating rings */}
        <g>
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 200 200"
            to="360 200 200"
            dur="48s"
            repeatCount="indefinite"
          />
          <circle cx="200" cy="200" r="196" fill="none" className="hero-visual-ring-stroke" strokeWidth="1.5" />
        </g>
        <g>
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="360 200 200"
            to="0 200 200"
            dur="32s"
            repeatCount="indefinite"
          />
          <circle cx="200" cy="200" r="142" fill="none" className="hero-visual-ring-stroke hero-visual-ring-mid" strokeWidth="1.25" />
        </g>
        <g>
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 200 200"
            to="360 200 200"
            dur="20s"
            repeatCount="indefinite"
          />
          <circle
            cx="200"
            cy="200"
            r="88"
            fill="none"
            className="hero-visual-ring-stroke hero-visual-ring-inner"
            strokeWidth="1"
            strokeDasharray="5 9"
          />
        </g>

        {/* Static guide circles */}
        <circle cx="200" cy="200" r="148" className="hero-visual-guide" />
        <circle cx="200" cy="200" r="52" className="hero-visual-guide hero-visual-guide-inner" />

        {/* Orbiting nodes */}
        {NODES.map((n) => (
          <g key={n.label}>
            <animateTransform
              attributeName="transform"
              type="rotate"
              from={`${n.angle} 200 200`}
              to={`${n.angle + 360} 200 200`}
              dur={`${n.dur}s`}
              repeatCount="indefinite"
            />
            <g filter="url(#heroGlow)">
              <circle cx="348" cy="200" r="9" fill={n.color} className="hero-visual-node-dot" />
            </g>
            <text x="348" y="182" className="hero-visual-node-text" textAnchor="middle">
              {n.label}
            </text>
          </g>
        ))}

        {/* Core */}
        <circle cx="200" cy="200" r="44" className="hero-visual-core-circle" fill="url(#heroCoreGrad)" />
        <text x="200" y="210" className="hero-visual-core-label" textAnchor="middle">
          AI
        </text>

        {/* Scan line */}
        <rect x="72" y="72" width="256" height="256" rx="128" className="hero-visual-scan-mask" />
        <g className="hero-visual-scan-line">
          <line x1="72" y1="200" x2="328" y2="200" className="hero-visual-scan-stroke" />
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0 -128; 0 128; 0 -128"
            dur="5s"
            repeatCount="indefinite"
          />
        </g>
      </svg>
      <p className="hero-visual-caption">Neural navigation · live</