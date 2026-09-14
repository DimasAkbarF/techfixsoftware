import type { FAQItem, Service } from "@/types";

function numbered(items: string[]): string {
  return items.map((item, index) => `${index + 1}. ${item}`).join(" ");
}

export function getServiceFaqItems(service: Service): FAQItem[] {
  const remoteAnswer = service.remoteAvailable
    ? "Ya, layanan ini dapat dilakukan secara remote dengan pendampingan dari PC atau laptop, tergantung kondisi perangkat Anda. Ketersediaan remote dikonfirmasi saat konsultasi dengan CS."
    : "Tidak otomatis. Layanan ini umumnya tidak berjalan secara remote; metode penanganan dan kemungkinan prosesnya dievaluasi oleh CS saat konsultasi berdasarkan kondisi perangkat Anda.";

  return [
    {
      id: `remote-${service.id}`,
      category: service.categoryId,
      question: `Apakah layanan ${service.name} bisa dilakukan secara remote?`,
      answer: remoteAnswer,
    },
    {
      id: `prep-${service.id}`,
      category: service.categoryId,
      question: `Apa yang perlu saya siapkan untuk layanan ${service.name}?`,
      answer: `Siapkan hal-hal berikut sebelum memulai: ${numbered(service.preparation)}`,
    },
    {
      id: `risiko-${service.id}`,
      category: service.categoryId,
      question: `Apa risiko atau hal yang perlu saya ketahui sebelum lanjut dengan ${service.name}?`,
      answer: `Beberapa hal penting yang perlu Anda ketahui: ${numbered(service.importantNotices)}`,
    },
    {
      id: `mulai-${service.id}`,
      category: service.categoryId,
      question: `Bagaimana cara memulai layanan ${service.name}?`,
      answer:
        "Hubungi CS kami melalui WhatsApp atau Telegram, lalu jelaskan merek, model, versi OS, dan gejala yang Anda alami. CS akan membantu menilai kelayakan dan membahas prosesnya sebelum ada keputusan untuk melanjutkan.",
    },
  ];
}