"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface PhotoItem {
  src: string;
  alt: string;
}

interface PhotoGridProps {
  images: PhotoItem[];
}

export default function PhotoGrid({ images }: PhotoGridProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

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

  const gridCols = images.length >= 3 ? "grid-cols-2 sm:grid-cols-4" : "grid-cols-2";

  return (
    <>
      <div className={`grid gap-2 mb-8 ${gridCols}`}>
        {images.map((img, i) => (
          <button
            key={i}
            className="relative aspect-square overflow-hidden group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e95228]"
            onClick={() => setLightboxIndex(i)}
            aria-label={`View ${img.alt}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 20vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg className="w-7 h-7 drop-shadow-lg" fill="none" stroke="white" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
              </svg>
            </div>
          </button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: "rgba(0,0,0,0.93)" }}
          onClick={close}
        >
          {/* Close */}
          <button
            className="absolute top-5 right-5 z-10 p-2 text-white/60 hover:text-white transition-colors"
            onClick={close}
            aria-label="Close"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Prev */}
          {images.length > 1 && (
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 text-white/60 hover:text-white transition-colors"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Previous"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Image */}
          <div
            className="relative w-full max-w-5xl mx-20 max-h-[85vh]"
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
            <p className="text-center text-sm mt-3" style={{ color: "rgba(255,255,255,0.5)" }}>
              {images[lightboxIndex].alt}
            </p>
            <p className="text-center mt-1 font-mono text-[10px]" style={{ color: "rgba(255,255,255,0.25)" }}>
              {lightboxIndex + 1} / {images.length}
            </p>
          </div>

          {/* Next */}
          {images.length > 1 && (
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 text-white/60 hover:text-white transition-colors"
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Next"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>
      )}
    </>
  );
}
