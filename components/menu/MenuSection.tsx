import Image from "next/image";
import { FileText, Flame } from "lucide-react";
import {
  MENU,
  HOUSE_SAUCES,
  PERI_FLAVOURS,
  EXTRA_SAUCE_PRICE,
  TAX_NOTE,
  formatK,
  type MenuItem,
} from "@/lib/menu";
import { IMAGES } from "@/lib/content";

const PDF_HREF = "/nicos-menu.pdf";

const CATEGORY_IMAGES: Record<string, { src: string; alt: string }> = {
  pit: { src: IMAGES.specialtyTexas, alt: "Smoked beef short rib from the pit at Nico's Smokehouse" },
  jamaican: {
    src: IMAGES.specialtyJamaican,
    alt: "Jerk chicken, curry goat, oxtail, rice and peas, patties and festivals",
  },
};

const HEAT: Record<string, number> = {
  "Peri Peri Mild": 1,
  "Peri Peri Hot": 2,
  "Piri Piri Extra Hot": 3,
};

function priceLabel(item: MenuItem): string {
  if (item.askUs) return "Ask us";
  if (item.per100g) return `${formatK(item.per100g)} / 100g`;
  if (item.price !== undefined) return formatK(item.price);
  if (item.options?.length === 1) return formatK(item.options[0].price);
  return "";
}

function MenuRow({ item }: { item: MenuItem }) {
  const multi = item.options && item.options.length > 1;
  return (
    <li className="break-inside-avoid border-b border-ink/10 py-5">
      <div className="flex items-baseline">
        <h4 className="font-display text-[26px] leading-none tracking-[0.02em] text-ink md:text-[28px]">
          {item.name}
          {item.options?.length === 1 ? (
            <span className="ml-2 font-body text-sm font-semibold tracking-normal text-ink/50">
              {item.options[0].label}
            </span>
          ) : null}
        </h4>
        {item.tag ? (
          <span className="ml-3 shrink-0 -translate-y-1 rounded-full bg-fire/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.15em] text-fire">
            {item.tag}
          </span>
        ) : null}
        {!multi ? (
          <>
            <span className="leader" aria-hidden="true" />
            <span className="shrink-0 font-display text-2xl text-ink">{priceLabel(item)}</span>
          </>
        ) : null}
      </div>

      {multi ? (
        <p className="mt-2 flex flex-wrap gap-x-4 gap-y-1 font-display text-xl tracking-[0.02em] text-ink">
          {item.options!.map((o) => (
            <span key={o.label}>
              <span className="font-body text-sm font-semibold uppercase tracking-[0.08em] text-ink/55">
                {o.label}
              </span>{" "}
              {formatK(o.price)}
            </span>
          ))}
        </p>
      ) : null}

      {item.description ? (
        <p className="mt-1.5 max-w-xl text-[15px] leading-relaxed text-ink/65">{item.description}</p>
      ) : null}
      {item.choice ? (
        <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-ink/45">
          {item.choice.label}: {item.choice.values.join(" · ")}
        </p>
      ) : null}
      {item.addOns ? (
        <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-fire">
          Add: {item.addOns.map((a) => `${a.label} ${formatK(a.price)}`).join(" · ")}
        </p>
      ) : null}
    </li>
  );
}

