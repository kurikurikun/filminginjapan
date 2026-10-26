import type { Metadata } from "next";
import Image from "next/image";
import { SectionLabel, Title, Kicker } from "@/components/editorial";
import Footer from "@/components/Footer";
import LandingContactForm from "@/components/LandingContactForm";

export const metadata: Metadata = {
  title: "映像制作のお見積もり・ご相談",
  description: "映像制作・写真撮影・VRツアーのご相談はこちら。24時間以内にご返信します。",
  alternates: {
    canonical: "https://www.filminginjapan.com/jp/contact",
    languages: {
      "en": "https://www.filminginjapan.com/contact",
      "ja": "https://www.filminginjapan.com/jp/contact",
      "x-default": "https://www.filminginjapan.com/contact",
    },
  },
};

export default function ContactPageJp() {
  return (
    <div lang="ja" style={{ backgroundColor: "#fdf8f3" }}>

      {/* Hero: headline + intro on cream, contact photo on the right */}
      <section className="border-b" style={{ borderColor: "#1c1208" }}>
        <div className="fij-wrap flex flex-wrap lg:flex-nowrap gap-x-12">
          <div className="flex-[7_1_560px] pt-16 pb-12 lg:pt-24 lg:pb-14 flex flex-col justify-between gap-12">
            <div>
              <p className="text-sm font-medium mb-8" style={{ color: "#6b5a48" }}>東京 · 日本</p>
              <Title as="h1" className="fij-h1 break-keep">お気軽に<br />ご相談ください</Title>
            </div>
            <div className="flex flex-wrap items-end gap-x-12 gap-y-8">
              <p className="fij-lede flex-[1_1_340px] max-w-xl" style={{ color: "#4a3a2a" }}>プロジェクトの内容をお聞かせください。24時間以内にご返信します。</p>
              <a href="#enquire" className="fij-btn shrink-0">無料見積もりを依頼する</a>
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
              lang="en"
              aria-hidden="true"
              className="absolute top-8 right-6 font-sans font-semibold uppercase text-[22px] lg:text-[26px] tracking-[0.2em]"
              style={{ writingMode: "vertical-rl", color: "#fdf8f3", textShadow: "0 1px 12px rgba(0,0,0,0.35)" }}
            >
              Contact
            </p>
          </div>
        </div>
      </section>

      {/* Form beside the contact details */}
      <section className="border-b" style={{ borderColor: "#1c1208" }}>
        <div className="fij-wrap py-20 md:py-28 grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-14 xl:gap-20">

          {/* 01 Form */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-14 min-w-0">
            <SectionLabel num="01" label="Enquire" labelLang="en" />
            <div id="enquire" className="flex-1 min-w-0 scroll-mt-24 border p-8 lg:p-10" style={{ backgroundColor: "#fff", borderColor: "#1c1208" }}>
              <Title as="h2" className="text-[28px] leading-tight font-semibold tracking-[-0.03em] mb-2">無料見積もりを依頼する</Title>
              <p className="text-[15px] mb-6" style={{ color: "#4a3a2a" }}>プロジェクトの内容をお聞かせください。24時間以内にご返信します。</p>
              <LandingContactForm service="General Enquiry (JP)" lang="jp" />
            </div>
          </div>

          {/* 02 Contact details */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-14 min-w-0">
            <SectionLabel num="02" label="Details" labelLang="en" />
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
                <dt><Kicker>メール</Kicker></dt>
                <dd>
                  <a href="mailto:filminginjapan@move-ment.co" className="text-[22px] sm:text-[32px] font-semibold tracking-[-0.02em] break-all hover:text-[#c43d10] transition-colors">
                    filminginjapan@move-ment.co
                  </a>
                </dd>
              </div>
              <div className="py-7 border-b" style={{ borderColor: "#1c1208" }}>
                <dt><Kicker>拠点</Kicker></dt>
                <dd>
                  <p className="text-[22px] font-semibold tracking-[-0.02em]">東京・広島</p>
                  <p className="text-[15px] mt-1" style={{ color: "#6b5a48" }}>全国対応</p>
                </dd>
              </div>
              <div className="py-7 border-b" style={{ borderColor: "#1c1208" }}>
                <dt className="flex items-center gap-3 mb-3">
                  <Image src="/images/ds-mark.svg" alt="DS 消費税免除指定店舗標識" width={40} height={32} unoptimized />
                  <span className="fij-h3">外国公館・国際機関</span>
                </dt>
                <dd className="text-[15px] leading-relaxed max-w-md" style={{ color: "#4a3a2a" }}>
                  外務省『外国公館等に対する消費税免除指定店舗』（2026年9月指定）。大使館・領事館・国際機関のお客様は、免税カードのご提示により消費税抜き価格でご利用いただけます。
                </dd>
              </div>
            </dl>
          </div>

        </div>
      </section>

      <Footer lang="jp" />
    </div>
  );
}
