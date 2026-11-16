"use client";

// Click-to-load stand-in for video and 3D-tour iframes.
// Vimeo, YouTube and Matterport players each pull in hundreds of KB of script and block the
// main thread, so the page shows a still + play button and only mounts the real iframe on click.
// Drop-in replacement for <iframe>: same props.

import { useEffect, useState, type CSSProperties } from "react";

type Props = {
  src: string;
  title?: string;
  className?: string;
  style?: CSSProperties;
  allow?: string;
  allowFullScreen?: boolean;
  loading?: "lazy" | "eager";
  /** Optional poster image; otherwise fetched from Vimeo/YouTube where possible. */
  poster?: string;
};

function parse(src: string) {
  const vimeo = src.match(/player\.vimeo\.com\/video\/(\d+)(?:\?[^#]*?\bh=([0-9a-f]+))?/);
  if (vimeo) return { kind: "vimeo" as const, id: vimeo[1], hash: vimeo[2] };
  const yt = src.match(/youtube(?:-nocookie)?\.com\/embed\/([\w-]+)/);
  if (yt) return { kind: "youtube" as const, id: yt[1] };
  if (/matterport\.com/.test(src)) return { kind: "matterport" as const };
  return { kind: "other" as const };
}

function withAutoplay(src: string) {
  if (/[?&]autoplay=1/.test(src)) return src;
  return src + (src.includes("?") ? "&" : "?") + "autoplay=1";
}

export default function LazyIframe({ src, title = "", className = "", style, allow, allowFullScreen, poster }: Props) {
  const info = parse(src);
  const [active, setActive] = useState(false);
  const [thumb, setThumb] = useState<string | undefined>(
    poster ?? (info.kind === "youtube" ? `https://i.ytimg.com/vi/${info.id}/hqdefault.jpg` : undefined)
  );

  // Vimeo stills come from the public oEmbed endpoint (works for unlisted videos with their hash).
  useEffect(() => {
    if (poster || info.kind !== "vimeo") return;
    const page = `https://vimeo.com/${info.id}${info.hash ? `/${info.hash}` : ""}`;
    let cancelled = false;
    fetch(`https://vimeo.com/api/oembed.json?width=1280&url=${encodeURIComponent(page)}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (!cancelled && d?.thumbnail_url) setThumb(String(d.thumbnail_url));
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [src, poster]);

  if (active) {
    return (
      <iframe
        src={info.kind === "matterport" || info.kind === "other" ? src : withAutoplay(src)}
        title={title}
        className={className}
        style={style}
        allow={allow ?? "autoplay; fullscreen; picture-in-picture"}
        allowFullScreen={allowFullScreen ?? true}
      />
    );
  }

  const isTour = info.kind === "matterport";
  return (
    <button
      type="button"
      onClick={() => setActive(true)}
      className={`${className} ${/\b(absolute|fixed)\b/.test(className) ? "" : "relative"} group overflow-hidden text-left block`}
      style={{ ...style, backgroundColor: "#0d0a07", border: 0, padding: 0, cursor: "pointer" }}
      aria-label={isTour ? `Load 3D tour: ${title}` : `Play video: ${title}`}
    >
      {thumb && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={thumb} alt="" loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
      )}
      <span className="absolute left-5 bottom-5 flex items-center gap-3" aria-hidden="true">
        <span className="flex items-center justify-center w-[52px] h-[52px] rounded-full bg-[#e95228] group-hover:bg-[#f06a42] transition-colors">
          {isTour ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0d0a07" strokeWidth="1.8">
              <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" />
              <path d="M12 12l8-4.5M12 12v9M12 12L4 7.5" />
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 10 10">
              <polygon points="2,1 9,5 2,9" fill="#0d0a07" />
            </svg>
          )}
        </span>
        {isTour && <span className="text-sm font-semibold text-[#fdf8f3] bg-[#0d0a07]/70 px-2.5 py-1">3D tour</span>}
      </span>
    </button>
  );
}
