import { BrowserRouter as Router, Routes, Route } from "react-router";
import { lazy, Suspense } from "react";
import HomePage from "@/react-app/pages/Home";
import DynamicCanonical from "@/react-app/components/DynamicCanonical";

// Lazy load all pages except Home for faster initial load
const CaribbeanFoodPage = lazy(() => import("@/react-app/pages/CaribbeanFood"));
const PeriPeriPage = lazy(() => import("@/react-app/pages/PeriPeri"));
const TexasBBQPage = lazy(() => import("@/react-app/pages/TexasBBQ"));
const CateringPage = lazy(() => import("@/react-app/pages/Catering"));
const CateringTexasBBQPage = lazy(() => import("@/react-app/pages/CateringTexasBBQ"));
const CateringPeriPeriPage = lazy(() => import("@/react-app/pages/CateringPeriPeri"));
const CateringCaribbeanPage = lazy(() => import("@/react-app/pages/CateringCaribbean"));
const CateringCangguPage = lazy(() => import("@/react-app/pages/CateringCanggu"));
const CateringSeminyakPage = lazy(() => import("@/react-app/pages/CateringSeminyak"));
const CateringPererenanPage = lazy(() => import("@/react-app/pages/CateringPererenan"));
const CateringUmalasPage = lazy(() => import("@/react-app/pages/CateringUmalas"));
const CateringBerawaPage = lazy(() => import("@/react-app/pages/CateringBerawa"));
const CateringSanurPage = lazy(() => import("@/react-app/pages/CateringSanur"));
const CateringNusaDuaPage = lazy(() => import("@/react-app/pages/CateringNusaDua"));
const CateringLegianPage = lazy(() => import("@/react-app/pages/CateringLegian"));
const CateringUluwatuPage = lazy(() => import("@/react-app/pages/CateringUluwatu"));
const TableBookingPage = lazy(() => import("@/react-app/pages/TableBooking"));
const InteractiveMenuPage = lazy(() => import("@/react-app/pages/InteractiveMenu"));
const NotFoundPage = lazy(() => import("@/react-app/pages/NotFound"));
const BestBBQCangguPage = lazy(() => import("@/react-app/pages/BestBBQCanggu"));
const BlogPage = lazy(() => import("@/react-app/pages/Blog"));
const BlogBestBBQCangguPage = lazy(() => import("@/react-app/pages/BlogBestBBQCanggu"));
const BlogAuthenticBBQCangguPage = lazy(() => import("@/react-app/pages/BlogAuthenticBBQCanggu"));
const BlogBBQKingCangguPage = lazy(() => import("@/react-app/pages/BlogBBQKingCanggu"));

// Minimal loading spinner
function PageLoader() {
  return (
    <div className="min-h-screen bg-stone-900 flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-amber-500 border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <DynamicCanonical />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/caribbean-food-canggu-bali" element={<CaribbeanFoodPage />} />
          <Route path="/peri-peri-chicken-canggu-bali" element={<PeriPeriPage />} />
          <Route path="/texas-bbq-canggu-bali" element={<TexasBBQPage />} />
          <Route path="/catering-bali" element={<CateringPage />} />
          <Route path="/texas-bbq-catering-bali" element={<CateringTexasBBQPage />} />
          <Route path="/peri-peri-catering-bali" element={<CateringPeriPeriPage />} />
          <Route path="/caribbean-catering-bali" element={<CateringCaribbeanPage />} />
          <Route path="/catering-canggu" element={<CateringCangguPage />} />
          <Route path="/catering-seminyak" element={<CateringSeminyakPage />} />
          <Route path="/catering-pererenan" element={<CateringPererenanPage />} />
          <Route path="/catering-umalas" element={<CateringUmalasPage />} />
          <Route path="/catering-berawa" element={<CateringBerawaPage />} />
          <Route path="/catering-sanur" element={<CateringSanurPage />} />
          <Route path="/catering-nusa-dua" element={<CateringNusaDuaPage />} />
          <Route path="/catering-legian" element={<CateringLegianPage />} />
          <Route path="/catering-uluwatu" element={<CateringUluwatuPage />} />
          <Route path="/book-table" element={<TableBookingPage />} />
          <Route path="/order" element={<InteractiveMenuPage />} />
          <Route path="/best-bbq-canggu" element={<BestBBQCangguPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/what-is-the-best-bbq-restaurant-in-canggu" element={<BlogBestBBQCangguPage />} />
          <Route path="/blog/where-to-get-authentic-bbq-in-canggu-bali" element={<BlogAuthenticBBQCangguPage />} />
          <Route path="/blog/texas-smoke-meets-caribbean-soul-bbq-king-canggu" element={<BlogBBQKingCangguPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
