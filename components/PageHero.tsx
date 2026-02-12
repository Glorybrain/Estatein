"use client";

type Props = {
    title: string;
    subtitle?: string;

    eyebrowSrc?: string;

    /** Background */
    bgImageSrc?: string; // optional background image
    bgImageAlt?: string;

    /** Layout */
    className?: string;
    contentClassName?: string;
};

export default function PageHero({
    title,
    subtitle,
    className = "",
    contentClassName = "",
}: Props) {
    return (
        <section
            className={`relative overflow-hidden bg-[linear-gradient(95.93deg,#262626_-26.82%,rgba(38,38,38,0)_40.46%)] px-4 pt-12 pb-10 lg:py-16 lg:pt-20 border border-grey-15 md:px-6 xl:px-8 ${className}`}
        >
            <div className="relative w-full mx-auto lg:w-12/12 xl:w-11/12">
                <div className={`w-full ${contentClassName}`}>
                    <h1 className="text-[34px] font-semibold leading-[1.15] text-white lg:text-[48px] xl:text-[56px]">
                        {title}
                    </h1>

                    {subtitle ? (
                        <p className="max-w-6xl mt-4 text-sm font-medium leading-relaxed text-grey-60 lg:text-base">
                            {subtitle}
                        </p>
                    ) : null}
                </div>
            </div>
        </section>
    );
}
