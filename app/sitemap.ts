import type { MetadataRoute } from "next";
import { site } from "@/lib/content";
import { SUBURB_LIST } from "@/lib/catering/suburbs";
import { CUISINE_LIST } from "@/lib/catering/cuisines";

const BLOG_SLUGS = [
  "peri-peri-chicken-canggu-bali",
  "caribbean-food-canggu-bali",
  "texas-bbq-canggu-bali",
  "best-bbq-canggu",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const monthly = "monthly" as const;

  return [
    { url: site.url, lastModified: now, changeFrequency: "weekly", priority: 1 },

    // Blog / pillar posts
    ...BLOG_SLUGS.map((slug) => ({
      url: `${site.url}/${slug}`,
      lastModified: now,
      changeFrequency: monthly,
      priority: 0.8,
    })),

    // Catering hub
    {
      url: `${site.url}/catering-bali`,
      lastModified: now,
      changeFrequency: monthly,
      priority: 0.9,
    },

    // Cuisine-specific catering pages
    ...CUISINE_LIST.map((c) => ({
      url: `${site.url}/${c.slug}`,
      lastModified: now,
      changeFrequency: monthly,
      priority: 0.8,
    })),

    // Suburb-specific catering pages
    ...SUBURB_LIST.map((s) => ({
      url: `${site.url}/catering-${s.slug}`,
      lastModified: now,
      changeFrequency: monthly,
      priority: 0.7,
    })),
  ];
}
