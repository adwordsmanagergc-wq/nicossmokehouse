import { Link } from 'react-router';
import { MapPin, Utensils, ChevronDown, Flame } from 'lucide-react';
import { useState, useEffect } from 'react';
import SEO from "@/react-app/components/SEO";

const LOGO_URL = "https://019d0a46-9da2-77c5-9887-de886a0fdfda.mochausercontent.com/nicos-logo-white.png";
const HERO_IMAGE = "https://019d0a46-9da2-77c5-9887-de886a0fdfda.mochausercontent.com/peri-peri-chicken-canggu-bali.jpg";
const WOOD_BG = "https://019d0a46-9da2-77c5-9887-de886a0fdfda.mochausercontent.com/openart-image_1773994724931_39257367_1773994725151_04d1e791.jpg";

const SLIDESHOW_IMAGES = [
  "https://019d0a46-9da2-77c5-9887-de886a0fdfda.mochausercontent.com/Screenshot-2026-03-20-at-4.30.38-pm.png",
  "https://019d0a46-9da2-77c5-9887-de886a0fdfda.mochausercontent.com/Screenshot-2026-03-20-at-4.30.50-pm.png",
  "https://019d0a46-9da2-77c5-9887-de886a0fdfda.mochausercontent.com/Screenshot-2026-03-20-at-4.30.59-pm.png",
  "https://019d0a46-9da2-77c5-9887-de886a0fdfda.mochausercontent.com/Screenshot-2026-03-20-at-4.30.26-pm.png",
  "https://019d0a46-9da2-77c5-9887-de886a0fdfda.mochausercontent.com/Screenshot-2026-03-20-at-4.30.06-pm.png",
  "https://019d0a46-9da2-77c5-9887-de886a0fdfda.mochausercontent.com/Screenshot-2026-03-20-at-4.31.10-pm.png",
  "https://019d0a46-9da2-77c5-9887-de886a0fdfda.mochausercontent.com/Screenshot-2026-03-20-at-4.31.18-pm.png",
  "https://019d0a46-9da2-77c5-9887-de886a0fdfda.mochausercontent.com/Screenshot-2026-03-20-at-4.31.34-pm.png",
  "https://019d0a46-9da2-77c5-9887-de886a0fdfda.mochausercontent.com/Screenshot-2026-03-20-at-4.31.42-pm.png",
  "https://019d0a46-9da2-77c5-9887-de886a0fdfda.mochausercontent.com/Screenshot-2026-03-20-at-4.31.58-pm.png",
  "https://019d0a46-9da2-77c5-9887-de886a0fdfda.mochausercontent.com/Screenshot-2026-03-20-at-11.24.28-pm.png",
  "https://019d0a46-9da2-77c5-9887-de886a0fdfda.mochausercontent.com/Screenshot-2026-03-20-at-11.23.15-pm.png",
  "https://019d0a46-9da2-77c5-9887-de886a0fdfda.mochausercontent.com/Screenshot-2026-03-20-at-11.23.29-pm.png",
  "https://019d0a46-9da2-77c5-9887-de886a0fdfda.mochausercontent.com/Screenshot_20260321_221627_Drive.jpg",
  "https://019d0a46-9da2-77c5-9887-de886a0fdfda.mochausercontent.com/Screenshot_20260321_221654_Drive.jpg",
  "https://019d0a46-9da2-77c5-9887-de886a0fdfda.mochausercontent.com/Screenshot_20260321_221750_Drive.jpg",
  "https://019d0a46-9da2-77c5-9887-de886a0fdfda.mochausercontent.com/Screenshot_20260321_221805_Drive.jpg",
  "https://019d0a46-9da2-77c5-9887-de886a0fdfda.mochausercontent.com/Screenshot_20260321_221531_Drive.jpg",
];

