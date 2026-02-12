"use client";

import { useMemo, useState } from "react";
import SectionHeader from "./SectionHeader";
import {
    EnvelopeIcon,
    PhoneIcon,
    MapPinIcon,
} from "@heroicons/react/24/outline";

type OfficeCategory = "all" | "regional" | "international";

export type Office = {
    id: string;
    category: OfficeCategory;
    badge: string; // "Main Headquarters"
    title: string; // address line
    description: string;

    email: string;
    phone: string;
    locationTag: string; // "Metropolis"

    directionHref?: string; // Google maps link
};

type Tab = { id: OfficeCategory; label: string };

type Props = {
    eyebrowSrc?: string;
    title?: string;
    subtitle?: string;

    tabs: Tab[];
    offices?: Office[];
};

const DEFAULT_TABS: Props["tabs"] = [
    { id: "all", label: "All" },
    { id: "regional", label: "Regional" },
    { id: "international", label: "International" },
];

const FALLBACK_OFFICES: Office[] = [
    {
        id: "o1",
        category: "regional",
        badge: "Main Headquarters",
        title: "123 Estatein Plaza, City Center, Metropolis",
        description:
            "Our main headquarters serve as the heart of Estatein. Located in the bustling city center, this is where our core team of experts operates, driving the excellence and innovation that define us.",
        email: "info@estatein.com",
        phone: "+1 (123) 456-7890",
        locationTag: "Metropolis",
        directionHref: "#",
    },
    {
        id: "o2",
        category: "regional",
        badge: "Regional Offices",
        title: "456 Urban Avenue, Downtown District, Metropolis",
        description:
            "Estatein's presence extends to multiple regions, each with its own dynamic real estate landscape. Discover our regional offices, staffed by local experts who understand the nuances of their respective markets.",
        email: "info@estatein.com",
        phone: "+1 (123) 628-7890",
        locationTag: "Metropolis",
        directionHref: "#",
    },
];

function Pill({
    icon,
    text,
}: {
    icon: React.ReactNode;
    text: string;
}) {
    return (
        <div className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium border rounded-full border-grey-15 bg-grey-10 text-white/90">
            <span className="w-4 h-4 text-white/80">{icon}</span>
            <span className="truncate">{text}</span>
        </div>
    );
}

export default function OfficeLocationsSection({
    eyebrowSrc = "/Abstract Design3.svg",
    title = "Discover Our Office Locations",
    subtitle = "Estatein is here to serve you across multiple locations. Whether you're looking to meet our team, discuss real estate opportunities, or simply drop by for a chat, we have offices conveniently located to serve your needs. Explore the categories below to find the Estatein office nearest to you.",
    tabs = DEFAULT_TABS,
    offices = FALLBACK_OFFICES,
}: Props) {
    const [active, setActive] = useState<OfficeCategory>("all");

    const filtered = useMemo(() => {
        if (active === "all") return offices;
        return offices.filter((o) => o.category === active);
    }, [active, offices]);

    return (
        <section className="px-4 py-10 lg:py-16 md:px-6 xl:px-8">
            <div className="w-full mx-auto lg:w-12/12 xl:w-11/12">
                <div className="flex flex-col gap-y-10 lg:gap-y-12">
                    <SectionHeader
                        eyebrowSrc={eyebrowSrc}
                        title={title}
                        subtitle={subtitle}
                        priority
                    />

                    {/* Tabs */}
                    <div className="inline-flex p-1 rounded-lg gap-2.5 w-fit bg-grey-10">
                        {tabs.map((t) => {
                            const isActive = t.id === active;
                            return (
                                <button
                                    key={t.id}
                                    type="button"
                                    onClick={() => setActive(t.id)}
                                    className={`rounded-lg px-5 py-3.5 border border-grey-15 text-sm font-medium transition
                    ${isActive
                                            ? "bg-grey-8 text-white"
                                            : "text-grey-60 hover:text-white"
                                        }`}
                                >
                                    {t.label}
                                </button>
                            );
                        })}
                    </div>

                    {/* Cards */}
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-5 xl:gap-7.5">
                        {filtered.map((o) => (
                            <article
                                key={o.id}
                                className="rounded-2xl border border-grey-15 bg-grey-8 p-6 lg:p-7.5 xl:p-10"
                            >
                                <div className="text-xs font-medium text-white">{o.badge}</div>

                                <h4 className="mt-2 text-xl font-semibold text-white lg:text-2xl">
                                    {o.title}
                                </h4>

                                <p className="mt-3 text-sm font-medium leading-relaxed text-grey-60">
                                    {o.description}
                                </p>

                                <div className="mt-6 flex flex-wrap gap-2.5">
                                    <Pill icon={<EnvelopeIcon />} text={o.email} />
                                    <Pill icon={<PhoneIcon />} text={o.phone} />
                                    <Pill icon={<MapPinIcon />} text={o.locationTag} />
                                </div>

                                <a
                                    href={o.directionHref ?? "#"}
                                    className="inline-flex items-center justify-center w-full h-12 mt-6 text-sm font-medium text-white transition rounded-lg bg-brand-60 hover:bg-brand-60/90"
                                >
                                    Get Direction
                                </a>
                            </article>
                        ))}
                    </div>
                    {/* end */}
                </div>
            </div>
        </section>
    );
}
