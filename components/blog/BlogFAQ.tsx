import { ChevronDown } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function BlogFAQ({
  eyebrow = "FREQUENTLY ASKED",
  heading = "QUESTIONS",
  items,
}: {
  eyebrow?: string;
  heading?: string;
  items: { question: string; answer: string }[];
}) {
  return (
    <section className="bg-gradient-to-b from-char to-smoke px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <Reveal className="text-center">
          <span className="text-sm font-medium tracking-[0.2em] text-fire">{eyebrow}</span>
          <h2 className="mt-2 font-display text-3xl tracking-wide text-cream md:text-5xl">
            {heading}
          </h2>
        </Reveal>

        <div className="mt-10 space-y-3">
          {items.map((item, i) => (
            <Reveal key={item.question} delay={i * 50}>
              <details className="group rounded-xl border border-amber-700/30 bg-black/40 p-5 open:bg-black/55">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 [&::-webkit-details-marker]:hidden">
                  <span className="text-base font-semibold text-cream md:text-lg">
                    {item.question}
                  </span>
                  <ChevronDown
                    className="h-5 w-5 shrink-0 text-fire transition-transform group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-cream/80 md:text-base">
                  {item.answer}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
