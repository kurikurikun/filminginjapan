import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionLabel, Title, TrustedBy } from "@/components/editorial";
import Footer from "@/components/Footer";
import LandingContactForm from "@/components/LandingContactForm";
import LazyIframe from "@/components/LazyIframe";

export const metadata: Metadata = {
  title: "データセンターの映像制作・写真撮影（英語対応）",
  description: "データセンターの開所式撮影、竣工・プロモーション動画、採用動画、施設写真を英語・日本語のバイリンガルチームが制作。Google、Princeton Digital Groupの実績あり。",
  alternates: {
    canonical: "https://www.filminginjapan.com/jp/data-center-video",
    languages: {
      "en": "https://www.filminginjapan.com/data-center-video-japan",
      "ja": "https://www.filminginjapan.com/jp/data-center-video",
      "x-default": "https://www.filminginjapan.com/data-center-video-japan",
    },
  },
};

const services = [
  "開所式・テープカットの撮影",
  "新施設の竣工・プロモーション動画",
  "採用動画・社員紹介動画",
  "経営陣・パートナー・顧客へのインタビュー",
  "キャンパスと周辺のドローン空撮",
  "施設写真：サーバールーム、設備室、外観",
  "イベント当日のSNS用写真セレクト",
  "日本語・英語の字幕と言語別バージョン",
];

const differentiators = [
  {
    title: "施設のルールに沿って撮影",
    desc: "立会い付きの入館、安全教育、入館証の手続き、撮影禁止エリア、NDAにも慣れています。事前に撮影リストと立入制限エリアを確認し、公開前にすべての映像・写真をご確認いただけます。",
  },
  {
    title: "現場でもバイリンガル",
    desc: "日本のデータセンター案件には、海外の事業者、国内の施工会社、自治体、現場スタッフが関わります。英語と日本語の両方で演出・インタビューを行うので、意図が正しく伝わります。",
  },
  {
    title: "少人数・コンパクトな機材",
    desc: "静音・バッテリー駆動の機材を持つ少人数チームで、セキュリティを通りやすく、運用や来賓の妨げになりません。",
  },
  {
    title: "写真・映像・ドローンをひとつのチームで",
    desc: "写真、インタビュー、Bロール、空撮を一度の訪問で撮影。プレス、SNS、採用、投資家向け資料まで統一したトーンで仕上がり、施設の手配も一度で済みます。",
  },
];

const projects = [
  {
    title: "Google Japan 印西データセンター 採用動画",
    meta: "Google · 千葉県印西市",
    desc: "東京近郊の印西データセンターで働くGoogle Japan社員に、Googleで働く理由を聞いた採用動画。インタビューとBロールを現地で撮影しました。",
    src: "https://www.youtube.com/embed/UbkuSD-ht1U?rel=0",
  },
  {
    title: "Princeton Digital Group データセンター開所式（埼玉）",
    meta: "Princeton Digital Group · 埼玉 · 2025",
    desc: "開所式のダイジェスト動画と写真撮影。SNS用の写真セレクトはイベント終了後すぐに納品しました。",
    src: "https://player.vimeo.com/video/1079354745?h=17c53b18eb&title=0&byline=0&portrait=0",
  },
];

const faqs = [
  {
    q: "稼働中のデータセンター内でも撮影できますか？",
    a: "はい。施設のセキュリティ・安全手順に従い、立会いのもとで撮影します。映してよいエリア、ラック、設備は事前に確認し、機密性の高い箇所は映しません。公開前にすべての編集と写真をご確認いただけます。",
  },
  {
    q: "どのようなデータセンター動画を制作していますか？",
    a: "開所式のダイジェスト、竣工・プロモーション動画、採用・社員紹介動画、経営陣やパートナーのインタビュー、工事記録、建物・設備・サーバールームの写真撮影などです。",
  },
  {
    q: "開所式の撮影とプロモーション動画の撮影を同じ日にできますか？",
    a: "はい。開所式の撮影と合わせて、施設のインタビュー、Bロール、ドローン撮影を同じ訪問で行うお客様が多くいます。チームも入館手続きも一度で済み、費用も抑えられます。",
  },
  {
    q: "データセンターのドローン撮影はできますか？",
    a: "はい。施設の許可と法令の範囲で対応します。飛行計画や許可申請、建物管理者との調整も行います。",
  },
  {
    q: "対応エリアはどこですか？",
    a: "東京と広島を拠点に、印西・埼玉など首都圏のデータセンター集積地や大阪エリアを含め、日本全国に対応します。",
  },
  {
    q: "英語と日本語で納品できますか？",
    a: "はい。インタビューはどちらの言語でも行えます。英語字幕、日本語字幕、または両方のバージョンで納品します。",
  },
];

