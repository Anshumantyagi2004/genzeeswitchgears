"use client";

import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa6";
import { toast } from "react-hot-toast";

import { User, Mail, Phone, MessageSquare, CheckCircle } from "lucide-react";

import Link from "next/link";

const fields = [
  {
    name: "contactPerson",
    type: "text",
    placeholder: "Your Name",
    icon: User,
  },
  {
    name: "email",
    type: "email",
    placeholder: "Your Email",
    icon: Mail,
  },
  {
    name: "phone",
    type: "tel",
    placeholder: "Phone Number",
    icon: Phone,
  },
  {
    name: "message",
    type: "textarea",
    placeholder: "Your Requirement",
    icon: MessageSquare,
  },
];

export default function Hero() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const data = {
      platform: `Genzee Switchgears Hero Form`,
      platformEmail: "genzeeswitchgears@yahoo.com",
      name: formData.get("contactPerson"),
      email: formData.get("email"),
      company: "NA",
      phone: formData.get("phone"),
      product: "Switchgears",
      place: "Delhi",
      message: formData.get("message"),
    };

    if (!/^[6-9]\d{9}$/.test(data.phone)) {
      return toast.error("Enter Valid 10 Digit Phone Number");
    }

    try {
      setLoading(true);

      const res = await axios.post(
        "https://brandbnalo.com/api/form/add",
        data,
        {
          validateStatus: (s) => s >= 200 && s < 500,
        },
      );

      if (res.status >= 200 && res.status < 300) {
        toast.success("Inquiry Submitted Successfully");
        e.target.reset();
      }
    } catch (err) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* ================= DESKTOP DESIGN ================= */}
      <section className="relative hidden md:block min-h-screen  overflow-hidden">
        {/* Background */}
        <div className="absolute h-full  inset-0">
          <Image
            src="/desk-banner.webp"
            alt="Hero Banner"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Glow */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/20 blur-[120px] rounded-full z-10"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/20 blur-[120px] rounded-full z-10"></div>

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 h-full flex items-center">
          <div className="grid lg:grid-cols-3  items-center ">
            {/* Empty Left */}
            <div></div>

            {/* Empty Center */}
            <div></div>

            {/* Right Form */}
            <motion.div
              initial={{ opacity: 0, x: 70 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex justify-end w-full ml-2  mt-2"
            >
              <div className="w-full max-w-3xl bg-[#012148]/95 backdrop-blur-2xl border border-white/10 rounded-[32px] p-6 shadow-2xl">
                {" "}
                <h2 className="text-3xl font-bold text-white text-center">
                  Get a Quote
                </h2>
                <p className="text-gray-300 text-center mt-3 text-sm leading-relaxed">
                  Fill out the form and our team will contact you shortly.
                </p>
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-5 mt-8"
                >
                  {fields.map((field, i) => {
                    const Icon = field.icon;

                    return (
                      <div key={i} className="relative">
                        <Icon
                          size={18}
                          className="absolute left-4 top-4 text-gray-400"
                        />

                        {field.type === "textarea" ? (
                          <textarea
                            rows={4}
                            name={field.name}
                            placeholder={field.placeholder}
                            required
                            className="w-full bg-white/10 border border-white/10 text-white placeholder:text-gray-400 rounded-2xl pl-12 pr-4 py-3 focus:outline-none focus:border-orange-400 transition"
                          />
                        ) : (
                          <input
                            type={field.type}
                            name={field.name}
                            placeholder={field.placeholder}
                            required
                            className="w-full bg-white/10 border border-white/10 text-white placeholder:text-gray-400 rounded-2xl pl-12 pr-4 py-3 focus:outline-none focus:border-orange-400 transition"
                          />
                        )}
                      </div>
                    );
                  })}

                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white py-3 rounded-2xl font-semibold shadow-lg transition-all duration-300"
                  >
                    {loading ? "Submitting..." : "Submit Inquiry"}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>

        {/* WhatsApp */}
        <div className="absolute bottom-8 left-10 z-30">
          <Link
  href="https://wa.me/918865979034?text=Hello%2C%20I%20need%20a%20quotation%20for%20your%20switchgear%20products."
  className="bg-[#ff7200] hover:bg-green-600 whitespace-nowrap text-2xl text-white justify-center flex items-center gap-2 rounded-xl px-3 py-2 transition-all duration-300 shadow-lg"
>
  <FaWhatsapp className="text-2xl" />
  <span className="font-semibold">Share Your Requirements</span>
</Link>
        </div>
      </section>

      {/* ================= MOBILE DESIGN ================= */}
      <section className="block md:hidden bg-[#f5f7fb] overflow-hidden">
        {/* Top Banner */}
        <div className="relative">
          <Image
            src="/mobile-banner-banner.webp"
            alt="Mobile Banner"
            width={1000}
            height={1400}
            className="w-full object-cover"
            priority
          />

          {/* Mobile Buttons */}
          <div className="absolute bottom-5 left-0 right-0 px-4 flex gap-3">
            {/* <Link
              href="https://wa.me/+918865979034"
              className="flex-1 bg-green-500 text-white font-semibold py-3 rounded-xl shadow-lg flex items-center justify-center gap-2"
            >
              <FaWhatsapp className="text-lg" />
              Whatsapp
            </Link> */}
          </div>
        </div>

        {/* Form Card */}
        <div className="px-4 -mt-6 relative z-20 pb-8">
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-[28px] shadow-2xl p-5"
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold text-[#012148]">
                GET INSTANT QUOTE
              </h2>

              <div className="w-16 h-1 bg-orange-500 rounded-full mx-auto mt-3"></div>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-8">
              {fields.map((field, i) => {
                const Icon = field.icon;

                return (
                  <div key={i} className="relative">
                    <Icon
                      size={18}
                      className="absolute left-4 top-4 text-gray-400"
                    />

                    {field.type === "textarea" ? (
                      <textarea
                        rows={4}
                        name={field.name}
                        placeholder={field.placeholder}
                        required
                        className="w-full border border-gray-200 text-gray-800 placeholder:text-gray-400 rounded-2xl pl-12 pr-4 py-3 focus:outline-none focus:border-orange-400 transition"
                      />
                    ) : (
                      <input
                        type={field.type}
                        name={field.name}
                        placeholder={field.placeholder}
                        required
                        className="w-full border border-gray-200 text-gray-800 placeholder:text-gray-400 rounded-2xl pl-12 pr-4 py-3 focus:outline-none focus:border-orange-400 transition"
                      />
                    )}
                  </div>
                );
              })}

              <button
                type="submit"
                disabled={loading}
                className="bg-gradient-to-r from-orange-500 to-amber-500 text-white py-4 rounded-2xl font-bold text-lg shadow-lg"
              >
                {loading ? "Submitting..." : "REQUEST QUOTE"}
              </button>
            </form>

            {/* Bottom Text */}
            <div className="flex items-center justify-center gap-2 mt-5 text-gray-600 text-sm">
              <CheckCircle size={18} className="text-[#012148]" />
              <span>We will contact you within 30 minutes!</span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
