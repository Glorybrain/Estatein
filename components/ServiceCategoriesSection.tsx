"use client";

import Image from "next/image";
import Link from "next/link";
import SectionHeader from "./SectionHeader";
import {
    ChartBarIcon,
    MegaphoneIcon,
    ScaleIcon,
    HandThumbUpIcon, ArrowRightIcon,
} from "@heroicons/react/24/outline";

export type ServiceCategory = {
    id: string;
    title: string;
    description: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    href?: string;
};

type Props = {
    eyebrowSrc?: string;
    title?: string;
    subtitle?: string;

    // CTA card (big right card at bottom)
    ctaTitle?: string;
    ctaSubtitle?: string;
    ctaHref?: string;
    ctaText?: string;

    // optional background pattern for CTA
    ctaBgPatternSrc?: string;
};

const DEFAULT_ITEMS: ServiceCategory[] = [
    {
        id: "v",
        title: "Valuation Mastery",
        description:
            "Discover the true worth of your property with our expert valuation services.",
        icon: ChartBarIcon,
    },
    {
        id: "m",
        title: "Strategic Marketing",
        description:
            "Selling a property requires more than just a listing; it demands a strategic marketing approach.",
        icon: MegaphoneIcon,
    },
    {
        id: "n",
        title: "Negotiation Wizardry",
        description:
            "Negotiating the best deal is an art, and our negotiation experts are masters of it.",
        icon: ScaleIcon,
    },
    {
        id: "c",
        title: "Closing Success",
        description: "We guide you through the intricate closing process.",
        icon: HandThumbUpIcon,
    },
];

export default function ServiceCategoriesSection({
    eyebrowSrc = "/Abstract Design3.svg",
    title = "Unlock Property Value",
    subtitle = "Selling your property should be a rewarding experience, and at Estatein, we make sure it is. Our Property Selling Service is designed to maximize the value of your property, ensuring you get the best deal possible. Explore the categories below to see how we can help you at every step of your selling journey.",
    ctaTitle = "Unlock the Value of Your Property Today",
    ctaSubtitle = "Ready to unlock the true value of your property? Explore our Property Selling Service categories and let us help you achieve the best deal possible for your valuable asset.",
    ctaHref = "/services",
    ctaText = "Learn More",
    ctaBgPatternSrc = "/Abstract Design.png",
}: Props) {
    const items = DEFAULT_ITEMS;

    return (
        <section className="px-4 py-10 lg:py-16 md:px-6 xl:px-8">
            <div className="w-full mx-auto lg:w-12/12 xl:w-11/12">
                <div className="flex flex-col gap-y-10 lg:gap-y-15 xl:gap-y-20">
                    <SectionHeader
                        eyebrowSrc={eyebrowSrc}
                        title={title}
                        subtitle={subtitle}
                        priority
                    />

                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-5 xl:gap-6">
                        <div className="lg:col-span-4">{items[0] && <ServiceCard item={items[0]} />}</div>
                        <div className="lg:col-span-4">{items[1] && <ServiceCard item={items[1]} />}</div>
                        <div className="lg:col-span-4">{items[2] && <ServiceCard item={items[2]} />}</div>

                        <div className="lg:col-span-4">{items[3] && <ServiceCard item={items[3]} />}</div>

                        <div className="lg:col-span-8">
                            <div className="relative h-full overflow-hidden border rounded-2xl border-grey-15 bg-grey-10">
                                <div className="absolute inset-0 pointer-events-none opacity-10">
                                    <Image src={ctaBgPatternSrc} alt="" fill className="object-cover" priority />
                                    <div className="absolute inset-0 bg-black/35" />
                                </div>

                                <div className="relative flex h-full flex-col gap-4 p-6 lg:p-7.5 xl:p-10">
                                    <div className="flex flex-col justify-between gap-4 sm:items-center sm:flex-row">
                                        <h4 className="text-xl font-semibold text-white lg:text-2xl">
                                            {ctaTitle}
                                        </h4>

                                        <Link
                                            href={ctaHref}
                                            className="inline-flex items-center justify-center w-full h-12 px-4.5 text-xs font-medium text-white transition border rounded-lg sm:w-auto shrink-0 border-grey-15 bg-grey-8 hover:bg-grey-15"
                                        >
                                            {ctaText}
                                        </Link>
                                    </div>

                                    <p className="max-w-3xl text-sm font-medium leading-relaxed text-grey-60 lg:text-base">
                                        {ctaSubtitle}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end */}
                </div>
            </div>
        </section>
    );
}

function ServiceCard({ item }: { item: ServiceCategory }) {
    const Icon = item.icon;

    return (
        <article className="h-full rounded-2xl border border-grey-15 bg-grey-8 p-6 lg:p-7.5 xl:p-10">
            <div className="flex items-center gap-4">
                <div className="p-4 flex items-center justify-center h-15 w-15 rounded-full bg-[linear-gradient(40.65deg,#A685FA_0.85%,rgba(166,133,250,0)_34.8%),linear-gradient(219.04deg,#A685FA_-6.93%,rgba(166,133,250,0)_52.6%)]">
                    <div className="p-2 flex items-center justify-center h-11 w-11 rounded-full bg-[linear-gradient(130.5deg,#A685FA_-3.27%,rgba(166,133,250,0)_30.09%),linear-gradient(305.31deg,#A685FA_-20.93%,rgba(166,133,250,0)_37.94%)]">
                        <Icon className="relative w-6 h-6 text-brand-60" />
                    </div>
                </div>

                <h4 className="text-base font-semibold text-white lg:text-lg">
                    {item.title}
                </h4>
            </div>

            <p className="mt-4 text-sm font-medium leading-relaxed text-grey-60">
                {item.description}
            </p>

            {item.href ? (
                <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-white/85 hover:text-white"
                >
                    Learn more <ArrowRightIcon className="w-4 h-4" />
                </Link>
            ) : null}
        </article>
    );
}