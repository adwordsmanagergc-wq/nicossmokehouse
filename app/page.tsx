import Hero from "@/components/Hero";
import Specialties from "@/components/Specialties";
import MenuPreview from "@/components/MenuPreview";
import SportsBarFeature from "@/components/SportsBarFeature";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import StickyBookButton from "@/components/StickyBookButton";
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
        <Specialties />
        <MenuPreview />
        <SportsBarFeature />
        <FAQ />
      </main>
      <Footer />
      <StickyBookButton />
    </>
  );
}
