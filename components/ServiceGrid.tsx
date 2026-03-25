"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

interface Service {
  num: string;
  title: string;
  titleJp: string;
  desc: string;
  href: string;
  videoType: "youtube" | "vimeo";
  videoId: string;
  videoHash?: string;
}

const services: Service[] = [
  {
    num: "01",
    title: "Branding, Interview & Recruitment",
    titleJp: "ブランディング・インタビュー・採用動画",
    desc: "End-to-end brand videos connecting corporate services to diverse audiences in English and Japanese, using the power of story.",
    href: "/corporate-branding-videos-japan",
    videoType: "youtube",
    videoId: "t-VSxoBQlRA",
  },
  {
    num: "02",
    title: "Client Testimonial Stories",
    titleJp: "お客様インタビュー動画",
    desc: "Let your biggest fans tell the world. Multi-camera testimonial production, onsite or remote, in English or Japanese.",
    href: "/client-testimonials-video-production-tokyo-japan",
    videoType: "youtube",
    videoId: "vmPtyBH9VQY",
  },
  {
    num: "03",
    title: "Event Photo & Video",
    titleJp: "イベント撮影",
    desc: "Complete photo and video coverage of corporate events. Digest edits ready for social media delivery within the hour.",
    href: "/event-photo-video-japan",
    videoType: "vimeo",
    videoId: "835953571",
    videoHash: "db224e3600",
  },
  {
    num: "04",
    title: "Real Estate Photo, Video & 360°",
    titleJp: "不動産・建築撮影・360°ツアー",
    desc: "Architectural photography and video, renovation documentation, and high-quality 360° panoramas for virtual tours.",
    href: "/real-estate-photo-video-tokyo-japan",
    videoType: "vimeo",
    videoId: "893552694",
    videoHash: "5ad49846c3",
  },
];

function embedUrl(s: Service) {
  if (s.videoType === "youtube") {
    return `https://www.youtube.com/embed/${s.videoId}?autoplay=1&rel=0`;
  }
  return `https://player.vimeo.com/video/${s.videoId}?h=${s.videoHash}&autoplay=1`;
}

export default function ServiceGrid() {
  const [active, setActive] = useState<Service | null>(null);

  useEffect(() => {
    if (!active) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setActive(null); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [active]);

  return (
    <>
      <div className="grid md:grid-cols-2 gap-px" style={{ backgroundColor: "#e8d9c8" }}>
        {services.map((s) => (
          <div key={s.num} className="service-card flex flex-col">
            {/* Text portion — navigates to service page */}
            <Link href={s.href} className="p-10 lg:p-12 flex flex-col flex-1">
              <div className="flex items-start justify-between mb-8">
                <span className="service-num font-mono text-[10px] tracking-[0.3em]" style={{ color: "#e95228" }}>
                  {s.num}
                </span>
                <span className="service-learn font-mono text-[10px] tracking-[0.2em] uppercase" style={{ color: "#e95228" }}>
                  Learn more →
                </span>
              </div>
              <h3 className="service-title text-xl lg:text-2xl font-black leading-tight mb-1" style={{ color: "#1c1208" }}>
                {s.title}
              </h3>
              <p className="service-jp text-xs font-jp mb-5" style={{ color: "#e95228" }}>
                {s.titleJp}
              </p>
              <p className="service-desc text-sm leading-relaxed mt-auto" style={{ color: "rgba(28,18,8,0.5)" }}>
                {s.desc}
              </p>
            </Link>

            {/* Video strip */}
            <button
              onClick={() => setActive(s)}
              className="flex items-center gap-3 px-10 lg:px-12 py-4 border-t transition-colors group/play"
              style={{ borderColor: "#e8d9c8", backgroundColor: "transparent" }}
              aria-label={`Watch ${s.title} example`}
            >
              <span
                className="flex items-center justify-center w-7 h-7 rounded-full border transition-colors group-hover/play:bg-[#e95228] group-hover/play:border-[#e95228]"
                style={{ borderColor: "#e95228" }}
              >
                <svg className="w-3 h-3 ml-0.5" viewBox="0 0 10 10" fill="currentColor" style={{ color: "#e95228" }}>
                  <polygon points="2,1 9,5 2,9" className="group-hover/play:fill-white" />
                </svg>
              </span>
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase transition-colors" style={{ color: "rgba(28,18,8,0.45)" }}>
                Watch example
              </span>
            </button>
          </div>
        ))}
      </div>

      {/* Video lightbox */}
      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: "rgba(0,0,0,0.95)" }}
          onClick={() => setActive(null)}
        >
          <button
            className="absolute top-5 right-5 z-10 p-2 transition-colors"
            style={{ color: "rgba(255,255,255,0.6)" }}
            onClick={() => setActive(null)}
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
                src={embedUrl(active)}
                title={active.title}
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
