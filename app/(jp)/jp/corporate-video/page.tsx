import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import { Section, SectionLabel, TrustedBy } from "@/components/editorial";
import Footer from "@/components/Footer";
import LandingContactForm from "@/components/LandingContactForm";

import LazyIframe from "@/components/LazyIframe";
export const metadata: Metadata = {
  title: "採用動画・インタビュー動画制作",
  description:
    "日本全国対応のコーポレートインタビュー、ブランドフィルム、採用動画制作。日英バイリンガルチーム。Sony・Google・Microsoft・HP・EY・Canonなど多数の実績。",
  alternates: {
    canonical: "https://www.filminginjapan.com/jp/corporate-video",
    languages: {
      "en": "https://www.filminginjapan.com/corporate-branding-videos-japan",
      "ja": "https://www.filminginjapan.com/jp/corporate-video",
      "x-default": "https://www.filminginjapan.com/corporate-branding-videos-japan",
    },
  },
};

const recruitmentStyles = [
  {
    num: "①",
    title: "オンライン取材",
    img: "/images/recruitment-video-tokyo.jpg",
    alt: "オンライン取材・採用動画",
    desc: null,
    bullets: [
      "SNSに適した縦型、説明会に適した横型の動画",
      "制作の手間が大幅に減ることで担当者の負担軽減",
      "Z世代にとって信頼性のあるリアルな声は共感を生む",
      "低予算で豊富なプランにより稟議を通しやすい",
    ],
    link: "https://www.tesutemo.co",
  },
  {
    num: "②",
    title: "オフィスで取材",
    img: "/images/customer_testimonial_office_tokyo.jpeg",
    alt: "オフィス取材・採用動画 東京",
    desc: "ドキュメンタリースタイルで、テレプロンプターや決まり文句を排除し、社員の方々の本音に焦点を当てます。企業理念、彼らを突き動かすもの、そして働く場所として選ばれる理由を、彼ら自身のリアルなコメントを通して伝えます。",
    bullets: null,
    link: null,
  },
];

