import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
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
      </head>
      <body className="antialiased">
        <Navigation />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
