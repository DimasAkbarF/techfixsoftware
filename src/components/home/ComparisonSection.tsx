"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { comparisonsList } from "@/data/comparisons";
import type { ComparisonItem } from "@/types";

export function ComparisonSection() {
  const [selectedId, setSelectedId] = useState<string>(comparisonsList[0].id);

  const current: ComparisonItem =
    comparisonsList.find((c) => c.id === selectedId) || comparisonsList[0];

  return (
    <section aria-labelledby="comparison-heading" className="bg-muted/30 py-16 md:py-24" id="perbandingan">
      <div className="container-page max-w-5xl">
        <div className="text-center mb-10">
          <h2 id="comparison-heading" className="text-xl font-bold tracking-tight sm:text-2xl text-foreground mb-3">
            Bandingkan Sebelum Memutuskan
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
            Jangan sampai salah ambil tindakan. Pahami perbedaan antara kendala atau layanan melalui tabel ringkas kami.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {comparisonsList.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedId(item.id)}
              className={`px-4 py-2 text-sm font-semibold rounded-full border transition-colors duration-200 cursor-pointer ${
                selectedId === item.id
                  ? "bg-accent text-accent-foreground border-accent"
                  : "bg-card text-muted-foreground border-border hover:border-accent hover:text-foreground"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* The Comparison Content */}
        <div className="animate-fade-in bg-card border border-border rounded-[var(--radius-xl)] shadow-card overflow-hidden">
          <div className="p-6 sm:p-8 border-b border-border text-center bg-muted/20">
            <h3 className="text-2xl font-bold text-foreground mb-2">{current.title}</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
              {current.subtitle}
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] text-left border-collapse">
              <thead>
                <tr>
                  <th className="w-1/3 p-4 sm:p-6 border-b border-border bg-muted/30 text-sm font-medium text-muted-foreground">Kriteria</th>
                  <th className="w-1/3 p-4 sm:p-6 border-b border-border bg-card align-top">
                    <div className="flex flex-col items-center text-center gap-3">
                      {/* Optional Mockup Placeholder for left column */}
                      <div className="relative w-16 h-16 opacity-80 mix-blend-multiply dark:mix-blend-screen hidden sm:block">
                        <Image src="/mockup.webp" alt="Mockup" fill className="object-contain" />
                      </div>
                      <span className="font-bold text-lg text-foreground">{current.leftLabel}</span>
                    </div>
                  </th>
                  <th className="w-1/3 p-4 sm:p-6 border-b border-border bg-muted/10 align-top">
                    <div className="flex flex-col items-center text-center gap-3">
                      {/* Optional Mockup Placeholder for right column */}
                      <div className="relative w-16 h-16 opacity-80 mix-blend-multiply dark:mix-blend-screen hidden sm:block">
                        <Image src="/mockup1.webp" alt="Mockup" fill className="object-contain" />
                      </div>
                      <span className="font-bold text-lg text-foreground">{current.rightLabel}</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {current.rows.map((row, index) => (
                  <tr key={index} className="group hover:bg-muted/50 transition-colors border-b border-border/50 last:border-0">
                    <td className="p-4 sm:p-6 font-semibold text-foreground bg-muted/30 group-hover:bg-transparent transition-colors">
                      {row.feature}
                    </td>
                    <td className="p-4 sm:p-6 text-muted-foreground text-sm leading-relaxed">
                      {row.left}
                    </td>
                    <td className="p-4 sm:p-6 text-muted-foreground text-sm leading-relaxed bg-muted/10 group-hover:bg-transparent transition-colors">
                      {row.right}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-6 sm:p-8 bg-muted/20 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <span className="block text-xs font-bold text-accent uppercase tracking-wider mb-2">Kesimpulan</span>
              <p className="text-foreground text-sm leading-relaxed font-medium">
                {current.verdict}
              </p>
            </div>
            {current.recommendedServiceHref && (
              <Link
                href={current.recommendedServiceHref}
                className="shrink-0 inline-flex items-center justify-center gap-2 bg-foreground text-background hover:bg-foreground/90 px-5 py-2.5 rounded-md font-semibold text-sm transition-colors"
              >
                {current.recommendedServiceLabel} <ArrowRight className="w-4 h-4" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
