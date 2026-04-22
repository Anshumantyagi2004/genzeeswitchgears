"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";

const products = [
  { name: "MCB Box", image: "/1.jpeg" },
  { name: "Busbar Chamber", image: "/2.jpeg" },
  { name: "Switchgear", image: "/3.jpeg" },
  { name: "Distribution Box", image: "/4.jpeg" },
  { name: "MCB Box", image: "/1.jpeg" },
  { name: "Busbar Chamber", image: "/2.jpeg" },
  { name: "Switchgear", image: "/3.jpeg" },
  { name: "Distribution Box", image: "/4.jpeg" },
];

// Animation variants
const containerVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function CategoryRange() {
  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      whileInView="show"
    //   viewport={{ once: true }}
      className="w-full max-w-7xl mx-auto pt-10"
    >
      {/* Heading Animation */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-gray-800 text-center text-3xl md:text-5xl font-semibold mb-6"
      >
        PRODUCT RANGE
      </motion.h2>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        className="pb-10!"
      >
        {products.map((item, index) => (
          <SwiperSlide key={index}>
            <motion.div
              variants={cardVariant}
              whileHover={{
                scale: 1.05,
                y: -5,
                transition: { type: "spring", stiffness: 200 },
              }}
              className="rounded-xl p-2 flex flex-col items-center justify-center h-80 bg-white shadow-md hover:shadow-xl transition"
            >
              {/* Image zoom effect */}
              <div className="overflow-hidden rounded-lg w-full">
                <motion.img
                  src={item.image}
                  alt={item.name}
                  className="h-70 w-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
              </div>

              <p className="text-gray-800 text-lg font-bold text-center mt-2">
                {item.name}
              </p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
}