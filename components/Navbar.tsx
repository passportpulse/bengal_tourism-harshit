"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Facebook, Instagram, MessageCircle, Phone } from "lucide-react"

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-red-800 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Facebook size={16} />
              <span>Facebook</span>
            </div>
            <div className="flex items-center gap-2">
              <Instagram size={16} />
              <span>Instagram</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle size={16} />
              <span>WhatsApp</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <span>+91 98765 43210</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-red-800 rounded-full"></div>
                  </div>
                </div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">Bengal Tourism</h1>
                <p className="text-xs text-gray-600">A Love Journey Company</p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link href="/" className="text-amber-700 font-semibold hover:text-red-600 transition">
                HOME
              </Link>
              <Link href="/about" className="text-gray-700 font-semibold hover:text-red-600 transition">
                About Us
              </Link>
              <Link href="/earn" className="text-gray-700 font-semibold hover:text-red-600 transition">
                Earn With Us
              </Link>
              <Link href="/career" className="text-gray-700 font-semibold hover:text-red-600 transition">
                Career
              </Link>
              <Link href="/package-cost" className="text-gray-700 font-semibold hover:text-red-600 transition">
                Package Cost
              </Link>
              <Link href="/brands" className="text-gray-700 font-semibold hover:text-red-600 transition">
                Brands
              </Link>
              <Link 
                href="/book-tour"
                className="bg-red-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-700 transition"
              >
                BOOK NOW
              </Link>
              <Link href="/contact" className="text-gray-700 font-semibold hover:text-red-600 transition">
                CONTACT PAGE
              </Link>
            </nav>

            {/* Mobile Button */}
            <button 
              onClick={() => setMobileOpen(!mobileOpen)} 
              className="lg:hidden text-gray-700"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-3">
            <Link 
              href="/" 
              className="block py-2 text-amber-700 font-semibold"
              onClick={() => setMobileOpen(false)}
            >
              HOME
            </Link>
            <Link 
              href="/about" 
              className="block py-2 text-gray-700 font-semibold"
              onClick={() => setMobileOpen(false)}
            >
              About Us
            </Link>
            <Link 
              href="/earn" 
              className="block py-2 text-gray-700 font-semibold"
              onClick={() => setMobileOpen(false)}
            >
              Earn With Us
            </Link>
            <Link 
              href="/career" 
              className="block py-2 text-gray-700 font-semibold"
              onClick={() => setMobileOpen(false)}
            >
              Career
            </Link>
            <Link 
              href="/package-cost" 
              className="block py-2 text-gray-700 font-semibold"
              onClick={() => setMobileOpen(false)}
            >
              Package Cost
            </Link>
            <Link 
              href="/brands" 
              className="block py-2 text-gray-700 font-semibold"
              onClick={() => setMobileOpen(false)}
            >
              Brands
            </Link>
            <Link 
              href="/book-tour"
              className="block py-2 bg-red-600 text-white px-6 py-2 rounded-full font-semibold text-center"
              onClick={() => setMobileOpen(false)}
            >
              BOOK NOW
            </Link>
            <Link 
              href="/contact" 
              className="block py-2 text-gray-700 font-semibold"
              onClick={() => setMobileOpen(false)}
            >
              CONTACT PAGE
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
