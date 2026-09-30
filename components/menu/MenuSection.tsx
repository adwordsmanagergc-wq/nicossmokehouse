"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Check, Download, Flame, Plus, ShoppingBag } from "lucide-react";
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
import { useOrder } from "../order/OrderContext";

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

function AddButton({
  label,
  price,
  onAdd,
  suffix,
}: {
  label?: string;
  price: number;
  onAdd: () => void;
  suffix?: string;
}) {
  const [added, setAdded] = useState(false);
  const timer = useRef<number>();
  return (
    <button
      type="button"
      onClick={() => {
        onAdd();
        setAdded(true);
        window.clearTimeout(timer.current);
        timer.current = window.setTimeout(() => setAdded(false), 1100);
      }}
      className={`group/add inline-flex items-center gap-2 rounded-full border py-1.5 pl-3 pr-1.5 text-sm font-bold transition ${
        added
          ? "border-emerald-700 bg-emerald-700 text-white"
          : "border-ink/15 bg-white/70 text-ink hover:border-fire hover:bg-fire hover:text-white"
      }`}
      aria-label={`Add ${label ? label + " " : ""}${formatK(price)}${suffix ?? ""} to order`}
    >
      {label ? <span className="font-semibold">{label}</span> : null}
      <span className={label ? "opacity-70" : ""}>
        {formatK(price)}
        {suffix}
      </span>
      <span
        className={`flex h-6 w-6 items-center justify-center rounded-full transition ${
          added ? "bg-white/20" : "bg-ink text-paper group-hover/add:bg-white group-hover/add:text-fire"
        }`}
      >
        {added ? <Check className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
      </span>
    </button>
  );
}

function MenuRow({ item }: { item: MenuItem }) {
  const { add } = useOrder();
  const single = item.price !== undefined && !item.options && !item.askUs;
  const choice = item.choice ? { ...item.choice, value: item.choice.values[0] } : undefined;

  return (
    <li className="group border-b border-ink/10 py-5 last:border-b-0">
      <div className="flex items-baseline">
        <h4 className="font-display text-[28px] leading-none tracking-[0.02em] text-ink md:text-[30px]">
          {item.name}
        </h4>
        {item.tag ? (
          <span className="ml-3 shrink-0 -translate-y-1 rounded-full bg-fire/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.15em] text-fire">
            {item.tag}
          </span>
        ) : null}
        <span className="leader" aria-hidden="true" />
        <span className="shrink-0 font-display text-2xl text-ink">
          {item.askUs
            ? "Ask us"
            : item.per100g
              ? `${formatK(item.per100g)} / 100g`
              : item.price !== undefined
                ? formatK(item.price)
                : item.options && item.options.length > 1
                  ? `from ${formatK(Math.min(...item.options.map((o) => o.price)))}`
                  : item.options
                    ? formatK(item.options[0].price)
                    : ""}
        </span>
      </div>
      {item.description ? (
        <p className="mt-1.5 max-w-xl text-[15px] leading-relaxed text-ink/65">{item.description}</p>
      ) : null}
      {item.choice ? (
        <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-ink/45">
          {item.choice.label}: {item.choice.values.join(" · ")}
        </p>
      ) : null}

      {!item.askUs ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {item.per100g ? (
            <AddButton
              label="+100g"
              price={item.per100g}
              onAdd={() =>
                add({ key: item.id, name: item.name, variant: "100g", unitPrice: item.per100g!, byWeight: true })
              }
            />
          ) : null}
          {single ? (
            <AddButton
              price={item.price!}
              onAdd={() => add({ key: item.id, name: item.name, unitPrice: item.price!, choice })}
            />
          ) : null}
          {item.options?.map((opt) => (
            <AddButton
              key={opt.label}
              label={opt.label}
              price={opt.price}
              onAdd={() =>
                add({
                  key: `${item.id}|${opt.label}`,
                  name: item.name,
                  variant: opt.label,
                  unitPrice: opt.price,
                  choice,
                })
              }
            />
          ))}
          {item.addOns?.map((addOn) => (
            <button
              key={addOn.label}
              type="button"
              onClick={() =>
                add({
                  key: `${item.id}+${addOn.label}`,
                  name: `${item.name} add-on`,
                  variant: addOn.label,
                  unitPrice: addOn.price,
                })
              }
              className="inline-flex items-center gap-1 rounded-full border border-dashed border-ink/25 px-3 py-1.5 text-xs font-semibold text-ink/70 transition hover:border-fire hover:text-fire"
            >
              <Plus className="h-3 w-3" aria-hidden="true" />
              {addOn.label} {formatK(addOn.price)}
            </button>
          ))}
        </div>
      ) : null}
    </li>
  );
}

