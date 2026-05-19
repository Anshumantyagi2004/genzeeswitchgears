"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import {
  Factory,
  Building2,
  HardHat,
  Wrench,
  SunMedium,
  TowerControl,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const industries = [
  {
    title: "Factories",
    image:
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=1200&auto=format&fit=crop",
    icon: Factory,
  },
  {
    title: "Construction Projects",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200&auto=format&fit=crop",
    icon: HardHat,
  },
  {
    title: "Commercial Buildings",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    icon: Building2,
  },
  {
    title: "Electrical Contractors",
    image:
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=1200&auto=format&fit=crop",
    icon: Wrench,
  },
  {
    title: "Solar Industry",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1200&auto=format&fit=crop",
    icon: SunMedium,
  },
  {
    title: "Infrastructure Projects",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1200&auto=format&fit=crop",
    icon: TowerControl,
  },
];

export default function Industries() {
  return (
    <section className="relative overflow-hidden bg-white py-8 md:py-11 px-4">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-52 md:w-72 h-52 md:h-72 bg-orange-100 blur-[100px] rounded-full -z-10"></div>
      <div className="absolute bottom-0 right-0 w-52 md:w-72 h-52 md:h-72 bg-blue-100 blur-[100px] rounded-full -z-10"></div>

      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <p className="text-orange-500 font-semibold uppercase tracking-wide text-xs md:text-sm">
            Industries We Serve
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#0F2257] mt-2 leading-tight">
            Powering Every Industry
          </h2>
        </motion.div>

        {/* DESKTOP GRID */}
        <div className="hidden md:grid grid-cols-3 lg:grid-cols-6 gap-5">
          {industries.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="group relative"
              >
                
                <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 h-full">
                  
                  {/* Image */}
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition duration-700"
                    />

                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition"></div>
                  </div>

                  {/* Icon */}
                  <div className="relative flex justify-center -mt-7 z-10">
                    <div className="w-14 h-14 rounded-full bg-white shadow-lg border-4 border-white flex items-center justify-center text-[#0F4C9A]">
                      <Icon size={24} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="px-3 pb-5 pt-3 text-center">
                    <h3 className="text-base font-semibold text-[#0F2257] leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* MOBILE SWIPER */}
        <div className="block md:hidden">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={16}
            slidesPerView={2}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            {industries.map((item, index) => {
              const Icon = item.icon;

              return (
                <SwiperSlide key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                    }}
                    viewport={{ once: true }}
                    className="group relative pb-2"
                  >
                    
                    <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
                      
                      {/* Image */}
                      <div className="relative h-32 overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />

                        <div className="absolute inset-0 bg-black/10"></div>
                      </div>

                      {/* Icon */}
                      <div className="relative flex justify-center -mt-6 z-10">
                        <div className="w-12 h-12 rounded-full bg-white shadow-lg border-4 border-white flex items-center justify-center text-[#0F4C9A]">
                          <Icon size={20} />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="px-2 pb-4 pt-3 text-center">
                        <h3 className="text-xs font-semibold text-[#0F2257] leading-snug">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}   