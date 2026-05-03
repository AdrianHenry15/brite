"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const CareersPromo = () => {
    return (
        <section className="relative w-full py-12 bg-gradient-to-b from-blue-900 to-blue-500 text-white text-center">
            {/* Content Wrapper */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 max-w-4xl mx-auto px-6"
            >
                <h2 className="text-4xl md:text-5xl font-bold tracking-wide bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                    Join Our Team
                </h2>
                <p className="mt-4 text-lg text-gray-200">
                    We're always looking for talented individuals to join our growing team. Bring
                    your passion, skills, and drive to help us deliver exceptional service to our
                    clients.
                </p>

                {/* Call to Action */}
                <motion.div
                    className="mt-6"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Link
                        href="/careers"
                        className="px-8 py-4 text-lg font-semibold text-white border-2 border-white bg-black rounded-full shadow-lg hover:bg-white hover:text-black transition"
                    >
                        Explore Careers
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default CareersPromo;
