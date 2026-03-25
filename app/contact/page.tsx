import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/Footer";
import LandingContactForm from "@/components/LandingContactForm";

export const metadata: Metadata = {
  title: "Contact | Filming in Japan",
  description: "Get in touch with Filming in Japan for video production, photography and virtual tours. We reply within 24 hours.",
  alternates: { canonical: "https://www.filminginjapan.com/contact" },
};

export default function ContactPage() {
  return (
    <div style={{ backgroundColor: "#fdf8f3" }}>

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden" style={{ backgroundColor: "#0d0a07" }}>
        <div className="absolute inset-0">
          <Image
            src="/images/japan_video_production_contact.jpg"
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(13,10,7,0.92) 0%, rgba(13,10,7,0.6) 50%, rgba(13,10,7,0.45) 100%)" }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-12 lg:px-16" style={{ zIndex: 1 }}>
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-10" style={{ backgroundColor: "#e95228" }} />
            <span className="font-mono text-[10px] tracking-[0.35em] uppercase" style={{ color: "#e95228" }}>
              Tokyo · Japan
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.9] mb-6 max-w-2xl" style={{ color: "#fdf8f3" }}>
            Get in<br />
            <em className="not-italic" style={{ color: "#e95228" }}>Touch.</em>
          </h1>
          <p className="text-lg max-w-xl leading-relaxed" style={{ color: "rgba(253,248,243,0.6)" }}>
            Tell us about your project. We reply within 24 hours.
          </p>
        </div>
      </section>

      {/* Form + contact details */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
          <div className="grid lg:grid-cols-[1fr_480px] gap-16 lg:gap-24">

            {/* Left — contact details */}
            <div>
              <div className="space-y-10">
                <div>
                  <p className="font-mono text-[10px] tracking-[0.3em] uppercase mb-3" style={{ color: "#e95228" }}>WhatsApp</p>
                  <a
                    href="https://wa.me/819038800895"
                    className="text-2xl font-black hover:text-[#e95228] transition-colors"
                    style={{ color: "#1c1208" }}
                  >
                    +81 90 3880 0895
                  </a>
                </div>
                <div>
                  <p className="font-mono text-[10px] tracking-[0.3em] uppercase mb-3" style={{ color: "#e95228" }}>Email</p>
                  <a
                    href="mailto:filminginjapan@move-ment.co"
                    className="text-2xl font-black hover:text-[#e95228] transition-colors"
                    style={{ color: "#1c1208" }}
                  >
                    filminginjapan@move-ment.co
                  </a>
                </div>
                <div>
                  <p className="font-mono text-[10px] tracking-[0.3em] uppercase mb-3" style={{ color: "#e95228" }}>Based in</p>
                  <p className="text-lg font-black" style={{ color: "#1c1208" }}>Tokyo &amp; Hiroshima, Japan</p>
                  <p className="text-sm mt-1" style={{ color: "rgba(28,18,8,0.5)" }}>Available nationwide</p>
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div>
              <div
                className="p-8 lg:p-10"
                style={{ backgroundColor: "#fff", border: "1px solid #e8d9c8" }}
              >
                <h2 className="text-xl font-black mb-2" style={{ color: "#1c1208" }}>
                  Get a free quote
                </h2>
                <p className="text-sm mb-6" style={{ color: "rgba(28,18,8,0.5)" }}>
                  Tell us about your project. We reply within 24 hours.
                </p>
                <LandingContactForm service="General Enquiry" />
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer lang="en" />
    </div>
  );
}
