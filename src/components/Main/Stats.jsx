"use client";

import { motion } from "framer-motion";
import { FaAward, FaBriefcase, FaIndustry, FaBoxes } from "react-icons/fa";

const stats = [
    {
        icon: FaAward,
        number: "10+",
        label: "Years of Experience",
    },
    {
        icon: FaBriefcase,
        number: "500+",
        label: "Completed Projects",
    },
    {
        icon: FaIndustry,
        number: "6 Acres",
        label: "Manufacturing Facility",
    },
    {
        icon: FaBoxes,
        number: "25+",
        label: "Products & Solutions",
    },
];

export default function StatsSection() {
    return (
        <section className="relative py-20">

            {/* BACKGROUND */}
            <div className="absolute inset-0">
                <img
                    src="/statsImage.jpg"
                    alt="Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60"></div>
            </div>

            {/* CONTENT */}
            <div className="relative z-10 max-w-7xl mx-auto px-6">

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

                    {stats.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                                viewport={{ once: false }}
                                whileHover={{
                                    y: -10,
                                    scale: 1.05,
                                    boxShadow: "0px 10px 30px rgba(255,255,255,0.15)"
                                }}
                                className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-6 text-center"
                            >

                                {/* ICON */}
                                <div className="flex justify-center mb-3">
                                    <div className="bg-white/20 p-3 rounded-full">
                                        <Icon className="text-white text-xl" />
                                    </div>
                                </div>

                                {/* NUMBER */}
                                <p className="text-white text-2xl md:text-3xl font-bold">
                                    {item.number}
                                </p>

                                {/* LABEL */}
                                <p className="text-gray-200 text-sm mt-1">
                                    {item.label}
                                </p>

                            </motion.div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
}