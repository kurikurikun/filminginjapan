"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const slides = [
  { src: "https://picsum.photos/seed/fij1/1200/700", caption: "Corporate Interview", client: "Sony Japan", type: "Branding & Interview" },
  { src: "https://picsum.photos/seed/fij2/1200/700", caption: "Testimonial Series", client: "Microsoft Japan", type: "Client Testimonial" },
  { src: "https://picsum.photos/seed/fij3/1200/700", caption: "Annual Conference", client: "Canon", type: "Event Coverage" },
  { src: "https://picsum.photos/seed/fij4/1200/700", caption: "Luxury Property Tour", client: "JLL Japan", type: "Real Estate & 360°" },
  { src: "https://picsum.photos/seed/fij5/1200/700", caption: "Recruitment Film", client: "Accenture", type: "Branding & Interview" },
  { src: "https://picsum.photos/seed/fij6/1200/700", caption: "Brand Documentary", client: "Google Japan", type: "Brand Film" },
];

export default function WorkCarousel() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent((index + slides.length) % slides.length);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning]);

  useEffect(() => {
    const timer = setInterval(() => goTo(current + 1), 5000);
    return () => clearInterval(timer);
  }, [current, goTo]);

  const slide = slides[current];

  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: "#0d0a07" }}>
      {/* Main image */}
      <div className="relative h-[60vh] min-h-[420px]">
        <Image
          key={current}
          src={slide.src}
          alt={slide.caption}
          fill
          className="object-cover"
          style={{ opacity: isTransitioning ? 0 : 1, transition: "opacity 0.5s ease" }}
          priority
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(13,10,7,0.85) 0%, rgba(13,10,7,0.2) 50%, rgba(13,10,7,0.1) 100%)" }} />

        {/* Caption bottom-left */}
        <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12 flex items-end justify-between">
          <div>
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase mb-2" style={{ color: "#e95228" }}>
              {slide.type}
            </p>
            <h3 className="text-2xl lg:text-3xl font-black leading-tight" style={{ color: "#fdf8f3" }}>
              {slide.caption}
            </h3>
            <p className="text-sm mt-1" style={{ color: "rgba(253,248,243,0.5)" }}>{slide.client}</p>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => goTo(current - 1)}
              className="w-10 h-10 flex items-center justify-center border transition-colors"
              style={{ borderColor: "rgba(253,248,243,0.2)", color: "rgba(253,248,243,0.6)" }}
              aria-label="Previous"
            >
              ←
            </button>
            <button
              onClick={() => goTo(current + 1)}
              className="w-10 h-10 flex items-center justify-center border transition-colors"
              style={{ borderColor: "rgba(253,248,243,0.2)", color: "rgba(253,248,243,0.6)" }}
              aria-label="Next"
            >
              →
            </button>
          </div>
        </div>
      </div>

      {/* Dot indicators + counter */}
      <div className="flex items-center justify-between px-8 lg:px-12 py-4" style={{ borderTop: "1px solid rgba(253,248,243,0.08)" }}>
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="h-0.5 transition-all duration-300"
              style={{
                width: i === current ? "32px" : "16px",
                backgroundColor: i === current ? "#e95228" : "rgba(253,248,243,0.2)",
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        <span className="font-mono text-[10px] tracking-[0.2em]" style={{ color: "rgba(253,248,243,0.3)" }}>
          {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </span>
      </div>
    </section>
  );
}
