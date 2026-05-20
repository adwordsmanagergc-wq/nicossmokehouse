import type { Metadata } from "next";
import Script from "next/script";
import { Bebas_Neue, Source_Sans_3 } from "next/font/google";
import { site, seo, analytics, IMAGES } from "@/lib/content";
import Nav from "@/components/Nav";
import "./globals.css";

const display = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Source_Sans_3({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: seo.siteName,
    title: seo.ogTitle,
    description: seo.ogDescription,
    images: [{ url: IMAGES.ogImage, width: 1200, height: 630, alt: seo.ogTitle }],
  },
  twitter: {
    card: "summary_large_image",
    site: seo.twitterHandle,
    creator: seo.twitterHandle,
    title: seo.ogTitle,
    description: seo.ogDescription,
    images: [IMAGES.ogImage],
  },
  robots: { index: true, follow: true },
  verification: analytics.bingSiteVerification
    ? { other: { "msvalidate.01": analytics.bingSiteVerification } }
    : undefined,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-body">
        {/* Without JS the scroll-reveal wrappers must still show their content */}
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>

        <Nav />
        {children}

        {analytics.googleAdsId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${analytics.googleAdsId}`}
              strategy="afterInteractive"
            />
            <Script id="gtag-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${analytics.googleAdsId}');`}
            </Script>
          </>
        ) : null}
      </body>
    </html>
  );
}
