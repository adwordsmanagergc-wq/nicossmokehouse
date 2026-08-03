import type { MetadataRoute } from "next";
import { site } from "@/lib/content";

// This is a single-page site, so the sitemap lists only the homepage.
// Add entries here as you build out new routes.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: site.url, lastModified: now, changeFrequency: "weekly", priority: 1 },
    {
      url: `${site.url}/peri-peri-chicken-canggu-bali`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
