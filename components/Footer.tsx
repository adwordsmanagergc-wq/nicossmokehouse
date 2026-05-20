import Image from "next/image";
import { ChevronDown, Instagram, Utensils } from "lucide-react";
import { footer, IMAGES } from "@/lib/content";
import { ICONS } from "./icons";

const ACTION_VARIANTS: Record<string, string> = {
  green: "bg-green-600 text-white hover:bg-green-500",
  fire: "bg-fire text-white hover:brightness-110",
  wood: "border border-amber-700/50 bg-brown/40 text-cream hover:bg-brown/60",
};

/** Footer dropdown built on native <details> — no JavaScript, fully crawlable. */
function FooterMenu({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <details className="group">
      <summary className="mx-auto flex w-fit cursor-pointer list-none items-center gap-2 text-sm text-cream/60 transition-colors hover:text-fire [&::-webkit-details-marker]:hidden">
        <span>{label}</span>
        <ChevronDown
          className="h-4 w-4 transition-transform group-open:rotate-180"
          aria-hidden="true"
        />
      </summary>
      <div className="mx-auto mt-2 w-fit rounded-lg border border-brown/20 bg-black/60 px-4 py-2">
        {children}
      </div>
    </details>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-amber-900/50 px-4 py-16">
      {/* Wooden-wall background */}
      <div className="absolute inset-0">
        <Image
          src={IMAGES.heroBg}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        <div className="inline-block rounded-2xl bg-black/60 px-8 py-8 backdrop-blur-sm md:px-12 md:py-10">
          <div className="mx-auto mb-6 h-20 w-20 overflow-hidden rounded-full">
            <Image
              src={IMAGES.logo}
              alt={footer.logoAlt}
              width={80}
              height={80}
              className="h-full w-full object-cover"
            />
          </div>

          <p className="mb-6 text-brown">{footer.tagline}</p>

          <div className="mb-6 flex justify-center">
            <a
              href={footer.instagram.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-cream/70 transition-colors hover:text-fire"
            >
              <Instagram className="h-5 w-5" aria-hidden="true" />
              {footer.instagram.label}
            </a>
          </div>

          {/* Primary action buttons */}
          <div className="mb-6 flex flex-wrap justify-center gap-4">
            {footer.actions.map((action) => {
              const Icon = ICONS[action.icon];
              return (
                <a
                  key={action.label}
                  href={action.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 rounded-lg px-6 py-3 font-medium transition-colors ${ACTION_VARIANTS[action.variant]}`}
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                  {action.label}
                </a>
              );
            })}
          </div>

          {/* Blogs + Catering link menus */}
          <div className="mb-8 space-y-3">
            <FooterMenu label={footer.blogs.label}>
              <ul className="space-y-1">
                {footer.blogs.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="block px-2 py-1 text-sm text-cream/70 transition-colors hover:text-fire"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </FooterMenu>

            <FooterMenu label={footer.catering.label}>
              <p className="px-2 pb-1 pt-1 text-xs font-semibold uppercase tracking-wide text-brown">
                Areas
              </p>
              <ul className="mb-2 grid grid-cols-2 gap-x-4">
                {footer.catering.areas.map((area) => (
                  <li key={area.href}>
                    <a
                      href={area.href}
                      className="block px-2 py-1 text-sm text-cream/70 transition-colors hover:text-fire"
                    >
                      {area.label}
                    </a>
                  </li>
                ))}
              </ul>
              <ul className="space-y-1 border-t border-brown/20 pt-2">
                {footer.catering.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="block px-2 py-1 text-sm text-cream/70 transition-colors hover:text-fire"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </FooterMenu>
          </div>

          {/* Final Book a Table CTA */}
          <a
            href={footer.finalCta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-8 py-3 font-semibold text-white transition-all hover:scale-105 hover:bg-[#20bd5a]"
          >
            <Utensils className="h-5 w-5" aria-hidden="true" />
            {footer.finalCta.label}
          </a>

          <p className="text-sm text-brown/70">
            &copy; {year} {footer.copyright}
          </p>
          <p className="mt-3 text-xs text-brown/50">{footer.credit}</p>
        </div>
      </div>
    </footer>
  );
}
