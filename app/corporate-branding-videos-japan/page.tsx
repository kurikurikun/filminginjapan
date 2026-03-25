import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/Footer";
import LandingContactForm from "@/components/LandingContactForm";

export const metadata: Metadata = {
  title: "Corporate Video Production Japan | Filming in Japan",
  description: "Professional corporate interview, brand film and recruitment video production in Japan. Bilingual EN/JP team. Trusted by Sony, Google, Microsoft, HP, EY, Canon.",
  alternates: { canonical: "https://www.filminginjapan.com/corporate-branding-videos-japan" },
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

function VideoEmbed({ src, title }: { src: string; title: string }) {
  return (
    <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
      <iframe
        src={src}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
        style={{ border: 0 }}
      />
    </div>
  );
}

export default function CorporateBrandingPage() {
  return (
    <div style={{ backgroundColor: "#fdf8f3" }}>

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ backgroundColor: "#0d0a07" }}>
        <div className="absolute inset-0">
          <Image
            src="/images/corporate_video_tokyo.jpeg"
            alt=""
            fill
            priority
            className="object-cover object-[center_20%]"
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
              Corporate Video · Tokyo · Japan
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.9] mb-8 max-w-4xl" style={{ color: "#fdf8f3" }}>
            Corporate Video<br />
            Production in <em className="not-italic" style={{ color: "#e95228" }}>Japan.</em>
          </h1>
          <p className="text-lg max-w-2xl leading-relaxed" style={{ color: "rgba(253,248,243,0.6)" }}>
            Corporate interviews, brand films and recruitment videos for global companies operating in Japan.
            Bilingual team, broadcast-quality results.
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

            {/* Left — service detail */}
            <div>

              {/* ── Section 1: Corporate Interviews ── */}
              <div className="mb-20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-px w-10" style={{ backgroundColor: "#e95228" }} />
                  <span className="font-mono text-[10px] tracking-[0.35em] uppercase" style={{ color: "#e95228" }}>01</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black mb-6 leading-tight" style={{ color: "#1c1208" }}>
                  Corporate Interviews<span style={{ color: "#e95228" }}>.</span>
                </h2>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(28,18,8,0.6)" }}>
                  CEO interviews, exec profiles, thought leadership pieces and case study interviews — filmed at your client&apos;s office, a studio, or anywhere in Japan. Our Japanese and English bilingual crew ensure the interviewee is relaxed and delivers genuine, on-message answers.
                </p>
                <p className="text-sm leading-relaxed mb-8" style={{ color: "rgba(28,18,8,0.6)" }}>
                  We can link overseas producers or directors to the set via remote video, enabling them to observe, give feedback or ask questions directly. Small crew to keep your subjects comfortable.
                </p>
                <VideoEmbed
                  src="https://player.vimeo.com/video/561655197?h=d1ca57fb5c"
                  title="Corporate interview video samples — Filming in Japan"
                />
                <p className="mt-3 text-sm font-black" style={{ color: "#1c1208" }}>
                  Selected corporate interview clips — Tokyo
                </p>
              </div>

              <div className="h-px mb-20" style={{ backgroundColor: "#e8d9c8" }} />

              {/* ── Section 2: Brand Films ── */}
              <div className="mb-20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-px w-10" style={{ backgroundColor: "#e95228" }} />
                  <span className="font-mono text-[10px] tracking-[0.35em] uppercase" style={{ color: "#e95228" }}>02</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black mb-6 leading-tight" style={{ color: "#1c1208" }}>
                  Brand Films<span style={{ color: "#e95228" }}>.</span>
                </h2>
                <p className="text-sm leading-relaxed mb-8" style={{ color: "rgba(28,18,8,0.6)" }}>
                  Brand films, product launches, influencer series and commercial content for global brands operating in Japan. We use a documentary approach — finding the authentic story behind the brand — rather than scripted advertising. Trusted by HP, Canon, Google and others to connect with Japanese and international audiences.
                </p>

                <div className="space-y-8">
                  <div>
                    <VideoEmbed
                      src="https://www.youtube.com/embed/t-VSxoBQlRA?rel=0"
                      title="Corporate branding video — Filming in Japan"
                    />
                    <p className="mt-3 text-sm font-black" style={{ color: "#1c1208" }}>Brand film — Japan</p>
                  </div>
                  <div>
                    <VideoEmbed
                      src="https://www.youtube.com/embed/m1KV1UTpSzU?rel=0"
                      title="HP Asian Influencer Series — Filming in Japan"
                    />
                    <p className="mt-3 text-sm font-black" style={{ color: "#1c1208" }}>HP — Asian Influencer Series</p>
                  </div>
                  <div>
                    <VideoEmbed
                      src="https://player.vimeo.com/video/836766996?h=ccb3b1ab04"
                      title="White Express brand film — Filming in Japan"
                    />
                    <p className="mt-3 text-sm font-black" style={{ color: "#1c1208" }}>White Express — Brand Film</p>
                  </div>
                  <div>
                    <VideoEmbed
                      src="https://player.vimeo.com/video/517509247"
                      title="Craft brewery and distillery brand film — Japan"
                    />
                    <p className="mt-3 text-sm font-black" style={{ color: "#1c1208" }}>Craft Brewery & Distillery — Brand Film</p>
                  </div>
                  <div>
                    <VideoEmbed
                      src="https://player.vimeo.com/video/888141337?h=7f88a78ba3"
                      title="Handmade knife company brand film — Japan"
                    />
                    <p className="mt-3 text-sm font-black" style={{ color: "#1c1208" }}>Handmade Knife Company — Brand Film</p>
                  </div>
                </div>
              </div>

              <div className="h-px mb-20" style={{ backgroundColor: "#e8d9c8" }} />

              {/* ── Section 3: Recruitment & Employee Profiles ── */}
              <div className="mb-20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-px w-10" style={{ backgroundColor: "#e95228" }} />
                  <span className="font-mono text-[10px] tracking-[0.35em] uppercase" style={{ color: "#e95228" }}>03</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black mb-6 leading-tight" style={{ color: "#1c1208" }}>
                  Recruitment &amp; Employee Profiles<span style={{ color: "#e95228" }}>.</span>
                </h2>
                <p className="text-sm leading-relaxed mb-8" style={{ color: "rgba(28,18,8,0.6)" }}>
                  Our documentary style ditches the teleprompters and set phrases for genuine comments from your employees on your company values, what motivates them and what makes your company the place to work.
                </p>

                <div className="space-y-8">
                  <div>
                    <VideoEmbed
                      src="https://www.youtube.com/embed/UbkuSD-ht1U?rel=0"
                      title="Google Japan recruitment video — Filming in Japan"
                    />
                    <p className="mt-3 text-sm font-black" style={{ color: "#1c1208" }}>Google Japan — Recruitment Video</p>
                    <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(28,18,8,0.55)" }}>Recruitment video for Google Japan, hearing from employees at their Inzai data centre near Tokyo about why they think Google is the right place for them.</p>
                  </div>
                  <div>
                    <VideoEmbed
                      src="https://www.youtube.com/embed/ZDKXfIE_b1Y?rel=0"
                      title="EY employee profile video — Filming in Japan"
                    />
                    <p className="mt-3 text-sm font-black" style={{ color: "#1c1208" }}>EY — Employee Profile Series</p>
                    <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(28,18,8,0.55)" }}>Part of a series of six recruit and employee profile videos for EY — going beyond the workplace to discover the passion that drives their life and work.</p>
                  </div>
                </div>
              </div>

              <div className="h-px mb-20" style={{ backgroundColor: "#e8d9c8" }} />

              {/* Workflow */}
              <div className="mb-16 p-8" style={{ backgroundColor: "#0d0a07" }}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-px w-10" style={{ backgroundColor: "#e95228" }} />
                  <span className="font-mono text-[10px] tracking-[0.35em] uppercase" style={{ color: "#e95228" }}>How it works</span>
                </div>
                <div className="space-y-6">
                  {[
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
                  ].map((w, i) => (
                    <div key={i} className="flex gap-6 pb-6 border-b last:border-0 last:pb-0" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
                      <span className="font-mono text-xs font-black shrink-0 mt-0.5 w-20" style={{ color: "#e95228" }}>{w.step}</span>
                      <p className="text-sm leading-relaxed" style={{ color: "rgba(253,248,243,0.6)" }}>{w.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonials */}
              <div className="space-y-6 mb-16">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-px w-10" style={{ backgroundColor: "#e95228" }} />
                  <span className="font-mono text-[10px] tracking-[0.35em] uppercase" style={{ color: "#e95228" }}>Client feedback</span>
                </div>
                {testimonials.map((t, i) => (
                  <blockquote key={i} className="pl-6 border-l-4" style={{ borderColor: i === 0 ? "#e95228" : "#e8d9c8" }}>
                    <p className="text-base font-black italic leading-snug mb-3" style={{ color: "#1c1208" }}>
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <cite className="font-mono text-[10px] tracking-widest not-italic uppercase" style={{ color: "rgba(28,18,8,0.4)" }}>
                      {t.credit}
                    </cite>
                  </blockquote>
                ))}
              </div>

              {/* Equipment */}
              <div className="mb-16 p-8 border" style={{ borderColor: "#e8d9c8" }}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-px w-10" style={{ backgroundColor: "#e95228" }} />
                  <span className="font-mono text-[10px] tracking-[0.35em] uppercase" style={{ color: "#e95228" }}>Our equipment</span>
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(28,18,8,0.6)" }}>
                  We shoot on professional cinema cameras and are happy to work with a specific camera you require. Our in-house kit includes:
                </p>
                <ul className="space-y-2">
                  {equipment.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm" style={{ color: "rgba(28,18,8,0.7)" }}>
                      <span style={{ color: "#e95228" }}>—</span>
                      {item}
                    </li>
                  ))}
                </ul>
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

            {/* Right — form */}
            <div>
              <div
                className="p-8 lg:p-10 sticky top-24"
                style={{ backgroundColor: "#fff", border: "1px solid #e8d9c8" }}
              >
                <h3 className="text-xl font-black mb-2" style={{ color: "#1c1208" }}>
                  Get a free quote
                </h3>
                <p className="text-sm mb-6" style={{ color: "rgba(28,18,8,0.5)" }}>
                  Tell us about your project. We reply within 24 hours.
                </p>
                <LandingContactForm service="Corporate Video Japan" />
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
