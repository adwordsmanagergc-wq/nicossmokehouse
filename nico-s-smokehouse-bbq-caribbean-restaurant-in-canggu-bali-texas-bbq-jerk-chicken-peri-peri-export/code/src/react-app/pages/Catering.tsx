import { Link } from 'react-router';
import { MapPin, Utensils, ChevronDown, Users, PartyPopper, Building2, Heart, Flame } from 'lucide-react';
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

const CATERING_SERVICES = [
  {
    icon: PartyPopper,
    title: "Villa Parties",
    description: "Transform your Bali villa into a BBQ paradise. We smoke everything the night before, then bring our BBQ setup to your event to finish and present the food right before your eyes. Perfect for birthdays, reunions, and holiday celebrations."
  },
  {
    icon: Users,
    title: "Private Events",
    description: "From intimate gatherings of 10 to large parties of 100+, we cater events of all sizes. Our team handles setup, service, and cleanup so you can focus on your guests."
  },
  {
    icon: Building2,
    title: "Corporate Catering",
    description: "Impress clients and reward your team with something different. Our BBQ and Caribbean spreads are perfect for office parties, team building events, and corporate functions."
  },
  {
    icon: Heart,
    title: "Weddings & Celebrations",
    description: "Make your special day unforgettable with authentic smoked meats and Caribbean soul food. We work with you to create a custom menu that reflects your taste."
  },
];

const CATERING_MENU = [
  {
    category: "Jamaican Soul",
    items: ["Jerk Chicken", "Jamaican Curry Goat Feast", "Jamaican Oxtail Feast", "Rice and Peas", "Festivals", "Dumplings", "Jamaican Patties"],
    link: "/caribbean-food-canggu-bali"
  },
  {
    category: "Texas BBQ",
    items: ["Smoked Brisket", "Beef Ribs", "Pork Ribs", "Pulled Pork", "Smoked Sausage", "Mac & Cheese"],
    link: "/texas-bbq-canggu-bali"
  },
  {
    category: "Peri Peri",
    items: ["Whole Peri Peri Chicken", "Peri Peri Wings", "Peri Peri Thighs", "6 Signature Sauces"],
    link: "/peri-peri-chicken-canggu-bali"
  },
  {
    category: "Sides & Extras",
    items: ["Coleslaw", "Corn on the Cob", "Steamed Vegetables", "Sweet Potato Fries", "Dumplings"],
    link: null
  },
];

