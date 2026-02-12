"use client";

import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import SectionHeader from "./SectionHeader";
import { PROPERTIES } from "@/data/properties";

export type PropertyCategoryCard = {
    id: string;
    imageSrc: string;
    imageAlt?: string;

    badge: string;
    title: string;
    description: string;
    price: string;

    location?: string;
    href?: string;
    ctaText?: string;
};

type Props = {
    eyebrowSrc?: string;
    title?: string;
    subtitle?: string;
    ctaHref?: string;
    ctaText?: string;

    // optional override (if you ever want to pass custom cards)
    items?: PropertyCategoryCard[];

    perPage?: number;
};

function clamp(n: number, min: number, max: number) {
    return Math.max(min, Math.min(max, n));
}
function pad2(n: number) {
    return String(n).padStart(2, "0");
}

function badgeForProperty(id: string) {
    if (id.includes("seaside")) return "Coastal Escapes - Where Waves Beckon";
    if (id.includes("metropolitan")) return "Urban Oasis - Life in the Heart of the City";
    if (id.includes("rustic")) return "Countryside Charm - Escape to Nature’s Embrace";
    if (id.includes("penthouse")) return "Skyline Living - Elevated Luxury Above the City";
    if (id.includes("mansion")) return "Elite Estates - Space, Prestige & Privacy";
    return "Featured Collection - Find Your Perfect Home";
}

function toCategoryCards() {
    return PROPERTIES.map((p) => ({
        id: p.id,
        imageSrc: p.imageSrc,
        imageAlt: p.imageAlt ?? p.title,

        badge: badgeForProperty(p.id),
        title: p.title,
        description: p.description ?? "",
        price: p.price,

        location: p.location,
        href: `/properties/${p.id}`,
        ctaText: "View Property Details",
    })) satisfies PropertyCategoryCard[];
}

export default function PropertyCategoriesSection({
    eyebrowSrc = "/Abstract Design3.svg",
    title = "Discover a World of Possibilities",
    subtitle = "Our portfolio of properties is as diverse as your dreams. Explore the following categories to find the perfect property that resonates with your vision of home",
    items,
    perPage = 3,
}: Props) {
    const list = React.useMemo(() => {
        return items ?? toCategoryCards();
    }, [items]);

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
        setPage(0);
    }, [items, responsivePerPage]);

    React.useEffect(() => {
        setPage((p) => clamp(p, 0, totalPages - 1));
    }, [totalPages]);

    const start = page * responsivePerPage;
    const visible = list.slice(start, start + responsivePerPage);

    const goPrev = () => setPage((p) => clamp(p - 1, 0, totalPages - 1));
    const goNext = () => setPage((p) => clamp(p + 1, 0, totalPages - 1));

    const pageText = { current: pad2(page + 1), total: pad2(totalPages) };

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

                        <div className="pt-4 border-t border-grey-15">
                            <div className="flex items-center justify-between">
                                <span className="font-medium text-grey-60">
                                    <span className="text-white">{pageText.current}</span> of{" "}
                                    {pageText.total}
                                </span>

                                <div className="flex items-center gap-2.5">
                                    <ArrowButton dir="prev" onClick={goPrev} disabled={page === 0} />
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
    const href = item.href ?? `/properties/${item.id}`;

    return (
        <article className="h-full rounded-xl border border-grey-15 bg-grey-8 p-5 lg:p-6 xl:p-7.5">
            <div className="block group">
                <div className="relative w-full overflow-hidden h-52 rounded-xl bg-grey-10 lg:h-56 xl:h-60">
                    <Image
                        src={item.imageSrc}
                        alt={item.imageAlt ?? item.title}
                        fill
                        className="object-cover transition group-hover:scale-[1.02]"
                        priority={priority}
                    />
                </div>

                <div className="mt-4">
                    <span className="inline-flex px-3 py-1 text-xs font-medium border rounded-full border-grey-15 bg-grey-10 text-white/85">
                        {item.badge}
                    </span>
                </div>

                <h3 className="mt-4 text-lg font-semibold text-white lg:text-xl">
                    {item.title}
                </h3>

                <p
                    className={[
                        "mt-2 text-sm font-medium leading-relaxed text-grey-60",
                        !expanded ? "line-clamp-2" : "",
                    ].join(" ")}
                >
                    {item.description}
                </p>
            </div>

            <button
                type="button"
                onClick={onToggle}
                className="mt-2 text-sm font-medium text-white underline underline-offset-2"
            >
                {expanded ? "Show Less" : "Read More"}
            </button>

            <div className="flex items-end justify-between gap-4 mt-6">
                <div>
                    <div className="text-xs font-medium text-grey-60">Price</div>
                    <div className="mt-1 text-lg font-semibold text-white">{item.price}</div>
                </div>

                <Link
                    href={href}
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
