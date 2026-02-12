import CallToActionSection from "@/components/CallToActionSection";
import PropertiesHero from "@/components/PropertiesHero";
import PropertyCategoriesSection from "@/components/PropertyCategoriesSection";
import PropertyInquirySection from "@/components/PropertyInquirySection";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Properties",
    description: "Learn more about Estatein.",
};

export default function PropertiesPage() {
    return (
        <>
            <PropertiesHero />
            <PropertyCategoriesSection />
            <PropertyInquirySection />
            <CallToActionSection />
        </>
    );;
}
