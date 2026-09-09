import type { Service } from "@/types";
import { ServiceCard } from "@/components/service/ServiceCard";
import { cn } from "@/lib/utils";

export function ServiceGrid({
  services,
  className,
}: {
  services: Service[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3",
        className,
      )}
    >
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
}