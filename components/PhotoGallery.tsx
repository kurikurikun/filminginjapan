"use client";
import { useState } from "react";
import Image from "next/image";

interface Event {
  label: string;
  location: string;
  photos: string[];
}

export default function PhotoGallery({ events }: { events: Event[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
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
      <div style={{ backgroundColor: "#0d0a07" }}>
        <p className="text-sm px-8 pt-8 pb-4" style={{ color: "rgba(253,248,243,0.5)" }}>
          A selection of recent event photography clients:
        </p>
        <div>
          {events.map((e, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="border-t" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
                {/* Header row */}
                <button
                  className="w-full flex items-center justify-between px-8 py-4 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <div className="flex items-center gap-3">
                    {/* Thumbnail strip preview */}
                    <div className="flex -space-x-2 shrink-0">
                      {e.photos.slice(0, 3).map((src, j) => (
                        <div key={j} className="relative w-8 h-8 rounded overflow-hidden ring-1 ring-[#0d0a07]">
                          <Image src={src} alt="" fill className="object-cover" sizes="32px" />
                        </div>
                      ))}
                    </div>
                    <span className="text-sm font-black" style={{ color: "#fdf8f3" }}>{e.label}</span>
                  </div>
                  <div className="flex items-center gap-3 ml-4 shrink-0">
                    <span className="font-mono text-[10px] tracking-[0.2em] uppercase hidden sm:block" style={{ color: "rgba(233,82,40,0.8)" }}>{e.location}</span>
                    <span className="font-mono text-[9px] tracking-widest uppercase px-2 py-1 rounded" style={{ color: "rgba(233,82,40,0.9)", backgroundColor: "rgba(233,82,40,0.1)" }}>
                      {e.photos.length} photos
                    </span>
                    <svg
                      className="w-3 h-3 shrink-0 transition-transform duration-200"
                      style={{ color: "rgba(253,248,243,0.4)", transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                      viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2"
                    >
                      <path d="M2 4l4 4 4-4" />
                    </svg>
                  </div>
                </button>

                {/* Photo grid */}
                {isOpen && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 px-8 pb-6 pt-1">
                    {e.photos.map((src, j) => (
                      <button
                        key={j}
                        className="relative aspect-[4/3] overflow-hidden group"
                        onClick={(ev) => openLightbox(i, j, ev)}
                      >
                        <Image src={src} alt={`${e.label} — photo ${j + 1}`} fill className="object-cover transition-transform duration-300 group-hover:scale-105" sizes="(max-width:640px) 50vw, 33vw" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200" style={{ backgroundColor: "rgba(0,0,0,0.35)" }}>
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0zm0 0l4 4" />
                          </svg>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
          <div className="border-t" style={{ borderColor: "rgba(255,255,255,0.07)" }} />
        </div>
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
            <button className="absolute top-4 right-4 text-white opacity-70 hover:opacity-100 z-10" onClick={closeLightbox}>
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Counter */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 font-mono text-[11px] tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.5)" }}>
              {photoIdx + 1} / {photos.length}
            </div>

            {/* Prev */}
            <button
              className="absolute left-3 sm:left-6 text-white opacity-60 hover:opacity-100 z-10 p-2"
              onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
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
                alt={`${events[eventIdx].label} — photo ${photoIdx + 1}`}
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
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Event label */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center px-4">
              <p className="font-mono text-[10px] tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.4)" }}>{events[eventIdx].label}</p>
            </div>
          </div>
        );
      })()}
    </>
  );
}
