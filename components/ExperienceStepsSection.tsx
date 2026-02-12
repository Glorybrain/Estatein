"use client";

import SectionHeader from "./SectionHeader";

type StepItem = {
    step: string; // "Step 01"
    title: string;
    description: string;
};

type Props = {
    eyebrowSrc?: string;
    title?: string;
    subtitle?: string;
    steps?: StepItem[];
};

const FALLBACK_STEPS: StepItem[] = [
    {
        step: "Step 01",
        title: "Discover a World of Possibilities",
        description:
            "Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location, type, size, and budget.",
    },
    {
        step: "Step 02",
        title: "Narrowing Down Your Choices",
        description:
            "Once you've found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision.",
    },
    {
        step: "Step 03",
        title: "Personalized Guidance",
        description:
            "Have questions about a property or need more information? Our dedicated team of real estate experts is just a call or message away.",
    },
    {
        step: "Step 04",
        title: "See It for Yourself",
        description:
            "Arrange viewings of the properties you're interested in. We'll coordinate with the property owners and accompany you to ensure you get a firsthand look at your potential new home.",
    },
    {
        step: "Step 05",
        title: "Making Informed Decisions",
        description:
            "Before making an offer, our team will assist you with due diligence, including property inspections, legal checks, and market analysis. We want you to be fully informed and confident in your choice.",
    },
    {
        step: "Step 06",
        title: "Getting the Best Deal",
        description:
            "We'll help you negotiate the best terms and prepare your offer. Our goal is to secure the property at the right price and on favorable terms.",
    },
];

export default function ExperienceStepsSection({
    eyebrowSrc = "/Abstract Design3.svg",
    title = "Navigating the Estatein Experience",
    subtitle = "At Estatein, we've designed a straightforward process to help you find and purchase your dream property with ease. Here's a step-by-step guide to how it all works.",
    steps = FALLBACK_STEPS,
}: Props) {
    return (
        <section className="px-4 py-10 lg:py-16 md:px-6 xl:px-8">
            <div className="w-full mx-auto lg:w-12/12 xl:w-11/12">
                <div className="flex flex-col gap-y-10 lg:gap-y-15 xl:gap-y-20">
                    <SectionHeader
                        eyebrowSrc={eyebrowSrc}
                        title={title}
                        subtitle={subtitle}
                        priority
                    />

                    {/* Steps grid */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5 xl:gap-7.5">
                        {steps.slice(0, 6).map((s) => (
                            <article
                                key={s.step}
                                className="relative flex flex-col"
                            >
                                <div className="p-3 text-sm font-medium text-white border-l md:p-4 border-brand-60">
                                    {s.step}
                                </div>
                                <div className="xl:p-6 p-3 pl-5 lg:p-4 lg:pl-8 xl:pl-10 border h-full rounded-tr-xl border-grey-15 rounded-br-xl rounded-bl-xl
  border-l-brand-60
  bg-[linear-gradient(120.79deg,#703BF7_-49.01%,rgba(112,59,247,0)_13.65%)]
  [background-origin:border-box]
  [background-clip:padding-box,border-box]
  bg-[linear-gradient(#262626,#262626),linear-gradient(117.89deg,#703BF7_0%,rgba(112,59,247,0)_24%)]
">
                                    <div className="py-6">
                                        <h4 className="text-lg font-semibold text-white lg:text-xl">
                                            {s.title}
                                        </h4>

                                        <p className="mt-3 text-sm font-medium leading-relaxed text-grey-60">
                                            {s.description}
                                        </p>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                    {/* end */}
                </div>
            </div>
        </section>
    );
}
