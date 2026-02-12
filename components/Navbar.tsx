"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bars3BottomRightIcon } from "@heroicons/react/24/outline";
import MobileSidebar from "@/components/MobileSidebar";

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Properties", href: "/properties" },
        { name: "Services", href: "/services" },
    ];

    const isActive = (href: string) => pathname === href;

    return (
        <header className="px-4 py-5 border-b md:px-6 xl:px-8 bg-grey-10 border-grey-15">
            <div className="w-full mx-auto lg:w-12/12 xl:w-11/12">
                <div className="flex items-center justify-between">
                    <Link href="/">
                        <Image src="/logo.svg" alt="Company Logo" width={120} height={40} />
                    </Link>

                    <nav className="items-center hidden gap-1 lg:flex">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`px-6 py-3 rounded-[10px] border border-transparent text-[.9rem] font-medium transition ${isActive(link.href) ? "bg-grey-8 border-grey-15" : ""
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    <div className="hidden lg:block">
                        <Link
                            href="/contact"
                            className="px-6 py-4 text-[.9rem] rounded-[10px] border border-grey-15 font-medium bg-grey-8 hover:bg-grey-15 transition"
                        >
                            Contact
                        </Link>
                    </div>

                    {/* Mobile trigger */}
                    <button onClick={() => setIsOpen(true)} className="lg:hidden" aria-label="Open menu">
                        <Bars3BottomRightIcon className="text-white w-7 h-7" />
                    </button>
                </div>
            </div>

            {/* Mobile Sidebar */}
            <MobileSidebar open={isOpen} onClose={() => setIsOpen(false)} links={navLinks} />
        </header>
    );
}
