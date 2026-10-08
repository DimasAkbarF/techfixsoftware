"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Wrench, Shield, Sparkles, HardDrive, CheckCircle2 } from "lucide-react";
import { services } from "@/data/services";
import type { ServiceGroup, Service } from "@/types";

const groups: Array<{
  id: ServiceGroup;
  title: string;
  badge: string;
  icon: typeof Wrench;
  description: string;
}> = [
  {
    id: "repair",
    title: "Repair & Pemulihan",
    badge: "Darurat & Kerusakan",
    icon: Wrench,
    description: "Penanganan untuk perangkat yang stuck logo, gagal boot, soft brick, atau crash sistem.",
  },
  {
    id: "modification",
    title: "System Modification",
    badge: "Root & Bootloader",
    icon: Shield,
    description: "Akses superuser penuh via Magisk dan pembukaan kunci bootloader resmi.",
  },
  {
    id: "customization",
    title: "Customization",
    badge: "ROM & Recovery",
    icon: Sparkles,
    description: "Instalasi custom ROM alternatif dan custom recovery (TWRP/OrangeFox).",
  },
  {
    id: "firmware",
    title: "Firmware Stock",
    badge: "Original Pabrik",
    icon: HardDrive,
    description: "Pemasangan kembali firmware resmi pabrik, downgrade, dan update recovery.",
  },
];

export function GroupedServicesSection() {
  const [activeGroup, setActiveGroup] = useState<ServiceGroup>("repair");

  const filteredServices = services.filter((s) => s.group === activeGroup);

  return (
    <section aria-labelledby="services-grouped-heading" className="border-b border-border bg-white py-14 md:py-20">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-accent">
            Katalog Layanan Spesialis
          </p>
          <h2 id="services-grouped-heading" className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Layanan Teknis Berdasarkan Kebutuhan
          </h2>
          <p className="mt-2 text-sm sm:text-base leading-relaxed text-muted-foreground">
            Dikelompokkan secara terstruktur untuk membantu Anda menemukan solusi yang tepat tanpa kebingungan terminologi.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mt-8 flex flex-wrap justify-center gap-2 border-b border-border pb-4">
          {groups.map((grp) => {
            const Icon = grp.icon;
            const isActive = activeGroup === grp.id;
            return (
              <button
                key={grp.id}
                type="button"
                onClick={() => setActiveGroup(grp.id)}
                className={`flex items-center gap-2 rounded-lg px-4 py-2.5 text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-xs"
                    : "bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <Icon className={`size-4 ${isActive ? "text-accent" : "text-muted-foreground"}`} />
                <span>{grp.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Group Description */}
        <div className="mx-auto mt-4 max-w-xl text-center">
          <p className="text-xs text-muted-foreground">
            {groups.find((g) => g.id === activeGroup)?.description}
          </p>
        </div>

        {/* Services Grid for Active Group */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredServices.map((service: Service) => (
            <div
              key={service.id}
              className="group flex flex-col justify-between rounded-xl border border-border bg-card p-6 shadow-xs transition-all duration-150 hover:border-accent hover:shadow-card-hover"
            >
              <div>
                <div className="flex flex-wrap items-center gap-1.5">
                  {service.badges?.map((badge) => (
                    <span
                      key={badge}
                      className="rounded-md bg-accent-subtle/80 px-2 py-0.5 text-[11px] font-semibold text-accent"
                    >
                      {badge}
                    </span>
                  ))}
                  {service.featured && (
                    <span className="rounded-md bg-muted px-2 py-0.5 text-[11px] font-semibold text-slate-600">
                      Sering Ditangani
                    </span>
                  )}
                </div>

                <h3 className="mt-3.5 text-lg font-bold text-foreground group-hover:text-accent transition-colors">
                  {service.name}
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                  {service.shortDescription}
                </p>

                {/* Key Checklist Preview */}
                {service.useCases && service.useCases.length > 0 && (
                  <ul className="mt-4 space-y-1.5 border-t border-border/60 pt-3">
                    {service.useCases.slice(0, 2).map((uc, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-foreground/80">
                        <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-success" />
                        <span className="line-clamp-1">{uc}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-border/80 pt-4">
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-accent hover:text-accent-hover transition-colors"
                >
                  <span>Detail &amp; Alur Proses</span>
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>

                <span className="text-[11px] text-muted-foreground">
                  {service.remoteAvailable ? "Bisa Remote" : "Cek Kompatibilitas"}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-accent hover:text-accent-hover transition-colors"
          >
            <span>Buka Seluruh Katalog Layanan Lengkap (9 Layanan) →</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
