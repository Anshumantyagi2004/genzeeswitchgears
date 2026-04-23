"use client"
import React from "react";
import Link from 'next/link'
import { motion } from "framer-motion";
import {
    FaIndustry,
    FaCogs,
    FaBullseye,
    FaEye,
    FaCheckCircle,
    FaLayerGroup,
    FaBolt,
    FaTools,
    FaTruck,
} from "react-icons/fa";
import CTA from "@/components/Home/ContactCta";

const data = [
    {
        title: "Who We Are",
        icon: <FaIndustry />,
        content: "Genzee Switchgears Private Limited is a trusted and fast-growing name in the electrical industry, recognized as a leading Industrial Switchgear Manufacturer in India. With over 10+ years of experience, we specialize in designing and manufacturing high-quality electrical distribution solutions that ensure safety, reliability, and efficient power management for industrial, commercial, and infrastructure applications.",
        content1: "We offer a comprehensive range of products including Single Phase Switchgear, Three Phase Switch Gear, 440v Industrial Switchgear, MCB Boxes, MCB Distribution Boards, TPN Distribution Boards, and Three Phase Power Distribution Boxes. Each product is engineered using premium-grade raw materials and advanced manufacturing technology to deliver long-lasting performance even in demanding environments.",
    },
    {
        title: "Our Infrastructure & Expertise",
        icon: <FaCogs />,
        content: "At Genzee Switchgears Private Limited, we operate with a modern and well-equipped manufacturing facility spread across a large industrial area. Our infrastructure supports efficient production, strict quality control, and precision engineering. Backed by a skilled team of engineers and technicians, we ensure that every product meets industry standards for safety, durability, and performance.",
        content1: "Our expertise as an MCB Box Manufacturer and MCB Distribution Board Manufacturer allows us to deliver reliable electrical solutions that cater to diverse customer requirements. We continuously upgrade our technology and processes to meet evolving industry demands and maintain high-quality output.",
    },
    {
        title: "Our Mission",
        icon: <FaBullseye />,
        content: "At Genzee Switchgears Private Limited, our mission is to design and manufacture safe, reliable, and high-performance electrical solutions that meet the evolving needs of industrial and commercial sectors. As a trusted Industrial Switchgear Manufacturer, we are committed to delivering quality-driven products such as Single Phase Switchgear, Three Phase Switch Gear, 440v Industrial Switchgear, and advanced distribution systems that ensure efficient power management and long-term performance. We aim to provide solutions that enhance operational safety, improve efficiency, and add value to every project we serve.",
    },
    {
        title: "Our Vision",
        icon: <FaEye />,
        content: "Our vision is to become a leading and most trusted name in the electrical manufacturing industry by consistently delivering innovative and reliable switchgear solutions. We strive to expand our presence across national and global markets by maintaining the highest standards of quality, technology, and customer satisfaction. Through continuous improvement and innovation, we aim to power industries with advanced electrical systems that support growth, safety, and sustainability.",
    },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.15 },
    },
};

const card = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
};

const features = [
    // {
    //     icon: <FaIndustry className="text-3xl text-blue-600" />,
    //     title: "Trusted Manufacturer",
    //     desc: "Genzee Switchgears Private Limited is a trusted Industrial Switchgear Manufacturer delivering safe and high-performance electrical solutions.",
    // },
    {
        icon: <FaCheckCircle className="text-3xl text-blue-600" />,
        title: "Superior Product Quality",
        desc: "We use premium-grade raw materials and strict quality control to ensure durability, safety, and long-lasting performance.",
    },
    {
        icon: <FaCogs className="text-3xl text-blue-600" />,
        title: "Advanced Manufacturing Facility",
        desc: "Our modern infrastructure and technology-driven processes ensure precision engineering and consistent product quality.",
    },
    {
        icon: <FaLayerGroup className="text-3xl text-blue-600" />,
        title: "Wide Product Range",
        desc: "We offer Single Phase Switchgear, Three Phase Switch Gear, 440V Industrial Switchgear, and distribution systems.",
    },
    {
        icon: <FaBolt className="text-3xl text-blue-600" />,
        title: "Expertise in MCB Solutions",
        desc: "Reliable MCB Box Manufacturer and MCB Distribution Board Manufacturer ensuring safe and efficient power distribution.",
    },
    {
        icon: <FaTools className="text-3xl text-blue-600" />,
        title: "Customized Solutions",
        desc: "We provide tailored systems like TPN Distribution Board and Three Phase Power Distribution Box based on client needs.",
    },
    {
        icon: <FaTruck className="text-3xl text-blue-600" />,
        title: "Timely Delivery & Support",
        desc: "Efficient operations ensure on-time delivery with strong customer support for smooth execution.",
    },
];

export default function About() {
    return (<>
        <section className="relative w-full h-62 md:h-88 flex items-center justify-center text-white">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('/b3.jpg')", // change path
                }}
            />

            <div className="absolute inset-0 bg-black/50" />
            <div className="relative z-10 flex flex-col items-center text-center px-4">
                <div className="flex items-center gap-2 text-sm md:text-base">
                    <Link href="/" className="hover:underline">
                        Home
                    </Link>
                    <span>/</span>
                    <span className="text-gray-300">About us</span>
                </div>

                {/* Title */}
                <h1 className="text-2xl md:text-5xl font-bold mb-2">
                    About Us
                </h1>
            </div>
        </section>

        <div className="px-6 md:px-16 py-16 bg-gradient-to-b from-gray-100 to-gray-200">

            {/* Grid */}
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-10"
            >
                {data.map((item, index) => (
                    <motion.div
                        key={index}
                        variants={card}
                        whileHover={{ y: -6 }}
                        transition={{ type: "spring", stiffness: 120 }}
                        className="group p-7 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300"
                    >

                        {/* Icon */}
                        <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gray-300 text-gray-900 text-2xl mb-5 group-hover:bg-gray-800 group-hover:text-white transition">
                            {item.icon}
                        </div>

                        {/* Title */}
                        <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
                            {item.title}
                        </h3>

                        {/* Content */}
                        <p className="text-gray-700 leading-relaxed text-[15px] mb-3">
                            {item.content}
                        </p>

                        {/* Optional second paragraph */}
                        {item.content1 && (
                            <p className="text-gray-700 leading-relaxed text-[14px]">
                                {item.content1}
                            </p>
                        )}
                    </motion.div>
                ))}
            </motion.div>
        </div>

        <section className="py-10 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                        What Sets Us Apart
                    </h2>
                    <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
                        Genzee Switchgears Private Limited is a trusted Industrial Switchgear Manufacturer committed to delivering reliable, safe, and high-performance electrical solutions for industrial and commercial applications.
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
                        >
                            <div className="mb-4">{item.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 text-sm">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

        <CTA />
    </>)
}
