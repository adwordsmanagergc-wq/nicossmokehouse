// =============================================================================
//  SINGLE SOURCE OF TRUTH — all site copy, links and image references.
//  Edit this file to change ANY text, link or image on the site.
//  CONTENT.md mirrors every string here in a readable format for proofreading.
// =============================================================================

// -----------------------------------------------------------------------------
//  IMAGES
//  Placeholders ship as SVGs so the site renders immediately.
//  To use the real photos:  npm run download-images
//  then point each entry below at the downloaded file
//  (e.g. "/images/hero-wooden-wall.jpg"). See README.md → "Images".
// -----------------------------------------------------------------------------
export const IMAGES = {
  logo: "/images/nicos-logo-black-surround.png",
  heroBg: "/images/hero.jpg",
  ogImage: "/images/hero.jpg",
  specialtyJamaican: "/images/caribbean-food-bali.png",
  specialtyTexas: "/images/nicossmokehouserib.png",
  specialtyPeriPeri: "/images/nicosperiperi.png",
  // Mascots — transparent cut-outs, each standing on its own name sign
  mascotNico: "/images/mascots/nico.png",
  mascotCluck: "/images/mascots/cluck.png",
  mascotHammer: "/images/mascots/hammer.png",
};

// Intrinsic sizes of the mascot cut-outs (for next/image)
export const MASCOT_SIZES = {
  nico: { width: 277, height: 468 },
  cluck: { width: 343, height: 463 },
  hammer: { width: 305, height: 458 },
};

// -----------------------------------------------------------------------------
//  BUSINESS DETAILS
// -----------------------------------------------------------------------------
export const site = {
  name: "Nico's Smokehouse",
  alternateName: "Nicos Smokehouse",
  url: "https://nicossmokehouse.com",
  telephone: "+62-878-6796-6662",
  priceRange: "$$",
  tagline: "Authentic BBQ & Caribbean Cuisine in Bali",
  openingHours: "Open daily 12pm – 12am",
  // Neighbourhood name used in display copy (e.g. "Canggu, Bali").
  area: "Canggu",
  // NAP: must match the Google Business Profile character-for-character.
  address: {
    full: "Jl. Raya Canggu, Tibubeneng, Kec. Kuta Utara, Kabupaten Badung, Bali 80361",
    streetAddress: "Jl. Raya Canggu, Tibubeneng, Kec. Kuta Utara",
    locality: "Kabupaten Badung",
    region: "Bali",
    postalCode: "80361",
    country: "ID",
  },
  geo: { latitude: -8.6478, longitude: 115.1385 },
};

// Tracking IDs carried over from the live site. Set to "" to disable.
export const analytics = {
  googleAdsId: "AW-18032898093",
  bingSiteVerification: "2D8ACEF82553DE4E26AC79CEF204667B",
};

// -----------------------------------------------------------------------------
//  OUTBOUND LINKS
// -----------------------------------------------------------------------------
export const links = {
  instagram: "https://instagram.com/nicossmokehouse",
  googleReview: "https://g.page/r/CYlBMYdGEjPpEBM/review",
  gofood:
    "https://gofood.co.id/bali/restaurant/nico-s-smokehouse-tibubeneng-29af8618-1b2e-4d45-8522-e5c673344d15",
  grab: "https://food.grab.com/id/id/restaurant/nico-s-smokehouse-tibubeneng-delivery/6-C7LBDE2ECFJUTE",
  whatsappBooking: "https://wa.me/6287867966662",
  whatsappCatering:
    "https://wa.me/6287867966662?text=Hi%2C%20I'd%20like%20to%20enquire%20about%20catering",
  googleMapsDirections:
    "https://www.google.com/maps/dir/?api=1&destination=Jl.+Raya+Canggu%2C+Tibubeneng%2C+Kec.+Kuta+Utara%2C+Kabupaten+Badung%2C+Bali+80361",
};

