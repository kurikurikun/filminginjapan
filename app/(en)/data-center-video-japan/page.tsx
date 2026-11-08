import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Section, SectionLabel, Title, TrustedBy } from "@/components/editorial";
import Footer from "@/components/Footer";
import LandingContactForm from "@/components/LandingContactForm";
import LazyIframe from "@/components/LazyIframe";

export const metadata: Metadata = {
  title: "Data Centre Video & Photography Japan",
  description: "Bilingual video and photo crew for data centres in Japan: opening ceremonies, completion films, recruitment videos and site photography. Work for Google, Princeton Digital Group and MC Digital Reality.",
  alternates: {
    canonical: "https://www.filminginjapan.com/data-center-video-japan",
    languages: {
      "en": "https://www.filminginjapan.com/data-center-video-japan",
      "ja": "https://www.filminginjapan.com/jp/data-center-video",
      "x-default": "https://www.filminginjapan.com/data-center-video-japan",
    },
  },
};

const services = [
  "Opening ceremony and ribbon-cutting coverage",
  "Completion and promotion films for new facilities",
  "Recruitment and employee profile videos",
  "Executive, partner and customer interviews",
  "Drone aerials of the campus and surroundings",
  "Facility photography: halls, plant rooms, exteriors",
  "Same-day social photo selects after events",
  "Japanese and English subtitles and versions",
];

const differentiators = [
  {
    title: "We work to your site rules",
    desc: "Escorted access, inductions, badge procedures, no-film zones and NDAs are normal for us. We agree a shot list and restricted areas in advance, and you review every frame before anything is published.",
  },
  {
    title: "Bilingual on the floor",
    desc: "Data centre projects in Japan bring together overseas operators, Japanese contractors, local government and site staff. Our crew directs and interviews in English and Japanese, so nothing gets lost between them.",
  },
  {
    title: "Small crew, light footprint",
    desc: "A compact team with quiet, battery-powered kit that fits through security and stays out of the way of operations and guests.",
  },
  {
    title: "One crew for photo, video and drone",
    desc: "The same team covers stills, interviews, b-roll and aerials in one visit, so you get a consistent look across press, social, recruitment and investor material without booking the site twice.",
  },
];

const projects = [
  {
    title: "Concept film for a data centre developer",
    meta: "Data centre developer · Tokyo · 2026",
    desc: "Brand concept film for a data centre developer's new website. A contemporary dancer and light-trail VFX tie together footage of their facilities, opening ceremonies and local community. Concept, VFX design, studio dance shoot and location filming all by our team.",
    src: null,
    stills: [1, 2, 3, 4].map((n) => ({ src: `/images/dc/data-centre-concept-film-dancer-${n}.jpg`, alt: "Contemporary dancer with light-trail effects, from a data centre concept film" })),
  },
  {
    title: "Princeton Digital Group: data centre opening, Saitama",
    meta: "Princeton Digital Group · Saitama · 2025",
    desc: "Digest video of the opening ceremony, plus photo coverage with a fast-turnaround social media photo selection delivered shortly after the event finished.",
    src: "https://player.vimeo.com/video/1079354745?h=17c53b18eb&title=0&byline=0&portrait=0",
    stills: null,
  },
  {
    title: "MC Digital Reality: colocation data centre",
    meta: "MC Digital Reality · Japan",
    desc: "Promotion video for MC Digital Reality's colocation services, filmed inside their data centre.",
    src: "https://player.vimeo.com/video/667821838?h=d32683d90f&title=0&byline=0&portrait=0",
    stills: null,
  },
  {
    title: "Google Japan: recruitment video at the Inzai data centre",
    meta: "Google · Inzai, Chiba",
    desc: "Recruitment video hearing from employees at Google's Inzai data centre near Tokyo about why they think Google is the right place for them. Interviews and b-roll filmed on site.",
    src: "https://www.youtube.com/embed/UbkuSD-ht1U?rel=0",
    stills: null,
  },
];

