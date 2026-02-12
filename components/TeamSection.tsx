"use client";

import Image from "next/image";
import Link from "next/link";
import SectionHeader from "./SectionHeader";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";

export type TeamMember = {
    id: string;
    name: string;
    role: string;
    imageSrc: string;
    imageAlt?: string;
    twitterHref?: string;
    helloHref?: string; // could be mailto: or contact page
};

type Props = {
    eyebrowSrc?: string;
    title?: string;
    subtitle?: string;
    members?: TeamMember[];
    ctaHref?: string;
    ctaText?: string;
};

const FALLBACK_MEMBERS: TeamMember[] = [
    {
        id: "m1",
        name: "Max Mitchell",
        role: "Founder",
        imageSrc: "/team.png",
        twitterHref: "#",
        helloHref: "#",
    },
    {
        id: "m2",
        name: "Sarah Johnson",
        role: "Chief Real Estate Officer",
        imageSrc: "/team2.png",
        twitterHref: "#",
        helloHref: "#",
    },
    {
        id: "m3",
        name: "David Brown",
        role: "Head of Property Management",
        imageSrc: "/team3.png",
        twitterHref: "#",
        helloHref: "#",
    },
    {
        id: "m4",
        name: "Michael Turner",
        role: "Legal Counsel",
        imageSrc: "/team4.png",
        twitterHref: "#",
        helloHref: "#",
    },
];

