import Image from "next/image";
import { story, IMAGES } from "@/lib/content";
import Reveal from "./Reveal";

const FLAGS = [
  { name: "Texas", note: "Brisket, ribs & sausage over post-oak smoke", color: "from-[#BF0A30] to-[#002868]" },
  { name: "Jamaica", note: "Jerk, curry goat, oxtail & festivals", color: "from-[#009B3A] to-[#FED100]" },
  { name: "Portugal", note: "Flame-grilled peri peri, mild to extra hot", color: "from-[#046A38] to-[#DA291C]" },
];

export default function Story() {
  return (
    <section id="story" className="relative overflow-hidden bg-char px-4 pb-24 pt-32 md:px-6 md:pb-32 md:pt-40">
      <div className="grain absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] ring-1 ring-white/10 sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src={IMAGES.heroBg}
              alt={story.imageAlt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-char/80 via-transparent to-transparent" />
            <div className="absolute inset-x-6 bottom-6 flex flex-wrap gap-2">
              {FLAGS.map((f) => (
                <span
                  key={f.name}
                  className="rounded-full border border-white/15 bg-black/55 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-cream backdrop-blur-md"
                >
                  {f.name}
                </span>
              ))}
            </div>
          </div>
          <div className="absolute -right-4 -top-6 hidden rotate-6 rounded-2xl bg-cream px-5 py-4 text-ink shadow-2xl sm:block md:-right-8">
            <p className="font-display text-4xl leading-none">Est. Canggu</p>
            <p className="mt-1 text-xs font-bold uppercase tracking-[0.2em] text-fire">BBQ · Caribbean · Grill</p>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <span className="text-xs font-bold tracking-[0.3em] text-fire">{story.eyebrow}</span>
            <h2 className="mt-4 font-display text-6xl leading-[0.9] text-cream md:text-8xl">
              {story.heading.split(". ").map((part, i, arr) => (
                <span key={i} className={i === arr.length - 1 ? "block fire-text" : "block"}>
                  {part}
                  {i < arr.length - 1 ? "." : ""}
                </span>
              ))}
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-cream/75">
              {story.paragraphs.map((p, i) => (
                <p key={i} className={i === 0 ? "font-serif text-2xl italic leading-snug text-cream/90" : ""}>
                  {p}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={200}>
            <ul className="mt-10 space-y-3">
              {FLAGS.map((f) => (
                <li key={f.name} className="flex items-center gap-4">
                  <span className={`h-8 w-1.5 rounded-full bg-gradient-to-b ${f.color}`} aria-hidden="true" />
                  <span className="w-24 font-display text-2xl tracking-wide text-cream">{f.name}</span>
                  <span className="text-sm text-cream/60">{f.note}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>

      {/* Stats */}
      <div className="relative mx-auto mt-20 grid max-w-7xl grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:mt-28 md:grid-cols-4">
        {story.stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 90} className="bg-char">
            <div className="px-6 py-8 text-center md:py-10">
              <p className="fire-text font-display text-6xl leading-none md:text-7xl">{s.value}</p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-cream/60">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
