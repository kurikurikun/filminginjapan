import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import ClickTracker from "@/components/ClickTracker";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.filminginjapan.com"),
  title: {
    default: "Filming in Japan | Corporate Video Production Tokyo",
    template: "%s | Filming in Japan",
  },
  description:
    "Full-service corporate video production in Japan for global brands. Bilingual (EN/JP) team based in Tokyo. Branding videos, testimonials, events, real estate. 企業向け映像制作。",
  openGraph: {
    siteName: "Filming in Japan",
    locale: "en_US",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

const businessSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["ProfessionalService", "LocalBusiness"],
      "@id": "https://www.filminginjapan.com/#business",
      "name": "Filming in Japan",
      "url": "https://www.filminginjapan.com",
      "image": "https://www.filminginjapan.com/images/fij.png",
      "logo": "https://www.filminginjapan.com/images/fij.png",
      "description":
        "Bilingual (English/Japanese) corporate video production and event photography in Tokyo and across Japan — branding films, client testimonials, event coverage, and real estate.",
      "email": "filminginjapan@move-ment.co",
      "telephone": "+81-50-1724-6517",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1-18-5-503 Higashi Gotanda",
        "addressLocality": "Shinagawa-ku",
        "addressRegion": "Tokyo",
        "postalCode": "141-0022",
        "addressCountry": "JP",
      },
      "areaServed": { "@type": "Country", "name": "Japan" },
      "knowsLanguage": ["en", "ja"],
      "parentOrganization": {
        "@type": "Organization",
        "name": "Move-ment Co., Ltd.",
        "url": "https://www.move-ment.co",
      },
      "sameAs": [
        "https://www.move-ment.co",
        "https://www.instagram.com/move_ment.co.ltd/",
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://www.filminginjapan.com/#hiroshima",
      "name": "Filming in Japan — Hiroshima Office",
      "branchOf": { "@id": "https://www.filminginjapan.com/#business" },
      "url": "https://www.filminginjapan.com",
      "email": "filminginjapan@move-ment.co",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1-13-4 Ushita Minami",
        "addressLocality": "Higashi-ku",
        "addressRegion": "Hiroshima",
        "addressCountry": "JP",
      },
      "areaServed": { "@type": "Country", "name": "Japan" },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-HRSC1F9YKM" strategy="afterInteractive" />
        <Script id="ga4-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-HRSC1F9YKM');
        `}</Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
      </head>
      <body className="antialiased">
        <Navigation />
        <ClickTracker />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
