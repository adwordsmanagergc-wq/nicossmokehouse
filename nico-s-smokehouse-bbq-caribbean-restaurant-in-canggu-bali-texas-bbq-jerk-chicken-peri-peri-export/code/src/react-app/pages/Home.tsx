import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router';
import { MapPin, Instagram, Flame, Utensils, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import { trackClick } from '@/react-app/utils/tracking';

const LOGO_URL = "https://019d0a46-9da2-77c5-9887-de886a0fdfda.mochausercontent.com/nicos-logo-white.png";

const SPORTS_BAR_IMAGES = [
  "https://019d0a46-9da2-77c5-9887-de886a0fdfda.mochausercontent.com/nicos-sports-bar.png",
  "https://019d0a46-9da2-77c5-9887-de886a0fdfda.mochausercontent.com/openart-image_1774153537061_7a0d3a5c_1774153537109_393f27d5.png",
];

const MENU_PAGES = [
  "https://019d0a46-9da2-77c5-9887-de886a0fdfda.mochausercontent.com/1.png",
  "https://019d0a46-9da2-77c5-9887-de886a0fdfda.mochausercontent.com/2.png",
  "https://019d0a46-9da2-77c5-9887-de886a0fdfda.mochausercontent.com/3.png",
];

const CUISINE_HIGHLIGHTS = [
  {
    title: "Jamaican Soul",
    subtitle: "Caribbean Flavors in Bali",
    description: "Jerk Chicken, Curry Goat, Oxtail — authentic island recipes slow-cooked to perfection",
    image: "https://019d0a46-9da2-77c5-9887-de886a0fdfda.mochausercontent.com/Jerk-Chicken-Bali.jpg",
    color: "from-black/80 to-black/60",
    link: "/caribbean-food-canggu-bali",
  },
  {
    title: "Texas BBQ",
    subtitle: "Slow-Smoked in Bali",
    description: "Brisket, ribs, and sausage smoked low and slow in authentic Texan dry rub tradition",
    image: "https://019d0a46-9da2-77c5-9887-de886a0fdfda.mochausercontent.com/Screenshot-2026-03-20-at-4.30.38-pm.png",
    color: "from-black/80 to-black/60",
    link: "/texas-bbq-canggu-bali",
  },
  {
    title: "Peri Peri Fire",
    subtitle: "Portuguese Heat in Bali",
    description: "Flame-grilled chicken with our signature peri peri marinades — from mild to extra hot",
    image: "https://019d0a46-9da2-77c5-9887-de886a0fdfda.mochausercontent.com/peri-peri-chicken-canggu-bali.jpg",
    color: "from-black/80 to-black/60",
    link: "/peri-peri-chicken-canggu-bali",
  },
];

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
];

