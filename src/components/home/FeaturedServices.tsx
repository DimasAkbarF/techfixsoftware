import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getFeaturedServices } from "@/data/services";
import { ServiceGrid } from "@/components/service/ServiceGrid";

export function FeaturedServices() {
  const featured = getFeaturedServices();
  return (
    <section className="border-y border-border bg-white py-16 md:py-24" aria-labelledby="featured-heading">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 id="featured-heading" className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              Layanan yang paling banyak dicari
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Lihat detail, persyaratan, dan risikonya sebelum berbicara dengan CS.
            </p>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-1 text-xs font-semibold text-accent hover:text-accent-hover transition-colors cursor-pointer"
          >
            Semua layanan
            <ArrowRight className="size-3.5" aria-hidden="true" />
          </Link>
        </div>
        <ServiceGrid services={featured} />
      </div>
    </section>
  );
}
