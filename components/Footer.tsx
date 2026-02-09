"use client"

import Link from "next/link"
import { Facebook, Instagram, MessageCircle, Phone, Mail, MapPin, Clock } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/logo.png" 
                alt="Bengal Tourism Logo" 
                className="h-auto w-auto"
              />
              <div>
              
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Explore the beautiful land of Bengal with us. From mountains to mangroves, 
              experience the rich culture and heritage of West Bengal.
            </p>
            <div className="flex gap-3">
              <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition cursor-pointer">
                <Facebook size={16} />
              </div>
              <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition cursor-pointer">
                <Instagram size={16} />
              </div>
              <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition cursor-pointer">
                <MessageCircle size={16} />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-red-400">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-red-400 transition">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-red-400 transition">About Us</Link></li>
              <li><Link href="/packages" className="text-gray-300 hover:text-red-400 transition">Tour Packages</Link></li>
              <li><Link href="/destinations" className="text-gray-300 hover:text-red-400 transition">Destinations</Link></li>
              <li><Link href="/gallery" className="text-gray-300 hover:text-red-400 transition">Gallery</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-red-400 transition">Blog</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-red-400 transition">Contact</Link></li>
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-red-400">Popular Destinations</h4>
            <ul className="space-y-2">
              <li><Link href="/destinations/darjeeling" className="text-gray-300 hover:text-red-400 transition">Darjeeling</Link></li>
              <li><Link href="/destinations/sundarban" className="text-gray-300 hover:text-red-400 transition">Sundarban</Link></li>
              <li><Link href="/destinations/kolkata" className="text-gray-300 hover:text-red-400 transition">Kolkata</Link></li>
              <li><Link href="/destinations/digha" className="text-gray-300 hover:text-red-400 transition">Digha</Link></li>
              <li><Link href="/destinations/shantiniketan" className="text-gray-300 hover:text-red-400 transition">Shantiniketan</Link></li>
              <li><Link href="/destinations/murshidabad" className="text-gray-300 hover:text-red-400 transition">Murshidabad</Link></li>
              <li><Link href="/destinations/cooch-behar" className="text-gray-300 hover:text-red-400 transition">Cooch Behar</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-red-400">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-red-400" />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-red-400" />
                <span className="text-gray-300">info@bengaltourism.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-red-400 mt-1" />
                <span className="text-gray-300">
                  123, Park Street,<br />
                  Kolkata, West Bengal 700016
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={18} className="text-red-400" />
                <div className="text-gray-300">
                  <p>Mon - Sat: 9:00 AM - 6:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      {/* <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center">
            <h4 className="text-xl font-semibold mb-2">Subscribe to Our Newsletter</h4>
            <p className="text-gray-300 mb-4">Get latest updates and exclusive offers</p>
            <div className="max-w-md mx-auto flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-red-400"
              />
              <button className="bg-red-600 px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div> */}

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2026 Bengal Tourism. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-red-400 transition">Privacy Policy</Link>
              <Link href="/terms" className="text-gray-400 hover:text-red-400 transition">Terms of Service</Link>
              <Link href="/refund" className="text-gray-400 hover:text-red-400 transition">Refund Policy</Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-red-400 transition">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
