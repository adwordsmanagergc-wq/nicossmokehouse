import Link from "next/link";
import { MapPin } from "lucide-react";
import Reveal from "@/components/Reveal";

const CTA_VARIANTS: Record<string, string> = {
  green: "bg-[#25D366] text-white hover:brightness-110",
  fire: "bg-fire text-white hover:brightness-110",
  wood: "border border-amber-700/50 bg-brown/40 text-cream hover:bg-brown/60",
};

export default function BlogClosing({
  heading = "Visit Nico's Smokehouse",
  lines,
  ctas,
  footerNote,
}: {
  heading?: string;
  lines: { label: string; value: string }[];
  ctas: { label: string; href: string; variant: keyof typeof CTA_VARIANTS }[];
  footerNote?: string;
}) {
  return (
    <section className="bg-smoke px-4 pb-20 pt-16">
      <Reveal className="mx-auto max-w-3xl rounded-2xl border border-amber-700/30 bg-black/40 p-8 text-center md:p-10">
        <MapPin className="mx-auto h-8 w-8 text-fire" aria-hidden="true" />
        <h2 className="mt-3 font-display text-3xl tracking-wide text-cream md:text-4xl">
          {heading}
        </h2>

        <dl className="mx-auto mt-6 grid max-w-md gap-2 text-sm md:text-base">
          {lines.map((line) => (
            <div
              key={line.label}
              className="flex justify-between gap-4 border-b border-brown/20 pb-2 last:border-b-0"
            >
              <dt className="font-semibold text-brown">{line.label}</dt>
              <dd className="text-right text-cream">{line.value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {ctas.map((cta) => {
            const cls = `inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold transition ${CTA_VARIANTS[cta.variant]}`;
            return cta.href.startsWith("/") ? (
              <Link key={cta.label} href={cta.href} className={cls}>
                {cta.label}
              </Link>
            ) : (
              <a
                key={cta.label}
                href={cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cls}
              >
                {cta.label}
              </a>
            );
          })}
        </div>

        {footerNote ? (
          <p className="mt-8 text-xs italic text-brown/70">{footerNote}</p>
        ) : null}
      </Reveal>
    </section>
  );
}
