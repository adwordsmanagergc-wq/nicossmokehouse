import type { MetadataRoute } from "next";
import { site } from "@/lib/content";

// This is a single-page site, so the sitemap lists only the homepage.
// Add entries here as you build out new routes.
const BLOG_SLUGS = [
  "peri-peri-chicken-canggu-bali",
  "caribbean-food-canggu-bali",
  "texas-bbq-canggu-bali",
  "best-bbq-canggu",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: site.url, lastModified: now, changeFrequency: "weekly", priority: 1 },
    ...BLOG_SLUGS.map((slug) => ({
      url: `${site.url}/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
