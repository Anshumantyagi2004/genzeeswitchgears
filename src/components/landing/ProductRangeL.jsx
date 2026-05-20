"use client";

import { motion } from "framer-motion";
import { FaArrowRight, FaTag } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import PopupForm from "../Main/ContactPopup";
import { useState } from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import Link from "next/link";

const products = [
  {
    catName: "MCB Box",
    name: "MCB Distribution Box (Acrylic PVC)",
    image: "/1.jpeg",
    id: "/products/mcb-distribution-box",
  },
  {
    catName: "MCB Box",
    name: "Prime Series MCB Distribution Box",
    image: "/2.jpeg",
    id: "/products/prime-series-mcb-distribution-box",
  },
  {
    catName: "Busbar Chamber",
    name: "Electric Busbar Chamber",
    image: "/3.jpeg",
    id: "/products/electric-busbar-chamber",
  },
  {
    catName: "Busbar Chamber",
    name: "White Grey Busbar Chamber",
    image: "/4.jpeg",
    id: "/products/white-grey-busbar-chamber",
  },
  {
    catName: "Changeover Switch",
    name: "Change Over Knife Type Switch",
    image: "/1.jpeg",
    id: "/products/changeover-knife-type-switch",
  },
  {
    catName: "Changeover Switch",
    name: "Change Over Switch with Porcelain Fitting",
    image: "/2.jpeg",
    id: "/products/changeover-switch-porcelain-fitting",
  },
  {
    catName: "Electrical Switch Box",
    name: "Reversing Switch (Reverse & Forward Switch)",
    image: "/3.jpeg",
    id: "/products/reversing-switch",
  },
  {
    catName: "Electrical Switch Box",
    name: "Electrical Main Switch Box (5A)",
    image: "/4.jpeg",
    id: "/products/electrical-main-switch-box-5a",
  },
];

export default function ProductRangeL({ popup }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-10 bg-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Our Product Range
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We offer a comprehensive range of high-quality electrical
            distribution solutions designed for safety, efficiency, and
            long-lasting performance.
          </p>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          loop={true}
          grabCursor={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1.2,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          className="pb-4"
        >
          {products.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                onClick={() => setIsOpen(true)}
                className="cursor-pointer h-full"
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-2xl shadow-md hover:shadow-2xl p-4 transition-all duration-300 group h-full"
                >
                  
                  {/* Image */}
                  <div className="overflow-hidden rounded-xl">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-55 w-full object-cover group-hover:scale-105 transition duration-500"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="line-clamp-2 min-h-[56px] flex items-center text-lg font-semibold text-gray-800 mt-4">
                    {item.name}
                  </h3>

                  {/* Bottom */}
                  <div className="flex justify-between items-center mt-4">
                    
                    <div className="flex items-center text-sm text-gray-700 gap-2">
                      <FaTag className="text-orange-500" />
                      <span>{item.catName}</span>
                    </div>

                    <div className="flex items-center gap-1 text-sm text-blue-600 font-medium opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <span>View</span>

                      <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                    </div>

                  </div>
                </motion.div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
      </div>

      <div className=" flex justify-center flex-col mt-3 items-center">
        <p className="text-gray-600 mt-4 text-center md:max-w-2xl mx-auto">
            Talk to Our Experts for Reliable Industrial MCB Box & Switchgear Solutions
          </p>
        {" "}
        <Link href="https://wa.me/+918865979034" className="bg-green-600 text-xl py-2 px-3 mt-2 font-bold flex gap-1 rounded-lg justify-center items-center">
          <IoLogoWhatsapp size={30} />
          Connect with Expert Now

        </Link>
      </div>

      {/* Popup */}
      <PopupForm
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        formType="contact"
      />
    </section>
  );
}