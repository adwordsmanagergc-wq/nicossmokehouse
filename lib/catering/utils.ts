import type { Metadata } from "next";
import { site } from "@/lib/content";

type PageForMeta = {
  slug: string;
  title: string;
  metaDescription: string;
  hero: { image: string };
};

type PageForJsonLd = PageForMeta & {
  faq: { items: { question: string; answer: string }[] };
};

/** Next.js Metadata for a catering page. */
export function buildCateringMetadata(page: PageForMeta): Metadata {
  return {
    title: `${page.title} | ${site.name}`,
    description: page.metaDescription,
    alternates: { canonical: `/${page.slug}` },
    openGraph: {
      type: "website",
      url: `${site.url}/${page.slug}`,
      title: page.title,
      description: page.metaDescription,
      images: [{ url: page.hero.image, width: 1200, height: 630, alt: page.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.metaDescription,
      images: [page.hero.image],
    },
  };
}

/** Service + FAQPage JSON-LD @graph for a catering page. */
export function buildCateringJsonLd(page: PageForJsonLd, areaServed: string | string[] = "Bali"): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${site.url}/${page.slug}#service`,
        name: page.title,
        description: page.metaDescription,
        provider: {
          "@type": "Restaurant",
          name: site.name,
          telephone: site.telephone,
          address: {
            "@type": "PostalAddress",
            streetAddress: site.address.streetAddress,
            addressLocality: site.address.locality,
            addressRegion: site.address.region,
            postalCode: site.address.postalCode,
            addressCountry: site.address.country,
          },
        },
        areaServed,
        serviceType: "Catering",
        image: `${site.url}${page.hero.image}`,
        url: `${site.url}/${page.slug}`,
      },
      {
        "@type": "FAQPage",
        "@id": `${site.url}/${page.slug}#faq`,
        mainEntity: page.faq.items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  });
}
