"use client";

import * as React from "react";
import PropertiesHero from "@/components/PropertiesHero";
import PropertyCategoriesSection, {
    type PropertyCategoryCard,
} from "@/components/PropertyCategoriesSection";
import { PROPERTIES } from "@/data/properties";

type Payload = { query: string; values: Record<string, string> };

function normalize(s: string) {
    return s.toLowerCase().trim();
}

function slugifyLocation(s: string) {
    return normalize(s).replace(/,\s*/g, "-").replace(/\s+/g, "-");
}

function parsePrice(price: string) {
    return Number(price.replace(/[^0-9]/g, "")) || 0;
}

function matchPriceRange(priceNumber: number, range: string) {
    if (!range) return true;

    if (range.endsWith("+")) {
        const minK = Number(range.replace("+", ""));
        return priceNumber >= minK * 1000;
    }

    const [minK, maxK] = range.split("-").map(Number);
    if (!Number.isFinite(minK) || !Number.isFinite(maxK)) return true;

    return priceNumber >= minK * 1000 && priceNumber <= maxK * 1000;
}

function badgeForProperty(id: string) {
    if (id.includes("seaside")) return "Coastal Escapes - Where Waves Beckon";
    if (id.includes("metropolitan")) return "Urban Oasis - Life in the Heart of the City";
    if (id.includes("rustic")) return "Countryside Charm - Escape to Nature’s Embrace";
    if (id.includes("penthouse")) return "Skyline Living - Elevated Luxury Above the City";
    if (id.includes("mansion")) return "Elite Estates - Space, Prestige & Privacy";
    return "Featured Collection - Find Your Perfect Home";
}

export default function PropertiesPageClient() {
    const [payload, setPayload] = React.useState<Payload>({
        query: "",
        values: { location: "", type: "", price: "", size: "", year: "" },
    });

    const filtered = React.useMemo(() => {
        const q = normalize(payload.query);
        const v = payload.values;

        return PROPERTIES.filter((p) => {
            const haystack = normalize(`${p.title} ${p.location} ${p.description ?? ""}`);
            const matchesQuery = !q || haystack.includes(q);

            const matchesLocation =
                !v.location || slugifyLocation(p.location) === v.location;

            const matchesPrice = matchPriceRange(parsePrice(p.price), v.price);

            return matchesQuery && matchesLocation && matchesPrice;
        });
    }, [payload]);

    const cards: PropertyCategoryCard[] = React.useMemo(
        () =>
            filtered.map((p) => ({
                id: p.id,
                imageSrc: p.imageSrc,
                imageAlt: p.imageAlt ?? p.title,
                badge: badgeForProperty(p.id),
                title: p.title,
                description: p.description ?? "",
                price: p.price,
                location: p.location,
                href: `/properties/${p.id}`,
                ctaText: "View Property Details",
            })),
        [filtered]
    );

    return (
        <>
            <PropertiesHero onSearch={setPayload} />

            {/* Debug line (leave it for now so you can SEE if it changes) */}
            {/* <div className="px-4 pt-20 md:px-6 xl:px-8">
                <div className="w-full mx-auto lg:w-12/12 xl:w-11/12">
                    <p className="text-sm text-grey-60">
                        Results: <span className="font-medium text-white">{cards.length}</span>
                    </p>
                </div>
            </div> */}

            {/* ✅ THIS is what makes filter reflect on the page */}
            <PropertyCategoriesSection items={cards} />
        </>
    );
}
