import { Link } from 'react-router';
import { MapPin, Utensils, ChevronDown } from 'lucide-react';
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

const BBQ_DISHES = [
  {
    name: "Beef Brisket",
    description: "The king of Texas BBQ — a massive cut from the chest of the cow, smoked low and slow for 12-16 hours until the fat renders and the meat becomes impossibly tender. A proper brisket has a dark, peppery bark on the outside and a pink smoke ring just beneath. Sliced thick and served with the melted fat glistening."
  },
  {
    name: "Beef Ribs",
    description: "Massive short ribs and dino ribs — the most impressive cuts on any BBQ menu. These bone-in beef ribs are smoked until the meat is fall-off-the-bone tender with a thick, peppery bark. Each rib is a meal in itself, showcasing the best of Texas beef tradition."
  },
  {
    name: "Pork Ribs",
    description: "US Prime baby back ribs rubbed with a blend of spices and smoked until the meat pulls cleanly from the bone. The exterior develops a caramelized bark while the inside stays juicy and tender. Glazed with a tangy-sweet BBQ sauce or served dry with sauce on the side."
  },
  {
    name: "Smoked Brisket Sando",
    description: "Slow smoked Wagyu beef layered with Nico's signature BBQ sauce. Topped with crisp slaw and our house pickled onions for the perfect hit of crunch and zing. All that brisket goodness between two slices of bread."
  },
  {
    name: "Smoked Pork Rib Sando",
    description: "Smoked pork ribs with orange and soy BBQ sauce, crisp slaw, kimchi mayo & pickled onions. Sweet, smoky, and tangy — a fusion twist on classic American BBQ."
  },
  {
    name: "Smoked Sausage",
    description: "Texas hot links — coarsely ground beef and pork sausages seasoned with black pepper, cayenne, and garlic, then smoked until the casing snaps when you bite through. A staple of any Texas BBQ plate, offering a spicy, fatty contrast to leaner meats."
  },
  {
    name: "Mac and Cheese",
    description: "Creamy, indulgent macaroni baked with multiple cheeses until the top forms a golden crust. The ultimate BBQ side — rich and comforting, perfect for balancing the smoky, peppery meat. Southern BBQ joints are judged as much by their mac as their meat."
  },
  {
    name: "Rosemary Roasts",
    description: "House made crispy roasted potatoes in beef tallow and tossed with fresh rosemary salt. The perfect side to soak up all those smoky meat juices."
  },
  {
    name: "Sweet Potato",
    description: "Roasted sweet potato with a caramelized, tender finish. A slightly sweeter side that pairs perfectly with the savory, smoky meats."
  },
  {
    name: "Coleslaw",
    description: "A cooling, crunchy counterpoint to rich smoked meats. Our creamy slaw balances the heaviness of brisket and ribs, while the acidity cuts through the fat. Essential for BBQ sandos."
  }
];

