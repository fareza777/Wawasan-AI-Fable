export type GitHubStats = { stars: number; forks: number };

const cache = new Map<string, GitHubStats>();

export async function fetchGitHubStats(repoUrl: string): Promise<GitHubStats | null> {
  const match = repoUrl.match(/github\.com\/([^/]+)\/([^/]+)/);
  if (!match) return null;
  const key = `${match[1]}/${match[2]}`;
  if (cache.has(key)) return cache.get(key)!;

  try {
    const res = await fetch(`https://api.github.com/repos/${key}`, {
      next: { revalidate: 3600 },
      headers: { Accept: "application/vnd.github+json" },
    });
    if (!res.ok) return null;
    const data = await res.json();
    const stats = { stars: data.stargazers_count ?? 0, forks: data.forks_count ?? 0 };
    cache.set(key, stats);
    return stats;
  } catch {
    return null;
  }
}
