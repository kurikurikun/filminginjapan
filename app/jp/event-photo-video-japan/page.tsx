import type { Metadata } from "next";
import EventPricing from "@/components/EventPricing";
import EventsCovered from "@/components/EventsCovered";
import VerticalVideoTile from "@/components/VerticalVideoTile";
import Image from "next/image";
import { Section, SectionLabel, Title, Kicker, TrustedBy } from "@/components/editorial";
import Footer from "@/components/Footer";
import LandingContactForm from "@/components/LandingContactForm";
import GoogleReviews from "@/components/GoogleReviews";
import PhotoGallery from "@/components/PhotoGallery";

export const metadata: Metadata = {
  title: "東京のイベント撮影｜バイリンガルのカメラマン・映像制作",
  description: "東京のイベント撮影なら英語対応のバイリンガルチームへ。カンファレンス、ガラ、製品発表会の写真撮影とハイライト動画を制作。当日の写真納品にも対応。PwC、Riot Games、Celonisなど実績多数。",
  alternates: {
    canonical: "https://www.filminginjapan.com/jp/event-photo-video-japan",
    languages: {
      "en": "https://www.filminginjapan.com/event-photo-video-japan",
      "ja": "https://www.filminginjapan.com/jp/event-photo-video-japan",
      "x-default": "https://www.filminginjapan.com/event-photo-video-japan",
    },
  },
};

const services = [
  "企業イベント写真撮影",
  "企業映像チームが編集する、ストーリーのあるハイライト映像",
  "写真撮影のみの対応（動画なし）",
  "カンファレンス・パネルディスカッションのマルチカメラ収録",
  "役員インタビュー・基調講演の映像記録",
  "SNS向け当日編集・ダイジェスト動画",
  "ライブ配信・ハイブリッドイベントのサポート",
  "参加者・登壇者のコメント撮影",
];

const differentiators: { title: string; desc: string; dsMark?: boolean; link?: { href: string; label: string } }[] = [
  {
    title: "カメラマンではなく、映像制作者",
    desc: "企業映像やテレビ向けドキュメンタリーを制作するチームが撮影します。ストーリー、光、音へのこだわりをイベント撮影にも。聞き取りやすいインタビュー、構成のある編集、ただ記録するだけでなく構図にこだわった写真をお届けします。",
    link: { href: "https://www.move-ment.co", label: "ドキュメンタリー・放送作品を見る" },
  },
  {
    title: "バイリンガルクルー",
    desc: "日英両語でスムーズにコミュニケーション。会場スタッフ・現地AVチームと直接連携するため、当日のロスタイムや連絡ミスが発生しません。",
  },
  {
    title: "企業イベントに対応したワークフロー",
    desc: "NDA・VIPプロトコル・ブランドガイドラインへの対応実績あり。政府代表団・経営幹部・国際ブランドが参加するイベントでの撮影経験が豊富です。",
  },
  {
    title: "柔軟なスケール対応",
    desc: "カメラマン1名から、マルチカメラの映像クルーまで対応。1日完結から複数日・複数会場にわたる全国規模のイベントまで、規模に合わせてスケールします。",
  },
  {
    title: "国内外大手企業との実績",
    desc: "政府代表団・国際NGO・多国籍企業の東京イベントに多数対応。ハイプロファイルなイベントで求められる品質・対応力を備えています。",
  },
  {
    title: "外国公館・国際機関",
    dsMark: true,
    desc: "外務省『外国公館等に対する消費税免除指定店舗』（2026年9月指定）。大使館・領事館・国際機関のお客様は、免税カードのご提示により消費税抜き価格でご利用いただけます。",
  },
];

