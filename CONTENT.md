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
| Address      | Jl. Raya Canggu, Tibubeneng, Kec. Kuta Utara, Kabupaten Badung, Bali 80361 |
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
| Google Maps       | Directions to Jl. Raya Canggu, Tibubeneng, Kec. Kuta Utara, Kabupaten Badung, Bali 80361 |

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

## Review & Follow page (`reviewAndFollow`, `/reviewandfollow`)

| Field          | Value |
| -------------- | ----- |
| Eyebrow        | Thanks for eating with us |
| Heading        | Loved the smoke? |
| Subheading     | Two taps that mean the world to a small, 11-table smokehouse in Canggu. |
| Review button  | Leave a Google Review — Tell us how we did → https://g.page/r/CYlBMYdGEjPpEBM/review |
| Follow button  | Follow on Instagram — @nicossmokehouse → https://instagram.com/nicossmokehouse |
| Sign-off       | Terima kasih · See you next time |

---

## Meet the Crew (`crew`)

Mascot cut-outs live in `public/images/mascots/` (nico.png, cluck.png, hammer.png).

| Mascot | Role | Bio |
| ------ | ---- | --- |
| Nico   | The Boss · Texas BBQ | Runs the pit and signs off every 14-hour brisket personally. If it's beef and it's smoked, it's Nico's business. |
| Cluck  | The Ref · Jerk & Peri Peri | Keeps the jerk chicken honest and the peri peri fair. Mild or extra hot? Cluck makes the call. |
| Hammer | The Muscle · Ribs & Pork | Lifts racks of slow-smoked ribs for breakfast and makes sure nobody leaves hungry. Nobody. |

---

## Our Family page (`family`, `/ourfamily`)

**Heading:** One family. Same heart & soul.

**Intro:** It all started with Nana Sans, our firstborn. Nico's Smokehouse came along second, then Roasted Cafe, with two more little ones on the way. Different menus, different flavours, but every single one is raised the same way: proper food, made with care, served like you're one of our own.

| # | Restaurant | Tag | Status | Links |
| - | ---------- | --- | ------ | ----- |
| 1 | Nana Sans (firstborn, shows the Nana Sans logo) | Indian Restaurant & Tandoori | Right next door | https://nanasans.com |
| 2 | Nico's Smokehouse (second born) | Texas BBQ · Caribbean · Peri Peri | You're here | / (home page) |
| 3 | Roasted Cafe (third born) | Coffee · Matcha · Breakfast | Soft opening · 9am–5pm | WhatsApp order to Nico's · https://roastedcafecanggu.com/menu |
| 4 | Proper Kebabs | Aussie & UK Kebabs | Coming soon | — |
| 5 | Bhella Pizza | Wood-Fired Pizza | Coming soon | — |

**Roasted note — Sat at Nico's?** Order from the Roasted soft opening menu and we'll deliver it to your table. We're only two hops away. Available until 5pm.

Descriptions for each live in `lib/content.ts` → `family.members`.

**Booking / ordering picker:** on /ourfamily, every "Book a Table", WhatsApp or delivery (GoFood/Grab) button first asks which restaurant it's for.
- Book: Nana Sans WhatsApp (+62 812-3456-4499) · Nico's WhatsApp · Roasted WhatsApp (+62 823-2314-4171)
- Order online: Nana Sans GoFood/GrabFood · Nico's GoFood/GrabFood · Roasted order on WhatsApp
- Proper Kebabs and Bhella Pizza show as "Coming soon"
Links live in `family.members[].book` / `.order`.

**What ties us together:** Made from scratch · Never rushed · Treated like family

**Closing:** Pull up a chair at Nico's. Our second born, and home to Nico, Cluck and Hammer. Come taste the heart behind the whole family.

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
**Our Family link:** Our Family (links to /ourfamily)
**Credit:** Website built by metatapdigital.com (links to https://metatapdigital.com)

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
