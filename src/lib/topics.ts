// Kept free of data imports so client components can use it without pulling
// the weeklyTop dataset into client/SSR bundles.
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