const projects = [
  {
    title: "EVO Japan 2024（Riot Games「2XKO」発表）",
    venue: "有明GYM-EX・東京 · 2024",
    desc: "東京で開催された対戦格闘ゲーム大会のリキャップ映像。会場のスケール感、競技フロアの熱気、観客の反応を1本の映像にまとめました。",
    vimeoId: "1212259773",
    vimeoHash: "e3a9d1a2ff",
    img: null,
  },
  {
    title: "IHIF Asia（International Hospitality Investment Forum）",
    venue: "キンプトン新宿東京 · 2025",
    desc: "IHIFカンファレンスのイベントハイライト映像・写真撮影全般・参加者インタビュー形式のリキャップ動画を、ひとつの統合撮影チームで一括納品。",
    vimeoId: "1063107227",
    vimeoHash: "c0bc991380",
    img: null,
  },
  {
    title: "CITC CLSA Tokyo Forum",
    venue: "グランド ハイアット 東京 · 2024 · 3日間イベント",
    desc: "スタッフ・参加者・登壇者のコメントを3日間かけて収録したプロモーション動画。イベントの雰囲気を伝えるロケーションを選定し、日英字幕付きで編集。参加者の映り込み要件にも細心の注意を払いました。",
    vimeoId: "959287158",
    vimeoHash: "1368289498",
    img: null,
  },
  {
    title: "Princeton Digital Group データセンター開所式（埼玉）",
    venue: "PDG データセンター・埼玉 · 2025",
    desc: "開所式のダイジェスト映像制作と写真撮影。イベント終了後すぐにSNS向け写真セレクションを高速納品しました。",
    vimeoId: "1079354745",
    vimeoHash: "17c53b18eb",
    img: null,
  },
];

const photoEvents = [
  {
    label: "WPI グローバルサミット2025（Worldwide Partners）",
    location: "キンプトン新宿東京",
    photos: [
      "/images/events/wpi/Tokyo-corporate-event-photography1.jpg",
      "/images/events/wpi/Tokyo-corporate-event-photography4.jpg",
      "/images/events/wpi/Tokyo-corporate-event-photography5.jpg",
      "/images/events/wpi/Tokyo-corporate-event-photography7.jpg",
      "/images/events/wpi/Tokyo-corporate-event-photography8.jpg",
      "/images/events/wpi/Tokyo-corporate-event-photography10.jpg",
      "/images/events/wpi/Tokyo-corporate-event-photography20.jpg",
      "/images/events/wpi/Tokyo-corporate-event-photography21.jpg",
      "/images/events/wpi/Tokyo-corporate-event-photography22.jpg",
    ],
  },
  {
    label: "アイルランド政府貿易代表団（Bord Bia）",
    location: "ホテルニューオータニ東京",
    photos: [
      "/images/events/ireland/event_photography_tokyo_japan_17.jpg",
      "/images/events/ireland/event_photography_tokyo_japan_11.jpg",
      "/images/events/ireland/event_photography_tokyo_japan_10.jpg",
      "/images/events/ireland/event_photography_tokyo_japan_12.jpg",
      "/images/events/ireland/event_photography_tokyo_japan_13.jpg",
      "/images/events/ireland/event_photography_tokyo_japan_20.jpg",
    ],
  },
  {
    label: "Red Bull eスポーツイベント",
    location: "Red Bull Gaming Sphere Tokyo",
    photos: [
      "/images/events/esports/event_photography_tokyo_japan_16.jpg",
      "/images/events/esports/event_photography_tokyo_japan_8.jpg",
      "/images/events/esports/event_photography_tokyo_japan_20.jpg",
      "/images/events/esports/event_photography_tokyo_japan_21.jpg",
      "/images/events/esports/event_photography_tokyo_japan_22.jpg",
      "/images/events/esports/event_photography_tokyo_japan_23.jpg",
      "/images/events/esports/tokyo-event-esports-photography_1.jpg",
      "/images/events/esports/tokyo-event-esports-photography_3.jpg",
      "/images/events/esports/tokyo-event-esports-photography_5.jpg",
    ],
  },
  {
    label: "AVPN アジア・フィランソロピー委員会",
    location: "八芳園",
    photos: [
      "/images/events/philanthropic/tokyo_event_photography_happoen1.jpg",
      "/images/events/philanthropic/tokyo_event_photography_happoen2.jpg",
      "/images/events/philanthropic/tokyo_event_photography_happoen3.jpg",
      "/images/events/philanthropic/tokyo_event_photography_happoen4.jpg",
      "/images/events/philanthropic/tokyo_event_photography_happoen5.jpg",
      "/images/events/philanthropic/tokyo_event_photography_happoen6.jpg",
      "/images/events/philanthropic/tokyo_event_photography_happoen7.jpg",
      "/images/events/philanthropic/tokyo_event_photography_happoen8.jpg",
      "/images/events/philanthropic/tokyo_event_photography_happoen10.jpg",
    ],
  },
  {
    label: "オマーン政府貿易代表団（JICE）",
    location: "江戸東京博物館・各省庁",
    photos: [
      "/images/events/oman/event_photography_tokyo_japan_1.jpg",
      "/images/events/oman/event_photography_tokyo_japan_3.jpg",
      "/images/events/oman/event_photography_tokyo_japan_4.jpg",
      "/images/events/oman/event_photography_tokyo_japan_5.jpg",
      "/images/events/oman/event_photography_tokyo_japan_jice_10.jpg",
      "/images/events/oman/event_photography_tokyo_japan_jice_11.jpg",
      "/images/events/oman/event_photography_tokyo_japan_jice_12.jpg",
      "/images/events/oman/event_photography_tokyo_japan_jice_13.jpg",
      "/images/events/oman/event_photography_tokyo_japan_jice_14.jpg",
    ],
  },
  {
    label: "ロンドン市長来日（在日英国商業会議所）",
    location: "英国大使館・チームラボボーダレス",
    photos: [
      "/images/events/bccj/tokyo_event_photo_BCCJ_london_3.jpg",
      "/images/events/bccj/tokyo_event_photo_BCCJ_london_4.jpg",
      "/images/events/bccj/tokyo_event_photo_BCCJ_london_5.jpg",
      "/images/events/bccj/tokyo_event_photo_BCCJ_london_6.jpg",
      "/images/events/bccj/tokyo_event_photo_BCCJ_london_7.jpg",
      "/images/events/bccj/tokyo_event_photo_BCCJ_london_8.jpg",
      "/images/events/bccj/tokyo_event_photo_BCCJ_london_9.jpg",
      "/images/events/bccj/tokyo_event_photo_BCCJ_london_1.jpg",
      "/images/events/bccj/tokyo_event_photo_BCCJ_london_2.jpg",
    ],
  },
  {
    label: "ミシガン大学 同窓会イベント",
    location: "ANAインターコンチネンタルホテル東京",
    photos: [
      "/images/events/michigan/tokyo_event_photo_University_Michigan_1.jpg",
      "/images/events/michigan/tokyo_event_photo_University_Michigan_2.jpg",
      "/images/events/michigan/tokyo_event_photo_University_Michigan_3.jpg",
      "/images/events/michigan/tokyo_event_photo_University_Michigan_4.jpg",
      "/images/events/michigan/tokyo_event_photo_University_Michigan_5.jpg",
      "/images/events/michigan/tokyo_event_photo_University_Michigan_6.jpg",
      "/images/events/michigan/tokyo_event_photo_University_Michigan_7.jpg",
      "/images/events/michigan/tokyo_event_photo_University_Michigan_8.jpg",
      "/images/events/michigan/tokyo_event_photo_University_Michigan_9.jpg",
    ],
  },
];