const faqs = [
  {
    q: "Can you film inside a live, operating data centre?",
    a: "Yes. We follow your site's security and safety procedures, work with an escort, and agree in advance which halls, racks and equipment can be shown. Sensitive areas are kept out of frame and you approve every edit and photo before release.",
  },
  {
    q: "What kinds of data centre videos do you make?",
    a: "Opening ceremony digests, completion and promotion films, recruitment and employee videos, executive and partner interviews, construction progress records, and photography of the building, plant and white space.",
  },
  {
    q: "Can you cover the opening ceremony and a promotion film on the same trip?",
    a: "Yes. Many clients book event coverage on the day and use the same visit for interviews, b-roll and drone footage of the facility. One crew, one set of site inductions, lower total cost.",
  },
  {
    q: "Do you film drone footage of data centre campuses?",
    a: "Yes, subject to the site's approval and local regulations. We handle flight planning and permissions and coordinate with building management.",
  },
  {
    q: "Where in Japan can you work?",
    a: "We are based in Tokyo and Hiroshima and travel anywhere in Japan, including the Inzai and Saitama data centre clusters around Tokyo and the Osaka area.",
  },
  {
    q: "Can you deliver in English and Japanese?",
    a: "Yes. Interviews can be conducted in either language, and we deliver subtitled versions in English, Japanese or both.",
  },
];

const clients = ["Google", "Princeton Digital Group", "MC Digital Reality", "JLL", "CBRE"];

