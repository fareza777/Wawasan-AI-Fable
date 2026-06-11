// Ikon brand per slug — prioritas: map eksplisit → GitHub org → favicon domain → Simple Icons

const SLUG_ICONS: Record<string, string> = {
  // Repo
  "openclaw": "https://github.com/openclaw.png",
  "hermes-agent": "https://github.com/NousResearch.png",
  "deer-flow": "https://github.com/bytedance.png",
  "n8n": "https://cdn.simpleicons.org/n8n",
  "dify": "https://www.google.com/s2/favicons?domain=dify.ai&sz=128",
  "ollama": "https://cdn.simpleicons.org/ollama",
  "open-webui": "https://www.google.com/s2/favicons?domain=openwebui.com&sz=128",
  "langgraph": "https://cdn.simpleicons.org/langchain",
  "flowise": "https://www.google.com/s2/favicons?domain=flowiseai.com&sz=128",
  "crewai": "https://www.google.com/s2/favicons?domain=crewai.com&sz=128",
  "comfyui": "https://www.google.com/s2/favicons?domain=comfy.org&sz=128",

  // Stack
  "claude-code": "https://cdn.simpleicons.org/anthropic",
  cursor: "https://www.google.com/s2/favicons?domain=cursor.com&sz=128",
  codex: "https://www.google.com/s2/favicons?domain=openai.com&sz=128",
  windsurf: "https://www.google.com/s2/favicons?domain=windsurf.com&sz=128",
  cline: "https://github.com/cline.png",
  "gemini-cli": "https://cdn.simpleicons.org/google",
  "github-copilot": "https://cdn.simpleicons.org/github",
  v0: "https://cdn.simpleicons.org/vercel",
  "bolt-new": "https://www.google.com/s2/favicons?domain=bolt.new&sz=128",
  aider: "https://www.google.com/s2/favicons?domain=aider.chat&sz=128",

  // Model
  "claude-opus-4-5": "https://cdn.simpleicons.org/anthropic",
  "gpt-5": "https://cdn.simpleicons.org/openai",
  "gemini-3": "https://cdn.simpleicons.org/google",
  "deepseek-v3": "https://www.google.com/s2/favicons?domain=deepseek.com&sz=128",
  qwen3: "https://www.google.com/s2/favicons?domain=qwen.ai&sz=128",
  "llama-4": "https://cdn.simpleicons.org/meta",
  "grok-4": "https://www.google.com/s2/favicons?domain=x.ai&sz=128",
  "kimi-k2": "https://www.google.com/s2/favicons?domain=moonshot.ai&sz=128",
  "glm-4-6": "https://www.google.com/s2/favicons?domain=z.ai&sz=128",
  mistral: "https://cdn.simpleicons.org/mistral",
  "gemma-3": "https://cdn.simpleicons.org/google",
};

function githubOrgIcon(link: string): string | null {
  const match = link.match(/github\.com\/([^/]+)/);
  if (!match) return null;
  return `https://github.com/${match[1]}.png`;
}

function faviconFromLink(link: string): string | null {
  try {
    const host = new URL(link).hostname.replace(/^www\./, "");
    return `https://www.google.com/s2/favicons?domain=${host}&sz=128`;
  } catch {
    return null;
  }
}

export function getItemIcon(slug: string, link?: string): string | null {
  if (SLUG_ICONS[slug]) return SLUG_ICONS[slug];
  if (link) {
    const gh = githubOrgIcon(link);
    if (gh) return gh;
    return faviconFromLink(link);
  }
  return null;
}
