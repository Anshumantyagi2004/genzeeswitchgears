"use client"
import { useParams } from "next/navigation"
import React, { useState } from "react"
import { products } from "@/data/data"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { FaWhatsapp, FaFilePdf, FaEnvelope, FaTag } from "react-icons/fa"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Thumbs, EffectFade } from "swiper/modules"
import "swiper/css"
import "swiper/css/thumbs"
import "swiper/css/effect-fade"
import { BsEye } from "react-icons/bs"


export default function ProductPage() {
  const { id } = useParams()
  const product = products.find((p) => p.id === id)

  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const [activeTab, setActiveTab] = useState("overview")
  const [isOpen, setIsOpen] = useState(false)
  const [activeImg, setActiveImg] = useState(null)

  if (!product) return <div className="text-center py-20">Not found</div>

  const tabs = [
    { id: "overview", label: "Overview", data: product["Product Overview"] },
    { id: "features", label: "Features", data: product["Key Features"] },
    { id: "why", label: "Why Us", data: product["Why Choose Genzee Switchgears Private Limited"] },
    { id: "specs", label: "Specifications", data: product.specs },
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
          className="h-[400px] w-full"
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

            <a
              href="https://wa.me/your-number"
              target="_blank"
              className="flex items-center gap-2 bg-green-500 text-white px-5 py-2 rounded-full hover:bg-green-600 transition"
            >
              <FaWhatsapp /> WhatsApp Now
            </a>

            <button className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition">
              <FaEnvelope /> Inquiry Now
            </button>

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
              ) : (
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
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

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
                ✕
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