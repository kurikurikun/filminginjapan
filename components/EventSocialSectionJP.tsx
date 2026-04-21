"use client";

import { useState, useRef, useEffect } from "react";

function SampleDeliverable({ src, poster, label, autoPlay = false }: { src: string; poster?: string; label: string; autoPlay?: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const posterRef = useRef<HTMLImageElement>(null);
  const [inView, setInView] = useState(false);
  const [userPlayed, setUserPlayed] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isPaused, setIsPaused] = useState(true);
  const [posterErrored, setPosterErrored] = useState(false);

  const hasVideo = Boolean(src);
  const videoMounted = hasVideo && ((autoPlay && inView) || userPlayed);

  useEffect(() => {
    if (!src || !containerRef.current) return;
    const el = containerRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [src]);

  useEffect(() => {
    if (!poster) return;
    const img = posterRef.current;
    if (!img) return;
    if (img.complete) {
      if (img.naturalWidth === 0) setPosterErrored(true);
      return;
    }
    const onErr = () => setPosterErrored(true);
    img.addEventListener("error", onErr);
    return () => img.removeEventListener("error", onErr);
  }, [poster]);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onPlay = () => setIsPaused(false);
    const onPause = () => setIsPaused(true);
    v.addEventListener("play", onPlay);
    v.addEventListener("pause", onPause);
    setIsPaused(v.paused);
    return () => {
      v.removeEventListener("play", onPlay);
      v.removeEventListener("pause", onPause);
    };
  }, [videoMounted]);

  useEffect(() => {
    if (!userPlayed) return;
    const v = videoRef.current;
    if (!v) return;
    v.play().catch(() => {});
  }, [userPlayed]);

  const toggleMute = () => {
    if (!videoRef.current) return;
    const next = !isMuted;
    videoRef.current.muted = next;
    setIsMuted(next);
  };

  const handleTileClick = () => {
    if (!hasVideo) return;
    if (!videoMounted) {
      setUserPlayed(true);
      return;
    }
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play().catch(() => {});
    } else {
      v.pause();
    }
  };

  const showCenterPlay = hasVideo && (!videoMounted || isPaused);

  return (
    <div
      ref={containerRef}
      onClick={hasVideo ? handleTileClick : undefined}
      className="relative overflow-hidden"
      style={{
        aspectRatio: "9/16",
        backgroundColor: "#e8d9c8",
        borderRadius: "12px",
        cursor: hasVideo ? "pointer" : "default",
      }}
    >
      {hasVideo && poster && !posterErrored && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          ref={posterRef}
          src={poster}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      {videoMounted && (
        <>
          <video
            ref={videoRef}
            autoPlay={autoPlay}
            muted
            loop
            playsInline
            preload="auto"
            poster={poster}
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={src} type="video/mp4" />
          </video>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); toggleMute(); }}
            aria-label={isMuted ? "ミュート解除" : "ミュート"}
            className="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center transition-opacity hover:opacity-100"
            style={{ backgroundColor: "rgba(13,10,7,0.55)", color: "#fdf8f3", opacity: 0.85 }}
          >
            {isMuted ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
              </svg>
            )}
          </button>
        </>
      )}
      {showCenterPlay && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center"
            style={{ backgroundColor: "rgba(13,10,7,0.55)", color: "#fdf8f3" }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      )}
      {!hasVideo && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-10 h-10 rounded-full border flex items-center justify-center mx-auto mb-2" style={{ borderColor: "rgba(28,18,8,0.15)" }}>
              <span style={{ color: "rgba(28,18,8,0.25)" }}>▶</span>
            </div>
            <span className="text-xs" style={{ color: "rgba(28,18,8,0.25)" }}>近日公開</span>
          </div>
        </div>
      )}
      <div className="absolute bottom-0 left-0 right-0 p-3 pointer-events-none">
        <span
          className="text-xs font-black"
          style={
            hasVideo
              ? { color: "#fdf8f3", textShadow: "0 1px 6px rgba(0,0,0,0.55)" }
              : { color: "rgba(28,18,8,0.4)" }
          }
        >
          {label}
        </span>
      </div>
    </div>
  );
}

const basePrices: Record<string, Record<string, number>> = {
  essential: { half: 150000, full: 200000 },
  standard: { half: 250000, full: 350000 },
  pro: { half: 350000, full: 500000 },
};

const formatYen = (n: number) => `¥${n.toLocaleString()}`;

