import { Plus } from "lucide-react";
import { faq, links } from "@/lib/content";
import Reveal from "./Reveal";

export default function FAQ() {
  return (
    <section id="faq" className="relative overflow-hidden bg-char px-4 py-24 md:px-6 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal>
          <div className="lg:sticky lg:top-32">
            <span className="text-xs font-bold tracking-[0.3em] text-fire">{faq.eyebrow}</span>
            <h2 className="mt-4 font-display text-6xl leading-[0.9] text-cream md:text-8xl">
              Good
              <br />
              <span className="font-serif text-5xl italic text-cream/80 md:text-7xl">questions.</span>
            </h2>
            <p className="mt-6 max-w-sm text-lg text-cream/65">
              Anything else? Message us on WhatsApp — a real human (usually with sauce on their hands) will answer.
            </p>
            <a
              href={links.whatsappBooking}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-cream/25 px-6 py-3 text-sm font-bold uppercase tracking-[0.14em] text-cream transition hover:border-fire hover:text-fire"
            >
              Ask on WhatsApp
            </a>
          </div>
        </Reveal>

        <div className="divide-y divide-white/10 border-y border-white/10">
          {faq.items.map((item, index) => (
            <Reveal key={item.question} delay={index * 60}>
              <details className="group py-2" {...(index === 0 ? { open: true } : {})}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 [&::-webkit-details-marker]:hidden">
                  <h3 className="text-lg font-semibold text-cream transition-colors group-hover:text-fire md:text-xl">
                    {item.question}
                  </h3>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 text-cream transition-all duration-300 group-open:rotate-45 group-open:border-fire group-open:bg-fire">
                    <Plus className="h-4 w-4" aria-hidden="true" />
                  </span>
                </summary>
                <p className="max-w-2xl pb-6 pr-14 leading-relaxed text-cream/70">{item.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
