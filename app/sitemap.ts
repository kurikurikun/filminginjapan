import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.filminginjapan.com";

  return [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${base}/corporate-branding-videos-japan`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/event-photo-video-japan`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/real-estate-photo-video-tokyo-japan`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/client-testimonials-video-production-tokyo-japan`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.6 },
  ];
}
