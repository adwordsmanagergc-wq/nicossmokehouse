import { Link } from 'react-router';
import { MapPin, Utensils, ChevronDown, Users, PartyPopper, Building2, Heart, Flame } from 'lucide-react';
import { useState } from 'react';

const LOGO_URL = "https://019d0a46-9da2-77c5-9887-de886a0fdfda.mochausercontent.com/nicos-logo-white.png";
const HERO_IMAGE = "https://019d0a46-9da2-77c5-9887-de886a0fdfda.mochausercontent.com/Screenshot-2026-03-20-at-4.30.38-pm.png";
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

const CATERING_SERVICES = [
  {
    icon: PartyPopper,
    title: "Villa BBQ Parties",
    description: "Transform your Bali villa into a Texas smokehouse. We smoke everything overnight at our restaurant, then bring our BBQ setup to your villa and bring the food to life right before your eyes. Perfect for celebrations, reunions, and holiday gatherings."
  },
  {
    icon: Users,
    title: "Private BBQ Events",
    description: "From intimate smoke sessions of 15 to large BBQ feasts of 100+, we cater events of all sizes. Our pitmaster team handles setup, smoking, service, and cleanup so you can focus on your guests."
  },
  {
    icon: Building2,
    title: "Corporate BBQ Catering",
    description: "Impress clients and reward your team with authentic Texas-style BBQ. Our smoked meats are perfect for office parties, team building events, product launches, and corporate functions in Bali."
  },
  {
    icon: Heart,
    title: "Wedding BBQ Catering",
    description: "Make your special day unforgettable with authentic smoked brisket, ribs, and all the fixings. We work with couples to create custom BBQ menus that guests will talk about for years."
  },
];

const CATERING_MENU = [
  {
    category: "Smoked Meats",
    items: ["14-Hour Smoked Brisket", "Beef Short Ribs", "Dinosaur Ribs", "St. Louis Pork Ribs", "Smoked Pork Belly"]
  },
  {
    category: "BBQ Sandwiches",
    items: ["Smoked Brisket Sando", "Smoked Pork Rib Sando", "Pulled Pork Sandwich", "Burnt Ends Sandwich"]
  },
  {
    category: "Classic Sides",
    items: ["Mac & Cheese", "Coleslaw", "Corn on the Cob", "Sweet Potato Fries", "Rosemary Roast Potatoes", "Steamed Vegetables"]
  },
  {
    category: "BBQ Sauces",
    items: ["Texas Original", "Smoky Chipotle", "Carolina Mustard", "Kansas City Sweet", "Spicy Jalapeño"]
  },
];