const clients = ["Google", "Princeton Digital Group", "JLL", "CBRE", "Hines", "NEC"];

export default function DataCenterVideoPageJp() {
  return (
    <div lang="ja" style={{ backgroundColor: "#fdf8f3" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map((faq) => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": { "@type": "Answer", "text": faq.a },
          })),
        }) }}
      />

      {/* Hero: headline on cream, opening-ceremony video on night with vertical Japanese */}
      <section className="border-b" style={{ borderColor: "#1c1208" }}>
        <div className="fij-wrap flex flex-wrap lg:flex-nowrap gap-x-12">
          <div className="flex-[7_1_560px] pt-16 pb-12 lg:pt-24 lg:pb-14 flex flex-col justify-between gap-12">
            <div>
              <p className="text-sm font-medium mb-8" style={{ color: "#6b5a48" }}>データセンター · 東京 · 日本</p>
              <Title as="h1" className="fij-h1 break-keep" stop="。">データセンターの映像制作と写真撮影</Title>
            </div>
            <div className="flex flex-wrap items-end gap-x-12 gap-y-8">
              <div className="flex-[1_1_340px]">
                <p className="text-xl font-semibold tracking-[-0.01em] leading-snug mb-2.5">
                  開所式、竣工動画、採用動画を施設の中で撮影します。
                </p>
                <p className="fij-lede" style={{ color: "#4a3a2a" }}>
                  東京のバイリンガルチームが施設のセキュリティルールに沿って撮影し、事業者、施工会社、スタッフの声を英語と日本語で映像にまとめます。
                </p>
              </div>
              <a href="#enquire" className="fij-btn shrink-0">無料でお見積り</a>
            </div>
          </div>
          <div className="relative flex-[5_1_380px] -mx-[clamp(20px,4vw,48px)] lg:ml-0 flex items-center px-[clamp(20px,4vw,48px)] lg:pl-10 lg:pr-20 py-12" style={{ backgroundColor: "#0d0a07" }}>
            <figure className="w-full">
              <div className="relative aspect-[16/9]" style={{ backgroundColor: "#241a12" }}>
                <LazyIframe
                  src={projects[1].src}
                  className="absolute inset-0 w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="Princeton Digital Group データセンター開所式（埼玉）"
                />
              </div>
              <figcaption className="mt-3 text-sm" style={{ color: "rgba(253,248,243,0.7)" }}>
                Princeton Digital Group データセンター開所式（埼玉）
              </figcaption>
            </figure>
            <p
              lang="en"
              aria-hidden="true"
              className="hidden lg:block absolute top-8 right-6 font-semibold uppercase text-[26px] lg:text-[30px] tracking-[0.18em]"
              style={{ writingMode: "vertical-rl", color: "#fdf8f3" }}
            >
              Data centre film
            </p>
          </div>
        </div>
      </section>

      <TrustedBy clients={clients} label="実績企業" />

      {/* What we film + how we work, beside the sticky enquiry form */}
      <section className="border-b" style={{ borderColor: "#1c1208" }}>
        <div className="fij-wrap py-20 md:py-28 grid lg:grid-cols-[minmax(0,1fr)_420px] gap-14 xl:gap-20">
          <div className="min-w-0 space-y-24">
            {/* 01 What we film */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-14">
              <SectionLabel num="01" label="What we film" labelLang="en" />
              <div className="flex-1 min-w-0">
                <Title className="fij-h2 mb-8" stop="。">データセンターでの撮影内容</Title>
                <p className="fij-lede max-w-xl mb-12" style={{ color: "#4a3a2a" }}>
                  開所の日から、施設を支える人材の採用まで。新しいデータセンターに必要な映像を撮影します。
                </p>
                <ol className="fij-cells" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(50%, 220px), 1fr))" }}>
                  {services.map((s, i) => (
                    <li key={i} className="p-4 pb-6 sm:p-6 sm:pb-8 flex flex-col gap-5 sm:gap-7 sm:min-h-[150px]">
                      <span className="text-[13px] font-semibold tabular-nums" style={{ color: "var(--fij-num)" }}>{String(i + 1).padStart(2, "0")}</span>
                      <span className="text-base sm:text-[19px] leading-snug font-semibold tracking-[-0.015em]">{s}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* 02 How we work on site */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-14">
              <SectionLabel num="02" label="On site" labelLang="en" />
              <div className="flex-1 min-w-0">
                <Title className="fij-h2 mb-12" stop="。">現場での進め方</Title>
                <div>
                  {differentiators.map((d, i) => (
                    <div key={i} className={`flex gap-6 py-6 border-t ${i === differentiators.length - 1 ? "border-b" : ""}`} style={{ borderColor: "#1c1208" }}>
                      <span className="w-8 shrink-0 pt-1.5 text-[13px] font-semibold tabular-nums" style={{ color: "var(--fij-num)" }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="fij-h3 mb-2">{d.title}</h3>
                        <p className="text-[15px] leading-relaxed" style={{ color: "#4a3a2a" }}>{d.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sticky enquiry form */}
          <aside>
            <div id="enquire" className="sticky top-24 scroll-mt-24 border p-8 lg:p-10" style={{ backgroundColor: "#fff", borderColor: "#1c1208" }}>
              <Title as="h2" className="text-[28px] leading-tight font-semibold tracking-[-0.03em] mb-2">お問い合わせ</Title>
              <p className="text-[15px] mb-6" style={{ color: "#4a3a2a" }}>
                施設と日程についてお知らせください。24時間以内にご返信します。
              </p>
              <LandingContactForm service="Data Centre Video JP" lang="jp" />
            </div>
          </aside>
        </div>
      </section>

      {/* 03 Data centre projects */}
      <Section num="03" label="Projects" labelLang="en" tone="night" aria-labelledby="projects-heading">
        <Title id="projects-heading" tone="night" className="fij-h2 mb-16" stop="。">データセンターの実績</Title>
        {projects.map((p, i) => (
          <article
            key={p.title}
            className={`flex flex-wrap items-center gap-x-14 gap-y-8 py-12 border-t ${i % 2 ? "flex-row-reverse" : ""}`}
            style={{ borderColor: "rgba(253,248,243,0.25)" }}
          >
            <div className="relative flex-[1.25_1_440px] aspect-[16/9]" style={{ backgroundColor: "#241a12" }}>
              <LazyIframe
                src={p.src}
                className="absolute inset-0 w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title={p.title}
                loading="lazy"
              />
            </div>
            <div className="flex-[1_1_340px]">
              <p className="text-sm font-medium mb-4" style={{ color: "#f07a52" }}>{p.meta}</p>
              <h3 className="text-[26px] lg:text-[36px] leading-[1.1] font-semibold tracking-[-0.03em] mb-4">{p.title}</h3>
              <p className="text-base leading-relaxed" style={{ color: "rgba(253,248,243,0.78)" }}>{p.desc}</p>
            </div>
          </article>
        ))}
        <p className="pt-10 border-t text-base" style={{ borderColor: "rgba(253,248,243,0.25)", color: "rgba(253,248,243,0.78)" }}>
          その他の建物の竣工・プロモーション動画は{" "}
          <Link href="/jp/real-estate-photo-video-tokyo-japan" className="fij-link" style={{ color: "#fdf8f3" }}>不動産・施設の撮影</Link>{" "}をご覧ください。
        </p>
      </Section>

      {/* 04 FAQ */}
      <Section num="04" label="FAQ" labelLang="en" aria-labelledby="faq-heading">
        <div className="flex flex-wrap gap-x-16 gap-y-10">
          <Title id="faq-heading" className="fij-h2 flex-[1_1_240px]" stop="。">よくある質問</Title>
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

      {/* 05 Prefer to talk? */}
      <Section num="05" label="Contact" labelLang="en" tone="ink" aria-labelledby="talk-heading">
        <div className="flex flex-wrap items-end justify-between gap-x-16 gap-y-8">
          <div>
            <h2 id="talk-heading" className="fij-h2 mb-4">お電話・メッセージでも</h2>
            <p className="fij-lede" style={{ color: "rgba(253,248,243,0.78)" }}>WhatsAppまたはメールでお気軽にどうぞ。</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="https://wa.me/819038800895" className="fij-btn-orange">WhatsAppで連絡</a>
            <a href="mailto:filminginjapan@move-ment.co" className="fij-btn-outline" style={{ color: "#fdf8f3" }}>メールで連絡</a>
          </div>
        </div>
      </Section>

      <Footer lang="jp" />
    </div>
  );
}
