"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

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
}

export default function LandingContactForm({ service }: Props) {
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
          subject: `${service} — ${data.get("company_website") || "no website"}`,
          message: String(data.get("message") || ""),
          source: `${window.location.pathname}${tracking.gclid ? " (Google Ads)" : ""}${tracking.utm_source ? ` (${tracking.utm_source})` : ""}`,
          tags: [service.toLowerCase().replace(/\s+/g, "-")],
        }),
      });
      if (res.ok) {
        router.push("/thank-you");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="hidden" name="access_key" value="4b598df9-6557-4d91-8b4b-8d6d3ebedc9e" />
      <input type="hidden" name="subject" value={`New enquiry: ${service}`} />
      <input type="hidden" name="redirect" value="false" />
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />
      {/* Traffic source tracking */}
      {Object.entries(tracking).map(([key, val]) => (
        <input key={key} type="hidden" name={key} value={val} />
      ))}
      <input type="hidden" name="landing_page" value={typeof window !== "undefined" ? window.location.pathname : ""} />

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block font-mono text-[10px] tracking-[0.2em] uppercase mb-2" style={{ color: "rgba(28,18,8,0.5)" }}>
            Name *
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="Your name"
            className="w-full px-4 py-3 text-sm border outline-none transition-colors"
            style={{ backgroundColor: "#fdf8f3", borderColor: "#e8d9c8", color: "#1c1208" }}
          />
        </div>
        <div>
          <label className="block font-mono text-[10px] tracking-[0.2em] uppercase mb-2" style={{ color: "rgba(28,18,8,0.5)" }}>
            Company Website
          </label>
          <input
            type="text"
            name="company_website"
            placeholder="https://yourcompany.com"
            className="w-full px-4 py-3 text-sm border outline-none"
            style={{ backgroundColor: "#fdf8f3", borderColor: "#e8d9c8", color: "#1c1208" }}
          />
        </div>
      </div>

      <div>
        <label className="block font-mono text-[10px] tracking-[0.2em] uppercase mb-2" style={{ color: "rgba(28,18,8,0.5)" }}>
          Email *
        </label>
        <input
          type="email"
          name="email"
          required
          placeholder="your@email.com"
          className="w-full px-4 py-3 text-sm border outline-none"
          style={{ backgroundColor: "#fdf8f3", borderColor: "#e8d9c8", color: "#1c1208" }}
        />
      </div>

      <div>
        <label className="block font-mono text-[10px] tracking-[0.2em] uppercase mb-2" style={{ color: "rgba(28,18,8,0.5)" }}>
          Project brief *
        </label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Tell us about your project — shoot dates, location, deliverables, budget range..."
          className="w-full px-4 py-3 text-sm border outline-none resize-none"
          style={{ backgroundColor: "#fdf8f3", borderColor: "#e8d9c8", color: "#1c1208" }}
        />
      </div>

      {status === "error" && (
        <p className="text-sm" style={{ color: "#e95228" }}>
          Something went wrong. Please email us directly at filminginjapan@move-ment.co
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full font-black text-sm tracking-[0.18em] uppercase py-4 transition-colors disabled:opacity-60"
        style={{ backgroundColor: "#e95228", color: "#fff" }}
      >
        {status === "sending" ? "Sending..." : "Get a Free Quote →"}
      </button>

      <p className="text-xs text-center" style={{ color: "rgba(28,18,8,0.35)" }}>
        We reply within 24 hours. No spam, ever.
      </p>
    </form>
  );
}
