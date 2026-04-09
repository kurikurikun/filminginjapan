"use client";

import { useState, useRef } from "react";

const prices: Record<string, Record<string, string>> = {
  essential: { half: "¥150,000", full: "¥200,000" },
  standard: { half: "¥200,000", full: "¥270,000" },
  pro: { half: "¥300,000", full: "¥400,000" },
};

const tierLabels: Record<string, string> = { essential: "Essential", standard: "Standard", pro: "Pro" };
const durLabels: Record<string, string> = { half: "Half day", full: "Full day" };

const tiers = [
  {
    id: "essential",
    crew: "1 operator",
    deliverables: [
      {
        icon: "▶",
        title: "Vertical video clips",
        detail: "2 clips (half day) · 3 clips (full day)\n~30 sec · captioned · colour-graded",
        badge: "24h",
      },
    ],
    prices: { half: "¥150,000", full: "¥200,000" },
  },
  {
    id: "standard",
    crew: "1 operator",
    deliverables: [
      {
        icon: "▶",
        title: "Vertical video clips",
        detail: "3 clips (half day) · 5 clips (full day)\n~30 sec · captioned · colour-graded",
        badge: "24h",
      },
      {
        icon: "◼",
        title: "SNS photo selects",
        detail: "15–20 edited stills · vertical & square crops\nSNS-optimised composition",
        badge: "same",
      },
    ],
    prices: { half: "¥200,000", full: "¥270,000" },
  },
  {
    id: "pro",
    crew: "2 operators",
    deliverables: [
      {
        icon: "▶",
        title: "Vertical video clips",
        detail: "3 clips (half day) · 5 clips (full day)\n~30 sec · captioned · colour-graded",
        badge: "24h",
      },
      {
        icon: "◉",
        title: "Interview clips",
        detail: "3 interviews · ~30 sec each · English or Japanese",
        badge: "24h",
      },
      {
        icon: "◼",
        title: "SNS photo selects",
        detail: "15–20 edited stills · vertical & square crops",
        badge: "same",
      },
      {
        icon: "◼",
        title: "Full photo archive",
        detail: "300 edited photos · complete event coverage",
        badge: "24h",
      },
    ],
    prices: { half: "¥300,000", full: "¥400,000" },
  },
];

const steps = [
  { text: "Choose your package.", detail: "Select your tier and duration. See all costs now." },
  { text: "Submit the form.", detail: "Tell us your event date, location and type. Two minutes, no commitment required." },
  { text: "We confirm availability", detail: "within 24 hours. Once you're happy to proceed, we send a short briefing form — key moments, speakers, venue details." },
  { text: "Shoot day.", detail: "We're there, we know what matters, we get it done." },
  { text: "Delivery.", detail: "Content in your hands within 24 hours." },
];

