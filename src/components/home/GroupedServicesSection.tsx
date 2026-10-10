"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import type { ServiceGroup, Service } from "@/types";

const groups: Array<{
  id: ServiceGroup;
  title: string;
  description: string;
}> = [
  {
    id: "repair",
    title: "Repair & Pemulihan",
    description: "Penanganan perangkat stuck logo, gagal boot, atau crash sistem.",
  },
  {
    id: "modification",
    title: "System Modification",
    description: "Akses superuser via Magisk dan pembukaan kunci bootloader.",
  },
  {
    id: "customization",
    title: "Customization",
    description: "Instalasi custom ROM alternatif dan custom recovery.",
  },
  {
    id: "firmware",
    title: "Firmware Stock",
    description: "Pemasangan kembali firmware resmi pabrik atau downgrade.",
  },
];

const serviceImageMap: Record<string, { src: string; alt: string }> = {
  "fix-bootloop": {
    src: "/images/services/fix-bootloop.webp",
    alt: "Layar Fastboot mode Android untuk perbaikan bootloop",
  },
  "unbrick": {
    src: "/images/services/unbrick.webp",
    alt: "Komponen motherboard smartphone untuk diagnosa unbrick sistem",
  },
  "software-repair": {
    src: "/images/services/software-repair.webp",
    alt: "Terminal eksekusi ADB debugging untuk software repair Android",
  },
  "root-android": {
    src: "/images/services/root-android.webp",
    alt: "Antarmuka Magisk Manager untuk root Android systemless",
  },
  "unlock-bootloader": {
    src: "/images/services/unlock-bootloader.webp",
    alt: "Otorisasi USB debugging RSA fingerprint untuk Unlock Bootloader",
  },
  "custom-rom": {
    src: "/images/services/custom-rom.webp",
    alt: "Tampilan antarmuka sistem operasi LineageOS Custom ROM",
  },
  "recovery": {
    src: "/images/services/recovery.webp",
    alt: "Menu utama Team Win Recovery Project (TWRP)",
  },
  "flash-firmware": {
    src: "/images/services/flash-firmware.webp",
    alt: "Layar Fastboot mode smartphone siap instalasi firmware stock",
  },
};

export function GroupedServicesSection() {
  const [activeGroup, setActiveGroup] = useState<ServiceGroup>("repair");
  const filteredServices = services.filter((s) => s.group === activeGroup);

  return (
    <section aria-labelledby="services-grouped-heading" className="bg-background py-16 md:py-24" id="layanan">
      <div className="container-page max-w-5xl">
        <div className="mb-12">
          <h2 id="services-grouped-heading" className="text-xl font-bold tracking-tight sm:text-2xl text-foreground">
            Katalog Layanan Spesialis
          </h2>
        </div>

        {/* Text-based Tabs */}
        <div className="flex flex-wrap gap-x-6 gap-y-3 border-b border-border mb-8">
          {groups.map((grp) => {
            const isActive = activeGroup === grp.id;
            return (
              <button
                key={grp.id}
                type="button"
                onClick={() => setActiveGroup(grp.id)}
                className={`pb-3 text-sm sm:text-base font-semibold cursor-pointer border-b-2 transition-colors duration-200 ${
                  isActive
                    ? "border-accent text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {grp.title}
              </button>
            );
          })}
        </div>

        {/* Editorial Rows */}
        <div className="flex flex-col gap-6 animate-fade-in">
          {filteredServices.map((service: Service) => (
            <Link
              key={service.id}
              href={`/services/${service.slug}`}
              className="group flex flex-col sm:flex-row items-start sm:items-center gap-5 p-4 rounded-[var(--radius-lg)] hover:bg-muted/50 transition-colors border border-transparent hover:border-border"
            >
              {/* Small Image Thumbnail */}
              <div className="relative shrink-0 w-full sm:w-32 aspect-[4/3] bg-muted rounded-md overflow-hidden">
                <Image
                  src={serviceImageMap[service.slug]?.src || "/images/services/fix-bootloop.webp"}
                  alt={serviceImageMap[service.slug]?.alt || service.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, 128px"
                />
              </div>

              {/* Editorial Text */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">
                    {service.name}
                  </h3>
                  {service.remoteAvailable && (
                    <span className="text-[10px] uppercase font-bold tracking-wider text-whatsapp px-2 py-0.5 rounded-full border border-whatsapp/20 bg-whatsapp/10 hidden sm:inline-block">
                      Remote
                    </span>
                  )}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3 line-clamp-2 max-w-3xl">
                  {service.shortDescription}
                </p>
                <span className="inline-flex items-center text-sm font-semibold text-accent group-hover:translate-x-1 transition-transform">
                  Lihat Detail <ArrowRight className="w-4 h-4 ml-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
