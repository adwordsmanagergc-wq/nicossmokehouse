import { Check, Clock, Instagram, MapPin, MessageCircle, Navigation } from "lucide-react";
import { visit, links } from "@/lib/content";
import OpenStatus from "./OpenStatus";
import Reveal from "./Reveal";

export default function Visit() {
  return (
    <section id="visit" className="relative overflow-hidden bg-smoke px-4 py-24 md:px-6 md:py-32">
      <div className="grain absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl">
        <Reveal className="mb-12 md:mb-16">
          <span className="text-xs font-bold tracking-[0.3em] text-fire">{visit.eyebrow}</span>
          <h2 className="mt-4 font-display text-6xl leading-[0.9] text-cream md:text-8xl">{visit.heading}</h2>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="flex flex-col rounded-[32px] border border-white/10 bg-char/70 p-7 md:p-10">
            <OpenStatus className="self-start" />

            <dl className="mt-8 space-y-6">
              <div className="flex gap-4">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-fire" aria-hidden="true" />
                <div>
                  <dt className="text-xs font-bold uppercase tracking-[0.2em] text-cream/45">Address</dt>
                  <dd className="mt-1 text-lg text-cream">{visit.address}</dd>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="mt-1 h-5 w-5 shrink-0 text-fire" aria-hidden="true" />
                <div>
                  <dt className="text-xs font-bold uppercase tracking-[0.2em] text-cream/45">Hours</dt>
                  <dd className="mt-1 text-lg text-cream">{visit.hours}</dd>
                </div>
              </div>
              <div className="flex gap-4">
                <MessageCircle className="mt-1 h-5 w-5 shrink-0 text-fire" aria-hidden="true" />
                <div>
                  <dt className="text-xs font-bold uppercase tracking-[0.2em] text-cream/45">Bookings · WhatsApp</dt>
                  <dd className="mt-1 text-lg">
                    <a href={links.whatsappBooking} target="_blank" rel="noopener noreferrer" className="text-cream underline decoration-fire/60 underline-offset-4 hover:text-fire">
                      {visit.phoneLabel}
                    </a>
                  </dd>
                </div>
              </div>
            </dl>

            <ul className="mt-8 grid gap-2.5 border-t border-white/10 pt-8 sm:grid-cols-2">
              {visit.perks.map((perk) => (
                <li key={perk} className="flex items-start gap-2.5 text-sm text-cream/75">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" aria-hidden="true" />
                  {perk}
                </li>
              ))}
            </ul>

            <div className="mt-auto grid grid-cols-2 gap-3 pt-10">
              <a
                href={links.googleMapsDirections}
                target="_blank"
                rel="noopener noreferrer"
                className="col-span-2 inline-flex items-center justify-center gap-2 rounded-full bg-fire py-4 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:bg-ember"
              >
                <Navigation className="h-4 w-4" aria-hidden="true" /> Get directions
              </a>
              <a
                href={links.gofood}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 py-3 text-sm font-semibold text-cream transition hover:border-[#00AA13] hover:text-[#00AA13]"
              >
                GoFood
              </a>
              <a
                href={links.grab}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 py-3 text-sm font-semibold text-cream transition hover:border-[#00B14F] hover:text-[#00B14F]"
              >
                GrabFood
              </a>
              <a
                href={links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="col-span-2 inline-flex items-center justify-center gap-2 py-2 text-sm font-semibold text-cream/60 transition hover:text-fire"
              >
                <Instagram className="h-4 w-4" aria-hidden="true" /> @nicossmokehouse
              </a>
            </div>
          </Reveal>

          <Reveal delay={120} className="relative min-h-[420px] overflow-hidden rounded-[32px] border border-white/10 lg:min-h-0">
            <iframe
              title="Map to Nico's Smokehouse, Canggu"
              src={visit.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full [filter:grayscale(1)_invert(0.92)_contrast(0.9)_sepia(0.25)]"
            />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