export default function MenuSection() {
  const [active, setActive] = useState(MENU[0].id);
  const { count, subtotal, setOpen } = useOrder();
  const topRef = useRef<HTMLDivElement>(null);

  const select = (id: string) => {
    setActive(id);
    const top = topRef.current?.getBoundingClientRect().top ?? 0;
    if (top < 0) topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

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
              Tap <span className="not-italic">＋</span> to build your order, then send it straight to us on WhatsApp —
              for pickup, delivery or waiting at your table.
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
              href="/nicos-menu.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-ink px-5 py-2.5 text-sm font-bold uppercase tracking-[0.12em] transition hover:bg-ink hover:text-paper"
            >
              <Download className="h-4 w-4" aria-hidden="true" /> Printable PDF menu
            </a>
          </div>
        </div>

        {/* Tabs */}
        <div ref={topRef} className="sticky top-16 z-20 -mx-4 mt-12 scroll-mt-20 md:top-[72px] md:-mx-6">
          <div className="border-y-2 border-ink bg-paper/95 backdrop-blur">
            <div
              role="tablist"
              aria-label="Menu categories"
              className="scrollbar-hide mx-auto flex max-w-7xl gap-1 overflow-x-auto px-4 py-2.5 md:px-6"
            >
              {MENU.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  id={`tab-${cat.id}`}
                  aria-selected={active === cat.id}
                  aria-controls={`panel-${cat.id}`}
                  onClick={() => select(cat.id)}
                  className={`shrink-0 rounded-full px-4 py-2 font-display text-xl tracking-[0.06em] transition md:text-2xl ${
                    active === cat.id ? "bg-ink text-paper" : "text-ink/60 hover:bg-ink/5 hover:text-ink"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Panels — all rendered for SEO; inactive ones hidden */}
        {MENU.map((cat) => {
          const img = CATEGORY_IMAGES[cat.id];
          return (
            <div
              key={cat.id}
              id={`panel-${cat.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${cat.id}`}
              hidden={active !== cat.id}
              className="menu-panel pt-12"
            >
              <div className={`grid gap-12 ${img ? "lg:grid-cols-[1fr_380px]" : ""}`}>
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <h3 className="font-display text-6xl leading-none md:text-7xl">{cat.name}</h3>
                    <span className="font-serif text-2xl italic text-fire">{cat.kicker}</span>
                  </div>
                  {cat.note ? (
                    <p className="mt-3 max-w-2xl text-sm font-semibold uppercase leading-relaxed tracking-[0.08em] text-ink/55">
                      {cat.note}
                    </p>
                  ) : null}

                  {cat.groups.map((group, gi) => (
                    <div key={gi} className="mt-8">
                      {group.title ? (
                        <div className="mb-1 flex items-center gap-4">
                          <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-fire">{group.title}</h4>
                          <span className="h-px flex-1 bg-ink/15" />
                        </div>
                      ) : null}
                      {group.note ? <p className="mb-2 text-sm text-ink/55">{group.note}</p> : null}
                      <ul className={`${img ? "" : "md:grid md:grid-cols-2 md:gap-x-14"}`}>
                        {group.items.map((item) => (
                          <MenuRow key={item.id} item={item} />
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {img ? (
                  <div className="hidden lg:block">
                    <div className="sticky top-44">
                      <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] shadow-[0_30px_60px_-25px_rgba(22,16,10,0.6)]">
                        <Image src={img.src} alt={img.alt} fill sizes="380px" className="object-cover" />
                      </div>
                      <p className="mt-3 text-center font-serif text-lg italic text-ink/60">{img.alt}</p>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          );
        })}

        {/* Sauce bar */}
        <div className="mt-16 overflow-hidden rounded-[32px] bg-ink p-8 text-cream md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <p className="text-xs font-bold tracking-[0.3em] text-ember">THE SAUCE BAR</p>
              <h3 className="mt-3 font-display text-6xl leading-none md:text-7xl">
                16 sauces.
                <br />
                <span className="fire-text">Pick your heat.</span>
              </h3>
              <p className="mt-4 max-w-sm text-cream/65">
                Every pit order comes with a choice of 1 sauce. Extra sauces {formatK(EXTRA_SAUCE_PRICE)} each.
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
          {count > 0 ? (
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-fire px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-ember"
            >
              <ShoppingBag className="h-4 w-4" aria-hidden="true" />
              Review order · {formatK(subtotal)}
            </button>
          ) : null}
        </div>
      </div>
    </section>
  );
}
