import CallToActionSection from "@/components/CallToActionSection";
import ContactSection from "@/components/ContactSection";
import ExploreWorldSection from "@/components/ExploreWorldSection";
import FeatureStrip from "@/components/FeatureStrip";
import OfficeLocationsSection from "@/components/OfficeLocationsSection";
import PageHero from "@/components/PageHero";
import type { Metadata } from "next";
import Script from "next/script";

const SITE_URL = "https://estateiin.netlify.app/";

export const metadata: Metadata = {
    title: "Contact",
    description:
        "Contact Estatein for property inquiries, support, partnerships, or feedback. We're here to help you find the right property with confidence.",
    alternates: {
        canonical: `${SITE_URL}/contact`,
    },
    openGraph: {
        title: "Contact | Estatein",
        description:
            "Get in touch with Estatein for property inquiries, support, partnerships, or feedback.",
        url: `${SITE_URL}/contact`,
        type: "website",
        images: [
            {
                url: "/hero-image.png",
                width: 1200,
                height: 630,
                alt: "Contact Estatein",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact | Estatein",
        description:
            "Get in touch with Estatein for property inquiries, support, partnerships, or feedback.",
        images: ["/hero-image.png"],
    },
};

export default function ContactPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: "Contact Estatein",
        url: `${SITE_URL}/contact`,
        mainEntity: {
            "@type": "Organization",
            name: "Estatein",
            url: SITE_URL,
        },
    };

    return (
        <>
            <Script
                id="contact-jsonld"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

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
