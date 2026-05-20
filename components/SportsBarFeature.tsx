import Image from "next/image";
import { Instagram } from "lucide-react";
import { sportsBar } from "@/lib/content";
import Reveal from "./Reveal";

export default function SportsBarFeature() {
  // Doubled for a seamless looping carousel.
  const loop = [...sportsBar.images, ...sportsBar.images];

  return (
    <section
      id="sports-bar"
      className="relative overflow-hidden bg-gradient-to-b from-char via-smoke to-char px-4 py-16"
    >
      <div className="relative z-10 mx-auto max-w-6xl">
        <Reveal className="mb-8 text-center">
          <span className="inline-block animate-pulse rounded-full bg-gold px-6 py-2 text-sm font-bold tracking-[0.2em] text-char">
            {sportsBar.badge}
          </span>
        </Reveal>

        <Reveal className="mb-10 text-center">
          <h2 className="mb-2 font-display text-4xl tracking-wider text-cream md:text-6xl lg:text-7xl">
            {sportsBar.heading}
          </h2>
          <p className="text-xl font-medium text-gold md:text-2xl">{sportsBar.subheading}</p>
        </Reveal>

        {/* Sport tags */}
        <Reveal className="mb-6 flex flex-wrap justify-center gap-3">
          {sportsBar.sports.map((sport) => (
            <span
              key={sport.label}
              className="rounded-lg bg-brown/30 px-4 py-2 text-sm font-medium text-cream"
            >
              <span aria-hidden="true">{sport.emoji}</span> {sport.label}
            </span>
          ))}
        </Reveal>

        {/* Image carousel */}
        <Reveal className="overflow-hidden rounded-2xl border border-amber-700/30 shadow-2xl">
          <div className="flex w-max animate-marquee-sports">
            {loop.map((image, index) => (
              <div
                key={index}
                className="relative h-[260px] w-[380px] shrink-0 md:h-[440px] md:w-[620px]"
              >
                <Image
                  src={image.src}
                  alt={index < sportsBar.images.length ? image.alt : ""}
                  fill
                  sizes="(min-width: 768px) 620px, 380px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </Reveal>

        {/* Description */}
        <Reveal>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-cream md:text-xl">
            {sportsBar.descriptionLead}{" "}
            <span className="font-semibold text-gold">{sportsBar.descriptionHighlight}</span>
          </p>
        </Reveal>

        {/* Feature cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {sportsBar.features.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 120}>
              <div className="h-full rounded-xl border border-amber-700/30 bg-black/40 p-6 text-center">
                <div className="mb-3 text-4xl" aria-hidden="true">
                  {feature.emoji}
                </div>
                <h3 className="mb-2 text-lg font-bold text-cream">{feature.title}</h3>
                <p className="text-sm text-cream/70">{feature.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Follow CTA */}
        <Reveal className="mt-10 text-center">
          <p className="mb-4 text-cream/80">{sportsBar.ctaNote}</p>
          <a
            href={sportsBar.cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 px-6 py-3 font-medium text-white transition-all hover:brightness-110"
          >
            <Instagram className="h-5 w-5" aria-hidden="true" />
            {sportsBar.cta.label}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
