"use client";

import { motion } from "framer-motion";
import {
  FaIndustry,
  FaBuilding,
  FaTools,
  FaWarehouse,
  FaBolt,
  FaHome,
} from "react-icons/fa";

const industries = [
  {
    title: "Industrial Manufacturing Units",
    desc: "Robust switchgear for heavy electrical loads and uninterrupted operations.",
    icon: FaIndustry,
  },
  {
    title: "Commercial Buildings & Complexes",
    desc: "Safe and efficient power distribution for offices, malls, and commercial spaces.",
    icon: FaBuilding,
  },
  {
    title: "Infrastructure & Construction Projects",
    desc: "Reliable electrical systems for large-scale modern infrastructure.",
    icon: FaTools,
  },
  {
    title: "Warehouses & Industrial Facilities",
    desc: "Stable power flow ensuring smooth equipment and operations.",
    icon: FaWarehouse,
  },
  {
    title: "Power Distribution & Utilities",
    desc: "Efficient energy distribution with advanced load management systems.",
    icon: FaBolt,
  },
  {
    title: "Residential & Light Commercial",
    desc: "Compact, safe, and user-friendly distribution solutions.",
    icon: FaHome,
  },
];

export default function Industries() {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Industries We Cater To
        </h2>
        <p className="text-slate-400 mt-3 max-w-2xl mx-auto">
          Delivering reliable, efficient, and high-performance electrical
          distribution solutions across diverse sectors.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {industries.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group bg-slate-800/40 backdrop-blur-md border border-slate-700 hover:border-cyan-400 rounded-2xl p-6 transition-all shadow-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20 transition">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed">
                {item.desc}
              </p>

              <div className="mt-4 h-[2px] w-0 group-hover:w-full bg-cyan-400 transition-all duration-300"></div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}