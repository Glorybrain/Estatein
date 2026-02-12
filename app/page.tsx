import CallToActionSection from "@/components/CallToActionSection";
import FaqSection from "@/components/FaqSection";
import FeaturedPropertiesSection from "@/components/FeaturedPropertiesSection";
import FeatureStrip from "@/components/FeatureStrip";
import Hero from "@/components/HomeHero";
import TestimonialSection from "@/components/TestimonialSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="p-4 md:p-6 lg:p-0">
        <FeatureStrip />
      </div>

      <FeaturedPropertiesSection />
      <TestimonialSection />
      <FaqSection />
      <CallToActionSection />
    </>
  );
}
