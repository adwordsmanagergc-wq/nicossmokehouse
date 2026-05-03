import { Link } from 'react-router';
import { MapPin, Utensils, ChevronDown, Users, PartyPopper, Building2, Heart, Flame } from 'lucide-react';
import { useState } from 'react';

const LOGO_URL = "https://019d0a46-9da2-77c5-9887-de886a0fdfda.mochausercontent.com/nicos-logo-white.png";
const HERO_IMAGE = "https://019d0a46-9da2-77c5-9887-de886a0fdfda.mochausercontent.com/Jerk-Chicken-Bali.jpg";
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
    title: "Villa Jerk Parties",
    description: "Transform your Bali villa into a Caribbean paradise. We prepare and marinate everything ahead of time, then bring our BBQ setup to your event and bring the food to life right before your eyes. Perfect for birthdays, reunions, and holiday celebrations."
  },
  {
    icon: Users,
    title: "Private Caribbean Events",
    description: "From intimate gatherings of 15 to large Caribbean feasts of 100+, we cater events of all sizes. Our team handles setup, grilling, service, and cleanup so you can enjoy the island vibes with your guests."
  },
  {
    icon: Building2,
    title: "Corporate Caribbean Catering",
    description: "Impress clients and reward your team with authentic Jamaican soul food. Our jerk chicken, curry goat, and Caribbean sides are perfect for office parties, team building events, and corporate functions in Bali."
  },
  {
    icon: Heart,
    title: "Wedding Caribbean Catering",
    description: "Make your special day unforgettable with Caribbean soul food. We work with couples to create custom menus featuring jerk chicken, oxtail curry, rice and peas, and all the island favorites guests will remember."
  },
];

const CATERING_MENU = [
  {
    category: "Jerk & Mains",
    items: ["Jerk Chicken", "Curry Goat", "Oxtail", "Jerk Chicken Burger"]
  },
  {
    category: "Add-On Proteins",
    items: ["Curry Goat (Side)", "Oxtail (Side)"]
  },
  {
    category: "Caribbean Sides",
    items: ["Rice and Peas", "Festivals", "Dumplings", "Jamaican Patty", "Coleslaw", "Steamed Veg"]
  },
  {
    category: "Drinks",
    items: ["Guinness Punch"]
  },
];

