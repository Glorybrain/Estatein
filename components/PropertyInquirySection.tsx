"use client";

import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import {
    EnvelopeIcon,
    PhoneIcon,
    ChevronDownIcon,
} from "@heroicons/react/24/outline";

type Option = { label: string; value: string };

type SelectField = {
    id: string;
    label: string;
    placeholder: string;
    options: Option[];
};

type Props = {
    eyebrowSrc?: string;
    title?: string;
    subtitle?: string;

    // selects
    locationOptions?: Option[];
    propertyTypeOptions?: Option[];
    bathroomsOptions?: Option[];
    bedroomsOptions?: Option[];
    budgetOptions?: Option[];

    // links
    termsHref?: string;
    privacyHref?: string;

    // submit
    buttonText?: string;
    onSubmit?: (payload: Record<string, string>) => void;
};

const DEFAULT_OPTS = {
    location: [
        { label: "Metropolis", value: "metropolis" },
        { label: "Downtown", value: "downtown" },
        { label: "Uptown", value: "uptown" },
    ],
    type: [
        { label: "Apartment", value: "apartment" },
        { label: "House", value: "house" },
        { label: "Villa", value: "villa" },
    ],
    bathrooms: [
        { label: "1", value: "1" },
        { label: "2", value: "2" },
        { label: "3+", value: "3+" },
    ],
    bedrooms: [
        { label: "1", value: "1" },
        { label: "2", value: "2" },
        { label: "3+", value: "3+" },
    ],
    budget: [
        { label: "$0 - $100k", value: "0-100" },
        { label: "$100k - $300k", value: "100-300" },
        { label: "$300k+", value: "300+" },
    ],
};

