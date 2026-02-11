"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, MapPin, Calendar, Users, DollarSign } from "lucide-react"

const popularDestinations = [
  { name: "Darjeeling", image: "https://images.unsplash.com/photo-1622308644420-b20142dc993c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: "₹2,500/night" },
  { name: "Kolkata", image: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?w=800&h=600&fit=crop", price: "₹3,200/night" },
  { name: "Digha", image: "https://images.unsplash.com/photo-1657282928361-ec9de3f2bc74?w=800&h=600&fit=crop", price: "₹1,800/night" },
  { name: "Sundarban", image: "https://images.unsplash.com/photo-1706459671568-9809c9d13430?w=800&h=600&fit=crop", price: "₹2,100/night" },
]

export default function HotelBookingSection({ className = "" }: { className?: string }) {
  const [searchData, setSearchData] = useState({
    destination: "",
    checkIn: "",
    checkOut: "",
    guests: "1"
  })

  return (
    <section className={`py-20 bg-gradient-to-b from-gray-50 to-white ${className}`}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-14 ">
          <span className="text-sm font-semibold tracking-widest text-red-600 uppercase">
            Hotel Booking
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
            Find Your Perfect <span className="text-red-600">Stay</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl ">
            Discover comfortable and affordable hotels across West Bengal with instant booking.
          </p>
        </div>

        {/* Search Card */}
        <div className="backdrop-blur-xl bg-white/70 border border-gray-200 rounded-3xl shadow-2xl p-8 mb-16">
          <div className="grid md:grid-cols-4 gap-6 mb-8">

            {/* Destination */}
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-2">Destination</label>
              <div className="relative">
                <MapPin className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Where do you want to stay?"
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition"
                  value={searchData.destination}
                  onChange={(e) => setSearchData({ ...searchData, destination: e.target.value })}
                />
              </div>
            </div>

            {/* Check-in */}
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-2">Check-in</label>
              <div className="relative">
                <Calendar className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                <input
                  type="date"
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition"
                  value={searchData.checkIn}
                  onChange={(e) => setSearchData({ ...searchData, checkIn: e.target.value })}
                />
              </div>
            </div>

            {/* Check-out */}
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-2">Check-out</label>
              <div className="relative">
                <Calendar className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                <input
                  type="date"
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition"
                  value={searchData.checkOut}
                  onChange={(e) => setSearchData({ ...searchData, checkOut: e.target.value })}
                />
              </div>
            </div>

            {/* Guests */}
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-2">Guests</label>
              <div className="relative">
                <Users className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                <select
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none appearance-none transition"
                  value={searchData.guests}
                  onChange={(e) => setSearchData({ ...searchData, guests: e.target.value })}
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4+ Guests</option>
                </select>
              </div>
            </div>

          </div>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-4">
            <Link
              href="/book-hotel"
              className="flex-1 bg-gradient-to-r from-red-500 to-red-600 text-white py-4 px-6 rounded-xl font-semibold hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
            >
              <Search className="w-5 h-5" />
              Search Hotels
            </Link>

            <Link
              href="/book-hotel"
              className="flex-1  text-red-600 border-red-600 border py-4 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
            >
              <DollarSign className="w-5 h-5" />
              Best Deals
            </Link>
          </div>
        </div>

        {/* Popular Destinations */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            Popular Destinations
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {popularDestinations.map((destination, index) => (
              <Link
                key={index}
                href="/book-hotel"
                className="group rounded-2xl overflow-hidden relative shadow-xl"
              >
                <div className="relative h-56">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>

                <div className="absolute bottom-0 p-5 text-white">
                  <h4 className="text-xl font-bold">{destination.name}</h4>
                  <p className="text-sm opacity-90">{destination.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
