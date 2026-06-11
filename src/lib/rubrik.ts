import { ContentType } from "./storage";

export const rubrikStyle: Record<
  ContentType,
  { accent: string; border: string; label: string; gradient: string }
> = {
  repo: {
    accent: "text-cyan-300",
    border: "border-cyan-500/30",
    label: "Repo",
    gradient: "from-cyan-500/20 to-cyan-500/5",
  },
  model: {
    accent: "text-violet-300",
    border: "border-violet-500/30",
    label: "Model",
    gradient: "from-violet-500/20 to-violet-500/5",
  },
  stack: {
    accent: "text-emerald-300",
    border: "border-emerald-500/30",
    label: "Tools",
    gradient: "from-emerald-500/20 to-emerald-500/5",
  },
  berita: {
    accent: "text-amber-300",
    border: "border-amber-500/30",
    label: "Artikel",
    gradient: "from-amber-500/20 to-amber-500/5",
  },
  weekly: {
    accent: "text-neon-400",
    border: "border-neon-500/30",
    label: "Weekly",
    gradient: "from-neon-500/20 to-violet-glow/5",
  },
};

export function slugifyTag(tag: string) {
  return tag
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function tagFromSlug(slug: string) {
  return slug.replace(/-/g, " ");
}
