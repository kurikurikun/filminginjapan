"use client";
import { useState } from "react";
import Image from "next/image";

interface Event {
  label: string;
  location: string;
  photos: string[];
}

export default function PhotoGallery({ events, lang = "en" }: { events: Event[]; lang?: "en" | "jp" }) {
  const altFor = (e: Event, n?: number) =>
    lang === "jp"
      ? `${e.label}（${e.location}）企業イベント写真撮影${n ? ` ${n}` : ""}`
      : `${e.label} at ${e.location} — corporate event photography in Japan${n ? ` (${n})` : ""}`;
    const [lightbox, setLightbox] = useState<{ eventIdx: number; photoIdx: number } | null>(null);

  function openLightbox(eventIdx: number, photoIdx: number, e: React.MouseEvent) {
    e.stopPropagation();
    setLightbox({ eventIdx, photoIdx });
  }

  function closeLightbox() {
    setLightbox(null);
  }

  function prevPhoto() {
    if (!lightbox) return;
    const photos = events[lightbox.eventIdx].photos;
    setLightbox({ ...lightbox, photoIdx: (lightbox.photoIdx - 1 + photos.length) % photos.length });
  }

  function nextPhoto() {
    if (!lightbox) return;
    const photos = events[lightbox.eventIdx].photos;
    setLightbox({ ...lightbox, photoIdx: (lightbox.photoIdx + 1) % photos.length });
  }

  return (
    <>
      {/* Album mosaic: the first album leads large, the rest follow as cards */}
      <div className="grid gap-x-5 gap-y-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gridAutoFlow: "dense" }}>
        {events.map((e, i) => (
          <button
            key={e.label}
            type="button"
            onClick={(ev) => openLightbox(i, 0, ev)}
            className={`fij-zoom group text-left flex flex-col justify-start ${i === 0 ? "sm:col-span-2 lg:row-span-2" : ""}`}
            aria-label={lang === "jp" ? `${e.label}の写真を見る（${e.photos.length}枚）` : `View ${e.photos.length} photos from ${e.label}`}
          >
            <span className={`relative block overflow-hidden mb-3 ${i === 0 ? "aspect-[3/2] lg:aspect-auto lg:flex-1 lg:min-h-[360px]" : "aspect-[3/2]"}`} style={{ backgroundColor: "#e8d9c8" }}>
              <Image
                src={e.photos[0]}
                alt={altFor(e)}
                fill
                className="object-cover"
                sizes={i === 0 ? "(max-width: 640px) 100vw, 50vw" : "(max-width: 640px) 100vw, 25vw"}
              />
            </span>
            <span className={`block font-semibold tracking-[-0.015em] leading-snug mb-1 group-hover:text-[#c43d10] transition-colors ${i === 0 ? "text-[22px]" : "text-base"}`} style={{ color: "#1c1208" }}>
              {e.label}
            </span>
            <span className="flex justify-between gap-3 text-[13px]" style={{ color: "#6b5a48" }}>
              <span>{e.location}</span>
              <span className="whitespace-nowrap">{e.photos.length} {lang === "jp" ? "枚" : "photos"}</span>
            </span>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (() => {
        const { eventIdx, photoIdx } = lightbox;
        const photos = events[eventIdx].photos;
        return (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center"
            style={{ backgroundColor: "rgba(0,0,0,0.92)" }}
            onClick={closeLightbox}
          >
            {/* Close */}
            <button className="absolute top-4 right-4 text-white opacity-70 hover:opacity-100 z-10 p-2" onClick={closeLightbox} aria-label={lang === "jp" ? "閉じる" : "Close"}>
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Counter */}
            <div className="absolute top-5 left-1/2 -translate-x-1/2 text-[13px] tabular-nums" style={{ color: "rgba(255,255,255,0.7)" }}>
              {photoIdx + 1} / {photos.length}
            </div>

            {/* Prev */}
            <button
              className="absolute left-3 sm:left-6 text-white opacity-60 hover:opacity-100 z-10 p-2"
              onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
              aria-label={lang === "jp" ? "前の写真" : "Previous photo"}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Image */}
            <div
              className="relative mx-16 sm:mx-20"
              style={{ maxWidth: "min(90vw, 1100px)", maxHeight: "85vh", width: "100%", aspectRatio: "auto" }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                key={photos[photoIdx]}
                src={photos[photoIdx]}
                alt={altFor(events[eventIdx], photoIdx + 1)}
                width={1400}
                height={940}
                className="object-contain w-full h-full"
                style={{ maxHeight: "85vh" }}
              />
            </div>

            {/* Next */}
            <button
              className="absolute right-3 sm:right-6 text-white opacity-60 hover:opacity-100 z-10 p-2"
              onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
              aria-label={lang === "jp" ? "次の写真" : "Next photo"}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Event label */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center px-4">
              <p className="text-[13px]" style={{ color: "rgba(255,255,255,0.7)" }}>{events[eventIdx].label}</p>
            </div>
          </div>
        );
      })()}
    </>
  );
}
