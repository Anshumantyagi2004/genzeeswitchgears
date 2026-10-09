"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaPhoneAlt, FaFileAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import PopupForm from "./Main/ContactPopup";

export default function CTA2() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section
      className="relative py-9 md:py-15 px-6 text-white bg-fixed bg-center bg-cover"
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
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold leading-tight"
        >
         Talk to Our Experts  
        </motion.h2>

        {/* Animated Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-4 text-slate-200 max-w-3xl mx-auto"
        >
          Need MCB boxes for your home, shop, or project ? You can also fill in the form below with your required quantity, and city. Our team will reply with the price and delivery time.
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
          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-[#ED3A20] hover:bg-red-600 transition rounded-xl font-semibold shadow-lg"
          >
            <FaFileAlt />
            Get a Quote
          </button>

          {/* Contact */}
          <Link
            href="https://wa.me/+919136508089"
            className="flex items-center justify-center gap-2 px-6 py-3 border border-white/30 hover:border-white transition rounded-xl font-semibold backdrop-blur-md bg-white/10"
          >
           <FaWhatsapp size={30} />
            WhatsApp Now
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

      <PopupForm
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        formType="contact"
      />
    </section>
  );
}