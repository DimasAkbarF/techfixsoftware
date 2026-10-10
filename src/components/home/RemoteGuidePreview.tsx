import Image from "next/image";
import { ArrowRight, MonitorSmartphone, Wifi, Cable } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";

export function RemoteGuidePreview() {
  return (
    <section className="py-16 md:py-24 bg-card" id="remote-support">
      <div className="container-page max-w-5xl">
        <div className="bg-muted/30 border border-border rounded-[var(--radius-xl)] overflow-hidden flex flex-col md:flex-row">
          {/* Image Side */}
          <div className="w-full md:w-1/2 relative aspect-video md:aspect-auto">
            <Image
              src="/images/home/remote-support-setup.webp"
              alt="Setup PC dan HP untuk pengerjaan remote software Android via USB"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-card/80 to-transparent flex items-end md:items-center p-6">
              <span className="inline-flex items-center gap-2 bg-foreground/90 backdrop-blur-sm text-background px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                <MonitorSmartphone className="w-4 h-4" /> Bantuan Jarak Jauh
              </span>
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full md:w-1/2 p-8 sm:p-12 flex flex-col justify-center">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
              Servis HP Tanpa Harus Keluar Rumah
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-8">
              Banyak masalah software (seperti bootloop ringan, root, pasang custom ROM) bisa kami selesaikan secara remote via TeamViewer atau AnyDesk. Anda cukup colok kabel di rumah, kami yang kerjakan sistemnya.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex flex-col gap-2">
                <Wifi className="w-6 h-6 text-accent" />
                <span className="text-sm font-semibold text-foreground">Internet Stabil</span>
                <span className="text-xs text-muted-foreground">Minimal 10 Mbps via WiFi / Tethering stabil</span>
              </div>
              <div className="flex flex-col gap-2">
                <Cable className="w-6 h-6 text-accent" />
                <span className="text-sm font-semibold text-foreground">PC & Kabel Asli</span>
                <span className="text-xs text-muted-foreground">Laptop Windows dan kabel data bawaan/berkualitas</span>
              </div>
            </div>

            <ButtonLink href="/guides/persiapan-remote-support" variant="secondary" className="self-start">
              Baca Panduan Remote <ArrowRight className="w-4 h-4 ml-1" />
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
