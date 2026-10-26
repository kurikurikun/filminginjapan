import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import { Section, SectionLabel, TrustedBy, type Tone } from "@/components/editorial";
import Footer from "@/components/Footer";
import LandingContactForm from "@/components/LandingContactForm";

export const metadata: Metadata = {
  title: "映像制作の導入事例・お客様の声",
  description: "東京・日本全国でカスタマーストーリー・導入事例動画を制作。日英バイリンガル対応。オンライン・オフィス・イベント取材の3スタイル。Microsoft、Google、SAP など多数の実績。",
  alternates: {
    canonical: "https://www.filminginjapan.com/jp/client-testimonials-video-production-tokyo-japan",
    languages: {
      "en": "https://www.filminginjapan.com/client-testimonials-video-production-tokyo-japan",
      "ja": "https://www.filminginjapan.com/jp/client-testimonials-video-production-tokyo-japan",
      "x-default": "https://www.filminginjapan.com/client-testimonials-video-production-tokyo-japan",
    },
  },
};

const clients = ["JLL", "Microsoft", "SAP", "Celonis", "HP", "Canon", "Sony", "Google"];

const introStyles = [
  {
    num: "①",
    title: "オンラインで取材",
    desc: "ご予定を組みやすく、場所の制限がなく、ご自宅でも取材可能です。",
    img: "/images/usecase-customer.jpg",
    alt: "オンライン取材・Zoom形式カスタマーストーリー動画",
    link: "https://www.tesutemo.co",
    linkLabel: "詳細は専用サイトへ",
  },
  {
    num: "②",
    title: "オフィスで取材",
    desc: "サービスや製品を豊富に紹介しながらインタビューを行えるメリットがあります。",
    img: "/images/customer_testimonial_office_tokyo.jpeg",
    alt: "オフィス取材・導入事例動画 東京",
    link: null,
    linkLabel: null,
  },
  {
    num: "③",
    title: "イベントで取材",
    desc: "体験した熱量をそのままに。また、一度に大勢のインタビューを実施できるメリットもあります。",
    img: "/images/tokyo_japan_studio_green_screen_recordings_1.jpeg",
    alt: "イベント取材・カスタマーストーリー動画 東京",
    link: null,
    linkLabel: null,
  },
];

const faqs = [
  {
    q: "日本のどこでカスタマーストーリー動画を撮影できますか？",
    a: "東京を拠点に日本全国で対応しています。お客様のオフィス、スタジオ、イベント会場など、ご要望に合わせた場所で撮影します。グリーンバックを持ち込んでの出張撮影も可能です。",
  },
  {
    q: "日本語と英語で同じ撮影日にインタビューできますか？",
    a: "はい。日英バイリンガルスタッフが毎回同席します。同じインタビューを両言語で実施し、国内外向けにそれぞれ編集したバージョンをご提供できます。",
  },
  {
    q: "どのような企業の動画を制作してきましたか？",
    a: "Microsoft、Google、SAP、JLL、HP、Celonisなど、多くのグローバル企業の導入事例・お客様の声動画を制作してきました。",
  },
  {
    q: "撮影後の編集・納品にはどのくらいかかりますか？",
    a: "ラフカットは通常撮影後1〜2週間以内。最終納品はレビューの回数によります。SNS用の当日納品（Same Day Edit）もご要望に応じて対応可能です。",
  },
  {
    q: "海外チームがリモートで立ち会うことはできますか？",
    a: "はい。リモート映像を通じて海外プロデューサーやディレクターをセットに繋ぐことができます。観察、フィードバック、質問をリアルタイムで行うことが可能です。",
  },
  {
    q: "グリーンバックの撮影は可能ですか？",
    a: "はい。大型ポータブルグリーンバック、プロ用照明、ブームマイク・ラベリアマイク、カメラ一式を持参して出張撮影します。CanonやSAPなどの企業で実績があります。",
  },
];

