"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa6";
import { toast } from "react-hot-toast";

import { User, Mail, Phone, MessageSquare, CheckCircle } from "lucide-react";
import Link from "next/link";

import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "@/utils/firebase";

const fields = [
  { name: "contactPerson", type: "text", placeholder: "Your Name", icon: User },
  { name: "email", type: "email", placeholder: "Your Email", icon: Mail },
  { name: "phone", type: "tel", placeholder: "Phone Number", icon: Phone },
  { name: "message", type: "textarea", placeholder: "Your Requirement", icon: MessageSquare },
];

export default function Hero() {
  const [loading, setLoading] = useState(false);

  // OTP STATES
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [verified, setVerified] = useState(false);
  const [confirmationResult, setConfirmationResult] = useState(null);

  // Recaptcha init
  useEffect(() => {
    if (typeof window === "undefined") return;

    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        { size: "invisible" }
      );

      window.recaptchaVerifier.render();
    }
  }, []);

  // SEND OTP
  const sendOTP = async (phone) => {
    try {
      const appVerifier = window.recaptchaVerifier;

      const result = await signInWithPhoneNumber(
        auth,
        "+91" + phone,
        appVerifier
      );

      setConfirmationResult(result);
      setOtpSent(true);

      toast.success("OTP sent successfully");
    } catch (err) {
      console.log(err);
      toast.error("Failed to send OTP");
    }
  };

  // VERIFY OTP
  const verifyOTP = async () => {
    try {
      await confirmationResult.confirm(otp);
      setVerified(true);
      toast.success("OTP Verified");
      setTimeout(() => {
      document.querySelector("form")?.requestSubmit();
    }, 100);
    } catch (err) {
      console.log(err);
      toast.error("Invalid OTP");
    }
  };

  // MAIN SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const data = {
      platform: "Genzee Switchgears Hero Form",
      platformEmail: "genzeeswitchgears@yahoo.com",
      name: formData.get("contactPerson"),
      email: formData.get("email"),
      company: "NA",
      phone: formData.get("phone"),
      product: "Switchgears",
      place: "Delhi",
      message: formData.get("message"),
    };

    // validation
    if (!/^[6-9]\d{9}$/.test(data.phone)) {
      return toast.error("Enter Valid 10 Digit Phone Number");
    }

    // STEP 1 → SEND OTP
    if (!otpSent) {
      await sendOTP(data.phone);
      return;
    }

    // STEP 2 → VERIFY OTP
    if (!verified) {
      await verifyOTP();
      return;
    }

    // STEP 3 → SUBMIT AFTER OTP VERIFIED
    try {
      setLoading(true);

      const res = await axios.post(
        "https://brandbnalo.com/api/form/add",
        data,
        { validateStatus: (s) => s >= 200 && s < 500 }
      );

      if (res.status >= 200 && res.status < 300) {
        toast.success("Inquiry Submitted Successfully");
        e.target.reset();

        // reset OTP state
        setOtp("");
        setOtpSent(false);
        setVerified(false);
        setConfirmationResult(null);
      } else {
        toast.error("Submission failed");
      }
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* ================= DESKTOP ================= */}
      <section className="relative hidden md:block min-h-screen overflow-hidden">
        <div className="absolute h-full inset-0">
          <Image
            src="/desk-banner.webp"
            alt="Hero Banner"
            fill
            priority
            className="object-cover"
          />
        </div>

        <div id="recaptcha-container"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 h-full flex items-center">
          <div className="grid lg:grid-cols-3 items-center">
            <div></div>
            <div></div>

            <motion.div
              initial={{ opacity: 0, x: 70 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex justify-end w-full ml-2 mt-2"
            >
              <div className="w-full max-w-3xl bg-[#012148]/95 border border-white/10 rounded-[32px] p-6 shadow-2xl">

                <h2 className="text-3xl font-bold text-white text-center">
                  Get a Quote
                </h2>

                <p className="text-gray-300 text-center mt-3 text-sm">
                  Fill out the form and our team will contact you shortly.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5 mt-8">

                  {fields.map((field, i) => {
                    const Icon = field.icon;

                    return (
                      <div key={i} className="relative">
                        <Icon size={18} className="absolute left-4 top-4 text-gray-400" />

                        {field.type === "textarea" ? (
                          <textarea
                            rows={4}
                            name={field.name}
                            placeholder={field.placeholder}
                            required
                            className="w-full bg-white/10 border border-white/10 text-white rounded-2xl pl-12 pr-4 py-3"
                          />
                        ) : (
                          <input
                            type={field.type}
                            name={field.name}
                            placeholder={field.placeholder}
                            required
                            className="w-full bg-white/10 border border-white/10 text-white rounded-2xl pl-12 pr-4 py-3"
                          />
                        )}
                      </div>
                    );
                  })}

                  {/* OTP INPUT (NO CSS CHANGED) */}
                  {otpSent && !verified && (
                    <input
                      type="text"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      placeholder="Enter OTP"
                      className="w-full bg-white/10 border border-white/10 text-white rounded-2xl pl-4 pr-4 py-3"
                    />
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-gradient-to-r from-orange-500 to-amber-500 text-white py-3 rounded-2xl font-semibold"
                  >
                    {loading
                      ? "Submitting..."
                      : !otpSent
                      ? "Send OTP"
                      : !verified
                      ? "Verify OTP"
                      : "Submit Inquiry"}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-8 left-10">
          <Link
            href="https://wa.me/918865979034"
            className="bg-[#ff7200] text-white flex items-center gap-2 rounded-xl px-3 py-2"
          >
            <FaWhatsapp />
            Share Your Requirements
          </Link>
        </div>
      </section>

      {/* ================= MOBILE ================= */}
      <section className="block md:hidden">
        <div className="relative">
          <Image
            src="/mobile-banner-banner.webp"
            alt="Mobile"
            width={1000}
            height={1200}
            className="w-full"
          />
        </div>

        <div className="px-4 -mt-6">
          <div className="bg-white rounded-[28px] p-5 shadow-2xl">

            <h2 className="text-3xl font-bold text-[#012148] text-center">
              GET INSTANT QUOTE
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-8">

              {fields.map((field, i) => {
                const Icon = field.icon;

                return (
                  <div key={i} className="relative">
                    <Icon size={18} className="absolute left-4 top-4 text-gray-400" />

                    {field.type === "textarea" ? (
                      <textarea
                        rows={4}
                        name={field.name}
                        placeholder={field.placeholder}
                        required
                        className="w-full border rounded-2xl pl-12 py-3"
                      />
                    ) : (
                      <input
                        type={field.type}
                        name={field.name}
                        placeholder={field.placeholder}
                        required
                        className="w-full border rounded-2xl pl-12 py-3"
                      />
                    )}
                  </div>
                );
              })}

              {/* OTP INPUT */}
              {otpSent && !verified && (
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter OTP"
                  className="w-full border rounded-2xl py-3 px-4"
                />
              )}

              <button
                type="submit"
                disabled={loading}
                className="bg-gradient-to-r from-orange-500 to-amber-500 text-white py-4 rounded-2xl font-bold"
              >
                {loading
                  ? "Submitting..."
                  : !otpSent
                  ? "Send OTP"
                  : !verified
                  ? "Verify OTP"
                  : "REQUEST QUOTE"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
} 