"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from 'next/link';

export default function Blog() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/api/blog")
            .then((r) => r.json())
            .then((b) => {
                setBlogs(b);
                setLoading(false);
            });
    }, []);

    return (<>
        <section className="relative w-full h-62 md:h-88 flex items-center justify-center text-white">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('/bg2.jpg')", // change path
                }}
            />

            <div className="absolute inset-0 bg-black/50" />
            <div className="relative z-10 flex flex-col items-center text-center px-4">
                <div className="flex items-center gap-2 text-sm md:text-base">
                    <Link href="/" className="hover:underline">
                        Home
                    </Link>
                    <span>/</span>
                    <span className="text-gray-300">Articles</span>
                </div>

                {/* Title */}
                <h1 className="text-2xl md:text-5xl font-bold mb-2">
                    Our Articles
                </h1>
            </div>
        </section>

        <section className="py-10 md:px-15 px-5">
            <div className="text-center mb-10">
                <h1 className="text-3xl md:text-5xl font-bold text-black">
                    Our Articles
                </h1>
                <div className="w-20 h-1 bg-gray-800 mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {(loading ? Array(4).fill({}) : blogs).map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className="bg-white border border-gray-100 rounded-xl shadow-md overflow-hidden"
                    >
                        {/* Image */}
                        {loading ? (
                            <div className="w-full h-48 bg-gray-200 animate-pulse"></div>
                        ) : (
                            <img
                                src={item.image}
                                alt="article"
                                className="w-full h-48 object-cover"
                            />
                        )}

                        {/* Content */}
                        <div className="p-4 border-t border-t-gray-100">
                            {loading ? (
                                <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                            ) : (
                                <p className="text-black font-semibold text-lg line-clamp-2">
                                    {item.title}
                                </p>
                            )}

                            {loading ? (
                                <div className="h-4 mt-2 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                            ) : (
                                <Link href={`/our-articles/${item.permalink}`} className="text-gray-800 pt-2 hover:underline font-medium text-sm">
                                    Read more →
                                </Link>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    </>)
}
