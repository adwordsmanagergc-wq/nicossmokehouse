import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { specialties } from "@/lib/content";
import Reveal from "./Reveal";

export default function Specialties() {
  return (
    <section id="specialties" className="relative overflow-hidden bg-smoke px-4 py-24 md:px-6 md:py-32">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-char to-transparent" aria-hidden="true" />
      <div className="grain absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl">
        <Reveal className="mb-14 flex flex-col justify-between gap-6 md:mb-20 md:flex-row md:items-end">
          <div>
            <span className="text-xs font-bold tracking-[0.3em] text-fire">{specialties.eyebrow}</span>
            <h2 className="mt-4 font-display text-6xl leading-[0.9] text-cream md:text-8xl">
              Three fires,
              <br />
              <span className="font-serif text-5xl italic text-cream/80 md:text-7xl">one kitchen.</span>
            </h2>
          </div>
          <p className="max-w-sm text-lg text-cream/65">{specialties.intro}</p>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-3 md:gap-6">
          {specialties.cards.map((card, index) => (
            <Reveal key={card.title} delay={index * 120} className={index === 1 ? "md:mt-12" : ""}>
              <Link
                href={card.href}
                aria-label={`${card.title} — read more`}
                className="group relative block h-[520px] overflow-hidden rounded-[28px] ring-1 ring-white/10 md:h-[600px]"
              >
                <Image
                  src={card.image}
                  alt={card.imageAlt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition duration-[1.2s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10 transition-opacity duration-500 group-hover:via-black/55" />

                <span className="absolute left-6 top-5 font-display text-7xl leading-none text-white/15 transition-colors duration-500 group-hover:text-fire/70">
                  0{index + 1}
                </span>
                <span className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-cream backdrop-blur-md transition-all duration-500 group-hover:rotate-45 group-hover:bg-fire">
                  <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                </span>

                <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                  <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-ember">{card.subtitle}</span>
                  <h3 className="mt-2 font-display text-5xl leading-none text-cream md:text-6xl">{card.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-cream/75">{card.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {card.dishes.map((d) => (
                      <span
                        key={d}
                        className="rounded-full border border-white/15 bg-black/30 px-3 py-1 text-xs font-semibold text-cream/85 backdrop-blur"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
