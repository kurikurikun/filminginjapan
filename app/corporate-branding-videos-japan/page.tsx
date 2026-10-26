import type { Metadata } from "next";
import Image from "next/image";
import { Section, SectionLabel, Title, TrustedBy } from "@/components/editorial";
import Footer from "@/components/Footer";
import LandingContactForm from "@/components/LandingContactForm";

export const metadata: Metadata = {
  title: "Corporate Video Production Japan",
  description: "Professional corporate interview, brand film and recruitment video production in Japan. Bilingual EN/JP team. Trusted by Sony, Google, Microsoft, HP, EY, Canon.",
  alternates: {
    canonical: "https://www.filminginjapan.com/corporate-branding-videos-japan",
    languages: {
      "en": "https://www.filminginjapan.com/corporate-branding-videos-japan",
      "ja": "https://www.filminginjapan.com/jp/corporate-video",
      "x-default": "https://www.filminginjapan.com/corporate-branding-videos-japan",
    },
  },
};

const faqs = [
  {
    q: "How do you ensure the video aligns with our company's message?",
    a: "We begin by meeting with your marketing team or production agency to understand the core message and outcomes. We also discuss where the video will be used — website, SNS, trade shows — so the length, style and tone are aligned with your overall marketing strategy.",
  },
  {
    q: "Do you always need a script and storyboard?",
    a: "Not always. We're comfortable with a documentary style, but using a storyboard ensures the scenes support your message and avoids surprises in the edit stage.",
  },
  {
    q: "What factors determine the budget for a corporate video in Japan?",
    a: "The main driver is the number of production days and deliverables. Other factors include preproduction requirements, talent, locations, equipment and whether professional actors are needed. We can also tailor a plan to work within a fixed budget.",
  },
  {
    q: "Can you source talent and locations for us?",
    a: "Yes. We source both Japanese and international talent, as well as studios and outdoor locations across Japan. We specialise in working with non-professional talent — your own staff or influencers — to create authentic and engaging content.",
  },
  {
    q: "What size crew should we expect on the day?",
    a: "Crew size depends on budget and the type of production. We can scale up when needed, but we also keep teams small when working with non-professional talent, helping them feel relaxed and natural on camera.",
  },
  {
    q: "Can interviews be directed remotely by our overseas team?",
    a: "Yes. We can link overseas directors to the set via remote video, enabling them to observe, give feedback or ask interview questions directly.",
  },
  {
    q: "How long does it take to produce a corporate video in Japan?",
    a: "A small-scale shoot can take 2–3 weeks from planning to delivery; larger productions 1–2 months. We recommend starting the conversation at least 4–6 weeks before your target delivery date.",
  },
  {
    q: "Do we need filming permits in Japan?",
    a: "If we are putting up a tripod then permits are generally required in public locations. With a small handheld crew of 3–5 people, permits are often not required — though there are many exceptions. We advise on a case-by-case basis.",
  },
  {
    q: "What are the typical costs for a corporate video in Japan?",
    a: "Costs depend on crew size, equipment, locations and post-production requirements. We provide transparent quotes and can tailor packages for different budgets while maintaining high production value.",
  },
];

const testimonials = [
  {
    quote: "Your expertise and dedication truly made this video what it is. We also appreciate your continuous support and patience as we requested improvements multiple times. Once again, thank you so much for working with us. I hope we can collaborate again in the future!",
    credit: "Manager · International Technology Company",
  },
  {
    quote: "Thank you so much for your work and dedication. The image and sound are very good. It was a real pleasure to work with you.",
    credit: "Overseas Director · Remote Production",
  },
  {
    quote: "We just completed the edit. Great job with the footage. Love the shot of the city from the window. Seems like you and the interview subject got along well in the interview.",
    credit: "Director · Overseas Production Company",
  },
];

