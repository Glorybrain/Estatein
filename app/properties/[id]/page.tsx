import CallToActionSection from "@/components/CallToActionSection";
import FaqSection from "@/components/FaqSection";
import PropertyDetailsHero from "@/components/PropertyDetailsHero";
import PropertyDetailsInfoSection from "@/components/PropertyDetailsInfoSection";
import PropertyDetailsInquirySection from "@/components/PropertyDetailsInquirySection";
import PropertyPricingDetailsSection from "@/components/PropertyPricingDetailsSection";

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

export default function PropertyDetailsPage({
    params,
}: {
    params: { id: string };
}) {
    const property = DATA[params.id] ?? DATA["seaside-serenity-villa"];

    return (
        <>
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