const PERI_PERI_DISHES = [
  {
    name: "Peri Peri Chicken",
    description: "The star of Portuguese-African cuisine — chicken marinated in peri peri sauce made from African Bird's Eye chillies, garlic, lemon, and herbs, then flame-grilled until the skin is charred and crispy while the meat stays juicy. Available in heat levels from mild lemon & herb to extra hot for the brave."
  },
  {
    name: "Peri Peri Chicken Breast",
    description: "Tender, juicy chicken breast marinated in our signature peri peri sauce and flame-grilled to perfection. A leaner option for those who want all the fiery Portuguese-African flavor without the skin. Choose your heat level and pair with your favorite sides."
  },
  {
    name: "Peri Peri Chicken Burger",
    description: "A flame-grilled peri peri chicken fillet in a soft brioche bun with fresh lettuce, tomato, and our signature peri peri mayo. The perfect handheld way to enjoy that authentic Portuguese fire. Upgrade your heat level for an extra kick."
  },
  {
    name: "Spatchcock Chicken",
    description: "A whole chicken butterflied flat and marinated in peri peri for maximum surface area and flavor absorption. Grilled over open flames, the spatchcock technique ensures even cooking — crispy skin everywhere and perfectly juicy meat throughout."
  },
  {
    name: "Peri Peri Fries",
    description: "Crispy golden fries dusted with our secret peri peri seasoning — the perfect side to accompany your flame-grilled chicken. Just the right amount of heat and flavor in every bite."
  },
  {
    name: "Portuguese Rice",
    description: "Fragrant rice cooked with tomatoes, peppers, onions, and a hint of peri peri spice. The perfect accompaniment to flame-grilled chicken, soaking up all the smoky, spicy juices from the meat."
  },
  {
    name: "Coleslaw",
    description: "Creamy, tangy coleslaw that provides the perfect cooling contrast to the heat of peri peri chicken. The crunch of fresh cabbage and carrots complements the charred, smoky chicken perfectly."
  }
];

