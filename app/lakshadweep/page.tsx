"use client"

import Image from 'next/image'
import { MapPin, Calendar, Users, Star, Clock, Camera, Sun, Home, DollarSign, Award, Compass, Utensils, Building, Trees, Ship, Sparkles, Train, ShoppingBag, Book, Mountain, Waves, Fish, Bird, Tent, Flame, PartyPopper, Heart, Sprout } from 'lucide-react'

export default function LakshadweepPage() {
  return (
    <main className="text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1572025310208-2fd6b91764c1?w=1920&h=1080&fit=crop"
            alt="Pristine coral islands of Lakshadweep with crystal clear turquoise waters"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/80 via-blue-800/60 to-teal-900/80"></div>
        </div>

        <div className="relative h-full flex items-center justify-center text-white px-6">
          <div className="max-w-4xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Waves className="w-6 h-6 text-cyan-400" />
              <span className="text-cyan-400 font-semibold tracking-wide">Lakshadweep Coral Paradise</span>
            </div>
            
            <h1 className="text-5xl  text-center  md:text-7xl font-bold mb-6 leading-tight">
              Lakshadweep
              <span className="block text-3xl md:text-5xl mt-2 text-cyan-300">
                Coral Islands • Beach Paradise • Marine Life
              </span>
            </h1>

            <p className="text-xl  text-center  md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Discover India's ultimate tropical destination with pristine coral islands, 
              crystal clear waters, and vibrant marine ecosystems
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="bg-cyan-500 text-black px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-cyan-400 transition transform hover:scale-105">
                Explore Islands
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-cyan-800 transition transform hover:scale-105">
                Book Coral Paradise
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">Discover Coral Paradise</span>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Lakshadweep Tour Packages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Exclusive packages to explore India's most beautiful coral islands
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Bangaram Island Package */}
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                <Waves className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Bangaram Island Paradise</h3>
                <p className="text-gray-700 mb-4">4 Nights / 5 Days of island bliss</p>
                <div className="bg-cyan-100 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Island Experience</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Pristine white sand beaches</li>
                    <li>• Crystal clear turquoise waters</li>
                    <li>• World-class snorkeling & diving</li>
                    <li>• Beach volleyball & water sports</li>
                    <li>• Sunset cruise experiences</li>
                  </ul>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-cyan-600 font-semibold">Island Paradise</span>
                  <button className="bg-cyan-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-cyan-700 transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>

            {/* Agatti Island Package */}
            <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-teal-400 to-green-500 flex items-center justify-center">
                <Ship className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Agatti Island Adventure</h3>
                <p className="text-gray-700 mb-4">3 Nights / 4 Days of marine exploration</p>
                <div className="bg-teal-100 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Marine Adventure</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Scuba diving certification</li>
                    <li>• Coral reef exploration</li>
                    <li>• Glass-bottom boat tours</li>
                    <li>• Fishing trips & sea food</li>
                    <li>• Island hopping tours</li>
                  </ul>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-teal-600 font-semibold">Marine Adventure</span>
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
      <section className="py-20 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Island Experiences</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the unique charm of each coral island in Lakshadweep
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Kavaratti */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition">
              <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Kavaratti - Capital Island</h3>
              <p className="text-gray-700 mb-4">
                The administrative capital with beautiful mosques, 
                pristine beaches, and excellent water sports facilities. 
                Home to the famous Marine Museum and Aquarium.
              </p>
              <div className="flex items-center gap-2 text-cyan-600">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Capital Island</span>
              </div>
            </div>

            {/* Kadmat */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Fish className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Kadmat - Water Sports Hub</h3>
              <p className="text-gray-700 mb-4">
                Famous for its long sandy beaches and shallow lagoon. 
                Perfect for water sports including kayaking, snorkeling, 
                and scuba diving with vibrant coral reefs.
              </p>
              <div className="flex items-center gap-2 text-teal-600">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Water Sports Paradise</span>
              </div>
            </div>

            {/* Bangaram */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sun className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Bangaram - Tourist Paradise</h3>
              <p className="text-gray-700 mb-4">
                The only island open to foreign tourists, offering 
                luxury beach resorts, world-class diving spots, 
                and spectacular sunset views over the Arabian Sea.
              </p>
              <div className="flex items-center gap-2 text-blue-600">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Tourist Favorite</span>
              </div>
            </div>

            {/* Marine Life */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bird className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Rich Marine Life</h3>
              <p className="text-gray-700 mb-4">
                Home to diverse marine ecosystems including coral reefs, 
                sea turtles, dolphins, and countless tropical fish species. 
                Perfect for underwater photography and marine research.
              </p>
              <div className="flex items-center gap-2 text-green-600">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">All Islands</span>
              </div>
            </div>

            {/* Local Culture */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Utensils className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Local Culture & Cuisine</h3>
              <p className="text-gray-700 mb-4">
                Experience the unique Muslim culture, traditional 
                folk dances, and delicious seafood cuisine. 
                Try fresh tuna, coconut-based dishes, and local sweets.
              </p>
              <div className="flex items-center gap-2 text-orange-600">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Cultural Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BOOKING CTA ================= */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Book Your Lakshadweep Paradise</h2>
            <p className="text-xl text-cyan-100 max-w-3xl mx-auto">
              Exclusive packages to India's most beautiful coral islands
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center">
              <Clock className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Flexible Duration</h3>
              <p className="text-3xl font-bold text-yellow-400 mb-2">3-5 Days</p>
              <p className="text-cyan-100">Custom packages available</p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center">
              <Users className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Group Size</h3>
              <p className="text-3xl font-bold text-yellow-400 mb-2">2-20 People</p>
              <p className="text-cyan-100">Private & group tours</p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center">
              <DollarSign className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Starting From</h3>
              <p className="text-3xl font-bold text-yellow-400 mb-2">₹20,999</p>
              <p className="text-cyan-100">Per person</p>
            </div>
          </div>

      
        </div>
      </section>

    </main>
  )
}
