"use client";

import { useState } from "react";
import Link from "next/link";
import { models } from "@/data/models";
import { getModelSpec, ModalityFlags } from "@/data/modelSpecs";
import { ScoreBar, scoreColor } from "./Score";

function ModalityBadges({ m }: { m: ModalityFlags }) {
  const items = [
    { key: "Teks", on: m.text },
    { key: "Gambar", on: m.image },
    { key: "Video", on: m.video },
    { key: "Audio", on: m.audio },
  ];

  return (
    <div className="flex flex-wrap gap-1.5">
      {items.map(({ key, on }) => (
        <span
          key={key}
          className={`rounded-md px-2 py-0.5 text-xs font-medium ${
            on
              ? "bg-emerald-500/15 text-emerald-400"
              : "bg-ink-800 text-slate-600 line-through"
          }`}
        >
          {key}
        </span>
      ))}
    </div>
  );
}

function apiPricingOnly(spec: ReturnType<typeof getModelSpec>) {
  return spec?.pricing.filter((p) => p.input || p.output) ?? [];
}

export default function ModelCompare() {
  const [a, setA] = useState(models[0]?.slug ?? "");
  const [b, setB] = useState(models[1]?.slug ?? "");

  const modelA = models.find((m) => m.slug === a);
  const modelB = models.find((m) => m.slug === b);

  if (!modelA || !modelB) return null;

  const specA = getModelSpec(modelA.slug);
  const specB = getModelSpec(modelB.slug);

  const labels = [
    ...new Set([...modelA.scores.map((s) => s.label), ...modelB.scores.map((s) => s.label)]),
  ];

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
              <span className={`font-mono text-2xl font-bold ${scoreColor(m.score)}`}>
                {m.score.toFixed(1)}
              </span>
            </div>
            <p className="mt-1 text-sm text-slate-400">{m.tagline}</p>
            <Link href={`/model/${m.slug}`} className="mt-3 inline-block text-sm text-neon-400 hover:underline">
              Baca review →
            </Link>
          </div>
        ))}
      </div>

      <section className="panel-white mt-8 rounded-2xl border p-6 sm:p-8">
        <h3 className="text-lg font-bold text-slate-100">Skor rinci</h3>
        <div className="mt-5 space-y-5">
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
      </section>

      <section className="panel-white mt-8 rounded-2xl border p-6 sm:p-8">
        <h3 className="text-lg font-bold text-slate-100">Modalitas input</h3>
        <p className="mt-1 text-sm text-slate-400">
          Jenis data yang bisa diproses model — teks, gambar, video, atau audio.
        </p>
        <div className="mt-5 grid gap-6 lg:grid-cols-2">
          <div>
            <p className="mb-2 text-sm font-semibold text-slate-200">{modelA.name}</p>
            <ModalityBadges m={specA?.modalities ?? { text: true, image: false, video: false, audio: false }} />
          </div>
          <div>
            <p className="mb-2 text-sm font-semibold text-slate-200">{modelB.name}</p>
            <ModalityBadges m={specB?.modalities ?? { text: true, image: false, video: false, audio: false }} />
          </div>
        </div>
      </section>

      <section className="panel-white mt-8 rounded-2xl border p-6 sm:p-8">
        <h3 className="text-lg font-bold text-slate-100">Biaya API</h3>
        <p className="mt-1 text-sm text-slate-400">
          Perkiraan biaya API per token — angka dapat berubah; cek situs resmi sebelum memutuskan.
        </p>
        <div className="mt-5 grid gap-6 lg:grid-cols-2">
          {[modelA, modelB].map((m) => {
            const pricing = apiPricingOnly(m.slug === modelA.slug ? specA : specB);
            return (
              <div key={m.slug}>
                <p className="mb-3 text-sm font-semibold text-slate-200">{m.name}</p>
                {pricing.length ? (
                  <ul className="space-y-3 text-sm text-slate-300">
                    {pricing.map((p) => (
                      <li
                        key={p.label}
                        className="rounded-xl border border-ink-700/60 bg-ink-900/40 p-3"
                      >
                        <p className="font-medium text-slate-100">{p.label}</p>
                        {p.input && (
                          <p className="mt-1">
                            Input: <span className="font-mono text-neon-400">{p.input}</span>
                          </p>
                        )}
                        {p.output && (
                          <p>
                            Output: <span className="font-mono text-neon-400">{p.output}</span>
                          </p>
                        )}
                        {p.note && <p className="mt-1 text-xs text-slate-500">{p.note}</p>}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-slate-500">Data harga API belum tersedia.</p>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
