import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Story from "@/components/Story";
import Specialties from "@/components/Specialties";
import MenuSection from "@/components/menu/MenuSection";
import Deal from "@/components/Deal";
import CateringTeaser from "@/components/CateringTeaser";
import Visit from "@/components/Visit";
import FAQ from "@/components/FAQ";
import { buildJsonLd } from "@/lib/schema";

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: buildJsonLd() }}
      />
      <main>
        <Hero />
        <Ticker />
        <Story />
        <Specialties />
        <MenuSection />
        <Deal />
        <CateringTeaser />
        <Visit />
        <FAQ />
      </main>
    </>
  );
}
