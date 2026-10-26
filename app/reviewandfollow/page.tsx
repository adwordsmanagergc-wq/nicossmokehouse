import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Instagram, Star } from "lucide-react";
import { reviewAndFollow as page, site, IMAGES, MASCOT_SIZES } from "@/lib/content";
import Embers from "@/components/Embers";

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  alternates: { canonical: "/reviewandfollow" },
  // Utility page for table QR codes / link-in-bio — keep it out of search results.
  robots: { index: false, follow: true },
};

// Nico centre stage, flanked by Cluck and Hammer
const TRIO = [
  {
    key: "cluck" as const,
    src: IMAGES.mascotCluck,
    alt: "Cluck the rooster",
    wrap: "z-0 -mr-1",
    img: "h-36 -rotate-6 [@media(max-height:700px)]:h-28",
    delay: "0.15s",
    bob: "-1.3s",
  },
  {
    key: "nico" as const,
    src: IMAGES.mascotNico,
    alt: "Nico the bull",
    wrap: "z-10",
    img: "h-44 [@media(max-height:700px)]:h-36",
    delay: "0.05s",
    bob: "0s",
  },
  {
    key: "hammer" as const,
    src: IMAGES.mascotHammer,
    alt: "Hammer the pig",
    wrap: "z-0 -ml-1",
    img: "h-36 rotate-6 [@media(max-height:700px)]:h-28",
    delay: "0.25s",
    bob: "-2.6s",
  },
];

export default function ReviewAndFollowPage() {
  return (
    <main
      data-bare-page
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-char"
    >
      {/* Background: the flag wall in deep shadow, lit from below */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <Image
          src={IMAGES.heroBg}
          alt=""
          fill
          priority
          sizes="100vw"
          className="animate-slow-zoom object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-char/80 via-char/90 to-char" />
        <div className="absolute -bottom-48 left-1/2 h-[480px] w-[640px] -translate-x-1/2 rounded-full bg-fire/30 blur-[120px]" />
      </div>
      <Embers count={16} />
      <div className="grain absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto flex w-full max-w-md flex-1 flex-col items-center justify-center px-5 pb-[max(env(safe-area-inset-bottom),2rem)] pt-[max(env(safe-area-inset-top),2.5rem)] text-center">
        {/* The crew: Cluck · Nico · Hammer */}
        <Link
          href="/"
          aria-label={`${site.name} — home`}
          className="relative flex items-end justify-center"
        >
          <div
            className="absolute bottom-6 left-1/2 h-32 w-64 -translate-x-1/2 rounded-full bg-fire/35 blur-3xl"
            aria-hidden="true"
          />
          {TRIO.map((m) => (
            <span
              key={m.key}
              className={`hero-in relative block ${m.wrap}`}
              style={{ animationDelay: m.delay }}
            >
              <span className="block animate-bob" style={{ animationDelay: m.bob }}>
                <Image
                  src={m.src}
                  alt={m.alt}
                  width={MASCOT_SIZES[m.key].width}
                  height={MASCOT_SIZES[m.key].height}
                  priority
                  sizes="140px"
                  className={`w-auto drop-shadow-[0_14px_18px_rgba(0,0,0,0.65)] ${m.img}`}
                />
              </span>
            </span>
          ))}
        </Link>

        <p
          className="hero-in mt-6 text-[11px] [@media(max-height:700px)]:mt-4 font-bold uppercase tracking-[0.32em] text-fire"
          style={{ animationDelay: "0.15s" }}
        >
          {page.eyebrow}
        </p>

        <h1
          className="hero-in mt-3 font-display text-[17vw] leading-[0.85] text-cream sm:text-7xl [@media(max-height:700px)]:text-[14vw]"
          style={{ animationDelay: "0.25s" }}
        >
          {page.headingTop}
          <br />
          <span className="fire-text">{page.headingAccent}</span>
        </h1>

        <p
          className="hero-in mt-4 max-w-xs font-serif text-lg italic [@media(max-height:700px)]:text-base leading-snug text-cream/80"
          style={{ animationDelay: "0.35s" }}
        >
          {page.subheading}
        </p>

        <div className="mt-9 grid w-full gap-4 [@media(max-height:700px)]:mt-6 [@media(max-height:700px)]:gap-3">
          {/* Google review — primary action */}
          <a
            href={page.review.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-in group flex min-h-[84px] items-center gap-3.5 rounded-2xl bg-gradient-to-br from-ember via-fire to-[#c43a0c] px-5 py-4 text-left text-white shadow-[0_20px_50px_-15px_rgba(236,73,19,0.9)] ring-1 ring-white/15 transition active:scale-[0.98] md:hover:-translate-y-0.5"
            style={{ animationDelay: "0.45s" }}
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-black/20">
              <Star className="h-6 w-6 fill-gold text-gold" aria-hidden="true" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block whitespace-nowrap font-display text-[clamp(1.35rem,6.4vw,1.65rem)] leading-none tracking-wide">
                {page.review.label}
              </span>
              <span className="mt-1.5 flex items-center gap-2 text-sm font-medium text-white/85">
                <span className="flex shrink-0" aria-hidden="true">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
                  ))}
                </span>
                <span className="truncate">{page.review.sub}</span>
              </span>
            </span>
            <ArrowUpRight
              className="h-6 w-6 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>

          {/* Instagram follow — gradient-bordered card */}
          <a
            href={page.follow.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-in group rounded-2xl bg-gradient-to-br from-[#feda75] via-[#d62976] to-[#4f5bd5] p-[1.5px] shadow-[0_20px_50px_-20px_rgba(214,41,118,0.7)] transition active:scale-[0.98] md:hover:-translate-y-0.5"
            style={{ animationDelay: "0.55s" }}
          >
            <span className="flex min-h-[82px] items-center gap-3.5 rounded-[15px] bg-char/95 px-5 py-4 text-left text-cream">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#feda75] via-[#d62976] to-[#4f5bd5]">
                <Instagram className="h-6 w-6 text-white" aria-hidden="true" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block whitespace-nowrap font-display text-[clamp(1.35rem,6.4vw,1.65rem)] leading-none tracking-wide">
                  {page.follow.label}
                </span>
                <span className="mt-1.5 block text-sm font-medium text-cream/70">
                  {page.follow.sub}
                </span>
              </span>
              <ArrowUpRight
                className="h-6 w-6 shrink-0 text-cream/80 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </span>
          </a>
        </div>

        <p
          className="hero-in mt-10 text-xs [@media(max-height:700px)]:mt-7 font-semibold uppercase tracking-[0.28em] text-brown"
          style={{ animationDelay: "0.65s" }}
        >
          {page.signoff}
        </p>
        <Link
          href="/"
          className="hero-in mt-3 text-sm text-cream/50 underline-offset-4 transition hover:text-cream hover:underline"
          style={{ animationDelay: "0.7s" }}
        >
          {site.name} · {site.area}, {site.address.region}
        </Link>
      </div>
    </main>
  );
}
