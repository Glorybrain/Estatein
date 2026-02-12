"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { XMarkIcon } from "@heroicons/react/24/outline";

type BannerProps = {
    message: string;
    linkText: string;
    linkHref: string;
    backgroundImage?: string;
};

export default function Banner({
    message,
    linkText,
    linkHref,
    backgroundImage = "/Abstract Design.png",
}: BannerProps) {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <div className="relative pt-10 pb-5 overflow-hidden border border-grey-15 bg-grey-10 px-3 py-3 sm:px-4 sm:py-3.5 lg:px-6">
            {/* Background */}
            <div className="absolute inset-0">
                <Image
                    src={backgroundImage}
                    alt="Banner Background"
                    fill
                    className="object-cover opacity-10"
                    priority
                />
            </div>

            {/* Content */}
            <div className="relative z-10 flex items-center gap-3 sm:items-center sm:justify-between">
                {/* Text + link */}
                <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap gap-1 text-center sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-2 sm:text-left">
                        <span className="text-[11px] font-medium leading-snug text-white sm:text-sm">
                            {message}
                        </span>

                        <Link
                            href={linkHref}
                            className="text-[11px] font-semibold leading-snug text-white underline underline-offset-4 sm:text-sm"
                        >
                            {linkText}
                        </Link>
                    </div>
                </div>

                {/* Close */}
                <button
                    onClick={() => setIsVisible(false)}
                    aria-label="Dismiss banner"
                    className="flex items-center justify-center flex-shrink-0 w-8 h-8 transition rounded-full bg-white/10 hover:bg-white/20 active:scale-95"
                >
                    <XMarkIcon className="w-4 h-4 text-white" />
                </button>
            </div>
        </div>
    );
}
