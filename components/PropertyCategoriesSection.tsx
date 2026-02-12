"use client";

import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import SectionHeader from "./SectionHeader";

export type PropertyCategoryCard = {
    id: string;
    imageSrc: string;
    imageAlt?: string;

    badge: string;
    title: string;
    description: string;
    price: string;

    location?: string; // optional (nice to pass to details later)
    href?: string;     // should be /properties/<id>
    ctaText?: string;
};

const FALLBACK: PropertyCategoryCard[] = [
    {
        id: "seaside-serenity-villa",
        imageSrc: "/properties/property1.png",
        imageAlt: "Seaside Serenity Villa",
        badge: "Coastal Escapes - Where Waves Beckon",
        title: "Seaside Serenity Villa",
        description: "Wake up to the soothing melody of waves. This beachfront villa offers...",
        price: "$1,250,000",
        location: "Malibu, California",
        href: "/properties/seaside-serenity-villa",
        ctaText: "View Property Details",
    },
    {
        id: "metropolitan-haven",
        imageSrc: "/properties/property2.png",
        imageAlt: "Metropolitan Haven",
        badge: "Urban Oasis - Life in the Heart of the City",
        title: "Metropolitan Haven",
        description: "Immerse yourself in the energy of the city. This modern apartment in the heart...",
        price: "$650,000",
        location: "New York, USA",
        href: "/properties/metropolitan-haven",
        ctaText: "View Property Details",
    },
    {
        id: "rustic-retreat-cottage",
        imageSrc: "/properties/property3.png",
        imageAlt: "Rustic Retreat Cottage",
        badge: "Countryside Charm - Escape to Nature’s Embrace",
        title: "Rustic Retreat Cottage",
        description: "Find tranquility in the countryside. This charming cottage is nestled amidst rolling hills...",
        price: "$350,000",
        location: "Colorado, USA",
        href: "/properties/rustic-retreat-cottage",
        ctaText: "View Property Details",
    },
];


type Props = {
    eyebrowSrc?: string;
    title?: string;
    subtitle?: string;
    ctaHref?: string;
    ctaText?: string;

    items?: PropertyCategoryCard[];

    // slider
    perPage?: number; // desktop per page (default 3)
};

function clamp(n: number, min: number, max: number) {
    return Math.max(min, Math.min(max, n));
}
function pad2(n: number) {
    return String(n).padStart(2, "0");
}