export default function TeamSection({
    eyebrowSrc = "/Abstract Design3.svg",
    title = "Meet the Estatein Team",
    subtitle = "At Estatein, our success is driven by the dedication and expertise of our team. Get to know the people behind our mission to make your real estate dreams a reality.",
    members = FALLBACK_MEMBERS,
    ctaHref,
    ctaText,
}: Props) {
    const list = members?.length ? members : FALLBACK_MEMBERS;

    return (
        <section className="px-4 py-10 lg:py-16 md:px-6 xl:px-8">
            <div className="w-full mx-auto lg:w-12/12 xl:w-11/12">
                <div className="flex flex-col gap-y-10 lg:gap-y-15 xl:gap-y-20">
                    <SectionHeader
                        eyebrowSrc={eyebrowSrc}
                        title={title}
                        subtitle={subtitle}
                        ctaHref={ctaHref}
                        ctaText={ctaText}
                        priority
                    />

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5 xl:gap-7.5">
                        {list.slice(0, 4).map((m, idx) => (
                            <article
                                key={m.id}
                                className="p-4 border rounded-2xl border-grey-15 bg-grey-8 lg:p-5 xl:p-5"
                            >
                                {/* Image */}
                                <div className="relative">
                                    <div className="relative rounded-2xl overflow-hidden aspect-[4/3] w-full">
                                        <Image
                                            src={m.imageSrc}
                                            alt={m.imageAlt ?? m.name}
                                            fill
                                            className="object-cover"
                                            priority={idx === 0}
                                        />
                                    </div>

                                    {/* Twitter pill */}
                                    <div className="absolute -translate-x-1/2 z-2 -bottom-5 left-1/2">
                                        <Link
                                            href={m.twitterHref ?? "#"}
                                            aria-label={`${m.name} on Twitter`}
                                            className="inline-flex items-center justify-center rounded-full bg-brand-60 px-6 py-2.5 shadow-[0px_8px_24px_rgba(0,0,0,0.35)] transition hover:bg-brand-60/90"
                                        >
                                            <svg className="w-5 h-5 text-white" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6.2918 18.125C13.8371 18.125 17.9652 11.8723 17.9652 6.45155C17.9652 6.27577 17.9613 6.09608 17.9535 5.9203C18.7566 5.33955 19.4496 4.62021 20 3.79608C19.2521 4.12883 18.458 4.34615 17.6449 4.44061C18.5011 3.92742 19.1421 3.12123 19.4492 2.17147C18.6438 2.6488 17.763 2.98551 16.8445 3.16718C16.2257 2.50963 15.4075 2.07426 14.5164 1.92838C13.6253 1.78249 12.711 1.93421 11.9148 2.36008C11.1186 2.78595 10.4848 3.46225 10.1115 4.28443C9.73825 5.1066 9.64619 6.02885 9.84961 6.90858C8.21874 6.82674 6.62328 6.40309 5.16665 5.66508C3.71002 4.92708 2.42474 3.8912 1.39414 2.6246C0.870333 3.5277 0.710047 4.59637 0.945859 5.61341C1.18167 6.63045 1.79589 7.51954 2.66367 8.09999C2.01219 8.0793 1.37498 7.9039 0.804688 7.58827V7.63905C0.804104 8.58679 1.13175 9.50549 1.73192 10.239C2.3321 10.9725 3.16777 11.4755 4.09687 11.6625C3.49338 11.8276 2.85999 11.8517 2.2457 11.7328C2.50788 12.5479 3.01798 13.2607 3.70481 13.7719C4.39164 14.2831 5.22093 14.5672 6.07695 14.5844C4.62369 15.7259 2.82848 16.3451 0.980469 16.3422C0.652739 16.3417 0.325333 16.3216 0 16.282C1.87738 17.4865 4.06128 18.1262 6.2918 18.125Z" fill="white" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>

                                {/* Name + Role */}
                                <div className="pt-10 text-center">
                                    <h4 className="text-lg font-semibold text-white lg:text-xl">
                                        {m.name}
                                    </h4>
                                    <p className="mt-1 text-sm text-grey-60">{m.role}</p>
                                </div>

                                {/* Say hello */}
                                <div className="mt-6">
                                    <Link
                                        href={m.helloHref ?? "#"}
                                        className="flex items-center justify-between w-full px-4 py-2.5 text-sm font-medium text-white transition border rounded-full border-grey-15 bg-grey-10 hover:bg-grey-15"
                                    >
                                        <span className="flex items-center gap-2">
                                            Say Hello <span aria-hidden>👋</span>
                                        </span>

                                        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-60">
                                            <svg
                                                className="w-6 h-6 text-white"
                                                width="30"
                                                height="30"
                                                viewBox="0 0 30 30"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M26.7843 3.22287C26.1593 2.58412 25.2343 2.34787 24.3718 2.59787L4.25928 8.40912C3.34928 8.66162 2.70428 9.38287 2.53053 10.2979C2.35303 11.2304 2.97303 12.4154 3.78303 12.9104L10.0718 16.7504C10.7168 17.1454 11.5493 17.0466 12.083 16.5116L19.2843 9.31037C19.6468 8.93412 20.2468 8.93412 20.6093 9.31037C20.9718 9.67162 20.9718 10.2604 20.6093 10.6354L13.3955 17.8366C12.8605 18.3716 12.7605 19.2016 13.1543 19.8479L16.9968 26.1604C17.4468 26.9091 18.2218 27.3354 19.0718 27.3354C19.1718 27.3354 19.2843 27.3354 19.3843 27.3216C20.3593 27.1979 21.1343 26.5341 21.4218 25.5966L27.3843 5.63537C27.6468 4.78537 27.4093 3.86037 26.7843 3.22287Z"
                                                    fill="white"
                                                />
                                                <path
                                                    opacity="0.4"
                                                    d="M11.8145 23.9277C12.1795 24.294 12.1795 24.8877 11.8145 25.254L10.107 26.9602C9.92448 27.144 9.68448 27.2352 9.44448 27.2352C9.20448 27.2352 8.96448 27.144 8.78198 26.9602C8.41573 26.594 8.41573 26.0015 8.78198 25.6352L10.4882 23.9277C10.8545 23.5627 11.4482 23.5627 11.8145 23.9277ZM10.8349 19.1927C11.1999 19.559 11.1999 20.1527 10.8349 20.519L9.12736 22.2252C8.94486 22.409 8.70486 22.5002 8.46486 22.5002C8.22486 22.5002 7.98486 22.409 7.80236 22.2252C7.43611 21.859 7.43611 21.2665 7.80236 20.9002L9.50861 19.1927C9.87486 18.8277 10.4686 18.8277 10.8349 19.1927ZM6.13336 17.7022C6.49836 18.0685 6.49836 18.6622 6.13336 19.0285L4.42586 20.7347C4.24336 20.9185 4.00336 21.0097 3.76336 21.0097C3.52336 21.0097 3.28336 20.9185 3.10086 20.7347C2.73461 20.3685 2.73461 19.776 3.10086 19.4097L4.80711 17.7022C5.17336 17.3372 5.76711 17.3372 6.13336 17.7022Z"
                                                    fill="white"
                                                />
                                            </svg>
                                        </span>
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                    {/* end */}
                </div>
            </div>
        </section>
    );
}
