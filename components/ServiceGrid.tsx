"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

interface Service {
  num: string;
  title: string;
  titleJp: string;
  enLabel: string;
  desc: string;
  descJp: string;
  href: string;
  hrefJp: string;
  videoType: "youtube" | "vimeo";
  videoId: string;
  videoHash?: string;
}

const services: Service[] = [
  {
    num: "01",
    title: "Branding, Interview & Recruitment",
    titleJp: "ブランディング・インタビュー・採用動画",
    enLabel: "Branding, Interview + Recruitment",
    desc: "End-to-end brand videos connecting corporate services to diverse audiences in English and Japanese, using the power of story.",
    descJp: "日英バイリンガルで企業サービスと多様なオーディエンスをつなぐブランド動画。ストーリーの力で、伝わる映像を制作します。",
    href: "/corporate-branding-videos-japan",
    hrefJp: "/corporate-branding-videos-japan",
    videoType: "youtube",
    videoId: "t-VSxoBQlRA",
  },
  {
    num: "02",
    title: "Client Testimonial Stories",
    titleJp: "カスタマーストーリー",
    enLabel: "Customer Stories",
    desc: "Let your biggest fans tell the world. Multi-camera testimonial production, onsite or remote, in English or Japanese.",
    descJp: "オンライン取材、オフィス取材、イベント取材でも。お客様のリアルな声で、次の顧客と出会う。顧客の声が最強のマーケティングツールになります。",
    href: "/client-testimonials-video-production-tokyo-japan",
    hrefJp: "/jp/client-testimonials-video-production-tokyo-japan",
    videoType: "youtube",
    videoId: "vmPtyBH9VQY",
  },
  {
    num: "03",
    title: "Event Photo & Video",
    titleJp: "イベント写真・映像制作",
    enLabel: "Event Photo + Video",
    desc: "Complete photo and video coverage of corporate events. Digest edits ready for social media delivery within the hour.",
    descJp: "企業イベントの写真・映像を完全カバー。SNS向けダイジェスト編集は当日中に納品対応。",
    href: "/event-photo-video-japan",
    hrefJp: "/jp/event-photo-video-japan",
    videoType: "vimeo",
    videoId: "835953571",
    videoHash: "db224e3600",
  },
  {
    num: "04",
    title: "Real Estate Photo, Video & 360°",
    titleJp: "不動産・建築撮影・360°ツアー",
    enLabel: "Real Estate Photo, Video + 360°",
    desc: "Architectural photography and video, renovation documentation, and high-quality 360° panoramas for virtual tours.",
    descJp: "建築写真・動画撮影、リノベーション記録、高品質な360°パノラマによるバーチャルツアー制作。",
    href: "/real-estate-photo-video-tokyo-japan",
    hrefJp: "/jp/real-estate-photo-video-tokyo-japan",
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

export default function ServiceGrid({ lang = "en" }: { lang?: "en" | "jp" }) {
  const isJp = lang === "jp";
  const [active, setActive] = useState<Service | null>(null);
  const [vimeoThumbs, setVimeoThumbs] = useState<Record<string, string>>({});

  useEffect(() => {
    if (!active) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setActive(null); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [active]);

  useEffect(() => {
    const vimeoServices = services.filter(s => s.videoType === "vimeo");
    Promise.all(
      vimeoServices.map(async (s) => {
        try {
          const vimeoUrl = s.videoHash
            ? `https://vimeo.com/${s.videoId}/${s.videoHash}`
            : `https://vimeo.com/${s.videoId}`;
          const res = await fetch(`https://vimeo.com/api/oembed.json?url=${encodeURIComponent(vimeoUrl)}&width=1280`);
          const data = await res.json();
          return [s.videoId, data.thumbnail_url as string] as const;
        } catch {
          return [s.videoId, ""] as const;
        }
      })
    ).then(entries => setVimeoThumbs(Object.fromEntries(entries)));
  }, []);

  function getThumb(s: Service): string {
    if (s.videoType === "youtube") {
      return `https://img.youtube.com/vi/${s.videoId}/maxresdefault.jpg`;
    }
    return vimeoThumbs[s.videoId] || "";
  }

  return (
    <>
      <div className="grid md:grid-cols-2 gap-px" style={{ backgroundColor: "#e8d9c8" }}>
        {services.map((s) => {
          const thumb = getThumb(s);
          return (
            <div key={s.num} className="service-card flex flex-col">
              {/* Text portion — navigates to service page */}
              <Link href={isJp ? s.hrefJp : s.href} className="p-10 lg:p-12 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-8">
                  <span className="service-num text-xs font-black" style={{ color: "#e95228" }}>
                    {s.num}
                  </span>
                  <span className="service-learn font-mono text-[10px] tracking-[0.2em] uppercase" style={{ color: "#e95228" }}>
                    {isJp ? "詳しく見る →" : "Learn more →"}
                  </span>
                </div>
                <h3 className="service-title text-xl lg:text-2xl font-black leading-tight mb-1" style={{ color: "#1c1208" }}>
                  {isJp ? s.titleJp : s.title}
                </h3>
                <p className="service-jp text-xs font-jp mb-5" style={{ color: "#e95228" }}>
                  {isJp ? s.enLabel : s.titleJp}
                </p>
                <p className="service-desc text-sm leading-relaxed mt-auto" style={{ color: "rgba(28,18,8,0.5)" }}>
                  {isJp ? s.descJp : s.desc}
                </p>
              </Link>

              {/* Thumbnail — clicks to open lightbox */}
              <button
                onClick={() => setActive(s)}
                className="relative w-full overflow-hidden group/thumb"
                style={{ aspectRatio: "16/9", backgroundColor: "#0d0a07" }}
                aria-label={isJp ? `${s.titleJp}の動画を見る` : `Watch ${s.title} example`}
              >
                {thumb && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={thumb}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover/thumb:scale-105"
                    style={{ opacity: 0.85 }}
                  />
                )}
                {/* Overlay */}
                <div
                  className="absolute inset-0 transition-opacity duration-300 group-hover/thumb:opacity-60"
                  style={{ background: "linear-gradient(to top, rgba(13,10,7,0.6) 0%, rgba(13,10,7,0.1) 60%)" }}
                />
                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    className="flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-200 group-hover/thumb:bg-[#e95228] group-hover/thumb:border-[#e95228]"
                    style={{ borderColor: "rgba(255,255,255,0.8)", backgroundColor: "rgba(0,0,0,0.3)" }}
                  >
                    <svg className="w-5 h-5 ml-0.5" viewBox="0 0 10 10" fill="white">
                      <polygon points="2,1 9,5 2,9" />
                    </svg>
                  </span>
                </div>
                {/* Watch label */}
                <div className="absolute bottom-3 left-0 right-0 flex justify-center">
                  <span className="font-mono text-[10px] tracking-[0.2em] uppercase" style={{ color: "rgba(255,255,255,0.6)" }}>
                    {isJp ? "動画を見る" : "Watch example"}
                  </span>
                </div>
              </button>
            </div>
          );
        })}
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
