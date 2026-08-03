import type { Metadata } from "next";
import { site } from "@/lib/content";

type PostForMeta = {
  slug: string;
  title: string;
  metaDescription: string;
  hero: { image: string };
};

type PostForJsonLd = PostForMeta & {
  faq: { items: { question: string; answer: string }[] };
};

/** Builds Next.js Metadata for a blog post — title, canonical, OG, Twitter. */
export function buildPostMetadata(post: PostForMeta): Metadata {
  return {
    title: `${post.title} | ${site.name}`,
    description: post.metaDescription,
    alternates: { canonical: `/${post.slug}` },
    openGraph: {
      type: "article",
      url: `${site.url}/${post.slug}`,
      title: post.title,
      description: post.metaDescription,
      images: [{ url: post.hero.image, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metaDescription,
      images: [post.hero.image],
    },
  };
}

/** BlogPosting + FAQPage JSON-LD combined into one @graph, as a stringified script body. */
export function buildBlogJsonLd(post: PostForJsonLd): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${site.url}/${post.slug}#blogposting`,
        headline: post.title,
        description: post.metaDescription,
        image: `${site.url}${post.hero.image}`,
        author: { "@type": "Organization", name: site.name },
        publisher: {
          "@type": "Organization",
          name: site.name,
          logo: {
            "@type": "ImageObject",
            url: `${site.url}/images/nicos-logo-black-surround.png`,
          },
        },
        mainEntityOfPage: { "@type": "WebPage", "@id": `${site.url}/${post.slug}` },
      },
      {
        "@type": "FAQPage",
        "@id": `${site.url}/${post.slug}#faq`,
        mainEntity: post.faq.items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  });
}
