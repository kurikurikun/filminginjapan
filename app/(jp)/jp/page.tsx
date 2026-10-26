import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import VideoLightbox from "@/components/VideoLightbox";
import PeopleCarousel from "@/components/PeopleCarousel";
import ServiceGrid from "@/components/ServiceGrid";
import InstagramFeed from "@/components/InstagramFeed";
import { Section, Title, Kicker, TrustedBy } from "@/components/editorial";

export const metadata: Metadata = {
  title: { absolute: "企業向け映像制作会社（東京・日英対応）| Filming in Japan" },
  description:
    "東京・広島拠点の映像制作会社。企業インタビュー、ブランド動画、採用動画、イベント撮影まで日英バイリンガルで対応。Sony、Google、Microsoft、Canonなど国内外の企業に選ばれています。",
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

      {/* Hero: headline on cream, background video in a tall panel with vertical English on the right */}
      <section className="border-b" style={{ borderColor: "#1c1208" }}>
        <div className="fij-wrap flex flex-wrap lg:flex-nowrap gap-x-12">
          <div className="flex-[7_1_560px] min-w-0 pt-16 pb-12 lg:pt-24 lg:pb-14 flex flex-col justify-between gap-12">
            <div>
              <p className="text-sm font-medium mb-8" style={{ color: "#6b5a48" }}>東京 · 広島 · 日本全国</p>
              <Title as="h1" stop="。" className="fij-h1">
                企業向け映像制作{" "}<br />
                日本全国
              </Title>
            </div>
            <div className="flex flex-wrap items-end gap-x-12 gap-y-8">
              <p className="flex-[1_1_340px] fij-lede" style={{ color: "#4a3a2a" }}>
                グローバルブランドのための日英バイリンガル映像制作。<br />
                Sony・Google・Microsoft・Canonなど国内外大手企業に信頼されています。
              </p>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-5 shrink-0">
                <Link href="/jp/contact" className="fij-btn">プロジェクトを相談する</Link>
                <Link href="/jp/corporate-video" className="fij-link text-[15px]">制作実績を見る</Link>
              </div>
            </div>
          </div>
          <div
            className="relative flex-[5_1_380px] min-h-[420px] lg:min-h-[680px] -mx-[clamp(20px,4vw,48px)] lg:ml-0 overflow-hidden"
            style={{ backgroundColor: "#0d0a07" }}
          >
            {/* Vimeo background video, cropped to cover the panel */}
            <iframe
              src="https://player.vimeo.com/video/533378669?background=1&autoplay=1&loop=1&muted=1&autopause=0"
              className="absolute"
              style={{
                top: "50%", left: "50%",
                transform: "translate(-50%, -50%)",
                height: "100%",
                minWidth: "100%",
                aspectRatio: "16 / 9",
                pointerEvents: "none",
                border: 0,
              }}
              allow="autoplay; fullscreen"
              title="ヒーロー映像"
              tabIndex={-1}
            />
            <div aria-hidden="true" className="absolute inset-y-0 right-0 w-40" style={{ background: "linear-gradient(to left, rgba(13,10,7,0.45), rgba(13,10,7,0))" }} />
            <p
              lang="en"
              aria-hidden="true"
              className="absolute top-8 right-6 whitespace-nowrap text-[20px] sm:text-[24px] lg:text-[28px] font-semibold tracking-[0.04em]"
              style={{ writingMode: "vertical-rl", color: "#fdf8f3", textShadow: "0 1px 12px rgba(0,0,0,0.35)" }}
            >
              Bilingual video production
            </p>
          </div>
        </div>
      </section>

      <TrustedBy clients={clients} label="実績企業" />

      {/* 01 Services */}
      <Section num="01" label="Services" labelLang="en" aria-labelledby="services-heading">
        <div className="flex flex-wrap items-end justify-between gap-x-16 gap-y-6 mb-14">
          <div>
            <Kicker>サービス内容</Kicker>
            <Title id="services-heading" stop="。" className="fij-h2">
              4つのサービスで{" "}<br />
              ストーリーを届ける
            </Title>
          </div>
          <p className="text-base leading-relaxed max-w-xs" style={{ color: "#6b5a48" }}>
            東京から地方まで、日本全国で展開するバイリンガル企業映像制作。
          </p>
        </div>
        <ServiceGrid lang="jp" />
      </Section>

      {/* 02 About Chris — the page's one orange section */}
      <Section num="02" label="About" labelLang="en" tone="orange" aria-labelledby="about-heading">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
          <VideoLightbox vimeoId="900727297" vimeoHash="a9dbbfbac5" title="Chris Moore — Filming in Japan" />
          <div className="flex flex-col justify-center">
            <Kicker tone="orange">代表について</Kicker>
            <Title id="about-heading" tone="orange" stop="。" className="fij-h2 mb-8">はじめまして、クリスです</Title>
            <p className="fij-lede mb-5" style={{ color: "#0d0a07" }}>
              ニュージーランド出身。長年にわたり日本各地で撮影を続け、グローバルブランドと日本のストーリーをつなぐ事業を築いてきました。日英バイリンガルで、日本語・英語どちらの現場にも対応しています。
            </p>
            <p className="fij-lede mb-10" style={{ color: "#0d0a07" }}>
              東京のオフィスから山頂まで — 企業映像に、本物の人間味を。
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/jp/contact" className="fij-btn">お問い合わせ</Link>
              <a
                href="https://www.instagram.com/chrism_visuals/"
                target="_blank"
                rel="noopener noreferrer"
                className="fij-btn-outline hover:bg-[#0d0a07] hover:text-[#fdf8f3]"
                style={{ color: "#0d0a07" }}
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* 03 People carousel */}
      <PeopleCarousel num="03" label="People" labelLang="en" />

      {/* 04 Process */}
      <Section num="04" label="Process" labelLang="en" aria-labelledby="process-heading">
        <Kicker>ご依頼の流れ</Kicker>
        <Title id="process-heading" stop="。" className="fij-h2 mb-14">制作の進め方</Title>
        <ol className="grid sm:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-12">
          {workflow.map((w) => (
            <li key={w.step} className="border-t-2 pt-5" style={{ borderColor: "#1c1208" }}>
              <span className="block text-[13px] font-semibold tabular-nums mb-8" style={{ color: "var(--fij-num)" }}>{w.step}</span>
              <h3 className="text-[20px] leading-snug font-semibold mb-3">{w.title}</h3>
              <p className="text-[15px] leading-relaxed" style={{ color: "#4a3a2a" }}>{w.desc}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* 05 FAQ */}
      <Section num="05" label="FAQ" labelLang="en" bordered aria-labelledby="faq-heading">
        <div className="flex flex-wrap gap-x-16 gap-y-10">
          <div className="flex-[1_1_240px]">
            <Kicker>よくある質問</Kicker>
            <Title id="faq-heading" stop="。" className="fij-h2">FAQ</Title>
          </div>
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

      {/* 06 Contact CTA */}
      <Section num="06" label="Contact" labelLang="en" tone="ink" aria-labelledby="cta-heading">
        <div className="flex flex-wrap items-end justify-between gap-x-16 gap-y-14">
          <div className="flex-[1.4_1_420px] min-w-0">
            <Kicker tone="ink">まずはご相談ください</Kicker>
            <Title id="cta-heading" tone="ink" stop="。" className="fij-h2 mb-8">
              日本でのプロジェクトを{" "}<br />
              一緒に{" "}<br />
              実現しましょう
            </Title>
            <p className="fij-lede mb-10 max-w-lg" style={{ color: "rgba(253,248,243,0.78)" }}>
              24時間以内にご返信します。フォーム・メール・WhatsAppでお気軽にどうぞ。
            </p>
            <Link href="/jp/contact" className="fij-btn-orange">お問い合わせはこちら</Link>
          </div>
          <dl className="flex-[1_1_300px] min-w-0 border-t" style={{ borderColor: "rgba(253,248,243,0.25)" }}>
            {[
              { k: "メール", v: <a href="mailto:filminginjapan@move-ment.co" className="hover:text-[#f07a52] transition-colors break-all">filminginjapan@move-ment.co</a> },
              { k: "WhatsApp", v: <a href="https://wa.me/819038800895" className="hover:text-[#f07a52] transition-colors">+81 90 3880 0895</a> },
              { k: "東京", v: "東京都品川区東五反田1-18-5-503", small: true },
              { k: "広島", v: "広島市東区南牛田1-13-4", small: true },
            ].map((row) => (
              <div key={row.k} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-4 border-b" style={{ borderColor: "rgba(253,248,243,0.25)" }}>
                <dt className="text-sm font-medium" style={{ color: "rgba(253,248,243,0.75)" }}>{row.k}</dt>
                <dd className={row.small ? "text-[15px]" : "text-lg font-semibold tracking-[-0.01em]"} style={{ color: "#fdf8f3" }}>{row.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      {/* 07 Instagram */}
      <InstagramFeed num="07" label="Instagram" lang="jp" />
      <Footer lang="jp" />
    </div>
  );
}
