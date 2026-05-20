"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { IoLogoWhatsapp } from "react-icons/io";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import PopupForm from "../Main/ContactPopup";
import { useState } from "react";

const products = [
  { name: "MCB Box", image: "/inquiry/Full Frame MCB Box.webp", id: "mcb-box" },
  {
    name: "Busbar Chamber",
    image: "/inquiry/Busbar Chamber Box.webp",
    id: "busbar-chamber",
  },
  {
    name: "Mild Steel MCB Box",
    image: "/inquiry/Mild Steel MCB Box.webp",
    id: "distribution-box",
  },
  // { name: "MCB Box", image: "/1.jpeg", id: "mcb-box" },
  {
    name: "Kitkat Cutouts Fuse",
    image: "/inquiry/Kitkat Cutouts Fuse.webp",
    id: "Kitkat Cutouts Fuse",
  },
  { name: "Switchgear", image: "/inquiry/Switchgear.webp", id: "switchgear" },
  {
    name: "Mild Steel TPN MCB BOX",
    image: "/inquiry/Mild Steel TPN MCB BOX.webp",
    id: "distribution-box",
  },
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

export default function CategoryRange({ popup }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      whileInView="show"
      //   viewport={{ once: true }}
      className="w-full pt-10 bg-gray-200 px-4"
    >
      {/* Heading Animation */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-gray-800 text-center text-3xl md:text-5xl font-semibold"
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
        className="py-7! max-w-7xl mx-auto"
      >
        {products.map((item, index) => (
          <SwiperSlide key={index}>
            <Link href={`${popup ? "" : `categories/${item.id}`}`}>
              <motion.div
                variants={cardVariant}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  transition: { type: "spring", stiffness: 200 },
                }}
                className="rounded-xl p-2 flex flex-col items-center justify-center h-85 bg-white shadow-md hover:shadow-xl transition"
              >
                {/* Image zoom effect */}
                <div className="overflow-hidden bg-[#e6d9d2] rounded-lg w-full">
                  <motion.img
                    src={item.image}
                    alt={item.name}
                    className="h-60 md:h-60 w-full object-contain"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>

                <p className="text-gray-800 text-lg font-bold text-center mt-2">
                  {item.name}
                </p>

                {popup && (
                  <button
                    onClick={() => (!popup ? "" : setIsOpen(true))}
                    className="bg-gray-800 hover:bg-gray-950 text-white py-2 w-full rounded-md mt-2"
                  >
                    Inquiry Now
                  </button>
                )}
              </motion.div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className=" flex justify-center items-center">
        {" "}
        <Link   href="https://wa.me/918865979034?text=Hello%2C%20I%20need%20a%20quotation%20for%20your%20switchgear%20products."
 className="bg-green-600 whitespace-nowrap text-xl py-2 px-3 mb-5 font-bold flex gap-1 w-80 rounded-lg justify-center items-center">
          <IoLogoWhatsapp size={30} />
          Instant Quote on WhatsApp

        </Link>
      </div>
      <PopupForm isOpen={isOpen} setIsOpen={setIsOpen} formType="contact" />
    </motion.div>
  );
}
