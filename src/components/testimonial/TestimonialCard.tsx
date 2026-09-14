import Image from "next/image";
import type { Testimonial } from "@/types";
import { StarRating } from "./StarRating";

export function TestimonialScreenshotCard({ item }: { item: Testimonial }) {
  return (
    <figure className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-card transition-all duration-200 hover:border-accent/40">
      <div className="relative h-[440px] overflow-hidden bg-muted sm:h-[500px] md:h-[540px]">
        <Image
          src={item.image}
          alt={`Screenshot percakapan pelanggan — ${item.services.join(" + ")}`}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-contain"
        />
      </div>
      <figcaption className="flex items-center justify-between gap-3 border-t border-border px-5 py-4">
        <StarRating rating={item.rating} />
        <span className="flex flex-wrap items-center justify-end gap-1.5">
          {item.services.map((service) => (
            <span
              key={service}
              className="inline-flex items-center rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground"
            >
              {service}
            </span>
          ))}
        </span>
      </figcaption>
    </figure>
  );
}