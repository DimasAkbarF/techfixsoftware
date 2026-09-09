import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { siteConfig, hasWhatsapp } from "@/config/site";
import { getContactMessage } from "@/lib/contact";

export function FinalCTA() {
  const wa = hasWhatsapp();
  const waHref = wa
    ? `https://wa.me/${siteConfig.whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(getContactMessage())}`
    : null;

  return (
    <section aria-labelledby="final-cta-heading" className="container-page py-24 md:py-36">
      <div className="rounded-xl bg-primary p-8 text-center text-primary-foreground md:p-12">
        <h2 id="final-cta-heading" className="mx-auto max-w-2xl text-xl font-bold tracking-tight text-white md:text-2xl">
          Tidak yakin layanan apa yang Anda butuhkan?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/80 md:text-base">
          Ceritakan gejala perangkat Anda ke CS kami. Kami bantu arahkan tanpa biaya
          konsultasi dan tanpa tekanan untuk melanjutkan.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
          {waHref ? (
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex h-11 items-center gap-2 rounded-md bg-whatsapp px-5 text-sm font-semibold text-whatsapp-foreground shadow-lg shadow-black/10 transition-all hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring cursor-pointer"
            >
              <WhatsAppIcon className="size-4" />
              Konsultasi via WhatsApp
            </a>
          ) : null}
        </div>
        <p className="mt-4 text-xs text-white/60">
          Respon CS bergantung jam operasional. Informasikan kondisi perangkat Anda untuk respons yang lebih cepat.
        </p>
      </div>
    </section>
  );
}