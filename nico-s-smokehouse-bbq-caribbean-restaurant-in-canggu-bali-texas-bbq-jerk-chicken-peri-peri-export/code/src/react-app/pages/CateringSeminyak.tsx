import { Link } from 'react-router';
import { MapPin, Utensils, ChevronDown, Users, Building2, Heart, Flame, Home, Cake, Music } from 'lucide-react';
import { useState, useEffect } from 'react';

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
];

const EVENT_TYPES = [
  { icon: Home, title: "Villa Parties", description: "Transform your Seminyak villa into a BBQ paradise. We bring our smokers and setup directly to your luxury villa, finishing dishes fresh in front of your guests." },
  { icon: Cake, title: "Birthday Celebrations", description: "Make birthdays unforgettable with authentic smoked meats and Caribbean flavors. Perfect for Seminyak's upscale villa parties and venue celebrations." },
  { icon: Heart, title: "Weddings & Engagements", description: "Say 'I do' to incredible food at Seminyak's stunning venues. Our BBQ and Caribbean spreads offer a memorable alternative to traditional catering." },
  { icon: Music, title: "Private Parties", description: "Pool parties, beach club events, holiday gatherings — whatever you're celebrating in Seminyak, we bring the smoke, fire, and soul." },
  { icon: Building2, title: "Corporate Events", description: "Impress clients and teams at Seminyak's premier venues. Our unique BBQ catering stands out from typical corporate catering options." },
  { icon: Users, title: "Large Group Events", description: "From intimate dinners to large-scale parties, we cater events of any size throughout Seminyak with full service." },
];

const MENU_HIGHLIGHTS = [
  { category: "Texas BBQ", items: ["Smoked Brisket (14+ hour smoke)", "Beef Ribs", "Pork Ribs", "Pulled Pork", "Smoked Sausage", "Mac & Cheese"], color: "from-red-600 to-orange-600" },
  { category: "Jamaican Soul", items: ["Jerk Chicken", "Curry Goat", "Oxtail Stew", "Rice and Peas", "Festivals", "Jamaican Patties"], color: "from-green-600 to-yellow-500" },
  { category: "Peri Peri Fire", items: ["Whole Peri Peri Chicken", "Peri Peri Wings", "Peri Peri Thighs", "6 Heat Levels Available"], color: "from-orange-500 to-red-500" },
  { category: "Sides & Extras", items: ["Coleslaw", "Corn on the Cob", "Steamed Veg", "Sweet Potato Fries", "Loaded Fries"], color: "from-amber-600 to-yellow-500" },
];

