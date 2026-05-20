import { site, links, faq } from "./content";

/**
 * Structured data (JSON-LD) for the homepage.
 * Returns one schema.org @graph combining Restaurant, LocalBusiness,
 * FoodEstablishment, Organization and FAQPage — carried over from the
 * live site so search engines keep the rich results.
 */
export function buildJsonLd(): string {
  const address = {
    "@type": "PostalAddress",
    streetAddress: site.address.streetAddress,
    addressLocality: site.address.locality,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  };

  const geo = {
    "@type": "GeoCoordinates",
    latitude: site.geo.latitude,
    longitude: site.geo.longitude,
  };

  const openingHours = {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "12:00",
    closes: "00:00",
  };

  const ogImage = `${site.url}/images/og-image.svg`;

  const graph = [
    {
      "@type": "Restaurant",
      "@id": `${site.url}/#restaurant`,
      name: site.name,
      alternateName: site.alternateName,
      description:
        "Canggu's best air-conditioned BBQ restaurant serving Texas-style smoked meats, authentic Caribbean & Jamaican cuisine, and Peri Peri chicken. Cool indoor dining with 11 tables. Open daily 12pm-midnight.",
      image: [ogImage, `${site.url}/images/specialty-texas.svg`],
      url: site.url,
      telephone: site.telephone,
      priceRange: site.priceRange,
      servesCuisine: ["Texas BBQ", "Caribbean", "Jamaican", "Peri Peri", "Barbecue"],
      address,
      geo,
      openingHoursSpecification: [openingHours],
      acceptsReservations: "True",
      menu: links.gofood,
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "Air Conditioning", value: true },
        { "@type": "LocationFeatureSpecification", name: "Indoor Seating", value: true },
        { "@type": "LocationFeatureSpecification", name: "Family Friendly", value: true },
      ],
      sameAs: [links.instagram, links.gofood],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "150",
        bestRating: "5",
        worstRating: "1",
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": `${site.url}/#localbusiness`,
      name: site.name,
      description:
        "The best BBQ restaurant in Canggu, Bali. Authentic Texas-style smoked meats, Caribbean/Jamaican food, and Peri Peri chicken.",
      image: ogImage,
      url: site.url,
      telephone: site.telephone,
      priceRange: site.priceRange,
      address,
      geo,
      openingHoursSpecification: openingHours,
      areaServed: ["Canggu", "Seminyak", "Berawa", "Pererenan", "Umalas", "Kuta", "Bali"],
    },
    {
      "@type": "FoodEstablishment",
      "@id": `${site.url}/#foodestablishment`,
      name: site.name,
      servesCuisine: ["Texas BBQ", "Caribbean", "Jamaican", "Peri Peri", "American BBQ"],
      acceptsReservations: true,
      hasDeliveryMethod: { "@type": "DeliveryMethod", name: "GoFood Delivery" },
      smokingAllowed: false,
      paymentAccepted: "Cash, Credit Card, Debit Card",
      currenciesAccepted: "IDR",
    },
    {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.name,
      url: site.url,
      logo: `${site.url}/images/logo.svg`,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: site.telephone,
        contactType: "reservations",
        availableLanguage: ["English", "Indonesian"],
      },
      sameAs: [links.instagram],
    },
    {
      "@type": "FAQPage",
      "@id": `${site.url}/#faq`,
      mainEntity: faq.items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ];

  return JSON.stringify({ "@context": "https://schema.org", "@graph": graph });
}
