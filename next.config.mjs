/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/corporate-video", destination: "/corporate-branding-videos-japan", permanent: true },
      { source: "/event-photo-video", destination: "/event-photo-video-japan", permanent: true },
      { source: "/real-estate-photo-video", destination: "/real-estate-photo-video-tokyo-japan", permanent: true },
      { source: "/client-testimonial", destination: "/client-testimonials-video-production-tokyo-japan", permanent: true },
      { source: "/jp/event-photo-video", destination: "/jp/event-photo-video-japan", permanent: true },
      { source: "/jp/client-testimonial", destination: "/jp/client-testimonials-video-production-tokyo-japan", permanent: true },
      { source: "/jp/real-estate-photo-video", destination: "/jp/real-estate-photo-video-tokyo-japan", permanent: true },
    ];
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "uploads-ssl.webflow.com" },
      { protocol: "https", hostname: "cdn.prod.website-files.com" },
    ],
  },
};

export default nextConfig;