// -----------------------------------------------------------------------------
//  /reviewandfollow — table QR / link-in-bio page
// -----------------------------------------------------------------------------
export const reviewAndFollow = {
  metaTitle: "Review & Follow | Nico's Smokehouse Canggu",
  metaDescription:
    "Enjoyed your meal at Nico's Smokehouse? Leave us a Google review and follow @nicossmokehouse on Instagram.",
  eyebrow: "Thanks for eating with us",
  headingTop: "Loved the",
  headingAccent: "smoke?",
  subheading: "Two taps that mean the world to a small, 11\u2011table smokehouse in Canggu.",
  review: {
    label: "Leave a Google Review",
    sub: "Tell us how we did",
    href: links.googleReview,
  },
  follow: {
    label: "Follow on Instagram",
    sub: "@nicossmokehouse",
    href: links.instagram,
  },
  signoff: "Terima kasih · See you next time",
};

// -----------------------------------------------------------------------------
//  /ourfamily — the Nico's family of restaurants
// -----------------------------------------------------------------------------
export const family = {
  metaTitle: "Our Family of Restaurants in Canggu, Bali | Nico's Smokehouse",
  metaDescription:
    "Meet the Nico's Smokehouse family in Canggu: Nana Sans Indian & tandoori, Roasted Cafe, plus Proper Kebabs and Bhella Pizza coming soon. Same heart, same soul.",
  eyebrow: "OUR FAMILY",
  headingTop: "One family.",
  headingAccent: "Same heart & soul.",
  intro:
    "Nico's Smokehouse was just the start. Today our little family of kitchens stretches from the smoker to the tandoor to the espresso machine, with two more on the way. Different menus, different flavours, but every single one is built the same way: proper food, made with care, served like you're one of our own.",
  members: [
    {
      key: "nicos",
      name: "Nico's Smokehouse",
      tag: "Texas BBQ · Caribbean · Peri Peri",
      status: "You're here",
      statusTone: "here" as const,
      icon: "flame" as const,
      accent: "from-fire to-ember",
      description:
        "Where it all began. Brisket smoked low and slow for 14+ hours, Jamaican jerk chicken, curry goat and oxtail, and flame-grilled peri peri, all under one roof in Tibubeneng. An intimate, air-conditioned 11-table smokehouse that treats every plate like it's going to family.",
      cta: { label: "Explore Nico's", href: "/", external: false },
    },
    {
      key: "nanasans",
      name: "Nana Sans",
      tag: "Indian Restaurant & Tandoori",
      status: "Right next door",
      statusTone: "open" as const,
      icon: "cookingPot" as const,
      accent: "from-[#f59e0b] to-[#b45309]",
      description:
        "Indian soul, British heart. Slow-cooked tandoori from a proper clay oven, rich creamy curries and all the British-Indian favourites you've been missing, from chicken tikka masala to garlic naan. Air-conditioned, with plenty of vegetarian and vegan options, and right next door to Nico's.",
      cta: { label: "nanasans.com", href: "https://nanasans.com", external: true },
    },
    {
      key: "roasted",
      name: "Roasted Cafe",
      tag: "Coffee · Matcha · Breakfast",
      status: "Soft opening now",
      statusTone: "open" as const,
      icon: "coffee" as const,
      accent: "from-[#a16207] to-[#57341a]",
      description:
        "Our cafe in Tibubeneng, five minutes from Berawa. Coffee from our own Roasted blend by Lavazza, matcha and ube lattes, flavoured foams and fresh croissants, in a brick-and-teak space with fast wifi, power points and air con. Build your own drink: there are over 400 ways to make it yours.",
      cta: { label: "roastedcafecanggu.com", href: "https://roastedcafecanggu.com", external: true },
    },
    {
      key: "kebabs",
      name: "Proper Kebabs",
      tag: "Aussie & UK Kebabs",
      status: "Coming soon",
      statusTone: "soon" as const,
      icon: "sandwich" as const,
      accent: "from-[#dc2626] to-[#7f1d1d]",
      description:
        "Aussie and UK kebabs, finally in Bali. Craving that lamb doner like back home? Seasoned lamb stacked high, shaved hot off the spit and loaded into warm, fresh bread with crisp salad and proper garlic and chilli sauce. Plus loaded chips and the late-night snack pack you've been dreaming about since you landed. No shortcuts, just a proper kebab.",
      cta: null,
    },
    {
      key: "bhella",
      name: "Bhella Pizza",
      tag: "Wood-Fired Pizza",
      status: "Coming soon",
      statusTone: "soon" as const,
      icon: "pizza" as const,
      accent: "from-[#16a34a] to-[#b91c1c]",
      description:
        "Our own dough, made fresh in-house every day and given the time it needs to rise. Hand-stretched, then fired in a blazing wood oven until the crust puffs up light, airy and leopard-spotted with char. Simple, quality toppings, bubbling cheese and that smoky wood-fired flavour you can't fake. Pizza done properly.",
      cta: null,
    },
  ],
  values: {
    heading: "What ties us together",
    items: [
      {
        title: "Made from scratch",
        text: "Rubs, curries, sauces, dough: if we can make it ourselves, we do.",
      },
      {
        title: "Never rushed",
        text: "Low-and-slow smoke, a proper clay oven, dough given time to rise. Good food takes the time it takes.",
      },
      {
        title: "Treated like family",
        text: "Walk into any of our places and you'll get the same welcome, and the same care on the plate.",
      },
    ],
  },
  closing: {
    heading: "Start where it all began",
    text: "Pull up a chair at Nico's Smokehouse and taste the heart behind the whole family.",
  },
};

