"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Intro() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Text animation
  const textY = useTransform(scrollYProgress, [0, 0.3], [50, 0]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  // Image swap animation
//   const closeOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
//   const openOpacity = useTransform(scrollYProgress, [0.4, 0.7], [0, 1]);

  // Slight smooth scale
  //   const scale = useTransform(scrollYProgress, [0, 1], [0.99, 1]);

  return (
    <section ref={ref} className="relative ">
        <div className="inset-0 absolute bg-[url('/genbrand.jpeg')] opacity-6 bg-cover z-5 bg-center bg-no-repeat"></div>
      <div className="min-h-screen py-10 max-w-7xl mx-auto z-10 flex text-black items-center justify-center px-4 md:px-6">
        {" "}
        <div className="max-w-7xl text-black z-30 w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            style={{ y: textY, opacity: textOpacity }}
            className="space-y-5 order-2 md:order-1"
          >
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-black">
              Genzee Switchgears Private Limited
            </h2>

            <h3 className="text-base sm:text-lg md:text-xl text-blue-700 font-semibold">
              Powering Industries with Reliable Electrical Solutions
            </h3>

            <p className="text-black text-sm sm:text-base leading-relaxed">
              Genzee Switchgears Private Limited is a leading{" "}
              <strong>Industrial Switchgear Manufacturer</strong> offering
              reliable and high-performance electrical distribution solutions
              for industrial and commercial applications. With a commitment to
              quality, safety, and innovation, we manufacture a wide range of
              products including{" "}
              <strong>
                Single Phase Switchgear, Three Phase Switch Gear, and 440v
                Industrial Switchgear
              </strong>
              . Our solutions are designed to ensure efficient power management,
              operational safety, and long-term durability in demanding
              environments.
            </p>

            <p className="text-black text-sm sm:text-base leading-relaxed">
              With extensive industry experience, we have also established
              ourselves as a trusted{" "}
              <strong>
                MCB Box Manufacturer and MCB Distribution Board Manufacturer,
              </strong>{" "}
              delivering premium products such as{" "}
              <strong>
                TPN Distribution Board and Three Phase Power Distribution Box
              </strong>
              . At Genzee Switchgears Private Limited, we focus on precision
              engineering, strict quality standards, and customer satisfaction
              to provide dependable electrical solutions tailored to modern
              industry needs.
            </p>
          </motion.div>

          <div className="relative lg:flex justify-center items-center order-1 md:order-2 hidden">
            <div className="relative w-full max-w-[1000px] aspect-[3/2]">
              <img
                src="/Double Door Electrical MCB Box.webp"
                alt="Switchgear Box"
                className="w-full h-120 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
