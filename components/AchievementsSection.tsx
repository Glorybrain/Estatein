"use client";

import Image from "next/image";
import SectionHeader from "./SectionHeader";

type Achievement = {
    id: string;
    title: string;
    description: string;
};

type Props = {
    eyebrowSrc?: string;
    title?: string;
    subtitle?: string;
    items?: Achievement[];
};

const FALLBACK_ACHIEVEMENTS: Achievement[] = [
    {
        id: "a1",
        title: "3+ Years of Excellence",
        description:
            "With over 3 years in the industry, we've amassed a wealth of knowledge and experience, becoming a go-to resource for all things real estate.",
    },
    {
        id: "a2",
        title: "Happy Clients",
        description:
            "Our greatest achievement is the satisfaction of our clients. Their success stories fuel our passion for what we do.",
    },
    {
        id: "a3",
        title: "Industry Recognition",
        description:
            "We've earned the respect of our peers and industry leaders, with accolades and awards that reflect our commitment to excellence.",
    },
];

export default function AchievementsSection({
    eyebrowSrc = "/Abstract Design3.svg",
    title = "Our Achievements",
    subtitle = "Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.",
    items = FALLBACK_ACHIEVEMENTS,
}: Props) {
    return (
        <section className="px-4 py-10 lg:py-16 md:px-6 xl:px-8">
            <div className="w-full mx-auto lg:w-12/12 xl:w-11/12">
                <div className="flex flex-col gap-y-10 lg:gap-y-15 xl:gap-y-20">
                    {/* Matches your other sections */}
                    <SectionHeader
                        eyebrowSrc={eyebrowSrc}
                        title={title}
                        subtitle={subtitle}
                        priority
                    />

                    {/* Cards */}
                    <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
                        {items.slice(0, 3).map((a) => (
                            <article
                                key={a.id}
                                className="rounded-2xl border border-grey-15 bg-grey-8 p-6 shadow-[0px_0px_0px_8px_#191919] lg:p-7.5 xl:p-10"
                            >
                                <h4 className="text-lg font-semibold text-white lg:text-2xl">
                                    {a.title}
                                </h4>

                                <p className="mt-3 text-sm font-medium leading-relaxed lg:mt-4 text-grey-60 lg:text-base">
                                    {a.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
