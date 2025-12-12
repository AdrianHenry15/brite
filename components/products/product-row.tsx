"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import logoImage from "@/public/assets/icons/brite-logo.png";
import ProductItem from "./product-item";

// Swiper
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Category, ProductType } from "@/lib/types";
import {
    CommercialServicesProducts,
    ExteriorCleaningProducts,
    HolidayLightingProducts,
} from "@/lib/Products";
import { TailwindProps } from "@react-email/components";

interface IProductRowProps {
    category: Category;
    title: string;
    className?: string;
    gradient?: "blue" | "white";
}

const ProductRow = (props: IProductRowProps) => {
    // Constants
    const products = [
        ...ExteriorCleaningProducts,
        ...HolidayLightingProducts,
        ...CommercialServicesProducts,
    ];
    const BlueGradient = "bg-gradient-to-b from-blue-600 via-blue-200 to-white";
    const WhiteGradient = "bg-gradient-to-b from-white via-blue-200 to-blue-600";
    // Props
    const { className, title, category, gradient } = props;

    // Variants for animation
    const itemVariants = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0 },
    };

    // Function to filter products based on category
    const filteredProducts =
        category === "All Products"
            ? products
            : products.filter(
                  (product) => product.category.toLowerCase() === category.toLowerCase(),
              );

    const getGradient = (gradient?: "blue" | "white") => {
        if (gradient === "blue") {
            return BlueGradient;
        } else if (gradient === "white") {
            return WhiteGradient;
        } else {
            return "";
        }
    };
    return (
        <div
            className={`${className} ${getGradient(gradient)} bg-blue-600 w-full text-white relative overflow-hidden`}
        >
            <div className="flex flex-col justify-center items-center w-full py-24 md:py-48">
                {/* Description Title for specific category */}
                <h5 className="text-4xl flex items-center justify-center text-black w-full px-10 text-center font-semibold md:px-[300px]  ">
                    {title}
                </h5>
                {/* Brite Logo */}
                <div className="flex items-center justify-center w-full">
                    <div className="flex-shrink-0 p-4">
                        <Image src={logoImage} alt={`logo`} width={100} height={100} />
                    </div>
                </div>
            </div>
            {/* Products */}
            <motion.div
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.01 }} // Trigger when 10% of the component is visible
                transition={{ duration: 0.8, delay: 0.1 }} // Adjust delay for staggered effect
            >
                <Swiper
                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                    className="flex items-center overflow-x-hidden overflow-y-hidden px-6"
                    breakpoints={{
                        // For mobile screens smaller than 576px (very small mobile)
                        320: {
                            slidesPerView: 1,
                        },
                        // For mobile screens between 576px and 639px
                        576: {
                            slidesPerView: 1.5,
                        },
                        // When the window is 640px to 767px (small tablets or large mobile devices)
                        640: {
                            slidesPerView: 2,
                        },
                        // For screens between 768px and 1023px (medium to large tablets)
                        768: {
                            slidesPerView: 2.5,
                        },
                        // For screens between 1024px and 1279px (small desktops or laptops)
                        1024: {
                            slidesPerView: 3,
                        },
                        // For screens between 1280px and 1535px (larger desktops)
                        1280: {
                            slidesPerView: 4,
                        },
                        // For extra-large screens (1536px and up)
                        1536: {
                            slidesPerView: 4.5,
                        },
                    }}
                >
                    {filteredProducts.map((product: ProductType, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex-shrink-0">
                                <ProductItem product={product} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </motion.div>
        </div>
    );
};

export default ProductRow;
