import type { Metadata } from "next";
import Footer from "@/components/Footer";
import LandingContactForm from "@/components/LandingContactForm";

export const metadata: Metadata = {
  title: "Corporate Branding Videos Japan | Filming in Japan",
  description: "Professional corporate branding, interview and recruitment video production in Japan. Bilingual EN/JP team. Trusted by Sony, Google, Microsoft, HP, EY, Canon.",
  alternates: { canonical: "https://www.filminginjapan.com/corporate-branding-videos-japan" },
};

const points = [
  {
    num: "01",
    title: "Any location in Japan",
    desc: "We've filmed hundreds of corporate interviews across Japan — inside data centres and factory clean rooms, corporate boardrooms, and in front of green screens. We adapt to any location and make it look and sound its best.",
  },
  {
    num: "02",
    title: "Bilingual production",
    desc: "Native English and Japanese interviewers, directors and editors in-house. We ensure the interviewee is relaxed and comfortable, or set up a remote feed so your overseas director can monitor or ask questions directly.",
  },
  {
    num: "03",
    title: "Full-service from concept to delivery",
    desc: "Location scouting, scripting, shoot, edit, colour grade and delivery. We handle permits, translations and bilingual crews so international clients don't have to worry about logistics.",
  },
  {
    num: "04",
    title: "Recruitment & brand films",
    desc: "Our documentary style ditches the teleprompters for genuine comments from employees on company values — trusted by Microsoft, HP, EY, Sony and Google to connect with audiences in both Japanese and English.",
  },
];

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

const faqs = [
  {
    q: "How do you ensure the branding film aligns with our company's message?",
    a: "We begin by meeting with your marketing team or production agency to understand the core message and outcomes. We also discuss where the video will be used — website, SNS, trade shows — so the length, style and tone are aligned with your overall marketing strategy.",
  },
  {
    q: "Do you always need a script and storyboard?",
    a: "Not always. We're comfortable with a documentary style, but using a storyboard ensures the scenes support your message and avoids surprises in the edit stage.",
  },
  {
    q: "What factors determine the budget for a branding film in Japan?",
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
    q: "Do you offer editing in both English and Japanese?",
    a: "Yes. We have native English and native Japanese editors in-house who can cut to a pre-agreed script or shape a story from the footage. We deliver formats for YouTube, websites and social (both vertical and horizontal).",
  },
  {
    q: "How many rounds of review are included?",
    a: "Typically, two main rounds of edits get us close to final — after that, only minor adjustments are needed. Careful preproduction helps us minimise revisions later.",
  },
  {
    q: "Can you manage the entire production process for overseas clients?",
    a: "Yes. We handle the full workflow — from concept development, scriptwriting and location scouting, to shooting, editing and final delivery. We also manage permits, translations and bilingual crews, so international clients don't have to worry about logistics.",
  },
  {
    q: "How long does it take to produce a branding film in Japan?",
    a: "A small-scale shoot can take 2–3 weeks from planning to delivery; larger productions 1–2 months. We recommend starting the conversation at least 4–6 weeks before your target delivery date.",
  },
  {
    q: "Do we need filming permits in Japan?",
    a: "If we are putting up a tripod then permits are generally required in public locations. With a small handheld crew of 3–5 people, permits are often not required — though there are many exceptions. We advise on a case-by-case basis.",
  },
  {
    q: "What are the typical costs for a branding film in Japan?",
    a: "Costs depend on crew size, equipment, locations and post-production requirements. We provide transparent quotes and can tailor packages for different budgets while maintaining high production value.",
  },
];

const clients = ["Sony", "HP", "Canon", "EY", "NEC", "Accenture", "Microsoft", "Google"];

const testimonials = [
  {
    quote: "Again, great job with the video. I was a bit worried going into this as I don't speak Japanese, but this turned out really fantastic. Thank you for the work.",
    credit: "Overseas-based client",
  },
  {
    quote: "Your expertise and dedication truly made this video what it is. We also appreciate your continuous support and patience as we requested improvements multiple times.",
    credit: "Manager · International Technology Company",
  },
  {
    quote: "Thank you so much for your work and dedication. The image and sound are very good. It was a real pleasure to work with you.",
    credit: "Overseas Director · Remote Production",
  },
];

export default function CorporateBrandingPage() {
  return (
    <div style={{ backgroundColor: "#fdf8f3" }}>

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ backgroundColor: "#0d0a07" }}>
        <div className="absolute top-8 left-8 pointer-events-none">
          <div className="w-8 h-8 border-t border-l" style={{ borderColor: "rgba(233,82,40,0.4)" }} />
        </div>
        <div className="absolute top-8 right-8 pointer-events-none">
          <div className="w-8 h-8 border-t border-r" style={{ borderColor: "rgba(233,82,40,0.4)" }} />
        </div>
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-10" style={{ backgroundColor: "#e95228" }} />
            <span className="font-mono text-[10px] tracking-[0.35em] uppercase" style={{ color: "#e95228" }}>
              Corporate Video · Tokyo · Japan
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.9] mb-8 max-w-4xl" style={{ color: "#fdf8f3" }}>
            Corporate Branding<br />
            Videos in <em className="not-italic" style={{ color: "#e95228" }}>Japan.</em>
          </h1>
          <p className="text-lg max-w-2xl leading-relaxed" style={{ color: "rgba(253,248,243,0.6)" }}>
            We produce brand films, CEO interviews, recruitment videos and internal communications
            for global companies operating in Japan. Bilingual team, broadcast-quality results.
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
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-10" style={{ backgroundColor: "#e95228" }} />
                <span className="font-mono text-[10px] tracking-[0.35em] uppercase" style={{ color: "#e95228" }}>What we deliver</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black mb-10 leading-tight" style={{ color: "#1c1208" }}>
                Stories that connect your<br />brand to Japanese audiences<span style={{ color: "#e95228" }}>.</span>
              </h2>

              <div className="space-y-8 mb-16">
                {points.map((p) => (
                  <div key={p.num} className="flex gap-6 pb-8 border-b" style={{ borderColor: "#e8d9c8" }}>
                    <span className="font-mono text-xs font-black shrink-0 mt-0.5" style={{ color: "#e95228" }}>{p.num}</span>
                    <div>
                      <h3 className="font-black mb-1" style={{ color: "#1c1208" }}>{p.title}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: "rgba(28,18,8,0.55)" }}>{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Workflow */}
              <div className="mb-16 p-8" style={{ backgroundColor: "#0d0a07" }}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-px w-10" style={{ backgroundColor: "#e95228" }} />
                  <span className="font-mono text-[10px] tracking-[0.35em] uppercase" style={{ color: "#e95228" }}>How it works</span>
                </div>
                <div className="space-y-6">
                  {workflow.map((w, i) => (
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
                <LandingContactForm service="Corporate Branding Video Japan" />
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
