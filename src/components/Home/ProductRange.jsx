"use client";

import Link from "next/link";
import { FaArrowRight, FaTag } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const products = [
  { catName: "MCB Box", name: "MCB Distribution Box (Acrylic PVC)", image: "/1.jpeg", id: "/products/mcb-distribution-box" },
  { catName: "MCB Box", name: "Prime Series MCB Distribution Box", image: "/2.jpeg", id: "/products/prime-series-mcb-distribution-box" },
  { catName: "Busbar Chamber", name: "Electric Busbar Chamber", image: "/3.jpeg", id: "/products/electric-busbar-chamber" },
  { catName: "Busbar Chamber", name: "White Grey Busbar Chamber", image: "/4.jpeg", id: "/products/white-grey-busbar-chamber" },
  { catName: "Changeover Switch", name: "Change Over Knife Type Switch", image: "/1.jpeg", id: "/products/changeover-knife-type-switch" },
  { catName: "Changeover Switch", name: "Change Over Switch with Porcelain Fitting", image: "/2.jpeg", id: "/products/changeover-switch-porcelain-fitting" },
  { catName: "Electrical Switch Box", name: "Reversing Switch (Reverse & Forward Switch)", image: "/3.jpeg", id: "/products/reversing-switch" },
  { catName: "Electrical Switch Box", name: "Electrical Main Switch Box (5A)", image: "/4.jpeg", id: "/products/electrical-main-switch-box-5a" },
  { catName: "Distribution Box", name: "Electrical Power Distribution Box", image: "/3.jpeg", id: "/products/electrical-power-distribution-box" },
  { catName: "Distribution Box", name: "Single Phase Power Distribution Box", image: "/4.jpeg", id: "/products/single-phase-power-distribution-box" },
  { catName: "Switchgear", name: "HRC Type Switchgear", image: "/4.jpeg", id: "/products/hrc-type-switchgear" },
  { catName: "Switchgear", name: "Industrial Electrical Switch Gear", image: "/4.jpeg", id: "/products/industrial-electrical-switch-gear" },
];

export default function ProductRange() {
  return (
    <section className="py-10 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Our Product Range
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We offer a comprehensive range of high-quality electrical distribution solutions.
          </p>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {products.map((item, index) => (
            <SwiperSlide key={index}>
              <Link href={item.id}>
                <div className="w-full bg-white rounded-xl shadow-md p-4 flex flex-col group hover:-translate-y-2 transition-all duration-300">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-55 w-full object-cover mb-4 rounded-lg"
                  />

                  <h3 className="line-clamp-2 min-h-[3.5rem] flex items-center text-lg font-semibold text-gray-800 mb-3 text-center">
                    {item.name}
                  </h3>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-sm text-gray-800 gap-2">
                      <FaTag className="text-gray-600" />
                      <span>{item.catName}</span>
                    </div>

                    <div className="text-sm flex items-center gap-1 text-blue-600 font-medium opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <span>View</span>
                      <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}