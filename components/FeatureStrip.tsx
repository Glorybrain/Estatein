import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import {
    HomeModernIcon,
    BanknotesIcon,
    BuildingOffice2Icon,
    LightBulbIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const featureStripItems = [
    {
        title: "Find Your Dream Home",
        icon: HomeModernIcon,
        href: "/properties",
    },
    {
        title: "Unlock Property Value",
        icon: BanknotesIcon,
        href: "/properties",
    },
    {
        title: "Effortless Property Management",
        icon: BuildingOffice2Icon,
        href: "/properties",
    },
    {
        title: "Smart Investments, Informed Decisions",
        icon: LightBulbIcon,
        href: "/properties",
    },
];


export default function FeatureStrip() {
    return (
        <section className="p-2.5 md:p-4 lg:p-5 border rounded-xl lg:rounded-none border-grey-15 shadow-[0_0_0_4px_#191919]
 lg:shadow-[0_0_0_10px_#191919] bg-grey-8">
            <div className="grid grid-cols-2 gap-2.5 md:gap-4 lg:gap-5 lg:grid-cols-4">
                {featureStripItems.map((item) => {
                    const Icon = item.icon;

                    return (
                        <Link
                            key={item.title}
                            href={item.href}
                            className="relative block overflow-hidden py-5 px-3.5 rounded-xl border border-grey-15 bg-grey-10 lg:py-7.5 lg:px-4 xl:px-5 xl:py-6 shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition group"
                        >
                            <div className="absolute top-4 right-4">
                                <ArrowUpRightIcon className="w-5 h-5 group-hover:text-brand-75 text-grey-30" />
                            </div>

                            <div className="relative z-10 flex flex-col gap-y-3.5 items-center text-center lg:gap-y-4 xl:gap-y-5">
                                <div className="p-4 flex items-center justify-center h-15 w-15 rounded-full bg-[linear-gradient(40.65deg,#A685FA_0.85%,rgba(166,133,250,0)_34.8%),linear-gradient(219.04deg,#A685FA_-6.93%,rgba(166,133,250,0)_52.6%)]">
                                    <div className="p-2 flex items-center justify-center h-11 w-11 rounded-full bg-[linear-gradient(130.5deg,#A685FA_-3.27%,rgba(166,133,250,0)_30.09%),linear-gradient(305.31deg,#A685FA_-20.93%,rgba(166,133,250,0)_37.94%)]">
                                        <Icon className="w-6 h-6 text-brand-75" />
                                    </div>
                                </div>

                                <h3 className="text-sm font-semibold text-white lg:text-base">
                                    {item.title}
                                </h3>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
}
