"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface PhotoItem {
  src: string;
  alt: string;
}

interface PhotoGridProps {
  /** The first image is the large lead; the rest fill a tight grid around and below it. */
  images: PhotoItem[];
  /** Language of the lightbox control labels. */
  lang?: "en" | "jp";
}

/**
 * Editorial photo mosaic: one large lead image (2×2 cells) and the rest in a tight
 * grid of identical 4:3 crops. Square corners, `.fij-zoom` hover, click to open the lightbox.
 */
export default function PhotoGrid({ images, lang = "en" }: PhotoGridProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const jp = lang === "jp";

  const close = useCallback(() => setLightboxIndex(null), []);
  const prev = useCallback(
    () => setLightboxIndex((i) => (i !== null ? (i - 1 + images.length) % images.length : null)),
    [images.length]
  );
  const next = useCallback(
    () => setLightboxIndex((i) => (i !== null ? (i + 1) % images.length : null)),
    [images.length]
  );

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIndex, close, prev, next]);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
        {images.map((img, i) => {
          const lead = i === 0 && images.length > 1;
          return (
            <button
              key={img.src}
              type="button"
              className={`fij-zoom relative overflow-hidden cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1c1208] ${
                lead ? "col-span-2 aspect-[4/3] sm:aspect-auto sm:row-span-2" : "aspect-[4/3]"
              }`}
              style={{ backgroundColor: "#e8d9c8" }}
              onClick={() => setLightboxIndex(i)}
              aria-label={jp ? `${img.alt}を拡大表示` : `View ${img.alt}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes={lead ? "(max-width: 640px) 100vw, (max-width: 1024px) 60vw, 420px" : "(max-width: 640px) 50vw, (max-width: 1024px) 30vw, 210px"}
              />
            </button>
          );
        })}
      </div>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: "rgba(13,10,7,0.95)" }}
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={images[lightboxIndex].alt}
        >
          {/* Close */}
          <button
            type="button"
            className="absolute top-5 right-5 z-10 p-2 text-white/70 hover:text-white transition-colors"
            onClick={close}
            aria-label={jp ? "閉じる" : "Close"}
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="square" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Prev */}
          {images.length > 1 && (
            <button
              type="button"
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 p-3 text-white/70 hover:text-white transition-colors"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label={jp ? "前の写真" : "Previous"}
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="square" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Image */}
          <div
            className="relative w-full max-w-5xl mx-14 sm:mx-20 max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full" style={{ paddingBottom: "66.67%" }}>
              <Image
                src={images[lightboxIndex].src}
                alt={images[lightboxIndex].alt}
                fill
                className="object-contain"
                sizes="90vw"
              />
            </div>
            <div className="flex flex-wrap justify-between gap-x-6 gap-y-1 mt-4 text-sm" style={{ color: "rgba(253,248,243,0.78)" }}>
              <p>{images[lightboxIndex].alt}</p>
              <p className="text-[13px] font-semibold tabular-nums">
                {lightboxIndex + 1} / {images.length}
              </p>
            </div>
          </div>

          {/* Next */}
          {images.length > 1 && (
            <button
              type="button"
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 p-3 text-white/70 hover:text-white transition-colors"
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label={jp ? "次の写真" : "Next"}
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="square" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>
      )}
    </>
  );
}
