import type { Metadata } from "next";
import Image from "next/image";
import { Section, SectionLabel, Title, TrustedBy } from "@/components/editorial";
import Footer from "@/components/Footer";
import LandingContactForm from "@/components/LandingContactForm";

import LazyIframe from "@/components/LazyIframe";
export const metadata: Metadata = {
  title: "Testimonial Video Production Tokyo",
  description: "Professional client testimonial and case study video production in Tokyo and across Japan. Bilingual EN/JP team. Trusted by JLL, Microsoft, SAP, HP, Canon.",
  alternates: {
    canonical: "https://www.filminginjapan.com/client-testimonials-video-production-tokyo-japan",
    languages: {
      "en": "https://www.filminginjapan.com/client-testimonials-video-production-tokyo-japan",
      "ja": "https://www.filminginjapan.com/jp/client-testimonials-video-production-tokyo-japan",
      "x-default": "https://www.filminginjapan.com/client-testimonials-video-production-tokyo-japan",
    },
  },
};

const points = [
  {
    num: "01",
    title: "Authentic storytelling",
    desc: "We put your clients at ease so they speak naturally on camera: no scripts, no stiff delivery. We use a documentary approach that gets genuine, honest comments that convert far better than polished PR speak.",
  },
  {
    num: "02",
    title: "Bilingual interviews",
    desc: "Native English and Japanese speakers on every shoot. We interview in both languages and deliver subtitled cuts for global and domestic use. Your Japanese clients speak in Japanese. We handle everything else.",
  },
  {
    num: "03",
    title: "Studio, office, or anywhere in Japan",
    desc: "Based in Tokyo and Hiroshima, we coordinate shoots across Japan, at your client's office, facility, studio, or chosen location. Green screen available on location. Small crew to keep your client relaxed.",
  },
  {
    num: "04",
    title: "Multi-format delivery",
    desc: "16:9 long-form, 9:16 social cuts, 1:1 square, all included. We deliver via Google Drive, Dropbox, MASV or Frame.io. Hard disk by DHL or FedEx also available for large projects.",
  },
];

const faqs = [
  {
    q: "Where do you film client testimonial videos in Japan?",
    a: "Anywhere that suits your client: their office, a studio, an event venue, or outdoors. We can also set up green screen on location. We scout locations beforehand and advise on the best setup for lighting and sound.",
  },
  {
    q: "Can you film in Japanese and English on the same shoot?",
    a: "Yes. We have native English and Japanese interviewers on every shoot. We can conduct the same interview in both languages and cut bilingual versions for domestic and international audiences.",
  },
  {
    q: "What clients have you produced testimonial videos for?",
    a: "We've been trusted by JLL, Microsoft, SAP, Celonis, HP and many others to film client testimonial and case study videos in Japan.",
  },
  {
    q: "Do you offer studio facilities?",
    a: "Yes. We have access to studios in Tokyo, or we can set up a professional-grade studio environment at your client's office using our own lighting and backdrop equipment.",
  },
  {
    q: "What camera and audio equipment do you use?",
    a: "Our standard equipment is the Canon C80 and Canon R5C, but we have shot on Sony FX3, FX6, FX9 and Arri Amira cameras. Audio is captured with boom and lapel mics. We have a compact lighting setup that travels well, or can do three-point lighting.",
  },
  {
    q: "Can the interview be directed remotely by our overseas team?",
    a: "Yes. We can link overseas producers or directors to the set via remote video, enabling them to observe, give feedback or ask questions directly.",
  },
  {
    q: "What is the process for preparing a testimonial shoot?",
    a: "We work with you in advance to agree on interview questions, filming style and location. We can also coordinate directly with your client to keep scheduling simple and ensure they feel comfortable on camera before the shoot day.",
  },
  {
    q: "Do you provide B-roll footage as part of the testimonial?",
    a: "Yes. We can capture additional office, product or cityscape footage, for example Tokyo skyline shots, to complement the interview and make the final video more engaging.",
  },
  {
    q: "How do you ensure the interviewee is comfortable on camera?",
    a: "We treat interviews as a natural conversation, with genuine curiosity about what drives the interviewee. We keep crew sizes small and create a relaxed environment so interviewees deliver authentic, engaging answers rather than stiff on-camera performances.",
  },
  {
    q: "How quickly can you turn around the edited video?",
    a: "Rough cut typically within 1–2 weeks of the shoot. Final delivery depends on the number of review rounds. Same-day social cuts available on request.",
  },
  {
    q: "What formats do you deliver in?",
    a: "16:9 for YouTube and websites, 9:16 for social media (Reels, TikTok, Stories), and 1:1 square. We deliver via Google Drive, Dropbox, MASV or Frame.io, or hard disk by courier if required.",
  },
];