export default function DataCenterVideoPage() {
  return (
    <div style={{ backgroundColor: "#fdf8f3" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map((faq) => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": { "@type": "Answer", "text": faq.a },
          })),
        }) }}
      />

      {/* Hero: headline on cream, opening-ceremony video on night with vertical Japanese */}
      <section className="border-b" style={{ borderColor: "#1c1208" }}>
        <div className="fij-wrap flex flex-wrap lg:flex-nowrap gap-x-12">
          <div className="flex-[7_1_560px] pt-16 pb-12 lg:pt-24 lg:pb-14 flex flex-col justify-between gap-12">
            <div>
              <p className="text-sm font-medium mb-8" style={{ color: "#6b5a48" }}>Data Centres · Tokyo · Japan</p>
              <Title as="h1" className="fij-h1">Data centre video &amp; photography in Japan</Title>
            </div>
            <div className="flex flex-wrap items-end gap-x-12 gap-y-8">
              <div className="flex-[1_1_340px]">
                <p className="text-xl font-semibold tracking-[-0.01em] leading-snug mb-2.5">
                  Openings, completion films and recruitment videos, filmed inside the facility.
                </p>
                <p className="fij-lede" style={{ color: "#4a3a2a" }}>
                  Our bilingual Tokyo crew works to your site&apos;s security rules and brings operators, contractors and staff together on camera in English and Japanese.
                </p>
              </div>
              <a href="#enquire" className="fij-btn shrink-0">Get a free quote</a>
            </div>
          </div>
          <div className="relative flex-[5_1_380px] -mx-[clamp(20px,4vw,48px)] lg:ml-0 flex items-center px-[clamp(20px,4vw,48px)] lg:pl-10 lg:pr-20 py-12" style={{ backgroundColor: "#0d0a07" }}>
            <figure className="w-full">
              <div className="relative aspect-[16/9]" style={{ backgroundColor: "#241a12" }}>
                <LazyIframe
                  src={projects[1].src!}
                  className="absolute inset-0 w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="Princeton Digital Group data centre opening, Saitama"
                />
              </div>
              <figcaption className="mt-3 text-sm" style={{ color: "rgba(253,248,243,0.7)" }}>
                Princeton Digital Group data centre opening, Saitama
              </figcaption>
            </figure>
            <p
              lang="ja"
              aria-hidden="true"
              className="hidden lg:block absolute top-8 right-6 font-jp font-bold text-[26px] lg:text-[30px] tracking-[0.18em]"
              style={{ writingMode: "vertical-rl", color: "#fdf8f3" }}
            >
              データセンターの映像
            </p>
          </div>
        </div>
      </section>

      <TrustedBy clients={clients} />

      {/* What we film + how we work, beside the sticky enquiry form */}
      <section className="border-b" style={{ borderColor: "#1c1208" }}>
        <div className="fij-wrap py-20 md:py-28 grid lg:grid-cols-[minmax(0,1fr)_420px] gap-14 xl:gap-20">
          <div className="min-w-0 space-y-24">
            {/* 01 What we film */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-14">
              <SectionLabel num="01" label="撮影内容" />
              <div className="flex-1 min-w-0">
                <Title className="fij-h2 mb-8">What we film at data centres</Title>
                <p className="fij-lede max-w-xl mb-12" style={{ color: "#4a3a2a" }}>
                  From the opening day to recruiting the people who run it, we cover the moments a new facility needs on camera.
                </p>
                <ol className="fij-cells" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(50%, 220px), 1fr))" }}>
                  {services.map((s, i) => (
                    <li key={i} className="p-4 pb-6 sm:p-6 sm:pb-8 flex flex-col gap-5 sm:gap-7 sm:min-h-[150px]">
                      <span className="text-[13px] font-semibold tabular-nums" style={{ color: "var(--fij-num)" }}>{String(i + 1).padStart(2, "0")}</span>
                      <span className="text-base sm:text-[19px] leading-snug font-semibold tracking-[-0.015em]">{s}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* 02 How we work on site */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-14">
              <SectionLabel num="02" label="現場での対応" />
              <div className="flex-1 min-w-0">
                <Title className="fij-h2 mb-12">How we work on site</Title>
                <div>
                  {differentiators.map((d, i) => (
                    <div key={i} className={`flex gap-6 py-6 border-t ${i === differentiators.length - 1 ? "border-b" : ""}`} style={{ borderColor: "#1c1208" }}>
                      <span className="w-8 shrink-0 pt-1.5 text-[13px] font-semibold tabular-nums" style={{ color: "var(--fij-num)" }}>
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
            </div>
          </div>

          {/* Sticky enquiry form */}
          <aside>
            <div id="enquire" className="sticky top-24 scroll-mt-24 border p-8 lg:p-10" style={{ backgroundColor: "#fff", borderColor: "#1c1208" }}>
              <Title as="h2" className="text-[28px] leading-tight font-semibold tracking-[-0.03em] mb-2">Enquire about your facility</Title>
              <p className="text-[15px] mb-6" style={{ color: "#4a3a2a" }}>
                Tell us about your site and dates. We reply within 24 hours.
              </p>
              <LandingContactForm service="Data Centre Video Japan" />
            </div>
          </aside>
        </div>
      </section>

      {/* 03 Data centre projects */}
      <Section num="03" label="データセンター実績" tone="night" aria-labelledby="projects-heading">
        <Title id="projects-heading" tone="night" className="fij-h2 mb-16">Data centre projects</Title>
        {projects.map((p, i) => (
          <article
            key={p.title}
            className={`flex flex-wrap items-center gap-x-14 gap-y-8 py-12 border-t ${i % 2 ? "flex-row-reverse" : ""}`}
            style={{ borderColor: "rgba(253,248,243,0.25)" }}
          >
            {p.stills ? (
              <div className="flex-[1.25_1_440px] grid grid-cols-2 gap-2">
                {p.stills.map((img) => (
                  <div key={img.src} className="relative aspect-[16/9]" style={{ backgroundColor: "#241a12" }}>
                    <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(max-width: 1024px) 50vw, 360px" />
                  </div>
                ))}
              </div>
            ) : (
            <div className="relative flex-[1.25_1_440px] aspect-[16/9]" style={{ backgroundColor: "#241a12" }}>
              <LazyIframe
                src={p.src!}
                className="absolute inset-0 w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title={p.title}
                loading="lazy"
              />
            </div>
            )}
            <div className="flex-[1_1_340px]">
              <p className="text-sm font-medium mb-4" style={{ color: "#f07a52" }}>{p.meta}</p>
              <h3 className="text-[26px] lg:text-[36px] leading-[1.1] font-semibold tracking-[-0.03em] mb-4">{p.title}</h3>
              <p className="text-base leading-relaxed" style={{ color: "rgba(253,248,243,0.78)" }}>{p.desc}</p>
            </div>
          </article>
        ))}
        <p className="pt-10 border-t text-base" style={{ borderColor: "rgba(253,248,243,0.25)", color: "rgba(253,248,243,0.78)" }}>
          We also make completion and promotion films for other building types. See our{" "}
          <Link href="/real-estate-photo-video-tokyo-japan" className="fij-link" style={{ color: "#fdf8f3" }}>real estate and facilities work</Link>.
        </p>
      </Section>

      {/* 04 FAQ */}
      <Section num="04" label="よくある質問" aria-labelledby="faq-heading">
        <div className="flex flex-wrap gap-x-16 gap-y-10">
          <Title id="faq-heading" className="fij-h2 flex-[1_1_240px]">FAQ</Title>
          <div className="flex-[3_1_520px] border-t-2" style={{ borderColor: "#1c1208" }}>
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

      {/* 05 Prefer to talk? */}
      <Section num="05" label="お問い合わせ" tone="ink" aria-labelledby="talk-heading">
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
