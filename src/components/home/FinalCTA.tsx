import Image from "next/image";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { hasWhatsapp, whatsappLink } from "@/config/site";
import { ButtonLink } from "@/components/ui/Button";

export function FinalCTA() {
  const isWa = hasWhatsapp();
  if (!isWa) return null;

  return (
    <section className="py-16 md:py-24 bg-card" aria-label="Konsultasi Sekarang">
      <div className="container-page max-w-5xl">
        <div className="relative rounded-[var(--radius-xl)] overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/home/cta-banner-bg.webp"
              alt="Meja kerja teknisi perbaikan software dan perangkat Android"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
            <div className="absolute inset-0 bg-foreground/80 mix-blend-multiply" />
            {/* Gradient Overlay for extra readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-transparent" />
          </div>

          <div className="relative z-10 px-6 py-16 md:py-20 text-center flex flex-col items-center justify-center">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-4 max-w-2xl text-balance">
              Jangan Biarkan HP Rusak Mengganggu Aktivitas Anda
            </h2>
            <p className="text-white/80 text-sm sm:text-base mb-8 max-w-xl text-balance">
              Konsultasikan kendala Anda sekarang. Kami berikan diagnosa awal dan estimasi biaya tanpa komitmen apapun.
            </p>
            
            <ButtonLink
              href={whatsappLink("Halo, saya ingin konsultasi mengenai perbaikan HP saya.") || "#"}
              target="_blank"
              rel="noopener noreferrer"
              variant="whatsapp"
              size="large"
              className="w-full sm:w-auto shadow-lg shadow-whatsapp/20"
            >
              <WhatsAppIcon className="w-5 h-5 mr-2" />
              Konsultasi via WhatsApp
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
