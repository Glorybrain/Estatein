import AboutHero from "@/components/AboutHero";
import AchievementsSection from "@/components/AchievementsSection";
import CallToActionSection from "@/components/CallToActionSection";
import ExperienceStepsSection from "@/components/ExperienceStepsSection";
import OurValuesSection from "@/components/OurValuesSection";
import TeamSection from "@/components/TeamSection";
import ValuedClientsSection from "@/components/ValuedClientsSection";
import type { Metadata } from "next";
import Script from "next/script";

const SITE_URL = "https://estateiin.netlify.app/";

export const metadata: Metadata = {
    title: "About",
    description:
        "Learn about Estatein—our mission, values, and the team helping clients discover and invest in properties with confidence.",
    alternates: {
        canonical: `${SITE_URL}/about`,
    },
    openGraph: {
        title: "About | Estatein",
        description:
            "Learn about Estatein—our mission, values, and the team behind our property discovery platform.",
        url: `${SITE_URL}/about`,
        type: "website",
        images: [
            {
                url: "/about-image.png",
                width: 1200,
                height: 630,
                alt: "About Estatein",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "About | Estatein",
        description:
            "Learn about Estatein—our mission, values, and the team behind our property discovery platform.",
        images: ["/about-image.png"],
    },
};

export default function AboutPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        name: "About Estatein",
        url: `${SITE_URL}/about`,
        mainEntity: {
            "@type": "Organization",
            name: "Estatein",
            url: SITE_URL,
            // Optional: only include if these are true and shown somewhere on the site
            // logo: `${SITE_URL}/Logo.svg`,
            // sameAs: ["https://twitter.com/...", "https://linkedin.com/company/..."],
        },
    };

    return (
        <>
            <Script
                id="about-jsonld"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <AboutHero imageSrc="/about-image.png" />
            <OurValuesSection />
            <AchievementsSection />
            <ExperienceStepsSection />
            <TeamSection />
            <ValuedClientsSection />
            <CallToActionSection />
        </>
    );
}
