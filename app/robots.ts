import type { MetadataRoute } from "next";
import { site } from "@/lib/content";

/**
 * Robots policy. All major search + AI crawlers are explicitly welcome.
 * Explicit user-agent rules act as a positive signal for AI answer engines
 * even when the wildcard rule already allows them.
 */
export default function robots(): MetadataRoute.Robots {
  const allowAll = { allow: "/" };
  return {
    rules: [
      { userAgent: "*", ...allowAll },

      // Search engines
      { userAgent: "Googlebot", ...allowAll },
      { userAgent: "Bingbot", ...allowAll },
      { userAgent: "Twitterbot", ...allowAll },
      { userAgent: "facebookexternalhit", ...allowAll },

      // AI / LLM crawlers — we publish /llms.txt for these specifically.
      { userAgent: "GPTBot", ...allowAll },
      { userAgent: "ChatGPT-User", ...allowAll },
      { userAgent: "OAI-SearchBot", ...allowAll },
      { userAgent: "anthropic-ai", ...allowAll },
      { userAgent: "Claude-Web", ...allowAll },
      { userAgent: "ClaudeBot", ...allowAll },
      { userAgent: "PerplexityBot", ...allowAll },
      { userAgent: "Applebot-Extended", ...allowAll },
      { userAgent: "Google-Extended", ...allowAll },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
