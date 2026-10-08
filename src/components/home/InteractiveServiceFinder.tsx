"use client";

import { useState } from "react";
import { ArrowRight, ArrowLeft, Check, RefreshCw, Send, HelpCircle } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { hasWhatsapp, whatsappLink } from "@/config/site";
import { buildProblemFinderMessage } from "@/lib/contact";
import { trackEvent } from "@/lib/analytics";

interface FormData {
  problem: string;
  brand: string;
  model: string;
  tried: string;
  goal: string;
}

const initialData: FormData = {
  problem: "",
  brand: "",
  model: "",
  tried: "",
  goal: "",
};

const problemOptions = [
  "HP stuck di logo / bootloop",
  "HP restart terus-menerus",
  "Gagal flash / layar gelap (soft brick)",
  "Ingin root Android & Magisk",
  "Ingin pasang custom ROM",
  "Error sistem / crash setelah update",
  "Terjebak di recovery / fastboot",
  "Lainnya (jelaskan manual)",
];

const brandOptions = [
  "Xiaomi / Redmi / POCO",
  "Samsung",
  "Realme",
  "Google Pixel",
  "Vivo / iQOO",
  "Oppo / OnePlus",
  "Infinix / Tecno",
  "Merek Lainnya",
];

const triedOptions = [
  "Belum mencoba tindakan apapun",
  "Sudah coba force restart & cas baterai",
  "Sudah coba wipe data di recovery",
  "Coba flash mandiri lalu gagal",
  "Hanya download update sistem resmi",
  "Sudah dibawa ke servis lain tapi belum selesai",
];

const goalOptions = [
  "Ingin HP menyala normal kembali",
  "Ingin menyelamatkan data jika memungkinkan",
  "Ingin pasang root / modul Magisk",
  "Ingin pasang custom ROM yang stabil",
  "Ingin cek kelayakan & estimasi terlebih dahulu",
];

