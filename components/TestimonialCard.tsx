"use client";

import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";

export type Testimonial = {
    id: string;
    title: string;
    message: string;
    name: string;
    location: string; // e.g. "USA, California"
    avatarSrc: string; // e.g. "/avatars/wade.png"
    rating?: number; // default 5
};

type Props = {
    testimonial: Testimonial;
};

export default function TestimonialCard({ testimonial }: Props) {
    const {
        title,
        message,
        name,
        location,
        avatarSrc,
        rating = 5,
    } = testimonial;

    return (
        <article className="rounded-2xl border border-grey-15 bg-gradient-to-b from-grey-8/70 to-grey-8/30 p-6 lg:p-7.5 xl:p-10 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
            {/* Stars */}
            <div className="flex items-center gap-2">
                {Array.from({ length: 5 }).map((_, i) => {
                    const filled = i < rating;
                    return (
                        <span
                            key={i}
                            className="flex items-center justify-center border rounded-full h-11 w-11 border-grey-15 bg-grey-10"
                        >
                            <StarIcon
                                className={`h-5 w-5 ${filled ? "text-[#FFE500]" : "text-grey-50"}`}
                            />
                        </span>
                    );
                })}
            </div>

            {/* Content */}
            <div className="mt-8 space-y-1">
                <h4 className="text-lg font-semibold text-white lg:text-xl">
                    {title}
                </h4>

                <p className="text-sm font-medium leading-relaxed text-white lg:text-base">
                    {message}
                </p>
            </div>

            {/* Author */}
            <div className="flex items-center gap-4 mt-8">
                <div className="relative w-12 h-12 overflow-hidden border rounded-full border-grey-15 bg-grey-10">
                    <Image
                        src={avatarSrc}
                        alt={name}
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="leading-tight">
                    <div className="text-base font-medium text-white">{name}</div>
                    <div className="mt-1 text-sm text-grey-60">{location}</div>
                </div>
            </div>
        </article>
    );
}
