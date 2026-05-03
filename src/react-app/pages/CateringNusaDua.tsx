import { Link } from 'react-router';
import { MapPin, Utensils, ChevronDown, Users, Building2, Heart, Flame, Home, Cake, Music } from 'lucide-react';
import { useState, useEffect } from 'react';
import SEO from "@/react-app/components/SEO";

const LOGO_URL = "https://019d0a46-9da2-77c5-9887-de886a0fdfda.mochausercontent.com/nicos-logo-white.png";
const HERO_IMAGE = "https://019d0a46-9da2-77c5-9887-de886a0fdfda.mochausercontent.com/Screenshot-2026-03-20-at-4.30.26-pm.png";
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
];

const EVENT_TYPES = [
  { icon: Home, title: "Villa Parties", description: "Nusa Dua's luxury resort villas deserve exceptional catering. We travel to bring authentic smoked meats and Caribbean flavors to your celebration." },
  { icon: Cake, title: "Birthday Celebrations", description: "Celebrate birthdays in style at Nusa Dua's prestigious resorts. Our unique BBQ makes any birthday unforgettable." },
  { icon: Heart, title: "Weddings & Engagements", description: "Nusa Dua is Bali's premier wedding destination. Our BBQ and Caribbean catering offers a memorable alternative to traditional resort fare." },
  { icon: Music, title: "Private Parties", description: "Beach parties, resort celebrations, holiday gatherings — we bring smoke, fire, and soul to your Nusa Dua event." },
  { icon: Building2, title: "Corporate Events", description: "Impress clients at Nusa Dua's world-class resort venues. Our unique BBQ catering stands out from typical corporate options." },
  { icon: Users, title: "Resort Events", description: "From intimate dinners to large resort gatherings, we cater events of any size throughout Nusa Dua." },
];

const MENU_HIGHLIGHTS = [
  { category: "Texas BBQ", items: ["Smoked Brisket (14+ hour smoke)", "Beef Ribs", "Pork Ribs", "Pulled Pork", "Smoked Sausage", "Mac & Cheese"], color: "from-red-600 to-orange-600" },
  { category: "Jamaican Soul", items: ["Jerk Chicken", "Curry Goat", "Oxtail Stew", "Rice and Peas", "Festivals", "Jamaican Patties"], color: "from-green-600 to-yellow-500" },
  { category: "Peri Peri Fire", items: ["Whole Peri Peri Chicken", "Peri Peri Wings", "Peri Peri Thighs", "6 Heat Levels Available"], color: "from-orange-500 to-red-500" },
  { category: "Sides & Extras", items: ["Coleslaw", "Corn on the Cob", "Steamed Veg", "Sweet Potato Fries", "Loaded Fries"], color: "from-amber-600 to-yellow-500" },
];