const faqs = [
  {
    q: "対応できるイベントの種類を教えてください。",
    a: "グローバルサミット、記者会見、複数日・複数会場カンファレンス、製品発表会、アワードセレモニー、企業ガラ、政府代表団、NGOイベント、プライベート社内行事など。20名規模から2,000名規模まで対応可能です。",
  },
  {
    q: "写真と動画を同日にまとめて依頼できますか？",
    a: "はい。ひとつのバイリンガルチームが写真と映像の両方を担当するため、コストを抑えつつ、全素材に統一感のある仕上がりを実現します。",
  },
  {
    q: "動画なしで写真撮影のみの依頼もできますか？",
    a: "はい。写真と動画をまとめてご依頼いただくお客様も多いですが、写真撮影のみのご依頼も同様に歓迎しております。カメラマン1名から、大規模イベント向けの複数名体制まで対応可能です。当日のSNS用セレクトや編集済みフルアーカイブも、同じ迅速なスケジュールで納品します。お問い合わせの際にお知らせください。写真撮影のみでお見積もりをご案内します。",
  },
  {
    q: "SNS向けの当日編集に対応していますか？",
    a: "はい。ハイライトリールやSNSカットを当日中に納品可能です。イベントがトレンドに乗っている間のライブSNS投稿や、翌朝のプレス配信に最適です。",
  },
  {
    q: "複数日・複数会場のイベントに対応できますか？",
    a: "はい。東京および全国の複数日・複数会場にわたるイベントに対応実績があります。規模に合わせてクルーと機材をスケールします。",
  },
  {
    q: "ライブ配信やハイブリッドイベントのサポートはできますか？",
    a: "はい。ライブ配信設備のセットアップおよびリモート参加者をリアルタイムで繋ぐハイブリッドイベントに対応。社内・対外向けいずれも放送品質の映像を提供します。",
  },
  {
    q: "VIPプロトコルやNDAへの対応はできますか？",
    a: "はい。VIPプロトコル・守秘義務要件・ブランド一貫性への対応実績があります。政府代表団・経営幹部・国際的なハイプロファイルブランドが関わるイベントでの経験が豊富です。",
  },
  {
    q: "日本語の会場AVチームとの調整はどうなりますか？",
    a: "バイリンガルクルーが会場・AVスタッフと直接日本語でやり取りします。海外から遠隔でイベントを管理する担当者にとって特に重要なポイントで、当日の摩擦を大幅に軽減します。",
  },
  {
    q: "イベント当日に役員インタビューを撮影できますか？",
    a: "はい。会場内に専用インタビュースポットを設け、事前設定した役員インタビューやその場でのアテンディーコメント収録に対応します。イベント映像に深みが増し、将来のキャンペーン素材としても活用できます。",
  },
];

