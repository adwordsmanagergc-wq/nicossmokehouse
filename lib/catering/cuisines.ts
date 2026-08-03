/**
 * The three cuisine-focused catering pages, referenced from the suburb
 * pages' cuisine selector and from the hub / footer.
 */
export type Cuisine = {
  slug: string; // used to build /{slug} route
  name: string;
  short: string;
  blurb: string;
};

export const CUISINE_LIST: Cuisine[] = [
  {
    slug: "texas-bbq-catering-bali",
    name: "Texas BBQ Catering",
    short: "Texas BBQ",
    blurb:
      "14-hour smoked brisket, beef ribs, US Prime pork ribs, smoked sausage and all the classic sides.",
  },
  {
    slug: "caribbean-catering-bali",
    name: "Caribbean Catering",
    short: "Caribbean",
    blurb:
      "Jerk chicken, curry goat, oxtail, rice and peas, festival and every Jamaican classic in between.",
  },
  {
    slug: "peri-peri-catering-bali",
    name: "Peri Peri Catering",
    short: "Peri Peri",
    blurb:
      "Flame-grilled peri peri chicken with six signature sauces from Lemon & Herb to Extra Hot.",
  },
];

export const CUISINES: Record<string, Cuisine> = Object.fromEntries(
  CUISINE_LIST.map((c) => [c.slug, c]),
);
