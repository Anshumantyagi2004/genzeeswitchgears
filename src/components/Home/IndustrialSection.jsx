"use client";

import { motion } from "framer-motion";

export default function IndustrialSection() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false }}
          className="flex justify-center"
        >
          <img
            src="/3.jpeg" // 👉 replace with your image
            alt="Industrial Switchgear"
            className="w-full max-w-[600px] rounded-xl shadow-lg object-cover"
          />
        </motion.div>

        {/* RIGHT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false }}
          className="space-y-5"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
            Industrial Switchgear Manufacturer
          </h1>

          <p className="text-gray-700 leading-relaxed">
            Genzee Switchgears Private Limited is a trusted name in the electrical
            industry, recognized as a leading Industrial Switchgear Manufacturer
            delivering reliable and high-performance power distribution solutions.
            We specialize in manufacturing advanced systems including Single Phase
            Switchgear, Three Phase Switch Gear, and 440v Industrial Switchgear,
            designed to meet the diverse requirements of industrial and commercial
            applications.
          </p>

          <p className="text-gray-700 leading-relaxed">
            With a strong focus on innovation, quality, and precision engineering,
            we have also established ourselves as a dependable MCB Box Manufacturer
            and MCB Distribution Board Manufacturer. Our product range, including
            TPN Distribution Board and Three Phase Power Distribution Box, is built
            to ensure safety, efficiency, and long-term durability.
          </p>

          <p className="text-gray-700 leading-relaxed">
            We are committed to maintaining the highest standards while delivering
            customized solutions that meet modern electrical demands.
          </p>
        </motion.div>

      </div>
    </section>
  );
}