const clients = ["Sony", "HP", "Canon", "NEC", "JLL", "Accenture", "Microsoft", "Google"];

export default function EventVideoPageJP() {
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
            "acceptedAnswer": { "@type": "Answer", "text": faq.a }
          }))
        }) }}
      />

      {/* Hero: headline on cream, tall photo with vertical English on the right */}
      <section className="border-b" style={{ borderColor: "#1c1208" }}>
        <div className="fij-wrap flex flex-wrap lg:flex-nowrap gap-x-12">
          <div className="flex-[7_1_560px] pt-16 pb-12 lg:pt-24 lg:pb-14 flex flex-col justify-between gap-12">
            <div>
              <p className="text-sm font-medium mb-8" style={{ color: "#6b5a48" }}>イベント撮影 · 東京 · 日本全国</p>
              <Title stop="。" as="h1" className="fij-h1 break-keep">企業イベント<br />写真・映像制作 全国対応</Title>
            </div>
            <div className="flex flex-wrap items-end gap-x-12 gap-y-8">
              <p className="fij-lede flex-[1_1_340px]" style={{ color: "#4a3a2a" }}>
                企業映像・ドキュメンタリーの制作チームによるイベント撮影。東京拠点のバイリンガルクルーが、サミット、カンファレンス、ガラの写真・映像を担当し、ただの記録ではなくストーリーのあるハイライト映像に仕上げます。
              </p>
              <a href="#enquire" className="fij-btn shrink-0">無料見積もりを依頼する</a>
            </div>
          </div>
          <div className="relative flex-[5_1_380px] min-h-[420px] lg:min-h-[640px] -mx-[clamp(20px,4vw,48px)] lg:ml-0 overflow-hidden" style={{ backgroundColor: "#0d0a07" }}>
            <Image
              src="/images/event_top.jpg"
              alt="東京のカンファレンスでの企業イベント写真・映像撮影"
              fill
              priority
              className="object-cover object-[55%_50%]"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div aria-hidden="true" className="absolute inset-y-0 right-0 w-40" style={{ background: "linear-gradient(to left, rgba(13,10,7,0.45), rgba(13,10,7,0))" }} />
            <p
              lang="en"
              aria-hidden="true"
              className="absolute top-8 right-6 font-sans font-semibold uppercase text-[22px] lg:text-[26px] tracking-[0.2em]"
              style={{ writingMode: "vertical-rl", color: "#fdf8f3", textShadow: "0 1px 12px rgba(0,0,0,0.35)" }}
            >
              Event Coverage
            </p>
          </div>
        </div>
      </section>

      <TrustedBy clients={clients} label="実績企業" />

      {/* Services + why us, beside the sticky enquiry form */}
      <section id="full-production" className="border-b" style={{ borderColor: "#1c1208" }}>
        <div className="fij-wrap py-20 md:py-28 grid lg:grid-cols-[minmax(0,1fr)_420px] gap-14 xl:gap-20">
          <div className="min-w-0 space-y-24">
            {/* 01 Services */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-14">
              <SectionLabel num="01" label="Services" labelLang="en" />
              <div className="flex-1 min-w-0">
                <Kicker>サービス内容</Kicker>
                <Title stop="。" className="fij-h2 mb-8">すべての瞬間を捉える。<br />スタイリッシュで</Title>
                <p className="fij-lede max-w-xl mb-12" style={{ color: "#4a3a2a" }}>
                  海外クライアントの日本国内イベントを数多く手がけてきた経験から、ブランド基準に沿ったビジュアル納品の重要性を深く理解しています。
                </p>
                <ol className="fij-cells" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(50%, 220px), 1fr))" }}>
                  {services.map((s, i) => (
                    <li key={i} className="p-4 pb-6 sm:p-6 sm:pb-8 flex flex-col gap-5 sm:gap-7 sm:min-h-[150px]">
                      <span className="text-[13px] font-semibold tabular-nums" style={{ color: "#e95228" }}>{String(i + 1).padStart(2, "0")}</span>
                      <span className="text-base sm:text-[18px] leading-snug font-semibold">{s}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* 02 Why us */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-14">
              <SectionLabel num="02" label="Why us" labelLang="en" />
              <div className="flex-1 min-w-0">
                <Title stop="。" className="fij-h2 mb-12">選ばれる理由</Title>
                <div>
                  {differentiators.map((d, i) => (
                    <div key={i} className={`flex gap-6 py-6 border-t ${i === differentiators.length - 1 ? "border-b" : ""}`} style={{ borderColor: "#1c1208" }}>
                      <span className="w-8 shrink-0 pt-1.5 text-[13px] font-semibold tabular-nums" style={{ color: "#e95228" }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="fij-h3 mb-2 flex items-center gap-3">
                          {d.title}
                          {d.dsMark && <Image src="/images/ds-mark.svg" alt="DS 消費税免除指定店舗標識" width={36} height={29} unoptimized />}
                        </h3>
                        <p className="text-[15px] leading-relaxed" style={{ color: "#4a3a2a" }}>{d.desc}</p>
                        {d.link && (
                          <a href={d.link.href} target="_blank" rel="noopener" className="fij-link inline-block mt-3 text-[15px]">{d.link.label}</a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Side photos */}
                <div className="grid grid-cols-2 gap-4 mt-12">
                  <div className="relative overflow-hidden aspect-[4/5]">
                    <Image src="/images/event_side1.jpeg" alt="日本のイベント撮影" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 360px" />
                  </div>
                  <div className="relative overflow-hidden aspect-[4/5]">
                    <Image src="/images/event_side2.jpeg" alt="企業イベント写真撮影・日本" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 360px" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sticky enquiry form */}
          <aside>
            <div id="enquire" className="sticky top-24 scroll-mt-24 border p-8 lg:p-10" style={{ backgroundColor: "#fff", borderColor: "#1c1208" }}>
              <h2 className="text-[26px] leading-tight font-semibold tracking-[-0.02em] mb-2">無料見積もりを依頼する</h2>
              <p className="text-[15px] mb-6" style={{ color: "#4a3a2a" }}>
                プロジェクトについてお聞かせください。24時間以内にご返信します。
              </p>
              <LandingContactForm service="Event Photo & Video JP" lang="jp" />
            </div>
          </aside>
        </div>
      </section>

      {/* 03 Recent projects */}
      <Section num="03" label="Projects" labelLang="en" tone="night" aria-labelledby="projects-heading">
        <Title stop="。" id="projects-heading" tone="night" className="fij-h2 mb-16">制作事例</Title>
        {projects.map((p, i) => (
          <article
            key={p.title}
            className={`flex flex-wrap items-center gap-x-14 gap-y-8 py-12 border-t ${i % 2 ? "flex-row-reverse" : ""}`}
            style={{ borderColor: "rgba(253,248,243,0.25)" }}
          >
            <div className="relative flex-[1.25_1_440px] aspect-[16/9]" style={{ backgroundColor: "#241a12" }}>
              <iframe
                src={`https://player.vimeo.com/video/${p.vimeoId}?h=${p.vimeoHash}&title=0&byline=0&portrait=0`}
                className="absolute inset-0 w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title={p.title}
                loading="lazy"
              />
            </div>
            <div className="flex-[1_1_340px]">
              <p className="text-sm font-medium mb-4" style={{ color: "#f07a52" }}>{p.venue}</p>
              <h3 className="text-[24px] lg:text-[32px] leading-[1.25] font-semibold tracking-[-0.02em] mb-4">{p.title}</h3>
              <p className="text-base leading-relaxed" style={{ color: "rgba(253,248,243,0.78)" }}>{p.desc}</p>
            </div>
          </article>
        ))}
      </Section>

      {/* 04 Photography events */}
      <Section num="04" label="Photography" labelLang="en" aria-labelledby="photo-events-heading">
        <Title stop="。" id="photo-events-heading" className="fij-h2 mb-14">写真撮影実績</Title>
        <PhotoGallery events={photoEvents} lang="jp" />
      </Section>

      {/* 05 Client feedback */}
      <Section num="05" label="Feedback" labelLang="en" bordered aria-labelledby="feedback-heading">
        <h2 id="feedback-heading" className="sr-only">クライアントの声</h2>
        <figure lang="en" className="mb-16">
          <blockquote className="text-[30px] sm:text-[40px] lg:text-[52px] leading-[1.12] font-semibold tracking-[-0.035em] mb-7">
            <span style={{ color: "#e95228" }}>&ldquo;</span>Chris delivered exceptional photography and video coverage across our entire 3-day event. Beyond the visuals, he also helped bridge language gaps with local venue staff and AV teams — something that proved invaluable to our onsite execution.<span style={{ color: "#e95228" }}>&rdquo;</span>
          </blockquote>
          <figcaption className="text-[15px]" style={{ color: "#6b5a48" }}>Events Director · Global Advertising Organisation · Tokyo</figcaption>
        </figure>
        <div className="flex flex-wrap gap-x-16 gap-y-8 pt-8 border-t" style={{ borderColor: "#1c1208" }}>
          <figure lang="en" className="flex-[1_1_320px]">
            <blockquote className="text-[22px] leading-snug font-semibold tracking-[-0.02em] mb-3">
              &ldquo;The photos look great! We are very happy with the outcome.&rdquo;
            </blockquote>
            <figcaption className="text-sm" style={{ color: "#6b5a48" }}>Client Partner · Marketing Agency</figcaption>
          </figure>
          <div className="flex-[2_1_480px] min-w-0">
            <h3 className="text-sm font-medium mb-4" style={{ color: "#6b5a48" }}>Googleレビュー</h3>
            <GoogleReviews appId="94fa8f98-15eb-4b6a-8318-c0d4579384d8" />
          </div>
        </div>
      </Section>

      {/* 06 Events we've covered — searchable venue list */}
      <EventsCovered lang="jp" num="06" />

      {/* 07 Typical costs */}
      <EventPricing lang="jp" num="07" />

      {/* 08 Vertical social clips */}
      <Section num="08" label="Social" labelLang="en" tone="night" aria-labelledby="social-clips-heading">
        <div className="flex flex-wrap items-end gap-x-16 gap-y-12">
          <div className="flex-[1_1_320px]">
            <Kicker tone="night">SNSクリップ</Kicker>
            <Title stop="。" id="social-clips-heading" tone="night" className="fij-h2 mb-6">縦型ショート動画も<br />すぐに投稿可能</Title>
            <p className="fij-lede max-w-md" style={{ color: "rgba(253,248,243,0.78)" }}>
              メインのイベント撮影に加えて、字幕・カラーグレーディング済みの縦型ショート動画も制作できます。Instagram、LinkedIn、社内チャンネルにそのまま使えます。お問い合わせの際にお知らせください。
            </p>
          </div>
          <div className="flex-[1.3_1_460px] grid grid-cols-3 gap-3 sm:gap-4 items-end">
            {[
              { src: "/videos/event-social-highlights3.mp4", poster: "/videos/event-social-highlights3-poster.jpg", label: "カンファレンスハイライト", autoPlay: true, offset: "mb-12" },
              { src: "/videos/26_4_21_SNS%2030p_2_siteb.mp4", poster: "/videos/26_4_21_SNS%2030p_2_siteb.jpg", label: "ネットワーキングリキャップ", offset: "" },
              { src: "/videos/26_4_21_SNS%2030p_3_siteb.mp4", poster: "/videos/26_4_21_SNS%2030p_3_siteb.jpg", label: "ブレイクアウトセッションハイライト", offset: "mb-24" },
            ].map((v, i) => (
              <div key={i} className={v.offset}>
                <VerticalVideoTile src={v.src} poster={v.poster} label={v.label} autoPlay={v.autoPlay} />
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 09 FAQ */}
      <Section num="09" label="FAQ" labelLang="en" aria-labelledby="faq-heading">
        <div className="flex flex-wrap gap-x-16 gap-y-10">
          <Title stop="。" id="faq-heading" className="fij-h2 flex-[1_1_240px]">よくある質問</Title>
          <div className="flex-[3_1_520px] min-w-0 border-t-2" style={{ borderColor: "#1c1208" }}>
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

      {/* 10 Prefer to talk? */}
      <Section num="10" label="Contact" labelLang="en" tone="ink" aria-labelledby="talk-heading">
        <div className="flex flex-wrap items-end justify-between gap-x-16 gap-y-8">
          <div className="flex-[1_1_320px] max-w-2xl">
            <Kicker tone="ink">まずはお気軽に</Kicker>
            <Title stop="。" id="talk-heading" tone="ink" className="fij-h2">WhatsAppまたはメールで、すぐにご返信します</Title>
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
