"use client"
import { useParams } from "next/navigation"
import React, { useState } from "react"
import { products } from "@/data/data"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { FaWhatsapp, FaFilePdf, FaEnvelope, FaTag, FaTags, FaArrowRight } from "react-icons/fa"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Thumbs, EffectFade } from "swiper/modules"
import "swiper/css"
import "swiper/css/thumbs"
import "swiper/css/effect-fade"
import { BsEye } from "react-icons/bs"
import { RxCross2 } from "react-icons/rx"


export default function ProductPage() {
  const { id } = useParams()
  const product = products.find((p) => p.id === id)
  const relProduct = products.filter((p) => p.catId === product.catId)

  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const [activeTab, setActiveTab] = useState("overview")
  const [isOpen, setIsOpen] = useState(false)
  const [activeImg, setActiveImg] = useState(null)

  if (!product) return <div className="text-center py-20">Not found</div>

  const tabs = [
    { id: "overview", label: "Overview", data: product["Product Overview"] },
    { id: "features", label: "Features", data: product["Key Features"] },
    { id: "why", label: "Why Us", data: product["Why Choose Genzee Switchgears Private Limited"] },
    {
      id: "specs",
      label: "Specifications",
      data: product.specs || product.variants
    },
  ]

  return (
    <div className="bg-gray-200">
      <div className="px-4 md:px-15 py-4 text-base text-gray-600">
        <Link href="/" className="hover:text-black">Home</Link> /{" "}
        <Link href="/products" className="hover:text-black">Products</Link> /{" "}
        <span className="text-black font-medium">{product.name}</span>
      </div>

      <div className="px-4 md:px-15 py-10 grid grid-cols-1 md:grid-cols-2 gap-10 bg-white">
        <motion.div
          initial={{ x: -40 }}
          animate={{ x: 0 }}
          className="h-full md:h-[400px] w-full"
        >
          <Swiper
            modules={[Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            speed={800}
            loop={true}
            className="h-full w-full rounded-2xl overflow-hidden"
          >
            {product.images.map((img, i) => (
              <SwiperSlide key={i} className="relative">
                <img
                  src={img}
                  alt=""
                  className="w-full h-full object-cover"
                />

                <button onClick={() => {
                  setActiveImg(img)
                  setIsOpen(true)
                }} className="absolute p-2 rounded-full bottom-2 right-2 border border-gray-100 bg-gray-800 hover:bg-gray-900">
                  <BsEye size={20} />
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col"
        >
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            {product.name}
          </h1>

          <div className="flex items-center text-base bg-gray-800 text-gray-200 gap-2 px-3 py-1 rounded-2xl w-fit">
            <FaTag className="text-gray-200" />
            <span>{product.catName}</span>
          </div>

          <p className="text-gray-800 font-medium leading-relaxed mt-6">
            {product["Product Overview"][0]}
          </p>

          <div className="flex flex-wrap gap-4 mt-4">

            <a href="https://wa.me/+919136508089"
              target="_blank"
              className="flex items-center gap-2 bg-green-500 text-white px-5 py-2 rounded-full hover:bg-green-600 transition"
            >
              <FaWhatsapp /> WhatsApp Now
            </a>

            <a href="tel:+919136508089" className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition">
              <FaEnvelope /> Inquiry Now
            </a>

            <button className="flex items-center gap-2 bg-gray-800 text-white px-5 py-2 rounded-full hover:bg-black transition">
              <FaFilePdf /> Brochure
            </button>

          </div>
        </motion.div>
      </div>

      <div className="px-4 md:px-15 py-10">
        <div className="flex flex-wrap gap-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full text-sm transition ${activeTab === tab.id
                ? "bg-black text-white"
                : "bg-gray-300 border border-gray-50 hover:border-gray-400 text-black"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mt-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-6 rounded-xl shadow"
            >
              {activeTab !== "specs" ? (
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  {tabs
                    .find((t) => t.id === activeTab)
                    .data.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                </ul>
              ) : product.specs ? (
                // 🔹 Normal Specs View
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.specs.map((spec, i) => {
                    const key = Object.keys(spec)[0]
                    return (
                      <div
                        key={i}
                        className="flex justify-between border p-3 rounded-lg"
                      >
                        <span className="font-medium text-gray-600">
                          {key}
                        </span>
                        <span className="text-gray-800">{spec[key]}</span>
                      </div>
                    )
                  })}
                </div>
              ) : (
                // 🔹 Variants Table View
                <div className="overflow-x-auto">
                  <table className="min-w-full border rounded-lg">
                    <thead className="bg-gray-100">
                      <tr>
                        {Object.keys(product.variants[0]).map((key, i) => (
                          <th key={i} className="text-left p-3 border-b text-gray-600">
                            {key}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {product.variants.map((variant, i) => (
                        <tr key={i} className="border-t">
                          {Object.values(variant).map((value, j) => (
                            <td key={j} className="p-3 text-gray-800">
                              {value}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <section className="bg-gray-100 px-4 lg:px-15 py-10">
        <h2 className="text-center text-3xl md:text-5xl text-gray-900 mb-6">Related Products</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {relProduct.filter(i => i.id != product.id).slice(0, 6).map((i, idx) => (
            <motion.div
              key={i.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <Link href={`/products/${i.id}`}>
                <div className="bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer transition-all duration-300 group-hover:shadow-xl">
                  <div className="overflow-hidden">
                    <img
                      src={i.image}
                      alt={i.name}
                      className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="px-5 py-2 flex flex-col gap-2">
                    <h2 className="text-lg font-semibold text-gray-800 group-hover:text-black transition">
                      {i.name}
                    </h2>

                    <div className='flex justify-between'>
                      <div className="flex items-center text-sm text-gray-800 gap-2">
                        <FaTags className="text-gray-600" />
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

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)} // outside click
          >
            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white rounded-xl overflow-hidden max-w-3xl w-full mx-4"
              onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
            >

              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-3 z-10 bg-black text-white rounded-full p-2"
              >
                <RxCross2 />
              </button>

              {/* Image */}
              <img
                src={activeImg}
                alt=""
                className="w-full h-[500px] object-contain bg-white"
              />

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}