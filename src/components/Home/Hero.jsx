"use client";

import React from "react";
import Image from "next/image";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Hero() {
  return (
    <div className="w-full">

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        speed={800}
        loop={true}
        className="h-[70vh]"
      >

        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative w-full h-[70vh]">
            <Image
              src="/1.jpeg"
              alt="Slide 1"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center">
              <h2 className="text-4xl font-bold mb-4">
                High Quality Switchgears
              </h2>
              <p className="mb-4">Reliable & Safe Electrical Solutions</p>
              <button className="bg-blue-600 px-6 py-2 rounded-lg">
                Learn More
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative w-full h-[70vh]">
            <Image
              src="/2.jpeg"
              alt="Slide 2"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center">
              <h2 className="text-4xl font-bold mb-4">
                Industrial Power Systems
              </h2>
              <p className="mb-4">Built for Performance & Durability</p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative w-full h-[70vh]">
            <Image
              src="/3.jpeg"
              alt="Slide 3"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center">
              <h2 className="text-4xl font-bold mb-4">
                Trusted Engineering
              </h2>
              <p className="mb-4">Your Partner in Electrical Safety</p>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
}