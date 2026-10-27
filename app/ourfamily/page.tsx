import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Coffee,
  CookingPot,
  Flame,
  Heart,
  Pizza,
  Sandwich,
  Utensils,
} from "lucide-react";
import { family, links, site, IMAGES, MASCOT_SIZES } from "@/lib/content";
import Embers from "@/components/Embers";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: family.metaTitle,
  description: family.metaDescription,
  alternates: { canonical: "/ourfamily" },
  openGraph: {
    title: family.metaTitle,
    description: family.metaDescription,
    url: `${site.url}/ourfamily`,
    images: [{ url: IMAGES.ogImage, width: 1200, height: 630, alt: family.metaTitle }],
  },
};

const ICONS = {
  flame: Flame,
  cookingPot: CookingPot,
  coffee: Coffee,
  sandwich: Sandwich,
  pizza: Pizza,
};

const STATUS_STYLE = {
  here: "bg-fire text-white",
  open: "bg-[#25D366]/15 text-[#4ade80] ring-1 ring-[#25D366]/40",
  soon: "bg-gold/15 text-gold ring-1 ring-gold/40",
};

const TRIO = [
  { key: "cluck" as const, src: IMAGES.mascotCluck, alt: "Cluck the rooster", img: "h-32 -rotate-6 md:h-40" },
  { key: "nico" as const, src: IMAGES.mascotNico, alt: "Nico the bull", img: "h-40 md:h-48" },
  { key: "hammer" as const, src: IMAGES.mascotHammer, alt: "Hammer the pig", img: "h-32 rotate-6 md:h-40" },
];

const breadcrumbJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: site.name, item: site.url },
    { "@type": "ListItem", position: 2, name: "Our Family", item: `${site.url}/ourfamily` },
  ],
});

