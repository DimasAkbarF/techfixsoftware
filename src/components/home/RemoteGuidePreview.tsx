import Link from "next/link";
import { ArrowRight, MonitorSmartphone, Download, ShieldAlert } from "lucide-react";
import { siteConfig } from "@/config/site";

export function RemoteGuidePreview() {
  return (
    <section className="container-page py-18 md:py-28" aria-labelledby="remote-preview-heading">
      <div className="rounded-xl border border-border bg-background p-6 md:p-8 lg:grid lg:grid-cols-[1.3fr_1fr] lg:items-start lg:gap-10">
        <div>
          <h2 id="remote-preview-heading" className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            Butuh bantuan langsung?
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Kami dapat membantu memandu proses secara remote sesuai kebutuhan perangkat Anda.
          </p>

          <ul className="mt-10 space-y-3">
            <li className="flex items-start gap-3 text-sm text-foreground">
              <MonitorSmartphone className="mt-0.5 size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
              PC/laptop dengan koneksi internet stabil.
            </li>
            <li className="flex items-start gap-3 text-sm text-foreground">
              <Download className="mt-0.5 size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
              AnyDesk resmi dari anydesk.com — jangan dari sumber lain.
            </li>
            <li className="flex items-start gap-3 text-sm text-foreground">
              <ShieldAlert className="mt-0.5 size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
              Jangan pernah berikan akses remote ke pihak yang tidak dikenal.
            </li>
          </ul>

          <div className="mt-6 flex flex-wrap gap-2.5">
            <Link
              href="/remote-guide"
              className="inline-flex h-10 items-center gap-2 rounded-md bg-primary px-4 text-sm font-semibold text-primary-foreground hover:bg-primary-hover transition-colors cursor-pointer"
            >
              Mulai konsultasi
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <a
              href={siteConfig.remoteSoftware.anydeskHome}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex h-10 items-center gap-2 rounded-md border border-border px-4 text-sm font-medium text-foreground hover:border-accent hover:text-accent transition-colors cursor-pointer"
            >
              <Download className="size-4" aria-hidden="true" />
              Download AnyDesk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
