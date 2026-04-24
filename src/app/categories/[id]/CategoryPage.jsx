"use client"
import { category, products } from '@/data/data'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React from 'react'
import { motion } from "framer-motion";
import { FaArrowRight, FaTag } from "react-icons/fa";

export default function CategoryPage() {
    const { id } = useParams()
    const cat = category.find((i) => (i.id == id))
    const catProduct = products.filter((i) => (i.catId == id))

    return (<>
        <section className="relative w-full h-62 md:h-88 flex items-center justify-center text-white">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('/b3.jpg')", // change path
                }}
            />

            <div className="absolute inset-0 bg-black/50" />
            <div className="relative z-10 flex flex-col items-center text-center px-4">
                <div className="flex items-center gap-2 text-sm md:text-base">
                    <Link href="/" className="hover:underline">
                        Home
                    </Link>
                    <span>/</span>
                    <Link href="/categories" className="hover:underline">
                        Categories
                    </Link>
                    <span>/</span>
                    <span className="text-gray-300">{cat.name}</span>
                </div>

                {/* Title */}
                <h1 className="text-2xl md:text-5xl font-bold mb-2">
                    {cat.name}
                </h1>
            </div>
        </section>

        <section className="bg-gray-200 px-4 lg:px-15 py-10">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {catProduct.map((i, idx) => (
                    <motion.div
                        key={i.id}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1, duration: 0.4 }}
                        whileHover={{ scale: 1.05 }}
                        className="group"
                    >
                        <Link href={`/products/${i.id}`}>
                            <div className="bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer transition-all duration-300 group-hover:shadow-xl h-full flex flex-col">
                                <div className="overflow-hidden">
                                    <img
                                        src={i.image}
                                        alt={i.name}
                                        className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>

                                <div className="px-5 py-2 flex flex-col gap-2">
                                    <h2 className="text-lg flex items-center font-semibold text-gray-800 group-hover:text-black transition line-clamp-2 min-h-[3.5rem]">
                                        {i.name}
                                    </h2>

                                    <div className='flex justify-between'>
                                        <div className="flex items-center text-sm text-gray-800 gap-2">
                                            <FaTag className="text-gray-600" />
                                            <span>{i.catName}</span>
                                        </div>

                                        <div className="flex items-center gap-2 text-blue-600 font-medium opacity-0 group-hover:opacity-100 transition-all duration-300">
                                            <span>View Product</span>
                                            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </section>
    </>)
}
