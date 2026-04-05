import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/Footer";
import LandingContactForm from "@/components/LandingContactForm";
import GoogleReviews from "@/components/GoogleReviews";
import PhotoGallery from "@/components/PhotoGallery";

export const metadata: Metadata = {
  title: "Corporate Event Photography & Video Tokyo Japan",
  description: "Bilingual corporate event photography and video in Tokyo and across Japan. Conferences, summits, product launches, galas. Same-day edits. Trusted by global brands.",
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
  "Corporate event photography and highlight films",
  "Multi-camera coverage for conferences and panels",
  "Executive interviews and keynote documentation",
  "Same-day social media edits and recap videos",
  "Live streaming and hybrid event support",
  "Sound bite comments to camera from attendees",
];

const differentiators = [
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
];

const projects = [
  {
    title: "International Hospitality Investment Forum",
    venue: "Kimpton Hotel, Shinjuku, Tokyo · 2025",
    desc: "Event highlight video, full photography coverage, and standalone attendee testimonial-style recap videos for the IHIF conference — all delivered from a single coordinated shoot.",
    vimeoId: "1063107227",
    vimeoHash: "c0bc991380",
    img: null,
  },
  {
    title: "CITC CLSA Tokyo Forum",
    venue: "Tokyo · 2024 · 3-day event",
    desc: "Promotional video filmed over 3 days with comments from staff, attendees and speakers at locations selected to convey the event atmosphere. Edited with Japanese and English subtitles, with careful attention to attendee visibility requirements.",
    vimeoId: "959287158",
    vimeoHash: "1368289498",
    img: null,
  },
  {
    title: "Data Centre Opening Ceremony",
    venue: "Saitama · Japan",
    desc: "Digest video of the opening ceremony, plus photo coverage with a fast-turnaround social media photo selection delivered shortly after the event finished.",
    vimeoId: "1079354745",
    vimeoHash: "17c53b18eb",
    img: null,
  },
];

const photoEvents = [
  {
    label: "Worldwide Partners (WPI) event",
    location: "Tokyo",
    photos: [
      "/images/Tokyo-corporate-event-photography1.jpg",
      "/images/Tokyo-corporate-event-photography2.jpg",
      "/images/Tokyo-corporate-event-photography3.jpg",
      "/images/Tokyo-corporate-event-photography4.jpg",
      "/images/Tokyo-corporate-event-photography5.jpg",
      "/images/Tokyo-corporate-event-photography6.jpg",
      "/images/Tokyo-corporate-event-photography7.jpg",
      "/images/Tokyo-corporate-event-photography8.jpg",
      "/images/Tokyo-corporate-event-photography9.jpg",
      "/images/Tokyo-corporate-event-photography10.jpg",
    ],
  },
  {
    label: "Government trade delegation from Ireland",
    location: "Tokyo",
    photos: [
      "/images/event_photography_tokyo_japan_11.jpg",
      "/images/event_photography_tokyo_japan_10.jpg",
      "/images/event_photography_tokyo_japan_12.jpg",
      "/images/event_photography_tokyo_japan_13.jpg",
    ],
  },
  {
    label: "Red Bull esports gaming event",
    location: "Tokyo",
    photos: [
      "/images/event_photography_tokyo_japan_16.jpg",
      "/images/tokyo-event-esports-photography_1.jpg",
      "/images/tokyo-event-esports-photography_2.jpg",
      "/images/tokyo-event-esports-photography_3.jpg",
      "/images/tokyo-event-esports-photography_4.jpg",
      "/images/tokyo-event-esports-photography_5.jpg",
    ],
  },
  {
    label: "International philanthropic organisation gathering",
    location: "Tokyo",
    photos: [
      "/images/tokyo_event_photography_happoen1.jpg",
      "/images/tokyo_event_photography_happoen2.jpg",
      "/images/tokyo_event_photography_happoen3.jpg",
      "/images/tokyo_event_photography_happoen4.jpg",
      "/images/tokyo_event_photography_happoen5.jpg",
      "/images/tokyo_event_photography_happoen6.jpg",
      "/images/tokyo_event_photography_happoen7.jpg",
      "/images/tokyo_event_photography_happoen8.jpg",
    ],
  },
  {
    label: "Government trade delegation from Oman",
    location: "Tokyo",
    photos: [
      "/images/event_photography_tokyo_japan_4.jpg",
      "/images/event_photography_tokyo_japan_5.jpg",
      "/images/event_photography_tokyo_japan_1.jpg",
      "/images/event_photography_tokyo_japan_3.jpg",
    ],
  },
];

