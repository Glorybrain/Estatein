import { notFound } from "next/navigation";
import PropertyDetailsHero from "@/components/PropertyDetailsHero";
import { PROPERTIES } from "@/data/properties";
import PropertyDetailsInfoSection from "@/components/PropertyDetailsInfoSection";
import PropertyDetailsInquirySection from "@/components/PropertyDetailsInquirySection";
import PropertyPricingDetailsSection from "@/components/PropertyPricingDetailsSection";
import FaqSection from "@/components/FaqSection";
import CallToActionSection from "@/components/CallToActionSection";

export default async function PropertyDetailsPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    const property = PROPERTIES.find((p) => p.id === id);

    if (!property) {
        return (
            <div className="p-10 text-white">
                No property found for: <span className="font-bold">{id}</span>
            </div>
        );
    }

    return (
        <>
            <PropertyDetailsHero
                title={property.title}
                location={property.location}
                price={property.price}
                images={property.images}
            />
            <PropertyDetailsInfoSection />
            <PropertyDetailsInquirySection />
            <PropertyPricingDetailsSection />
            <FaqSection />
            <CallToActionSection />
        </>
    );
}
