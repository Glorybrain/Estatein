import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative overflow-hidden">
            {/* DESKTOP: Right half image */}
            <div className="absolute inset-y-0 right-0 z-0 hidden w-1/2 bg-grey-10 lg:block">
                <Image
                    src="/hero-building.png"
                    alt="Estatein building"
                    fill
                    className=""
                    priority
                />
            </div>

            <div className="relative z-10 w-full px-4 py-8 mx-auto lg:py-16 md:px-6 xl:px-8 lg:w-12/12 xl:w-11/12">
                <div className="absolute inset-0 items-center hidden pointer-events-none lg:flex lg:justify-center z-2 lg:items-start lg:pt-12">
                    <Link
                        href="/properties"
                        className="relative block w-24 h-24 transition-transform duration-300 pointer-events-auto group hover:scale-105"
                    >
                        <div className="absolute inset-0 rounded-full bg-[#101012] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]" />

                        <div className="absolute inset-[8px] rounded-full bg-[#0F0F10] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]" />

                        <div className="absolute inset-[22px] rounded-full bg-[#0B0B0C] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]" />

                        <div className="absolute inset-0 grid place-items-center">
                            <svg
                                className="w-5 h-5 text-white"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M7 17L17 7"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M9 7H17V15"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>

                        <svg
                            className="absolute inset-0 transition-transform duration-700 group-hover:animate-spin-slow"
                            viewBox="0 0 100 100"
                        >
                            <defs>
                                <path
                                    id="circlePath"
                                    d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0"
                                />
                            </defs>

                            <text
                                fill="white"
                                fontSize="8"
                                letterSpacing="3"
                                className="uppercase"
                            >
                                <textPath
                                    href="#circlePath"
                                    startOffset="50%"
                                    textAnchor="middle"
                                >
                                    Discover Your Dream Property ✨
                                </textPath>
                            </text>
                        </svg>
                    </Link>
                </div>
                <div className="flex flex-col gap-14 lg:flex-row lg:items-center lg:gap-12">
                    {/* TEXT: always first on mobile */}
                    <div className="order-2 w-full space-y-5 lg:space-y-6 xl:space-y-8 lg:order-0 lg:w-1/2">
                        <div className="space-y-4 lg:space-y-5 xl:space-y-6">
                            <h1 className="text-[2rem] font-semibold leading-[1.15] text-white sm:text-[2.4rem] md:text-[2.75rem] lg:text-5xl xl:text-6xl">
                                Discover Your Dream
                                Property with Estatein
                            </h1>

                            <p className="max-w-xl text-sm leading-relaxed text-grey-60 sm:text-base md:text-lg">
                                Your journey to finding the perfect property begins here. Explore our
                                listings to find the home that matches your dreams.
                            </p>
                        </div>

                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                            <Link
                                href="/about"
                                className="inline-flex py-4.5 border-grey-15 px-6 w-full items-center justify-center rounded-[10px] border bg-grey-8 text-[15px] font-medium text-white hover:bg-grey-15 transition sm:w-auto sm:px-10"
                            >
                                Learn More
                            </Link>

                            <Link
                                href="/properties"
                                className="inline-flex py-4.5 px-6 w-full items-center justify-center rounded-[10px] bg-brand-60 text-[15px] font-medium text-white hover:opacity-90 transition sm:w-auto sm:px-10"
                            >
                                Browse Properties
                            </Link>
                        </div>

                        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                            {/* Card 1 */}
                            <div className="px-5 py-4 text-center border md:text-start rounded-xl border-grey-15 bg-grey-8">
                                <div className="text-2xl font-semibold text-white">200+</div>
                                <div className="mt-1 text-xs text-white/50">Happy Customers</div>
                            </div>

                            {/* Card 2 */}
                            <div className="px-5 py-4 text-center border md:text-start rounded-xl border-grey-15 bg-grey-8">
                                <div className="text-2xl font-semibold text-white">10k+</div>
                                <div className="mt-1 text-xs text-white/50">
                                    Properties For Clients
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="col-span-2 px-5 py-4 text-center border md:text-start rounded-xl border-grey-15 bg-grey-8 sm:col-span-1">
                                <div className="text-2xl font-semibold text-white">16+</div>
                                <div className="mt-1 text-xs text-white/50">
                                    Years of Experience
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* MOBILE: Image comes AFTER text */}
                    <div className="relative order-1 hidden w-full md:block lg:hidden">
                        <div className="absolute inset-0 flex items-end -mb-12 pointer-events-none lg:hidden lg:justify-center z-2 lg:items-start">
                            <Link
                                href="/properties"
                                className="relative block w-24 h-24 transition-transform duration-300 pointer-events-auto group hover:scale-105"
                            >
                                <div className="absolute inset-0 rounded-full bg-[#101012] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]" />

                                <div className="absolute inset-[8px] rounded-full bg-[#0F0F10] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]" />

                                <div className="absolute inset-[22px] rounded-full bg-[#0B0B0C] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]" />

                                <div className="absolute inset-0 grid place-items-center">
                                    <svg
                                        className="w-5 h-5 text-white"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <path
                                            d="M7 17L17 7"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                        />
                                        <path
                                            d="M9 7H17V15"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>

                                <svg
                                    className="absolute inset-0 transition-transform duration-700 group-hover:animate-spin-slow"
                                    viewBox="0 0 100 100"
                                >
                                    <defs>
                                        <path
                                            id="circlePath"
                                            d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0"
                                        />
                                    </defs>

                                    <text
                                        fill="white"
                                        fontSize="8"
                                        letterSpacing="3"
                                        className="uppercase"
                                    >
                                        <textPath
                                            href="#circlePath"
                                            startOffset="50%"
                                            textAnchor="middle"
                                        >
                                            Discover Your Dream Property ✨
                                        </textPath>
                                    </text>
                                </svg>
                            </Link>
                        </div>
                        <div className="relative md:h-[600px] rounded-2xl border border-grey-15 bg-grey-10 overflow-hidden">
                            <Image
                                src="/hero-building.png"
                                alt="Estatein building"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                    <div className="relative order-1 w-full md:hidden">
                        <div className="absolute inset-0 flex items-end -mb-12 pointer-events-none lg:hidden lg:justify-center z-2 lg:items-start">
                            <Link
                                href="/properties"
                                className="relative block w-24 h-24 transition-transform duration-300 pointer-events-auto group hover:scale-105"
                            >
                                <div className="absolute inset-0 rounded-full bg-[#101012] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]" />

                                <div className="absolute inset-[8px] rounded-full bg-[#0F0F10] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]" />

                                <div className="absolute inset-[22px] rounded-full bg-[#0B0B0C] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]" />

                                <div className="absolute inset-0 grid place-items-center">
                                    <svg
                                        className="w-5 h-5 text-white"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <path
                                            d="M7 17L17 7"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                        />
                                        <path
                                            d="M9 7H17V15"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>

                                <svg
                                    className="absolute inset-0 transition-transform duration-700 group-hover:animate-spin-slow"
                                    viewBox="0 0 100 100"
                                >
                                    <defs>
                                        <path
                                            id="circlePath"
                                            d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0"
                                        />
                                    </defs>

                                    <text
                                        fill="white"
                                        fontSize="8"
                                        letterSpacing="3"
                                        className="uppercase"
                                    >
                                        <textPath
                                            href="#circlePath"
                                            startOffset="50%"
                                            textAnchor="middle"
                                        >
                                            Discover Your Dream Property ✨
                                        </textPath>
                                    </text>
                                </svg>
                            </Link>
                        </div>
                        <div className="relative h-[320px] sm:h-[380px] rounded-2xl border border-grey-15 bg-grey-10 overflow-hidden">
                            <Image
                                // src="/mobile-hero-building.png"
                                src="/hero-building.png"
                                alt="Estatein building"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>

                    {/* Desktop spacer (keeps your original structure) */}
                    <div className="hidden lg:block lg:w-1/2" />
                </div>
            </div>
        </section>
    );
}
