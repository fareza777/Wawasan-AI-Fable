export type GitHubStats = { stars: number; forks: number };

// Results (including failures) are memoized per build worker so the same repo
// is fetched at most once. Stats are fetched at build time (static export).
const cache = new Map<string, GitHubStats | null>();

// Once GitHub rate-limits us (unauthenticated: 60 req/hour per IP — easy to hit
// on shared CI builders), stop calling it for the rest of the build instead of
// stalling every page. Pages simply render without the star count.
let rateLimited = false;

const TIMEOUT_MS = 5_000;

export async function fetchGitHubStats(repoUrl: string): Promise<GitHubStats | null> {
  const match = repoUrl.match(/github\.com\/([^/]+)\/([^/]+)/);
  if (!match) return null;
  const key = `${match[1]}/${match[2]}`;
  if (cache.has(key)) return cache.get(key)!;
  if (rateLimited) return null;

  const headers: Record<string, string> = { Accept: "application/vnd.github+json" };
  // Optional build variable for a higher rate limit (5,000 req/hour).
  if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

  try {
    const res = await fetch(`https://api.github.com/repos/${key}`, {
      next: { revalidate: 3600 },
      headers,
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
    if (res.status === 403 || res.status === 429) {
      rateLimited = true;
      cache.set(key, null);
      return null;
    }
    if (!res.ok) {
      cache.set(key, null);
      return null;
    }
    const data = await res.json();
    const stats = { stars: data.stargazers_count ?? 0, forks: data.forks_count ?? 0 };
    cache.set(key, stats);
    return stats;
  } catch {
    // Timeout / network error: treat like rate limiting so the build keeps moving.
    rateLimited = true;
    cache.set(key, null);
    return null;
  }
}
