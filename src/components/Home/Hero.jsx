"use client";

import React from "react";
import { getImageProps } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    alt: "Genzee Switchgears – MCB boxes and busbar chambers",
    desktop: "/homeBanner.webp",
    mobile: "/mobile-banner.webp",
    position: "50% 60%",
  },
  {
    alt: "Genzee Switchgears – industrial switchgear manufacturing",
    desktop: "/homeBanner2.webp",
    mobile: "/mobile-banner-1.webp",
    position: "50% 65%",
  },
];

function Banner({ slide, isFirst }) {
  const common = {
    alt: slide.alt,
    fill: true,
    sizes: "100vw",
    quality: 75,
    ...(isFirst
      ? { loading: "eager", fetchPriority: "high" } // not `preload`: Next docs advise against it when the LCP image differs by viewport
      : { loading: "lazy" }),
    style: { objectFit: "cover", objectPosition: slide.position },
  };

  const { props: desktop } = getImageProps({ ...common, src: slide.desktop });
  const { props: mobile } = getImageProps({ ...common, src: slide.mobile });

  return (
    <picture>
      <source media="(min-width: 1024px)" srcSet={desktop.srcSet} sizes="100vw" />
      <source media="(max-width: 1023px)" srcSet={mobile.srcSet} sizes="100vw" />
      <img {...mobile} alt={slide.alt} />
    </picture>
  );
}

export default function Hero() {
  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        speed={800}
        loop
        className="h-[50vh] md:h-[70vh] lg:h-[70vh] xl:h-screen"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={slide.mobile}>
            <div className="relative w-full h-full">
              <Banner slide={slide} isFirst={i === 0} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}