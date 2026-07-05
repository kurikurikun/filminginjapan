import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import VideoLightbox from "@/components/VideoLightbox";
import PeopleCarousel from "@/components/PeopleCarousel";
import ServiceGrid from "@/components/ServiceGrid";
import InstagramFeed from "@/components/InstagramFeed";

export const metadata: Metadata = {
  title: { absolute: "企業向け映像制作・東京 | Filming in Japan" },
  description:
    "日本全国対応の企業向け映像制作。日英バイリンガルチーム、東京・広島拠点。Sony、Google、Microsoft、Canonなど国内外大手企業に信頼されています。",
  alternates: {
    canonical: "https://www.filminginjapan.com/jp",
    languages: {
      "en": "https://www.filminginjapan.com",
      "ja": "https://www.filminginjapan.com/jp",
      "x-default": "https://www.filminginjapan.com",
    },
  },
};

const clients = ["Sony", "HP", "Canon", "NEC", "JLL", "Accenture", "Microsoft", "Google"];

const workflow = [
  { step: "01", title: "お問い合わせ", desc: "フォーム・メール・WhatsAppでご連絡ください。カレンダーリンクから30分のZoom相談もご予約いただけます。" },
  { step: "02", title: "ご返信", desc: "ご依頼内容を確認し、スケジュールの空き状況をご連絡します。見積もり前に不明点があればご質問します。" },
  { step: "03", title: "お見積もり", desc: "簡単なお打ち合わせで内容を確認後、全項目を含む正式なお見積もりを提出します。" },
  { step: "04", title: "撮影準備MTG", desc: "日程・費用が確定したら、撮影当日に向けた準備確認のお打ち合わせを行います。" },
  { step: "05", title: "撮影・納品", desc: "ご依頼内容に沿って撮影。海外からのディレクションにはライブフィードにも対応。データまたは編集済みファイルをDrive・Dropbox・FedExにて納品します。" },
];

const faqs = [
  { q: "どのくらい前に依頼すればいいですか？", a: "早いほど安心ですが、柔軟に対応します。1〜2名の撮影であれば、1週間前の確定でも対応可能な場合があります。" },
  { q: "支払い条件を教えてください。", a: "基本的に納品後の請求となります。スタジオレンタルや機材レンタルなど、大きな先払いコストが発生する場合はその分のみ事前にご請求します。" },
  { q: "日本語でのインタビュー撮影は可能ですか？", a: "はい。ネイティブおよび流暢な日本語スピーカーが在籍しており、日本語インタビューの撮影実績も多数あります。" },
  { q: "撮影のみ（編集なし）でも対応できますか？", a: "もちろんです。素材データをそのままご提出し、編集はクライアント側で行っていただく形にも対応しています。" },
  { q: "納品方法を教えてください。", a: "通常はGoogle DriveまたはDropboxで納品します。ハードドライブをFedExで国際配送した実績もあります。" },
  { q: "小規模・クリエイティブ系のプロジェクトにも対応できますか？", a: "もちろんです。人間のストーリーがあるものであれば基本的に喜んでお引き受けします。最近の例：桜の下での三味線奏者、プロ女子プロレスラー、山頂でのクラシックバイオリニストなど。" },
];