const FAQS = [
  {
    question: "Where can I find Texas BBQ in Canggu, Bali?",
    answer: "Nico's Smokehouse in Canggu serves authentic Texas-style BBQ including slow-smoked brisket, beef ribs, pork ribs, and smoked sausage. Located on Jalan Raya Canggu in Tibubeneng, it's the best spot in Bali for real American BBQ alongside Caribbean and Peri Peri cuisine."
  },
  {
    question: "What is Texas BBQ and what makes it different?",
    answer: "Texas BBQ is defined by beef (especially brisket), simple salt-and-pepper rubs, and post oak wood smoke. Unlike other American BBQ styles that rely on sauces, Texas BBQ lets the smoke and meat speak for themselves. The focus is on low-and-slow cooking — often 12+ hours — to break down tough cuts into tender, flavorful meat."
  },
  {
    question: "Is there an American BBQ restaurant in Bali?",
    answer: "Yes! Nico's Smokehouse in Canggu offers authentic American BBQ with Texas-style smoked brisket, beef ribs, pork ribs, and classic sides like mac and cheese and coleslaw. It's a unique find in Bali, combining American smokehouse traditions with Caribbean and Portuguese flavors."
  },
  {
    question: "How long does it take to smoke brisket?",
    answer: "A proper Texas brisket takes 12-16 hours of low-and-slow smoking at around 225-250°F (107-121°C). The long cook time breaks down the collagen in this tough cut, transforming it into incredibly tender meat. At Nico's Smokehouse, we start our briskets before dawn so they're ready for dinner service."
  },
  {
    question: "What are beef ribs and why are they special?",
    answer: "Beef ribs — including short ribs and massive dino ribs — are some of the most impressive cuts in BBQ. They're smoked low and slow until the meat becomes fall-off-the-bone tender with a thick, peppery bark. Each rib is a meal in itself, and they're a true test of any pitmaster's skill."
  },
  {
    question: "What sides go best with BBQ?",
    answer: "Classic BBQ sides include mac and cheese (creamy and cheesy), coleslaw (cool and crunchy), rosemary roasts (crispy potatoes in beef tallow), sweet potato, and pickles (acidic to cut the fat). At Nico's Smokehouse, we offer all the traditional sides plus Caribbean options like rice and peas."
  },
  {
    question: "Can I get BBQ delivered in Canggu?",
    answer: "Yes! Nico's Smokehouse offers delivery through GoFood. Order smoked brisket, beef ribs, pork ribs, and all the sides delivered right to your villa or hotel in the Canggu area."
  },
  {
    question: "What's the difference between beef ribs and pork ribs?",
    answer: "Beef ribs (short ribs, dino ribs) are larger, meatier, and have an intense beefy flavor with rich fat marbling. Pork ribs (baby back ribs) are smaller, more tender, and have a sweeter, milder flavor that pairs well with BBQ sauces. Both take hours to smoke properly. Try both at Nico's Smokehouse to find your favorite."
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

export default function TexasBBQPage() {
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
          
          <span className="text-ember font-medium tracking-widest text-sm">AMERICAN SMOKEHOUSE IN BALI</span>
          <h1 className="font-['Bebas_Neue'] text-4xl md:text-6xl lg:text-7xl text-cream mt-3 tracking-wide leading-tight">
            Where to Find Texas BBQ in Canggu, Bali
          </h1>
          
          <p className="text-cream/80 text-lg md:text-xl mt-6 max-w-2xl mx-auto leading-relaxed">
            Craving slow-smoked brisket, tender ribs, or juicy smoked sausage in Bali? Nico's Smokehouse brings authentic Texas BBQ to Canggu — low and slow, the way it should be.
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
              alt="Texas BBQ Brisket at Nico's Smokehouse Canggu Bali" 
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
            Low & Slow — The Texas Way
          </h2>
          <div className="text-cream/80 space-y-4 leading-relaxed">
            <p>
              Texas BBQ is a religion, and brisket is its holy grail. Born in the German and Czech meat markets of Central Texas, this style of barbecue strips everything back to the essentials: quality beef, salt, pepper, wood smoke, and time. Lots of time.
            </p>
            <p>
              At Nico's Smokehouse, we honor these traditions. Our brisket starts smoking before sunrise, spending 12-14 hours absorbing post oak smoke until the fat renders and the meat becomes butter-tender. Our ribs get the same treatment — rubbed, smoked, and served with that perfect pull-off-the-bone texture.
            </p>
            <p>
              Whether you're a Texan expat missing home, an American BBQ enthusiast, or someone discovering smoked meat for the first time — we invite you to experience the patience and craft of real Texas barbecue, right here in Canggu.
            </p>
          </div>
        </div>
      </section>

      {/* Smoke Ring Callout */}
      <section className="py-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-800 via-red-800 to-amber-900" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-['Bebas_Neue'] text-3xl md:text-4xl text-white mb-4">
            The Art of the Smoke Ring
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            That pink ring just beneath the bark? It's not raw meat — it's a chemical reaction between smoke and myoglobin that marks properly smoked BBQ. It takes hours of exposure to wood smoke to develop. No smoke ring, no respect.
          </p>
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
            <span className="text-ember font-medium tracking-widest text-sm">FROM THE SMOKER</span>
            <h2 className="font-['Bebas_Neue'] text-4xl md:text-5xl text-cream mt-2">
              BBQ Dishes Explained
            </h2>
            <p className="text-cream/70 mt-3 max-w-xl mx-auto">
              New to American BBQ? Here's what makes these smoked meats special.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {BBQ_DISHES.map((dish, index) => (
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
            Ready to Taste Real BBQ?
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
              to="/caribbean-food-canggu-bali"
              className="bg-black/40 rounded-xl p-4 border border-amber-900/30 hover:border-ember/50 transition-colors"
            >
              <p className="text-ember font-medium mb-2">Caribbean Food in Canggu</p>
              <p className="text-smoke/70 text-sm">Jerk chicken, curry goat & island flavors</p>
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
