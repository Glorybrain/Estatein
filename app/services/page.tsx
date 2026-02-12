
import CallToActionSection from "@/components/CallToActionSection";
import FeatureStrip from "@/components/FeatureStrip";
import PageHero from "@/components/PageHero";
import type { Metadata } from "next";
import {
    ChartBarIcon,
    MegaphoneIcon,
    ScaleIcon,
    HandThumbUpIcon,
} from "@heroicons/react/24/outline";
import ServiceCategoriesSection from "@/components/ServiceCategoriesSection";
import PropertyManagementCategoriesSection from "@/components/PropertyManagementCategoriesSection";
import InvestmentAdvisorySection from "@/components/InvestmentAdvisorySection";

export const metadata: Metadata = {
    title: "Services",
    description: "Learn more about Estatein.",
};

export default function ServicesPage() {
    return (
        <>
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
