"use client";
import LazyElfsight from "@/components/LazyElfsight";

export default function GoogleReviews({ appId }: { appId: string }) {
  return <LazyElfsight appId={appId} minHeight={260} />;
}
