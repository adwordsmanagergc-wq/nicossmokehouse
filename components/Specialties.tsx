import Image from "next/image";
import { Flame } from "lucide-react";
import { specialties } from "@/lib/content";
import Reveal from "./Reveal";

export default function Specialties() {
  return (
    <section
      id="specialties"
      className="relative overflow-hidden bg-gradient-to-b from-char via-smoke to-char px-4 py-20"
    >
      <div className="relative z-10 mx-auto max-w-7xl">
        <Reveal className="mb-14 text-center">
          <span className="text-sm font-medium tracking-[0.2em] text-fire">
            {specialties.eyebrow}
          </span>
          <h2 className="mt-2 font-display text-4xl tracking-wide text-cream md:text-6xl">
            {specialties.heading}
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-6">
          {specialties.cards.map((card, index) => (
            <Reveal
              key={card.title}
              delay={index * 120}
              className={index === 0 ? "col-span-2 md:col-span-1" : ""}
            >
              <article className="group relative h-[240px] overflow-hidden rounded-xl md:h-[360px]">
                <Image
                  src={card.image}
                  alt={card.imageAlt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-char via-char/30 to-transparent" />
                <div className="burnt-edge absolute inset-0" />

                <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-5">
                  <span className="mb-0.5 text-xs uppercase tracking-[0.18em] text-cream/70">
                    {card.subtitle}
                  </span>
                  <h3 className="mb-1 font-display text-2xl tracking-wide text-cream md:mb-2 md:text-3xl">
                    {card.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-cream/80 md:text-sm">
                    {card.description}
                  </p>
                  <Flame
                    className="absolute right-3 top-3 h-5 w-5 text-fire opacity-0 transition-opacity group-hover:opacity-100 md:right-4 md:top-4 md:h-6 md:w-6"
                    aria-hidden="true"
                  />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
