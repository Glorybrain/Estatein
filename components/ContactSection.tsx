"use client";

import { useMemo, useState } from "react";
import SectionHeader from "./SectionHeader";

type Option = { label: string; value: string };

type Props = {
    eyebrowSrc?: string;
    title?: string;
    subtitle?: string;

    inquiryOptions?: Option[];
    hearOptions?: Option[];

    termsHref?: string;
    privacyHref?: string;

    submitText?: string;
    onSubmit?: (data: {
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        inquiryType: string;
        hearAbout: string;
        message: string;
        agreed: boolean;
    }) => void;
};

const DEFAULT_INQUIRY: Option[] = [
    { label: "Buying a Property", value: "buying" },
    { label: "Selling a Property", value: "selling" },
    { label: "Partnership", value: "partnership" },
    { label: "General Inquiry", value: "general" },
];

const DEFAULT_HEAR: Option[] = [
    { label: "Google Search", value: "google" },
    { label: "Social Media", value: "social" },
    { label: "Referral", value: "referral" },
    { label: "Other", value: "other" },
];

function FieldLabel({ children }: { children: React.ReactNode }) {
    return <span className="text-sm font-medium text-white">{children}</span>;
}

function InputBase(props: React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input
            {...props}
            className={[
                "h-13 w-full rounded-md border border-grey-15 bg-grey-10 px-4 text-sm text-white outline-none",
                "placeholder:text-grey-50",
                "focus:border-brand-60/60 focus:ring-2 focus:ring-brand-60/15",
                props.className ?? "",
            ].join(" ")}
        />
    );
}

function SelectBase(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
    return (
        <div className="relative">
            <select
                {...props}
                className={[
                    "h-13 w-full appearance-none rounded-md border border-grey-15 bg-grey-10 px-4 pr-10 text-sm text-white outline-none",
                    "placeholder:text-grey-40",
                    "focus:border-brand-60/60 focus:ring-2 focus:ring-brand-60/15",
                    props.className ?? "",
                ].join(" ")}
            />
            {/* chevron */}
            <svg
                className="absolute w-5 h-5 -translate-y-1/2 pointer-events-none right-4 top-1/2 text-white/70"
                viewBox="0 0 20 20"
                fill="none"
            >
                <path
                    d="M5 7.5L10 12.5L15 7.5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </div>
    );
}

function TextareaBase(
    props: React.TextareaHTMLAttributes<HTMLTextAreaElement>
) {
    return (
        <textarea
            {...props}
            className={[
                "min-h-[160px] w-full resize-none rounded-md border border-grey-15 bg-grey-10 px-4 py-3 text-sm text-white outline-none",
                "placeholder:text-grey-50",
                "focus:border-brand-60/60 focus:ring-2 focus:ring-brand-60/15",
                props.className ?? "",
            ].join(" ")}
        />
    );
}

