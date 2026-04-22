"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaPhoneAlt, FaFileAlt, FaEnvelope } from "react-icons/fa";

export default function CTA() {
  return (
    <section
      className="relative py-24 px-6 text-white bg-fixed bg-center bg-cover"
      style={{
        backgroundImage:
          "url('/bg.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-800/60"></div>

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Animated Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold leading-tight"
        >
          Get Reliable Switchgear Solutions for Your Business
        </motion.h2>

        {/* Animated Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-4 text-slate-200 max-w-3xl mx-auto"
        >
          Looking for a trusted Industrial Switchgear Manufacturer? Genzee
          Switchgears Private Limited delivers high-quality solutions including
          Single Phase Switchgear, Three Phase Switch Gear, 440v Industrial
          Switchgear, and complete power distribution systems designed for
          industrial and commercial needs.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          {/* Quote */}
          <Link
            href="/contact-us"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-[#ED3A20] hover:bg-red-600 transition rounded-xl font-semibold shadow-lg"
          >
            <FaFileAlt />
            Get a Quote
          </Link>

          {/* Contact */}
          <Link
            href="/contact-us"
            className="flex items-center justify-center gap-2 px-6 py-3 border border-white/30 hover:border-white transition rounded-xl font-semibold backdrop-blur-md bg-white/10"
          >
            <FaEnvelope />
            Contact Us Today
          </Link>

          {/* Call */}
          <Link
            href="tel:+919136508089"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 transition rounded-xl font-semibold shadow-lg"
          >
            <FaPhoneAlt />
            Request Callback
          </Link>
        </motion.div>
      </div>
    </section>
  );
}