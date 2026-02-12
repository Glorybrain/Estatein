import CallToActionSection from "@/components/CallToActionSection";
import ContactSection from "@/components/ContactSection";
import ExploreWorldSection from "@/components/ExploreWorldSection";
import FeatureStrip from "@/components/FeatureStrip";
import OfficeLocationsSection from "@/components/OfficeLocationsSection";
import PageHero from "@/components/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact",
    description: "Learn more about Estatein.",
};

export default function ContactPage() {
    return (
        <>
            <PageHero
                title="Get in Touch with Estatein"
                subtitle="Welcome to Estatein's Contact Us page. We're here to assist you with any inquiries, requests, or feedback you may have. Whether you're looking to buy or sell a property, explore investment opportunities, or simply want to connect, we're just a message away. Reach out to us, and let's start a conversation."
            />
            <div className="p-4 md:p-6 lg:p-0">
                <FeatureStrip />
            </div>
            <ContactSection />
            <OfficeLocationsSection
                tabs={[
                    { id: "all", label: "All" },
                    { id: "regional", label: "Regional" },
                    { id: "international", label: "International" },
                ]}
            />
            <ExploreWorldSection />
            <CallToActionSection />
        </>
    );
}
