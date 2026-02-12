// components/PropertyGallery.tsx
"use client";

import Image from "next/image";
import * as React from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

function clamp(n: number, min: number, max: number) {
    return Math.max(min, Math.min(max, n));
}

export default function PropertyGallery({ images }: { images: string[] }) {
    const [active, setActive] = React.useState(0);

    const prev = () => setActive((p) => clamp(p - 1, 0, images.length - 1));
    const next = () => setActive((p) => clamp(p + 1, 0, images.length - 1));

    // Show 2 big images like the screenshot:
    const left = images[active] ?? images[0];
    const right = images[active + 1] ?? images[active] ?? images[0];

    // Dots count based on “pairs”
    const totalDots = Math.max(1, Math.ceil(images.length / 2));
    const activeDot = Math.floor(active / 2);

    return (
        <div className="space-y-4 lg:space-y-5">
            {/* Thumbnails strip */}
            <div className="p-3 border rounded-xl border-grey-15 bg-grey-8">
                <div className="flex gap-3 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    {images.map((src, idx) => {
                        const isActive = idx === active || idx === active + 1;
                        return (
                            <button
                                key={src + idx}
                                type="button"
                                onClick={() => setActive(idx)}
                                className={[
                                    "relative h-14 w-24 lg:w-30 lg:h-18 shrink-0 overflow-hidden rounded-lg border transition",
                                    isActive ? "border-brand-60/70" : "border-grey-15 hover:border-grey-50/40",
                                ].join(" ")}
                                aria-label={`Open image ${idx + 1}`}
                            >
                                <Image src={src} alt="" fill className="object-cover" />
                                <div className={isActive ? "absolute inset-0 ring-2 ring-brand-60/30" : ""} />
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Big images (2-up on desktop, stacked on mobile) */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-5">
                <div className="relative overflow-hidden rounded-[10px] border border-grey-15 bg-grey-10 aspect-[16/10]">
                    <Image src={left} alt="" fill className="object-cover" priority />
                </div>

                <div className="relative overflow-hidden rounded-[10px] border border-grey-15 bg-grey-10 aspect-[16/10]">
                    <Image src={right} alt="" fill className="object-cover" />
                </div>
            </div>

            {/* Bottom controls (centered pill like screenshot) */}
            <div className="flex items-center justify-center pt-1">
                <div className="flex items-center gap-3 rounded-full border border-grey-15 bg-grey-8 px-2 py-2 shadow-[0_0_0_6px_#191919]">
                    <button
                        type="button"
                        onClick={prev}
                        disabled={active === 0}
                        className={[
                            "flex h-11 w-11 items-center justify-center rounded-full border border-grey-15 transition",
                            active === 0
                                ? "bg-transparent cursor-not-allowed"
                                : "bg-grey-8 hover:bg-grey-15",
                        ].join(" ")}
                        aria-label="Previous"
                    >
                        <ArrowLeftIcon className={["h-5 w-5", active === 0 ? "text-grey-50" : "text-white"].join(" ")} />
                    </button>

                    {/* Dots */}
                    <div className="flex items-center gap-1.5 px-1">
                        {Array.from({ length: totalDots }).map((_, i) => (
                            <span
                                key={i}
                                className={[
                                    "h-1.5 rounded-full transition",
                                    i === activeDot ? "w-5 bg-brand-60" : "w-5 bg-grey-15",
                                ].join(" ")}
                            />
                        ))}
                    </div>

                    <button
                        type="button"
                        onClick={next}
                        disabled={active >= images.length - 2} // since we show 2-up
                        className={[
                            "flex h-11 w-11 items-center justify-center rounded-full border border-grey-15 transition",
                            active >= images.length - 2
                                ? "bg-transparent cursor-not-allowed"
                                : "bg-grey-8 hover:bg-grey-15",
                        ].join(" ")}
                        aria-label="Next"
                    >
                        <ArrowRightIcon
                            className={[
                                "h-5 w-5",
                                active >= images.length - 2 ? "text-grey-50" : "text-white",
                            ].join(" ")}
                        />
                    </button>
                </div>
            </div>
        </div>
    );
}
