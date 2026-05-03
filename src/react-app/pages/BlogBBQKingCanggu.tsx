import { useEffect } from 'react';
import { Link } from 'react-router';
import { ArrowLeft, Flame, Star, Instagram, ExternalLink, MapPin, Utensils } from 'lucide-react';
import SEO from "@/react-app/components/SEO";

const ASSET_BASE = 'https://019d0a46-9da2-77c5-9887-de886a0fdfda.mochausercontent.com';

const SLIDESHOW_IMAGES = [
  `${ASSET_BASE}/Screenshot-2026-03-20-at-4.30.38-pm.png`,
  `${ASSET_BASE}/Screenshot-2026-03-20-at-4.30.50-pm.png`,
  `${ASSET_BASE}/Screenshot-2026-03-20-at-4.30.59-pm.png`,
  `${ASSET_BASE}/Screenshot-2026-03-20-at-4.31.08-pm.png`,
  `${ASSET_BASE}/Screenshot-2026-03-20-at-4.31.19-pm.png`,
  `${ASSET_BASE}/Screenshot-2026-03-20-at-4.31.28-pm.png`,
  `${ASSET_BASE}/Screenshot-2026-03-20-at-4.31.37-pm.png`,
  `${ASSET_BASE}/Screenshot-2026-03-20-at-4.31.54-pm.png`,
  `${ASSET_BASE}/Screenshot-2026-03-20-at-4.32.02-pm.png`,
  `${ASSET_BASE}/Screenshot-2026-03-20-at-4.32.10-pm.png`,
  `${ASSET_BASE}/Screenshot-2026-03-20-at-4.32.24-pm.png`,
  `${ASSET_BASE}/Screenshot-2026-03-20-at-4.32.31-pm.png`,
];