export default function OurFamilyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd }} />
      <main>
        {/* Hero */}
        <section className="relative isolate overflow-hidden bg-char px-4 pb-16 pt-28 md:px-6 md:pb-24 md:pt-36">
          <div className="absolute inset-0 -z-10" aria-hidden="true">
            <Image
              src={IMAGES.heroBg}
              alt=""
              fill
              priority
              sizes="100vw"
              className="animate-slow-zoom object-cover opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-char/70 via-char/90 to-char" />
            <div className="absolute -bottom-40 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-fire/20 blur-[140px]" />
          </div>
          <Embers count={14} />
          <div className="grain absolute inset-0" aria-hidden="true" />

          <div className="relative mx-auto max-w-4xl text-center">
            <Link
              href="/"
              className="hero-in inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-cream/60 transition hover:text-fire"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back to {site.name}
            </Link>
            <p
              className="hero-in mt-8 text-xs font-bold tracking-[0.3em] text-fire"
              style={{ animationDelay: "0.1s" }}
            >
              {family.eyebrow}
            </p>
            <h1
              className="hero-in mt-4 font-display text-6xl leading-[0.88] text-cream md:text-8xl lg:text-9xl"
              style={{ animationDelay: "0.2s" }}
            >
              {family.headingTop}
              <br />
              <span className="fire-text">{family.headingAccent}</span>
            </h1>
            <p
              className="hero-in mx-auto mt-7 max-w-2xl font-serif text-xl italic leading-snug text-cream/80 md:text-2xl"
              style={{ animationDelay: "0.35s" }}
            >
              {family.intro}
            </p>
          </div>
        </section>

        {/* The family, side by side */}
        <section className="relative overflow-hidden bg-smoke px-4 py-16 md:px-6 md:py-24">
          <div className="grain absolute inset-0" aria-hidden="true" />
          <div className="relative mx-auto max-w-[1400px]">
            {/* The thread that runs through every kitchen (desktop row) */}
            <div
              className="pointer-events-none absolute inset-x-[10%] top-[52px] hidden h-px bg-gradient-to-r from-transparent via-fire/60 to-transparent xl:block"
              aria-hidden="true"
            />
            <ol className="relative grid gap-6 md:grid-cols-2 xl:grid-cols-5 xl:gap-5">
              {family.members.map((m, i) => {
                const Icon = ICONS[m.icon];
                return (
                  <li key={m.key} className={i === 4 ? "md:col-span-2 xl:col-span-1" : ""}>
                    <Reveal delay={i * 90} className="h-full">
                      <article
                        className={`relative flex h-full flex-col rounded-[26px] bg-gradient-to-b from-[#1f150c] to-[#120c07] p-6 ring-1 transition duration-500 md:hover:-translate-y-1.5 ${
                          m.statusTone === "here" ? "ring-fire/50" : "ring-white/10"
                        }`}
                      >
                        <div className="burnt-edge pointer-events-none absolute inset-0 rounded-[26px]" aria-hidden="true" />
                        <div className="relative flex items-start justify-between gap-3">
                          <span
                            className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br shadow-lg ring-4 ring-smoke ${m.accent}`}
                          >
                            <Icon className="h-7 w-7 text-white" aria-hidden="true" />
                          </span>
                          <span
                            className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] ${STATUS_STYLE[m.statusTone]}`}
                          >
                            {m.status}
                          </span>
                        </div>

                        <h2 className="relative mt-6 font-display text-4xl leading-none text-cream">{m.name}</h2>
                        <p className="relative mt-2 text-[11px] font-bold uppercase tracking-[0.2em] text-ember">
                          {m.tag}
                        </p>
                        <p className="relative mt-4 flex-1 text-[15px] leading-relaxed text-cream/75">
                          {m.description}
                        </p>

                        <div className="relative mt-6">
                          {m.cta === null ? (
                            <span className="inline-flex items-center gap-2 rounded-full border border-dashed border-gold/40 px-4 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-gold/80">
                              <Heart className="h-4 w-4" aria-hidden="true" />
                              Opening soon
                            </span>
                          ) : m.cta.external ? (
                            <a
                              href={m.cta.href}
                              target="_blank"
                              rel="noopener"
                              className="group inline-flex max-w-full items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-cream transition hover:border-fire hover:text-fire"
                            >
                              {m.cta.label}
                              <ArrowUpRight
                                className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                aria-hidden="true"
                              />
                            </a>
                          ) : (
                            <Link
                              href={m.cta.href}
                              className="group inline-flex items-center gap-2 rounded-full bg-fire px-4 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:bg-ember"
                            >
                              {m.cta.label}
                              <ArrowUpRight
                                className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                aria-hidden="true"
                              />
                            </Link>
                          )}
                        </div>
                      </article>
                    </Reveal>
                  </li>
                );
              })}
            </ol>
          </div>
        </section>

        {/* Same heart & soul */}
        <section className="relative overflow-hidden bg-char px-4 py-20 md:px-6 md:py-28">
          <div className="grain absolute inset-0" aria-hidden="true" />
          <div className="relative mx-auto max-w-6xl">
            <Reveal className="text-center">
              <Heart className="mx-auto h-10 w-10 fill-fire text-fire" aria-hidden="true" />
              <h2 className="mt-4 font-display text-5xl leading-[0.9] text-cream md:text-7xl">
                {family.values.heading}
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {family.values.items.map((v, i) => (
                <Reveal key={v.title} delay={i * 100}>
                  <div className="h-full rounded-2xl border-l-4 border-fire bg-black/35 px-6 py-6">
                    <h3 className="font-display text-3xl tracking-wide text-fire">{v.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-cream/75">{v.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Back home */}
        <section className="relative overflow-hidden bg-gradient-to-b from-char to-smoke px-4 pb-24 pt-12 md:px-6 md:pb-32">
          <div className="relative mx-auto max-w-3xl text-center">
            <Reveal>
              <div className="relative flex items-end justify-center gap-1">
                <div
                  className="absolute bottom-6 left-1/2 h-32 w-72 -translate-x-1/2 rounded-full bg-fire/30 blur-3xl"
                  aria-hidden="true"
                />
                {TRIO.map((m) => (
                  <Image
                    key={m.key}
                    src={m.src}
                    alt={m.alt}
                    width={MASCOT_SIZES[m.key].width}
                    height={MASCOT_SIZES[m.key].height}
                    sizes="200px"
                    className={`relative w-auto drop-shadow-[0_14px_18px_rgba(0,0,0,0.65)] ${m.img}`}
                  />
                ))}
              </div>
              <h2 className="mt-8 font-display text-5xl leading-[0.9] text-cream md:text-7xl">
                {family.closing.heading}
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-lg text-cream/70">{family.closing.text}</p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 rounded-full bg-fire px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white shadow-[0_18px_50px_-12px_rgba(236,73,19,0.9)] transition hover:-translate-y-0.5 hover:bg-ember"
                >
                  <Flame className="h-4 w-4" aria-hidden="true" />
                  Nico&apos;s Smokehouse Home
                </Link>
                <a
                  href={links.whatsappBooking}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:-translate-y-0.5 hover:bg-[#20bd5a]"
                >
                  <Utensils className="h-4 w-4" aria-hidden="true" />
                  Book a Table
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </>
  );
}