const FAQS = [
  {
    question: "Who has the best Caribbean catering in Bali?",
    answer: "Nico's Smokehouse offers the most authentic Caribbean and Jamaican soul food catering in Bali. We're the only caterer on the island with real jerk grills, authentic Jamaican recipes, and the Caribbean vibes to match. Our jerk chicken is marinated overnight, our oxtail is slow-cooked for hours, and we bring genuine island flavor to your event."
  },
  {
    question: "Where can I get Jamaican food catering in Bali?",
    answer: "Nico's Smokehouse is the premier Jamaican and Caribbean caterer in Bali. We bring authentic jerk chicken, curry goat, oxtail, rice and peas, and all the Caribbean classics directly to your villa, venue, or event anywhere on the island — Canggu, Seminyak, Ubud, Uluwatu, and beyond."
  },
  {
    question: "Do you cook the jerk on-site at events?",
    answer: "Our jerk chicken and meats are prepared and marinated overnight at our restaurant with authentic Jamaican spices. We then bring our BBQ setup to your venue and finish the food right in front of your guests — they'll see the sizzle, smell the spices, and experience the real Caribbean vibe. It's not just catering, it's a Caribbean experience."
  },
  {
    question: "How much does Caribbean catering cost in Bali?",
    answer: "Our Caribbean catering packages are customized based on your guest count, menu selections, and service level. We offer packages from casual jerk spreads to premium all-you-can-eat Caribbean feasts. Contact us via WhatsApp for a personalized quote — we work with every budget."
  },
  {
    question: "What's included in your Caribbean catering?",
    answer: "Full Caribbean catering includes: all dishes prepared fresh, classic Caribbean sides, house-made sauces, serving equipment, plates and utensils, our grill master and serving staff, setup, and cleanup. We bring everything — you just provide the guests and the venue."
  },
  {
    question: "How far in advance should I book Caribbean catering?",
    answer: "We recommend booking at least 2 weeks in advance for villa parties and events. For weddings and large corporate events, 4-6 weeks is ideal. Authentic Caribbean food requires significant prep time (oxtail alone needs hours of slow cooking), so earlier booking ensures the best experience."
  },
  {
    question: "Can you cater a Caribbean-themed wedding in Bali?",
    answer: "Absolutely! Caribbean-themed weddings are incredibly popular in Bali. We've catered wedding celebrations at villas, beachfront venues, and private estates. Our Jamaican soul food offers a memorable alternative to traditional wedding catering, and we work closely with wedding planners to match the island vibes."
  },
  {
    question: "What dishes do you offer for Caribbean catering?",
    answer: "Our catering menu features Jamaican classics: authentic jerk chicken, jerk pork, curry goat, oxtail curry, brown stew chicken, ackee and saltfish, rice and peas, festival dumplings, fried plantains, and more. We source the best ingredients and prepare everything with authentic Caribbean techniques."
  },
  {
    question: "Do you offer vegetarian Caribbean options?",
    answer: "Yes! Caribbean cuisine has great vegetarian options. We offer callaloo, rice and peas (vegetarian version), fried plantains, festival dumplings, vegetable curry, and mac and cheese. We can also create custom vegetarian platters. Let us know your dietary needs when booking."
  },
  {
    question: "What areas in Bali do you cater Caribbean events?",
    answer: "We cater throughout Bali including Canggu, Seminyak, Kerobokan, Kuta, Jimbaran, Nusa Dua, Uluwatu, Ubud, and Sanur. We can bring our BBQ setup to any villa or venue on the island. Contact us for locations outside these areas."
  },
  {
    question: "Is there a minimum order for Caribbean catering?",
    answer: "For full-service Caribbean catering, we have a minimum of 20 guests. This ensures the Caribbean experience is worthwhile for everyone. For smaller groups of 10-20, we offer drop-off catering with reheating instructions."
  },
  {
    question: "What makes Jamaican jerk chicken authentic?",
    answer: "Authentic jerk chicken requires the right marinade (scotch bonnet peppers, allspice, thyme, garlic), proper marination time (overnight minimum), and cooking over pimento wood or charcoal. At Nico's, we follow traditional Jamaican techniques — no shortcuts. That's why our jerk is the real deal, and the only authentic jerk you'll find in Bali."
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

export default function CateringCaribbeanPage() {
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
          
          <span className="text-ember font-medium tracking-widest text-sm">CARIBBEAN & JAMAICAN CATERING BALI</span>
          <h1 className="font-['Bebas_Neue'] text-4xl md:text-6xl lg:text-7xl text-cream mt-3 tracking-wide leading-tight">
            Caribbean Soul Food Catering for Villa Parties & Events in Bali
          </h1>
          
          <p className="text-cream/80 text-lg md:text-xl mt-6 max-w-2xl mx-auto leading-relaxed">
            Bring authentic Jamaican and Caribbean flavors to your next Bali event. We cater villa parties, weddings, corporate events, and private celebrations with jerk chicken, oxtail curry, rice and peas, and all the island favorites.
          </p>
          
          <div className="flex items-center justify-center gap-2 mt-6 text-cream/70">
            <MapPin className="w-5 h-5 text-ember" />
            <span>Serving All of Bali</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
            <a
              href="https://wa.me/6287867966662?text=Hi%2C%20I'd%20like%20to%20enquire%20about%20Caribbean%20%2F%20Jamaican%20catering%20for%20an%20event"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <Utensils className="w-4 h-4" />
              Get a Caribbean Catering Quote
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
              alt="Caribbean Catering Bali - Jerk Chicken" 
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
              Caribbean Catering Services
            </h2>
            <p className="text-cream/70 mt-3 max-w-xl mx-auto">
              Real jerk. Real soul food. The Caribbean experience, delivered to your Bali event.
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
            <span className="text-ember font-medium tracking-widest text-sm">THE CARIBBEAN MENU</span>
            <h2 className="font-['Bebas_Neue'] text-4xl md:text-5xl text-cream mt-2">
              Island Soul Food
            </h2>
            <p className="text-cream/70 mt-3 max-w-xl mx-auto">
              Authentic Jamaican recipes, fresh ingredients, and the flavors of the Caribbean.
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
              Custom Caribbean menus available — tell us your favorites and we'll bring the island vibes.
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
            Why Choose Nico's for Caribbean Catering?
          </h2>
          <div className="text-cream/80 space-y-4 leading-relaxed">
            <p>
              <strong className="text-ember">Authentic Jamaican soul food, not imitations.</strong> We're the only caterer in Bali using traditional Caribbean techniques. Our jerk marinates overnight in scotch bonnet and allspice. Our oxtail slow-cooks for hours. Other caterers might call it "Caribbean style" — we make the real thing.
            </p>
            <p>
              <strong className="text-ember">The BBQ experience comes to you.</strong> After preparing everything at our restaurant, we bring our BBQ setup to your venue and finish the food right in front of your guests. They'll see the sizzle, smell the jerk spices, and experience the Caribbean atmosphere firsthand.
            </p>
            <p>
              <strong className="text-ember">Fresh ingredients, proper technique.</strong> We source the best ingredients available in Bali and prepare everything with authentic Caribbean methods. From overnight marinations to slow-cooked curries, we never cut corners.
            </p>
            <p>
              <strong className="text-ember">Full-service, no stress.</strong> Our team handles everything: setup, cooking, serving, and cleanup. You focus on your guests while we focus on bringing the Caribbean vibes to your event.
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
              Caribbean Catering Questions
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
            <span className="text-ember font-medium tracking-widest text-sm">FROM THE GRILL</span>
            <h2 className="font-['Bebas_Neue'] text-4xl md:text-5xl text-cream mt-2 tracking-wide">
              FRESH OFF THE JERK GRILL
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
                    alt={`Caribbean catering ${index + 1}`}
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
                    alt={`Caribbean catering ${index + 1}`}
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
            Ready to Book Caribbean Catering?
          </h2>
          <p className="text-cream/80 mb-8">
            Tell us about your event and we'll create a custom Caribbean menu. Villa parties, weddings, corporate events — we bring the island soul.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/6287867966662?text=Hi%2C%20I'd%20like%20to%20enquire%20about%20Caribbean%20%2F%20Jamaican%20catering.%0A%0AEvent%20type%3A%20%0ADate%3A%20%0ANumber%20of%20guests%3A%20%0ALocation%3A%20"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <Utensils className="w-5 h-5" />
              Get a Caribbean Catering Quote
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
