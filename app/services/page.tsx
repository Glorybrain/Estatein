import CallToActionSection from "@/components/CallToActionSection";
import FeatureStrip from "@/components/FeatureStrip";
import PageHero from "@/components/PageHero";
import type { Metadata } from "next";
import ServiceCategoriesSection from "@/components/ServiceCategoriesSection";
import PropertyManagementCategoriesSection from "@/components/PropertyManagementCategoriesSection";
import InvestmentAdvisorySection from "@/components/InvestmentAdvisorySection";
import Script from "next/script";

const SITE_URL = "https://estateiin.netlify.app/";

export const metadata: Metadata = {
    title: "Services",
    description:
        "Explore Estatein’s real estate services—from property discovery and management to investment advisory—designed to help you make confident decisions.",
    alternates: {
        canonical: `${SITE_URL}/services`,
    },
    openGraph: {
        title: "Services | Estatein",
        description:
            "Explore Estatein’s services: property discovery, property management, and investment advisory.",
        url: `${SITE_URL}/services`,
        type: "website",
        images: [
            {
                url: "/hero-image.png",
                width: 1200,
                height: 630,
                alt: "Estatein Services",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Services | Estatein",
        description:
            "Explore Estatein’s services: property discovery, property management, and investment advisory.",
        images: ["/hero-image.png"],
    },
};

export default function ServicesPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Services",
        url: `${SITE_URL}/services`,
        about: {
            "@type": "Service",
            name: "Real Estate Services",
            provider: {
                "@type": "Organization",
                name: "Estatein",
                url: SITE_URL,
            },
            serviceType: [
                "Property Discovery",
                "Property Management",
                "Investment Advisory",
            ],
        },
    };

    return (
        <>
            <Script
                id="services-jsonld"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <PageHero
                title="Elevate Your Real Estate Experience"
                subtitle="Welcome to Estatein, where your real estate aspirations meet expert guidance. Explore our comprehensive range of services, each designed to cater to your unique needs and dreams."
            />

            <div className="p-4 md:p-6 lg:p-0">
                <FeatureStrip />
            </div>

            <ServiceCategoriesSection />
            <PropertyManagementCategoriesSection />
            <InvestmentAdvisorySection />
            <CallToActionSection />
        </>
    );
}
