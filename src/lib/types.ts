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
