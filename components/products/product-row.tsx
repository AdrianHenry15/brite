"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import logoImage from "@/public/assets/icons/brite-logo.png";
import ProductItem from "./product-item";

import { Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import { Category, ProductType } from "@/lib/types";
import {
    CommercialServicesProducts,
    ExteriorCleaningProducts,
    HolidayLightingProducts,
} from "@/lib/Products";

interface ProductRowProps {
    category: Category;
    title: string;
    className?: string;
}

const products = [
    ...ExteriorCleaningProducts,
    ...HolidayLightingProducts,
    ...CommercialServicesProducts,
];

const ProductRow = ({ className = "", title, category }: ProductRowProps) => {
    const filteredProducts =
        category === "All Products"
            ? products
            : products.filter(
                  (product) => product.category.toLowerCase() === category.toLowerCase(),
              );

    if (!filteredProducts.length) return null;

    return (
        <section
            className={`${className} relative w-full overflow-hidden border-y border-border bg-background text-foreground`}
        >
            <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-4 py-16 text-center sm:px-6 md:py-20 lg:px-8">
                <Image
                    src={logoImage}
                    alt="Brite Exterior Cleaning logo"
                    width={88}
                    height={88}
                    className="mb-6"
                />

                <h2 className="max-w-4xl text-balance text-2xl font-semibold leading-tight text-foreground sm:text-3xl lg:text-4xl">
                    {title}
                </h2>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="pb-16"
            >
                <Swiper
                    modules={[Pagination, A11y]}
                    pagination={{ clickable: true }}
                    spaceBetween={16}
                    slidesPerView={1}
                    grabCursor
                    watchOverflow
                    className="!overflow-visible px-4 pb-12 sm:px-6 lg:px-8"
                    breakpoints={{
                        480: {
                            slidesPerView: 1.15,
                            spaceBetween: 16,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 18,
                        },
                        900: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1200: {
                            slidesPerView: 4,
                            spaceBetween: 22,
                        },
                        1536: {
                            slidesPerView: 4,
                            spaceBetween: 24,
                        },
                    }}
                >
                    {filteredProducts.map((product: ProductType) => (
                        <SwiperSlide key={product.title} className="!h-auto">
                            <div className="h-full">
                                <ProductItem product={product} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </motion.div>
        </section>
    );
};

export default ProductRow;
