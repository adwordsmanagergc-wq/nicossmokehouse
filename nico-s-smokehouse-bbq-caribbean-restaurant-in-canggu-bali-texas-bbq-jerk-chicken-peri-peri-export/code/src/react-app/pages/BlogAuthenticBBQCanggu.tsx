import { useEffect } from 'react';
import { Link } from 'react-router';
import { ArrowLeft, Flame, Clock, ChefHat, Check, X, TreePine, Thermometer, Zap, Eye, BarChart3, Star } from 'lucide-react';

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

export default function BlogAuthenticBBQCanggu() {
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
              Where to Get Authentic BBQ in Canggu, Bali
            </h1>
            <p className="text-stone-400 text-sm">
              The complete guide to finding real smokehouse BBQ — not just grilled meat
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
              <p className="text-xl text-stone-200 leading-relaxed mb-6">
                If you're trying to find <strong className="text-amber-400">authentic BBQ in Canggu</strong>, you need to know one thing first:
              </p>
              
              <p className="text-2xl text-amber-400 font-bold mb-8 text-center">
                👉 Not all BBQ is actually BBQ.
              </p>
              
              <p className="text-stone-300 leading-relaxed mb-6">
                Canggu is filled with restaurants claiming to serve BBQ, but in reality, most are simply grilling meat over high heat. While that can still taste good, it's not the same as true smokehouse BBQ — the kind that's slow-cooked, deeply flavoured, and built on technique.
              </p>
              
              <p className="text-stone-300 leading-relaxed mb-6">
                So where can you actually get real, authentic BBQ in Canggu, Bali?
              </p>
              
              <p className="text-stone-300 leading-relaxed mb-12">
                This guide breaks it down — what authentic BBQ really means, what to look for, and where to go if you want the real experience.
              </p>

              {/* Section: What Does Authentic BBQ Mean */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-amber-400 mb-6 flex items-center gap-3">
                  <span className="text-3xl">🥩</span> What Does "Authentic BBQ" Actually Mean?
                </h2>
                <p className="text-stone-300 mb-8">
                  Before choosing a restaurant, you need to understand what separates authentic BBQ from everything else.
                </p>

                {/* BBQ vs Grilling */}
                <div className="mb-8 bg-gradient-to-br from-red-900/30 to-orange-900/20 rounded-xl p-6 border border-red-500/30">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Flame className="w-5 h-5 text-orange-500" /> BBQ vs Grilling (The Biggest Misunderstanding)
                  </h3>
                  <p className="text-stone-300 mb-4">
                    Most people assume BBQ = anything cooked over fire.
                  </p>
                  <p className="text-stone-300 mb-4">
                    But in reality:
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    <div className="bg-stone-800/50 rounded-lg p-4">
                      <p className="text-red-400 font-bold mb-2">Grilling</p>
                      <p className="text-stone-400 text-sm">Fast cooking over direct heat</p>
                    </div>
                    <div className="bg-stone-800/50 rounded-lg p-4">
                      <p className="text-green-400 font-bold mb-2">BBQ (Barbecue)</p>
                      <p className="text-stone-400 text-sm">Slow cooking using indirect heat + smoke</p>
                    </div>
                  </div>
                  <p className="text-stone-400 mb-3 font-medium">Authentic BBQ involves:</p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start gap-3 text-stone-300">
                      <Check className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                      Low temperatures
                    </li>
                    <li className="flex items-start gap-3 text-stone-300">
                      <Check className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                      Long cooking times
                    </li>
                    <li className="flex items-start gap-3 text-stone-300">
                      <Check className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                      Wood smoke as a key flavour element
                    </li>
                  </ul>
                  <p className="text-amber-400 italic font-medium">
                    If your food is ready in minutes, it's not BBQ.
                  </p>
                </div>

                {/* Time is Non-Negotiable */}
                <div className="mb-8 bg-stone-800/50 rounded-xl p-6 border border-stone-700/50">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-orange-500" /> Time is Non-Negotiable
                  </h3>
                  <p className="text-stone-300 mb-4">
                    True BBQ requires patience.
                  </p>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center bg-stone-700/50 rounded-lg p-4">
                      <p className="text-2xl font-bold text-amber-400">10-16</p>
                      <p className="text-stone-400 text-xs">hours for Brisket</p>
                    </div>
                    <div className="text-center bg-stone-700/50 rounded-lg p-4">
                      <p className="text-2xl font-bold text-amber-400">4-6</p>
                      <p className="text-stone-400 text-xs">hours for Ribs</p>
                    </div>
                    <div className="text-center bg-stone-700/50 rounded-lg p-4">
                      <p className="text-2xl font-bold text-amber-400">3+</p>
                      <p className="text-stone-400 text-xs">hours for Chicken</p>
                    </div>
                  </div>
                  <p className="text-stone-300 mb-4">
                    This isn't something you can rush.
                  </p>
                  <p className="text-stone-400 italic">
                    That's why authentic BBQ restaurants are rare — it takes commitment, planning, and consistency. Learn more about <Link to="/texas-bbq-canggu-bali" className="text-amber-400 hover:text-amber-300 underline">Texas BBQ traditions</Link> and why time is everything.
                  </p>
                </div>

                {/* Smoke is the Signature */}
                <div className="mb-8 bg-stone-800/50 rounded-xl p-6 border border-stone-700/50">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <TreePine className="w-5 h-5 text-orange-500" /> Smoke is the Signature
                  </h3>
                  <p className="text-stone-300 mb-4">
                    The defining feature of authentic BBQ is smoke flavour.
                  </p>
                  <p className="text-stone-400 mb-3 font-medium">This comes from:</p>
                  <ul className="space-y-2 mb-6">
                    <li className="text-stone-300">• Burning wood (not just gas or charcoal)</li>
                    <li className="text-stone-300">• Controlling airflow and temperature</li>
                    <li className="text-stone-300">• Letting the smoke penetrate the meat over time</li>
                  </ul>
                  <p className="text-stone-400 mb-3 font-medium">You'll notice:</p>
                  <ul className="space-y-2">
                    <li className="text-amber-400">✓ A smoke ring in brisket</li>
                    <li className="text-amber-400">✓ A deep, rich aroma</li>
                    <li className="text-amber-400">✓ Flavour that can't be replicated with sauce</li>
                  </ul>
                </div>
              </div>

              {/* Section: Why Authentic BBQ is Hard to Find */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-amber-400 mb-6 flex items-center gap-3">
                  <span className="text-3xl">🌴</span> Why Authentic BBQ is Hard to Find in Canggu
                </h2>
                <p className="text-stone-300 mb-6">
                  Canggu has one of Bali's best food scenes — but authentic BBQ is still relatively rare.
                </p>
                <p className="text-stone-300 mb-6">Here's why:</p>

                <div className="space-y-6">
                  <div className="bg-stone-800/50 rounded-xl p-6 border border-stone-700/50">
                    <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                      <Flame className="w-5 h-5 text-red-500" /> Equipment Limitations
                    </h4>
                    <p className="text-stone-400 mb-3">Not every restaurant has:</p>
                    <ul className="space-y-2">
                      <li className="text-stone-300">• Proper smokers</li>
                      <li className="text-stone-300">• Space for long cooking processes</li>
                      <li className="text-stone-300">• Staff trained in BBQ techniques</li>
                    </ul>
                  </div>

                  <div className="bg-stone-800/50 rounded-xl p-6 border border-stone-700/50">
                    <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                      <Thermometer className="w-5 h-5 text-blue-500" /> Bali's Climate
                    </h4>
                    <p className="text-stone-400 mb-3">Heat and humidity affect:</p>
                    <ul className="space-y-2 mb-4">
                      <li className="text-stone-300">• Meat storage</li>
                      <li className="text-stone-300">• Smoking conditions</li>
                      <li className="text-stone-300">• Consistency</li>
                    </ul>
                    <p className="text-stone-400 italic">
                      Maintaining proper BBQ standards in Bali takes serious skill.
                    </p>
                  </div>

                  <div className="bg-stone-800/50 rounded-xl p-6 border border-stone-700/50">
                    <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-yellow-500" /> Time vs Demand
                    </h4>
                    <p className="text-stone-400 mb-3">Most restaurants prioritise:</p>
                    <ul className="space-y-2 mb-4">
                      <li className="text-stone-300">• Fast service</li>
                      <li className="text-stone-300">• High turnover</li>
                    </ul>
                    <p className="text-stone-300 mb-4">BBQ doesn't work like that.</p>
                    <ul className="space-y-2">
                      <li className="text-amber-400">👉 It's slow.</li>
                      <li className="text-amber-400">👉 It's planned.</li>
                      <li className="text-amber-400">👉 It's limited.</li>
                    </ul>
                    <p className="text-stone-400 mt-4 italic">
                      And that's exactly what makes it special.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section: What to Look For */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-amber-400 mb-6 flex items-center gap-3">
                  <span className="text-3xl">🍖</span> What to Look for in Authentic BBQ
                </h2>
                <p className="text-stone-300 mb-8">
                  If you want to find real BBQ in Canggu, here's what matters:
                </p>

                <div className="space-y-6">
                  <div className="bg-stone-800/50 rounded-xl p-6 border border-stone-700/50">
                    <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                      <Check className="w-5 h-5 text-green-500" /> 1. A Focused Menu
                    </h4>
                    <p className="text-stone-300 mb-4">
                      Authentic BBQ places don't try to do everything.
                    </p>
                    <p className="text-stone-400 mb-3">Look for:</p>
                    <ul className="space-y-2 mb-4">
                      <li className="text-stone-300">• Brisket</li>
                      <li className="text-stone-300">• Ribs</li>
                      <li className="text-stone-300">• Smoked meats</li>
                    </ul>
                    <p className="text-amber-400 italic">
                      If the menu is huge and random, BBQ probably isn't the focus.
                    </p>
                  </div>

                  <div className="bg-stone-800/50 rounded-xl p-6 border border-stone-700/50">
                    <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                      <Eye className="w-5 h-5 text-green-500" /> 2. Visible Smoking Process
                    </h4>
                    <p className="text-stone-300 mb-4">
                      Great BBQ spots are proud of their process.
                    </p>
                    <p className="text-stone-400 mb-3">They'll:</p>
                    <ul className="space-y-2">
                      <li className="text-stone-300">• Talk about smoking times</li>
                      <li className="text-stone-300">• Highlight their technique</li>
                      <li className="text-stone-300">• Showcase their meats</li>
                    </ul>
                  </div>

                  <div className="bg-stone-800/50 rounded-xl p-6 border border-stone-700/50">
                    <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                      <BarChart3 className="w-5 h-5 text-green-500" /> 3. Consistency Over Volume
                    </h4>
                    <p className="text-stone-300 mb-4">
                      Authentic BBQ is often:
                    </p>
                    <ul className="space-y-2 mb-4">
                      <li className="text-stone-300">• Cooked in batches</li>
                      <li className="text-stone-300">• Limited daily</li>
                    </ul>
                    <p className="text-amber-400 italic">
                      This ensures quality stays high.
                    </p>
                  </div>

                  <div className="bg-stone-800/50 rounded-xl p-6 border border-stone-700/50">
                    <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                      <ChefHat className="w-5 h-5 text-green-500" /> 4. Flavour Without Overpowering Sauce
                    </h4>
                    <p className="text-stone-300 mb-4">
                      Real BBQ doesn't rely on heavy sauces.
                    </p>
                    <p className="text-stone-400 mb-3">The flavour comes from:</p>
                    <ul className="space-y-2">
                      <li className="text-amber-400">👉 The meat</li>
                      <li className="text-amber-400">👉 The smoke</li>
                      <li className="text-amber-400">👉 The cooking method</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Section: Where to Get Authentic BBQ */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-amber-400 mb-6 flex items-center gap-3">
                  <span className="text-3xl">🔥</span> Where to Get Authentic BBQ in Canggu
                </h2>
                <p className="text-stone-300 mb-6">
                  Now let's answer the real question.
                </p>
                <p className="text-stone-300 mb-6">
                  If you're looking for <strong className="text-white">authentic BBQ in Canggu</strong>, one place that consistently delivers a true smokehouse experience is:
                </p>
                <p className="text-3xl font-bold text-amber-400 text-center py-4">
                  👉 <Link to="/" className="hover:text-amber-300 underline">Nico's Smokehouse</Link>
                </p>
              </div>

              {/* Section: Why Nico's Smokehouse */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-amber-400 mb-6 flex items-center gap-3">
                  <span className="text-3xl">🍖</span> Why Nico's Smokehouse is a Go-To for Real BBQ
                </h2>

                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-amber-900/30 to-orange-900/20 rounded-xl p-6 border border-amber-500/30">
                    <h4 className="text-lg font-bold text-white mb-3">🔥 Built Around Smokehouse Cooking</h4>
                    <p className="text-stone-300 mb-4">
                      <Link to="/" className="text-amber-400 hover:text-amber-300 underline">Nico's Smokehouse</Link> isn't trying to be everything — it focuses on what matters:
                    </p>
                    <ul className="space-y-2 mb-4">
                      <li className="text-amber-400">👉 Slow-smoked meats</li>
                      <li className="text-amber-400">👉 Real BBQ technique</li>
                      <li className="text-amber-400">👉 Flavour-first cooking</li>
                    </ul>
                    <p className="text-stone-400 italic">
                      This is what sets it apart from typical grill-style restaurants. Discover more about our <Link to="/texas-bbq-canggu-bali" className="text-amber-400 hover:text-amber-300 underline">Texas BBQ approach</Link>.
                    </p>
                  </div>

                  <div className="bg-stone-800/50 rounded-xl p-6 border border-stone-700/50">
                    <h4 className="text-lg font-bold text-white mb-3">🥩 Signature Smoked Meats</h4>
                    <p className="text-stone-400 mb-3">Some of the key offerings include:</p>
                    <ul className="space-y-2 mb-4">
                      <li className="text-stone-300">• Slow-smoked brisket</li>
                      <li className="text-stone-300">• BBQ ribs</li>
                      <li className="text-stone-300">• Steak cuts</li>
                      <li className="text-stone-300">• Jerk chicken</li>
                    </ul>
                    <p className="text-stone-400 mb-3">Each dish reflects:</p>
                    <ul className="space-y-2">
                      <li className="text-stone-300">• Time investment</li>
                      <li className="text-stone-300">• Proper smoking methods</li>
                      <li className="text-stone-300">• Attention to detail</li>
                    </ul>
                  </div>

                  <div className="bg-stone-800/50 rounded-xl p-6 border border-stone-700/50">
                    <h4 className="text-lg font-bold text-white mb-3">⏳ Small Batch, High Quality</h4>
                    <p className="text-stone-300 mb-4">
                      One of the biggest differences you'll notice:
                    </p>
                    <p className="text-amber-400 mb-4">👉 Not everything is mass-produced.</p>
                    <p className="text-stone-400 mb-3">Cooking in smaller batches allows:</p>
                    <ul className="space-y-2 mb-4">
                      <li className="text-stone-300">• Better control</li>
                      <li className="text-stone-300">• Consistent results</li>
                      <li className="text-stone-300">• Higher-quality output</li>
                    </ul>
                    <p className="text-stone-400 italic">
                      This is a hallmark of authentic BBQ.
                    </p>
                  </div>

                  <div className="bg-stone-800/50 rounded-xl p-6 border border-stone-700/50">
                    <h4 className="text-lg font-bold text-white mb-3">🔥 Real Flavour, No Shortcuts</h4>
                    <p className="text-stone-400 mb-3">Instead of relying on:</p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start gap-3 text-stone-300">
                        <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                        Heavy sauces
                      </li>
                      <li className="flex items-start gap-3 text-stone-300">
                        <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                        Overcomplicated dishes
                      </li>
                    </ul>
                    <p className="text-stone-400 mb-3">The focus is on:</p>
                    <ul className="space-y-2">
                      <li className="text-amber-400">👉 Natural flavour</li>
                      <li className="text-amber-400">👉 Smoke</li>
                      <li className="text-amber-400">👉 Technique</li>
                    </ul>
                    <p className="text-stone-300 mt-4 font-medium">
                      That's what authentic BBQ should taste like.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section: The Experience */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-amber-400 mb-6 flex items-center gap-3">
                  <span className="text-3xl">🌴</span> The Experience of Authentic BBQ in Canggu
                </h2>
                <p className="text-stone-300 mb-6">
                  Eating BBQ in Canggu is about more than just food.
                </p>
                <div className="bg-gradient-to-br from-amber-900/30 to-orange-900/20 rounded-xl p-6 border border-amber-500/30 mb-6">
                  <p className="text-stone-300 mb-4">It's:</p>
                  <ul className="space-y-2 text-lg">
                    <li className="text-stone-200">💨 The smell of smoke in the air</li>
                    <li className="text-stone-200">🍖 The visual of meat being sliced fresh</li>
                    <li className="text-stone-200">✨ The anticipation of that first bite</li>
                  </ul>
                </div>
                <p className="text-stone-300 mb-4">When done right, BBQ becomes:</p>
                <ul className="space-y-2 text-center mb-6">
                  <li className="text-amber-400">👉 An experience</li>
                  <li className="text-amber-400">👉 A memory</li>
                  <li className="text-amber-400">👉 Something you come back for</li>
                </ul>
                <p className="text-stone-400 text-center">
                  <Link to="/" className="text-amber-400 hover:text-amber-300 underline">Visit Nico's Smokehouse</Link> for the full experience.
                </p>
              </div>

              {/* Section: Beyond Just BBQ */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-amber-400 mb-6 flex items-center gap-3">
                  <span className="text-3xl">🌶️</span> More Than One Fire Tradition
                </h2>
                <p className="text-stone-300 mb-6">
                  What makes <Link to="/" className="text-amber-400 hover:text-amber-300 underline">Nico's Smokehouse</Link> truly unique is that it doesn't just do BBQ — it brings together <strong className="text-white">three fire-driven cuisines</strong> under one roof.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <Link to="/caribbean-food-canggu-bali" className="bg-stone-800/50 rounded-xl p-4 border border-stone-700/50 hover:border-amber-500/50 transition-colors">
                    <p className="text-amber-400 font-bold mb-2">🇯🇲 Caribbean Soul Food</p>
                    <p className="text-stone-400 text-sm">Jerk chicken, curry goat, oxtail & island sides</p>
                  </Link>
                  <Link to="/peri-peri-chicken-canggu-bali" className="bg-stone-800/50 rounded-xl p-4 border border-stone-700/50 hover:border-amber-500/50 transition-colors">
                    <p className="text-amber-400 font-bold mb-2">🔥 Peri Peri Fire</p>
                    <p className="text-stone-400 text-sm">Portuguese-African flame-grilled chicken</p>
                  </Link>
                </div>
                <p className="text-stone-400 text-sm text-center">
                  Planning an event? Check out our <Link to="/catering-bali" className="text-amber-400 hover:text-amber-300 underline">BBQ catering services</Link> for villa parties, weddings & corporate events.
                </p>
              </div>

              {/* Section: Common Mistakes */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-amber-400 mb-6 flex items-center gap-3">
                  <span className="text-3xl">🧠</span> Common Mistakes People Make When Choosing BBQ
                </h2>
                <p className="text-stone-300 mb-6">
                  If you're new to BBQ, it's easy to get misled.
                </p>

                <div className="space-y-4">
                  <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/30">
                    <h4 className="text-lg font-bold text-red-400 mb-3">❌ Mistake 1: Assuming All BBQ is the Same</h4>
                    <p className="text-stone-300 mb-2">It's not.</p>
                    <p className="text-stone-400">Grilled meat ≠ BBQ.</p>
                  </div>

                  <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/30">
                    <h4 className="text-lg font-bold text-red-400 mb-3">❌ Mistake 2: Judging by Sauce</h4>
                    <p className="text-stone-300">Great BBQ doesn't need to be covered in sauce.</p>
                  </div>

                  <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/30">
                    <h4 className="text-lg font-bold text-red-400 mb-3">❌ Mistake 3: Choosing Convenience Over Quality</h4>
                    <p className="text-stone-300">Fast food is easy — but BBQ is about patience.</p>
                  </div>
                </div>
              </div>

              {/* Section: Why It's Worth It */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-amber-400 mb-6 flex items-center gap-3">
                  <Star className="w-7 h-7" /> Why Authentic BBQ is Worth Seeking Out
                </h2>
                <p className="text-stone-300 mb-6">
                  Once you've had real BBQ, the difference is obvious.
                </p>
                <div className="bg-stone-800/50 rounded-xl p-6 border border-stone-700/50 mb-6">
                  <p className="text-stone-400 mb-3">You'll notice:</p>
                  <ul className="space-y-2">
                    <li className="text-amber-400">✓ Deeper flavour</li>
                    <li className="text-amber-400">✓ Better texture</li>
                    <li className="text-amber-400">✓ More satisfying meals</li>
                  </ul>
                </div>
                <p className="text-stone-300 text-center italic">
                  And suddenly, regular grilled food doesn't compare.
                </p>
              </div>

              {/* Section: Final Thoughts */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-amber-400 mb-6 flex items-center gap-3">
                  <span className="text-3xl">🔥</span> Final Thoughts
                </h2>
                <p className="text-stone-300 mb-6">
                  So, where can you get <strong className="text-white">authentic BBQ in Canggu, Bali</strong>?
                </p>
                <p className="text-stone-300 mb-6">
                  The answer comes down to one thing:
                </p>
                <p className="text-2xl text-amber-400 font-bold text-center mb-8">
                  👉 Find a place that respects the process.
                </p>
                <div className="text-center space-y-2 text-stone-300 mb-8">
                  <p>Authentic BBQ is:</p>
                  <p className="text-amber-400">Slow</p>
                  <p className="text-amber-400">Technical</p>
                  <p className="text-amber-400">Built on tradition</p>
                </div>
                <p className="text-stone-300 mb-6">
                  And when done right, it delivers something you simply can't fake.
                </p>
                <p className="text-stone-300 mb-8">
                  For those looking to experience real smokehouse BBQ in Canggu,<br />
                  👉 <Link to="/" className="text-amber-400 hover:text-amber-300 underline font-bold">Nico's Smokehouse</Link> is one of the standout options worth visiting.
                </p>
                <p className="text-stone-400 text-sm text-center">
                  Learn more about our <Link to="/texas-bbq-canggu-bali" className="text-amber-400 hover:text-amber-300 underline">Texas BBQ traditions</Link> and what makes our smokehouse special.
                </p>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-br from-amber-900/40 to-orange-900/30 rounded-2xl p-8 border border-amber-500/40 text-center">
                <h2 className="text-2xl font-bold text-white mb-4">
                  🔥 Ready to Try Authentic BBQ in Canggu?
                </h2>
                <p className="text-stone-300 mb-6">
                  If you're craving slow-smoked brisket, tender BBQ ribs, and real smokehouse flavour — then it's time to experience it properly.
                </p>
                <p className="text-stone-300 mb-8">
                  👉 Head to <strong className="text-amber-400">Nico's Smokehouse</strong> and see what authentic BBQ is all about.
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
                to="/blog/what-is-the-best-bbq-restaurant-in-canggu"
                className="bg-stone-800/50 rounded-xl p-4 border border-stone-700/50 hover:border-amber-500/50 transition-colors"
              >
                <p className="text-amber-400 font-medium mb-2">Best BBQ Restaurant in Canggu</p>
                <p className="text-stone-400 text-sm">Finding authentic slow-smoked BBQ in Bali</p>
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
