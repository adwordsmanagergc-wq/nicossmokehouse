"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, ShoppingBag, Utensils, X } from "lucide-react";
import { nav, site, IMAGES, links } from "@/lib/content";
import { useOrder } from "./order/OrderContext";

/**
 * Fixed top navigation. Transparent over the hero, turning solid once the
 * page scrolls. On mobile the links collapse into a full-screen menu.
 */
export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { count, setOpen } = useOrder();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || menuOpen
          ? "border-b border-white/5 bg-char/85 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.8)] backdrop-blur-xl"
          : "border-b border-transparent bg-gradient-to-b from-black/60 to-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 md:h-[72px] md:px-6">
        <Link
          href="/"
          className="group flex items-center gap-3"
          aria-label={`${site.name} — home`}
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src={IMAGES.logo}
            alt=""
            width={44}
            height={44}
            className="h-10 w-10 rounded-full ring-1 ring-white/10 transition-transform duration-500 group-hover:rotate-[-12deg] md:h-11 md:w-11"
          />
          <span className="leading-none">
            <span className="block font-display text-xl tracking-[0.06em] text-cream md:text-2xl">
              Nico&apos;s Smokehouse
            </span>
            <span className="hidden text-[10px] font-semibold uppercase tracking-[0.3em] text-fire sm:block">
              BBQ · Caribbean · Canggu
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-sm font-semibold uppercase tracking-[0.14em] text-cream/75 transition-colors hover:text-cream"
            >
              {link.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 bg-fire transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-cream transition hover:border-fire hover:text-fire"
            aria-label={`Your order${count ? `, ${count} items` : ""}`}
          >
            <ShoppingBag className="h-[18px] w-[18px]" aria-hidden="true" />
            {count > 0 ? (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-fire px-1 text-[11px] font-bold text-white">
                {count}
              </span>
            ) : null}
          </button>

          <a
            href={nav.cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-fire px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-white shadow-[0_8px_30px_-8px_rgba(236,73,19,0.8)] transition hover:-translate-y-0.5 hover:bg-ember sm:inline-flex"
          >
            <Utensils className="h-4 w-4" aria-hidden="true" />
            {nav.cta.label}
          </a>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-cream lg:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-x-0 bottom-0 top-16 overflow-y-auto bg-char/[0.98] px-6 pb-10 pt-8 transition-all duration-500 lg:hidden ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <ul className="space-y-1">
          {nav.links.map((link, i) => (
            <li
              key={link.href}
              className={`transition-all duration-500 ${menuOpen ? "translate-x-0 opacity-100" : "-translate-x-6 opacity-0"}`}
              style={{ transitionDelay: menuOpen ? `${80 + i * 60}ms` : "0ms" }}
            >
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-baseline justify-between border-b border-white/5 py-4 font-display text-5xl tracking-wide text-cream transition-colors hover:text-fire"
              >
                {link.label}
                <span className="font-body text-xs font-semibold tracking-[0.3em] text-brown">
                  0{i + 1}
                </span>
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-10 grid gap-3">
          <a
            href={nav.cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-full bg-fire py-4 font-bold uppercase tracking-wider text-white"
          >
            <Utensils className="h-5 w-5" aria-hidden="true" /> {nav.cta.label}
          </a>
          <div className="grid grid-cols-2 gap-3">
            <a
              href={links.gofood}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/15 py-3 text-center text-sm font-semibold text-cream"
            >
              GoFood
            </a>
            <a
              href={links.grab}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/15 py-3 text-center text-sm font-semibold text-cream"
            >
              GrabFood
            </a>
          </div>
          <p className="mt-4 text-center text-sm text-brown">{site.openingHours}</p>
        </div>
      </div>
    </header>
  );
}
