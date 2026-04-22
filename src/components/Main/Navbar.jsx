"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
    FaPhoneAlt,
    FaWhatsapp,
    FaFacebookF,
    FaInstagram,
    FaHome,
    FaInfoCircle,
    FaEnvelope,
    FaNewspaper,
} from "react-icons/fa";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    const getLinkClass = (path) =>
        `flex items-center gap-2 cursor-pointer px-3 py-1.5 rounded-md transition-all
     ${pathname === path
            ? "bg-gray-800 text-white"
            : "bg-gray-100 text-gray-700 hover:text-blue-600"
        }`;

    return (
        <div className="w-full shadow-md relative sticky top-0 z-40">
            <div className="bg-gray-900 text-white text-sm flex justify-between items-center px-4 md:px-6 py-2">
                <div className="block">
                    GST: 22ABCDE1234F1Z5
                </div>

                <div className="flex gap-4 items-center text-lg ml-auto">
                    <FaPhoneAlt className="cursor-pointer hover:text-red-400" size={18} />
                    <FaWhatsapp className="cursor-pointer hover:text-green-500" size={20} />
                    <FaFacebookF className="cursor-pointer hover:text-blue-500" size={18} />
                    <FaInstagram className="cursor-pointer hover:text-pink-500" size={18} />
                </div>
            </div>

            <div className="bg-white flex justify-between items-center px-4 md:px-6 py-4">
                <div className="flex items-center gap-3">
                    <Image
                        src="/logo.webp"
                        alt="Genzeeswitchgears Logo"
                        width={60}
                        height={60}
                        className="w-auto h-12"
                    />
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-5 text-gray-800 font-medium text-lg">
                    <Link href="/" className={getLinkClass("/")}>
                        <FaHome /> Home
                    </Link>

                    <Link href="/about-us" className={getLinkClass("/about-us")}>
                        <FaInfoCircle /> About
                    </Link>

                    <Link href="/contact-us" className={getLinkClass("/contact-us")}>
                        <FaEnvelope /> Contact
                    </Link>

                    <Link href="/our-articles" className={getLinkClass("/our-articles")}>
                        <FaNewspaper /> Articles
                    </Link>

                    {/* Search */}
                    <div className="flex items-center border border-gray-800 rounded-md px-3 py-2">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="outline-none text-base"
                        />
                        <FiSearch className="ml-2 text-gray-800" />
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden text-2xl cursor-pointer bg-gray-800 text-white px-3 py-2 rounded-md">
                    {menuOpen ? (
                        <FiX onClick={() => setMenuOpen(false)} />
                    ) : (
                        <FiMenu onClick={() => setMenuOpen(true)} />
                    )}
                </div>
            </div>

            {menuOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-lg z-50 p-5 flex flex-col gap-4 lg:hidden">
                    <div className="flex items-center border border-gray-800 rounded-md px-3 py-2 text-gray-800">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="outline-none text-base w-full"
                        />
                        <FiSearch className="ml-2 text-gray-800" />
                    </div>

                    <Link href="/" className={getLinkClass("/")}>
                        <FaHome /> Home
                    </Link>

                    <Link href="/about-us" className={getLinkClass("/about-us")}>
                        <FaInfoCircle /> About
                    </Link>

                    <Link href="/contact-us" className={getLinkClass("/contact-us")}>
                        <FaEnvelope /> Contact
                    </Link>

                    <Link href="/our-articles" className={getLinkClass("/our-articles")}>
                        <FaNewspaper /> Articles
                    </Link>
                </div>
            )}
        </div>
    );
}