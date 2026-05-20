import { faq } from "@/lib/content";
import Reveal from "./Reveal";

export default function FAQ() {
  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-gradient-to-b from-char via-smoke to-char px-4 py-16"
    >
      <div className="relative z-10 mx-auto max-w-4xl">
        <Reveal className="mb-12 text-center">
          <span className="text-sm font-medium tracking-[0.2em] text-fire">{faq.eyebrow}</span>
          <h2 className="mt-2 font-display text-4xl tracking-wide text-cream md:text-5xl">
            {faq.heading}
          </h2>
        </Reveal>

        <div className="space-y-4">
          {faq.items.map((item, index) => (
            <Reveal key={item.question} delay={index * 80}>
              <div className="rounded-xl border border-amber-700/30 bg-black/40 p-6">
                <h3 className="mb-2 text-lg font-bold text-cream">{item.question}</h3>
                <p className="text-sm leading-relaxed text-cream/80">{item.answer}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
