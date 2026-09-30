import Image from "next/image";
import { ArrowDown, ArrowRight, FileText, MapPin, Utensils } from "lucide-react";
import { hero, links, IMAGES } from "@/lib/content";
import OpenStatus from "./OpenStatus";
import Embers from "./Embers";

const BADGE_TEXT = "SMOKED LOW & SLOW · 14+ HOURS · CANGGU BALI · ";

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-char">
      {/* Background: the flag wall, deep in shadow */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={IMAGES.heroBg}
          alt={hero.bgAlt}
          fill
          priority
          sizes="100vw"
          className="animate-slow-zoom object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-char via-char/85 to-char/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-char via-transparent to-char/70" />
        <div className="absolute -bottom-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-fire/25 blur-[140px]" />
      </div>
      <Embers />
      <div className="grain absolute inset-0 -z-0" aria-hidden="true" />

      <div className="relative mx-auto grid min-h-[100svh] max-w-7xl items-center gap-12 px-4 pb-20 pt-28 md:px-6 lg:grid-cols-[1.1fr_1fr] lg:gap-8 lg:pt-24">
        {/* Copy */}
        <div className="relative z-10">
          <div className="hero-in flex flex-wrap items-center gap-3" style={{ animationDelay: "0.05s" }}>
            <OpenStatus />
            <a
              href={links.googleMapsDirections}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-cream/70 transition hover:text-fire"
            >
              <MapPin className="h-3.5 w-3.5 text-fire" aria-hidden="true" />
              {hero.location}
            </a>
          </div>

          <h1 className="mt-7 font-display leading-[0.82] tracking-[0.01em] text-cream">
            <span className="hero-in block text-[22vw] sm:text-[9rem] lg:text-[9rem] xl:text-[10.5rem]" style={{ animationDelay: "0.15s" }}>
              Smoke.
            </span>
            <span className="hero-in block text-[22vw] sm:text-[9rem] lg:text-[9rem] xl:text-[10.5rem]" style={{ animationDelay: "0.3s" }}>
              Fire.
            </span>
            <span
              className="hero-in fire-text block text-[22vw] sm:text-[9rem] lg:text-[9rem] xl:text-[10.5rem]"
              style={{ animationDelay: "0.45s" }}
            >
              Soul.
            </span>
          </h1>

          <p
            className="hero-in mt-6 max-w-xl font-serif text-2xl italic leading-snug text-cream/90 md:text-3xl"
            style={{ animationDelay: "0.6s" }}
          >
            {hero.subheadline}.
          </p>

          <div className="hero-in mt-9 flex flex-wrap items-center gap-3" style={{ animationDelay: "0.75s" }}>
            <a
              href={links.whatsappBooking}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-full bg-fire px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white shadow-[0_18px_50px_-12px_rgba(236,73,19,0.9)] transition hover:-translate-y-0.5 hover:bg-ember"
            >
              <Utensils className="h-4 w-4" aria-hidden="true" />
              Book a Table
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a
              href="#menu"
              className="inline-flex items-center gap-2.5 rounded-full border border-cream/25 bg-white/5 px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-cream backdrop-blur-md transition hover:border-cream/60 hover:bg-white/10"
            >
              Explore the Menu
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div
            className="hero-in mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-cream/60"
            style={{ animationDelay: "0.9s" }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brown">Delivery</span>
            <a
              href={links.gofood}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-semibold text-cream/85 transition hover:text-[#00AA13]"
            >
              <span className="h-2 w-2 rounded-full bg-[#00AA13]" /> GoFood
            </a>
            <a
              href={links.grab}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-semibold text-cream/85 transition hover:text-[#00B14F]"
            >
              <span className="h-2 w-2 rounded-full bg-[#00B14F]" /> GrabFood
            </a>
            <a
              href="/nicos-menu.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-semibold text-cream/85 transition hover:text-fire"
            >
              <FileText className="h-4 w-4" aria-hidden="true" /> PDF Menu
            </a>
          </div>
        </div>

        {/* Photo stack */}
        <div className="relative mx-auto h-[440px] w-full max-w-[560px] sm:h-[560px] lg:h-[640px]">
          <div
            className="hero-photo absolute right-0 top-0 h-[78%] w-[74%] overflow-hidden rounded-[28px] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.9)] ring-1 ring-white/10"
            style={{ animationDelay: "0.35s" }}
          >
            <Image
              src={IMAGES.specialtyTexas}
              alt="Smoked beef short rib with a black peppery bark on a Nico's board"
              fill
              priority
              sizes="(min-width: 1024px) 420px, 74vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <span className="absolute bottom-4 left-4 rounded-full bg-black/60 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-cream backdrop-blur">
              Beef Short Rib
            </span>
          </div>

          <div
            className="hero-photo absolute bottom-0 left-0 h-[56%] w-[52%] -rotate-3 overflow-hidden rounded-[24px] border-[6px] border-char shadow-[0_30px_60px_-15px_rgba(0,0,0,0.9)]"
            style={{ animationDelay: "0.55s" }}
          >
            <Image
              src={IMAGES.specialtyPeriPeri}
              alt="Peri peri HOT sauce poured over flame-grilled chicken"
              fill
              priority
              sizes="(min-width: 1024px) 300px, 52vw"
              className="object-cover"
            />
            <span className="absolute bottom-3 left-3 rounded-full bg-black/60 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-cream backdrop-blur">
              Peri Peri
            </span>
          </div>

          {/* Rotating badge */}
          <div className="hero-photo absolute bottom-[18%] right-[4%] h-32 w-32 sm:h-40 sm:w-40" style={{ animationDelay: "0.8s" }}>
            <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full animate-[spin_22s_linear_infinite]" aria-hidden="true">
              <defs>
                <path id="badge-circle" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
              </defs>
              <circle cx="100" cy="100" r="98" fill="#EC4913" />
              <text className="fill-white font-body text-[15px] font-bold tracking-[0.22em]">
                <textPath href="#badge-circle">{BADGE_TEXT}</textPath>
              </text>
            </svg>
            <Image
              src={IMAGES.logo}
              alt=""
              width={120}
              height={120}
              className="absolute left-1/2 top-1/2 h-[56%] w-[56%] -translate-x-1/2 -translate-y-1/2 rounded-full"
            />
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#story"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-cream/40 transition hover:text-cream lg:flex"
        aria-label="Scroll to our story"
      >
        Scroll
        <span className="h-10 w-px animate-pulse bg-gradient-to-b from-cream/60 to-transparent" />
      </a>
    </section>
  );
}
