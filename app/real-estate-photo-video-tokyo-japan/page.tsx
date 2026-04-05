import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/Footer";
import LandingContactForm from "@/components/LandingContactForm";
import PhotoGrid from "@/components/PhotoGrid";

export const metadata: Metadata = {
  title: "Commercial Real Estate Photography, Video & Virtual Tours Japan",
  description: "Commercial real estate photos, drone video and 360° Matterport virtual tours across Japan. Trusted by JLL, CBRE, Cushman & Wakefield, Hines and Savills.",
  alternates: {
    canonical: "https://www.filminginjapan.com/real-estate-photo-video-tokyo-japan",
    languages: {
      "en": "https://www.filminginjapan.com/real-estate-photo-video-tokyo-japan",
      "ja": "https://www.filminginjapan.com/jp/real-estate-photo-video-tokyo-japan",
      "x-default": "https://www.filminginjapan.com/real-estate-photo-video-tokyo-japan",
    },
  },
};

const services = [
  {
    num: "01",
    title: "Commercial real estate photos",
    desc: "Interior and exterior stills for listings, brochures and press — office completions, before/after renovations, shop interiors, commercial property sales photography and Tokyo cityscapes. We work from a floor plan to decide the best angles and time of day, or collaborate directly with your marketing or renovation team. HDR-merged, colour-graded and retouched.",
    projects: [
      "Yoyogi luxury residence — architectural photography and print production",
      "Tokyo office completions for JLL and CBRE",
    ],
    leadImage: { src: "/images/re_photo_1.jpg", alt: "Commercial real estate interior photography, Tokyo" },
    gridImages: [
      { src: "/images/re_lounge_1.jpg", alt: "High-rise office lounge interior with Tokyo skyline view" },
      { src: "/images/re_photo_2.jpg", alt: "Office interior photography Japan" },
      { src: "/images/re_photo_4.jpg", alt: "Real estate interior photography Japan" },
      { src: "/images/re_photo_5.jpg", alt: "Commercial property interior Tokyo" },
      { src: "/images/re_office_3.jpg", alt: "Commercial building lobby, Tokyo" },
      { src: "/images/re_office_4.jpg", alt: "Office lounge interior, Japan" },
      { src: "/images/re_office_5.jpg", alt: "Commercial building exterior at night, Japan" },
      { src: "/images/re_office_2.jpg", alt: "Creative office interior with mural, Tokyo" },
    ],
    videos: [],
    matterport: null,
  },
  {
    num: "02",
    title: "Real estate drone photos and video",
    desc: "High-rise buildings, hotels and large commercial complexes photographed and filmed from the air — for promotions, listings, construction records or renovation documentation. By combining drone aerials with ground photography on the same day, we deliver a consistent look at lower total cost with a single crew.",
    projects: [
      "Yokohama Bay — high-rise office fly-through",
      "Hines distribution centre — aerial and ground footage plus completion photography",
      "Fukuoka Hilton — drone video for sale promotion",
    ],
    leadImage: { src: "/images/re_drone_1.jpg", alt: "Drone aerial photography of commercial building, Japan" },
    gridImages: [
      { src: "/images/re_photo_3.jpg", alt: "Aerial drone photography of spiral building structure, Japan" },
      { src: "/images/re_drone_4.jpg", alt: "Aerial building photography Japan" },
      { src: "/images/re_drone_5.jpg", alt: "Commercial complex drone photography Tokyo" },
      { src: "/images/re_drone_6.jpg", alt: "High-rise drone photography Japan" },
    ],
    videos: [
      { id: "873209362", hash: "092fe43e56", caption: "Fukuoka Hilton — drone video for sale promotion" },
      { id: "952995962", hash: "541869b193", caption: "Distribution center — drone footage" },
    ],
    matterport: null,
  },
  {
    num: "03",
    title: "360° VR and Matterport building tours",
    desc: "Matterport Pro 3 tours let overseas buyers and tenants explore every room from anywhere in the world, via browser or VR headset (Meta Quest). We also produce 360° tours using the Insta360 Pro 2, Insta360 1-inch, or stitched full-frame mirrorless images for maximum quality — covering offices, warehouses, distribution centres and outdoor spaces.",
    projects: [
      "Warehouse and distribution centre 360° tour",
      "Hiroshima Peace Memorial Park — 360° virtual experience",
      "Yoyogi luxury residence — Matterport tour for overseas buyers",
    ],
    leadImage: null,
    gridImages: [],
    videos: [],
    matterport: "14HzQMjL4RW",
  },
  {
    num: "04",
    title: "Building, residence and facilities videos",
    desc: "Cinematic promotion and completion videos for data centres, hotels, warehouses, office buildings, residences and shopping centres. We combine interview, b-roll and aerial footage into compelling promotional films — and can package photography, drone and Matterport into a single multi-day shoot for maximum efficiency. Photos delivered within 24 hours; video and virtual tours within 72 hours.",
    projects: [
      "Hines distribution centre — promotion video",
      "Data centre completion videos in Tokyo",
      "Hotel and shopping centre facility films across Japan",
    ],
    leadImage: { src: "/images/re_facility_1.jpg", alt: "Building facilities video production Japan" },
    gridImages: [
      { src: "/images/re_facility_2.jpg", alt: "Facility video production Tokyo" },
      { src: "/images/re_facility_3.jpg", alt: "Commercial building video Japan" },
      { src: "/images/re_residence_1.jpg", alt: "Luxury private residence exterior, Tokyo" },
      { src: "/images/re_residence_3.jpg", alt: "Luxury private residence staircase, Tokyo" },
    ],
    videos: [
      { id: "953857182", hash: null, caption: "Luxury Azabu-juban private residence promotion, Tokyo" },
      { id: "887091197", hash: "76711d9979", caption: "Luxury Yoyogi private residence showcase walkthrough, Tokyo" },
      { id: "867821014", hash: "19dce56809", caption: "Office interior photography and video, Tokyo" },
    ],
    matterport: null,
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

const clients = ["JLL", "CBRE", "Cushman & Wakefield", "Hines", "Savills"];

export default function RealEstatePage() {
  return (
    <div style={{ backgroundColor: "#fdf8f3" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "What types of commercial real estate do you cover in Japan?", "acceptedAnswer": { "@type": "Answer", "text": "Hotels, shopping malls, data centres, warehouses, office buildings, high-rise towers, residential developments and retail interiors. We've worked for JLL, CBRE, Cushman & Wakefield, Hines and Savills across a wide range of asset types throughout Japan." } },
            { "@type": "Question", "name": "Can you combine photography, drone, video and Matterport in one shoot?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — this is one of our key strengths. We combine ground photography, drone photography and video, and Matterport virtual tours in a single multi-day shoot. One crew, one consistent look, lower total cost." } },
            { "@type": "Question", "name": "What Matterport equipment do you use?", "acceptedAnswer": { "@type": "Answer", "text": "We use the Matterport Pro 3 camera for high-quality interior scanning, including large and outdoor spaces. For 360° tours we use the Insta360 Pro 2, Insta360 1-inch, or stitched full-frame mirrorless images for maximum quality." } },
            { "@type": "Question", "name": "Can overseas buyers view virtual tours remotely?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Matterport tours and 360° virtual experiences are accessible via any web browser or VR headset (Meta Quest). Overseas buyers and tenants can explore the property in full detail without visiting Japan." } },
            { "@type": "Question", "name": "Do you film drone video of buildings in Japan?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We have extensive experience filming high-rise buildings, hotels and large commercial complexes from the air across Japan. We handle all permits and coordinate with building management." } },
            { "@type": "Question", "name": "What are your turnaround times?", "acceptedAnswer": { "@type": "Answer", "text": "Photos are delivered within 24 hours of the shoot. Video edits and Matterport tours within 72 hours. Rush delivery is available on request for time-sensitive projects." } },
            { "@type": "Question", "name": "Do you produce videos for data centres and industrial facilities?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We have produced promotion and completion videos for data centres, warehouses, distribution centres, office buildings and shopping centres in Tokyo and throughout Japan — including projects for Hines." } },
            { "@type": "Question", "name": "Can you produce content for luxury residential properties?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We produce cinematic walkthroughs, architect interview films and comprehensive media packages for luxury residences — combining photography, video and Matterport tours with bilingual text and print production if required." } },
            { "@type": "Question", "name": "How do you handle shoot access and building management in Japan?", "acceptedAnswer": { "@type": "Answer", "text": "Our bilingual team liaises directly with building management, facility teams and local staff in Japanese. This removes the logistical friction that often delays overseas-coordinated shoots." } }
          ]
        }) }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ backgroundColor: "#0d0a07" }}>
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/tokyo-real-estate-drone-photo1.jpg"
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

              <div className="space-y-16 mb-16">
                {services.map((s) => (
                  <div key={s.num} className="pb-16 border-b" style={{ borderColor: "#e8d9c8" }}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-mono text-xs font-black" style={{ color: "#e95228" }}>{s.num}</span>
                      <h3 className="text-lg font-black" style={{ color: "#1c1208" }}>{s.title}</h3>
                    </div>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(28,18,8,0.55)" }}>{s.desc}</p>
                    <div className="space-y-1 mb-8">
                      {s.projects.map((proj, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm" style={{ color: "rgba(28,18,8,0.45)" }}>
                          <span className="shrink-0 mt-0.5" style={{ color: "#e95228" }}>—</span>
                          <span>{proj}</span>
                        </div>
                      ))}
                    </div>

                    {/* Lead image */}
                    {s.leadImage && (
                      <div className="relative w-full mb-2" style={{ paddingBottom: "56.25%" }}>
                        <Image src={s.leadImage.src} alt={s.leadImage.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 65vw" />
                      </div>
                    )}

                    {/* Photo grid */}
                    {s.gridImages.length > 0 && (
                      <PhotoGrid images={s.gridImages} />
                    )}

                    {/* Matterport embed */}
                    {s.matterport && (
                      <div className="mb-4">
                        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                          <iframe
                            src={`https://my.matterport.com/show/?m=${s.matterport}`}
                            title="Matterport 360° virtual tour"
                            allow="vr; xr; accelerometer; magnetometer; gyroscope; autoplay"
                            allowFullScreen
                            className="absolute inset-0 w-full h-full"
                            style={{ border: 0 }}
                          />
                        </div>
                        <p className="mt-2 text-sm font-black" style={{ color: "#1c1208" }}>360° Matterport virtual tour — explore in your browser or VR headset</p>
                      </div>
                    )}

                    {/* Videos */}
                    {s.videos.map((v, i) => (
                      <div key={i} className="mb-4">
                        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                          <iframe
                            src={`https://player.vimeo.com/video/${v.id}${v.hash ? `?h=${v.hash}` : ""}`}
                            title={v.caption}
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowFullScreen
                            className="absolute inset-0 w-full h-full"
                            style={{ border: 0 }}
                          />
                        </div>
                        <p className="mt-2 text-sm font-black" style={{ color: "#1c1208" }}>{v.caption}</p>
                      </div>
                    ))}
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