const FAQS = [
  {
    question: "Who is the best caterer in Bali?",
    answer: "If you're looking for something unique and unforgettable, Nico's Smokehouse offers the best BBQ and Caribbean catering in Bali. Unlike typical Balinese catering, we specialize in authentic Texas-style smoked meats, Jamaican jerk chicken, and Portuguese peri peri — flavors you simply won't find anywhere else on the island. We smoke everything the night before, then bring it to your event to finish and serve fresh."
  },
  {
    question: "Where can I get Jamaican food catering in Bali?",
    answer: "Nico's Smokehouse is the only authentic Jamaican food caterer in Bali. We bring jerk chicken, curry goat, oxtail, rice and peas, and all the Caribbean classics directly to your villa, event, or celebration. Our catering covers all of Bali including Canggu, Seminyak, Kuta, Ubud, and Uluwatu."
  },
  {
    question: "Do you cater villa parties in Canggu and Seminyak?",
    answer: "Absolutely! Villa party catering is one of our specialties. We smoke all the meats the night before at our restaurant, then bring our BBQ setup and expert team directly to your villa anywhere in Bali. We finish and present the food right in front of your guests, so they experience the sizzle and aroma. We handle setup, service, and cleanup — all you need to do is enjoy the party."
  },
  {
    question: "How much does BBQ catering cost in Bali?",
    answer: "Our catering packages are customized based on your guest count, menu selections, and service requirements. We offer options for every budget, from casual BBQ spreads to full-service events with staff. Contact us via WhatsApp for a personalized quote — just tell us your date, location, number of guests, and what kind of food you're craving."
  },
  {
    question: "What areas in Bali do you cater to?",
    answer: "We cater throughout Bali including Canggu, Seminyak, Kerobokan, Kuta, Jimbaran, Nusa Dua, Uluwatu, Ubud, and Sanur. For locations outside these areas, contact us and we'll work out the logistics. No villa or venue is too remote for our smokers!"
  },
  {
    question: "How far in advance should I book catering?",
    answer: "We recommend booking at least 1-2 weeks in advance for villa parties and small events, and 3-4 weeks for larger celebrations and weddings. During peak season (July-August and December-January), book as early as possible to secure your date."
  },
  {
    question: "Can you accommodate dietary restrictions?",
    answer: "Yes! While our specialty is smoked meats, we can accommodate various dietary needs. We offer chicken and fish options for non-beef eaters, and can prepare vegetarian sides. Please let us know your requirements when booking so we can plan the perfect menu."
  },
  {
    question: "What makes Nico's Smokehouse catering different?",
    answer: "We don't just deliver food — we bring a full BBQ and Caribbean experience to your event. Our meats are smoked overnight at our restaurant using authentic low-and-slow techniques, then we bring our BBQ setup to your venue and finish the food right in front of your guests. You get the aroma, the sizzle, and the spectacle of real pit BBQ. Plus, our fusion of Texas, Jamaican, and Portuguese flavors is completely unique in Bali."
  },
  {
    question: "Do you provide staff for catering events?",
    answer: "Yes, we offer full-service catering with professional staff to handle setup, cooking, serving, and cleanup. For more casual events, we can also do drop-off catering where we deliver everything ready to serve. Let us know your preference when booking."
  },
  {
    question: "Can you cater a wedding in Bali?",
    answer: "Absolutely! We've catered weddings and engagement parties throughout Bali. Our BBQ and Caribbean menu offers a memorable alternative to traditional wedding catering. We work closely with couples to create a custom menu and can coordinate with your wedding planner and venue."
  },
  {
    question: "What's included in your catering packages?",
    answer: "Our catering includes all food preparation and cooking, serving equipment, plates and utensils (disposable or reusable depending on package), serving staff, and cleanup. We bring everything needed — you just provide the guests and the venue!"
  },
  {
    question: "Is there a minimum order for catering?",
    answer: "For full-service catering with on-site cooking, we have a minimum of 15 guests. For smaller groups, we recommend our drop-off catering option or visiting us at the restaurant in Canggu where we can prepare food to-go for your party."
  },
  {
    question: "Can you cater a birthday party in Bali?",
    answer: "Yes! Birthday parties are one of our most popular catering requests. Whether it's an intimate villa gathering or a large celebration, we create memorable BBQ and Caribbean feasts. Our interactive on-site cooking adds entertainment value — guests love watching the meats sizzle while enjoying the incredible aromas. We cater birthdays throughout Bali including Canggu, Seminyak, Ubud, and Uluwatu."
  },
  {
    question: "Do you offer beach wedding catering in Bali?",
    answer: "Absolutely! Beach weddings are a perfect match for our BBQ catering. We've catered beach weddings across Bali's coastline. Our portable BBQ setup works great outdoors, and our hearty smoked meats and Caribbean dishes are always a hit with wedding guests looking for something different from traditional catering."
  },
  {
    question: "What about corporate event catering in Canggu?",
    answer: "We regularly cater corporate events, team building activities, office parties, and business launches in Canggu and throughout Bali. Our unique BBQ and Caribbean menu stands out from standard corporate catering and gets people talking. We can accommodate events from 15 to 100+ guests with professional service."
  },
  {
    question: "Can you cater a pool party or rooftop event?",
    answer: "Pool parties and rooftop events are perfect for our style of catering. Our portable BBQ setup works in any outdoor setting, and our food is designed to be enjoyed in a relaxed, social atmosphere. We handle all the logistics so you can focus on enjoying the party."
  },
  {
    question: "Do you cater private dinner parties in Bali?",
    answer: "Yes, private dinner parties are our specialty. Whether you want an intimate dinner for 10 or a feast for 30, we create a personalized menu and bring the full Nico's Smokehouse experience to your villa. Our chefs smoke the meats overnight and finish cooking right at your venue for maximum freshness and that incredible BBQ aroma."
  },
  {
    question: "Can you do a BBQ for my family reunion in Bali?",
    answer: "Family reunions are ideal for our catering. BBQ brings people together! We offer family-style serving so everyone can dig in and share. Our diverse menu with Texas BBQ, Jamaican jerk, and Peri Peri chicken means there's something for all ages and tastes. We cater reunions at villas, resort venues, and private spaces across Bali."
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

export default function CateringPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Add FAQ schema for SEO
  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": FAQS.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'catering-faq-schema';
    script.textContent = JSON.stringify(faqSchema);
    
    // Remove existing if present
    const existing = document.getElementById('catering-faq-schema');
    if (existing) existing.remove();
    
    document.head.appendChild(script);
    
    return () => {
      const el = document.getElementById('catering-faq-schema');
      if (el) el.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div className="absolute inset-0">
          <img src={WOOD_BG} alt="Nico's Smokehouse rustic wooden interior BBQ catering Bali" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <Link to="/" className="inline-flex flex-col items-center gap-2 mb-8 group">
            <img src={LOGO_URL} alt="Nico's Smokehouse" className="w-24 h-24" />
            <span className="text-ember text-sm group-hover:text-amber-400 transition-colors">← Back to Home</span>
          </Link>
          
          <span className="text-ember font-medium tracking-widest text-sm">BBQ & CARIBBEAN CATERING BALI</span>
          <h1 className="font-['Bebas_Neue'] text-4xl md:text-6xl lg:text-7xl text-cream mt-3 tracking-wide leading-tight">
            Jamaican & BBQ Catering for Villa Parties & Events in Bali
          </h1>
          
          <p className="text-cream/80 text-lg md:text-xl mt-6 max-w-2xl mx-auto leading-relaxed">
            Bring the smoke, fire, and soul of Nico's Smokehouse to your next event. We cater villa parties, weddings, corporate events, and private celebrations throughout Bali with authentic Texas BBQ, Jamaican jerk, and Peri Peri chicken.
          </p>
          
          <div className="flex items-center justify-center gap-2 mt-6 text-cream/70">
            <MapPin className="w-5 h-5 text-ember" />
            <span>Serving All of Bali</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
            <a
              href="https://wa.me/6287867966662?text=Hi%2C%20I'd%20like%20to%20enquire%20about%20catering%20for%20an%20event"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <Utensils className="w-4 h-4" />
              Get a Catering Quote
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
              alt="BBQ Catering Bali - Nico's Smokehouse" 
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
            alt="BBQ catering setup rustic wood texture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-amber-950/90" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-ember font-medium tracking-widest text-sm">WHAT WE DO</span>
            <h2 className="font-['Bebas_Neue'] text-4xl md:text-5xl text-cream mt-2">
              Catering Services in Bali
            </h2>
            <p className="text-cream/70 mt-3 max-w-xl mx-auto">
              From intimate villa dinners to large-scale events, we bring the heat.
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
          <img src={WOOD_BG} alt="BBQ catering menu rustic wooden background" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-ember font-medium tracking-widest text-sm">THE MENU</span>
            <h2 className="font-['Bebas_Neue'] text-4xl md:text-5xl text-cream mt-2">
              What We Bring to Your Event
            </h2>
            <p className="text-cream/70 mt-3 max-w-xl mx-auto">
              Mix and match from our three signature cuisines to create your perfect spread.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {CATERING_MENU.map((category, index) => {
              const content = (
                <div className={`bg-amber-950/60 backdrop-blur-sm rounded-xl p-6 border border-amber-800/30 h-full ${category.link ? 'hover:bg-amber-950/80 hover:border-ember/50 transition-all cursor-pointer group' : ''}`}>
                  <div className="flex items-center gap-2 mb-4">
                    <Flame className="w-5 h-5 text-ember" />
                    <h3 className={`font-['Bebas_Neue'] text-2xl text-ember ${category.link ? 'group-hover:text-amber-400 transition-colors' : ''}`}>{category.category}</h3>
                  </div>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-cream/80 text-sm flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-ember rounded-full flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  {category.link && (
                    <p className="text-ember/70 text-xs mt-4 group-hover:text-ember transition-colors">Click to learn more →</p>
                  )}
                </div>
              );
              
              return category.link ? (
                <Link key={index} to={category.link}>
                  {content}
                </Link>
              ) : (
                <div key={index}>{content}</div>
              );
            })}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-cream/60 text-sm">
              Custom menus available — tell us what you're craving and we'll make it happen.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 relative">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=60"
            alt="Rustic wood plank texture BBQ smokehouse"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-amber-950/90" />
        </div>
        
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <h2 className="font-['Bebas_Neue'] text-3xl md:text-4xl text-cream mb-6 text-center">
            Why Nico's for Your Bali Event?
          </h2>
          <div className="text-cream/80 space-y-4 leading-relaxed">
            <p>
              <strong className="text-ember">We're not just caterers — we're pitmasters.</strong> All our meats are smoked overnight at our restaurant using authentic low-and-slow techniques — brisket for 14+ hours, ribs until they're fall-off-the-bone tender. Then we bring our BBQ setup to your venue and bring the food to life right in front of your guests. They'll see the sizzle, smell the smoke, and taste the difference.
            </p>
            <p>
              <strong className="text-ember">Flavors you can't find anywhere else.</strong> We're the only caterer in Bali offering authentic Jamaican jerk, Texas-style smoked brisket, and Portuguese peri peri. If you want your event to stand out, our food delivers.
            </p>
            <p>
              <strong className="text-ember">Experience that counts.</strong> We've catered villa parties, beach weddings, corporate launches, and everything in between. Our team knows how to handle events of all sizes and styles throughout Bali.
            </p>
            <p>
              <strong className="text-ember">Full service, no stress.</strong> We handle everything from setup to cleanup. You focus on enjoying your event — we'll take care of the food.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0">
          <img src={WOOD_BG} alt="Nico's Smokehouse FAQ section background" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-black/80" />
        </div>
        
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-ember font-medium tracking-widest text-sm">FREQUENTLY ASKED</span>
            <h2 className="font-['Bebas_Neue'] text-4xl md:text-5xl text-cream mt-2">
              Catering Questions & Answers
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
            alt="Photo gallery background for catering showcase"
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
                    alt={`Nico's Smokehouse catering ${index + 1}`}
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
                    alt={`Nico's Smokehouse catering ${index + 1}`}
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
          <img src={WOOD_BG} alt="Book BBQ catering Bali wooden background" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="relative z-10 max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-['Bebas_Neue'] text-4xl md:text-5xl text-cream mb-4">
            Ready to Book Your Event?
          </h2>
          <p className="text-cream/80 mb-8">
            Tell us about your event and we'll create a custom catering package. Villa parties, weddings, corporate events — we do it all.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/6287867966662?text=Hi%2C%20I'd%20like%20to%20enquire%20about%20catering.%0A%0AEvent%20type%3A%20%0ADate%3A%20%0ANumber%20of%20guests%3A%20%0ALocation%3A%20"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <Utensils className="w-5 h-5" />
              Get a Catering Quote
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
