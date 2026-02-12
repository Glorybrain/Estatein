"use client";

import Image from "next/image";

type Stat = {
    value: string;
    label: string;
};

type Props = {
    eyebrowSrc?: string;
    title?: string;
    description?: string;
    stats?: Stat[];
    imageSrc?: string;
    imageAlt?: string;
};

const DEFAULT_STATS: Stat[] = [
    { value: "200+", label: "Happy Customers" },
    { value: "10k+", label: "Properties For Clients" },
    { value: "16+", label: "Years of Experience" },
];

export default function AboutHero({
    eyebrowSrc = "/Abstract Design3.svg",
    title = "Our Journey",
    description = `Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we’ve expanded our reach, forged valuable partnerships, and gained the trust of countless clients.`,
    stats = DEFAULT_STATS,
    imageSrc = "/about-hero-house.png", // <- replace with your image
    imageAlt = "House on a hand",
}: Props) {
    return (
        <section className="px-4 py-10 lg:py-16 md:px-6 xl:px-8">
            <div className="w-full mx-auto lg:w-12/12 xl:w-11/12">
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
                    {/* LEFT */}
                    <div className="order-2 lg:order-1 lg:col-span-6">
                        {/* Eyebrow */}
                        <div className="flex items-center gap-3 -ml-2">
                            <div className="w-10 lg:w-12">
                                <Image
                                    src={eyebrowSrc}
                                    alt="Section decoration"
                                    width={60}
                                    height={30}
                                    className="object-contain w-full h-auto"
                                    priority
                                />
                            </div>
                        </div>

                        <h1 className="mt-4 text-[34px] font-semibold leading-[1.15] text-white lg:text-[44px] xl:text-[52px]">
                            {title}
                        </h1>

                        <p className="max-w-xl mt-4 text-sm leading-relaxed text-grey-60 lg:text-base">
                            {description}
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-3 mt-8 sm:grid-cols-3">
                            {stats.slice(0, 3).map((s, index) => (
                                <div
                                    key={s.label}
                                    className={`
        px-5 py-4 text-center border rounded-xl border-grey-15 bg-grey-8
        md:text-start
        ${index === 2 ? "col-span-2 sm:col-span-1" : ""}
      `}
                                >
                                    <div className="text-2xl font-semibold text-white">
                                        {s.value}
                                    </div>

                                    <div className="mt-1 text-xs text-white/50">
                                        {s.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="order-1 lg:order-2 lg:col-span-6">
                        <div className="relative w-full aspect-16/10">
                            <Image
                                src={imageSrc}
                                alt={imageAlt}
                                fill
                                // className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                    {/* end */}
                </div>
            </div>
        </section>
    );
}