const prices: Record<string, Record<string, string>> = {
  essential: { half: formatYen(basePrices.essential.half), full: formatYen(basePrices.essential.full) },
  standard: { half: formatYen(basePrices.standard.half), full: formatYen(basePrices.standard.full) },
  pro: { half: formatYen(basePrices.pro.half), full: formatYen(basePrices.pro.full) },
};

const tierLabels: Record<string, string> = { essential: "Essential", standard: "Standard", pro: "Pro" };
// Must match Notion Select options — keep English
const durLabels: Record<string, string> = { half: "Half day", full: "Full day" };
const durLabelsJP: Record<string, string> = { half: "半日", full: "終日" };

const EXTRA_INTERVIEW_PRICE = 30000;

const tiers = [
  {
    id: "essential",
    subtitle: "ソーシャルカバレッジ",
    crew: "ビデオグラファー1名",
    deliverables: [
      {
        icon: "▶",
        title: "縦型動画",
        detail: "ショートフォーム縦型動画 1本（半日）· 2本（終日）\n約30秒 · キャプション付 · カラーグレーディング",
        badge: "next",
      },
      {
        icon: "◼",
        title: "SNS写真",
        detail: "編集済み写真10〜20枚",
        badge: "same",
      },
    ],
    prices: { half: "¥150,000", full: "¥200,000" },
  },
  {
    id: "standard",
    subtitle: "フルイベントカバレッジ",
    crew: "ビデオグラファー1名 + フォトグラファー1名",
    deliverables: [
      {
        icon: "▶",
        title: "縦型動画",
        detail: "ショートフォーム縦型動画 3本\n約30秒 · キャプション付 · カラーグレーディング",
        badge: "next",
      },
      {
        icon: "◼",
        title: "SNS写真",
        detail: "編集済み写真10〜20枚",
        badge: "same",
      },
      {
        icon: "◼",
        title: "フォトアーカイブ",
        detail: "編集済み写真300枚 · イベント全体の網羅撮影",
        badge: "next",
      },
    ],
    prices: { half: "¥250,000", full: "¥350,000" },
  },
  {
    id: "pro",
    subtitle: "イベントカバレッジ + インタビュー",
    crew: "ビデオグラファー1名 + フォトグラファー1名",
    deliverables: [
      {
        icon: "▶",
        title: "縦型動画",
        detail: "ショートフォーム縦型動画 3本\n約30秒 · キャプション付 · カラーグレーディング",
        badge: "next",
      },
      {
        icon: "◼",
        title: "SNS写真",
        detail: "編集済み写真10〜20枚",
        badge: "same",
      },
      {
        icon: "◼",
        title: "フォトアーカイブ",
        detail: "編集済み写真300枚 · イベント全体の網羅撮影",
        badge: "next",
      },
      {
        icon: "◉",
        title: "インタビュー動画",
        detail: "3本 · 各約30秒 · 日本語または英語",
        badge: "next",
      },
    ],
    prices: { half: "¥350,000", full: "¥500,000" },
  },
];

const steps = [
  { text: "パッケージを選択", detail: "プランと時間を選び、すべての費用をその場で確認。東京都内の交通費込み。都外は別途お問い合わせください。" },
  { text: "フォームを送信", detail: "イベントの日時・場所・種類をご入力ください。所要時間は2分、この時点でのお申込みは不要です。" },
  { text: "空き状況を24時間以内に確認", detail: "ご了承いただけましたら、簡単なブリーフィングフォーム（ハイライトシーン・登壇者・会場情報）をお送りします。" },
  { text: "撮影当日", detail: "イベント撮影に精通したチームが撮影します。" },
  { text: "納品", detail: "翌日にコンテンツをお届けします。" },
];

