"use client";

import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { MapPinIcon } from "@heroicons/react/24/solid";

type Option = { label: string; value: string };

type Props = {
    eyebrowSrc?: string;
    title?: string;
    subtitle?: string;

    // right card
    propertyOptions?: Option[];
    defaultPropertyValue?: string;

    // links
    termsHref?: string;
    privacyHref?: string;

    // submit
    buttonText?: string;
    onSubmit?: (payload: Record<string, string>) => void;
};

const DEFAULT_PROPERTY_OPTS: Option[] = [
    {
        label: "Seaside Serenity Villa, Malibu, California",
        value: "seaside-serenity-villa-malibu",
    },
    {
        label: "Metropolitan Haven, Downtown, Metropolis",
        value: "metropolitan-haven-downtown",
    },
    {
        label: "Rustic Retreat Cottage, Countryside",
        value: "rustic-retreat-cottage",
    },
];

export default function PropertyDetailsInquirySection({
    eyebrowSrc = "/Abstract Design3.svg",
    title = "Inquire About Seaside\nSerenity Villa",
    subtitle = `Interested in this property? Fill out the form below, and our real estate experts will get back to you with more details, including scheduling a viewing and answering any questions you may have.`,
    propertyOptions = DEFAULT_PROPERTY_OPTS,
    defaultPropertyValue = DEFAULT_PROPERTY_OPTS[0]?.value ?? "",
    termsHref = "/terms",
    privacyHref = "/privacy",
    buttonText = "Send Your Message",
    onSubmit,
}: Props) {
    const [form, setForm] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        property: defaultPropertyValue,
        message: "",
        agree: false,
    });

    const set = (k: keyof typeof form, v: any) => setForm((p) => ({ ...p, [k]: v }));

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit?.(Object.fromEntries(Object.entries(form).map(([k, v]) => [k, String(v)])));
    };

    return (
        <section className="px-4 py-10 md:px-6 xl:px-8 lg:py-16">
            <div className="w-full mx-auto lg:w-12/12 xl:w-11/12">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start lg:gap-10">
                    {/* LEFT COPY */}
                    <div className="lg:col-span-5">
                        <div className="w-11.25 lg:w-13.75 -ml-1.5 lg:-ml-2 xl:-ml-2.5 mb-3 xl:w-17">
                            <Image
                                src={eyebrowSrc}
                                alt="Section decoration"
                                width={60}
                                height={30}
                                className="object-contain w-full h-auto"
                                priority
                            />
                        </div>

                        <h2 className="text-[28px] font-semibold leading-tight text-white lg:text-[38px] xl:text-5xl whitespace-pre-line">
                            {title}
                        </h2>

                        <p className="max-w-xl mt-4 text-sm font-medium leading-relaxed text-grey-60 lg:text-base">
                            {subtitle}
                        </p>
                    </div>

                    {/* RIGHT FORM CARD */}
                    <div className="lg:col-span-7">
                        <form
                            onSubmit={submit}
                            className="border rounded-2xl border-grey-15 bg-grey-8"
                        >
                            <div className="p-5 sm:p-7.5 lg:p-10">
                                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
                                    <Field label="First Name">
                                        <Input
                                            placeholder="Enter First Name"
                                            value={form.firstName}
                                            onChange={(e) => set("firstName", e.target.value)}
                                        />
                                    </Field>

                                    <Field label="Last Name">
                                        <Input
                                            placeholder="Enter Last Name"
                                            value={form.lastName}
                                            onChange={(e) => set("lastName", e.target.value)}
                                        />
                                    </Field>

                                    <Field label="Email">
                                        <Input
                                            type="email"
                                            placeholder="Enter your Email"
                                            value={form.email}
                                            onChange={(e) => set("email", e.target.value)}
                                        />
                                    </Field>

                                    <Field label="Phone">
                                        <Input
                                            placeholder="Enter Phone Number"
                                            value={form.phone}
                                            onChange={(e) => set("phone", e.target.value)}
                                        />
                                    </Field>

                                    {/* Selected property - full width */}
                                    <div className="sm:col-span-2">
                                        <div className="mb-2 text-sm font-medium text-white">Selected Property</div>

                                        <div className="relative">
                                            <div className="flex items-center h-12 gap-3 px-4 border rounded-lg border-grey-15 bg-grey-10">
                                                <span className="text-sm font-medium truncate text-white/85">
                                                    {propertyOptions.find((o) => o.value === form.property)?.label ?? "Select"}
                                                </span>

                                                <span className="flex items-center justify-center w-8 h-8 ml-auto">
                                                    <MapPinIcon className="w-5 h-5 text-white/90" />
                                                </span>
                                            </div>

                                            <select
                                                value={form.property}
                                                onChange={(e) => set("property", e.target.value)}
                                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                            >
                                                {propertyOptions.map((o) => (
                                                    <option key={o.value} value={o.value}>
                                                        {o.label}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    {/* Message - full width */}
                                    <div className="sm:col-span-2">
                                        <div className="mb-2 text-sm font-medium text-white">Message</div>
                                        <textarea
                                            value={form.message}
                                            onChange={(e) => set("message", e.target.value)}
                                            placeholder="Enter your Message here..."
                                            className="w-full px-4 py-3 text-sm text-white border outline-none resize-none h-36 lg:h-44 rounded-xl border-grey-15 bg-grey-10 placeholder:text-grey-50 focus:border-brand-60/60"
                                        />
                                    </div>

                                    {/* bottom row */}
                                    <div className="flex flex-col gap-4 pt-2 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                                        <label className="flex items-center gap-3 text-sm text-white/85">
                                            <input
                                                type="checkbox"
                                                checked={form.agree}
                                                onChange={(e) => set("agree", e.target.checked)}
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
                </div>
            </div>
        </section>
    );
}

/* ---------- helpers ---------- */

function Field({
    label,
    children,
}: {
    label: string;
    children: React.ReactNode;
}) {
    return (
        <div>
            <div className="mb-2 text-sm font-medium text-white">{label}</div>
            {children}
        </div>
    );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
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
