"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaLocationDot, } from "react-icons/fa6";
import { BiPhoneCall } from "react-icons/bi";

export default function Footer() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();
    const adminLayout = pathname.startsWith("/admin")
    if (adminLayout) return null;

    return (
        <footer className="bg-gray-900 text-gray-300 border-t border-t-white">
            {/* Top Grid */}
            <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Company Info */}
                <div>
                    <img src="/logo.webp" alt="logo" className="h-20 mb-3 bg-white px-2 py-1 rounded-md w-40" />
                    <p className="text-base">
                        Welcome to Genzee Switchgears, Private Limited is a trusted name in the electrical industry, recognized as a leading Industrial Switchgear Manufacturer.
                    </p>

                    <div className="mt-3 text-base flex items-center gap-2">
                        <BiPhoneCall size={18} />
                        <span>+91 9136508089</span>
                    </div>

                    <div className="text-base flex items-start gap-2 mt-2">
                        <FaLocationDot size={18} className="" />
                        <span>
                            First Floor, 345a-345b, Sahibabad, <br />
                            Gali No 3 Ghaziabad - 201005, <br /> Uttar Pradesh, India
                        </span>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-white font-semibold mb-3">About</h3>
                    <ul className="space-y-2 text-base">
                        <li><Link href="/" className="hover:text-blue-500">Home</Link></li>
                        <li><Link href="/products" className="hover:text-blue-500">Products</Link></li>
                        <li><Link href="/about-us" className="hover:text-blue-500">About Us</Link></li>
                        <li><Link href="/articles" className="hover:text-blue-500">Articles</Link></li>
                        <li><Link href="/contact-us" className="hover:text-blue-500">Contact Us</Link></li>
                        <li><Link href="/sitemap" className="hover:text-blue-500">Sitemap</Link></li>
                    </ul>
                </div>

                {/* Products */}
                <div>
                    <h3 className="text-white font-semibold mb-3">Categories</h3>
                    <ul className="space-y-2 text-base">
                        <li><Link href="/categories/mcb-box" className="hover:text-blue-500">MCB Box</Link></li>
                        <li><Link href="/categories/busbar-chamber" className="hover:text-blue-500">Busbar Chamber</Link></li>
                        <li><Link href="/categories/changeover-switch" className="hover:text-blue-500">Changeover Switch</Link></li>
                        <li><Link href="/categories/electrical-main-switch-box" className="hover:text-blue-500">Electrical Main Switch Box</Link></li>
                        <li><Link href="/categories/distribution-box" className="hover:text-blue-500">Distribution Box</Link></li>
                        <li><Link href="/categories/kitkat-cutouts-fuse" className="hover:text-blue-500">Kitkat Cutouts Fuse</Link></li>
                        <li><Link href="/categories/switchgear" className="hover:text-blue-500">Switchgear</Link></li>
                    </ul>
                </div>

                {/* Certificate */}
                <div>
                    <h3 className="text-white font-semibold mb-3">Trust Elite</h3>
                    <p className="text-base">
                        We are proud to present the Trust Elite Certificate of Excellence
                        to Genzee Switchgears, recognizing their commitment to exceptional
                        customer service and business practices.
                    </p>

                    <div className="mt-4 flex justify-center md:justify-start">
                        <img
                            src="/trustseal.webp"
                            alt="Trust Seal"
                            onClick={() => setOpen(true)}
                            className="h-20 cursor-pointer hover:scale-105 transition"
                        />
                    </div>
                </div>
            </div>

            {/* Popup */}
            {/* <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/70 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center px-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <div className="relative bg-white rounded-xl shadow-lg max-w-2xl w-full">

                <button
                  onClick={() => setOpen(false)}
                  className="absolute top-3 right-3 text-gray-600 hover:text-black"
                >
                  <X size={24} />
                </button>

                <img
                  src="/cert.webp"
                  alt="Trust Seal Large"
                  className="w-full h-auto object-contain rounded"
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence> */}

            {/* Bottom Bar */}
            <div className="border-t flex justify-around border-gray-700 text-center py-4 text-base text-gray-300">
                <p>© 2026 Genzee Switchgears, All Rights Reserved.</p>
                <p>Website Designed By <a target="blank" className='hover:underline' href="https://promozionebranding.com/">Promozione Branding Pvt Ltd.</a></p>
            </div>
        </footer>
    );
}