// -----------------------------------------------------------------------------
//  SEO METADATA
// -----------------------------------------------------------------------------
export const seo = {
  title:
    "Nico's Smokehouse | BBQ & Caribbean Restaurant in Canggu, Bali | Texas BBQ, Jerk Chicken & Peri Peri",
  description:
    "Nico's Smokehouse — Canggu's air-conditioned BBQ restaurant. Texas smoked brisket, Jamaican jerk chicken and Peri Peri, plus Bali-wide catering.",
  keywords: [
    "BBQ Canggu",
    "smokehouse Canggu",
    "Texas BBQ Bali",
    "best BBQ Canggu",
    "beef brisket Bali",
    "jerk chicken Canggu",
    "peri-peri chicken Bali",
    "BBQ catering Bali",
    "Caribbean restaurant Bali",
    "smoked meat Canggu",
  ],
  ogTitle: "Nico's Smokehouse - BBQ & Caribbean in Bali",
  ogDescription:
    "Authentic Texas BBQ, Jamaican flavors, and Peri Peri Chicken in the heart of Bali. Slow-smoked perfection meets Caribbean soul.",
  siteName: "Nico's Smokehouse - BBQ & Caribbean in Bali",
  twitterHandle: "@nicossmokehouse",
};

// -----------------------------------------------------------------------------
//  NAVIGATION
// -----------------------------------------------------------------------------
export const nav = {
  links: [
    { label: "Menu", href: "/#menu" },
    { label: "Our Story", href: "/#story" },
    { label: "Catering", href: "/catering-bali" },
    { label: "Blog", href: "/blog" },
    { label: "Visit", href: "/#visit" },
  ],
  cta: { label: "Book a Table", href: links.whatsappBooking },
};

// -----------------------------------------------------------------------------
//  HERO
// -----------------------------------------------------------------------------
export const hero = {
  logoAlt: "Nico's Smokehouse Bali logo",
  headline: "SMOKE. FIRE. SOUL.",
  subheadline:
    "Where Texas BBQ meets Caribbean Soul & Peri Peri Fire in the heart of Bali",
  location: "Canggu, Bali",
  directionsLabel: "Get Directions →",
  bgAlt:
    "Nico's Smokehouse BBQ restaurant rustic wooden interior, Canggu, Bali",
  ctas: [
    {
      label: "View Our Menu",
      href: "/nicos-menu.pdf",
      icon: "utensils" as const,
      variant: "amber" as const,
      external: true,
    },
    {
      label: "@nicossmokehouse",
      href: links.instagram,
      icon: "instagram" as const,
      variant: "instagram" as const,
      external: true,
    },
    {
      label: "Order Now via GoFood",
      href: links.gofood,
      icon: null,
      variant: "green-bright" as const,
      external: true,
    },
    {
      label: "Order via Grab",
      href: links.grab,
      icon: null,
      variant: "grab" as const,
      external: true,
    },
  ],
};

