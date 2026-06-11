/** Hero kanan — constellation orbit, tanpa panel/kotak. */
const NODES = [
  { label: "repo", color: "#0e9aaf", angle: 12, dur: 28 },
  { label: "model", color: "#6d5ce8", angle: 72, dur: 22 },
  { label: "stack", color: "#0d9f6e", angle: 132, dur: 32 },
  { label: "agent", color: "#d4569a", angle: 192, dur: 24 },
  { label: "RAG", color: "#c98a1f", angle: 252, dur: 36 },
  { label: "MCP", color: "#3b7ddd", angle: 312, dur: 26 },
] as const;

const CX = 200;
const CY = 200;
const R = 152;

function nodePos(angle: number, radius = R) {
  const rad = (angle * Math.PI) / 180;
  return {
    x: CX + radius * Math.cos(rad),
    y: CY + radius * Math.sin(rad),
  };
}

export default function HeroFuturisticVisual() {
  const links = [
    [0, 2],
    [1, 4],
    [2, 5],
    [3, 0],
    [4, 1],
  ] as const;

  return (
    <div className="hero-visual-float" aria-hidden>
      <svg
        className="hero-visual-svg"
        viewBox="0 0 400 400"
        width={400}
        height={400}
        role="img"
        aria-label="Navigasi neural AI"
      >
        <defs>
          <radialGradient id="heroAura" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0e9aaf" stopOpacity="0.22" />
            <stop offset="45%" stopColor="#6d5ce8" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#6d5ce8" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="heroArc" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0e9aaf" />
            <stop offset="100%" stopColor="#6d5ce8" />
          </linearGradient>
          <filter id="heroSoftGlow" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="heroNodeGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <circle cx={CX} cy={CY} r={178} fill="url(#heroAura)" />

        {/* Neural links */}
        <g className="hero-visual-links" opacity={0.35}>
          {links.map(([a, b], i) => {
            const p1 = nodePos(NODES[a].angle, R * 0.92);
            const p2 = nodePos(NODES[b].angle, R * 0.92);
            return (
              <line
                key={i}
                x1={p1.x}
                y1={p1.y}
                x2={p2.x}
                y2={p2.y}
                stroke="url(#heroArc)"
                strokeWidth={0.75}
                strokeLinecap="round"
              />
            );
          })}
        </g>

        {/* Orbits */}
        {[R, R * 0.72, R * 0.44].map((radius, i) => (
          <g key={radius}>
            <animateTransform
              attributeName="transform"
              type="rotate"
              from={`${i % 2 === 0 ? 0 : 360} ${CX} ${CY}`}
              to={`${i % 2 === 0 ? 360 : 0} ${CX} ${CY}`}
              dur={`${38 + i * 14}s`}
              repeatCount="indefinite"
            />
            <ellipse
              cx={CX}
              cy={CY}
              rx={radius}
              ry={radius * (i === 1 ? 0.97 : 1)}
              fill="none"
              stroke="url(#heroArc)"
              strokeWidth={i === 0 ? 1 : 0.75}
              strokeDasharray={i === 2 ? "3 11" : undefined}
              opacity={0.22 + i * 0.08}
            />
          </g>
        ))}

        {/* Nodes */}
        {NODES.map((n) => (
          <g key={n.label}>
            <animateTransform
              attributeName="transform"
              type="rotate"
              from={`${n.angle} ${CX} ${CY}`}
              to={`${n.angle + 360} ${CX} ${CY}`}
              dur={`${n.dur}s`}
              repeatCount="indefinite"
            />
            <g filter="url(#heroNodeGlow)">
              <circle cx={CX + R} cy={CY} r={5.5} fill={n.color} />
            </g>
            <text
              x={CX + R}
              y={CY - 14}
              textAnchor="middle"
              className="hero-visual-label"
            >
              {n.label}
            </text>
          </g>
        ))}

        {/* Core */}
        <g filter="url(#heroSoftGlow)">
          <circle
            cx={CX}
            cy={CY}
            r={38}
            fill="none"
            stroke="url(#heroArc)"
            strokeWidth={1.25}
            opacity={0.85}
          />
          <circle cx={CX} cy={CY} r={28} className="hero-visual-core-fill" />
          <text x={CX} y={CY + 7} textAnchor="middle" className="hero-visual-core-text">
            AI
          </text>
        </g>

        {/* Crosshair ticks */}
        {[0, 90, 180, 270].map((deg) => {
          const rad = (deg * Math.PI) / 180;
          const x1 = CX + (R + 8) * Math.cos(rad);
          const y1 = CY + (R + 8) * Math.sin(rad);
          const x2 = CX + (R + 18) * Math.cos(rad);
          const y2 = CY + (R + 18) * Math.sin(rad);
          return (
            <line
              key={deg}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="url(#heroArc)"
              strokeWidth={1}
              opacity={0.25}
              strokeLinecap="round"
            />
          );
        })}
      </svg>
    </div>
  );
}