const faqs = [
  {
    q: "会社のメッセージに合った動画を制作してもらえますか？",
    a: "まずマーケティング担当者や制作会社と打ち合わせを行い、核となるメッセージと目標を把握します。使用場所（ウェブサイト、SNS、展示会など）も確認し、尺・スタイル・トーンをマーケティング戦略に合わせて設計します。",
  },
  {
    q: "スクリプトや絵コンテは必ず必要ですか？",
    a: "必須ではありません。ドキュメンタリースタイルでの撮影も可能ですが、絵コンテを用意することで各シーンがメッセージを支える構成になり、編集段階でのサプライズを防ぐことができます。",
  },
  {
    q: "日本でのコーポレート動画制作の予算はどう決まりますか？",
    a: "主な要素は撮影日数と納品物の数です。その他にはプリプロダクションの内容、出演者、ロケ地、機材、プロの役者が必要かどうかなどが影響します。ご予算に合わせたプランのご提案も可能です。",
  },
  {
    q: "出演者やロケ地のコーディネートもお願いできますか？",
    a: "はい。日本人・外国人タレントのキャスティング、スタジオや屋外ロケ地のアレンジも対応しています。社員やインフルエンサーなど非プロの出演者との撮影も得意としており、自然で魅力的なコンテンツを制作します。",
  },
  {
    q: "撮影当日のクルー規模はどれくらいですか？",
    a: "予算と制作内容によって異なります。大規模な撮影では増員対応も可能ですが、非プロの出演者と撮影する場合は少人数のクルーでリラックスした雰囲気を作ることを重視しています。",
  },
  {
    q: "海外のチームがリモートでインタビューをディレクションできますか？",
    a: "はい。リモート映像で海外のディレクターやプロデューサーを現場に繋ぎ、観察・フィードバック・インタビューの質問を直接行っていただくことが可能です。",
  },
  {
    q: "コーポレート動画の制作期間はどれくらいですか？",
    a: "小規模な撮影であれば企画から納品まで2〜3週間、大規模な制作では1〜2ヶ月が目安です。希望納期の4〜6週間前にはご相談いただくことをおすすめします。",
  },
  {
    q: "日本での撮影許可は必要ですか？",
    a: "三脚を使用する場合、公共の場所では基本的に許可が必要です。3〜5名の小規模な手持ちクルーであれば不要なケースも多いですが、例外もあります。ケースバイケースでアドバイスいたします。",
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
  "3点照明、ブーム＆ラベルマイク、タイムコード同期",
  "スライダー、ジンバル、ポータブルグリーンスクリーン",
];

const clients = ["Sony", "HP", "Canon", "EY", "NEC", "Accenture", "Microsoft", "Google"];

const workflow = [
  {
    step: "企画",
    desc: "事前にロケ地の下見を行い、写真を撮影。その後、打ち合わせで最適なオプションを検討します。メッセージ・尺・トーン・使用場所（ウェブサイト・SNS・展示会）をすり合わせます。",
  },
  {
    step: "撮影",
    desc: "撮影当日は日本語または英語でインタビューを進め、出演者がリラックスできる環境を整えます。海外のプロデューサーやディレクターをリモートで繋ぎ、モニタリングや質問の直接投げかけにも対応します。",
  },
  {
    step: "編集",
    desc: "日本語・英語ネイティブの編集者がお客様のスタイルガイドまたは事前に確認したスクリプトに沿って編集。16:9（YouTube・ウェブサイト用）、9:16（SNS用）など各フォーマットで納品。Google Drive・Dropbox・MASV・Frame.io、または宅配便のハードディスクでお届けします。",
  },
];

const recruitmentVideos = [
  {
    src: "https://www.youtube.com/embed/UbkuSD-ht1U?rel=0",
    title: "Google Japan 採用動画 — Filming in Japan",
    caption: "Google Japan：採用動画",
    desc: "東京近郊の稲西データセンターで働くGoogle Japan社員へのインタビューを中心とした採用動画。",
  },
  {
    src: "https://www.youtube.com/embed/ZDKXfIE_b1Y?rel=0",
    title: "EY 社員プロフィール映像 — Filming in Japan",
    caption: "EY：社員プロフィールシリーズ",
    desc: "EYの採用・社員プロフィール動画シリーズ全6本。職場の枠を超え、仕事と人生への情熱を掘り下げた内容。",
  },
];

const brandFilms = [
  { src: "https://www.youtube.com/embed/t-VSxoBQlRA?rel=0", title: "コーポレートブランディング映像：Filming in Japan", caption: "ブランドフィルム：Japan" },
  { src: "https://www.youtube.com/embed/m1KV1UTpSzU?rel=0", title: "HP Asian Influencer Series: Filming in Japan", caption: "HP: Asian Influencer Series" },
  { src: "https://player.vimeo.com/video/836766996?h=ccb3b1ab04", title: "White Express brand film: Filming in Japan", caption: "White Express: Brand Film" },
  { src: "https://player.vimeo.com/video/517509247", title: "クラフトブルワリー＆蒸留所 ブランドフィルム：Japan", caption: "クラフトブルワリー＆蒸留所：Brand Film" },
  { src: "https://player.vimeo.com/video/888141337?h=7f88a78ba3", title: "手作りナイフ会社 ブランドフィルム：Japan", caption: "手作りナイフ会社：Brand Film" },
];

/** Japanese headline ending in the coloured 。 (the Japanese full stop). */
function JTitle({ as: Tag = "h2", className = "fij-h2", id, children }: { as?: "h1" | "h2" | "h3"; className?: string; id?: string; children: ReactNode }) {
  return (
    <Tag id={id} className={`${className} ${className.includes("fij-h2") ? "text-[length:clamp(32px,4.2vw,60px)]" : ""} [line-break:strict] [word-break:auto-phrase]`}>
      {children}
      <span style={{ color: "#e95228" }}>。</span>
    </Tag>
  );
}

function VideoEmbed({ src, title, dark = false }: { src: string; title: string; dark?: boolean }) {
  return (
    <div className="relative w-full aspect-[16/9]" style={{ backgroundColor: dark ? "#241a12" : "#0d0a07" }}>
      <LazyIframe
        src={src}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        allowFullScreen
        loading="lazy"
        className="absolute inset-0 w-full h-full"
        style={{ border: 0 }}
      />
    </div>
  );
}

export default function JpCorporateVideoPage() {
  return (
    <div lang="ja" style={{ backgroundColor: "#fdf8f3" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "inLanguage": "ja",
          "mainEntity": faqs.map((faq) => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": { "@type": "Answer", "text": faq.a },
          })),
        }) }}
      />

      {/* Hero: headline on cream, tall photo with vertical English on the right */}
      <section className="border-b" style={{ borderColor: "#1c1208" }}>
        <div className="fij-wrap flex flex-wrap lg:flex-nowrap gap-x-12">
          <div className="flex-[7_1_560px] pt-16 pb-12 lg:pt-24 lg:pb-14 flex flex-col justify-between gap-12">
            <div>
              <p lang="en" className="text-sm font-medium mb-8" style={{ color: "#6b5a48" }}>Corporate Video · Tokyo · Japan</p>
              <h1 className="fij-h1 [line-break:strict] [word-break:auto-phrase] text-[length:clamp(32px,8.4vw,64px)] lg:text-[length:clamp(44px,4.8vw,72px)]">
                採用動画<span style={{ color: "#e95228" }}>。</span>{" "}<br />
                インタビュー動画<span style={{ color: "#e95228" }}>。</span>
              </h1>
            </div>
            <div className="flex flex-wrap items-end gap-x-12 gap-y-8">
              <p className="fij-lede flex-[1_1_340px]" style={{ color: "#4a3a2a" }}>
                日本で活動するグローバル企業向けのコーポレートインタビュー、ブランドフィルム、採用動画制作。
                日英バイリンガルチームによる放送品質の映像制作。
              </p>
              <a href="#enquire" className="fij-btn shrink-0">無料お見積もり</a>
            </div>
          </div>
          <div className="relative flex-[5_1_380px] min-h-[420px] lg:min-h-[640px] -mx-[clamp(20px,4vw,48px)] lg:ml-0 overflow-hidden" style={{ backgroundColor: "#0d0a07" }}>
            <Image
              src="/images/corporate_video_tokyo.jpeg"
              alt="秋の東京の街並みの空撮"
              fill
              priority
              className="object-cover object-[center_20%]"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div aria-hidden="true" className="absolute inset-y-0 right-0 w-40" style={{ background: "linear-gradient(to left, rgba(13,10,7,0.45), rgba(13,10,7,0))" }} />
            <p
              lang="en"
              aria-hidden="true"
              className="absolute top-8 right-6 font-semibold uppercase text-[22px] lg:text-[26px] tracking-[0.22em]"
              style={{ writingMode: "vertical-rl", color: "#fdf8f3", textShadow: "0 1px 12px rgba(0,0,0,0.35)" }}
            >
              Corporate Film
            </p>
          </div>
        </div>
      </section>

      <TrustedBy clients={clients} label="制作実績" />

      {/* Recruitment + employee profiles, beside the sticky enquiry form */}
      <section className="border-b" style={{ borderColor: "#1c1208" }}>
        <div className="fij-wrap py-20 md:py-28 grid lg:grid-cols-[minmax(0,1fr)_420px] gap-14 xl:gap-20">
          <div className="min-w-0 space-y-24">
            {/* 01 採用映像 */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-14">
              <SectionLabel num="01" label="Recruitment" labelLang="en" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium mb-5" style={{ color: "#6b5a48" }}>採用映像</p>
                <JTitle className="fij-h2 mb-8">従業員に会社を広めてもらいましょう</JTitle>
                <p className="fij-lede max-w-2xl mb-12" style={{ color: "#4a3a2a" }}>
                  一番身近な会社のファンでもある従業員のリアルな声を活かしたテスティモニアルビデオによって信頼や親近感を高め、採用力の向上をサポートします。
                </p>
                <h3 className="text-sm font-medium mb-6" style={{ color: "#6b5a48" }}>2種類の取材に対応</h3>
                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-12">
                  {recruitmentStyles.map((s) => (
                    <article key={s.num} className="fij-zoom">
                      <div className="relative aspect-[4/3] overflow-hidden mb-5" style={{ backgroundColor: "#0d0a07" }}>
                        <Image src={s.img} alt={s.alt} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px" />
                      </div>
                      <h4 className="fij-h3 mb-3 flex items-baseline gap-2">
                        <span style={{ color: "#c43d10" }}>{s.num}</span>
                        {s.title}
                      </h4>
                      {s.desc && (
                        <p className="text-[15px] leading-relaxed" style={{ color: "#4a3a2a" }}>{s.desc}</p>
                      )}
                      {s.bullets && (
                        <ul className="border-t mb-6" style={{ borderColor: "#1c1208" }}>
                          {s.bullets.map((b) => (
                            <li key={b} className="py-3 border-b text-[15px] leading-snug" style={{ borderColor: "#1c1208" }}>{b}</li>
                          ))}
                        </ul>
                      )}
                      {s.link && (
                        <a href={s.link} target="_blank" rel="noopener noreferrer" className="fij-link text-[15px]">
                          詳細は専用サイトTesuTemoへ
                        </a>
                      )}
                    </article>
                  ))}
                </div>
              </div>
            </div>

            {/* 02 採用・社員プロフィール */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-14">
              <SectionLabel num="02" label="Profiles" labelLang="en" />
              <div className="flex-1 min-w-0">
                <JTitle className="fij-h2 mb-8">採用・社員プロフィール</JTitle>
                <p className="fij-lede max-w-2xl mb-12" style={{ color: "#4a3a2a" }}>
                  プロンプターや型通りのセリフは使いません。社員が会社の価値観、仕事へのモチベーション、自社の魅力を自分の言葉で語る。ドキュメンタリースタイルで、共感を呼ぶ採用コンテンツを制作します。
                </p>
                <div className="space-y-12">
                  {recruitmentVideos.map((v) => (
                    <figure key={v.src} className="border-t-2 pt-6" style={{ borderColor: "#1c1208" }}>
                      <VideoEmbed src={v.src} title={v.title} />
                      <figcaption>
                        <h3 className="fij-h3 mt-5 mb-2">{v.caption}</h3>
                        <p className="text-[15px] leading-relaxed" style={{ color: "#4a3a2a" }}>{v.desc}</p>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sticky enquiry form */}
          <aside>
            <div id="enquire" className="sticky top-24 scroll-mt-24 border p-8 lg:p-10" style={{ backgroundColor: "#fff", borderColor: "#1c1208" }}>
              <JTitle as="h2" className="text-[28px] leading-tight font-semibold tracking-[-0.02em] mb-2">無料お見積もり</JTitle>
              <p className="text-[15px] mb-6" style={{ color: "#4a3a2a" }}>
                プロジェクトの概要をお聞かせください。24時間以内にご返信します。
              </p>
              <LandingContactForm service="Corporate Video Japan (JP)" lang="jp" />
            </div>
          </aside>
        </div>
      </section>

      {/* 03 コーポレートインタビュー */}
      <Section num="03" label="Interviews" labelLang="en" aria-labelledby="interviews-heading">
        <JTitle id="interviews-heading" className="fij-h2 mb-10">コーポレートインタビュー</JTitle>
        <div className="flex flex-wrap items-start gap-x-14 gap-y-10">
          <div className="flex-[1_1_340px]">
            <p className="fij-lede mb-5" style={{ color: "#4a3a2a" }}>
              CEO・役員インタビュー、ソートリーダーシップ映像、導入事例インタビューなど。クライアント先オフィス、スタジオ、日本全国どこでも対応。日英バイリンガルのクルーが、インタビュイーがリラックスして自然な言葉で語れる環境を作ります。
            </p>
            <p className="fij-lede" style={{ color: "#4a3a2a" }}>
              リモート映像で海外のプロデューサーやディレクターを現場に繋ぎ、モニタリングやフィードバック、質問の直接投げかけも可能です。出演者がリラックスできるよう、少人数クルーで対応します。
            </p>
          </div>
          <figure className="flex-[1.3_1_440px] min-w-0">
            <VideoEmbed
              src="https://player.vimeo.com/video/561655197?h=d1ca57fb5c"
              title="コーポレートインタビュー映像サンプル — Filming in Japan"
            />
            <figcaption className="mt-3 text-[15px] font-semibold">コーポレートインタビュー映像集：東京</figcaption>
          </figure>
        </div>
      </Section>

      {/* 04 ブランドフィルム — dark alternating rows */}
      <Section num="04" label="Brand Films" labelLang="en" tone="night" aria-labelledby="brand-films-heading">
        <div className="flex flex-wrap items-end justify-between gap-x-16 gap-y-6 mb-16">
          <JTitle id="brand-films-heading" className="fij-h2 flex-[1_1_320px]">ブランドフィルム</JTitle>
          <p className="fij-lede flex-[1.4_1_420px] max-w-2xl" style={{ color: "rgba(253,248,243,0.78)" }}>
            日本で活動するグローバルブランド向けのブランドフィルム、製品ローンチ映像、インフルエンサーシリーズ、商業コンテンツ制作。脚本式の広告ではなく、ドキュメンタリーアプローチでブランドの本質的なストーリーを引き出します。HP・Canon・Googleなど多数の実績。
          </p>
        </div>
        {brandFilms.map((v, i) => (
          <article
            key={v.src}
            className={`flex flex-wrap items-center gap-x-14 gap-y-6 py-12 border-t ${i % 2 ? "flex-row-reverse" : ""}`}
            style={{ borderColor: "rgba(253,248,243,0.25)" }}
          >
            <div className="flex-[1.6_1_440px] min-w-0">
              <VideoEmbed src={v.src} title={v.title} dark />
            </div>
            <div className="flex-[1_1_260px]">
              <p className="text-[13px] font-semibold tabular-nums mb-4" style={{ color: "#f07a52" }}>{String(i + 1).padStart(2, "0")}</p>
              <h3 className="text-[26px] lg:text-[34px] leading-[1.2] font-semibold tracking-[-0.02em]">{v.caption}</h3>
            </div>
          </article>
        ))}
      </Section>

      {/* 05 制作の流れ */}
      <Section num="05" label="Process" labelLang="en" aria-labelledby="process-heading">
        <div className="flex flex-wrap gap-x-16 gap-y-10">
          <JTitle id="process-heading" className="fij-h2 flex-[1_1_240px]">制作の流れ</JTitle>
          <ol className="flex-[3_1_520px] border-t-2" style={{ borderColor: "#1c1208" }}>
            {workflow.map((w, i) => (
              <li key={w.step} className="flex gap-6 py-7 border-b" style={{ borderColor: "#1c1208" }}>
                <span className="w-8 shrink-0 pt-1.5 text-[13px] font-semibold tabular-nums" style={{ color: "var(--fij-num)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="fij-h3 mb-2">{w.step}</h3>
                  <p className="text-[15px] leading-relaxed max-w-2xl" style={{ color: "#4a3a2a" }}>{w.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* 06 Client feedback */}
      <Section num="06" label="Feedback" labelLang="en" bordered aria-labelledby="feedback-heading">
        <h2 id="feedback-heading" lang="en" className="sr-only">Client feedback</h2>
        <figure lang="en" className="mb-16">
          <blockquote className="text-[28px] sm:text-[38px] lg:text-[48px] leading-[1.12] font-semibold tracking-[-0.035em] mb-7">
            <span style={{ color: "#e95228" }}>&ldquo;</span>{testimonials[0].quote}<span style={{ color: "#e95228" }}>&rdquo;</span>
          </blockquote>
          <figcaption className="text-[15px]" style={{ color: "#6b5a48" }}>{testimonials[0].credit}</figcaption>
        </figure>
        <div lang="en" className="flex flex-wrap gap-x-16 gap-y-10 pt-8 border-t" style={{ borderColor: "#1c1208" }}>
          {testimonials.slice(1).map((t) => (
            <figure key={t.credit} className="flex-[1_1_320px]">
              <blockquote className="text-[22px] leading-snug font-semibold tracking-[-0.02em] mb-3">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="text-sm" style={{ color: "#6b5a48" }}>{t.credit}</figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* 07 使用機材 */}
      <Section num="07" label="Equipment" labelLang="en" tone="sand" aria-labelledby="equipment-heading">
        <div className="flex flex-wrap gap-x-16 gap-y-10">
          <div className="flex-[1_1_300px]">
            <JTitle id="equipment-heading" className="fij-h2 mb-6">使用機材</JTitle>
            <p className="fij-lede max-w-md" style={{ color: "#4a3a2a" }}>
              プロ用シネマカメラを使用。ご指定のカメラがあればご相談ください。自社保有機材の一例：
            </p>
          </div>
          <ul className="flex-[1.5_1_420px] fij-cells self-start" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))" }}>
            {equipment.map((item, i) => (
              <li key={item} className="p-5 sm:p-6 flex flex-col gap-5">
                <span className="text-[13px] font-semibold tabular-nums" style={{ color: "var(--fij-num)" }}>{String(i + 1).padStart(2, "0")}</span>
                <span className="text-base sm:text-[18px] leading-snug font-semibold">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* 08 よくある質問 */}
      <Section num="08" label="FAQ" labelLang="en" aria-labelledby="faq-heading">
        <div className="flex flex-wrap gap-x-16 gap-y-10">
          <JTitle id="faq-heading" className="fij-h2 flex-[1_1_240px]">よくある質問</JTitle>
          <div className="flex-[3_1_520px] border-t-2" style={{ borderColor: "#1c1208" }}>
            {faqs.map((faq, i) => (
              <details key={i} className="fij-faq border-b" style={{ borderColor: "#1c1208" }} open={i === 0}>
                <summary className="flex justify-between items-center gap-6 py-[22px] text-[18px] font-semibold">
                  <h3>{faq.q}</h3>
                  <span aria-hidden="true" className="fij-faq-icon shrink-0 text-2xl font-normal leading-none" style={{ color: "#e95228" }}>+</span>
                </summary>
                <p className="pb-6 max-w-2xl text-base leading-relaxed" style={{ color: "#4a3a2a" }}>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </Section>

      {/* 09 お問い合わせ */}
      <Section num="09" label="Contact" labelLang="en" tone="ink" aria-labelledby="talk-heading">
        <div className="flex flex-wrap items-end justify-between gap-x-16 gap-y-8">
          <div>
            <JTitle id="talk-heading" className="fij-h2 mb-4">お気軽にご連絡ください</JTitle>
            <p className="fij-lede" style={{ color: "rgba(253,248,243,0.78)" }}>WhatsAppまたはメールにて迅速に対応します。</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="https://wa.me/819038800895" className="fij-btn-orange">WhatsApp</a>
            <a href="mailto:filminginjapan@move-ment.co" className="fij-btn-outline" style={{ color: "#fdf8f3" }}>メールで問い合わせ</a>
          </div>
        </div>
      </Section>

      <Footer lang="jp" />
    </div>
  );
}