export default function HomePageJp() {
  return (
    <div style={{ backgroundColor: "#fdf8f3" }}>

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0" style={{ zIndex: 0 }}>
          <iframe
            src="https://player.vimeo.com/video/533378669?background=1&autoplay=1&loop=1&muted=1&autopause=0"
            className="absolute"
            style={{
              top: "50%", left: "50%",
              transform: "translate(-50%, -50%)",
              width: "max(100%, calc(100vh * 16 / 9))",
              height: "max(100%, calc(100vw * 9 / 16))",
              pointerEvents: "none",
            }}
            allow="autoplay; fullscreen"
            title="ヒーロー映像"
          />
        </div>
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(13,10,7,0.92) 0%, rgba(13,10,7,0.5) 50%, rgba(13,10,7,0.3) 100%)", zIndex: 1 }}
        />
        <div className="absolute inset-0" style={{ backgroundColor: "#0d0a07", zIndex: -1 }} />

        <div className="absolute top-8 left-8 lg:top-12 lg:left-12 pointer-events-none" style={{ zIndex: 2 }} aria-hidden="true">
          <div className="w-8 h-8 border-t border-l" style={{ borderColor: "rgba(233,82,40,0.4)" }} />
        </div>
        <div className="absolute top-8 right-8 lg:top-12 lg:right-12 pointer-events-none" style={{ zIndex: 2 }} aria-hidden="true">
          <div className="w-8 h-8 border-t border-r" style={{ borderColor: "rgba(233,82,40,0.4)" }} />
        </div>

        <div className="relative px-8 sm:px-14 lg:px-20 pb-20 pt-40 max-w-7xl" style={{ zIndex: 2 }}>
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px w-12" style={{ backgroundColor: "#e95228" }} />
            <span className="font-mono text-xs tracking-[0.35em] uppercase" style={{ color: "#e95228" }}>
              東京 · 広島 · 日本全国
            </span>
          </div>

          <h1
            className="text-4xl sm:text-7xl lg:text-8xl xl:text-9xl font-black leading-[1.05] mb-10 max-w-4xl break-keep"
            style={{ color: "#fdf8f3" }}
          >
            企業向け映像制作<br />
            <em className="not-italic" style={{ color: "#e95228" }}>日本全国</em>
            <span style={{ color: "#e95228" }}>。</span>
          </h1>

          <p className="text-lg max-w-xl leading-relaxed mb-12" style={{ color: "rgba(253,248,243,0.65)" }}>
            グローバルブランドのための日英バイリンガル映像制作。<br />
            Sony・Google・Microsoft・Canonなど国内外大手企業に信頼されています。
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <Link href="/jp/contact" className="btn-warm font-black text-sm tracking-[0.18em] uppercase px-8 py-4">
              プロジェクトを相談する
            </Link>
            <Link
              href="/jp/corporate-video"
              className="font-mono text-xs tracking-[0.25em] uppercase"
              style={{ color: "rgba(253,248,243,0.5)" }}
            >
              制作実績を見る →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Clients ── */}
      <section className="py-7" style={{ backgroundColor: "#e95228" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-3">
            <span className="font-mono text-[10px] tracking-[0.35em] uppercase mr-6" style={{ color: "rgba(13,10,7,0.5)" }}>
              実績企業
            </span>
            {clients.map((c, i) => (
              <span key={c} className="flex items-center gap-2">
                <span className="text-sm font-black tracking-wide cursor-default" style={{ color: "rgba(13,10,7,0.7)" }}>
                  {c}
                </span>
                {i < clients.length - 1 && (
                  <span className="text-xs" style={{ color: "rgba(13,10,7,0.3)" }}>·</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-32" style={{ backgroundColor: "#fdf8f3" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-[1fr_auto] items-end gap-8 mb-16">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12" style={{ backgroundColor: "#e95228" }} />
                <span className="font-mono text-[10px] tracking-[0.35em] uppercase" style={{ color: "#e95228" }}>
                  サービス内容
                </span>
              </div>
              <h2 className="text-4xl sm:text-6xl font-black leading-[0.9]" style={{ color: "#1c1208" }}>
                4つのサービスで<br />
                <em className="not-italic" style={{ color: "#e95228" }}>ストーリーを届ける。</em>
              </h2>
            </div>
            <p className="text-sm leading-relaxed max-w-xs lg:text-right" style={{ color: "rgba(28,18,8,0.45)" }}>
              東京から地方まで、日本全国で展開するバイリンガル企業映像制作。
            </p>
          </div>
          <ServiceGrid lang="jp" />
        </div>
      </section>

      {/* ── About Chris ── */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_1fr]">
            <VideoLightbox vimeoId="900727297" vimeoHash="a9dbbfbac5" title="Chris Moore — Filming in Japan" />

            <div className="p-12 lg:p-16 xl:p-20 flex flex-col justify-center" style={{ backgroundColor: "#e95228" }}>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-10" style={{ backgroundColor: "rgba(13,10,7,0.3)" }} />
                <span className="font-mono text-[10px] tracking-[0.35em] uppercase" style={{ color: "rgba(13,10,7,0.5)" }}>
                  代表について
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-black leading-tight mb-8" style={{ color: "#0d0a07" }}>
                はじめまして、クリスです<span style={{ color: "#fdf8f3" }}>。</span>
              </h2>
              <p className="leading-relaxed mb-5 text-base" style={{ color: "rgba(13,10,7,0.7)" }}>
                ニュージーランド出身。長年にわたり日本各地で撮影を続け、グローバルブランドと日本のストーリーをつなぐ事業を築いてきました。日英バイリンガルで、日本語・英語どちらの現場にも対応しています。
              </p>
              <p className="leading-relaxed mb-10 text-base" style={{ color: "rgba(13,10,7,0.7)" }}>
                東京のオフィスから山頂まで — 企業映像に、本物の人間味を。
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/jp/contact"
                  className="font-black text-sm tracking-[0.15em] uppercase px-6 py-3 transition-colors"
                  style={{ backgroundColor: "#0d0a07", color: "#fdf8f3" }}
                >
                  お問い合わせ
                </Link>
                <a
                  href="https://www.instagram.com/chrism_visuals/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs tracking-[0.2em] uppercase px-6 py-3 border transition-colors"
                  style={{ borderColor: "rgba(13,10,7,0.25)", color: "rgba(13,10,7,0.6)" }}
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── People Carousel ── */}
      <PeopleCarousel />

      {/* ── Workflow ── */}
      <section className="py-32" style={{ backgroundColor: "#fdf8f3" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12" style={{ backgroundColor: "#e95228" }} />
            <span className="font-mono text-[10px] tracking-[0.35em] uppercase" style={{ color: "#e95228" }}>
              ご依頼の流れ
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black leading-none mb-16" style={{ color: "#1c1208" }}>
            制作の進め方<span style={{ color: "#e95228" }}>。</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x" style={{ borderColor: "#e8d9c8", border: "1px solid #e8d9c8" }}>
            {workflow.map((w, i) => (
              <div
                key={w.step}
                className="p-8 lg:p-10"
                style={{ borderColor: "#e8d9c8", borderRight: i < workflow.length - 1 ? "1px solid #e8d9c8" : undefined }}
              >
                <span className="text-4xl font-black leading-none block mb-6" style={{ color: "#e95228" }}>
                  {i + 1}
                </span>
                <h3 className="font-black mb-3" style={{ color: "#1c1208" }}>{w.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(28,18,8,0.5)" }}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section className="py-32 border-t" style={{ backgroundColor: "#f5ede2", borderColor: "#e8d9c8" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12" style={{ backgroundColor: "#e95228" }} />
            <span className="font-mono text-[10px] tracking-[0.35em] uppercase" style={{ color: "#e95228" }}>
              よくある質問
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black leading-none mb-16" style={{ color: "#1c1208" }}>
            FAQ<span style={{ color: "#e95228" }}>。</span>
          </h2>
          <div>
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="py-8 border-b pl-5"
                style={{ borderColor: "#e8d9c8", borderLeft: "3px solid #e95228" }}
              >
                <h3 className="font-black mb-3 flex items-start gap-4" style={{ color: "#1c1208" }}>
                  <span className="text-xs font-black mt-0.5 shrink-0" style={{ color: "#e95228" }}>
                    {i + 1}.
                  </span>
                  {faq.q}
                </h3>
                <p className="text-sm leading-relaxed pl-9" style={{ color: "rgba(28,18,8,0.55)" }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-32 overflow-hidden grain" style={{ backgroundColor: "#0d0a07" }}>
        <div className="absolute top-8 left-8 pointer-events-none" aria-hidden="true">
          <div className="w-8 h-8 border-t border-l" style={{ borderColor: "rgba(196,168,130,0.3)" }} />
        </div>
        <div className="absolute top-8 right-8 pointer-events-none" aria-hidden="true">
          <div className="w-8 h-8 border-t border-r" style={{ borderColor: "rgba(196,168,130,0.3)" }} />
        </div>
        <div className="absolute bottom-8 left-8 pointer-events-none" aria-hidden="true">
          <div className="w-8 h-8 border-b border-l" style={{ borderColor: "rgba(196,168,130,0.3)" }} />
        </div>
        <div className="absolute bottom-8 right-8 pointer-events-none" aria-hidden="true">
          <div className="w-8 h-8 border-b border-r" style={{ borderColor: "rgba(196,168,130,0.3)" }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 sm:px-14 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-12" style={{ backgroundColor: "#e95228" }} />
                <span className="font-mono text-[10px] tracking-[0.35em] uppercase" style={{ color: "#e95228" }}>
                  まずはご相談ください
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-8" style={{ color: "#fdf8f3" }}>
                日本でのプロジェクトを<br />
                一緒に<br />
                <em className="not-italic" style={{ color: "#e95228" }}>実現しましょう。</em>
              </h2>
              <p className="leading-relaxed mb-10" style={{ color: "rgba(253,248,243,0.5)" }}>
                24時間以内にご返信します。フォーム・メール・WhatsAppでお気軽にどうぞ。
              </p>
              <Link
                href="/jp/contact"
                className="btn-warm inline-block font-black text-sm tracking-[0.18em] uppercase px-8 py-4 transition-colors"
              >
                お問い合わせはこちら
              </Link>
            </div>

            <div className="border-l pl-12 lg:pl-16" style={{ borderColor: "rgba(196,168,130,0.15)" }}>
              <div className="space-y-7">
                <div>
                  <p className="font-mono text-[10px] tracking-[0.3em] uppercase mb-2" style={{ color: "rgba(196,168,130,0.5)" }}>メール</p>
                  <a
                    href="mailto:filminginjapan@move-ment.co"
                    className="font-black text-base transition-colors"
                    style={{ color: "#fdf8f3" }}
                  >
                    filminginjapan@move-ment.co
                  </a>
                </div>
                <div>
                  <p className="font-mono text-[10px] tracking-[0.3em] uppercase mb-2" style={{ color: "rgba(196,168,130,0.5)" }}>WhatsApp</p>
                  <a
                    href="https://wa.me/819038800895"
                    className="font-black text-base transition-colors"
                    style={{ color: "#fdf8f3" }}
                  >
                    +81 90 3880 0895
                  </a>
                </div>
                <div>
                  <p className="font-mono text-[10px] tracking-[0.3em] uppercase mb-2" style={{ color: "rgba(196,168,130,0.5)" }}>東京</p>
                  <p className="text-sm" style={{ color: "rgba(253,248,243,0.45)" }}>東京都品川区東五反田1-18-5-503</p>
                </div>
                <div>
                  <p className="font-mono text-[10px] tracking-[0.3em] uppercase mb-2" style={{ color: "rgba(196,168,130,0.5)" }}>広島</p>
                  <p className="text-sm" style={{ color: "rgba(253,248,243,0.45)" }}>広島市東区南牛田1-13-4</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <InstagramFeed />
      <Footer lang="jp" />
    </div>
  );
}
