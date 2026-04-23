"use client";
import React from 'react'
import { motion } from "framer-motion";
import Link from 'next/link';
import FormSection from '@/components/Main/FormSection';
import { FaPhoneAlt } from "react-icons/fa";
import { CgMail } from 'react-icons/cg';
import { FaLocationArrow } from 'react-icons/fa6';

export default function Contact() {
    const cardData = [
        {
            icon: <FaPhoneAlt />,
            title: "Phone Number",
            content: ["+91 9136508089", "+91 8865979034"],
        },
        {
            icon: <CgMail />,
            title: "Email Address",
            content: ["genzeeswitchgears@yahoo.com"],
        },
        {
            icon: <FaLocationArrow />,
            title: "Address",
            content: [
                "Genzee Switchgears Private Limited",
                "First Floor, 345a-345b, Sahibabad, Gali No 3",
                "Ghaziabad - 201005, Uttar Pradesh, India",
            ],
        },
    ];
    return (<>
        <section className="relative w-full h-62 md:h-88 flex items-center justify-center text-white">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('/banner.jpg')", // change path
                }}
            />

            <div className="absolute inset-0 bg-black/50" />
            <div className="relative z-10 flex flex-col items-center text-center px-4">
                <div className="flex items-center gap-2 text-sm md:text-base">
                    <Link href="/" className="hover:underline">
                        Home
                    </Link>
                    <span>/</span>
                    <span className="text-gray-300">Contact us</span>
                </div>

                {/* Title */}
                <h1 className="text-2xl md:text-5xl font-bold mb-2">
                    Contact Us
                </h1>
            </div>
        </section>

        <section className="w-full pt-10 pb-5 bg-gray-50 md:px-15 px-4">
            <div className="grid md:grid-cols-3 md:gap-8 gap-5">
                {cardData.map((card, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        whileHover={{ scale: 1.06 }}
                        className="group bg-white rounded-2xl p-6 shadow-md border border-gray-200 hover:shadow-xl transition duration-300"
                    >
                        <div className="flex items-center gap-4 mb-2">
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 text-xl group-hover:bg-gray-900 group-hover:text-white transition duration-300">
                                {card.icon}
                            </div>

                            <h3 className="text-lg font-semibold text-gray-900">
                                {card.title}
                            </h3>
                        </div>

                        <div className="text-gray-800 space-y-1">
                            {card.content.map((line, i) => (
                                <p key={i}>{line}</p>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>

        <FormSection />
    </>)
}