export default function PropertyCategoriesSection({
    eyebrowSrc = "/Abstract Design3.svg",
    title = "Discover a World of Possibilities",
    subtitle = "Our portfolio of properties is as diverse as your dreams. Explore the following categories to find the perfect property that resonates with your vision of home",
    ctaHref = "/properties",
    ctaText = "View All Properties",
    items,
    perPage = 3,
}: Props) {
    const list = React.useMemo(
        () => (items?.length ? items : FALLBACK),
        [items]
    );

    // responsive per page: 1 mobile, 2 tablet, 3 desktop
    const [responsivePerPage, setResponsivePerPage] = React.useState(perPage);

    React.useEffect(() => {
        const calc = () => {
            const w = window.innerWidth;
            if (w < 640) return 1;
            if (w < 1024) return 2;
            return perPage;
        };

        setResponsivePerPage(calc());
        const onResize = () => setResponsivePerPage(calc());
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, [perPage]);

    const totalPages = Math.max(1, Math.ceil(list.length / responsivePerPage));
    const [page, setPage] = React.useState(0);

    React.useEffect(() => {
        setPage((p) => clamp(p, 0, totalPages - 1));
    }, [totalPages]);

    const start = page * responsivePerPage;
    const visible = list.slice(start, start + responsivePerPage);

    const goPrev = () => setPage((p) => clamp(p - 1, 0, totalPages - 1));
    const goNext = () => setPage((p) => clamp(p + 1, 0, totalPages - 1));

    const pageText = {
        current: pad2(page + 1),
        total: pad2(totalPages),
    };

    const [expandedId, setExpandedId] = React.useState<string | null>(null);

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

                    {/* Cards */}
                    <div className="space-y-7.5 lg:space-y-20 xl:space-y-12.5">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5 xl:gap-7.5">
                            {visible.map((item, idx) => (
                                <CategoryCard
                                    key={item.id}
                                    item={item}
                                    priority={page === 0 && idx === 0}
                                    expanded={expandedId === item.id}
                                    onToggle={() =>
                                        setExpandedId((cur) => (cur === item.id ? null : item.id))
                                    }
                                />
                            ))}
                        </div>

                        {/* Footer bar */}
                        <div className="pt-4 border-t border-grey-15">
                            <div className="flex items-center justify-between">
                                <span className="font-medium text-grey-60">
                                    <span className="text-white">{pageText.current}</span> of{" "}
                                    {pageText.total}
                                </span>

                                <div className="flex items-center gap-2.5">
                                    <ArrowButton
                                        dir="prev"
                                        onClick={goPrev}
                                        disabled={page === 0}
                                    />
                                    <ArrowButton
                                        dir="next"
                                        onClick={goNext}
                                        disabled={page === totalPages - 1}
                                    />
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

function CategoryCard({
    item,
    priority,
    expanded,
    onToggle,
}: {
    item: PropertyCategoryCard;
    priority?: boolean;
    expanded: boolean;
    onToggle: () => void;
}) {
    // if you later add fullText, use it when expanded
    const text = item.description;

    return (
        <article className="h-full rounded-xl border border-grey-15 bg-grey-8 p-5 lg:p-6 xl:p-7.5">
            {/* Image */}
            <div className="relative w-full overflow-hidden h-52 rounded-xl bg-grey-10 lg:h-56 xl:h-60">
                <Image
                    src={item.imageSrc}
                    alt={item.imageAlt ?? item.title}
                    fill
                    className="object-cover"
                    priority={priority}
                />
            </div>

            {/* badge */}
            <div className="mt-4">
                <span className="inline-flex px-3 py-1 text-xs font-medium border rounded-full border-grey-15 bg-grey-10 text-white/85">
                    {item.badge}
                </span>
            </div>

            {/* title */}
            <h3 className="mt-4 text-lg font-semibold text-white lg:text-xl">
                {item.title}
            </h3>

            {/* description */}
            <p
                className={[
                    "mt-2 text-sm font-medium leading-relaxed text-grey-60",
                    !expanded ? "line-clamp-2" : "",
                ].join(" ")}
            >
                {text} {" "}

                <button
                    type="button"
                    onClick={onToggle}
                    className="mt-2 text-sm font-medium text-white underline underline-offset-2"
                >
                    {expanded ? "Show Less" : "Read More"}
                </button>
            </p>

            {/* price + button */}
            <div className="flex items-end justify-between gap-4 mt-6">
                <div>
                    <div className="text-xs font-medium text-grey-60">Price</div>
                    <div className="mt-1 text-lg font-semibold text-white">
                        {item.price}
                    </div>
                </div>

                <Link
                    href={item.href ?? `/properties/${item.id}`}
                    className="inline-flex items-center justify-center px-5 text-sm font-medium text-white transition h-11 rounded-xl bg-brand-60 hover:opacity-95"
                >
                    {item.ctaText ?? "View Property Details"}
                </Link>
            </div>
        </article>
    );
}

function ArrowButton({
    dir,
    disabled,
    onClick,
}: {
    dir: "prev" | "next";
    disabled?: boolean;
    onClick?: () => void;
}) {
    const Icon = dir === "prev" ? ArrowLeftIcon : ArrowRightIcon;

    return (
        <button
            type="button"
            onClick={onClick}
            disabled={disabled}
            aria-label={dir === "prev" ? "Previous" : "Next"}
            className={[
                "flex h-11 w-11 items-center justify-center rounded-full border border-grey-15 transition",
                disabled ? "bg-transparent cursor-not-allowed" : "bg-grey-10 hover:bg-grey-15",
            ].join(" ")}
        >
            <Icon className={["h-6 w-6", disabled ? "text-grey-50" : "text-white"].join(" ")} />
        </button>
    );
}
