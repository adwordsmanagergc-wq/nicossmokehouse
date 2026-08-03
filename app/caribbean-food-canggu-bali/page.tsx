import type { Metadata } from "next";
import Image from "next/image";
import { caribbeanFoodPost as post } from "@/lib/blog/caribbean-food";
import { buildPostMetadata, buildBlogJsonLd } from "@/lib/blog/utils";
import BlogHero from "@/components/blog/BlogHero";
import BlogFAQ from "@/components/blog/BlogFAQ";
import BlogClosing from "@/components/blog/BlogClosing";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = buildPostMetadata(post);

export default function CaribbeanFoodPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: buildBlogJsonLd(post) }}
      />
      <main>
        <BlogHero
          image={post.hero.image}
          eyebrow={post.eyebrow}
          title={post.title}
          subtitle={post.subtitle}
          meta={post.meta}
        />

        {/* Intro with feature image */}
        <section className="bg-smoke px-4 py-16">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[3fr_2fr] md:items-center">
            <Reveal>
              <h2 className="font-display text-3xl tracking-wide text-fire md:text-5xl">
                {post.intro.heading}
              </h2>
              <p className="mt-6 text-lg font-medium text-cream md:text-xl">{post.intro.lead}</p>
              <div className="mt-6 space-y-5 text-base leading-relaxed text-cream/85 md:text-lg">
                {post.intro.paragraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-2xl border border-amber-700/30 bg-black/40">
                <Image
                  src={post.intro.image.src}
                  alt={post.intro.image.alt}
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Dishes */}
        <section className="bg-gradient-to-b from-smoke to-char px-4 py-16">
          <div className="mx-auto max-w-6xl">
            <Reveal className="text-center">
              <span className="text-sm font-medium tracking-[0.2em] text-fire">
                {post.dishes.eyebrow}
              </span>
              <h2 className="mt-2 font-display text-3xl tracking-wide text-cream md:text-5xl">
                {post.dishes.heading}
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {post.dishes.items.map((dish, i) => (
                <Reveal key={dish.title} delay={i * 40}>
                  <article className="h-full rounded-xl border border-amber-700/30 bg-black/40 p-6">
                    <h3 className="font-display text-2xl tracking-wide text-fire">{dish.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-cream/80">{dish.description}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <BlogFAQ items={post.faq.items} />

        <BlogClosing
          heading={post.closing.heading}
          lines={post.closing.lines}
          ctas={post.closing.ctas}
          footerNote={post.footerNote}
        />
      </main>
    </>
  );
}
