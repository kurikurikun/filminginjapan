"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface FooterProps {
  lang?: "en" | "jp";
}

export default function Footer({ lang = "en" }: FooterProps) {
  const isJp = lang === "jp";
  const pathname = usePathname();

  // Path mappings where EN and JP URLs differ
  const jpToEn: Record<string, string> = {
    "/jp/corporate-video": "/corporate-branding-videos-japan",
    "/jp/client-testimonials-video-production-tokyo-japan": "/client-testimonials-video-production-tokyo-japan",
    "/jp/event-photo-video-japan": "/event-photo-video-japan",
    "/jp/real-estate-photo-video-tokyo-japan": "/real-estate-photo-video-tokyo-japan",
  };
  const enToJp: Record<string, string> = {
    "/corporate-branding-videos-japan": "/jp/corporate-video",
    "/client-testimonials-video-production-tokyo-japan": "/jp/client-testimonials-video-production-tokyo-japan",
    "/event-photo-video-japan": "/jp/event-photo-video-japan",
    "/real-estate-photo-video-tokyo-japan": "/jp/real-estate-photo-video-tokyo-japan",
  };

  // Smart language toggle — mirrors the same logic as Navigation
  const toggleHref = isJp
    ? jpToEn[pathname] ?? (pathname.replace(/^\/jp/, "") || "/")
    : enToJp[pathname] ?? `/jp${pathname === "/" ? "" : pathname}`;

  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4 inline-block px-3 py-2 bg-white">
              <Image
                src="/images/fij.png"
                alt="Filming in Japan"
                width={160}
                height={54}
                className="h-9 w-auto"
              />
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed mb-4 max-w-sm">
              {isJp
                ? "こちらは株式会社move-mentが運営している企業向けの映像制作・写真撮影サービス専用サイトです。"
                : "Corporate video and photo production in Japan for progressive global brands. Part of Move-ment Co. Ltd., Tokyo."}
            </p>
            <div className="flex gap-4 text-sm">
              <a href="https://www.instagram.com/move_ment.co.ltd" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-[#e95228] transition-colors">Instagram</a>
              <Link href={toggleHref} className="text-neutral-400 hover:text-[#e95228] transition-colors">
                {isJp ? "English" : "日本語"}
              </Link>
              <Link href="https://www.move-ment.co" target="_blank" className="text-neutral-400 hover:text-[#e95228] transition-colors">move-ment.co</Link>
            </div>
          </div>

          {/* Tokyo */}
          <div>
            <h4 className="font-mono text-xs tracking-[0.2em] text-[#e95228] uppercase mb-4">
              {isJp ? "本社（東京）" : "Tokyo Office"}
            </h4>
            <p className="text-neutral-400 text-sm leading-relaxed">
              {isJp ? "東京都品川区東五反田1-18-5-503" : "1-18-5-503 Higashi Gotanda"}<br />
              {isJp ? "" : "Shinagawa, Tokyo 141-0022"}<br />
              050.1724.6517
            </p>
            <p className="text-neutral-400 text-sm mt-3">
              <a href="mailto:filminginjapan@move-ment.co" className="hover:text-[#e95228] transition-colors">
                filminginjapan@move-ment.co
              </a><br />
              <a href="https://wa.me/819038800895" target="_blank" rel="noopener noreferrer" className="hover:text-[#e95228] transition-colors">
                +81 90 3880 0895 (WhatsApp)
              </a>
            </p>
          </div>

          {/* Hiroshima */}
          <div>
            <h4 className="font-mono text-xs tracking-[0.2em] text-[#e95228] uppercase mb-4">
              {isJp ? "広島支店" : "Hiroshima Office"}
            </h4>
            <p className="text-neutral-400 text-sm leading-relaxed">
              {isJp ? "広島市東区南牛田1-13-4" : "1-13-4 Ushita Minami"}<br />
              {isJp ? "" : "Higashi-ku, Hiroshima"}
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-neutral-500 text-xs font-mono tracking-wider">
            &copy; {new Date().getFullYear()} Move-ment Co. Ltd. / 株式会社ムーブメント
          </p>
          <p className="text-neutral-600 text-xs font-mono tracking-[0.2em]">
            {isJp ? "代表取締役　クリス・モア" : "CEO: Chris Moore"}
          </p>
        </div>
      </div>
    </footer>
  );
}
