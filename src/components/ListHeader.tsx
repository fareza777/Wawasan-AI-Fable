export default function ListHeader({
  kicker,
  title,
  description,
}: {
  kicker: string;
  title: string;
  description: string;
}) {
  return (
    <header className="mx-auto max-w-3xl text-center">
      <p className="font-mono text-sm font-semibold uppercase tracking-widest text-neon-400">
        {kicker}
      </p>
      <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-50 sm:text-4xl">
        {title}
      </h1>
      <p className="mt-4 leading-relaxed text-slate-300">{description}</p>
    </header>
  );
}
