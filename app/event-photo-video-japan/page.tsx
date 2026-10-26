import type { Metadata } from "next";
import EventPricing from "@/components/EventPricing";
import EventsCovered from "@/components/EventsCovered";
import VerticalVideoTile from "@/components/VerticalVideoTile";
import Image from "next/image";
import { Section, SectionLabel, Title, Kicker, TrustedBy } from "@/components/editorial";
import Footer from "@/components/Footer";
import LandingContactForm from "@/components/LandingContactForm";
import GoogleReviews from "@/components/GoogleReviews";
import PhotoGallery from "@/components/PhotoGallery";

export const metadata: Metadata = {
  title: "Tokyo Event Photographer & Videographer",
  description: "Bilingual Tokyo event photographer and videographer for conferences, galas and launches. Same-day photos, highlight videos. Trusted by PwC, Riot Games, Celonis.",
  alternates: {
    canonical: "https://www.filminginjapan.com/event-photo-video-japan",
    languages: {
      "en": "https://www.filminginjapan.com/event-photo-video-japan",
      "ja": "https://www.filminginjapan.com/jp/event-photo-video-japan",
      "x-default": "https://www.filminginjapan.com/event-photo-video-japan",
    },
  },
};

const services = [
  "Corporate event photography",
  "Story-led highlight films, edited by our corporate video team",
  "Photography-only coverage — video not required",
  "Multi-camera coverage for conferences and panels",
  "Executive interviews and keynote documentation",
  "Same-day social media edits and recap videos",
  "Live streaming and hybrid event support",
  "Sound bite comments to camera from attendees",
];

const differentiators: { title: string; desc: string; dsMark?: boolean; link?: { href: string; label: string } }[] = [
  {
    title: "Filmmakers, not just camera operators",
    desc: "Our crew makes corporate films and broadcast documentaries. We bring that eye for story, light and sound to your event — interviews that sound good, edits with a structure, and photos that are composed, not just captured.",
    link: { href: "https://www.move-ment.co", label: "See our documentary and broadcast work" },
  },
  {
    title: "Bilingual crew",
    desc: "We communicate smoothly in English and Japanese — coordinating directly with venues, local AV teams, and staff. No friction, no delays on the day.",
  },
  {
    title: "Corporate-ready workflow",
    desc: "We understand NDAs, VIP protocol, and brand consistency. Experienced working at events involving government delegations, C-suite executives and international brands.",
  },
  {
    title: "Flexible scale",
    desc: "From a single photographer to a full multi-camera video crew. From a single day to multi-day, multi-location events across Japan. We scale to your event.",
  },
  {
    title: "Trusted by global brands",
    desc: "Our clients include government delegations, international NGOs, and multinational companies hosting events in Tokyo. We know what's expected at high-profile events.",
  },
  {
    title: "Diplomatic missions",
    dsMark: true,
    desc: "Move-ment is designated by Japan's Ministry of Foreign Affairs as a store for consumption tax exemption for foreign diplomatic missions and international organisations (designated September 2026). Embassies, consulates and UN agencies holding a MOFA tax exemption card can procure our services free of Japanese consumption tax.",
  },
];

const projects = [
  {
    title: "EVO Japan 2024 – Riot Games 2XKO Reveal",
    venue: "Ariake GYM-EX, Tokyo · 2024",
    desc: "Recap video for a fighting game tournament in Tokyo, edited to carry the scale of the venue, the atmosphere on the competition floor and the reaction of the crowd.",
    vimeoId: "1212259773",
    vimeoHash: "e3a9d1a2ff",
    img: null,
  },
  {
    title: "IHIF Asia – International Hospitality Investment Forum",
    venue: "Kimpton Shinjuku Tokyo · 2025",
    desc: "Event highlight video, full photography coverage, and standalone attendee testimonial-style recap videos for the IHIF conference — all delivered from a single coordinated shoot.",
    vimeoId: "1063107227",
    vimeoHash: "c0bc991380",
    img: null,
  },
  {
    title: "CITC CLSA Tokyo Forum",
    venue: "Grand Hyatt Tokyo · 2024 · 3-day event",
    desc: "Promotional video filmed over 3 days with comments from staff, attendees and speakers at locations selected to convey the event atmosphere. Edited with Japanese and English subtitles, with careful attention to attendee visibility requirements.",
    vimeoId: "959287158",
    vimeoHash: "1368289498",
    img: null,
  },
  {
    title: "Princeton Digital Group – Data Centre Opening, Saitama",
    venue: "PDG data centre, Saitama · 2025",
    desc: "Digest video of the opening ceremony, plus photo coverage with a fast-turnaround social media photo selection delivered shortly after the event finished.",
    vimeoId: "1079354745",
    vimeoHash: "17c53b18eb",
    img: null,
  },
];

