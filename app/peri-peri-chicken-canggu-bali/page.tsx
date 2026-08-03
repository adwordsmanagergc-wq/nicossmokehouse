import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ChevronDown, Flame, MapPin, Utensils } from "lucide-react";
import { site, links } from "@/lib/content";
import { periPeriPost as post } from "@/lib/blog/peri-peri";
import Footer from "@/components/Footer";
import StickyBookButton from "@/components/StickyBookButton";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
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

function buildJsonLd(): string {
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

const CTA_VARIANTS: Record<string, string> = {
  green: "bg-[#25D366] text-white hover:brightness-110",
  fire: "bg-fire text-white hover:brightness-110",
  wood: "border border-amber-700/50 bg-brown/40 text-cream hover:bg-brown/60",
};

export default function PeriPeriBlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: buildJsonLd() }}
      />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden px-4 pb-20 pt-32">
          <div className="absolute inset-0">
            <Image
              src={post.hero.image}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-smoke" />
          </div>

          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <Link
              href="/"
              className="mb-6 inline-flex items-center gap-2 text-sm text-cream/70 transition hover:text-fire"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back to Home
            </Link>
            <span className="block text-sm font-medium tracking-[0.2em] text-fire">
              {post.eyebrow.toUpperCase()}
            </span>
            <h1 className="mt-3 font-display text-4xl tracking-wide text-cream md:text-6xl lg:text-7xl">
              {post.title}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-cream md:text-xl">
              {post.subtitle}
            </p>
            <p className="mt-3 text-sm text-brown">{post.meta}</p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={links.whatsappBooking}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-semibold text-white shadow-lg transition hover:brightness-110"
              >
                <Utensils className="h-5 w-5" aria-hidden="true" />
                Book a Table
              </a>
              <a
                href={links.gofood}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-fire px-6 py-3 font-semibold text-white shadow-lg transition hover:brightness-110"
              >
                <Flame className="h-5 w-5" aria-hidden="true" />
                Order on GoFood
              </a>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="bg-smoke px-4 py-16">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[3fr_2fr] md:items-center">
            <Reveal>
              <h2 className="font-display text-3xl tracking-wide text-fire md:text-5xl">
                {post.intro.heading}
              </h2>
              <p className="mt-6 text-lg font-medium text-cream md:text-xl">
                {post.intro.lead}
              </p>
              <div className="mt-6 space-y-5 text-base leading-relaxed text-cream/85 md:text-lg">
                {post.intro.paragraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-2xl border border-amber-700/30 bg-black/40">
                <Image
                  src={post.intro.image.src}
                  alt={post.intro.image.alt}
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-contain p-4"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Dishes */}
        <section className="bg-gradient-to-b from-smoke to-char px-4 py-16">
          <div className="mx-auto max-w-6xl">
            <Reveal className="text-center">
              <span className="text-sm font-medium tracking-[0.2em] text-fire">
                ON THE MENU
              </span>
              <h2 className="mt-2 font-display text-3xl tracking-wide text-cream md:text-5xl">
                {post.dishes.heading}
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {post.dishes.items.map((dish, i) => (
                <Reveal key={dish.title} delay={i * 60}>
                  <article className="h-full rounded-xl border border-amber-700/30 bg-black/40 p-6">
                    <h3 className="font-display text-2xl tracking-wide text-fire">
                      {dish.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-cream/80">
                      {dish.description}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Sauces */}
        <section className="bg-char px-4 py-16">
          <div className="mx-auto max-w-4xl">
            <Reveal className="text-center">
              <span className="text-sm font-medium tracking-[0.2em] text-fire">
                CHOOSE YOUR HEAT
              </span>
              <h2 className="mt-2 font-display text-3xl tracking-wide text-cream md:text-5xl">
                {post.sauces.heading}
              </h2>
            </Reveal>
            <Reveal className="mt-10 overflow-hidden rounded-xl border border-amber-700/30 bg-black/40">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-black/40 text-xs uppercase tracking-widest text-brown">
                    <tr>
                      <th className="px-5 py-3">Sauce</th>
                      <th className="px-5 py-3">Heat</th>
                      <th className="px-5 py-3">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-brown/20 text-sm">
                    {post.sauces.items.map((sauce) => (
                      <tr key={sauce.name} className="align-top">
                        <td className="px-5 py-4 font-semibold text-cream">{sauce.name}</td>
                        <td className="whitespace-nowrap px-5 py-4 text-cream-dim">
                          <span aria-hidden="true">{sauce.heat}</span>
                        </td>
                        <td className="px-5 py-4 text-cream/75">{sauce.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-gradient-to-b from-char to-smoke px-4 py-16">
          <div className="mx-auto max-w-3xl">
            <Reveal className="text-center">
              <span className="text-sm font-medium tracking-[0.2em] text-fire">
                FREQUENTLY ASKED
              </span>
              <h2 className="mt-2 font-display text-3xl tracking-wide text-cream md:text-5xl">
                QUESTIONS
              </h2>
            </Reveal>
            <div className="mt-10 space-y-3">
              {post.faq.items.map((item, i) => (
                <Reveal key={item.question} delay={i * 50}>
                  <details className="group rounded-xl border border-amber-700/30 bg-black/40 p-5 open:bg-black/55">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 [&::-webkit-details-marker]:hidden">
                      <span className="text-base font-semibold text-cream md:text-lg">
                        {item.question}
                      </span>
                      <ChevronDown
                        className="h-5 w-5 shrink-0 text-fire transition-transform group-open:rotate-180"
                        aria-hidden="true"
                      />
                    </summary>
                    <p className="mt-4 text-sm leading-relaxed text-cream/80 md:text-base">
                      {item.answer}
                    </p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-smoke px-4 pb-20 pt-16">
          <Reveal className="mx-auto max-w-3xl rounded-2xl border border-amber-700/30 bg-black/40 p-8 text-center md:p-10">
            <MapPin className="mx-auto h-8 w-8 text-fire" aria-hidden="true" />
            <h2 className="mt-3 font-display text-3xl tracking-wide text-cream md:text-4xl">
              {post.closing.heading}
            </h2>
            <dl className="mx-auto mt-6 grid max-w-md gap-2 text-sm md:text-base">
              {post.closing.lines.map((line) => (
                <div
                  key={line.label}
                  className="flex justify-between gap-4 border-b border-brown/20 pb-2 last:border-b-0"
                >
                  <dt className="font-semibold text-brown">{line.label}</dt>
                  <dd className="text-right text-cream">{line.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {post.closing.ctas.map((cta) =>
                cta.href.startsWith("/") ? (
                  <Link
                    key={cta.label}
                    href={cta.href}
                    className={`inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold transition ${CTA_VARIANTS[cta.variant]}`}
                  >
                    {cta.label}
                  </Link>
                ) : (
                  <a
                    key={cta.label}
                    href={cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold transition ${CTA_VARIANTS[cta.variant]}`}
                  >
                    {cta.label}
                  </a>
                ),
              )}
            </div>
            <p className="mt-8 text-xs italic text-brown/70">{post.footerNote}</p>
          </Reveal>
        </section>
      </main>

      <Footer />
      <StickyBookButton />
    </>
  );
}
