import type { Metadata } from "next";
import Footer from "@/components/Footer";
import LandingContactForm from "@/components/LandingContactForm";

export const metadata: Metadata = {
  title: "Commercial Real Estate Photography, Video & Virtual Tours Japan | Filming in Japan",
  description: "Commercial real estate photos, drone video and 360° Matterport virtual tours across Japan. Trusted by JLL, CBRE, Cushman & Wakefield, Hines and Savills.",
  alternates: { canonical: "https://www.filminginjapan.com/real-estate-photo-video-tokyo-japan" },
};

const points = [
  {
    num: "01",
    title: "Architectural photography",
    desc: "Interior and exterior stills for listings, brochures and press. We work from a floor plan and decide how best to present the space, or collaborate with your marketing or renovation team. HDR-merged, colour-graded and retouched.",
  },
  {
    num: "02",
    title: "Drone photo & video",
    desc: "High-rise buildings, hotels and large commercial complexes photographed and filmed from the air. We combine drone aerials with ground photography on the same day — consistent look, cost savings, single crew.",
  },
  {
    num: "03",
    title: "360° virtual tours & Matterport",
    desc: "Matterport Pro 3 tours let overseas buyers and tenants explore every room from anywhere in the world. We also produce 360° tours for VR headsets (Meta Quest) and smartphone/desktop browsers.",
  },
  {
    num: "04",
    title: "Facility & promotion videos",
    desc: "Cinematic videos for data centres, hotels, warehouses, office buildings, residences and shopping centres. We combine interview, b-roll and aerial footage into compelling promotional films.",
  },
  {
    num: "05",
    title: "Full-package shoots",
    desc: "We combine Matterport tours, ground photography, drone photos and video in a single multi-day shoot — capturing every type of media needed to market a facility, all in one coordinated production.",
  },
  {
    num: "06",
    title: "Fast turnaround",
    desc: "Photos delivered within 24 hours of the shoot. Video and virtual tours within 72 hours. Rush delivery available on request for time-sensitive listings or launches.",
  },
];

const faqs = [
  {
    q: "What types of commercial real estate do you cover in Japan?",
    a: "Hotels, shopping malls, data centres, warehouses, office buildings, high-rise towers, residential developments and retail interiors. We've worked for JLL, CBRE, Cushman & Wakefield, Hines and Savills across a wide range of asset types throughout Japan.",
  },
  {
    q: "Can you combine photography, drone, video and Matterport in one shoot?",
    a: "Yes — this is one of our key strengths. We combine ground photography, drone photography and video, and Matterport virtual tours in a single multi-day shoot. One crew, one consistent look, lower total cost.",
  },
  {
    q: "What Matterport equipment do you use?",
    a: "We use the Matterport Pro 3 camera for high-quality interior scanning, including large and outdoor spaces. For 360° tours we use the Insta360 Pro 2, Insta360 1-inch, or stitched full-frame mirrorless images for maximum quality.",
  },
  {
    q: "Can overseas buyers view virtual tours remotely?",
    a: "Yes. Matterport tours and 360° virtual experiences are accessible via any web browser or VR headset (Meta Quest). Overseas buyers and tenants can explore the property in full detail without visiting Japan.",
  },
  {
    q: "Do you film drone video of buildings in Japan?",
    a: "Yes. We have extensive experience filming high-rise buildings, hotels and large commercial complexes from the air across Japan. We handle all permits and coordinate with building management.",
  },
  {
    q: "What are your turnaround times?",
    a: "Photos are delivered within 24 hours of the shoot. Video edits and Matterport tours within 72 hours. Rush delivery is available on request for time-sensitive projects.",
  },
  {
    q: "Do you produce videos for data centres and industrial facilities?",
    a: "Yes. We have produced promotion and completion videos for data centres, warehouses, distribution centres, office buildings and shopping centres in Tokyo and throughout Japan — including projects for Hines.",
  },
  {
    q: "Can you produce content for luxury residential properties?",
    a: "Yes. We produce cinematic walkthroughs, architect interview films and comprehensive media packages for luxury residences — combining photography, video and Matterport tours with bilingual text and print production if required.",
  },
  {
    q: "How do you handle shoot access and building management in Japan?",
    a: "Our bilingual team liaises directly with building management, facility teams and local staff in Japanese. This removes the logistical friction that often delays overseas-coordinated shoots.",
  },
];

const clients = ["JLL", "CBRE", "Cushman & Wakefield", "Hines", "Savills", "NEC", "Microsoft"];

export default function RealEstatePage() {
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
              Real Estate Media · Tokyo · Japan
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.9] mb-8 max-w-4xl" style={{ color: "#fdf8f3" }}>
            Real Estate Photo,<br />Video &amp; Virtual Tours<br />
            in <em className="not-italic" style={{ color: "#e95228" }}>Japan.</em>
          </h1>
          <p className="text-lg max-w-2xl leading-relaxed" style={{ color: "rgba(253,248,243,0.6)" }}>
            Commercial real estate photography, drone video and 360° Matterport virtual tours for
            developers, agencies and corporate real estate teams across Japan.
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
                Showcasing property assets<br />in the best light<span style={{ color: "#e95228" }}>.</span>
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

              {/* Testimonials */}
              <div className="space-y-6 mb-16">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-px w-10" style={{ backgroundColor: "#e95228" }} />
                  <span className="font-mono text-[10px] tracking-[0.35em] uppercase" style={{ color: "#e95228" }}>Client feedback</span>
                </div>

                <blockquote className="pl-6 border-l-4" style={{ borderColor: "#e95228" }}>
                  <p className="text-base font-black italic leading-snug mb-3" style={{ color: "#1c1208" }}>
                    &ldquo;Thank you for your super speedy work and being so flexible with the suggestions for capturing the unique elements of the design. We love your &lsquo;human&rsquo; viewpoint so thank you for capturing this.&rdquo;
                  </p>
                  <cite className="font-mono text-[10px] tracking-widest not-italic uppercase" style={{ color: "rgba(28,18,8,0.4)" }}>
                    Workplace Designer · Multinational Real Estate Company
                  </cite>
                </blockquote>

                <blockquote className="pl-6 border-l-4" style={{ borderColor: "#e8d9c8" }}>
                  <p className="text-base font-black italic leading-snug mb-3" style={{ color: "#1c1208" }}>
                    &ldquo;The virtual tour alone closed two overseas buyers who never visited the property in person. The ROI was immediate.&rdquo;
                  </p>
                  <cite className="font-mono text-[10px] tracking-widest not-italic uppercase" style={{ color: "rgba(28,18,8,0.4)" }}>
                    Senior Director · Leading Real Estate Firm · Tokyo
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
                  Tell us about your property. We reply within 24 hours.
                </p>
                <LandingContactForm service="Real Estate Photo & Video Japan" />
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
