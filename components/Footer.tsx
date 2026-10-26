"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { allLiveServices } from "@/lib/services";

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
    "/jp/managed-youtube": "/managed-youtube-japan",
  };
  const enToJp: Record<string, string> = {
    "/corporate-branding-videos-japan": "/jp/corporate-video",
    "/client-testimonials-video-production-tokyo-japan": "/jp/client-testimonials-video-production-tokyo-japan",
    "/event-photo-video-japan": "/jp/event-photo-video-japan",
    "/real-estate-photo-video-tokyo-japan": "/jp/real-estate-photo-video-tokyo-japan",
    "/managed-youtube-japan": "/jp/managed-youtube",
  };

  // Smart language toggle — mirrors the same logic as Navigation
  const toggleHref = isJp
    ? jpToEn[pathname] ?? (pathname.replace(/^\/jp/, "") || "/")
    : enToJp[pathname] ?? `/jp${pathname === "/" ? "" : pathname}`;

  return (
    <footer className="pt-20 pb-9" style={{ backgroundColor: "#0d0a07", color: "rgba(253,248,243,0.75)" }}>
      <div className="fij-wrap">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/15">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-5 inline-block px-3.5 py-2.5" style={{ backgroundColor: "#fdf8f3" }}>
              <Image
                src="/images/fij.png"
                alt="Filming in Japan"
                width={160}
                height={54}
                className="h-9 w-auto"
              />
            </div>
            <p className="text-sm leading-relaxed mb-5 max-w-sm">
              {isJp
                ? "こちらは株式会社move-mentが運営している企業向けの映像制作・写真撮影サービス専用サイトです。"
                : "Corporate video and photo production in Japan for progressive global brands. Part of Move-ment Co. Ltd., Tokyo."}
            </p>
            <div className="flex flex-wrap gap-5 text-sm">
              <a href="https://www.instagram.com/move_ment.co.ltd" target="_blank" rel="noopener noreferrer" className="text-[#fdf8f3] hover:text-[#f07a52] transition-colors">Instagram</a>
              <Link href={toggleHref} className="text-[#fdf8f3] hover:text-[#f07a52] transition-colors">
                {isJp ? "English" : "日本語"}
              </Link>
              <Link href="https://www.move-ment.co" target="_blank" className="text-[#fdf8f3] hover:text-[#f07a52] transition-colors">move-ment.co</Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[13px] font-semibold text-[#f07a52] mb-4">
              {isJp ? "サービス" : "Services"}
            </h4>
            <ul className="space-y-2">
              {allLiveServices(isJp ? "jp" : "en").map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-sm text-[rgba(253,248,243,0.8)] hover:text-[#f07a52] transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tokyo */}
          <div>
            <h4 className="text-[13px] font-semibold text-[#f07a52] mb-4">
              {isJp ? "本社（東京）" : "Tokyo Office"}
            </h4>
            <p className="text-sm leading-relaxed">
              {isJp ? "東京都品川区東五反田1-18-5-503" : "1-18-5-503 Higashi Gotanda"}<br />
              {isJp ? "" : "Shinagawa, Tokyo 141-0022"}<br />
              050.1724.6517
            </p>
            <p className="text-sm mt-3 leading-relaxed">
              <a href="mailto:filminginjapan@move-ment.co" className="text-[rgba(253,248,243,0.8)] hover:text-[#f07a52] transition-colors">
                filminginjapan@move-ment.co
              </a><br />
              <a href="https://wa.me/819038800895" target="_blank" rel="noopener noreferrer" className="text-[rgba(253,248,243,0.8)] hover:text-[#f07a52] transition-colors">
                +81 90 3880 0895 (WhatsApp)
              </a>
            </p>
          </div>

          {/* Hiroshima */}
          <div>
            <h4 className="text-[13px] font-semibold text-[#f07a52] mb-4">
              {isJp ? "広島支店" : "Hiroshima Office"}
            </h4>
            <p className="text-sm leading-relaxed">
              {isJp ? "広島市東区南牛田1-13-4" : "1-13-4 Ushita Minami"}<br />
              {isJp ? "" : "Higashi-ku, Hiroshima"}
            </p>
          </div>
        </div>

        {/* MOFA consumption tax exemption designation */}
        <div className="py-8 border-b border-white/15 flex items-start gap-4">
          <Image src="/images/ds-mark.svg" alt="DS designated store mark" width={50} height={40} className="shrink-0 mt-0.5" unoptimized />
          <div>
            <h4 className="text-[13px] font-semibold text-[#f07a52] mb-2">
              {isJp ? "指定" : "Designation"}
            </h4>
            <p className="text-[13px] leading-relaxed max-w-3xl">
              {isJp
                ? "外務省『外国公館等に対する消費税免除指定店舗』（2026年9月指定）。大使館・領事館・国際機関のお客様は、免税カードのご提示により消費税抜き価格でご利用いただけます。"
                : "Move-ment is designated by Japan's Ministry of Foreign Affairs as a store for consumption tax exemption for foreign diplomatic missions and international organisations (designated September 2026). Embassies, consulates and UN agencies holding a MOFA tax exemption card can procure our services free of Japanese consumption tax."}
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[13px] text-[rgba(253,248,243,0.6)]">
            &copy; {new Date().getFullYear()} Move-ment Co. Ltd. / 株式会社ムーブメント
          </p>
          <p className="text-[13px] text-[rgba(253,248,243,0.6)]">
            {isJp ? "代表取締役　クリス・モア" : "CEO: Chris Moore"}
          </p>
        </div>
      </div>
    </footer>
  );
}
