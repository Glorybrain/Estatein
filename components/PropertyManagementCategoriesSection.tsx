"use client";

import Image from "next/image";
import Link from "next/link";
import SectionHeader from "./SectionHeader";
import {
    UsersIcon,
    WrenchScrewdriverIcon,
    BanknotesIcon,
    ShieldCheckIcon,
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

    // allow overriding categories if you want
    items?: ServiceCategory[];

    // CTA card (big right card at bottom)
    ctaTitle?: string;
    ctaSubtitle?: string;
    ctaHref?: string;
    ctaText?: string;

    // background pattern
    ctaBgPatternSrc?: string;
};

const DEFAULT_ITEMS: ServiceCategory[] = [
    {
        id: "tenant",
        title: "Tenant Harmony",
        description:
            "Our Tenant Management services ensure that your tenants have a smooth and reducing vacancies.",
        icon: UsersIcon,
    },
    {
        id: "maintenance",
        title: "Maintenance Ease",
        description:
            "Say goodbye to property maintenance headaches. We handle all aspects of property upkeep.",
        icon: WrenchScrewdriverIcon,
    },
    {
        id: "finance",
        title: "Financial Peace of Mind",
        description:
            "Managing property finances can be complex. Our financial experts take care of rent collection",
        icon: BanknotesIcon,
    },
    {
        id: "legal",
        title: "Legal Guardian",
        description:
            "Stay compliant with property laws and regulations effortlessly.",
        icon: ShieldCheckIcon,
    },
];

export default function PropertyManagementCategoriesSection({
    eyebrowSrc = "/Abstract Design3.svg",
    title = "Effortless Property Management",
    subtitle = "Owning a property should be a pleasure, not a hassle. Estatein's Property Management Service takes the stress out of property ownership, offering comprehensive solutions tailored to your needs. Explore the categories below to see how we can make property management effortless for you.",
    items,
    ctaTitle = "Experience Effortless Property Management",
    ctaSubtitle = "Ready to experience hassle-free property management? Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership.",
    ctaHref = "/services",
    ctaText = "Learn More",
    ctaBgPatternSrc = "/Abstract Design.png",
}: Props) {
    const list = items?.length ? items : DEFAULT_ITEMS;

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
                        {/* top row: 3 cards */}
                        <div className="lg:col-span-4">
                            {list[0] && <ServiceCard item={list[0]} />}
                        </div>
                        <div className="lg:col-span-4">
                            {list[1] && <ServiceCard item={list[1]} />}
                        </div>
                        <div className="lg:col-span-4">
                            {list[2] && <ServiceCard item={list[2]} />}
                        </div>

                        {/* bottom left */}
                        <div className="lg:col-span-4">
                            {list[3] && <ServiceCard item={list[3]} />}
                        </div>

                        {/* bottom big CTA */}
                        <div className="lg:col-span-8">
                            <div className="relative h-full overflow-hidden border rounded-2xl border-grey-15 bg-grey-10">
                                {/* pattern */}
                                <div className="absolute inset-0 pointer-events-none opacity-10">
                                    <Image
                                        src={ctaBgPatternSrc}
                                        alt=""
                                        fill
                                        className="object-cover"
                                        priority
                                    />
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
        </article>
    );
}
