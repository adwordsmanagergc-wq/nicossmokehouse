import { useEffect } from 'react';
import { Link } from 'react-router';
import { ArrowLeft, Flame, Clock, ChefHat, Check, X } from 'lucide-react';
import SEO from "@/react-app/components/SEO";

const ASSET_BASE = 'https://019d0a46-9da2-77c5-9887-de886a0fdfda.mochausercontent.com';

const SLIDESHOW_IMAGES = [
  `${ASSET_BASE}/Screenshot-2026-03-20-at-4.30.38-pm.png`,
  `${ASSET_BASE}/Screenshot-2026-03-20-at-4.30.50-pm.png`,
  `${ASSET_BASE}/Screenshot-2026-03-20-at-4.30.59-pm.png`,
  `${ASSET_BASE}/Screenshot-2026-03-20-at-4.30.26-pm.png`,
  `${ASSET_BASE}/Screenshot-2026-03-20-at-4.30.06-pm.png`,
  `${ASSET_BASE}/Screenshot-2026-03-20-at-4.31.10-pm.png`,
  `${ASSET_BASE}/Screenshot-2026-03-20-at-4.31.18-pm.png`,
  `${ASSET_BASE}/Screenshot-2026-03-20-at-4.31.34-pm.png`,
  `${ASSET_BASE}/Screenshot-2026-03-20-at-4.31.42-pm.png`,
  `${ASSET_BASE}/Screenshot-2026-03-20-at-4.31.58-pm.png`,
  `${ASSET_BASE}/Screenshot-2026-03-20-at-11.24.28-pm.png`,
  `${ASSET_BASE}/Screenshot-2026-03-20-at-11.23.15-pm.png`,
];

