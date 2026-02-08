"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const BlogPromo = () => {
    return (
        <section className="relative w-full py-12 text-white text-center bg-gradient-to-b from-blue-900 to-blue-500">
            {/* Content Wrapper */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 max-w-3xl mx-auto px-6"
            >
                {/* Gradient Title */}
                <h2 className="text-4xl md:text-5xl font-bold tracking-wide bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent">
                    Insights, Trends & Expert Tips
                </h2>

                {/* Description */}
                <p className="mt-4 text-lg text-gray-200">
                    Stay updated with the latest industry trends, expert advice, and helpful
                    insights to keep your space in top shape.
                </p>

                {/* Call to Action */}
                <motion.div
                    className="mt-6"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Link
                        href="/blog"
                        className="px-8 py-4 text-lg font-semibold text-white border-2 border-white rounded-full shadow-lg hover:bg-white hover:text-blue-600 transition"
                    >
                        Visit Our Blog
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default BlogPromo;
