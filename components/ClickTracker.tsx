"use client";
import { useEffect } from "react";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gtag?: (...args: any[]) => void;
  }
}

export default function ClickTracker() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href") || "";
      if (href.startsWith("https://wa.me/")) {
        window.gtag?.("event", "whatsapp_click", { event_category: "contact" });
      } else if (href.startsWith("mailto:")) {
        window.gtag?.("event", "email_click", { event_category: "contact" });
      }
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);
  return null;
}