const equipment = [
  "Canon C80, R5C",
  "Blackmagic Design CC 6K, BMPCC 4K",
  "3-point lighting, boom & lapel mics, time code sync",
  "Sliders, gimbals, portable green screen",
];

const clients = ["Sony", "HP", "Canon", "EY", "NEC", "Accenture", "Microsoft", "Google"];

const workflow = [
  {
    step: "The Plan",
    desc: "We location scout video interview locations beforehand, take photos, then work together on a call to discuss the best options. We align on message, length, tone and where the video will be used — website, SNS, trade shows.",
  },
  {
    step: "The Shoot",
    desc: "On the day we ask the questions in Japanese or English, ensuring the interviewee is relaxed and comfortable. Or we set up a remote feed for a producer or director based overseas to monitor the shoot or ask questions directly.",
  },
  {
    step: "The Edit",
    desc: "Native Japanese and English editors cut to your house style or to a pre-agreed script. We deliver in all formats — 16:9 for YouTube and websites, 9:16 for social — via Google Drive, Dropbox, MASV, Frame.io, or hard disk by courier.",
  },
];

const brandFilms = [
  { src: "https://www.youtube.com/embed/t-VSxoBQlRA?rel=0", title: "Corporate branding video — Filming in Japan", caption: "Brand film — Japan" },
  { src: "https://www.youtube.com/embed/m1KV1UTpSzU?rel=0", title: "HP Asian Influencer Series — Filming in Japan", caption: "HP — Asian Influencer Series" },
  { src: "https://player.vimeo.com/video/836766996?h=ccb3b1ab04", title: "White Express brand film — Filming in Japan", caption: "White Express — Brand Film" },
  { src: "https://player.vimeo.com/video/517509247", title: "Craft brewery and distillery brand film — Japan", caption: "Craft Brewery & Distillery — Brand Film" },
  { src: "https://player.vimeo.com/video/888141337?h=7f88a78ba3", title: "Handmade knife company brand film — Japan", caption: "Handmade Knife Company — Brand Film" },
];

const recruitment = [
  {
    src: "https://www.youtube.com/embed/UbkuSD-ht1U?rel=0",
    title: "Google Japan recruitment video — Filming in Japan",
    caption: "Google Japan — Recruitment Video",
    desc: "Recruitment video for Google Japan, hearing from employees at their Inzai data centre near Tokyo about why they think Google is the right place for them.",
  },
  {
    src: "https://www.youtube.com/embed/ZDKXfIE_b1Y?rel=0",
    title: "EY employee profile video — Filming in Japan",
    caption: "EY — Employee Profile Series",
    desc: "Part of a series of six recruit and employee profile videos for EY — going beyond the workplace to discover the passion that drives their life and work.",
  },
];

function VideoEmbed({ src, title, dark = false }: { src: string; title: string; dark?: boolean }) {
  return (
    <div className="relative w-full aspect-[16/9]" style={{ backgroundColor: dark ? "#241a12" : "#0d0a07" }}>
      <iframe
        src={src}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        allowFullScreen
        loading="lazy"
        className="absolute inset-0 w-full h-full"
        style={{ border: 0 }}
      />
    </div>
  );
}

