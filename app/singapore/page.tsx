"use client"

import Image from 'next/image'
import { MapPin, Calendar, Users, Star, Clock, Camera, Sun, Home, IndianRupee, Award, Compass, Utensils, Building, Trees, Ship, Sparkles, Train, ShoppingBag, Book, Mountain, Waves, Fish, Bird, Tent, Flame, PartyPopper, Heart, Sprout } from 'lucide-react'
import ContactCTA from '@/components/ContactCTA'
import PackagePricing from '@/components/PackagePricing'

export default function SingaporePage() {
  return (
    <main className="text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1496939376851-89342e90adcd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8U2luZ2Fwb3JlfGVufDB8fHww"
            alt="Singapore skyline with Marina Bay Sands and modern architecture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-purple-800/60 to-blue-900/80"></div>
        </div>

        <div className="relative h-full flex items-center justify-center text-white px-6">
          <div className="max-w-4xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Building className="w-6 h-6 text-yellow-400" />
              <span className="text-yellow-400 font-semibold tracking-wide">Singapore Modern Paradise</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl  text-center  font-bold mb-6 leading-tight">
              Singapore
              <span className="block text-3xl md:text-5xl mt-2 text-blue-300">
                City Tour • Sentosa Island • Jurong Bird Park
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-200 text-center max-w-3xl mx-auto leading-relaxed">
              Experience the ultimate modern city-state with stunning architecture, 
              world-class attractions, and tropical island adventures
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-yellow-400 transition transform hover:scale-105">
                Explore Singapore
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-800 transition transform hover:scale-105">
                Book Modern Experience
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">Discover modern Singapore</span>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Singapore Tour Packages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Special tailor-made packages designed for your perfect modern city experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Singapore City Tour */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                <Building className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Singapore City Tour</h3>
                <p className="text-gray-700 mb-4">4 Nights / 5 Days exploring vibrant Singapore</p>
                <div className="bg-orange-100 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">City Experience</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Little India cultural experience</li>
                    <li>• Marina Bay Sands viewing</li>
                    <li>• China Town exploration</li>
                    <li>• Merlion Park visit</li>
                    <li>• Shopping at Orchard Road</li>
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

            {/* Sentosa Island Tour */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                <Trees className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Sentosa Island Adventure</h3>
                <p className="text-gray-700 mb-4">2 Nights / 3 Days of island fun and attractions</p>
                <div className="bg-blue-100 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Island Experience</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Universal Studios Singapore</li>
                    <li>• Adventure Cove water park</li>
                    <li>• Beach activities and sports</li>
                    <li>• Underwater World and S.E.A. Aquarium</li>
                    <li>• Skyline Luge and MegaZip</li>
                  </ul>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-blue-600 font-semibold">Island Paradise</span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>

            {/* Jurong Bird Park */}
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-green-400 to-teal-500 flex items-center justify-center">
                <Bird className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Jurong Bird Park</h3>
                <p className="text-gray-700 mb-4">1 Night / 2 Days of nature and wildlife</p>
                <div className="bg-green-100 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Wildlife Experience</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• 600+ bird species</li>
                    <li>• Nature trails and hiking</li>
                    <li>• Bird watching towers</li>
                    <li>• Wildlife photography</li>
                  </ul>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-green-600 font-semibold">Nature Paradise</span>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ATTRACTIONS & EXPERIENCES ================= */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Singapore Attractions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              World-class attractions and unique experiences in the Lion City
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Night Safari */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Night Safari & Shopping</h3>
              <p className="text-gray-700 mb-4">
                Experience Singapore's vibrant nightlife, cultural shows, and world-class shopping 
                at Orchard Road and Marina Bay. Enjoy dinner cruise and explore the city after dark.
              </p>
              <div className="flex items-center gap-2 text-purple-600">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">City Center</span>
              </div>
            </div>

            {/* Cultural Districts */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Utensils className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Cultural Districts</h3>
              <p className="text-gray-700 mb-4">
                Explore Chinatown, Little India, Kampong Glam, and other cultural 
                districts showcasing Singapore's multicultural heritage and diverse culinary scene.
              </p>
              <div className="flex items-center gap-2 text-orange-600">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Heritage Areas</span>
              </div>
            </div>

            {/* Modern Architecture */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Modern Marvels</h3>
              <p className="text-gray-700 mb-4">
                Marina Bay Sands, Gardens by the Bay, ArtScience Museum, 
                and other architectural wonders showcasing Singapore's modern development.
              </p>
              <div className="flex items-center gap-2 text-blue-600">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Architectural Icons</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      <ContactCTA />

    </main>
  )
}
