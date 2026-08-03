import Hero from "@/components/Hero";
import Specialties from "@/components/Specialties";
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
        <Specialties />
        <FAQ />
      </main>
    </>
  );
}
