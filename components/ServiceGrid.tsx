"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { PlayIcon } from "@/components/editorial";

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
      <div className="grid md:grid-cols-2 gap-x-10 xl:gap-x-14 gap-y-16">
        {services.map((s) => {
          const thumb = getThumb(s);
          return (
            <article key={s.num} className="flex flex-col min-w-0">
              {/* Image first — opens the video lightbox */}
              <button
                type="button"
                onClick={() => setActive(s)}
                className="fij-zoom relative w-full overflow-hidden"
                style={{ aspectRatio: "16/9", backgroundColor: "#0d0a07" }}
                aria-label={isJp ? `動画を見る：${s.titleJp}` : `Watch example: ${s.title}`}
              >
                {thumb && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={thumb} alt="" className="absolute inset-0 w-full h-full object-cover" />
                )}
                <span className="absolute left-4 bottom-4 flex items-center gap-3">
                  <PlayIcon />
                  <span className="px-3 py-2 text-sm font-medium" style={{ backgroundColor: "#0d0a07", color: "#fdf8f3" }}>
                    {isJp ? "動画を見る" : "Watch example"}
                  </span>
                </span>
              </button>

              {/* Text — navigates to the service page */}
              <Link
                href={isJp ? s.hrefJp : s.href}
                className="group flex flex-col flex-1 pt-6 mt-6 border-t-2"
                style={{ borderColor: "#1c1208", color: "#1c1208" }}
              >
                <span className="text-[13px] font-semibold tabular-nums mb-4" style={{ color: "var(--fij-num)" }}>
                  {s.num}
                </span>
                <h3 className="fij-h3 mb-2">{isJp ? s.titleJp : s.title}</h3>
                <p
                  lang={isJp ? "en" : "ja"}
                  className={`text-sm font-medium mb-4 ${isJp ? "" : "font-jp"}`}
                  style={{ color: "#6b5a48" }}
                >
                  {isJp ? s.enLabel : s.titleJp}
                </p>
                <p className="text-[15px] leading-relaxed mb-6 max-w-xl" style={{ color: "#4a3a2a" }}>
                  {isJp ? s.descJp : s.desc}
                </p>
                <span className="mt-auto self-start fij-link text-[15px] group-hover:text-[#c43d10]">
                  {isJp ? "詳しく見る" : "Learn more"}
                </span>
              </Link>
            </article>
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
            className="absolute top-5 right-5 z-10 p-2 transition-colors hover:text-white"
            style={{ color: "rgba(255,255,255,0.75)" }}
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
