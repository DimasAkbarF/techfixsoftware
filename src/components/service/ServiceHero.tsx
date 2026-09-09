import type { Service } from "@/types";
import { getCategoryById } from "@/data/categories";
import { CategoryIcon } from "@/components/icons/CategoryIcon";
import { Wifi } from "lucide-react";

export function ServiceHero({ service }: { service: Service }) {
  const category = getCategoryById(service.categoryId);
  return (
    <div className="rounded-xl bg-primary p-7 text-primary-foreground md:p-10">
      <div className="max-w-3xl">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          {category ? (
            <span className="inline-flex items-center gap-1.5 rounded-md bg-white/15 px-2.5 py-1 text-xs font-semibold text-white">
              {category.name}
            </span>
          ) : null}
          {service.remoteAvailable ? (
            <span className="inline-flex items-center gap-1.5 rounded-md bg-white/15 px-2.5 py-1 text-xs font-medium text-white">
              <Wifi className="size-3.5" aria-hidden="true" />
              Remote support
            </span>
          ) : null}
          {service.badges?.map((badge) => (
            <span key={badge} className="rounded-md bg-white/10 px-2.5 py-1 text-xs font-medium text-white/80">
              {badge}
            </span>
          ))}
        </div>

        <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
          {service.name}
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-white/80 md:text-base">
          {service.shortDescription}
        </p>

        <div className="mt-6">
          <p className="flex items-center gap-2 text-xs text-white/60">
            {category ? <CategoryIcon name={category.icon} className="size-3.5" /> : null}
            Konsultasi gratis terlebih dahulu — layanan dijalankan setelah ada kesepakatan.
          </p>
        </div>
      </div>
    </div>
  );
}
