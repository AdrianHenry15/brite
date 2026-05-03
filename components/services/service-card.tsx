import { ServiceType } from "@/lib/types";
import Image from "next/image";

interface Props {
    service: ServiceType;
}

const ServiceCard = ({ service }: Props) => {
    return (
        <article className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 text-card-foreground shadow-sm">
            <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold tracking-tight text-card-foreground">
                    {service.title}
                </h3>

                <p className="text-sm leading-6 text-muted-foreground">{service.description}</p>
            </div>

            {(service.beforeImage || service.afterImage) && (
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {service.beforeImage && (
                        <div className="relative overflow-hidden rounded-xl">
                            <span className="absolute left-2 top-2 z-10 rounded-md bg-foreground/80 px-2 py-1 text-xs font-medium text-background">
                                Before
                            </span>

                            <Image
                                src={service.beforeImage}
                                alt={`${service.title} before`}
                                className="rounded-xl object-cover"
                            />
                        </div>
                    )}

                    {service.afterImage && (
                        <div className="relative overflow-hidden rounded-xl">
                            <span className="absolute left-2 top-2 z-10 rounded-md bg-foreground/80 px-2 py-1 text-xs font-medium text-background">
                                After
                            </span>

                            <Image
                                src={service.afterImage}
                                alt={`${service.title} after`}
                                className="rounded-xl object-cover"
                            />
                        </div>
                    )}
                </div>
            )}
        </article>
    );
};

export default ServiceCard;