const clients = ["JLL", "Microsoft", "SAP", "Celonis", "HP", "Canon", "Sony", "Accenture"];

const samples = [
  {
    src: "https://www.youtube.com/embed/72GKHq5pCDY",
    title: "Client testimonial video filmed for Microsoft Asia",
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    caption: "Chris from Filming in Japan was the DP for this client testimonial for Microsoft",
  },
  {
    src: "https://player.vimeo.com/video/561655197?h=d1ca57fb5c",
    title: "Video clip samples from selected past corporate interview projects and client testimonial videos in Tokyo",
    allow: "autoplay; fullscreen; picture-in-picture",
    caption: "Video clip samples from selected past corporate interview projects / client testimonial videos in Tokyo",
  },
  {
    src: "https://www.youtube.com/embed/3Jf81EQ_1Jw",
    title: "Chris from Filming in Japan as DP on Microsoft client testimonial",
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    caption: "Client testimonial video we filmed for Microsoft Asia",
  },
];

export default function TestimonialsPage() {
  return (
    <div style={{ backgroundColor: "#fdf8f3" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "Where do you film client testimonial videos in Japan?", "acceptedAnswer": { "@type": "Answer", "text": "Anywhere that suits your client: their office, a studio, an event venue, or outdoors. We can also set up green screen on location. We scout locations beforehand and advise on the best setup for lighting and sound." } },
            { "@type": "Question", "name": "Can you film in Japanese and English on the same shoot?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We have native English and Japanese interviewers on every shoot. We can conduct the same interview in both languages and cut bilingual versions for domestic and international audiences." } },
            { "@type": "Question", "name": "What clients have you produced testimonial videos for?", "acceptedAnswer": { "@type": "Answer", "text": "We've been trusted by JLL, Microsoft, SAP, Celonis, HP and many others to film client testimonial and case study videos in Japan." } },
            { "@type": "Question", "name": "Do you offer studio facilities?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We have access to studios in Tokyo, or we can set up a professional-grade studio environment at your client's office using our own lighting and backdrop equipment." } },
            { "@type": "Question", "name": "What camera and audio equipment do you use?", "acceptedAnswer": { "@type": "Answer", "text": "Our standard equipment is the Canon C80 and Canon R5C, but we have shot on Sony FX3, FX6, FX9 and Arri Amira cameras. Audio is captured with boom and lapel mics. We have a compact lighting setup that travels well, or can do three-point lighting." } },
            { "@type": "Question", "name": "Can the interview be directed remotely by our overseas team?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We can link overseas producers or directors to the set via remote video, enabling them to observe, give feedback or ask questions directly." } },
            { "@type": "Question", "name": "What is the process for preparing a testimonial shoot?", "acceptedAnswer": { "@type": "Answer", "text": "We work with you in advance to agree on interview questions, filming style and location. We can also coordinate directly with your client to keep scheduling simple and ensure they feel comfortable on camera before the shoot day." } },
            { "@type": "Question", "name": "Do you provide B-roll footage as part of the testimonial?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We can capture additional office, product or cityscape footage, for example Tokyo skyline shots, to complement the interview and make the final video more engaging." } },
            { "@type": "Question", "name": "How do you ensure the interviewee is comfortable on camera?", "acceptedAnswer": { "@type": "Answer", "text": "We treat interviews as a natural conversation, with genuine curiosity about what drives the interviewee. We keep crew sizes small and create a relaxed environment so interviewees deliver authentic, engaging answers rather than stiff on-camera performances." } },
            { "@type": "Question", "name": "How quickly can you turn around the edited video?", "acceptedAnswer": { "@type": "Answer", "text": "Rough cut typically within 1–2 weeks of the shoot. Final delivery depends on the number of review rounds. Same-day social cuts available on request." } },
            { "@type": "Question", "name": "What formats do you deliver in?", "acceptedAnswer": { "@type": "Answer", "text": "16:9 for YouTube and websites, 9:16 for social media (Reels, TikTok, Stories), and 1:1 square. We deliver via Google Drive, Dropbox, MASV or Frame.io, or hard disk by courier if required." } }
          ]
        }) }}
      />

      {/* Hero: headline on cream, tall photo with vertical Japanese on the right */}
      <section className="border-b" style={{ borderColor: "#1c1208" }}>
        <div className="fij-wrap flex flex-wrap lg:flex-nowrap gap-x-12">
          <div className="flex-[7_1_560px] pt-16 pb-12 lg:pt-24 lg:pb-14 flex flex-col justify-between gap-12">
            <div>
              <p className="text-sm font-medium mb-8" style={{ color: "#6b5a48" }}>Testimonial Video · Tokyo · Japan</p>
              <Title as="h1" className="fij-h1">Client Testimonial Videos in Japan</Title>
            </div>
            <div className="flex flex-wrap items-end gap-x-12 gap-y-8">
              <p className="fij-lede flex-[1_1_340px]" style={{ color: "#4a3a2a" }}>
                We produce compelling client testimonial and case study videos that build trust and drive sales.
                Bilingual team. Real stories. Broadcast-quality results, delivered fast.
              </p>
              <a href="#enquire" className="fij-btn shrink-0">Get a free quote</a>
            </div>
          </div>
          <div className="relative flex-[5_1_380px] min-h-[420px] lg:min-h-[640px] -mx-[clamp(20px,4vw,48px)] lg:ml-0 overflow-hidden" style={{ backgroundColor: "#0d0a07" }}>
            <Image
              src="/images/customer_testimonial_office_tokyo.jpeg"
              alt="Crew filming a client testimonial interview in a Tokyo office"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div aria-hidden="true" className="absolute inset-y-0 right-0 w-40" style={{ background: "linear-gradient(to left, rgba(13,10,7,0.45), rgba(13,10,7,0))" }} />
            <p
              lang="ja"
              aria-hidden="true"
              className="absolute top-8 right-6 font-jp font-bold text-[26px] lg:text-[30px] tracking-[0.18em]"
              style={{ writingMode: "vertical-rl", color: "#fdf8f3", textShadow: "0 1px 12px rgba(0,0,0,0.35)" }}
            >
              お客様の声を映像に
            </p>
          </div>
        </div>
      </section>

      <TrustedBy clients={clients} />

      {/* What we deliver, beside the sticky enquiry form */}
      <section className="border-b" style={{ borderColor: "#1c1208" }}>
        <div className="fij-wrap py-20 md:py-28 grid lg:grid-cols-[minmax(0,1fr)_420px] gap-14 xl:gap-20">
          <div className="min-w-0">
            {/* 01 What we deliver */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-14">
              <SectionLabel num="01" label="撮影内容" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium mb-5" style={{ color: "#6b5a48" }}>What we deliver</p>
                <Title className="fij-h2 mb-12">Real clients. Real stories. Real results</Title>
                <div>
                  {points.map((p, i) => (
                    <div key={p.num} className={`flex gap-6 py-6 border-t ${i === points.length - 1 ? "border-b" : ""}`} style={{ borderColor: "#1c1208" }}>
                      <span className="w-8 shrink-0 pt-1.5 text-[13px] font-semibold tabular-nums" style={{ color: "var(--fij-num)" }}>{p.num}</span>
                      <div>
                        <h3 className="fij-h3 mb-2">{p.title}</h3>
                        <p className="text-[15px] leading-relaxed" style={{ color: "#4a3a2a" }}>{p.desc}</p>
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
              <Title as="h2" className="text-[28px] leading-tight font-semibold tracking-[-0.03em] mb-2">Get a free quote</Title>
              <p className="text-[15px] mb-6" style={{ color: "#4a3a2a" }}>
                Tell us about your project. We reply within 24 hours.
              </p>
              <LandingContactForm service="Client Testimonial Video Japan" />
            </div>
          </aside>
        </div>
      </section>

      {/* 02 Work samples — dark alternating rows */}
      <Section num="02" label="制作事例" tone="night" aria-labelledby="samples-heading">
        <Title id="samples-heading" tone="night" className="fij-h2 mb-16">Work samples</Title>
        {samples.map((v, i) => (
          <article
            key={v.src}
            className={`flex flex-wrap items-center gap-x-14 gap-y-6 py-12 border-t ${i % 2 ? "flex-row-reverse" : ""}`}
            style={{ borderColor: "rgba(253,248,243,0.25)" }}
          >
            <div className="relative flex-[1.6_1_440px] min-w-0 aspect-[16/9]" style={{ backgroundColor: "#241a12" }}>
              <LazyIframe
                src={v.src}
                title={v.title}
                allow={v.allow}
                allowFullScreen
                loading="lazy"
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
              />
            </div>
            <div className="flex-[1_1_280px]">
              <p className="text-[13px] font-semibold tabular-nums mb-4" style={{ color: "#f07a52" }}>{String(i + 1).padStart(2, "0")}</p>
              <h3 className="text-[24px] lg:text-[30px] leading-[1.15] font-semibold tracking-[-0.025em]">{v.caption}</h3>
            </div>
          </article>
        ))}
      </Section>

      {/* 03 Green screen on location */}
      <Section num="03" label="グリーンバック撮影" tone="sand" aria-labelledby="green-heading">
        <p className="text-sm font-medium mb-5" style={{ color: "#6b5a48" }}>Green screen on location</p>
        <div className="flex flex-wrap items-end gap-x-16 gap-y-8 mb-14">
          <Title id="green-heading" className="fij-h2 flex-[1_1_380px]">Studio quality, anywhere in Japan</Title>
          <p className="fij-lede flex-[1_1_380px] max-w-xl" style={{ color: "#4a3a2a" }}>
            We have recorded corporate presentations for companies such as Canon, and client testimonials at events for companies such as SAP, on green screen. We carry a complete package: large portable green screen, professional lighting, boom and lapel sound, and cameras, to set up a broadcast-quality green screen studio anywhere there is space.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="relative aspect-[3/2] overflow-hidden">
            <Image
              src="/images/tokyo_japan_studio_green_screen_recordings_1.jpeg"
              alt="Green screen studio setup in Tokyo Japan"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 640px"
            />
          </div>
          <div className="relative aspect-[3/2] overflow-hidden">
            <Image
              src="/images/tokyo_japan_studio_green_screen_recordings_2.jpg"
              alt="Green screen testimonial recording in Tokyo Japan"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 640px"
            />
          </div>
        </div>
      </Section>

      {/* 04 Client feedback */}
      <Section num="04" label="お客様の声" bordered aria-labelledby="feedback-heading">
        <h2 id="feedback-heading" className="sr-only">Client feedback</h2>
        <figure>
          <blockquote className="text-[30px] sm:text-[40px] lg:text-[52px] leading-[1.12] font-semibold tracking-[-0.035em] mb-7">
            <span style={{ color: "#e95228" }}>&ldquo;</span>Again, great job with the video. I was a bit worried going into this as I don&apos;t speak Japanese, but this turned out really fantastic.<span style={{ color: "#e95228" }}>&rdquo;</span>
          </blockquote>
          <figcaption className="text-[15px]" style={{ color: "#6b5a48" }}>Overseas-based client</figcaption>
        </figure>
      </Section>

      {/* 05 FAQ */}
      <Section num="05" label="よくある質問" aria-labelledby="faq-heading">
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

      {/* 06 Prefer to talk? */}
      <Section num="06" label="お問い合わせ" tone="ink" aria-labelledby="talk-heading">
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
