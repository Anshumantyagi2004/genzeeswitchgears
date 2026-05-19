"use client";

import { motion } from "framer-motion";
import {
  Users,
  PackageCheck,
  Globe2,
  ShieldCheck,
} from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "500+",
    label: "Happy Clients",
  },
  {
    icon: PackageCheck,
    number: "1000+",
    label: "Bulk Orders",
  },
  {
    icon: Globe2,
    number: "PAN ",
    label: "India Supply",
  },
  {
    icon: ShieldCheck,
    number: "100%",
    label: "Quality Tested",
  },
];

export default function Example() {
  return (
    <section className="relative overflow-hidden bg-white py-10 md:py-16 px-4">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-orange-100 blur-[120px] rounded-full -z-10"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-100 blur-[120px] rounded-full -z-10"></div>

      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            {/* Top Tag */}
            <span className="inline-block text-orange-500 uppercase text-xs md:text-sm font-bold tracking-wider">
              Trusted Across India
            </span>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B2C66] leading-tight mt-3">
              Quality You Can Trust <br />
              Service You Can Rely On
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mt-6 max-w-2xl">
              Genzee Switchgears is a trusted name in the electrical
              industry known for premium quality products,
              transparent business dealings, and dependable customer support
              across India.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mt-10">

              {stats.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    viewport={{ once: true }}
                    className="group"
                  >

                    <div className="bg-white border border-gray-200 rounded-2xl p-4 text-center shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">

                      {/* Icon */}
                      <div className="w-12 h-12 rounded-xl bg-[#0B2C66]/5 text-[#0B2C66] flex items-center justify-center mx-auto group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                        <Icon size={24} />
                      </div>

                      {/* Number */}
                      <h3 className="text-xl md:text-2xl font-bold text-orange-500 mt-4">
                        {item.number}
                      </h3>

                      {/* Label */}
                      <p className="text-sm text-[#0B2C66] font-medium mt-1">
                        {item.label}
                      </p>
                    </div>

                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* RIGHT IMAGES */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >

            {/* Large Image */}
            <div className="col-span-2 md:col-span-1 md:row-span-2 relative overflow-hidden rounded-3xl shadow-xl group h-[260px] md:h-full">
              <img
                src="/Full Frame MCB Box1.webp"
                alt="Manufacturing"
                className="w-full h-full object-contain bg-pink-50 md:object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>

            {/* Top Right */}
            <div className="relative overflow-hidden rounded-3xl shadow-xl group h-[180px]">
              <img
                src="/Change Over Switch1.webp"
                alt="Switchgear"
                className="w-full h-full bg-orange-50 object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Bottom Right */}
            <div className="relative overflow-hidden rounded-3xl shadow-xl group h-[180px]">
              <img
                src="/Electrical Main Switch Box.webp"
                alt="Warehouse"
                className="w-full h-full bg-orange-50 object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}