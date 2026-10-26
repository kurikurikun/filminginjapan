import type { Metadata } from "next";
import Link from "next/link";
import { Title } from "@/components/editorial";

export const metadata: Metadata = {
  title: "Thank You",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex items-center" style={{ backgroundColor: "#fdf8f3" }}>
      <div className="fij-wrap w-full pt-32 pb-24">
        <div className="max-w-3xl border-t-2 pt-10" style={{ borderColor: "#1c1208" }}>
          <p className="text-sm font-medium mb-8" style={{ color: "#6b5a48" }}>Enquiry received</p>
          <Title as="h1" className="fij-h1 mb-8">Thank you. We&apos;ll be in touch soon</Title>
          <p className="fij-lede max-w-xl mb-12" style={{ color: "#4a3a2a" }}>
            We reply to all enquiries within 24 hours. In the meantime, feel free to browse our recent work.
          </p>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link href="/" className="fij-btn">Back to home</Link>
            <Link href="/event-photo-video-japan" className="fij-link text-[15px]">Event work</Link>
            <Link href="/corporate-branding-videos-japan" className="fij-link text-[15px]">Corporate video</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
