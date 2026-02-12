"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import SectionHeader from "./SectionHeader";
import TestimonialCard, { Testimonial } from "./TestimonialCard";

type Props = {
    eyebrowSrc?: string;
    title?: string;
    subtitle?: string;
    ctaHref?: string;
    ctaText?: string;
    testimonials?: Testimonial[];
    perPage?: number; // default 3 on lg+
};

const FALLBACK_TESTIMONIALS: Testimonial[] = [
    {
        id: "t1",
        title: "Exceptional Service!",
        message:
            "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
        name: "Wade Warren",
        location: "USA, California",
        avatarSrc: "/avatars/avatar.png",
        rating: 5,
    },
    {
        id: "t2",
        title: "Efficient and Reliable",
        message:
            "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
        name: "Emelie Thomson",
        location: "USA, Florida",
        avatarSrc: "/avatars/avatar2.png",
        rating: 5,
    },
    {
        id: "t3",
        title: "Trusted Advisors",
        message:
            "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
        name: "John Mans",
        location: "USA, Nevada",
        avatarSrc: "/avatars/avatar3.png",
        rating: 5,
    },
    {
        id: "t4",
        title: "Smooth Experience",
        message:
            "Everything was seamless from start to finish. Communication was clear and the team was always ready to help.",
        name: "Jane Cooper",
        location: "USA, New York",
        avatarSrc: "/avatars/avatar.png",
        rating: 5,
    },
];

function clamp(n: number, min: number, max: number) {
    return Math.max(min, Math.min(max, n));
}
function pad2(n: number) {
    return String(n).padStart(2, "0");
}

export default function TestimonialSection({
    eyebrowSrc = "/Abstract Design3.svg",
    title = "What Our Clients Say",
    subtitle = "Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs.",
    ctaHref = "/",
    ctaText = "View All Testimonials",
    testimonials,
    perPage = 3,
}: Props) {
    const items = useMemo(
        () => (testimonials?.length ? testimonials : FALLBACK_TESTIMONIALS),
        [testimonials]
    );

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

    const pageText = {
        current: pad2(page + 1),
        total: pad2(totalPages),
    };

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
                            {visible.map((t) => (
                                <TestimonialCard key={t.id} testimonial={t} />
                            ))}
                        </div>

                        {/* Footer controls (match screenshot layout) */}
                        <div className="pt-6 border-t border-grey-15">
                            <div className="flex items-center justify-between">
                                {/* left: page text (desktop like screenshot) */}
                                <span className="hidden font-medium lg:block text-grey-60">
                                    <span className="text-white">{pageText.current}</span> of{" "}
                                    {pageText.total}
                                </span>

                                {/* mobile: CTA button */}
                                <Link
                                    href={ctaHref}
                                    className="inline-flex lg:hidden items-center justify-center px-6 py-3.5 rounded-lg border border-grey-15 bg-grey-10 text-sm font-medium text-white transition hover:bg-grey-15"
                                >
                                    {ctaText}
                                </Link>

                                {/* right: arrow buttons */}
                                <div className="flex items-center gap-2.5">
                                    {/* PREVIOUS */}
                                    <button
                                        type="button"
                                        onClick={goPrev}
                                        disabled={prevDisabled}
                                        aria-label="Previous"
                                        className={`flex items-center justify-center rounded-full w-11 h-11 border border-grey-15 transition
                      ${prevDisabled
                                                ? "bg-transparent cursor-not-allowed"
                                                : "bg-grey-10 hover:bg-grey-15"
                                            }`}
                                    >
                                        <ArrowLeftIcon
                                            className={`w-6 h-6 ${prevDisabled ? "text-grey-50" : "text-white"
                                                }`}
                                        />
                                    </button>

                                    {/* mobile: page text in between arrows */}
                                    <span className="font-medium text-grey-60 lg:hidden">
                                        <span className="text-white">{pageText.current}</span> of{" "}
                                        {pageText.total}
                                    </span>

                                    {/* NEXT */}
                                    <button
                                        type="button"
                                        onClick={goNext}
                                        disabled={nextDisabled}
                                        aria-label="Next"
                                        className={`flex items-center justify-center rounded-full w-11 h-11 border border-grey-15 transition
                      ${nextDisabled
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
