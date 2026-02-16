"use client"

import Image from 'next/image'
import { MapPin, Calendar, Users, Star, Clock, Camera, Sun, Home, IndianRupee, Award, Compass, Utensils, Building, Trees, Ship, Sparkles, Train, ShoppingBag, Book, Mountain, Waves, Fish, Bird, Tent, Flame, PartyPopper, Heart, Sprout, Car } from 'lucide-react'
import PackagePricing from '@/components/PackagePricing'
import ContactCTA from '@/components/ContactCTA'

export default function DubaiPage() {
  return (
    <main className="text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1512454320501-8f261f2d6a?w=1920&h=1080&fit=crop"
            alt="Dubai skyline with Burj Khalifa and modern architecture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-purple-800/60 to-blue-900/80"></div>
        </div>

        <div className="relative h-full flex items-center justify-center text-center text-white px-6">
          <div className="max-w-4xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Building className="w-6 h-6 text-yellow-400" />
              <span className="text-yellow-400 font-semibold tracking-wide">Dubai Luxury Tours</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Dubai
              <span className="block text-3xl md:text-5xl mt-2 text-blue-300">
                Desert Safari • Ferrari World • Luxury Shopping
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Experience the ultimate luxury destination with world-class attractions, 
              desert adventures, and premium shopping experiences
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-yellow-400 transition transform hover:scale-105">
                Explore Dubai Luxury
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-800 transition transform hover:scale-105">
                Book Premium Experience
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">Discover luxury Dubai</span>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Dubai Tour Packages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Special tailor-made packages designed for your perfect luxury experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Burj Khalifa Desert Safari */}
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-orange-400 to-yellow-500 flex items-center justify-center">
                <Mountain className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Burj Khalifa Desert Safari</h3>
                <p className="text-gray-700 mb-4">6 Nights / 7 Days of luxury desert adventure</p>
                <div className="bg-orange-100 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Desert Safari Experience</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• 2-hour Hummer limo ride</li>
                    <li>• Desert BBQ dinner</li>
                    <li>• Traditional entertainment</li>
                    <li>• Luxury desert camp</li>
                  </ul>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-orange-600 font-semibold">Premium Package</span>
                  <button className="bg-orange-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-orange-700 transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>

            {/* Dhow Cruise */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                <Ship className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Traditional Dhow Cruise</h3>
                <p className="text-gray-700 mb-4">Evening cruise with dinner and entertainment</p>
                <div className="bg-blue-100 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Cruise Highlights</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Traditional wooden dhow</li>
                    <li>• Dubai Marina views</li>
                    <li>• Live entertainment</li>
                    <li>• Gourmet dinner</li>
                  </ul>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-blue-600 font-semibold">Evening Cruise</span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>

            {/* Ferrari World */}
            <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-red-400 to-pink-500 flex items-center justify-center">
                <Car className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Ferrari World Abu Dhabi</h3>
                <p className="text-gray-700 mb-4">Ultimate luxury car experience with city tour</p>
                <div className="bg-red-100 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Ferrari Experience</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Ferrari World visit</li>
                    <li>• Abu Dhabi city tour</li>
                    <li>• Luxury shopping</li>
                    <li>• Gourmet lunch</li>
                  </ul>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-red-600 font-semibold">Luxury Experience</span>
                  <button className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-700 transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>

            {/* Dolphin Show */}
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-green-400 to-teal-500 flex items-center justify-center">
                <Fish className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Dolphin Show</h3>
                <p className="text-gray-700 mb-4">Amazing dolphin entertainment with VIP access</p>
                <div className="bg-green-100 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Show Features</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• VIP dolphin show access</li>
                    <li>• Dubai Mall visit</li>
                    <li>• Ski Dubai tickets</li>
                    <li>• Private transfers</li>
                  </ul>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-green-600 font-semibold">Family Fun</span>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>

            {/* Burj Khalifa & Dubai Mall */}
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center">
                <ShoppingBag className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Burj Khalifa & Dubai Mall</h3>
                <p className="text-gray-700 mb-4">Shopping paradise with fountain show and transfers</p>
                <div className="bg-purple-100 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Shopping Experience</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Dubai Mall shopping</li>
                    <li>• Fountain show viewing</li>
                    <li>• Luxury brand shopping</li>
                    <li>• Private transfers</li>
                  </ul>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-purple-600 font-semibold">Shopping Paradise</span>
                  <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700 transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= LUXURY ATTRACTIONS ================= */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Luxury Attractions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              World-class attractions and premium experiences in Dubai
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Atlantis */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Waves className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Atlantis Water Park</h3>
              <p className="text-gray-700 mb-4">Ultimate water park with marine life and adventure</p>
              <div className="bg-blue-100 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Attractions</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Water slides & pools</li>
                  <li>• Marine life exhibits</li>
                  <li>• Adventure activities</li>
                  <li>• Underwater tunnel</li>
                </ul>
                <div className="mt-4">
                  <span className="text-blue-600 font-semibold">Water Adventure</span>
                  <p className="text-sm text-gray-600">Full day access</p>
                </div>
              </div>
            </div>

            {/* Ski Dubai */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mountain className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Ski Dubai</h3>
              <p className="text-gray-700 mb-4">Indoor ski resort with world-class facilities</p>
              <div className="bg-green-100 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Ski Experience</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Indoor skiing</li>
                    <li>• Snow activities</li>
                    <li>• Luxury facilities</li>
                    <li>• All equipment included</li>
                  </ul>
                </div>
              <div className="mt-4">
                  <span className="text-green-600 font-semibold">Winter Sports</span>
                  <p className="text-sm text-gray-600">Year-round adventure</p>
                </div>
              </div>
            </div>
          </div>
       
      </section>




 
<ContactCTA />
    </main>
  )
}
