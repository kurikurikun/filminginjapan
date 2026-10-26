"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  enServices,
  jpServices,
  enSocialGroup,
  jpSocialGroup,
  liveChildren,
} from "@/lib/services";

export default function Navigation() {
  const pathname = usePathname();
  const isJp = pathname.startsWith("/jp");
  const links = isJp ? jpServices : enServices;
  const group = isJp ? jpSocialGroup : enSocialGroup;
  const groupLinks = liveChildren(group);
  const contact = isJp
    ? { label: "お問い合わせ", href: "/jp/contact" }
    : { label: "Contact", href: "/contact" };
  const [open, setOpen] = useState(false);
  const [groupOpen, setGroupOpen] = useState(false);
  const groupRef = useRef<HTMLDivElement>(null);

  // Close the dropdown on Escape or a click outside it
  useEffect(() => {
    if (!groupOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setGroupOpen(false); };
    const onClick = (e: MouseEvent) => {
      if (groupRef.current && !groupRef.current.contains(e.target as Node)) setGroupOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [groupOpen]);

  // Close the dropdown when navigating
  useEffect(() => { setGroupOpen(false); }, [pathname]);

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

  // Language toggle target
  const toggleHref = isJp
    ? jpToEn[pathname] ?? (pathname.replace(/^\/jp/, "") || "/")
    : enToJp[pathname] ?? (pathname === "/" || pathname === "/contact" ? `/jp${pathname === "/" ? "" : pathname}` : "/jp"); // pages with no Japanese version go to the JP home

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b" style={{ backgroundColor: "rgba(253,248,243,0.95)", borderColor: "#1c1208" }}>
      <div className="fij-wrap">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={isJp ? "/jp" : "/"} className="flex items-center gap-2 shrink-0">
            <Image
              src="/images/fij.png"
              alt="Filming in Japan"
              width={160}
              height={54}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav aria-label={isJp ? "メイン" : "Main"} className="hidden lg:flex items-center gap-7">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-[#c43d10] ${
                  pathname === link.href ? "text-[#c43d10]" : "text-[#4a3a2a]"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Social + YouTube — flat link while only one page is live, dropdown once both are */}
            {groupLinks.length === 1 && (
              <Link
                href={groupLinks[0].href}
                className={`text-sm font-medium transition-colors hover:text-[#c43d10] ${
                  pathname === groupLinks[0].href ? "text-[#c43d10]" : "text-[#4a3a2a]"
                }`}
              >
                {groupLinks[0].label}
              </Link>
            )}
            {groupLinks.length > 1 && (
              <div
                ref={groupRef}
                className="relative"
                onMouseEnter={() => setGroupOpen(true)}
                onMouseLeave={() => setGroupOpen(false)}
              >
                <button
                  onClick={() => setGroupOpen(!groupOpen)}
                  aria-expanded={groupOpen}
                  aria-haspopup="true"
                  className={`flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-[#c43d10] ${
                    groupLinks.some((c) => c.href === pathname) ? "text-[#c43d10]" : "text-[#4a3a2a]"
                  }`}
                >
                  {group.label}
                  <svg
                    className={`w-3 h-3 transition-transform ${groupOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {groupOpen && (
                  <div
                    className="absolute left-0 top-full pt-3 min-w-[220px]"
                  >
                    <div className="border py-2" style={{ backgroundColor: "#fdf8f3", borderColor: "#1c1208" }}>
                      {groupLinks.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`block px-4 py-2 text-sm font-medium transition-colors hover:text-[#c43d10] ${
                            pathname === child.href ? "text-[#c43d10]" : "text-[#4a3a2a]"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            <Link
              href={contact.href}
              className={`text-sm font-medium transition-colors hover:text-[#c43d10] ${
                pathname === contact.href ? "text-[#c43d10]" : "text-[#4a3a2a]"
              }`}
            >
              {contact.label}
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            {/* Language toggle */}
            <Link
              href={toggleHref}
              lang={isJp ? "en" : "ja"}
              className={`text-[13px] font-medium px-2 py-2.5 text-[#4a3a2a] hover:text-[#c43d10] transition-colors ${isJp ? "" : "font-jp"}`}
            >
              {isJp ? "EN" : "日本語"}
            </Link>

            {/* Contact CTA */}
            <Link
              href={isJp ? "/jp/contact" : "/contact"}
              className="hidden sm:block bg-[#e95228] text-[#0d0a07] text-sm font-semibold px-[18px] py-[11px] hover:bg-[#f06a42] transition-colors"
            >
              {isJp ? "相談する" : "Get a quote"}
            </Link>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2"
              onClick={() => setOpen(!open)}
              aria-label={isJp ? "メニュー" : "Toggle menu"}
              aria-expanded={open}
            >
              <div className="w-5 space-y-1">
                <span className={`block h-0.5 bg-[#1c1208] transition-all ${open ? "rotate-45 translate-y-1.5" : ""}`} />
                <span className={`block h-0.5 bg-[#1c1208] transition-all ${open ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 bg-[#1c1208] transition-all ${open ? "-rotate-45 -translate-y-1.5" : ""}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t px-5 py-5 space-y-1" style={{ backgroundColor: "#fdf8f3", borderColor: "#1c1208" }}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-lg font-semibold tracking-[-0.01em] text-[#1c1208] hover:text-[#c43d10] py-2"
            >
              {link.label}
            </Link>
          ))}

          {/* Social + YouTube — flat while only one page is live, grouped once both are */}
          {groupLinks.length === 1 && (
            <Link
              href={groupLinks[0].href}
              onClick={() => setOpen(false)}
              className="block text-lg font-semibold tracking-[-0.01em] text-[#1c1208] hover:text-[#c43d10] py-2"
            >
              {groupLinks[0].label}
            </Link>
          )}
          {groupLinks.length > 1 && (
            <div className="space-y-2">
              <span className="block text-[13px] font-medium pt-2" style={{ color: "#6b5a48" }}>
                {group.label}
              </span>
              {groupLinks.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  onClick={() => setOpen(false)}
                  className="block pl-4 text-base font-medium text-[#4a3a2a] hover:text-[#c43d10] py-1.5"
                >
                  {child.label}
                </Link>
              ))}
            </div>
          )}

          <Link
            href={contact.href}
            onClick={() => setOpen(false)}
            className="block text-lg font-semibold tracking-[-0.01em] text-[#1c1208] hover:text-[#c43d10] py-2"
          >
            {contact.label}
          </Link>
        </div>
      )}
    </header>
  );
}
