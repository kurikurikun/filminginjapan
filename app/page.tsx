import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import VideoLightbox from "@/components/VideoLightbox";
import PeopleCarousel from "@/components/PeopleCarousel";
import ServiceGrid from "@/components/ServiceGrid";
import GoogleReviews from "@/components/GoogleReviews";
import InstagramFeed from "@/components/InstagramFeed";

export const metadata: Metadata = {
  title: { absolute: "Filming in Japan | Corporate Video Production Tokyo" },
  description:
    "Full-service corporate video production in Japan for global brands. Bilingual EN/JP team, Tokyo & Hiroshima. Trusted by Sony, Google, Microsoft, Canon and more.",
  alternates: {
    canonical: "https://www.filminginjapan.com",
    languages: {
      "en": "https://www.filminginjapan.com",
      "ja": "https://www.filminginjapan.com/jp",
      "x-default": "https://www.filminginjapan.com",
    },
  },
};


const clients = ["Sony", "HP", "Canon", "NEC", "JLL", "Accenture", "Microsoft", "Google"];

const workflow = [
  { step: "01", title: "Get in touch", desc: "Contact us by form, email or WhatsApp with the details you have. Book a 30-min Zoom directly from the calendar link." },
  { step: "02", title: "We reply", desc: "We review your brief, confirm availability and ask any clarifying questions before preparing a quote." },
  { step: "03", title: "The quote", desc: "A quick call ensures we're aligned before we set out the full quote with all parts included." },
  { step: "04", title: "Shoot prep call", desc: "Once dates and costs are sorted, a prep call ensures everything is in place for shoot day." },
  { step: "05", title: "Shoot & delivery", desc: "We shoot to brief, with optional live feed for overseas directors. Data or edited files delivered via Drive, Dropbox, or FedEx." },
];

const faqs = [
  { q: "How far in advance do you need to confirm?", a: "Earlier is always better, but we're flexible. A 1–2 person shoot can typically be confirmed up to a week before the date." },
  { q: "What are your payment terms?", a: "We invoice after delivery. For large upfront costs like studio hire or equipment rental, we require those costs in advance." },
  { q: "Can your team conduct interviews in Japanese?", a: "Yes — we have both native and fluent Japanese speakers who have conducted many interviews in Japanese." },
  { q: "Can you just shoot and hand over the raw footage?", a: "Absolutely. We're happy to shoot and deliver the raw data for your team to edit." },
  { q: "How do you deliver footage?", a: "Usually via Google Drive or Dropbox, but we've also FedExed hard drives around the world." },
  { q: "Do you take on smaller or more creative projects?", a: "Absolutely. If there's a human story in it, we're usually keen. Recent examples: a shamisen player under cherry blossoms, pro women wrestlers, a classical violinist on a mountaintop." },
];

