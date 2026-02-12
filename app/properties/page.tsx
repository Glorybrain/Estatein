import CallToActionSection from "@/components/CallToActionSection";
import PropertiesHero from "@/components/PropertiesHero";
import PropertyCategoriesSection from "@/components/PropertyCategoriesSection";
import PropertyInquirySection from "@/components/PropertyInquirySection";
import type { Metadata } from "next";
import Script from "next/script";

const SITE_URL = "https://estateiin.netlify.app/";

export const metadata: Metadata = {
    title: "Properties",
    description:
        "Browse available properties on Estatein. Explore listings, compare pricing, and find your next home.",
    alternates: {
        canonical: `${SITE_URL}/properties`,
    },
    openGraph: {
        title: "Properties | Estatein",
        description:
            "Browse available properties on Estatein. Explore listings, compare pricing, and find your next home.",
        url: `${SITE_URL}/properties`,
        type: "website",
        images: [
            {
                url: "/hero-image.png",
                width: 1200,
                height: 630,
                alt: "Estatein Properties",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Properties | Estatein",
        description:
            "Browse available properties on Estatein. Explore listings, compare pricing, and find your next home.",
        images: ["/hero-image.png"],
    },
};

export default function PropertiesPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Properties",
        url: `${SITE_URL}/properties`,
        description:
            "Browse available properties on Estatein. Explore listings, compare pricing, and find your next home.",
    };

    return (
        <>
            <Script
                id="properties-jsonld"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <PropertiesHero />
            <PropertyCategoriesSection />
            <PropertyInquirySection />
            <CallToActionSection />
        </>
    );
}
