"use client";
import Script from "next/script";

export default function InstagramFeed() {
  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: "#fdf8f3" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px w-12" style={{ backgroundColor: "#e95228" }} />
          <span className="font-mono text-[10px] tracking-[0.35em] uppercase" style={{ color: "#e95228" }}>
            Instagram
          </span>
        </div>
        <div className="flex items-end justify-between mb-12">
          <h2 className="text-4xl sm:text-5xl font-black leading-none" style={{ color: "#1c1208" }}>
            Follow the work<span style={{ color: "#e95228" }}>.</span>
          </h2>
          <a
            href="https://www.instagram.com/filminginjapan/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] tracking-[0.2em] uppercase hidden sm:block"
            style={{ color: "rgba(28,18,8,0.45)" }}
          >
            @filminginjapan →
          </a>
        </div>

        <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
        <div
          className="elfsight-app-6e9766ec-6c97-4556-b049-6be8eb5a7967"
          data-elfsight-app-lazy
        />
      </div>
    </section>
  );
}
