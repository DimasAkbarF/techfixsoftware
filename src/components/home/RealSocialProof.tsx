"use client";

import { useState } from "react";
import Image from "next/image";
import { testimonials } from "@/data/testimonials";
import { Lightbox } from "@/components/ui/Lightbox";
import { Star } from "lucide-react";

export function RealSocialProof() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState({ src: "", alt: "" });

  const openLightbox = (src: string, alt: string) => {
    setCurrentImage({ src, alt });
    setLightboxOpen(true);
  };

  return (
    <section className="py-16 md:py-24 bg-background" id="testimoni">
      <div className="container-page max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-xl font-bold tracking-tight sm:text-2xl text-foreground mb-3">
            Bukti Nyata, Bukan Sekadar Janji
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
            Ratusan perangkat telah berhasil kami pulihkan. Berikut adalah beberapa percakapan asli (dengan izin) dari klien kami.
          </p>
        </div>

        {/* Masonry Layout (CSS Columns) */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((testi) => (
            <div key={testi.id} className="break-inside-avoid">
              <div className="bg-card border border-border rounded-[var(--radius-xl)] p-4 hover:shadow-card-hover transition-shadow group">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex text-whatsapp">
                    {[...Array(testi.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  {testi.device && (
                    <span className="text-xs font-medium text-muted-foreground ml-auto">
                      {testi.device}
                    </span>
                  )}
                </div>

                {/* Screenshot inside Phone Frame */}
                <div 
                  className="relative mx-auto max-w-[260px] aspect-[9/19] rounded-[2.5rem] border-[8px] border-foreground overflow-hidden cursor-zoom-in bg-black"
                  onClick={() => openLightbox(testi.image, testi.altText || "Testimoni")}
                >
                  {/* Notch */}
                  <div className="absolute top-0 inset-x-0 h-6 bg-foreground rounded-b-2xl mx-12 z-20" />
                  
                  <Image
                    src={testi.image}
                    alt={testi.altText || "Screenshot testimoni"}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 z-10"
                    sizes="(max-width: 640px) 100vw, 260px"
                  />
                  
                  {/* Overlay icon */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors z-30 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 bg-black/60 text-white px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm transition-opacity">
                      Lihat Penuh
                    </span>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2 justify-center">
                  {testi.services.map((svc) => (
                    <span key={svc} className="text-[10px] font-semibold text-accent bg-accent-subtle px-2 py-1 rounded-full border border-accent/20">
                      {svc}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Lightbox 
        src={currentImage.src} 
        alt={currentImage.alt} 
        isOpen={lightboxOpen} 
        onClose={() => setLightboxOpen(false)} 
      />
    </section>
  );
}
