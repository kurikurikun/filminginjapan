import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/Footer";
import LandingContactForm from "@/components/LandingContactForm";

export const metadata: Metadata = {
  title: "Client Testimonial Video Production Tokyo Japan | Filming in Japan",
  description: "Professional client testimonial and case study video production in Tokyo and across Japan. Bilingual EN/JP team. Trusted by JLL, Microsoft, SAP, HP, Canon.",
  alternates: { canonical: "https://www.filminginjapan.com/client-testimonials-video-production-tokyo-japan" },
};

const points = [
  {
    num: "01",
    title: "Authentic storytelling",
    desc: "We put your clients at ease so they speak naturally on camera — no scripts, no stiff delivery. We use a documentary approach that gets genuine, honest comments that convert far better than polished PR speak.",
  },
  {
    num: "02",
    title: "Bilingual interviews",
    desc: "Native English and Japanese speakers on every shoot. We interview in both languages and deliver subtitled cuts for global and domestic use. Your Japanese clients speak in Japanese — we handle everything else.",
  },
  {
    num: "03",
    title: "Studio, office, or anywhere in Japan",
    desc: "Based in Tokyo and Hiroshima, we coordinate shoots across Japan — at your client's office, facility, studio, or chosen location. Green screen available on location. Small crew to keep your client relaxed.",
  },
  {
    num: "04",
    title: "Multi-format delivery",
    desc: "16:9 long-form, 9:16 social cuts, 1:1 square — all included. We deliver via Google Drive, Dropbox, MASV or Frame.io. Hard disk by DHL or FedEx also available for large projects.",
  },
];

const faqs = [
  {
    q: "Where do you film client testimonial videos in Japan?",
    a: "Anywhere that suits your client — their office, a studio, an event venue, or outdoors. We can also set up green screen on location. We scout locations beforehand and advise on the best setup for lighting and sound.",
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
    a: "Yes. We can capture additional office, product or cityscape footage — for example, Tokyo skyline shots — to complement the interview and make the final video more engaging.",
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
    a: "16:9 for YouTube and websites, 9:16 for social media (Reels, TikTok, Stories), and 1:1 square. We deliver via Google Drive, Dropbox, MASV or Frame.io — or hard disk by courier if required.",
  },
];

const clients = ["JLL", "Microsoft", "SAP", "Celonis", "HP", "Canon", "Sony", "Accenture"];

export default function TestimonialsPage() {
  return (
    <div style={{ backgroundColor: "#fdf8f3" }}>

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ backgroundColor: "#0d0a07" }}>
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/customer_testimonial_office_tokyo.jpeg"
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
              Testimonial Video · Tokyo · Japan
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.9] mb-8 max-w-4xl" style={{ color: "#fdf8f3" }}>
            Client Testimonial<br />
            Videos in <em className="not-italic" style={{ color: "#e95228" }}>Japan.</em>
          </h1>
          <p className="text-lg max-w-2xl leading-relaxed" style={{ color: "rgba(253,248,243,0.6)" }}>
            We produce compelling client testimonial and case study videos that build trust and drive sales.
            Bilingual team. Real stories. Broadcast-quality results, delivered fast.
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
                Real clients. Real stories.<br />Real results<span style={{ color: "#e95228" }}>.</span>
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

              {/* Video samples */}
              <div className="mb-16">
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-px w-10" style={{ backgroundColor: "#e95228" }} />
                  <span className="font-mono text-[10px] tracking-[0.35em] uppercase" style={{ color: "#e95228" }}>Work samples</span>
                </div>

                <div className="space-y-8">
                  <div>
                    <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                      <iframe
                        src="https://www.youtube.com/embed/72GKHq5pCDY"
                        title="Client testimonial video filmed for Microsoft Asia"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full"
                        style={{ border: 0 }}
                      />
                    </div>
                    <p className="mt-3 text-sm font-black" style={{ color: "#1c1208" }}>Chris from Filming in Japan was the DP for this client testimonial for Microsoft</p>
                  </div>

                  <div>
                    <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                      <iframe
                        src="https://player.vimeo.com/video/561655197?h=d1ca57fb5c"
                        title="Video clip samples from selected past corporate interview projects and client testimonial videos in Tokyo"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full"
                        style={{ border: 0 }}
                      />
                    </div>
                    <p className="mt-3 text-sm font-black" style={{ color: "#1c1208" }}>Video clip samples from selected past corporate interview projects / client testimonial videos in Tokyo</p>
                  </div>

                  <div>
                    <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                      <iframe
                        src="https://www.youtube.com/embed/3Jf81EQ_1Jw"
                        title="Chris from Filming in Japan as DP on Microsoft client testimonial"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full"
                        style={{ border: 0 }}
                      />
                    </div>
                    <p className="mt-3 text-sm font-black" style={{ color: "#1c1208" }}>Client testimonial video we filmed for Microsoft Asia</p>
                  </div>
                </div>
              </div>

              {/* Green screen section */}
              <div className="mb-16 p-8" style={{ backgroundColor: "#0d0a07" }}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-px w-10" style={{ backgroundColor: "#e95228" }} />
                  <span className="font-mono text-[10px] tracking-[0.35em] uppercase" style={{ color: "#e95228" }}>Green screen on location</span>
                </div>
                <h3 className="text-2xl font-black mb-4" style={{ color: "#fdf8f3" }}>
                  Studio quality, anywhere in Japan<span style={{ color: "#e95228" }}>.</span>
                </h3>
                <p className="text-sm leading-relaxed mb-8" style={{ color: "rgba(253,248,243,0.6)" }}>
                  We have recorded corporate presentations for companies such as Canon, and client testimonials at events for companies such as SAP, on green screen. We carry a complete package — large portable green screen, professional lighting, boom and lapel sound, and cameras — to set up a broadcast-quality green screen studio anywhere there is space.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative w-full" style={{ paddingBottom: "66.67%" }}>
                    <Image
                      src="/images/tokyo_japan_studio_green_screen_recordings_1.jpeg"
                      alt="Green screen studio setup in Tokyo Japan"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="relative w-full" style={{ paddingBottom: "66.67%" }}>
                    <Image
                      src="/images/tokyo_japan_studio_green_screen_recordings_2.jpg"
                      alt="Green screen testimonial recording in Tokyo Japan"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>

              {/* Testimonials */}
              <div className="space-y-6 mb-16">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-px w-10" style={{ backgroundColor: "#e95228" }} />
                  <span className="font-mono text-[10px] tracking-[0.35em] uppercase" style={{ color: "#e95228" }}>Client feedback</span>
                </div>

                <blockquote className="pl-6 border-l-4" style={{ borderColor: "#e95228" }}>
                  <p className="text-base font-black italic leading-snug mb-3" style={{ color: "#1c1208" }}>
                    &ldquo;Again, great job with the video. I was a bit worried going into this as I don&apos;t speak Japanese, but this turned out really fantastic.&rdquo;
                  </p>
                  <cite className="font-mono text-[10px] tracking-widest not-italic uppercase" style={{ color: "rgba(28,18,8,0.4)" }}>
                    Overseas-based client
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
                <LandingContactForm service="Client Testimonial Video Japan" />
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
