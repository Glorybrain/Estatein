"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";

type FooterLink = { label: string; href: string };

type FooterColumn = {
    title: string;
    links: FooterLink[];
};

type Props = {
    logoText?: string;
    brandHref?: string;
    columns?: FooterColumn[];

    copyrightText?: string;
    termsHref?: string;
    termsText?: string;

    socials?: { label: string; href: string; icon: React.ReactNode }[];
};

const DEFAULT_COLUMNS: FooterColumn[] = [
    {
        title: "Home",
        links: [
            { label: "Hero Section", href: "/" },
            { label: "Features", href: "/#features" },
            { label: "Properties", href: "/properties" },
            { label: "Testimonials", href: "/#testimonials" },
            { label: "FAQ's", href: "/#faqs" },
        ],
    },
    {
        title: "About Us",
        links: [
            { label: "Our Story", href: "/about" },
            { label: "Our Works", href: "/about#works" },
            { label: "How It Works", href: "/about#how-it-works" },
            { label: "Our Team", href: "/about#team" },
            { label: "Our Clients", href: "/about#clients" },
        ],
    },
    {
        title: "Properties",
        links: [
            { label: "Portfolio", href: "/properties" },
            { label: "Categories", href: "/properties#categories" },
        ],
    },
    {
        title: "Services",
        links: [
            { label: "Valuation Mastery", href: "/services#valuation" },
            { label: "Strategic Marketing", href: "/services#marketing" },
            { label: "Negotiation Wizardry", href: "/services#negotiation" },
            { label: "Closing Success", href: "/services#closing" },
            { label: "Property Management", href: "/services#management" },
        ],
    },
    {
        title: "Contact Us",
        links: [
            { label: "Contact Form", href: "/contact" },
            { label: "Our Offices", href: "/contact#offices" },
        ],
    },
];

const DEFAULT_SOCIALS = [
    { label: "Facebook", href: "#", icon: <FaFacebookF /> },
    { label: "LinkedIn", href: "#", icon: <FaLinkedinIn /> },
    { label: "Twitter", href: "#", icon: <FaTwitter /> },
    { label: "YouTube", href: "#", icon: <FaYoutube /> },
];

