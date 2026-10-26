import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/Footer";
import LandingContactForm from "@/components/LandingContactForm";
import PhotoGrid from "@/components/PhotoGrid";
import { Section, SectionLabel, Title, TrustedBy } from "@/components/editorial";

import LazyIframe from "@/components/LazyIframe";
export const metadata: Metadata = {
  title: "Real Estate Photo, Video & Virtual Tours Japan",
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
    desc: "Interior and exterior stills for listings, brochures and press: office completions, before/after renovations, shop interiors, commercial property sales photography and Tokyo cityscapes. We work from a floor plan to decide the best angles and time of day, or collaborate directly with your marketing or renovation team. HDR-merged, colour-graded and retouched.",
    projects: [
      "Yoyogi luxury residence: architectural photography and print production",
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
    desc: "High-rise buildings, hotels and large commercial complexes photographed and filmed from the air, for promotions, listings, construction records or renovation documentation. By combining drone aerials with ground photography on the same day, we deliver a consistent look at lower total cost with a single crew.",
    projects: [
      "Yokohama Bay: high-rise office fly-through",
      "Hines distribution centre: aerial and ground footage plus completion photography",
      "Fukuoka Hilton: drone video for sale promotion",
    ],
    leadImage: { src: "/images/re_drone_1.jpg", alt: "Drone aerial photography of commercial building, Japan" },
    gridImages: [
      { src: "/images/re_photo_3.jpg", alt: "Aerial drone photography of spiral building structure, Japan" },
      { src: "/images/re_drone_4.jpg", alt: "Aerial building photography Japan" },
      { src: "/images/re_drone_5.jpg", alt: "Commercial complex drone photography Tokyo" },
      { src: "/images/re_drone_6.jpg", alt: "High-rise drone photography Japan" },
    ],
    videos: [
      { id: "873209362", hash: "092fe43e56", caption: "Fukuoka Hilton: drone video for sale promotion" },
      { id: "952995962", hash: "541869b193", caption: "Distribution center: drone footage" },
    ],
    matterport: null,
  },
  {
    num: "03",
    title: "360° VR and Matterport building tours",
    desc: "Matterport Pro 3 tours let overseas buyers and tenants explore every room from anywhere in the world, via browser or VR headset (Meta Quest). We also produce 360° tours using the Insta360 Pro 2, Insta360 1-inch, or stitched full-frame mirrorless images for maximum quality, covering offices, warehouses, distribution centres and outdoor spaces.",
    projects: [
      "Warehouse and distribution centre 360° tour",
      "Hiroshima Peace Memorial Park: 360° virtual experience",
      "Yoyogi luxury residence: Matterport tour for overseas buyers",
    ],
    leadImage: null,
    gridImages: [],
    videos: [],
    matterport: "14HzQMjL4RW",
  },
  {
    num: "04",
    title: "Building, residence and facilities videos",
    desc: "Cinematic promotion and completion videos for data centres, hotels, warehouses, office buildings, residences and shopping centres. We combine interview, b-roll and aerial footage into compelling promotional films, and can package photography, drone and Matterport into a single multi-day shoot for maximum efficiency. Photos delivered within 24 hours; video and virtual tours within 72 hours.",
    projects: [
      "Hines distribution centre: promotion video",
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
    a: "Yes, this is one of our key strengths. We combine ground photography, drone photography and video, and Matterport virtual tours in a single multi-day shoot. One crew, one consistent look, lower total cost.",
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
    a: "Yes. We have produced promotion and completion videos for data centres, warehouses, distribution centres, office buildings and shopping centres in Tokyo and throughout Japan, including projects for Hines.",
  },
  {
    q: "Can you produce content for luxury residential properties?",
    a: "Yes. We produce cinematic walkthroughs, architect interview films and comprehensive media packages for luxury residences, combining photography, video and Matterport tours with bilingual text and print production if required.",
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
            { "@type": "Question", "name": "Can you combine photography, drone, video and Matterport in one shoot?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, this is one of our key strengths. We combine ground photography, drone photography and video, and Matterport virtual tours in a single multi-day shoot. One crew, one consistent look, lower total cost." } },
            { "@type": "Question", "name": "What Matterport equipment do you use?", "acceptedAnswer": { "@type": "Answer", "text": "We use the Matterport Pro 3 camera for high-quality interior scanning, including large and outdoor spaces. For 360° tours we use the Insta360 Pro 2, Insta360 1-inch, or stitched full-frame mirrorless images for maximum quality." } },
            { "@type": "Question", "name": "Can overseas buyers view virtual tours remotely?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Matterport tours and 360° virtual experiences are accessible via any web browser or VR headset (Meta Quest). Overseas buyers and tenants can explore the property in full detail without visiting Japan." } },
            { "@type": "Question", "name": "Do you film drone video of buildings in Japan?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We have extensive experience filming high-rise buildings, hotels and large commercial complexes from the air across Japan. We handle all permits and coordinate with building management." } },
            { "@type": "Question", "name": "What are your turnaround times?", "acceptedAnswer": { "@type": "Answer", "text": "Photos are delivered within 24 hours of the shoot. Video edits and Matterport tours within 72 hours. Rush delivery is available on request for time-sensitive projects." } },
            { "@type": "Question", "name": "Do you produce videos for data centres and industrial facilities?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We have produced promotion and completion videos for data centres, warehouses, distribution centres, office buildings and shopping centres in Tokyo and throughout Japan, including projects for Hines." } },
            { "@type": "Question", "name": "Can you produce content for luxury residential properties?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We produce cinematic walkthroughs, architect interview films and comprehensive media packages for luxury residences, combining photography, video and Matterport tours with bilingual text and print production if required." } },
            { "@type": "Question", "name": "How do you handle shoot access and building management in Japan?", "acceptedAnswer": { "@type": "Answer", "text": "Our bilingual team liaises directly with building management, facility teams and local staff in Japanese. This removes the logistical friction that often delays overseas-coordinated shoots." } }
          ]
        }) }}
      />

      {/* Hero: headline on cream, tall photo with vertical Japanese on the right */}
      <section className="border-b" style={{ borderColor: "#1c1208" }}>
        <div className="fij-wrap flex flex-wrap lg:flex-nowrap gap-x-12">
          <div className="flex-[7_1_560px] pt-16 pb-12 lg:pt-24 lg:pb-14 flex flex-col justify-between gap-12">
            <div>
              <p className="text-sm font-medium mb-8" style={{ color: "#6b5a48" }}>Real Estate Media · Tokyo · Japan</p>
              <Title as="h1" className="fij-h1">Real Estate Photo, Video &amp; Virtual Tours in Japan</Title>
            </div>
            <div className="flex flex-wrap items-end gap-x-12 gap-y-8">
              <p className="fij-lede flex-[1_1_340px]" style={{ color: "#4a3a2a" }}>
                Commercial real estate photography, drone video and 360° Matterport virtual tours for
                developers, agencies and corporate real estate teams across Japan.
              </p>
              <a href="#enquire" className="fij-btn shrink-0">Get a free quote</a>
            </div>
          </div>
          <div className="relative flex-[5_1_380px] min-h-[420px] lg:min-h-[640px] -mx-[clamp(20px,4vw,48px)] lg:ml-0 overflow-hidden" style={{ backgroundColor: "#0d0a07" }}>
            <Image
              src="/images/tokyo-real-estate-drone-photo1.jpg"
              alt="Drone photo of a modern office building and landscaped plaza in Tokyo"
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
              不動産・建築の写真と映像
            </p>
          </div>
        </div>
      </section>

      <TrustedBy clients={clients} />

      {/* 01 What we deliver, beside the sticky enquiry form */}
      <section className="border-b" style={{ borderColor: "#1c1208" }}>
        <div className="fij-wrap py-20 md:py-28 grid lg:grid-cols-[minmax(0,1fr)_420px] gap-14 xl:gap-20">
          <div className="min-w-0 flex flex-col md:flex-row gap-6 md:gap-14">
            <SectionLabel num="01" label="撮影内容" />
            <div className="flex-1 min-w-0">
              <Title className="fij-h2 mb-14">Showcasing property assets in the best light</Title>

              <div className="border-b" style={{ borderColor: "#1c1208" }}>
                {services.map((s) => {
                  const photos = s.leadImage ? [s.leadImage, ...s.gridImages] : s.gridImages;
                  return (
                    <article key={s.num} className="py-10 border-t" style={{ borderColor: "#1c1208" }}>
                      <div className="flex gap-6 mb-8">
                        <span className="w-8 shrink-0 pt-1.5 text-[13px] font-semibold tabular-nums" style={{ color: "var(--fij-num)" }}>{s.num}</span>
                        <div className="min-w-0">
                          <h3 className="fij-h3 mb-3">{s.title}</h3>
                          <p className="text-[15px] leading-relaxed mb-5" style={{ color: "#4a3a2a" }}>{s.desc}</p>
                          <ul className="border-t" style={{ borderColor: "#e8d9c8" }}>
                            {s.projects.map((proj, i) => (
                              <li key={i} className="py-2.5 border-b text-[15px] font-medium" style={{ borderColor: "#e8d9c8" }}>
                                {proj}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="space-y-6">
                        {/* Photo mosaic (lead image first) */}
                        {photos.length > 0 && <PhotoGrid images={photos} />}

                        {/* Matterport embed */}
                        {s.matterport && (
                          <figure>
                            <div className="relative w-full aspect-[16/9]" style={{ backgroundColor: "#0d0a07" }}>
                              <LazyIframe
                                src={`https://my.matterport.com/show/?m=${s.matterport}`}
                                title="Matterport 360° virtual tour"
                                allow="vr; xr; accelerometer; magnetometer; gyroscope; autoplay"
                                allowFullScreen
                                className="absolute inset-0 w-full h-full"
                                style={{ border: 0 }}
                              />
                            </div>
                            <figcaption className="mt-3 text-[15px] font-semibold">360° Matterport virtual tour: explore in your browser or VR headset</figcaption>
                          </figure>
                        )}

                        {/* Videos */}
                        {s.videos.length > 0 && (
                          <div className="grid sm:grid-cols-2 gap-x-4 gap-y-6">
                            {s.videos.map((v, i) => (
                              <figure key={v.id} className={s.videos.length % 2 === 1 && i === 0 ? "sm:col-span-2" : ""}>
                                <div className="relative w-full aspect-[16/9]" style={{ backgroundColor: "#0d0a07" }}>
                                  <LazyIframe
                                    src={`https://player.vimeo.com/video/${v.id}${v.hash ? `?h=${v.hash}` : ""}`}
                                    title={v.caption}
                                    allow="autoplay; fullscreen; picture-in-picture"
                                    allowFullScreen
                                    className="absolute inset-0 w-full h-full"
                                    style={{ border: 0 }}
                                    loading="lazy"
                                  />
                                </div>
                                <figcaption className="mt-3 text-[15px] font-semibold leading-snug">{v.caption}</figcaption>
                              </figure>
                            ))}
                          </div>
                        )}
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Sticky enquiry form */}
          <aside>
            <div id="enquire" className="sticky top-24 scroll-mt-24 border p-8 lg:p-10" style={{ backgroundColor: "#fff", borderColor: "#1c1208" }}>
              <Title as="h2" className="text-[28px] leading-tight font-semibold tracking-[-0.03em] mb-2">Get a free quote</Title>
              <p className="text-[15px] mb-6" style={{ color: "#4a3a2a" }}>
                Tell us about your property. We reply within 24 hours.
              </p>
              <LandingContactForm service="Real Estate Photo & Video Japan" />
            </div>
          </aside>
        </div>
      </section>

      {/* 02 Client feedback */}
      <Section num="02" label="お客様の声" tone="sand" aria-labelledby="feedback-heading">
        <h2 id="feedback-heading" className="sr-only">Client feedback</h2>
        <figure className="max-w-5xl">
          <blockquote className="text-[30px] sm:text-[40px] lg:text-[52px] leading-[1.12] font-semibold tracking-[-0.035em] mb-7">
            <span style={{ color: "#e95228" }}>&ldquo;</span>Thank you for your super speedy work and being so flexible with the suggestions for capturing the unique elements of the design. We love your &lsquo;human&rsquo; viewpoint so thank you for capturing this.<span style={{ color: "#e95228" }}>&rdquo;</span>
          </blockquote>
          <figcaption className="text-[15px]" style={{ color: "#6b5a48" }}>Workplace Designer · Multinational Real Estate Company</figcaption>
        </figure>
      </Section>

      {/* 03 FAQ */}
      <Section num="03" label="よくある質問" bordered aria-labelledby="faq-heading">
        <div className="flex flex-wrap gap-x-16 gap-y-10">
          <Title id="faq-heading" className="fij-h2 flex-[1_1_240px]">FAQ</Title>
          <div className="flex-[3_1_520px] min-w-0 border-t-2" style={{ borderColor: "#1c1208" }}>
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

      {/* 04 Prefer to talk? */}
      <Section num="04" label="お問い合わせ" tone="ink" aria-labelledby="talk-heading">
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
