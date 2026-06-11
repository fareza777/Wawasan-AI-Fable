export type ModalityFlags = {
  text: boolean;
  image: boolean;
  video: boolean;
  audio: boolean;
};

export type ModelPricing = {
  label: string;
  input?: string;
  output?: string;
  subscription?: string;
  note?: string;
};

export type ModelSpec = {
  pricing: ModelPricing[];
  modalities: ModalityFlags;
};

export const modelSpecs: Record<string, ModelSpec> = {
  "claude-opus-4-5": {
    pricing: [
      {
        label: "API (per 1M token)",
        input: "$15",
        output: "$75",
        note: "Opus 4.5 — tier flagship Anthropic",
      },
      {
        label: "Claude Pro",
        subscription: "~$20/bulan",
        note: "Akses web + Claude Code terbatas",
      },
    ],
    modalities: { text: true, image: true, video: false, audio: false },
  },
  "gpt-5": {
    pricing: [
      {
        label: "API (per 1M token)",
        input: "$1.25–$15",
        output: "$10–$120",
        note: "Varian routing otomatis (fast vs thinking)",
      },
      {
        label: "ChatGPT Plus",
        subscription: "~$20/bulan",
      },
    ],
    modalities: { text: true, image: true, video: false, audio: true },
  },
  "gemini-3": {
    pricing: [
      {
        label: "API (per 1M token)",
        input: "$0.10–$2",
        output: "$0.40–$12",
        note: "Tier Flash sangat murah untuk volume",
      },
      {
        label: "Google AI Pro",
        subscription: "~$20/bulan",
        note: "Termasuk Gemini Advanced",
      },
    ],
    modalities: { text: true, image: true, video: true, audio: true },
  },
  "deepseek-v3": {
    pricing: [
      {
        label: "API (per 1M token)",
        input: "$0.27",
        output: "$1.10",
        note: "Salah satu harga API paling kompetitif",
      },
    ],
    modalities: { text: true, image: false, video: false, audio: false },
  },
  qwen3: {
    pricing: [
      {
        label: "API Alibaba Cloud",
        input: "Mulai ~$0.07",
        output: "Mulai ~$0.28",
        note: "Varian ukuran berbeda-beda",
      },
      {
        label: "Lokal (Ollama)",
        subscription: "Gratis",
        note: "Biaya hardware & listrik saja",
      },
    ],
    modalities: { text: true, image: true, video: false, audio: false },
  },
  "llama-4": {
    pricing: [
      {
        label: "Open weights",
        subscription: "Gratis",
        note: "Self-host atau via penyedia inference pihak ketiga",
      },
      {
        label: "Inference hosted",
        input: "Bervariasi",
        note: "Groq, Together, dll. — biasanya murah",
      },
    ],
    modalities: { text: true, image: true, video: false, audio: false },
  },
  "grok-4": {
    pricing: [
      {
        label: "X Premium+",
        subscription: "~$40/bulan",
        note: "Akses Grok di aplikasi X",
      },
      {
        label: "API xAI",
        input: "Kompetitif",
        output: "Kompetitif",
        note: "Harga API berubah — cek x.ai/api",
      },
    ],
    modalities: { text: true, image: true, video: false, audio: false },
  },
  "kimi-k2": {
    pricing: [
      {
        label: "API Moonshot",
        input: "~$0.15",
        output: "~$2.50",
        note: "MoE open-weight — murah untuk tugas agentic",
      },
    ],
    modalities: { text: true, image: false, video: false, audio: false },
  },
  "glm-4-6": {
    pricing: [
      {
        label: "API Zhipu",
        input: "Murah",
        output: "Murah",
        note: "Populer untuk coding agent di China & Asia",
      },
    ],
    modalities: { text: true, image: true, video: false, audio: false },
  },
  mistral: {
    pricing: [
      {
        label: "API (per 1M token)",
        input: "$0.10–$2",
        output: "$0.30–$6",
        note: "Model kecil sangat hemat",
      },
      {
        label: "Le Chat",
        subscription: "Gratis / Pro opsional",
      },
    ],
    modalities: { text: true, image: true, video: false, audio: false },
  },
  "gemma-3": {
    pricing: [
      {
        label: "Open weights (lokal)",
        subscription: "Gratis",
        note: "Ollama / LM Studio — tanpa biaya API",
      },
    ],
    modalities: { text: true, image: true, video: false, audio: false },
  },
};

export function getModelSpec(slug: string): ModelSpec | undefined {
  return modelSpecs[slug];
}
