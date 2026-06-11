/** Hero kanan — organic neural compass (jelas, natural, tanpa kotak). */
const NODES = [
  { label: "repo", color: "#0d9488", glow: "#5eead4", angle: -20, dur: 24 },
  { label: "model", color: "#7c3aed", glow: "#c4b5fd", angle: 40, dur: 20 },
  { label: "stack", color: "#059669", glow: "#6ee7b7", angle: 100, dur: 28 },
  { label: "agent", color: "#db2777", glow: "#f9a8d4", angle: 160, dur: 22 },
  { label: "RAG", color: "#d97706", glow: "#fcd34d", angle: 220, dur: 32 },
  { label: "MCP", color: "#2563eb", glow: "#93c5fd", angle: 280, dur: 26 },
] as const;

const CX = 200;
const CY = 200;
const ORBIT = 138;
const LABEL_R = ORBIT + 34;

function polar(angle: number, radius: number) {
  const rad = (angle * Math.PI) / 180;
  return { x: CX + radius * Math.cos(rad), y: CY + radius * Math.sin(rad) };
}

function curveToCenter(angle: number) {
  const outer = polar(angle, ORBIT);
  const ctrl = polar(angle, ORBIT * 0.45);
  return `M ${outer.x} ${outer.y} Q ${ctrl.x} ${ctrl.y} ${CX} ${CY}`;
}

export default function HeroFuturisticVisual() {
  return (
    <div className="hero-visual-float" aria-hidden>
      <div className="hero-visual-bloom hero-visual-bloom-a" />
      <div className="hero-visual-bloom hero-visual-bloom-b" />

      <svg
        className="hero-visual-svg"
        viewBox="0 0 400 400"
        width={400}
        height={400}
        role="img"
        aria-label="Navigasi neural AI"
      >
        <defs>
          <radialGradient id="heroNebula" cx="50%" cy="48%" r="52%">
            <stop offset="0%" stopColor="#0d9488" stopOpacity="0.28" />
            <stop offset="42%" stopColor="#7c3aed" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="heroRing" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0d9488" />
            <stop offset="50%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
          <linearGradient id="heroCoreText" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0f766e" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
          <filter id="heroBloom" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="6" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="heroDotGlow" x="-120%" y="-120%" width="340%" height="340%">
            <feGaussianBlur stdDeviation="3.5" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <circle cx={CX} cy={CY} r={185} fill="url(#heroNebula)" />

        {/* Primary orbit — tilted ellipse for organic feel */}
        <g opacity={0.55}>
          <animateTransform
            attributeName="transform"
            type="rotate"
            from={`0 ${CX} ${CY}`}
            to={`360 ${CX} ${CY}`}
            dur="90s"
            repeatCount="indefinite"
          />
          <ellipse
            cx={CX}
            cy={CY}
            rx={ORBIT + 6}
            ry={ORBIT - 4}
            fill="none"
            stroke="url(#heroRing)"
            strokeWidth={2}
            opacity={0.7}
          />
        </g>

        <ellipse
          cx={CX}
          cy={CY}
          rx={ORBIT}
          ry={ORBIT * 0.94}
          fill="none"
          stroke="url(#heroRing)"
          strokeWidth={1.25}
          opacity={0.45}
        />

        {/* Flow lines to center */}
        <g opacity={0.3}>
          {NODES.map((n) => (
            <path
              key={`flow-${n.label}`}
              d={curveToCenter(n.angle)}
              fill="none"
              stroke="url(#heroRing)"
              strokeWidth={1}
              strokeLinecap="round"
            />
          ))}
        </g>

        {/* Fixed labels — always readable */}
        {NODES.map((n) => {
          const p = polar(n.angle, LABEL_R);
          const w = n.label.length * 7.2 + 18;
          return (
            <g key={`lbl-${n.label}`}>
              <rect
                x={p.x - w / 2}
                y={p.y - 11}
                width={w}
                height={18}
                rx={9}
                className="hero-visual-tag"
              />
              <text x={p.x} y={p.y + 4} textAnchor="middle" className="hero-visual-label">
                {n.label}
              </text>
            </g>
          );
        })}

        {/* Orbiting luminous nodes */}
        {NODES.map((n) => (
          <g key={`dot-${n.label}`}>
            <animateTransform
              attributeName="transform"
              type="rotate"
              from={`${n.angle} ${CX} ${CY}`}
              to={`${n.angle + 360} ${CX} ${CY}`}
              dur={`${n.dur}s`}
              repeatCount="indefinite"
            />
            <circle
              cx={CX + ORBIT}
              cy={CY}
              r={16}
              fill={n.glow}
              opacity={0.35}
            />
            <circle
              cx={CX + ORBIT}
              cy={CY}
              r={8}
              fill={n.color}
              filter="url(#heroDotGlow)"
            />
            <circle cx={CX + ORBIT} cy={CY} r={3} fill="#fff" opacity={0.85} />
          </g>
        ))}

        {/* Core */}
        <g className="hero-visual-core" filter="url(#heroBloom)">
          <circle cx={CX} cy={CY} r={52} fill="none" stroke="url(#heroRing)" strokeWidth={1}>
            <animate attributeName="r" values="52;58;52" dur="3.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.28;0.55;0.28" dur="3.5s" repeatCount="indefinite" />
          </circle>
          <circle
            cx={CX}
            cy={CY}
            r={42}
            fill="none"
            stroke="url(#heroRing)"
            strokeWidth={1.75}
            opacity={0.75}
          />
          <circle cx={CX} cy={CY} r={34} className="hero-visual-core-fill" />
          <text x={CX} y={CY + 10} textAnchor="middle" className="hero-visual-core-text">
            AI
          </text>
        </g>
      </svg>
    </div>
  );
}
