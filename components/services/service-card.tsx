import { ServiceType } from "@/lib/types";
import Image from "next/image";

interface Props {
    service: ServiceType;
}

const ServiceCard = ({ service }: Props) => {
    return (
        <div className="flex flex-col gap-4 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold tracking-tight">{service.title}</h3>
                <p className="text-sm text-neutral-600">{service.description}</p>
            </div>

            {(service.beforeImage || service.afterImage) && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.beforeImage && (
                        <div className="relative">
                            <span className="absolute top-2 left-2 z-10 rounded bg-black/70 px-2 py-1 text-xs text-white">
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
                        <div className="relative">
                            <span className="absolute top-2 left-2 z-10 rounded bg-black/70 px-2 py-1 text-xs text-white">
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
        </div>
    );
};

export default ServiceCard;
