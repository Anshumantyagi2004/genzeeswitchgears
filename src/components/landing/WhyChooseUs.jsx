"use client";

import { motion } from "framer-motion";

import {
  Factory,
  ShieldCheck,
  Package,
  Truck,
  BadgeIndianRupee,
  Users,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const features = [
  {
    title: "Direct Manufacturer",
    desc: "Get factory direct pricing without any middlemen.",
    icon: Factory,
  },
  {
    title: "Premium Quality",
    desc: "Products manufactured using high grade materials.",
    icon: ShieldCheck,
  },
  {
    title: "Bulk Supply",
    desc: "We accept bulk orders with consistent quality and timely delivery.",
    icon: Package,
  },
  {
    title: "Fast Delivery",
    desc: "Quick dispatch and safe delivery across all India.",
    icon: Truck,
  },
  {
    title: "Competitive Price",
    desc: "Best market prices with unmatched product quality.",
    icon: BadgeIndianRupee,
  },
  {
    title: "Experienced Team",
    desc: "Skilled professionals with deep industry experience.",
    icon: Users,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-10 md:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#0B2C66] uppercase tracking-wide">
            Why Choose Genzee Switchgears
          </h2>

          <div className="w-16 h-1 bg-orange-500 rounded-full mx-auto mt-4"></div>
        </motion.div>

        {/* DESKTOP GRID */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {features.map((item, index) => {
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
                whileHover={{ y: -5 }}
                className="group bg-white border border-gray-200 rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  
                  {/* Icon */}
                  <div className="shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-[#0B2C66]/5 flex items-center justify-center text-[#0B2C66] group-hover:bg-[#0B2C66] group-hover:text-white transition-all duration-300">
                      <Icon size={30} />
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-[#0B2C66] leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 text-sm md:text-base mt-2 leading-relaxed">
                      {item.desc}
                    </p>
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
            slidesPerView={2}
            spaceBetween={14}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <SwiperSlide key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="group bg-white border border-gray-200 rounded-2xl p-4 shadow-sm min-h-[220px]"
                  >
                    <div className="flex flex-col items-center text-center">
                      
                      {/* Icon */}
                      <div className="md:w-12 md:h-12 w-20 h-20 rounded-xl bg-[#0B2C66]/5 flex items-center justify-center text-[#0B2C66] mb-4">
                        <Icon size={34} />
                      </div>

                      {/* Content */}
                      <h3 className="text-sm font-bold text-[#0B2C66] leading-snug">
                        {item.title}
                      </h3>

                      <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                        {item.desc}
                      </p>
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