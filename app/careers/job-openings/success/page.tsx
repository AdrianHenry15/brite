"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function SuccessPage() {
    const router = useRouter();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-100 to-blue-50 px-6 sm:px-10">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="bg-white shadow-2xl rounded-2xl p-6 sm:p-10 text-center w-full max-w-md sm:max-w-lg lg:max-w-xl"
            >
                {/* Success Icon */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 150, damping: 10 }}
                    className="flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-green-500 text-white text-4xl sm:text-5xl rounded-full mx-auto shadow-lg"
                >
                    🎉
                </motion.div>

                {/* Title */}
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mt-6">
                    Application Submitted!
                </h1>

                {/* Message */}
                <p className="text-base sm text-gray-600 mt-3">
                    Thank you for completing your application. We will review your details and get
                    back to you soon!
                </p>
                <div>
                    {/* CTA Home Button */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-6 px-5 sm:px-6 py-2 bg-blue-600 mx-2 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition"
                        onClick={() => router.push("/")}
                    >
                        Return to Home
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-6 px-5 sm:px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition"
                        onClick={() => router.push("/careers/my-applications")}
                    >
                        See Your Applications
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-6 px-5 sm:px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition"
                        onClick={() => router.push("/careers/my-applications")}
                    >
                        See Your Resume
                    </motion.button>
                </div>
            </motion.div>
        </div>
    );
}
