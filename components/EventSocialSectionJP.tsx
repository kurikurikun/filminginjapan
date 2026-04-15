"use client";

import { useState, useRef, useEffect } from "react";

const basePrices: Record<string, Record<string, number>> = {
  essential: { half: 150000, full: 200000 },
  standard: { half: 200000, full: 270000 },
  pro: { half: 300000, full: 400000 },
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

type AddOn = {
  id: string;
  title: string;
  detail: string;
  price: number;
  tiers: ("essential" | "standard" | "pro")[];
};

const addOns: AddOn[] = [
  {
    id: "extra-clip",
    title: "縦型クリップ追加",
    detail: "キャプション付き約30秒クリップ +1本",
    price: 25000,
    tiers: ["essential", "standard", "pro"],
  },
  {
    id: "extra-photos",
    title: "SNS用写真セレクト追加",
    detail: "編集済み写真 +10枚 · 縦型・横型",
    price: 15000,
    tiers: ["standard", "pro"],
  },
  {
    id: "extra-interview",
    title: "インタビュークリップ追加",
    detail: "インタビュー +1本 · 約30秒 · 日本語または英語 · Proのみ",
    price: 30000,
    tiers: ["pro"],
  },
];

const tiers = [
  {
    id: "essential",
    crew: "クリエイティブプロデューサー1名",
    deliverables: [
      {
        icon: "▶",
        title: "縦型動画クリップ",
        detail: "2本（半日）· 3本（終日）\n約30秒 · キャプション付 · カラーグレーディング",
        badge: "24h",
      },
    ],
    prices: { half: "¥150,000", full: "¥200,000" },
  },
  {
    id: "standard",
    crew: "クリエイティブプロデューサー1名",
    deliverables: [
      {
        icon: "▶",
        title: "縦型動画クリップ",
        detail: "3本（半日）· 5本（終日）\n約30秒 · キャプション付 · カラーグレーディング",
        badge: "24h",
      },
      {
        icon: "◼",
        title: "SNS用写真セレクト",
        detail: "編集済み写真15〜20枚 · 縦型・横型",
        badge: "same",
      },
    ],
    prices: { half: "¥200,000", full: "¥270,000" },
  },
  {
    id: "pro",
    crew: "クリエイティブプロデューサー2名",
    deliverables: [
      {
        icon: "▶",
        title: "縦型動画クリップ",
        detail: "3本（半日）· 5本（終日）\n約30秒 · キャプション付 · カラーグレーディング",
        badge: "24h",
      },
      {
        icon: "◼",
        title: "SNS用写真セレクト",
        detail: "編集済み写真15〜20枚 · 縦型・横型",
        badge: "same",
      },
      {
        icon: "◉",
        title: "インタビュークリップ",
        detail: "3本 · 各約30秒 · 日本語または英語",
        badge: "24h",
      },
      {
        icon: "◼",
        title: "フルフォトアーカイブ",
        detail: "編集済み写真300枚 · イベント全体の網羅撮影",
        badge: "24h",
      },
    ],
    prices: { half: "¥300,000", full: "¥400,000" },
  },
];

const steps = [
  { text: "パッケージを選択。", detail: "プランと時間を選び、すべての費用をその場で確認。東京都内の交通費込み。都外は別途お問い合わせください。" },
  { text: "フォームを送信。", detail: "イベントの日時・場所・種類をご記入ください。所要時間は2分、この時点でのお申込みは不要です。" },
  { text: "空き状況を24時間以内に確認。", detail: "ご了承いただけましたら、簡単なブリーフィングフォーム（ハイライトシーン・登壇者・会場情報）をお送りします。" },
  { text: "撮影当日。", detail: "何が重要かを理解したチームが現場に入り、確実に遂行します。" },
  { text: "納品。", detail: "イベント終了から24時間以内にコンテンツをお届けします。" },
];

export default function EventSocialSectionJP() {
  const [selectedTier, setSelectedTier] = useState("");
  const [selectedDur, setSelectedDur] = useState("");
  const [addOnQty, setAddOnQty] = useState<Record<string, number>>({});
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
  const addOnsTotal = addOns.reduce((sum, a) => sum + a.price * (addOnQty[a.id] || 0), 0);
  const grandTotal = baseTotal + addOnsTotal;
  const hasAnyAddOns = Object.values(addOnQty).some((q) => q > 0);

  function pickTier(t: string) {
    setSelectedTier(t);
    setAddOnQty((prev) => {
      const next: Record<string, number> = {};
      addOns.forEach((a) => {
        if (a.tiers.includes(t as "essential" | "standard" | "pro") && prev[a.id]) {
          next[a.id] = prev[a.id];
        }
      });
      return next;
    });
  }

  function bumpAddOn(id: string, delta: number) {
    setAddOnQty((prev) => {
      const cur = prev[id] || 0;
      const next = Math.max(0, Math.min(3, cur + delta));
      return { ...prev, [id]: next };
    });
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
          addOns: addOns
            .filter((a) => (addOnQty[a.id] || 0) > 0)
            .map((a) => ({ id: a.id, title: a.title, qty: addOnQty[a.id], unitPrice: a.price, lineTotal: a.price * addOnQty[a.id] })),
          addOnsTotal: addOnsTotal || undefined,
          grandTotal: hasAnyAddOns ? grandTotal : undefined,
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
            イベントは終わった後も成果を生み続けるべきです。東京の企業イベント向け、スコープ・料金固定のパッケージ。24時間以内に納品し、あらゆるSNS・チャネルへすぐに展開できます。
          </p>
        </div>

        {/* REFRAME */}
        <div className="pb-10 mb-10 border-b max-w-2xl" style={{ borderColor: "#e8d9c8" }}>
          <p className="text-sm leading-relaxed" style={{ color: "rgba(28,18,8,0.55)" }}>
            <strong className="font-black" style={{ color: "#1c1208" }}>従来のイベント動画は、別の時代に作られたものです。</strong>{" "}
            私たちのソーシャルイベントパッケージは、短尺・キャプション付・各プラットフォーム対応のクリップと写真を納品します。投稿したその瞬間から機能し、その後も長く成果を出し続けます。
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
              { src: "", label: "カンファレンスハイライト" },
              { src: "", label: "登壇者コメント" },
              { src: "", label: "ネットワーキングリキャップ" },
            ].map((v, i) => (
              <div key={i} className="relative overflow-hidden" style={{ aspectRatio: "9/16", backgroundColor: "#e8d9c8", borderRadius: "12px" }}>
                {v.src ? (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="none"
                    className="absolute inset-0 w-full h-full object-cover"
                  >
                    <source src={v.src} type="video/mp4" />
                  </video>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-10 h-10 rounded-full border flex items-center justify-center mx-auto mb-2" style={{ borderColor: "rgba(28,18,8,0.15)" }}>
                        <span style={{ color: "rgba(28,18,8,0.25)" }}>▶</span>
                      </div>
                      <span className="text-xs" style={{ color: "rgba(28,18,8,0.25)" }}>近日公開</span>
                    </div>
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <span className="text-xs font-black" style={{ color: "rgba(28,18,8,0.4)" }}>{v.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PACKAGES — 3 across */}
        <div className="mb-16">
          <h3 className="text-xl sm:text-2xl font-black mb-10" style={{ color: "#1c1208" }}>
            スコープ固定。料金固定。柔軟な活用<span style={{ color: "#e95228" }}>。</span>
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
                    className="flex items-baseline justify-between px-5 py-3"
                    style={{
                      backgroundColor: isSelected ? "#e95228" : "#0d0a07",
                      borderBottom: isSelected ? "2px solid #e95228" : "1px solid #e8d9c8",
                    }}
                  >
                    <span className="text-sm font-black" style={{ color: "#fdf8f3" }}>{tierLabels[tier.id]}</span>
                    <span className="font-mono text-[10px] tracking-wider" style={{ color: "rgba(253,248,243,0.5)" }}>{tier.crew}</span>
                  </div>

                  {/* Deliverables */}
                  <div className="px-5 py-5 space-y-4 flex-1">
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
                            {d.badge === "same" ? "当日納品" : "24時間以内"}
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
                <h3 className="text-xl font-black mb-1" style={{ color: "#1c1208" }}>ソーシャルイベントパッケージのお問い合わせ</h3>
                <p className="text-sm mb-10" style={{ color: "rgba(28,18,8,0.55)" }}>
                  パッケージと時間を選択のうえ、下記の詳細をご入力ください。
                </p>

                {/* 01 — Package selection */}
                <div className="grid sm:grid-cols-[160px_1fr] gap-x-8 gap-y-1 mb-10">
                  <div className="pt-1">
                    <p className="font-mono text-[10px] tracking-[0.35em] uppercase" style={{ color: "rgba(28,18,8,0.35)" }}>
                      パッケージ
                    </p>
                  </div>
                  <div>
                    {/* Tier selector */}
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

                    {/* Duration selector */}
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

                    {/* Add-ons */}
                    {selectedTier && (
                      <div className="mt-4 mb-4">
                        <label className="block text-[13px] font-black mb-2" style={{ color: "#1c1208" }}>
                          オプション <span className="font-mono text-[10px] tracking-wider" style={{ color: "rgba(28,18,8,0.4)" }}>· 任意</span>
                        </label>
                        <div className="space-y-2">
                          {addOns.map((a) => {
                            const available = a.tiers.includes(selectedTier as "essential" | "standard" | "pro");
                            const qty = addOnQty[a.id] || 0;
                            return (
                              <div
                                key={a.id}
                                className="flex items-center gap-3 p-3"
                                style={{
                                  border: qty > 0 ? "2px solid #e95228" : "1px solid #e8d9c8",
                                  backgroundColor: qty > 0 ? "rgba(233,82,40,0.06)" : available ? "transparent" : "#f5ede2",
                                  opacity: available ? 1 : 0.5,
                                }}
                              >
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-baseline justify-between gap-2">
                                    <div className="text-[13px] font-black" style={{ color: "#1c1208" }}>{a.title}</div>
                                    <div className="text-[13px] font-black shrink-0" style={{ color: qty > 0 ? "#e95228" : "rgba(28,18,8,0.55)" }}>
                                      +{formatYen(a.price)}
                                    </div>
                                  </div>
                                  <div className="text-xs mt-0.5" style={{ color: "rgba(28,18,8,0.45)" }}>{a.detail}</div>
                                </div>
                                <div className="flex items-center gap-2 shrink-0">
                                  <button
                                    type="button"
                                    disabled={!available || qty === 0}
                                    onClick={() => bumpAddOn(a.id, -1)}
                                    className="w-7 h-7 flex items-center justify-center text-sm font-black transition-colors"
                                    style={{
                                      border: "1px solid #e8d9c8",
                                      backgroundColor: "#fff",
                                      color: qty === 0 || !available ? "rgba(28,18,8,0.25)" : "#1c1208",
                                      cursor: qty === 0 || !available ? "not-allowed" : "pointer",
                                    }}
                                    aria-label={`${a.title}を1つ減らす`}
                                  >
                                    −
                                  </button>
                                  <span className="text-sm font-black w-5 text-center tabular-nums" style={{ color: "#1c1208" }}>{qty}</span>
                                  <button
                                    type="button"
                                    disabled={!available}
                                    onClick={() => bumpAddOn(a.id, 1)}
                                    className="w-7 h-7 flex items-center justify-center text-sm font-black transition-colors"
                                    style={{
                                      border: "1px solid #e8d9c8",
                                      backgroundColor: "#fff",
                                      color: !available ? "rgba(28,18,8,0.25)" : "#1c1208",
                                      cursor: !available ? "not-allowed" : "pointer",
                                    }}
                                    aria-label={`${a.title}を1つ追加`}
                                  >
                                    +
                                  </button>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                        <p className="text-[11px] mt-2" style={{ color: "rgba(28,18,8,0.4)" }}>
                          オプションの数量は、空き状況とあわせて24時間以内に確定します。
                        </p>
                      </div>
                    )}

                    {/* Price summary */}
                    {selectedPrice && (
                      <div className="p-4" style={{ backgroundColor: "rgba(233,82,40,0.06)", border: "1px solid rgba(233,82,40,0.2)" }}>
                        <div className="flex items-baseline justify-between">
                          <span className="text-sm font-black" style={{ color: "#1c1208" }}>{tierLabels[selectedTier]} · {durLabelsJP[selectedDur]}</span>
                          <span className="text-sm font-black" style={{ color: "rgba(28,18,8,0.55)" }}>{selectedPrice}</span>
                        </div>
                        {hasAnyAddOns && (
                          <>
                            {addOns.filter((a) => (addOnQty[a.id] || 0) > 0).map((a) => (
                              <div key={a.id} className="flex items-baseline justify-between mt-1">
                                <span className="text-xs" style={{ color: "rgba(28,18,8,0.55)" }}>{a.title} × {addOnQty[a.id]}</span>
                                <span className="text-xs" style={{ color: "rgba(28,18,8,0.55)" }}>+{formatYen(a.price * addOnQty[a.id])}</span>
                              </div>
                            ))}
                            <div className="flex items-baseline justify-between mt-2 pt-2" style={{ borderTop: "1px solid rgba(233,82,40,0.2)" }}>
                              <span className="text-sm font-black" style={{ color: "#1c1208" }}>合計</span>
                              <span className="text-xl font-black" style={{ color: "#e95228" }}>{formatYen(grandTotal)}</span>
                            </div>
                          </>
                        )}
                        {!hasAnyAddOns && (
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
                        撮影前にブランドを把握したいため、下記にクライアントのウェブサイトもご記入ください。
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
