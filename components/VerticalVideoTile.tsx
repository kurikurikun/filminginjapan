"use client";

import { useState, useRef, useEffect } from "react";

export default function VerticalVideoTile({ src, poster, label, autoPlay = false }: { src: string; poster?: string; label: string; autoPlay?: boolean }) {
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

  // When the user triggers play on a non-autoplay tile, kick off playback once video mounts
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
            aria-label={isMuted ? "Unmute video" : "Mute video"}
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
            <span className="text-xs" style={{ color: "rgba(28,18,8,0.25)" }}>Coming soon</span>
          </div>
        </div>
      )}
      <div className="absolute bottom-0 left-0 right-0 p-3 pointer-events-none">
        <span
          className="text-sm font-semibold"
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