const FAQS = [
  { question: "Do you cater to Nusa Dua resorts?", answer: "Yes! We cater events at Nusa Dua resorts, private villas, and venues. While we're based in Canggu (about 1 hour away), we regularly travel to Nusa Dua for weddings, corporate events, and celebrations. We coordinate with resort management for seamless delivery." },
  { question: "What are the best catering services in Nusa Dua?", answer: "For unique, memorable catering in Nusa Dua, Nico's Smokehouse offers something completely different — authentic Texas smoked meats, Jamaican jerk, and Peri Peri chicken. We're the only caterer bringing these flavors to Nusa Dua's luxury resort area." },
  { question: "How much does catering cost in Nusa Dua?", answer: "Our Nusa Dua catering packages start from IDR 350,000 per person (includes travel from Canggu). Contact us via WhatsApp for a custom quote based on your venue, guest count, and menu preferences." },
  { question: "Can you cater weddings in Nusa Dua?", answer: "Absolutely! Nusa Dua is Bali's premier wedding destination and we love catering weddings there. Our BBQ and Caribbean menu offers memorable flavors that stand out from typical resort catering — perfect for couples wanting something different." },
  { question: "What areas of Nusa Dua do you cover?", answer: "We cover all of Nusa Dua including the ITDC resort complex, Tanjung Benoa, and surrounding areas. We can reach any Nusa Dua venue with our full catering setup and coordinate with resort management." },
  { question: "How far in advance should I book Nusa Dua catering?", answer: "For Nusa Dua events, we recommend booking 3-4 weeks in advance for villa parties and 6+ weeks for weddings. Nusa Dua is a popular event destination, so early booking is essential especially during wedding season." },
  { question: "Do you work with Nusa Dua wedding planners?", answer: "Yes! We work with wedding planners and event coordinators regularly. We understand resort protocols and can coordinate with your team to ensure smooth delivery and service at your Nusa Dua wedding." },
  { question: "Is there extra cost for Nusa Dua catering?", answer: "Our Nusa Dua packages include a travel component due to the distance from Canggu. This is factored into our Nusa Dua pricing. Contact us for a complete quote — we're transparent about all costs." },
  { question: "Do you provide staff for Nusa Dua events?", answer: "Yes, we provide full-service catering with professional staff who travel to Nusa Dua for setup, cooking, serving, and cleanup. For resort events, we ensure our team meets all venue requirements." },
  { question: "What's the minimum order for Nusa Dua catering?", answer: "For Nusa Dua events, we have a minimum of 25 guests for full-service catering due to travel logistics. For smaller gatherings, contact us to discuss options." },
  { question: "Can you cater beach events in Nusa Dua?", answer: "Yes! We cater beach events at Nusa Dua and Tanjung Benoa. Our BBQ setup works great for beach celebrations, and our hearty food is perfect for outdoor events." },
  { question: "Why choose BBQ catering for a Nusa Dua event?", answer: "Nusa Dua guests expect luxury — and unique, memorable food is part of that experience. Our pit-smoked meats and Caribbean flavors offer something different from typical resort catering, making your event stand out." },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-amber-800/30">
      <SEO path="/catering-nusa-dua" title="BBQ Catering Nusa Dua | Wedding & Resort Catering | Nico's Smokehouse" description="Premium BBQ catering in Nusa Dua — perfect for resorts, weddings and corporate events. Texas BBQ, Caribbean and Peri Peri by Nico's Smokehouse." />
      <button onClick={() => setIsOpen(!isOpen)} className="w-full py-5 flex items-center justify-between text-left group">
        <h3 className="font-['Bebas_Neue'] text-xl md:text-2xl text-cream pr-4 group-hover:text-ember transition-colors">{question}</h3>
        <ChevronDown className={`w-6 h-6 text-ember flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && <div className="pb-5"><p className="text-cream/80 leading-relaxed">{answer}</p></div>}
    </div>
  );
}

export default function CateringNusaDuaPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-background">
      <section className="relative py-20 md:py-32">
        <div className="absolute inset-0"><img src={WOOD_BG} alt="" className="w-full h-full object-cover" /><div className="absolute inset-0 bg-black/60" /></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <Link to="/" className="inline-flex flex-col items-center gap-2 mb-8 group">
            <img src={LOGO_URL} alt="Nico's Smokehouse" className="w-24 h-24" />
            <span className="text-ember text-sm group-hover:text-amber-400 transition-colors">← Back to Home</span>
          </Link>
          <span className="text-ember font-medium tracking-widest text-sm">CATERING SERVICES NUSA DUA</span>
          <h1 className="font-['Bebas_Neue'] text-4xl md:text-6xl lg:text-7xl text-cream mt-3 tracking-wide leading-tight">BBQ & Caribbean Catering in Nusa Dua, Bali</h1>
          <p className="text-cream/80 text-lg md:text-xl mt-6 max-w-2xl mx-auto leading-relaxed">Luxury BBQ catering for resort weddings, villa parties, corporate events, and celebrations in Nusa Dua. Authentic Texas smoked meats, Jamaican jerk, and Peri Peri — we travel to bring memorable flavors to Bali's premier resort area.</p>
          <div className="flex items-center justify-center gap-2 mt-6 text-cream/70"><MapPin className="w-5 h-5 text-ember" /><span>Serving All Nusa Dua & Tanjung Benoa</span></div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
            <a href="https://wa.me/6287867966662?text=Hi%2C%20I'd%20like%20to%20enquire%20about%20catering%20in%20Nusa%20Dua.%0A%0AEvent%20type%3A%20%0ADate%3A%20%0ANumber%20of%20guests%3A%20%0AVilla%2FVenue%3A%20" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2 text-lg">
              <Utensils className="w-5 h-5" />Get a Nusa Dua Catering Quote
            </a>
          </div>
        </div>
      </section>

      <section className="relative"><div className="max-w-5xl mx-auto px-4 -mt-10 relative z-20"><div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-amber-900/50"><img src={HERO_IMAGE} alt="Catering Services Nusa Dua - Nico's Smokehouse BBQ" className="w-full h-64 md:h-96 object-cover" /></div></div></section>

      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-950 to-background" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-['Bebas_Neue'] text-3xl md:text-4xl text-cream mb-6">Luxury BBQ Catering for Nusa Dua</h2>
          <div className="text-cream/80 space-y-4 leading-relaxed text-left">
            <p>Looking for unique catering in Nusa Dua? <strong className="text-ember">Nico's Smokehouse</strong> brings authentic Texas BBQ, Jamaican soul food, and Peri Peri to Bali's most prestigious resort area.</p>
            <p>Nusa Dua guests expect the best — and that includes memorable food. Our pit-smoked meats and Caribbean flavors offer something completely different from typical resort catering, making your wedding, corporate event, or celebration truly stand out.</p>
            <p><strong className="text-ember">Custom requests welcome.</strong> We work with wedding planners, event coordinators, and resort management to create perfect menus for Nusa Dua events.</p>
          </div>
        </div>
      </section>

      <section className="py-16 relative">
        <div className="absolute inset-0"><img src={WOOD_BG} alt="" className="w-full h-full object-cover" /><div className="absolute inset-0 bg-black/80" /></div>
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <div className="text-center mb-12"><span className="text-ember font-medium tracking-widest text-sm">WHAT WE CATER</span><h2 className="font-['Bebas_Neue'] text-4xl md:text-5xl text-cream mt-2">Events We Cater in Nusa Dua</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EVENT_TYPES.map((event, index) => (
              <div key={index} className="bg-amber-950/60 backdrop-blur-sm rounded-xl p-6 border border-amber-800/30">
                <div className="w-12 h-12 bg-ember/20 rounded-lg flex items-center justify-center mb-4"><event.icon className="w-6 h-6 text-ember" /></div>
                <h3 className="font-['Bebas_Neue'] text-2xl text-cream mb-2">{event.title}</h3>
                <p className="text-cream/70 text-sm leading-relaxed">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-amber-950/50 to-background" />
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <div className="text-center mb-12"><span className="text-ember font-medium tracking-widest text-sm">OUR MENU</span><h2 className="font-['Bebas_Neue'] text-4xl md:text-5xl text-cream mt-2">What We Bring to Your Nusa Dua Event</h2><p className="text-cream/70 mt-4 max-w-xl mx-auto">Mix and match from our signature cuisines. Custom requests always welcome.</p></div>
          <div className="grid md:grid-cols-2 gap-6">
            {MENU_HIGHLIGHTS.map((menu, index) => (
              <div key={index} className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-amber-800/30">
                <div className={`inline-block px-4 py-1 rounded-full bg-gradient-to-r ${menu.color} mb-4`}><span className="font-['Bebas_Neue'] text-white text-lg">{menu.category}</span></div>
                <ul className="space-y-2">{menu.items.map((item, i) => (<li key={i} className="text-cream/80 flex items-center gap-2"><Flame className="w-4 h-4 text-ember flex-shrink-0" />{item}</li>))}</ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href="https://wa.me/6287867966662?text=Hi%2C%20I'd%20like%20to%20discuss%20a%20custom%20catering%20menu%20for%20my%20Nusa%20Dua%20event" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-ember hover:bg-amber-600 text-white font-medium rounded-lg transition-colors"><Utensils className="w-4 h-4" />Discuss Custom Menu</a>
          </div>
        </div>
      </section>

      <section className="py-16 relative">
        <div className="absolute inset-0"><img src={WOOD_BG} alt="" className="w-full h-full object-cover" loading="lazy" /><div className="absolute inset-0 bg-black/85" /></div>
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <div className="text-center mb-10"><span className="text-ember font-medium tracking-widest text-sm">FREQUENTLY ASKED</span><h2 className="font-['Bebas_Neue'] text-4xl md:text-5xl text-cream mt-2">Nusa Dua Catering FAQs</h2></div>
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-amber-800/30">{FAQS.map((faq, index) => (<FAQItem key={index} question={faq.question} answer={faq.answer} />))}</div>
        </div>
      </section>

      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-amber-950/90" />
        <div className="relative z-10">
          <div className="text-center mb-10 px-4"><span className="text-ember font-medium tracking-widest text-sm">FROM THE PIT</span><h2 className="font-['Bebas_Neue'] text-4xl md:text-5xl text-cream mt-2 tracking-wide">FRESH OFF THE SMOKE & THE FIRE</h2></div>
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-amber-950/90 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-amber-950/90 to-transparent z-10 pointer-events-none" />
            <div className="flex animate-marquee">
              {SLIDESHOW_IMAGES.map((image, index) => (<div key={`a-${index}`} className="flex-shrink-0 px-2"><img src={image} alt={`Nusa Dua catering ${index + 1}`} className="h-48 md:h-56 w-auto rounded-lg shadow-xl object-cover pointer-events-none" draggable={false} loading="lazy" /></div>))}
              {SLIDESHOW_IMAGES.map((image, index) => (<div key={`b-${index}`} className="flex-shrink-0 px-2"><img src={image} alt={`Nusa Dua catering ${index + 1}`} className="h-48 md:h-56 w-auto rounded-lg shadow-xl object-cover pointer-events-none" draggable={false} loading="lazy" /></div>))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="absolute inset-0"><img src={WOOD_BG} alt="" className="w-full h-full object-cover" loading="lazy" /><div className="absolute inset-0 bg-black/60" /></div>
        <div className="relative z-10 max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-['Bebas_Neue'] text-4xl md:text-5xl text-cream mb-4">Ready to Book Catering in Nusa Dua?</h2>
          <p className="text-cream/80 mb-8">Tell us about your Nusa Dua event and we'll create a custom catering package. Weddings, corporate events, villa parties — we travel to make it unforgettable.</p>
          <a href="https://wa.me/6287867966662?text=Hi%2C%20I'd%20like%20to%20book%20catering%20in%20Nusa%20Dua.%0A%0AEvent%20type%3A%20%0ADate%3A%20%0ANumber%20of%20guests%3A%20%0AVilla%2FVenue%3A%20" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-10 py-5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-lg transition-colors text-xl"><Utensils className="w-6 h-6" />Get Your Nusa Dua Catering Quote</a>
          <div className="mt-8 flex flex-wrap justify-center gap-4"><Link to="/catering-bali" className="text-ember hover:text-amber-400 transition-colors">← All Catering Services</Link><Link to="/" className="text-ember hover:text-amber-400 transition-colors">Back to Home</Link></div>
        </div>
      </section>

      <footer className="py-8 px-4 bg-black/80 border-t border-amber-900/30"><div className="max-w-4xl mx-auto text-center"><Link to="/"><img src={LOGO_URL} alt="Nico's Smokehouse" className="w-16 h-16 mx-auto mb-4" /></Link><p className="text-smoke/60 text-sm">© {new Date().getFullYear()} Nico's Smokehouse. BBQ & Caribbean Catering Nusa Dua, Bali.</p></div></footer>
    </div>
  );
}
