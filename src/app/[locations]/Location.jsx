"use client";
import CategoryRange from '@/components/Home/CategoryRange';
import CTASection from '@/components/Main/CTA';
import StatsSection from '@/components/Main/Stats';
import Link from 'next/link'
import { useParams } from 'next/navigation';
import React, { useState } from 'react'
import {
    ShieldCheck,
    Settings,
    Users,
    Cpu,
    Clock,
    Wrench,
    MapPin,
    Building2,
    Truck,
    SlidersHorizontal, Plus, Minus
} from "lucide-react";
import { motion } from "framer-motion";
import Industries from '@/components/Main/Industries';
import CTA from '@/components/Home/ContactCta';

export default function Location() {
    const params = useParams();
    const formatCityName = (slug) => {
        if (!slug) return "India";

        return slug
            .replace(/\((.*?)\)/g, " ($1)")
            .replace(/-/g, " ")
            .replace(/\b\w/g, char => char.toUpperCase());
    };

    const citySlug = params?.locations?.includes("-in-")
        ? params.locations.split("-in-")[1]
        : null;

    const cityName = citySlug ? formatCityName(citySlug) : "India";

    const [activeIndex, setActiveIndex] = useState(null);
    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const features = [
        {
            icon: ShieldCheck,
            title: "Strict Quality Assurance",
            desc: "Every switchgear panel is manufactured under stringent quality control processes and tested to meet industry safety and performance standards.",
            color: "from-green-400 to-green-600",
        },
        {
            icon: Settings,
            title: "Customized Engineering Solutions",
            desc: "We design tailor-made switchgear systems that align perfectly with your project specifications and operational needs.",
            color: "from-blue-400 to-blue-600",
        },
        {
            icon: Users,
            title: "Experienced & Skilled Team",
            desc: "Our qualified engineers and technicians bring extensive industry experience to handle complex electrical projects efficiently.",
            color: "from-purple-400 to-purple-600",
        },
        {
            icon: Cpu,
            title: "Advanced Technology",
            desc: "We use modern manufacturing techniques and high-quality components to deliver safe and future-ready solutions.",
            color: "from-pink-400 to-pink-600",
        },
        {
            icon: Clock,
            title: "Timely Project Execution",
            desc: "We ensure streamlined production and delivery processes so your projects stay on schedule without delays.",
            color: "from-yellow-400 to-orange-500",
        },
        {
            icon: Wrench,
            title: "After-Sales Support",
            desc: "We provide dependable maintenance support and technical assistance for uninterrupted system performance.",
            color: "from-red-400 to-red-600",
        },
    ];

    const features2 = [
        {
            icon: MapPin,
            title: "Local Expertise",
            desc: `With in-depth knowledge of the ${cityName} market, we provide solutions tailored to regional electrical needs and compliance standards.`,
            color: "from-blue-500 to-indigo-600",
        },
        {
            icon: Building2,
            title: `Industries Served in ${cityName}`,
            desc: "We cater to industrial units, commercial buildings, healthcare facilities, and residential projects.",
            color: "from-green-500 to-emerald-600",
        },
        {
            icon: Truck,
            title: "Fast Delivery & Support",
            desc: `Our streamlined processes ensure timely delivery and prompt support for projects across ${cityName}.`,
            color: "from-orange-400 to-red-500",
        },
        {
            icon: SlidersHorizontal,
            title: "Customized Solutions",
            desc: "We design switchgear systems based on specific load requirements and project demands.",
            color: "from-purple-500 to-pink-600",
        },
    ];

    const faqs = [
        {
            q: "What does a switchgear manufacturer do?",
            a: "A switchgear manufacturer designs and produces electrical systems that control, protect, and isolate electrical equipment to ensure safe and efficient power distribution.",
        },
        {
            q: `Why should I choose a Switchgear Manufacturer in ${cityName}?`,
            a: `Choosing a local Switchgear Manufacturer in ${cityName} ensures faster delivery, better on-site support, and solutions tailored to regional requirements and standards.`,
        },
        {
            q: "What types of switchgear solutions do you offer?",
            a: "We offer a wide range of solutions including LT Panels, HT Panels, PCC Panels, MCC Panels, APFC Panels, and Distribution Boards for various applications.",
        },
        {
            q: "Do you provide customized switchgear panels?",
            a: "Yes, we specialize in designing and manufacturing customized switchgear solutions based on specific project requirements and load capacities.",
        },
        {
            q: `Which industries do you serve in ${cityName}?`,
            a: "We serve multiple industries including manufacturing, commercial buildings, healthcare, infrastructure, and residential projects.",
        },
        {
            q: "How do you ensure the quality of your switchgear products?",
            a: `As a trusted Switchgear Manufacturer in ${cityName}, we follow strict quality control processes and test all products to meet industry safety and performance standards.`,
        },
        {
            q: "How can I get a quote for my project?",
            a: "You can contact our team through our website or call us directly to discuss your requirements and receive a customized quote.",
        },
        {
            q: "Do you offer installation and after-sales support?",
            a: "Yes, we provide complete support including guidance, maintenance, and after-sales services to ensure smooth and efficient operation of your systems.",
        },
    ];

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
                    <span className="text-gray-300">Switchgear Manufacturer in {cityName}</span>
                </div>

                {/* Title */}
                <h1 className="text-2xl md:text-5xl font-bold mb-2">
                    Switchgear Manufacturer in {cityName}
                </h1>
            </div>
        </section>

        <CategoryRange />

        <section className="w-full py-10 px-4 lg:px-15 bg-gray-50">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Powering Reliable Electrical Solutions
                    </h2>

                    <p className="text-gray-700 mb-4 leading-relaxed">
                        Genzee Switchgear is a trusted <strong>Switchgear Manufacturer in {cityName}</strong>,
                        known for delivering reliable and high-performance electrical
                        solutions. With a strong focus on quality, safety, and innovation,
                        we design and manufacture advanced switchgear systems that ensure
                        efficient power distribution across residential, commercial, and
                        industrial sectors. Our products are built using modern technology and premium
                        components, meeting stringent industry standards for durability and performance.
                    </p>

                    <p className="text-gray-700 leading-relaxed">
                        Driven by a customer-centric approach, our team of experienced engineers works closely with clients to provide customized solutions tailored to their specific requirements. At Genzee Switchgear, we are committed to powering infrastructure with dependable systems while continuously evolving through innovation and excellence. Our goal is to remain a preferred <strong>Switchgear Manufacturer in {cityName},</strong> delivering solutions that combine efficiency, safety, and long-term value.
                    </p>
                </div>

                <div className="w-full">
                    <img
                        src="/2.jpeg" // replace with your image path
                        alt="Switchgear System"
                        className="w-full h-[350px] md:h-[450px] object-cover rounded-2xl shadow-lg"
                    />
                </div>
            </div>
        </section>

        <StatsSection />

        <CTASection />

        <section className="w-full py-10 px-6 md:px-10 lg:px-15 bg-white">
            <div className="max-w-7xl mx-auto text-center mb-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    Why Choose Us as Your Switchgear Manufacturer in {cityName}
                </h2>
                <p className="text-gray-600 max-w-4xl mx-auto">
                    Selecting the right partner is crucial for ensuring safe, efficient,
                    and uninterrupted power distribution. At Genzee Switchgear, we deliver
                    complete electrical solutions backed by expertise, innovation, and a
                    strong commitment to quality.
                </p>
            </div>

            {/* Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <div
                            key={index}
                            className="bg-gray-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300 group"
                        >
                            {/* Icon */}
                            <div
                                className={`w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-r ${item.color} text-white mb-5 group-hover:scale-110 transition`}
                            >
                                <Icon size={28} />
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    );
                })}
            </div>
        </section>

        <section className="w-full py-10 px-4 lg:px-15 bg-gray-200">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {/* Heading */}
                <div className="">
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                        Leading Switchgear Manufacturer in {cityName}
                    </h1>

                    <p className="text-gray-700 leading-relaxed text-lg mb-4">
                        Genzee Switchgear has established itself as a reliable Switchgear Manufacturer in {cityName},
                        catering to the growing demand for safe and efficient power distribution solutions.
                        With a strong understanding of local infrastructure requirements and industry standards,
                        we deliver systems built for performance, durability, and long-term reliability.
                    </p>
                    {/* Bottom Paragraph */}
                    <p className="text-gray-700 leading-relaxed text-lg mb-6">
                        As a trusted Switchgear Manufacturer in {cityName}, Genzee Switchgear continues
                        to deliver high-quality, customized electrical solutions that support the
                        city’s growing infrastructure and energy needs.
                    </p>

                    {/* Call Button */}
                    <motion.a
                        href="tel:+919136508089" // 👉 replace number
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gray-800 text-white px-6 py-3 rounded-md font-medium hover:bg-gray-900 transition"
                    >
                        Request a Callback
                    </motion.a>
                </div>

                {/* Grid Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {features2.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 group"
                            >
                                {/* Icon */}
                                <div
                                    className={`w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-r ${item.color} text-white mb-4 group-hover:scale-110 transition`}
                                >
                                    <Icon size={24} />
                                </div>

                                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>

        <Industries />

        <section className="w-full py-10 px-4 md:px-10 lg:px-15 bg-white">
            <div className="max-w-4xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        FAQs – Switchgear Manufacturer in {cityName}
                    </h2>
                    <p className="text-gray-600">
                        Find answers to common questions about our switchgear solutions and services.
                    </p>
                </div>

                {/* FAQ List */}
                <div className="space-y-4">
                    {faqs.map((item, index) => {
                        const isActive = activeIndex === index;
                        return (
                            <div
                                key={index}
                                className="border border-gray-200 rounded-xl shadow-sm"
                            >
                                {/* Question */}
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex justify-between items-center p-5 text-left"
                                >
                                    <span className="font-medium text-gray-800">
                                        {index + 1}. {item.q}
                                    </span>
                                    <span className="ml-4">
                                        {isActive ? (
                                            <Minus className="text-red-500" />
                                        ) : (
                                            <Plus className="text-blue-500" />
                                        )}
                                    </span>
                                </button>

                                {/* Answer */}
                                {isActive && (
                                    <div className="px-5 py-5 text-gray-600 leading-relaxed border-t border-t-gray-200">
                                        {item.a}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>

        <CTA />
    </>)
}
