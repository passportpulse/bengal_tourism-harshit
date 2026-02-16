"use client"

import Image from 'next/image'
import { MapPin, Calendar, Users, Star, Clock, Camera, Sun, Home, IndianRupee, Award, Compass, Utensils, Building, Trees, Ship, Sparkles, Train, ShoppingBag, Book, Mountain, Waves, Fish, Bird, Tent, Flame, PartyPopper, Heart, Sprout } from 'lucide-react'
import ContactCTA from '@/components/ContactCTA'
import PackagePricing from '@/components/PackagePricing'

export default function ThailandPage() {
  return (
    <main className="text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1712487650909-2aaf5c5eac36?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8VGhhaWxhbmQlMjAlMjYlMjBCYW5na29rfGVufDB8fHww"
            alt="Tropical beach with palm trees and crystal clear water in Thailand"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-teal-800/60 to-blue-900/80"></div>
        </div>

        <div className="relative h-full flex items-center justify-center text-center text-white px-6">
          <div className="max-w-4xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sun className="w-6 h-6 text-yellow-400" />
              <span className="text-yellow-400 text-center font-semibold tracking-wide">Thailand Tropical Paradise</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl text-center font-bold mb-6 leading-tight">
              Thailand
              <span className="block text-3xl text-center md:text-5xl mt-2 text-teal-300">
                Bangkok • Pattaya • Phi Phi Islands • Krabi
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-center mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Experience the ultimate tropical paradise with stunning beaches, 
              crystal clear waters, and vibrant island adventures
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-yellow-400 transition transform hover:scale-105">
                Explore Thailand
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-800 transition transform hover:scale-105">
                Book Island Paradise
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">Discover tropical Thailand</span>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MAIN TOUR PACKAGES ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Thailand Tour Packages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Special tailor-made packages designed for your perfect tropical adventure
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Bangkok Tour */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                <Building className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Bangkok City Tour</h3>
                <p className="text-gray-700 mb-4">4 Nights / 5 Days exploring vibrant Bangkok</p>
                <div className="bg-orange-100 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">City Experience</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Temple visits (Wat Pho, Grand Palace)</li>
                    <li>• Shopping and markets</li>
                    <li>• Cultural performances</li>
                    <li>• River cruise with dinner</li>
                    <li>• Nightlife exploration</li>
                  </ul>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-orange-600 font-semibold">City Adventure</span>
                  <button className="bg-orange-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-orange-700 transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>

            {/* Pattaya Beach Tour */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center">
                <Waves className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Pattaya Beach Retreat</h3>
                <p className="text-gray-700 mb-4">4 Nights / 5 Days of tropical beach paradise</p>
                <div className="bg-blue-100 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Beach Experience</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• White sandy beaches</li>
                    <li>• Water sports facilities</li>
                    <li>• Island hopping tours</li>
                    <li>• Nightlife and entertainment</li>
                    <li>• Local cuisine experiences</li>
                  </ul>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-blue-600 font-semibold">Beach Paradise</span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>

            {/* Coral Island Tour */}
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-green-400 to-teal-500 flex items-center justify-center">
                <Fish className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Koh Lan Coral Island</h3>
                <p className="text-gray-700 mb-4">4 Nights / 5 Days of island luxury and water adventures</p>
                <div className="bg-green-100 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Island Experience</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Speed boat transfer</li>
                    <li>• Snorkeling and diving</li>
                    <li>• Coral reef exploration</li>
                    <li>• Beach relaxation</li>
                    <li>• Luxury island resort</li>
                  </ul>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-green-600 font-semibold">Island Luxury</span>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>

            {/* Phi Phi Islands */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
                <Mountain className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Phi Phi Islands</h3>
                <p className="text-gray-700 mb-4">1 Night / 2 Days of stunning island adventures</p>
                <div className="bg-purple-100 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Island Hopping</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Phi Phi Leh (largest island)</li>
                    <li>• Phi Phi Don (buddhist sanctuary)</li>
                    <li>• James Bond Island</li>
                    <li>• Bamboo Island</li>
                    <li>• Poda Island</li>
                    <li>• Long-tail boat transfers</li>
                  </ul>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-purple-600 font-semibold">Island Adventure</span>
                  <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700 transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>

            {/* Krabi Island Hopping */}
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center">
                <Trees className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Krabi Island Hopping</h3>
                <p className="text-gray-700 mb-4">2 Nights / 3 Days of tropical island exploration</p>
                <div className="bg-teal-100 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Island Experience</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Chicken Island visit</li>
                    <li>• Phra Nang Cave exploration</li>
                    <li>• Tup Island visit</li>
                    <li>• Poda Island visit</li>
                    <li>• Long-tail boat transfers</li>
                  </ul>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-teal-600 font-semibold">Island Hopping</span>
                  <button className="bg-teal-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-teal-700 transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ISLAND EXPERIENCES ================= */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Island Experiences</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ultimate tropical island adventures and water activities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Water Sports */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Waves className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Water Sports</h3>
              <p className="text-gray-700 mb-4">
                Snorkeling, diving, jet skiing, parasailing, and banana boat rides 
                in crystal clear tropical waters surrounding the islands.
              </p>
              <div className="flex items-center gap-2 text-blue-600">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">All Islands</span>
              </div>
            </div>

            {/* Island Hopping */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Ship className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Island Hopping</h3>
              <p className="text-gray-700 mb-4">
                Explore multiple islands by long-tail boats, experience local culture, 
                and discover hidden beaches and pristine coral reefs.
              </p>
              <div className="flex items-center gap-2 text-green-600">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Phi Phi & Krabi</span>
              </div>
            </div>

            {/* Beach Relaxation */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sun className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Beach Paradise</h3>
              <p className="text-gray-700 mb-4">
                Relax on pristine white sand beaches, enjoy sunset views, 
                and experience the ultimate tropical island lifestyle with luxury resorts.
              </p>
              <div className="flex items-center gap-2 text-orange-600">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Pattaya & Islands</span>
              </div>
            </div>

            {/* Cultural Experiences */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <PartyPopper className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Nightlife & Culture</h3>
              <p className="text-gray-700 mb-4">
                Experience vibrant nightlife, cultural shows, 
                and traditional Thai entertainment. Visit local markets and taste authentic Thai cuisine.
              </p>
              <div className="flex items-center gap-2 text-purple-600">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Bangkok & Pattaya</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PackagePricing
        title="Thailand Tour Packages"
        subtitle="Choose your perfect tropical paradise duration"
      />

      <ContactCTA />

    </main>
  )
}
