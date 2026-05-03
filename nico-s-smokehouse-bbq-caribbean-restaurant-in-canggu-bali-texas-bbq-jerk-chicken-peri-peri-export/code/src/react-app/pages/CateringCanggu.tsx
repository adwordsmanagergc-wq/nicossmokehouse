import { Link } from 'react-router';
import { MapPin, Utensils, ChevronDown, Users, Building2, Heart, Flame, Home, Cake, Music } from 'lucide-react';
import { useState, useEffect } from 'react';

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
];

const EVENT_TYPES = [
  {
    icon: Home,
    title: "Villa Parties",
    description: "Transform your Canggu villa into a BBQ paradise. We bring our smokers and grill setup directly to your villa, finishing dishes in front of your guests for a spectacular experience."
  },
  {
    icon: Cake,
    title: "Birthday Celebrations",
    description: "Make birthdays unforgettable with authentic smoked meats and Caribbean flavors. From kids' parties to milestone celebrations, we create custom menus for all ages."
  },
  {
    icon: Heart,
    title: "Weddings & Engagements",
    description: "Say 'I do' to incredible food. Our BBQ and Caribbean spreads offer a memorable alternative to traditional wedding catering at Canggu's beautiful venues."
  },
  {
    icon: Music,
    title: "Private Parties",
    description: "Pool parties, reunions, holiday gatherings — whatever you're celebrating in Canggu, we bring the smoke, fire, and soul to make it special."
  },
  {
    icon: Building2,
    title: "Corporate Events",
    description: "Team building, product launches, client entertainment — impress with something different from the usual Bali catering options."
  },
  {
    icon: Users,
    title: "Large Group Events",
    description: "From intimate dinners of 15 to massive parties of 200+, we have the equipment and experience to cater events of any size in Canggu."
  },
];

const MENU_HIGHLIGHTS = [
  {
    category: "Texas BBQ",
    items: ["Smoked Brisket (14+ hour smoke)", "Beef Ribs", "Pork Ribs", "Pulled Pork", "Smoked Sausage", "Mac & Cheese"],
    color: "from-red-600 to-orange-600"
  },
  {
    category: "Jamaican Soul",
    items: ["Jerk Chicken", "Curry Goat", "Oxtail Stew", "Rice and Peas", "Festivals", "Jamaican Patties"],
    color: "from-green-600 to-yellow-500"
  },
  {
    category: "Peri Peri Fire",
    items: ["Whole Peri Peri Chicken", "Peri Peri Wings", "Peri Peri Thighs", "6 Heat Levels Available"],
    color: "from-orange-500 to-red-500"
  },
  {
    category: "Sides & Extras",
    items: ["Coleslaw", "Corn on the Cob", "Steamed Veg", "Sweet Potato Fries", "Loaded Fries"],
    color: "from-amber-600 to-yellow-500"
  },
];

