"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "@/utils/firebase";

export default function FormSection() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // OTP STATES
  const [otp, setOtp] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [isVerified, setIsVerified] = useState(false);

  const [formData, setFormData] = useState({
    contactPerson: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // ---------------- RECAPTCHA ----------------
  useEffect(() => {
    if (typeof window === "undefined") return;

    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
        }
      );

      window.recaptchaVerifier.render();
    }
  }, []);

  // ---------------- SEND OTP ----------------
  const sendOTP = async () => {
    try {
      setLoading(true);

      const appVerifier = window.recaptchaVerifier;

      const result = await signInWithPhoneNumber(
        auth,
        "+91" + formData.phone,
        appVerifier
      );

      setConfirmationResult(result);
      setShowOtp(true);

      toast.success("OTP sent successfully");
    } catch (err) {
      console.log(err);
      toast.error("Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };

  // ---------------- VERIFY OTP ----------------
  const verifyOTP = async () => {
    try {
      setLoading(true);

      await confirmationResult.confirm(otp);

      setIsVerified(true);
      setShowOtp(false);

      await submitForm();
    } catch (err) {
      console.log(err);
      toast.error("Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  // ---------------- FINAL SUBMIT ----------------
  const submitForm = async () => {
    try {
      setLoading(true);

      const data = {
        platform: "Genzee Switchgears Contact Form",
        platformEmail: "genzeeswitchgears@yahoo.com",
        name: formData.contactPerson,
        email: formData.email,
        company: "NA",
        phone: formData.phone,
        product: "Switchgears",
        place: "Delhi",
        message: formData.message,
      };

      const res = await axios.post(
        "https://brandbnalo.com/api/form/add",
        data
      );

      if (res.status >= 200 && res.status < 300) {
        toast.success("Submitted Successfully 🎉");

        setSubmitted(true);

        setFormData({
          contactPerson: "",
          email: "",
          phone: "",
          message: "",
        });

        setOtp("");
        setIsVerified(false);
        setConfirmationResult(null);
      }
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // ---------------- MAIN HANDLE ----------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.phone || formData.phone.length < 10) {
      toast.error("Enter Valid Phone Number");
      return;
    }

    // STEP 1: SEND OTP
    if (!showOtp) {
      await sendOTP();
      return;
    }

    // STEP 2: VERIFY OTP
    if (showOtp && !isVerified) {
      await verifyOTP();
      return;
    }
  };


    return (
        <div className="bg-gray-200">
        <section className="w-full px-4 py-10 max-w-7xl mx-auto md:px-15 bg-gray-200">
            <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="w-full md:w-1/2 h-[500px]">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.467909409358!2d77.3285437!3d28.6756466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb6ed6d385c3%3A0xb80d646b45848d57!2sGenzee%20Switchgears%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1776943980194!5m2!1sen!2sin"
                        className="w-full h-full rounded-xl shadow-lg"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

                          <div className="w-full md:w-1/2 bg-white p-8 rounded-xl shadow-lg">
            {submitted ? (
              <div className="text-center py-10">
                <h2 className="text-2xl font-bold text-amber-600">
                  🎉 Thank You!
                </h2>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-black mb-4 text-center">
                  Contact Us
                </h2>
                <div id="recaptcha-container"></div>
                {/* 🔥 YOUR FORM - CSS NOT CHANGED */}
                <form className="flex flex-col gap-4 text-black" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                    className="border border-gray-200 p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
                  />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Your Email"
                    className="border border-gray-200 p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
                  />

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Phone Number"
                    className="border border-gray-200 p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
                  />

                  

                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Your Requirement"
                    className="border border-gray-200 p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
                  ></textarea>

                  {/* OTP FIELD (NO STYLE CHANGE) */}
                  {showOtp && !isVerified && (
                    <input
                      type="text"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      placeholder="Enter OTP"
                      className="border border-gray-200 p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
                    />
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-gray-800 text-white py-3 rounded-md hover:bg-gray-900 transition duration-300"
                  >
                    {loading
                      ? "Processing..."
                      : !showOtp
                      ? "Send OTP"
                      : "Verify OTP"}
                  </button>
                </form>
              </>
            )}
          </div>

            </div>
        </section>
        </div>
    )
}