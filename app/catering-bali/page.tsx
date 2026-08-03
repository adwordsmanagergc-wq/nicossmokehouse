import type { Metadata } from "next";
import Link from "next/link";
import { site, links, IMAGES } from "@/lib/content";
import { CUISINE_LIST } from "@/lib/catering/cuisines";
import { SUBURB_LIST } from "@/lib/catering/suburbs";
import { buildCateringMetadata, buildCateringJsonLd } from "@/lib/catering/utils";
import BlogHero from "@/components/blog/BlogHero";
import BlogFAQ from "@/components/blog/BlogFAQ";
import BlogClosing from "@/components/blog/BlogClosing";
import Reveal from "@/components/Reveal";

const page = {
  slug: "catering-bali",
  title: "BBQ, Caribbean & Peri Peri Catering in Bali",
  eyebrow: "Catering · Bali",
  metaDescription:
    "Nico's Smokehouse catering across Bali — Texas BBQ, Caribbean and Peri Peri. Villas, weddings, corporate. Nine areas from Canggu to Uluwatu.",
  subtitle:
    "Three fire cuisines. One kitchen. Delivered to villas, weddings and events across Bali.",
  meta: `${site.name} · Serving all of ${site.address.region} · Open 12pm – 12am Daily`,
  hero: { image: IMAGES.heroBg },
  faq: {
    items: [
      {
        question: "What cuisines do you cater in Bali?",
        answer:
          "Nico's Smokehouse is the only catering kitchen in Bali offering all three: Texas-style smoked BBQ (14-hour brisket, US Prime pork ribs, beef ribs), Caribbean / Jamaican (jerk chicken, curry goat, oxtail), and Portuguese-African Peri Peri (flame-grilled with 6 signature sauces). Mix and match for the same event.",
      },
      {
        question: "Where in Bali do you cater?",
        answer:
          "We cater across the whole island — with dedicated pages for Canggu, Seminyak, Berawa, Pererenan, Umalas, Legian, Sanur, Nusa Dua and Uluwatu. WhatsApp us with your postcode if you're outside these areas.",
      },
      {
        question: "What group sizes do you cater?",
        answer:
          "From intimate villa dinners for 6, up to weddings and corporate events for 100+. Drop-off catering for smaller groups, full-service with staff and setup for larger events.",
      },
      {
        question: "How do we book catering?",
        answer:
          "WhatsApp us at +62 878 6796 6662 with your date, guest count, location and rough menu direction (BBQ, Caribbean, Peri Peri or a mix). We'll come back within a day with a menu, pricing and staffing plan.",
      },
      {
        question: "How much notice do you need?",
        answer:
          "Drop-off catering: 48-72 hours. Full-service catering: 1 week. Weddings and 40+ guest events: 2 weeks (brisket alone smokes for 14 hours, so please plan ahead).",
      },
    ],
  },
};

export const metadata: Metadata = buildCateringMetadata(page);

export default function CateringHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: buildCateringJsonLd(page) }}
      />
      <main>
        <BlogHero
          image={page.hero.image}
          eyebrow={page.eyebrow}
          title={page.title}
          subtitle={page.subtitle}
          meta={page.meta}
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

        {/* Cuisines */}
        <section className="bg-smoke px-4 py-16">
          <div className="mx-auto max-w-6xl">
            <Reveal className="text-center">
              <span className="text-sm font-medium tracking-[0.2em] text-fire">CHOOSE A MENU</span>
              <h2 className="mt-2 font-display text-3xl tracking-wide text-cream md:text-5xl">
                Three fire cuisines, one kitchen
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
                      See the {cuisine.short} catering menu →
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Suburbs */}
        <section className="bg-gradient-to-b from-smoke to-char px-4 py-16">
          <div className="mx-auto max-w-6xl">
            <Reveal className="text-center">
              <span className="text-sm font-medium tracking-[0.2em] text-fire">
                CHOOSE YOUR AREA
              </span>
              <h2 className="mt-2 font-display text-3xl tracking-wide text-cream md:text-5xl">
                Where in Bali are we catering?
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
              {SUBURB_LIST.map((s, i) => (
                <Reveal key={s.slug} delay={i * 40}>
                  <Link
                    href={`/catering-${s.slug}`}
                    className="group block h-full rounded-xl border border-amber-700/30 bg-black/40 p-5 transition hover:border-fire/60 hover:bg-black/55"
                  >
                    <h3 className="font-display text-xl tracking-wide text-fire group-hover:text-gold">
                      {s.name}
                    </h3>
                    <p className="mt-2 text-xs uppercase tracking-widest text-brown">
                      {s.landmarks}
                    </p>
                    <p className="mt-3 text-sm text-cream/75">{s.audience}</p>
                    <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-fire group-hover:text-gold">
                      Catering in {s.name} →
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <BlogFAQ heading="CATERING IN BALI" eyebrow="FAQ" items={page.faq.items} />

        <BlogClosing
          heading="Book Catering Across Bali"
          lines={[
            { label: "Cuisines", value: "Texas BBQ · Caribbean · Peri Peri (mix and match)" },
            { label: "Group size", value: "6 to 100+ guests" },
            { label: "Service", value: "Drop-off · full-service · smoker on-site" },
            { label: "Areas", value: "Canggu, Seminyak, Berawa, Pererenan, Umalas, Legian, Sanur, Nusa Dua, Uluwatu" },
          ]}
          ctas={[
            { label: "WhatsApp Catering Enquiry", href: links.whatsappCatering, variant: "green" },
            { label: "Back to Home", href: "/", variant: "wood" },
          ]}
        />
      </main>
    </>
  );
}