// -----------------------------------------------------------------------------
//  HOMEPAGE SECTIONS
// -----------------------------------------------------------------------------
export const ticker = [
  "US Prime Brisket",
  "Smoked 14+ Hours",
  "Jamaican Jerk Chicken",
  "Curry Goat",
  "Oxtail",
  "Peri Peri Fire",
  "Dino Ribs",
  "Guinness Punch",
  "Fully Air-Conditioned",
  "Open Daily 12pm – 12am",
];

export const story = {
  eyebrow: "OUR STORY",
  heading: "Three flags. One fire.",
  paragraphs: [
    "Look closely at our wall and you'll find three flags burned into the timber — Texas, Jamaica and Portugal. They're the three fire traditions we cook by, and the reason there's nowhere else in Bali quite like Nico's.",
    "Brisket goes on the smoker before sunrise and comes off 14+ hours later with a black, peppery bark. Jerk chicken is charred over open flame the Kingston way. Peri peri birds are basted and grilled until the skin blisters. Three cuisines, one kitchen — and every one of them cooked with real fire.",
  ],
  imageAlt:
    "Texas, Jamaican and Portuguese flags painted on the wooden wall at Nico's Smokehouse Canggu",
  stats: [
    { value: "14+", label: "Hours on the smoker" },
    { value: "16", label: "House sauces" },
    { value: "11", label: "Tables · book ahead" },
    { value: "4.8★", label: "From 600+ reviews" },
  ],
};

export const deal = {
  eyebrow: "LUNCH DEAL",
  heading: "Book 12pm – 5pm, save 10%",
  body: "Reserve a table for any time between 12pm and 5pm and we'll take 10% off your whole bill. Only 11 tables and the brisket sells out — so book early.",
  cta: "Claim on WhatsApp",
  href: "https://wa.me/6287867966662?text=Hi%20Nico's!%20I'd%20like%20to%20book%20a%20table%20between%2012pm%20and%205pm%20for%2010%25%20off",
};

export const cateringTeaser = {
  eyebrow: "CATERING ACROSS BALI",
  heading: "Bring the smoker to your villa.",
  body: "Birthdays, weddings, retreats and villa parties — we cater Texas BBQ, Caribbean feasts and peri peri spreads everywhere from Canggu to Uluwatu.",
  cuisines: [
    { label: "Texas BBQ Catering", href: "/texas-bbq-catering-bali" },
    { label: "Caribbean Catering", href: "/caribbean-catering-bali" },
    { label: "Peri Peri Catering", href: "/peri-peri-catering-bali" },
  ],
};

export const visit = {
  eyebrow: "COME HUNGRY",
  heading: "Find us in Canggu",
  address: site.address.full,
  hours: "Open daily · 12pm – 12am",
  phoneLabel: "+62 878 6796 6662",
  perks: [
    "Fully air-conditioned indoor dining",
    "Only 11 tables — bookings recommended",
    "Family friendly, sharing platters",
    "Delivery via GoFood & Grab",
  ],
  mapEmbed:
    "https://www.google.com/maps?q=Nico's+Smokehouse,+Jl.+Raya+Canggu,+Tibubeneng,+Bali&output=embed",
};

