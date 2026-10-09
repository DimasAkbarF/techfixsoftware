"use client";

import Image from "next/image";

interface RomChipItem {
  id: string;
  label: string;
  sub: string;
  logoSrc: string;
  logoAlt: string;
  className: string;
  drift: string;
  width: number;
  height: number;
}

const ROM_CHIPS: readonly RomChipItem[] = [
  {
    id: "nusantara",
    label: "Nusantara OS",
    sub: "Official ROM",
    logoSrc: "/nusantara.webp",
    logoAlt: "Nusantara OS",
    width: 32,
    height: 32,
    className: "-right-1 top-4 sm:-right-4 sm:top-6 lg:-right-6",
    drift: "animate-float-slow",
  },
  {
    id: "pixelos",
    label: "PixelOS",
    sub: "Pixel UI & Monet",
    logoSrc: "/pixelos.svg",
    logoAlt: "PixelOS",
    width: 28,
    height: 28,
    className: "-left-1 top-8 sm:-left-4 sm:top-10 lg:-left-6",
    drift: "animate-float-reverse",
  },
  {
    id: "lineageos",
    label: "LineageOS",
    sub: "Clean & Official",
    logoSrc: "/lineageos.svg",
    logoAlt: "LineageOS",
    width: 28,
    height: 28,
    className: "-left-2 top-[44%] sm:-left-6 sm:top-[42%] lg:-left-8",
    drift: "animate-float-alt",
  },
  {
    id: "evolutionx",
    label: "Evolution X",
    sub: "Feature Packed",
    logoSrc: "/evolutionx.svg",
    logoAlt: "Evolution X",
    width: 24,
    height: 32,
    className: "-right-2 top-[40%] sm:-right-6 sm:top-[38%] lg:-right-8",
    drift: "animate-float-slow",
  },
  {
    id: "crdroid",
    label: "crDroid",
    sub: "Customizable AOSP",
    logoSrc: "/crdroid.svg",
    logoAlt: "crDroid",
    width: 28,
    height: 28,
    className: "-left-1 bottom-8 sm:-left-4 sm:bottom-10 lg:-left-6",
    drift: "animate-float-reverse",
  },
  {
    id: "paranoid",
    label: "Paranoid Android",
    sub: "AOSPA Project",
    logoSrc: "/paranoidandroid.webp",
    logoAlt: "Paranoid Android",
    width: 28,
    height: 28,
    className: "-right-1 bottom-6 hidden xs:flex sm:-right-4 sm:bottom-8 lg:-right-6",
    drift: "animate-float-alt",
  },
] as const;

function RomChip({
  label,
  sub,
  logoSrc,
  logoAlt,
  className = "",
  drift = "animate-float-slow",
  width = 24,
  height = 24,
}: Omit<RomChipItem, "id">) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute z-20 flex transform-gpu items-center gap-2 rounded-xl bg-white/95 px-2.5 py-1.5 shadow-dropdown backdrop-blur-sm sm:gap-2.5 sm:px-3 sm:py-2 ${drift} ${className}`}
    >
      <div className="relative flex size-6 shrink-0 items-center justify-center sm:size-7">
        <Image
          src={logoSrc}
          alt={logoAlt}
          width={width}
          height={height}
          loading="lazy"
          className="size-5 object-contain sm:size-6"
        />
      </div>
      <div className="text-left">
        <span className="block text-[11px] font-semibold leading-tight text-foreground sm:text-xs">
          {label}
        </span>
        <span className="hidden font-mono text-[9px] text-muted-foreground xs:block sm:text-[10px]">
          {sub}
        </span>
      </div>
    </div>
  );
}

export function PhoneMockup({ className = "" }: { className?: string }) {
  return (
    <figure
      role="img"
      aria-label="Mockup smartphone Android dengan logo custom ROM resmi yang melayang: Nusantara OS, PixelOS, LineageOS, Evolution X, crDroid, dan Paranoid Android"
      className={`relative mx-auto flex w-full max-w-[520px] items-center justify-center select-none py-6 ${className}`}
    >
      {/* Mockup bersih — WebP terkompresi 19KB, tanpa border apapun */}
      <Image
        src="/mockup1.webp"
        alt="Mockup smartphone Android bersih"
        width={500}
        height={500}
        priority
        sizes="(max-width: 640px) 270px, (max-width: 1024px) 340px, 390px"
        className="mx-auto h-auto w-full max-w-[260px] object-contain drop-shadow-xl sm:max-w-[330px] lg:max-w-[370px]"
      />

      {/* Floating ROM Logos - Sumber teroptimasi WebP & SVG */}
      {ROM_CHIPS.map((chip) => (
        <RomChip
          key={chip.id}
          label={chip.label}
          sub={chip.sub}
          logoSrc={chip.logoSrc}
          logoAlt={chip.logoAlt}
          width={chip.width}
          height={chip.height}
          className={chip.className}
          drift={chip.drift}
        />
      ))}
    </figure>
  );
}