export function InteractiveServiceFinder() {
  const [step, setStep] = useState<number>(1);
  const [data, setData] = useState<FormData>(initialData);
  const [customProblem, setCustomProblem] = useState("");
  const [customTried, setCustomTried] = useState("");

  const totalSteps = 5;

  const handleNext = () => {
    if (step < totalSteps) {
      setStep((prev) => prev + 1);
    } else {
      setStep(6); // Summary state
      trackEvent("consultation_started", {
        source_page: "interactive_service_finder",
        device_brand: data.brand,
        problem_type: data.problem,
      });
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    setData(initialData);
    setCustomProblem("");
    setCustomTried("");
    setStep(1);
  };

  const isWa = hasWhatsapp();
  const summaryMessage = buildProblemFinderMessage({
    problem: data.problem === "Lainnya (jelaskan manual)" ? customProblem || data.problem : data.problem,
    brand: data.brand,
    model: data.model,
    tried: customTried || data.tried,
    goal: data.goal,
  });

  const waHref = isWa ? whatsappLink(summaryMessage) : null;

  const handleSendWa = () => {
    trackEvent("whatsapp_click", {
      source_page: "interactive_service_finder",
      action: "send_prefilled_condition",
      device_brand: data.brand,
      problem_type: data.problem,
    });
  };

  return (
    <section id="interactive-finder" aria-labelledby="finder-heading" className="border-b border-border bg-slate-50/70 py-14 md:py-20">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-accent-subtle px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
            <HelpCircle className="size-3.5" aria-hidden="true" />
            <span>Interactive Guide</span>
          </div>
          <h2 id="finder-heading" className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Ceritakan Masalah Android Anda
          </h2>
          <p className="mt-2 text-sm sm:text-base leading-relaxed text-muted-foreground">
            Ikuti 5 langkah sederhana berikut untuk merangkum kondisi perangkat. Kami siapkan format pesan konsultasi siap kirim agar teknisi kami dapat langsung memeriksa kelayakannya.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm">
          {/* Step Progress Indicator */}
          {step <= 5 && (
            <div className="mb-6">
              <div className="flex items-center justify-between text-xs font-semibold text-muted-foreground">
                <span className="text-accent font-bold">Langkah {step} dari {totalSteps}</span>
                <span>
                  {step === 1 && "Gejala Masalah"}
                  {step === 2 && "Merek Perangkat"}
                  {step === 3 && "Model / Tipe"}
                  {step === 4 && "Riwayat Tindakan"}
                  {step === 5 && "Tujuan Penanganan"}
                </span>
              </div>
              <div className="mt-2 h-1.5 w-full rounded-full bg-muted overflow-hidden">
                <div
                  className="h-full bg-accent transition-all duration-300 rounded-full"
                  style={{ width: `${(step / totalSteps) * 100}%` }}
                />
              </div>
            </div>
          )}

          {/* STEP 1: Masalah */}
          {step === 1 && (
            <div>
              <h3 className="text-base sm:text-lg font-bold text-foreground">
                1. Apa yang sedang terjadi pada HP Anda?
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">
                Pilih kondisi yang paling mendekati situasi saat ini.
              </p>
              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                {problemOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setData({ ...data, problem: opt })}
                    className={`flex items-center justify-between rounded-lg border p-3 text-left text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
                      data.problem === opt
                        ? "border-accent bg-accent-subtle/50 text-accent font-semibold"
                        : "border-border bg-background text-foreground hover:border-accent/40"
                    }`}
                  >
                    <span>{opt}</span>
                    {data.problem === opt && <Check className="size-4 shrink-0 text-accent" />}
                  </button>
                ))}
              </div>
              {data.problem === "Lainnya (jelaskan manual)" && (
                <div className="mt-3">
                  <input
                    type="text"
                    value={customProblem}
                    onChange={(e) => setCustomProblem(e.target.value)}
                    placeholder="Tuliskan kendala Anda secara singkat..."
                    className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:border-accent focus:outline-none"
                  />
                </div>
              )}
            </div>
          )}

          {/* STEP 2: Merk */}
          {step === 2 && (
            <div>
              <h3 className="text-base sm:text-lg font-bold text-foreground">
                2. Apa merek perangkat Android Anda?
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">
                Setiap pabrikan memiliki prosedur dan proteksi keamanan sistem yang berbeda.
              </p>
              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                {brandOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setData({ ...data, brand: opt })}
                    className={`flex items-center justify-between rounded-lg border p-3 text-left text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
                      data.brand === opt
                        ? "border-accent bg-accent-subtle/50 text-accent font-semibold"
                        : "border-border bg-background text-foreground hover:border-accent/40"
                    }`}
                  >
                    <span>{opt}</span>
                    {data.brand === opt && <Check className="size-4 shrink-0 text-accent" />}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3: Model */}
          {step === 3 && (
            <div>
              <h3 className="text-base sm:text-lg font-bold text-foreground">
                3. Apa tipe atau model perangkat Anda?
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">
                Contoh: Poco F3, Redmi Note 10 Pro, Samsung Galaxy A52, Realme 7, Pixel 6.
              </p>
              <div className="mt-4">
                <input
                  type="text"
                  value={data.model}
                  onChange={(e) => setData({ ...data, model: e.target.value })}
                  placeholder="Ketik tipe atau seri HP Anda..."
                  className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none"
                  autoFocus
                />
                <p className="mt-2 text-[11px] text-muted-foreground">
                  Jika ragu nomor model persisnya, tuliskan nama yang Anda ingat atau cek stiker kardus HP.
                </p>
              </div>
            </div>
          )}

          {/* STEP 4: Yang sudah dicoba */}
          {step === 4 && (
            <div>
              <h3 className="text-base sm:text-lg font-bold text-foreground">
                4. Apa yang sudah Anda lakukan sebelum ini?
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">
                Kejujuran riwayat sangat penting agar teknisi tidak mengambil langkah berisiko.
              </p>
              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                {triedOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setData({ ...data, tried: opt })}
                    className={`flex items-center justify-between rounded-lg border p-3 text-left text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
                      data.tried === opt
                        ? "border-accent bg-accent-subtle/50 text-accent font-semibold"
                        : "border-border bg-background text-foreground hover:border-accent/40"
                    }`}
                  >
                    <span>{opt}</span>
                    {data.tried === opt && <Check className="size-4 shrink-0 text-accent" />}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 5: Tujuan */}
          {step === 5 && (
            <div>
              <h3 className="text-base sm:text-lg font-bold text-foreground">
                5. Apa tujuan utama penanganan Anda?
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">
                Tentukan hasil yang paling Anda harapkan dari penanganan ini.
              </p>
              <div className="mt-4 grid gap-2">
                {goalOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setData({ ...data, goal: opt })}
                    className={`flex items-center justify-between rounded-lg border p-3 text-left text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
                      data.goal === opt
                        ? "border-accent bg-accent-subtle/50 text-accent font-semibold"
                        : "border-border bg-background text-foreground hover:border-accent/40"
                    }`}
                  >
                    <span>{opt}</span>
                    {data.goal === opt && <Check className="size-4 shrink-0 text-accent" />}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 6: Summary & WhatsApp Lead Trigger */}
          {step === 6 && (
            <div>
              <div className="rounded-lg border border-accent/20 bg-accent-subtle/40 p-4">
                <span className="text-xs font-bold uppercase tracking-wider text-accent">
                  Informasi Awal untuk Pengecekan
                </span>
                <h3 className="mt-1 text-base sm:text-lg font-bold text-foreground">
                  Ringkasan Kondisi Perangkat Anda
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  Informasi ini telah kami susun rapi menjadi pesan template untuk langsung Anda kirimkan ke WhatsApp resmi TechFix.
                </p>

                <div className="mt-4 space-y-2 rounded-md bg-white p-3.5 text-xs text-foreground font-mono border border-border/80">
                  <p><strong className="text-slate-500 font-sans">Perangkat:</strong> {data.brand || "-"} {data.model || ""}</p>
                  <p><strong className="text-slate-500 font-sans">Masalah:</strong> {data.problem === "Lainnya (jelaskan manual)" ? customProblem || data.problem : data.problem || "-"}</p>
                  <p><strong className="text-slate-500 font-sans">Riwayat:</strong> {data.tried || "-"}</p>
                  <p><strong className="text-slate-500 font-sans">Tujuan:</strong> {data.goal || "-"}</p>
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
                {waHref ? (
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    onClick={handleSendWa}
                    className="flex h-12 w-full sm:flex-1 items-center justify-center gap-2 rounded-md bg-whatsapp px-5 text-sm font-semibold text-whatsapp-foreground shadow-sm hover:brightness-95 active:scale-[0.98] transition-all cursor-pointer"
                  >
                    <WhatsAppIcon className="size-4 shrink-0" />
                    <span>Kirim Kondisi Saya ke WhatsApp</span>
                  </a>
                ) : (
                  <a
                    href="/contact"
                    className="flex h-12 w-full sm:flex-1 items-center justify-center gap-2 rounded-md bg-primary px-5 text-sm font-semibold text-primary-foreground hover:bg-primary-hover transition-colors cursor-pointer"
                  >
                    <Send className="size-4" />
                    <span>Kirim via Halaman Kontak</span>
                  </a>
                )}

                <button
                  type="button"
                  onClick={handleReset}
                  className="flex h-12 items-center justify-center gap-1.5 rounded-md border border-border px-4 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                >
                  <RefreshCw className="size-3.5" />
                  <span>Ulangi Pilihan</span>
                </button>
              </div>

              <p className="mt-3 text-center text-[11px] text-muted-foreground">
                ✓ Konsultasi gratis &amp; tidak mengikat · Tanpa kewajiban langsung servis
              </p>
            </div>
          )}

          {/* Navigation Controls for Steps 1-5 */}
          {step <= 5 && (
            <div className="mt-6 flex items-center justify-between border-t border-border/80 pt-4">
              <button
                type="button"
                onClick={handleBack}
                disabled={step === 1}
                className="inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-xs font-semibold text-muted-foreground hover:text-foreground disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
              >
                <ArrowLeft className="size-3.5" />
                <span>Sebelumnya</span>
              </button>

              <button
                type="button"
                onClick={handleNext}
                disabled={
                  (step === 1 && !data.problem) ||
                  (step === 2 && !data.brand) ||
                  (step === 3 && !data.model.trim()) ||
                  (step === 4 && !data.tried) ||
                  (step === 5 && !data.goal)
                }
                className="inline-flex items-center gap-1.5 rounded-md bg-accent px-4 py-2 text-xs font-semibold text-white hover:bg-accent-hover disabled:opacity-40 disabled:pointer-events-none transition-colors cursor-pointer"
              >
                <span>{step === 5 ? "Selesai & Lihat Format" : "Lanjutkan"}</span>
                <ArrowRight className="size-3.5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
