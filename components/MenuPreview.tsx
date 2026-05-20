import Image from "next/image";
import { Utensils } from "lucide-react";
import { menuPreview } from "@/lib/content";
import Reveal from "./Reveal";

export default function MenuPreview() {
  // Rendered twice so the marquee loops seamlessly (-50% translate).
  const loop = [...menuPreview.dishes, ...menuPreview.dishes];

  return (
    <section
      id="menu"
      className="relative overflow-hidden bg-gradient-to-b from-char via-smoke to-char py-16"
    >
      <Reveal className="mb-10 px-4 text-center">
        <span className="text-sm font-medium tracking-[0.2em] text-fire">
          {menuPreview.eyebrow}
        </span>
        <h2 className="mt-2 font-display text-4xl tracking-wide text-cream md:text-5xl">
          {menuPreview.heading}
        </h2>
      </Reveal>

      {/* Continuous photo marquee (pauses on hover) */}
      <div className="group relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-smoke to-transparent md:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-smoke to-transparent md:w-24" />

        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
          {loop.map((dish, index) => (
            <div key={index} className="shrink-0 px-2">
              <div className="relative h-48 w-72 overflow-hidden rounded-lg shadow-xl md:h-56 md:w-80">
                <Image
                  src={dish.src}
                  alt={index < menuPreview.dishes.length ? dish.alt : ""}
                  fill
                  sizes="320px"
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <Reveal className="mt-10 px-4 text-center">
        <a
          href={menuPreview.cta.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-brown/50 bg-smoke px-8 py-4 font-medium text-cream transition-all hover:bg-brown/30"
        >
          <Utensils className="h-5 w-5" aria-hidden="true" />
          {menuPreview.cta.label}
        </a>
      </Reveal>
    </section>
  );
}
