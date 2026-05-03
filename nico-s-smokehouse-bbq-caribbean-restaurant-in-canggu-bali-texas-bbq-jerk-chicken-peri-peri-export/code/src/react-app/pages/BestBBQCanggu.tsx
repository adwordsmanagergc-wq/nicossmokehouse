import { useEffect } from 'react';
import { Link } from 'react-router';
import { Flame, Users, ChefHat, Award, PartyPopper, Clock, MapPin, Phone, Star, Utensils, Check } from 'lucide-react';

const ASSET_BASE = 'https://019d0a46-9da2-77c5-9887-de886a0fdfda.mochausercontent.com';

// Schema markup for SEO
const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Restaurant",
      "@id": "https://nicossmokehouse.com/#restaurant",
      "name": "Nico's Smokehouse",
      "image": `${ASSET_BASE}/openart-image_1773994724931_39257367_1773994725151_04d1e791.jpg`,
      "url": "https://nicossmokehouse.com",
      "telephone": "+6287867966662",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Tibubeneng",
        "addressLocality": "Canggu",
        "addressRegion": "Bali",
        "addressCountry": "ID"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -8.6478,
        "longitude": 115.1385
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "12:00",
        "closes": "00:00"
      },
      "servesCuisine": ["BBQ", "Texas BBQ", "Jamaican", "Caribbean", "Peri Peri"],
      "priceRange": "$$",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "324"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://nicossmokehouse.com/best-bbq-canggu#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the best BBQ restaurant in Canggu?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nico's Smokehouse is widely recognised as the best BBQ restaurant in Canggu, Bali. We serve authentic Texas-style smoked meats, Jamaican cuisine, and Peri Peri chicken, making us a unique BBQ destination in the area."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer BBQ catering in Bali?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we offer premium BBQ catering services throughout Bali including Canggu, Seminyak, Pererenan, Berawa, and surrounding areas. Perfect for villa parties, birthdays, weddings, and corporate events."
          }
        },
        {
          "@type": "Question",
          "name": "Where is Nico's Smokehouse located?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We are located in Tibubeneng, Canggu, Bali. We're easily accessible from Berawa, Batu Bolong, and Pererenan areas."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need a booking at Nico's Smokehouse?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Walk-ins are welcome, but we recommend booking a table especially for groups of 4 or more to guarantee your preferred time slot. Book via WhatsApp or our website."
          }
        },
        {
          "@type": "Question",
          "name": "What type of BBQ do you serve?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We serve three styles of BBQ: Texas-style smoked meats (brisket, beef ribs, pork ribs), Jamaican dishes (jerk chicken, curry goat, oxtail), and Peri Peri flame-grilled chicken. All meats are slow-smoked in-house."
          }
        }
      ]
    },
    {
      "@type": "Menu",
      "@id": "https://nicossmokehouse.com/#menu",
      "name": "Nico's Smokehouse Menu",
      "hasMenuSection": [
        {
          "@type": "MenuSection",
          "name": "From The Pit",
          "hasMenuItem": [
            { "@type": "MenuItem", "name": "Smoked Brisket", "description": "Slow-smoked Texas-style brisket" },
            { "@type": "MenuItem", "name": "Beef Ribs", "description": "Short ribs and Dino ribs with Texan dry rub" },
            { "@type": "MenuItem", "name": "Pork Ribs", "description": "US Prime and Baby Back ribs" },
            { "@type": "MenuItem", "name": "Peri Peri Chicken", "description": "Flame-grilled with signature peri peri sauces" },
            { "@type": "MenuItem", "name": "Jerk Chicken", "description": "Authentic Jamaican jerk-spiced chicken" }
          ]
        }
      ]
    }
  ]
};

