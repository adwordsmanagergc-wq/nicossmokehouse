# Content Catalogue

Every text string on the site, in one place for proofreading and copy edits.

> **To actually change copy, edit [`lib/content.ts`](lib/content.ts).** That
> file is the single source of truth the site renders from. This document is a
> readable mirror of it — keep the two in sync when you make edits.

---

## Business details (`site`)

| Field        | Value |
| ------------ | ----- |
| Name         | Nico's Smokehouse |
| URL          | https://nicossmokehouse.com |
| Telephone    | +62-878-6796-6662 |
| Address      | Jl. Raya Canggu, Tibubeneng, Canggu, Bali 80361, ID |
| Opening hours| Open daily 12pm – 12am |
| Price range  | $$ |
| Tagline      | Authentic BBQ & Caribbean Cuisine in Bali |

---

## SEO (`seo`)

- **Title:** Nico's Smokehouse | BBQ & Caribbean Restaurant in Canggu, Bali | Texas BBQ, Jerk Chicken & Peri Peri
- **Meta description:** Nico's Smokehouse is an authentic BBQ restaurant in Canggu, Bali mixing Texas-style brisket, Caribbean soul food and peri-peri chicken. Enjoy slow-smoked brisket, jerk chicken, pork ribs and catering for private events.
- **OG / Twitter title:** Nico's Smokehouse - BBQ & Caribbean in Bali
- **OG / Twitter description:** Authentic Texas BBQ, Jamaican flavors, and Peri Peri Chicken in the heart of Bali. Slow-smoked perfection meets Caribbean soul.
- **Twitter handle:** @nicossmokehouse
- **Keywords:** BBQ Canggu, smokehouse Canggu, Texas BBQ Bali, best BBQ Canggu, beef brisket Bali, jerk chicken Canggu, peri-peri chicken Bali, BBQ catering Bali, Caribbean restaurant Bali, smoked meat Canggu

---

## Outbound links (`links`)

| Name              | URL |
| ----------------- | --- |
| Instagram         | https://instagram.com/nicossmokehouse |
| GoFood ordering   | https://gofood.co.id/bali/restaurant/nico-s-smokehouse-tibubeneng-29af8618-1b2e-4d45-8522-e5c673344d15 |
| WhatsApp booking  | https://wa.me/6287867966662 |
| WhatsApp catering | https://wa.me/6287867966662?text=Hi%2C%20I'd%20like%20to%20enquire%20about%20catering |
| Google Maps       | Directions to Jl. Raya Canggu, Tibubeneng, Bali 80361 |

---

## Navigation (`nav`)

Links: _(none — logo + Book a Table only)_
CTA: **Book a Table**

---

## Hero (`hero`)

- **Headline:** SMOKE. FIRE. SOUL.
- **Sub-headline:** Where Texas BBQ meets Caribbean Soul & Peri Peri Fire in the heart of Bali
- **Location pill:** Canggu, Bali — Get Directions →
- **CTAs:**
  1. View Our Menu → menu section
  2. @nicossmokehouse → Instagram
  3. Order Now via GoFood → GoFood
- **Floating button (always visible):** Book a Table → WhatsApp

---

## Specialties (`specialties`)

**Eyebrow:** OUR SPECIALTIES
**Heading:** THREE FIRES, ONE KITCHEN

1. **Jamaican Soul** — _Caribbean Flavors in Bali_
   Jerk Chicken, Curry Goat, Oxtail — authentic island recipes slow-cooked to perfection
2. **Texas BBQ** — _Slow-Smoked in Bali_
   Brisket, ribs, and sausage smoked low and slow in authentic Texan dry rub tradition
3. **Peri Peri Fire** — _Portuguese Heat in Bali_
   Flame-grilled chicken with our signature peri peri marinades — from mild to extra hot

---

## FAQ (`faq`)

**Eyebrow:** FREQUENTLY ASKED · **Heading:** QUESTIONS

1. **Is Nico's Smokehouse air conditioned?**
   Yes! Nico's Smokehouse is fully air conditioned, making it the perfect escape from Bali's tropical heat. Our modern, climate-controlled restaurant keeps you cool and comfortable while you enjoy authentic BBQ, Caribbean food, and Peri Peri chicken.

2. **What are the best air conditioned restaurants in Canggu?**
   Nico's Smokehouse is one of the best air conditioned restaurants in Canggu. Unlike many open-air Bali restaurants, we offer a cool, comfortable indoor dining experience with 11 tables in a modern setting. Perfect for hot days when you want great food without the heat.

