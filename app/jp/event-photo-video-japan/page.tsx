import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/Footer";
import LandingContactForm from "@/components/LandingContactForm";
import GoogleReviews from "@/components/GoogleReviews";
import PhotoGallery from "@/components/PhotoGallery";
import EventSocialSectionJP from "@/components/EventSocialSectionJP";

export const metadata: Metadata = {
  title: "企業イベント撮影・映像制作 東京・日本全国",
  description: "東京・全国対応のバイリンガル企業イベント写真・映像制作。カンファレンス、サミット、製品発表会、ガラ。当日納品にも対応。国内外大手企業に信頼されています。",
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
  "企業イベント写真撮影・ハイライト映像制作",
  "写真撮影のみの対応（動画なし）",
  "カンファレンス・パネルディスカッションのマルチカメラ収録",
  "役員インタビュー・基調講演の映像記録",
  "SNS向け当日編集・ダイジェスト動画",
  "ライブ配信・ハイブリッドイベントのサポート",
  "参加者・登壇者のコメント撮影",
];

const differentiators = [
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
];

const projects = [
  {
    title: "International Hospitality Investment Forum (IHIF）",
    venue: "キンプトンホテル 新宿・東京 · 2025",
    desc: "IHIFカンファレンスのイベントハイライト映像・写真撮影全般・参加者インタビュー形式のリキャップ動画を、ひとつの統合撮影チームで一括納品。",
    vimeoId: "1063107227",
    vimeoHash: "c0bc991380",
    img: null,
  },
  {
    title: "CITC CLSA Tokyo Forum",
    venue: "東京 · 2024 · 3日間イベント",
    desc: "スタッフ・参加者・登壇者のコメントを3日間かけて収録したプロモーション動画。イベントの雰囲気を伝えるロケーションを選定し、日英字幕付きで編集。参加者の映り込み要件にも細心の注意を払いました。",
    vimeoId: "959287158",
    vimeoHash: "1368289498",
    img: null,
  },
  {
    title: "データセンター開所式",
    venue: "埼玉 · 日本",
    desc: "開所式のダイジェスト映像制作と写真撮影。イベント終了後すぐにSNS向け写真セレクションを高速納品しました。",
    vimeoId: "1079354745",
    vimeoHash: "17c53b18eb",
    img: null,
  },
];

