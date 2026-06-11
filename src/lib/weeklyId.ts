import { WeeklyTrendingRepo } from "./trendshift";
import { Review } from "./types";

const TOPIC_ID: Record<string, string> = {
  "AI agent": "Agen AI",
  "AI coding assistant": "Asisten coding AI",
  "AI skills": "Skill AI",
  "AI infrastructure": "Infrastruktur AI",
  "AI workflow": "Alur kerja AI",
  "Self-hosted": "Self-hosted",
  "Curated list": "Kurasi",
  "Web scraping": "Web scraping",
  "MCP": "MCP",
  "NLP": "NLP",
  "Proxy": "Proxy",
  "Document processing": "Pemrosesan dokumen",
  "Fintech": "Fintech",
  "Programming examples": "Contoh pemrograman",
  "RAG": "RAG",
  "Workflow automation": "Otomasi workflow",
  "Resume building": "Pembuatan resume",
};

/** Apa yang bisa dilakukan pengguna — per topik GitHub */
const TOPIC_FUNCTION: Record<string, string> = {
  "AI agent": "Menjalankan agen AI otonom yang merencanakan dan mengeksekusi tugas multi-langkah",
  "AI coding assistant": "Membantu menulis, mengedit, mereview, dan memperbaiki kode lewat percakapan AI",
  "AI skills": "Menambahkan kemampuan siap pakai (skill) yang bisa dipanggil agen AI saat runtime",
  "AI infrastructure": "Menyediakan fondasi deploy, serving, dan orkestrasi layanan AI",
  "AI workflow": "Mengorkestrasi alur kerja AI dari input pengguna hingga output akhir",
  "Self-hosted": "Dijalankan di infrastruktur sendiri — data tidak wajib keluar ke cloud pihak ketiga",
  "Curated list": "Menyediakan daftar kurasi sumber daya terbaik dalam satu tempat",
  "Web scraping": "Mengambil dan mengekstrak data dari halaman web secara otomatis",
  MCP: "Menghubungkan model AI ke aplikasi eksternal lewat Model Context Protocol",
  NLP: "Memproses, memahami, dan menghasilkan teks bahasa alami",
  Proxy: "Meneruskan permintaan API sebagai perantara antara klien dan layanan AI",
  "Document processing": "Membaca, mengekstrak, dan mengolah isi dokumen (PDF, Office, dll.)",
  Fintech: "Menangani kasus keuangan, pembayaran, atau analisis data finansial",
  "Programming examples": "Menyediakan contoh implementasi yang bisa langsung diadaptasi",
  RAG: "Menggabungkan pencarian dokumen dengan generasi jawaban AI yang ter-grounding",
  "Workflow automation": "Mengotomasi rantai langkah kerja berulang tanpa coding manual",
  "Resume building": "Membantu menyusun, memformat, dan mengoptimalkan resume/CV",
};

const DESC_REPLACEMENTS: [RegExp, string][] = [
  [/\bAI[- ]powered\b/gi, "berbasis AI"],
  [/\bpersonal AI assistant\b/gi, "asisten AI personal"],
  [/\bAI coding assistant\b/gi, "asisten coding AI"],
  [/\bAI assistant\b/gi, "asisten AI"],
  [/\bopen[- ]source\b/gi, "open-source"],
  [/\bframework\b/gi, "kerangka kerja"],
  [/\blibrary\b/gi, "pustaka"],
  [/\bself[- ]hosted\b/gi, "self-hosted"],
  [/\blocal[- ]first\b/gi, "prioritas lokal"],
  [/\bautonomous\b/gi, "otonom"],
  [/\bagentic\b/gi, "agentic"],
  [/\bbrowser extension\b/gi, "ekstensi browser"],
  [/\bworkflow automation\b/gi, "otomasi workflow"],
  [/\bweb scraping\b/gi, "web scraping"],
  [/\bcurated list\b/gi, "daftar kurasi"],
  [/\bchatbot\b/gi, "chatbot"],
  [/\bcommand[- ]line\b/gi, "baris perintah"],
  [/\bterminal\b/gi, "terminal"],
  [/\bplugin\b/gi, "plugin"],
  [/\bextension\b/gi, "ekstensi"],
  [/\bautomation\b/gi, "otomasi"],
  [/\bmonitoring\b/gi, "pemantauan"],
  [/\bdeployment\b/gi, "deployment"],
  [/\bintegration\b/gi, "integrasi"],
];

export function translateTopic(topic: string): string {
  return TOPIC_ID[topic] ?? topic;
}

function shortRepoName(fullName: string): string {
  return fullName.split("/")[1] ?? fullName;
}

function localizeDescription(desc: string): string {
  let out = desc.trim();
  for (const [re, repl] of DESC_REPLACEMENTS) {
    out = out.replace(re, repl);
  }
  return out;
}

function finishSentence(text: string): string {
  const trimmed = text.trim();
  if (!trimmed) return trimmed;
  return /[.!?]$/.test(trimmed) ? trimmed : `${trimmed}.`;
}

function dedupe(items: string[]): string[] {
  const seen = new Set<string>();
  return items.filter((item) => {
    const key = item.toLowerCase().slice(0, 48);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

export function getIndonesianDescription(repo: WeeklyTrendingRepo, review?: Review): string {
  if (review?.summary) return review.summary;

  const name = shortRepoName(repo.fullName);

  if (repo.description?.trim()) {
    return finishSentence(`${name}: ${localizeDescription(repo.description)}`);
  }

  const primaryTopic = repo.topics[0];
  if (primaryTopic && TOPIC_FUNCTION[primaryTopic]) {
    return `${name} — ${TOPIC_FUNCTION[primaryTopic]}.`;
  }

  const topics = repo.topics.map(translateTopic);
  if (topics.length > 0) {
    return `${name} — alat/proyek dengan fokus ${topics.join(", ")}.`;
  }

  return `${name} — lihat README di GitHub untuk ringkasan fungsi resmi proyek ini.`;
}

export function getWeeklyHighlights(repo: WeeklyTrendingRepo, review?: Review): string[] {
  if (review?.highlights?.length) return review.highlights.slice(0, 8);
  if (review?.pros?.length) return review.pros.slice(0, 6);

  const items: string[] = [];

  for (const topic of repo.topics) {
    const fn = TOPIC_FUNCTION[topic];
    if (fn) items.push(fn);
  }

  if (repo.description?.trim()) {
    const clauses = repo.description
      .split(/[.·•|]\s+|\s+—\s+|\s+–\s+/)
      .map((p) => p.trim())
      .filter((p) => p.length > 10);

    for (const clause of clauses.slice(0, 4)) {
      const localized = finishSentence(localizeDescription(clause));
      const framed = localized.charAt(0).toUpperCase() + localized.slice(1);
      items.push(framed);
    }
  }

  if (repo.language) {
    items.push(`Stack utama: ${repo.language}`);
  }

  if (items.length === 0) {
    items.push(
      `Buka repositori GitHub ${repo.fullName} untuk melihat dokumentasi fitur dan cara pemakaian.`,
    );
  }

  return dedupe(items).slice(0, 6);
}
