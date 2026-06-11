import type { ReactNode } from "react";

const covers: Record<string, { gradient: string; elements: ReactNode }> = {
  "gelombang-ai-agent-2026": {
    gradient: "linear-gradient(135deg,#0f172a 0%,#1e3a5f 50%,#0d9488 100%)",
    elements: (
      <>
        <circle cx="120" cy="90" r="28" fill="#22d3ee" opacity="0.9" />
        <circle cx="200" cy="60" r="18" fill="#8b5cf6" opacity="0.85" />
        <circle cx="280" cy="100" r="22" fill="#34d399" opacity="0.8" />
        <path d="M148 90 L172 72 M172 90 L196 108 M228 78 L252 96" stroke="#fff" strokeWidth="2" opacity="0.5" />
        <rect x="320" y="45" width="140" height="90" rx="12" fill="rgba(255,255,255,0.08)" stroke="rgba(34,211,238,0.4)" />
        <text x="340" y="85" fill="#e2e8f0" fontSize="14" fontFamily="system-ui,sans-serif">agent → task</text>
        <text x="340" y="108" fill="#94a3b8" fontSize="11" fontFamily="system-ui,sans-serif">2026</text>
      </>
    ),
  },
  "memilih-llm-untuk-bahasa-indonesia": {
    gradient: "linear-gradient(120deg,#1a1a2e 0%,#16213e 60%,#b45309 100%)",
    elements: (
      <>
        <text x="80" y="130" fill="#fbbf24" fontSize="72" fontWeight="800" fontFamily="system-ui,sans-serif" opacity="0.25">ID</text>
        <rect x="200" y="40" width="200" height="100" rx="16" fill="rgba(255,255,255,0.1)" stroke="rgba(251,191,36,0.5)" />
        <text x="220" y="75" fill="#fef3c7" fontSize="13" fontFamily="system-ui,sans-serif">Bahasa Indonesia</text>
        <text x="220" y="100" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace,monospace">Claude · GPT · Qwen</text>
        <circle cx="450" cy="90" r="35" fill="none" stroke="#22d3ee" strokeWidth="3" />
        <path d="M435 90 L448 103 L468 78" stroke="#22d3ee" strokeWidth="3" fill="none" />
      </>
    ),
  },
  "asn-dan-ai-otomasi-birokrasi": {
    gradient: "linear-gradient(160deg,#1c1917 0%,#44403c 40%,#0d9488 100%)",
    elements: (
      <>
        <rect x="60" y="35" width="80" height="110" rx="4" fill="rgba(255,255,255,0.12)" />
        <rect x="70" y="50" width="25" height="8" rx="2" fill="#0d9488" />
        <rect x="70" y="65" width="55" height="6" rx="2" fill="rgba(255,255,255,0.2)" />
        <rect x="70" y="78" width="45" height="6" rx="2" fill="rgba(255,255,255,0.15)" />
        <path d="M180 70 L260 70 L280 90 L380 90" stroke="#22d3ee" strokeWidth="2" fill="none" strokeDasharray="6 4" />
        <rect x="300" y="55" width="120" height="70" rx="10" fill="rgba(13,148,136,0.25)" stroke="#0d9488" />
        <text x="315" y="98" fill="#ccfbf1" fontSize="11" fontFamily="system-ui,sans-serif">otomasi ✓</text>
      </>
    ),
  },
  "panduan-llm-lokal-pertamamu": {
    gradient: "linear-gradient(135deg,#0c4a6e 0%,#164e63 50%,#34d399 100%)",
    elements: (
      <>
        <rect x="70" y="30" width="180" height="120" rx="14" fill="#1e293b" stroke="#34d399" strokeWidth="2" />
        <rect x="90" y="50" width="140" height="70" rx="6" fill="#0f172a" />
        <text x="105" y="85" fill="#34d399" fontSize="12" fontFamily="ui-monospace,monospace">ollama run</text>
        <text x="105" y="105" fill="#64748b" fontSize="10" fontFamily="ui-monospace,monospace">qwen3:8b</text>
        <circle cx="380" cy="90" r="40" fill="none" stroke="#34d399" strokeWidth="2" opacity="0.6" />
        <text x="355" y="95" fill="#a7f3d0" fontSize="11" fontFamily="system-ui,sans-serif">lokal</text>
      </>
    ),
  },
  "indonesia-butuh-komunitas-review-ai": {
    gradient: "linear-gradient(120deg,#312e81 0%,#4c1d95 50%,#be185d 100%)",
    elements: (
      <>
        <circle cx="100" cy="90" r="20" fill="#c084fc" />
        <circle cx="160" cy="70" r="16" fill="#22d3ee" />
        <circle cx="160" cy="110" r="16" fill="#34d399" />
        <circle cx="220" cy="90" r="20" fill="#f472b6" />
        <path d="M120 90 L140 90 M180 80 L200 90 M180 100 L200 90" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
        <text x="260" y="75" fill="#e9d5ff" fontSize="14" fontWeight="700" fontFamily="system-ui,sans-serif">Komunitas</text>
        <text x="260" y="100" fill="#c4b5fd" fontSize="12" fontFamily="system-ui,sans-serif">Review AI · ID</text>
      </>
    ),
  },
  "apa-itu-mcp-protokol-penghubung-ai": {
    gradient: "linear-gradient(135deg,#0f172a 0%,#1e1b4b 60%,#06b6d4 100%)",
    elements: (
      <>
        <rect x="80" y="55" width="50" height="70" rx="8" fill="#334155" stroke="#64748b" strokeWidth="2" />
        <rect x="95" y="70" width="20" height="40" rx="4" fill="#06b6d4" />
        <path d="M130 90 L200 90" stroke="#06b6d4" strokeWidth="4" />
        <circle cx="220" cy="90" r="12" fill="#06b6d4" />
        <rect x="240" y="40" width="70" height="45" rx="8" fill="rgba(6,182,212,0.2)" stroke="#06b6d4" />
        <rect x="240" y="95" width="70" height="45" rx="8" fill="rgba(139,92,246,0.2)" stroke="#8b5cf6" />
        <text x="255" y="68" fill="#cffafe" fontSize="9" fontFamily="system-ui,sans-serif">tool A</text>
        <text x="255" y="123" fill="#ddd6fe" fontSize="9" fontFamily="system-ui,sans-serif">tool B</text>
        <text x="330" y="95" fill="#94a3b8" fontSize="13" fontFamily="ui-monospace,monospace">MCP</text>
      </>
    ),
  },
  "vibe-coding-peluang-dan-jebakan": {
    gradient: "linear-gradient(120deg,#431407 0%,#7c2d12 40%,#f59e0b 100%)",
    elements: (
      <>
        <path d="M60 120 Q150 30 250 80 T440 60" stroke="#fbbf24" strokeWidth="3" fill="none" opacity="0.7" />
        <circle cx="150" cy="65" r="8" fill="#fbbf24" />
        <circle cx="280" cy="75" r="8" fill="#fb923c" />
        <circle cx="380" cy="55" r="8" fill="#f472b6" />
        <text x="80" y="100" fill="#fef3c7" fontSize="22" fontWeight="800" fontFamily="system-ui,sans-serif" opacity="0.9">vibe</text>
        <text x="170" y="130" fill="#fed7aa" fontSize="18" fontWeight="600" fontFamily="system-ui,sans-serif">coding</text>
      </>
    ),
  },
  "keamanan-ai-agent-checklist": {
    gradient: "linear-gradient(160deg,#14532d 0%,#1e3a2f 50%,#0f172a 100%)",
    elements: (
      <>
        <path d="M120 40 L120 55 L200 55 L200 130 L80 130 L80 55 L95 55 L107 40 Z" fill="none" stroke="#34d399" strokeWidth="3" />
        <path d="M95 70 L110 88 L135 62" stroke="#34d399" strokeWidth="3" fill="none" />
        <path d="M95 100 L110 118 L135 92" stroke="#34d399" strokeWidth="3" fill="none" />
        <rect x="240" y="50" width="160" height="80" rx="10" fill="rgba(52,211,153,0.1)" stroke="rgba(52,211,153,0.4)" />
        <text x="258" y="78" fill="#a7f3d0" fontSize="11" fontFamily="system-ui,sans-serif">✓ data privat</text>
        <text x="258" y="98" fill="#a7f3d0" fontSize="11" fontFamily="system-ui,sans-serif">✓ self-hosted</text>
        <text x="258" y="118" fill="#6ee7b7" fontSize="11" fontFamily="system-ui,sans-serif">✓ audit log</text>
      </>
    ),
  },
  "rag-vs-konteks-panjang": {
    gradient: "linear-gradient(135deg,#1e1b4b 0%,#312e81 50%,#7c3aed 100%)",
    elements: (
      <>
        <rect x="60" y="45" width="130" height="90" rx="10" fill="rgba(167,139,250,0.15)" stroke="#a78bfa" />
        <text x="80" y="80" fill="#ddd6fe" fontSize="13" fontWeight="700" fontFamily="system-ui,sans-serif">RAG</text>
        <text x="80" y="105" fill="#a78bfa" fontSize="10" fontFamily="system-ui,sans-serif">retrieve + gen</text>
        <text x="220" y="95" fill="#fff" fontSize="20" fontWeight="800" fontFamily="system-ui,sans-serif" opacity="0.6">VS</text>
        <rect x="270" y="45" width="150" height="90" rx="10" fill="rgba(34,211,238,0.12)" stroke="#22d3ee" />
        <text x="290" y="80" fill="#cffafe" fontSize="12" fontWeight="700" fontFamily="system-ui,sans-serif">1M tokens</text>
        <text x="290" y="105" fill="#22d3ee" fontSize="10" fontFamily="system-ui,sans-serif">context window</text>
      </>
    ),
  },
  "peta-karier-ai-untuk-orang-indonesia": {
    gradient: "linear-gradient(120deg,#0c4a6e 0%,#155e75 40%,#f59e0b 100%)",
    elements: (
      <>
        <circle cx="90" cy="120" r="8" fill="#22d3ee" />
        <circle cx="180" cy="80" r="8" fill="#34d399" />
        <circle cx="270" cy="100" r="8" fill="#fbbf24" />
        <circle cx="360" cy="55" r="10" fill="#f472b6" />
        <path d="M98 115 L172 85 L262 95 L352 60" stroke="rgba(255,255,255,0.35)" strokeWidth="2" fill="none" />
        <text x="200" y="130" fill="#e0f2fe" fontSize="13" fontWeight="600" fontFamily="system-ui,sans-serif">Peta Karier Indonesia</text>
      </>
    ),
  },
};

export function getCoverGradient(slug: string) {
  return covers[slug]?.gradient ?? "linear-gradient(135deg,#1e293b,#334155)";
}

export default function ArticleCoverArt({ slug }: { slug: string }) {
  const cover = covers[slug];
  if (!cover) return null;

  return (
    <svg
      viewBox="0 0 480 160"
      className="absolute inset-0 h-full w-full"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <pattern id={`grid-${slug}`} width="24" height="24" patternUnits="userSpaceOnUse">
        <path d="M24 0 L0 0 0 24" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
      </pattern>
      <rect width="480" height="160" fill={`url(#grid-${slug})`} />
      {cover.elements}
    </svg>
  );
}
