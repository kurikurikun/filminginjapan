"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const enLinks = [
  { label: "Corporate Video", href: "/corporate-branding-videos-japan" },
  { label: "Testimonials", href: "/client-testimonials-video-production-tokyo-japan" },
  { label: "Events", href: "/event-photo-video-japan" },
  { label: "Real Estate", href: "/real-estate-photo-video-tokyo-japan" },
  { label: "Contact", href: "/contact" },
];

const jpLinks = [
  { label: "インタビュー・採用", href: "/jp/corporate-video" },
  { label: "カスタマーストーリー", href: "/jp/client-testimonial" },
  { label: "イベント", href: "/jp/event-photo-video" },
  { label: "不動産", href: "/jp/real-estate-photo-video" },
  { label: "お問い合わせ", href: "/jp/contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const isJp = pathname.startsWith("/jp");
  const links = isJp ? jpLinks : enLinks;
  const [open, setOpen] = useState(false);

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

  // Language toggle target
  const toggleHref = isJp
    ? jpToEn[pathname] ?? (pathname.replace(/^\/jp/, "") || "/")
    : enToJp[pathname] ?? `/jp${pathname === "/" ? "" : pathname}`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b" style={{ backgroundColor: "rgba(253,248,243,0.95)", borderColor: "#e8d9c8" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={isJp ? "/jp" : "/"} className="flex items-center gap-2 shrink-0">
            <Image
              src="/images/fij.png"
              alt="Filming in Japan"
              width={160}
              height={54}
              className="h-11 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-[#e95228] ${
                  pathname === link.href ? "text-[#e95228]" : "text-neutral-600"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/* Language toggle */}
            <Link
              href={toggleHref}
              className="font-mono text-xs tracking-[0.2em] border border-neutral-200 px-3 py-1.5 hover:border-[#e95228] hover:text-[#e95228] transition-colors"
            >
              {isJp ? "EN" : "日本語"}
            </Link>

            {/* Contact CTA */}
            <Link
              href={isJp ? "/jp/contact" : "/contact"}
              className="hidden sm:block bg-[#e95228] text-white text-xs font-bold tracking-[0.15em] uppercase px-4 py-2 hover:bg-[#c43d10] transition-colors"
            >
              {isJp ? "相談する" : "Get a Quote"}
            </Link>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              <div className="w-5 space-y-1">
                <span className={`block h-0.5 bg-neutral-800 transition-all ${open ? "rotate-45 translate-y-1.5" : ""}`} />
                <span className={`block h-0.5 bg-neutral-800 transition-all ${open ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 bg-neutral-800 transition-all ${open ? "-rotate-45 -translate-y-1.5" : ""}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t px-4 py-4 space-y-3" style={{ backgroundColor: "#fdf8f3", borderColor: "#e8d9c8" }}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-sm font-medium text-neutral-700 hover:text-[#e95228] py-1"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
