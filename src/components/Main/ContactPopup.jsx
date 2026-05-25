"use client";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import { RxCross2 } from "react-icons/rx";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { User, Mail, Phone, MessageSquare } from "lucide-react";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "@/utils/firebase";

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

const fieldIcons = {
  contactPerson: User,
  email: Mail,
  phone: Phone,
  message: MessageSquare,
};

export default function PopupForm({ isOpen, setIsOpen, formType = "contact" }) {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [confirmation, setConfirmation] = useState(null);

  const config = formConfigs[formType];

  // INIT RECAPTCHA
  const setupRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        { size: "invisible" }
      );
    }
  };

  // SEND OTP
  const sendOtp = async (phone) => {
    try {
      setupRecaptcha();

      const appVerifier = window.recaptchaVerifier;

      const result = await signInWithPhoneNumber(
        auth,
        "+91" + phone,
        appVerifier
      );

      setConfirmation(result);
      setOtpSent(true);

      toast.success("OTP sent successfully");
    } catch (err) {
      console.log(err);
      toast.error("Failed to send OTP");
    }
  };

  // VERIFY OTP
  const verifyOtp = async () => {
    try {
      await confirmation.confirm(otp);
      toast.success("OTP verified successfully");
      return true;
    } catch (err) {
      toast.error("Invalid OTP");
      return false;
    }
  };

  // SUBMIT FORM
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

    if (!/^[6-9]\d{9}$/.test(data.phone)) {
      return toast.error("Enter Valid 10 Digit Phone Number");
    }

    try {
      setLoading(true);

      // STEP 1 → SEND OTP
      if (!otpSent) {
        await sendOtp(data.phone);
        setLoading(false);
        return;
      }

      // STEP 2 → VERIFY OTP
      const isVerified = await verifyOtp();
      if (!isVerified) {
        setLoading(false);
        return;
      }

      // STEP 3 → FINAL SUBMIT
      const res = await axios.post(
        "https://brandbnalo.com/api/form/add",
        data,
        { validateStatus: (s) => s >= 200 && s < 500 }
      );

      if (res.status >= 200 && res.status < 300) {
        setSubmitted(true);
        e.target.reset();

        setTimeout(() => {
          setSubmitted(false);
          setIsOpen(false);
        }, 2000);

        setOtpSent(false);
        setOtp("");
        setConfirmation(null);
      } else {
        toast.error("Submission failed");
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
            className="relative bg-white rounded-xl w-full max-w-lg mx-4 p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 bg-black text-white rounded-full p-2"
            >
              <RxCross2 />
            </button>

            {/* invisible recaptcha container */}
            <div id="recaptcha-container"></div>

            {submitted ? (
              <div className="flex items-center justify-center py-12">
  <div className="w-full max-w-md rounded-2xl bg-white shadow-xl border border-gray-100 p-8 text-center">
    
    {/* success dot */}
    <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
      <span className="text-2xl">🎉</span>
    </div>

    <h2 className="text-2xl font-bold text-gray-900">
      Thank You!
    </h2>

    <p className="mt-3 text-gray-600 leading-relaxed">
      Your submission has been received successfully.  
      Our team will contact you shortly.
    </p>

    <div className="mt-6">
      <div className="h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-green-400 to-emerald-500"></div>
    </div>
  </div>
</div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
                  {config.title}
                </h2>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  {config.fields.map((field, i) => {
                    const Icon = fieldIcons[field.name];

                    return (
                      <div key={i} className="relative">
                        {Icon && (
                          <Icon
                            size={18}
                            className="absolute left-3 top-3 text-gray-500"
                          />
                        )}

                        {field.type === "textarea" ? (
                          <textarea
                            rows={4}
                            name={field.name}
                            placeholder={field.placeholder}
                            required={field.required}
                            className="w-full border border-gray-300 p-2 pl-10 rounded-md text-black"
                          />
                        ) : (
                          <input
                            type={field.type}
                            name={field.name}
                            placeholder={field.placeholder}
                            required={field.required}
                            className="w-full border border-gray-300 p-2 pl-10 rounded-md text-black"
                          />
                        )}
                      </div>
                    );
                  })}

                  {/* OTP FIELD */}
                  {otpSent && (
                    <input
                      type="text"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      placeholder="Enter OTP"
                      className="w-full border border-gray-300 p-2 pl-10 rounded-md text-black"
                    />
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-gray-800 text-white py-3 rounded-md"
                  >
                    {loading
                      ? "Processing..."
                      : !otpSent
                      ? "Send OTP"
                      : "Verify & Submit"}
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