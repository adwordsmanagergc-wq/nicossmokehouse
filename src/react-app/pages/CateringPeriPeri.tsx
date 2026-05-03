import { Link } from 'react-router';
import { MapPin, Utensils, ChevronDown, Users, PartyPopper, Building2, Heart, Flame } from 'lucide-react';
import { useState } from 'react';
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

const CATERING_SERVICES = [
  {
    icon: PartyPopper,
    title: "Villa Peri Peri Parties",
    description: "Transform your Bali villa into a Portuguese flame-grilled feast. We marinate everything ahead of time, then bring our BBQ setup to your event and grill the chicken fresh right before your eyes. Perfect for celebrations and group gatherings."
  },
  {
    icon: Users,
    title: "Private Peri Peri Events",
    description: "From intimate dinners of 15 to large feasts of 100+, we cater peri peri events of all sizes. Our team handles everything: marinating, grilling, serving, and cleanup. You just enjoy the fire."
  },
  {
    icon: Building2,
    title: "Corporate Peri Peri Catering",
    description: "Spice up your corporate events with flame-grilled peri peri chicken. Our bold Portuguese flavors are perfect for office parties, team building, product launches, and client entertainment in Bali."
  },
  {
    icon: Heart,
    title: "Wedding Peri Peri Catering",
    description: "Make your special day unforgettable with flame-grilled peri peri chicken and our signature sauces. We work with couples to create custom menus that bring the heat to your celebration."
  },
];

const CATERING_MENU = [
  {
    category: "Peri Peri Chicken",
    items: ["Whole Flame-Grilled Chicken", "Half Chicken", "Chicken Breast", "Chicken Thighs", "Chicken Wings", "Chicken Burger"]
  },
  {
    category: "Signature Sauces",
    items: ["Lemon & Herb (Mild)", "Mild Peri Peri", "Hot Peri Peri", "Extra Hot Peri Peri", "Mango & Herb", "Mango & Lime"]
  },
  {
    category: "Peri Peri Sides",
    items: ["Peri Peri Fries", "Coleslaw", "Corn on the Cob", "Portuguese Rice", "Grilled Vegetables", "Garden Salad"]
  },
  {
    category: "Extras",
    items: ["Garlic Bread", "Peri Peri Dipping Sauces", "Fresh Lime Wedges", "Chili Flakes"]
  },
];

