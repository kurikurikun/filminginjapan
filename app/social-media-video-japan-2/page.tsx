import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/Footer";
import LandingContactForm from "@/components/LandingContactForm";
import { Section, SectionLabel, Title, Dot, Kicker, TrustedBy } from "@/components/editorial";

export const metadata: Metadata = {
  title: "Social Media Video Production Japan · Tokyo | Short-Form & Ad Content",
  description: "Social-first video production in Japan. Vertical, square and horizontal formats for Instagram, TikTok, YouTube and Google Ads. Fast turnaround. Bilingual crew.",
  alternates: {
    canonical: "https://www.filminginjapan.com/social-media-video-japan-2",
  },
};

const services = [
  "Vertical (9:16), square (1:1) and horizontal (16:9) formats in a single shoot",
  "Platform-ready edits for Instagram Reels, TikTok, YouTube Shorts and Google Ads",
  "Localised versions: captions, supers and voiceover adapted per market",
  "Spec ads and brand content for Japanese and international audiences",
  "Product and lifestyle shoots designed to perform, not just look good",
];

const differentiators = [
  {
    title: "Multi-format from one shoot",
    desc: "We plan and frame every shoot to deliver vertical, square and horizontal cuts without compromise. One production budget, every platform covered.",
  },
  {
    title: "Built for performance",
    desc: "Social content that's designed to stop the scroll. We understand pacing, supers, hook structure and platform behaviour, not just cinematography.",
  },
  {
    title: "Localisation-ready production",
    desc: "We produce social ad content with localisation in mind: clean audio, adaptable supers and flexible edit structure that makes versioning per market straightforward for your team.",
  },
  {
    title: "Bilingual production",
    desc: "Our bilingual crew works seamlessly with Japanese talent, locations and brands, and communicates clearly with international clients and ad agencies.",
  },
];

const formats = ["9:16 Vertical", "1:1 Square", "16:9 Horizontal", "Google Ads", "Instagram Reels", "TikTok", "YouTube Shorts"];

