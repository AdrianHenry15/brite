import { ServiceType } from "@/lib/types";
import React from "react";
import ServiceCard from "./service-card";

interface IServicesComponentProps {
    title: string;
    services: ServiceType[];
}

const ServicesComponent = ({ title, services }: IServicesComponentProps) => {
    return (
        <div className="flex flex-col gap-12 py-48 p-12 bg-gradient-to-b from-blue-500 via-blue-200 to-white w-full">
            <header className="max-w-3xl">
                <h2 className="mt-3 text-4xl font-semibold tracking-tight text-neutral-900">
                    {title}
                </h2>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {services.map((service) => (
                    <ServiceCard key={service.id} service={service} />
                ))}
            </div>
        </div>
    );
};

export default ServicesComponent;