export default function BlogBBQKingCanggu() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-stone-900 text-white">
      <SEO
        path="/blog/texas-smoke-meets-caribbean-soul-bbq-king-canggu"
        title="Texas Smoke Meets Caribbean Soul: Bali's BBQ King | Nico's Smokehouse"
        description="How Nico's Smokehouse fuses authentic Texas BBQ with Caribbean soul food and Peri Peri fire to become Canggu's standout smokehouse. Read the story."
        type="article"
        schema={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Texas Smoke Meets Caribbean Soul: Bali's BBQ King",
          description:
            "How Nico's Smokehouse fuses authentic Texas BBQ with Caribbean soul food and Peri Peri fire to become Canggu's standout smokehouse.",
          image:
            "https://019d0a46-9da2-77c5-9887-de886a0fdfda.mochausercontent.com/Screenshot-2026-03-20-at-4.31.08-pm.png",
          datePublished: "2026-01-25",
          dateModified: "2026-05-03",
          author: { "@type": "Organization", name: "Nico's Smokehouse" },
          publisher: {
            "@type": "Organization",
            name: "Nico's Smokehouse",
            logo: {
              "@type": "ImageObject",
              url: "https://019d0a46-9da2-77c5-9887-de886a0fdfda.mochausercontent.com/nicos-logo-white.png",
            },
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id":
              "https://nicossmokehouse.com/blog/texas-smoke-meets-caribbean-soul-bbq-king-canggu",
          },
        }}
      />
      {/* Header */}
      <header className="sticky top-0 z-50 bg-stone-900/95 backdrop-blur-sm border-b border-stone-800">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link 
            to="/blog" 
            className="flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Blog</span>
          </Link>
          <Link to="/">
            <img 
              src={`${ASSET_BASE}/nicos-logo-white.png`}
              alt="Nico's Smokehouse"
              className="w-10 h-10 object-contain"
            />
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="relative py-16 sm:py-24"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(28, 25, 23, 0.7), rgba(28, 25, 23, 0.9)), url('${ASSET_BASE}/openart-image_1773994724931_39257367_1773994725151_04d1e791.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Flame className="w-5 h-5 text-amber-400" />
            <span className="text-amber-400 font-medium uppercase tracking-wider text-sm">The Ultimate Canggu BBQ Guide</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold mb-6 leading-tight">
            Texas Smoke Meets Caribbean Soul: 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-red-500">
              Why Nico's is the BBQ King of Canggu
            </span>
          </h1>
          <p className="text-stone-300 text-lg max-w-2xl mx-auto">
            The <strong className="text-white">best BBQ Canggu</strong> has to offer — where Texas smoked brisket, Caribbean soul food, and Peri Peri fire collide in the heart of Bali.
          </p>
        </div>
      </section>

      {/* Photo Slideshow */}
      <section className="py-8 bg-stone-950 overflow-hidden">
        <h2 className="text-center text-amber-400 font-bold text-xl mb-6 tracking-wide">
          FRESH OFF THE SMOKE & THE FIRE
        </h2>
        <div className="flex animate-marquee">
          {[...SLIDESHOW_IMAGES, ...SLIDESHOW_IMAGES].map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Nico's Smokehouse dish ${(index % SLIDESHOW_IMAGES.length) + 1}`}
              className="h-48 sm:h-64 w-auto object-cover mx-2 rounded-lg flex-shrink-0"
              loading="lazy"
              decoding="async"
            />
          ))}
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12 px-4">
        <div className="max-w-3xl mx-auto space-y-12">

          {/* The Hook */}
          <section className="bg-gradient-to-br from-stone-800/80 to-stone-900/80 rounded-2xl p-6 sm:p-8 border border-amber-500/20">
            <h2 className="text-2xl font-bold text-amber-400 mb-4">🔥 Picture This...</h2>
            <p className="text-stone-300 text-lg leading-relaxed mb-4">
              You catch the aroma before you even see the place. <strong className="text-white">12-hour smoked Wagyu brisket.</strong> Charred edges. Juicy, melt-in-your-mouth perfection.
            </p>
            <p className="text-stone-300 text-lg leading-relaxed mb-4">
              Welcome to <Link to="/" className="text-amber-400 hover:text-amber-300 underline font-bold">Nico's Smokehouse</Link> — Canggu's best-kept secret tucked away in Tibubeneng. This isn't your typical Bali beach club food. This is <strong className="text-white">Texas smoked brisket Bali</strong> style, meets <strong className="text-white">Caribbean soul food Canggu</strong> vibes, with a side of Portuguese fire.
            </p>
            <p className="text-stone-300 text-lg leading-relaxed">
              <em className="text-amber-200">If you're serious about finding the <strong>best BBQ Canggu</strong> has to offer — you just found it.</em>
            </p>
          </section>

          {/* The Triple Threat */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
              🍖 The Triple Threat: Three Fires, One Kitchen
            </h2>

            {/* Section 1: Texas */}
            <div className="bg-stone-800/50 rounded-2xl p-6 sm:p-8 border border-stone-700/50 mb-6">
              <h3 className="text-xl font-bold text-amber-400 mb-4">
                Q: What's the deal with Texas BBQ in Bali?
              </h3>
              <p className="text-stone-300 mb-4">
                <strong className="text-white">A: Let's talk low-and-slow, baby.</strong>
              </p>
              <p className="text-stone-300 mb-4">
                Real <strong className="text-white">Texas smoked brisket Bali</strong> doesn't exist... except here. We're talking:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span className="text-stone-300"><strong className="text-white">Melt-in-your-mouth Brisket</strong> — 12+ hours over wood smoke. That bark. That smoke ring. That's the good stuff.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span className="text-stone-300"><strong className="text-white">Fall-off-the-bone Pork Ribs</strong> — US Prime, slow-smoked to perfection. One bite and you'll get it.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span className="text-stone-300"><strong className="text-white">Beef Ribs</strong> — Massive. Meaty. Magnificent. The ultimate flex.</span>
                </li>
              </ul>
              <p className="text-stone-400 italic">
                No shortcuts. No rushing. Just time, smoke, and technique. Learn more about our <Link to="/texas-bbq-canggu-bali" className="text-amber-400 hover:text-amber-300 underline">Texas BBQ traditions</Link>.
              </p>
            </div>

            {/* Section 2: Caribbean */}
            <div className="bg-stone-800/50 rounded-2xl p-6 sm:p-8 border border-stone-700/50 mb-6">
              <h3 className="text-xl font-bold text-amber-400 mb-4">
                Q: Caribbean food in Canggu? For real?
              </h3>
              <p className="text-stone-300 mb-4">
                <strong className="text-white">A: Oh, it's VERY real. And you can't find this anywhere else.</strong>
              </p>
              <p className="text-stone-300 mb-4">
                We're bringing authentic <strong className="text-white">Caribbean soul food Canggu</strong> has been missing:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span className="text-stone-300"><strong className="text-white">Jamaican Jerk Chicken</strong> — Scotch bonnet heat, allspice magic, grilled over fire. This is the real deal <strong>Jamaican jerk chicken Bali</strong> style.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span className="text-stone-300"><strong className="text-white">Curry Goat</strong> — Slow-cooked, fall-apart tender, swimming in rich Caribbean spices.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span className="text-stone-300"><strong className="text-white">Fried Dumplings & Festival</strong> — Golden, crispy, perfect for scooping up every last bit of that curry.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span className="text-stone-300"><strong className="text-white">Oxtail</strong> — Rich, gelatinous, absolutely soul-satisfying.</span>
                </li>
              </ul>
              <p className="text-stone-400 italic">
                This is island soul food with serious roots. Explore our full <Link to="/caribbean-food-canggu-bali" className="text-amber-400 hover:text-amber-300 underline">Caribbean menu</Link>.
              </p>
            </div>

            {/* Section 3: Peri Peri */}
            <div className="bg-stone-800/50 rounded-2xl p-6 sm:p-8 border border-stone-700/50">
              <h3 className="text-xl font-bold text-amber-400 mb-4">
                Q: What about heat? I need SPICE.
              </h3>
              <p className="text-stone-300 mb-4">
                <strong className="text-white">A: Say less. Meet our Peri Peri.</strong>
              </p>
              <p className="text-stone-300 mb-4">
                If you're searching for <strong className="text-white">Peri Peri grill Canggu</strong> options — welcome home:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <Flame className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-stone-300"><strong className="text-white">Portuguese-style flame-grilled chicken</strong> — Marinated, charred, and hit with our house Peri Peri sauce.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Flame className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-stone-300"><strong className="text-white">Choose your heat level</strong> — From tangy lemon herb to "why did I do this to myself" hot.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Flame className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span className="text-stone-300"><strong className="text-white">16 sauces</strong> — First two free. After that, you're on your own.</span>
                </li>
              </ul>
              <p className="text-stone-400 italic">
                The African Bird's Eye chili doesn't play around. Check out our <Link to="/peri-peri-chicken-canggu-bali" className="text-amber-400 hover:text-amber-300 underline">Peri Peri guide</Link>.
              </p>
            </div>
          </section>

          {/* Must-Try List */}
          <section className="bg-gradient-to-br from-amber-900/30 to-stone-900/80 rounded-2xl p-6 sm:p-8 border border-amber-500/30">
            <h2 className="text-2xl font-bold text-white mb-6">🏆 The Must-Try List</h2>
            <p className="text-stone-300 mb-6">
              First time? Don't overthink it. Here's what the regulars order:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-stone-800/60 rounded-xl p-4 border border-stone-700/50">
                <h4 className="font-bold text-amber-400 mb-2">🥩 Smoked Brisket Sando</h4>
                <p className="text-stone-400 text-sm">Stacked high with that 12-hour brisket. Pickles. Slaw. Brioche bun. Game over.</p>
              </div>
              <div className="bg-stone-800/60 rounded-xl p-4 border border-stone-700/50">
                <h4 className="font-bold text-amber-400 mb-2">🥩 Wagyu Skirt Steak</h4>
                <p className="text-stone-400 text-sm">Perfectly seared. Insanely tender. Pairs stupid well with our chimichurri.</p>
              </div>
              <div className="bg-stone-800/60 rounded-xl p-4 border border-stone-700/50">
                <h4 className="font-bold text-amber-400 mb-2">🧀 Signature Mac & Cheese</h4>
                <p className="text-stone-400 text-sm">Creamy, cheesy, absolutely loaded. The side dish that steals the show.</p>
              </div>
              <div className="bg-stone-800/60 rounded-xl p-4 border border-stone-700/50">
                <h4 className="font-bold text-amber-400 mb-2">🍗 Jerk Chicken Feast</h4>
                <p className="text-stone-400 text-sm">Half chicken, rice & peas, coleslaw. A Caribbean party on your plate.</p>
              </div>
            </div>
          </section>

          {/* Social Proof */}
          <section className="text-center py-8">
            <h2 className="text-2xl font-bold text-white mb-6">📸 The Vibe is REAL</h2>
            <p className="text-stone-300 text-lg mb-6">
              People keep calling us a <strong className="text-white">"cozy, sick setup"</strong> and honestly? We're here for it.
            </p>
            <div className="bg-stone-800/50 rounded-2xl p-6 border border-stone-700/50 max-w-xl mx-auto">
              <p className="text-stone-300 mb-4">
                Wooden vibes. Smoke in the air. Cold drinks flowing. It's not trying to be fancy — it's trying to be <strong className="text-white">real</strong>. And that's exactly why the foodie crowd keeps finding us.
              </p>
              <p className="text-stone-400 italic">
                The kind of place you discover, fall in love with, and gatekeep from your mates. (But don't worry — we won't tell.)
              </p>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-red-900/40 via-amber-900/40 to-orange-900/40 rounded-2xl p-6 sm:p-8 border border-amber-500/30 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              🔥 Skip the Beach Clubs. Hit the Smokehouse.
            </h2>
            <p className="text-stone-300 text-lg mb-6">
              You've done the açai bowls. You've done the overpriced brunches. Now it's time for <strong className="text-white">real food</strong> with <strong className="text-white">real flavour</strong>.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Link
                to="/book-table"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold py-3 px-6 rounded-full hover:from-amber-400 hover:to-orange-500 transition-all shadow-lg"
              >
                <Utensils className="w-5 h-5" />
                Book a Table
              </Link>
              <Link
                to="/order"
                className="inline-flex items-center gap-2 bg-stone-700 hover:bg-stone-600 text-white font-bold py-3 px-6 rounded-full transition-all"
              >
                <MapPin className="w-5 h-5" />
                Order for Pickup
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-stone-400">
              <a 
                href="https://instagram.com/nicossmokehouse" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-amber-400 transition-colors"
              >
                <Instagram className="w-5 h-5" />
                @nicossmokehouse
              </a>
              <a 
                href="https://gofood.co.id/bali/restaurant/nico-s-smokehouse-tibubeneng-29af8618-1b2e-4d45-8522-e5c673344d15" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-amber-400 transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
                Order on GoFood
              </a>
            </div>
          </section>

          {/* Location */}
          <section className="text-center">
            <h3 className="text-xl font-bold text-white mb-4">📍 Find Us</h3>
            <p className="text-stone-300 mb-2">
              Jl. Pantai Berawa No.99, Tibubeneng, Canggu, Bali
            </p>
            <p className="text-stone-400">
              Open Daily: 12pm – 12am
            </p>
          </section>

        </div>
      </article>

      {/* Related Content */}
      <section className="py-12 px-4 border-t border-stone-800">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-white mb-6 text-center">Related Articles</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link 
              to="/blog/what-is-the-best-bbq-restaurant-in-canggu"
              className="bg-stone-800/50 rounded-xl p-4 border border-stone-700/50 hover:border-amber-500/50 transition-colors"
            >
              <p className="text-amber-400 font-medium mb-2">Best BBQ Restaurant in Canggu</p>
              <p className="text-stone-400 text-sm">Finding authentic slow-smoked BBQ in Bali</p>
            </Link>
            <Link 
              to="/blog/where-to-get-authentic-bbq-in-canggu-bali"
              className="bg-stone-800/50 rounded-xl p-4 border border-stone-700/50 hover:border-amber-500/50 transition-colors"
            >
              <p className="text-amber-400 font-medium mb-2">Authentic BBQ in Canggu</p>
              <p className="text-stone-400 text-sm">The complete guide to real smokehouse BBQ</p>
            </Link>
            <Link 
              to="/caribbean-food-canggu-bali"
              className="bg-stone-800/50 rounded-xl p-4 border border-stone-700/50 hover:border-amber-500/50 transition-colors"
            >
              <p className="text-amber-400 font-medium mb-2">Caribbean Food in Canggu</p>
              <p className="text-stone-400 text-sm">Jerk chicken, curry goat & island flavors</p>
            </Link>
            <Link 
              to="/peri-peri-chicken-canggu-bali"
              className="bg-stone-800/50 rounded-xl p-4 border border-stone-700/50 hover:border-amber-500/50 transition-colors"
            >
              <p className="text-amber-400 font-medium mb-2">Peri Peri Chicken in Bali</p>
              <p className="text-stone-400 text-sm">Portuguese-African fire meets paradise</p>
            </Link>
            <Link 
              to="/texas-bbq-canggu-bali"
              className="bg-stone-800/50 rounded-xl p-4 border border-stone-700/50 hover:border-amber-500/50 transition-colors"
            >
              <p className="text-amber-400 font-medium mb-2">Texas BBQ in Canggu</p>
              <p className="text-stone-400 text-sm">Authentic slow-smoked brisket & ribs</p>
            </Link>
            <Link 
              to="/catering-bali"
              className="bg-stone-800/50 rounded-xl p-4 border border-stone-700/50 hover:border-amber-500/50 transition-colors"
            >
              <p className="text-amber-400 font-medium mb-2">BBQ Catering in Bali</p>
              <p className="text-stone-400 text-sm">Villa parties, weddings & events</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-stone-800 text-center">
        <Link to="/">
          <img 
            src={`${ASSET_BASE}/nicos-logo-white.png`}
            alt="Nico's Smokehouse"
            className="w-20 mx-auto mb-4"
          />
        </Link>
        <p className="text-stone-400 text-sm mb-2">
          <Link to="/" className="hover:text-amber-400 transition-colors">Back to Nico's Smokehouse</Link>
        </p>
        <p className="text-stone-500 text-sm">
          The Best BBQ in Canggu, Bali
        </p>
      </footer>
    </div>
  );
}