const faqs = [
  {
    q: "What types of events do you cover in Japan?",
    a: "Global summits, press conferences, multi-day multi-location conferences, product launches, awards ceremonies, corporate galas, government delegations, NGO events and private corporate gatherings. From 20 guests to 2,000.",
  },
  {
    q: "Can you provide both photography and video on the same day?",
    a: "Yes — one coordinated bilingual team covers both stills and motion. This keeps costs down and ensures a consistent look and feel across all your event assets.",
  },
  {
    q: "Do you offer same-day editing for social media?",
    a: "Yes. We can deliver a highlight reel and social cuts the same day — ideal for live social coverage or next-morning press distribution while the event is still trending.",
  },
  {
    q: "Can you handle multi-day or multi-location events?",
    a: "Yes. We've covered events spanning multiple days and multiple venues across Tokyo and Japan, scaling crew and equipment to match.",
  },
  {
    q: "Can you support live streaming or hybrid events?",
    a: "Yes. We support live streaming setups and hybrid events where remote attendees join in real time. Broadcast-quality feeds for internal and public-facing streams.",
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
    a: "Yes. We set up dedicated interview spots at the venue for planned executive interviews and spontaneous attendee soundbites — adding depth to your event film and providing content for future campaigns.",
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
          "mainEntity": [
            { "@type": "Question", "name": "What types of events do you cover in Japan?", "acceptedAnswer": { "@type": "Answer", "text": "Global summits, press conferences, multi-day multi-location conferences, product launches, awards ceremonies, corporate galas, government delegations, NGO events and private corporate gatherings. From 20 guests to 2,000." } },
            { "@type": "Question", "name": "Can you provide both photography and video on the same day?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — one coordinated bilingual team covers both stills and motion. This keeps costs down and ensures a consistent look and feel across all your event assets." } },
            { "@type": "Question", "name": "Do you offer same-day editing for social media?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We can deliver a highlight reel and social cuts the same day — ideal for live social coverage or next-morning press distribution while the event is still trending." } },
            { "@type": "Question", "name": "Can you handle multi-day or multi-location events?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We've covered events spanning multiple days and multiple venues across Tokyo and Japan, scaling crew and equipment to match." } },
            { "@type": "Question", "name": "Can you support live streaming or hybrid events?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We support live streaming setups and hybrid events where remote attendees join in real time. Broadcast-quality feeds for internal and public-facing streams." } },
            { "@type": "Question", "name": "How do you handle VIP protocol and NDAs?", "acceptedAnswer": { "@type": "Answer", "text": "We understand VIP protocol, confidentiality requirements and brand consistency. We're experienced at events involving government delegations, C-suite executives and high-profile international brands." } },
            { "@type": "Question", "name": "How do you coordinate with Japanese venue AV teams?", "acceptedAnswer": { "@type": "Answer", "text": "Our bilingual crew liaises directly with Japanese venue and AV staff, removing the friction that slows down international production teams — particularly valuable for overseas clients managing events remotely." } },
            { "@type": "Question", "name": "Can you film executive interviews at the event?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We set up dedicated interview spots at the venue for planned executive interviews and spontaneous attendee soundbites — adding depth to your event film and providing content for future campaigns." } }
          ]
        }) }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ backgroundColor: "#0d0a07" }}>
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/event_top.jpg"
            alt=""
            fill
            priority
            className="object-cover"
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
              Event Coverage · Tokyo · Japan
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.9] mb-8 max-w-4xl" style={{ color: "#fdf8f3" }}>
            Corporate Event<br />
            Photo &amp; Video in <em className="not-italic" style={{ color: "#e95228" }}>Japan.</em>
          </h1>
          <p className="text-lg max-w-2xl leading-relaxed" style={{ color: "rgba(253,248,243,0.6)" }}>
            Our bilingual Tokyo-based team photographs and films corporate events — from global summits
            and press conferences to multi-day conferences and corporate galas. Visual stories that
            showcase your brand&apos;s energy, people and purpose.
          </p>
        </div>
      </section>

      {/* Clients */}
      <section className="py-6" style={{ backgroundColor: "#e95228" }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase mr-4" style={{ color: "rgba(13,10,7,0.5)" }}>Trusted by</span>
            {clients.map((c, i) => (
              <span key={c} className="flex items-center gap-2">
                <span className="text-sm font-black" style={{ color: "rgba(13,10,7,0.75)" }}>{c}</span>
                {i < clients.length - 1 && <span style={{ color: "rgba(13,10,7,0.3)" }}>·</span>}
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

              {/* Services */}
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-10" style={{ backgroundColor: "#e95228" }} />
                <span className="font-mono text-[10px] tracking-[0.35em] uppercase" style={{ color: "#e95228" }}>What we deliver</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black mb-8 leading-tight" style={{ color: "#1c1208" }}>
                Every moment captured.<br />With style<span style={{ color: "#e95228" }}>.</span>
              </h2>
              <p className="text-sm leading-relaxed mb-8" style={{ color: "rgba(28,18,8,0.6)" }}>
                With deep experience covering events for international clients in Japan, we understand the importance
                of delivering visuals that reflect your brand standards.
              </p>
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

              {/* Side photos */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
                  <Image
                    src="/images/event_side1.jpeg"
                    alt="Event coverage in Japan"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 320px"
                  />
                </div>
                <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
                  <Image
                    src="/images/event_side2.jpeg"
                    alt="Corporate event photography Japan"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 320px"
                  />
                </div>
              </div>

              {/* IHIF attendee comments video */}
              <div className="mb-16">
                <div className="relative aspect-[16/9]" style={{ backgroundColor: "#0d0a07" }}>
                  <iframe
                    src="https://player.vimeo.com/video/1063107056?h=9932edce4c&title=0&byline=0&portrait=0"
                    className="absolute inset-0 w-full h-full"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title="Event attendee comments — Filming in Japan"
                  />
                </div>
                <p className="mt-3 text-sm font-black" style={{ color: "#1c1208" }}>
                  Comments from event attendees taken during break time
                </p>
              </div>

              {/* Project examples */}
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-10" style={{ backgroundColor: "#e95228" }} />
                <span className="font-mono text-[10px] tracking-[0.35em] uppercase" style={{ color: "#e95228" }}>Recent projects</span>
              </div>
              <div className="space-y-8 mb-16">
                {projects.map((p, i) => (
                  <div key={i} className="border" style={{ borderColor: "#e8d9c8" }}>
                    {p.vimeoId ? (
                      <div className="relative aspect-[16/9]" style={{ backgroundColor: "#0d0a07" }}>
                        <iframe
                          src={`https://player.vimeo.com/video/${p.vimeoId}?h=${p.vimeoHash}&title=0&byline=0&portrait=0`}
                          className="absolute inset-0 w-full h-full"
                          allow="autoplay; fullscreen; picture-in-picture"
                          allowFullScreen
                          title={p.title}
                        />
                      </div>
                    ) : p.img ? (
                      <div className="relative aspect-[16/9] overflow-hidden" style={{ backgroundColor: "#e8d9c8" }}>
                        <Image
                          src={p.img}
                          alt={p.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 640px"
                        />
                      </div>
                    ) : null}
                    <div className="p-6">
                      <p className="font-mono text-[10px] tracking-[0.2em] uppercase mb-1" style={{ color: "#e95228" }}>{p.venue}</p>
                      <h3 className="font-black mb-2" style={{ color: "#1c1208" }}>{p.title}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: "rgba(28,18,8,0.55)" }}>{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Photo events */}
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-10" style={{ backgroundColor: "#e95228" }} />
                <span className="font-mono text-[10px] tracking-[0.35em] uppercase" style={{ color: "#e95228" }}>Photography events</span>
              </div>
              <div className="mb-16">
                <PhotoGallery events={photoEvents} />
              </div>

              {/* Google Reviews */}
              <div className="mb-16">
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-px w-10" style={{ backgroundColor: "#e95228" }} />
                  <span className="font-mono text-[10px] tracking-[0.35em] uppercase" style={{ color: "#e95228" }}>Google reviews</span>
                </div>
                <GoogleReviews appId="94fa8f98-15eb-4b6a-8318-c0d4579384d8" />
              </div>

              {/* Testimonials */}
              <div className="space-y-6 mb-16">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-px w-10" style={{ backgroundColor: "#e95228" }} />
                  <span className="font-mono text-[10px] tracking-[0.35em] uppercase" style={{ color: "#e95228" }}>Client feedback</span>
                </div>
                <blockquote className="pl-6 border-l-4" style={{ borderColor: "#e95228" }}>
                  <p className="text-base font-black italic leading-snug mb-3" style={{ color: "#1c1208" }}>
                    &ldquo;Chris delivered exceptional photography and video coverage across our entire 3-day event. Beyond the visuals, he also helped bridge language gaps with local venue staff and AV teams — something that proved invaluable to our onsite execution.&rdquo;
                  </p>
                  <cite className="font-mono text-[10px] tracking-widest not-italic uppercase" style={{ color: "rgba(28,18,8,0.4)" }}>
                    Events Director · Global Advertising Organisation · Tokyo
                  </cite>
                </blockquote>
                <blockquote className="pl-6 border-l-4" style={{ borderColor: "#e8d9c8" }}>
                  <p className="text-base font-black italic leading-snug mb-3" style={{ color: "#1c1208" }}>
                    &ldquo;The photos look great! We are very happy with the outcome.&rdquo;
                  </p>
                  <cite className="font-mono text-[10px] tracking-widest not-italic uppercase" style={{ color: "rgba(28,18,8,0.4)" }}>
                    Client Partner · Marketing Agency
                  </cite>
                </blockquote>
              </div>

              {/* FAQ */}
              <div>
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
            </div>

            {/* Right — sticky form */}
            <div>
              <div className="p-8 lg:p-10 sticky top-24" style={{ backgroundColor: "#fff", border: "1px solid #e8d9c8" }}>
                <h3 className="text-xl font-black mb-2" style={{ color: "#1c1208" }}>Get a free quote</h3>
                <p className="text-sm mb-6" style={{ color: "rgba(28,18,8,0.5)" }}>
                  Tell us about your event. We reply within 24 hours.
                </p>
                <LandingContactForm service="Event Photo & Video Japan" />
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
