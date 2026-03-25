"use client";
import Script from "next/script";

export default function GoogleReviews({ appId }: { appId: string }) {
  return (
    <>
      <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
      <div className={`elfsight-app-${appId}`} data-elfsight-app-lazy />
    </>
  );
}