export default function EventSocialSectionJP() {
  const [selectedTier, setSelectedTier] = useState("standard");
  const [selectedDur, setSelectedDur] = useState("half");
  const [extraInterviews, setExtraInterviews] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isAgency, setIsAgency] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const formRef = useRef<HTMLDivElement>(null);
  const [trackingParams, setTrackingParams] = useState<{ gclid?: string; campaign?: string; source?: string }>({});

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const gclid = params.get("gclid") || undefined;
    const campaign = params.get("utm_campaign") || undefined;
    const utmSource = params.get("utm_source") || undefined;
    let source: string | undefined;
    if (gclid) source = "Google Ads";
    else if (utmSource) source = utmSource;
    setTrackingParams({ gclid, campaign, source });
  }, []);

  const selectedPrice = selectedTier && selectedDur ? prices[selectedTier]?.[selectedDur] : "";
  const baseTotal = selectedTier && selectedDur ? basePrices[selectedTier]?.[selectedDur] ?? 0 : 0;
  const interviewsTotal = selectedTier === "pro" ? extraInterviews * EXTRA_INTERVIEW_PRICE : 0;
  const grandTotal = baseTotal + interviewsTotal;

  function pickTier(t: string) {
    setSelectedTier(t);
    if (t !== "pro") setExtraInterviews(0);
  }

  async function handleSubmit() {
    const fields: Record<string, string> = {};
    const ids = [
      "es-event-date", "es-event-type", "es-attendees",
      "es-moments", "es-enquiry-type", "es-name", "es-company", "es-website",
      "es-client-website", "es-email", "es-referral", "es-notes",
    ];
    ids.forEach((id) => {
      const el = document.getElementById(id) as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null;
      if (el) fields[id] = el.value.trim();
    });

    const required = ["es-event-date", "es-event-type", "es-enquiry-type", "es-name", "es-company", "es-website", "es-email"];
    const newErrors: Record<string, boolean> = {};
    if (!selectedTier) newErrors["tier"] = true;
    if (!selectedDur) newErrors["dur"] = true;
    required.forEach((id) => {
      if (!fields[id]) newErrors[id] = true;
    });

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setSubmitting(true);

    try {
      const res = await fetch("https://lead-hub-nine.vercel.app/api/eventflow", {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-api-key": "fij2025key" },
        body: JSON.stringify({
          name: fields["es-name"],
          email: fields["es-email"],
          company: fields["es-company"],
          website: fields["es-website"] || undefined,
          tier: tierLabels[selectedTier],
          duration: durLabels[selectedDur],
          price: selectedPrice,
          extraInterviews: extraInterviews || undefined,
          extraInterviewsTotal: interviewsTotal || undefined,
          grandTotal: interviewsTotal ? grandTotal : undefined,
          eventDate: fields["es-event-date"],
          eventType: fields["es-event-type"],
          location: "Tokyo",
          attendees: fields["es-attendees"] || undefined,
          moments: fields["es-moments"] || undefined,
          enquiryType: fields["es-enquiry-type"] === "agency" ? "Agency" : "Direct",
          clientWebsite: fields["es-client-website"] || undefined,
          referral: fields["es-referral"] || undefined,
          notes: fields["es-notes"] || undefined,
          gclid: trackingParams.gclid,
          campaign: trackingParams.campaign,
          source: trackingParams.source,
          locale: "ja",
        }),
      });
      if (res.ok) {
        (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag?.("event", "form_submit", { event_category: "contact", event_label: "Event Social JP" });
        setShowSuccess(true);
        setTimeout(() => {
          formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 50);
      }
    } catch {
      // silently fail
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="py-20 sm:py-28" style={{ backgroundColor: "#fdf8f3" }}>
      <div className="max-w-5xl mx-auto px-6 sm:px-12">

        {/* HERO */}
        <div className="pb-12 mb-12 border-b" style={{ borderColor: "#e8d9c8" }}>
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-10" style={{ backgroundColor: "#e95228" }} />
            <span className="font-mono text-[10px] tracking-[0.35em] uppercase" style={{ color: "#e95228" }}>
              Event Social by Filming in Japan
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] mb-6 break-keep" style={{ color: "#1c1208" }}>
            イベント動画ではなく、<br />
            <span style={{ color: "rgba(28,18,8,0.4)" }}>コンテンツエンジン</span><span style={{ color: "#e95228" }}>。</span>
          </h2>
          <p className="text-sm leading-relaxed max-w-xl" style={{ color: "rgba(28,18,8,0.55)" }}>
            イベントは終わった後も成果を生み続けるべきです。一度投稿して終わる3分のハイライト動画ではなく、ショートフォーム縦型動画と写真を翌日納品、決まった内容・料金。あらゆるプラットフォームに即投稿でき、長期的に成果を出し続けます。
          </p>
        </div>

        {/* VERTICAL VIDEO SAMPLES */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-10" style={{ backgroundColor: "#e95228" }} />
            <span className="font-mono text-[10px] tracking-[0.35em] uppercase" style={{ color: "#e95228" }}>
              納品物サンプル
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              { src: "/videos/event-social-highlights3.mp4", poster: "/videos/event-social-highlights3-poster.jpg", label: "カンファレンスハイライト", autoPlay: true },
              { src: "/videos/26_4_21_SNS%2030p_2_siteb.mp4", poster: "/videos/26_4_21_SNS%2030p_2_siteb.jpg", label: "ネットワーキングリキャップ" },
              { src: "/videos/26_4_21_SNS%2030p_3_siteb.mp4", poster: "/videos/26_4_21_SNS%2030p_3_siteb.jpg", label: "ブレイクアウトセッションハイライト" },
            ].map((v, i) => (
              <SampleDeliverable key={i} src={v.src} poster={v.poster} label={v.label} autoPlay={v.autoPlay} />
            ))}
          </div>
        </div>

        {/* PACKAGES — 3 across */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-10" style={{ backgroundColor: "#e95228" }} />
            <span className="font-mono text-[10px] tracking-[0.35em] uppercase" style={{ color: "#e95228" }}>
              Event Social
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black mb-10" style={{ color: "#1c1208" }}>
            決まった内容・料金、柔軟な活用<span style={{ color: "#e95228" }}>。</span>
          </h3>

          <div className="grid md:grid-cols-3 gap-4 mb-12">
            {tiers.map((tier) => {
              const isSelected = selectedTier === tier.id;
              return (
                <button
                  key={tier.id}
                  type="button"
                  onClick={() => pickTier(tier.id)}
                  className="text-left flex flex-col transition-all"
                  style={{
                    border: isSelected ? "2px solid #e95228" : "1px solid #e8d9c8",
                    backgroundColor: isSelected ? "#fff" : "transparent",
                    boxShadow: isSelected ? "0 4px 24px rgba(233,82,40,0.1)" : "none",
                  }}
                >
                  {/* Header */}
                  <div
                    className="px-5 py-3"
                    style={{
                      backgroundColor: isSelected ? "#e95228" : "#0d0a07",
                      borderBottom: isSelected ? "2px solid #e95228" : "1px solid #e8d9c8",
                    }}
                  >
                    <div className="text-sm font-black" style={{ color: "#fdf8f3" }}>{tierLabels[tier.id]}</div>
                    <div className="font-mono text-[10px] tracking-wider mt-0.5" style={{ color: "rgba(253,248,243,0.5)" }}>{tier.crew}</div>
                  </div>

                  {/* Subtitle + Deliverables */}
                  <div className="px-5 py-5 space-y-4 flex-1">
                    {tier.subtitle && (
                      <div className="text-xs font-black mb-1" style={{ color: "rgba(28,18,8,0.45)" }}>{tier.subtitle}</div>
                    )}
                    {tier.deliverables.map((d, j) => (
                      <div key={j} className="flex gap-3 items-start">
                        <div
                          className="w-5 h-5 rounded-full border flex items-center justify-center text-[9px] shrink-0 mt-0.5"
                          style={{ borderColor: isSelected ? "rgba(233,82,40,0.3)" : "#e8d9c8", color: isSelected ? "#e95228" : "rgba(28,18,8,0.4)" }}
                        >
                          {d.icon}
                        </div>
                        <div>
                          <div className="text-[13px] font-black" style={{ color: "#1c1208" }}>{d.title}</div>
                          <div className="text-xs leading-relaxed mt-0.5 whitespace-pre-line" style={{ color: "rgba(28,18,8,0.45)" }}>
                            {d.detail}
                          </div>
                          <span
                            className="inline-block text-[10px] font-black tracking-wider px-2 py-0.5 rounded-full mt-1.5"
                            style={
                              d.badge === "same"
                                ? { backgroundColor: "#0d0a07", color: "#fdf8f3" }
                                : { backgroundColor: "#f5ede2", color: "rgba(28,18,8,0.55)" }
                            }
                          >
                            {d.badge === "same" ? "当日納品" : "翌日納品"}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Pricing footer */}
                  <div
                    className="flex justify-around px-5 py-3 mt-auto"
                    style={{ backgroundColor: isSelected ? "rgba(233,82,40,0.06)" : "#f5ede2", borderTop: `1px solid ${isSelected ? "rgba(233,82,40,0.2)" : "#e8d9c8"}` }}
                  >
                    {(["half", "full"] as const).map((dur) => (
                      <div key={dur} className="text-center">
                        <div className="text-[11px]" style={{ color: "rgba(28,18,8,0.4)" }}>{dur === "half" ? "半日" : "終日"}</div>
                        <div className="text-sm font-black" style={{ color: isSelected ? "#e95228" : "#1c1208" }}>{tier.prices[dur]}</div>
                      </div>
                    ))}
                  </div>
                </button>
              );
            })}
          </div>
          {errors.tier && <p className="text-xs mb-4 -mt-8" style={{ color: "#c0392b" }}>上記からプランを選択してください</p>}

          {/* Not a fit notice */}
          <div className="mb-12 p-5 sm:p-6" style={{ backgroundColor: "#f5ede2", border: "1px solid #e8d9c8" }}>
            <p className="font-mono text-[10px] tracking-[0.35em] uppercase mb-3" style={{ color: "rgba(28,18,8,0.5)" }}>
              Event Socialが合わない場合
            </p>
            <ul className="text-sm leading-relaxed mb-3 space-y-1" style={{ color: "rgba(28,18,8,0.7)" }}>
              <li>・ 1分以上の横型ハイライト動画</li>
              <li>・ 生データ・未編集素材の納品</li>
              <li>・ ライブ配信・ハイブリッドイベント対応</li>
              <li>・ 複数日撮影・完全オーダーメイドの納品物</li>
            </ul>
            <p className="text-sm font-black" style={{ color: "#1c1208" }}>
              → 下記の<a href="#full-production" className="underline" style={{ color: "#e95228" }}>フル制作サービス</a>をご覧ください。
            </p>
          </div>

          {/* How it works */}
          <div className="grid md:grid-cols-5 gap-4 mb-12">
            {steps.map((s, i) => (
              <div key={i} className="flex md:flex-col gap-3 items-start">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-black shrink-0"
                  style={{ backgroundColor: "#0d0a07", color: "#fdf8f3" }}
                >
                  {i + 1}
                </div>
                <p className="text-[13px] leading-relaxed" style={{ color: "rgba(28,18,8,0.55)" }}>
                  <strong className="font-black" style={{ color: "#1c1208" }}>{s.text}</strong> {s.detail}
                </p>
              </div>
            ))}
          </div>

          {/* ENQUIRY FORM */}
          <div className="max-w-3xl mx-auto" ref={formRef}>
            {showSuccess ? (
              <div className="p-10 text-center border" style={{ borderColor: "#e8d9c8", backgroundColor: "#fff" }}>
                <div
                  className="w-12 h-12 rounded-full border flex items-center justify-center text-lg mx-auto mb-6"
                  style={{ borderColor: "#e8d9c8" }}
                >
                  ✓
                </div>
                <h3 className="text-2xl font-black mb-3" style={{ color: "#1c1208" }}>お問い合わせを受け付けました</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(28,18,8,0.55)" }}>
                  ありがとうございます。内容を確認のうえ、24時間以内に空き状況をご連絡します。
                </p>
              </div>
            ) : (
              <div className="p-8 sm:p-10 lg:p-12 border" style={{ backgroundColor: "#fff", borderColor: "#e8d9c8" }}>
                <h3 className="text-xl font-black mb-1" style={{ color: "#1c1208" }}>Event Socialのお問い合わせ</h3>
                <p className="text-sm mb-10" style={{ color: "rgba(28,18,8,0.55)" }}>
                  Event Socialのパッケージと時間を選択のうえ、下記の詳細をご入力ください。
                </p>

                {/* 01 — Package selection */}
                <div className="grid sm:grid-cols-[160px_1fr] gap-x-8 gap-y-1 mb-10">
                  <div className="pt-1">
                    <p className="font-mono text-[10px] tracking-[0.35em] uppercase" style={{ color: "rgba(28,18,8,0.35)" }}>
                      パッケージ
                    </p>
                  </div>
                  <div>
                    <label className="block text-[13px] font-black mb-2" style={{ color: "#1c1208" }}>
                      プラン<span style={{ color: "#e95228" }}> *</span>
                    </label>
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {(["essential", "standard", "pro"] as const).map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => pickTier(t)}
                          className="text-center py-3 px-2 text-sm font-black transition-colors"
                          style={{
                            border: selectedTier === t ? "2px solid #e95228" : "1px solid #e8d9c8",
                            backgroundColor: selectedTier === t ? "rgba(233,82,40,0.08)" : "transparent",
                            color: selectedTier === t ? "#e95228" : "#1c1208",
                          }}
                        >
                          {tierLabels[t]}
                        </button>
                      ))}
                    </div>
                    {errors.tier && <p className="text-xs mb-3" style={{ color: "#c0392b" }}>プランを選択してください</p>}

                    <label className="block text-[13px] font-black mb-2" style={{ color: "#1c1208" }}>
                      時間<span style={{ color: "#e95228" }}> *</span>
                    </label>
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {(["half", "full"] as const).map((d) => (
                        <button
                          key={d}
                          type="button"
                          onClick={() => setSelectedDur(d)}
                          className="text-left p-3 transition-colors"
                          style={{
                            border: selectedDur === d ? "2px solid #e95228" : "1px solid #e8d9c8",
                            backgroundColor: selectedDur === d ? "rgba(233,82,40,0.08)" : "transparent",
                          }}
                        >
                          <div className="text-sm font-black" style={{ color: selectedDur === d ? "#e95228" : "#1c1208" }}>{d === "half" ? "半日" : "終日"}</div>
                          <div className="text-xs" style={{ color: "rgba(28,18,8,0.45)" }}>{d === "half" ? "最大5時間" : "最大8時間"}</div>
                        </button>
                      ))}
                    </div>
                    {errors.dur && <p className="text-xs mb-3" style={{ color: "#c0392b" }}>時間を選択してください</p>}

                    {/* Extra interviews — Pro only */}
                    {selectedTier === "pro" && (
                      <div className="mt-4 mb-4">
                        <label className="block text-[13px] font-black mb-2" style={{ color: "#1c1208" }}>
                          インタビュー動画追加 <span className="font-normal text-xs" style={{ color: "rgba(28,18,8,0.35)" }}>任意</span>
                        </label>
                        <div
                          className="flex items-center gap-3 p-3"
                          style={{
                            border: extraInterviews > 0 ? "2px solid #e95228" : "1px solid #e8d9c8",
                            backgroundColor: extraInterviews > 0 ? "rgba(233,82,40,0.06)" : "transparent",
                          }}
                        >
                          <div className="flex-1 min-w-0">
                            <div className="text-xs" style={{ color: "rgba(28,18,8,0.45)" }}>
                              +{formatYen(EXTRA_INTERVIEW_PRICE)} / 本 · 約30秒 · 日英対応
                            </div>
                          </div>
                          <div className="flex items-center gap-2 shrink-0">
                            <button
                              type="button"
                              disabled={extraInterviews === 0}
                              onClick={() => setExtraInterviews((n) => Math.max(0, n - 1))}
                              className="w-7 h-7 flex items-center justify-center text-sm font-black"
                              style={{
                                border: "1px solid #e8d9c8",
                                backgroundColor: "#fff",
                                color: extraInterviews === 0 ? "rgba(28,18,8,0.25)" : "#1c1208",
                                cursor: extraInterviews === 0 ? "not-allowed" : "pointer",
                              }}
                            >
                              −
                            </button>
                            <span className="text-sm font-black w-5 text-center tabular-nums" style={{ color: "#1c1208" }}>{extraInterviews}</span>
                            <button
                              type="button"
                              onClick={() => setExtraInterviews((n) => Math.min(5, n + 1))}
                              className="w-7 h-7 flex items-center justify-center text-sm font-black"
                              style={{
                                border: "1px solid #e8d9c8",
                                backgroundColor: "#fff",
                                color: "#1c1208",
                                cursor: "pointer",
                              }}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Price summary */}
                    {selectedPrice && (
                      <div className="p-4" style={{ backgroundColor: "rgba(233,82,40,0.06)", border: "1px solid rgba(233,82,40,0.2)" }}>
                        <div className="flex items-baseline justify-between">
                          <span className="text-sm font-black" style={{ color: "#1c1208" }}>{tierLabels[selectedTier]} · {durLabelsJP[selectedDur]}</span>
                          <span className="text-sm font-black" style={{ color: "rgba(28,18,8,0.55)" }}>{selectedPrice}</span>
                        </div>
                        {interviewsTotal > 0 && (
                          <>
                            <div className="flex items-baseline justify-between mt-1">
                              <span className="text-xs" style={{ color: "rgba(28,18,8,0.55)" }}>インタビュー追加 × {extraInterviews}</span>
                              <span className="text-xs" style={{ color: "rgba(28,18,8,0.55)" }}>+{formatYen(interviewsTotal)}</span>
                            </div>
                            <div className="flex items-baseline justify-between mt-2 pt-2" style={{ borderTop: "1px solid rgba(233,82,40,0.2)" }}>
                              <span className="text-sm font-black" style={{ color: "#1c1208" }}>合計</span>
                              <span className="text-xl font-black" style={{ color: "#e95228" }}>{formatYen(grandTotal)}</span>
                            </div>
                          </>
                        )}
                        {interviewsTotal === 0 && (
                          <div className="flex items-baseline justify-end mt-1">
                            <span className="text-xl font-black" style={{ color: "#e95228" }}>{formatYen(grandTotal)}</span>
                          </div>
                        )}
                      </div>
                    )}

                    {selectedTier === "pro" && (
                      <div className="p-3 text-xs leading-relaxed mt-4" style={{ backgroundColor: "#f5ede2", color: "rgba(28,18,8,0.55)", border: "1px solid #e8d9c8" }}>
                        Proのインタビューは、開演前の到着時間や休憩時間を活用して実施することが多く、通常15〜20分の枠を2〜3回設定します。日本語・英語に対応しています。
                      </div>
                    )}
                  </div>
                </div>

                {/* 02 — Your event */}
                <div className="grid sm:grid-cols-[160px_1fr] gap-x-8 gap-y-1 mb-10">
                  <div className="pt-1">
                    <p className="font-mono text-[10px] tracking-[0.35em] uppercase" style={{ color: "rgba(28,18,8,0.35)" }}>
                      イベント概要
                    </p>
                  </div>
                  <div>
                    <div className="grid grid-cols-2 gap-3 mb-3">
                      <div>
                        <label htmlFor="es-event-date" className="block text-[13px] font-black mb-1.5" style={{ color: "#1c1208" }}>
                          開催日<span style={{ color: "#e95228" }}> *</span>
                        </label>
                        <input type="date" id="es-event-date" className="w-full" style={inputStyle(errors["es-event-date"])} />
                      </div>
                      <div>
                        <label htmlFor="es-event-type" className="block text-[13px] font-black mb-1.5" style={{ color: "#1c1208" }}>
                          イベント種類<span style={{ color: "#e95228" }}> *</span>
                        </label>
                        <select id="es-event-type" className="w-full" style={inputStyle(errors["es-event-type"])}>
                          <option value="">選択してください...</option>
                          <option value="Conference">カンファレンス</option>
                          <option value="Product launch">製品発表会</option>
                          <option value="Award ceremony">アワードセレモニー</option>
                          <option value="Dinner / evening event">ディナー・夜の会</option>
                          <option value="Seminar / workshop">セミナー・ワークショップ</option>
                          <option value="Trade show / expo">展示会・見本市</option>
                          <option value="Other">その他</option>
                        </select>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="es-attendees" className="block text-[13px] font-black mb-1.5" style={{ color: "#1c1208" }}>
                        想定参加者数
                      </label>
                      <select id="es-attendees" className="w-full" style={inputStyle(false)}>
                        <option value="">選択してください...</option>
                        <option value="Under 50">50名未満</option>
                        <option value="50–150">50〜150名</option>
                        <option value="150–300">150〜300名</option>
                        <option value="300–500">300〜500名</option>
                        <option value="500+">500名以上</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="es-moments" className="block text-[13px] font-black mb-1.5" style={{ color: "#1c1208" }}>
                        撮影したい主なシーン <span className="font-normal text-xs" style={{ color: "rgba(28,18,8,0.35)" }}>任意</span>
                      </label>
                      <textarea
                        id="es-moments"
                        placeholder="例：オープニング基調講演、製品お披露目、ネットワーキングレセプションなど"
                        className="w-full"
                        style={{ ...inputStyle(false), minHeight: "70px", resize: "vertical" as const }}
                      />
                    </div>
                  </div>
                </div>

                {/* 03 — About you */}
                <div className="grid sm:grid-cols-[160px_1fr] gap-x-8 gap-y-1 mb-10">
                  <div className="pt-1">
                    <p className="font-mono text-[10px] tracking-[0.35em] uppercase" style={{ color: "rgba(28,18,8,0.35)" }}>
                      お客様情報
                    </p>
                  </div>
                  <div>
                    <div className="mb-3">
                      <label htmlFor="es-enquiry-type" className="block text-[13px] font-black mb-1.5" style={{ color: "#1c1208" }}>
                        お問い合わせ区分<span style={{ color: "#e95228" }}> *</span>
                      </label>
                      <select
                        id="es-enquiry-type"
                        className="w-full"
                        style={inputStyle(errors["es-enquiry-type"])}
                        onChange={(e) => setIsAgency(e.target.value === "agency")}
                      >
                        <option value="">選択してください...</option>
                        <option value="direct">イベント主催者・クライアント本人</option>
                        <option value="agency">クライアントの代理としてのイベント代理店</option>
                      </select>
                    </div>
                    {isAgency && (
                      <div className="p-3 text-xs leading-relaxed mb-3" style={{ backgroundColor: "#f5ede2", color: "rgba(28,18,8,0.55)", border: "1px solid #e8d9c8" }}>
                        撮影前にブランドを把握したいため、下記にクライアントのウェブサイトもご入力ください。
                      </div>
                    )}
                    <div className="grid grid-cols-2 gap-3 mb-3">
                      <div>
                        <label htmlFor="es-name" className="block text-[13px] font-black mb-1.5" style={{ color: "#1c1208" }}>
                          お名前<span style={{ color: "#e95228" }}> *</span>
                        </label>
                        <input type="text" id="es-name" placeholder="氏名" className="w-full" style={inputStyle(errors["es-name"])} />
                      </div>
                      <div>
                        <label htmlFor="es-company" className="block text-[13px] font-black mb-1.5" style={{ color: "#1c1208" }}>
                          会社名<span style={{ color: "#e95228" }}> *</span>
                        </label>
                        <input type="text" id="es-company" placeholder="会社名" className="w-full" style={inputStyle(errors["es-company"])} />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="es-website" className="block text-[13px] font-black mb-1.5" style={{ color: "#1c1208" }}>
                        会社ウェブサイト<span style={{ color: "#e95228" }}> *</span>
                      </label>
                      <input type="text" id="es-website" placeholder="https://" className="w-full" style={inputStyle(errors["es-website"])} />
                    </div>
                    {isAgency && (
                      <div className="mb-3">
                        <label htmlFor="es-client-website" className="block text-[13px] font-black mb-1.5" style={{ color: "#1c1208" }}>
                          エンドクライアントのウェブサイト <span className="font-normal text-xs" style={{ color: "rgba(28,18,8,0.35)" }}>任意</span>
                        </label>
                        <input type="text" id="es-client-website" placeholder="https://" className="w-full" style={inputStyle(false)} />
                      </div>
                    )}
                    <div className="mb-3">
                      <label htmlFor="es-email" className="block text-[13px] font-black mb-1.5" style={{ color: "#1c1208" }}>
                        メールアドレス<span style={{ color: "#e95228" }}> *</span>
                      </label>
                      <input type="email" id="es-email" placeholder="you@company.com" className="w-full" style={inputStyle(errors["es-email"])} />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="es-referral" className="block text-[13px] font-black mb-1.5" style={{ color: "#1c1208" }}>
                        当社をどちらでお知りになりましたか？
                      </label>
                      <select id="es-referral" className="w-full" style={inputStyle(false)}>
                        <option value="">選択してください...</option>
                        <option value="Social media">SNS</option>
                        <option value="Referred by friend/colleague">知人・同僚からの紹介</option>
                        <option value="Google search">Google検索</option>
                        <option value="AI search">AI検索（ChatGPTなど）</option>
                        <option value="Other">その他</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="es-notes" className="block text-[13px] font-black mb-1.5" style={{ color: "#1c1208" }}>
                        その他 <span className="font-normal text-xs" style={{ color: "rgba(28,18,8,0.35)" }}>任意</span>
                      </label>
                      <textarea
                        id="es-notes"
                        placeholder="会場名、特別なご要望、ご質問など"
                        className="w-full"
                        style={{ ...inputStyle(false), minHeight: "60px", resize: "vertical" as const }}
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={submitting}
                  className="w-full font-black text-sm tracking-[0.15em] uppercase py-4 transition-opacity"
                  style={{ backgroundColor: "#e95228", color: "#fff", opacity: submitting ? 0.6 : 1 }}
                >
                  {submitting ? "送信中..." : "お問い合わせを送信"}
                </button>
                <p className="text-xs text-center mt-3 leading-relaxed" style={{ color: "rgba(28,18,8,0.35)" }}>
                  24時間以内に空き状況をご連絡します。<br />この時点でのお申込みは不要です。
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function inputStyle(hasError?: boolean): React.CSSProperties {
  return {
    fontFamily: "inherit",
    fontSize: "14px",
    color: "#1c1208",
    backgroundColor: "#fdf8f3",
    border: `1px solid ${hasError ? "#c0392b" : "#e8d9c8"}`,
    padding: "10px 13px",
    outline: "none",
    appearance: "none" as const,
    WebkitAppearance: "none" as const,
  };
}
