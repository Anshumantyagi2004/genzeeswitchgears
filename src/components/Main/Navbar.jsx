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
import { AiOutlineProduct } from "react-icons/ai";
import { category } from "@/data/data";
import SearchBar from "./SearchBar";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();
    const adminLayout = pathname.startsWith("/admin")
    if (adminLayout) return null;

    const getLinkClass = (path) =>
        `flex items-center gap-2 cursor-pointer px-3 py-1.5 rounded-md transition-all
     ${pathname === path
            ? "bg-gray-800 text-white"
            : "bg-gray-200 text-gray-800 hover:text-blue-600"
        }`;

    return (
        <div className="w-full shadow-md sticky top-0 z-40">
            <div className="bg-[#e5e7eb] text-white text-sm flex justify-between items-center px-4 md:px-6 py-2">
                <div className="block font-bold text-black">
                    GST: 09AAKCG9855E1Z3
                </div>

                <div className="flex gap-4 items-center text-black text-lg ml-auto">
                    <a href="tel:+919136508089" target="_blank" rel="noopener noreferrer">
                        <FaPhoneAlt className="cursor-pointer hover:text-red-400" size={18} />
                    </a>
                    <a href="https://wa.me/+919136508089" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp className="cursor-pointer hover:text-green-500" size={20} />
                    </a>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF className="cursor-pointer hover:text-blue-500" size={18} />
                    </a>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="cursor-pointer hover:text-pink-500" size={18} />
                    </a>
                </div>
            </div>

            <div className="bg-white flex justify-between items-center px-4 md:px-6 py-4">
                <div className="flex items-center gap-2">
                    <Image
                        src="/logo.webp"
                        alt="Genzeeswitchgears Logo"
                        width={60}
                        height={60}
                        className="w-auto h-12"
                    />

                    <span className="text-gray-800 py-2 px-4 text-2xl font-bold rounded-md">Genzee Switchgears</span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-5 text-gray-800 font-medium text-lg">
                    <Link href="/" className={getLinkClass("/")}>
                        <FaHome /> Home
                    </Link>

                    <Link href="/about-us" className={getLinkClass("/about-us")}>
                        <FaInfoCircle /> About
                    </Link>

                    <div className="relative group">
                        <Link href="/products" className={getLinkClass("/products")}>
                            <AiOutlineProduct /> Products
                        </Link>

                        <div className="overflow-y-auto scrollbar-hide border border-gray-400 absolute left-0 top-full mt-3 h-[330px] w-[570px] bg-white shadow-xl rounded-xl p-4 overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                            <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 h-full content-start">
                                {category.map((cat) => (
                                    <Link key={cat.id}
                                        href={`/categories/${cat.id}`}
                                        className="group/card"
                                    >
                                        <div className="border border-gray-300 rounded-lg overflow-hidden hover:shadow-md transition">
                                            <div className="h-30 overflow-hidden">
                                                <img
                                                    src={cat.image}
                                                    alt={cat.name}
                                                    className="w-full h-full object-cover group-hover/card:scale-105 transition duration-300"
                                                />
                                            </div>
                                            <div className="text-center text-sm font-medium py-1 border-t border-gray-200">
                                                {cat.name}
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>

                        </div>
                    </div>

                    <Link href="/our-articles" className={getLinkClass("/our-articles")}>
                        <FaNewspaper /> Articles
                    </Link>

                    <Link href="/contact-us" className={getLinkClass("/contact-us")}>
                        <FaEnvelope /> Contact
                    </Link>

                    {/* Search */}
                    <SearchBar />
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
                    <SearchBar />

                    <Link href="/" className={getLinkClass("/")}>
                        <FaHome /> Home
                    </Link>

                    <Link href="/products" className={getLinkClass("/products")}>
                        <AiOutlineProduct /> Products
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