const TESTIMONIALS = [
  {
    text: "Hands down the best BBQ in Canggu. The brisket melts in your mouth and the jerk chicken is unreal. We come back every week!",
    author: "Sarah M.",
    location: "Berawa"
  },
  {
    text: "Finally, proper Texas BBQ in Bali! The beef ribs are incredible and the Jamaican sides are authentic. Best food in Bali by far.",
    author: "James T.",
    location: "Australia"
  },
  {
    text: "Unreal BBQ experience. We had our villa party catered by Nico's and our guests couldn't stop raving about the food. Highly recommend!",
    author: "Amanda K.",
    location: "Pererenan"
  },
  {
    text: "The peri peri chicken is perfection. Great vibes, amazing food, and the staff are so friendly. Best restaurant in Canggu!",
    author: "Mike R.",
    location: "Batu Bolong"
  }
];

const WHY_BEST = [
  {
    icon: Flame,
    title: "Authentic Wood-Fired Smoking",
    description: "Our meats are slow-smoked for up to 14 hours using traditional wood-fired techniques. This is real BBQ, not shortcuts."
  },
  {
    icon: ChefHat,
    title: "Expert BBQ Pitmasters",
    description: "Our chefs specialise in Texas BBQ, Jamaican cuisine, and Peri Peri — three distinct fire-cooking traditions perfected under one roof."
  },
  {
    icon: Award,
    title: "Premium Quality Meats",
    description: "We source US Prime pork ribs, quality beef brisket, and fresh chicken daily. Every cut is selected for optimal smoking."
  },
  {
    icon: Users,
    title: "Perfect for Groups & Events",
    description: "Our restaurant seats groups of all sizes with shareable feasts. Planning a celebration? We've got you covered."
  },
  {
    icon: PartyPopper,
    title: "BBQ Catering Available",
    description: "Bring the Nico's experience to your villa, birthday, wedding, or corporate event anywhere in Bali."
  },
  {
    icon: Utensils,
    title: "Three Cuisines, One Kitchen",
    description: "Texas BBQ, Jamaican soul food, and Peri Peri fire — a unique combination you won't find anywhere else in Canggu."
  }
];

const MENU_HIGHLIGHTS = [
  { name: "Smoked Brisket", description: "Texas-style slow-smoked brisket, tender and smoky" },
  { name: "Beef Ribs", description: "Massive short ribs and dino ribs with Texan dry rub" },
  { name: "US Prime Pork Ribs", description: "Fall-off-the-bone ribs with signature sauces" },
  { name: "Jerk Chicken", description: "Authentic Jamaican spiced and fire-grilled" },
  { name: "Peri Peri Chicken", description: "Flame-grilled with 6 peri peri sauce options" },
  { name: "Jamaican Curry Goat", description: "Slow-braised with bold Caribbean spices" },
  { name: "Smoked Brisket Sando", description: "Loaded sandwich with house BBQ sauce" },
  { name: "Jamaican Oxtail", description: "Hearty oxtail in rich curry sauce" }
];

const FAQ_ITEMS = [
  {
    question: "What is the best BBQ restaurant in Canggu?",
    answer: "Nico's Smokehouse is widely recognised as one of the best BBQ restaurants in Canggu, Bali. We combine Texas-style smoked meats, authentic Jamaican cuisine, and Peri Peri chicken — three fire-cooking traditions you won't find together anywhere else. Our slow-smoked brisket, beef ribs, and pork ribs have earned us a loyal following among locals and visitors."
  },
  {
    question: "Do you offer BBQ catering in Bali?",
    answer: "Yes, we provide full-service BBQ catering throughout Bali. Whether you're hosting a villa party in Canggu, a wedding in Seminyak, a birthday in Pererenan, or a corporate event in Sanur, we bring our authentic smoked meats and Caribbean dishes directly to your venue. Contact us via WhatsApp to discuss your catering needs."
  },
  {
    question: "Where is Nico's Smokehouse located?",
    answer: "We're located in Tibubeneng, Canggu, Bali — easily accessible from Berawa, Batu Bolong, Pererenan, and Echo Beach. We're a short drive from most Canggu accommodations and offer a welcoming space for dining in or takeaway."
  },
  {
    question: "Do I need a booking at Nico's Smokehouse?",
    answer: "Walk-ins are always welcome! However, for groups of 4 or more, we recommend booking a table to ensure your preferred time and seating. For larger groups (10+), advance booking with a 25% deposit is required for pre-ordered smoked meats. Book easily through our website or WhatsApp."
  },
  {
    question: "What type of BBQ do you serve?",
    answer: "We serve three distinct BBQ styles: Texas BBQ (slow-smoked brisket, beef ribs, pork ribs), Jamaican (jerk chicken, curry goat, oxtail), and Peri Peri (flame-grilled chicken with signature sauces). All smoked meats are prepared in-house using traditional wood-fired smoking techniques."
  },
  {
    question: "What are your opening hours?",
    answer: "Nico's Smokehouse is open daily from 12pm to midnight (12:00 - 00:00). We serve lunch and dinner, with our lunch special offering 10% off reservations between 12pm and 5pm."
  }
];

