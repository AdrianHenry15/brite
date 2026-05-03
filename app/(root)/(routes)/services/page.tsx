import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import PressureWashing from "@/public/assets/imgs/ex-cleaning.png";
import ChristmasLightingSplash from "@/public/assets/imgs/christmas-lights.jpg";
import CommercialServicePic from "@/public/assets/imgs/h-b-jn.jpg";

export const metadata: Metadata = {
    title: "Exterior Cleaning Services in Charlotte, NC",
    description:
        "Explore Brite Exterior Cleaning services in Charlotte, NC, including exterior cleaning, holiday lighting, and commercial property cleaning.",

    openGraph: {
        title: "Exterior Cleaning Services | Brite Exterior Cleaning",
        description:
            "Professional residential and commercial exterior cleaning services in Charlotte, NC.",
        url: "/services",
        siteName: "Brite Exterior Cleaning",
        type: "website",
        images: [
            {
                url: "/assets/imgs/brite-pic-1.jpg",
                width: 1200,
                height: 630,
                alt: "Brite Exterior Cleaning services in Charlotte, NC",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Exterior Cleaning Services | Brite Exterior Cleaning",
        description:
            "Explore Brite's exterior cleaning, holiday lighting, and commercial cleaning services in Charlotte, NC.",
        images: ["/assets/imgs/brite-pic-1.jpg"],
    },

    alternates: {
        canonical: "/services",
    },
};

const choices = [
    {
        title: "Exterior Cleaning",
        description: "Pressure washing, house washing, and surface cleaning.",
        image: PressureWashing,
        href: "/services/exterior-cleaning",
    },
    {
        title: "Holiday Lighting",
        description: "Professional seasonal lighting installation and maintenance.",
        image: ChristmasLightingSplash,
        href: "/services/holiday-lighting",
    },
    {
        title: "Commercial Services",
        description: "Exterior cleaning for commercial properties and facilities.",
        image: CommercialServicePic,
        href: "/services/commercial-services",
    },
];

export default function ServicesPage() {
    return (
        <main className="w-full bg-background text-foreground">
            <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-brite-navy via-background to-background px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
                <div className="mx-auto max-w-6xl text-center">
                    <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-primary">
                        Our Services
                    </p>

                    <h1 className="text-balance text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                        Professional exterior cleaning services for homes and businesses.
                    </h1>

                    <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                        Choose the service that fits your property needs and request a free estimate
                        from the Brite team.
                    </p>
                </div>

                <div className="mx-auto mt-12 grid w-full max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {choices.map((choice) => (
                        <Link
                            key={choice.title}
                            href={choice.href}
                            className="group overflow-hidden rounded-2xl border border-border bg-card text-card-foreground shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-xl hover:shadow-primary/10"
                        >
                            <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
                                <Image
                                    src={choice.image}
                                    alt={choice.title}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    placeholder="blur"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/20 to-transparent" />
                            </div>

                            <div className="p-5">
                                <h2 className="text-xl font-bold text-foreground transition-colors group-hover:text-primary">
                                    {choice.title}
                                </h2>

                                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                                    {choice.description}
                                </p>

                                <span className="mt-5 inline-flex text-sm font-bold text-primary">
                                    View service →
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    );
}
