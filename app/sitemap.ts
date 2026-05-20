import type { MetadataRoute } from "next";
import { site } from "@/lib/content";

// This is a single-page site, so the sitemap lists only the homepage.
// Add entries here as you build out new routes.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
