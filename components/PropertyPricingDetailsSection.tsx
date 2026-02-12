// components/PropertyPricingDetailsSection.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import SectionHeader from "./SectionHeader";

export type PricingRow = {
    label: string;
    value: string;
    note?: string; // small pill text
};

export type PricingBlock = {
    title: string;
    learnMoreHref?: string;
    rows: PricingRow[];
    cols?: 1 | 2; // layout inside card
};

type Props = {
    eyebrowSrc?: string;
    title?: string;
    subtitle?: string;

    noteTitle?: string;
    noteText?: string;

    listingLabel?: string;
    listingPrice?: string;

    blocks?: PricingBlock[];
};

const DEFAULT_BLOCKS: PricingBlock[] = [
    {
        title: "Additional Fees",
        learnMoreHref: "/pricing",
        cols: 2,
        rows: [
            {
                label: "Property Transfer Tax",
                value: "$25,000",
                note: "Based on the sale price and local regulations",
            },
            {
                label: "Legal Fees",
                value: "$3,000",
                note: "Approximate cost for legal services, including title transfer",
            },
            { label: "Home Inspection", value: "$500", note: "Recommended for due diligence" },
            {
                label: "Property Insurance",
                value: "$1,200",
                note: "Annual cost for comprehensive property insurance",
            },
            {
                label: "Mortgage Fees",
                value: "Varies",
                note: "If applicable, consult with your lender for specific details",
            },
        ],
    },
    {
        title: "Monthly Costs",
        learnMoreHref: "/pricing",
        cols: 1,
        rows: [
            {
                label: "Property Taxes",
                value: "$1,250",
                note: "Approximate monthly property tax based on the sale price and local rates",
            },
            {
                label: "Homeowners' Association Fee",
                value: "$300",
                note: "Monthly fee for common area maintenance and security",
            },
        ],
    },
    {
        title: "Total Initial Costs",
        learnMoreHref: "/pricing",
        cols: 2,
        rows: [
            { label: "Listing Price", value: "$1,250,000" },
            {
                label: "Additional Fees",
                value: "$29,700",
                note: "Property transfer tax, legal fees, inspection, insurance",
            },
            { label: "Down Payment", value: "$250,000", note: "20%" },
            { label: "Mortgage Amount", value: "$1,000,000", note: "If applicable" },
        ],
    },
    {
        title: "Monthly Expenses",
        learnMoreHref: "/pricing",
        cols: 2,
        rows: [
            { label: "Property Taxes", value: "$1,250" },
            { label: "Homeowners' Association Fee", value: "$300" },
            { label: "Mortgage Payment", value: "Varies based on terms and interest rate", note: "If applicable" },
            { label: "Property Insurance", value: "$100", note: "Approximate monthly cost" },
        ],
    },
];

export default function PropertyPricingDetailsSection({
    eyebrowSrc = "/Abstract Design3.svg",
    title = "Comprehensive Pricing Details",
    subtitle = `At Estatein, transparency is key. We want you to have a clear understanding of all costs associated with your property investment. Below, we break down the pricing for Seaside Serenity Villa to help you make an informed decision`,
    noteTitle = "Note",
    noteText = "The figures provided above are estimates and may vary depending on the property, location, and individual circumstances.",
    listingLabel = "Listing Price",
    listingPrice = "$1,250,000",
    blocks = DEFAULT_BLOCKS,
}: Props) {
    return (
        <section className="px-4 py-10 md:px-6 xl:px-8 lg:py-16">
            <div className="w-full mx-auto lg:w-12/12 xl:w-11/12">
                <div className="flex flex-col gap-y-8 lg:gap-y-10">
                    <SectionHeader eyebrowSrc={eyebrowSrc} title={title} subtitle={subtitle} priority />

                    {/* Note bar */}
                    <div className="rounded-lg border border-grey-15 bg-grey-10 px-4 py-3.5">
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
                            <span className="text-sm font-semibold text-white">{noteTitle}</span>
                            <span className="text-sm font-medium text-grey-60">{noteText}</span>
                        </div>
                    </div>

                    {/* Body */}
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-7.5">
                        {/* Left price */}
                        <div className="lg:col-span-3">
                            <div className="text-sm font-medium text-grey-60">{listingLabel}</div>
                            <div className="mt-2 text-2xl font-semibold text-white">{listingPrice}</div>
                        </div>

                        {/* Right stack */}
                        <div className="lg:col-span-9">
                            <div className="flex flex-col gap-5 lg:gap-6">
                                {blocks.map((b) => (
                                    <PricingCard key={b.title} block={b} />
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* end */}
                </div>
            </div>
        </section>
    );
}

function PricingCard({ block }: { block: PricingBlock }) {
    const cols = block.cols ?? 2;

    return (
        <div className="border rounded-xl border-grey-15 bg-grey-8">
            {/* header row */}
            <div className="flex items-center justify-between gap-4 px-5 py-4 sm:px-6 lg:px-7.5 border-b border-grey-15">
                <h3 className="text-base font-semibold text-white lg:text-lg">{block.title}</h3>

                {block.learnMoreHref ? (
                    <Link
                        href={block.learnMoreHref}
                        className="inline-flex items-center justify-center px-4 text-xs font-medium text-white transition border rounded-lg h-9 border-grey-15 bg-grey-10 hover:bg-grey-15"
                    >
                        Learn More
                    </Link>
                ) : null}
            </div>

            {/* rows */}
            <div
                className={[
                    "grid",
                    cols === 1 ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2",
                ].join(" ")}
            >
                {block.rows.map((r, idx) => (
                    <PricingRowItem key={`${r.label}-${idx}`} row={r} cols={cols} idx={idx} />
                ))}
            </div>
        </div>
    );
}

function PricingRowItem({
    row,
    cols,
    idx,
}: {
    row: PricingRow;
    cols: 1 | 2;
    idx: number;
}) {
    // borders like the design:
    // - each item has top border
    // - when 2 cols: left col gets right divider
    // - last row(s) keep clean (borders handled per item)
    const isTwoCol = cols === 2;

    const rightDivider =
        isTwoCol && idx % 2 === 0 ? "sm:border-r sm:border-grey-15" : "";

    const topBorder = "border-t border-grey-15";

    return (
        <div className={["px-5 py-4 sm:px-6 lg:px-7.5", topBorder, rightDivider].join(" ")}>
            <div className="text-xs font-medium text-grey-60">{row.label}</div>

            <div className="flex items-center gap-2.5 mt-2">
                <div className="text-base font-semibold text-white">{row.value}</div>

                {row.note ? (
                    <span className="inline-flex px-3 py-1 text-xs font-medium border rounded-md border-grey-15 bg-grey-10 text-white/70">
                        {row.note}
                    </span>
                ) : null}
            </div>
        </div>
    );
}
