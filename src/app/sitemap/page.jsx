"use client";
import React from 'react'
import { motion } from "framer-motion";
import Link from 'next/link';
import { products, categories, applications, category, serviceLocations } from '@/data/data';

export default function page() {
    const sitemapItems = [
        { name: "Home", link: "/" },
        { name: "Category", link: "/categories" },
        { name: "Product", link: "/products" },
        { name: "About Us", link: "/about-us" },
        { name: "Articles", link: "/our-articles" },
        { name: "Contact", link: "/contact-us" },
    ]

    return (<>
        <section className="relative w-full h-62 md:h-88 flex items-center justify-center text-white">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('/banner.jpg')", // change path
                }}
            />

            <div className="absolute inset-0 bg-black/50" />
            <div className="relative z-10 flex flex-col items-center text-center px-4">
                <div className="flex items-center gap-2 text-sm md:text-base">
                    <Link href="/" className="hover:underline">
                        Home
                    </Link>
                    <span>/</span>
                    <span className="text-gray-300">Sitemap</span>
                </div>

                {/* Title */}
                <h1 className="text-2xl md:text-5xl font-bold mb-2">
                    Sitemap
                </h1>
            </div>
        </section>

        <section className='relative z-10 py-10 px-4'>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-6 text-[#3C2012] text-xl font-semibold">
                {sitemapItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.link}
                        className="p-6 bg-white rounded-xl border border-black content-center
                         hover:border-blue-600 hover:shadow-lg transition-all text-center items-center"
                    >
                        {item.name}
                    </Link>
                ))}
                {category.map((item) => (
                    <Link
                        key={item.name}
                        href={`categories/${item.id}`}
                        className="p-6 bg-white rounded-xl border border-black content-center
                         hover:border-blue-500 hover:shadow-lg transition-all text-center"
                    >
                        {item.name}
                    </Link>
                ))}
                {products.map((item) => (
                    <Link
                        key={item.name}
                        href={`/products/${item.id}`}
                        className="p-6 bg-white rounded-xl border border-black content-center
                         hover:border-blue-600 hover:shadow-lg transition-all text-center"
                    >
                        {item.name}
                    </Link>
                ))}
                {serviceLocations.map((item) => (
                    <Link
                        key={item.id}
                        href={`${item.href}`}
                        className="p-6 bg-white rounded-xl border border-black content-center
                         hover:border-blue-500 hover:shadow-lg transition-all text-center"
                    >
                        Switchgear Manufacturer in {item.label}
                    </Link>
                ))}
            </div>
        </section>
    </>)
}