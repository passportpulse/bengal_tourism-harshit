"use client"

import Image from 'next/image'
import { MapPin, Calendar, Users, Star, Clock, Camera, Sun, Home, IndianRupee, Award, Compass, Utensils, Building, Trees, Ship, Sparkles, Train, ShoppingBag, Book, Mountain, Waves, Fish, Bird, Tent, Flame, PartyPopper, Heart, Sprout } from 'lucide-react'
import ContactCTA from '@/components/ContactCTA'
import PackagePricing from '@/components/PackagePricing'

export default function MalaysiaPage() {
  return (
    <main className="text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200"
            alt="Tropical rainforest with Petronas Twin Towers and cultural village in Malaysia"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-green-900/80 via-emerald-800/60 to-green-900/80"></div>
        </div>

        <div className="relative h-full flex items-center justify-center text-white px-6">
          <div className="max-w-4xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Trees className="w-6 h-6 text-yellow-400" />
              <span className="text-yellow-400 font-semibold tracking-wide">Malaysia Tropical Paradise</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl text-center font-bold mb-6 leading-tight">
              Malaysia
              <span className="block text-3xl md:text-5xl mt-2 text-green-300">
                Kuala Lumpur • Genting Highlands • Batu Caves
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-center mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Experience the ultimate tropical paradise with stunning rainforests, 
              cultural heritage, and magnificent highland adventures
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-yellow-400 transition transform hover:scale-105">
                Explore Malaysia
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-green-800 transition transform hover:scale-105">
                Book Tropical Adventure
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">Discover tropical Malaysia</span>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Malaysia Tour Packages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Special tailor-made packages designed for your perfect tropical adventure
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Kuala Lumpur Tour */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                <Building className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Kuala Lumpur City Tour</h3>
                <p className="text-gray-700 mb-4">4 Nights / 5 Days exploring vibrant Kuala Lumpur</p>
                <div className="bg-orange-100 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">City Experience</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• King's Palace visit</li>
                    <li>• National Monument viewing</li>
                    <li>• National Mosque exploration</li>
                    <li>• Jamed Mosque visit</li>
                    <li>• Merdeka Square shopping</li>
                    <li>• Cultural performances</li>
                  </ul>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-orange-600 font-semibold">Urban Adventure</span>
                  <button className="bg-orange-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-orange-700 transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>

            {/* Genting Highlands & Batu Caves */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                <Mountain className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Genting Highlands Adventure</h3>
                <p className="text-gray-700 mb-4">2 Nights / 3 Days of highland exploration</p>
                <div className="bg-blue-100 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Highland Experience</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Cable car ride to Genting Highlands</li>
                    <li>• Snow world tour and activities</li>
                    <li>• Mountain retreat at 6,000 feet</li>
                    <li>• Panoramic views</li>
                  </ul>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-blue-600 font-semibold">Mountain Paradise</span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CULTURAL ATTRACTIONS ================= */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Cultural Attractions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Rich cultural heritage and natural wonders of Malaysia
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Traditional Villages */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Utensils className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Traditional Villages</h3>
              <p className="text-gray-700 mb-4">
                Experience authentic Malay village life, traditional crafts, and cultural performances 
                in the highlands. Visit indigenous communities and learn about their heritage.
              </p>
              <div className="flex items-center gap-2 text-orange-600">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Highland Communities</span>
              </div>
            </div>

            {/* Modern Architecture */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Modern Marvels</h3>
              <p className="text-gray-700 mb-4">
                Twin Towers, Marina Bay Sands, ArtScience Museum, 
                and other architectural wonders showcasing Malaysia's modern development.
              </p>
              <div className="flex items-center gap-2 text-blue-600">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Architectural Icons</span>
              </div>
            </div>
          </div>
        </div>
      </section>

     <PackagePricing 
        title="Malaysia Tour Packages"
        subtitle="Choose your perfect Southeast Asian adventure"
      />

       
    <ContactCTA />
    </main>
  )
}
