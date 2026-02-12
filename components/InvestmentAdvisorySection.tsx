// components/InvestmentAdvisorySection.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import SectionHeader from "./SectionHeader";
import {
    ChartBarIcon,
    CurrencyDollarIcon,
    LightBulbIcon,
    Squares2X2Icon,
} from "@heroicons/react/24/outline";

export type AdvisoryItem = {
    id: string;
    title: string;
    description: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    href?: string;
};

type Props = {
    eyebrowSrc?: string;

    // left content
    title?: string;
    subtitle?: string;

    // right grid
    items?: AdvisoryItem[];

    // left CTA card
    ctaTitle?: string;
    ctaSubtitle?: string;
    ctaHref?: string;
    ctaText?: string;
    ctaBgPatternSrc?: string;
};

const DEFAULT_ITEMS: AdvisoryItem[] = [
    {
        id: "market",
        title: "Market Insight",
        description:
            "Stay ahead of market trends with our expert Market Analysis. We provide in-depth insights into real estate market conditions",
        icon: ChartBarIcon,
    },
    {
        id: "roi",
        title: "ROI Assessment",
        description:
            "Make investment decisions with confidence. Our ROI assessment services evaluate the potential returns on your investments",
        icon: CurrencyDollarIcon,
    },
    {
        id: "custom",
        title: "Customized Strategies",
        description:
            "Every investor is unique, and so are their goals. We develop Customized Investment Strategies tailored to your specific needs",
        icon: LightBulbIcon,
    },
    {
        id: "diversify",
        title: "Diversification Mastery",
        description:
            "Diversify your real estate portfolio effectively. Our experts guide you in spreading your investments across various property types and locations",
        icon: Squares2X2Icon,
    },
];

export default function InvestmentAdvisorySection({
    eyebrowSrc = "/Abstract Design3.svg",

    title = "Smart Investments,\nInformed Decisions",
    subtitle = "Building a real estate portfolio requires a strategic approach. Estatein's Investment Advisory Service empowers you to make smart investments and informed decisions.",

    items,

    ctaTitle = "Unlock Your Investment Potential",
    ctaSubtitle = "Explore our Investment Advisory Service categories and let us help you make smarter investment moves with confidence.",
    ctaHref = "/services",
    ctaText = "Learn More",
    ctaBgPatternSrc = "/Abstract Design.png",
}: Props) {
    const list = items?.length ? items : DEFAULT_ITEMS;

    return (
        <section className="px-4 py-10 lg:py-16 md:px-6 xl:px-8">
            <div className="w-full mx-auto lg:w-12/12 xl:w-11/12">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start lg:gap-10 xl:gap-12">
                    {/* LEFT */}
                    <div className="lg:col-span-5">
                        <SectionHeader eyebrowSrc={eyebrowSrc} title={title} subtitle={subtitle} />

                        <div className="relative hidden mt-8 overflow-hidden border lg:block rounded-2xl border-grey-15 bg-grey-10">
                            <div className="absolute inset-0 pointer-events-none opacity-20">
                                <Image src={ctaBgPatternSrc} alt="" fill className="object-cover" priority />
                                <div className="absolute inset-0 bg-black/35" />
                            </div>

                            <div className="relative p-6 lg:p-7.5 xl:p-10">
                                <h4 className="text-lg font-semibold text-white lg:text-xl">
                                    {ctaTitle}
                                </h4>

                                <p className="mt-3 text-sm font-medium leading-relaxed text-grey-60">
                                    {ctaSubtitle}
                                </p>

                                <Link
                                    href={ctaHref}
                                    className="inline-flex items-center justify-center w-full h-12 mt-6 text-sm font-medium text-white transition border rounded-xl border-grey-15 bg-grey-8 hover:bg-grey-10"
                                >
                                    {ctaText}
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7">
                        <div className="grid grid-cols-1 gap-4 sm:p-2.5 sm:gap-2.5 rounded-xl sm:bg-grey-10 sm:grid-cols-2">
                            {list.slice(0, 4).map((it) => (
                                <AdvisoryCard key={it.id} item={it} />
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-5 lg:hidden">
                        <div className="relative overflow-hidden border rounded-2xl border-grey-15 bg-grey-10">
                            <div className="absolute inset-0 pointer-events-none opacity-20">
                                <Image src={ctaBgPatternSrc} alt="" fill className="object-cover" priority />
                                <div className="absolute inset-0 bg-black/35" />
                            </div>

                            <div className="relative p-6 lg:p-7.5 xl:p-10">
                                <h4 className="text-lg font-semibold text-white lg:text-xl">
                                    {ctaTitle}
                                </h4>

                                <p className="mt-3 text-sm font-medium leading-relaxed text-grey-60">
                                    {ctaSubtitle}
                                </p>

                                <Link
                                    href={ctaHref}
                                    className="inline-flex items-center justify-center w-full h-12 mt-6 text-sm font-medium text-white transition border rounded-xl border-grey-15 bg-grey-8 hover:bg-grey-10"
                                >
                                    {ctaText}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function AdvisoryCard({ item }: { item: AdvisoryItem }) {
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
        </article>
    );
}
