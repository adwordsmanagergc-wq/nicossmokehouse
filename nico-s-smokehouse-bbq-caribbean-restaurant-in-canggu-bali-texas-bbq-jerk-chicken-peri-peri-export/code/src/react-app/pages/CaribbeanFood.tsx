import { Link } from 'react-router';
import { MapPin, Utensils, ChevronDown } from 'lucide-react';
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
  "https://019d0a46-9da2-77c5-9887-de886a0fdfda.mochausercontent.com/Screenshot-2026-03-20-at-11.24.28-pm.png",
  "https://019d0a46-9da2-77c5-9887-de886a0fdfda.mochausercontent.com/Screenshot-2026-03-20-at-11.23.15-pm.png",
  "https://019d0a46-9da2-77c5-9887-de886a0fdfda.mochausercontent.com/Screenshot-2026-03-20-at-11.23.29-pm.png",
  "https://019d0a46-9da2-77c5-9887-de886a0fdfda.mochausercontent.com/Screenshot_20260321_221627_Drive.jpg",
  "https://019d0a46-9da2-77c5-9887-de886a0fdfda.mochausercontent.com/Screenshot_20260321_221654_Drive.jpg",
  "https://019d0a46-9da2-77c5-9887-de886a0fdfda.mochausercontent.com/Screenshot_20260321_221750_Drive.jpg",
  "https://019d0a46-9da2-77c5-9887-de886a0fdfda.mochausercontent.com/Screenshot_20260321_221805_Drive.jpg",
  "https://019d0a46-9da2-77c5-9887-de886a0fdfda.mochausercontent.com/Screenshot_20260321_221531_Drive.jpg",
];

const CARIBBEAN_DISHES = [
  {
    name: "Jerk Chicken",
    description: "Jamaica's most famous export — chicken marinated in a fiery blend of scotch bonnet peppers, allspice (pimento), thyme, garlic, and ginger. The meat is slow-smoked, creating an aromatic, spicy-sweet flavor with a beautiful charred exterior. Available as breast, half, or full portion."
  },
  {
    name: "Jamaican Curry Goat Feast",
    description: "Slow braised goat, bursting with bold flavors and Island soul. Served with rice & peas, steamed veg, and coleslaw. A Sunday dinner staple across the Caribbean — tender goat meat slow-cooked for hours until fall-apart tender."
  },
  {
    name: "Jamaican Oxtail Feast",
    description: "Hearty oxtail stewed in bold curry with herbs, mild heat and Caribbean soul. Served with rice & peas, steamed veg, and coleslaw. The meat becomes incredibly tender and the collagen creates a rich, sticky gravy."
  },
  {
    name: "Jerk Chicken Burger",
    description: "BBQ jerk chicken, tomato, lettuce, and pickled onions on a toasted bun. Comes with coleslaw and fries. The perfect fusion of Caribbean heat and classic burger satisfaction."
  },
  {
    name: "Guinness Punch",
    description: "Spiced, creamy Guinness milk drink with a Caribbean kick. A beloved Jamaican beverage that blends stout with condensed milk, nutmeg, and vanilla — rich, smooth, and uniquely refreshing."
  },
  {
    name: "Rice and Peas",
    description: "Fragrant rice cooked with coconut milk, kidney beans, thyme and scallions. The quintessential Caribbean side dish — the coconut milk gives it a subtle sweetness and creamy texture that perfectly complements spicy jerk meats."
  },
  {
    name: "Curry Goat (Side)",
    description: "A generous portion of slow braised goat, bursting with bold flavors and Island soul. Perfect to add extra protein to your meal or enjoy alongside other sides."
  },
  {
    name: "Oxtail (Side)",
    description: "Hearty oxtail stewed in bold curry with herbs, mild heat and Caribbean soul. A delicious add-on portion of this Jamaican delicacy."
  },
  {
    name: "Festivals",
    description: "Sweet, fried cornmeal dumplings with a soft, fluffy center. A staple alongside jerk chicken in Jamaica — made from cornmeal and flour, shaped into elongated ovals, and deep-fried until golden."
  },
  {
    name: "Dumplings",
    description: "Golden fried dough with a crisp outside and soft, chewy center. A beloved Caribbean comfort food that's perfect for soaking up flavorful curries and gravies."
  },
  {
    name: "Jamaican Patty (Beef or Fish)",
    description: "Flaky pastry filled with spiced minced beef OR seasoned fish and Caribbean herbs. A handheld island classic with a golden, buttery crust and savory, well-seasoned filling."
  },
  {
    name: "Coleslaw",
    description: "Creamy cabbage and carrot slaw with a tangy island twist. A refreshing side that helps cool down the heat from jerk and curry dishes."
  },
  {
    name: "Steamed Veg",
    description: "Mixed cabbage, carrots and bell peppers lightly steamed with Island herbs and spices. A healthy, flavorful accompaniment to any Caribbean main dish."
  }
];

