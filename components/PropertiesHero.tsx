"use client";

import Image from "next/image";
import { MagnifyingGlassIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import * as React from "react";
import {
    MapPinIcon,
    HomeModernIcon,
    CurrencyDollarIcon,
    CubeIcon,
    CalendarDaysIcon,
} from "@heroicons/react/24/outline";

type Option = { label: string; value: string };

type Filter = {
    id: string;
    label: string;
    icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    options: Option[];
};

type Props = {
    eyebrowSrc?: string;
    title?: string;
    subtitle?: string;

    // background
    bgPatternSrc?: string;

    // search
    searchPlaceholder?: string;
    buttonText?: string;

    // filters
    filters?: Filter[];

    // hook into your own logic
    onSearch?: (payload: { query: string; values: Record<string, string> }) => void;
};

const DEFAULT_FILTERS: Filter[] = [
    {
        id: "location",
        label: "Location",
        icon: MapPinIcon,
        options: [
            { label: "Malibu, California", value: "malibu-california" },
            { label: "New York, USA", value: "new-york-usa" },
            { label: "Colorado, USA", value: "colorado-usa" },
            { label: "Dubai, UAE", value: "dubai-uae" },
            { label: "Geneva, Switzerland", value: "geneva-switzerland" },
        ],
    },
    {
        id: "type",
        label: "Property Type",
        icon: HomeModernIcon,
        options: [
            { label: "Apartment", value: "apartment" },
            { label: "House", value: "house" },
            { label: "Villa", value: "villa" },
        ],
    },
    {
        id: "price",
        label: "Pricing Range",
        icon: CurrencyDollarIcon,
        options: [
            { label: "$0 - $100k", value: "0-100" },
            { label: "$100k - $300k", value: "100-300" },
            { label: "$300k+", value: "300+" },
        ],
    },
    {
        id: "size",
        label: "Property Size",
        icon: CubeIcon,
        options: [
            { label: "0 - 1,000 sqft", value: "0-1000" },
            { label: "1,000 - 2,500 sqft", value: "1000-2500" },
            { label: "2,500+ sqft", value: "2500+" },
        ],
    },
    {
        id: "year",
        label: "Build Year",
        icon: CalendarDaysIcon,
        options: [
            { label: "2020 - 2026", value: "2020-2026" },
            { label: "2010 - 2019", value: "2010-2019" },
            { label: "2000 - 2009", value: "2000-2009" },
        ],
    },
];

export default function PropertiesHero({
    eyebrowSrc = "/Abstract Design3.svg",
    title = "Find Your Dream Property",
    subtitle = "Welcome to Estatein, where your dream property awaits in every corner of our beautiful world. Explore our curated selection of properties, each offering a unique story and a chance to redefine your life. With categories to suit every dreamer, your journey",
    bgPatternSrc = "/Abstract Design.png",

    searchPlaceholder = "Search For A Property",
    buttonText = "Find Property",

    filters,
    onSearch,
}: Props) {
    const list = filters?.length ? filters : DEFAULT_FILTERS;

    // lightweight internal state (optional)
    const [query, setQuery] = React.useState("");
    const [values, setValues] = React.useState<Record<string, string>>(
        Object.fromEntries(list.map((f) => [f.id, ""]))
    );

    // keep values in sync if filters change
    React.useEffect(() => {
        setValues(Object.fromEntries(list.map((f) => [f.id, ""])));
    }, [list]);

    const submit = () => {
        onSearch?.({ query, values });
    };

    return (
        <section className="relative px-4 lg:mb-20 bg-[linear-gradient(95.93deg,#262626_-26.82%,rgba(38,38,38,0)_40.46%)] pt-10 pb-2 md:px-6 xl:px-8 lg:pt-16 lg:pb-24">
            <div className="relative w-full mx-auto lg:w-12/12 xl:w-11/12">
                {/* Header */}
                <div className="max-w-6xl">
                    <h1 className="text-[34px] font-semibold leading-[1.15] text-white lg:text-[38px] xl:text-5xl">
                        {title}
                    </h1>

                    <p className="mt-3 text-sm leading-relaxed text-grey-60 lg:text-base">
                        {subtitle}
                    </p>
                </div>

                <div className="left-0 right-0 mt-8 lg:mt-15 lg:absolute">
                    <div className="">
                        <div className="max-w-4xl mx-auto">
                            <div className="flex items-center justify-between gap-4 rounded-xl lg:rounded-none lg:rounded-tl-xl lg:rounded-tr-xl border border-grey-15 bg-grey-8 px-4 py-3 lg:shadow-[0_0_0_10px_#191919] shadow-[0_0_0_4px_#191919] sm:px-5">
                                <input
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    placeholder="Search For A Property"
                                    className="w-full h-12 text-sm text-white bg-transparent outline-none placeholder:text-grey-50"
                                />

                                <button
                                    type="button"
                                    onClick={submit}
                                    className="inline-flex items-center justify-center h-12 gap-2 px-4 text-sm font-medium text-white transition shrink-0 rounded-xl bg-brand-60 hover:opacity-95"
                                >
                                    <MagnifyingGlassIcon className="w-5 h-5" />
                                    <span className="hidden md:inline-flex">
                                        Find Property
                                    </span>
                                </button>
                            </div>
                        </div>

                        {/* FILTER BAR */}
                        <div className="rounded-xl mt-4 lg:mt-0 bg-grey-10 p-2.5">
                            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
                                {list.map((f) => (
                                    <FilterPill
                                        key={f.id}
                                        label={f.label}
                                        icon={f.icon}
                                        value={values[f.id] ?? ""}
                                        options={f.options}
                                        onChange={(v) =>
                                            setValues((cur) => ({
                                                ...cur,
                                                [f.id]: v,
                                            }))
                                        }
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function FilterPill({
    label,
    icon: Icon,
    value,
    options,
    onChange,
}: {
    label: string;
    icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    value: string;
    options: { label: string; value: string }[];
    onChange: (v: string) => void;
}) {
    const selectedLabel =
        options.find((o) => o.value === value)?.label ?? "";

    return (
        <div className="relative">
            <div className="flex items-center justify-between h-12 gap-3 px-4 border rounded-xl border-grey-15 bg-grey-8">
                <div className="flex items-center gap-2.5 min-w-0">
                    {Icon ? <Icon className="w-4 h-4 text-grey-50 shrink-0" /> : null}
                    <span className="text-xs font-medium truncate text-white/70">
                        {selectedLabel || label}
                    </span>
                </div>

                <ChevronDownIcon className="w-4 h-4 text-grey-50 shrink-0" />
            </div>

            {/* keep native select for functionality but make it invisible */}
            <select
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            >
                <option value="">{label}</option>
                {options.map((o) => (
                    <option key={o.value} value={o.value}>
                        {o.label}
                    </option>
                ))}
            </select>
        </div>
    );
}

