"use client";
import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function FormSection() {
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = {
            platform: "Genzee Switchgears Contact Form",
            platformEmail: "genzeeswitchgears@yahoo.com",
            name: formData.get("contactPerson"),
            email: formData.get("email"),
            company: 'NA',
            phone: formData.get("phone"),
            product: "Switchgears",
            place: "Delhi",
            message: formData.get("message"),
        };
        if (!data.phone || data.phone.length < 10)
            return toast.error("Enter Valid Phone Number");

        try {
            setLoading(true);
            const res = await axios.post("https://brandbnalo.com/api/form/add", data,
                { validateStatus: (status) => status >= 200 && status < 500 }
            );
            if (res.status >= 200 && res.status < 300) {
                setSubmitted(true);
                setTimeout(() => {
                    e.target.reset();      // reset after UI change
                }, 100);
                setTimeout(() => {
                    setSubmitted(false);
                }, 3000);
            }
        } catch (err) {
            console.log("ERROR:", err?.response || err.message);
            toast.error("Something went wrong");
        }
        finally {
            setLoading(false);
        }
    };

    return (
        <section className="w-full px-4 py-10 md:px-15 bg-gray-200">
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
                            <p className="text-gray-800 mt-2">
                                Your enquiry has been submitted successfully.
                            </p>
                            <p className="text-gray-700 text-sm mt-1">
                                Our team will contact you shortly.
                            </p>
                        </div>
                    ) : (
                        <>
                            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4 text-center">
                                Contact Us
                                <div className="w-20 h-1 bg-gray-600 mx-auto mt-1 rounded"></div>
                            </h2>

                            <form className="flex flex-col gap-4 text-black" onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    name="contactPerson"
                                    required
                                    placeholder="Your Name"
                                    className="border border-gray-200 p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="Your Email"
                                    className="border border-gray-200 p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
                                />
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone Number"
                                    className="border border-gray-200 p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
                                />
                                <textarea
                                    rows={4}
                                    name="message"
                                    placeholder="Your Requirement"
                                    className="border border-gray-200 p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
                                ></textarea>

                                <button type="submit" disabled={loading} className="bg-gray-800 text-white py-3 rounded-md hover:bg-gray-900 transition duration-300">
                                    {loading ? "Submitting..." : "Submit Inquiry"}
                                </button>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </section>
    )
}