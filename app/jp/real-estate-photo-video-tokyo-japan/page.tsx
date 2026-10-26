import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/Footer";
import LandingContactForm from "@/components/LandingContactForm";
import PhotoGrid from "@/components/PhotoGrid";
import { Section, SectionLabel, Title, Kicker, TrustedBy } from "@/components/editorial";

export const metadata: Metadata = {
  title: "不動産・商業施設の写真・動画・VRツアー制作",
  description: "東京・全国対応の商業不動産写真、ドローン空撮動画、360° Matterportバーチャルツアー。JLL・CBRE・クッシュマン・アンド・ウェイクフィールド・Hines・Savillsなど国内外大手に対応実績あり。",
  alternates: {
    canonical: "https://www.filminginjapan.com/jp/real-estate-photo-video-tokyo-japan",
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
    title: "商業不動産の写真撮影",
    desc: "オフィス竣工、リノベーション前後、店舗内装、商業物件販売など、各種用途に対応した室内外のスチル撮影。図面をもとにベストアングルと撮影時間帯を事前に検討し、マーケティングチームや施工会社と密に連携します。HDRコンポジット・カラーグレーディング・レタッチ処理まで一括納品。",
    projects: [
      "JLL・CBRE 東京オフィス竣工写真撮影",
    ],
    leadImage: { src: "/images/re_photo_1.jpg", alt: "東京・商業不動産室内写真撮影" },
    gridImages: [
      { src: "/images/re_lounge_1.jpg", alt: "東京スカイラインを望む高層オフィスラウンジ" },
      { src: "/images/re_photo_2.jpg", alt: "日本のオフィス室内写真" },
      { src: "/images/re_photo_4.jpg", alt: "不動産室内写真撮影・日本" },
      { src: "/images/re_photo_5.jpg", alt: "東京商業施設室内" },
      { src: "/images/re_office_3.jpg", alt: "東京・商業ビルロビー" },
      { src: "/images/re_office_4.jpg", alt: "日本・オフィスラウンジ内装" },
      { src: "/images/re_office_5.jpg", alt: "夜景・商業ビル外観・日本" },
      { src: "/images/re_office_2.jpg", alt: "壁画のあるクリエイティブオフィス・東京" },
    ],
    videos: [],
    matterport: null,
  },
  {
    num: "02",
    title: "不動産ドローン撮影・空撮動画",
    desc: "高層ビル・ホテル・大型商業複合施設のドローン空撮写真および動画制作。プロモーション、物件紹介、建設記録、リノベーション記録など幅広い用途に対応。地上撮影と空撮を同日にまとめることで、統一感のある映像を低コストで実現します。",
    projects: [
      "横浜湾 — 高層オフィスフライスルー動画",
      "Hines物流センター — 空撮・地上撮影・竣工写真",
      "ヒルトン福岡 — 売却プロモーション用ドローン動画",
    ],
    leadImage: { src: "/images/re_drone_1.jpg", alt: "日本・商業ビルドローン空撮" },
    gridImages: [
      { src: "/images/re_photo_3.jpg", alt: "スパイラル構造物の空撮・日本" },
      { src: "/images/re_drone_4.jpg", alt: "日本・ビル空撮" },
      { src: "/images/re_drone_5.jpg", alt: "東京・商業複合施設ドローン撮影" },
      { src: "/images/re_drone_6.jpg", alt: "日本・高層ビルドローン空撮" },
    ],
    videos: [
      { id: "873209362", hash: "092fe43e56", caption: "ヒルトン福岡 — 売却プロモーション用ドローン動画" },
      { id: "952995962", hash: "541869b193", caption: "物流センター — ドローン空撮映像" },
    ],
    matterport: null,
  },
  {
    num: "03",
    title: "360° VR・Matterportバーチャルツアー",
    desc: "Matterport Pro 3を使用した360°バーチャルツアーで、国内外のマーケットのために、ブラウザやVRヘッドセット（Meta Quest）から現地を確認できます。Insta360 Pro 2・Insta360 1インチ・フルサイズミラーレスのスティッチ合成にも対応。オフィス・倉庫・物流センター・屋外スペースまで幅広く対応可能。",
    projects: [
      "倉庫・物流センター 360°バーチャルツアー",
      "広島平和記念公園 — 360°バーチャル体験",
      "代々木高級住宅 — 国内外向けMatterportツアー",
    ],
    leadImage: null,
    gridImages: [],
    videos: [],
    matterport: "14HzQMjL4RW",
  },
  {
    num: "04",
    title: "ビル・施設・住宅の動画制作",
    desc: "データセンター・ホテル・倉庫・オフィスビル・住宅・商業施設のシネマティック竣工・プロモーション動画。インタビュー・Bロール・空撮映像を組み合わせた魅力的な映像制作に対応。写真・ドローン・Matterportをまとめて複数日撮影することで、効率的かつ統一感のある成果物を提供します。写真は撮影後24時間以内、動画・バーチャルツアーは72時間以内に納品。",
    projects: [
      "Hines物流センター — プロモーション動画",
      "東京・データセンター竣工動画",
      "全国ホテル・商業施設 施設紹介映像",
    ],
    leadImage: { src: "/images/re_facility_1.jpg", alt: "日本・建物施設動画制作" },
    gridImages: [
      { src: "/images/re_facility_2.jpg", alt: "東京・施設動画制作" },
      { src: "/images/re_facility_3.jpg", alt: "日本・商業ビル動画" },
      { src: "/images/re_residence_1.jpg", alt: "東京・高級住宅外観" },
      { src: "/images/re_residence_3.jpg", alt: "東京・高級住宅階段" },
    ],
    videos: [
      { id: "953857182", hash: null, caption: "麻布十番・高級住宅プロモーション動画" },
      { id: "887091197", hash: "76711d9979", caption: "代々木・高級住宅ショーケースウォークスルー" },
      { id: "867821014", hash: "19dce56809", caption: "東京・オフィス内装写真・動画" },
    ],
    matterport: null,
  },
];

