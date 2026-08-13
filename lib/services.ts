// Canonical service links, shared by Navigation and Footer so the two can't drift.

export type ServiceLink = {
  label: string;
  href: string;
  // Pages that exist in the repo but aren't published yet are marked live: false.
  // They stay listed here so launching is a one-line flag flip.
  live: boolean;
};

export type ServiceGroup = {
  // Shown only when two or more children are live and the group renders as a dropdown.
  // With a single live child the nav renders that child flat, under its own label.
  label: string;
  children: ServiceLink[];
};

export const enServices: ServiceLink[] = [
  { label: "Corporate Video", href: "/corporate-branding-videos-japan", live: true },
  { label: "Testimonials", href: "/client-testimonials-video-production-tokyo-japan", live: true },
  { label: "Events", href: "/event-photo-video-japan", live: true },
  { label: "Real Estate", href: "/real-estate-photo-video-tokyo-japan", live: true },
];

export const jpServices: ServiceLink[] = [
  { label: "インタビュー・採用", href: "/jp/corporate-video", live: true },
  { label: "カスタマーストーリー", href: "/jp/client-testimonial", live: true },
  { label: "イベント", href: "/jp/event-photo-video", live: true },
  { label: "不動産", href: "/jp/real-estate-photo-video", live: true },
];

export const enSocialGroup: ServiceGroup = {
  label: "Social + YouTube",
  children: [
    { label: "Social Video", href: "/social-media-video-japan-2", live: true },
    // Launch step: flip to true once /managed-youtube-japan is committed and de-noindexed.
    // That alone turns this group into a dropdown — no other change needed.
    // The homepage "Four ways we tell your story" heading counts the four core
    // service cards only; social and YouTube sit outside it deliberately.
    { label: "Managed YouTube", href: "/managed-youtube-japan", live: false },
  ],
};

export const jpSocialGroup: ServiceGroup = {
  label: "ソーシャル・YouTube",
  children: [
    // No JP social media page exists yet — add it here when one is built.
    { label: "YouTube運用", href: "/jp/managed-youtube", live: false },
  ],
};

export function liveChildren(group: ServiceGroup): ServiceLink[] {
  return group.children.filter((c) => c.live);
}

// Every live service as a flat list — used for the footer's services column.
export function allLiveServices(lang: "en" | "jp"): ServiceLink[] {
  const base = lang === "jp" ? jpServices : enServices;
  const group = lang === "jp" ? jpSocialGroup : enSocialGroup;
  return [...base, ...liveChildren(group)];
}
