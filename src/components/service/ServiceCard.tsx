import Link from "next/link";
import { ArrowRight, Wifi } from "lucide-react";
import type { Service } from "@/types";
import { getCategoryById } from "@/data/categories";
import { cn } from "@/lib/utils";

export function ServiceCard({ service, className }: { service: Service; className?: string }) {
  const category = getCategoryById(service.categoryId);
  return (
    <article
      className={cn(
        "group flex h-full flex-col rounded-lg border border-border bg-card p-5 transition-all duration-200 hover:border-accent/40",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-base font-semibold tracking-tight text-foreground">
          <Link href={`/services/${service.slug}`} className="rounded hover:text-accent transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            {service.name}
          </Link>
        </h3>
        {service.remoteAvailable ? (
          <span className="inline-flex shrink-0 items-center gap-1 rounded-md bg-accent/10 px-2 py-0.5 text-[11px] font-medium text-accent">
            <Wifi className="size-3" aria-hidden="true" />
            Remote
          </span>
        ) : null}
      </div>

      <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">
        {service.shortDescription}
      </p>

      <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center gap-1 text-xs font-semibold text-accent hover:text-accent-hover transition-colors cursor-pointer"
        >
          Lihat detail
          <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
        </Link>
        {category ? (
          <span className="text-[11px] text-muted-foreground">
            {category.shortName}
          </span>
        ) : null}
      </div>
    </article>
  );
}
