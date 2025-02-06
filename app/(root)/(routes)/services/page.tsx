import Image from "next/image";
import Link from "next/link";
import PressureWashing from "@/public/assets/imgs/ex-cleaning.png";
import ChristmasLightingSplash from "@/public/assets/imgs/christmas-lights.jpg";
import CommercialServicePic from "@/public/assets/imgs/h-b-jn.jpg";

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
        <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-r from-blue-900 via-black to-blue-900 text-white">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-6xl px-6">
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
