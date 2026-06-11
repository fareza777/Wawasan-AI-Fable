export type ScoreChange = {
  slug: string;
  type: "repo" | "model" | "stack";
  name: string;
  previous: number;
  current: number;
  date: string;
  reason: string;
};

export const scoreChangelog: ScoreChange[] = [
  {
    slug: "openclaw",
    type: "repo",
    name: "OpenClaw",
    previous: 9.0,
    current: 9.2,
    date: "2026-06-01",
    reason: "Ekosistem skill dan stabilitas kanal WhatsApp meningkat signifikan.",
  },
  {
    slug: "claude-opus-4-5",
    type: "model",
    name: "Claude Opus 4.5",
    previous: 9.3,
    current: 9.5,
    date: "2026-05-28",
    reason: "Peningkatan tool-use dan stabilitas pada tugas panjang.",
  },
  {
    slug: "cursor",
    type: "stack",
    name: "Cursor",
    previous: 9.0,
    current: 9.2,
    date: "2026-05-20",
    reason: "Mode agent lebih stabil dan iterasi UI lebih cepat.",
  },
  {
    slug: "n8n",
    type: "repo",
    name: "n8n",
    previous: 8.8,
    current: 9.0,
    date: "2026-05-15",
    reason: "Node AI baru dan dokumentasi workflow lebih lengkap.",
  },
  {
    slug: "deepseek-r1",
    type: "model",
    name: "DeepSeek R1",
    previous: 8.6,
    current: 8.8,
    date: "2026-05-10",
    reason: "Reasoning chain lebih konsisten pada coding task.",
  },
];
