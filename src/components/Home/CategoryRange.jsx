"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import Image from "next/image";
import PopupForm from "../Main/ContactPopup";
import { useState } from "react";

const products = [
  { name: "MCB Box", image: "/closeBox.png", id: "mcb-box" },
  { name: "Busbar Chamber", image: "/Industrial Busbar Chambers.webp", id: "busbar-chamber" },
  { name: "Switchgear", image: "/3.jpeg", id: "switchgear" },
  { name: "Distribution Box", image: "/Prime Model MCB Box (2).webp", id: "distribution-box" },
  // { name: "MCB Box", image: "/1.jpeg", id: "mcb-box" },
  { name: "Busbar Chamber", image: "/Busbar Chamber Box.webp", id: "busbar-chamber" },
  { name: "Switchgear", image: "/3.jpeg", id: "switchgear" },
  { name: "Distribution Box", image: "/Prime Model MCB Box (2).webp", id: "distribution-box" },
];

export default function CategoryRange({ popup }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full pt-10 bg-gray-200 px-4">
      <h1 className="text-gray-800 text-center text-3xl md:text-5xl font-semibold">
        PRODUCT RANGE
      </h1>

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
        className="py-10! max-w-7xl mx-auto"
      >
        {products.map((item, index) => (
          <SwiperSlide key={index}>
            <Link href={`${popup ? "" : `categories/${item.id}`}`}>
              <motion.div
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  transition: { type: "spring", stiffness: 200 },
                }}
                className="rounded-xl p-2 flex flex-col items-center justify-center h-85 bg-white shadow-md hover:shadow-xl transition"
              >
                {/* Image zoom effect */}
                <div className="overflow-hidden bg-[#c8bbb5] rounded-lg w-full">
                  <motion.div
                    className="relative h-70 w-full"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-contain"
                      {...(index === 0 ? { loading: "eager", fetchPriority: "high" } : {})}
                    />
                  </motion.div>
                </div>

                <p className="text-gray-800 text-lg font-bold text-center mt-2">
                  {item.name}
                </p>

                {popup && (
                  <button
                    onClick={() => setIsOpen(true)}
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

      <PopupForm isOpen={isOpen} setIsOpen={setIsOpen} formType="contact" />
    </div>
  );
}