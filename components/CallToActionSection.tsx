"use client";

import Image from "next/image";
import Link from "next/link";

type Props = {
    title?: string;
    subtitle?: string;
    ctaText?: string;
    ctaHref?: string;
};

export default function CallToActionSection({
    title = "Start Your Real Estate Journey Today",
    subtitle = `Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance.`,
    ctaText = "Explore Properties",
    ctaHref = "/properties",
}: Props) {
    return (
        <section className="relative px-4 py-10 border-t border-b lg:py-12 border-grey-15 md:px-6 xl:px-8">
            <div className="w-full mx-auto lg:w-12/12 xl:w-11/12">
                <div className="absolute bottom-0 left-0 w-1/2 pointer-events-none max-w-125">
                    <Image
                        src="/cta-pattern-left.png"
                        alt="Decorative pattern"
                        width={500}
                        height={400}
                        className="object-contain w-full h-auto"
                    />
                </div>
                <div className="absolute bottom-0 right-0 w-1/2 max-w-125">
                    <Image
                        src="/cta-pattern-right.png"
                        alt="Decorative pattern"
                        width={500}
                        height={400}
                        className="object-contain w-full h-auto"
                    />
                </div>
                <div className="relative flex flex-col gap-6 lg:items-center lg:text-start lg:flex-row lg:justify-between">
                    <div className="max-w-4xl space-y-3">
                        <h2 className="text-[28px] font-semibold leading-tight text-white lg:text-[38px] xl:text-5xl">
                            {title}
                        </h2>
                        <p className="text-sm leading-relaxed text-grey-60 lg:text-base">
                            {subtitle}
                        </p>
                    </div>

                    <div className="lg:shrink-0">
                        <Link
                            href={ctaHref}
                            className="inline-flex items-center justify-center rounded-lg bg-brand-60 px-6 w-full md:w-fit py-3.5 text-sm font-medium text-white transition hover:bg-brand-60/90"
                        >
                            {ctaText}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
