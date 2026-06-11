"use client";

import { useState } from "react";
import Link from "next/link";
import { models } from "@/data/models";
import { ScoreBar } from "./Score";
import { scoreColor } from "./Score";

export default function ModelCompare() {
  const [a, setA] = useState(models[0]?.slug ?? "");
  const [b, setB] = useState(models[1]?.slug ?? "");

  const modelA = models.find((m) => m.slug === a);
  const modelB = models.find((m) => m.slug === b);

  if (!modelA || !modelB) return null;

  const labels = [...new Set([...modelA.scores.map((s) => s.label), ...modelB.scores.map((s) => s.label)])];

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row">
        <select
          value={a}
          onChange={(e) => setA(e.target.value)}
          className="h-11 flex-1 rounded-xl border border-ink-600 bg-ink-900/60 px-4 text-sm text-slate-200"
        >
          {models.map((m) => (
            <option key={m.slug} value={m.slug}>
              {m.name}
            </option>
          ))}
        </select>
        <span className="self-center font-mono text-slate-500">vs</span>
        <select
          value={b}
          onChange={(e) => setB(e.target.value)}
          className="h-11 flex-1 rounded-xl border border-ink-600 bg-ink-900/60 px-4 text-sm text-slate-200"
        >
          {models.map((m) => (
            <option key={m.slug} value={m.slug}>
              {m.name}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {[modelA, modelB].map((m) => (
          <div key={m.slug} className="panel-white rounded-2xl border p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-100">{m.name}</h3>
              <span className={`font-mono text-2xl font-bold ${scoreColor(m.score)}`}>{m.score.toFixed(1)}</span>
            </div>
            <p className="mt-1 text-sm text-slate-400">{m.tagline}</p>
            <Link href={`/model/${m.slug}`} className="mt-3 inline-block text-sm text-neon-400 hover:underline">
              Baca review →
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-8 space-y-5">
        {labels.map((label) => {
          const va = modelA.scores.find((s) => s.label === label)?.value ?? 0;
          const vb = modelB.scores.find((s) => s.label === label)?.value ?? 0;
          return (
            <div key={label} className="grid gap-4 lg:grid-cols-2">
              <ScoreBar label={`${modelA.name}: ${label}`} value={va} />
              <ScoreBar label={`${modelB.name}: ${label}`} value={vb} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