export default function BestBBQCanggu() {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Inject schema markup
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schemaMarkup);
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${ASSET_BASE}/openart-image_1773994724931_39257367_1773994725151_04d1e791.jpg)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-stone-950" />
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <img 
            src={`${ASSET_BASE}/nicos-logo-white.png`}
            alt="Nico's Smokehouse Logo"
            className="w-40 md:w-56 mx-auto mb-8"
          />
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-600 bg-clip-text text-transparent">
              Best BBQ Restaurant in Canggu, Bali 🔥
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-stone-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Premium slow-smoked BBQ, unforgettable flavours, and one of Canggu's most talked-about dining experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/book-table"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-lg hover:from-amber-600 hover:to-orange-700 transition-all shadow-lg shadow-orange-900/30 text-lg"
            >
              <Utensils className="w-5 h-5" />
              Book a Table
            </Link>
            <Link 
              to="/order"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-stone-800 border border-amber-500/50 text-amber-400 font-bold rounded-lg hover:bg-stone-700 transition-all text-lg"
            >
              View Menu
            </Link>
          </div>
        </div>
      </section>

      {/* SEO Rich Intro */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-amber-400">
            The Best BBQ in Canggu — Where Smoke Meets Soul
          </h2>
          <div className="prose prose-lg prose-invert max-w-none text-stone-300 space-y-6">
            <p className="text-lg leading-relaxed">
              <strong className="text-white">Nico's Smokehouse is the best BBQ restaurant in Canggu</strong>, serving authentic slow-smoked meats that have made us a top-rated destination for BBQ lovers in Bali. Located in the heart of Canggu, we're just minutes from Berawa, Batu Bolong, and Pererenan — making us the perfect spot for anyone searching for quality BBQ in Bali.
            </p>
            <p className="text-lg leading-relaxed">
              What sets us apart from every other BBQ restaurant in Canggu? We've combined three fire-cooking traditions under one roof: <strong className="text-white">Texas-style smoked meats</strong>, <strong className="text-white">authentic Jamaican cuisine</strong>, and <strong className="text-white">Peri Peri flame-grilled chicken</strong>. Our brisket is smoked low and slow for up to 14 hours. Our jerk chicken is marinated in traditional Caribbean spices. Our peri peri is flame-grilled to perfection with six signature sauce options.
            </p>
            <p className="text-lg leading-relaxed">
              Whether you're a local expat, a traveller exploring Canggu's food scene, or planning a special celebration, Nico's Smokehouse delivers an unforgettable BBQ experience. We're not just another restaurant — we're a destination for people who take their BBQ seriously.
            </p>
          </div>
        </div>
      </section>

      {/* Why We're the Best */}
      <section className="py-20 px-4 bg-stone-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-amber-400">
            Why We're the Best BBQ in Canggu
          </h2>
          <p className="text-stone-400 text-center mb-12 max-w-2xl mx-auto">
            From premium ingredients to expert technique, here's what makes Nico's Smokehouse the top BBQ restaurant in Canggu, Bali.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WHY_BEST.map((item, i) => (
              <div key={i} className="bg-stone-800/50 border border-stone-700/50 rounded-xl p-6 hover:border-amber-500/30 transition-colors">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-amber-500/20 to-orange-600/20 flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-amber-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-stone-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature BBQ Experience */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-amber-400">
                The Signature BBQ Experience
              </h2>
              <div className="space-y-6 text-stone-300">
                <p className="text-lg leading-relaxed">
                  Step into Nico's Smokehouse and the aroma hits you first — that unmistakable scent of wood smoke, caramelised meat, and Caribbean spices. This is BBQ the way it should be.
                </p>
                <p className="text-lg leading-relaxed">
                  Our <strong className="text-white">slow-smoked brisket</strong> spends up to 14 hours in the pit, developing a dark, peppery bark on the outside while staying impossibly tender inside. Our <strong className="text-white">beef ribs</strong> — both short ribs and massive dino ribs — are rubbed with our Texan spice blend and smoked until the meat pulls clean from the bone.
                </p>
                <p className="text-lg leading-relaxed">
                  The <strong className="text-white">US Prime pork ribs</strong> are a house favourite, glazed with your choice of orange & soy or Nico's signature BBQ sauce. And for those craving Caribbean heat, our <strong className="text-white">jerk chicken</strong> and <strong className="text-white">peri peri chicken</strong> deliver fire and flavour in every bite.
                </p>
                <p className="text-lg leading-relaxed">
                  This isn't just dinner — it's the best BBQ experience in Canggu.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src={`${ASSET_BASE}/2.png`}
                alt="Smoked BBQ meats at Nico's Smokehouse"
                className="rounded-xl shadow-xl w-full h-48 object-cover"
              />
              <img 
                src={`${ASSET_BASE}/Jerk-Chicken-Bali.jpg`}
                alt="Jerk Chicken - Best BBQ Canggu"
                className="rounded-xl shadow-xl w-full h-48 object-cover"
              />
              <img 
                src={`${ASSET_BASE}/peri-peri-chicken-canggu-bali.jpg`}
                alt="Peri Peri Chicken Canggu"
                className="rounded-xl shadow-xl w-full h-48 object-cover"
              />
              <img 
                src={`${ASSET_BASE}/Screenshot-2026-03-20-at-4.30.38-pm.png`}
                alt="Texas BBQ Bali"
                className="rounded-xl shadow-xl w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="py-20 px-4 bg-stone-900/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-amber-400">
            Menu Highlights
          </h2>
          <p className="text-stone-400 text-center mb-12 max-w-2xl mx-auto">
            Our most popular dishes at the best BBQ restaurant in Canggu. From slow-smoked meats to Caribbean soul food.
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {MENU_HIGHLIGHTS.map((item, i) => (
              <div key={i} className="bg-stone-800/70 border border-stone-700/50 rounded-lg p-5 hover:border-amber-500/40 transition-colors">
                <h3 className="text-lg font-bold text-white mb-2">{item.name}</h3>
                <p className="text-stone-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link 
              to="/order"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-lg hover:from-amber-600 hover:to-orange-700 transition-all"
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* BBQ Catering Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-amber-900/30 to-orange-900/20 border border-amber-500/30 rounded-2xl p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-amber-400">
                  BBQ Catering in Canggu & Bali
                </h2>
                <p className="text-lg text-stone-300 mb-6 leading-relaxed">
                  Bring the best BBQ in Canggu directly to your event. Nico's Smokehouse offers premium <strong className="text-white">BBQ catering throughout Bali</strong> — from intimate villa gatherings to large-scale celebrations.
                </p>
                <ul className="space-y-3 mb-8">
                  {['Villa Parties & Private Events', 'Birthday Celebrations', 'Weddings & Engagements', 'Corporate Events', 'Hens & Bucks Parties', 'Beach Events'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-stone-300">
                      <Check className="w-5 h-5 text-amber-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-stone-400 mb-8">
                  We cater throughout Canggu, Seminyak, Pererenan, Berawa, Umalas, Sanur, Nusa Dua, Uluwatu, and beyond.
                </p>
                <a 
                  href="https://wa.me/6287867966662?text=Hi%20Nico's!%20I'd%20like%20to%20enquire%20about%20BBQ%20catering"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-all"
                >
                  Book Your Private BBQ Experience
                </a>
              </div>
              <div>
                <img 
                  src={`${ASSET_BASE}/1.png`}
                  alt="BBQ Catering Bali - Nico's Smokehouse"
                  className="rounded-xl shadow-xl w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-stone-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-amber-400">
            What Our Guests Say
          </h2>
          <p className="text-stone-400 text-center mb-12 max-w-2xl mx-auto">
            Don't just take our word for it — here's why guests call us the best BBQ restaurant in Canggu.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((review, i) => (
              <div key={i} className="bg-stone-800/50 border border-stone-700/50 rounded-xl p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-stone-300 mb-4 italic">"{review.text}"</p>
                <p className="text-amber-400 font-semibold">{review.author}</p>
                <p className="text-stone-500 text-sm">{review.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-amber-400">
            Frequently Asked Questions
          </h2>
          <p className="text-stone-400 text-center mb-12">
            Everything you need to know about the best BBQ in Canggu.
          </p>
          
          <div className="space-y-6">
            {FAQ_ITEMS.map((faq, i) => (
              <div key={i} className="bg-stone-800/50 border border-stone-700/50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-stone-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 px-4 bg-stone-900/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-amber-400">
            Find Us in Canggu
          </h2>
          <p className="text-stone-400 text-center mb-12 max-w-2xl mx-auto">
            Located in Tibubeneng, Canggu — the heart of Bali's most vibrant neighbourhood.
          </p>
          
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="bg-stone-800/50 border border-stone-700/50 rounded-xl p-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-semibold">Address</p>
                    <p className="text-stone-400">Tibubeneng, Canggu, Bali, Indonesia</p>
                    <p className="text-stone-500 text-sm mt-1">Near Berawa, Batu Bolong, Pererenan</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-semibold">Opening Hours</p>
                    <p className="text-stone-400">Daily: 12pm – 12am</p>
                    <p className="text-green-400 text-sm mt-1">10% off lunch reservations (12pm–5pm)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-semibold">Contact</p>
                    <a href="https://wa.me/6287867966662" className="text-amber-400 hover:underline">+62 878 6796 6662 (WhatsApp)</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-xl overflow-hidden h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.567123456789!2d115.1385!3d-8.6478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMzgnNTEuOCJTIDExNcKwMDgnMTguNiJF!5e0!3m2!1sen!2sid!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Nico's Smokehouse Location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${ASSET_BASE}/openart-image_1773994724931_39257367_1773994725151_04d1e791.jpg)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/80 to-stone-950" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Ready to Experience the Best BBQ in Canggu?
            </span>
          </h2>
          <p className="text-xl text-stone-400 mb-10 max-w-2xl mx-auto">
            Book your table, explore our menu, or get in touch. Your unforgettable BBQ experience awaits.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/book-table"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-lg hover:from-amber-600 hover:to-orange-700 transition-all shadow-lg text-lg"
            >
              Book Now
            </Link>
            <Link 
              to="/order"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-stone-800 border border-amber-500/50 text-amber-400 font-bold rounded-lg hover:bg-stone-700 transition-all text-lg"
            >
              View Menu
            </Link>
            <a 
              href="https://wa.me/6287867966662"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-all text-lg"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="py-8 px-4 border-t border-stone-800">
        <div className="max-w-5xl mx-auto text-center">
          <img 
            src={`${ASSET_BASE}/nicos-logo-white.png`}
            alt="Nico's Smokehouse"
            className="w-24 mx-auto mb-4"
          />
          <p className="text-stone-500 text-sm">
            Nico's Smokehouse — Best BBQ Restaurant in Canggu, Bali
          </p>
          <p className="text-stone-600 text-xs mt-2">
            © {new Date().getFullYear()} Nico's Smokehouse. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
