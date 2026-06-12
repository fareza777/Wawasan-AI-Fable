export type ScoreDetail = {
  label: string;
  value: number; // 0-10
};

export type Review = {
  slug: string;
  name: string;
  tagline: string;
  tags: string[];
  score: number; // 0-10 skor keseluruhan
  scores: ScoreDetail[];
  summary: string;
  highlights?: string[];
  pros: string[];
  cons: string[];
  verdict: string;
  body: string[]; // paragraf ulasan
  link?: string;
  linkLabel?: string;
  date: string; // YYYY-MM-DD
  updatedAt?: string; // YYYY-MM-DD
  featured?: boolean;
  /** Artificial Analysis intelligence index (0-100), optional. Disusun otomatis oleh cron harian dari data AA API. */
  aa_intelligence_index?: number;
  /** Artificial Analysis coding index (0-100), optional. */
  aa_coding_index?: number;
  /** Harga input per 1M token (USD), optional. */
  aa_price_input?: number;
  /** Harga output per 1M token (USD), optional. */
  aa_price_output?: number;
  /** Tanggal benchmark data disinkronkan dari AA (YYYY-MM-DD), optional. */
  aa_synced_at?: string;
};

export type Artikel = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readingTime: string;
  body: { heading?: string; paragraphs: string[] }[];
};
