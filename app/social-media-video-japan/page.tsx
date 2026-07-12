import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/Footer";
import LandingContactForm from "@/components/LandingContactForm";

export const metadata: Metadata = {
  title: "Social Media Video Production Japan · Tokyo | Short-Form & Ad Content",
  description: "Social-first video production in Japan. Vertical, square and horizontal formats for Instagram, TikTok, YouTube and Google Ads. Fast turnaround. Bilingual crew.",
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
    title: "Localisation-ready production",
    desc: "We produce social ad content with localisation in mind — clean audio, adaptable supers and flexible edit structure that makes versioning per market straightforward for your team.",
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
    q: "Can you produce content ready for localisation across multiple markets?",
    a: "Yes. We produce with localisation in mind — clean audio beds, adaptable supers and a flexible edit structure that makes it straightforward for your team to version per market.",
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
        <div className="absolute inset-0">
          <Image
            src="/images/filming_in_japan_social_media_google_ads.jpg"
            alt=""
            fill
            priority
            className="object-cover object-[center_30%]"
            sizes="100vw"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(13,10,7,0.92) 0%, rgba(13,10,7,0.6) 50%, rgba(13,10,7,0.45) 100%)" }} />
        </div>
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

              {/* ZenMarket campaign */}
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-10" style={{ backgroundColor: "#e95228" }} />
                <span className="font-mono text-[10px] tracking-[0.35em] uppercase" style={{ color: "#e95228" }}>Campaign work · ZenMarket</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black mb-4 leading-tight" style={{ color: "#1c1208" }}>
                Sushi Surprise<span style={{ color: "#e95228" }}>.</span><br />
                <span style={{ color: "rgba(28,18,8,0.35)" }}>multi-format, one shoot.</span>
              </h2>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(28,18,8,0.55)" }}>
                The brief: a humorous short-form ad for ZenMarket targeting a global audience, centred on their &lsquo;No Japanese needed!&rsquo; value proposition — making Japanese online shopping accessible to anyone, anywhere.
              </p>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(28,18,8,0.55)" }}>
                We proposed several concepts. The one selected: <em>Sushi Surprise</em>. 30-second and 15-second cuts delivered in vertical, square and horizontal formats — all from a single shoot, ready to deploy across markets.
              </p>
              <p className="text-sm italic mb-10" style={{ color: "rgba(28,18,8,0.6)" }}>
                &ldquo;Not what you expected, but exactly what you wanted.&rdquo;
              </p>

              {/* Hero video — 30sec horizontal */}
              <div className="mb-6">
                <div className="relative overflow-hidden" style={{ aspectRatio: "16/9", backgroundColor: "#0d0a07" }}>
                  <iframe
                    src="https://player.vimeo.com/video/1199938257?h=b5961f06f8&title=0&byline=0&portrait=0"
                    className="absolute inset-0 w-full h-full"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title="30 second horizontal cut"
                  />
                </div>
                <p className="mt-1.5 text-xs font-black" style={{ color: "#1c1208" }}>30 sec · 16:9 Horizontal</p>
              </div>

              {/* Square cuts side by side */}
              <div className="grid grid-cols-2 gap-4 mb-2">
                <div>
                  <div className="relative overflow-hidden" style={{ aspectRatio: "1/1", backgroundColor: "#0d0a07" }}>
                    <iframe
                      src="https://player.vimeo.com/video/1201694607?h=599a431abd&title=0&byline=0&portrait=0"
                      className="absolute inset-0 w-full h-full"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                      title="15 second vertical cut"
                      style={{ border: 0 }}
                    />
                  </div>
                  <p className="mt-1.5 text-xs font-black" style={{ color: "#1c1208" }}>15 sec · 9:16 Vertical</p>
                </div>
                <div>
                  <div className="relative overflow-hidden" style={{ aspectRatio: "1/1", backgroundColor: "#0d0a07" }}>
                    <iframe
                      src="https://player.vimeo.com/video/1200318073?h=52862dfd0e&title=0&byline=0&portrait=0"
                      className="absolute inset-0 w-full h-full"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                      title="30 second square cut"
                      style={{ border: 0 }}
                    />
                  </div>
                  <p className="mt-1.5 text-xs font-black" style={{ color: "#1c1208" }}>30 sec · 1:1 Square</p>
                </div>
              </div>

              {/* Deliverables matrix */}
              <p className="text-xs uppercase mt-10 mb-5" style={{ color: "rgba(28,18,8,0.4)", letterSpacing: "0.1em" }}>All deliverables</p>
              <div className="mb-16 border" style={{ borderColor: "#e8d9c8" }}>
                {/* Column headers */}
                <div className="grid grid-cols-[96px_1fr_1fr_1fr] border-b" style={{ borderColor: "#e8d9c8" }}>
                  <div className="p-4" />
                  {[
                    { label: "16:9", sub: "Horizontal", shape: "landscape" },
                    { label: "1:1", sub: "Square", shape: "square" },
                    { label: "9:16", sub: "Vertical", shape: "portrait" },
                  ].map((col) => (
                    <div key={col.label} className="p-4 border-l flex flex-col items-center gap-3" style={{ borderColor: "#e8d9c8", backgroundColor: "#f5ede2" }}>
                      {/* Aspect ratio shape */}
                      <div className="flex items-center justify-center" style={{ height: "40px" }}>
                        {col.shape === "landscape" && (
                          <div style={{ width: "56px", height: "32px", backgroundColor: "#e95228", borderRadius: "2px" }} />
                        )}
                        {col.shape === "square" && (
                          <div style={{ width: "32px", height: "32px", backgroundColor: "#e95228", borderRadius: "2px" }} />
                        )}
                        {col.shape === "portrait" && (
                          <div style={{ width: "18px", height: "32px", backgroundColor: "#e95228", borderRadius: "2px" }} />
                        )}
                      </div>
                      <div className="text-center">
                        <p className="font-black text-base leading-none" style={{ color: "#1c1208" }}>{col.label}</p>
                        <p className="text-[10px] uppercase mt-1" style={{ color: "rgba(28,18,8,0.4)", letterSpacing: "0.08em" }}>{col.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Rows */}
                {["30 sec", "15 sec"].map((dur, ri) => (
                  <div key={dur} className={`grid grid-cols-[96px_1fr_1fr_1fr]${ri === 0 ? " border-b" : ""}`} style={{ borderColor: "#e8d9c8" }}>
                    <div className="p-4 flex items-center">
                      <span className="text-sm font-black" style={{ color: "#e95228" }}>{dur}</span>
                    </div>
                    {[0, 1, 2].map((ci) => (
                      <div key={ci} className="p-4 border-l flex items-center justify-center" style={{ borderColor: "#e8d9c8" }}>
                        <svg className="w-5 h-5" viewBox="0 0 16 16" fill="none">
                          <circle cx="8" cy="8" r="7" stroke="#e95228" strokeWidth="1.5" />
                          <path d="M5 8l2 2 4-4" stroke="#e95228" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    ))}
                  </div>
                ))}
                <div className="px-5 py-3 border-t" style={{ borderColor: "#e8d9c8", backgroundColor: "#fdf8f3" }}>
                  <p className="text-xs" style={{ color: "rgba(28,18,8,0.35)" }}>6 videos · one shoot</p>
                </div>
              </div>

              {/* Testimonial — Google Ads client */}
              <blockquote className="pl-6 border-l-4 mb-16" style={{ borderColor: "#e95228" }}>
                <p className="text-base italic leading-snug mb-4" style={{ color: "#1c1208" }}>
                  &ldquo;Rather than seeing the restrictions as obstacles, the team consistently came to every meeting with fresh ideas, practical alternatives, and a very positive attitude. They also suggested additional creative concepts that helped strengthen our branding and messaging, adding value well beyond the initial scope.&rdquo;
                </p>
                <cite className="font-mono text-[10px] tracking-widest not-italic uppercase" style={{ color: "rgba(28,18,8,0.4)" }}>
                  Client · Drop Shipping Brand · Google Ads Campaign
                </cite>
              </blockquote>

              {/* Spec ad */}
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-10" style={{ backgroundColor: "#e95228" }} />
                <span className="font-mono text-[10px] tracking-[0.35em] uppercase" style={{ color: "#e95228" }}>Spec work</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black mb-4 leading-tight" style={{ color: "#1c1208" }}>
                Spec social ad<span style={{ color: "#e95228" }}>.</span>
              </h2>
              <p className="text-sm leading-relaxed mb-8" style={{ color: "rgba(28,18,8,0.55)" }}>
                Vertical-first spec ad produced for an international automotive retail brand in Japan.
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

              {/* NHK programme verticals */}
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-10" style={{ backgroundColor: "#e95228" }} />
                <span className="font-mono text-[10px] tracking-[0.35em] uppercase" style={{ color: "#e95228" }}>Programme Verticals · JIBTV</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black mb-4 leading-tight" style={{ color: "#1c1208" }}>
                Horizontal shoots.<br />
                <span style={{ color: "rgba(28,18,8,0.35)" }}>Vertical reach.</span>
              </h2>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(28,18,8,0.55)" }}>
                We worked with JIBTV, part of the NHK Group, on two food programmes — <em>Shibuyummy</em> and <em>Currypedia</em> — produced in horizontal for Channel Oishii on the streaming service Amasian TV, and YouTube. We pushed for the vertical cuts.
              </p>
              <p className="text-sm leading-relaxed mb-10" style={{ color: "rgba(28,18,8,0.55)" }}>
                The logic: YouTube Shorts in 9:16 hook new viewers and drive them into the full-length horizontals. One shoot, two formats, a much bigger audience. It&rsquo;s the kind of format thinking we bring to every production — even when it wasn&rsquo;t in the original brief.
              </p>

              {/* Two vertical placeholders side by side */}
              <div className="grid grid-cols-2 gap-4 mb-16">
                <div>
                  <div className="relative overflow-hidden" style={{ aspectRatio: "9/16", backgroundColor: "#0d0a07" }}>
                    <iframe
                      src="https://player.vimeo.com/video/1116054357?h=32612f33c1&title=0&byline=0&portrait=0"
                      className="absolute inset-0 w-full h-full"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                      title="Shibuyummy — vertical cut"
                      style={{ border: 0 }}
                    />
                  </div>
                  <p className="mt-1.5 text-xs font-black" style={{ color: "#1c1208" }}>Shibuyummy · JIBTV · YouTube Shorts</p>
                </div>
                <div>
                  <div className="relative overflow-hidden" style={{ aspectRatio: "9/16", backgroundColor: "#0d0a07" }}>
                    <iframe
                      src="https://www.youtube.com/embed/SjMlPenmWao"
                      className="absolute inset-0 w-full h-full"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                      title="Currypedia — YouTube Short"
                      style={{ border: 0 }}
                    />
                  </div>
                  <p className="mt-1.5 text-xs font-black" style={{ color: "#1c1208" }}>Currypedia · JIBTV · YouTube Shorts</p>
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
              <h2 className="text-2xl font-black mb-8 leading-tight" style={{ color: "#1c1208" }}>
                Social media video production in Japan —<br />
                <span style={{ color: "rgba(28,18,8,0.4)" }}>built for performance, not just aesthetics.</span>
              </h2>
              <div className="space-y-0 mb-16">
                {differentiators.map((d, i) => (
                  <div key={i} className="flex gap-4 py-6 border-b" style={{ borderColor: "#e8d9c8" }}>
                    <span className="shrink-0 mt-2 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#e95228" }} />
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
              <div className="space-y-6 mb-16">
                {faqs.map((faq, i) => (
                  <div key={i} className="pb-6 border-b" style={{ borderColor: "#e8d9c8" }}>
                    <h4 className="font-black mb-2 text-sm" style={{ color: "#1c1208" }}>{faq.q}</h4>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(28,18,8,0.55)" }}>{faq.a}</p>
                  </div>
                ))}
              </div>

              {/* Internal links */}
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-10" style={{ backgroundColor: "#e95228" }} />
                <span className="text-xs uppercase" style={{ color: "#e95228", letterSpacing: "0.08em" }}>Also from Filming in Japan</span>
              </div>
              <div className="space-y-3">
                {[
                  { label: "Corporate branding & interview video", href: "/corporate-branding-videos-japan" },
                  { label: "Client testimonial video production", href: "/client-testimonials-video-production-tokyo-japan" },
                  { label: "Event photo & video", href: "/event-photo-video-japan" },
                  { label: "Real estate photo, video & 360°", href: "/real-estate-photo-video-tokyo-japan" },
                ].map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="flex items-center justify-between py-3 border-b group"
                    style={{ borderColor: "#e8d9c8", color: "#1c1208" }}
                  >
                    <span className="text-sm">{link.label}</span>
                    <span className="text-xs transition-colors" style={{ color: "#e95228" }}>
                      View →
                    </span>
                  </a>
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
