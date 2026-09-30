import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cateringTeaser, footer, links, IMAGES } from "@/lib/content";
import Reveal from "./Reveal";

export default function CateringTeaser() {
  return (
    <section id="catering" className="relative overflow-hidden bg-char px-4 py-24 md:px-6 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative">
          <div className="relative aspect-square overflow-hidden rounded-[32px] ring-1 ring-white/10">
            <Image
              src={IMAGES.specialtyJamaican}
              alt="A Caribbean catering spread — jerk chicken, curry goat, oxtail, patties, festivals and sides"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-char/85 p-5 backdrop-blur-xl sm:left-auto sm:right-[-1.5rem] sm:w-72">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-fire">We deliver the feast to</p>
            <p className="mt-2 text-sm leading-relaxed text-cream/80">
              {footer.catering.areas.map((a) => a.label).join(" · ")}
            </p>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="text-xs font-bold tracking-[0.3em] text-fire">{cateringTeaser.eyebrow}</span>
            <h2 className="mt-4 font-display text-6xl leading-[0.9] text-cream md:text-8xl">
              {cateringTeaser.heading}
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-cream/70">{cateringTeaser.body}</p>
          </Reveal>

          <Reveal delay={120}>
            <ul className="mt-10 divide-y divide-white/10 border-y border-white/10">
              {cateringTeaser.cuisines.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="group flex items-center justify-between py-5 font-display text-3xl tracking-wide text-cream transition-colors hover:text-fire md:text-4xl"
                  >
                    {c.label}
                    <ArrowUpRight
                      className="h-7 w-7 text-cream/40 transition-all duration-300 group-hover:rotate-45 group-hover:text-fire"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={200} className="mt-10 flex flex-wrap gap-3">
            <a
              href={links.whatsappCatering}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-fire px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:-translate-y-0.5 hover:bg-ember"
            >
              Get a catering quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <Link
              href="/catering-bali"
              className="inline-flex items-center gap-2 rounded-full border border-cream/25 px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-cream transition hover:border-cream/60"
            >
              All catering
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