const FAQS = [
  {
    question: "What are the best catering services in Canggu?",
    answer: "Nico's Smokehouse offers the most unique catering experience in Canggu. Unlike typical Balinese catering, we specialize in authentic Texas-style smoked meats, Jamaican jerk chicken, and Portuguese peri peri. Our restaurant is located right in Canggu (Tibubeneng), so we're perfectly positioned to cater events throughout the area with the freshest food possible."
  },
  {
    question: "Do you cater to villas in Canggu?",
    answer: "Absolutely! Villa catering is our specialty in Canggu. We bring our full BBQ setup directly to your villa — whether it's in Berawa, Batu Bolong, Pererenan, or anywhere else in the Canggu area. We smoke the meats overnight, then finish and present everything fresh at your villa. Your guests experience the sizzle, aroma, and spectacle of real pit BBQ."
  },
  {
    question: "How much does catering cost in Canggu?",
    answer: "Our Canggu catering packages start from IDR 250,000 per person for basic packages and go up depending on menu selection and service level. Since we're based in Canggu, there's no travel surcharge for local events. Contact us via WhatsApp for a custom quote based on your guest count, menu preferences, and event type."
  },
  {
    question: "Can you cater a birthday party in Canggu?",
    answer: "Yes! We love catering birthday parties in Canggu. From kids' birthdays at family villas to milestone celebrations at beach clubs, we customize our menu to suit your party. Our food is a hit with all ages — the jerk chicken and ribs are always crowd favorites."
  },
  {
    question: "Do you cater weddings in Canggu?",
    answer: "We cater weddings throughout Canggu, from intimate villa ceremonies to larger venue celebrations. Our BBQ and Caribbean menu offers something different from traditional wedding catering. We work with couples and wedding planners to create custom menus that complement your special day."
  },
  {
    question: "What areas of Canggu do you cover for catering?",
    answer: "We cover all of Canggu including Batu Bolong, Berawa, Echo Beach, Pererenan, Tibubeneng, Pantai Lima, and Nelayan. Since our restaurant is located in Tibubeneng, we're centrally located to reach anywhere in Canggu quickly with fresh, hot food."
  },
  {
    question: "How far in advance should I book catering in Canggu?",
    answer: "For Canggu events, we recommend booking 1-2 weeks in advance for villa parties and small gatherings, and 3-4 weeks for weddings and large events. During peak season (July-August, December-January), book as early as possible as Canggu gets very busy."
  },
  {
    question: "Do you offer custom menus for Canggu catering?",
    answer: "Yes! While our specialty is Texas BBQ, Jamaican, and Peri Peri cuisine, we're happy to customize menus for your Canggu event. Have dietary restrictions? Special requests? A fusion idea? Just let us know and we'll work with you to create the perfect menu."
  },
  {
    question: "What makes your Canggu catering different from other caterers?",
    answer: "We're pitmasters, not just caterers. Our meats are smoked overnight using authentic low-and-slow techniques — brisket for 14+ hours, ribs until they're fall-off-the-bone tender. We bring the full BBQ experience to your Canggu event, finishing food in front of your guests. Plus, our Jamaican and Portuguese flavors are completely unique in Bali."
  },
  {
    question: "Do you provide catering staff in Canggu?",
    answer: "Yes, we offer full-service catering with professional staff for setup, cooking, serving, and cleanup. For more casual Canggu villa parties, we also offer drop-off catering where we deliver everything ready to serve. Let us know your preference when booking."
  },
  {
    question: "What's the minimum order for catering in Canggu?",
    answer: "For full-service catering with on-site cooking, we have a minimum of 15 guests. For smaller groups in Canggu, we offer drop-off catering or you can visit our restaurant in Tibubeneng to pick up platters for your party."
  },
  {
    question: "Can you cater pool parties and beach events in Canggu?",
    answer: "Definitely! We cater pool parties at Canggu villas and private events at beach clubs regularly. Our food is perfect for outdoor events — hearty, flavorful, and designed to feed hungry crowds. We bring all necessary equipment and can adapt to any venue setup."
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

export default function CateringCangguPage() {
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
          
          <span className="text-ember font-medium tracking-widest text-sm">CATERING SERVICES CANGGU</span>
          <h1 className="font-['Bebas_Neue'] text-4xl md:text-6xl lg:text-7xl text-cream mt-3 tracking-wide leading-tight">
            BBQ & Caribbean Catering in Canggu, Bali
          </h1>
          
          <p className="text-cream/80 text-lg md:text-xl mt-6 max-w-2xl mx-auto leading-relaxed">
            The best catering for villa parties, weddings, birthdays, and private events in Canggu. Authentic Texas smoked meats, Jamaican jerk, and Peri Peri chicken — brought directly to your Canggu venue with our full BBQ setup.
          </p>
          
          <div className="flex items-center justify-center gap-2 mt-6 text-cream/70">
            <MapPin className="w-5 h-5 text-ember" />
            <span>Based in Canggu • Serving All Canggu Areas</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
            <a
              href="https://wa.me/6287867966662?text=Hi%2C%20I'd%20like%20to%20enquire%20about%20catering%20in%20Canggu.%0A%0AEvent%20type%3A%20%0ADate%3A%20%0ANumber%20of%20guests%3A%20%0AVilla%2FVenue%3A%20"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2 text-lg"
            >
              <Utensils className="w-5 h-5" />
              Get a Canggu Catering Quote
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
              alt="Catering Services Canggu - Nico's Smokehouse BBQ" 
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-950 to-background" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-['Bebas_Neue'] text-3xl md:text-4xl text-cream mb-6">
            Canggu's Premier BBQ & Caribbean Caterer
          </h2>
          <div className="text-cream/80 space-y-4 leading-relaxed text-left">
            <p>
              Looking for catering services in Canggu? <strong className="text-ember">Nico's Smokehouse</strong> brings authentic Texas BBQ, Jamaican soul food, and Portuguese Peri Peri directly to your villa, event venue, or celebration anywhere in Canggu.
            </p>
            <p>
              Based right here in Canggu (Tibubeneng), we're your local experts for villa party catering, wedding catering, birthday celebrations, corporate events, and private gatherings. We smoke our meats overnight using traditional low-and-slow techniques, then bring our BBQ setup to your venue to finish and serve the food fresh — your guests experience the full spectacle of pit BBQ.
            </p>
            <p>
              <strong className="text-ember">Custom requests welcome.</strong> While our menu features our signature cuisines, we're happy to work with you on custom dishes, dietary requirements, and special requests to make your Canggu event perfect.
            </p>
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-16 relative">
        <div className="absolute inset-0">
          <img src={WOOD_BG} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/80" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-ember font-medium tracking-widest text-sm">WHAT WE CATER</span>
            <h2 className="font-['Bebas_Neue'] text-4xl md:text-5xl text-cream mt-2">
              Events We Cater in Canggu
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EVENT_TYPES.map((event, index) => (
              <div key={index} className="bg-amber-950/60 backdrop-blur-sm rounded-xl p-6 border border-amber-800/30">
                <div className="w-12 h-12 bg-ember/20 rounded-lg flex items-center justify-center mb-4">
                  <event.icon className="w-6 h-6 text-ember" />
                </div>
                <h3 className="font-['Bebas_Neue'] text-2xl text-cream mb-2">{event.title}</h3>
                <p className="text-cream/70 text-sm leading-relaxed">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-amber-950/50 to-background" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-ember font-medium tracking-widest text-sm">OUR MENU</span>
            <h2 className="font-['Bebas_Neue'] text-4xl md:text-5xl text-cream mt-2">
              What We Bring to Your Canggu Event
            </h2>
            <p className="text-cream/70 mt-4 max-w-xl mx-auto">
              Mix and match from our signature cuisines. Custom requests and dietary accommodations always welcome.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {MENU_HIGHLIGHTS.map((menu, index) => (
              <div key={index} className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-amber-800/30">
                <div className={`inline-block px-4 py-1 rounded-full bg-gradient-to-r ${menu.color} mb-4`}>
                  <span className="font-['Bebas_Neue'] text-white text-lg">{menu.category}</span>
                </div>
                <ul className="space-y-2">
                  {menu.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-cream/80 flex items-center gap-2">
                      <Flame className="w-4 h-4 text-ember flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <p className="text-cream/60 mb-4">
              Want something specific? We accept custom menu requests for your Canggu event.
            </p>
            <a
              href="https://wa.me/6287867966662?text=Hi%2C%20I'd%20like%20to%20discuss%20a%20custom%20catering%20menu%20for%20my%20Canggu%20event"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-ember hover:bg-amber-600 text-white font-medium rounded-lg transition-colors"
            >
              <Utensils className="w-4 h-4" />
              Discuss Custom Menu
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0">
          <img src={WOOD_BG} alt="" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-black/85" />
        </div>
        
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-ember font-medium tracking-widest text-sm">FREQUENTLY ASKED</span>
            <h2 className="font-['Bebas_Neue'] text-4xl md:text-5xl text-cream mt-2">
              Canggu Catering FAQs
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
        <div className="absolute inset-0 bg-amber-950/90" />
        
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
                    alt={`Canggu catering food ${index + 1}`}
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
                    alt={`Canggu catering food ${index + 1}`}
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
            Ready to Book Catering in Canggu?
          </h2>
          <p className="text-cream/80 mb-8">
            Tell us about your Canggu event and we'll create a custom catering package. Villa parties, weddings, birthdays, corporate events — we do it all.
          </p>
          
          <a
            href="https://wa.me/6287867966662?text=Hi%2C%20I'd%20like%20to%20book%20catering%20in%20Canggu.%0A%0AEvent%20type%3A%20%0ADate%3A%20%0ANumber%20of%20guests%3A%20%0AVilla%2FVenue%3A%20"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-lg transition-colors text-xl"
          >
            <Utensils className="w-6 h-6" />
            Get Your Canggu Catering Quote
          </a>
          
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/catering-bali" className="text-ember hover:text-amber-400 transition-colors">
              ← All Catering Services
            </Link>
            <Link to="/" className="text-ember hover:text-amber-400 transition-colors">
              Back to Home
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
            © {new Date().getFullYear()} Nico's Smokehouse. BBQ & Caribbean Catering Canggu, Bali.
          </p>
        </div>
      </footer>
    </div>
  );
}
