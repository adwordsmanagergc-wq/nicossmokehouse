import Image from "next/image";
import Link from "next/link";
import { Instagram, MapPin, Utensils } from "lucide-react";
import { footer, links, site, visit, IMAGES } from "@/lib/content";
import { ICONS } from "./icons";

function Column({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-[0.25em] text-fire">{title}</p>
      <ul className="mt-4 space-y-2.5">
        {items.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-sm text-cream/65 transition-colors hover:text-cream">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-[#120c07] px-4 pb-28 pt-20 md:px-6 md:pb-10">
      <div className="grain absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl">
        {/* Big CTA */}
        <div className="flex flex-col items-start justify-between gap-8 border-b border-white/10 pb-14 md:flex-row md:items-end">
          <h2 className="font-display text-6xl leading-[0.88] text-cream md:text-[8rem]">
            Hungry yet?
            <br />
            <span className="fire-text">Pull up a chair.</span>
          </h2>
          <a
            href={footer.finalCta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#25D366] px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:-translate-y-0.5 hover:bg-[#20bd5a]"
          >
            <Utensils className="h-5 w-5" aria-hidden="true" />
            {footer.finalCta.label}
          </a>
        </div>

        <div className="grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-4">
              <Image
                src={IMAGES.logo}
                alt={footer.logoAlt}
                width={72}
                height={72}
                className="h-16 w-16 rounded-full"
              />
              <div>
                <p className="font-display text-3xl leading-none text-cream">{site.name}</p>
                <p className="mt-1 text-sm text-brown">{footer.tagline}</p>
              </div>
            </div>
            <a
              href={links.googleMapsDirections}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-start gap-2 text-sm text-cream/65 transition hover:text-cream"
            >
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-fire" aria-hidden="true" />
              {visit.address}
            </a>
            <p className="mt-2 pl-6 text-sm text-cream/65">{visit.hours}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {footer.actions.map((action) => {
                const Icon = ICONS[action.icon];
                return (
                  <a
                    key={action.label}
                    href={action.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-cream/80 transition hover:border-fire hover:text-fire"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    {action.label}
                  </a>
                );
              })}
              <a
                href={footer.instagram.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-cream/80 transition hover:border-fire hover:text-fire"
              >
                <Instagram className="h-4 w-4" aria-hidden="true" />
                {footer.instagram.label}
              </a>
            </div>
          </div>

          <Column title={footer.blogs.label} items={footer.blogs.links} />
          <Column title="Catering" items={footer.catering.links} />
          <Column title="Catering Areas" items={footer.catering.areas} />
        </div>

        <div className="flex flex-col gap-2 border-t border-white/10 pt-8 text-xs text-brown/80 md:flex-row md:justify-between">
          <p>
            &copy; {year} {footer.copyright}
          </p>
          <p>{footer.credit}</p>
        </div>
      </div>
    </footer>
  );
}
