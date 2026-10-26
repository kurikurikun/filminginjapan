"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gtag?: (...args: any[]) => void;
  }
}

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gclid"];

function getTrackingParams(): Record<string, string> {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  const result: Record<string, string> = {};
  // Read from URL first, fall back to sessionStorage
  UTM_KEYS.forEach((key) => {
    const val = params.get(key) || sessionStorage.getItem(key) || "";
    if (val) result[key] = val;
  });
  // Persist any new values to sessionStorage
  UTM_KEYS.forEach((key) => {
    const val = params.get(key);
    if (val) sessionStorage.setItem(key, val);
  });
  return result;
}

interface Props {
  service: string; // pre-fills subject line
  tone?: "light" | "dark"; // dark = on a near-black section
  lang?: "en" | "jp";
}

export default function LandingContactForm({ service, tone = "light", lang = "en" }: Props) {
  const dark = tone === "dark";
  const jp = lang === "jp";
  const labelCls = "block text-sm font-medium mb-2";
  const labelStyle = { color: dark ? "rgba(253,248,243,0.85)" : "#4a3a2a" };
  const fieldCls = "w-full px-0 py-3 text-base border-0 border-b outline-none bg-transparent transition-colors focus:border-[#e95228]";
  const fieldStyle = { borderColor: dark ? "rgba(253,248,243,0.6)" : "#1c1208", color: dark ? "#fdf8f3" : "#1c1208" };
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [tracking, setTracking] = useState<Record<string, string>>({});

  useEffect(() => {
    setTracking(getTrackingParams());
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://lead-hub-nine.vercel.app/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "fij2025key",
        },
        body: JSON.stringify({
          name: data.get("name") || "",
          email: data.get("email") || "",
          website: String(data.get("company_website") || ""),
          message: String(data.get("message") || ""),
          source: `${window.location.pathname}${tracking.gclid ? " (Google Ads)" : ""}${tracking.utm_source ? ` (${tracking.utm_source})` : ""}`,
          tags: [service.toLowerCase().replace(/\s+/g, "-")],
        }),
      });
      if (res.ok) {
        window.gtag?.("event", "form_submit", { event_category: "contact", event_label: service });
        router.push("/thank-you");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <input type="hidden" name="access_key" value="4b598df9-6557-4d91-8b4b-8d6d3ebedc9e" />
      <input type="hidden" name="subject" value={`New enquiry: ${service}`} />
      <input type="hidden" name="redirect" value="false" />
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />
      {/* Traffic source tracking */}
      {Object.entries(tracking).map(([key, val]) => (
        <input key={key} type="hidden" name={key} value={val} />
      ))}
      <input type="hidden" name="landing_page" value={typeof window !== "undefined" ? window.location.pathname : ""} />

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className={labelCls} style={labelStyle}>
            {jp ? "お名前 *" : "Name *"}
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder={jp ? "山田 太郎" : "Your name"}
            className={fieldCls}
            style={fieldStyle}
          />
        </div>
        <div>
          <label className={labelCls} style={labelStyle}>
            {jp ? "会社ウェブサイト" : "Company Website"}
          </label>
          <input
            type="text"
            name="company_website"
            placeholder="https://yourcompany.com"
            className={fieldCls}
            style={fieldStyle}
          />
        </div>
      </div>

      <div>
        <label className={labelCls} style={labelStyle}>
            {jp ? "メールアドレス *" : "Email *"}
          </label>
        <input
          type="email"
          name="email"
          required
          placeholder="your@email.com"
          className={fieldCls}
            style={fieldStyle}
        />
      </div>

      <div>
        <label className={labelCls} style={labelStyle}>
            {jp ? "ご相談内容 *" : "Project brief *"}
          </label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder={jp ? "撮影日・場所・納品物・ご予算など、わかる範囲でお書きください" : "Tell us about your project — shoot dates, location, deliverables, budget range..."}
          className={fieldCls}
            style={fieldStyle}
        />
      </div>

      {status === "error" && (
        <p className="text-sm" role="alert" style={{ color: dark ? "#f07a52" : "#c43d10" }}>
          {jp ? "送信できませんでした。お手数ですが filminginjapan@move-ment.co まで直接ご連絡ください。" : "Something went wrong. Please email us directly at filminginjapan@move-ment.co"}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full text-base font-semibold py-[18px] transition-colors disabled:opacity-60 hover:bg-[#f06a42]"
        style={{ backgroundColor: "#e95228", color: "#0d0a07" }}
      >
        {status === "sending" ? (jp ? "送信中…" : "Sending…") : (jp ? "無料でお見積もりを依頼する" : "Get a free quote")}
      </button>

      <p className="text-sm text-center" style={{ color: dark ? "rgba(253,248,243,0.7)" : "#6b5a48" }}>
        {jp ? "24時間以内にご返信します。" : "We reply within 24 hours. No spam, ever."}
      </p>
    </form>
  );
}
