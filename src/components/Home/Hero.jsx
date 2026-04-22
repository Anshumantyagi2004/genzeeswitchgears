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
        className="h-[90vh]"
      >

        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <Image
              src="/homeBanner.webp"
              alt="Slide 1"
              fill
              style={{objectPosition:"50% 60%"}}
              className="object-cover"
            />
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <Image
              src="/homeBanner2.webp"
              alt="Slide 2"
               style={{objectPosition:"50% 65%"}}
              fill
              className="object-cover"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}