export default function HomePage() {
  return (
    <div style={{ backgroundColor: "#fdf8f3" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": ["LocalBusiness", "ProfessionalService"],
              "@id": "https://www.filminginjapan.com/#organization",
              "name": "Filming in Japan",
              "alternateName": "Move-ment Co. Ltd.",
              "url": "https://www.filminginjapan.com",
              "telephone": "+81-50-1724-6517",
              "email": "filminginjapan@move-ment.co",
              "image": "https://www.filminginjapan.com/opengraph-image",
              "description": "Full-service bilingual corporate video production in Japan for global brands. Bilingual EN/JP team based in Tokyo and Hiroshima.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "1-18-5-503 Higashi Gotanda",
                "addressLocality": "Shinagawa",
                "addressRegion": "Tokyo",
                "postalCode": "141-0022",
                "addressCountry": "JP"
              },
              "sameAs": ["https://www.instagram.com/move_ment.co.ltd"],
              "areaServed": { "@type": "Country", "name": "Japan" },
              "priceRange": "$$"
            },
            {
              "@type": "WebSite",
              "@id": "https://www.filminginjapan.com/#website",
              "name": "Filming in Japan",
              "url": "https://www.filminginjapan.com"
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                { "@type": "Question", "name": "How far in advance do you need to confirm?", "acceptedAnswer": { "@type": "Answer", "text": "Earlier is always better, but we're flexible. A 1–2 person shoot can typically be confirmed up to a week before the date." } },
                { "@type": "Question", "name": "What are your payment terms?", "acceptedAnswer": { "@type": "Answer", "text": "We invoice after delivery. For large upfront costs like studio hire or equipment rental, we require those costs in advance." } },
                { "@type": "Question", "name": "Can your team conduct interviews in Japanese?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — we have both native and fluent Japanese speakers who have conducted many interviews in Japanese." } },
                { "@type": "Question", "name": "Can you just shoot and hand over the raw footage?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. We're happy to shoot and deliver the raw data for your team to edit." } },
                { "@type": "Question", "name": "How do you deliver footage?", "acceptedAnswer": { "@type": "Answer", "text": "Usually via Google Drive or Dropbox, but we've also FedExed hard drives around the world." } },
                { "@type": "Question", "name": "Do you take on smaller or more creative projects?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. If there's a human story in it, we're usually keen. Recent examples: a shamisen player under cherry blossoms, pro women wrestlers, a classical violinist on a mountaintop." } }
              ]
            }
          ]
        }) }}
      />

      {/* ── Hero — autoplay video ── */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
        {/* Vimeo background video */}
        <div className="absolute inset-0" style={{ zIndex: 0 }}>
          <iframe
            src="https://player.vimeo.com/video/533378669?background=1&autoplay=1&loop=1&muted=1&autopause=0"
            className="absolute"
            style={{
              top: "50%", left: "50%",
              transform: "translate(-50%, -50%)",
              width: "max(100%, calc(100vh * 16 / 9))",
              height: "max(100%, calc(100vw * 9 / 16))",
              pointerEvents: "none",
            }}
            allow="autoplay; fullscreen"
            title="Hero video"
          />
        </div>

        {/* Dark gradient overlay */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(13,10,7,0.92) 0%, rgba(13,10,7,0.5) 50%, rgba(13,10,7,0.3) 100%)", zIndex: 1 }}
        />

        {/* Fallback dark bg if video not loaded */}
        <div className="absolute inset-0" style={{ backgroundColor: "#0d0a07", zIndex: -1 }} />

        {/* Frame corners */}
        <div className="absolute top-8 left-8 lg:top-12 lg:left-12 pointer-events-none" style={{ zIndex: 2 }} aria-hidden="true">
          <div className="w-8 h-8 border-t border-l" style={{ borderColor: "rgba(233,82,40,0.4)" }} />
        </div>
        <div className="absolute top-8 right-8 lg:top-12 lg:right-12 pointer-events-none" style={{ zIndex: 2 }} aria-hidden="true">
          <div className="w-8 h-8 border-t border-r" style={{ borderColor: "rgba(233,82,40,0.4)" }} />
        </div>

        {/* Content */}
        <div className="relative px-8 sm:px-14 lg:px-20 pb-20 pt-40 max-w-7xl" style={{ zIndex: 2 }}>
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px w-12" style={{ backgroundColor: "#e95228" }} />
            <span className="font-mono text-xs tracking-[0.35em] uppercase" style={{ color: "#e95228" }}>
              Tokyo · Hiroshima · All Japan
            </span>
          </div>

          <h1
            className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.88] mb-10 max-w-4xl"
            style={{ color: "#fdf8f3" }}
          >
            Bilingual<br />
            Video<br />
            <em className="not-italic" style={{ color: "#e95228" }}>Production</em><br />
            in Japan
            <span style={{ color: "#e95228" }}>.</span>
          </h1>

          <p className="text-lg max-w-xl leading-relaxed mb-12" style={{ color: "rgba(253,248,243,0.65)" }}>
            Full-service bilingual production for progressive global brands.<br />
            Trusted by Sony, Google, Microsoft, Canon and many more.
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <Link href="/contact" className="btn-warm font-black text-sm tracking-[0.18em] uppercase px-8 py-4">
              Start Your Project
            </Link>
            <Link
              href="/corporate-branding-videos-japan"
              className="font-mono text-xs tracking-[0.25em] uppercase"
              style={{ color: "rgba(253,248,243,0.5)" }}
            >
              See Our Work →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Clients — warm orange band ── */}
      <section className="py-7" style={{ backgroundColor: "#e95228" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-3">
            <span className="font-mono text-[10px] tracking-[0.35em] uppercase mr-6" style={{ color: "rgba(13,10,7,0.5)" }}>
              Trusted by
            </span>
            {clients.map((c, i) => (
              <span key={c} className="flex items-center gap-2">
                <span
                  className="text-sm font-black tracking-wide cursor-default"
                  style={{ color: "rgba(13,10,7,0.7)" }}
                >
                  {c}
                </span>
                {i < clients.length - 1 && (
                  <span className="text-xs" style={{ color: "rgba(13,10,7,0.3)" }}>·</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-32" style={{ backgroundColor: "#fdf8f3" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          {/* Section header */}
          <div className="grid lg:grid-cols-[1fr_auto] items-end gap-8 mb-16">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12" style={{ backgroundColor: "#e95228" }} />
                <span className="font-mono text-[10px] tracking-[0.35em] uppercase" style={{ color: "#e95228" }}>
                  What we do
                </span>
              </div>
              <h2 className="text-4xl sm:text-6xl font-black leading-[0.9]" style={{ color: "#1c1208" }}>
                Four ways we<br />
                <em className="not-italic" style={{ color: "#e95228" }}>tell your story.</em>
              </h2>
            </div>
            <p className="text-sm leading-relaxed max-w-xs lg:text-right" style={{ color: "rgba(28,18,8,0.45)" }}>
              Bilingual corporate video production across Japan, from Tokyo to the regions.
            </p>
          </div>

          {/* Service cards */}
          <ServiceGrid />

        </div>
      </section>

      {/* ── About Chris — warm orange split ── */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_1fr]">
            <VideoLightbox vimeoId="900727297" vimeoHash="a9dbbfbac5" title="Chris Moore — Filming in Japan" />

            {/* Content — orange background */}
            <div className="p-12 lg:p-16 xl:p-20 flex flex-col justify-center" style={{ backgroundColor: "#e95228" }}>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-10" style={{ backgroundColor: "rgba(13,10,7,0.3)" }} />
                <span className="font-mono text-[10px] tracking-[0.35em] uppercase" style={{ color: "rgba(13,10,7,0.5)" }}>
                  About
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-black leading-tight mb-8" style={{ color: "#0d0a07" }}>
                Hi, I&apos;m Chris<span style={{ color: "#fdf8f3" }}>.</span>
              </h2>
              <p className="leading-relaxed mb-5 text-base" style={{ color: "rgba(13,10,7,0.7)" }}>
                Originally from New Zealand, I&apos;ve spent many years filming across Japan, building a business
                that connects global brands to Japanese stories. Bilingual, and comfortable in both English
                and Japanese work environments.
              </p>
              <p className="leading-relaxed mb-10 text-base" style={{ color: "rgba(13,10,7,0.7)" }}>
                From Tokyo boardrooms to mountain summits — we make corporate video feel genuinely human.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="font-black text-sm tracking-[0.15em] uppercase px-6 py-3 transition-colors"
                  style={{ backgroundColor: "#0d0a07", color: "#fdf8f3" }}
                >
                  Get in Touch
                </Link>
                <a
                  href="https://www.instagram.com/chrism_visuals/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs tracking-[0.2em] uppercase px-6 py-3 border transition-colors"
                  style={{ borderColor: "rgba(13,10,7,0.25)", color: "rgba(13,10,7,0.6)" }}
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── People Carousel ── */}
      <PeopleCarousel />

      {/* ── Google Reviews ── */}
      <section className="py-20 border-t" style={{ backgroundColor: "#f5ede2", borderColor: "#e8d9c8" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px w-12" style={{ backgroundColor: "#e95228" }} />
            <span className="font-mono text-[10px] tracking-[0.35em] uppercase" style={{ color: "#e95228" }}>
              Google Reviews
            </span>
          </div>
          <GoogleReviews appId="94fa8f98-15eb-4b6a-8318-c0d4579384d8" />
        </div>
      </section>

      {/* ── Workflow ── */}
      <section className="py-32" style={{ backgroundColor: "#fdf8f3" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12" style={{ backgroundColor: "#e95228" }} />
            <span className="font-mono text-[10px] tracking-[0.35em] uppercase" style={{ color: "#e95228" }}>
              Process
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black leading-none mb-16" style={{ color: "#1c1208" }}>
            How we work<span style={{ color: "#e95228" }}>.</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x" style={{ borderColor: "#e8d9c8", border: "1px solid #e8d9c8" }}>
            {workflow.map((w, i) => (
              <div
                key={w.step}
                className="p-8 lg:p-10"
                style={{ borderColor: "#e8d9c8", borderRight: i < workflow.length - 1 ? "1px solid #e8d9c8" : undefined }}
              >
                <span className="text-4xl font-black leading-none block mb-6" style={{ color: "#e95228" }}>
                  {i + 1}
                </span>
                <h3 className="font-black mb-3" style={{ color: "#1c1208" }}>{w.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(28,18,8,0.5)" }}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section className="py-32 border-t" style={{ backgroundColor: "#f5ede2", borderColor: "#e8d9c8" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12" style={{ backgroundColor: "#e95228" }} />
            <span className="font-mono text-[10px] tracking-[0.35em] uppercase" style={{ color: "#e95228" }}>
              FAQ
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black leading-none mb-16" style={{ color: "#1c1208" }}>
            Common questions<span style={{ color: "#e95228" }}>.</span>
          </h2>
          <div>
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="py-8 border-b pl-5"
                style={{ borderColor: "#e8d9c8", borderLeft: "3px solid #e95228" }}
              >
                <h3 className="font-black mb-3 flex items-start gap-4" style={{ color: "#1c1208" }}>
                  <span className="text-xs font-black mt-0.5 shrink-0" style={{ color: "#e95228" }}>
                    {i + 1}.
                  </span>
                  {faq.q}
                </h3>
                <p className="text-sm leading-relaxed pl-9" style={{ color: "rgba(28,18,8,0.55)" }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA — cinematic dark ── */}
      <section
        className="relative py-32 overflow-hidden grain"
        style={{ backgroundColor: "#0d0a07" }}
      >
        {/* Frame corners */}
        <div className="absolute top-8 left-8 pointer-events-none" aria-hidden="true">
          <div className="w-8 h-8 border-t border-l" style={{ borderColor: "rgba(196,168,130,0.3)" }} />
        </div>
        <div className="absolute top-8 right-8 pointer-events-none" aria-hidden="true">
          <div className="w-8 h-8 border-t border-r" style={{ borderColor: "rgba(196,168,130,0.3)" }} />
        </div>
        <div className="absolute bottom-8 left-8 pointer-events-none" aria-hidden="true">
          <div className="w-8 h-8 border-b border-l" style={{ borderColor: "rgba(196,168,130,0.3)" }} />
        </div>
        <div className="absolute bottom-8 right-8 pointer-events-none" aria-hidden="true">
          <div className="w-8 h-8 border-b border-r" style={{ borderColor: "rgba(196,168,130,0.3)" }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 sm:px-14 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-12" style={{ backgroundColor: "#e95228" }} />
                <span className="font-mono text-[10px] tracking-[0.35em] uppercase" style={{ color: "#e95228" }}>
                  Ready to start?
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-8" style={{ color: "#fdf8f3" }}>
                Let&apos;s make your<br />
                Japan project<br />
                <em className="not-italic" style={{ color: "#e95228" }}>happen.</em>
              </h2>
              <p className="leading-relaxed mb-10" style={{ color: "rgba(253,248,243,0.5)" }}>
                We aim to reply within 24 hours. Contact us by form, email or WhatsApp.
              </p>
              <Link
                href="/contact"
                className="btn-warm inline-block font-black text-sm tracking-[0.18em] uppercase px-8 py-4 transition-colors"
            >
                Start the Conversation
              </Link>
            </div>

            <div className="border-l pl-12 lg:pl-16" style={{ borderColor: "rgba(196,168,130,0.15)" }}>
              <div className="space-y-7">
                <div>
                  <p className="font-mono text-[10px] tracking-[0.3em] uppercase mb-2" style={{ color: "rgba(196,168,130,0.5)" }}>Email</p>
                  <a
                    href="mailto:filminginjapan@move-ment.co"
                    className="font-black text-base transition-colors"
                    style={{ color: "#fdf8f3" }}
                  >
                    filminginjapan@move-ment.co
                  </a>
                </div>
                <div>
                  <p className="font-mono text-[10px] tracking-[0.3em] uppercase mb-2" style={{ color: "rgba(196,168,130,0.5)" }}>WhatsApp</p>
                  <a
                    href="https://wa.me/819038800895"
                    className="font-black text-base transition-colors"
                    style={{ color: "#fdf8f3" }}
                  >
                    +81 90 3880 0895
                  </a>
                </div>
                <div>
                  <p className="font-mono text-[10px] tracking-[0.3em] uppercase mb-2" style={{ color: "rgba(196,168,130,0.5)" }}>Tokyo</p>
                  <p className="text-sm" style={{ color: "rgba(253,248,243,0.45)" }}>1-18-5-503 Higashi Gotanda, Shinagawa</p>
                </div>
                <div>
                  <p className="font-mono text-[10px] tracking-[0.3em] uppercase mb-2" style={{ color: "rgba(196,168,130,0.5)" }}>Hiroshima</p>
                  <p className="text-sm" style={{ color: "rgba(253,248,243,0.45)" }}>1-13-4 Ushita Minami, Higashi-ku</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <InstagramFeed />
      <Footer lang="en" />
    </div>
  );
}
