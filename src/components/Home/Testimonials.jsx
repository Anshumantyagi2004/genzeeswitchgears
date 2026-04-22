"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
    {
        text: "Genzee Switchgears Private Limited has consistently delivered high-quality switchgear products for our projects. Their reliability and product performance are truly impressive.",
        author: "Project Manager",
        company: "Industrial Plant Setup",
    },
    {
        text: "We have been sourcing MCB distribution boards from Genzee Switchgears, and the quality has always met our expectations. Timely delivery and good support make them a trusted partner.",
        author: "Electrical Contractor",
        company: "Commercial Projects",
    },
    {
        text: "Their 440v industrial switchgear solutions are durable and safe for heavy-duty applications. We highly recommend them for industrial requirements.",
        author: "Maintenance Head",
        company: "Manufacturing Unit",
    },
    {
        text: "Excellent product quality and professional service. Their team understands technical requirements very well and provides the right solutions.",
        author: "Electrical Consultant",
        company: "",
    },
    {
        text: "Genzee Switchgears offers a wide range of electrical distribution products. Their TPN distribution boards are reliable and easy to install.",
        author: "Site Engineer",
        company: "Infrastructure Project",
    },
    {
        text: "We are satisfied with their product performance and customer support. They are a dependable Industrial Switchgear Manufacturer for long-term collaboration.",
        author: "Procurement Manager",
        company: "Engineering Firm",
    },
];

export default function TestimonialSection() {
    return (
        <section className="pt-10 pb-4 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-gray-900 text-3xl md:text-5xl font-bold text-center">
                    What Our Clients Say About Us
                </h2>

                <Swiper
                    modules={[Autoplay, Pagination, Navigation]}
                    spaceBetween={20}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    // navigation={true}
                    loop={true}
                    speed={800}
                    grabCursor={true}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="py-10!"
                >
                    {testimonials.map((item, index) => (
                        <SwiperSlide key={index}>
                            <SwiperSlide className="h-auto flex">
                                <motion.div
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: false }}
                                    whileHover={{ y: -8 }}
                                    className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between border h-full w-full"
                                >
                                    {/* Icon */}
                                    <FaQuoteLeft className="text-3xl text-blue-500 mb-4" />

                                    {/* Text */}
                                    <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-4">
                                        {item.text}
                                    </p>

                                    {/* Author */}
                                    <div className="mt-auto">
                                        <h4 className="font-semibold text-lg text-gray-800">
                                            {item.author}
                                        </h4>
                                        {item.company && (
                                            <p className="text-sm text-gray-500">
                                                {item.company}
                                            </p>
                                        )}
                                    </div>
                                </motion.div>
                            </SwiperSlide>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}