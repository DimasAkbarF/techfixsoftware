"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Scale } from "lucide-react";
import { comparisonsList } from "@/data/comparisons";
import type { ComparisonItem } from "@/types";

export function ComparisonSection() {
  const [selectedId, setSelectedId] = useState<string>(comparisonsList[0].id);

  const current: ComparisonItem =
    comparisonsList.find((c) => c.id === selectedId) || comparisonsList[0];

  return (
    <section aria-labelledby="comparison-heading" className="border-b border-border bg-slate-50/50 py-14 md:py-20">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-accent-subtle px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
            <Scale className="size-3.5" aria-hidden="true" />
            <span>Panduan Memilih Solusi</span>
          </div>
          <h2 id="comparison-heading" className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Bandingkan Sebelum Mengambil Keputusan
          </h2>
          <p className="mt-2 text-sm sm:text-base leading-relaxed text-muted-foreground">
            Banyak istilah teknis yang membingungkan. Tabel perbandingan berikut membantu Anda mengenali kondisi riil sebelum menghubungi kami.
          </p>
        </div>

        {/* Comparison Selector Tabs */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {comparisonsList.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelectedId(item.id)}
              className={`rounded-lg px-3.5 py-2 text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedId === item.id
                  ? "border border-accent bg-accent text-white shadow-xs"
                  : "border border-border bg-card text-muted-foreground hover:border-accent/40 hover:text-foreground"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Selected Comparison Card */}
        <div className="mx-auto mt-8 max-w-3xl rounded-xl border border-border bg-card p-5 sm:p-7 shadow-xs">
          <div className="border-b border-border pb-4">
            <h3 className="text-lg sm:text-xl font-bold text-foreground">
              {current.title}
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
              {current.subtitle}
            </p>
          </div>

          {/* Side by Side Comparison Grid */}
          <div className="mt-6 divide-y divide-border/60">
            {current.rows.map((row, idx) => (
              <div key={idx} className="py-3.5 grid grid-cols-1 sm:grid-cols-[160px_1fr_1fr] gap-2 sm:gap-4 items-start text-xs sm:text-sm">
                <span className="font-semibold text-foreground sm:text-slate-500">
                  {row.feature}
                </span>
                <div className="rounded-md bg-muted/40 sm:bg-transparent p-2.5 sm:p-0">
                  <span className="block sm:hidden text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-1">
                    {current.leftLabel}
                  </span>
                  <span className="text-foreground leading-relaxed">{row.left}</span>
                </div>
                <div className="rounded-md bg-muted/40 sm:bg-transparent p-2.5 sm:p-0">
                  <span className="block sm:hidden text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-1">
                    {current.rightLabel}
                  </span>
                  <span className="text-foreground leading-relaxed">{row.right}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Verdict Box */}
          <div className="mt-6 rounded-lg border border-accent/20 bg-accent-subtle/50 p-4">
            <span className="text-xs font-bold uppercase tracking-wider text-accent">
              Kesimpulan Rekomendasi
            </span>
            <p className="mt-1 text-xs sm:text-sm leading-relaxed text-foreground">
              {current.verdict}
            </p>
            <div className="mt-3">
              <Link
                href={current.recommendedServiceHref}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-accent hover:text-accent-hover transition-colors"
              >
                <span>{current.recommendedServiceLabel}</span>
                <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