const FAQS = [
  {
    question: "Where can I find Peri Peri chicken in Canggu, Bali?",
    answer: "Nico's Smokehouse in Canggu serves authentic flame-grilled Peri Peri chicken with traditional Portuguese-African recipes. Located on Jalan Raya Canggu in Tibubeneng, it's the best spot in Bali for real Peri Peri alongside Texas BBQ and Caribbean cuisine."
  },
  {
    question: "What is Peri Peri chicken and where does it come from?",
    answer: "Peri Peri (also called Piri Piri) chicken originated in Mozambique and Angola when Portuguese colonizers combined African Bird's Eye chillies with European cooking techniques. The chicken is marinated in a sauce of these fiery chillies with garlic, lemon, and herbs, then flame-grilled. Nando's made it world-famous, but at Nico's Smokehouse we serve our own authentic recipe."
  },
  {
    question: "Is there a Nando's in Bali?",
    answer: "There's no Nando's in Bali — but honestly, you've got something better. Nico's Smokehouse in Canggu serves authentic flame-grilled Peri Peri chicken using traditional Portuguese-African recipes that put the chain to shame. Fresh chicken grilled to order, 6 signature sauces from Lemon + Herb to Extra Hot, and none of the fast-food compromises. If you've been craving Nando's, come see why the locals prefer Nico's."
  },
  {
    question: "How spicy is Peri Peri chicken?",
    answer: "Peri Peri heat levels range from mild to extremely hot. At Nico's Smokehouse, you can choose your spice level — from Lemon & Herb (no heat, just flavor) through Mild, Medium, Hot, and Extra Hot. The heat comes from African Bird's Eye chillies, which have a fruity, citrusy burn rather than just pure fire."
  },
  {
    question: "What makes Peri Peri different from other hot sauces?",
    answer: "Peri Peri is more than just heat — it's a complex flavor profile combining African Bird's Eye chillies with garlic, lemon, vinegar, and herbs like oregano and bay leaves. The acidity and citrus brighten the flavor while the chillies provide heat. It's designed to enhance the taste of grilled chicken, not just make it spicy."
  },
  {
    question: "What should I order with Peri Peri chicken?",
    answer: "Classic sides include Portuguese rice (tomato and pepper rice), coleslaw for cooling contrast, grilled corn with peri peri butter, and chips (fries). At Nico's Smokehouse, you can also pair your Peri Peri with Caribbean sides like rice and peas or fried plantains for a unique fusion experience."
  },
  {
    question: "Can I get Peri Peri chicken delivered in Canggu?",
    answer: "Yes! Nico's Smokehouse offers delivery through GoFood. Order flame-grilled Peri Peri chicken, wings, and all the sides delivered right to your door in the Canggu area."
  },
  {
    question: "Is Peri Peri chicken healthy?",
    answer: "Flame-grilled Peri Peri chicken is one of the healthier fast-food options — it's high in protein, the chillies boost metabolism, and grilling means less added fat than frying. At Nico's Smokehouse, we grill fresh chicken over open flames with no deep frying involved."
  }
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-amber-800/30">
      <SEO path="/peri-peri-chicken-canggu-bali" title="Peri Peri Chicken in Canggu, Bali | Nico's Smokehouse" description="Flame-grilled Peri Peri chicken in Canggu with house-made sauces from Lemon & Herb to Extra Hot. Best Nando's-style chicken in Bali. Dine in, takeaway or GoFood." />
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 flex items-center justify-between text-left group"
      >
        <h3 className="font-['Bebas_Neue'] text-xl md:text-2xl text-cream pr-4 group-hover:text-ember transition-colors">
          {question}
        </h3>
        <ChevronDown className={`w-6 h-6 text-ember flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="pb-5">
          <p className="text-cream/80 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function PeriPeriPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div className="absolute inset-0">
          <img src={WOOD_BG} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <Link to="/" className="inline-flex flex-col items-center gap-2 mb-8 group">
            <img src={LOGO_URL} alt="Nico's Smokehouse" className="w-24 h-24" />
            <span className="text-ember text-sm group-hover:text-amber-400 transition-colors">← Back to Home</span>
          </Link>
          
          <span className="text-ember font-medium tracking-widest text-sm">PORTUGUESE FIRE IN BALI</span>
          <h1 className="font-['Bebas_Neue'] text-4xl md:text-6xl lg:text-7xl text-cream mt-3 tracking-wide leading-tight">
            Where to Find Peri Peri Chicken in Canggu, Bali
          </h1>
          
          <p className="text-cream/80 text-lg md:text-xl mt-6 max-w-2xl mx-auto leading-relaxed">
            <span className="text-ember font-semibold">Always dreamed of having Nando's in Bali?</span> Forget the chain — Nico's Smokehouse brings you something even better. Authentic Portuguese-African peri peri, flame-grilled fresh in Canggu with 6 signature sauces to choose from.
          </p>
          
          <div className="flex items-center justify-center gap-2 mt-6 text-cream/70">
            <MapPin className="w-5 h-5 text-ember" />
            <span>Canggu, Bali</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
            <Link
              to="/book-table"
              className="px-6 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <Utensils className="w-4 h-4" />
              Book a Table
            </Link>
            <a
              href="https://gofood.co.id/bali/restaurant/nico-s-smokehouse-tibubeneng-29af8618-1b2e-4d45-8522-e5c673344d15"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-green-600 to-green-500 text-white font-medium rounded-lg hover:brightness-110 transition-all flex items-center justify-center gap-2"
            >
              Order via GoFood
            </a>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="relative">
        <div className="max-w-5xl mx-auto px-4 -mt-10 relative z-20">
          <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-amber-900/50">
            <img 
              src={HERO_IMAGE} 
              alt="Peri Peri Chicken at Nico's Smokehouse Canggu Bali" 
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 relative">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1541123603104-512919d6a96c?w=1920&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-amber-950/90" />
        </div>
        
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Flame className="w-8 h-8 text-ember" />
            <h2 className="font-['Bebas_Neue'] text-3xl md:text-4xl text-cream text-center">
              The Fire of Portugal & Africa
            </h2>
            <Flame className="w-8 h-8 text-ember" />
          </div>
          <div className="text-cream/80 space-y-4 leading-relaxed">
            <p>
              Peri Peri chicken is a gift born from the collision of Portuguese and African cultures. When Portuguese explorers arrived in Mozambique and Angola, they discovered the African Bird's Eye chilli — a small but ferociously hot pepper with bright, citrusy notes. They combined these chillies with their own culinary traditions of garlic, lemon, and herbs, creating the iconic peri peri sauce.
            </p>
            <p>
              At Nico's Smokehouse, we honor this heritage with flame-grilled chicken marinated in our own peri peri recipe. Each piece is grilled over open flames until the skin blisters and chars while the meat stays succulent. Choose your heat level — from the gentle kiss of lemon and herb to the full fury of extra hot.
            </p>
            <p>
              Missing Nando's in Bali? We've got you covered with authentic peri peri that stands up to any chain. Come taste the fire.
            </p>
          </div>
        </div>
      </section>

      {/* Dishes Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0">
          <img src={WOOD_BG} alt="" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-ember font-medium tracking-widest text-sm">FROM THE FLAMES</span>
            <h2 className="font-['Bebas_Neue'] text-4xl md:text-5xl text-cream mt-2">
              Peri Peri Dishes Explained
            </h2>
            <p className="text-cream/70 mt-3 max-w-xl mx-auto">
              Discover the range of flame-grilled favorites on our Peri Peri menu.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {PERI_PERI_DISHES.map((dish, index) => (
              <div key={index} className="bg-amber-950/60 backdrop-blur-sm rounded-xl p-6 border border-amber-800/30">
                <h3 className="font-['Bebas_Neue'] text-2xl text-ember mb-3">{dish.name}</h3>
                <p className="text-cream/80 text-sm leading-relaxed">{dish.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sauces Section */}
      <section className="py-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 via-orange-500 to-red-600" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h2 className="font-['Bebas_Neue'] text-3xl md:text-4xl text-white text-center mb-8">
            Our 6 Signature Sauces
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
            {[
              { level: "Peri Peri Lemon + Herb", heat: "🌿", desc: "No heat, all flavor" },
              { level: "Peri Peri Mild", heat: "🌶️", desc: "Gentle warmth" },
              { level: "Peri Peri Hot", heat: "🌶️🌶️", desc: "Noticeable kick" },
              { level: "Piri Piri Extra Hot", heat: "🔥", desc: "For the brave" },
              { level: "Peri Peri Mango + Herb", heat: "🥭", desc: "Sweet & savory" },
              { level: "Peri Peri Mango + Lime", heat: "🥭🍋", desc: "Tropical zing" },
            ].map((item, index) => (
              <div key={index} className="bg-black/30 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl mb-2">{item.heat}</div>
                <div className="font-['Bebas_Neue'] text-lg text-white">{item.level}</div>
                <div className="text-white/70 text-xs mt-1">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=60"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-amber-950/90" />
        </div>
        
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-ember font-medium tracking-widest text-sm">FREQUENTLY ASKED</span>
            <h2 className="font-['Bebas_Neue'] text-4xl md:text-5xl text-cream mt-2">
              Questions & Answers
            </h2>
          </div>
          
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-amber-800/30">
            {FAQS.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Photo Slideshow */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=60"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-amber-950/85" />
        </div>
        
        <div className="relative z-10">
          <div className="text-center mb-10 px-4">
            <span className="text-ember font-medium tracking-widest text-sm">FROM THE PIT</span>
            <h2 className="font-['Bebas_Neue'] text-4xl md:text-5xl text-cream mt-2 tracking-wide">
              FRESH OFF THE SMOKE & THE FIRE
            </h2>
          </div>

          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-amber-950/90 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-amber-950/90 to-transparent z-10 pointer-events-none" />
            
            <div className="flex animate-marquee">
              {SLIDESHOW_IMAGES.map((image, index) => (
                <div key={`a-${index}`} className="flex-shrink-0 px-2">
                  <img 
                    src={image} 
                    alt={`Nico's Smokehouse dish ${index + 1}`}
                    className="h-48 md:h-56 w-auto rounded-lg shadow-xl object-cover pointer-events-none"
                    draggable={false}
                    loading="lazy"
                  />
                </div>
              ))}
              {SLIDESHOW_IMAGES.map((image, index) => (
                <div key={`b-${index}`} className="flex-shrink-0 px-2">
                  <img 
                    src={image} 
                    alt={`Nico's Smokehouse dish ${index + 1}`}
                    className="h-48 md:h-56 w-auto rounded-lg shadow-xl object-cover pointer-events-none"
                    draggable={false}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0">
          <img src={WOOD_BG} alt="" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="relative z-10 max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-['Bebas_Neue'] text-4xl md:text-5xl text-cream mb-4">
            Ready to Feel the Fire?
          </h2>
          <p className="text-cream/80 mb-8">
            Visit Nico's Smokehouse in Canggu or order delivery through GoFood.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/book-table"
              className="px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <Utensils className="w-5 h-5" />
              Book a Table
            </Link>
            <a
              href="https://gofood.co.id/bali/restaurant/nico-s-smokehouse-tibubeneng-29af8618-1b2e-4d45-8522-e5c673344d15"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-green-600 to-green-500 text-white font-medium rounded-lg hover:brightness-110 transition-all flex items-center justify-center gap-2"
            >
              Order via GoFood
            </a>
          </div>
          
          <Link 
            to="/" 
            className="inline-block mt-8 text-ember hover:text-amber-400 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </section>

      {/* Related Content */}
      <section className="py-12 px-4 bg-charcoal border-t border-amber-900/30">
        <div className="max-w-4xl mx-auto">
          <h3 className="font-['Bebas_Neue'] text-2xl text-cream mb-6 text-center">Explore More at Nico's</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link 
              to="/texas-bbq-canggu-bali"
              className="bg-black/40 rounded-xl p-4 border border-amber-900/30 hover:border-ember/50 transition-colors"
            >
              <p className="text-ember font-medium mb-2">Texas BBQ in Canggu</p>
              <p className="text-smoke/70 text-sm">Authentic slow-smoked brisket & ribs</p>
            </Link>
            <Link 
              to="/caribbean-food-canggu-bali"
              className="bg-black/40 rounded-xl p-4 border border-amber-900/30 hover:border-ember/50 transition-colors"
            >
              <p className="text-ember font-medium mb-2">Caribbean Food in Canggu</p>
              <p className="text-smoke/70 text-sm">Jerk chicken, curry goat & island flavors</p>
            </Link>
            <Link 
              to="/catering-bali"
              className="bg-black/40 rounded-xl p-4 border border-amber-900/30 hover:border-ember/50 transition-colors"
            >
              <p className="text-ember font-medium mb-2">BBQ Catering in Bali</p>
              <p className="text-smoke/70 text-sm">Villa parties, weddings & events</p>
            </Link>
            <Link 
              to="/blog/what-is-the-best-bbq-restaurant-in-canggu"
              className="bg-black/40 rounded-xl p-4 border border-amber-900/30 hover:border-ember/50 transition-colors"
            >
              <p className="text-ember font-medium mb-2">Best BBQ in Canggu</p>
              <p className="text-smoke/70 text-sm">Finding authentic smokehouse BBQ</p>
            </Link>
            <Link 
              to="/blog/where-to-get-authentic-bbq-in-canggu-bali"
              className="bg-black/40 rounded-xl p-4 border border-amber-900/30 hover:border-ember/50 transition-colors"
            >
              <p className="text-ember font-medium mb-2">Authentic BBQ Guide</p>
              <p className="text-smoke/70 text-sm">Real smokehouse BBQ in Bali</p>
            </Link>
            <Link 
              to="/blog/texas-smoke-meets-caribbean-soul-bbq-king-canggu"
              className="bg-black/40 rounded-xl p-4 border border-amber-900/30 hover:border-ember/50 transition-colors"
            >
              <p className="text-ember font-medium mb-2">BBQ King of Canggu</p>
              <p className="text-smoke/70 text-sm">Texas smoke meets Caribbean soul</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-black/80 border-t border-amber-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <Link to="/">
            <img src={LOGO_URL} alt="Nico's Smokehouse" className="w-16 h-16 mx-auto mb-4" />
          </Link>
          <p className="text-smoke/60 text-sm">
            © {new Date().getFullYear()} Nico's Smokehouse. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
