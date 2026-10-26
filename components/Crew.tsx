import Image from "next/image";
import { crew, MASCOT_SIZES } from "@/lib/content";
import Reveal from "./Reveal";

// Card tilt + glow colour per mascot
const STYLE = {
  nico: { tilt: "md:-rotate-2", glow: "bg-fire/35" },
  cluck: { tilt: "md:rotate-1 md:-translate-y-6", glow: "bg-gold/30" },
  hammer: { tilt: "md:rotate-2", glow: "bg-[#d9667a]/30" },
};

/** "Meet the Crew" — the three Nico's mascots on charred poster cards. */
export default function Crew() {
  return (
    <section id="crew" className="relative overflow-hidden bg-char px-4 py-24 md:px-6 md:py-32">
      <div className="grain absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl">
        <Reveal className="text-center">
          <span className="text-xs font-bold tracking-[0.3em] text-fire">{crew.eyebrow}</span>
          <h2 className="mt-4 font-display text-6xl leading-[0.9] text-cream md:text-8xl">
            {crew.headingTop}
            <br />
            <span className="fire-text">{crew.headingAccent}</span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg font-serif text-xl italic text-cream/70">{crew.intro}</p>
        </Reveal>

        {/* Mobile: swipeable row. Desktop: three tilted cards. */}
        <div className="scrollbar-hide -mx-4 mt-14 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-6 pt-8 md:mx-0 md:mt-20 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:px-0">
          {crew.members.map((m, i) => (
            <Reveal key={m.key} delay={i * 120} className="w-[78%] shrink-0 snap-center sm:w-[60%] md:w-auto">
              <article
                className={`group relative h-full rounded-[28px] bg-gradient-to-b from-smoke to-[#120c07] px-6 pb-7 pt-4 ring-1 ring-white/10 transition duration-500 md:hover:-translate-y-2 md:hover:rotate-0 ${STYLE[m.key].tilt}`}
              >
                <div className="burnt-edge pointer-events-none absolute inset-0 rounded-[28px]" aria-hidden="true" />
                <div className="relative mx-auto -mt-12 h-72 w-full md:h-80">
                  <div
                    className={`absolute bottom-14 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full blur-3xl transition-opacity duration-500 group-hover:opacity-100 md:opacity-70 ${STYLE[m.key].glow}`}
                    aria-hidden="true"
                  />
                  <Image
                    src={m.image}
                    alt={m.alt}
                    width={MASCOT_SIZES[m.key].width}
                    height={MASCOT_SIZES[m.key].height}
                    sizes="(min-width: 768px) 300px, 70vw"
                    className="relative mx-auto h-full w-auto object-contain drop-shadow-[0_18px_25px_rgba(0,0,0,0.6)] transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="relative mt-5 text-center text-[11px] font-bold uppercase tracking-[0.25em] text-ember">
                  {m.role}
                </p>
                <p className="relative mt-3 text-center text-[15px] leading-relaxed text-cream/75">{m.bio}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