export default function ContactSection({
    eyebrowSrc = "/Abstract Design3.svg",
    title = "Let's Connect",
    subtitle = `We’re excited to connect with you and learn more about your real estate goals. Use the form below to get in touch with Estatein. Whether you're a prospective client, partner, or simply curious about our services, we're here to answer your questions and provide the assistance you need.`,
    inquiryOptions = DEFAULT_INQUIRY,
    hearOptions = DEFAULT_HEAR,
    termsHref = "/terms",
    privacyHref = "/privacy",
    submitText = "Send Your Message",
    onSubmit,
}: Props) {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        inquiryType: "",
        hearAbout: "",
        message: "",
        agreed: false,
    });

    const canSubmit = useMemo(() => {
        if (!form.firstName || !form.lastName || !form.email || !form.message)
            return false;
        if (!form.agreed) return false;
        return true;
    }, [form]);

    function update<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
        setForm((p) => ({ ...p, [key]: value }));
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!canSubmit) return;
        onSubmit?.(form);
    }

    return (
        <section className="px-4 py-10 lg:py-16 md:px-6 xl:px-8">
            <div className="w-full mx-auto lg:w-12/12 xl:w-11/12">
                <div className="flex flex-col gap-y-20 lg:gap-y-15 xl:gap-y-20">
                    <SectionHeader
                        eyebrowSrc={eyebrowSrc}
                        title={title}
                        subtitle={subtitle}
                        priority
                    />

                    <div className="border rounded-2xl border-grey-15">
                        <form onSubmit={handleSubmit} className="p-6 lg:p-10 xl:p-12">
                            {/* grid */}
                            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                                <div className="flex flex-col gap-y-2">
                                    <FieldLabel>First Name</FieldLabel>
                                    <InputBase
                                        placeholder="Enter First Name"
                                        value={form.firstName}
                                        onChange={(e) => update("firstName", e.target.value)}
                                        autoComplete="given-name"
                                    />
                                </div>

                                <div className="flex flex-col gap-y-2">
                                    <FieldLabel>Last Name</FieldLabel>
                                    <InputBase
                                        placeholder="Enter Last Name"
                                        value={form.lastName}
                                        onChange={(e) => update("lastName", e.target.value)}
                                        autoComplete="family-name"
                                    />
                                </div>

                                <div className="flex flex-col gap-y-2">
                                    <FieldLabel>Email</FieldLabel>
                                    <InputBase
                                        type="email"
                                        placeholder="Enter your Email"
                                        value={form.email}
                                        onChange={(e) => update("email", e.target.value)}
                                        autoComplete="email"
                                    />
                                </div>

                                <div className="flex flex-col gap-y-2">
                                    <FieldLabel>Phone</FieldLabel>
                                    <InputBase
                                        type="tel"
                                        placeholder="Enter Phone Number"
                                        value={form.phone}
                                        onChange={(e) => update("phone", e.target.value)}
                                        autoComplete="tel"
                                    />
                                </div>

                                <div className="flex flex-col gap-y-2">
                                    <FieldLabel>Inquiry Type</FieldLabel>
                                    <SelectBase
                                        value={form.inquiryType}
                                        onChange={(e) => update("inquiryType", e.target.value)}
                                    >
                                        <option value="" disabled className="bg-grey-8">
                                            Select Inquiry Type
                                        </option>
                                        {inquiryOptions.map((o) => (
                                            <option key={o.value} value={o.value} className="bg-grey-8">
                                                {o.label}
                                            </option>
                                        ))}
                                    </SelectBase>
                                </div>

                                <div className="flex flex-col gap-y-2">
                                    <FieldLabel>How Did You Hear About Us?</FieldLabel>
                                    <SelectBase
                                        value={form.hearAbout}
                                        onChange={(e) => update("hearAbout", e.target.value)}
                                    >
                                        <option value="" disabled className="bg-grey-8">
                                            Select
                                        </option>
                                        {hearOptions.map((o) => (
                                            <option key={o.value} value={o.value} className="bg-grey-8">
                                                {o.label}
                                            </option>
                                        ))}
                                    </SelectBase>
                                </div>

                                <div className="flex flex-col gap-y-2 lg:col-span-3">
                                    <FieldLabel>Message</FieldLabel>
                                    <TextareaBase
                                        placeholder="Enter your Message here..."
                                        value={form.message}
                                        onChange={(e) => update("message", e.target.value)}
                                    />
                                </div>
                            </div>

                            {/* bottom row */}
                            <div className="flex flex-col gap-6 mt-8 lg:flex-row lg:items-center lg:justify-between">
                                <label className="flex items-start gap-3 text-sm text-white/85">
                                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-md border border-grey-15 bg-grey-10/40">
                                        <input
                                            type="checkbox"
                                            checked={form.agreed}
                                            onChange={(e) => update("agreed", e.target.checked)}
                                            className="w-4 h-4 accent-brand-60"
                                        />
                                    </span>

                                    <span className="leading-relaxed">
                                        I agree with{" "}
                                        <a
                                            href={termsHref}
                                            className="underline decoration-white/40 underline-offset-4 hover:text-white"
                                        >
                                            Terms of Use
                                        </a>{" "}
                                        and{" "}
                                        <a
                                            href={privacyHref}
                                            className="underline decoration-white/40 underline-offset-4 hover:text-white"
                                        >
                                            Privacy Policy
                                        </a>
                                    </span>
                                </label>

                                <button
                                    type="submit"
                                    disabled={!canSubmit}
                                    className="inline-flex items-center justify-center h-12 text-sm font-medium text-white transition rounded-lg bg-brand-60 px-7 hover:bg-brand-60/90 disabled:cursor-not-allowed disabled:opacity-40"
                                >
                                    {submitText}
                                </button>
                            </div>
                        </form>
                    </div>
                    {/* end */}
                </div>
            </div>
        </section>
    );
}