3. **Where can I find indoor dining in Canggu with AC?**
   Nico's Smokehouse offers fully air conditioned indoor dining on Jl. Raya Canggu. We're an intimate 11-table restaurant with a modern, cool atmosphere — ideal for families, couples, or groups looking to escape the Bali humidity while enjoying Texas BBQ, Jamaican cuisine, or Peri Peri chicken.

4. **What makes Nico's the best BBQ restaurant in Canggu?**
   Nico's Smokehouse is the only restaurant in Bali combining three fire-cooked cuisines: Texas-style smoked BBQ (with US Prime brisket smoked 14+ hours), authentic Caribbean/Jamaican dishes (jerk chicken, curry goat, oxtail), and Peri Peri chicken with 16 sauce levels. Plus we're air conditioned!

5. **Do you take reservations?**
   Yes, we highly recommend booking a table! We're a small restaurant with only 11 tables and our smoked meats are limited each day. Reserve via our website or WhatsApp to avoid disappointment. Book between 12pm-5pm for 10% off your bill!

6. **Is Nico's Smokehouse family friendly?**
   Absolutely! Our air conditioned restaurant is perfect for families with kids who need a break from the Bali heat. We have sharing platters great for families, and our menu has something for everyone from mild Peri Peri to classic BBQ sides.

---

## Footer (`footer`)

**Tagline:** Authentic BBQ & Caribbean Cuisine in Bali
**Social:** @nicossmokehouse

**Action buttons:** Catering Services · Reserve a Table

**Blogs menu:** All Blog Posts · Caribbean Food · Peri Peri Chicken · Texas BBQ

**Catering menu:**
- Areas: Canggu, Seminyak, Berawa, Pererenan, Umalas, Legian, Sanur, Nusa Dua, Uluwatu
- Caribbean Catering · Peri Peri Catering · Texas BBQ Catering · All Catering

**Final CTA:** Book a Table
**Copyright:** © (current year) Nico's Smokehouse. All rights reserved.
**Credit:** Website & Marketing by Metatap Pty Ltd

---

## Blog posts (`lib/blog/*`)

Each blog post has its own content module in `lib/blog/` and its own
route folder in `app/`. Edit the content module to change copy.

| Post | Route | Content file |
|------|-------|--------------|
| Where to Find Peri Peri Chicken in Canggu, Bali | `/peri-peri-chicken-canggu-bali` | `lib/blog/peri-peri.ts` |
| Where to Find Jamaican & Caribbean Soul Food in Canggu, Bali | `/caribbean-food-canggu-bali` | `lib/blog/caribbean-food.ts` |
| Where to Find Texas BBQ in Canggu, Bali | `/texas-bbq-canggu-bali` | `lib/blog/texas-bbq.ts` |
| Best BBQ Restaurant in Canggu, Bali | `/best-bbq-canggu` | `lib/blog/best-bbq-canggu.ts` |

All three of the footer's specific blog links (Caribbean Food, Peri Peri Chicken, Texas BBQ) point at their matching route above. The "All Blog Posts" link still points at `/blog`, which is not built in this scope — either create an index page later or repoint it in `lib/content.ts`.

---

## Catering pages (`lib/catering/*`)

Every catering page pulls copy from `lib/catering/`. The suburb pages all share
one renderer (`components/catering/SuburbCateringPage.tsx`) driven by
`lib/catering/suburbs.ts` — add a new suburb by pushing to `SUBURB_LIST` and
creating a 3-line `app/catering-{slug}/page.tsx`.

**Catering hub**

| Page | Route | Content file |
|------|-------|--------------|
| All catering (hub) | `/catering-bali` | inline in `app/catering-bali/page.tsx` |

**Cuisine catering pages** (each has a suburb dropdown)

| Page | Route | Content file |
|------|-------|--------------|
| Texas BBQ Catering in Bali | `/texas-bbq-catering-bali` | `lib/catering/texas-bbq.ts` |
| Caribbean Catering in Bali | `/caribbean-catering-bali` | `lib/catering/caribbean.ts` |
| Peri Peri Catering in Bali | `/peri-peri-catering-bali` | `lib/catering/peri-peri.ts` |

**Suburb catering pages** (each has a cuisine dropdown)

| Page | Route |
|------|-------|
| Canggu | `/catering-canggu` |
| Seminyak | `/catering-seminyak` |
| Berawa | `/catering-berawa` |
| Pererenan | `/catering-pererenan` |
| Umalas | `/catering-umalas` |
| Legian | `/catering-legian` |
| Sanur | `/catering-sanur` |
| Nusa Dua | `/catering-nusa-dua` |
| Uluwatu | `/catering-uluwatu` |

Suburb-page copy (intro, landmarks, target audience) lives in `lib/catering/suburbs.ts`.
