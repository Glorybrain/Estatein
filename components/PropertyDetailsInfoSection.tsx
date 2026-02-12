// components/PropertyDetailsInfoSection.tsx
"use client";

import * as React from "react";
import {
    BoltIcon,
    HomeIcon,
    BuildingOffice2Icon,
    ArrowsPointingOutIcon,
} from "@heroicons/react/24/solid";

type Stat = {
    label: string;
    value: string;
    icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

type Props = {
    titleLeft?: string;
    description?: string;

    stats?: Stat[];

    titleRight?: string;
    amenities?: string[];
};

const DEFAULT_STATS: Stat[] = [
    { label: "Bedrooms", value: "04", icon: HomeIcon },
    { label: "Bathrooms", value: "03", icon: BuildingOffice2Icon },
    { label: "Area", value: "2,500 Square Feet", icon: ArrowsPointingOutIcon },
];

const DEFAULT_AMENITIES = [
    "Expansive oceanfront terrace for outdoor entertaining",
    "Gourmet kitchen with top-of-the-line appliances",
    "Private beach access for morning strolls and sunset views",
    "Master suite with a spa-inspired bathroom and ocean-facing balcony",
    "Private garage and ample storage space",
];

export default function PropertyDetailsInfoSection({
    titleLeft = "Description",
    description = `Discover your own piece of paradise with the Seaside Serenity Villa. With an open floor plan, breathtaking ocean views from every room, and direct access to a pristine sandy beach, this property is the epitome of coastal living.`,
    stats = DEFAULT_STATS,
    titleRight = "Key Features and Amenities",
    amenities = DEFAULT_AMENITIES,
}: Props) {
    return (
        <section className="px-4 pt-4 pb-10 lg:pt-5 md:px-6 xl:px-8 lg:pb-14">
            <div className="w-full mx-auto lg:w-12/12 xl:w-11/12">
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-5">
                    {/* LEFT CARD */}
                    <div className="lg:col-span-6 h-fit">
                        <div className="h-full rounded-2xl border border-grey-15 bg-grey-8 p-6 lg:p-7.5 xl:p-10">
                            <h3 className="text-lg font-semibold text-white lg:text-xl">
                                {titleLeft}
                            </h3>

                            <p className="mt-4 text-sm font-medium leading-relaxed text-grey-60">
                                {description}
                            </p>

                            <div className="mt-5 mb-2.5 border-t border-grey-15" />

                            {/* STATS ROW */}
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                                {stats.slice(0, 3).map((s, idx) => {
                                    const Icon = s.icon;
                                    const isThird = idx === 2;

                                    return (
                                        <div
                                            key={s.label}
                                            className={[
                                                "flex flex-col items-start gap-2",
                                                // vertical dividers on desktop-ish like screenshot
                                                idx !== 0 ? "sm:border-l sm:border-grey-15 sm:pl-6" : "",
                                                // make the 3rd stat a bit wider (area text)
                                                isThird ? "sm:col-span-1" : "",
                                            ].join(" ")}
                                        >
                                            <div className="flex gap-2 items">
                                                {Icon ? (
                                                    <Icon className="w-5 h-5 text-grey-50" />
                                                ) : null}
                                                <div className="text-sm font-medium text-grey-60">
                                                    {s.label}
                                                </div>
                                            </div>

                                            <div
                                                className={[
                                                    "font-semibold text-white",
                                                    isThird ? "text-sm lg:text-base" : "text-base",
                                                ].join(" ")}
                                            >
                                                {s.value}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT CARD */}
                    <div className="lg:col-span-6">
                        <div className="h-full rounded-2xl border border-grey-15 bg-grey-8 p-6 lg:p-7.5 xl:p-10">
                            <h3 className="text-lg font-semibold text-white lg:text-xl">
                                {titleRight}
                            </h3>

                            <div className="mt-6">
                                {/* Vertical purple line */}
                                <div className="relative">
                                    <div className="space-y-4">
                                        {amenities.map((text, i) => (
                                            <div
                                                key={`${text}-${i}`}
                                                className="px-4 py-4 border-l border-l-brand-60 bg-[linear-gradient(90deg,#1A1A1A_0%,rgba(26,26,26,0)_100%)]"
                                            >
                                                <div className="flex items-center gap-2.5">
                                                    <BoltIcon className="w-5.5 h-5.5 text-white" />

                                                    <p className="text-sm font-medium leading-relaxed text-grey-60">
                                                        {text}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {/* end */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
