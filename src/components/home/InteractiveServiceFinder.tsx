"use client";

import { useState } from "react";
import { ArrowLeft, RefreshCw, Send, ChevronRight } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { hasWhatsapp, whatsappLink } from "@/config/site";
import { buildProblemFinderMessage } from "@/lib/contact";
import { trackEvent } from "@/lib/analytics";
import { Button, ButtonLink } from "@/components/ui/Button";

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
  "Sudah coba force restart & cas",
  "Sudah coba wipe data / reset",
  "Coba flash mandiri lalu gagal",
  "Hanya download update sistem resmi",
  "Dibawa ke servis lain tapi belum selesai",
];

const goalOptions = [
  "Ingin HP menyala normal kembali",
  "Ingin menyelamatkan data (bila bisa)",
  "Ingin pasang root / modul Magisk",
  "Ingin pasang custom ROM yang stabil",
  "Ingin cek kelayakan & estimasi dulu",
];

export function InteractiveServiceFinder() {
  const [step, setStep] = useState<number>(1);
  const [data, setData] = useState<FormData>(initialData);
  const totalSteps = 5;

  const handleSelect = (field: keyof FormData, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }));
    if (step < totalSteps) {
      setStep((prev) => prev + 1);
    } else {
      setStep(6);
      trackEvent("consultation_started", {
        source_page: "interactive_service_finder",
        device_brand: data.brand,
        problem_type: data.problem,
      });
    }
  };

  const handleBack = () => {
    if (step > 1) setStep((prev) => prev - 1);
  };

  const handleReset = () => {
    setData(initialData);
    setStep(1);
  };

  const isWa = hasWhatsapp();
  const summaryMessage = buildProblemFinderMessage({
    problem: data.problem,
    brand: data.brand,
    model: data.model || "Belum tahu",
    tried: data.tried,
    goal: data.goal,
  });

  return (
    <section className="py-16 md:py-24 bg-card" id="interactive-finder">
      <div className="container-page max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="text-xl font-bold tracking-tight sm:text-2xl mb-3 text-foreground">
            Bantu Kami Memahami Kendala Anda
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
            Jawab 5 pertanyaan singkat ini agar kami bisa memberikan estimasi waktu dan biaya yang akurat sebelum Anda memutuskan.
          </p>
        </div>

        <div className="bg-card border border-border rounded-[var(--radius-xl)] shadow-card overflow-hidden">
          {/* Header & Progress */}
          {step <= totalSteps && (
            <div className="p-4 sm:p-6 pb-0">
              <div className="flex items-center justify-between mb-4">
                <button
                  onClick={handleBack}
                  disabled={step === 1}
                  className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground disabled:opacity-0 transition-opacity"
                  aria-label="Kembali ke langkah sebelumnya"
                >
                  <ArrowLeft className="w-4 h-4 mr-1.5" />
                  Kembali
                </button>
                <span className="text-sm font-semibold text-foreground bg-muted px-2.5 py-1 rounded-md">
                  Langkah {step} dari {totalSteps}
                </span>
              </div>
              <div className="w-full bg-muted rounded-full h-1.5 overflow-hidden">
                <div
                  className="bg-accent h-1.5 rounded-full transition-all duration-300 ease-out"
                  style={{ width: `${(step / totalSteps) * 100}%` }}
                />
              </div>
            </div>
          )}

          <div className="p-6 sm:p-8 min-h-[400px] flex flex-col justify-center animate-fade-in relative">
            {step === 1 && (
              <StepContent
                title="Apa kendala utama pada HP Anda?"
                options={problemOptions}
                onSelect={(val) => handleSelect("problem", val)}
                selectedValue={data.problem}
              />
            )}
            
            {step === 2 && (
              <StepContent
                title="Apa merek HP yang bermasalah?"
                options={brandOptions}
                onSelect={(val) => handleSelect("brand", val)}
                selectedValue={data.brand}
              />
            )}

            {step === 3 && (
              <div className="w-full max-w-lg mx-auto animate-slide-in text-center">
                <h3 className="text-xl font-bold mb-6 text-foreground">Tipe atau model HP Anda?</h3>
                <div className="text-left bg-muted/50 p-4 rounded-lg mb-6 border border-border text-sm text-muted-foreground">
                  <p>Contoh: Redmi Note 10 Pro, Poco F3, Pixel 4 XL, dll.</p>
                  <p className="mt-2">Jika tidak tahu pasti, cukup ketik &quot;Belum tahu&quot;.</p>
                </div>
                <input
                  type="text"
                  value={data.model}
                  onChange={(e) => setData({ ...data, model: e.target.value })}
                  placeholder="Masukkan tipe HP..."
                  className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring bg-card text-foreground mb-6 transition-shadow text-lg"
                  autoFocus
                />
                <Button 
                  size="large" 
                  className="w-full"
                  onClick={() => handleSelect("model", data.model || "Belum tahu")}
                >
                  Lanjut <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            )}

            {step === 4 && (
              <StepContent
                title="Apa yang sudah Anda coba lakukan?"
                options={triedOptions}
                onSelect={(val) => handleSelect("tried", val)}
                selectedValue={data.tried}
              />
            )}

            {step === 5 && (
              <StepContent
                title="Apa hasil akhir yang Anda harapkan?"
                options={goalOptions}
                onSelect={(val) => handleSelect("goal", val)}
                selectedValue={data.goal}
              />
            )}

            {step === 6 && (
              <div className="w-full max-w-xl mx-auto animate-reveal text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-subtle text-accent mb-6">
                  <Send className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">Selesai!</h3>
                <p className="text-muted-foreground mb-8 text-balance">
                  Terima kasih atas informasinya. Data ini akan membantu kami memberikan solusi dan estimasi yang lebih cepat.
                </p>

                <div className="bg-muted p-5 sm:p-6 rounded-[var(--radius-lg)] mb-8 text-left border border-border shadow-sm">
                  <h4 className="font-semibold text-foreground mb-4 border-b border-border-strong pb-2">Ringkasan Kendala:</h4>
                  <ul className="space-y-3 text-sm text-foreground">
                    <SummaryItem label="Kendala" value={data.problem} />
                    <SummaryItem label="Merek" value={data.brand} />
                    <SummaryItem label="Tipe" value={data.model} />
                    <SummaryItem label="Tindakan" value={data.tried} />
                    <SummaryItem label="Tujuan" value={data.goal} />
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  {isWa && (
                    <ButtonLink
                      href={whatsappLink(summaryMessage) || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="whatsapp"
                      size="large"
                      className="w-full sm:w-auto"
                    >
                      <WhatsAppIcon className="w-5 h-5 mr-2" />
                      Kirim ke WhatsApp
                    </ButtonLink>
                  )}
                  <Button
                    variant="ghost"
                    size="large"
                    onClick={handleReset}
                    className="w-full sm:w-auto text-muted-foreground"
                  >
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Ulangi Form
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function StepContent({ 
  title, 
  options, 
  onSelect,
  selectedValue
}: { 
  title: string; 
  options: string[]; 
  onSelect: (val: string) => void;
  selectedValue: string;
}) {
  return (
    <div className="w-full max-w-xl mx-auto animate-slide-in">
      <h3 className="text-xl sm:text-2xl font-bold mb-8 text-center text-foreground">{title}</h3>
      <div className="flex flex-col gap-3">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => onSelect(opt)}
            className={`w-full text-left px-5 py-4 rounded-[var(--radius-lg)] border-2 transition-all duration-200 flex items-center justify-between group text-base font-medium ${
              selectedValue === opt
                ? "border-accent bg-accent-subtle text-accent-active"
                : "border-border bg-card text-foreground hover:border-accent hover:shadow-card-hover"
            }`}
          >
            <span>{opt}</span>
            <ChevronRight className={`w-5 h-5 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0 ${selectedValue === opt ? "opacity-100 translate-x-0 text-accent" : "text-muted-foreground"}`} />
          </button>
        ))}
      </div>
    </div>
  );
}

function SummaryItem({ label, value }: { label: string; value: string }) {
  if (!value) return null;
  return (
    <li className="grid grid-cols-[80px_1fr] sm:grid-cols-[100px_1fr] gap-2">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-medium">{value}</span>
    </li>
  );
}
