import Image from "next/image";
import Link from "next/link";

type SectionHeaderProps = {
    eyebrowSrc?: string;
    title: string;
    subtitle?: string;
    ctaHref?: string;
    ctaText?: string;
    priority?: boolean;
};

export default function SectionHeader({
    eyebrowSrc = "/Abstract Design3.svg",
    title,
    subtitle,
    ctaHref,
    ctaText,
    priority = false,
}: SectionHeaderProps) {
    return (
        <div>
            {/* Eyebrow Image */}
            {eyebrowSrc && (
                <div className="w-11.25 lg:w-13.75 -ml-1.5 lg:-ml-2 xl:-ml-2.5 mb-1 xl:w-17">
                    <Image
                        src={eyebrowSrc}
                        alt="Section decoration"
                        width={60}
                        height={30}
                        className="object-contain w-full h-auto"
                        priority={priority}
                    />
                </div>
            )}

            {/* Header Content */}
            <header className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-5xl space-y-3">
                    <h2 className="font-semibold text-white text-[28px] lg:text-[38px] xl:text-[48px] leading-tight">
                        {title}
                    </h2>

                    {subtitle && (
                        <p className="text-sm leading-relaxed lg:text-base text-grey-60">
                            {subtitle}
                        </p>
                    )}
                </div>

                {ctaHref && ctaText && (
                    <div className="hidden lg:inline-flex lg:shrink-0">
                        <Link
                            href={ctaHref}
                            className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg border border-grey-15 bg-grey-10 text-sm font-medium text-white transition hover:bg-grey-15"
                        >
                            {ctaText}
                        </Link>
                    </div>
                )}
            </header>
        </div>
    );
}
