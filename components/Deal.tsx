import { ArrowRight, Clock } from "lucide-react";
import { deal } from "@/lib/content";
import Reveal from "./Reveal";

export default function Deal() {
  return (
    <section className="relative overflow-hidden bg-char px-4 py-20 md:px-6 md:py-28">
      <Reveal className="relative mx-auto max-w-7xl overflow-hidden rounded-[36px] bg-gradient-to-br from-fire via-[#d63c0c] to-[#8f2406] px-6 py-12 shadow-[0_40px_100px_-30px_rgba(236,73,19,0.7)] md:px-14 md:py-16">
        <div className="grain absolute inset-0" aria-hidden="true" />
        <span
          className="pointer-events-none absolute -right-6 -top-10 select-none font-display text-[16rem] leading-none text-black/10 md:-top-16 md:text-[26rem]"
          aria-hidden="true"
        >
          10%
        </span>
        <div className="relative grid items-center gap-10 md:grid-cols-[auto_1fr_auto]">
          <div className="flex h-28 w-28 shrink-0 flex-col items-center justify-center rounded-full border-2 border-dashed border-white/50 text-white md:h-36 md:w-36">
            <span className="font-display text-5xl leading-none md:text-6xl">10%</span>
            <span className="text-xs font-bold uppercase tracking-[0.25em]">off</span>
          </div>
          <div className="text-white">
            <p className="flex items-center gap-2 text-xs font-bold tracking-[0.3em] text-white/80">
              <Clock className="h-4 w-4" aria-hidden="true" /> {deal.eyebrow}
            </p>
            <h2 className="mt-2 font-display text-5xl leading-[0.95] md:text-7xl">{deal.heading}</h2>
            <p className="mt-3 max-w-2xl text-lg text-white/85">{deal.body}</p>
          </div>
          <a
            href={deal.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-char px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:-translate-y-0.5 hover:bg-black"
          >
            {deal.cta}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </a>
        </div>
      </Reveal>
    </section>
  );
}