const photoEvents = [
  {
    label: "WPI Global Summit 2025 (Worldwide Partners)",
    location: "Kimpton Shinjuku Tokyo",
    photos: [
      "/images/events/wpi/Tokyo-corporate-event-photography1.jpg",
      "/images/events/wpi/Tokyo-corporate-event-photography4.jpg",
      "/images/events/wpi/Tokyo-corporate-event-photography5.jpg",
      "/images/events/wpi/Tokyo-corporate-event-photography7.jpg",
      "/images/events/wpi/Tokyo-corporate-event-photography8.jpg",
      "/images/events/wpi/Tokyo-corporate-event-photography10.jpg",
      "/images/events/wpi/Tokyo-corporate-event-photography20.jpg",
      "/images/events/wpi/Tokyo-corporate-event-photography21.jpg",
      "/images/events/wpi/Tokyo-corporate-event-photography22.jpg",
    ],
  },
  {
    label: "Irish government trade delegation (Bord Bia)",
    location: "Hotel New Otani Tokyo",
    photos: [
      "/images/events/ireland/event_photography_tokyo_japan_17.jpg",
      "/images/events/ireland/event_photography_tokyo_japan_11.jpg",
      "/images/events/ireland/event_photography_tokyo_japan_10.jpg",
      "/images/events/ireland/event_photography_tokyo_japan_12.jpg",
      "/images/events/ireland/event_photography_tokyo_japan_13.jpg",
      "/images/events/ireland/event_photography_tokyo_japan_20.jpg",
    ],
  },
  {
    label: "Red Bull esports gaming event",
    location: "Red Bull Gaming Sphere Tokyo",
    photos: [
      "/images/events/esports/event_photography_tokyo_japan_16.jpg",
      "/images/events/esports/event_photography_tokyo_japan_8.jpg",
      "/images/events/esports/event_photography_tokyo_japan_20.jpg",
      "/images/events/esports/event_photography_tokyo_japan_21.jpg",
      "/images/events/esports/event_photography_tokyo_japan_22.jpg",
      "/images/events/esports/event_photography_tokyo_japan_23.jpg",
      "/images/events/esports/tokyo-event-esports-photography_1.jpg",
      "/images/events/esports/tokyo-event-esports-photography_3.jpg",
      "/images/events/esports/tokyo-event-esports-photography_5.jpg",
    ],
  },
  {
    label: "AVPN Commission on Asian Philanthropy",
    location: "Happo-en, Tokyo",
    photos: [
      "/images/events/philanthropic/tokyo_event_photography_happoen1.jpg",
      "/images/events/philanthropic/tokyo_event_photography_happoen2.jpg",
      "/images/events/philanthropic/tokyo_event_photography_happoen3.jpg",
      "/images/events/philanthropic/tokyo_event_photography_happoen4.jpg",
      "/images/events/philanthropic/tokyo_event_photography_happoen5.jpg",
      "/images/events/philanthropic/tokyo_event_photography_happoen6.jpg",
      "/images/events/philanthropic/tokyo_event_photography_happoen7.jpg",
      "/images/events/philanthropic/tokyo_event_photography_happoen8.jpg",
      "/images/events/philanthropic/tokyo_event_photography_happoen10.jpg",
    ],
  },
  {
    label: "JICE government trade delegation from Oman",
    location: "Edo-Tokyo Museum & ministries",
    photos: [
      "/images/events/oman/event_photography_tokyo_japan_1.jpg",
      "/images/events/oman/event_photography_tokyo_japan_3.jpg",
      "/images/events/oman/event_photography_tokyo_japan_4.jpg",
      "/images/events/oman/event_photography_tokyo_japan_5.jpg",
      "/images/events/oman/event_photography_tokyo_japan_jice_10.jpg",
      "/images/events/oman/event_photography_tokyo_japan_jice_11.jpg",
      "/images/events/oman/event_photography_tokyo_japan_jice_12.jpg",
      "/images/events/oman/event_photography_tokyo_japan_jice_13.jpg",
      "/images/events/oman/event_photography_tokyo_japan_jice_14.jpg",
    ],
  },
  {
    label: "London Mayor visit with the British Chamber of Commerce Japan",
    location: "British Embassy & teamLab Borderless",
    photos: [
      "/images/events/bccj/tokyo_event_photo_BCCJ_london_3.jpg",
      "/images/events/bccj/tokyo_event_photo_BCCJ_london_4.jpg",
      "/images/events/bccj/tokyo_event_photo_BCCJ_london_5.jpg",
      "/images/events/bccj/tokyo_event_photo_BCCJ_london_6.jpg",
      "/images/events/bccj/tokyo_event_photo_BCCJ_london_7.jpg",
      "/images/events/bccj/tokyo_event_photo_BCCJ_london_8.jpg",
      "/images/events/bccj/tokyo_event_photo_BCCJ_london_9.jpg",
      "/images/events/bccj/tokyo_event_photo_BCCJ_london_1.jpg",
      "/images/events/bccj/tokyo_event_photo_BCCJ_london_2.jpg",
    ],
  },
  {
    label: "University of Michigan Alumni Association event",
    location: "ANA InterContinental Tokyo",
    photos: [
      "/images/events/michigan/tokyo_event_photo_University_Michigan_1.jpg",
      "/images/events/michigan/tokyo_event_photo_University_Michigan_2.jpg",
      "/images/events/michigan/tokyo_event_photo_University_Michigan_3.jpg",
      "/images/events/michigan/tokyo_event_photo_University_Michigan_4.jpg",
      "/images/events/michigan/tokyo_event_photo_University_Michigan_5.jpg",
      "/images/events/michigan/tokyo_event_photo_University_Michigan_6.jpg",
      "/images/events/michigan/tokyo_event_photo_University_Michigan_7.jpg",
      "/images/events/michigan/tokyo_event_photo_University_Michigan_8.jpg",
      "/images/events/michigan/tokyo_event_photo_University_Michigan_9.jpg",
    ],
  },
];