const FAQS = [
  {
    question: "Where can I find authentic Caribbean food in Canggu, Bali?",
    answer: "Nico's Smokehouse in Canggu serves authentic Caribbean and Jamaican soul food, including jerk chicken, curry goat, oxtail, and traditional sides like rice and peas. Located on Jalan Raya Canggu in Tibubeneng, it's the only restaurant in Bali offering genuine Caribbean flavors alongside Texas BBQ and Peri Peri chicken."
  },
  {
    question: "What is Jamaican jerk chicken and where can I try it in Bali?",
    answer: "Jerk chicken is Jamaica's signature dish — chicken marinated in a spicy blend of scotch bonnet peppers, allspice, thyme, and other aromatics, then smoked or grilled. At Nico's Smokehouse in Canggu, the jerk chicken is prepared authentically and slow-smoked for maximum flavor. It's the best (and only) place in Bali to experience real Jamaican jerk."
  },
  {
    question: "Is there a Jamaican restaurant in Bali?",
    answer: "Yes! Nico's Smokehouse in Canggu, Bali serves authentic Jamaican cuisine alongside Texas BBQ and Portuguese Peri Peri. The menu features classic Jamaican dishes like jerk chicken, curry goat, oxtail curry, rice and peas, festival, and patties — all prepared with traditional Caribbean techniques and spices."
  },
  {
    question: "What makes Caribbean food different from other cuisines?",
    answer: "Caribbean cuisine is a fusion of African, European, Indian, and indigenous influences. Key characteristics include the use of allspice (pimento), scotch bonnet peppers, thyme, coconut milk, and slow-cooking techniques. Jamaican food specifically is known for bold, spicy flavors and dishes like jerk, curry, and braised meats."
  },
  {
    question: "What should I order if I've never tried Caribbean food before?",
    answer: "Start with jerk chicken — it's the most iconic Jamaican dish and offers the perfect introduction to Caribbean flavors. Pair it with rice and peas and festival (sweet fried dumplings) for the full experience. If you enjoy that, try the curry goat or oxtail curry on your next visit for deeper, richer flavors."
  },
  {
    question: "Is Caribbean food spicy?",
    answer: "Caribbean food can be spicy due to the use of scotch bonnet peppers, but not all dishes are intensely hot. Jerk has a warming heat balanced by aromatic spices, while rice and peas and festival are mild and sweet. At Nico's Smokehouse, the kitchen can adjust spice levels to your preference."
  },
  {
    question: "Can I get Caribbean food delivered in Canggu?",
    answer: "Yes! Nico's Smokehouse offers delivery through GoFood. You can order jerk chicken, curry goat, oxtail, and all your Caribbean favorites delivered right to your villa or hotel in the Canggu area."
  },
  {
    question: "What are the best sides to pair with jerk chicken?",
    answer: "Traditional Jamaican sides include rice and peas (rice cooked in coconut milk with kidney beans), festival (sweet fried cornmeal dumplings), and dumplings. Coleslaw also works well to cool down the heat from the jerk spices."
  }
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

export default function CaribbeanFoodPage() {
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
          
          <span className="text-ember font-medium tracking-widest text-sm">CARIBBEAN CUISINE IN BALI</span>
          <h1 className="font-['Bebas_Neue'] text-4xl md:text-6xl lg:text-7xl text-cream mt-3 tracking-wide leading-tight">
            Where to Find Jamaican & Caribbean Soul Food in Canggu, Bali
          </h1>
          
          <p className="text-cream/80 text-lg md:text-xl mt-6 max-w-2xl mx-auto leading-relaxed">
            Craving authentic jerk chicken, curry goat, or oxtail in Bali? Discover the rich flavors of the Caribbean at Nico's Smokehouse — the only restaurant in Canggu serving genuine Jamaican soul food.
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
              alt="Jamaican Jerk Chicken at Nico's Smokehouse Canggu" 
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
          <h2 className="font-['Bebas_Neue'] text-3xl md:text-4xl text-cream mb-6 text-center">
            Authentic Caribbean Flavors in the Heart of Bali
          </h2>
          <div className="text-cream/80 space-y-4 leading-relaxed">
            <p>
              Caribbean cuisine is one of the world's most vibrant and flavorful food traditions — a fusion born from centuries of cultural exchange between African, European, Indian, and indigenous peoples across the islands. From the smoky heat of Jamaican jerk to the rich comfort of slow-braised oxtail, these are dishes made with soul.
            </p>
            <p>
              At Nico's Smokehouse in Canggu, we bring these authentic Caribbean flavors to Bali. Our jerk chicken is marinated in traditional Jamaican spices and slow-smoked to perfection. Our curry goat simmers for hours until fall-apart tender. Every dish is prepared with the same care and techniques you'd find in Kingston or Port of Spain.
            </p>
            <p>
              Whether you're a Caribbean expat missing home, a traveler seeking new flavors, or a local looking to expand your palate — we invite you to experience the warmth and soul of island cooking.
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
            <span className="text-ember font-medium tracking-widest text-sm">FROM THE ISLANDS</span>
            <h2 className="font-['Bebas_Neue'] text-4xl md:text-5xl text-cream mt-2">
              Caribbean Dishes Explained
            </h2>
            <p className="text-cream/70 mt-3 max-w-xl mx-auto">
              New to Caribbean cuisine? Here's what makes these dishes special.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {CARIBBEAN_DISHES.map((dish, index) => (
              <div key={index} className="bg-amber-950/60 backdrop-blur-sm rounded-xl p-6 border border-amber-800/30">
                <h3 className="font-['Bebas_Neue'] text-2xl text-ember mb-3">{dish.name}</h3>
                <p className="text-cream/80 text-sm leading-relaxed">{dish.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80"
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
            loading="lazy"
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
            Ready to Taste the Caribbean?
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
              to="/peri-peri-chicken-canggu-bali"
              className="bg-black/40 rounded-xl p-4 border border-amber-900/30 hover:border-ember/50 transition-colors"
            >
              <p className="text-ember font-medium mb-2">Peri Peri Chicken</p>
              <p className="text-smoke/70 text-sm">Portuguese-African fire meets paradise</p>
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
