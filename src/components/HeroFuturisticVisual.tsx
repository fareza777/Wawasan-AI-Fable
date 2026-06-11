/** Hero kanan — tata surya AI (matahari + planet, label tanpa kotak). */
const PLANETS = [
  {
    label: "repo",
    orbit: 86,
    size: 5,
    angle: 15,
    dur: 16,
    grad: ["#d6d3d1", "#78716c"],
    ring: false,
  },
  {
    label: "MCP",
    orbit: 102,
    size: 5.5,
    angle: 95,
    dur: 22,
    grad: ["#93c5fd", "#1d4ed8"],
    ring: false,
  },
  {
    label: "stack",
    orbit: 118,
    size: 6.5,
    angle: 175,
    dur: 28,
    grad: ["#6ee7b7", "#047857"],
    ring: false,
  },
  {
    label: "model",
    orbit: 136,
    size: 10,
    angle: 250,
    dur: 36,
    grad: ["#c4b5fd", "#5b21b6"],
    ring: true,
  },
  {
    label: "agent",
    orbit: 152,
    size: 6,
    angle: 310,
    dur: 24,
    grad: ["#fda4af", "#be123c"],
    ring: false,
  },
  {
    label: "RAG",
    orbit: 168,
    size: 7.5,
    angle: 55,
    dur: 42,
    grad: ["#fdba74", "#c2410c"],
    ring: false,
  },
] as const;

const CX = 200;
const CY = 200;

function Planet({
  cx,
  cy,
  size,
  grad,
  ring,
  gradId,
}: {
  cx: number;
  cy: number;
  size: number;
  grad: readonly [string, string];
  ring: boolean;
  gradId: string;
}) {
  return (
    <g>
      {ring && (
        <ellipse
          cx={cx}
          cy={cy}
          rx={size + 7}
          ry={size * 0.35}
          fill="none"
          stroke="rgba(196, 181, 253, 0.55)"
          strokeWidth={1.25}
          transform={`rotate(-18 ${cx} ${cy})`}
        />
      )}
      <circle cx={cx - size * 0.25} cy={cy - size * 0.25} r={size * 1.1} fill={grad[0]} opacity={0.22} />
      <circle cx={cx} cy={cy} r={size} fill={`url(#${gradId})`} />
      <circle cx={cx - size * 0.28} cy={cy - size * 0.32} r={size * 0.22} fill="#fff" opacity={0.55} />
    </g>
  );
}

export default function HeroFuturisticVisual() {
  const orbits = [...new Set(PLANETS.map((p) => p.orbit))];

  return (
    <div className="hero-visual-float" aria-hidden>
      <div className="hero-visual-bloom hero-visual-bloom-sun" />

      <svg
        className="hero-visual-svg"
        viewBox="0 0 400 400"
        width={400}
        height={400}
        role="img"
        aria-label="Tata surya navigasi AI"
      >
        <defs>
          <radialGradient id="spaceGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.18" />
            <stop offset="55%" stopColor="#7c3aed" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="sunCore" cx="38%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#fff7c2" />
            <stop offset="35%" stopColor="#fde047" />
            <stop offset="65%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#ea580c" />
          </radialGradient>
          <filter id="sunGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="8" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="labelLegible">
            <feDropShadow dx="0" dy="0" stdDeviation="1.2" floodColor="#ffffff" floodOpacity="0.95" />
            <feDropShadow dx="0" dy="1" stdDeviation="2" floodColor="#0f172a" floodOpacity="0.25" />
          </filter>
          {PLANETS.map((p) => (
            <radialGradient
              key={`grad-${p.label}`}
              id={`planet-${p.label}`}
              cx="32%"
              cy="28%"
              r="68%"
            >
              <stop offset="0%" stopColor={p.grad[0]} />
              <stop offset="100%" stopColor={p.grad[1]} />
            </radialGradient>
          ))}
        </defs>

        <circle cx={CX} cy={CY} r={190} fill="url(#spaceGlow)" />

        {/* Orbit paths */}
        {orbits.map((r) => (
          <circle
            key={r}
            cx={CX}
            cy={CY}
            r={r}
            fill="none"
            className="hero-orbit-path"
            strokeWidth={0.75}
          />
        ))}

        {/* Planets + labels (orbit together) */}
        {PLANETS.map((p) => (
          <g key={p.label}>
            <animateTransform
              attributeName="transform"
              type="rotate"
              from={`${p.angle} ${CX} ${CY}`}
              to={`${p.angle + 360} ${CX} ${CY}`}
              dur={`${p.dur}s`}
              repeatCount="indefinite"
            />
            <Planet
              cx={CX + p.orbit}
              cy={CY}
              size={p.size}
              grad={p.grad}
              ring={p.ring}
              gradId={`planet-${p.label}`}
            />
            <text
              x={CX + p.orbit}
              y={CY - p.size - 10}
              textAnchor="middle"
              className="hero-planet-label"
              filter="url(#labelLegible)"
            >
              {p.label}
            </text>
          </g>
        ))}

        {/* Sun */}
        <g filter="url(#sunGlow)" className="hero-sun">
          <circle cx={CX} cy={CY} r={44} fill="#fbbf24" opacity={0.2}>
            <animate attributeName="r" values="44;50;44" dur="4s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.15;0.28;0.15" dur="4s" repeatCount="indefinite" />
          </circle>
          <circle cx={CX} cy={CY} r={36} fill="#fde047" opacity={0.35}>
            <animate attributeName="opacity" values="0.28;0.45;0.28" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx={CX} cy={CY} r={28} fill="url(#sunCore)" />
          <circle cx={CX - 8} cy={CY - 9} r={6} fill="#fff" opacity={0.35} />
        </g>
      </svg>
    </div>
  );
}
