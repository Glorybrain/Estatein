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

            <div className="relative z-10 w-full px-4 py-16 mx-auto md:px-6 xl:px-8 lg:w-12/12 xl:w-11/12">
                <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-12">
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
                    <div className="order-1 w-full lg:hidden">
                        <div className="relative h-[320px] sm:h-[380px] md:h-[440px] rounded-2xl border border-grey-15 bg-grey-10 overflow-hidden">
                            <Image
                                src="/mobile-hero-building.png"
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
