import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { site, IMAGES } from "@/lib/content";
import { bestBbqPost } from "@/lib/blog/best-bbq-canggu";
import { texasBbqPost } from "@/lib/blog/texas-bbq";
import { caribbeanFoodPost } from "@/lib/blog/caribbean-food";
import { periPeriPost } from "@/lib/blog/peri-peri";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: `Blog — BBQ, Caribbean & Peri Peri in Canggu | ${site.name}`,
  description:
    "Guides from the pit at Nico's Smokehouse: the best BBQ in Canggu, Texas brisket, Jamaican soul food and peri peri chicken in Bali.",
  alternates: { canonical: "/blog" },
};

const POSTS = [
  { post: bestBbqPost, image: IMAGES.heroBg },
  { post: texasBbqPost, image: IMAGES.specialtyTexas },
  { post: caribbeanFoodPost, image: IMAGES.specialtyJamaican },
  { post: periPeriPost, image: IMAGES.specialtyPeriPeri },
];

export default function BlogIndexPage() {
  return (
    <main className="relative overflow-hidden bg-char px-4 pb-28 pt-36 md:px-6 md:pt-44">
      <div className="grain absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <span className="text-xs font-bold tracking-[0.3em] text-fire">NOTES FROM THE PIT</span>
          <h1 className="mt-4 font-display text-7xl leading-[0.88] text-cream md:text-[9rem]">
            The Blog<span className="text-fire">.</span>
          </h1>
          <p className="mt-6 max-w-xl font-serif text-2xl italic leading-snug text-cream/75">
            Smoke rings, jerk marinades and peri peri heat — everything we know about fire-cooked food in Canggu.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {POSTS.map(({ post, image }, i) => (
            <Reveal key={post.slug} delay={i * 90}>
              <Link
                href={`/${post.slug}`}
                className="group relative block h-[420px] overflow-hidden rounded-[28px] ring-1 ring-white/10"
              >
                <Image
                  src={image}
                  alt={post.hero.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-[1.2s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10" />
                <span className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-cream backdrop-blur-md transition-all duration-500 group-hover:rotate-45 group-hover:bg-fire">
                  <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-ember">{post.eyebrow}</span>
                  <h2 className="mt-2 font-display text-4xl leading-none text-cream md:text-5xl">{post.title}</h2>
                  <p className="mt-3 line-clamp-2 text-cream/70">{post.subtitle}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </main>
  );
}