export default function MenuSection() {
  return (
    <section id="menu" className="paper relative px-4 pb-24 pt-24 text-ink md:px-6 md:pb-32 md:pt-32">
      {/* Torn edge */}
      <svg
        className="absolute inset-x-0 -top-px h-6 w-full text-smoke"
        viewBox="0 0 1200 24"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M0 0h1200v10c-30 6-55-4-80 3s-50 8-75 1-55 6-85 3-45-9-70-2-60 9-90 4-40-8-70-3-55 10-85 5-35-7-65-2-50 9-80 3-45-8-75-1-40 7-70 4-60-9-90-3-35 8-60 3-45-6-75 0-50 7-80 2-40-6-70-1-50 8-80 3V0z"
        />
      </svg>

      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="text-xs font-bold tracking-[0.3em] text-fire">NICO&apos;S SMOKEHOUSE + CARIBBEAN FOOD</p>
            <h2 className="mt-3 font-display text-[26vw] leading-[0.8] tracking-[-0.01em] text-ink sm:text-[11rem] lg:text-[13rem]">
              The Menu
            </h2>
            <p className="mt-5 max-w-xl font-serif text-2xl italic leading-snug text-ink/75">
              Smoked low &amp; slow, grilled over fire, served with island soul. Build a platter from the pit and
              add your sides.
            </p>
          </div>
          <div className="flex flex-col items-start gap-3 lg:items-end">
            <Image
              src={IMAGES.logo}
              alt=""
              width={140}
              height={140}
              className="hidden h-32 w-32 rotate-[-8deg] rounded-full opacity-90 mix-blend-multiply lg:block"
            />
            <a
              href={PDF_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-paper transition hover:bg-fire"
            >
              <FileText className="h-4 w-4" aria-hidden="true" /> Open PDF menu
            </a>
          </div>
        </div>

        {/* Jump links */}
        <nav
          aria-label="Menu sections"
          className="sticky top-16 z-20 -mx-4 mt-12 border-y-2 border-ink bg-paper/95 backdrop-blur md:top-[72px] md:-mx-6"
        >
          <div className="scrollbar-hide mx-auto flex max-w-7xl gap-1 overflow-x-auto px-4 py-2.5 md:px-6">
            {MENU.map((cat) => (
              <a
                key={cat.id}
                href={`#menu-${cat.id}`}
                className="shrink-0 rounded-full px-4 py-2 font-display text-xl tracking-[0.06em] text-ink/60 transition hover:bg-ink hover:text-paper md:text-2xl"
              >
                {cat.name}
              </a>
            ))}
            <a
              href="#menu-sauces"
              className="shrink-0 rounded-full px-4 py-2 font-display text-xl tracking-[0.06em] text-ink/60 transition hover:bg-ink hover:text-paper md:text-2xl"
            >
              Sauces
            </a>
          </div>
        </nav>

        {/* Categories */}
        {MENU.map((cat) => {
          const img = CATEGORY_IMAGES[cat.id];
          return (
            <section
              key={cat.id}
              id={`menu-${cat.id}`}
              aria-labelledby={`menu-${cat.id}-title`}
              className="scroll-mt-36 border-b-2 border-ink py-14 last-of-type:border-b-0 md:py-20"
            >
              <div className="grid gap-10 lg:grid-cols-[340px_1fr] lg:gap-16">
                <div>
                  <div className="lg:sticky lg:top-44">
                    <span className="font-serif text-2xl italic text-fire">{cat.kicker}</span>
                    <h3 id={`menu-${cat.id}-title`} className="mt-1 font-display text-6xl leading-[0.9] md:text-7xl">
                      {cat.name}
                    </h3>
                    {cat.note ? (
                      <p className="mt-4 text-sm font-semibold uppercase leading-relaxed tracking-[0.08em] text-ink/55">
                        {cat.note}
                      </p>
                    ) : null}
                    {img ? (
                      <div className="relative mt-8 hidden aspect-[4/5] overflow-hidden rounded-[24px] shadow-[0_30px_60px_-25px_rgba(22,16,10,0.6)] lg:block">
                        <Image src={img.src} alt={img.alt} fill sizes="340px" className="object-cover" />
                      </div>
                    ) : null}
                  </div>
                </div>

                <div>
                  {cat.groups.map((group, gi) => (
                    <div key={gi} className={gi > 0 ? "mt-10" : ""}>
                      {group.title ? (
                        <div className="mb-1 flex items-center gap-4">
                          <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-fire">{group.title}</h4>
                          <span className="h-px flex-1 bg-ink/15" />
                        </div>
                      ) : null}
                      {group.note ? <p className="mb-2 text-sm text-ink/55">{group.note}</p> : null}
                      <ul className={group.items.length > 3 ? "md:columns-2 md:gap-x-12" : ""}>
                        {group.items.map((item) => (
                          <MenuRow key={item.id} item={item} />
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        {/* Sauce bar */}
        <div id="menu-sauces" className="mt-6 scroll-mt-36 overflow-hidden rounded-[32px] bg-ink p-8 text-cream md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <p className="text-xs font-bold tracking-[0.3em] text-ember">THE SAUCE BAR</p>
              <h3 className="mt-3 font-display text-6xl leading-none md:text-7xl">
                16 sauces.
                <br />
                <span className="fire-text">Pick your heat.</span>
              </h3>
              <p className="mt-4 max-w-sm text-cream/65">
                Platters from the pit come with a choice of 1 sauce. Extra sauces {formatK(EXTRA_SAUCE_PRICE)} each.
              </p>
            </div>
            <div className="space-y-8">
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-cream/50">Peri Peri</p>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {PERI_FLAVOURS.map((s) => (
                    <li
                      key={s}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3"
                    >
                      <span className="font-semibold">{s}</span>
                      <span className="flex gap-0.5" aria-label={HEAT[s] ? `Heat ${HEAT[s]} of 3` : undefined}>
                        {HEAT[s]
                          ? [1, 2, 3].map((n) => (
                              <Flame
                                key={n}
                                className={`h-4 w-4 ${n <= HEAT[s] ? "fill-fire text-fire" : "text-white/15"}`}
                                aria-hidden="true"
                              />
                            ))
                          : null}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-cream/50">House Sauces</p>
                <ul className="flex flex-wrap gap-2">
                  {HOUSE_SAUCES.map((s) => (
                    <li
                      key={s}
                      className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-cream/85"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-5 border-t-2 border-ink pt-6 md:flex-row">
          <p className="text-center text-xs font-bold uppercase tracking-[0.14em] text-ink/60 md:text-left">{TAX_NOTE}</p>
          <a
            href={PDF_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border-2 border-ink px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] transition hover:bg-ink hover:text-paper"
          >
            <FileText className="h-4 w-4" aria-hidden="true" /> View PDF menu
          </a>
        </div>
      </div>
    </section>
  );
}
