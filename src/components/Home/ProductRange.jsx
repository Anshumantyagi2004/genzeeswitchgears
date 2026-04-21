"use client";

import { motion } from "framer-motion";

const products = [
    { name: "MCB Box", image: "/1.jpeg" },
    { name: "Busbar Chamber", image: "/2.jpeg" },
    { name: "Switchgear", image: "/3.jpeg" },
    { name: "Distribution Box", image: "/4.jpeg" },
];

export default function ProductRange() {
    return (
        <section className="pt-10 pb-5 bg-gray-100 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                        Our Product Range
                    </h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        We offer a comprehensive range of high-quality electrical distribution
                        solutions designed for safety, efficiency, and long-lasting performance
                        across industrial and commercial applications.
                    </p>
                </div>

                <div className="relative overflow-hidden group pb-5">
                    <motion.div
                        className="flex gap-6 w-max"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            repeat: Infinity,
                            duration: 20,
                            ease: "linear",
                        }}
                        whileHover={{ animationPlayState: "paused" }}
                    >
                        {[...products, ...products].map((item, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -10 }}
                                className="min-w-[250px] bg-white rounded-xl shadow-md p-4 flex flex-col items-center transition-all"
                            >
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="h-40 object-contain mb-4"
                                />

                                <h3 className="text-lg font-semibold text-gray-800 mb-3 text-center">
                                    {item.name}
                                </h3>

                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium"
                                >
                                    View Product
                                </motion.button>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}