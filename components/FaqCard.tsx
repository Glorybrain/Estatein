"use client";

import Link from "next/link";

export type FaqItem = {
    id: string;
    question: string;
    answerPreview: string;
    href?: string; // where "Read More" goes
};

type Props = {
    item: FaqItem;
    buttonText?: string;
};

export default function FaqCard({ item, buttonText = "Read More" }: Props) {
    return (
        <article className="rounded-2xl border border-grey-15 bg-gradient-to-b from-grey-8/70 to-grey-8/30 p-6 lg:p-7.5 xl:p-10 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
            <div className="space-y-3">
                <h4 className="text-lg font-semibold leading-snug text-white lg:text-xl">
                    {item.question}
                </h4>

                <p className="text-sm leading-relaxed text-grey-60 lg:text-[.96rem]">
                    {item.answerPreview}
                </p>
            </div>

            <div className="mt-4">
                <Link
                    href={item.href ?? "/"}
                    className="inline-flex items-center justify-center px-5 py-3 text-sm font-medium text-white transition border rounded-lg border-grey-15 bg-grey-10 hover:bg-grey-15"
                >
                    {buttonText}
                </Link>
            </div>
        </article>
    );
}
