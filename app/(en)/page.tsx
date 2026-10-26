import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import VideoLightbox from "@/components/VideoLightbox";
import PeopleCarousel from "@/components/PeopleCarousel";
import ServiceGrid from "@/components/ServiceGrid";
import GoogleReviews from "@/components/GoogleReviews";
import InstagramFeed from "@/components/InstagramFeed";
import { Section, Title, Kicker, TrustedBy } from "@/components/editorial";

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
              "@id": "https://www.filminginjapan.com/#business",
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

      {/* Hero: headline on cream, background video in a tall panel with vertical Japanese on the right */}
      <section className="border-b" style={{ borderColor: "#1c1208" }}>
        <div className="fij-wrap flex flex-wrap lg:flex-nowrap gap-x-12">
          <div className="flex-[7_1_560px] min-w-0 pt-16 pb-12 lg:pt-24 lg:pb-14 flex flex-col justify-between gap-12">
            <div>
              <p className="text-sm font-medium mb-8" style={{ color: "#6b5a48" }}>Tokyo · Hiroshima · All Japan</p>
              <Title as="h1" className="fij-h1">Bilingual Video Production in Japan</Title>
            </div>
            <div className="flex flex-wrap items-end gap-x-12 gap-y-8">
              <p className="flex-[1_1_340px] fij-lede" style={{ color: "#4a3a2a" }}>
                Full-service bilingual production for progressive global brands.<br />
                Trusted by Sony, Google, Microsoft, Canon and many more.
              </p>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-5 shrink-0">
                <Link href="/contact" className="fij-btn">Start your project</Link>
                <Link href="/corporate-branding-videos-japan" className="fij-link text-[15px]">See our work</Link>
              </div>
            </div>
          </div>
          <div
            className="relative flex-[5_1_380px] min-h-[420px] lg:min-h-[680px] -mx-[clamp(20px,4vw,48px)] lg:ml-0 overflow-hidden"
            style={{ backgroundColor: "#0d0a07" }}
          >
            {/* Vimeo background video, cropped to cover the panel */}
            <iframe
              src="https://player.vimeo.com/video/533378669?background=1&autoplay=1&loop=1&muted=1&autopause=0"
              className="absolute"
              style={{
                top: "50%", left: "50%",
                transform: "translate(-50%, -50%)",
                height: "100%",
                minWidth: "100%",
                aspectRatio: "16 / 9",
                pointerEvents: "none",
                border: 0,
              }}
              allow="autoplay; fullscreen"
              title="Hero video"
              tabIndex={-1}
            />
            <div aria-hidden="true" className="absolute inset-y-0 right-0 w-40" style={{ background: "linear-gradient(to left, rgba(13,10,7,0.45), rgba(13,10,7,0))" }} />
            <p
              lang="ja"
              aria-hidden="true"
              className="absolute top-8 right-6 whitespace-nowrap font-jp font-bold text-[20px] sm:text-[26px] lg:text-[30px] tracking-[0.18em]"
              style={{ writingMode: "vertical-rl", color: "#fdf8f3", textShadow: "0 1px 12px rgba(0,0,0,0.35)" }}
            >
              日英バイリンガルの映像制作
            </p>
          </div>
        </div>
      </section>

      <TrustedBy clients={clients} />

      {/* 01 Services */}
      <Section num="01" label="サービス内容" aria-labelledby="services-heading">
        <div className="flex flex-wrap items-end justify-between gap-x-16 gap-y-6 mb-14">
          <div>
            <Kicker>What we do</Kicker>
            <Title id="services-heading" className="fij-h2">Four ways we tell your story</Title>
          </div>
          <p className="text-base leading-relaxed max-w-xs" style={{ color: "#6b5a48" }}>
            Bilingual corporate video production across Japan, from Tokyo to the regions.
          </p>
        </div>

        <ServiceGrid />

        {/* Social media strip */}
        <a
          href="/social-media-video-japan-2"
          className="group flex flex-wrap items-center justify-between gap-x-8 gap-y-3 mt-16 py-7 border-y-2"
          style={{ borderColor: "#1c1208", color: "#1c1208" }}
        >
          <span className="text-[22px] sm:text-[28px] leading-tight font-semibold tracking-[-0.025em]">
            Social Media Video &amp; Ad Content
          </span>
          <span className="fij-link text-[15px] group-hover:text-[#c43d10]">View</span>
        </a>
      </Section>

      {/* 02 About Chris — the page's one orange section */}
      <Section num="02" label="代表について" tone="orange" aria-labelledby="about-heading">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
          <VideoLightbox vimeoId="900727297" vimeoHash="a9dbbfbac5" title="Chris Moore — Filming in Japan" />
          <div className="flex flex-col justify-center">
            <Kicker tone="orange">About</Kicker>
            <Title id="about-heading" tone="orange" className="fij-h2 mb-8">Hi, I&apos;m Chris</Title>
            <p className="fij-lede mb-5" style={{ color: "#0d0a07" }}>
              Originally from New Zealand, I&apos;ve spent many years filming across Japan, building a business
              that connects global brands to Japanese stories. Bilingual, and comfortable in both English
              and Japanese work environments.
            </p>
            <p className="fij-lede mb-10" style={{ color: "#0d0a07" }}>
              From Tokyo boardrooms to mountain summits — we make corporate video feel genuinely human.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="fij-btn">Get in touch</Link>
              <a
                href="https://www.instagram.com/chrism_visuals/"
                target="_blank"
                rel="noopener noreferrer"
                className="fij-btn-outline hover:bg-[#0d0a07] hover:text-[#fdf8f3]"
                style={{ color: "#0d0a07" }}
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* 03 People carousel */}
      <PeopleCarousel num="03" label="撮影した人たち" />

      {/* 04 Google reviews */}
      <Section num="04" label="お客様の声" tone="sand" aria-labelledby="reviews-heading">
        <Title id="reviews-heading" className="fij-h2 mb-12">Google Reviews</Title>
        <GoogleReviews appId="94fa8f98-15eb-4b6a-8318-c0d4579384d8" />
      </Section>

      {/* 05 Process */}
      <Section num="05" label="制作の流れ" aria-labelledby="process-heading">
        <Kicker>Process</Kicker>
        <Title id="process-heading" className="fij-h2 mb-14">How we work</Title>
        <ol className="grid sm:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-12">
          {workflow.map((w) => (
            <li key={w.step} className="border-t-2 pt-5" style={{ borderColor: "#1c1208" }}>
              <span className="block text-[13px] font-semibold tabular-nums mb-8" style={{ color: "var(--fij-num)" }}>{w.step}</span>
              <h3 className="text-[20px] leading-snug font-semibold tracking-[-0.015em] mb-3">{w.title}</h3>
              <p className="text-[15px] leading-relaxed" style={{ color: "#4a3a2a" }}>{w.desc}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* 06 FAQ */}
      <Section num="06" label="よくある質問" bordered aria-labelledby="faq-heading">
        <div className="flex flex-wrap gap-x-16 gap-y-10">
          <div className="flex-[1_1_240px]">
            <Kicker>FAQ</Kicker>
            <Title id="faq-heading" className="fij-h2">Common questions</Title>
          </div>
          <div className="flex-[3_1_520px] min-w-0 border-t-2" style={{ borderColor: "#1c1208" }}>
            {faqs.map((faq, i) => (
              <details key={i} className="fij-faq border-b" style={{ borderColor: "#1c1208" }} open={i === 0}>
                <summary className="flex justify-between items-center gap-6 py-[22px] text-[19px] font-semibold tracking-[-0.015em]">
                  <h3>{faq.q}</h3>
                  <span aria-hidden="true" className="fij-faq-icon shrink-0 text-2xl font-normal leading-none" style={{ color: "#e95228" }}>+</span>
                </summary>
                <p className="pb-6 max-w-2xl text-base leading-relaxed" style={{ color: "#4a3a2a" }}>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </Section>

      {/* 07 Contact CTA */}
      <Section num="07" label="お問い合わせ" tone="ink" aria-labelledby="cta-heading">
        <div className="flex flex-wrap items-end justify-between gap-x-16 gap-y-14">
          <div className="flex-[1.4_1_420px] min-w-0">
            <Kicker tone="ink">Ready to start?</Kicker>
            <Title id="cta-heading" tone="ink" className="fij-h2 mb-8">Let&apos;s make your Japan project happen</Title>
            <p className="fij-lede mb-10 max-w-lg" style={{ color: "rgba(253,248,243,0.78)" }}>
              We aim to reply within 24 hours. Contact us by form, email or WhatsApp.
            </p>
            <Link href="/contact" className="fij-btn-orange">Start the conversation</Link>
          </div>
          <dl className="flex-[1_1_300px] min-w-0 border-t" style={{ borderColor: "rgba(253,248,243,0.25)" }}>
            {[
              { k: "Email", v: <a href="mailto:filminginjapan@move-ment.co" className="hover:text-[#f07a52] transition-colors break-all">filminginjapan@move-ment.co</a> },
              { k: "WhatsApp", v: <a href="https://wa.me/819038800895" className="hover:text-[#f07a52] transition-colors">+81 90 3880 0895</a> },
              { k: "Tokyo", v: "1-18-5-503 Higashi Gotanda, Shinagawa", small: true },
              { k: "Hiroshima", v: "1-13-4 Ushita Minami, Higashi-ku", small: true },
            ].map((row) => (
              <div key={row.k} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-4 border-b" style={{ borderColor: "rgba(253,248,243,0.25)" }}>
                <dt className="text-sm font-medium" style={{ color: "rgba(253,248,243,0.75)" }}>{row.k}</dt>
                <dd className={row.small ? "text-[15px]" : "text-lg font-semibold tracking-[-0.01em]"} style={{ color: "#fdf8f3" }}>{row.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      {/* 08 Instagram */}
      <InstagramFeed num="08" label="インスタグラム" />
      <Footer lang="en" />
    </div>
  );
}
