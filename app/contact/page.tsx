import type { Metadata } from "next";
import Image from "next/image";
import { SectionLabel, Title, Kicker } from "@/components/editorial";
import Footer from "@/components/Footer";
import LandingContactForm from "@/components/LandingContactForm";

export const metadata: Metadata = {
  title: "Corporate Video Production Quote — Tokyo Japan",
  description: "Get in touch with Filming in Japan for video production, photography and virtual tours. We reply within 24 hours.",
  alternates: {
    canonical: "https://www.filminginjapan.com/contact",
    languages: {
      "en": "https://www.filminginjapan.com/contact",
      "ja": "https://www.filminginjapan.com/jp/contact",
      "x-default": "https://www.filminginjapan.com/contact",
    },
  },
};

export default function ContactPage() {
  return (
    <div style={{ backgroundColor: "#fdf8f3" }}>

      {/* Hero: headline + intro on cream, contact photo on the right */}
      <section className="border-b" style={{ borderColor: "#1c1208" }}>
        <div className="fij-wrap flex flex-wrap lg:flex-nowrap gap-x-12">
          <div className="flex-[7_1_560px] pt-16 pb-12 lg:pt-24 lg:pb-14 flex flex-col justify-between gap-12">
            <div>
              <p className="text-sm font-medium mb-8" style={{ color: "#6b5a48" }}>Tokyo · Japan</p>
              <Title as="h1" className="fij-h1">Get in touch</Title>
            </div>
            <div className="flex flex-wrap items-end gap-x-12 gap-y-8">
              <p className="fij-lede flex-[1_1_340px] max-w-xl" style={{ color: "#4a3a2a" }}>Tell us about your project. We reply within 24 hours.</p>
              <a href="#enquire" className="fij-btn shrink-0">Get a free quote</a>
            </div>
          </div>
          <div className="relative flex-[5_1_380px] min-h-[340px] lg:min-h-[520px] -mx-[clamp(20px,4vw,48px)] lg:ml-0 overflow-hidden" style={{ backgroundColor: "#0d0a07" }}>
            <Image
              src="/images/japan_video_production_contact.jpg"
              alt=""
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
              お問い合わせ
            </p>
          </div>
        </div>
      </section>

      {/* Form beside the contact details */}
      <section className="border-b" style={{ borderColor: "#1c1208" }}>
        <div className="fij-wrap py-20 md:py-28 grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-14 xl:gap-20">

          {/* 01 Form */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-14 min-w-0">
            <SectionLabel num="01" label="お問い合わせ" />
            <div id="enquire" className="flex-1 min-w-0 scroll-mt-24 border p-8 lg:p-10" style={{ backgroundColor: "#fff", borderColor: "#1c1208" }}>
              <Title as="h2" className="text-[28px] leading-tight font-semibold tracking-[-0.03em] mb-2">Get a free quote</Title>
              <p className="text-[15px] mb-6" style={{ color: "#4a3a2a" }}>Tell us about your project. We reply within 24 hours.</p>
              <LandingContactForm service="General Enquiry" />
            </div>
          </div>

          {/* 02 Contact details */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-14 min-w-0">
            <SectionLabel num="02" label="連絡先" />
            <dl className="flex-1 min-w-0 border-t-2" style={{ borderColor: "#1c1208" }}>
              <div className="py-7 border-b" style={{ borderColor: "#1c1208" }}>
                <dt><Kicker>WhatsApp</Kicker></dt>
                <dd>
                  <a href="https://wa.me/819038800895" className="text-[26px] sm:text-[32px] font-semibold tracking-[-0.02em] hover:text-[#c43d10] transition-colors">
                    +81 90 3880 0895
                  </a>
                </dd>
              </div>
              <div className="py-7 border-b" style={{ borderColor: "#1c1208" }}>
                <dt><Kicker>Email</Kicker></dt>
                <dd>
                  <a href="mailto:filminginjapan@move-ment.co" className="text-[22px] sm:text-[32px] font-semibold tracking-[-0.02em] break-all hover:text-[#c43d10] transition-colors">
                    filminginjapan@move-ment.co
                  </a>
                </dd>
              </div>
              <div className="py-7 border-b" style={{ borderColor: "#1c1208" }}>
                <dt><Kicker>Based in</Kicker></dt>
                <dd>
                  <p className="text-[22px] font-semibold tracking-[-0.02em]">Tokyo &amp; Hiroshima, Japan</p>
                  <p className="text-[15px] mt-1" style={{ color: "#6b5a48" }}>Available nationwide</p>
                </dd>
              </div>
              <div className="py-7 border-b" style={{ borderColor: "#1c1208" }}>
                <dt className="flex items-center gap-3 mb-3">
                  <Image src="/images/ds-mark.svg" alt="DS designated store mark" width={40} height={32} unoptimized />
                  <span className="fij-h3">Diplomatic missions</span>
                </dt>
                <dd className="text-[15px] leading-relaxed max-w-md" style={{ color: "#4a3a2a" }}>
                  Move-ment is designated by Japan&apos;s Ministry of Foreign Affairs as a store for consumption tax exemption for foreign diplomatic missions and international organisations (designated September 2026). Embassies, consulates and UN agencies holding a MOFA tax exemption card can procure our services free of Japanese consumption tax.
                </dd>
              </div>
            </dl>
          </div>

        </div>
      </section>

      <Footer lang="en" />
    </div>
  );
}