export default function CorporateBrandingPage() {
  return (
    <div style={{ backgroundColor: "#fdf8f3" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "How do you ensure the video aligns with our company's message?", "acceptedAnswer": { "@type": "Answer", "text": "We begin by meeting with your marketing team or production agency to understand the core message and outcomes. We also discuss where the video will be used — website, SNS, trade shows — so the length, style and tone are aligned with your overall marketing strategy." } },
            { "@type": "Question", "name": "Do you always need a script and storyboard?", "acceptedAnswer": { "@type": "Answer", "text": "Not always. We're comfortable with a documentary style, but using a storyboard ensures the scenes support your message and avoids surprises in the edit stage." } },
            { "@type": "Question", "name": "What factors determine the budget for a corporate video in Japan?", "acceptedAnswer": { "@type": "Answer", "text": "The main driver is the number of production days and deliverables. Other factors include preproduction requirements, talent, locations, equipment and whether professional actors are needed. We can also tailor a plan to work within a fixed budget." } },
            { "@type": "Question", "name": "Can you source talent and locations for us?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We source both Japanese and international talent, as well as studios and outdoor locations across Japan. We specialise in working with non-professional talent — your own staff or influencers — to create authentic and engaging content." } },
            { "@type": "Question", "name": "What size crew should we expect on the day?", "acceptedAnswer": { "@type": "Answer", "text": "Crew size depends on budget and the type of production. We can scale up when needed, but we also keep teams small when working with non-professional talent, helping them feel relaxed and natural on camera." } },
            { "@type": "Question", "name": "Can interviews be directed remotely by our overseas team?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We can link overseas directors to the set via remote video, enabling them to observe, give feedback or ask interview questions directly." } },
            { "@type": "Question", "name": "How long does it take to produce a corporate video in Japan?", "acceptedAnswer": { "@type": "Answer", "text": "A small-scale shoot can take 2–3 weeks from planning to delivery; larger productions 1–2 months. We recommend starting the conversation at least 4–6 weeks before your target delivery date." } },
            { "@type": "Question", "name": "Do we need filming permits in Japan?", "acceptedAnswer": { "@type": "Answer", "text": "If we are putting up a tripod then permits are generally required in public locations. With a small handheld crew of 3–5 people, permits are often not required — though there are many exceptions. We advise on a case-by-case basis." } },
            { "@type": "Question", "name": "What are the typical costs for a corporate video in Japan?", "acceptedAnswer": { "@type": "Answer", "text": "Costs depend on crew size, equipment, locations and post-production requirements. We provide transparent quotes and can tailor packages for different budgets while maintaining high production value." } }
          ]
        }) }}
      />

      {/* Hero: headline on cream, tall photo with vertical Japanese on the right */}
      <section className="border-b" style={{ borderColor: "#1c1208" }}>
        <div className="fij-wrap flex flex-wrap lg:flex-nowrap gap-x-12">
          <div className="flex-[7_1_560px] pt-16 pb-12 lg:pt-24 lg:pb-14 flex flex-col justify-between gap-12">
            <div>
              <p className="text-sm font-medium mb-8" style={{ color: "#6b5a48" }}>Corporate Video · Tokyo · Japan</p>
              <Title as="h1" className="fij-h1">Corporate Video Production in Japan</Title>
            </div>
            <div className="flex flex-wrap items-end gap-x-12 gap-y-8">
              <p className="fij-lede flex-[1_1_340px]" style={{ color: "#4a3a2a" }}>
                Corporate interviews, brand films and recruitment videos for global companies operating in Japan.
                Bilingual team, broadcast-quality results.
              </p>
              <a href="#enquire" className="fij-btn shrink-0">Get a free quote</a>
            </div>
          </div>
          <div className="relative flex-[5_1_380px] min-h-[420px] lg:min-h-[640px] -mx-[clamp(20px,4vw,48px)] lg:ml-0 overflow-hidden" style={{ backgroundColor: "#0d0a07" }}>
            <Image
              src="/images/corporate_video_tokyo.jpeg"
              alt=""
              fill
              priority
              className="object-cover object-[center_20%]"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div aria-hidden="true" className="absolute inset-y-0 right-0 w-40" style={{ background: "linear-gradient(to left, rgba(13,10,7,0.45), rgba(13,10,7,0))" }} />
            <p
              lang="ja"
              aria-hidden="true"
              className="absolute top-8 right-6 font-jp font-bold text-[26px] lg:text-[30px] tracking-[0.18em]"
              style={{ writingMode: "vertical-rl", color: "#fdf8f3", textShadow: "0 1px 12px rgba(0,0,0,0.35)" }}
            >
              日本の企業映像制作
            </p>
          </div>
        </div>
      </section>

      <TrustedBy clients={clients} />

      {/* Corporate interviews + how it works, beside the sticky enquiry form */}
      <section className="border-b" style={{ borderColor: "#1c1208" }}>
        <div className="fij-wrap py-20 md:py-28 grid lg:grid-cols-[minmax(0,1fr)_420px] gap-14 xl:gap-20">
          <div className="min-w-0 space-y-24">
            {/* 01 Corporate Interviews */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-14">
              <SectionLabel num="01" label="企業インタビュー" />
              <div className="flex-1 min-w-0">
                <Title className="fij-h2 mb-8">Corporate Interviews</Title>
                <p className="fij-lede max-w-2xl mb-5" style={{ color: "#4a3a2a" }}>
                  CEO interviews, exec profiles, thought leadership pieces and case study interviews — filmed at your client&apos;s office, a studio, or anywhere in Japan. Our Japanese and English bilingual crew ensure the interviewee is relaxed and delivers genuine, on-message answers.
                </p>
                <p className="fij-lede max-w-2xl mb-12" style={{ color: "#4a3a2a" }}>
                  We can link overseas producers or directors to the set via remote video, enabling them to observe, give feedback or ask questions directly. Small crew to keep your subjects comfortable.
                </p>
                <figure>
                  <VideoEmbed
                    src="https://player.vimeo.com/video/561655197?h=d1ca57fb5c"
                    title="Corporate interview video samples — Filming in Japan"
                  />
                  <figcaption className="mt-3 text-[15px] font-semibold">Selected corporate interview clips — Tokyo</figcaption>
                </figure>
              </div>
            </div>

            {/* 02 How it works */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-14">
              <SectionLabel num="02" label="制作の流れ" />
              <div className="flex-1 min-w-0">
                <Title className="fij-h2 mb-12">How it works</Title>
                <ol>
                  {workflow.map((w, i) => (
                    <li key={w.step} className={`flex gap-6 py-6 border-t ${i === workflow.length - 1 ? "border-b" : ""}`} style={{ borderColor: "#1c1208" }}>
                      <span className="w-8 shrink-0 pt-1.5 text-[13px] font-semibold tabular-nums" style={{ color: "#e95228" }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="fij-h3 mb-2">{w.step}</h3>
                        <p className="text-[15px] leading-relaxed" style={{ color: "#4a3a2a" }}>{w.desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
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
              <LandingContactForm service="Corporate Video Japan" />
            </div>
          </aside>
        </div>
      </section>

      {/* 03 Brand Films — dark alternating rows */}
      <Section num="03" label="ブランド映像" tone="night" aria-labelledby="brand-films-heading">
        <div className="flex flex-wrap items-end justify-between gap-x-16 gap-y-6 mb-16">
          <Title id="brand-films-heading" tone="night" className="fij-h2 flex-[1_1_320px]">Brand Films</Title>
          <p className="fij-lede flex-[1.4_1_420px] max-w-2xl" style={{ color: "rgba(253,248,243,0.78)" }}>
            Brand films, product launches, influencer series and commercial content for global brands operating in Japan. We use a documentary approach — finding the authentic story behind the brand — rather than scripted advertising. Trusted by HP, Canon, Google and others to connect with Japanese and international audiences.
          </p>
        </div>
        {brandFilms.map((v, i) => (
          <article
            key={v.src}
            className={`flex flex-wrap items-center gap-x-14 gap-y-6 py-12 border-t ${i % 2 ? "flex-row-reverse" : ""}`}
            style={{ borderColor: "rgba(253,248,243,0.25)" }}
          >
            <div className="flex-[1.6_1_440px] min-w-0">
              <VideoEmbed src={v.src} title={v.title} dark />
            </div>
            <div className="flex-[1_1_260px]">
              <p className="text-[13px] font-semibold tabular-nums mb-4" style={{ color: "#f07a52" }}>{String(i + 1).padStart(2, "0")}</p>
              <h3 className="text-[26px] lg:text-[36px] leading-[1.1] font-semibold tracking-[-0.03em]">{v.caption}</h3>
            </div>
          </article>
        ))}
      </Section>

      {/* 04 Recruitment & Employee Profiles — image-first cards */}
      <Section num="04" label="採用・社員紹介" aria-labelledby="recruitment-heading">
        <Title id="recruitment-heading" className="fij-h2 mb-8">Recruitment &amp; Employee Profiles</Title>
        <p className="fij-lede max-w-2xl mb-14" style={{ color: "#4a3a2a" }}>
          Our documentary style ditches the teleprompters and set phrases for genuine comments from your employees on your company values, what motivates them and what makes your company the place to work.
        </p>
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-14">
          {recruitment.map((v) => (
            <article key={v.src} className="border-t-2 pt-6" style={{ borderColor: "#1c1208" }}>
              <VideoEmbed src={v.src} title={v.title} />
              <h3 className="fij-h3 mt-6 mb-3">{v.caption}</h3>
              <p className="text-[15px] leading-relaxed" style={{ color: "#4a3a2a" }}>{v.desc}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* 05 Client feedback */}
      <Section num="05" label="お客様の声" bordered aria-labelledby="feedback-heading">
        <h2 id="feedback-heading" className="sr-only">Client feedback</h2>
        <figure className="mb-16">
          <blockquote className="text-[28px] sm:text-[38px] lg:text-[48px] leading-[1.12] font-semibold tracking-[-0.035em] mb-7">
            <span style={{ color: "#e95228" }}>&ldquo;</span>{testimonials[0].quote}<span style={{ color: "#e95228" }}>&rdquo;</span>
          </blockquote>
          <figcaption className="text-[15px]" style={{ color: "#6b5a48" }}>{testimonials[0].credit}</figcaption>
        </figure>
        <div className="flex flex-wrap gap-x-16 gap-y-10 pt-8 border-t" style={{ borderColor: "#1c1208" }}>
          {testimonials.slice(1).map((t) => (
            <figure key={t.credit} className="flex-[1_1_320px]">
              <blockquote className="text-[22px] leading-snug font-semibold tracking-[-0.02em] mb-3">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="text-sm" style={{ color: "#6b5a48" }}>{t.credit}</figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* 06 Our equipment */}
      <Section num="06" label="使用機材" tone="sand" aria-labelledby="equipment-heading">
        <div className="flex flex-wrap gap-x-16 gap-y-10">
          <div className="flex-[1_1_300px]">
            <Title id="equipment-heading" className="fij-h2 mb-6">Our equipment</Title>
            <p className="fij-lede max-w-md" style={{ color: "#4a3a2a" }}>
              We shoot on professional cinema cameras and are happy to work with a specific camera you require. Our in-house kit includes:
            </p>
          </div>
          <ul className="flex-[1.5_1_420px] fij-cells self-start" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))" }}>
            {equipment.map((item, i) => (
              <li key={item} className="p-5 sm:p-6 flex flex-col gap-5">
                <span className="text-[13px] font-semibold tabular-nums" style={{ color: "#e95228" }}>{String(i + 1).padStart(2, "0")}</span>
                <span className="text-base sm:text-[19px] leading-snug font-semibold tracking-[-0.015em]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* 07 FAQ */}
      <Section num="07" label="よくある質問" aria-labelledby="faq-heading">
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

      {/* 08 Prefer to talk? */}
      <Section num="08" label="お問い合わせ" tone="ink" aria-labelledby="talk-heading">
        <div className="flex flex-wrap items-end justify-between gap-x-16 gap-y-8">
          <div>
            <h2 id="talk-heading" className="fij-h2 mb-4">Prefer to talk?</h2>
            <p className="fij-lede" style={{ color: "rgba(253,248,243,0.78)" }}>WhatsApp or email — we reply fast.</p>
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
