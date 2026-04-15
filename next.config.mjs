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

      // Old bilingual page content now lives under /jp
      { source: "/video-production-kigyo-bilingual", destination: "/jp", permanent: true },

      // Old /jpn/ (3-letter) Japanese section → new /jp/ (2-letter)
      { source: "/jpn/corporate-video", destination: "/jp/corporate-video", permanent: true },
      { source: "/jpn/real-estate-photo-video", destination: "/jp/real-estate-photo-video-tokyo-japan", permanent: true },
      { source: "/jpn/customer-stories-client-testimonial-videos", destination: "/jp/client-testimonials-video-production-tokyo-japan", permanent: true },
      { source: "/jpn/:path*", destination: "/jp", permanent: true },

      // Old CMS "gomi" (trash) folder — kill all
      { source: "/gomi/:path*", destination: "/", permanent: true },

      // Other legacy standalone pages
      { source: "/corporate-studio-shoots-event-recordings-tokyo-japan", destination: "/event-photo-video-japan", permanent: true },
      { source: "/video-production-outdoors-japan", destination: "/corporate-branding-videos-japan", permanent: true },
      { source: "/drone-photos-and-video-from-the-air-in-japan", destination: "/real-estate-photo-video-tokyo-japan", permanent: true },
      { source: "/japan-corporate-video-production-blog", destination: "/", permanent: true },
      { source: "/real-estate-photo-and-video-in-tokyo-japan", destination: "/real-estate-photo-video-tokyo-japan", permanent: true },
      { source: "/customer-stories-client-testimonial-videos-jp", destination: "/jp/client-testimonials-video-production-tokyo-japan", permanent: true },

      // Blog posts removed in site rebuild → redirect to closest service page
      { source: "/post/requirements-to-fly-a-drone-in-japan-2024-update", destination: "/", permanent: true },
      { source: "/post/studio-shoots-with-built-sets-in-tokyo-budgets", destination: "/corporate-branding-videos-japan", permanent: true },
      { source: "/post/before-and-after-photos-video-office-building-renovation-japan", destination: "/real-estate-photo-video-tokyo-japan", permanent: true },
      { source: "/post/case-study-japanese-branding-story-video-and-commercial", destination: "/corporate-branding-videos-japan", permanent: true },
      { source: "/post/case-study-complete-visuals-showcasing-a-residence-for-sale-in-tokyo", destination: "/real-estate-photo-video-tokyo-japan", permanent: true },
      { source: "/post/video-production-telling-the-story-of-googles-water-conservation-project", destination: "/corporate-branding-videos-japan", permanent: true },
      { source: "/post/case-study-the-craft-of-knife-making-as-branding-content", destination: "/corporate-branding-videos-japan", permanent: true },
      { source: "/post/case-study-video-production-for-microsoft-windows-11-promotion", destination: "/corporate-branding-videos-japan", permanent: true },
      // Catch-all for any other /post/ pages
      { source: "/post/:slug*", destination: "/", permanent: true },

      // New blog route not yet implemented — redirect any stray links to homepage
      { source: "/blog", destination: "/", permanent: false },
      { source: "/blog/:slug*", destination: "/", permanent: false },
    ];
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "picsum.photos" },
    ],
  },
};

export default nextConfig;
