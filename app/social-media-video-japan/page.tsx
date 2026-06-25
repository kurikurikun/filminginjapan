import type { Metadata } from "next";
import Footer from "@/components/Footer";
import LandingContactForm from "@/components/LandingContactForm";

export const metadata: Metadata = {
  title: "Social Media Video Production Japan | Short-Form & Ad Content",
  description: "Social-first video production in Japan. Vertical, square and horizontal formats for Instagram, TikTok, YouTube and Google Ads. Fast turnaround. Bilingual crew.",
  robots: { index: false, follow: false },
  alternates: {
    canonical: "https://www.filminginjapan.com/social-media-video-japan",
  },
};

const services = [
  "Vertical (9:16), square (1:1) and horizontal (16:9) formats in a single shoot",
  "Platform-ready edits for Instagram Reels, TikTok, YouTube Shorts and Google Ads",
  "Localised versions — captions, supers and voiceover adapted per market",
  "Spec ads and brand content for Japanese and international audiences",
  "Product and lifestyle shoots designed to perform, not just look good",
];

const differentiators = [
  {
    title: "Multi-format from one shoot",
    desc: "We plan and frame every shoot to deliver vertical, square and horizontal cuts without compromise — one production budget, every platform covered.",
  },
  {
    title: "Built for performance",
    desc: "Social content that's designed to stop the scroll. We understand pacing, supers, hook structure and platform behaviour — not just cinematography.",
  },
  {
    title: "Localisation at scale",
    desc: "We've produced social ad campaigns localised across 16 countries from a single Japan shoot — adapting captions, supers and messaging per market.",
  },
  {
    title: "Bilingual production",
    desc: "Our bilingual crew works seamlessly with Japanese talent, locations and brands — and communicates clearly with international clients and ad agencies.",
  },
];

const faqs = [
  {
    q: "What formats do you deliver?",
    a: "We deliver vertical (9:16), square (1:1) and horizontal (16:9) from a single shoot — optimised for each platform's specs and aspect ratios.",
  },
  {
    q: "Can you localise content for multiple markets?",
    a: "Yes. We've produced social ad campaigns from a single Japan shoot, localised across 16 countries with adapted captions, supers and voiceover. We handle versioning in post.",
  },
  {
    q: "Do you produce spec ads?",
    a: "Yes — we produce spec ads for brands who want to demonstrate a concept before committing to a full campaign budget. A great way to test creative before going to market.",
  },
  {
    q: "Can you shoot in Japanese locations and with Japanese talent?",
    a: "Yes. We have deep experience shooting across Tokyo and Japan, with access to locations, talent and local production resources. Our bilingual crew handles everything on the ground.",
  },
  {
    q: "Do you handle scripting and creative direction?",
    a: "We can. For social-first content we're experienced in scripting short-form hooks, structuring content for retention, and directing talent to deliver on camera.",
  },
  {
    q: "What's your minimum engagement?",
    a: "We work on projects of all sizes — from a single social cut to a full multi-format campaign. Get in touch and we'll scope something that fits your needs and budget.",
  },
];

