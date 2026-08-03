import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Flame, Utensils } from "lucide-react";
import { links } from "@/lib/content";

type CtaVariant = "green" | "fire";

type CTA = {
  label: string;
  href: string;
  icon?: "flame" | "utensils";
  external?: boolean;
  variant?: CtaVariant;
};

const ICONS = { flame: Flame, utensils: Utensils };
const CTA_STYLE: Record<CtaVariant, string> = {
  green: "bg-[#25D366] hover:brightness-110",
  fire: "bg-fire hover:brightness-110",
};

const DEFAULT_CTAS: CTA[] = [
  { label: "Book a Table", href: links.whatsappBooking, icon: "utensils", external: true, variant: "green" },
  { label: "Order on GoFood", href: links.gofood, icon: "flame", external: true, variant: "fire" },
];

export default function BlogHero({
  image,
  eyebrow,
  title,
  subtitle,
  meta,
  ctas = DEFAULT_CTAS,
}: {
  image: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  meta: string;
  ctas?: CTA[];
}) {
  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-32">
      <div className="absolute inset-0">
        <Image src={image} alt="" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-smoke" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-2 text-sm text-cream/70 transition hover:text-fire"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to Home
        </Link>
        <span className="block text-sm font-medium tracking-[0.2em] text-fire">
          {eyebrow.toUpperCase()}
        </span>
        <h1 className="mt-3 font-display text-4xl tracking-wide text-cream md:text-6xl lg:text-7xl">
          {title}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-cream md:text-xl">{subtitle}</p>
        <p className="mt-3 text-sm text-brown">{meta}</p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {ctas.map((cta) => {
            const Icon = cta.icon ? ICONS[cta.icon] : null;
            const cls = `inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-white shadow-lg transition ${CTA_STYLE[cta.variant ?? "green"]}`;
            if (cta.external) {
              return (
                <a
                  key={cta.label}
                  href={cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cls}
                >
                  {Icon ? <Icon className="h-5 w-5" aria-hidden="true" /> : null}
                  {cta.label}
                </a>
              );
            }
            return (
              <Link key={cta.label} href={cta.href} className={cls}>
                {Icon ? <Icon className="h-5 w-5" aria-hidden="true" /> : null}
                {cta.label}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