export default function Footer({
    logoText = "Estatein",
    brandHref = "/",
    columns = DEFAULT_COLUMNS,
    copyrightText = "©2023 Estatein. All Rights Reserved.",
    termsHref = "/terms",
    termsText = "Terms & Conditions",
    socials = DEFAULT_SOCIALS,
}: Props) {
    return (
        <footer className="bg-grey-8">
            {/* TOP */}
            <div className="px-4 pt-12 pb-8 md:px-6 xl:px-8 lg:pt-20 lg:pb-14">
                <div className="w-full mx-auto lg:w-12/12 xl:w-11/12">
                    <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
                        {/* Brand + Email */}
                        <div className="lg:col-span-4">
                            <Link href={brandHref} className="inline-flex items-center gap-3">
                                <Image
                                    src="/logo.svg"
                                    alt={logoText}
                                    width={40}
                                    height={40}
                                    className="object-contain w-auto h-10"
                                    priority
                                />
                            </Link>

                            {/* Email input (kept your SVGs + styles) */}
                            <form
                                className="w-full mt-7 max-w-90"
                                onSubmit={(e) => e.preventDefault()}
                            >
                                <div className="flex items-center gap-2 rounded-xl border border-grey-15 bg-grey-8 px-4 py-2.5">
                                    {/* left icon */}
                                    <svg
                                        className="h-5.5 w-5.5 text-grey-50"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M17 7H18V8C18 8.26522 18.1054 8.51957 18.2929 8.70711C18.4804 8.89464 18.7348 9 19 9C19.2652 9 19.5196 8.89464 19.7071 8.70711C19.8946 8.51957 20 8.26522 20 8V7H21C21.2652 7 21.5196 6.89464 21.7071 6.70711C21.8946 6.51957 22 6.26522 22 6C22 5.73478 21.8946 5.48043 21.7071 5.29289C21.5196 5.10536 21.2652 5 21 5H20V4C20 3.73478 19.8946 3.48043 19.7071 3.29289C19.5196 3.10536 19.2652 3 19 3C18.7348 3 18.4804 3.10536 18.2929 3.29289C18.1054 3.48043 18 3.73478 18 4V5H17C16.7348 5 16.4804 5.10536 16.2929 5.29289C16.1054 5.48043 16 5.73478 16 6C16 6.26522 16.1054 6.51957 16.2929 6.70711C16.4804 6.89464 16.7348 7 17 7ZM21 11C20.7348 11 20.4804 11.1054 20.2929 11.2929C20.1054 11.4804 20 11.7348 20 12V18C20 18.2652 19.8946 18.5196 19.7071 18.7071C19.5196 18.8946 19.2652 19 19 19H5C4.73478 19 4.48043 18.8946 4.29289 18.7071C4.10536 18.5196 4 18.2652 4 18V8.41L9.88 14.3C10.4425 14.8618 11.205 15.1774 12 15.1774C12.795 15.1774 13.5575 14.8618 14.12 14.3L16.59 11.83C16.7783 11.6417 16.8841 11.3863 16.8841 11.12C16.8841 10.8537 16.7783 10.5983 16.59 10.41C16.4017 10.2217 16.1463 10.1159 15.88 10.1159C15.6137 10.1159 15.3583 10.2217 15.17 10.41L12.7 12.88C12.5131 13.0632 12.2618 13.1659 12 13.1659C11.7382 13.1659 11.4869 13.0632 11.3 12.88L5.41 7H13C13.2652 7 13.5196 6.89464 13.7071 6.70711C13.8946 6.51957 14 6.26522 14 6C14 5.73478 13.8946 5.48043 13.7071 5.29289C13.5196 5.10536 13.2652 5 13 5H5C4.20435 5 3.44129 5.31607 2.87868 5.87868C2.31607 6.44129 2 7.20435 2 8V18C2 18.7956 2.31607 19.5587 2.87868 20.1213C3.44129 20.6839 4.20435 21 5 21H19C19.7956 21 20.5587 20.6839 21.1213 20.1213C21.6839 19.5587 22 18.7956 22 18V12C22 11.7348 21.8946 11.4804 21.7071 11.2929C21.5196 11.1054 21.2652 11 21 11Z"
                                            fill="#999999"
                                        />
                                    </svg>

                                    <input
                                        type="email"
                                        placeholder="Enter Your Email"
                                        className="w-full text-sm text-white bg-transparent outline-none placeholder:text-grey-50"
                                    />

                                    {/* send icon */}
                                    <button
                                        type="submit"
                                        aria-label="Subscribe"
                                        className="flex items-center justify-center"
                                    >
                                        <svg
                                            className="h-7.5 w-7.5 text-white"
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
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Links */}
                        <div className="lg:col-span-8">
                            {/* ✅ Mobile: 2 columns like screenshot | Desktop: 5 columns */}
                            <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
                                {columns.map((col, index) => (
                                    <div
                                        key={col.title}
                                        className={`
        pb-8 border-b border-grey-15 lg:border-transparent
        ${index % 2 !== 0 ? "border-l border-grey-15 pl-6" : ""}
        sm:border-l-0 sm:pl-0
      `}
                                    >
                                        <h4 className="text-sm font-medium lg:text-base text-grey-60">
                                            {col.title}
                                        </h4>

                                        <ul className="mt-4 space-y-3">
                                            {col.links.map((l) => (
                                                <li key={l.label}>
                                                    <Link
                                                        href={l.href}
                                                        className="text-sm transition text-white/85 hover:text-white"
                                                    >
                                                        {l.label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>

                        </div>
                        {/* end */}
                    </div>
                </div>
            </div>

            {/* BOTTOM */}
            <div className="border-t border-grey-15 bg-grey-10">
                <div className="px-4 py-6 md:px-6 xl:px-8">
                    <div className="w-full mx-auto lg:w-12/12 xl:w-11/12">
                        {/* ✅ Mobile: center stacked | Desktop: row */}
                        <div className="flex flex-col items-center justify-center gap-5 sm:flex-row sm:justify-between">
                            {/* socials first on mobile (like screenshot) */}
                            <div className="flex items-center order-1 gap-3 sm:order-2">
                                {socials.map((s) => (
                                    <Link
                                        key={s.label}
                                        href={s.href}
                                        aria-label={s.label}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center w-12 h-12 transition border rounded-full border-grey-15 bg-grey-8 text-white/90 hover:bg-grey-15 hover:text-white"
                                    >
                                        <span className="text-base">{s.icon}</span>
                                    </Link>
                                ))}
                            </div>

                            {/* text block under socials on mobile */}
                            <div className="flex flex-col items-center order-2 gap-2 text-center sm:order-1 sm:flex-row sm:items-center sm:gap-8 sm:text-left">
                                <span className="text-sm text-white/85">
                                    {copyrightText}
                                </span>

                                <Link
                                    href={termsHref}
                                    className="text-sm transition text-white/85 hover:text-white"
                                >
                                    {termsText}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