const faqs = [
  {
    q: "対応できる不動産・施設の種類を教えてください。",
    a: "ホテル、商業施設、データセンター、倉庫、オフィスビル、高層タワー、住宅開発、店舗内装など幅広く対応しています。JLL・CBRE・クッシュマン・アンド・ウェイクフィールド・Hines・Savillsなど国内外大手との実績もあります。",
  },
  {
    q: "写真・ドローン・動画・Matterportをまとめて依頼できますか？",
    a: "はい、これが弊社の強みのひとつです。地上写真・ドローン空撮・動画撮影・Matterportバーチャルツアーをひとつのチームで複数日にわたって対応します。クルーを一本化することで、統一感のある仕上がりと総コストの削減を実現します。",
  },
  {
    q: "Matterportはどの機材を使用していますか？",
    a: "室内スキャンにはMatterport Pro 3カメラを使用しています。大型スペースや屋外にも対応。360°ツアーにはInsta360 Pro 2・Insta360 1インチ、またはフルサイズミラーレスのスティッチ合成による高品質なツアー制作も可能です。",
  },
  {
    q: "海外からでもバーチャルツアーを閲覧できますか？",
    a: "はい。MatterportツアーおよびVRバーチャル体験は、ブラウザまたはVRヘッドセット（Meta Quest）から閲覧可能です。海外の購入希望者・入居検討者が来日せずに物件を詳細確認できます。",
  },
  {
    q: "日本国内でのビルのドローン空撮は可能ですか？",
    a: "はい。高層ビル・ホテル・大型商業複合施設の空撮実績が豊富です。各種許可申請の取得、ビル管理会社との調整まで一括対応します。",
  },
  {
    q: "納品までの期間を教えてください。",
    a: "写真は撮影翌日（24時間以内）に納品。動画編集・Matterportツアーは72時間以内に納品。急ぎの場合はご相談ください。",
  },
  {
    q: "データセンターや産業施設の動画制作も対応していますか？",
    a: "はい。Hinesをはじめ、データセンター・倉庫・物流センター・オフィスビル・商業施設の竣工・プロモーション動画制作実績があります。",
  },
  {
    q: "高級住宅・レジデンスの撮影も対応していますか？",
    a: "はい。シネマティックなウォークスルー動画、建築家インタビュー映像、写真・動画・Matterportを組み合わせた総合メディアパッケージを提供しています。印刷物・バイリンガルテキスト制作も対応可能です。",
  },
  {
    q: "建物管理会社や現地スタッフとの調整はどのように行いますか？",
    a: "バイリンガルのスタッフが建物管理会社・施設担当者・現地スタッフと日本語で直接やり取りします。海外からのコーディネートにありがちな連絡ロスや当日のトラブルを防ぎます。",
  },
];