const faqs = [
  {
    q: "What types of events do you cover in Japan?",
    a: "Global summits, press conferences, multi-day multi-location conferences, product launches, awards ceremonies, corporate galas, government delegations, NGO events and private corporate gatherings. From 20 guests to 2,000.",
  },
  {
    q: "How quickly do you deliver?",
    a: "SNS photo selects are delivered same day. Video clips, interview clips and full photo archives are delivered within 24 hours of the event.",
  },
  {
    q: "Can you provide both photography and video on the same day?",
    a: "Yes — one coordinated bilingual team covers both stills and motion. This keeps costs down and ensures a consistent look and feel across all your event assets.",
  },
  {
    q: "Do you offer photography only, without video?",
    a: "Yes. Many clients book photo and video together, but photography-only coverage is just as welcome — from a single photographer to a multi-photographer team for larger events. You still get same-day social selects and a full edited archive on the same fast timeline. Just tell us in your enquiry and we'll quote photography on its own.",
  },
  {
    q: "Can you handle multi-day or multi-location events?",
    a: "Yes. We've covered events spanning multiple days and multiple venues across Tokyo and Japan, scaling crew and equipment to match.",
  },
  {
    q: "Can you support live streaming or hybrid events?",
    a: "Yes. We support live streaming setups and hybrid events where remote attendees join in real time. Broadcast-quality feeds for internal and public-facing streams. Just mention it in your enquiry.",
  },
  {
    q: "How do you handle VIP protocol and NDAs?",
    a: "We understand VIP protocol, confidentiality requirements and brand consistency. We're experienced at events involving government delegations, C-suite executives and high-profile international brands.",
  },
  {
    q: "How do you coordinate with Japanese venue AV teams?",
    a: "Our bilingual crew liaises directly with Japanese venue and AV staff, removing the friction that slows down international production teams — particularly valuable for overseas clients managing events remotely.",
  },
  {
    q: "Can you film executive interviews at the event?",
    a: "Yes. We set up dedicated interview spots at the venue for planned executive interviews and spontaneous attendee soundbites — adding depth to your event coverage and giving you material for future campaigns.",
  },
];

