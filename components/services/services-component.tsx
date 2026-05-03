import { ServiceType } from "@/lib/types";
import React from "react";
import ServiceCard from "./service-card";

interface IServicesComponentProps {
    title: string;
    services: ServiceType[];
}

const ServicesComponent = ({ title, services }: IServicesComponentProps) => {
    return (
        <section className="flex w-full flex-col gap-12 bg-gradient-to-b from-primary/90 via-primary/20 to-background px-6 py-24 sm:px-8 lg:px-12 lg:py-48">
            <header className="max-w-3xl">
                <h2 className="mt-3 text-4xl font-semibold tracking-tight text-foreground">
                    {title}
                </h2>
            </header>

            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                {services.map((service) => (
                    <ServiceCard key={service.id} service={service} />
                ))}
            </div>
        </section>
    );
};

export default ServicesComponent;
