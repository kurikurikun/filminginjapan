"use client";

// Mounts an Elfsight widget (Google Reviews, Instagram feed) only when it scrolls near the
// viewport. Elfsight's platform script and the images it pulls in were the largest cost on the
// homepage (~8 MB and 2+ s of main-thread time), so nothing loads until a visitor gets close.

import { useEffect, useRef, useState } from "react";

const SCRIPT_SRC = "https://elfsightcdn.com/platform.js";

function loadPlatform() {
  if (typeof document === "undefined") return;
  if (document.querySelector(`script[src="${SCRIPT_SRC}"]`)) return;
  const s = document.createElement("script");
  s.src = SCRIPT_SRC;
  s.async = true;
  document.body.appendChild(s);
}

export default function LazyElfsight({ appId, minHeight = 320 }: { appId: string; minHeight?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: "400px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (visible) loadPlatform();
  }, [visible]);

  return (
    <div ref={ref} style={{ minHeight: visible ? undefined : minHeight }}>
      {visible && <div className={`elfsight-app-${appId}`} data-elfsight-app-lazy />}
    </div>
  );
}