const clients = ["Sony", "HP", "Canon", "NEC", "JLL", "Accenture", "Microsoft", "Google"];

export default function EventVideoPage() {
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
            "acceptedAnswer": { "@type": "Answer", "text": faq.a }
          }))
        }) }}
      />

      {/* Hero: headline on cream, tall photo with vertical Japanese on the right */}
      <section className="border-b" style={{ borderColor: "#1c1208" }}>
        <div className="fij-wrap flex flex-wrap lg:flex-nowrap gap-x-12">
          <div className="flex-[7_1_560px] pt-16 pb-12 lg:pt-24 lg:pb-14 flex flex-col justify-between gap-12">
            <div>
              <p className="text-sm font-medium mb-8" style={{ color: "#6b5a48" }}>Event Coverage — Tokyo · Japan</p>
              <Title as="h1" className="fij-h1">Corporate event photo &amp; video in Japan</Title>
            </div>
            <div className="flex flex-wrap items-end gap-x-12 gap-y-8">
              <div className="flex-[1_1_340px]">
                <p className="text-xl font-semibold tracking-[-0.01em] leading-snug mb-2.5">
                  Event coverage by a corporate and documentary film team.
                </p>
                <p className="fij-lede" style={{ color: "#4a3a2a" }}>
                  Our bilingual Tokyo crew photographs and films summits, conferences and galas — and edits highlight videos with a story, not just a recap.
                </p>
              </div>
              <a href="#enquire" className="fij-btn shrink-0">Get a free quote</a>
            </div>
          </div>
          <div className="relative flex-[5_1_380px] min-h-[420px] lg:min-h-[640px] -mx-[clamp(20px,4vw,48px)] lg:ml-0 overflow-hidden" style={{ backgroundColor: "#0d0a07" }}>
            <Image
              src="/images/event_top.jpg"
              alt="Corporate event photography and video coverage at a conference in Tokyo, Japan"
              fill
              priority
              className="object-cover object-[55%_50%]"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div aria-hidden="true" className="absolute inset-y-0 right-0 w-40" style={{ background: "linear-gradient(to left, rgba(13,10,7,0.45), rgba(13,10,7,0))" }} />
            <p
              lang="ja"
              aria-hidden="true"
              className="absolute top-8 right-6 font-jp font-bold text-[26px] lg:text-[30px] tracking-[0.18em]"
              style={{ writingMode: "vertical-rl", color: "#fdf8f3", textShadow: "0 1px 12px rgba(0,0,0,0.35)" }}
            >
              企業イベントの写真と映像
            </p>
          </div>
        </div>
      </section>

      <TrustedBy clients={clients} />

      {/* Deliverables + why us, beside the sticky enquiry form */}
      <section id="full-production" className="border-b" style={{ borderColor: "#1c1208" }}>
        <div className="fij-wrap py-20 md:py-28 grid lg:grid-cols-[minmax(0,1fr)_420px] gap-14 xl:gap-20">
          <div className="min-w-0 space-y-24">
            {/* 01 What we deliver */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-14">
              <SectionLabel num="01" label="撮影内容" />
              <div className="flex-1 min-w-0">
                <Title className="fij-h2 mb-8">Every moment captured. With style</Title>
                <p className="fij-lede max-w-xl mb-12" style={{ color: "#4a3a2a" }}>
                  With deep experience covering events for international clients in Japan, we understand the importance
                  of delivering visuals that reflect your brand standards.
                </p>
                <ol className="fij-cells" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(50%, 220px), 1fr))" }}>
                  {services.map((s, i) => (
                    <li key={i} className="p-4 pb-6 sm:p-6 sm:pb-8 flex flex-col gap-5 sm:gap-7 sm:min-h-[150px]">
                      <span className="text-[13px] font-semibold tabular-nums" style={{ color: "#e95228" }}>{String(i + 1).padStart(2, "0")}</span>
                      <span className="text-base sm:text-[19px] leading-snug font-semibold tracking-[-0.015em]">{s}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* 02 Why clients choose us */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-14">
              <SectionLabel num="02" label="選ばれる理由" />
              <div className="flex-1 min-w-0">
                <Title className="fij-h2 mb-12">Why clients choose us</Title>
                <div>
                  {differentiators.map((d, i) => (
                    <div key={i} className={`flex gap-6 py-6 border-t ${i === differentiators.length - 1 ? "border-b" : ""}`} style={{ borderColor: "#1c1208" }}>
                      <span className="w-8 shrink-0 pt-1.5 text-[13px] font-semibold tabular-nums" style={{ color: "#e95228" }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="fij-h3 mb-2 flex items-center gap-3">
                          {d.title}
                          {d.dsMark && <Image src="/images/ds-mark.svg" alt="DS designated store mark" width={36} height={29} unoptimized />}
                        </h3>
                        <p className="text-[15px] leading-relaxed" style={{ color: "#4a3a2a" }}>{d.desc}</p>
                        {d.link && (
                          <a href={d.link.href} target="_blank" rel="noopener" className="fij-link inline-block mt-3 text-[15px]">{d.link.label}</a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Photos + attendee comments video */}
                <div className="grid grid-cols-2 gap-4 mt-12">
                  <div className="relative overflow-hidden aspect-[4/5]">
                    <Image src="/images/event_side1.jpeg" alt="Event coverage in Japan" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 360px" />
                  </div>
                  <div className="relative overflow-hidden aspect-[4/5]">
                    <Image src="/images/event_side2.jpeg" alt="Corporate event photography Japan" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 360px" />
                  </div>
                </div>
                <figure className="mt-4">
                  <div className="relative aspect-[16/9]" style={{ backgroundColor: "#0d0a07" }}>
                    <iframe
                      src="https://player.vimeo.com/video/1063107056?h=9932edce4c&title=0&byline=0&portrait=0"
                      className="absolute inset-0 w-full h-full"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                      title="Event attendee comments — Filming in Japan"
                    />
                  </div>
                  <figcaption className="mt-3 text-[15px] font-semibold">Comments from event attendees taken during break time</figcaption>
                </figure>
              </div>
            </div>
          </div>

          {/* Sticky enquiry form */}
          <aside>
            <div id="enquire" className="sticky top-24 scroll-mt-24 border p-8 lg:p-10" style={{ backgroundColor: "#fff", borderColor: "#1c1208" }}>
              <Title as="h2" className="text-[28px] leading-tight font-semibold tracking-[-0.03em] mb-2">Enquire about your event</Title>
              <p className="text-[15px] mb-6" style={{ color: "#4a3a2a" }}>
                Tell us about your event. We reply within 24 hours.
              </p>
              <LandingContactForm service="Event Photo & Video Japan" />
            </div>
          </aside>
        </div>
      </section>

      {/* 03 Recent projects */}
      <Section num="03" label="最近の実績" tone="night" aria-labelledby="projects-heading">
        <Title id="projects-heading" tone="night" className="fij-h2 mb-16">Recent projects</Title>
        {projects.map((p, i) => (
          <article
            key={p.title}
            className={`flex flex-wrap items-center gap-x-14 gap-y-8 py-12 border-t ${i % 2 ? "flex-row-reverse" : ""}`}
            style={{ borderColor: "rgba(253,248,243,0.25)" }}
          >
            <div className="relative flex-[1.25_1_440px] aspect-[16/9]" style={{ backgroundColor: "#241a12" }}>
              <iframe
                src={`https://player.vimeo.com/video/${p.vimeoId}?h=${p.vimeoHash}&title=0&byline=0&portrait=0`}
                className="absolute inset-0 w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title={p.title}
                loading="lazy"
              />
            </div>
            <div className="flex-[1_1_340px]">
              <p className="text-sm font-medium mb-4" style={{ color: "#f07a52" }}>{p.venue}</p>
              <h3 className="text-[26px] lg:text-[36px] leading-[1.1] font-semibold tracking-[-0.03em] mb-4">{p.title}</h3>
              <p className="text-base leading-relaxed" style={{ color: "rgba(253,248,243,0.78)" }}>{p.desc}</p>
            </div>
          </article>
        ))}
      </Section>

      {/* 04 Photography events */}
      <Section num="04" label="写真撮影の実績" aria-labelledby="photo-events-heading">
        <div className="flex flex-wrap items-end justify-between gap-x-16 gap-y-4 mb-14">
          <Title id="photo-events-heading" className="fij-h2">Photography events</Title>
          <p className="text-base" style={{ color: "#6b5a48" }}>A selection of recent event photography clients:</p>
        </div>
        <PhotoGallery events={photoEvents} lang="en" />
      </Section>

      {/* 05 Client feedback */}
      <Section num="05" label="お客様の声" bordered aria-labelledby="feedback-heading">
        <h2 id="feedback-heading" className="sr-only">Client feedback</h2>
        <figure className="mb-16">
          <blockquote className="text-[30px] sm:text-[40px] lg:text-[52px] leading-[1.12] font-semibold tracking-[-0.035em] mb-7">
            <span style={{ color: "#e95228" }}>&ldquo;</span>Chris delivered exceptional photography and video coverage across our entire 3-day event. Beyond the visuals, he also helped bridge language gaps with local venue staff and AV teams — something that proved invaluable to our onsite execution.<span style={{ color: "#e95228" }}>&rdquo;</span>
          </blockquote>
          <figcaption className="text-[15px]" style={{ color: "#6b5a48" }}>Events Director · Global Advertising Organisation · Tokyo</figcaption>
        </figure>
        <div className="flex flex-wrap gap-x-16 gap-y-8 pt-8 border-t" style={{ borderColor: "#1c1208" }}>
          <figure className="flex-[1_1_320px]">
            <blockquote className="text-[22px] leading-snug font-semibold tracking-[-0.02em] mb-3">
              &ldquo;The photos look great! We are very happy with the outcome.&rdquo;
            </blockquote>
            <figcaption className="text-sm" style={{ color: "#6b5a48" }}>Client Partner · Marketing Agency</figcaption>
          </figure>
          <div className="flex-[2_1_480px] min-w-0">
            <p className="text-sm font-medium mb-4" style={{ color: "#6b5a48" }}>Google reviews</p>
            <GoogleReviews appId="94fa8f98-15eb-4b6a-8318-c0d4579384d8" />
          </div>
        </div>
      </Section>

      {/* 06 Events we've covered — searchable venue list */}
      <EventsCovered lang="en" num="06" />

      {/* 07 Typical costs */}
      <EventPricing lang="en" num="07" />

      {/* 08 Vertical social clips */}
      <Section num="08" label="SNS用動画" tone="night" aria-labelledby="social-clips-heading">
        <div className="flex flex-wrap items-end gap-x-16 gap-y-12">
          <div className="flex-[1_1_320px]">
            <Kicker tone="night">Social clips</Kicker>
            <Title id="social-clips-heading" tone="night" className="fij-h2 mb-6">Vertical edits, ready to post</Title>
            <p className="fij-lede max-w-md" style={{ color: "rgba(253,248,243,0.78)" }}>
              Alongside your main event coverage, we can cut short vertical clips — captioned and colour-graded, ready for Instagram, LinkedIn and internal channels. Just mention it in your enquiry.
            </p>
          </div>
          <div className="flex-[1.3_1_460px] grid grid-cols-3 gap-3 sm:gap-4 items-end">
            {[
              { src: "/videos/event-social-highlights3.mp4", poster: "/videos/event-social-highlights3-poster.jpg", label: "Conference highlights", autoPlay: true, offset: "mb-12" },
              { src: "/videos/26_4_21_SNS%2030p_2_siteb.mp4", poster: "/videos/26_4_21_SNS%2030p_2_siteb.jpg", label: "Networking recap", offset: "" },
              { src: "/videos/26_4_21_SNS%2030p_3_siteb.mp4", poster: "/videos/26_4_21_SNS%2030p_3_siteb.jpg", label: "Breakout sessions highlights", offset: "mb-24" },
            ].map((v, i) => (
              <div key={i} className={v.offset}>
                <VerticalVideoTile src={v.src} poster={v.poster} label={v.label} autoPlay={v.autoPlay} />
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 09 FAQ */}
      <Section num="09" label="よくある質問" aria-labelledby="faq-heading">
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

      {/* 10 Prefer to talk? */}
      <Section num="10" label="お問い合わせ" tone="ink" aria-labelledby="talk-heading">
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