const FAQS = [
  {
    question: "Who has the best BBQ catering in Bali?",
    answer: "Nico's Smokehouse offers the most authentic Texas-style BBQ catering in Bali. We're the only caterer on the island using traditional low-and-slow smoking techniques with real hardwood. Our brisket smokes for 14+ hours, our ribs are fall-off-the-bone tender, and we bring the full pitmaster experience to your event."
  },
  {
    question: "Where can I get Texas BBQ catering in Bali?",
    answer: "Nico's Smokehouse is the premier Texas BBQ caterer in Bali. We bring authentic smoked brisket, beef ribs, pork ribs, and all the classic sides directly to your villa, venue, or event anywhere on the island — Canggu, Seminyak, Ubud, Uluwatu, and beyond."
  },
  {
    question: "Do you smoke the meat on-site at events?",
    answer: "Our meats are smoked overnight at our restaurant using authentic low-and-slow techniques — brisket alone takes 14+ hours! We then bring our BBQ setup to your venue and finish the food right in front of your guests. They'll experience the real BBQ atmosphere — the sizzle, the aroma, watching us slice and serve. It's not just catering, it's an experience."
  },
  {
    question: "How much does BBQ catering cost in Bali?",
    answer: "Our BBQ catering packages are customized based on your guest count, meat selections, and service level. We offer packages from casual BBQ spreads to premium all-you-can-eat experiences. Contact us via WhatsApp for a personalized quote — we work with every budget."
  },
  {
    question: "What's included in your BBQ catering?",
    answer: "Full BBQ catering includes: all meats smoked to perfection, classic sides, house-made sauces, serving equipment, plates and utensils, our pitmaster and serving staff, setup, and cleanup. We bring everything — you just provide the guests and the venue."
  },
  {
    question: "How far in advance should I book BBQ catering?",
    answer: "We recommend booking at least 2 weeks in advance for villa parties and events. For weddings and large corporate events, 4-6 weeks is ideal. BBQ requires significant prep time (brisket alone needs 14+ hours), so earlier booking ensures the best experience."
  },
  {
    question: "Can you cater a BBQ wedding in Bali?",
    answer: "Absolutely! BBQ weddings are becoming incredibly popular in Bali. We've catered wedding celebrations at villas, beachfront venues, and private estates. Our Texas BBQ offers a memorable alternative to traditional wedding catering, and we work closely with wedding planners."
  },
  {
    question: "What cuts of meat do you offer for catering?",
    answer: "Our catering menu features premium cuts: USDA-grade brisket, beef short ribs (including massive dinosaur ribs), St. Louis-style pork ribs, smoked pork belly, and more. We source the best meat available in Bali and smoke it with the same care as a Texas pitmaster."
  },
  {
    question: "Do you offer vegetarian options with BBQ catering?",
    answer: "While our specialty is smoked meats, we always include generous sides that work for vegetarians: mac & cheese, coleslaw, corn, roasted vegetables, and more. We can also add grilled vegetable platters. Let us know your dietary needs when booking."
  },
  {
    question: "What areas in Bali do you cater BBQ events?",
    answer: "We cater throughout Bali including Canggu, Seminyak, Kerobokan, Kuta, Jimbaran, Nusa Dua, Uluwatu, Ubud, and Sanur. We can bring our BBQ setup to any villa or venue on the island. Contact us for locations outside these areas."
  },
  {
    question: "Is there a minimum order for BBQ catering?",
    answer: "For full-service BBQ catering, we have a minimum of 20 guests. This ensures the BBQ experience is worthwhile for everyone. For smaller groups of 10-20, we offer drop-off catering with reheating instructions."
  },
  {
    question: "What makes Texas BBQ different from other BBQ styles?",
    answer: "Texas BBQ is all about the meat and the smoke — no heavy sauces masking the flavor. We use traditional low-and-slow smoking over hardwood, simple salt-and-pepper rubs, and let the quality of the meat shine. It's the purest form of BBQ, and Nico's is the only place in Bali doing it right."
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-amber-800/30">
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

export default function CateringTexasBBQPage() {
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
          
          <span className="text-ember font-medium tracking-widest text-sm">TEXAS BBQ CATERING BALI</span>
          <h1 className="font-['Bebas_Neue'] text-4xl md:text-6xl lg:text-7xl text-cream mt-3 tracking-wide leading-tight">
            Texas BBQ Catering for Villa Parties & Events in Bali
          </h1>
          
          <p className="text-cream/80 text-lg md:text-xl mt-6 max-w-2xl mx-auto leading-relaxed">
            Bring authentic Texas-style smoked meats to your next Bali event. We cater villa parties, weddings, corporate events, and private celebrations with 14-hour smoked brisket, fall-off-the-bone ribs, and all the fixings.
          </p>
          
          <div className="flex items-center justify-center gap-2 mt-6 text-cream/70">
            <MapPin className="w-5 h-5 text-ember" />
            <span>Serving All of Bali</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
            <a
              href="https://wa.me/6287867966662?text=Hi%2C%20I'd%20like%20to%20enquire%20about%20Texas%20BBQ%20catering%20for%20an%20event"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <Utensils className="w-4 h-4" />
              Get a BBQ Catering Quote
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
              alt="Texas BBQ Catering Bali - Smoked Brisket" 
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1541123603104-512919d6a96c?w=800&q=60"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-amber-950/90" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-ember font-medium tracking-widest text-sm">WHAT WE DO</span>
            <h2 className="font-['Bebas_Neue'] text-4xl md:text-5xl text-cream mt-2">
              Texas BBQ Catering Services
            </h2>
            <p className="text-cream/70 mt-3 max-w-xl mx-auto">
              Real smoke. Real pit BBQ. The Texas experience, delivered to your Bali event.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {CATERING_SERVICES.map((service, index) => (
              <div key={index} className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-amber-800/30 flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-ember/20 rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-ember" />
                  </div>
                </div>
                <div>
                  <h3 className="font-['Bebas_Neue'] text-2xl text-cream mb-2">{service.title}</h3>
                  <p className="text-cream/70 text-sm leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catering Menu Preview */}
      <section className="py-16 relative">
        <div className="absolute inset-0">
          <img src={WOOD_BG} alt="" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-ember font-medium tracking-widest text-sm">THE BBQ MENU</span>
            <h2 className="font-['Bebas_Neue'] text-4xl md:text-5xl text-cream mt-2">
              Smoked to Perfection
            </h2>
            <p className="text-cream/70 mt-3 max-w-xl mx-auto">
              Every cut smoked low-and-slow with hardwood for that authentic Texas flavor.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {CATERING_MENU.map((category, index) => (
              <div key={index} className="bg-amber-950/60 backdrop-blur-sm rounded-xl p-6 border border-amber-800/30">
                <div className="flex items-center gap-2 mb-4">
                  <Flame className="w-5 h-5 text-ember" />
                  <h3 className="font-['Bebas_Neue'] text-2xl text-ember">{category.category}</h3>
                </div>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-cream/80 text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-ember rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-cream/60 text-sm">
              Custom BBQ menus available — tell us your favorites and we'll smoke them to perfection.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
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
          <h2 className="font-['Bebas_Neue'] text-3xl md:text-4xl text-cream mb-6 text-center">
            Why Choose Nico's for BBQ Catering?
          </h2>
          <div className="text-cream/80 space-y-4 leading-relaxed">
            <p>
              <strong className="text-ember">Real Texas BBQ, not imitations.</strong> We're the only caterer in Bali using authentic low-and-slow smoking techniques. Our brisket takes 14+ hours to smoke overnight at our restaurant. Other caterers grill or roast their meat — we smoke it the right way.
            </p>
            <p>
              <strong className="text-ember">We bring the BBQ experience to you.</strong> After smoking overnight, we bring our BBQ setup to your venue and finish the food right in front of your guests. They see the slicing, smell the smoke, and taste the difference. It's dinner and a show.
            </p>
            <p>
              <strong className="text-ember">Premium cuts, properly smoked.</strong> We source the best brisket, ribs, and pork available in Bali. Combined with our smoking expertise, you get competition-quality BBQ at your private event.
            </p>
            <p>
              <strong className="text-ember">Full-service, no stress.</strong> Our team handles everything: setup, smoking, serving, and cleanup. You focus on your guests while we focus on the meat.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0">
          <img src={WOOD_BG} alt="" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-black/80" />
        </div>
        
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-ember font-medium tracking-widest text-sm">FREQUENTLY ASKED</span>
            <h2 className="font-['Bebas_Neue'] text-4xl md:text-5xl text-cream mt-2">
              BBQ Catering Questions
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
            loading="lazy"
          />
          <div className="absolute inset-0 bg-amber-950/85" />
        </div>
        
        <div className="relative z-10">
          <div className="text-center mb-10 px-4">
            <span className="text-ember font-medium tracking-widest text-sm">FROM THE PIT</span>
            <h2 className="font-['Bebas_Neue'] text-4xl md:text-5xl text-cream mt-2 tracking-wide">
              FRESH OFF THE SMOKE
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
                    alt={`Texas BBQ catering ${index + 1}`}
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
                    alt={`Texas BBQ catering ${index + 1}`}
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
            Ready to Book BBQ Catering?
          </h2>
          <p className="text-cream/80 mb-8">
            Tell us about your event and we'll create a custom Texas BBQ package. Villa parties, weddings, corporate events — we bring the smoke.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/6287867966662?text=Hi%2C%20I'd%20like%20to%20enquire%20about%20Texas%20BBQ%20catering.%0A%0AEvent%20type%3A%20%0ADate%3A%20%0ANumber%20of%20guests%3A%20%0ALocation%3A%20"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <Utensils className="w-5 h-5" />
              Get a BBQ Catering Quote
            </a>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link 
              to="/" 
              className="text-ember hover:text-amber-400 transition-colors"
            >
              ← Back to Home
            </Link>
            <span className="text-cream/30">•</span>
            <Link 
              to="/catering-bali" 
              className="text-cream/60 hover:text-ember transition-colors"
            >
              All Catering Services
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
