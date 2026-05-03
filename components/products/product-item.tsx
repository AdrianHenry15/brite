import Image from "next/image";
import Link from "next/link";

import { ProductType } from "@/lib/types";
import Logo from "@/public/assets/icons/brite-logo-alt.png";

interface ProductItemProps {
    product: ProductType;
}

const ProductItem = ({ product }: ProductItemProps) => {
    const href = `/${product.category.toLowerCase().replace(/\s+/g, "-")}`;

    return (
        <Link
            href={href}
            className="group flex h-full min-h-[320px] w-full flex-col overflow-hidden rounded-2xl border border-border bg-card text-card-foreground shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-xl hover:shadow-primary/10"
        >
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover opacity-90 transition duration-300 group-hover:scale-105 group-hover:opacity-100"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />

                <div className="absolute bottom-3 left-3 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-background/90 p-1 shadow-sm backdrop-blur-sm sm:h-14 sm:w-14">
                    <Image
                        src={Logo}
                        alt="Brite logo"
                        width={40}
                        height={40}
                        className="object-contain"
                    />
                </div>
            </div>

            <div className="flex flex-1 flex-col p-4">
                <p className="text-base font-bold text-foreground transition-colors group-hover:text-primary">
                    {product.title}
                </p>

                <p className="mt-2 line-clamp-3 text-sm leading-6 text-muted-foreground">
                    {product.description}
                </p>
            </div>
        </Link>
    );
};

export default ProductItem;
