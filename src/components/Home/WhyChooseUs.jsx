"use client";

import { motion } from "framer-motion";
import {
    FaCogs,
    FaIndustry,
    FaBoxes,
    FaBolt,
    FaTools,
    FaTruck
} from "react-icons/fa";

const features = [
    {
        icon: FaCogs,
        title: "High-Quality Manufacturing",
        desc: "Premium-grade materials with strict quality control ensure durability, safety, and long-term performance.",
        color: "bg-blue-500",
    },
    {
        icon: FaIndustry,
        title: "Advanced Infrastructure & Technology",
        desc: "Modern facility with advanced machinery delivering precision-engineered products.",
        color: "bg-purple-500",
    },
    {
        icon: FaBoxes,
        title: "Comprehensive Product Range",
        desc: "Wide range including Single Phase, Three Phase, and 440v Industrial Switchgear solutions.",
        color: "bg-green-500",
    },
    {
        icon: FaBolt,
        title: "Strong Expertise in MCB Solutions",
        desc: "Reliable MCB Boxes and Distribution Boards for safe and efficient power distribution.",
        color: "bg-yellow-500",
    },
    {
        icon: FaTools,
        title: "Customized Engineering Solutions",
        desc: "Tailored solutions like TPN Distribution Boards for specific project needs.",
        color: "bg-red-500",
    },
    {
        icon: FaTruck,
        title: "Timely Delivery & Support",
        desc: "On-time delivery with dedicated technical support and customer service.",
        color: "bg-indigo-500",
    },
];

export default function WhyChooseUs() {
    return (
        <section className="py-20 bg-gray-100">
            <div className="max-w-7xl mx-auto px-6">

                {/* HEADING */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                        What Makes Us the Right Choice
                    </h2>
                    <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
                        Genzee Switchgears Private Limited is a trusted Industrial Switchgear Manufacturer delivering reliable and high-performance electrical solutions.
                    </p>
                </div>

                {/* GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    {features.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.15 }}
                                viewport={{ once: false }}
                                whileHover={{
                                    y: -12,
                                    scale: 1.03,
                                }}
                                className={`${item.color} text-white rounded-xl p-6 shadow-lg relative overflow-hidden`}
                            >

                                {/* Glow effect */}
                                <div className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition"></div>

                                {/* ICON */}
                                <motion.div
                                    whileHover={{ rotate: 10, scale: 1.2 }}
                                    className="mb-4"
                                >
                                    <Icon className="text-3xl" />
                                </motion.div>

                                {/* TITLE */}
                                <h3 className="text-xl font-semibold mb-2">
                                    {item.title}
                                </h3>

                                {/* DESC */}
                                <p className="text-sm text-white/90 leading-relaxed">
                                    {item.desc}
                                </p>

                            </motion.div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
}