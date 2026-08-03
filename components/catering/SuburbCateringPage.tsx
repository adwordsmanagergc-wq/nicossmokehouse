import Link from "next/link";
import { Utensils } from "lucide-react";
import { links, IMAGES, site } from "@/lib/content";
import { SUBURBS, type Suburb } from "@/lib/catering/suburbs";
import { CUISINE_LIST } from "@/lib/catering/cuisines";
import BlogHero from "@/components/blog/BlogHero";
import BlogFAQ from "@/components/blog/BlogFAQ";
import BlogClosing from "@/components/blog/BlogClosing";
import CuisineSelector from "@/components/catering/CuisineSelector";
import Reveal from "@/components/Reveal";
import { buildCateringMetadata, buildCateringJsonLd } from "@/lib/catering/utils";
import type { Metadata } from "next";

/** Build catering FAQs personalised for a given suburb. */
function buildFAQs(suburb: Suburb) {
  return [
    {
      question: `Do you cater to ${suburb.name}?`,
      answer: `Yes — Nico's Smokehouse caters BBQ, Caribbean and Peri Peri throughout ${suburb.name} and the surrounding area. We regularly deliver to ${suburb.landmarks}, and can bring full smoker setups or trays of food to any villa or venue.`,
    },
    {
      question: `What kind of events do you cater in ${suburb.name}?`,
      answer: `We cater ${suburb.audience} in ${suburb.name}, plus corporate events, weddings and long-stay group holidays. Group sizes from small villa dinners (6+) all the way to 100+ guest events.`,
    },
    {
      question: `How much notice do you need for catering in ${suburb.name}?`,
      answer: `For most sharing platters and drop-off orders, 48–72 hours' notice is comfortable. For full smoker setups, wedding-scale catering or 40+ guest events in ${suburb.name}, please book 1–2 weeks ahead so we can smoke your meats overnight and plan staffing.`,
    },
    {
      question: `Do you deliver or bring staff to ${suburb.name}?`,
      answer: `Both. Drop-off catering to ${suburb.name} villas is our fastest option — trays of ready-to-serve smoked meats, Caribbean dishes and sides. For weddings or bigger events, we also bring servers, grillers and setup so you don't have to lift a finger.`,
    },
    {
      question: `Can we choose from all three cuisines for a single ${suburb.name} event?`,
      answer: `Absolutely — many of our best ${suburb.name} events combine all three menus so guests get Texas brisket, Caribbean jerk chicken and Peri Peri all on one buffet. Mix and match freely; our team will build a menu that fits your headcount and budget.`,
    },
    {
      question: `How do we book catering for ${suburb.name}?`,
      answer: `Message us on WhatsApp with the date, guest count and rough menu direction (BBQ, Caribbean, Peri Peri, or a mix). We'll come back with a menu, pricing and staffing plan for your ${suburb.name} event within a day.`,
    },
  ];
}

function pageDataFor(suburb: Suburb) {
  return {
    slug: `catering-${suburb.slug}`,
    title: `BBQ Catering in ${suburb.name}, Bali`,
    metaDescription: `Nico's Smokehouse catering in ${suburb.name} — Texas BBQ, Caribbean jerk chicken and Peri Peri delivered to your villa or event. WhatsApp us to book.`,
    hero: { image: IMAGES.heroBg },
    faq: { items: buildFAQs(suburb) },
  };
}

export function buildSuburbMetadata(slug: string): Metadata {
  const suburb = SUBURBS[slug];
  if (!suburb) throw new Error(`Unknown catering suburb: ${slug}`);
  return buildCateringMetadata(pageDataFor(suburb));
}

export default function SuburbCateringPage({ slug }: { slug: string }) {
  const suburb = SUBURBS[slug];
  if (!suburb) throw new Error(`Unknown catering suburb: ${slug}`);
  const page = pageDataFor(suburb);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: buildCateringJsonLd(page, [suburb.name, "Bali"]),
        }}
      />
      <main>
        <BlogHero
          image={IMAGES.heroBg}
          eyebrow={`Catering · ${suburb.name}`}
          title={`BBQ Catering in ${suburb.name}, Bali`}
          subtitle={`Texas smokehouse, Caribbean and Peri Peri catering delivered to villas, weddings and events across ${suburb.name}.`}
          meta={`${site.name} · Serving ${suburb.name} and greater Bali · Open 12pm – 12am Daily`}
          ctas={[
            {
              label: "WhatsApp Catering Enquiry",
              href: links.whatsappCatering,
              icon: "utensils",
              external: true,
              variant: "green",
            },
          ]}
        />

        {/* Intro */}
        <section className="bg-smoke px-4 py-16">
          <Reveal className="mx-auto max-w-3xl">
            <span className="text-sm font-medium tracking-[0.2em] text-fire">
              CATERING IN {suburb.name.toUpperCase()}
            </span>
            <h2 className="mt-2 font-display text-3xl tracking-wide text-cream md:text-5xl">
              BBQ, Caribbean & Peri Peri, delivered to {suburb.name}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-cream/85 md:text-xl">{suburb.intro}</p>
            <p className="mt-4 text-sm italic text-brown">
              Perfect for {suburb.audience}. Serving {suburb.landmarks}.
            </p>
          </Reveal>
        </section>

        {/* Cuisine cards */}
        <section className="bg-gradient-to-b from-smoke to-char px-4 py-16">
          <div className="mx-auto max-w-6xl">
            <Reveal className="text-center">
              <span className="text-sm font-medium tracking-[0.2em] text-fire">CHOOSE A MENU</span>
              <h2 className="mt-2 font-display text-3xl tracking-wide text-cream md:text-5xl">
                Three fire cuisines. One kitchen. Delivered to {suburb.name}.
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {CUISINE_LIST.map((cuisine, i) => (
                <Reveal key={cuisine.slug} delay={i * 100}>
                  <Link
                    href={`/${cuisine.slug}`}
                    className="group block h-full rounded-xl border border-amber-700/30 bg-black/40 p-6 transition hover:border-fire/60 hover:bg-black/55"
                  >
                    <h3 className="font-display text-2xl tracking-wide text-fire group-hover:text-gold">
                      {cuisine.name}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-cream/80">{cuisine.blurb}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-fire group-hover:text-gold">
                      See the {cuisine.short} menu →
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Cuisine selector */}
        <section className="bg-char px-4 py-12">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm uppercase tracking-widest text-brown">
              Or pick from the dropdown
            </p>
            <CuisineSelector suburbName={suburb.name} />
          </Reveal>
        </section>

        <BlogFAQ heading={`CATERING IN ${suburb.name.toUpperCase()}`} eyebrow="FAQ" items={page.faq.items} />

        <BlogClosing
          heading={`Book ${suburb.name} Catering`}
          lines={[
            { label: "Area", value: `${suburb.name}, Bali` },
            { label: "Nearby", value: suburb.landmarks },
            { label: "Hours", value: "Open daily 12pm – 12am" },
            { label: "Notice", value: "48-72 hrs typical · 1-2 weeks for weddings" },
          ]}
          ctas={[
            { label: "WhatsApp Catering Enquiry", href: links.whatsappCatering, variant: "green" },
            { label: "All Catering Menus", href: "/catering-bali", variant: "fire" },
            { label: "Back to Home", href: "/", variant: "wood" },
          ]}
        />
      </main>
    </>
  );
}
