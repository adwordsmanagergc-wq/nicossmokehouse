# Nico's Smokehouse

Marketing site for **Nico's Smokehouse** — a BBQ & Caribbean restaurant in
Canggu, Bali. A fully self-owned rebuild of nicossmokehouse.com on a modern,
portable stack.

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Fonts:** Bebas Neue (display) + Source Sans 3 (body), via `next/font`
- **Icons:** lucide-react

---

## Project structure

```
app/
  globals.css        Tailwind layers + custom animations
  icon.svg           Favicon (flame mark)
  layout.tsx         <html>, fonts, SEO metadata, gtag, <Nav>
  page.tsx           Homepage — composes every section + JSON-LD
  not-found.tsx      Branded 404
  robots.ts          /robots.txt
  sitemap.ts         /sitemap.xml
components/
  Nav.tsx            Fixed top navigation
  Hero.tsx           Hero — logo, headline, location pill, CTAs
  Specialties.tsx    "Three Fires, One Kitchen" — 3 cuisine cards
  MenuPreview.tsx    "From The Pit" — scrolling dish marquee
  SportsBarFeature.tsx  "Coming Soon" Bintang Sports Bar block
  FAQ.tsx            Frequently asked questions
  Footer.tsx         Footer — links, menus, copyright
  StickyBookButton.tsx  Floating "Book a Table" button
  Reveal.tsx         Scroll fade-up wrapper (only client component)
  icons.tsx          Icon-name → lucide component map
lib/
  content.ts         ← ALL copy, links and image paths live here
  schema.ts          JSON-LD structured data
public/images/       Image assets (placeholders ship by default)
scripts/
  gen-placeholders.mjs   Regenerates the placeholder artwork
  download-images.sh     Fetches the original photos from the old host
CONTENT.md           Readable catalogue of every text string
```

---

## Local development

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # ESLint
```

---

## Images

The site ships with **branded SVG placeholders** in `public/images/` so it
renders immediately. The real photography currently lives on the old host
(`...mochausercontent.com`), which will be retired — so download a local copy:

```bash
npm run download-images
```

This saves the originals into `public/images/` (e.g. `hero-wooden-wall.jpg`,
`specialty-jamaican.jpg`, `dish-01.png` …). Then open **`lib/content.ts`** and,
in the `IMAGES` object at the top, change each `.svg` path to the matching
downloaded file. That single object is the only place image paths are defined.

> The OpenGraph image (`IMAGES.ogImage`) is best served as a `.jpg`/`.png`
> for social-media scrapers — update it once the real photo is downloaded.

To regenerate the placeholder artwork: `npm run placeholders`.

---

## How to edit content

**All copy, links and image references live in [`lib/content.ts`](lib/content.ts).**
Edit that one file — you never need to touch the components. `CONTENT.md`
mirrors every string in a readable format for proofreading.

| Section            | Component file                  | `content.ts` key |
| ------------------ | ------------------------------- | ---------------- |
| SEO / metadata     | `app/layout.tsx`                | `seo`, `site`    |
| Navigation         | `components/Nav.tsx`            | `nav`            |
| Hero               | `components/Hero.tsx`           | `hero`           |
| Specialties        | `components/Specialties.tsx`    | `specialties`    |
| Menu preview       | `components/MenuPreview.tsx`    | `menuPreview`    |
| Sports bar         | `components/SportsBarFeature.tsx` | `sportsBar`    |
| FAQ                | `components/FAQ.tsx`            | `faq`            |
| Footer             | `components/Footer.tsx`         | `footer`         |
| Outbound links     | —                               | `links`          |
| Tracking IDs       | `app/layout.tsx`                | `analytics`      |
| Brand colours/fonts| `tailwind.config.ts`            | —                |

---

## Deploy to Vercel

1. Push this repo to GitHub.
2. At [vercel.com/new](https://vercel.com/new), import the repository.
3. Vercel auto-detects Next.js — no configuration needed. Click **Deploy**.
4. Add your domain: **Project → Settings → Domains → Add `nicossmokehouse.com`**.
5. Point your DNS at Vercel (an `A` record to `76.76.21.21`, or a `CNAME` to
   `cname.vercel-dns.com`) as shown in the dashboard.
6. Once DNS propagates, switch off the old Metatap-hosted version.

Any push to the main branch redeploys automatically.

---

## Notes

- This is a faithful rebuild of the **homepage**. Footer "Blogs" and "Catering"
  links point at routes (`/blog`, `/catering-bali`, …) that are not part of this
  single-page build — build those pages later or repoint the links in
  `lib/content.ts`.
- `analytics.googleAdsId` carries over the live site's Google Ads tag. Set it to
  `""` in `lib/content.ts` to disable tracking.
- The reference export of the old site lives in
  `nico-s-smokehouse-...-export/` and is excluded from the build.
