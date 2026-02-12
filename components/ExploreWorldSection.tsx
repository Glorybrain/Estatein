"use client";

import Image from "next/image";

type GalleryItem = {
    id: string;
    src: string;
    alt: string;
    className?: string; // grid placement
};

type Props = {
    eyebrowSrc?: string;
    title?: string;
    subtitle?: string;

    // background pattern image (optional)
    bgPatternSrc?: string;

    items?: GalleryItem[];
};

const FALLBACK_ITEMS: GalleryItem[] = [
    {
        id: "g1",
        src: "/world.png",
        alt: "Office space",
        className: "lg:col-span-2 lg:row-span-1",
    },
    {
        id: "g2",
        src: "/world2.png",
        alt: "Team photo",
        className: "lg:col-span-2 lg:row-span-1",
    },
    {
        id: "g3",
        src: "/world3.png",
        alt: "Meeting table",
        className: "lg:col-span-2",
    },
    {
        id: "g4",
        src: "/world4.png",
        alt: "Team standing",
        className: "lg:col-span-1",
    },
    {
        id: "g5",
        src: "/world5.png",
        alt: "Team smiling",
        className: "lg:col-span-1",
    },
    {
        id: "g6",
        src: "/world6.png",
        alt: "Team smiling",
        className: "lg:col-span-1",
    },
];

function GalleryCard({
    src,
    alt,
    priority,
    className = "",
}: {
    src: string;
    alt: string;
    priority?: boolean;
    className?: string;
}) {
    return (
        <div
            className={`relative overflow-hidden rounded-2xl border border-grey-15 bg-grey-10 ${className}`}
        >
            <div className="relative h-full w-full min-h-[140px] sm:min-h-[170px] lg:min-h-[220px]">
                <Image
                    src={src}
                    alt={alt}
                    fill
                    priority={priority}
                    className="object-cover"
                />
            </div>
        </div>
    );
}

export default function ExploreWorldSection({
    eyebrowSrc = "/Abstract Design3.svg",
    title = "Explore Estatein's World",
    subtitle = "Step inside the world of Estatein, where professionalism meets warmth, and expertise meets passion. Our gallery offers a glimpse into our team and workspaces, inviting you to get to know us better.",
    bgPatternSrc = "/Abstract Design.png", // optional
    items = FALLBACK_ITEMS,
}: Props) {
    const list = items?.length ? items : FALLBACK_ITEMS;

    return (
        <section className="px-4 py-10 lg:py-16 md:px-6 xl:px-8">
            <div className="w-full mx-auto lg:w-12/12 xl:w-11/12">
                {/* Big container like screenshot */}
                <div className="relative overflow-hidden border rounded-2xl border-grey-15 bg-grey-10">
                    {/* background pattern */}
                    <div className="absolute inset-0 pointer-events-none opacity-20">
                        {bgPatternSrc ? (
                            <Image
                                src={bgPatternSrc}
                                alt=""
                                fill
                                className="object-cover"
                                priority
                            />
                        ) : null}
                        <div className="absolute inset-0 bg-black/40" />
                    </div>

                    <div className="relative p-6 lg:p-10 xl:p-12">
                        {/* Layout: on lg, text at bottom-left, gallery fills rest */}
                        <div className="grid grid-cols-1 gap-2.5 lg:gap-5">
                            <div className="grid items-end grid-cols-2 gap-2.5 lg:gap-5">
                                {list.slice(0, 3).map((g, idx) => (
                                    <GalleryCard
                                        key={g.id}
                                        src={g.src}
                                        alt={g.alt}
                                        priority={idx === 0}
                                        className=""
                                    />
                                ))}
                                <div className="col-span-1 grid items-end grid-cols-2 gap-2.5 lg:gap-5">
                                    {list.slice(3, 5).map((g, idx) => (
                                        <GalleryCard
                                            key={g.id}
                                            src={g.src}
                                            alt={g.alt}
                                            priority={idx === 0}
                                            className=""
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="grid items-start grid-cols-1 gap-2.5 lg:gap-5 lg:grid-cols-2">
                                <div className="">
                                    {eyebrowSrc ? (
                                        <div className="w-11.25 -ml-1.5 mb-3 lg:w-13.75 lg:-ml-2 xl:w-17 xl:-ml-2.5">
                                            <Image
                                                src={eyebrowSrc}
                                                alt="Section decoration"
                                                width={60}
                                                height={30}
                                                className="object-contain w-full h-auto"
                                                priority
                                            />
                                        </div>
                                    ) : null}

                                    <h3 className="text-[28px] font-semibold leading-tight text-white lg:text-[34px] xl:text-[40px]">
                                        {title}
                                    </h3>

                                    <p className="mt-3 text-sm font-medium leading-relaxed text-grey-60 lg:text-base">
                                        {subtitle}
                                    </p>
                                </div>
                                {list.slice(5, 6).map((g, idx) => (
                                    <GalleryCard
                                        key={g.id}
                                        src={g.src}
                                        alt={g.alt}
                                        priority={idx === 0}
                                        className=""
                                    />
                                ))}
                            </div>
                        </div>
                        {/* end */}
                    </div>
                </div>
            </div>
        </section>
    );
}
