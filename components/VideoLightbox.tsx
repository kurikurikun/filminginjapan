"use client";

import { useState, useEffect, useCallback } from "react";
import LazyIframe from "@/components/LazyIframe";

interface VideoLightboxProps {
  vimeoId: string;
  vimeoHash: string;
  title: string;
}

export default function VideoLightbox({ vimeoId, vimeoHash, title }: VideoLightboxProps) {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, close]);

  return (
    <>
      {/* Panel video at its native 16:9, with the name and full-screen control underneath
          (overlays would sit on top of Vimeo's own controls once it plays) */}
      <div className="flex flex-col justify-center">
        <div className="relative w-full aspect-video overflow-hidden" style={{ backgroundColor: "#0d0a07" }}>
          <LazyIframe
            src={`https://player.vimeo.com/video/${vimeoId}?h=${vimeoHash}`}
            title={title}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
            style={{ border: 0 }}
          />
        </div>
        <div className="flex items-stretch justify-between gap-3" style={{ backgroundColor: "#0d0a07" }}>
          <div className="px-4 py-2.5">
            <p className="text-[15px] font-semibold tracking-[-0.01em]" style={{ color: "#fdf8f3" }}>Chris Moore</p>
            <p className="text-[13px] font-medium" style={{ color: "rgba(253,248,243,0.75)" }}>Creative Director</p>
          </div>
          <button
            onClick={() => setOpen(true)}
            className="flex items-center gap-2 px-4 text-sm font-medium transition-colors hover:bg-[#3a2a1a]"
            style={{ color: "#fdf8f3" }}
          >
            <svg className="w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>

      {/* Lightbox */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: "rgba(0,0,0,0.95)" }}
          onClick={close}
        >
          <button
            className="absolute top-5 right-5 z-10 p-2 text-white/75 hover:text-white transition-colors"
            onClick={close}
            aria-label="Close"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div
            className="relative w-full max-w-5xl mx-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src={`https://player.vimeo.com/video/${vimeoId}?h=${vimeoHash}&autoplay=1`}
                title={title}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
