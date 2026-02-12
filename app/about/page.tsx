import AboutHero from "@/components/AboutHero";
import AchievementsSection from "@/components/AchievementsSection";
import CallToActionSection from "@/components/CallToActionSection";
import ExperienceStepsSection from "@/components/ExperienceStepsSection";
import OurValuesSection from "@/components/OurValuesSection";
import TeamSection from "@/components/TeamSection";
import ValuedClientsSection from "@/components/ValuedClientsSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About",
    description: "Learn more about Estatein.",
};

export default function AboutPage() {
    return (
        <>
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
