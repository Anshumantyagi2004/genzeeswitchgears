"use client"
import React, { useState } from 'react'
import Landing from './Landing'
import Link from 'next/link'
import { FileText, MessageCircle, Phone } from 'lucide-react'
import PopupForm from '@/components/Main/ContactPopup';

export default function page  () {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <Landing/>
     <div className="fixed bottom-0 left-0 z-50 w-full bg-[#012148] border-t border-white/10 md:hidden">
      
      <div className="grid grid-cols-3 text-white">

        {/* Call */}
        <Link
          href="tel:+918865979034"
          className="flex flex-col items-center justify-center py-3 border-r border-white/10"
        >
          <Phone size={20} />
          <span className="text-md font-bold mt-1">Call</span>
        </Link>

        {/* Enquire */}
        <button onClick={()=>{setIsOpen(true)}}
          className="flex flex-col items-center justify-center py-3 border-r border-white/10"
          
        >
          <FileText size={20} />
          <span className="text-md font-bold mt-1">Enquire</span>
        </button>

        {/* WhatsApp */}
        <Link
            href="https://wa.me/918865979034?text=Hello%2C%20I%20need%20a%20quotation%20for%20your%20switchgear%20products."

          target="_blank"
          className="flex flex-col items-center justify-center py-3"
        >
          <MessageCircle size={20} />
          <span className="text-md font-bold mt-1">WhatsApp</span>
        </Link>

      </div>
       <PopupForm
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              formType="contact"
            />
    </div>
    </>
  )
}
