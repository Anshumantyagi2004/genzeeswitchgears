import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa6'

export default function StickyButton() {
    return (<>
        <a href="https://wa.me/+919136508089"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp "
            className="fixed bottom-5 right-4 z-50 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition animate-bounce"
        >
            <FaWhatsapp size={30} />
        </a>


        <a href="tel:+919136508089"
            aria-label="Call Us"
            className="fixed bottom-21 right-4 z-50 bg-red-500 text-white p-3 rounded-full shadow-lg hover:bg-red-600 transition animate-bounce"
        >
            <FaPhoneAlt size={27} />
        </a>
    </>)
}
