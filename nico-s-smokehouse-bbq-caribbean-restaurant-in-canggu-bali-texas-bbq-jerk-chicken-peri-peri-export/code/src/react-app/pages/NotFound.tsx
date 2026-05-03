import { Link } from 'react-router';
import { Home, ArrowLeft } from 'lucide-react';

const LOGO_URL = "https://019d0a46-9da2-77c5-9887-de886a0fdfda.mochausercontent.com/nicos-logo-white.png";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center relative">
      {/* Wooden Wall Background */}
      <div className="absolute inset-0">
        <img 
          src="https://019d0a46-9da2-77c5-9887-de886a0fdfda.mochausercontent.com/openart-image_1773994724931_39257367_1773994725151_04d1e791.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-md">
        <img 
          src={LOGO_URL} 
          alt="Nico's Smokehouse" 
          className="w-32 h-32 mx-auto mb-6 object-contain"
        />
        
        <h1 className="font-['Bebas_Neue'] text-6xl md:text-8xl text-ember mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl text-cream font-bold mb-4">Page Not Found</h2>
        <p className="text-cream/80 mb-8">
          Looks like this page went up in smoke! The page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-ember hover:bg-amber-600 text-white font-medium rounded-lg transition-colors"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
          <button 
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-wood-medium hover:bg-wood-light/30 text-cream font-medium rounded-lg transition-colors border border-amber-700/50"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
