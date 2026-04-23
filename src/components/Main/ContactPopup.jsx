"use client";

import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import { RxCross2 } from "react-icons/rx";
import { toast } from "react-hot-toast";
import { useState } from "react";

const formConfigs = {
    contact: {
        title: "Contact Us",
        product: "Switchgears",
        fields: [
            { name: "contactPerson", type: "text", placeholder: "Your Name", required: true },
            { name: "email", type: "email", placeholder: "Your Email", required: true },
            { name: "phone", type: "tel", placeholder: "Phone Number" },
            { name: "message", type: "textarea", placeholder: "Your Requirement" },
        ],
    },
};

export default function PopupForm({
    isOpen,
    setIsOpen,
    formType = "contact",
}) {
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const config = formConfigs[formType];

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        const data = {
            platform: `Genzee Switchgears Popup Form`,
            platformEmail: "genzeeswitchgears@yahoo.com",
            name: formData.get("contactPerson"),
            email: formData.get("email"),
            company: "NA",
            phone: formData.get("phone"),
            product: config.product,
            place: "Delhi",
            message: formData.get("message"),
        };

        if (!data.phone || data.phone.length < 10) {
            return toast.error("Enter Valid Phone Number");
        }

        try {
            setLoading(true);

            const res = await axios.post(
                "https://brandbnalo.com/api/form/add",
                data,
                { validateStatus: (s) => s >= 200 && s < 500 }
            );

            if (res.status >= 200 && res.status < 300) {
                setSubmitted(true);

                setTimeout(() => e.target.reset(), 100);

                setTimeout(() => {
                    setSubmitted(false);
                    setIsOpen(false); // close popup
                }, 3000);
            }
        } catch (err) {
            toast.error("Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsOpen(false)}
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="relative bg-white rounded-xl w-full max-w-lg mx-4 p-6"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-3 right-3 bg-black text-white rounded-full p-2"
                        >
                            <RxCross2 />
                        </button>

                        {submitted ? (
                            <div className="text-center py-10">
                                <h2 className="text-2xl font-bold text-green-600">
                                    🎉 Thank You!
                                </h2>
                                <p>Your enquiry has been submitted successfully.</p>
                            </div>
                        ) : (
                            <>
                                <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">
                                    {config.title}
                                </h2>

                                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                    {config.fields.map((field, i) =>
                                        field.type === "textarea" ? (
                                            <textarea
                                                key={i}
                                                rows={4}
                                                name={field.name}
                                                placeholder={field.placeholder}
                                                required={field.required}
                                                className="border p-2 rounded-md text-black"
                                            />
                                        ) : (
                                            <input
                                                key={i}
                                                type={field.type}
                                                name={field.name}
                                                placeholder={field.placeholder}
                                                required={field.required}
                                                className="border p-2 rounded-md text-black"
                                            />
                                        )
                                    )}

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="bg-gray-800 text-white py-3 rounded-md"
                                    >
                                        {loading ? "Submitting..." : "Submit Inquiry"}
                                    </button>
                                </form>
                            </>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}