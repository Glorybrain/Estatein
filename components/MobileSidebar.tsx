"use client";

import { useEffect, useRef, type RefObject } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { XMarkIcon } from "@heroicons/react/24/outline";

type NavLink = { name: string; href: string };

type MobileSidebarProps = {
    open: boolean;
    onClose: () => void;
    links: NavLink[];
};

function useOutsideClick<T extends HTMLElement>(
    ref: RefObject<T | null>,
    handler: () => void,
    when: boolean
) {
    useEffect(() => {
        if (!when) return;

        const listener = (event: MouseEvent | TouchEvent) => {
            const el = ref.current;
            if (!el) return;
            if (el.contains(event.target as Node)) return;
            handler();
        };

        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);

        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [ref, handler, when]);
}

export default function MobileSidebar({ open, onClose, links }: MobileSidebarProps) {
    const pathname = usePathname();
    const sidebarRef = useRef<HTMLDivElement>(null);

    useOutsideClick(sidebarRef, onClose, open);

    useEffect(() => {
        if (!open) return;
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = prev;
        };
    }, [open]);

    if (typeof window === "undefined") return null;

    return createPortal(
        <div
            className={`fixed inset-0 z-50 transition ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
        >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

            <div
                ref={sidebarRef}
                className={`absolute left-0 top-0 h-full w-[85%] max-w-sm bg-grey-10 border-r border-grey-15/30
        transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"}`}
            >
                <div className="flex items-center justify-between px-6 py-5">
                    <span className="text-lg font-semibold text-white"></span>
                    <button
                        onClick={onClose}
                        className="flex items-center justify-center w-10 h-10 transition rounded-full bg-white/10 hover:bg-white/20"
                    >
                        <XMarkIcon className="w-6 h-6 text-white" />
                    </button>
                </div>

                <div className="px-6 mt-4">
                    <ul className="flex flex-col gap-6">
                        {links.map((link) => {
                            const active = pathname === link.href;
                            return (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        onClick={onClose}
                                        className={`text-lg font-medium transition ${active ? "text-brand-60" : "text-white/80 hover:text-white"
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>

                    <div className="mt-10">
                        <Link
                            href="/contact"
                            onClick={onClose}
                            className="block text-center px-6 py-4 rounded-[10px] border border-grey-15 font-medium bg-grey-8 hover:bg-grey-15 transition text-white"
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
}
