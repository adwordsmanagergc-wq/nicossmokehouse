import type { Metadata } from "next";
import { bestBbqPost as post } from "@/lib/blog/best-bbq-canggu";
import { buildPostMetadata, buildBlogJsonLd } from "@/lib/blog/utils";
import BlogHero from "@/components/blog/BlogHero";
import BlogFAQ from "@/components/blog/BlogFAQ";
import BlogClosing from "@/components/blog/BlogClosing";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = buildPostMetadata(post);

export default function BestBbqPage() {
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

        {/* Intro */}
        <section className="bg-smoke px-4 py-16">
          <Reveal className="mx-auto max-w-3xl">
            <h2 className="font-display text-3xl tracking-wide text-fire md:text-5xl">
              {post.intro.heading}
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-cream/85 md:text-lg">
              {post.intro.paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </Reveal>
        </section>

        {/* Why we're the best — 6 feature cards */}
        <section className="bg-gradient-to-b from-smoke to-char px-4 py-16">
          <div className="mx-auto max-w-6xl">
            <Reveal className="text-center">
              <span className="text-sm font-medium tracking-[0.2em] text-fire">
                {post.whyBest.eyebrow}
              </span>
              <h2 className="mt-2 font-display text-3xl tracking-wide text-cream md:text-5xl">
                {post.whyBest.heading}
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {post.whyBest.items.map((item, i) => (
                <Reveal key={item.title} delay={i * 60}>
                  <article className="h-full rounded-xl border border-amber-700/30 bg-black/40 p-6">
                    <h3 className="font-display text-xl tracking-wide text-fire">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-cream/80">{item.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Signature experience — narrative */}
        <section className="bg-char px-4 py-16">
          <Reveal className="mx-auto max-w-3xl">
            <h2 className="font-display text-3xl tracking-wide text-fire md:text-5xl">
              {post.signature.heading}
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-cream/85 md:text-lg">
              {post.signature.paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </Reveal>
        </section>

        {/* Menu highlights — 8 items */}
        <section className="bg-gradient-to-b from-char to-smoke px-4 py-16">
          <div className="mx-auto max-w-5xl">
            <Reveal className="text-center">
              <span className="text-sm font-medium tracking-[0.2em] text-fire">{post.menu.eyebrow}</span>
              <h2 className="mt-2 font-display text-3xl tracking-wide text-cream md:text-5xl">
                {post.menu.heading}
              </h2>
            </Reveal>
            <ul className="mt-10 grid gap-3 md:grid-cols-2">
              {post.menu.items.map((item, i) => (
                <Reveal key={item.title} delay={i * 40}>
                  <li className="rounded-lg border border-amber-700/30 bg-black/40 p-4">
                    <span className="font-display text-lg text-fire">{item.title}</span>
                    <span className="ml-2 text-sm text-cream/75">— {item.description}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* Catering */}
        <section className="bg-smoke px-4 py-16">
          <Reveal className="mx-auto max-w-3xl rounded-2xl border border-amber-700/30 bg-black/40 p-8 md:p-10">
            <span className="text-sm font-medium tracking-[0.2em] text-fire">
              {post.catering.eyebrow}
            </span>
            <h2 className="mt-2 font-display text-3xl tracking-wide text-cream md:text-4xl">
              {post.catering.heading}
            </h2>
            <p className="mt-4 text-cream/85 md:text-lg">{post.catering.lead}</p>

            <h3 className="mt-6 text-sm font-semibold uppercase tracking-widest text-brown">
              {post.catering.forHeading}
            </h3>
            <ul className="mt-3 grid gap-2 text-sm text-cream md:grid-cols-2">
              {post.catering.forList.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-fire" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-6 text-sm italic text-cream/70">{post.catering.areas}</p>

            <a
              href={post.catering.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-fire px-6 py-3 font-semibold text-white transition hover:brightness-110"
            >
              {post.catering.cta.label}
            </a>
          </Reveal>
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
