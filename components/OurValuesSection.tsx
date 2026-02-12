"use client";

import Image from "next/image";
import {
    StarIcon,
    UsersIcon,
    AcademicCapIcon,
    UserGroupIcon,
} from "@heroicons/react/24/outline";

type ValueItem = {
    title: string;
    description: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

type Props = {
    eyebrowSrc?: string;
    title?: string;
    description?: string;
    values?: ValueItem[];
};

const DEFAULT_VALUES: ValueItem[] = [
    {
        title: "Trust",
        description: "Trust is the cornerstone of every successful real estate transaction.",
        icon: StarIcon,
    },
    {
        title: "Excellence",
        description:
            "We set the bar high for ourselves. From the properties we list to the services we provide.",
        icon: AcademicCapIcon,
    },
    {
        title: "Client-Centric",
        description:
            "Your dreams and needs are at the center of our universe. We listen, understand.",
        icon: UserGroupIcon,
    },
    {
        title: "Our Commitment",
        description:
            "We are dedicated to providing you with the highest level of service, professionalism, and support.",
        icon: StarIcon,
    },
];

export default function OurValuesSection({
    eyebrowSrc = "/Abstract Design3.svg",
    title = "Our Values",
    description = `Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.`,
    values = DEFAULT_VALUES,
}: Props) {
    return (
        <section className="px-4 py-10 lg:py-16 md:px-6 xl:px-8">
            <div className="w-full mx-auto lg:w-12/12 xl:w-11/12">
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
                    {/* LEFT */}
                    <div className="lg:col-span-5">
                        <div className="flex items-center gap-3 -ml-2">
                            <div className="w-10 lg:w-12">
                                <Image
                                    src={eyebrowSrc}
                                    alt="Section decoration"
                                    width={60}
                                    height={30}
                                    className="object-contain w-full h-auto"
                                />
                            </div>
                        </div>

                        <h2 className="mt-4 text-[34px] font-semibold leading-[1.15] text-white lg:text-[44px] xl:text-[52px]">
                            {title}
                        </h2>

                        <p className="max-w-xl mt-4 text-sm leading-relaxed text-grey-60 lg:text-base">
                            {description}
                        </p>
                    </div>

                    {/* RIGHT CARD */}
                    <div className="px-4 lg:px-0 lg:col-span-7">
                        <div className="p-4 border rounded-2xl border-grey-15 bg-grey-8 shadow-[0px_0px_0px_10px_#191919] lg:p-8">
                            <div className="grid grid-cols-1 sm:grid-cols-2">

                                {values.slice(0, 4).map((v, idx) => {
                                    const Icon = v.icon;

                                    const isLastMobile = idx === values.length - 1;
                                    const isRightColumn = idx % 2 === 1;
                                    const isSecondRow = idx >= 2;

                                    return (
                                        <div
                                            key={`${v.title}-${idx}`}
                                            className={`
                                            flex flex-col gap-4 px-0 md:px-6 p-6

                                            ${!isLastMobile ? "border-b border-grey-15" : ""}

                                            sm:border-b-0

                                            ${isRightColumn ? "sm:border-l sm:border-grey-15" : ""}

                                            ${isSecondRow ? "sm:border-t sm:border-grey-15" : ""}
                                        `}
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className="flex items-center justify-center w-12 h-12 border rounded-full border-brand-60/40 bg-grey-10">
                                                    <Icon className="w-6 h-6 text-brand-60 fill-brand-60" />
                                                </div>

                                                <h4 className="text-base font-semibold text-white lg:text-lg">
                                                    {v.title}
                                                </h4>
                                            </div>

                                            <p className="text-sm font-medium leading-relaxed text-grey-60">
                                                {v.description}
                                            </p>
                                        </div>
                                    );
                                })}

                            </div>
                        </div>
                    </div>
                    {/* end */}
                </div>
            </div>
        </section>
    );
}