export default function HomePage() {
  const [currentMenuPage, setCurrentMenuPage] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [blogDropdownOpen, setBlogDropdownOpen] = useState(false);
  const [cateringDropdownOpen, setCateringDropdownOpen] = useState(false);
  const [areasDropdownOpen, setAreasDropdownOpen] = useState(false);
  const [showClosedPopup, setShowClosedPopup] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  
  // Slider drag state
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Get current day in Bali time for daily special
  const getDayOfWeek = () => {
    const baliTime = new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Makassar' }));
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[baliTime.getDay()];
  };
  
  const currentDay = getDayOfWeek();

  // Check if it's lunch special time (12pm - 5pm Bali time)
  const [showLunchSpecial, setShowLunchSpecial] = useState(false);

  // Check if restaurant is closed (12am - 12pm Bali time / UTC+8)
  useEffect(() => {
    const checkIfClosed = () => {
      const now = new Date();
      // Get current hour in Bali time (UTC+8)
      const baliTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Makassar' }));
      const baliHour = baliTime.getHours();
      // Closed between 00:00 (midnight) and 12:00 (noon)
      return baliHour >= 0 && baliHour < 12;
    };

    const checkLunchSpecialTime = () => {
      const now = new Date();
      const baliTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Makassar' }));
      const baliHour = baliTime.getHours();
      // Lunch special between 12pm (12) and 5pm (17)
      return baliHour >= 12 && baliHour < 17;
    };

    if (checkIfClosed()) {
      setShowClosedPopup(true);
    }

    setShowLunchSpecial(checkLunchSpecialTime());
  }, []);

  const nextPage = () => setCurrentMenuPage((p) => (p + 1) % MENU_PAGES.length);
  const prevPage = () => setCurrentMenuPage((p) => (p - 1 + MENU_PAGES.length) % MENU_PAGES.length);

  // Preload all menu images when modal opens
  useEffect(() => {
    if (isMenuOpen && !imagesLoaded) {
      const promises = MENU_PAGES.map((src) => {
        return new Promise<void>((resolve) => {
          const img = new Image();
          img.onload = () => resolve();
          img.onerror = () => resolve(); // Still resolve on error to not block
          img.src = src;
        });
      });
      Promise.all(promises).then(() => setImagesLoaded(true));
    }
  }, [isMenuOpen, imagesLoaded]);

  // Touch handlers for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    
    const diff = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (Math.abs(diff) > minSwipeDistance) {
      if (diff > 0) {
        nextPage(); // Swipe left = next
      } else {
        prevPage(); // Swipe right = previous
      }
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Sports bar slider auto-advance
  // Slider drag handlers
  const handleSliderMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    setIsDragging(true);
    setIsPaused(true);
    setDragStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleSliderMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - dragStartX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleSliderMouseUp = () => {
    setIsDragging(false);
  };

  const handleSliderTouchStart = (e: React.TouchEvent) => {
    if (!sliderRef.current) return;
    setIsPaused(true);
    setDragStartX(e.touches[0].pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
    setIsDragging(true);
  };

  const handleSliderTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !sliderRef.current) return;
    const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
    const walk = (x - dragStartX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleSliderTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Wooden Wall Background */}
        <div className="absolute inset-0">
          <img 
            src="https://019d0a46-9da2-77c5-9887-de886a0fdfda.mochausercontent.com/openart-image_1773994724931_39257367_1773994725151_04d1e791.jpg"
            alt="Nico's Smokehouse BBQ restaurant rustic wooden interior Canggu Bali"
            className="absolute inset-0 w-full h-full object-cover object-left md:object-center"
            fetchPriority="high"
            decoding="async"
          />
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />
        </div>
        
        {/* Subtle smoke effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="absolute w-48 h-48 rounded-full bg-white/5 blur-3xl smoke-particle"
              style={{
                left: `${20 + i * 20}%`,
                bottom: '10%',
                animationDelay: `${i * 1.2}s`,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          {/* Logo */}
          <div className="mb-8">
            <div className="w-52 h-52 md:w-72 md:h-72 mx-auto rounded-full shadow-2xl shadow-black/50 flex items-center justify-center">
              <img 
                src={LOGO_URL} 
                alt="Nico's Smokehouse" 
                className="w-full h-full object-contain"
                fetchPriority="high"
              />
            </div>
          </div>

          {/* Tagline */}
          <div className="bg-black/50 backdrop-blur-sm px-8 py-4 rounded-lg mb-4">
            <h1 className="font-['Bebas_Neue'] text-4xl md:text-7xl lg:text-8xl tracking-wider text-transparent bg-gradient-to-r from-orange-400 via-red-500 to-amber-500 bg-clip-text animate-pulse-subtle whitespace-nowrap">
              SMOKE. FIRE. SOUL.
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-cream max-w-3xl mx-auto mb-8 font-medium tracking-wide px-6 py-3 bg-black/40 backdrop-blur-sm rounded-lg border border-cream/20 shadow-lg">
            Where Texas BBQ meets Caribbean Soul & Peri Peri Fire in the heart of Bali
          </p>

          {/* Location badge */}
          <a 
            href="https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUyBggAEEUYOTISCAEQLhgNGK8BGMcBGIAEGI4FMgoIAhAAGAoYDRgeMgoIAxAAGAoYDRgeMg0IBBAAGIYDGIAEGIoFMg0IBRAAGIYDGIAEGIoFMg0IBhAAGIYDGIAEGIoFMgcIBxAAGO8FMgcICBAAGO8F0gEINjg1MGowajeoAgCwAgA&um=1&ie=UTF-8&fb=1&gl=id&sa=X&geocode=Kdsz7W4UOdItMYlBMYdGEjPp&daddr=Jl.+Raya+Canggu,+Tibubeneng,+Kec.+Kuta+Utara,+Kabupaten+Badung,+Bali+80361"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-wood-medium/50 backdrop-blur-sm px-6 py-3 rounded-full border border-wood-light/30 mb-10 hover:bg-wood-medium/70 transition-colors group"
          >
            <MapPin className="w-5 h-5 text-ember" />
            <span className="text-cream/90 text-sm tracking-wide">Canggu, Bali</span>
            <span className="text-ember text-sm font-medium group-hover:underline">Get Directions →</span>
          </a>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 md:mb-0">
            <Link 
              to="/order"
              className="group px-5 py-2.5 bg-gradient-to-b from-green-600 via-green-700 to-green-800 text-white font-medium text-sm rounded-sm hover:brightness-110 transition-all duration-300 flex items-center justify-center gap-2 shadow-md border-t border-green-500/50 border-b-2 border-b-green-950 md:min-w-[180px]"
            >
              <Flame className="w-4 h-4" />
              Build Your Order
            </Link>
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="group px-5 py-2.5 text-amber-100 font-medium text-sm rounded-sm hover:brightness-110 transition-all duration-300 flex items-center justify-center gap-2 shadow-md border-t border-amber-600/50 border-b-2 border-b-amber-950 relative overflow-hidden md:min-w-[180px]"
              style={{
                backgroundImage: 'linear-gradient(to bottom, rgb(180, 83, 9), rgb(146, 64, 14), rgb(120, 53, 15))'
              }}
            >
              <span 
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: 'repeating-linear-gradient(90deg, transparent 0px, transparent 12px, rgba(0,0,0,0.15) 12px, rgba(0,0,0,0.08) 14px, transparent 14px, transparent 20px), repeating-linear-gradient(90deg, transparent 0px, transparent 30px, rgba(255,255,255,0.05) 30px, rgba(255,255,255,0.02) 32px, transparent 32px)'
                }}
              />
              <Utensils className="w-4 h-4 relative z-10" />
              <span className="relative z-10">View Our Menu</span>
            </button>
            <a 
              href="https://instagram.com/nicossmokehouse"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white font-medium text-sm rounded-sm hover:brightness-110 transition-all duration-300 flex items-center justify-center gap-2 shadow-md md:min-w-[180px]"
            >
              <Instagram className="w-4 h-4" />
              @nicossmokehouse
            </a>
            <a 
              href="https://gofood.co.id/bali/restaurant/nico-s-smokehouse-tibubeneng-29af8618-1b2e-4d45-8522-e5c673344d15"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackClick('gofood')}
              className="px-5 py-2.5 bg-gradient-to-r from-green-600 via-green-500 to-green-400 text-white font-medium text-sm rounded-sm hover:brightness-110 transition-all duration-300 flex items-center justify-center gap-2 shadow-md md:min-w-[180px]"
            >
              Order Now via GoFood
            </a>
          </div>
        </div>
      </section>

      {/* Daily Special Banner - only shows 12pm-5pm Bali time */}
      {showLunchSpecial && (
      <section className="py-12 px-4 bg-gradient-to-b from-char to-amber-950/80">
        <div className="max-w-3xl mx-auto">
          <div className="relative bg-gradient-to-r from-amber-900/60 via-orange-900/50 to-amber-900/60 border border-amber-500/40 rounded-2xl p-6 md:p-8 text-center overflow-hidden">
            {/* Decorative flames */}
            <div className="absolute top-0 left-4 text-4xl opacity-30">🔥</div>
            <div className="absolute top-0 right-4 text-4xl opacity-30">🔥</div>
            <div className="absolute bottom-0 left-1/4 text-2xl opacity-20">🔥</div>
            <div className="absolute bottom-0 right-1/4 text-2xl opacity-20">🔥</div>
            
            <div className="relative z-10">
              <span className="inline-block px-4 py-1 bg-amber-500/20 border border-amber-400/50 text-amber-300 text-xs font-bold tracking-widest rounded-full mb-4">
                {currentDay.toUpperCase()}'S SPECIAL
              </span>
              
              <h3 className="font-['Bebas_Neue'] text-3xl md:text-4xl text-cream tracking-wide mb-3">
                10% OFF LUNCH RESERVATIONS
              </h3>
              
              <p className="text-cream/80 text-sm md:text-base mb-6 max-w-md mx-auto">
                Reserve your table between <span className="text-amber-300 font-semibold">12pm – 5pm</span> and enjoy 10% off your total bill
              </p>
              
              <Link
                to="/book-table"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black font-bold rounded-full transition-all hover:scale-105 shadow-lg shadow-amber-500/30"
              >
                <Utensils className="w-5 h-5" />
                <span>Book a Table</span>
                <span className="text-xs bg-black/20 px-2 py-0.5 rounded-full">🔥 10% OFF 🔥</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* Cuisine Highlights */}
      <section className="py-20 px-4 relative">
        {/* Wood background for this section */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1541123603104-512919d6a96c?w=800&q=60"
            alt="Rustic wood texture background BBQ smokehouse ambiance"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-amber-950/85" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-ember font-medium tracking-widest text-sm">OUR SPECIALTIES</span>
            <h2 className="font-['Bebas_Neue'] text-4xl md:text-6xl text-cream mt-2 tracking-wide">
              THREE FIRES, ONE KITCHEN
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
            {CUISINE_HIGHLIGHTS.map((cuisine, index) => (
              <Link 
                to={cuisine.link}
                key={index}
                className={`group relative h-[240px] md:h-[350px] rounded-xl overflow-hidden cursor-pointer ${index === 0 ? 'col-span-2 md:col-span-1' : ''}`}
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${cuisine.image})`,
                    backgroundSize: index === 0 ? '130%' : 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }}
                />
                
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${cuisine.color} via-transparent to-char/60 opacity-90`} />
                
                {/* Burnt edge effect */}
                <div className="absolute inset-0 burnt-edge" />
                
                {/* Content */}
                <div className="absolute inset-0 p-3 md:p-5 flex flex-col justify-end">
                  <span className="text-cream/70 text-xs tracking-widest uppercase mb-0.5">
                    {cuisine.subtitle}
                  </span>
                  <h3 className="font-['Bebas_Neue'] text-xl md:text-3xl text-cream mb-1 md:mb-2 tracking-wide">
                    {cuisine.title}
                  </h3>
                  <p className="text-cream/80 text-xs md:text-sm leading-relaxed line-clamp-2">
                    {cuisine.description}
                  </p>
                  
                  {/* Flame icon */}
                  <div className="absolute top-3 right-3 md:top-4 md:right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Flame className="w-5 h-5 md:w-6 md:h-6 text-ember" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Slideshow - Continuous Marquee */}
      <section className="py-16 relative overflow-hidden">
        {/* Wood plank background */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=60"
            alt="Wood plank texture authentic smokehouse decor"
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

          {/* Continuous Marquee with Touch Swipe */}
          <div 
            ref={sliderRef}
            className={`relative overflow-x-auto scrollbar-hide ios-scroll ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
            onMouseDown={handleSliderMouseDown}
            onMouseMove={handleSliderMouseMove}
            onMouseUp={handleSliderMouseUp}
            onMouseLeave={handleSliderMouseUp}
            onTouchStart={handleSliderTouchStart}
            onTouchMove={handleSliderTouchMove}
            onTouchEnd={handleSliderTouchEnd}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
          >
            {/* Gradient fades on edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-amber-950/90 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-amber-950/90 to-transparent z-10 pointer-events-none" />
            
            <div 
              className={`flex marquee-container ${isPaused ? '' : 'animate-marquee'}`}
            >
              {/* First set of images */}
              {SLIDESHOW_IMAGES.map((image, index) => (
                <div key={`a-${index}`} className="flex-shrink-0 px-2">
                  <img 
                    src={image} 
                    alt={`Nico's Smokehouse dish ${index + 1}`}
                    className="h-48 md:h-56 w-auto rounded-lg shadow-xl object-cover pointer-events-none select-none"
                    draggable={false}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {SLIDESHOW_IMAGES.map((image, index) => (
                <div key={`b-${index}`} className="flex-shrink-0 px-2">
                  <img 
                    src={image} 
                    alt={`Nico's Smokehouse dish ${index + 1}`}
                    className="h-48 md:h-56 w-auto rounded-lg shadow-xl object-cover pointer-events-none select-none"
                    draggable={false}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-10 px-4">
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-4 bg-wood-medium border border-wood-light/50 text-cream font-medium rounded-lg hover:bg-wood-light/30 transition-all"
            >
              <Utensils className="w-5 h-5" />
              View Full Menu
            </button>
          </div>
        </div>
      </section>

      {/* Coming Soon: Sports Bar */}
      <section className="py-16 px-4 relative overflow-hidden">
        {/* Dark wood background */}
        <div className="absolute inset-0 bg-gradient-to-b from-char via-amber-950/90 to-char" />
        
        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Coming Soon Badge */}
          <div className="text-center mb-8">
            <span className="inline-block px-6 py-2 bg-amber-500 text-black font-bold text-sm tracking-widest rounded-full animate-pulse">
              COMING SOON
            </span>
          </div>
          
          {/* Title */}
          <div className="text-center mb-10">
            <h2 className="font-['Bebas_Neue'] text-4xl md:text-6xl lg:text-7xl text-cream tracking-wider mb-2">
              NICO'S BINTANG SPORTS BAR
            </h2>
            <p className="text-xl md:text-2xl text-amber-400 font-medium">
              The Ultimate Sports Viewing Experience in Bali
            </p>
          </div>

          {/* Sports tags - above slider */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <span className="px-4 py-2 bg-stone-700 text-cream text-sm font-medium rounded-lg">
              🥊 UFC
            </span>
            <span className="px-4 py-2 bg-stone-700 text-cream text-sm font-medium rounded-lg">
              ⚽ Football
            </span>
            <span className="px-4 py-2 bg-stone-700 text-cream text-sm font-medium rounded-lg">
              🏆 Bali Fight Events
            </span>
            <span className="px-4 py-2 bg-stone-700 text-cream text-sm font-medium rounded-lg">
              🏀 Basketball
            </span>
            <span className="px-4 py-2 bg-stone-700 text-cream text-sm font-medium rounded-lg">
              🏈 NFL
            </span>
            <span className="px-4 py-2 bg-stone-700 text-cream text-sm font-medium rounded-lg">
              🏎️ F1
            </span>
          </div>

          {/* Image Slider - Continuous Carousel */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-amber-700/30 ios-scroll" style={{ WebkitOverflowScrolling: 'touch' }}>
            <div className="flex animate-sports-carousel">
              {/* Double the images for seamless loop */}
              {[...SPORTS_BAR_IMAGES, ...SPORTS_BAR_IMAGES].map((img, idx) => (
                <img 
                  key={idx}
                  src={img}
                  alt={`Nico's Bintang Sports Bar - Watch UFC, Football, and Bali Fight Events`}
                  className="w-[400px] md:w-[600px] h-[300px] md:h-[450px] object-cover flex-shrink-0"
                  loading="lazy"
                  decoding="async"
                />
              ))}
            </div>
          </div>

          {/* Description */}
          <p className="text-cream text-lg md:text-xl max-w-2xl mx-auto text-center mt-6">
            Watch the biggest fights, matches, and sporting events on the big screen with ice-cold Bintangs and our legendary BBQ. 
            <span className="text-amber-400 font-semibold"> Private viewing for up to 30 people!</span>
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <div className="text-center p-6 bg-black/40 rounded-xl border border-amber-700/30">
              <div className="text-4xl mb-3">📺</div>
              <h3 className="text-cream font-bold text-lg mb-2">Big Screen Action</h3>
              <p className="text-cream/70 text-sm">Massive projector screen for the best viewing experience</p>
            </div>
            <div className="text-center p-6 bg-black/40 rounded-xl border border-amber-700/30">
              <div className="text-4xl mb-3">🍺</div>
              <h3 className="text-cream font-bold text-lg mb-2">Ice-Cold Bintangs</h3>
              <p className="text-cream/70 text-sm">Drinks flowing all game long with our full bar</p>
            </div>
            <div className="text-center p-6 bg-black/40 rounded-xl border border-amber-700/30">
              <div className="text-4xl mb-3">👥</div>
              <h3 className="text-cream font-bold text-lg mb-2">Up to 30 People</h3>
              <p className="text-cream/70 text-sm">Perfect for group bookings and private events</p>
            </div>
          </div>

          {/* Stay Updated CTA */}
          <div className="text-center mt-10">
            <p className="text-cream/80 mb-4">Stay tuned for opening announcements!</p>
            <a 
              href="https://instagram.com/nicossmokehouse"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white font-medium rounded-lg hover:brightness-110 transition-all"
            >
              <Instagram className="w-5 h-5" />
              Follow for Updates
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-char via-amber-950/90 to-char" />
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-ember font-medium tracking-widest text-sm">FREQUENTLY ASKED</span>
            <h2 className="font-['Bebas_Neue'] text-4xl md:text-5xl text-cream mt-2 tracking-wide">
              QUESTIONS
            </h2>
          </div>

          <div className="space-y-4">
            {/* FAQ 1 */}
            <div className="bg-black/40 rounded-xl border border-amber-700/30 p-6">
              <h3 className="text-cream font-bold text-lg mb-2">Is Nico's Smokehouse air conditioned?</h3>
              <p className="text-cream/80 text-sm leading-relaxed">
                Yes! Nico's Smokehouse is fully air conditioned, making it the perfect escape from Bali's tropical heat. Our modern, climate-controlled restaurant keeps you cool and comfortable while you enjoy authentic BBQ, Caribbean food, and Peri Peri chicken.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="bg-black/40 rounded-xl border border-amber-700/30 p-6">
              <h3 className="text-cream font-bold text-lg mb-2">What are the best air conditioned restaurants in Canggu?</h3>
              <p className="text-cream/80 text-sm leading-relaxed">
                Nico's Smokehouse is one of the best air conditioned restaurants in Canggu. Unlike many open-air Bali restaurants, we offer a cool, comfortable indoor dining experience with 11 tables in a modern setting. Perfect for hot days when you want great food without the heat.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="bg-black/40 rounded-xl border border-amber-700/30 p-6">
              <h3 className="text-cream font-bold text-lg mb-2">Where can I find indoor dining in Canggu with AC?</h3>
              <p className="text-cream/80 text-sm leading-relaxed">
                Nico's Smokehouse offers fully air conditioned indoor dining on Jl. Raya Canggu. We're an intimate 11-table restaurant with a modern, cool atmosphere — ideal for families, couples, or groups looking to escape the Bali humidity while enjoying Texas BBQ, Jamaican cuisine, or Peri Peri chicken.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="bg-black/40 rounded-xl border border-amber-700/30 p-6">
              <h3 className="text-cream font-bold text-lg mb-2">What makes Nico's the best BBQ restaurant in Canggu?</h3>
              <p className="text-cream/80 text-sm leading-relaxed">
                Nico's Smokehouse is the only restaurant in Bali combining three fire-cooked cuisines: Texas-style smoked BBQ (with US Prime brisket smoked 14+ hours), authentic Caribbean/Jamaican dishes (jerk chicken, curry goat, oxtail), and Peri Peri chicken with 16 sauce levels. Plus we're air conditioned!
              </p>
            </div>

            {/* FAQ 5 */}
            <div className="bg-black/40 rounded-xl border border-amber-700/30 p-6">
              <h3 className="text-cream font-bold text-lg mb-2">Do you take reservations?</h3>
              <p className="text-cream/80 text-sm leading-relaxed">
                Yes, we highly recommend booking a table! We're a small restaurant with only 11 tables and our smoked meats are limited each day. Reserve via our website or WhatsApp to avoid disappointment. Book between 12pm-5pm for 10% off your bill!
              </p>
            </div>

            {/* FAQ 6 */}
            <div className="bg-black/40 rounded-xl border border-amber-700/30 p-6">
              <h3 className="text-cream font-bold text-lg mb-2">Is Nico's Smokehouse family friendly?</h3>
              <p className="text-cream/80 text-sm leading-relaxed">
                Absolutely! Our air conditioned restaurant is perfect for families with kids who need a break from the Bali heat. We have sharing platters great for families, and our menu has something for everyone from mild Peri Peri to classic BBQ sides.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 px-4 border-t border-amber-900/50 overflow-hidden">
        {/* Wooden Wall Background */}
        <div className="absolute inset-0">
          <img 
            src="https://019d0a46-9da2-77c5-9887-de886a0fdfda.mochausercontent.com/openart-image_1773994724931_39257367_1773994725151_04d1e791.jpg"
            alt="Nico's Smokehouse BBQ restaurant wooden wall background"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-block bg-black/60 backdrop-blur-sm rounded-2xl px-8 py-8 md:px-12 md:py-10">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden">
              <img 
                src={LOGO_URL} 
                alt="Nico's Smokehouse" 
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-smoke mb-6">
              Authentic BBQ & Caribbean Cuisine in Bali
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-6">
              <a 
                href="https://instagram.com/nicossmokehouse"
                target="_blank"
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-cream/70 hover:text-ember transition-colors"
              >
                <Instagram className="w-5 h-5" />
                @nicossmokehouse
              </a>
            </div>
            
            {/* Catering Button */}
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <Link 
                to="/order"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-500 text-white font-medium rounded-lg transition-colors"
              >
                <Flame className="w-5 h-5" />
                Build Your Order
              </Link>
              <Link 
                to="/catering-bali"
                className="inline-flex items-center gap-2 px-6 py-3 bg-ember hover:bg-amber-600 text-white font-medium rounded-lg transition-colors"
              >
                <Utensils className="w-5 h-5" />
                Catering Services
              </Link>
              <Link 
                to="/book-table"
                className="inline-flex items-center gap-2 px-6 py-3 bg-wood hover:bg-wood/80 text-cream font-medium rounded-lg transition-colors border border-amber-700/50"
              >
                <MapPin className="w-5 h-5" />
                Reserve a Table
              </Link>
            </div>
            
            {/* Blog Links Dropdown */}
            <div className="relative mb-4">
              <button
                onClick={() => {
                  setBlogDropdownOpen(!blogDropdownOpen);
                  setCateringDropdownOpen(false);
                  setAreasDropdownOpen(false);
                }}
                className="flex items-center gap-2 text-sm text-cream/60 hover:text-ember transition-colors mx-auto"
              >
                <span>Blogs</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${blogDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {blogDropdownOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 bg-black/90 backdrop-blur-sm rounded-lg border border-smoke/20 py-2 min-w-[200px] z-50">
                  <Link
                    to="/blog"
                    className="block px-4 py-2 text-sm text-amber-400 font-medium hover:text-ember hover:bg-smoke/10 transition-colors"
                    onClick={() => setBlogDropdownOpen(false)}
                  >
                    All Blog Posts
                  </Link>
                  <div className="border-t border-smoke/20 my-1"></div>
                  <Link
                    to="/caribbean-food-canggu-bali"
                    className="block px-4 py-2 text-sm text-cream/70 hover:text-ember hover:bg-smoke/10 transition-colors"
                    onClick={() => setBlogDropdownOpen(false)}
                  >
                    Caribbean Food
                  </Link>
                  <Link
                    to="/peri-peri-chicken-canggu-bali"
                    className="block px-4 py-2 text-sm text-cream/70 hover:text-ember hover:bg-smoke/10 transition-colors"
                    onClick={() => setBlogDropdownOpen(false)}
                  >
                    Peri Peri Chicken
                  </Link>
                  <Link
                    to="/texas-bbq-canggu-bali"
                    className="block px-4 py-2 text-sm text-cream/70 hover:text-ember hover:bg-smoke/10 transition-colors"
                    onClick={() => setBlogDropdownOpen(false)}
                  >
                    Texas BBQ
                  </Link>
                </div>
              )}
            </div>
            
            {/* Catering Links Dropdown */}
            <div className="relative mb-8">
              <button
                onClick={() => {
                  setCateringDropdownOpen(!cateringDropdownOpen);
                  setBlogDropdownOpen(false);
                  if (cateringDropdownOpen) setAreasDropdownOpen(false);
                }}
                className="flex items-center gap-2 text-sm text-cream/60 hover:text-ember transition-colors mx-auto"
              >
                <span>Catering</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${cateringDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {cateringDropdownOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 bg-black/90 backdrop-blur-sm rounded-lg border border-smoke/20 py-2 min-w-[200px] z-50 max-h-[70vh] overflow-y-auto">
                  {/* Areas Submenu - at top since dropdown opens upward */}
                  <div className="relative">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setAreasDropdownOpen(!areasDropdownOpen);
                      }}
                      className="w-full flex items-center justify-between px-4 py-2 text-sm text-cream/70 hover:text-ember hover:bg-smoke/10 transition-colors"
                    >
                      <span>Areas</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${areasDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {areasDropdownOpen && (
                      <div className="bg-black/95 rounded-lg border border-smoke/20 py-2 mb-1 mx-2">
                        <Link to="/catering-canggu" className="block px-4 py-2 text-sm text-cream/70 hover:text-ember hover:bg-smoke/10 transition-colors" onClick={() => { setCateringDropdownOpen(false); setAreasDropdownOpen(false); }}>Canggu</Link>
                        <Link to="/catering-seminyak" className="block px-4 py-2 text-sm text-cream/70 hover:text-ember hover:bg-smoke/10 transition-colors" onClick={() => { setCateringDropdownOpen(false); setAreasDropdownOpen(false); }}>Seminyak</Link>
                        <Link to="/catering-berawa" className="block px-4 py-2 text-sm text-cream/70 hover:text-ember hover:bg-smoke/10 transition-colors" onClick={() => { setCateringDropdownOpen(false); setAreasDropdownOpen(false); }}>Berawa</Link>
                        <Link to="/catering-pererenan" className="block px-4 py-2 text-sm text-cream/70 hover:text-ember hover:bg-smoke/10 transition-colors" onClick={() => { setCateringDropdownOpen(false); setAreasDropdownOpen(false); }}>Pererenan</Link>
                        <Link to="/catering-umalas" className="block px-4 py-2 text-sm text-cream/70 hover:text-ember hover:bg-smoke/10 transition-colors" onClick={() => { setCateringDropdownOpen(false); setAreasDropdownOpen(false); }}>Umalas</Link>
                        <Link to="/catering-legian" className="block px-4 py-2 text-sm text-cream/70 hover:text-ember hover:bg-smoke/10 transition-colors" onClick={() => { setCateringDropdownOpen(false); setAreasDropdownOpen(false); }}>Legian</Link>
                        <Link to="/catering-sanur" className="block px-4 py-2 text-sm text-cream/70 hover:text-ember hover:bg-smoke/10 transition-colors" onClick={() => { setCateringDropdownOpen(false); setAreasDropdownOpen(false); }}>Sanur</Link>
                        <Link to="/catering-nusa-dua" className="block px-4 py-2 text-sm text-cream/70 hover:text-ember hover:bg-smoke/10 transition-colors" onClick={() => { setCateringDropdownOpen(false); setAreasDropdownOpen(false); }}>Nusa Dua</Link>
                        <Link to="/catering-uluwatu" className="block px-4 py-2 text-sm text-cream/70 hover:text-ember hover:bg-smoke/10 transition-colors" onClick={() => { setCateringDropdownOpen(false); setAreasDropdownOpen(false); }}>Uluwatu</Link>
                      </div>
                    )}
                  </div>
                  
                  <Link
                    to="/caribbean-catering-bali"
                    className="block px-4 py-2 text-sm text-cream/70 hover:text-ember hover:bg-smoke/10 transition-colors"
                    onClick={() => setCateringDropdownOpen(false)}
                  >
                    Caribbean Catering
                  </Link>
                  <Link
                    to="/peri-peri-catering-bali"
                    className="block px-4 py-2 text-sm text-cream/70 hover:text-ember hover:bg-smoke/10 transition-colors"
                    onClick={() => setCateringDropdownOpen(false)}
                  >
                    Peri Peri Catering
                  </Link>
                  <Link
                    to="/texas-bbq-catering-bali"
                    className="block px-4 py-2 text-sm text-cream/70 hover:text-ember hover:bg-smoke/10 transition-colors"
                    onClick={() => setCateringDropdownOpen(false)}
                  >
                    Texas BBQ Catering
                  </Link>
                  <Link
                    to="/catering-bali"
                    className="block px-4 py-2 text-sm text-cream/70 hover:text-ember hover:bg-smoke/10 transition-colors"
                    onClick={() => setCateringDropdownOpen(false)}
                  >
                    All Catering
                  </Link>
                </div>
              )}
            </div>
            
            <p className="text-smoke/50 text-sm">
              © {new Date().getFullYear()} Nico's Smokehouse. All rights reserved.
            </p>
            
            <div className="flex items-center justify-center gap-2 mt-4 text-smoke/40 text-xs">
              <span>Website & Marketing by Metatap Pty Ltd</span>
              <a
                href="https://wa.me/61488898835"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#25D366] hover:text-[#20bd5a] transition-colors"
                aria-label="Contact Metatap on WhatsApp"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Menu Modal */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-hidden"
          onClick={() => setIsMenuOpen(false)}
        >
          {/* Wooden Wall Background */}
          <div className="absolute inset-0">
            <img 
              src="https://019d0a46-9da2-77c5-9887-de886a0fdfda.mochausercontent.com/openart-image_1773994724931_39257367_1773994725151_04d1e791.jpg"
              alt="Nico's Smokehouse BBQ restaurant rustic interior"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
          </div>

          <div 
            className="relative max-w-4xl w-full max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="absolute -top-12 right-0 text-cream/70 hover:text-cream transition-colors text-lg"
            >
              Close ✕
            </button>

            {/* Menu Book Container */}
            <div className="relative bg-wood-medium rounded-2xl p-4 md:p-8 shadow-2xl border border-wood-light/20">
              {/* Book spine decoration */}
              <div className="absolute left-1/2 top-4 bottom-4 w-1 bg-wood-dark/50 -translate-x-1/2 hidden md:block" />
              
              {/* Page counter and swipe hint */}
              <div className="text-center mb-4">
                <span className="text-smoke text-sm">
                  Page {currentMenuPage + 1} of {MENU_PAGES.length}
                </span>
                <p className="text-cream/60 text-xs mt-1 flex items-center justify-center gap-2">
                  <ChevronLeft className="w-4 h-4 animate-pulse" />
                  <span>Swipe or tap arrows to browse</span>
                  <ChevronRight className="w-4 h-4 animate-pulse" />
                </p>
              </div>

              {/* Menu Image */}
              <div 
                className="relative overflow-hidden rounded-lg bg-cream aspect-[3/4] md:aspect-[4/3]"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                {!imagesLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-cream">
                    <div className="text-wood-dark text-sm">Loading menu...</div>
                  </div>
                )}
                <img 
                  src={MENU_PAGES[currentMenuPage]} 
                  alt={`Menu page ${currentMenuPage + 1}`}
                  className="w-full h-full object-contain"
                  loading="eager"
                />
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-4">
                <button 
                  onClick={prevPage}
                  className="flex items-center gap-2 px-4 py-2 bg-wood-dark/50 text-cream rounded-lg hover:bg-wood-dark transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                  <span className="hidden sm:inline">Previous</span>
                </button>

                {/* Page dots */}
                <div className="flex gap-2">
                  {MENU_PAGES.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentMenuPage(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentMenuPage ? 'bg-ember' : 'bg-wood-light/50'
                      }`}
                    />
                  ))}
                </div>

                <button 
                  onClick={nextPage}
                  className="flex items-center gap-2 px-4 py-2 bg-wood-dark/50 text-cream rounded-lg hover:bg-wood-dark transition-colors"
                >
                  <span className="hidden sm:inline">Next</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Closed Hours Popup */}
      {showClosedPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div 
            className="relative max-w-md w-full rounded-2xl overflow-hidden shadow-2xl"
            style={{
              backgroundImage: `url('https://019d0a46-9da2-77c5-9887-de886a0fdfda.mochausercontent.com/openart-image_1773994724931_39257367_1773994725151_04d1e791.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="bg-black/80 p-6 sm:p-8 text-center max-h-[85vh] overflow-y-auto">
              <div className="mb-4">
                <img 
                  src={LOGO_URL} 
                  alt="Nico's Smokehouse" 
                  className="w-24 h-24 sm:w-32 sm:h-32 mx-auto object-contain"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-cream mb-3">You caught us out of hours</h3>
              <p className="text-cream/90 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                Our kitchen fires up daily from <span className="font-semibold text-ember">12pm – 12am</span>.
              </p>
              <p className="text-cream/80 mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed">
                We're a small, air-conditioned modern restaurant with just 11 tables, and our smoked meats are limited each day — so <span className="font-semibold text-cream">bookings are recommended</span> to avoid disappointment.
              </p>
              <p className="text-cream/90 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                Send us a message on WhatsApp to book a table or enquire about catering — we'll get back to you during working hours.
              </p>
              
              {/* Daily Special */}
              <div className="bg-gradient-to-r from-amber-600/30 to-orange-600/30 border border-amber-500/50 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
                <p className="text-amber-400 font-bold text-base sm:text-lg mb-1">🔥 {currentDay} Special 🔥</p>
                <p className="text-cream text-xs sm:text-sm">
                  Reserve your table today between <span className="font-semibold text-amber-300">12pm and 5pm</span> for <span className="font-bold text-amber-300">10% off</span> your total bill!
                </p>
              </div>
              
              <div className="flex flex-col gap-3">
                <Link
                  to="/book-table"
                  onClick={() => setShowClosedPopup(false)}
                  className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold transition-all hover:scale-105 text-sm sm:text-base"
                >
                  <Utensils className="w-5 h-5" />
                  Book a Table
                </Link>
                <Link
                  to="/order"
                  onClick={() => setShowClosedPopup(false)}
                  className="flex flex-col items-center justify-center gap-1 bg-amber-700 hover:bg-amber-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold transition-all hover:scale-105 text-sm sm:text-base"
                >
                  <span className="flex items-center gap-2">
                    <Flame className="w-5 h-5" />
                    Build Your Order for Later
                  </span>
                  <span className="text-xs text-amber-200 font-normal">Delivery or Pickup • 12:30pm – 11:30pm</span>
                </Link>
                <a
                  href="https://wa.me/6287867966662?text=Hi%2C%20I'd%20like%20to%20enquire%20about%20catering"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-ember hover:bg-ember/90 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold transition-all hover:scale-105 text-sm sm:text-base"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Catering Enquiry
                </a>
                <button
                  onClick={() => setShowClosedPopup(false)}
                  className="text-cream/70 hover:text-cream text-sm transition-colors"
                >
                  Continue to Website
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Book a Table Button */}
      <Link
        to="/book-table"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
      >
        <Utensils className="w-5 h-5" />
        <span className="font-semibold text-sm">Book a Table</span>
      </Link>
    </div>
  );
}
