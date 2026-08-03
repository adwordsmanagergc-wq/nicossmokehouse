import type { Metadata } from "next";
import { caribbeanCatering as page } from "@/lib/catering/caribbean";
import { buildCateringMetadata, buildCateringJsonLd } from "@/lib/catering/utils";
import BlogHero from "@/components/blog/BlogHero";
import BlogFAQ from "@/components/blog/BlogFAQ";
import BlogClosing from "@/components/blog/BlogClosing";
import SuburbSelector from "@/components/catering/SuburbSelector";
import Reveal from "@/components/Reveal";
import { links } from "@/lib/content";

export const metadata: Metadata = buildCateringMetadata(page);

export default function CaribbeanCateringPage() {
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

        {/* Intro */}
        <section className="bg-smoke px-4 py-16">
          <Reveal className="mx-auto max-w-3xl">
            <h2 className="font-display text-3xl tracking-wide text-fire md:text-5xl">
              {page.intro.heading}
            </h2>
            <p className="mt-6 text-lg font-medium text-cream md:text-xl">{page.intro.lead}</p>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-cream/85 md:text-lg">
              {page.intro.paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </Reveal>
        </section>

        {/* Dishes */}
        <section className="bg-gradient-to-b from-smoke to-char px-4 py-16">
          <div className="mx-auto max-w-6xl">
            <Reveal className="text-center">
              <span className="text-sm font-medium tracking-[0.2em] text-fire">
                {page.dishes.eyebrow}
              </span>
              <h2 className="mt-2 font-display text-3xl tracking-wide text-cream md:text-5xl">
                {page.dishes.heading}
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {page.dishes.items.map((dish, i) => (
                <Reveal key={dish.title} delay={i * 40}>
                  <article className="h-full rounded-xl border border-amber-700/30 bg-black/40 p-6">
                    <h3 className="font-display text-2xl tracking-wide text-fire">{dish.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-cream/80">{dish.description}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Includes */}
        <section className="bg-char px-4 py-16">
          <div className="mx-auto max-w-5xl">
            <Reveal className="text-center">
              <span className="text-sm font-medium tracking-[0.2em] text-fire">HOW IT WORKS</span>
              <h2 className="mt-2 font-display text-3xl tracking-wide text-cream md:text-5xl">
                {page.includes.heading}
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {page.includes.items.map((item, i) => (
                <Reveal key={item.title} delay={i * 80}>
                  <div className="rounded-xl border border-amber-700/30 bg-black/40 p-6">
                    <h3 className="font-display text-xl tracking-wide text-fire">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-cream/80">{item.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Suburb selector */}
        <section className="bg-gradient-to-b from-char to-smoke px-4 py-12">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-medium tracking-[0.2em] text-fire">
              WHERE ARE WE CATERING?
            </span>
            <h2 className="mb-6 mt-2 font-display text-2xl tracking-wide text-cream md:text-3xl">
              Pick your suburb for area-specific info
            </h2>
            <SuburbSelector cuisineName="Caribbean" />
          </Reveal>
        </section>

        <BlogFAQ heading="CATERING QUESTIONS" eyebrow="FAQ" items={page.faq.items} />

        <BlogClosing
          heading={page.closing.heading}
          lines={page.closing.lines}
          ctas={page.closing.ctas}
          footerNote={page.footerNote}
        />
      </main>
    </>
  );
}
