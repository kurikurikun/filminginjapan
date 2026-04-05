import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/Footer";
import LandingContactForm from "@/components/LandingContactForm";
import PhotoGrid from "@/components/PhotoGrid";

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
    <div style={{ backgroundColor: "#fdf8f3" }}>

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ backgroundColor: "#0d0a07" }}>
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
              不動産メディア · 東京 · 日本全国
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.9] mb-8 max-w-4xl break-keep" style={{ color: "#fdf8f3" }}>
            不動産・商業施設の<br />写真・動画・<br />
            <em className="not-italic" style={{ color: "#e95228" }}>VRツアー</em>
          </h1>
          <p className="text-lg max-w-2xl leading-relaxed" style={{ color: "rgba(253,248,243,0.6)" }}>
            デベロッパー・不動産仲介会社・企業不動産チーム向けに、商業不動産写真・ドローン動画・360° Matterportバーチャルツアーを全国対応で提供します。
          </p>
        </div>
      </section>

      {/* Clients */}
      <section className="py-6" style={{ backgroundColor: "#e95228" }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase mr-4" style={{ color: "rgba(13,10,7,0.5)" }}>主な取引先</span>
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
                <span className="font-mono text-[10px] tracking-[0.35em] uppercase" style={{ color: "#e95228" }}>サービス内容</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black mb-10 leading-tight" style={{ color: "#1c1208" }}>
                物件の魅力を最大限に引き出す<br />映像・写真制作<span style={{ color: "#e95228" }}>。</span>
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
                            title="Matterport 360°バーチャルツアー"
                            allow="vr; xr; accelerometer; magnetometer; gyroscope; autoplay"
                            allowFullScreen
                            className="absolute inset-0 w-full h-full"
                            style={{ border: 0 }}
                          />
                        </div>
                        <p className="mt-2 text-sm font-black" style={{ color: "#1c1208" }}>360° Matterportバーチャルツアー — ブラウザまたはVRヘッドセットでご体験ください</p>
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

              {/* Testimonial */}
              <div className="space-y-6 mb-16">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-px w-10" style={{ backgroundColor: "#e95228" }} />
                  <span className="font-mono text-[10px] tracking-[0.35em] uppercase" style={{ color: "#e95228" }}>Client Feedback</span>
                </div>

                <blockquote className="pl-6 border-l-4" style={{ borderColor: "#e95228" }}>
                  <p className="text-base font-black italic leading-snug mb-3" style={{ color: "#1c1208" }}>
                    &ldquo;Thank you for your super speedy work and being so flexible with the suggestions for capturing the unique elements of the design. We love your &apos;human&apos; viewpoint so thank you for capturing this.&rdquo;
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

            {/* Right — form */}
            <div>
              <div
                className="p-8 lg:p-10 sticky top-24"
                style={{ backgroundColor: "#fff", border: "1px solid #e8d9c8" }}
              >
                <h3 className="text-xl font-black mb-2" style={{ color: "#1c1208" }}>
                  無料見積もりを依頼する
                </h3>
                <p className="text-sm mb-6" style={{ color: "rgba(28,18,8,0.5)" }}>
                  物件情報をお聞かせください。24時間以内に返信します。
                </p>
                <LandingContactForm service="Real Estate Photo & Video Japan (JP)" />
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
            <p className="font-black text-lg" style={{ color: "#1c1208" }}>WhatsAppまたはメールでお問い合わせください。</p>
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
