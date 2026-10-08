import Image from "next/image";
import { MessageSquareCheck } from "lucide-react";
import type { Testimonial } from "@/types";

export function TestimonialScreenshotCard({ item }: { item: Testimonial }) {
  return (
    <figure className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-xs transition-colors hover:border-accent/40">
      <div className="relative aspect-[9/16] max-h-[560px] w-full overflow-hidden bg-slate-900/5">
        <Image
          src={item.image}
          alt={`Tangkapan layar percakapan pelanggan WhatsApp untuk layanan ${item.services.join(" & ")}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-contain object-center"
        />
      </div>
      <figcaption className="flex flex-col gap-2 border-t border-border px-4 py-3.5 bg-card">
        <div className="flex items-center gap-1.5 text-xs font-semibold text-accent">
          <MessageSquareCheck className="size-4" />
          <span>Percakapan Pelanggan Terverifikasi</span>
        </div>
        <div className="flex flex-wrap items-center gap-1.5">
          {item.services.map((service) => (
            <span
              key={service}
              className="inline-flex items-center rounded-md bg-accent-subtle px-2 py-0.5 text-xs font-semibold text-accent"
            >
              {service}
            </span>
          ))}
        </div>
      </figcaption>
    </figure>
  );
}