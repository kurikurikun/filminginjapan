import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/Footer";
import LandingContactForm from "@/components/LandingContactForm";

export const metadata: Metadata = {
  title: "映像制作の導入事例・お客様の声 | Filming in Japan",
  description: "東京・日本全国でカスタマーストーリー・導入事例動画を制作。日英バイリンガル対応。オンライン・オフィス・イベント取材の3スタイル。Microsoft、Google、SAP など多数の実績。",
  alternates: { canonical: "https://www.filminginjapan.com/jp/client-testimonials-video-production-tokyo-japan" },
};

const clients = ["JLL", "Microsoft", "SAP", "Celonis", "HP", "Canon", "Sony", "Google"];

const introStyles = [
  {
    num: "①",
    title: "オンラインで取材",
    desc: "最速・低コスト・全国対応。Zoom形式のオンライン取材でリアルな声を引き出します。",
    img: "/images/tokyo_japan_studio_green_screen_recordings_1.jpeg",
    alt: "オンライン取材・Zoom形式カスタマーストーリー動画",
  },
  {
    num: "②",
    title: "オフィスで取材",
    desc: "空間と人物の両方から信頼感を伝える、本格BtoB導入事例に最適なスタイル。",
    img: "/images/customer_testimonial_office_tokyo.jpeg",
    alt: "オフィス取材・導入事例動画 東京",
  },
  {
    num: "③",
    title: "イベントで取材",
    desc: "イベントの熱量をそのまま収録。多人数・ショート動画量産に最適なスタイル。",
    img: "/images/event_photography_tokyo_japan_1.jpg",
    alt: "イベント取材・カスタマーストーリー動画 東京",
  },
];

