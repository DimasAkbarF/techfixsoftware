"use client";

import { useState } from "react";
import { Send, CheckCircle2, ShieldCheck } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { hasWhatsapp, whatsappLink } from "@/config/site";
import { buildContactFormMessage } from "@/lib/contact";
import { trackEvent } from "@/lib/analytics";

interface FormState {
  name: string;
  phone: string;
  brand: string;
  model: string;
  problem: string;
  tried: string;
}

const initialForm: FormState = {
  name: "",
  phone: "",
  brand: "",
  model: "",
  problem: "",
  tried: "",
};

export function ContactLeadForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const isWa = hasWhatsapp();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedMessage = buildContactFormMessage({
      name: form.name,
      brand: form.brand,
      model: form.model,
      problem: form.problem,
      tried: form.tried,
    });

    trackEvent("consultation_form_submit", {
      source_page: "contact_page_form",
      device_brand: form.brand,
      problem_type: form.problem,
    });

    if (isWa) {
      const waUrl = whatsappLink(formattedMessage);
      if (waUrl) {
        trackEvent("whatsapp_click", {
          source_page: "contact_page_form",
          action: "form_direct_to_whatsapp",
        });
        window.open(waUrl, "_blank", "noopener,noreferrer");
      }
    }

    setSubmitted(true);
  };

  if (submitted) {
    const formattedMessage = buildContactFormMessage({
      name: form.name,
      brand: form.brand,
      model: form.model,
      problem: form.problem,
      tried: form.tried,
    });
    const waUrl = isWa ? whatsappLink(formattedMessage) : null;

    return (
      <div className="rounded-xl border border-success/30 bg-success/5 p-6 sm:p-8 text-center">
        <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-success/15 text-success">
          <CheckCircle2 className="size-6" />
        </span>
        <h3 className="mt-3 text-lg font-bold text-foreground">
          Format Pesan Konsultasi Anda Siap
        </h3>
        <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground max-w-md mx-auto">
          Jika jendela WhatsApp tidak terbuka otomatis, gunakan tombol di bawah untuk langsung terhubung dengan teknisi kami.
        </p>

        {waUrl && (
          <div className="mt-5">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex h-11 items-center gap-2 rounded-md bg-whatsapp px-6 text-sm font-semibold text-whatsapp-foreground shadow-sm hover:brightness-95 transition-all cursor-pointer"
            >
              <WhatsAppIcon className="size-4 shrink-0" />
              <span>Buka Chat WhatsApp Sekarang</span>
            </a>
          </div>
        )}

        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setForm(initialForm);
          }}
          className="mt-4 text-xs font-semibold text-accent hover:underline cursor-pointer block mx-auto"
        >
          Kirim atau Konsultasikan Perangkat Lain
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-xl border border-border bg-card p-6 sm:p-8 shadow-xs">
      <div className="border-b border-border/70 pb-3">
        <h2 className="text-lg font-bold text-foreground">
          Formulir Konsultasi Ringan
        </h2>
        <p className="text-xs text-muted-foreground mt-0.5">
          Isi detail singkat berikut agar teknisi dapat menganalisis kondisi perangkat secara akurat.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {/* Nama */}
        <div>
          <label htmlFor="name" className="block text-xs font-semibold text-foreground">
            Nama Lengkap / Panggilan <span className="text-destructive">*</span>
          </label>
          <input
            id="name"
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Contoh: Dimas"
            className="mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2 text-xs sm:text-sm text-foreground focus:border-accent focus:outline-none"
          />
        </div>

        {/* WhatsApp */}
        <div>
          <label htmlFor="phone" className="block text-xs font-semibold text-foreground">
            Nomor WhatsApp Anda <span className="text-destructive">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            required
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="Contoh: 08123456789"
            className="mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2 text-xs sm:text-sm text-foreground focus:border-accent focus:outline-none"
          />
        </div>

        {/* Merek */}
        <div>
          <label htmlFor="brand" className="block text-xs font-semibold text-foreground">
            Merek HP <span className="text-destructive">*</span>
          </label>
          <input
            id="brand"
            type="text"
            required
            value={form.brand}
            onChange={(e) => setForm({ ...form, brand: e.target.value })}
            placeholder="Contoh: Xiaomi / Poco / Samsung"
            className="mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2 text-xs sm:text-sm text-foreground focus:border-accent focus:outline-none"
          />
        </div>

        {/* Model */}
        <div>
          <label htmlFor="model" className="block text-xs font-semibold text-foreground">
            Tipe / Seri Model HP <span className="text-destructive">*</span>
          </label>
          <input
            id="model"
            type="text"
            required
            value={form.model}
            onChange={(e) => setForm({ ...form, model: e.target.value })}
            placeholder="Contoh: POCO F3 (Alioth)"
            className="mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2 text-xs sm:text-sm text-foreground focus:border-accent focus:outline-none"
          />
        </div>
      </div>

      {/* Masalah */}
      <div>
        <label htmlFor="problem" className="block text-xs font-semibold text-foreground">
          Masalah / Gejala yang Terjadi <span className="text-destructive">*</span>
        </label>
        <textarea
          id="problem"
          required
          rows={3}
          value={form.problem}
          onChange={(e) => setForm({ ...form, problem: e.target.value })}
          placeholder="Ceritakan apa yang terjadi: apakah stuck logo, restart sendiri, salah flash file, atau ingin root..."
          className="mt-1.5 w-full rounded-md border border-border bg-background p-3 text-xs sm:text-sm text-foreground focus:border-accent focus:outline-none resize-none"
        />
      </div>

      {/* Yang sudah dilakukan */}
      <div>
        <label htmlFor="tried" className="block text-xs font-semibold text-foreground">
          Apa yang Sudah Dicoba Sebelumnya?
        </label>
        <input
          id="tried"
          type="text"
          value={form.tried}
          onChange={(e) => setForm({ ...form, tried: e.target.value })}
          placeholder="Contoh: Belum coba apapun / sudah coba restart / flash gagal"
          className="mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2 text-xs sm:text-sm text-foreground focus:border-accent focus:outline-none"
        />
      </div>

      {/* Reassurance Callout */}
      <div className="rounded-md bg-muted/60 p-3 text-[11px] leading-relaxed text-muted-foreground flex items-start gap-2">
        <ShieldCheck className="size-4 shrink-0 text-accent mt-0.5" />
        <span>
          <strong>Catatan:</strong> Pengisian form ini <em>bukan berarti Anda harus langsung melakukan service</em>. Kami membantu menilai kondisi dan kelayakan perangkat Anda terlebih dahulu secara gratis.
        </span>
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          className="flex h-11 w-full items-center justify-center gap-2 rounded-md bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary-hover active:scale-[0.98] transition-all cursor-pointer"
        >
          <Send className="size-4" />
          <span>Kirim untuk Konsultasi via WhatsApp</span>
        </button>
      </div>
    </form>
  );
}