// -----------------------------------------------------------------------------
//  SPECIALTIES — "Three Fires, One Kitchen"
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
//  MEET THE CREW — mascots
// -----------------------------------------------------------------------------
export const crew = {
  eyebrow: "MEET THE CREW",
  headingTop: "The gang",
  headingAccent: "behind the smoke.",
  intro: "Three characters, three fires. Say hi next time you're in.",
  members: [
    {
      key: "nico" as const,
      name: "Nico",
      role: "The Boss · Texas BBQ",
      bio: "Runs the pit and signs off every 14-hour brisket personally. If it's beef and it's smoked, it's Nico's business.",
      image: IMAGES.mascotNico,
      alt: "Nico the bull, Nico's Smokehouse mascot, in a black Nico's t-shirt and jeans",
    },
    {
      key: "cluck" as const,
      name: "Cluck",
      role: "The Ref · Jerk & Peri Peri",
      bio: "Keeps the jerk chicken honest and the peri peri fair. Mild or extra hot? Cluck makes the call.",
      image: IMAGES.mascotCluck,
      alt: "Cluck the rooster, Nico's Smokehouse mascot, in a referee shirt with a whistle",
    },
    {
      key: "hammer" as const,
      name: "Hammer",
      role: "The Muscle · Ribs & Pork",
      bio: "Lifts racks of slow-smoked ribs for breakfast and makes sure nobody leaves hungry. Nobody.",
      image: IMAGES.mascotHammer,
      alt: "Hammer the pig, Nico's Smokehouse mascot, flexing in a black Nico's polo shirt",
    },
  ],
};

export const specialties = {
  eyebrow: "OUR SPECIALTIES",
  heading: "THREE FIRES, ONE KITCHEN",
  intro:
    "Pick a fire — or better yet, build a platter from all three.",
  cards: [
    {
      title: "Jamaican Soul",
      subtitle: "Caribbean Flavors in Bali",
      description:
        "Jerk Chicken, Curry Goat, Oxtail — authentic island recipes slow-cooked to perfection",
      image: IMAGES.specialtyJamaican,
      imageAlt:
        "Jamaican jerk chicken and Caribbean dishes at Nico's Smokehouse Canggu",
      href: "/caribbean-food-canggu-bali",
      dishes: ["Jerk Chicken", "Curry Goat", "Oxtail", "Festivals"],
    },
    {
      title: "Texas BBQ",
      subtitle: "Slow-Smoked in Bali",
      description:
        "Brisket, ribs, and sausage smoked low and slow in authentic Texan dry rub tradition",
      image: IMAGES.specialtyTexas,
      imageAlt:
        "Texas-style smoked brisket and ribs at Nico's Smokehouse Canggu",
      href: "/texas-bbq-canggu-bali",
      dishes: ["Brisket", "Short Rib", "Dino Ribs", "US Prime Pork Ribs"],
    },
    {
      title: "Peri Peri Fire",
      subtitle: "Portuguese Heat in Bali",
      description:
        "Flame-grilled chicken with our signature peri peri marinades — from mild to extra hot",
      image: IMAGES.specialtyPeriPeri,
      imageAlt:
        "Flame-grilled peri peri chicken at Nico's Smokehouse Canggu",
      href: "/peri-peri-chicken-canggu-bali",
      dishes: ["Whole / Half / Breast", "6 Peri Flavours", "Peri Burger"],
    },
  ],
};

