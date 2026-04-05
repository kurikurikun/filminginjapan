import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/Footer";
import LandingContactForm from "@/components/LandingContactForm";

export const metadata: Metadata = {
  title: "コーポレートインタビュー・採用動画制作 東京・日本全国",
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

function VideoEmbed({ src, title }: { src: string; title: string }) {
  return (
    <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
      <iframe
        src={src}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
        style={{ border: 0 }}
      />
    </div>
  );
}

export default function JpCorporateVideoPage() {
  return (
    <div style={{ backgroundColor: "#fdf8f3" }}>

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ backgroundColor: "#0d0a07" }}>
        <div className="absolute inset-0">
          <Image
            src="/images/corporate_video_tokyo.jpeg"
            alt=""
            fill
            priority
            className="object-cover object-[center_20%]"
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
              Corporate Video · Tokyo · Japan
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.9] mb-8 max-w-4xl break-keep" style={{ color: "#fdf8f3" }}>
            採用動画<em className="not-italic" style={{ color: "#e95228" }}>。</em><br />
            インタビュー動画<em className="not-italic" style={{ color: "#e95228" }}>。</em>
          </h1>
          <p className="text-lg max-w-2xl leading-relaxed" style={{ color: "rgba(253,248,243,0.6)" }}>
            日本で活動するグローバル企業向けのコーポレートインタビュー、ブランドフィルム、採用動画制作。
            日英バイリンガルチームによる放送品質の映像制作。
          </p>
        </div>
      </section>

      {/* Clients */}
      <section className="py-6" style={{ backgroundColor: "#e95228" }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase mr-4" style={{ color: "rgba(13,10,7,0.5)" }}>制作実績</span>
            {clients.map((c, i) => (
              <span key={c} className="flex items-center gap-2">
                <span className="text-sm font-black" style={{ color: "rgba(13,10,7,0.75)" }}>{c}</span>
                {i < clients.length - 1 && <span style={{ color: "rgba(13,10,7,0.3)" }}>·</span>}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 採用映像 top section ── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-10" style={{ backgroundColor: "#e95228" }} />
            <span className="font-mono text-[10px] tracking-[0.35em] uppercase" style={{ color: "#e95228" }}>採用映像</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black mb-4 leading-tight" style={{ color: "#1c1208" }}>
            従業員に会社を広めてもらいましょう<span style={{ color: "#e95228" }}>。</span>
          </h2>
          <p className="text-sm leading-relaxed mb-10 max-w-2xl" style={{ color: "rgba(28,18,8,0.6)" }}>
            一番身近な会社のファンでもある従業員のリアルな声を活かしたテスティモニアルビデオによって信頼や親近感を高め、採用力の向上をサポートします。
          </p>

          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-10" style={{ backgroundColor: "#e95228" }} />
            <span className="font-mono text-[10px] tracking-[0.35em] uppercase" style={{ color: "#e95228" }}>2種類の取材に対応</span>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {recruitmentStyles.map((s) => (
              <div key={s.num} className="group">
                <div className="relative w-full mb-5 overflow-hidden" style={{ paddingBottom: "62%" }}>
                  <Image
                    src={s.img}
                    alt={s.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <div className="absolute top-3 left-3 w-10 h-10 flex items-center justify-center font-black text-lg" style={{ backgroundColor: "#e95228", color: "#fff" }}>
                    {s.num}
                  </div>
                </div>
                <h3 className="text-xl font-black mb-3" style={{ color: "#1c1208" }}>{s.title}</h3>
                {s.desc && (
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(28,18,8,0.6)" }}>{s.desc}</p>
                )}
                {s.bullets && (
                  <ul className="space-y-2 mb-6">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm" style={{ color: "rgba(28,18,8,0.7)" }}>
                        <span style={{ color: "#e95228", flexShrink: 0 }}>—</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
                {s.link && (
                  <a
                    href={s.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-black text-sm tracking-wide px-5 py-3 transition-colors hover:bg-[#c43d10]"
                    style={{ backgroundColor: "#e95228", color: "#fff" }}
                  >
                    詳細は専用サイトTesuTemoへ →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main content + form */}
      <section className="py-16 border-t" style={{ borderColor: "#e8d9c8" }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
          <div className="grid lg:grid-cols-[1fr_480px] gap-16 lg:gap-24">

            {/* Left — service detail */}
            <div>

              {/* ── Section 1: 採用・社員プロフィール ── */}
              <div className="mb-20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-px w-10" style={{ backgroundColor: "#e95228" }} />
                  <span className="font-mono text-[10px] tracking-[0.35em] uppercase" style={{ color: "#e95228" }}>01</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black mb-6 leading-tight" style={{ color: "#1c1208" }}>
                  採用・社員プロフィール<span style={{ color: "#e95228" }}>。</span>
                </h2>
                <p className="text-sm leading-relaxed mb-8" style={{ color: "rgba(28,18,8,0.6)" }}>
                  プロンプターや型通りのセリフは使いません。社員が会社の価値観、仕事へのモチベーション、自社の魅力を自分の言葉で語る。ドキュメンタリースタイルで、共感を呼ぶ採用コンテンツを制作します。
                </p>
                <div className="space-y-8">
                  <div>
                    <VideoEmbed
                      src="https://www.youtube.com/embed/UbkuSD-ht1U?rel=0"
                      title="Google Japan 採用動画 — Filming in Japan"
                    />
                    <p className="mt-3 text-sm font-black" style={{ color: "#1c1208" }}>Google Japan — 採用動画</p>
                    <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(28,18,8,0.55)" }}>東京近郊の稲西データセンターで働くGoogle Japan社員へのインタビューを中心とした採用動画。</p>
                  </div>
                  <div>
                    <VideoEmbed
                      src="https://www.youtube.com/embed/ZDKXfIE_b1Y?rel=0"
                      title="EY 社員プロフィール映像 — Filming in Japan"
                    />
                    <p className="mt-3 text-sm font-black" style={{ color: "#1c1208" }}>EY — 社員プロフィールシリーズ</p>
                    <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(28,18,8,0.55)" }}>EYの採用・社員プロフィール動画シリーズ全6本。職場の枠を超え、仕事と人生への情熱を掘り下げた内容。</p>
                  </div>
                </div>
              </div>

              <div className="h-px mb-20" style={{ backgroundColor: "#e8d9c8" }} />

              {/* ── Section 2: コーポレートインタビュー ── */}
              <div className="mb-20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-px w-10" style={{ backgroundColor: "#e95228" }} />
                  <span className="font-mono text-[10px] tracking-[0.35em] uppercase" style={{ color: "#e95228" }}>02</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black mb-6 leading-tight" style={{ color: "#1c1208" }}>
                  コーポレートインタビュー<span style={{ color: "#e95228" }}>。</span>
                </h2>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(28,18,8,0.6)" }}>
                  CEO・役員インタビュー、ソートリーダーシップ映像、導入事例インタビューなど。クライアント先オフィス、スタジオ、日本全国どこでも対応。日英バイリンガルのクルーが、インタビュイーがリラックスして自然な言葉で語れる環境を作ります。
                </p>
                <p className="text-sm leading-relaxed mb-8" style={{ color: "rgba(28,18,8,0.6)" }}>
                  リモート映像で海外のプロデューサーやディレクターを現場に繋ぎ、モニタリングやフィードバック、質問の直接投げかけも可能です。出演者がリラックスできるよう、少人数クルーで対応します。
                </p>
                <VideoEmbed
                  src="https://player.vimeo.com/video/561655197?h=d1ca57fb5c"
                  title="コーポレートインタビュー映像サンプル — Filming in Japan"
                />
                <p className="mt-3 text-sm font-black" style={{ color: "#1c1208" }}>
                  コーポレートインタビュー映像集 — 東京
                </p>
              </div>

              <div className="h-px mb-20" style={{ backgroundColor: "#e8d9c8" }} />

              {/* ── Section 3: ブランドフィルム ── */}
              <div className="mb-20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-px w-10" style={{ backgroundColor: "#e95228" }} />
                  <span className="font-mono text-[10px] tracking-[0.35em] uppercase" style={{ color: "#e95228" }}>03</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black mb-6 leading-tight" style={{ color: "#1c1208" }}>
                  ブランドフィルム<span style={{ color: "#e95228" }}>。</span>
                </h2>
                <p className="text-sm leading-relaxed mb-8" style={{ color: "rgba(28,18,8,0.6)" }}>
                  日本で活動するグローバルブランド向けのブランドフィルム、製品ローンチ映像、インフルエンサーシリーズ、商業コンテンツ制作。脚本式の広告ではなく、ドキュメンタリーアプローチでブランドの本質的なストーリーを引き出します。HP・Canon・Googleなど多数の実績。
                </p>
                <div className="space-y-8">
                  <div>
                    <VideoEmbed
                      src="https://www.youtube.com/embed/t-VSxoBQlRA?rel=0"
                      title="コーポレートブランディング映像 — Filming in Japan"
                    />
                    <p className="mt-3 text-sm font-black" style={{ color: "#1c1208" }}>ブランドフィルム — Japan</p>
                  </div>
                  <div>
                    <VideoEmbed
                      src="https://www.youtube.com/embed/m1KV1UTpSzU?rel=0"
                      title="HP Asian Influencer Series — Filming in Japan"
                    />
                    <p className="mt-3 text-sm font-black" style={{ color: "#1c1208" }}>HP — Asian Influencer Series</p>
                  </div>
                  <div>
                    <VideoEmbed
                      src="https://player.vimeo.com/video/836766996?h=ccb3b1ab04"
                      title="White Express brand film — Filming in Japan"
                    />
                    <p className="mt-3 text-sm font-black" style={{ color: "#1c1208" }}>White Express — Brand Film</p>
                  </div>
                  <div>
                    <VideoEmbed
                      src="https://player.vimeo.com/video/517509247"
                      title="クラフトブルワリー＆蒸留所 ブランドフィルム — Japan"
                    />
                    <p className="mt-3 text-sm font-black" style={{ color: "#1c1208" }}>クラフトブルワリー＆蒸留所 — Brand Film</p>
                  </div>
                  <div>
                    <VideoEmbed
                      src="https://player.vimeo.com/video/888141337?h=7f88a78ba3"
                      title="手作りナイフ会社 ブランドフィルム — Japan"
                    />
                    <p className="mt-3 text-sm font-black" style={{ color: "#1c1208" }}>手作りナイフ会社 — Brand Film</p>
                  </div>
                </div>
              </div>

              <div className="h-px mb-20" style={{ backgroundColor: "#e8d9c8" }} />

              {/* 制作の流れ */}
              <div className="mb-16 p-8" style={{ backgroundColor: "#0d0a07" }}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-px w-10" style={{ backgroundColor: "#e95228" }} />
                  <span className="font-mono text-[10px] tracking-[0.35em] uppercase" style={{ color: "#e95228" }}>制作の流れ</span>
                </div>
                <div className="space-y-6">
                  {[
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
                  ].map((w, i) => (
                    <div key={i} className="flex gap-6 pb-6 border-b last:border-0 last:pb-0" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
                      <span className="font-mono text-xs font-black shrink-0 mt-0.5 w-20" style={{ color: "#e95228" }}>{w.step}</span>
                      <p className="text-sm leading-relaxed" style={{ color: "rgba(253,248,243,0.6)" }}>{w.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Client feedback */}
              <div className="space-y-6 mb-16">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-px w-10" style={{ backgroundColor: "#e95228" }} />
                  <span className="font-mono text-[10px] tracking-[0.35em] uppercase" style={{ color: "#e95228" }}>Client feedback</span>
                </div>
                {testimonials.map((t, i) => (
                  <blockquote key={i} className="pl-6 border-l-4" style={{ borderColor: i === 0 ? "#e95228" : "#e8d9c8" }}>
                    <p className="text-base font-black italic leading-snug mb-3" style={{ color: "#1c1208" }}>
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <cite className="font-mono text-[10px] tracking-widest not-italic uppercase" style={{ color: "rgba(28,18,8,0.4)" }}>
                      {t.credit}
                    </cite>
                  </blockquote>
                ))}
              </div>

              {/* 機材 */}
              <div className="mb-16 p-8 border" style={{ borderColor: "#e8d9c8" }}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-px w-10" style={{ backgroundColor: "#e95228" }} />
                  <span className="font-mono text-[10px] tracking-[0.35em] uppercase" style={{ color: "#e95228" }}>使用機材</span>
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(28,18,8,0.6)" }}>
                  プロ用シネマカメラを使用。ご指定のカメラがあればご相談ください。自社保有機材の一例：
                </p>
                <ul className="space-y-2">
                  {equipment.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm" style={{ color: "rgba(28,18,8,0.7)" }}>
                      <span style={{ color: "#e95228" }}>—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* よくある質問 */}
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
                  無料お見積もり
                </h3>
                <p className="text-sm mb-6" style={{ color: "rgba(28,18,8,0.5)" }}>
                  プロジェクトの概要をお聞かせください。24時間以内にご返信します。
                </p>
                <LandingContactForm service="Corporate Video Japan (JP)" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 border-t" style={{ borderColor: "#e8d9c8", backgroundColor: "#f5ede2" }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase mb-2" style={{ color: "#e95228" }}>お気軽にご連絡ください</p>
            <p className="font-black text-lg" style={{ color: "#1c1208" }}>WhatsAppまたはメールにて迅速に対応します。</p>
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