const clients = ["JLL", "CBRE", "Cushman & Wakefield", "Hines", "Savills"];

export default function RealEstatePageJp() {
  return (
    <div lang="ja" style={{ backgroundColor: "#fdf8f3" }}>

      {/* Hero: headline on cream, tall photo with vertical English on the right */}
      <section className="border-b" style={{ borderColor: "#1c1208" }}>
        <div className="fij-wrap flex flex-wrap lg:flex-nowrap gap-x-12">
          <div className="flex-[7_1_560px] pt-16 pb-12 lg:pt-24 lg:pb-14 flex flex-col justify-between gap-12">
            <div>
              <p className="text-sm font-medium mb-8" style={{ color: "#6b5a48" }}>不動産メディア · 東京 · 日本全国</p>
              <Title as="h1" className="fij-h1 break-keep">不動産・商業施設の<br />写真・動画・<br />VRツアー</Title>
            </div>
            <div className="flex flex-wrap items-end gap-x-12 gap-y-8">
              <p className="fij-lede flex-[1_1_340px]" style={{ color: "#4a3a2a" }}>
                デベロッパー・不動産仲介会社・企業不動産チーム向けに、商業不動産写真・ドローン動画・360° Matterportバーチャルツアーを全国対応で提供します。
              </p>
              <a href="#enquire" className="fij-btn shrink-0">無料見積もりを依頼する</a>
            </div>
          </div>
          <div className="relative flex-[5_1_380px] min-h-[420px] lg:min-h-[640px] -mx-[clamp(20px,4vw,48px)] lg:ml-0 overflow-hidden" style={{ backgroundColor: "#0d0a07" }}>
            <Image
              src="/images/tokyo-real-estate-drone-photo1.jpg"
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
              Real Estate
            </p>
          </div>
        </div>
      </section>

      <TrustedBy clients={clients} label="主な取引先" />

      {/* 01 Services, beside the sticky enquiry form */}
      <section className="border-b" style={{ borderColor: "#1c1208" }}>
        <div className="fij-wrap py-20 md:py-28 grid lg:grid-cols-[minmax(0,1fr)_420px] gap-14 xl:gap-20">
          <div className="min-w-0 flex flex-col md:flex-row gap-6 md:gap-14">
            <SectionLabel num="01" label="Services" labelLang="en" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium mb-5" style={{ color: "#6b5a48" }}>サービス内容</p>
              <h2 className="fij-h2 mb-14 break-keep">物件の魅力を最大限に引き出す<br />映像・写真制作<span style={{ color: "#e95228" }}>。</span></h2>

              <div className="border-b" style={{ borderColor: "#1c1208" }}>
                {services.map((s) => {
                  const photos = s.leadImage ? [s.leadImage, ...s.gridImages] : s.gridImages;
                  return (
                    <article key={s.num} className="py-10 border-t" style={{ borderColor: "#1c1208" }}>
                      <div className="flex gap-6 mb-8">
                        <span className="w-8 shrink-0 pt-1.5 text-[13px] font-semibold tabular-nums" style={{ color: "#e95228" }}>{s.num}</span>
                        <div className="min-w-0">
                          <h3 className="fij-h3 mb-3">{s.title}</h3>
                          <p className="text-[15px] leading-loose mb-5" style={{ color: "#4a3a2a" }}>{s.desc}</p>
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
                        {photos.length > 0 && <PhotoGrid images={photos} lang="jp" />}

                        {/* Matterport embed */}
                        {s.matterport && (
                          <figure>
                            <div className="relative w-full aspect-[16/9]" style={{ backgroundColor: "#0d0a07" }}>
                              <iframe
                                src={`https://my.matterport.com/show/?m=${s.matterport}`}
                                title="Matterport 360°バーチャルツアー"
                                allow="vr; xr; accelerometer; magnetometer; gyroscope; autoplay"
                                allowFullScreen
                                className="absolute inset-0 w-full h-full"
                                style={{ border: 0 }}
                              />
                            </div>
                            <figcaption className="mt-3 text-[15px] font-semibold">360° Matterportバーチャルツアー — ブラウザまたはVRヘッドセットでご体験ください</figcaption>
                          </figure>
                        )}

                        {/* Videos */}
                        {s.videos.length > 0 && (
                          <div className="grid sm:grid-cols-2 gap-x-4 gap-y-6">
                            {s.videos.map((v, i) => (
                              <figure key={v.id} className={s.videos.length % 2 === 1 && i === 0 ? "sm:col-span-2" : ""}>
                                <div className="relative w-full aspect-[16/9]" style={{ backgroundColor: "#0d0a07" }}>
                                  <iframe
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
              <h2 className="text-[26px] leading-snug font-semibold mb-2">無料見積もりを依頼する</h2>
              <p className="text-[15px] mb-6" style={{ color: "#4a3a2a" }}>
                物件情報をお聞かせください。24時間以内に返信します。
              </p>
              <LandingContactForm service="Real Estate Photo & Video Japan (JP)" lang="jp" />
            </div>
          </aside>
        </div>
      </section>

      {/* 02 Client feedback */}
      <Section num="02" label="Feedback" labelLang="en" tone="sand" aria-labelledby="feedback-heading">
        <h2 id="feedback-heading" className="sr-only">Client Feedback</h2>
        <figure lang="en" className="max-w-5xl">
          <blockquote className="text-[30px] sm:text-[40px] lg:text-[52px] leading-[1.12] font-semibold tracking-[-0.035em] mb-7">
            <span style={{ color: "#e95228" }}>&ldquo;</span>Thank you for your super speedy work and being so flexible with the suggestions for capturing the unique elements of the design. We love your &apos;human&apos; viewpoint so thank you for capturing this.<span style={{ color: "#e95228" }}>&rdquo;</span>
          </blockquote>
          <figcaption className="text-[15px]" style={{ color: "#6b5a48" }}>Workplace Designer · Multinational Real Estate Company</figcaption>
        </figure>
      </Section>

      {/* 03 FAQ */}
      <Section num="03" label="FAQ" labelLang="en" bordered aria-labelledby="faq-heading">
        <div className="flex flex-wrap gap-x-16 gap-y-10">
          <Title id="faq-heading" className="fij-h2 flex-[1_1_240px]">よくある質問</Title>
          <div className="flex-[3_1_520px] min-w-0 border-t-2" style={{ borderColor: "#1c1208" }}>
            {faqs.map((faq, i) => (
              <details key={i} className="fij-faq border-b" style={{ borderColor: "#1c1208" }} open={i === 0}>
                <summary className="flex justify-between items-center gap-6 py-[22px] text-[18px] font-semibold">
                  <h3>{faq.q}</h3>
                  <span aria-hidden="true" className="fij-faq-icon shrink-0 text-2xl font-normal leading-none" style={{ color: "#e95228" }}>+</span>
                </summary>
                <p className="pb-6 max-w-2xl text-base leading-loose" style={{ color: "#4a3a2a" }}>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </Section>

      {/* 04 Contact */}
      <Section num="04" label="Contact" labelLang="en" tone="ink" aria-labelledby="talk-heading">
        <div className="flex flex-wrap items-end justify-between gap-x-16 gap-y-8">
          <div>
            <Kicker tone="ink">まずはお気軽に</Kicker>
            <Title id="talk-heading" tone="ink" className="fij-h2">WhatsAppまたはメールでお問い合わせください</Title>
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