const FAQS = [
  {
    question: "Who has the best peri peri catering in Bali?",
    answer: "Nico's Smokehouse is the premier peri peri chicken caterer in Bali. We're the closest you'll get to a Nando's experience on the island — flame-grilled chicken with 6 signature peri peri sauces ranging from mild to extra hot. Our Portuguese-style chicken is marinated for 24 hours and grilled to perfection."
  },
  {
    question: "Is there a Nando's alternative for catering in Bali?",
    answer: "Yes! If you're craving Nando's-style peri peri for your Bali event, Nico's Smokehouse delivers exactly that experience — and more. Our flame-grilled peri peri chicken features the same Portuguese-African flavors you love, with 6 sauce levels from Lemon & Herb to Extra Hot. We cater villa parties, weddings, and corporate events."
  },
  {
    question: "Where can I get peri peri chicken catering in Bali?",
    answer: "Nico's Smokehouse offers peri peri chicken catering throughout Bali. We bring our grills and our signature marinades directly to your villa, venue, or event in Canggu, Seminyak, Kuta, Ubud, Uluwatu, and beyond. It's the authentic Portuguese flame-grilled experience, wherever you are."
  },
  {
    question: "How much does peri peri catering cost in Bali?",
    answer: "Our peri peri catering packages are customized based on your guest count, chicken selections, and service level. We offer packages from casual chicken platters to full-service events with all sides and sauces. Contact us via WhatsApp for a personalized quote — we work with every budget."
  },
  {
    question: "What's included in your peri peri catering?",
    answer: "Full peri peri catering includes: flame-grilled chicken (whole, half, or pieces), all 6 signature sauces, classic sides (fries, coleslaw, corn, rice), serving equipment, plates and utensils, our grilling team and serving staff, setup, and cleanup. We bring everything needed for a complete peri peri feast."
  },
  {
    question: "How far in advance should I book peri peri catering?",
    answer: "We recommend booking at least 1-2 weeks in advance for villa parties and small events. For weddings and large corporate events, 3-4 weeks is ideal. Our chicken marinates for 24 hours before grilling, so we need adequate prep time to deliver the best flavor."
  },
  {
    question: "What makes your peri peri chicken special?",
    answer: "Our peri peri chicken is marinated for a full 24 hours in our secret blend of African bird's eye chili, garlic, lemon, and herbs. We flame-grill over charcoal for authentic smoky flavor. With 6 sauce levels from mild to extra hot, there's a heat level for everyone."
  },
  {
    question: "Can you cater a peri peri wedding in Bali?",
    answer: "Absolutely! Peri peri weddings are becoming popular in Bali for couples who want something different. We've catered wedding celebrations at villas and beachfront venues. Our flame-grilled chicken with multiple sauce options lets guests customize their heat level."
  },
  {
    question: "What peri peri sauce options do you offer?",
    answer: "We offer 6 signature peri peri sauces: Lemon & Herb (mild, citrusy), Mild Peri Peri (gentle heat), Hot Peri Peri (proper kick), Extra Hot (for heat seekers), Mango & Herb (sweet and tangy), and Mango & Lime (tropical twist). All sauces are made in-house."
  },
  {
    question: "Do you offer vegetarian options with peri peri catering?",
    answer: "While our specialty is peri peri chicken, we offer excellent vegetarian sides: peri peri fries, grilled vegetables, Portuguese rice, coleslaw, corn on the cob, and garden salads. We can also grill halloumi or vegetable skewers with our peri peri marinades."
  },
  {
    question: "What areas in Bali do you cater peri peri events?",
    answer: "We cater throughout Bali including Canggu, Seminyak, Kerobokan, Kuta, Jimbaran, Nusa Dua, Uluwatu, Ubud, and Sanur. We can bring our BBQ setup to any villa or venue on the island. Contact us for locations outside these areas."
  },
  {
    question: "Is there a minimum order for peri peri catering?",
    answer: "For full-service peri peri catering, we have a minimum of 15 guests. For smaller groups, we offer drop-off catering where we deliver everything ready to serve, or you can visit us at the restaurant in Canggu for takeaway platters."
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-amber-800/30">
      <SEO path="/peri-peri-catering-bali" title="Peri Peri Catering Bali | Flame-Grilled Chicken Catering | Nico's Smokehouse" description="Peri Peri chicken catering across Bali — flame-grilled with signature sauces, served at your villa, wedding or event. Book Nico's Smokehouse for your next party." />
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

export default function CateringPeriPeriPage() {
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
          
          <span className="text-ember font-medium tracking-widest text-sm">PERI PERI CATERING BALI</span>
          <h1 className="font-['Bebas_Neue'] text-4xl md:text-6xl lg:text-7xl text-cream mt-3 tracking-wide leading-tight">
            Peri Peri Chicken Catering for Villa Parties & Events in Bali
          </h1>
          
          <p className="text-cream/80 text-lg md:text-xl mt-6 max-w-2xl mx-auto leading-relaxed">
            Bring flame-grilled Portuguese peri peri chicken to your next Bali event. We cater villa parties, weddings, corporate events, and private celebrations with 6 signature sauces from mild to extra hot.
          </p>
          
          <div className="flex items-center justify-center gap-2 mt-6 text-cream/70">
            <MapPin className="w-5 h-5 text-ember" />
            <span>Serving All of Bali</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
            <a
              href="https://wa.me/6287867966662?text=Hi%2C%20I'd%20like%20to%20enquire%20about%20Peri%20Peri%20chicken%20catering%20for%20an%20event"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <Utensils className="w-4 h-4" />
              Get a Peri Peri Catering Quote
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
              alt="Peri Peri Chicken Catering Bali" 
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
              Peri Peri Catering Services
            </h2>
            <p className="text-cream/70 mt-3 max-w-xl mx-auto">
              Flame-grilled Portuguese chicken with 6 signature sauces, delivered to your Bali event.
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
            <span className="text-ember font-medium tracking-widest text-sm">THE PERI PERI MENU</span>
            <h2 className="font-['Bebas_Neue'] text-4xl md:text-5xl text-cream mt-2">
              Flame-Grilled Perfection
            </h2>
            <p className="text-cream/70 mt-3 max-w-xl mx-auto">
              24-hour marinated chicken, charcoal-grilled with your choice of 6 signature sauces.
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
              Custom menus available — mix heat levels and sides to suit your guests.
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
            The Best Nando's Alternative in Bali
          </h2>
          <div className="text-cream/80 space-y-4 leading-relaxed">
            <p>
              <strong className="text-ember">Missing Nando's? We've got you covered.</strong> There's no Nando's in Bali, but Nico's Smokehouse delivers the same flame-grilled peri peri experience you crave. Same Portuguese-African flavors, same addictive sauces, same satisfaction — available for your villa party or event.
            </p>
            <p>
              <strong className="text-ember">Six signature sauces, one unforgettable flavor.</strong> From mild Lemon & Herb to our face-melting Extra Hot, everyone finds their perfect heat level. Our sauces are made in-house with African bird's eye chili and authentic Portuguese recipes.
            </p>
            <p>
              <strong className="text-ember">24-hour marinade, charcoal-grilled perfection.</strong> We don't rush the process. Every piece of chicken marinates for a full day before hitting the flames. The result is tender, juicy meat infused with peri peri flavor — not just sauce on top.
            </p>
            <p>
              <strong className="text-ember">We bring the peri peri experience to you.</strong> Our chicken marinates for 24 hours at our restaurant, then we bring our BBQ setup to your venue and finish the grilling right in front of your guests. They see the flames, smell the char, and eat chicken fresh off the grill. It's a show and a feast.
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
              Peri Peri Catering Questions
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
              FRESH OFF THE FIRE
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
                    alt={`Peri peri catering ${index + 1}`}
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
                    alt={`Peri peri catering ${index + 1}`}
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
            Ready to Book Peri Peri Catering?
          </h2>
          <p className="text-cream/80 mb-8">
            Tell us about your event and we'll create a custom peri peri package. Villa parties, weddings, corporate events — we bring the fire.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/6287867966662?text=Hi%2C%20I'd%20like%20to%20enquire%20about%20Peri%20Peri%20catering.%0A%0AEvent%20type%3A%20%0ADate%3A%20%0ANumber%20of%20guests%3A%20%0ALocation%3A%20"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <Utensils className="w-5 h-5" />
              Get a Peri Peri Catering Quote
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