export default function PropertyInquirySection({
    eyebrowSrc = "/Abstract Design3.svg",
    title = "Let's Make it Happen",
    subtitle = `Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic to find your perfect match. Don't wait; let’s embark on this exciting journey together.`,
    locationOptions = DEFAULT_OPTS.location,
    propertyTypeOptions = DEFAULT_OPTS.type,
    bathroomsOptions = DEFAULT_OPTS.bathrooms,
    bedroomsOptions = DEFAULT_OPTS.bedrooms,
    budgetOptions = DEFAULT_OPTS.budget,
    termsHref = "/terms",
    privacyHref = "/privacy",
    buttonText = "Send Your Message",
    onSubmit,
}: Props) {
    const [form, setForm] = React.useState<Record<string, string>>({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        location: "",
        propertyType: "",
        bathrooms: "",
        bedrooms: "",
        budget: "",
        contactMethod: "phone", // phone | email
        contactPhone: "",
        contactEmail: "",
        message: "",
        agree: "false",
    });

    const set = (k: string, v: string) => setForm((p) => ({ ...p, [k]: v }));

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit?.(form);
    };

    const contactIsPhone = form.contactMethod === "phone";

    return (
        <section className="px-4 py-10 lg:py-16 md:px-6 xl:px-8">
            <div className="w-full mx-auto lg:w-12/12 xl:w-11/12">
                {/* Header */}
                <div className="max-w-6xl">
                    <div className="w-11.25 lg:w-13.75 -ml-1.5 lg:-ml-2 xl:-ml-2.5 mb-2 xl:w-17">
                        <Image
                            src={eyebrowSrc}
                            alt="Section decoration"
                            width={60}
                            height={30}
                            className="object-contain w-full h-auto"
                            priority
                        />
                    </div>

                    <h2 className="text-[28px] font-semibold leading-tight text-white lg:text-[38px] xl:text-[48px]">
                        {title}
                    </h2>

                    <p className="max-w-5xl mt-3 text-sm leading-relaxed text-grey-60 lg:text-base">
                        {subtitle}
                    </p>
                </div>

                {/* Form Card */}
                <form
                    onSubmit={submit}
                    className="mt-8 lg:mt-12 rounded-2xl border border-grey-15 bg-grey-8 shadow-[0_0_0_10px_#191919]"
                >
                    <div className="p-5 sm:p-7.5 lg:p-10">
                        <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-12">
                            {/* First Name */}
                            <Field className="lg:col-span-3" label="First Name">
                                <Input
                                    placeholder="Enter First Name"
                                    value={form.firstName}
                                    onChange={(e) => set("firstName", e.target.value)}
                                />
                            </Field>

                            {/* Last Name */}
                            <Field className="lg:col-span-3" label="Last Name">
                                <Input
                                    placeholder="Enter Last Name"
                                    value={form.lastName}
                                    onChange={(e) => set("lastName", e.target.value)}
                                />
                            </Field>

                            {/* Email */}
                            <Field className="lg:col-span-3" label="Email">
                                <Input
                                    type="email"
                                    placeholder="Enter your Email"
                                    value={form.email}
                                    onChange={(e) => set("email", e.target.value)}
                                />
                            </Field>

                            {/* Phone */}
                            <Field className="lg:col-span-3" label="Phone">
                                <Input
                                    placeholder="Enter Phone Number"
                                    value={form.phone}
                                    onChange={(e) => set("phone", e.target.value)}
                                />
                            </Field>

                            {/* Preferred Location */}
                            <Field className="lg:col-span-3" label="Preferred Location">
                                <Select
                                    value={form.location}
                                    onChange={(v) => set("location", v)}
                                    placeholder="Select Location"
                                    options={locationOptions}
                                />
                            </Field>

                            {/* Property Type */}
                            <Field className="lg:col-span-3" label="Property Type">
                                <Select
                                    value={form.propertyType}
                                    onChange={(v) => set("propertyType", v)}
                                    placeholder="Select Property Type"
                                    options={propertyTypeOptions}
                                />
                            </Field>

                            {/* No. of Bathrooms */}
                            <Field className="lg:col-span-3" label="No. of Bathrooms">
                                <Select
                                    value={form.bathrooms}
                                    onChange={(v) => set("bathrooms", v)}
                                    placeholder="Select no. of Bathrooms"
                                    options={bathroomsOptions}
                                />
                            </Field>

                            {/* No. of Bedrooms */}
                            <Field className="lg:col-span-3" label="No. of Bedrooms">
                                <Select
                                    value={form.bedrooms}
                                    onChange={(v) => set("bedrooms", v)}
                                    placeholder="Select no. of Bedrooms"
                                    options={bedroomsOptions}
                                />
                            </Field>

                            {/* Budget (wide) */}
                            <Field className="lg:col-span-6" label="Budget">
                                <Select
                                    value={form.budget}
                                    onChange={(v) => set("budget", v)}
                                    placeholder="Select Budget"
                                    options={budgetOptions}
                                />
                            </Field>

                            {/* Preferred Contact Method */}
                            <div className="lg:col-span-6">
                                <div className="mb-2 text-sm font-medium text-white">
                                    Preferred Contact Method
                                </div>

                                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                                    <ContactChoice
                                        active={contactIsPhone}
                                        icon={<PhoneIcon className="w-5 h-5" />}
                                        placeholder="Enter Your Number"
                                        value={form.contactPhone}
                                        onValueChange={(v) => set("contactPhone", v)}
                                        onActivate={() => set("contactMethod", "phone")}
                                        type="tel"
                                    />

                                    <ContactChoice
                                        active={!contactIsPhone}
                                        icon={<EnvelopeIcon className="w-5 h-5" />}
                                        placeholder="Enter Your Email"
                                        value={form.contactEmail}
                                        onValueChange={(v) => set("contactEmail", v)}
                                        onActivate={() => set("contactMethod", "email")}
                                        type="email"
                                    />
                                </div>
                            </div>

                            {/* Message */}
                            <Field className="lg:col-span-12" label="Message">
                                <textarea
                                    value={form.message}
                                    onChange={(e) => set("message", e.target.value)}
                                    placeholder="Enter your Message here..."
                                    className="w-full px-4 py-3 text-sm text-white border outline-none resize-none h-36 lg:h-44 rounded-xl border-grey-15 bg-grey-10 placeholder:text-grey-50 focus:border-brand-60/60"
                                />
                            </Field>

                            {/* Bottom row */}
                            <div className="flex flex-col gap-4 pt-2 lg:col-span-12 sm:flex-row sm:items-center sm:justify-between">
                                <label className="flex items-center gap-3 text-sm text-white/85">
                                    <input
                                        type="checkbox"
                                        checked={form.agree === "true"}
                                        onChange={(e) => set("agree", e.target.checked ? "true" : "false")}
                                        className="w-4 h-4 border rounded border-grey-15 bg-grey-10 accent-brand-60"
                                    />
                                    <span>
                                        I agree with{" "}
                                        <Link href={termsHref} className="underline underline-offset-2">
                                            Terms of Use
                                        </Link>{" "}
                                        and{" "}
                                        <Link href={privacyHref} className="underline underline-offset-2">
                                            Privacy Policy
                                        </Link>
                                    </span>
                                </label>

                                <button
                                    type="submit"
                                    className="inline-flex items-center justify-center h-12 px-6 rounded-lg bg-brand-60 text-sm font-medium text-white transition hover:opacity-95 sm:min-w-[200px]"
                                >
                                    {buttonText}
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
                {/* end */}
            </div>
        </section>
    );
}