export default function BlogBestBBQCanggu() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div 
      className="min-h-screen text-stone-100"
      style={{ 
        backgroundImage: `url(${ASSET_BASE}/openart-image_1773994724931_39257367_1773994725151_04d1e791.jpg)`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <SEO
        path="/blog/what-is-the-best-bbq-restaurant-in-canggu"
        title="What Is the Best BBQ Restaurant in Canggu? | Nico's Smokehouse"
        description="A guide to finding the best BBQ in Canggu, Bali. Why Nico's Smokehouse — Texas brisket, ribs, jerk chicken and Peri Peri — is Canggu's top-rated smokehouse."
        type="article"
        schema={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "What Is the Best BBQ Restaurant in Canggu?",
          description:
            "A guide to finding the best BBQ in Canggu, Bali — and why Nico's Smokehouse leads the pack with Texas brisket, ribs, jerk chicken and Peri Peri.",
          image:
            "https://019d0a46-9da2-77c5-9887-de886a0fdfda.mochausercontent.com/openart-image_1773994724931_39257367_1773994725151_04d1e791.jpg",
          datePublished: "2026-01-15",
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
              "https://nicossmokehouse.com/blog/what-is-the-best-bbq-restaurant-in-canggu",
          },
        }}
      />
      <div className="min-h-screen bg-black/85">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-stone-950/95 backdrop-blur-sm border-b border-stone-800">
          <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link to="/blog" className="flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Blog</span>
            </Link>
            <Link to="/">
              <img 
                src={`${ASSET_BASE}/nicos-logo-white.png`}
                alt="Nico's Smokehouse"
                className="h-12"
              />
            </Link>
          </div>
        </header>

        {/* Hero */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 text-amber-400 mb-4">
              <Flame className="w-5 h-5" />
              <span className="text-sm font-medium uppercase tracking-wider">BBQ Guide</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
              What is the Best BBQ Restaurant in Canggu?
            </h1>
            <p className="text-stone-400 text-sm">
              A complete guide to finding authentic slow-smoked BBQ in Bali
            </p>
          </div>
        </section>

        {/* Image Slider */}
        <section className="py-8 overflow-hidden">
          <h2 className="text-center text-2xl font-bold mb-6 px-4">
            <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              FRESH OFF THE SMOKE & THE FIRE
            </span>
          </h2>
          <div className="relative">
            <div className="flex animate-marquee">
              {[...SLIDESHOW_IMAGES, ...SLIDESHOW_IMAGES].map((img, i) => (
                <div key={i} className="flex-shrink-0 w-64 h-48 mx-2">
                  <img 
                    src={img} 
                    alt={`BBQ dish ${(i % SLIDESHOW_IMAGES.length) + 1}`}
                    className="w-full h-full object-cover rounded-lg"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-stone-900/80 backdrop-blur-sm rounded-2xl p-6 sm:p-10 border border-stone-800/50">
              
              {/* Intro */}
              <p className="text-xl text-stone-200 leading-relaxed mb-8">
                If you're searching for the <strong className="text-amber-400">best BBQ in Canggu</strong>, you're not alone.
              </p>
              
              <p className="text-stone-300 leading-relaxed mb-6">
                Canggu has quickly become one of Bali's top food destinations, packed with cafés, beach clubs, and international restaurants. But when it comes to real BBQ — the kind that's slow-smoked, rich in flavour, and cooked with patience — the options are far more limited.
              </p>
              
              <p className="text-stone-300 leading-relaxed mb-6">
                That's because true BBQ isn't just about throwing meat on a grill. It's a craft. It's time, technique, and consistency.
              </p>
              
              <p className="text-stone-300 leading-relaxed mb-8">
                So, what actually makes a place the <strong className="text-white">best BBQ restaurant in Canggu</strong>?
              </p>
              
              <p className="text-stone-300 leading-relaxed mb-12">
                Let's break it down — and show you exactly what to look for.
              </p>

              {/* Section: What Defines Great BBQ */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-amber-400 mb-6 flex items-center gap-3">
                  <span className="text-3xl">🥩</span> What Defines Great BBQ?
                </h2>
                <p className="text-stone-300 mb-8">
                  Before naming any restaurant as the "best BBQ in Canggu", you need to understand what separates average from exceptional.
                </p>

                {/* Point 1: Smoke Not Fire */}
                <div className="mb-8 bg-stone-800/50 rounded-xl p-6 border border-stone-700/50">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Flame className="w-5 h-5 text-orange-500" /> 1. It's About Smoke — Not Just Fire
                  </h3>
                  <p className="text-stone-300 mb-4">
                    A lot of places claim to serve BBQ, but they're actually just grilling.
                  </p>
                  <p className="text-stone-400 mb-3 font-medium">Real BBQ means:</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-3 text-stone-300">
                      <Check className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                      Cooking meat slowly over wood smoke
                    </li>
                    <li className="flex items-start gap-3 text-stone-300">
                      <Check className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                      Maintaining low temperatures over long periods
                    </li>
                    <li className="flex items-start gap-3 text-stone-300">
                      <Check className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                      Infusing deep, layered flavour
                    </li>
                  </ul>
                  <p className="text-stone-400 mb-3 font-medium">This is what gives BBQ its signature:</p>
                  <ul className="space-y-2 mb-6">
                    <li className="text-stone-300">• Smoky aroma</li>
                    <li className="text-stone-300">• Tender texture</li>
                    <li className="text-stone-300">• Rich, juicy bite</li>
                  </ul>
                  <p className="text-amber-400 italic">
                    If it's cooked fast over direct flame, it's not BBQ — it's grilled meat.
                  </p>
                </div>

                {/* Point 2: Time */}
                <div className="mb-8 bg-stone-800/50 rounded-xl p-6 border border-stone-700/50">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-orange-500" /> 2. Time is Everything
                  </h3>
                  <p className="text-stone-300 mb-4">
                    Great BBQ cannot be rushed.
                  </p>
                  <p className="text-stone-400 mb-3 font-medium">The best BBQ restaurants in Canggu (and globally) spend:</p>
                  <ul className="space-y-2 mb-6">
                    <li className="text-stone-300">• Hours preparing meat</li>
                    <li className="text-stone-300">• Hours smoking it</li>
                    <li className="text-stone-300">• Hours perfecting consistency</li>
                  </ul>
                  <p className="text-stone-300 mb-4">
                    Brisket alone can take <strong className="text-white">10–16 hours</strong> to cook properly.
                  </p>
                  <p className="text-amber-400 italic">
                    Anything quicker? You'll taste the difference.
                  </p>
                </div>

                {/* Point 3: Simplicity */}
                <div className="mb-8 bg-stone-800/50 rounded-xl p-6 border border-stone-700/50">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <ChefHat className="w-5 h-5 text-orange-500" /> 3. Simplicity Done Perfectly
                  </h3>
                  <p className="text-stone-300 mb-4">
                    Authentic BBQ doesn't rely on heavy sauces or gimmicks.
                  </p>
                  <p className="text-stone-400 mb-3 font-medium">Instead, it focuses on:</p>
                  <ul className="space-y-2 mb-4">
                    <li className="text-stone-300">• Quality cuts of meat</li>
                    <li className="text-stone-300">• Simple seasoning (salt, pepper, rubs)</li>
                    <li className="text-stone-300">• Precision cooking</li>
                  </ul>
                  <p className="text-amber-400 italic">
                    The result is flavour that speaks for itself.
                  </p>
                </div>
              </div>

              {/* Section: Why BBQ is Rare in Bali */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-amber-400 mb-6 flex items-center gap-3">
                  <span className="text-3xl">🔥</span> Why BBQ is Rare in Bali
                </h2>
                <p className="text-stone-300 mb-6">
                  Here's something most people don't realise:
                </p>
                <p className="text-xl text-white mb-8 font-medium">
                  True smokehouse BBQ is actually hard to find in Bali.
                </p>
                <p className="text-stone-300 mb-6">Why?</p>

                <div className="space-y-6">
                  <div className="bg-stone-800/50 rounded-xl p-6 border border-stone-700/50">
                    <h4 className="text-lg font-bold text-white mb-3">🌴 Climate Challenges</h4>
                    <ul className="space-y-2">
                      <li className="text-stone-300">• Heat and humidity affect smoking consistency</li>
                      <li className="text-stone-300">• Wood management becomes harder</li>
                      <li className="text-stone-300">• Timing becomes critical</li>
                    </ul>
                  </div>

                  <div className="bg-stone-800/50 rounded-xl p-6 border border-stone-700/50">
                    <h4 className="text-lg font-bold text-white mb-3">🔥 Equipment & Skill</h4>
                    <p className="text-stone-400 mb-3">Not every kitchen is set up for:</p>
                    <ul className="space-y-2">
                      <li className="text-stone-300">• Proper smokers</li>
                      <li className="text-stone-300">• Long cooking times</li>
                      <li className="text-stone-300">• Consistent output</li>
                    </ul>
                  </div>

                  <div className="bg-stone-800/50 rounded-xl p-6 border border-stone-700/50">
                    <h4 className="text-lg font-bold text-white mb-3">🧠 Knowledge Gap</h4>
                    <p className="text-stone-400 mb-3">Many places:</p>
                    <ul className="space-y-2">
                      <li className="text-stone-300">• Grill instead of smoke</li>
                      <li className="text-stone-300">• Use shortcuts</li>
                      <li className="text-stone-300">• Don't follow authentic BBQ techniques</li>
                    </ul>
                  </div>
                </div>

                <p className="text-amber-400 italic mt-6 text-center text-lg">
                  That's why when you DO find real BBQ in Canggu — it stands out immediately.
                </p>
              </div>

              {/* Section: Texas-Style BBQ */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-amber-400 mb-6 flex items-center gap-3">
                  <span className="text-3xl">🍖</span> Texas-Style BBQ in Canggu
                </h2>
                <p className="text-stone-300 mb-6">
                  When talking about the <strong className="text-white">best BBQ in Canggu</strong>, <Link to="/texas-bbq-canggu-bali" className="text-amber-400 hover:text-amber-300 underline">Texas-style BBQ</Link> is often considered the gold standard.
                </p>

                <div className="bg-stone-800/50 rounded-xl p-6 border border-stone-700/50 mb-6">
                  <h4 className="text-lg font-bold text-white mb-3">What is Texas BBQ?</h4>
                  <p className="text-stone-400 mb-3">Texas BBQ is known for:</p>
                  <ul className="space-y-2 mb-4">
                    <li className="text-stone-300">• Slow-smoked meats</li>
                    <li className="text-stone-300">• Minimal seasoning</li>
                    <li className="text-stone-300">• Heavy focus on brisket</li>
                  </ul>
                  <p className="text-stone-300">
                    It's all about letting <span className="text-amber-400">the meat</span>, <span className="text-amber-400">the smoke</span>, and <span className="text-amber-400">the technique</span> do the work.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-amber-900/30 to-orange-900/20 rounded-xl p-6 border border-amber-500/30">
                  <h4 className="text-xl font-bold text-white mb-4">🥩 The Star: Brisket</h4>
                  <p className="text-stone-300 mb-4">
                    Brisket is often seen as the ultimate test of a BBQ restaurant.
                  </p>
                  <p className="text-stone-400 mb-3">Why? Because it's:</p>
                  <ul className="space-y-2 mb-6">
                    <li className="text-stone-300">• A tough cut of meat</li>
                    <li className="text-stone-300">• Easy to ruin</li>
                    <li className="text-stone-300">• Hard to perfect</li>
                  </ul>
                  <p className="text-stone-400 mb-3">When done right, brisket becomes:</p>
                  <ul className="space-y-2 mb-4">
                    <li className="text-green-400">✓ Incredibly tender</li>
                    <li className="text-green-400">✓ Juicy</li>
                    <li className="text-green-400">✓ Packed with smoky flavour</li>
                  </ul>
                  <p className="text-red-400 italic">
                    When done wrong? Dry, tough, forgettable.
                  </p>
                </div>
              </div>

              {/* Section: More Than Just Texas */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-amber-400 mb-6 flex items-center gap-3">
                  <span className="text-3xl">🌶️</span> Beyond Texas: Caribbean & Peri Peri Fire
                </h2>
                <p className="text-stone-300 mb-6">
                  The best BBQ restaurants don't just do one thing — they bring together multiple fire-driven traditions. That means exploring <Link to="/caribbean-food-canggu-bali" className="text-amber-400 hover:text-amber-300 underline">authentic Caribbean food in Canggu</Link> with jerk chicken and curry goat, or discovering <Link to="/peri-peri-chicken-canggu-bali" className="text-amber-400 hover:text-amber-300 underline">Peri Peri chicken in Bali</Link> with its Portuguese-African roots.
                </p>
                <p className="text-stone-300 mb-6">
                  These cuisines share a common thread: respect for fire, smoke, and bold flavors.
                </p>
              </div>

              {/* Section: The Answer */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-amber-400 mb-6 flex items-center gap-3">
                  <span className="text-3xl">🔥</span> So… What is the Best BBQ Restaurant in Canggu?
                </h2>
                <p className="text-stone-300 mb-6">
                  Let's answer the question directly.
                </p>
                <p className="text-stone-300 mb-4">
                  When looking for the <strong className="text-white">best BBQ in Canggu</strong>, you want a place that:
                </p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-start gap-3 text-stone-300">
                    <Check className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    Specialises in slow-smoked meats
                  </li>
                  <li className="flex items-start gap-3 text-stone-300">
                    <Check className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    Focuses on quality over volume
                  </li>
                  <li className="flex items-start gap-3 text-stone-300">
                    <Check className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    Delivers consistent flavour every time
                  </li>
                  <li className="flex items-start gap-3 text-stone-300">
                    <Check className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    Doesn't cut corners
                  </li>
                </ul>
                <p className="text-stone-300 mb-4">
                  One name that consistently stands out in this space is
                </p>
                <p className="text-3xl font-bold text-amber-400 text-center py-4">
                  👉 <Link to="/" className="hover:text-amber-300 underline">Nico's Smokehouse</Link>
                </p>
              </div>

              {/* Section: Why Nico's */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-amber-400 mb-6 flex items-center gap-3">
                  <span className="text-3xl">🍖</span> Why Nico's Smokehouse Stands Out
                </h2>

                <div className="space-y-6">
                  <div className="bg-stone-800/50 rounded-xl p-6 border border-stone-700/50">
                    <h4 className="text-lg font-bold text-white mb-3">🔥 Real Smokehouse BBQ</h4>
                    <p className="text-stone-300 mb-3">At <Link to="/" className="text-amber-400 hover:text-amber-300 underline">Nico's Smokehouse</Link>, the focus is clear:</p>
                    <ul className="space-y-2">
                      <li className="text-amber-400">👉 Slow-smoked meats</li>
                      <li className="text-amber-400">👉 Authentic BBQ techniques</li>
                      <li className="text-amber-400">👉 No shortcuts</li>
                    </ul>
                    <p className="text-stone-400 mt-4 italic">
                      Everything is built around flavour and process.
                    </p>
                  </div>

                  <div className="bg-stone-800/50 rounded-xl p-6 border border-stone-700/50">
                    <h4 className="text-lg font-bold text-white mb-3">🥩 Signature Meats</h4>
                    <p className="text-stone-400 mb-3">Some of the standout items include:</p>
                    <ul className="space-y-2 mb-4">
                      <li className="text-stone-300">• Slow-smoked brisket</li>
                      <li className="text-stone-300">• BBQ ribs</li>
                      <li className="text-stone-300">• Steak cuts</li>
                      <li className="text-stone-300">• Jerk chicken</li>
                    </ul>
                    <p className="text-stone-400 mb-3">Each dish is prepared with attention to:</p>
                    <ul className="space-y-2">
                      <li className="text-stone-300">• Cooking time</li>
                      <li className="text-stone-300">• Temperature control</li>
                      <li className="text-stone-300">• Flavour balance</li>
                    </ul>
                  </div>

                  <div className="bg-stone-800/50 rounded-xl p-6 border border-stone-700/50">
                    <h4 className="text-lg font-bold text-white mb-3">⏳ Small Batch Approach</h4>
                    <p className="text-stone-300 mb-4">
                      One of the biggest differences?
                    </p>
                    <p className="text-amber-400 mb-4">👉 Not everything is mass-produced.</p>
                    <p className="text-stone-400 mb-3">Cooking in smaller batches allows:</p>
                    <ul className="space-y-2 mb-4">
                      <li className="text-stone-300">• Better consistency</li>
                      <li className="text-stone-300">• Higher quality</li>
                      <li className="text-stone-300">• More control over the final product</li>
                    </ul>
                    <p className="text-stone-400 italic">
                      This is a key reason why places like <Link to="/" className="text-amber-400 hover:text-amber-300 underline">Nico's Smokehouse</Link> are often considered among the best BBQ restaurants in Canggu. Learn more about our <Link to="/texas-bbq-canggu-bali" className="text-amber-400 hover:text-amber-300 underline">Texas BBQ traditions</Link>.
                    </p>
                  </div>

                  <div className="bg-stone-800/50 rounded-xl p-6 border border-stone-700/50">
                    <h4 className="text-lg font-bold text-white mb-3">🔥 Flavour-First Philosophy</h4>
                    <p className="text-stone-400 mb-3">Instead of relying on:</p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start gap-3 text-stone-300">
                        <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                        Heavy sauces
                      </li>
                      <li className="flex items-start gap-3 text-stone-300">
                        <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                        Overcomplicated menus
                      </li>
                    </ul>
                    <p className="text-stone-400 mb-3">The focus stays on:</p>
                    <ul className="space-y-2">
                      <li className="text-amber-400">👉 The meat</li>
                      <li className="text-amber-400">👉 The smoke</li>
                      <li className="text-amber-400">👉 The technique</li>
                    </ul>
                    <p className="text-stone-300 mt-4 font-medium">
                      This is what true BBQ is all about.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section: The Experience */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-amber-400 mb-6 flex items-center gap-3">
                  <span className="text-3xl">🌴</span> The Canggu BBQ Experience
                </h2>
                <p className="text-stone-300 mb-6">
                  Eating BBQ in Canggu isn't just about food — it's about the vibe.
                </p>
                <div className="bg-gradient-to-br from-amber-900/30 to-orange-900/20 rounded-xl p-6 border border-amber-500/30 mb-6">
                  <p className="text-stone-300 mb-4">Picture this:</p>
                  <ul className="space-y-2 mb-4 text-lg">
                    <li className="text-stone-200">☀️ Warm Bali evenings</li>
                    <li className="text-stone-200">💨 The smell of smoke in the air</li>
                    <li className="text-stone-200">🍖 Freshly sliced brisket hitting the plate</li>
                    <li className="text-stone-200">🍻 Good company, cold drinks</li>
                  </ul>
                </div>
                <p className="text-amber-400 text-center text-lg">
                  The best BBQ restaurants create an <strong>experience</strong>, not just a meal.
                </p>
                <p className="text-stone-400 text-center mt-2">
                  And that's what keeps people coming back.
                </p>
              </div>

              {/* Section: How to Choose */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-amber-400 mb-6 flex items-center gap-3">
                  <span className="text-3xl">🧠</span> How to Choose the Best BBQ in Canggu
                </h2>
                <p className="text-stone-300 mb-6">
                  If you're still deciding where to go, here's a quick checklist:
                </p>

                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                  <div className="bg-green-900/20 rounded-xl p-6 border border-green-500/30">
                    <h4 className="text-lg font-bold text-green-400 mb-4">✅ Look for:</h4>
                    <ul className="space-y-2">
                      <li className="text-stone-300">• Slow-smoked meats (not grilled)</li>
                      <li className="text-stone-300">• Brisket on the menu</li>
                      <li className="text-stone-300">• Consistent reviews mentioning BBQ</li>
                      <li className="text-stone-300">• A focused, specialised menu</li>
                    </ul>
                  </div>
                  <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/30">
                    <h4 className="text-lg font-bold text-red-400 mb-4">❌ Avoid:</h4>
                    <ul className="space-y-2">
                      <li className="text-stone-300">• "BBQ" that's just grilled meat</li>
                      <li className="text-stone-300">• Overloaded menus with no specialty</li>
                      <li className="text-stone-300">• Fast-cooked meats claiming to be smoked</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-stone-800/50 rounded-xl p-6 border border-stone-700/50">
                  <h4 className="text-lg font-bold text-white mb-4">⭐ What People Are Really Looking For</h4>
                  <p className="text-stone-300 mb-4">
                    When people search "best BBQ in Canggu" or "BBQ restaurant Bali", they're not just looking for food.
                  </p>
                  <p className="text-stone-400 mb-3">They're looking for:</p>
                  <ul className="space-y-2 mb-4">
                    <li className="text-amber-400">• Authenticity</li>
                    <li className="text-amber-400">• Quality</li>
                    <li className="text-amber-400">• Something memorable</li>
                  </ul>
                  <p className="text-stone-300 italic">
                    And that's exactly what separates good from great.
                  </p>
                </div>
              </div>

              {/* Section: Final Thoughts */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-amber-400 mb-6 flex items-center gap-3">
                  <span className="text-3xl">🔥</span> Final Thoughts
                </h2>
                <p className="text-stone-300 mb-6">
                  So, what is the <strong className="text-white">best BBQ restaurant in Canggu</strong>?
                </p>
                <p className="text-stone-300 mb-6">
                  It comes down to one thing:
                </p>
                <p className="text-2xl text-amber-400 font-bold text-center mb-8">
                  👉 Who respects the process.
                </p>
                <div className="text-center space-y-2 text-stone-300 mb-8">
                  <p>BBQ is not fast food.</p>
                  <p>It's not a shortcut cuisine.</p>
                  <p className="text-white font-medium">It's a craft.</p>
                </div>
                <p className="text-stone-300 mb-6">
                  And when done right — it's <strong className="text-white">unforgettable</strong>.
                </p>
                <p className="text-stone-300 mb-4">
                  If you're serious about finding real BBQ in Canggu, focus on:
                </p>
                <ul className="space-y-2 text-center text-lg mb-8">
                  <li className="text-amber-400">💨 Smoke</li>
                  <li className="text-amber-400">⏳ Time</li>
                  <li className="text-amber-400">🔥 Technique</li>
                </ul>
                <p className="text-stone-300 text-center">
                  …and you'll end up exactly where you need to be.
                </p>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-br from-amber-900/40 to-orange-900/30 rounded-2xl p-8 border border-amber-500/40 text-center">
                <h2 className="text-2xl font-bold text-white mb-4">
                  🔥 Ready to Experience the Best BBQ in Canggu?
                </h2>
                <p className="text-stone-300 mb-6">
                  If you're craving slow-smoked brisket, tender BBQ ribs, and real smokehouse flavour — then it's time to experience it for yourself.
                </p>
                <p className="text-stone-300 mb-8">
                  👉 Visit <Link to="/" className="text-amber-400 hover:text-amber-300 underline font-bold">Nico's Smokehouse</Link> and see why it's becoming one of the most talked-about BBQ spots in Canggu.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/book-table"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-lg hover:from-amber-600 hover:to-orange-700 transition-all"
                  >
                    Book a Table
                  </Link>
                  <Link 
                    to="/order"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-stone-800 border border-amber-500/50 text-amber-400 font-bold rounded-lg hover:bg-stone-700 transition-all"
                  >
                    View Menu
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Related Content */}
        <section className="py-12 px-4 border-t border-stone-800">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-6 text-center">Related Articles</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link 
                to="/blog/where-to-get-authentic-bbq-in-canggu-bali"
                className="bg-stone-800/50 rounded-xl p-4 border border-stone-700/50 hover:border-amber-500/50 transition-colors"
              >
                <p className="text-amber-400 font-medium mb-2">Where to Get Authentic BBQ in Canggu</p>
                <p className="text-stone-400 text-sm">The complete guide to finding real smokehouse BBQ</p>
              </Link>
              <Link 
                to="/blog/texas-smoke-meets-caribbean-soul-bbq-king-canggu"
                className="bg-stone-800/50 rounded-xl p-4 border border-stone-700/50 hover:border-amber-500/50 transition-colors"
              >
                <p className="text-amber-400 font-medium mb-2">Texas Smoke Meets Caribbean Soul</p>
                <p className="text-stone-400 text-sm">How three fire traditions unite at one table</p>
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
                <p className="text-stone-400 text-sm">Portuguese-African fire meets tropical paradise</p>
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
        <footer className="py-8 px-4 border-t border-stone-800">
          <div className="max-w-4xl mx-auto text-center">
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
              © {new Date().getFullYear()} Nico's Smokehouse. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
