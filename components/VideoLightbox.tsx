"use client";

import { useState, useEffect, useCallback } from "react";

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
      {/* Panel video — fills container, cropped L/R */}
      <div className="relative overflow-hidden min-h-[320px] lg:min-h-[560px]" style={{ backgroundColor: "#0d0a07" }}>
        <iframe
          src={`https://player.vimeo.com/video/${vimeoId}?h=${vimeoHash}`}
          title={title}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          className="absolute"
          style={{
            top: "50%", left: "50%",
            transform: "translate(-50%, -50%)",
            width: "177.78%",
            aspectRatio: "16/9",
            minHeight: "100%",
            border: 0,
          }}
        />

        {/* Expand button */}
        <button
          onClick={() => setOpen(true)}
          className="absolute top-4 right-4 z-10 flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors hover:bg-[#3a2a1a]"
          style={{ backgroundColor: "#0d0a07", color: "#fdf8f3" }}
          aria-label="Watch full screen"
        >
          <svg className="w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
          </svg>
          <span>Full screen</span>
        </button>

        {/* Name card */}
        <div className="absolute bottom-4 left-4 z-10 inline-block px-4 py-2.5" style={{ backgroundColor: "#0d0a07" }}>
          <p className="text-[15px] font-semibold tracking-[-0.01em]" style={{ color: "#fdf8f3" }}>Chris Moore</p>
          <p className="text-[13px] font-medium" style={{ color: "rgba(253,248,243,0.75)" }}>Creative Director</p>
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
