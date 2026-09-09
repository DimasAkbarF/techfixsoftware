import Link from "next/link";
import { ArrowRight, MessageCircleQuestion } from "lucide-react";
import { getServiceBySlug } from "@/data/services";

const problemMap: Array<{ label: string; serviceSlug: string }> = [
  { label: "HP stuck di logo atau restart terus", serviceSlug: "fix-bootloop" },
  { label: "Perangkat tidak berfungsi setelah flashing gagal", serviceSlug: "unbrick" },
  { label: "Muncul error setelah update sistem", serviceSlug: "software-repair" },
  { label: "Ingin mendapatkan akses root penuh", serviceSlug: "root-android" },
  { label: "Mencoba mencari ROM alternatif yang cocok", serviceSlug: "custom-rom" },
];

export function QuickHelp() {
  const entries = problemMap
    .map((entry) => ({
      ...entry,
      service: getServiceBySlug(entry.serviceSlug),
    }))
    .filter((entry) => entry.service !== undefined);

  return (
    <section className="container-page py-18 md:py-28" aria-labelledby="quickhelp-heading">
      <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:items-start">
        <div>
          <h2 id="quickhelp-heading" className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            Tidak tahu layanan yang tepat?
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            Pilih gejala yang Anda alami, dan kami arahkan ke layanan yang relevan.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {entries.map((entry) => (
            <Link
              key={entry.serviceSlug}
              href={`/services/${entry.serviceSlug}`}
              className="group flex flex-col rounded-lg border border-border bg-card p-4 transition-all duration-200 hover:border-accent/40 cursor-pointer"
            >
              <div className="flex items-start gap-3">
                <MessageCircleQuestion className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {entry.label}
                  </p>
                  <p className="mt-1.5 inline-flex items-center gap-1 text-xs font-semibold text-accent">
                    Lihat: {entry.service?.name}
                    <ArrowRight className="size-3 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
