import { useEffect } from "react";

const BASE_URL = "https://nicossmokehouse.com";
const DEFAULT_IMAGE =
  "https://019d0a46-9da2-77c5-9887-de886a0fdfda.mochausercontent.com/openart-image_1773994724931_39257367_1773994725151_04d1e791.jpg";

type SchemaObject = Record<string, unknown>;

interface SEOProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  noindex?: boolean;
  schema?: SchemaObject | SchemaObject[];
}

const PRETTY_SEGMENT: Record<string, string> = {
  "best-bbq-canggu": "Best BBQ Canggu",
  "blog": "Blog",
  "book-table": "Book a Table",
  "order": "Order Online",
  "catering-bali": "BBQ Catering Bali",
  "caribbean-food-canggu-bali": "Caribbean Food",
  "peri-peri-chicken-canggu-bali": "Peri Peri Chicken",
  "texas-bbq-canggu-bali": "Texas BBQ",
  "texas-bbq-catering-bali": "Texas BBQ Catering",
  "peri-peri-catering-bali": "Peri Peri Catering",
  "caribbean-catering-bali": "Caribbean Catering",
  "catering-canggu": "Catering Canggu",
  "catering-seminyak": "Catering Seminyak",
  "catering-pererenan": "Catering Pererenan",
  "catering-umalas": "Catering Umalas",
  "catering-berawa": "Catering Berawa",
  "catering-sanur": "Catering Sanur",
  "catering-nusa-dua": "Catering Nusa Dua",
  "catering-legian": "Catering Legian",
  "catering-uluwatu": "Catering Uluwatu",
  "what-is-the-best-bbq-restaurant-in-canggu":
    "What Is the Best BBQ Restaurant in Canggu?",
  "where-to-get-authentic-bbq-in-canggu-bali":
    "Where to Get Authentic BBQ in Canggu, Bali",
  "texas-smoke-meets-caribbean-soul-bbq-king-canggu":
    "Texas Smoke Meets Caribbean Soul",
};

function prettify(segment: string): string {
  if (PRETTY_SEGMENT[segment]) return PRETTY_SEGMENT[segment];
  return segment
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function buildBreadcrumb(path: string): SchemaObject | null {
  if (path === "/" || path === "/404") return null;
  const segments = path.split("/").filter(Boolean);
  const itemListElement = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: BASE_URL + "/",
    },
    ...segments.map((seg, i) => ({
      "@type": "ListItem",
      position: i + 2,
      name: prettify(seg),
      item: BASE_URL + "/" + segments.slice(0, i + 1).join("/"),
    })),
  ];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement,
  };
}

function ensureMeta(property: string, kind: "name" | "property"): HTMLMetaElement {
  const selector =
    kind === "name" ? `meta[name="${property}"]` : `meta[property="${property}"]`;
  let el = document.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(kind, property);
    document.head.appendChild(el);
  }
  return el;
}

export default function SEO({
  title,
  description,
  path,
  image = DEFAULT_IMAGE,
  type = "website",
  noindex = false,
  schema,
}: SEOProps) {
  useEffect(() => {
    const url = path === "/" ? BASE_URL : `${BASE_URL}${path}`;

    document.title = title;

    ensureMeta("description", "name").content = description;

    ensureMeta("og:title", "property").content = title;
    ensureMeta("og:description", "property").content = description;
    ensureMeta("og:url", "property").content = url;
    ensureMeta("og:image", "property").content = image;
    ensureMeta("og:type", "property").content = type;

    ensureMeta("twitter:title", "property").content = title;
    ensureMeta("twitter:description", "property").content = description;
    ensureMeta("twitter:image", "property").content = image;

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = url;

    const robots = ensureMeta("robots", "name");
    robots.content = noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large";

    const tagId = "page-schema-jsonld";
    document.getElementById(tagId)?.remove();

    const breadcrumb = buildBreadcrumb(path);
    const schemas: SchemaObject[] = [];
    if (breadcrumb) schemas.push(breadcrumb);
    if (schema) {
      if (Array.isArray(schema)) schemas.push(...schema);
      else schemas.push(schema);
    }

    if (schemas.length) {
      const tag = document.createElement("script");
      tag.type = "application/ld+json";
      tag.id = tagId;
      tag.text = JSON.stringify(schemas.length === 1 ? schemas[0] : schemas);
      document.head.appendChild(tag);
    }

    return () => {
      document.getElementById(tagId)?.remove();
    };
  }, [title, description, path, image, type, noindex, schema]);

  return null;
}
