export default function GitHubStars({ stars, forks }: { stars: number; forks: number }) {
  return (
    <div className="mt-4 flex gap-4 font-mono text-xs text-slate-400">
      <span>★ {stars.toLocaleString("id-ID")} stars</span>
      <span>⑂ {forks.toLocaleString("id-ID")} forks</span>
    </div>
  );
}
