import type { Metadata } from "next";
import Script from "next/script";

import CallToActionSection from "@/components/CallToActionSection";
import FaqSection from "@/components/FaqSection";
import PropertyDetailsHero from "@/components/PropertyDetailsHero";
import PropertyDetailsInfoSection from "@/components/PropertyDetailsInfoSection";
import PropertyDetailsInquirySection from "@/components/PropertyDetailsInquirySection";
import PropertyPricingDetailsSection from "@/components/PropertyPricingDetailsSection";
import { notFound } from "next/navigation";

const SITE_URL = "https://estateiin.netlify.app/";

const DATA: Record<
    string,
    { title: string; location: string; price: string; images: string[] }
> = {
    "seaside-serenity-villa": {
        title: "Seaside Serenity Villa",
        location: "Malibu, California",
        price: "$1,250,000",
        images: [
            "/properties/pd-1.png",
            "/properties/pd-2.png",
            "/properties/pd-3.png",
            "/properties/pd-4.png",
            "/properties/pd-5.png",
            "/properties/pd-6.png",
            "/properties/pd-7.png",
            "/properties/pd-8.png",
        ],
    },
    "metropolitan-haven": {
        title: "Metropolitan Haven",
        location: "New York, USA",
        price: "$650,000",
        images: [
            "/properties/pd-2.png",
            "/properties/pd-3.png",
            "/properties/pd-4.png",
            "/properties/pd-5.png",
        ],
    },
    "rustic-retreat-cottage": {
        title: "Rustic Retreat Cottage",
        location: "Colorado, USA",
        price: "$350,000",
        images: [
            "/properties/pd-3.png",
            "/properties/pd-4.png",
            "/properties/pd-6.png",
            "/properties/pd-8.png",
        ],
    },
};

// ✅ Optional (Recommended): enables SSG for known property routes
export function generateStaticParams() {
    return Object.keys(DATA).map((id) => ({ id }));
}

function parsePriceToNumber(price: string) {
    // "$1,250,000" -> 1250000
    const cleaned = price.replace(/[^0-9.]/g, "");
    const num = Number(cleaned);
    return Number.isFinite(num) ? num : undefined;
}

// ✅ Dynamic Metadata (title, description, OG, Twitter, canonical)
export async function generateMetadata({
    params,
}: {
    params: { id: string };
}): Promise<Metadata> {
    const property = DATA[params.id];

    if (!property) {
        return {
            title: "Property Not Found",
            description: "The requested property could not be found on Estatein.",
            robots: { index: false, follow: false },
        };
    }

    const title = property.title;
    const description = `Explore ${property.title} in ${property.location}. View gallery, pricing, and key details on Estatein.`;
    const canonical = `${SITE_URL}/properties/${params.id}`;
    const ogImage = property.images?.[0] ? `${SITE_URL}${property.images[0]}` : undefined;

    return {
        title,
        description,
        alternates: { canonical },
        openGraph: {
            title,
            description,
            url: canonical,
            type: "article",
            images: ogImage
                ? [
                    {
                        url: ogImage,
                        width: 1200,
                        height: 630,
                        alt: `${property.title} - Estatein`,
                    },
                ]
                : [],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: ogImage ? [ogImage] : [],
        },
    };
}

export default function PropertyDetailsPage({
    params,
}: {
    params: { id: string };
}) {
    const property = DATA[params.id];

    // ✅ Better SEO than falling back to another property
    if (!property) notFound();

    const canonical = `${SITE_URL}/properties/${params.id}`;
    const priceNumber = parsePriceToNumber(property.price);

    // ✅ Structured Data (JSON-LD)
    // Note: RealEstateListing is supported by schema.org and works well for property pages.
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "RealEstateListing",
        name: property.title,
        description: `Explore ${property.title} in ${property.location}.`,
        url: canonical,
        image: property.images.map((img) => `${SITE_URL}${img}`),
        address: {
            "@type": "PostalAddress",
            addressLocality: property.location,
        },
        offers:
            priceNumber !== undefined
                ? {
                    "@type": "Offer",
                    priceCurrency: "USD", // adjust if needed
                    price: priceNumber,
                    availability: "https://schema.org/InStock",
                    url: canonical,
                }
                : undefined,
    };

    return (
        <>
            <Script
                id="property-jsonld"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <main className="px-4 pt-10 md:px-6 xl:px-8">
                <div className="w-full mx-auto lg:w-12/12 xl:w-11/12">
                    <PropertyDetailsHero
                        title={property.title}
                        location={property.location}
                        price={property.price}
                        images={property.images}
                    />
                </div>
            </main>

            <PropertyDetailsInfoSection />
            <PropertyDetailsInquirySection />
            <PropertyPricingDetailsSection />
            <FaqSection />
            <CallToActionSection />
        </>
    );
}