export default function EventSocialSection() {
  const [selectedTier, setSelectedTier] = useState("");
  const [selectedDur, setSelectedDur] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [isAgency, setIsAgency] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const formRef = useRef<HTMLDivElement>(null);

  const selectedPrice = selectedTier && selectedDur ? prices[selectedTier]?.[selectedDur] : "";

  async function handleSubmit() {
    const fields: Record<string, string> = {};
    const ids = [
      "es-event-date", "es-event-type", "es-event-location", "es-attendees",
      "es-moments", "es-enquiry-type", "es-name", "es-company", "es-website",
      "es-client-website", "es-email", "es-referral", "es-notes",
    ];
    ids.forEach((id) => {
      const el = document.getElementById(id) as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null;
      if (el) fields[id] = el.value.trim();
    });

    const required = ["es-event-date", "es-event-type", "es-event-location", "es-enquiry-type", "es-name", "es-company", "es-website", "es-email"];
    const newErrors: Record<string, boolean> = {};
    if (!selectedTier) newErrors["tier"] = true;
    if (!selectedDur) newErrors["dur"] = true;
    required.forEach((id) => {
      if (!fields[id]) newErrors[id] = true;
    });

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setSubmitting(true);

    const message = [
      `[Event Social Enquiry]`,
      `Package: ${tierLabels[selectedTier]} · ${durLabels[selectedDur]} · ${selectedPrice}`,
      `Event date: ${fields["es-event-date"]}`,
      `Event type: ${fields["es-event-type"]}`,
      `Location: ${fields["es-event-location"]}`,
      fields["es-attendees"] ? `Attendees: ${fields["es-attendees"]}` : "",
      fields["es-moments"] ? `Key moments: ${fields["es-moments"]}` : "",
      fields["es-enquiry-type"] === "agency" ? `Enquiry type: Agency` : `Enquiry type: Direct`,
      fields["es-client-website"] ? `Client website: ${fields["es-client-website"]}` : "",
      fields["es-referral"] ? `Referral: ${fields["es-referral"]}` : "",
      fields["es-notes"] ? `Notes: ${fields["es-notes"]}` : "",
    ].filter(Boolean).join("\n");

    try {
      const res = await fetch("https://lead-hub-nine.vercel.app/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-api-key": "fij2025key" },
        body: JSON.stringify({
          name: fields["es-name"],
          email: fields["es-email"],
          company: fields["es-company"],
          website: fields["es-website"],
          message,
          service: "Event Social",
          source: "/event-photo-video-japan",
        }),
      });
      if (res.ok) {
        (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag?.("event", "form_submit", { event_category: "contact", event_label: "Event Social" });
        setShowSuccess(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
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
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[0.95] mb-6" style={{ color: "#1c1208" }}>
            Not an event video.<br />
            <span style={{ color: "rgba(28,18,8,0.4)" }}>A content engine.</span>
          </h2>
          <p className="text-lg font-black mb-3" style={{ color: "#1c1208" }}>
            Fixed prices, flexible use.
          </p>
          <p className="text-sm leading-relaxed max-w-xl" style={{ color: "rgba(28,18,8,0.55)" }}>
            Your event deserves content that keeps working after it ends. Fixed-scope packages for corporate events in
            Tokyo and Osaka — delivered within 24 hours and yours to deploy across every platform and channel.
          </p>
        </div>

        {/* REFRAME */}
        <div className="pb-10 mb-10 border-b max-w-2xl" style={{ borderColor: "#e8d9c8" }}>
          <p className="text-sm leading-relaxed" style={{ color: "rgba(28,18,8,0.55)" }}>
            <strong className="font-black" style={{ color: "#1c1208" }}>Legacy event video was built for a different era.</strong>{" "}
            Event Social delivers short, captioned, platform-ready clips and photos that work the moment they&apos;re
            posted — and keep working long after.
          </p>
        </div>

        {/* PACKAGES — 3 across */}
        <div className="mb-16">
          <h3 className="text-xl sm:text-2xl font-black mb-10" style={{ color: "#1c1208" }}>
            Fixed scope. Fixed price. Flexible use<span style={{ color: "#e95228" }}>.</span>
          </h3>

          <div className="grid md:grid-cols-3 gap-4 mb-12">
            {tiers.map((tier) => {
              const isSelected = selectedTier === tier.id;
              return (
                <button
                  key={tier.id}
                  type="button"
                  onClick={() => setSelectedTier(tier.id)}
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
                    <span className="font-mono text-[10px] tracking-wider uppercase" style={{ color: "rgba(253,248,243,0.5)" }}>{tier.crew}</span>
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
                            className="inline-block text-[10px] font-black tracking-wider uppercase px-2 py-0.5 rounded-full mt-1.5"
                            style={
                              d.badge === "same"
                                ? { backgroundColor: "#0d0a07", color: "#fdf8f3" }
                                : { backgroundColor: "#f5ede2", color: "rgba(28,18,8,0.55)" }
                            }
                          >
                            {d.badge === "same" ? "Same day" : "Within 24 hours"}
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
                        <div className="text-[11px]" style={{ color: "rgba(28,18,8,0.4)" }}>{dur === "half" ? "Half day" : "Full day"}</div>
                        <div className="text-sm font-black" style={{ color: isSelected ? "#e95228" : "#1c1208" }}>{tier.prices[dur]}</div>
                      </div>
                    ))}
                  </div>
                </button>
              );
            })}
          </div>
          {errors.tier && <p className="text-xs mb-4 -mt-8" style={{ color: "#c0392b" }}>Please select a tier above</p>}

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

          {/* ENQUIRY FORM — centred below packages */}
          <div className="max-w-2xl mx-auto" ref={formRef}>
            {showSuccess ? (
              <div className="p-10 text-center border" style={{ borderColor: "#e8d9c8", backgroundColor: "#fff" }}>
                <div
                  className="w-12 h-12 rounded-full border flex items-center justify-center text-lg mx-auto mb-6"
                  style={{ borderColor: "#e8d9c8" }}
                >
                  ✓
                </div>
                <h3 className="text-2xl font-black mb-3" style={{ color: "#1c1208" }}>Enquiry received</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(28,18,8,0.55)" }}>
                  Thank you. We&apos;ll review your details and confirm availability within 24 hours.
                </p>
              </div>
            ) : (
              <div className="p-8 sm:p-10 border" style={{ backgroundColor: "#fff", borderColor: "#e8d9c8" }}>
                <h3 className="text-xl font-black mb-1" style={{ color: "#1c1208" }}>Book Event Social</h3>
                <p className="text-sm mb-8" style={{ color: "rgba(28,18,8,0.55)" }}>
                  Choose your package and duration, then fill in the details below.
                </p>

                {/* 01 — Package selection */}
                <div className="mb-8">
                  <p className="font-mono text-[10px] tracking-[0.35em] uppercase mb-5 pb-3 border-b" style={{ color: "rgba(28,18,8,0.35)", borderColor: "#e8d9c8" }}>
                    Your package
                  </p>

                  {/* Tier selector */}
                  <label className="block text-[13px] font-black mb-2" style={{ color: "#1c1208" }}>
                    Plan<span style={{ color: "#e95228" }}> *</span>
                  </label>
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {(["essential", "standard", "pro"] as const).map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setSelectedTier(t)}
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
                  {errors.tier && <p className="text-xs mb-3" style={{ color: "#c0392b" }}>Please select a plan</p>}

                  {/* Duration selector */}
                  <label className="block text-[13px] font-black mb-2" style={{ color: "#1c1208" }}>
                    Duration<span style={{ color: "#e95228" }}> *</span>
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
                        <div className="text-sm font-black" style={{ color: selectedDur === d ? "#e95228" : "#1c1208" }}>{d === "half" ? "Half day" : "Full day"}</div>
                        <div className="text-xs" style={{ color: "rgba(28,18,8,0.45)" }}>{d === "half" ? "Up to 5 hours" : "Up to 8 hours"}</div>
                      </button>
                    ))}
                  </div>
                  {errors.dur && <p className="text-xs mb-3" style={{ color: "#c0392b" }}>Please select a duration</p>}

                  {/* Price summary */}
                  {selectedPrice && (
                    <div className="p-4" style={{ backgroundColor: "rgba(233,82,40,0.06)", border: "1px solid rgba(233,82,40,0.2)" }}>
                      <div className="flex items-baseline justify-between">
                        <span className="text-sm font-black" style={{ color: "#1c1208" }}>{tierLabels[selectedTier]} · {durLabels[selectedDur]}</span>
                        <span className="text-xl font-black" style={{ color: "#e95228" }}>{selectedPrice}</span>
                      </div>
                    </div>
                  )}
                </div>

                {selectedTier === "pro" && (
                  <div className="p-3 text-xs leading-relaxed mb-8" style={{ backgroundColor: "#f5ede2", color: "rgba(28,18,8,0.55)", border: "1px solid #e8d9c8" }}>
                    Pro interviews are conducted during pre-event arrival time and scheduled breaks — typically two to three windows of 15–20 minutes. Available in English or Japanese.
                  </div>
                )}

                {/* 02 — Your event */}
                <div className="mb-8">
                  <p className="font-mono text-[10px] tracking-[0.35em] uppercase mb-5 pb-3 border-b" style={{ color: "rgba(28,18,8,0.35)", borderColor: "#e8d9c8" }}>
                    Your event
                  </p>
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div>
                      <label htmlFor="es-event-date" className="block text-[13px] font-black mb-1.5" style={{ color: "#1c1208" }}>
                        Event date<span style={{ color: "#e95228" }}> *</span>
                      </label>
                      <input type="date" id="es-event-date" className="w-full" style={inputStyle(errors["es-event-date"])} />
                    </div>
                    <div>
                      <label htmlFor="es-event-type" className="block text-[13px] font-black mb-1.5" style={{ color: "#1c1208" }}>
                        Event type<span style={{ color: "#e95228" }}> *</span>
                      </label>
                      <select id="es-event-type" className="w-full" style={inputStyle(errors["es-event-type"])}>
                        <option value="">Select...</option>
                        <option>Conference</option>
                        <option>Product launch</option>
                        <option>Award ceremony</option>
                        <option>Dinner / evening event</option>
                        <option>Seminar / workshop</option>
                        <option>Trade show / expo</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div>
                      <label htmlFor="es-event-location" className="block text-[13px] font-black mb-1.5" style={{ color: "#1c1208" }}>
                        Location<span style={{ color: "#e95228" }}> *</span>
                      </label>
                      <select id="es-event-location" className="w-full" style={inputStyle(errors["es-event-location"])}>
                        <option value="">Select...</option>
                        <option>Tokyo</option>
                        <option>Osaka</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="es-attendees" className="block text-[13px] font-black mb-1.5" style={{ color: "#1c1208" }}>
                        Expected attendees
                      </label>
                      <select id="es-attendees" className="w-full" style={inputStyle(false)}>
                        <option value="">Select...</option>
                        <option>Under 50</option>
                        <option>50–150</option>
                        <option>150–300</option>
                        <option>300–500</option>
                        <option>500+</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="es-moments" className="block text-[13px] font-black mb-1.5" style={{ color: "#1c1208" }}>
                      Key moments to capture <span className="font-normal text-xs" style={{ color: "rgba(28,18,8,0.35)" }}>optional</span>
                    </label>
                    <textarea
                      id="es-moments"
                      placeholder="e.g. Opening keynote, product reveal, networking reception..."
                      className="w-full"
                      style={{ ...inputStyle(false), minHeight: "70px", resize: "vertical" as const }}
                    />
                  </div>
                </div>

                {/* 03 — About you */}
                <div className="mb-8">
                  <p className="font-mono text-[10px] tracking-[0.35em] uppercase mb-5 pb-3 border-b" style={{ color: "rgba(28,18,8,0.35)", borderColor: "#e8d9c8" }}>
                    About you
                  </p>
                  <div className="mb-3">
                    <label htmlFor="es-enquiry-type" className="block text-[13px] font-black mb-1.5" style={{ color: "#1c1208" }}>
                      You are enquiring as<span style={{ color: "#e95228" }}> *</span>
                    </label>
                    <select
                      id="es-enquiry-type"
                      className="w-full"
                      style={inputStyle(errors["es-enquiry-type"])}
                      onChange={(e) => setIsAgency(e.target.value === "agency")}
                    >
                      <option value="">Select...</option>
                      <option value="direct">The event organiser / client directly</option>
                      <option value="agency">An event agency acting on behalf of a client</option>
                    </select>
                  </div>
                  {isAgency && (
                    <div className="p-3 text-xs leading-relaxed mb-3" style={{ backgroundColor: "#f5ede2", color: "rgba(28,18,8,0.55)", border: "1px solid #e8d9c8" }}>
                      Please share your client&apos;s website below — it helps us understand their brand before the shoot.
                    </div>
                  )}
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div>
                      <label htmlFor="es-name" className="block text-[13px] font-black mb-1.5" style={{ color: "#1c1208" }}>
                        Your name<span style={{ color: "#e95228" }}> *</span>
                      </label>
                      <input type="text" id="es-name" placeholder="Full name" className="w-full" style={inputStyle(errors["es-name"])} />
                    </div>
                    <div>
                      <label htmlFor="es-company" className="block text-[13px] font-black mb-1.5" style={{ color: "#1c1208" }}>
                        Your company<span style={{ color: "#e95228" }}> *</span>
                      </label>
                      <input type="text" id="es-company" placeholder="Company name" className="w-full" style={inputStyle(errors["es-company"])} />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="es-website" className="block text-[13px] font-black mb-1.5" style={{ color: "#1c1208" }}>
                      Company website<span style={{ color: "#e95228" }}> *</span>
                    </label>
                    <input type="text" id="es-website" placeholder="https://" className="w-full" style={inputStyle(errors["es-website"])} />
                  </div>
                  {isAgency && (
                    <div className="mb-3">
                      <label htmlFor="es-client-website" className="block text-[13px] font-black mb-1.5" style={{ color: "#1c1208" }}>
                        End client website <span className="font-normal text-xs" style={{ color: "rgba(28,18,8,0.35)" }}>optional</span>
                      </label>
                      <input type="text" id="es-client-website" placeholder="https://" className="w-full" style={inputStyle(false)} />
                    </div>
                  )}
                  <div className="mb-3">
                    <label htmlFor="es-email" className="block text-[13px] font-black mb-1.5" style={{ color: "#1c1208" }}>
                      Email<span style={{ color: "#e95228" }}> *</span>
                    </label>
                    <input type="email" id="es-email" placeholder="you@company.com" className="w-full" style={inputStyle(errors["es-email"])} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="es-referral" className="block text-[13px] font-black mb-1.5" style={{ color: "#1c1208" }}>
                      How did you hear about us?
                    </label>
                    <select id="es-referral" className="w-full" style={inputStyle(false)}>
                      <option value="">Select...</option>
                      <option>Google search</option>
                      <option>Referral from a colleague</option>
                      <option>Existing client</option>
                      <option>Social media</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="es-notes" className="block text-[13px] font-black mb-1.5" style={{ color: "#1c1208" }}>
                      Anything else <span className="font-normal text-xs" style={{ color: "rgba(28,18,8,0.35)" }}>optional</span>
                    </label>
                    <textarea
                      id="es-notes"
                      placeholder="Venue name, special requirements, questions..."
                      className="w-full"
                      style={{ ...inputStyle(false), minHeight: "60px", resize: "vertical" as const }}
                    />
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={submitting}
                  className="w-full font-black text-sm tracking-[0.15em] uppercase py-4 transition-opacity"
                  style={{ backgroundColor: "#e95228", color: "#fff", opacity: submitting ? 0.6 : 1 }}
                >
                  {submitting ? "Submitting..." : "Submit enquiry"}
                </button>
                <p className="text-xs text-center mt-3 leading-relaxed" style={{ color: "rgba(28,18,8,0.35)" }}>
                  We confirm availability within 24 hours.<br />No commitment required at this stage.
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
