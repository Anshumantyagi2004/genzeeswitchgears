"use client";

import { motion } from "framer-motion";
import PopupForm from "./ContactPopup";
import { useState } from "react";

export default function CTASection() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="relative w-full py-20 flex items-center justify-center">
            <div className="absolute inset-0">
                <img
                    src="/banner.jpg"
                    alt="CTA Background"
                    className="w-full h-full object-cover"
                />
                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/60"></div>
            </div>

            <div className="relative z-10 max-w-4xl text-center px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-white text-3xl md:text-5xl font-bold mb-4"
                >
                    Need the Right Product for Your Requirement?
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-gray-200 text-base md:text-lg mb-8"
                >
                    Explore our wide range including MCB Boxes, Distribution Boards,
                    and Three Phase Power Distribution Box solutions.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >

                    {/* Enquire Button */}
                    <motion.button onClick={() => setIsOpen(true)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition"
                    >
                        Enquire Now
                    </motion.button>

                    {/* Call Button */}
                    <motion.a
                        href="tel:+919136508089" // 👉 replace number
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white text-gray-900 px-6 py-3 rounded-md font-medium hover:bg-gray-200 transition"
                    >
                        Request a Callback
                    </motion.a>

                </motion.div>
            </div>
            <PopupForm
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                formType="contact"
            />
        </section>
    );
}