const reasons = [
  {
    num: "01",
    title: "高い説得力",
    desc: "ユーザーの言葉は広告よりも何倍も強い説得力を持ちます。リアルな表情とストーリーが信頼と安心感を与えます。",
  },
  {
    num: "02",
    title: "複雑な導入実績を映像化",
    desc: "課題 → 導入の決め手 → 使った感想 → 効果。こうした流れを映像で整理した導入事例ストーリーを制作します。",
  },
  {
    num: "03",
    title: "あらゆる場面で応用可能",
    desc: "Webサイト、SNS広告、営業資料、展示会ループ再生。1本のインタビューから縦・横・短尺など複数コンテンツを生成できます。",
  },
  {
    num: "04",
    title: "3つのスタイルから選べる",
    desc: "オンライン・オフィス・イベント。ターゲット、ブランドイメージ、リソースに合わせて最適なスタイルを選べます。",
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

function CardGrid({ items }: { items: { heading: string; bullets: string[] }[] }) {
  return (
    <div className="grid sm:grid-cols-3 gap-4">
      {items.map((item) => (
        <div key={item.heading} className="p-6" style={{ backgroundColor: "#fff", border: "1px solid #e8d9c8" }}>
          <p className="font-mono text-[10px] tracking-[0.25em] uppercase mb-3" style={{ color: "#e95228" }}>
            {item.heading}
          </p>
          <ul className="space-y-2">
            {item.bullets.map((b) => (
              <li key={b} className="flex items-start gap-2 text-sm" style={{ color: "#1c1208" }}>
                <span style={{ color: "#e95228", flexShrink: 0 }}>—</span>
                {b}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default function TestimonialsPageJP() {
  return (
    <div style={{ backgroundColor: "#fdf8f3" }}>

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ backgroundColor: "#0d0a07" }}>
        <div className="absolute inset-0">
          <Image
            src="/images/customer_testimonial_office_tokyo.jpeg"
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
              導入事例動画 · 東京 · 日本
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.9] mb-8 max-w-4xl" style={{ color: "#fdf8f3" }}>
            カスタマーストーリー<br />
            <em className="not-italic" style={{ color: "#e95228" }}>動画制作。</em>
          </h1>
          <p className="text-lg max-w-2xl leading-relaxed" style={{ color: "rgba(253,248,243,0.6)" }}>
            お客様の声は、信頼性の高い、サービスの価値を最も自然に伝える強力なコンテンツ。
            取材の仕方は3種類。顧客体験を最大のセールスツールに。
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

      {/* 3 intro style cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-10" style={{ backgroundColor: "#e95228" }} />
            <span className="font-mono text-[10px] tracking-[0.35em] uppercase" style={{ color: "#e95228" }}>3つの取材スタイル</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black mb-12 leading-tight" style={{ color: "#1c1208" }}>
            取材スタイルを選ぶ<span style={{ color: "#e95228" }}>。</span>
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {introStyles.map((s) => (
              <div key={s.num} className="group">
                <div className="relative w-full mb-4 overflow-hidden" style={{ paddingBottom: "66.67%" }}>
                  <Image
                    src={s.img}
                    alt={s.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                  <div className="absolute top-3 left-3 w-8 h-8 flex items-center justify-center font-black text-sm" style={{ backgroundColor: "#e95228", color: "#fff" }}>
                    {s.num}
                  </div>
                </div>
                <h3 className="text-lg font-black mb-1" style={{ color: "#1c1208" }}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(28,18,8,0.55)" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 選ばれる理由 */}
      <section className="py-20" style={{ backgroundColor: "#0d0a07" }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-10" style={{ backgroundColor: "#e95228" }} />
            <span className="font-mono text-[10px] tracking-[0.35em] uppercase" style={{ color: "#e95228" }}>選ばれる理由</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black mb-12 leading-tight" style={{ color: "#fdf8f3" }}>
            カスタマーストーリーが<br />選ばれる理由<span style={{ color: "#e95228" }}>。</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((r) => (
              <div key={r.num} className="p-6" style={{ backgroundColor: "rgba(253,248,243,0.04)", border: "1px solid rgba(253,248,243,0.1)" }}>
                <p className="font-mono text-xs font-black mb-3" style={{ color: "#e95228" }}>{r.num}</p>
                <h3 className="font-black mb-2 text-sm" style={{ color: "#fdf8f3" }}>{r.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(253,248,243,0.5)" }}>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ① オンラインで取材 */}
      <section className="py-20 border-b" style={{ borderColor: "#e8d9c8" }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 flex items-center justify-center font-black text-sm" style={{ backgroundColor: "#e95228", color: "#fff" }}>①</span>
            <span className="font-mono text-[10px] tracking-[0.35em] uppercase" style={{ color: "#e95228" }}>オンラインで取材</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black mb-4 leading-tight" style={{ color: "#1c1208" }}>
            最速・低コスト・全国対応<span style={{ color: "#e95228" }}>。</span>
          </h2>
          <p className="text-base leading-relaxed mb-10 max-w-2xl" style={{ color: "rgba(28,18,8,0.6)" }}>
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
                "リラックスした自然なコメントを引き出す",
              ],
            },
          ]} />
        </div>
      </section>

      {/* ② オフィスで取材 */}
      <section className="py-20 border-b" style={{ borderColor: "#e8d9c8" }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 flex items-center justify-center font-black text-sm" style={{ backgroundColor: "#e95228", color: "#fff" }}>②</span>
            <span className="font-mono text-[10px] tracking-[0.35em] uppercase" style={{ color: "#e95228" }}>オフィスで取材</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black mb-4 leading-tight" style={{ color: "#1c1208" }}>
            空間と人物から信頼感を伝える<span style={{ color: "#e95228" }}>。</span>
          </h2>
          <p className="text-base leading-relaxed mb-10 max-w-2xl" style={{ color: "rgba(28,18,8,0.6)" }}>
            オフィス・現場の素材映像も撮影。複数名インタビュー、ライティング、複数カメラ、高品質音声のフルセット。BtoBの本格的な導入事例、医療・製造業など現場の雰囲気が重要な業界に最適です。
          </p>
          <CardGrid items={[
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

          {/* Panasonic Connect video */}
          <div className="mt-12">
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src="https://www.youtube.com/embed/72GKHq5pCDY"
                title="Panasonic Connect カスタマーストーリー動画 Filming in Japan"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
              />
            </div>
            <p className="mt-3 text-sm font-black" style={{ color: "#1c1208" }}>Panasonic Connect向けカスタマーストーリー動画（DP: Filming in Japan）</p>
          </div>
        </div>
      </section>

      {/* ③ イベントで取材 */}
      <section className="py-20 border-b" style={{ borderColor: "#e8d9c8" }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 flex items-center justify-center font-black text-sm" style={{ backgroundColor: "#e95228", color: "#fff" }}>③</span>
            <span className="font-mono text-[10px] tracking-[0.35em] uppercase" style={{ color: "#e95228" }}>イベントで取材</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black mb-4 leading-tight" style={{ color: "#1c1208" }}>
            イベントの熱量をそのまま収録<span style={{ color: "#e95228" }}>。</span>
          </h2>
          <p className="text-base leading-relaxed mb-10 max-w-2xl" style={{ color: "rgba(28,18,8,0.6)" }}>
            その場でインタビュー、またはグリーンバックの前で多人数の声を短時間で収録可能。自社カンファレンスやユーザーイベントに最適。熱量が高くSNSとの相性が良く、ショート動画の量産も可能です。
          </p>
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
                "イベントハイライトとのセットも可能",
              ],
            },
          ]} />

          {/* Japan Hana Real Estate event video */}
          <div className="mt-12">
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src="https://player.vimeo.com/video/561655197?h=d1ca57fb5c"
                title="イベント取材・カスタマーストーリー動画サンプル Filming in Japan"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
              />
            </div>
            <p className="mt-3 text-sm font-black" style={{ color: "#1c1208" }}>イベント取材・導入事例動画サンプル集（Filming in Japan）</p>
          </div>
        </div>
      </section>

      {/* Testimonial quote */}
      <section className="py-16" style={{ backgroundColor: "#f5ede2" }}>
        <div className="max-w-4xl mx-auto px-6 sm:px-12 lg:px-16">
          <blockquote className="pl-6 border-l-4" style={{ borderColor: "#e95228" }}>
            <p className="text-base sm:text-lg font-black italic leading-snug mb-4" style={{ color: "#1c1208" }}>
              &ldquo;Your expertise in making the interviewees feel comfortable and getting genuine answers from them is outstanding. Once again, thank you so much for working with us. I hope we can collaborate again in the future!&rdquo;
            </p>
            <cite className="font-mono text-[10px] tracking-widest not-italic uppercase" style={{ color: "rgba(28,18,8,0.4)" }}>
              グローバル企業クライアント
            </cite>
          </blockquote>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 sm:px-12 lg:px-16">
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
      </section>

      {/* Contact form — full width */}
      <section className="py-20 border-t" style={{ borderColor: "#e8d9c8", backgroundColor: "#fff" }}>
        <div className="max-w-2xl mx-auto px-6 sm:px-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-10" style={{ backgroundColor: "#e95228" }} />
            <span className="font-mono text-[10px] tracking-[0.35em] uppercase" style={{ color: "#e95228" }}>お問い合わせ</span>
          </div>
          <h2 className="text-3xl font-black mb-2" style={{ color: "#1c1208" }}>
            無料見積もりを依頼する<span style={{ color: "#e95228" }}>。</span>
          </h2>
          <p className="text-sm mb-8" style={{ color: "rgba(28,18,8,0.5)" }}>
            プロジェクトについてお聞かせください。24時間以内にご返信します。
          </p>
          <LandingContactForm service="Customer Story Video JP" />
        </div>
      </section>

      <Footer lang="jp" />
    </div>
  );
}
