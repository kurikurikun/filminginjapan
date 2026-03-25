import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You | Filming in Japan",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6" style={{ backgroundColor: "#fdf8f3" }}>
      <div className="max-w-lg text-center">
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-10" style={{ backgroundColor: "#e95228" }} />
          <span className="font-mono text-[10px] tracking-[0.35em] uppercase" style={{ color: "#e95228" }}>Enquiry received</span>
          <div className="h-px w-10" style={{ backgroundColor: "#e95228" }} />
        </div>
        <h1 className="text-3xl font-black mb-4" style={{ color: "#1c1208" }}>
          Thank you — we&apos;ll be in touch soon.
        </h1>
        <p className="text-base mb-10" style={{ color: "rgba(28,18,8,0.55)" }}>
          We reply to all enquiries within 24 hours. In the meantime, feel free to browse our recent work.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/event-photo-video-japan"
            className="font-mono text-[11px] tracking-widest uppercase px-6 py-3 border"
            style={{ borderColor: "#e95228", color: "#e95228" }}
          >
            Event work
          </Link>
          <Link
            href="/corporate-branding-videos-japan"
            className="font-mono text-[11px] tracking-widest uppercase px-6 py-3 border"
            style={{ borderColor: "#e8d9c8", color: "rgba(28,18,8,0.5)" }}
          >
            Corporate video
          </Link>
        </div>
      </div>
    </div>
  );
}
