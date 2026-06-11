/** Hero kanan — Neural Orbit (SVG, warna inline agar selalu terlihat). */
const NODES = [
  { label: "repo", color: "#0891b2", angle: 0, dur: 22 },
  { label: "model", color: "#7c3aed", angle: 60, dur: 18 },
  { label: "stack", color: "#059669", angle: 120, dur: 26 },
  { label: "agent", color: "#db2777", angle: 180, dur: 20 },
  { label: "RAG", color: "#d97706", angle: 240, dur: 30 },
  { label: "MCP", color: "#2563eb", angle: 300, dur: 24 },
] as const;

const CX = 200;
const CY = 200;
const ORBIT_R = 148;

export default function HeroFuturisticVisual() {
  return (
    <div className="hero-visual-panel">
      <svg
        className="hero-visual-svg-root"
        viewBox="0 0 400 400"
        width={400}
        height={400}
        role="img"
        aria-label="Neural orbit AI navigation"
      >
        <defs>
          <radialGradient id="heroCoreGrad" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#dbeafe" />
          </radialGradient>
          <linearGradient id="heroStrokeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0891b2" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
        </defs>

        <circle cx={CX} cy={CY} r={128} fill="rgba(8,145,178,0.12)" />

        <g>
          <animateTransform
            attributeName="transform"
            type="rotate"
            from={`0 ${CX} ${CY}`}
            to={`360 ${CX} ${CY}`}
            dur="48s"
            repeatCount="indefinite"
          />
          <circle
            cx={CX}
            cy={CY}
            r={196}
            fill="none"
            stroke="url(#heroStrokeGrad)"
            strokeWidth={2}
            opacity={0.7}
          />
        </g>

        <g>
          <animateTransform
            attributeName="transform"
            type="rotate"
            from={`360 ${CX} ${CY}`}
            to={`0 ${CX} ${CY}`}
            dur="32s"
            repeatCount="indefinite"
          />
          <circle
            cx={CX}
            cy={CY}
            r={142}
            fill="none"
            stroke="#7c3aed"
            strokeWidth={1.5}
            opacity={0.55}
          />
        </g>

        <g>
          <animateTransform
            attributeName="transform"
            type="rotate"
            from={`0 ${CX} ${CY}`}
            to={`360 ${CX} ${CY}`}
            dur="20s"
            repeatCount="indefinite"
          />
          <circle
            cx={CX}
            cy={CY}
            r={88}
            fill="none"
            stroke="#0891b2"
            strokeWidth={1.25}
            strokeDasharray="6 10"
            opacity={0.65}
          />
        </g>

        <circle
          cx={CX}
          cy={CY}
          r={ORBIT_R}
          fill="none"
          stroke="url(#heroStrokeGrad)"
          strokeWidth={1}
          opacity={0.35}
        />

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
            <circle cx={CX + ORBIT_R} cy={CY} r={10} fill={n.color} />
            <circle cx={CX + ORBIT_R} cy={CY} r={14} fill="none" stroke={n.color} strokeWidth={1} opacity={0.45} />
            <text
              x={CX + ORBIT_R}
              y={CY - 18}
              textAnchor="middle"
              fill="#334155"
              fontFamily="var(--font-mono)"
              fontSize={11}
              fontWeight={700}
              letterSpacing="0.1em"
            >
              {n.label.toUpperCase()}
            </text>
          </g>
        ))}

        <circle
          cx={CX}
          cy={CY}
          r={46}
          fill="url(#heroCoreGrad)"
          stroke="#0891b2"
          strokeWidth={2}
        />
        <text
          x={CX}
          y={CY + 9}
          textAnchor="middle"
          fill="url(#heroStrokeGrad)"
          fontFamily="var(--font-display)"
          fontSize={28}
          fontWeight={800}
        >
          AI
        </text>
      </svg>
      <p className="hero-visual-caption">Neural navigation · live</p>
    </div>
  );
}