export default function SocialMediaVideoPage() {
  return (
    <div style={{ backgroundColor: "#fdf8f3" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: { "@type": "Answer", text: faq.a },
            })),
          }),
        }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ backgroundColor: "#0d0a07" }}>
        <div className="absolute top-8 left-8 pointer-events-none" style={{ zIndex: 1 }}>
          <div className="w-8 h-8 border-t border-l" style={{ borderColor: "rgba(233,82,40,0.4)" }} />
        </div>
        <div className="absolute top-8 right-8 pointer-events-none" style={{ zIndex: 1 }}>
          <div className="w-8 h-8 border-t border-r" style={{ borderColor: "rgba(233,82,40,0.4)" }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-12 lg:px-16" style={{ zIndex: 1 }}>
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-10" style={{ backgroundColor: "#e95228" }} />
            <span className="font-mono text-[10px] tracking-[0.35em] uppercase" style={{ color: "#e95228" }}>
              Social Media · Tokyo · Japan
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.9] mb-8 max-w-4xl" style={{ color: "#fdf8f3" }}>
            Social-First Video<br />
            Production in <em className="not-italic" style={{ color: "#e95228" }}>Japan.</em>
          </h1>
          <p className="text-lg max-w-2xl leading-relaxed" style={{ color: "rgba(253,248,243,0.6)" }}>
            Short-form content built for performance. Vertical, square and horizontal formats
            from a single shoot — platform-ready for Instagram, TikTok, YouTube and Google Ads.
          </p>
        </div>
      </section>

      {/* Formats bar */}
      <section className="py-5" style={{ backgroundColor: "#e95228" }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase mr-4" style={{ color: "rgba(13,10,7,0.5)" }}>Formats</span>
            {["9:16 Vertical", "1:1 Square", "16:9 Horizontal", "Google Ads", "Instagram Reels", "TikTok", "YouTube Shorts"].map((f, i, arr) => (
              <span key={f} className="flex items-center gap-2">
                <span className="text-sm font-black" style={{ color: "rgba(13,10,7,0.75)" }}>{f}</span>
                {i < arr.length - 1 && <span style={{ color: "rgba(13,10,7,0.3)" }}>·</span>}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Main content + form */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
          <div className="grid lg:grid-cols-[1fr_480px] gap-16 lg:gap-24">

            {/* Left */}
            <div>

              {/* Drop shipping campaign */}
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-10" style={{ backgroundColor: "#e95228" }} />
                <span className="font-mono text-[10px] tracking-[0.35em] uppercase" style={{ color: "#e95228" }}>Campaign work</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black mb-4 leading-tight" style={{ color: "#1c1208" }}>
                Google Ads campaign —<br />
                <span style={{ color: "rgba(28,18,8,0.35)" }}>16 countries.</span>
              </h2>
              <p className="text-sm leading-relaxed mb-10" style={{ color: "rgba(28,18,8,0.55)" }}>
                Social ad campaign produced in Japan for a drop shipping brand, localised and deployed
                across 16 countries on Google Ads. 30-second and 15-second cuts delivered in vertical,
                square and horizontal formats — all from a single shoot.
              </p>

              {/* Horizontals — stacked */}
              <p className="font-mono text-[10px] tracking-[0.3em] uppercase mb-4" style={{ color: "rgba(28,18,8,0.4)" }}>Horizontal 16:9</p>
              <div className="space-y-2 mb-10">
                {[
                  { id: "1199938257", h: "b5961f06f8", title: "30 seconds" },
                  { id: "1200897358", h: "da8cae8139", title: "15 seconds" },
                ].map((v) => (
                  <div key={v.id}>
                    <div className="relative overflow-hidden" style={{ aspectRatio: "16/9", backgroundColor: "#0d0a07" }}>
                      <iframe
                        src={`https://player.vimeo.com/video/${v.id}?h=${v.h}&title=0&byline=0&portrait=0`}
                        className="absolute inset-0 w-full h-full"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                        title={v.title}
                      />
                    </div>
                    <p className="mt-1.5 text-xs font-black" style={{ color: "#1c1208" }}>{v.title}</p>
                  </div>
                ))}
              </div>

              {/* Verticals — side by side */}
              <p className="font-mono text-[10px] tracking-[0.3em] uppercase mb-4" style={{ color: "rgba(28,18,8,0.4)" }}>Vertical 9:16</p>
              <div className="grid grid-cols-2 gap-3 mb-10">
                {[
                  { id: "1200318074", h: "75421f4a1a", title: "30 seconds" },
                  { id: "1201694607", h: "599a431abd", title: "15 seconds" },
                ].map((v) => (
                  <div key={v.id}>
                    <div className="relative overflow-hidden" style={{ aspectRatio: "9/16", backgroundColor: "#0d0a07" }}>
                      <iframe
                        src={`https://player.vimeo.com/video/${v.id}?h=${v.h}&title=0&byline=0&portrait=0`}
                        className="absolute inset-0 w-full h-full"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                        title={v.title}
                      />
                    </div>
                    <p className="mt-1.5 text-xs font-black" style={{ color: "#1c1208" }}>{v.title}</p>
                  </div>
                ))}
              </div>

              {/* Squares — stacked */}
              <p className="font-mono text-[10px] tracking-[0.3em] uppercase mb-4" style={{ color: "rgba(28,18,8,0.4)" }}>Square 1:1</p>
              <div className="space-y-2 mb-16">
                {[
                  { id: "1200318073", h: "52862dfd0e", title: "30 seconds" },
                  { id: "1201694606", h: "c2a32b0245", title: "15 seconds" },
                ].map((v) => (
                  <div key={v.id}>
                    <div className="relative overflow-hidden" style={{ aspectRatio: "1/1", backgroundColor: "#0d0a07" }}>
                      <iframe
                        src={`https://player.vimeo.com/video/${v.id}?h=${v.h}&title=0&byline=0&portrait=0`}
                        className="absolute inset-0 w-full h-full"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                        title={v.title}
                      />
                    </div>
                    <p className="mt-1.5 text-xs font-black" style={{ color: "#1c1208" }}>{v.title}</p>
                  </div>
                ))}
              </div>

              {/* Spec ad */}
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-10" style={{ backgroundColor: "#e95228" }} />
                <span className="font-mono text-[10px] tracking-[0.35em] uppercase" style={{ color: "#e95228" }}>Spec work</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black mb-4 leading-tight" style={{ color: "#1c1208" }}>
                Spec social ad<span style={{ color: "#e95228" }}>.</span>
              </h2>
              <p className="text-sm leading-relaxed mb-8" style={{ color: "rgba(28,18,8,0.55)" }}>
                Vertical-first spec ad produced for an automotive retail brand in Japan.
                Shot and edited for social media performance.
              </p>
              <div className="flex justify-center mb-16">
                <div className="w-full max-w-xs">
                  <div className="relative overflow-hidden" style={{ aspectRatio: "9/16", backgroundColor: "#0d0a07" }}>
                    <iframe
                      src="https://player.vimeo.com/video/1182298430?h=0bbf0eeba0&title=0&byline=0&portrait=0"
                      className="absolute inset-0 w-full h-full"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                      title="Automotive retail — vertical social ad"
                    />
                  </div>
                  <p className="mt-3 text-sm font-black" style={{ color: "#1c1208" }}>Automotive retail · Vertical 9:16</p>
                </div>
              </div>

              {/* Services */}
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-10" style={{ backgroundColor: "#e95228" }} />
                <span className="font-mono text-[10px] tracking-[0.35em] uppercase" style={{ color: "#e95228" }}>What we deliver</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black mb-8 leading-tight" style={{ color: "#1c1208" }}>
                Every format<span style={{ color: "#e95228" }}>.</span><br />
                <span style={{ color: "rgba(28,18,8,0.35)" }}>Every platform.</span>
              </h2>
              <ul className="space-y-3 mb-16">
                {services.map((s, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm" style={{ color: "rgba(28,18,8,0.75)" }}>
                    <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#e95228" }} />
                    {s}
                  </li>
                ))}
              </ul>

              {/* Why us */}
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-10" style={{ backgroundColor: "#e95228" }} />
                <span className="font-mono text-[10px] tracking-[0.35em] uppercase" style={{ color: "#e95228" }}>Why clients choose us</span>
              </div>
              <div className="space-y-0 mb-16">
                {differentiators.map((d, i) => (
                  <div key={i} className="flex gap-6 py-6 border-b" style={{ borderColor: "#e8d9c8" }}>
                    <span className="font-mono text-xs font-black shrink-0 mt-0.5" style={{ color: "#e95228" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-black mb-1 text-sm" style={{ color: "#1c1208" }}>{d.title}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: "rgba(28,18,8,0.55)" }}>{d.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* FAQ */}
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-10" style={{ backgroundColor: "#e95228" }} />
                <span className="font-mono text-[10px] tracking-[0.35em] uppercase" style={{ color: "#e95228" }}>FAQ</span>
              </div>
              <div className="space-y-6">
                {faqs.map((faq, i) => (
                  <div key={i} className="pb-6 border-b" style={{ borderColor: "#e8d9c8" }}>
                    <h4 className="font-black mb-2 text-sm" style={{ color: "#1c1208" }}>{faq.q}</h4>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(28,18,8,0.55)" }}>{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — sticky form */}
            <div>
              <div className="p-8 lg:p-10 sticky top-24" style={{ backgroundColor: "#fff", border: "1px solid #e8d9c8" }}>
                <h3 className="text-xl font-black mb-2" style={{ color: "#1c1208" }}>Get a quote</h3>
                <p className="text-sm mb-6" style={{ color: "rgba(28,18,8,0.5)" }}>
                  Tell us about your project. We reply within 24 hours.
                </p>
                <LandingContactForm service="Social Media Video Japan" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 border-t" style={{ borderColor: "#e8d9c8", backgroundColor: "#f5ede2" }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase mb-2" style={{ color: "#e95228" }}>Prefer to talk?</p>
            <p className="font-black text-lg" style={{ color: "#1c1208" }}>WhatsApp or email — we reply fast.</p>
          </div>
          <div className="flex gap-4">
            <a href="https://wa.me/819038800895" className="btn-warm font-black text-sm tracking-[0.15em] uppercase px-6 py-3">
              WhatsApp Us
            </a>
            <a href="mailto:filminginjapan@move-ment.co" className="font-black text-sm tracking-[0.15em] uppercase px-6 py-3 border" style={{ borderColor: "#1c1208", color: "#1c1208" }}>
              Email Us
            </a>
          </div>
        </div>
      </section>

      <Footer lang="en" />
    </div>
  );
}
