"use client"

import Link from "next/link"
import {
  Facebook,
  Instagram,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Clock
} from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      
      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* BRAND */}
          <div>
            <img
              src="/logo.png"
              alt="Bengal Tourism"
              className="w-40 mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Explore the beautiful land of Bengal — from Himalayan hills to
              mangrove forests. Experience culture, heritage & unforgettable journeys.
            </p>

            <div className="flex gap-3">
              {[Facebook, Instagram, MessageCircle].map((Icon, i) => (
                <div
                  key={i}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-red-600/90 hover:bg-red-600 transition cursor-pointer"
                >
                  <Icon size={16} />
                </div>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-lg font-semibold mb-5 text-red-400">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                ["Home", "/"],
                ["About Us", "/about"],
                ["Tour Packages", "/packages"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-gray-400 hover:text-red-400 transition"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* DESTINATIONS */}
          <div>
            <h4 className="text-lg font-semibold mb-5 text-red-400">
              Popular Destinations
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                "Darjeeling",
                "Sundarban",
                "Kolkata",
                "Digha",
              
              ].map((place) => (
                <li key={place}>
                  <Link
                    href={`/${place.toLowerCase().replace(" ", "-")}`}
                    className="text-gray-400 hover:text-red-400 transition"
                  >
                    {place}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-lg font-semibold mb-5 text-red-400">
              Contact Info
            </h4>

            <div className="space-y-4 text-sm text-gray-400">
              
              <div className="flex gap-3">
                <Phone size={18} className="text-red-400" />
                <div>
                  <p>Tour Booking: <strong className="text-white">6289783779</strong></p>
                  <p>Hotel Booking: <strong className="text-white">9007995888</strong></p>
                </div>
              </div>

              <div className="flex gap-3">
                <MessageCircle size={18} className="text-red-400" />
                <div>
                  <a href="https://wa.me/916289783779" target="_blank" className="hover:text-red-400">
                    Tour WhatsApp
                  </a>
                  <br />
                  <a href="https://wa.me/919007995888" target="_blank" className="hover:text-red-400">
                    Hotel WhatsApp
                  </a>
                </div>
              </div>

              <div className="flex gap-3">
                <Mail size={18} className="text-red-400" />
                <span>bengaltourism@gmail.com</span>
              </div>

              <div className="flex gap-3">
                <MapPin size={18} className="text-red-400 mt-1" />
                <span>
                  123, Park Street <br />
                  Kolkata, West Bengal – 700016
                </span>
              </div>

              <div className="flex gap-3">
                <Clock size={18} className="text-red-400" />
                <span>
                  Mon–Sat: 9:00 AM – 6:00 PM <br />
                  Sunday: Closed
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>© 2026 Bengal Tourism. All rights reserved.</p>
          <div className="flex gap-6">
            {["privacy", "terms", "refund"].map((page) => (
              <Link
                key={page}
                href={`/${page}`}
                className="hover:text-red-400 transition capitalize"
              >
                {page} policy
              </Link>
            ))}
            <Link
              href="/site-map"
              className="hover:text-red-400 transition"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>

    </footer>
  )
}
