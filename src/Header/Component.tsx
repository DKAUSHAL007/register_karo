import React from 'react'

import { FaChevronDown } from 'react-icons/fa'
import type { Header } from '@/payload-types'

export async function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-orange-500 flex items-center space-x-2">
          <img
            src={
              'https://s3-alpha-sig.figma.com/img/a1df/00e4/fa4fbf829549b7c93436ce45093f7d32?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C04CDIlxmL60sFKqDiZ6hXm7kcpugiW4PYa5SkFK1x-Mzfp74EeeL-Iksr2IuQ3zCfv1bMpTWgaBwznUv2XVhtV6LltwmDYcuY48Vv15SAsssSZs-NOQMDRP1gbFpcKT97hfAcnjlMXtqtGP3n9m5pNQa7wRF3KtueJP~GNdmQxJvKAZQB6gu9Wp8UOF1sZ1qc1LkXwRb11VRfWMPKUxqIkhcPjqKjIsxFbF6htQ3aDilmMDuBM4-QDS7YcN-xg8Xq5pSUYj1ngukbyAXbgI84R41LDA1YBGYy3imSk9NA2K7UKxmxwBscy2B-AYUUUVUuhpqLnJk1IkNGTAy57gRw__'
            }
            alt="Register Karo Logo"
            className="h-8"
          />
        </a>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8 text-gray-700">
          <a href="#home" className="hover:text-orange-500">
            Home
          </a>
          <div className="flex items-center space-x-1 hover:text-orange-500 cursor-pointer">
            <span>Our Services</span>
            <FaChevronDown size={12} />
          </div>
          <a href="#blog" className="hover:text-orange-500">
            Blog
          </a>
          <a href="#contact" className="hover:text-orange-500">
            Contact Us
          </a>
          <a href="#about" className="hover:text-orange-500">
            About Us
          </a>
        </nav>

        {/* Call to Action */}
        <a
          href="https://dishantkaushal.vercel.app"
          target="_blank"
          className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600"
        >
          Talk An Expert
        </a>
      </div>
    </header>
  )
}