// -----------------------------------------------------------------------------
//  FAQ  (verbatim from the live site — 6 questions)
// -----------------------------------------------------------------------------
export const faq = {
  eyebrow: "FREQUENTLY ASKED",
  heading: "QUESTIONS",
  items: [
    {
      question: "Is Nico's Smokehouse air conditioned?",
      answer:
        "Yes! Nico's Smokehouse is fully air conditioned, making it the perfect escape from Bali's tropical heat. Our modern, climate-controlled restaurant keeps you cool and comfortable while you enjoy authentic BBQ, Caribbean food, and Peri Peri chicken.",
    },
    {
      question: "What are the best air conditioned restaurants in Canggu?",
      answer:
        "Nico's Smokehouse is one of the best air conditioned restaurants in Canggu. Unlike many open-air Bali restaurants, we offer a cool, comfortable indoor dining experience with 11 tables in a modern setting. Perfect for hot days when you want great food without the heat.",
    },
    {
      question: "Where can I find indoor dining in Canggu with AC?",
      answer:
        "Nico's Smokehouse offers fully air conditioned indoor dining on Jl. Raya Canggu. We're an intimate 11-table restaurant with a modern, cool atmosphere — ideal for families, couples, or groups looking to escape the Bali humidity while enjoying Texas BBQ, Jamaican cuisine, or Peri Peri chicken.",
    },
    {
      question: "What makes Nico's the best BBQ restaurant in Canggu?",
      answer:
        "Nico's Smokehouse is the only restaurant in Bali combining three fire-cooked cuisines: Texas-style smoked BBQ (with US Prime brisket smoked 14+ hours), authentic Caribbean/Jamaican dishes (jerk chicken, curry goat, oxtail), and Peri Peri chicken with 16 sauce levels. Plus we're air conditioned!",
    },
    {
      question: "Do you take reservations?",
      answer:
        "Yes, we highly recommend booking a table! We're a small restaurant with only 11 tables and our smoked meats are limited each day. Reserve via our website or WhatsApp to avoid disappointment. Book between 12pm-5pm for 10% off your bill!",
    },
    {
      question: "Is Nico's Smokehouse family friendly?",
      answer:
        "Absolutely! Our air conditioned restaurant is perfect for families with kids who need a break from the Bali heat. We have sharing platters great for families, and our menu has something for everyone from mild Peri Peri to classic BBQ sides.",
    },
  ],
};

// -----------------------------------------------------------------------------
//  FOOTER
//  Blog/catering hrefs point at pages not built in this homepage-only clone.
//  Build those routes later, or repoint the links here.
// -----------------------------------------------------------------------------
export const footer = {
  logoAlt: "Nico's Smokehouse logo",
  tagline: "Authentic BBQ & Caribbean Cuisine in Bali",
  instagram: { label: "@nicossmokehouse", href: links.instagram },
  actions: [
    {
      label: "Catering Services",
      href: links.whatsappCatering,
      icon: "utensils" as const,
      variant: "fire" as const,
    },
    {
      label: "Reserve a Table",
      href: links.whatsappBooking,
      icon: "pin" as const,
      variant: "wood" as const,
    },
  ],
  blogs: {
    label: "Blogs",
    links: [
      { label: "All Blog Posts", href: "/blog" },
      { label: "Caribbean Food", href: "/caribbean-food-canggu-bali" },
      { label: "Peri Peri Chicken", href: "/peri-peri-chicken-canggu-bali" },
      { label: "Texas BBQ", href: "/texas-bbq-canggu-bali" },
    ],
  },
  catering: {
    label: "Catering",
    areas: [
      { label: "Canggu", href: "/catering-canggu" },
      { label: "Seminyak", href: "/catering-seminyak" },
      { label: "Berawa", href: "/catering-berawa" },
      { label: "Pererenan", href: "/catering-pererenan" },
      { label: "Umalas", href: "/catering-umalas" },
      { label: "Legian", href: "/catering-legian" },
      { label: "Sanur", href: "/catering-sanur" },
      { label: "Nusa Dua", href: "/catering-nusa-dua" },
      { label: "Uluwatu", href: "/catering-uluwatu" },
    ],
    links: [
      { label: "Caribbean Catering", href: "/caribbean-catering-bali" },
      { label: "Peri Peri Catering", href: "/peri-peri-catering-bali" },
      { label: "Texas BBQ Catering", href: "/texas-bbq-catering-bali" },
      { label: "All Catering", href: "/catering-bali" },
    ],
  },
  copyright: "Nico's Smokehouse. All rights reserved.",
  family: { label: "Our Family", href: "/ourfamily" },
  credit: { label: "Website built by metatapdigital.com", href: "https://metatapdigital.com" },
  finalCta: { label: "Book a Table", href: links.whatsappBooking },
};
