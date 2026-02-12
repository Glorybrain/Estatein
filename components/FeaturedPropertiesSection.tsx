"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState, useEffect } from "react";
import {
    ArrowLeftIcon,
    ArrowRightIcon,
    BuildingOfficeIcon,
} from "@heroicons/react/24/outline";
import SectionHeader from "./SectionHeader";
import { BuildingStorefrontIcon, TableCellsIcon } from "@heroicons/react/24/solid";
import { PROPERTIES } from "@/data/properties";

type Amenity = {
    label: string;
    icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export type FeaturedProperty = {
    id: string;
    title: string;
    excerpt: string;
    description?: string;
    imageSrc?: string;
    imageAlt?: string;
    amenities: Amenity[];
    priceLabel?: string;
    price: string;
    detailsHref?: string;
};

type Props = {
    eyebrowSrc?: string;
    title?: string;
    subtitle?: string;
    ctaHref?: string;
    ctaText?: string;
    properties?: FeaturedProperty[];
    // how many cards visible per slide (default 3 like your current UI)
    perPage?: number;
};

const FALLBACK_PROPERTIES: FeaturedProperty[] = [
    {
        id: "p1",
        title: "Seaside Serenity Villa",
        excerpt:
            "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood...",
        description:
            "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood with modern finishes, ample natural light, and a serene outdoor space.",
        imageSrc: "/properties/property1.png",
        imageAlt: "Seaside Serenity Villa",
        amenities: [
            { label: "4-Bedroom", icon: BuildingOfficeIcon },
            { label: "3-Bathroom", icon: BuildingStorefrontIcon },
            { label: "Villa", icon: TableCellsIcon },
        ],
        price: "$550,000",
    },
    {
        id: "p2",
        title: "Urban Luxury Apartment",
        excerpt: "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood...",
        description:
            "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood with modern finishes, ample natural light, and a serene outdoor space.",
        imageSrc: "/properties/property2.png",
        imageAlt: "Urban Luxury Apartment",
        amenities: [
            { label: "2-Bedroom", icon: BuildingOfficeIcon },
            { label: "2-Bathroom", icon: BuildingStorefrontIcon },
            { label: "Villa", icon: TableCellsIcon },
        ],
        price: "$320,000",
    },
    {
        id: "p3",
        title: "Modern Family House",
        excerpt: "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood...",
        description:
            "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood with modern finishes, ample natural light, and a serene outdoor space.",
        imageSrc: "/properties/property3.png",
        imageAlt: "Modern Family House",
        amenities: [
            { label: "5-Bedroom", icon: BuildingOfficeIcon },
            { label: "4-Bathroom", icon: BuildingStorefrontIcon },
            { label: "House", icon: TableCellsIcon },
        ],
        price: "$780,000",
    },
    {
        id: "p4",
        title: "Modern Family House",
        excerpt: "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood...",
        description:
            "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood with modern finishes, ample natural light, and a serene outdoor space.",
        imageSrc: "/properties/property3.png",
        imageAlt: "Modern Family House",
        amenities: [
            { label: "5-Bedroom", icon: BuildingOfficeIcon },
            { label: "4-Bathroom", icon: BuildingStorefrontIcon },
            { label: "House", icon: TableCellsIcon },
        ],
        price: "$780,000",
    },
];


function clamp(n: number, min: number, max: number) {
    return Math.max(min, Math.min(max, n));
}
function pad2(n: number) {
    return String(n).padStart(2, "0");
}

export default function FeaturedPropertiesSection({
    eyebrowSrc = "/Abstract Design3.svg",
    title = "Featured Properties",
    subtitle = `Explore our handpicked selection of featured properties. Each listing
offers a glimpse into exceptional homes and investments available
through Estatein. Click "View Details" for more information.`,
    ctaHref = "/properties",
    ctaText = "View All Properties",
    properties,
    perPage = 3,
}: Props) {
    const items = useMemo(
        () => (properties?.length ? properties : PROPERTIES),
        [properties]
    );

    const [expandedId, setExpandedId] = useState<string | null>(null);

    // Slider state
    const [page, setPage] = useState(0);

    // responsive perPage: 1 on mobile, 2 on sm, 3 on lg+
    const [responsivePerPage, setResponsivePerPage] = useState(perPage);

    useEffect(() => {
        const calc = () => {
            const w = window.innerWidth;
            if (w < 640) return 1; // mobile
            if (w < 1024) return 2; // sm/md
            return perPage; // lg+
        };
        const initial = calc();
        setResponsivePerPage(initial);

        const onResize = () => setResponsivePerPage(calc());
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, [perPage]);

    const totalPages = Math.max(1, Math.ceil(items.length / responsivePerPage));

    // keep page valid when items/perPage changes
    useEffect(() => {
        setPage((p) => clamp(p, 0, totalPages - 1));
    }, [totalPages]);

    const start = page * responsivePerPage;
    const visible = items.slice(start, start + responsivePerPage);

    const goPrev = () => setPage((p) => clamp(p - 1, 0, totalPages - 1));
    const goNext = () => setPage((p) => clamp(p + 1, 0, totalPages - 1));

    const pageText = {
        current: pad2(page + 1),
        total: pad2(totalPages),
    };

    return (
        <section className="px-4 py-10 lg:py-16 md:px-6 xl:px-8">
            <div className="relative w-full mx-auto lg:w-12/12 xl:w-11/12">
                <div className="flex flex-col gap-y-10 lg:gap-y-15 xl:gap-y-20">
                    <SectionHeader
                        eyebrowSrc={eyebrowSrc}
                        title={title}
                        subtitle={subtitle}
                        ctaHref={ctaHref}
                        ctaText={ctaText}
                        priority
                    />

                    <div className="space-y-7.5 lg:space-y-20 xl:space-y-12.5">
                        {/* “Slider” (controlled by buttons) */}
                        <div
                            className={`grid grid-cols-1 xl:gap-x-7.5 lg:gap-x-5 gap-4 ${responsivePerPage === 1
                                ? "grid-cols-1"
                                : responsivePerPage === 2
                                    ? "sm:grid-cols-2"
                                    : "sm:grid-cols-2 lg:grid-cols-3"
                                }`}
                        >
                            {visible.map((p, idx) => {
                                const isExpanded = expandedId === p.id;
                                const href = `/properties/${p.id}`;

                                return (
                                    <article
                                        key={p.id}
                                        className="flex flex-col p-6 border rounded-xl gap-y-4 bg-grey-8 border-grey-15 xl:p-7 lg:p-6"
                                    >
                                        <div className="block group">
                                            <div className="w-full h-52.5 bg-white rounded-[10px] overflow-hidden lg:h-63.75 relative">
                                                {p.imageSrc ? (
                                                    <Image
                                                        src={p.imageSrc}
                                                        alt={p.imageAlt ?? p.title}
                                                        fill
                                                        className="object-cover transition group-hover:scale-[1.02]"
                                                        priority={page === 0 && idx === 0}
                                                    />
                                                ) : null}
                                            </div>

                                            <div className="flex flex-col gap-4 mt-4">
                                                <div className="flex flex-col gap-0.5 lg:gap-1">
                                                    <h4 className="text-lg text-white">{p.title}</h4>

                                                    <div>

                                                    </div>
                                                    <p
                                                        className={[
                                                            "text-sm lg:text-base text-grey-60",
                                                            !isExpanded ? "line-clamp-2" : "",
                                                        ].join(" ")}
                                                    >
                                                        {p.description ?? ""}
                                                    </p>

                                                    {p.description ? (
                                                        <button
                                                            type="button"
                                                            onClick={() => setExpandedId((cur) => (cur === p.id ? null : p.id))}
                                                            className="mt-2 text-sm font-medium text-left text-white underline underline-offset-2 lg:text-base"
                                                        >
                                                            {isExpanded ? "Show Less" : "Read More"}
                                                        </button>
                                                    ) : null}

                                                </div>

                                                <div className="flex flex-wrap gap-1.5">
                                                    {p.amenities.map((a, i) => {
                                                        const Icon = a.icon ?? BuildingOfficeIcon;
                                                        return (
                                                            <div
                                                                key={`${p.id}-amenity-${i}`}
                                                                className="border border-grey-15 flex text-sm rounded-full items-center gap-1 bg-grey-10 py-1.5 px-3"
                                                            >
                                                                <Icon className="w-5 h-5 text-white" />
                                                                <span>{a.label}</span>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <div className="flex flex-col justify-between">
                                                <span className="text-sm lg:text-base text-grey-60">
                                                    {p.priceLabel ?? "Price"}
                                                </span>
                                                <span className="text-lg text-white lg:text-xl">{p.price}</span>
                                            </div>

                                            <Link
                                                href={href}
                                                className="bg-brand-60 rounded-lg py-3.5 px-5 text-white text-sm font-medium"
                                            >
                                                View Property Details
                                            </Link>
                                        </div>
                                    </article>
                                );
                            })}
                        </div>

                        {/* Footer controls */}
                        <div className="pt-4 border-t border-grey-15">
                            <div className="flex items-center justify-between">
                                <Link
                                    href={ctaHref}
                                    className="inline-flex lg:hidden items-center justify-center px-6 py-3.5 rounded-lg border border-grey-15 bg-grey-10 text-sm font-medium text-white transition hover:bg-grey-15"
                                >
                                    {ctaText}
                                </Link>

                                <span className="hidden font-medium lg:block text-grey-60">
                                    <span className="text-white">{pageText.current}</span> of{" "}
                                    {pageText.total}
                                </span>

                                <div className="flex items-center gap-2.5">
                                    {/* PREVIOUS */}
                                    <button
                                        type="button"
                                        onClick={goPrev}
                                        disabled={page === 0}
                                        aria-label="Previous"
                                        className={`flex items-center justify-center rounded-full w-11 h-11 border border-grey-15 transition
      ${page === 0
                                                ? "bg-transparent cursor-not-allowed"
                                                : "bg-grey-10 hover:bg-grey-15"
                                            }`}
                                    >
                                        <ArrowLeftIcon
                                            className={`w-6 h-6 ${page === 0 ? "text-grey-50" : "text-white"
                                                }`}
                                        />
                                    </button>

                                    {/* PAGE TEXT */}
                                    <span className="font-medium text-grey-60 lg:hidden">
                                        <span className="text-white">{pageText.current}</span> of{" "}
                                        {pageText.total}
                                    </span>

                                    {/* NEXT */}
                                    <button
                                        type="button"
                                        onClick={goNext}
                                        disabled={page === totalPages - 1}
                                        aria-label="Next"
                                        className={`flex items-center justify-center rounded-full w-11 h-11 border border-grey-15 transition
      ${page === totalPages - 1
                                                ? "bg-transparent cursor-not-allowed"
                                                : "bg-grey-10 hover:bg-grey-15"
                                            }`}
                                    >
                                        <ArrowRightIcon
                                            className={`w-6 h-6 ${page === totalPages - 1 ? "text-grey-50" : "text-white"
                                                }`}
                                        />
                                    </button>
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