const photoEvents = [
  {
    label: "Worldwide Partners (WPI) event",
    location: "東京",
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
    label: "Government trade delegation from Ireland",
    location: "東京",
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
    label: "Red Bull esports gaming event",
    location: "東京",
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
    label: "International philanthropic organisation gathering",
    location: "東京",
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
    label: "JICE government trade delegation from Oman",
    location: "東京",
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
    <div style={{ backgroundColor: "#fdf8f3" }}>

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ backgroundColor: "#0d0a07" }}>
        <div className="absolute inset-0">
          <Image
            src="/images/event_top.jpg"
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
              イベント撮影 · 東京 · 日本全国
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.9] mb-8 max-w-4xl break-keep" style={{ color: "#fdf8f3" }}>
            企業イベント<br />
            写真・映像制作 <em className="not-italic" style={{ color: "#e95228" }}>全国対応。</em>
          </h1>
          <p className="text-lg max-w-2xl leading-relaxed" style={{ color: "rgba(253,248,243,0.6)" }}>
            東京拠点のバイリンガルチームが、グローバルサミットや記者会見から複数日カンファレンス・企業ガラまで、あらゆる企業イベントの写真・映像を担当します。ブランドのエネルギー、人、目的を伝えるビジュアルストーリーを制作します。
          </p>
        </div>
      </section>

      {/* Clients */}
      <section className="py-6" style={{ backgroundColor: "#e95228" }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase mr-4" style={{ color: "rgba(13,10,7,0.5)" }}>実績企業</span>
            {clients.map((c, i) => (
              <span key={c} className="flex items-center gap-2">
                <span className="text-sm font-black" style={{ color: "rgba(13,10,7,0.75)" }}>{c}</span>
                {i < clients.length - 1 && <span style={{ color: "rgba(13,10,7,0.3)" }}>·</span>}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Event Social Section */}
      <EventSocialSectionJP />

      {/* Transition to full production */}
      <section className="py-16 border-t" style={{ borderColor: "#e8d9c8", backgroundColor: "#fdf8f3" }}>
        <div className="max-w-5xl mx-auto px-6 sm:px-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-10" style={{ backgroundColor: "#e95228" }} />
            <span className="font-mono text-[10px] tracking-[0.35em] uppercase" style={{ color: "#e95228" }}>フルイベント制作</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.05] mb-4 break-keep" style={{ color: "#1c1208" }}>
            もっとカスタマイズした<br /><span style={{ color: "rgba(28,18,8,0.4)" }}>制作が必要ですか？</span>
          </h2>
          <p className="text-sm leading-relaxed max-w-xl" style={{ color: "rgba(28,18,8,0.55)" }}>
            複数日撮影、ライブ配信、ハイブリッドイベント、役員インタビュー、グリーンスクリーン、マルチカメラのカンファレンス制作まで。フルカスタムのアプローチが必要なイベントにも対応しています。
          </p>
        </div>
      </section>

      {/* Main content + form */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
          <div className="grid lg:grid-cols-[1fr_480px] gap-16 lg:gap-24">

            {/* Left */}
            <div>

              {/* Services */}
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-10" style={{ backgroundColor: "#e95228" }} />
                <span className="font-mono text-[10px] tracking-[0.35em] uppercase" style={{ color: "#e95228" }}>サービス内容</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black mb-8 leading-tight" style={{ color: "#1c1208" }}>
                すべての瞬間を捉える。<br />スタイリッシュで<span style={{ color: "#e95228" }}>。</span>
              </h2>
              <p className="text-sm leading-relaxed mb-8" style={{ color: "rgba(28,18,8,0.6)" }}>
                海外クライアントの日本国内イベントを数多く手がけてきた経験から、ブランド基準に沿ったビジュアル納品の重要性を深く理解しています。
              </p>
              <ul className="space-y-3 mb-16">
                {services.map((s, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm" style={{ color: "rgba(28,18,8,0.75)" }}>
                    <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#e95228" }} />
                    {s}
                  </li>
                ))}
              </ul>

              {/* Why us */}
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-10" style={{ backgroundColor: "#e95228" }} />
                <span className="font-mono text-[10px] tracking-[0.35em] uppercase" style={{ color: "#e95228" }}>選ばれる理由</span>
              </div>
              <div className="space-y-0 mb-16">
                {differentiators.map((d, i) => (
                  <div key={i} className="flex gap-6 py-6 border-b" style={{ borderColor: "#e8d9c8" }}>
                    <span className="font-mono text-xs font-black shrink-0 mt-0.5" style={{ color: "#e95228" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-black mb-1 text-sm" style={{ color: "#1c1208" }}>{d.title}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: "rgba(28,18,8,0.55)" }}>{d.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Side photos */}
              <div className="grid grid-cols-2 gap-3 mb-16">
                <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
                  <Image
                    src="/images/event_side1.jpeg"
                    alt="日本のイベント撮影"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 320px"
                  />
                </div>
                <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
                  <Image
                    src="/images/event_side2.jpeg"
                    alt="企業イベント写真撮影・日本"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 320px"
                  />
                </div>
              </div>

              {/* Project examples */}
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-10" style={{ backgroundColor: "#e95228" }} />
                <span className="font-mono text-[10px] tracking-[0.35em] uppercase" style={{ color: "#e95228" }}>制作事例</span>
              </div>
              <div className="space-y-8 mb-16">
                {projects.map((p, i) => (
                  <div key={i} className="border" style={{ borderColor: "#e8d9c8" }}>
                    {p.vimeoId ? (
                      <div className="relative aspect-[16/9]" style={{ backgroundColor: "#0d0a07" }}>
                        <iframe
                          src={`https://player.vimeo.com/video/${p.vimeoId}?h=${p.vimeoHash}&title=0&byline=0&portrait=0`}
                          className="absolute inset-0 w-full h-full"
                          allow="autoplay; fullscreen; picture-in-picture"
                          allowFullScreen
                          title={p.title}
                        />
                      </div>
                    ) : p.img ? (
                      <div className="relative aspect-[16/9] overflow-hidden" style={{ backgroundColor: "#e8d9c8" }}>
                        <Image
                          src={p.img}
                          alt={p.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 640px"
                        />
                      </div>
                    ) : null}
                    <div className="p-6">
                      <p className="font-mono text-[10px] tracking-[0.2em] uppercase mb-1" style={{ color: "#e95228" }}>{p.venue}</p>
                      <h3 className="font-black mb-2" style={{ color: "#1c1208" }}>{p.title}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: "rgba(28,18,8,0.55)" }}>{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Photo events */}
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-10" style={{ backgroundColor: "#e95228" }} />
                <span className="font-mono text-[10px] tracking-[0.35em] uppercase" style={{ color: "#e95228" }}>写真撮影実績</span>
              </div>
              <div className="mb-16">
                <PhotoGallery events={photoEvents} />
              </div>

              {/* Google Reviews */}
              <div className="mb-16">
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-px w-10" style={{ backgroundColor: "#e95228" }} />
                  <span className="font-mono text-[10px] tracking-[0.35em] uppercase" style={{ color: "#e95228" }}>Googleレビュー</span>
                </div>
                <GoogleReviews appId="94fa8f98-15eb-4b6a-8318-c0d4579384d8" />
              </div>

              {/* Testimonials */}
              <div className="space-y-6 mb-16">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-px w-10" style={{ backgroundColor: "#e95228" }} />
                  <span className="font-mono text-[10px] tracking-[0.35em] uppercase" style={{ color: "#e95228" }}>クライアントの声</span>
                </div>
                <blockquote className="pl-6 border-l-4" style={{ borderColor: "#e95228" }}>
                  <p className="text-base font-black italic leading-snug mb-3" style={{ color: "#1c1208" }}>
                    &ldquo;Chris delivered exceptional photography and video coverage across our entire 3-day event. Beyond the visuals, he also helped bridge language gaps with local venue staff and AV teams — something that proved invaluable to our onsite execution.&rdquo;
                  </p>
                  <cite className="font-mono text-[10px] tracking-widest not-italic uppercase" style={{ color: "rgba(28,18,8,0.4)" }}>
                    Events Director · Global Advertising Organisation · Tokyo
                  </cite>
                </blockquote>
                <blockquote className="pl-6 border-l-4" style={{ borderColor: "#e8d9c8" }}>
                  <p className="text-base font-black italic leading-snug mb-3" style={{ color: "#1c1208" }}>
                    &ldquo;The photos look great! We are very happy with the outcome.&rdquo;
                  </p>
                  <cite className="font-mono text-[10px] tracking-widest not-italic uppercase" style={{ color: "rgba(28,18,8,0.4)" }}>
                    Client Partner · Marketing Agency
                  </cite>
                </blockquote>
              </div>

              {/* FAQ */}
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-px w-10" style={{ backgroundColor: "#e95228" }} />
                  <span className="font-mono text-[10px] tracking-[0.35em] uppercase" style={{ color: "#e95228" }}>よくある質問</span>
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

            {/* Right — sticky form */}
            <div>
              <div className="p-8 lg:p-10 sticky top-24" style={{ backgroundColor: "#fff", border: "1px solid #e8d9c8" }}>
                <h3 className="text-xl font-black mb-2" style={{ color: "#1c1208" }}>無料見積もりを依頼する</h3>
                <p className="text-sm mb-6" style={{ color: "rgba(28,18,8,0.5)" }}>
                  プロジェクトについてお聞かせください。24時間以内にご返信します。
                </p>
                <LandingContactForm service="Event Photo & Video JP" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 border-t" style={{ borderColor: "#e8d9c8", backgroundColor: "#f5ede2" }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase mb-2" style={{ color: "#e95228" }}>まずはお気軽に</p>
            <p className="font-black text-lg" style={{ color: "#1c1208" }}>WhatsAppまたはメールで、すぐにご返信します。</p>
          </div>
          <div className="flex gap-4">
            <a href="https://wa.me/819038800895" className="btn-warm font-black text-sm tracking-[0.15em] uppercase px-6 py-3">
              WhatsApp
            </a>
            <a href="mailto:filminginjapan@move-ment.co" className="font-black text-sm tracking-[0.15em] uppercase px-6 py-3 border" style={{ borderColor: "#1c1208", color: "#1c1208" }}>
              メールで問い合わせ
            </a>
          </div>
        </div>
      </section>

      <Footer lang="jp" />
    </div>
  );
}