const FAQS = [
  { question: "What are the best catering services in Seminyak?", answer: "Nico's Smokehouse offers the most unique catering experience in Seminyak. We specialize in authentic Texas-style smoked meats, Jamaican jerk chicken, and Portuguese peri peri — flavors you won't find with any other caterer in Bali. We deliver to all Seminyak villas and venues." },
  { question: "Do you cater to luxury villas in Seminyak?", answer: "Absolutely! Seminyak villa catering is one of our specialties. We cater to luxury villas throughout Seminyak, Petitenget, and Oberoi. We bring our full BBQ setup and professional staff to ensure your villa party is unforgettable." },
  { question: "How much does catering cost in Seminyak?", answer: "Our Seminyak catering packages start from IDR 250,000 per person and vary based on menu selection and service level. We travel from our Canggu restaurant to Seminyak (about 15-20 minutes). Contact us via WhatsApp for a custom quote." },
  { question: "Can you cater beach club events in Seminyak?", answer: "Yes! We've catered private events at various Seminyak venues. Our food travels well and we bring everything needed for professional service. We coordinate with venue managers to ensure smooth delivery and setup." },
  { question: "Do you cater weddings in Seminyak?", answer: "We cater weddings throughout Seminyak, from intimate villa ceremonies to larger venue celebrations. Our unique BBQ and Caribbean menu offers something memorable that guests will talk about long after the wedding." },
  { question: "What areas of Seminyak do you cover?", answer: "We cover all of Seminyak including Petitenget, Oberoi, Double Six, Legian border areas, and Kerobokan. We're based in nearby Canggu so we can reach any Seminyak location quickly with fresh food." },
  { question: "How far in advance should I book catering in Seminyak?", answer: "For Seminyak events, we recommend booking 1-2 weeks in advance for villa parties and 3-4 weeks for weddings. Seminyak is very popular for events, so book early especially during peak season (July-August, December-January)." },
  { question: "Do you offer custom menus for Seminyak catering?", answer: "Yes! We customize menus for your specific event. Have dietary restrictions or special requests? Let us know and we'll create the perfect menu for your Seminyak celebration." },
  { question: "What makes your Seminyak catering different?", answer: "We're pitmasters who smoke meats overnight using authentic techniques, then bring our BBQ setup to finish food in front of your guests. It's a full culinary experience, not just catering. Our Jamaican and Portuguese flavors are unique in Bali." },
  { question: "Do you provide staff for Seminyak events?", answer: "Yes, we offer full-service catering with professional staff for setup, cooking, serving, and cleanup. For casual events, we also offer drop-off catering. Let us know your preference when booking." },
  { question: "What's the minimum order for Seminyak catering?", answer: "For full-service catering with on-site cooking, we have a minimum of 15 guests. For smaller Seminyak gatherings, we offer drop-off catering or you can visit our restaurant in Canggu for takeaway platters." },
  { question: "Can you cater pool parties in Seminyak villas?", answer: "Definitely! Pool party catering is perfect for our BBQ menu — hearty, flavorful food that's ideal for outdoor entertaining. We bring all equipment and adapt to any Seminyak villa setup." },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-amber-800/30">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full py-5 flex items-center justify-between text-left group">
        <h3 className="font-['Bebas_Neue'] text-xl md:text-2xl text-cream pr-4 group-hover:text-ember transition-colors">{question}</h3>
        <ChevronDown className={`w-6 h-6 text-ember flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && <div className="pb-5"><p className="text-cream/80 leading-relaxed">{answer}</p></div>}
    </div>
  );
}

export default function CateringSeminyakPage() {
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
          <span className="text-ember font-medium tracking-widest text-sm">CATERING SERVICES SEMINYAK</span>
          <h1 className="font-['Bebas_Neue'] text-4xl md:text-6xl lg:text-7xl text-cream mt-3 tracking-wide leading-tight">BBQ & Caribbean Catering in Seminyak, Bali</h1>
          <p className="text-cream/80 text-lg md:text-xl mt-6 max-w-2xl mx-auto leading-relaxed">Premium catering for villa parties, weddings, birthdays, and private events in Seminyak. Authentic Texas smoked meats, Jamaican jerk, and Peri Peri chicken — delivered to your Seminyak venue.</p>
          <div className="flex items-center justify-center gap-2 mt-6 text-cream/70"><MapPin className="w-5 h-5 text-ember" /><span>Serving All Seminyak Areas</span></div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
            <a href="https://wa.me/6287867966662?text=Hi%2C%20I'd%20like%20to%20enquire%20about%20catering%20in%20Seminyak.%0A%0AEvent%20type%3A%20%0ADate%3A%20%0ANumber%20of%20guests%3A%20%0AVilla%2FVenue%3A%20" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2 text-lg">
              <Utensils className="w-5 h-5" />Get a Seminyak Catering Quote
            </a>
          </div>
        </div>
      </section>

      <section className="relative"><div className="max-w-5xl mx-auto px-4 -mt-10 relative z-20"><div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-amber-900/50"><img src={HERO_IMAGE} alt="Catering Services Seminyak - Nico's Smokehouse BBQ" className="w-full h-64 md:h-96 object-cover" /></div></div></section>

      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-950 to-background" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-['Bebas_Neue'] text-3xl md:text-4xl text-cream mb-6">Seminyak's Premium BBQ & Caribbean Caterer</h2>
          <div className="text-cream/80 space-y-4 leading-relaxed text-left">
            <p>Looking for catering services in Seminyak? <strong className="text-ember">Nico's Smokehouse</strong> brings authentic Texas BBQ, Jamaican soul food, and Portuguese Peri Peri to your luxury villa, beach club, or private venue in Seminyak.</p>
            <p>From our base in nearby Canggu, we deliver the full BBQ experience to Seminyak's upscale addresses — Petitenget, Oberoi, Double Six, and beyond. We smoke our meats overnight, then bring our setup to finish and serve fresh at your event.</p>
            <p><strong className="text-ember">Custom requests welcome.</strong> We work with you on custom dishes, dietary requirements, and special requests to make your Seminyak event perfect.</p>
          </div>
        </div>
      </section>

      <section className="py-16 relative">
        <div className="absolute inset-0"><img src={WOOD_BG} alt="" className="w-full h-full object-cover" /><div className="absolute inset-0 bg-black/80" /></div>
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <div className="text-center mb-12"><span className="text-ember font-medium tracking-widest text-sm">WHAT WE CATER</span><h2 className="font-['Bebas_Neue'] text-4xl md:text-5xl text-cream mt-2">Events We Cater in Seminyak</h2></div>
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
          <div className="text-center mb-12"><span className="text-ember font-medium tracking-widest text-sm">OUR MENU</span><h2 className="font-['Bebas_Neue'] text-4xl md:text-5xl text-cream mt-2">What We Bring to Your Seminyak Event</h2><p className="text-cream/70 mt-4 max-w-xl mx-auto">Mix and match from our signature cuisines. Custom requests always welcome.</p></div>
          <div className="grid md:grid-cols-2 gap-6">
            {MENU_HIGHLIGHTS.map((menu, index) => (
              <div key={index} className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-amber-800/30">
                <div className={`inline-block px-4 py-1 rounded-full bg-gradient-to-r ${menu.color} mb-4`}><span className="font-['Bebas_Neue'] text-white text-lg">{menu.category}</span></div>
                <ul className="space-y-2">{menu.items.map((item, i) => (<li key={i} className="text-cream/80 flex items-center gap-2"><Flame className="w-4 h-4 text-ember flex-shrink-0" />{item}</li>))}</ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href="https://wa.me/6287867966662?text=Hi%2C%20I'd%20like%20to%20discuss%20a%20custom%20catering%20menu%20for%20my%20Seminyak%20event" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-ember hover:bg-amber-600 text-white font-medium rounded-lg transition-colors"><Utensils className="w-4 h-4" />Discuss Custom Menu</a>
          </div>
        </div>
      </section>

      <section className="py-16 relative">
        <div className="absolute inset-0"><img src={WOOD_BG} alt="" className="w-full h-full object-cover" loading="lazy" /><div className="absolute inset-0 bg-black/85" /></div>
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <div className="text-center mb-10"><span className="text-ember font-medium tracking-widest text-sm">FREQUENTLY ASKED</span><h2 className="font-['Bebas_Neue'] text-4xl md:text-5xl text-cream mt-2">Seminyak Catering FAQs</h2></div>
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
              {SLIDESHOW_IMAGES.map((image, index) => (<div key={`a-${index}`} className="flex-shrink-0 px-2"><img src={image} alt={`Seminyak catering ${index + 1}`} className="h-48 md:h-56 w-auto rounded-lg shadow-xl object-cover pointer-events-none" draggable={false} loading="lazy" /></div>))}
              {SLIDESHOW_IMAGES.map((image, index) => (<div key={`b-${index}`} className="flex-shrink-0 px-2"><img src={image} alt={`Seminyak catering ${index + 1}`} className="h-48 md:h-56 w-auto rounded-lg shadow-xl object-cover pointer-events-none" draggable={false} loading="lazy" /></div>))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="absolute inset-0"><img src={WOOD_BG} alt="" className="w-full h-full object-cover" loading="lazy" /><div className="absolute inset-0 bg-black/60" /></div>
        <div className="relative z-10 max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-['Bebas_Neue'] text-4xl md:text-5xl text-cream mb-4">Ready to Book Catering in Seminyak?</h2>
          <p className="text-cream/80 mb-8">Tell us about your Seminyak event and we'll create a custom catering package. Villa parties, weddings, birthdays, corporate events — we do it all.</p>
          <a href="https://wa.me/6287867966662?text=Hi%2C%20I'd%20like%20to%20book%20catering%20in%20Seminyak.%0A%0AEvent%20type%3A%20%0ADate%3A%20%0ANumber%20of%20guests%3A%20%0AVilla%2FVenue%3A%20" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-10 py-5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-lg transition-colors text-xl"><Utensils className="w-6 h-6" />Get Your Seminyak Catering Quote</a>
          <div className="mt-8 flex flex-wrap justify-center gap-4"><Link to="/catering-bali" className="text-ember hover:text-amber-400 transition-colors">← All Catering Services</Link><Link to="/" className="text-ember hover:text-amber-400 transition-colors">Back to Home</Link></div>
        </div>
      </section>

      <footer className="py-8 px-4 bg-black/80 border-t border-amber-900/30"><div className="max-w-4xl mx-auto text-center"><Link to="/"><img src={LOGO_URL} alt="Nico's Smokehouse" className="w-16 h-16 mx-auto mb-4" /></Link><p className="text-smoke/60 text-sm">© {new Date().getFullYear()} Nico's Smokehouse. BBQ & Caribbean Catering Seminyak, Bali.</p></div></footer>
    </div>
  );
}
