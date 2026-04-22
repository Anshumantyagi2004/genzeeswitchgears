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
        className="h-[60vh] lg:h-[90vh]"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative w-full h-full">

            {/* Desktop Image */}
            <Image
              src="/homeBanner.webp"
              alt="Slide 1"
              fill
              className="object-cover hidden lg:block"
              style={{ objectPosition: "50% 60%" }}
            />

            {/* Mobile Image */}
            <Image
              src="/mobileBanner (1).webp"
              alt="Slide 1 Mobile"
              fill
              className="object-cover block lg:hidden"
              style={{ objectPosition: "50% 60%" }}
            />

          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative w-full h-full">

            {/* Desktop Image */}
            <Image
              src="/homeBanner2.webp"
              alt="Slide 2"
              fill
              className="object-cover hidden lg:block"
              style={{ objectPosition: "50% 65%" }}
            />

            {/* Mobile Image */}
            <Image
              src="/mobileBanner (2).webp"
              alt="Slide 2 Mobile"
              fill
              className="object-cover block lg:hidden"
              style={{ objectPosition: "50% 65%" }}
            />

          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}