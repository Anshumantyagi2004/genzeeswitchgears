"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuestionCircle, FaChevronDown } from "react-icons/fa";

const faqs = [
    {
        q: "What does Genzee Switchgears Private Limited manufacture?",
        a: "We manufacture Industrial Switchgear, Single Phase Switchgear, Three Phase Switch Gear, 440v Industrial Switchgear, MCB Boxes, and Distribution Boards for industrial and commercial use.",
    },
    {
        q: "Are you an experienced Industrial Switchgear Manufacturer?",
        a: "Yes, we are a trusted Industrial Switchgear Manufacturer with 10+ years of experience in delivering reliable and high-performance electrical solutions.",
    },
    {
        q: "What is the purpose of a Three Phase Switch Gear?",
        a: "It controls, protects, and isolates electrical equipment in high-load systems, ensuring safe power distribution in industrial environments.",
    },
    {
        q: "Do you manufacture MCB Distribution Boards and what are their benefits?",
        a: "Yes, our MCB Distribution Boards provide circuit protection by preventing overloads and short circuits in residential, commercial, and industrial setups.",
    },
    {
        q: "What is a TPN Distribution Board used for?",
        a: "A TPN Distribution Board is used in three-phase systems for balanced load distribution and efficient power management.",
    },
    {
        q: "Where are your electrical products commonly used?",
        a: "Our products are used in manufacturing units, commercial buildings, infrastructure projects, warehouses, and residential applications.",
    },
    {
        q: "Do you offer customized switchgear solutions?",
        a: "Yes, we offer customized solutions including Three Phase Power Distribution Boxes tailored to client requirements.",
    },
    {
        q: "How can I get pricing or request a quotation?",
        a: "You can contact us via website, phone, or email. Our team will provide a detailed quotation based on your requirements.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-10 px-4 bg-white text-gray-900">
            <div className="max-w-4xl mx-auto text-center mb-6">
                <h2 className="text-3xl md:text-4xl font-bold">
                    Frequently Asked Questions
                </h2>
                <p className="text-gray-700 mt-2">
                    Everything you need to know about our industrial switchgear solutions
                </p>
            </div>

            <div className="max-w-5xl mx-auto space-y-4">
                {faqs.map((item, index) => {
                    const isOpen = openIndex === index;
                    return (
                        <motion.div key={index} layout
                            className="border border-slate-800 rounded-xl overflow-hidden bg-gray-100 backdrop-blur-md"
                        >
                            {/* Question */}
                            <button
                                onClick={() => toggle(index)}
                                className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-gray-200 transition"
                            >
                                <div className="flex items-center gap-3">
                                    <FaQuestionCircle className="text-blue-600" />
                                    <span className="font-medium">{item.q}</span>
                                </div>

                                <motion.div
                                    animate={{ rotate: isOpen ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <FaChevronDown />
                                </motion.div>
                            </button>

                            {/* Answer */}
                            <AnimatePresence>
                                {isOpen && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="px-5 py-2 text-gray-600 text-sm leading-relaxed"
                                    >
                                        {item.a}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}