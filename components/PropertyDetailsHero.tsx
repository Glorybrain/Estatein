import { MapPinIcon } from "@heroicons/react/24/outline";
import PropertyGallery from "./PropertyGallery";


export default function PropertyDetailsHero({
    title,
    location,
    price,
    images,
}: {
    title: string;
    location: string;
    price: string;
    images: string[];
}) {
    return (
        <section className="space-y-6 lg:space-y-8">
            {/* Top row */}
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="flex flex-col gap-3">
                    <div className="flex flex-wrap items-center gap-3">
                        <h1 className="text-2xl font-semibold text-white lg:text-2xl xl:text-3xl">
                            {title}
                        </h1>

                        <div className="inline-flex items-center gap-2 px-3 py-2 border rounded-lg border-grey-15 bg-grey-8">
                            <MapPinIcon className="w-5 h-5 text-white" />
                            <span className="text-sm font-medium text-white/85">{location}</span>
                        </div>
                    </div>
                </div>

                {/* Price */}
                <div className="text-left lg:text-right">
                    <div className="text-xs font-medium text-grey-60">Price</div>
                    <div className="mt-1 text-lg font-semibold text-white lg:text-xl xl:text-2xl">
                        {price}
                    </div>
                </div>
            </div>

            {/* Gallery Card */}
            <div className="rounded-xl border border-grey-15 bg-grey-10 p-4 sm:p-6 lg:p-7.5 xl:p-10">
                <PropertyGallery images={images} />
            </div>
        </section>
    );
}
