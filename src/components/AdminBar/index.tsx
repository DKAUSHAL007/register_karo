'use client'

import React from 'react'
import './index.scss'
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
import { BsTelephoneFill } from 'react-icons/bs'

export const AdminBar: React.FC = () => {
  return (
    <div className="bg-[#1C4670] py-2 text-white">
      <div className="container mx-auto flex justify-end items-center space-x-8 text-sm">
        {/* Left Section */}
        <div className="flex items-center space-x-2">
          <HiMail className="text-white" size={16} />
          <span>www.registerkaro.in</span>
        </div>
        <div className="flex items-center space-x-2">
          <BsTelephoneFill className="text-white" size={16} />
          <span>+918447746183</span>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          <a href="#" aria-label="Facebook" className="hover:text-gray-300 text-white">
            <FaFacebook size={16} />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-gray-300 text-white">
            <FaInstagram size={16} />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-gray-300 text-white">
            <FaTwitter size={16} />
          </a>
          <a href="#" aria-label="Pinterest" className="hover:text-gray-300 text-white">
            <FaPinterest size={16} />
          </a>
        </div>
      </div>
    </div>
  )
}