const faqs = [
  {
    q: "What formats do you deliver?",
    a: "We deliver vertical (9:16), square (1:1) and horizontal (16:9) from a single shoot, optimised for each platform's specs and aspect ratios.",
  },
  {
    q: "Can you produce content ready for localisation across multiple markets?",
    a: "Yes. We produce with localisation in mind: clean audio beds, adaptable supers and a flexible edit structure that makes it straightforward for your team to version per market.",
  },
  {
    q: "Do you produce spec ads?",
    a: "Yes, we produce spec ads for brands who want to demonstrate a concept before committing to a full campaign budget. A great way to test creative before going to market.",
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
    a: "We work on projects of all sizes, from a single social cut to a full multi-format campaign. Get in touch and we'll scope something that fits your needs and budget.",
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

      {/* Hero: headline on cream, tall photo with vertical Japanese on the right */}
      <section className="border-b" style={{ borderColor: "#1c1208" }}>
        <div className="fij-wrap flex flex-wrap lg:flex-nowrap gap-x-12">
          <div className="flex-[7_1_560px] pt-16 pb-12 lg:pt-24 lg:pb-14 flex flex-col justify-between gap-12">
            <div>
              <p className="text-sm font-medium mb-8" style={{ color: "#6b5a48" }}>Social Media · Tokyo · Japan</p>
              <Title as="h1" className="fij-h1">Social-First Video Production in Japan</Title>
            </div>
            <div className="flex flex-wrap items-end gap-x-12 gap-y-8">
              <p className="fij-lede flex-[1_1_340px]" style={{ color: "#4a3a2a" }}>
                Short-form content built for performance. Vertical, square and horizontal formats
                from a single shoot, platform-ready for Instagram, TikTok, YouTube and Google Ads.
              </p>
              <a href="#enquire" className="fij-btn shrink-0">Get a quote</a>
            </div>
          </div>
          <div className="relative flex-[5_1_380px] min-h-[420px] lg:min-h-[640px] -mx-[clamp(20px,4vw,48px)] lg:ml-0 overflow-hidden" style={{ backgroundColor: "#0d0a07" }}>
            <Image
              src="/images/filming_in_japan_social_media_google_ads.jpg"
              alt=""
              fill
              priority
              className="object-cover object-[center_30%]"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div aria-hidden="true" className="absolute inset-y-0 right-0 w-40" style={{ background: "linear-gradient(to left, rgba(13,10,7,0.45), rgba(13,10,7,0))" }} />
            <p
              lang="ja"
              aria-hidden="true"
              className="absolute top-8 right-6 font-jp font-bold text-[26px] lg:text-[30px] tracking-[0.18em]"
              style={{ writingMode: "vertical-rl", color: "#fdf8f3", textShadow: "0 1px 12px rgba(0,0,0,0.35)" }}
            >
              SNS向けの縦型動画
            </p>
          </div>
        </div>
      </section>

      <TrustedBy clients={formats} label="Formats" />

      {/* 01 ZenMarket campaign, beside the sticky enquiry form */}
      <section className="border-b" style={{ borderColor: "#1c1208" }}>
        <div className="fij-wrap py-20 md:py-28 grid lg:grid-cols-[minmax(0,1fr)_420px] gap-14 xl:gap-20">
          <div className="min-w-0 flex flex-col md:flex-row gap-6 md:gap-14">
            <SectionLabel num="01" label="キャンペーン事例" />
            <div className="flex-1 min-w-0">
              <Kicker>Campaign work · ZenMarket</Kicker>
              <h2 className="fij-h2 mb-8">
                Sushi Surprise<Dot /><br />
                multi-format, one shoot<Dot />
              </h2>
              <div className="max-w-2xl space-y-4 mb-8 text-base leading-relaxed" style={{ color: "#4a3a2a" }}>
                <p>
                  The brief: a humorous short-form ad for ZenMarket targeting a global audience, centred on their &lsquo;No Japanese needed!&rsquo; value proposition. Making Japanese online shopping accessible to anyone, anywhere.
                </p>
                <p>
                  We proposed several concepts. The one selected: <span className="font-semibold" style={{ color: "#1c1208" }}>Sushi Surprise</span>. 30-second and 15-second cuts delivered in vertical, square and horizontal formats, all from a single shoot, ready to deploy across markets.
                </p>
              </div>
              <p className="text-xl sm:text-2xl font-semibold tracking-[-0.02em] leading-snug mb-12">
                &ldquo;Not what you expected, but exactly what you wanted.&rdquo;
              </p>

              {/* Hero video — 30sec horizontal */}
              <figure className="mb-8">
                <div className="relative overflow-hidden" style={{ aspectRatio: "16/9", backgroundColor: "#0d0a07" }}>
                  <iframe
                    src="https://player.vimeo.com/video/1199938257?h=b5961f06f8&title=0&byline=0&portrait=0"
                    className="absolute inset-0 w-full h-full"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title="30 second horizontal cut"
                  />
                </div>
                <figcaption className="mt-3 text-[15px] font-semibold">30 sec · 16:9 Horizontal</figcaption>
              </figure>

              {/* Vertical + square cuts side by side — 9:16 is width-constrained so both columns match height */}
              <div className="grid grid-cols-2 gap-4">
                <figure>
                  <div className="w-[56.25%] mx-auto">
                    <div className="relative overflow-hidden" style={{ aspectRatio: "9/16", backgroundColor: "#0d0a07" }}>
                      <iframe
                        src="https://player.vimeo.com/video/1201694607?h=599a431abd&title=0&byline=0&portrait=0"
                        className="absolute inset-0 w-full h-full"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                        title="15 second vertical cut"
                        style={{ border: 0 }}
                      />
                    </div>
                  </div>
                  <figcaption className="mt-3 text-[15px] font-semibold">15 sec · 9:16 Vertical</figcaption>
                </figure>
                <figure>
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
                  <figcaption className="mt-3 text-[15px] font-semibold">30 sec · 1:1 Square</figcaption>
                </figure>
              </div>

              {/* Deliverables matrix */}
              <p className="text-sm font-medium mt-14 mb-4" style={{ color: "#6b5a48" }}>All deliverables</p>
              <div className="border" style={{ borderColor: "#1c1208" }}>
                {/* Column headers */}
                <div className="grid grid-cols-[72px_1fr_1fr_1fr] sm:grid-cols-[96px_1fr_1fr_1fr] border-b" style={{ borderColor: "#1c1208" }}>
                  <div className="p-4" />
                  {[
                    { label: "16:9", sub: "Horizontal", w: 56, h: 32 },
                    { label: "1:1", sub: "Square", w: 32, h: 32 },
                    { label: "9:16", sub: "Vertical", w: 18, h: 32 },
                  ].map((col) => (
                    <div key={col.label} className="p-3 sm:p-4 border-l flex flex-col items-center gap-3" style={{ borderColor: "#1c1208", backgroundColor: "#f5ede2" }}>
                      <div className="flex items-center justify-center h-10" aria-hidden="true">
                        <div style={{ width: `${col.w}px`, height: `${col.h}px`, border: "2px solid #1c1208" }} />
                      </div>
                      <div className="text-center">
                        <p className="font-semibold text-lg leading-none tabular-nums">{col.label}</p>
                        <p className="text-[13px] mt-1" style={{ color: "#6b5a48" }}>{col.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Rows */}
                {["30 sec", "15 sec"].map((dur) => (
                  <div key={dur} className="grid grid-cols-[72px_1fr_1fr_1fr] sm:grid-cols-[96px_1fr_1fr_1fr] border-b" style={{ borderColor: "#1c1208" }}>
                    <div className="p-4 flex items-center">
                      <span className="text-[15px] font-semibold tabular-nums">{dur}</span>
                    </div>
                    {[0, 1, 2].map((ci) => (
                      <div key={ci} className="p-4 border-l flex items-center justify-center" style={{ borderColor: "#1c1208" }}>
                        <svg className="w-5 h-5" viewBox="0 0 16 16" fill="none" aria-label="Included" role="img">
                          <path d="M3 8.5l3 3 7-7" stroke="#c43d10" strokeWidth="2" strokeLinecap="square" />
                        </svg>
                      </div>
                    ))}
                  </div>
                ))}
                <div className="px-4 py-3">
                  <p className="text-sm font-medium" style={{ color: "#6b5a48" }}>6 videos · one shoot</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sticky enquiry form */}
          <aside>
            <div id="enquire" className="sticky top-24 scroll-mt-24 border p-8 lg:p-10" style={{ backgroundColor: "#fff", borderColor: "#1c1208" }}>
              <Title as="h2" className="text-[28px] leading-tight font-semibold tracking-[-0.03em] mb-2">Get a quote</Title>
              <p className="text-[15px] mb-6" style={{ color: "#4a3a2a" }}>
                Tell us about your project. We reply within 24 hours.
              </p>
              <LandingContactForm service="Social Media Video Japan" />
            </div>
          </aside>
        </div>
      </section>

      {/* 02 Client feedback */}
      <Section num="02" label="お客様の声" tone="sand" aria-labelledby="feedback-heading">
        <h2 id="feedback-heading" className="sr-only">Client feedback</h2>
        <figure className="max-w-5xl">
          <blockquote className="text-[28px] sm:text-[36px] lg:text-[46px] leading-[1.14] font-semibold tracking-[-0.035em] mb-7">
            <span style={{ color: "#e95228" }}>&ldquo;</span>Rather than seeing the restrictions as obstacles, the team consistently came to every meeting with fresh ideas, practical alternatives, and a very positive attitude. They also suggested additional creative concepts that helped strengthen our branding and messaging, adding value well beyond the initial scope.<span style={{ color: "#e95228" }}>&rdquo;</span>
          </blockquote>
          <figcaption className="text-[15px]" style={{ color: "#6b5a48" }}>Client · Drop Shipping Brand · Google Ads Campaign</figcaption>
        </figure>
      </Section>

      {/* 03 Spec ad */}
      <Section num="03" label="スペック広告" tone="night" aria-labelledby="spec-heading">
        <div className="flex flex-wrap items-center gap-x-16 gap-y-12">
          <div className="flex-[1_1_320px]">
            <Kicker tone="night">Spec work</Kicker>
            <Title id="spec-heading" tone="night" className="fij-h2 mb-6">Spec social ad</Title>
            <p className="fij-lede max-w-md" style={{ color: "rgba(253,248,243,0.78)" }}>
              Vertical-first spec ad produced for an international automotive retail brand in Japan.
              Shot and edited for social media performance.
            </p>
          </div>
          <figure className="flex-[1_1_300px] max-w-[340px] mx-auto">
            <div className="relative overflow-hidden" style={{ aspectRatio: "9/16", backgroundColor: "#241a12" }}>
              <iframe
                src="https://player.vimeo.com/video/1182298430?h=0bbf0eeba0&title=0&byline=0&portrait=0"
                className="absolute inset-0 w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Automotive retail — vertical social ad"
                loading="lazy"
              />
            </div>
            <figcaption className="mt-3 text-[15px] font-semibold">Automotive retail · Vertical 9:16</figcaption>
          </figure>
        </div>
      </Section>

      {/* 04 NHK programme verticals */}
      <Section num="04" label="番組の縦型展開" aria-labelledby="jibtv-heading">
        <div className="flex flex-wrap items-end gap-x-16 gap-y-12">
          <div className="flex-[1_1_320px]">
            <Kicker>Programme Verticals · JIBTV</Kicker>
            <h2 id="jibtv-heading" className="fij-h2 mb-8">
              Horizontal shoots<Dot /><br />
              Vertical reach<Dot />
            </h2>
            <div className="max-w-md space-y-4 text-base leading-relaxed" style={{ color: "#4a3a2a" }}>
              <p>
                We worked with JIBTV, part of the NHK Group, on two food programmes: <span className="font-semibold" style={{ color: "#1c1208" }}>Shibuyummy</span> and <span className="font-semibold" style={{ color: "#1c1208" }}>Currypedia</span>, produced in horizontal for Channel Oishii on the streaming service Amasian TV, and YouTube. We pushed for the vertical cuts.
              </p>
              <p>
                The logic: YouTube Shorts in 9:16 hook new viewers and drive them into the full-length horizontals. One shoot, two formats, a much bigger audience. It&rsquo;s the kind of format thinking we bring to every production, even when it wasn&rsquo;t in the original brief.
              </p>
            </div>
          </div>
          <div className="flex-[1.2_1_420px] grid grid-cols-2 gap-3 sm:gap-4 items-end">
            <figure className="mb-14">
              <div className="relative overflow-hidden" style={{ aspectRatio: "9/16", backgroundColor: "#0d0a07" }}>
                <iframe
                  src="https://player.vimeo.com/video/1116054357?h=32612f33c1&title=0&byline=0&portrait=0"
                  className="absolute inset-0 w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="Shibuyummy — vertical cut"
                  style={{ border: 0 }}
                  loading="lazy"
                />
              </div>
              <figcaption className="mt-3 text-[15px] font-semibold leading-snug">Shibuyummy · JIBTV · YouTube Shorts</figcaption>
            </figure>
            <figure>
              <div className="relative overflow-hidden" style={{ aspectRatio: "9/16", backgroundColor: "#0d0a07" }}>
                <iframe
                  src="https://www.youtube.com/embed/SjMlPenmWao"
                  className="absolute inset-0 w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="Currypedia — YouTube Short"
                  style={{ border: 0 }}
                  loading="lazy"
                />
              </div>
              <figcaption className="mt-3 text-[15px] font-semibold leading-snug">Currypedia · JIBTV · YouTube Shorts</figcaption>
            </figure>
          </div>
        </div>
      </Section>

      {/* 05 Inbound verticals */}
      <Section num="05" label="インバウンド向け" tone="night" aria-labelledby="inbound-heading">
        <div className="flex flex-wrap-reverse items-end gap-x-16 gap-y-12">
          <div className="flex-[1.2_1_420px] grid grid-cols-2 gap-3 sm:gap-4 items-end">
            <figure>
              <div className="relative overflow-hidden" style={{ aspectRatio: "9/16", backgroundColor: "#241a12" }}>
                <iframe
                  src="https://player.vimeo.com/video/1030964766?h=89413e0077&title=0&byline=0&portrait=0"
                  className="absolute inset-0 w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="Setouchi DMO — inbound vertical cut, 17 seconds"
                  style={{ border: 0 }}
                  loading="lazy"
                />
              </div>
              <figcaption className="mt-3 text-[15px] font-semibold leading-snug">Setouchi DMO · 17 sec · 9:16 Vertical</figcaption>
            </figure>
            <figure className="mb-14">
              <div className="relative overflow-hidden" style={{ aspectRatio: "9/16", backgroundColor: "#241a12" }}>
                <iframe
                  src="https://player.vimeo.com/video/1030964803?h=587a005217&title=0&byline=0&portrait=0"
                  className="absolute inset-0 w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="Setouchi DMO — inbound vertical cut, 19 seconds"
                  style={{ border: 0 }}
                  loading="lazy"
                />
              </div>
              <figcaption className="mt-3 text-[15px] font-semibold leading-snug">Setouchi DMO · 19 sec · 9:16 Vertical</figcaption>
            </figure>
          </div>
          <div className="flex-[1_1_320px]">
            <Kicker tone="night">Inbound · Setouchi DMO</Kicker>
            <h2 id="inbound-heading" className="fij-h2 mb-8">
              Made for inbound<Dot tone="night" /><br />
              Filmed alongside the main shoot<Dot tone="night" />
            </h2>
            <p className="fij-lede max-w-md" style={{ color: "rgba(253,248,243,0.78)" }}>
              Vertical content for the inbound market, produced for Setouchi DMO alongside their main horizontal
              production. Same locations, same crew, delivered as native 9:16 for social.
            </p>
          </div>
        </div>
      </Section>

      {/* 06 What we deliver */}
      <Section num="06" label="制作内容" aria-labelledby="services-heading">
        <Kicker>What we deliver</Kicker>
        <h2 id="services-heading" className="fij-h2 mb-12">
          Every format<Dot /><br />
          Every platform<Dot />
        </h2>
        <ol className="fij-cells" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))" }}>
          {services.map((s, i) => (
            <li key={i} className="p-5 pb-7 sm:p-6 sm:pb-8 flex flex-col gap-5 sm:gap-7 sm:min-h-[170px]">
              <span className="text-[13px] font-semibold tabular-nums" style={{ color: "#e95228" }}>{String(i + 1).padStart(2, "0")}</span>
              <span className="text-base sm:text-[19px] leading-snug font-semibold tracking-[-0.015em]">{s}</span>
            </li>
          ))}
        </ol>
      </Section>

      {/* 07 Why us */}
      <Section num="07" label="選ばれる理由" tone="sand" bordered aria-labelledby="why-heading">
        <div className="flex flex-wrap gap-x-16 gap-y-10">
          <div className="flex-[1_1_320px]">
            <Kicker>Why clients choose us</Kicker>
            <Title id="why-heading" className="fij-h2 mb-6">Social media video production in Japan</Title>
            <p className="text-xl font-semibold tracking-[-0.01em] leading-snug">Built for performance, not just aesthetics.</p>
          </div>
          <div className="flex-[1.4_1_480px] min-w-0">
            {differentiators.map((d, i) => (
              <div key={i} className={`flex gap-6 py-6 border-t ${i === differentiators.length - 1 ? "border-b" : ""}`} style={{ borderColor: "#1c1208" }}>
                <span className="w-8 shrink-0 pt-1.5 text-[13px] font-semibold tabular-nums" style={{ color: "#e95228" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="fij-h3 mb-2">{d.title}</h3>
                  <p className="text-[15px] leading-relaxed" style={{ color: "#4a3a2a" }}>{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 08 FAQ */}
      <Section num="08" label="よくある質問" aria-labelledby="faq-heading">
        <div className="flex flex-wrap gap-x-16 gap-y-10">
          <Title id="faq-heading" className="fij-h2 flex-[1_1_240px]">FAQ</Title>
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

      {/* 09 Internal links */}
      <Section num="09" label="関連サービス" bordered aria-labelledby="related-heading">
        <div className="flex flex-wrap gap-x-16 gap-y-8">
          <Title id="related-heading" className="fij-h3 flex-[1_1_240px]">Also from Filming in Japan</Title>
          <div className="flex-[3_1_520px] min-w-0 border-t-2" style={{ borderColor: "#1c1208" }}>
            {[
              { label: "Corporate branding & interview video", href: "/corporate-branding-videos-japan" },
              { label: "Client testimonial video production", href: "/client-testimonials-video-production-tokyo-japan" },
              { label: "Event photo & video", href: "/event-photo-video-japan" },
              { label: "Real estate photo, video & 360°", href: "/real-estate-photo-video-tokyo-japan" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="flex items-center justify-between gap-6 py-5 border-b transition-colors hover:text-[#c43d10]"
                style={{ borderColor: "#1c1208" }}
              >
                <span className="text-lg sm:text-[22px] font-semibold tracking-[-0.02em]">{link.label}</span>
                <span className="shrink-0 text-[15px] font-semibold">View</span>
              </a>
            ))}
          </div>
        </div>
      </Section>

      {/* 10 Prefer to talk? */}
      <Section num="10" label="お問い合わせ" tone="ink" aria-labelledby="talk-heading">
        <div className="flex flex-wrap items-end justify-between gap-x-16 gap-y-8">
          <div>
            <h2 id="talk-heading" className="fij-h2 mb-4">Prefer to talk?</h2>
            <p className="fij-lede" style={{ color: "rgba(253,248,243,0.78)" }}>WhatsApp or email. We reply fast.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="https://wa.me/819038800895" className="fij-btn-orange">WhatsApp us</a>
            <a href="mailto:filminginjapan@move-ment.co" className="fij-btn-outline" style={{ color: "#fdf8f3" }}>Email us</a>
          </div>
        </div>
      </Section>

      <Footer lang="en" />
    </div>
  );
}
