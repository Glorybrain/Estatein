"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import SectionHeader from "./SectionHeader";
import {
    ArrowLeftIcon,
    ArrowRightIcon,
    BoltIcon,
    Squares2X2Icon,
} from "@heroicons/react/24/outline";

type Client = {
    id: string;
    since: string; // "Since 2019"
    name: string;
    websiteHref?: string;

    domainLabel?: string; // "Domain"
    domainValue: string;

    categoryLabel?: string; // "Category"
    categoryValue: string;

    quoteLabel?: string; // "What They Said 🤗"
    quote: string;
};

type Props = {
    eyebrowSrc?: string;
    title?: string;
    subtitle?: string;

    ctaHref?: string;
    ctaText?: string;

    clients?: Client[];
    perPage?: number; // default 2 cards like screenshot
};

const FALLBACK_CLIENTS: Client[] = [
    {
        id: "c1",
        since: "Since 2019",
        name: "ABC Corporation",
        websiteHref: "#",
        domainLabel: "Domain",
        domainValue: "Commercial Real Estate",
        categoryLabel: "Category",
        categoryValue: "Luxury Home Development",
        quoteLabel: "What They Said 🤗",
        quote:
            "Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.",
    },
    {
        id: "c2",
        since: "Since 2018",
        name: "GreenTech Enterprises",
        websiteHref: "#",
        domainLabel: "Domain",
        domainValue: "Commercial Real Estate",
        categoryLabel: "Category",
        categoryValue: "Retail Space",
        quoteLabel: "What They Said 🤗",
        quote:
            "Estatein's ability to identify prime retail locations helped us expand our brand presence. They are a trusted partner in our growth.",
    },
    {
        id: "c3",
        since: "Since 2020",
        name: "BluePeak Holdings",
        websiteHref: "#",
        domainLabel: "Domain",
        domainValue: "Corporate Leasing",
        categoryLabel: "Category",
        categoryValue: "Office Space",
        quoteLabel: "What They Said 🤗",
        quote:
            "From shortlisting to negotiation, the team made the entire process smooth and transparent. We felt supported at every step.",
    },
];

function clamp(n: number, min: number, max: number) {
    return Math.max(min, Math.min(max, n));
}
function pad2(n: number) {
    return String(n).padStart(2, "0");
}

export default function ValuedClientsSection({
    eyebrowSrc = "/Abstract Design3.svg",
    title = "Our Valued Clients",
    subtitle = "At Estatein, we have had the privilege of working with a diverse range of clients across various industries. Here are some of the clients we’ve had the pleasure of serving.",
    ctaHref,
    ctaText,
    clients,
    perPage = 2,
}: Props) {
    const items = useMemo(
        () => (clients?.length ? clients : FALLBACK_CLIENTS),
        [clients]
    );

    const [page, setPage] = useState(0);
    const [responsivePerPage, setResponsivePerPage] = useState(perPage);

    useEffect(() => {
        const calc = () => {
            const w = window.innerWidth;
            if (w < 640) return 1; // mobile
            return perPage; // sm+
        };
        const initial = calc();
        setResponsivePerPage(initial);
        const onResize = () => setResponsivePerPage(calc());
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, [perPage]);

    const totalPages = Math.max(1, Math.ceil(items.length / responsivePerPage));

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
            <div className="w-full mx-auto lg:w-12/12 xl:w-11/12">
                <div className="flex flex-col gap-y-10 lg:gap-y-15 xl:gap-y-20">
                    <SectionHeader
                        eyebrowSrc={eyebrowSrc}
                        title={title}
                        subtitle={subtitle}
                        ctaHref={ctaHref}
                        ctaText={ctaText}
                        priority
                    />

                    {/* Cards */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5 xl:gap-7.5">
                        {visible.map((c) => (
                            <article
                                key={c.id}
                                className="rounded-2xl border border-grey-15 bg-grey-8 p-6 shadow-[0px_0px_0px_8px_#191919] lg:p-7.5 xl:p-10"
                            >
                                {/* Header */}
                                <div className="flex flex-col items-start justify-between gap-4 md:flex-row">
                                    <div>
                                        <div className="text-xs font-medium text-grey-60">
                                            {c.since}
                                        </div>
                                        <h4 className="mt-2 text-xl font-semibold text-white">
                                            {c.name}
                                        </h4>
                                    </div>

                                    <Link
                                        href={c.websiteHref ?? "#"}
                                        className="inline-flex items-center justify-center w-full px-4 py-3 text-xs font-medium text-white transition border rounded-lg sm:w-auto shrink-0 border-grey-15 bg-grey-10 hover:bg-grey-15"
                                    >
                                        Visit Website
                                    </Link>
                                </div>

                                {/* Meta row */}
                                <div className="grid grid-cols-2 gap-4 mt-6">
                                    <div className="flex flex-col items-start">
                                        <div className="flex items-center gap-2">
                                            <Squares2X2Icon className="mt-0.5 h-5 w-5 text-grey-60" />
                                            <div className="text-xs text-grey-60">
                                                {c.domainLabel ?? "Domain"}
                                            </div>
                                        </div>
                                        <div>
                                            <div className="mt-1 text-sm font-medium text-white/90">
                                                {c.domainValue}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="relative flex flex-col items-start pl-4 border-l sm:pl-6 border-grey-15">
                                        <div className="flex items-center gap-2">
                                            <BoltIcon className="mt-0.5 h-5 w-5 text-grey-60" />
                                            <div className="text-xs text-grey-60">
                                                {c.categoryLabel ?? "Category"}
                                            </div>
                                        </div>
                                        <div>
                                            <div className="mt-1 text-sm font-medium text-white/90">
                                                {c.categoryValue}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Quote box */}
                                <div className="p-5 mt-6 border rounded-xl border-grey-15 bg-grey-10/40">
                                    <div className="text-xs font-medium text-grey-60">
                                        {c.quoteLabel ?? "What They Said 🤗"}
                                    </div>
                                    <p className="mt-3 text-sm font-medium leading-relaxed text-white/85">
                                        {c.quote}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* Footer (matches your other sliders) */}
                    <div className="pt-4 border-t border-grey-15">
                        <div className="flex items-center justify-between">
                            <span className="font-medium text-grey-60">
                                <span className="text-white">{pageText.current}</span> of{" "}
                                {pageText.total}
                            </span>

                            <div className="flex items-center gap-2.5">
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
                    {/* end */}
                </div>
            </div>
        </section>
    );
}