/* ---------- small UI helpers (same styling across project) ---------- */

function Field({
    label,
    className,
    children,
}: {
    label: string;
    className?: string;
    children: React.ReactNode;
}) {
    return (
        <div className={className}>
            <div className="mb-2 text-sm font-medium text-white">{label}</div>
            {children}
        </div>
    );
}

function Input(
    props: React.InputHTMLAttributes<HTMLInputElement> & { className?: string }
) {
    return (
        <input
            {...props}
            className={[
                "w-full h-12 rounded-lg border border-grey-15 bg-grey-10 px-4 text-sm text-white outline-none placeholder:text-grey-50 focus:border-brand-60/60",
                props.className ?? "",
            ].join(" ")}
        />
    );
}

function Select({
    value,
    onChange,
    placeholder,
    options,
}: {
    value: string;
    onChange: (v: string) => void;
    placeholder: string;
    options: Option[];
}) {
    const selected = options.find((o) => o.value === value)?.label ?? "";
    return (
        <div className="relative">
            <div className="flex items-center justify-between h-12 gap-3 px-4 border rounded-lg border-grey-15 bg-grey-10">
                <span className="text-sm font-medium truncate text-white/70">
                    {selected || placeholder}
                </span>
                <ChevronDownIcon className="w-4 h-4 text-grey-50" />
            </div>

            <select
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            >
                <option value="">{placeholder}</option>
                {options.map((o) => (
                    <option key={o.value} value={o.value}>
                        {o.label}
                    </option>
                ))}
            </select>
        </div>
    );
}

function ContactChoice({
    active,
    icon,
    placeholder,
    value,
    onValueChange,
    onActivate,
    type = "text",
}: {
    active: boolean;
    icon: React.ReactNode;
    placeholder: string;
    value: string;
    onValueChange: (v: string) => void;
    onActivate: () => void;
    type?: React.HTMLInputTypeAttribute;
}) {
    return (
        <div
            className={[
                "w-full rounded-lg border px-4 py-3 transition flex items-center gap-3 bg-grey-10",
                active ? "border-brand-60/60" : "border-grey-15 hover:bg-grey-15/40",
            ].join(" ")}
            onMouseDown={onActivate} // activates even before focus
        >
            <span className="text-grey-50 shrink-0">{icon}</span>

            <input
                type={type}
                value={value}
                onChange={(e) => onValueChange(e.target.value)}
                onFocus={onActivate} // ✅ clicking the input toggles it
                placeholder={placeholder}
                className="w-full text-sm text-white bg-transparent outline-none placeholder:text-grey-50"
            />

            {/* dot inside input */}
            <span
                className={[
                    "ml-2 h-3 w-3 rounded-full border-2 shrink-0",
                    active ? "border-brand-60 bg-brand-60" : "border-brand-60 bg-transparent",
                ].join(" ")}
            />
        </div>
    );
}

