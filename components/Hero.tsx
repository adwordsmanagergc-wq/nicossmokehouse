import Image from "next/image";
import { MapPin } from "lucide-react";
import { hero, links, IMAGES } from "@/lib/content";
import { ICONS } from "./icons";

const CTA_VARIANTS: Record<string, string> = {
  green:
    "bg-gradient-to-b from-green-600 via-green-700 to-green-800 text-white border-t border-green-500/50 border-b-2 border-b-green-950",
  amber:
    "bg-gradient-to-b from-amber-700 via-amber-800 to-amber-900 text-amber-100 border-t border-amber-600/50 border-b-2 border-b-amber-950",
  instagram:
    "bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white",
  "green-bright":
    "bg-gradient-to-r from-green-600 via-green-500 to-green-400 text-white",
  grab: "bg-gradient-to-r from-[#00B14F] via-[#00A046] to-[#008A3C] text-white",
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Wooden-wall background with a darkening overlay for legibility */}
      <div className="absolute inset-0">
        <Image
          src={IMAGES.heroBg}
          alt={hero.bgAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-left md:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/65" />
      </div>

      {/* Faint rising smoke */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="smoke-particle absolute h-48 w-48 rounded-full bg-white/5 blur-3xl"
            style={{ left: `${18 + i * 20}%`, bottom: "8%", animationDelay: `${i * 1.2}s` }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 pb-16 pt-28 text-center">
        {/* Circular badge logo */}
        <div className="mx-auto mb-8 h-44 w-44 md:h-60 md:w-60">
          <Image
            src={IMAGES.logo}
            alt={hero.logoAlt}
            width={240}
            height={240}
            priority
            className="h-full w-full object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
          />
        </div>

        {/* Headline */}
        <div className="mb-4 inline-block rounded-lg bg-black/50 px-6 py-3 backdrop-blur-sm md:px-8 md:py-4">
          <h1 className="animate-pulse-subtle whitespace-nowrap bg-gradient-to-r from-orange-400 via-red-500 to-amber-500 bg-clip-text font-display text-4xl tracking-wider text-transparent md:text-7xl lg:text-8xl">
            {hero.headline}
          </h1>
        </div>

        {/* Sub-headline */}
        <p className="mx-auto mb-8 max-w-3xl rounded-lg border border-cream/20 bg-black/40 px-6 py-3 text-lg font-medium tracking-wide text-cream shadow-lg backdrop-blur-sm md:text-2xl lg:text-3xl">
          {hero.subheadline}
        </p>

        {/* Location pill */}
        <a
          href={links.googleMapsDirections}
          target="_blank"
          rel="noopener noreferrer"
          className="group mb-10 inline-flex items-center gap-3 rounded-full border border-brown/40 bg-smoke/50 px-6 py-3 backdrop-blur-sm transition-colors hover:bg-smoke/70"
        >
          <MapPin className="h-5 w-5 text-fire" aria-hidden="true" />
          <span className="text-sm tracking-wide text-cream/90">{hero.location}</span>
          <span className="text-sm font-medium text-fire group-hover:underline">
            {hero.directionsLabel}
          </span>
        </a>

        {/* CTAs — 2-column grid on mobile, row on larger screens */}
        <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:justify-center sm:gap-4">
          {hero.ctas.map((cta) => {
            const Icon = cta.icon ? ICONS[cta.icon] : null;
            return (
              <a
                key={cta.label}
                href={cta.href}
                {...(cta.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className={`flex w-full items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold shadow-md transition-all duration-300 hover:brightness-110 sm:w-auto sm:min-w-[190px] ${CTA_VARIANTS[cta.variant]}`}
              >
                {Icon ? <Icon className="h-4 w-4" aria-hidden="true" /> : null}
                {cta.label}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
