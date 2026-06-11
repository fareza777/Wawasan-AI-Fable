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

export function translateTopic(topic: string): string {
  return TOPIC_ID[topic] ?? topic;
}

export function getIndonesianDescription(repo: WeeklyTrendingRepo, review?: Review): string {
  if (review?.summary) return review.summary;

  const topics = repo.topics.map(translateTopic);
  if (topics.length > 0) {
    return `${repo.fullName} adalah repositori open-source yang sedang naik daun minggu ini, dengan fokus pada ${topics.join(", ")}.`;
  }

  return `${repo.fullName} adalah repositori open-source dengan momentum tinggi di GitHub minggu ini menurut data Trendshift.`;
}

export function getWeeklyHighlights(repo: WeeklyTrendingRepo, review?: Review): string[] {
  if (review?.highlights?.length) return review.highlights.slice(0, 8);
  if (review?.pros?.length) {
    return review.pros.slice(0, 6);
  }

  const items = repo.topics.map((t) => `Kategori: ${translateTopic(t)}`);
  if (repo.language) {
    items.unshift(`Dibangun dengan ${repo.language}`);
  }
  if (items.length === 0) {
    items.push(
      `${repo.fullName} sedang naik daun minggu ini — tim editorial menyiapkan ringkasan fitur lengkap.`,
    );
  }

  return items.slice(0, 6);
}
