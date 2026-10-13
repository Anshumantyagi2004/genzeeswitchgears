"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
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
        className="h-[50vh] md:h-[70vh] xl:h-screen lg:h-[70vh]"
      >
<SwiperSlide>
  <div className="relative w-full h-full">
    <Image
      src="/homeBanner.webp"
      alt="Slide 1"
      fill
      priority
      sizes="100vw"
      className="object-cover hidden lg:block"
      style={{ objectPosition: "50% 60%" }}
    />
    <Image
      src="/mobile-banner-1.webp"
      alt="Slide 1 Mobile"
      fill
      priority
      sizes="100vw"
      className="object-cover block lg:hidden"
      style={{ objectPosition: "50% 60%" }}
    />
  </div>
</SwiperSlide>

<SwiperSlide>
  <div className="relative w-full h-full">
    <Image
      src="/homeBanner2.webp"
      alt="Slide 2"
      fill
      sizes="100vw"
      className="object-cover hidden lg:block"
      style={{ objectPosition: "50% 65%" }}
    />
    <Image
      src="/mobile-banner-2.webp"
      alt="Slide 2 Mobile"
      fill
      sizes="100vw"
      className="object-cover block lg:hidden"
      style={{ objectPosition: "50% 65%" }}
    />
  </div>
</SwiperSlide>
      </Swiper>
    </div>
  );
}