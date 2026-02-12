"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import SectionHeader from "./SectionHeader";
import FaqCard, { FaqItem } from "./FaqCard";

type Props = {
    eyebrowSrc?: string;
    title?: string;
    subtitle?: string;
    ctaHref?: string;
    ctaText?: string;
    faqs?: FaqItem[];
    perPage?: number; // 3 on lg+, 2 on sm/md, 1 on mobile
};

const FALLBACK_FAQS: FaqItem[] = [
    {
        id: "f1",
        question: "How do I search for properties on Estatein?",
        answerPreview:
            "Learn how to use our user-friendly search tools to find properties that match your criteria.",
        href: "/faq",
    },
    {
        id: "f2",
        question: "What documents do I need to sell my property through Estatein?",
        answerPreview:
            "Find out about the necessary documentation for listing your property with us.",
        href: "/faq",
    },
    {
        id: "f3",
        question: "How can I contact an Estatein agent?",
        answerPreview:
            "Discover the different ways you can get in touch with our experienced agents.",
        href: "/faq",
    },
    {
        id: "f4",
        question: "How long does the buying process take?",
        answerPreview:
            "Get a general idea of timelines and what factors can speed up or slow down the process.",
        href: "/faq",
    },
];

function clamp(n: number, min: number, max: number) {
    return Math.max(min, Math.min(max, n));
}
function pad2(n: number) {
    return String(n).padStart(2, "0");
}

export default function FaqSection({
    eyebrowSrc = "/Abstract Design3.svg",
    title = "Frequently Asked Questions",
    subtitle = `Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way.`,
    ctaHref = "/faq",
    ctaText = "View All FAQ’s",
    faqs,
    perPage = 3,
}: Props) {
    const items = useMemo(() => (faqs?.length ? faqs : FALLBACK_FAQS), [faqs]);

    const [page, setPage] = useState(0);
    const [responsivePerPage, setResponsivePerPage] = useState(perPage);

    useEffect(() => {
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

    const totalPages = Math.max(1, Math.ceil(items.length / responsivePerPage));

    useEffect(() => {
        setPage((p) => clamp(p, 0, totalPages - 1));
    }, [totalPages]);

    const start = page * responsivePerPage;
    const visible = items.slice(start, start + responsivePerPage);

    const goPrev = () => setPage((p) => clamp(p - 1, 0, totalPages - 1));
    const goNext = () => setPage((p) => clamp(p + 1, 0, totalPages - 1));

    const pageText = { current: pad2(page + 1), total: pad2(totalPages) };

    const prevDisabled = page === 0;
    const nextDisabled = page === totalPages - 1;

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
                        {/* Cards */}
                        <div
                            className={`grid gap-4 xl:gap-x-7.5 lg:gap-x-5 ${responsivePerPage === 1
                                ? "grid-cols-1"
                                : responsivePerPage === 2
                                    ? "sm:grid-cols-2"
                                    : "sm:grid-cols-2 lg:grid-cols-3"
                                }`}
                        >
                            {visible.map((item) => (
                                <FaqCard key={item.id} item={item} />
                            ))}
                        </div>

                        {/* Footer controls */}
                        <div className="pt-6 border-t border-grey-15">
                            <div className="flex items-center justify-between">
                                {/* desktop page text (left) */}
                                <span className="hidden font-medium lg:block text-grey-60">
                                    <span className="text-white">{pageText.current}</span> of{" "}
                                    {pageText.total}
                                </span>

                                {/* mobile CTA */}
                                <Link
                                    href={ctaHref}
                                    className="inline-flex lg:hidden items-center justify-center px-6 py-3.5 rounded-lg border border-grey-15 bg-grey-10 text-sm font-medium text-white transition hover:bg-grey-15"
                                >
                                    {ctaText}
                                </Link>

                                {/* arrows */}
                                <div className="flex items-center gap-2.5">
                                    <button
                                        type="button"
                                        onClick={goPrev}
                                        disabled={prevDisabled}
                                        aria-label="Previous"
                                        className={`flex items-center justify-center rounded-full w-11 h-11 border border-grey-15 transition ${prevDisabled
                                            ? "bg-transparent cursor-not-allowed"
                                            : "bg-grey-10 hover:bg-grey-15"
                                            }`}
                                    >
                                        <ArrowLeftIcon
                                            className={`w-6 h-6 ${prevDisabled ? "text-grey-50" : "text-white"
                                                }`}
                                        />
                                    </button>

                                    {/* mobile page text between arrows */}
                                    <span className="font-medium text-grey-60 lg:hidden">
                                        <span className="text-white">{pageText.current}</span> of{" "}
                                        {pageText.total}
                                    </span>

                                    <button
                                        type="button"
                                        onClick={goNext}
                                        disabled={nextDisabled}
                                        aria-label="Next"
                                        className={`flex items-center justify-center rounded-full w-11 h-11 border border-grey-15 transition ${nextDisabled
                                            ? "bg-transparent cursor-not-allowed"
                                            : "bg-grey-10 hover:bg-grey-15"
                                            }`}
                                    >
                                        <ArrowRightIcon
                                            className={`w-6 h-6 ${nextDisabled ? "text-grey-50" : "text-white"
                                                }`}
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* end footer */}
                    </div>
                </div>
            </div>
        </section>
    );
}
