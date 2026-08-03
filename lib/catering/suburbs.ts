/**
 * All suburbs / areas Nico's Smokehouse caters to across Bali.
 * The `slug` becomes the URL (/catering-{slug}) and is also used
 * in metadata and canonical URLs.
 *
 * Add a new area by pushing to SUBURB_LIST, then create a matching
 * folder at app/catering-{slug}/page.tsx (a 3-line file — see the
 * existing suburb pages for the template).
 */
export type Suburb = {
  slug: string;
  name: string;
  intro: string;
  landmarks: string;
  audience: string;
};

export const SUBURB_LIST: Suburb[] = [
  {
    slug: "canggu",
    name: "Canggu",
    intro:
      "Canggu is Bali's beating heart for surfers, digital nomads and villa parties. It's also where Nico's Smokehouse lives — so catering here is fast, fresh, and easy to scale from an intimate 6-person villa dinner to a 100-guest birthday.",
    landmarks: "Batu Bolong, Echo Beach, Berawa Beach, La Brisa",
    audience: "villa parties, birthdays, sunset gatherings and pool days",
  },
  {
    slug: "seminyak",
    name: "Seminyak",
    intro:
      "Seminyak's luxury villas and beachfront estates make it Bali's go-to for upscale weddings, engagement parties and long lunches. Bring our Texas smokehouse, Caribbean and peri peri to your Seminyak villa with full-service catering — trays, staff or drop-off.",
    landmarks: "Petitenget, Oberoi, Double Six, Ku De Ta",
    audience: "weddings, engagements, hen's parties and luxury villa events",
  },
  {
    slug: "berawa",
    name: "Berawa",
    intro:
      "Berawa is Canggu's sun-kissed neighbour — beach clubs, family villas and premium accommodation. Our team caters BBQ and Caribbean feasts to Berawa villas year-round, from small dinners to full pool-party spreads.",
    landmarks: "Finns Beach Club, Atlas Beach Club, Berawa Beach",
    audience: "beach-club overflow, family gatherings and pool parties",
  },
  {
    slug: "pererenan",
    name: "Pererenan",
    intro:
      "Pererenan is Bali's quieter, wellness-focused corner of the west coast, popular with health-forward retreats and hosted villa stays. We cater grill-forward menus with plenty of clean protein and fresh sides that suit the local vibe.",
    landmarks: "Pererenan Beach, Nyanyi Beach, wellness retreats along Jl. Nelayan",
    audience: "wellness retreats, private chefs, quiet villa dinners",
  },
  {
    slug: "umalas",
    name: "Umalas",
    intro:
      "Umalas is where Bali's long-term expat community and family renters live — spacious rice-field villas, big kitchens, larger groups. Our sharing platters and feast menus were built for exactly this kind of long-table dinner.",
    landmarks: "Umalas rice fields, Jl. Bumbak, boutique villas throughout the area",
    audience: "family celebrations, expat get-togethers, birthdays and long lunches",
  },
  {
    slug: "legian",
    name: "Legian",
    intro:
      "Legian sits between Kuta and Seminyak — a mix of resort hotels, holiday villas and party venues. We cater buffets, food-truck-style setups and drop-off feasts across Legian for hen's / buck's parties, hotel functions and villa stays.",
    landmarks: "Legian Beach, Padma, Jl. Melasti and Jl. Padma",
    audience: "group holidays, hen's parties, hotel functions",
  },
  {
    slug: "sanur",
    name: "Sanur",
    intro:
      "Sanur is Bali's calmer, family-friendly east coast — long-term stays, sunrise beach breakfasts and family celebrations. We cater across Sanur with milder heat options and sharing menus that suit multi-generational tables.",
    landmarks: "Sanur Beach, Mertasari, Jl. Danau Tamblingan",
    audience: "family celebrations, milestone birthdays, retreat dinners",
  },
  {
    slug: "nusa-dua",
    name: "Nusa Dua",
    intro:
      "Nusa Dua is Bali's luxury resort peninsula — five-star hotels, wedding venues and corporate retreats. Our BBQ, Caribbean and peri peri travel well for weddings, conference dinners and gala nights across the ITDC complex and villas nearby.",
    landmarks: "The Mulia, ITDC complex, Sawangan, Nusa Dua Beach",
    audience: "weddings, corporate retreats, resort private dining",
  },
  {
    slug: "uluwatu",
    name: "Uluwatu",
    intro:
      "Uluwatu's clifftop villas host some of Bali's most spectacular parties — sunset weddings, surf-crew birthdays, milestone getaways. We cater full smoker setups and Caribbean spreads across the Bukit peninsula.",
    landmarks: "Uluwatu Temple, Padang Padang, Bingin, Suluban",
    audience: "clifftop weddings, surf-trip celebrations, sunset parties",
  },
];

export const SUBURBS: Record<string, Suburb> = Object.fromEntries(
  SUBURB_LIST.map((s) => [s.slug, s]),
);
