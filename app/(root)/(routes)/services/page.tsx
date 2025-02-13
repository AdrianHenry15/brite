import Image from "next/image";
import Link from "next/link";
import PressureWashing from "@/public/assets/imgs/ex-cleaning.png";
import ChristmasLightingSplash from "@/public/assets/imgs/christmas-lights.jpg";
import CommercialServicePic from "@/public/assets/imgs/h-b-jn.jpg";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Services | Brite Exterior Cleaning Services",
    description:
        "Discover the range of exterior cleaning services offered by Brite Exterior Cleaning, including pressure washing, window cleaning, and more. Serving Charlotte, NC, and surrounding areas.",
    openGraph: {
        title: "Our Services | Brite Exterior Cleaning Services",
        description:
            "Explore the variety of professional exterior cleaning services provided by Brite Exterior Cleaning. We specialize in pressure washing, window cleaning, and other residential and commercial services.",
        url: "https://briteclt.com/services",
    },
    twitter: {
        card: "summary_large_image",
        title: "Our Services | Brite Exterior Cleaning Services",
        description:
            "Learn about the exterior cleaning services offered by Brite Exterior Cleaning. From pressure washing to window cleaning, we have you covered!",
    },
};

const choices = [
    {
        title: "Exterior Cleaning",
        image: PressureWashing,
        link: "/services/exterior-cleaning",
    },
    {
        title: "Holiday Lighting",
        image: ChristmasLightingSplash,
        link: "/services/holiday-lighting",
    },
    {
        title: "Commercial Services",
        image: CommercialServicePic,
        link: "/services/commercial-services",
    },
];

export default function ServicesPage() {
    return (
        <div className="flex lg:h-screen w-screen items-center justify-center bg-gradient-to-b from-blue-950 via-blue-900 to-white text-white px-4 py-24">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl px-6">
                {choices.map((choice) => (
                    <Link
                        key={choice.title}
                        href={choice.link}
                        className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-blue-500/50 transition-shadow duration-300"
                    >
                        <div className="relative w-full h-80 rounded-xl overflow-hidden">
                            <Image
                                src={choice.image}
                                alt={choice.title}
                                layout="fill"
                                objectFit="cover"
                                className="group-hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-blue-900/70 flex items-center justify-center rounded-xl">
                            <h2 className="text-white text-3xl font-extrabold tracking-widest uppercase text-center group-hover:text-blue-400 transition-colors duration-300">
                                {choice.title}
                            </h2>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