/** Japanese headline ending in the coloured 。 (the Japanese full stop). */
function JTitle({ as: Tag = "h2", className = "fij-h2", id, children }: { as?: "h1" | "h2" | "h3"; className?: string; id?: string; children: ReactNode }) {
  return (
    <Tag id={id} className={className}>
      {children}
      <span style={{ color: "#e95228" }}>。</span>
    </Tag>
  );
}

function CardGrid({ items, tone = "cream" }: { items: { heading: string; bullets: string[] }[]; tone?: Tone }) {
  const dark = tone === "night" || tone === "ink";
  const rule = dark ? "rgba(253,248,243,0.25)" : "#1c1208";
  return (
    <div className="grid sm:grid-cols-3 border-t border-l" style={{ borderColor: rule }}>
      {items.map((item) => (
        <div key={item.heading} className="p-5 sm:p-6 border-r border-b" style={{ borderColor: rule }}>
          <h4 className="text-sm font-medium mb-4" style={{ color: dark ? "rgba(253,248,243,0.65)" : "#6b5a48" }}>
            {item.heading}
          </h4>
          <ul className="space-y-3">
            {item.bullets.map((b) => (
              <li key={b} className="text-[15px] leading-snug font-semibold">
                {b}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function VideoEmbed({ src, title, allow }: { src: string; title: string; allow: string }) {
  return (
    <div className="relative w-full aspect-[16/9]" style={{ backgroundColor: "#241a12" }}>
      <iframe
        src={src}
        title={title}
        allow={allow}
        allowFullScreen
        loading="lazy"
        className="absolute inset-0 w-full h-full"
        style={{ border: 0 }}
      />
    </div>
  );
}

const reasons: { title: ReactNode; body: ReactNode }[] = [
  {
    title: "高い説得力",
    body: (
      <>
        ユーザーの言葉は、広告や自社発信のメッセージよりも、何倍も強い説得力を持ちます。顧客自身がサービスや製品のファンとして語る背景、ストーリー、表情は、文字だけでは伝えられない信頼と安心感を与えます。弊社独自の<strong className="font-semibold" style={{ color: "#1c1208" }}>自然な受け答えを引き出すインタビュー設計</strong>により、リアルで親しみやすい言葉を引き出します。
      </>
    ),
  },
  {
    title: <>複雑な導入実績・ストーリーを<br />映像でわかりやすく可視化</>,
    body: (
      <>
        顧客が抱えていた課題 → 導入の決め手 → 使ってみた感想 → 効果。<br /><br />
        こうした流れを映像で整理し、<strong className="font-semibold" style={{ color: "#1c1208" }}>導入事例のストーリー</strong>として制作します。
      </>
    ),
  },
  {
    title: <>あらゆる場面で<br />販促ツールとして応用可能</>,
    body: (
      <>
        導入事例動画は<strong className="font-semibold" style={{ color: "#1c1208" }}>活用の幅の広さ</strong>が強みです。Webサイト、Instagram / TikTok / YouTube Shorts などのSNS広告、営業資料やプレゼン、展示会のループ再生、社内共有。また、1本の顧客インタビューから<strong className="font-semibold" style={{ color: "#1c1208" }}>縦動画・横動画・短尺クリップ・記事</strong>など複数コンテンツを生成できます。
      </>
    ),
  },
  {
    title: "3つの取材スタイルから選べる",
    body: (
      <>
        <ul className="border-t mb-4" style={{ borderColor: "#1c1208" }}>
          {[
            { label: "オンライン（Tesutemo）", note: "最速・低コスト・場所の制限なし" },
            { label: "オフィス取材", note: "高品質・ブランド性の強化" },
            { label: "イベント収録", note: "多人数・高熱量・SNS向け" },
          ].map((item) => (
            <li key={item.label} className="py-2.5 border-b" style={{ borderColor: "#1c1208" }}>
              <strong className="font-semibold" style={{ color: "#1c1208" }}>{item.label}</strong>：{item.note}
            </li>
          ))}
        </ul>
        ターゲット、ブランドイメージ、リソースを踏まえ、<strong className="font-semibold" style={{ color: "#1c1208" }}>最も効果が出る撮影スタイル</strong>を選ぶことができます。
      </>
    ),
  },
];

export default function TestimonialsPageJP() {
  return (
    <div lang="ja" style={{ backgroundColor: "#fdf8f3" }}>

      {/* Hero: headline on cream, tall photo with vertical English on the right */}
      <section className="border-b" style={{ borderColor: "#1c1208" }}>
        <div className="fij-wrap flex flex-wrap lg:flex-nowrap gap-x-12">
          <div className="flex-[7_1_560px] pt-16 pb-12 lg:pt-24 lg:pb-14 flex flex-col justify-between gap-12">
            <div>
              <p className="text-sm font-medium mb-8" style={{ color: "#6b5a48" }}>導入事例動画 · 東京 · 日本</p>
              <h1 className="fij-h1 break-keep">
                カスタマーストーリー<br />
                動画制作<span style={{ color: "#e95228" }}>。</span>
              </h1>
            </div>
            <div className="flex flex-wrap items-end gap-x-12 gap-y-8">
              <p className="fij-lede flex-[1_1_340px]" style={{ color: "#4a3a2a" }}>
                お客様の声は、信頼性の高い、サービスの価値を最も自然に伝える強力なコンテンツ。
                取材の仕方は3種類。顧客体験を最大のセールスツールに。
              </p>
              <a href="#enquire" className="fij-btn shrink-0">無料お見積もり</a>
            </div>
          </div>
          <div className="relative flex-[5_1_380px] min-h-[420px] lg:min-h-[640px] -mx-[clamp(20px,4vw,48px)] lg:ml-0 overflow-hidden" style={{ backgroundColor: "#0d0a07" }}>
            <Image
              src="/images/customer_testimonial_office_tokyo.jpeg"
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
              className="absolute top-8 right-6 font-semibold uppercase text-[22px] lg:text-[26px] tracking-[0.22em]"
              style={{ writingMode: "vertical-rl", color: "#fdf8f3", textShadow: "0 1px 12px rgba(0,0,0,0.35)" }}
            >
              Customer Stories
            </p>
          </div>
        </div>
      </section>

      <TrustedBy clients={clients} label="実績企業" />

      {/* 01 3つの取材スタイル — image-first cards */}
      <Section num="01" label="Styles" labelLang="en" aria-labelledby="styles-heading">
        <p className="text-sm font-medium mb-5" style={{ color: "#6b5a48" }}>3つの取材スタイル</p>
        <JTitle id="styles-heading" className="fij-h2 mb-14">取材スタイルを選ぶ</JTitle>
        <div className="grid sm:grid-cols-3 gap-x-8 gap-y-12">
          {introStyles.map((s) => (
            <article key={s.num} className="fij-zoom border-t-2 pt-6" style={{ borderColor: "#1c1208" }}>
              <div className="relative aspect-[3/2] overflow-hidden mb-5" style={{ backgroundColor: "#0d0a07" }}>
                <Image src={s.img} alt={s.alt} fill className="object-cover" sizes="(max-width: 640px) 100vw, 33vw" />
              </div>
              <h3 className="fij-h3 mb-2 flex items-baseline gap-2">
                <span style={{ color: "#c43d10" }}>{s.num}</span>
                {s.title}
              </h3>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: "#4a3a2a" }}>{s.desc}</p>
              {s.link && (
                <a href={s.link} target="_blank" rel="noopener noreferrer" className="fij-link text-[15px]">
                  {s.linkLabel}
                </a>
              )}
            </article>
          ))}
        </div>
      </Section>

      {/* Why + online style, beside the sticky enquiry form */}
      <section className="border-y" style={{ borderColor: "#1c1208" }}>
        <div className="fij-wrap py-20 md:py-28 grid lg:grid-cols-[minmax(0,1fr)_420px] gap-14 xl:gap-20">
          <div className="min-w-0 space-y-24">
            {/* 02 選ばれる理由 */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-14">
              <SectionLabel num="02" label="Why us" labelLang="en" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium mb-5" style={{ color: "#6b5a48" }}>選ばれる理由</p>
                <JTitle className="fij-h2 mb-12">カスタマーストーリーが<br />選ばれる理由</JTitle>
                <div>
                  {reasons.map((r, i) => (
                    <div key={i} className={`flex gap-6 py-7 border-t ${i === reasons.length - 1 ? "border-b" : ""}`} style={{ borderColor: "#1c1208" }}>
                      <span className="w-8 shrink-0 pt-1.5 text-[13px] font-semibold tabular-nums" style={{ color: "#e95228" }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="min-w-0">
                        <h3 className="fij-h3 mb-3">{r.title}</h3>
                        <div className="text-[15px] leading-relaxed" style={{ color: "#4a3a2a" }}>{r.body}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 03 ① オンラインで取材 */}
            <div id="usecases" className="flex flex-col md:flex-row gap-6 md:gap-14 scroll-mt-24">
              <SectionLabel num="03" label="Online" labelLang="en" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium mb-5" style={{ color: "#6b5a48" }}>① オンラインで取材</p>
                <JTitle className="fij-h2 mb-8">最速・低コスト・全国対応</JTitle>
                <p className="fij-lede max-w-2xl mb-10" style={{ color: "#4a3a2a" }}>
                  Zoom形式のオンライン取材（約30〜45分）。プロの指導のもと、最適な角度とライティングで高品質収録。全国・海外の顧客にも対応可能で、慣れた環境でリラックスしたリアルな感想を引き出せます。
                </p>
                <CardGrid items={[
                  {
                    heading: "内容",
                    bullets: [
                      "Zoom形式・約30〜45分",
                      "プロの指導・角度＆照明設定",
                      "テロップ・横縦編集・サムネイル込み",
                    ],
                  },
                  {
                    heading: "メリット",
                    bullets: [
                      "全国・海外の顧客に対応",
                      "多人数を低コストで収録",
                      "スケジュール調整がしやすい",
                    ],
                  },
                  {
                    heading: "特徴",
                    bullets: [
                      "スピーディーな納品",
                      "柔軟なスケジュール対応",
                      "リラックスした自然なコメント",
                    ],
                  },
                ]} />
                <div className="mt-8">
                  <a href="https://www.tesutemo.co" target="_blank" rel="noopener noreferrer" className="fij-btn">
                    詳細は専用サイトTesuTemoへ
                  </a>
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
              <LandingContactForm service="Customer Story Video JP" lang="jp" />
            </div>
          </aside>
        </div>
      </section>

      {/* 04 ② オフィスで取材 */}
      <Section num="04" label="Office" labelLang="en" tone="night" aria-labelledby="office-heading">
        <p className="text-sm font-medium mb-5" style={{ color: "rgba(253,248,243,0.65)" }}>② オフィスで取材</p>
        <div className="flex flex-wrap items-start gap-x-14 gap-y-10 mb-12">
          <div className="flex-[1_1_340px]">
            <JTitle id="office-heading" className="fij-h2 mb-8">空間と人物から信頼感を伝える</JTitle>
            <p className="fij-lede" style={{ color: "rgba(253,248,243,0.78)" }}>
              オフィス・現場の素材映像も撮影。複数名インタビュー、ライティング、複数カメラ、高品質音声のフルセット。BtoBの本格的な導入事例、医療・製造業など現場の雰囲気が重要な業界に最適です。
            </p>
          </div>
          <figure className="flex-[1.3_1_440px] min-w-0">
            <VideoEmbed
              src="https://www.youtube.com/embed/72GKHq5pCDY"
              title="Panasonic Connect カスタマーストーリー動画 Filming in Japan"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
            <figcaption className="mt-3 text-[15px] font-semibold">Panasonic Connect向けカスタマーストーリー動画（DP: Chris Moore）</figcaption>
          </figure>
        </div>
        <CardGrid tone="night" items={[
          {
            heading: "内容",
            bullets: [
              "オフィス・現場の素材映像撮影",
              "複数名インタビュー対応",
              "ライティング・複数カメラ・高品質音声",
            ],
          },
          {
            heading: "メリット",
            bullets: [
              "BtoB・医療・製造業に最適",
              "商品の使い方を実際に見せながら撮影",
              "ブランドイメージを強化",
            ],
          },
          {
            heading: "特徴",
            bullets: [
              "高い信頼性・高級感",
              "ストーリー性のある映像",
              "製品・サービスの実例を映像化",
            ],
          },
        ]} />
      </Section>

      {/* 05 ③ イベントで取材 — mirrored, on sand */}
      <Section num="05" label="Events" labelLang="en" tone="sand" aria-labelledby="event-heading">
        <p className="text-sm font-medium mb-5" style={{ color: "#6b5a48" }}>③ イベントで取材</p>
        <div className="flex flex-wrap flex-row-reverse items-start gap-x-14 gap-y-10 mb-12">
          <div className="flex-[1_1_340px]">
            <JTitle id="event-heading" className="fij-h2 mb-8">イベントの熱量をそのまま収録</JTitle>
            <p className="fij-lede" style={{ color: "#4a3a2a" }}>
              その場でインタビュー、またはグリーンバックの前で多人数の声を短時間で収録可能。自社カンファレンスやユーザーイベントに最適。熱量が高くSNSとの相性が良く、ショート動画の量産も可能です。
            </p>
          </div>
          <figure className="flex-[1.3_1_440px] min-w-0">
            <VideoEmbed
              src="https://player.vimeo.com/video/1063107056?h=9932edce4c"
              title="イベント取材・カスタマーストーリー動画サンプル Filming in Japan"
              allow="autoplay; fullscreen; picture-in-picture"
            />
            <figcaption className="mt-3 text-[15px] font-semibold">イベントの空き時間を利用し、約5名に取材</figcaption>
          </figure>
        </div>
        <CardGrid items={[
          {
            heading: "内容",
            bullets: [
              "その場でインタビュー／グリーンバック収録",
              "多人数を短時間で収録",
              "イベントの熱量を映像化",
            ],
          },
          {
            heading: "向いている現場",
            bullets: [
              "カンファレンス・ユーザーイベント",
              "多様な参加者の反応を記録",
              "ハイライト動画とのセット制作",
            ],
          },
          {
            heading: "特徴",
            bullets: [
              "熱量高くSNSとの相性が良い",
              "ショート動画を量産できる",
              "ハイライトとのセットも可能",
            ],
          },
        ]} />
      </Section>

      {/* 06 Client feedback */}
      <Section num="06" label="Feedback" labelLang="en" bordered aria-labelledby="feedback-heading">
        <h2 id="feedback-heading" className="sr-only">お客様の声</h2>
        <figure>
          <blockquote lang="en" className="text-[28px] sm:text-[38px] lg:text-[48px] leading-[1.12] font-semibold tracking-[-0.035em] mb-7">
            <span style={{ color: "#e95228" }}>&ldquo;</span>Your expertise in making the interviewees feel comfortable and getting genuine answers from them is outstanding. Once again, thank you so much for working with us. I hope we can collaborate again in the future!<span style={{ color: "#e95228" }}>&rdquo;</span>
          </blockquote>
          <figcaption className="text-[15px]" style={{ color: "#6b5a48" }}>グローバル企業クライアント</figcaption>
        </figure>
      </Section>

      {/* 07 よくある質問 */}
      <Section num="07" label="FAQ" labelLang="en" aria-labelledby="faq-heading">
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

      {/* 08 お問い合わせ */}
      <Section num="08" label="Contact" labelLang="en" tone="ink" aria-labelledby="talk-heading">
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
