"use client"

import Image from 'next/image'
import { MapPin, Calendar, Users, Star, Clock, Camera, Sun, Home, DollarSign, Award, Compass, Utensils, Building, Trees, Ship, Sparkles, Train, ShoppingBag, Book, Mountain, Waves, Fish, Bird, Tent, Flame, PartyPopper, Heart, Sprout } from 'lucide-react'

export default function MaldivesPage() {
  return (
    <main className="text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32de4?w=1920&h=1080&fit=crop"
            alt="Luxury overwater villas in Maldives with crystal clear turquoise waters"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-cyan-800/60 to-teal-900/80"></div>
        </div>

        <div className="relative h-full flex items-center justify-center text-white px-6">
          <div className="max-w-4xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sun className="w-6 h-6 text-yellow-400" />
              <span className="text-yellow-400 font-semibold tracking-wide">Maldives Tropical Heaven</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Maldives
              <span className="block text-3xl md:text-5xl mt-2 text-blue-300">
                Luxury Islands • Overwater Villas • Coral Paradise
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Experience the ultimate luxury destination with overwater villas, 
              pristine beaches, and world-class diving in crystal clear waters
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-yellow-400 transition transform hover:scale-105">
                Explore Luxury
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-800 transition transform hover:scale-105">
                Book Tropical Heaven
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">Discover Tropical Heaven</span>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Maldives Tour Packages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Exclusive luxury packages for the ultimate tropical island experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Overwater Villa Package */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center">
                <Home className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Overwater Villa Paradise</h3>
                <p className="text-gray-700 mb-4">5 Nights / 6 Days of luxury living</p>
                <div className="bg-blue-100 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Luxury Experience</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Private overwater villa</li>
                    <li>• Direct ocean access</li>
                    <li>• Glass floor panels</li>
                    <li>• Private infinity pool</li>
                    <li>• 24/7 butler service</li>
                  </ul>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-blue-600 font-semibold">Ultimate Luxury</span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>

            {/* Island Hopping Package */}
            <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-teal-400 to-green-500 flex items-center justify-center">
                <Ship className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Island Hopping Adventure</h3>
                <p className="text-gray-700 mb-4">4 Nights / 5 Days exploring multiple islands</p>
                <div className="bg-teal-100 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Island Adventure</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Visit 3 different atolls</li>
                    <li>• Luxury yacht transfers</li>
                    <li>• Snorkeling at best spots</li>
                    <li>• Local island experiences</li>
                    <li>• Sunset dolphin cruises</li>
                  </ul>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-teal-600 font-semibold">Island Explorer</span>
                  <button className="bg-teal-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-teal-700 transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= LUXURY EXPERIENCES ================= */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Luxury Experiences</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Indulge in world-class luxury and exclusive experiences in the Maldives
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Male City */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Malé - Capital City</h3>
              <p className="text-gray-700 mb-4">
                Explore the vibrant capital with colorful markets, 
                Islamic architecture, and luxury shopping. 
                Visit the Presidential Palace and Grand Friday Mosque.
              </p>
              <div className="flex items-center gap-2 text-blue-600">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Capital Experience</span>
              </div>
            </div>

            {/* Water Sports */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition">
              <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Waves className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Water Sports Paradise</h3>
              <p className="text-gray-700 mb-4">
                World-class water sports including jet skiing, 
                parasailing, windsurfing, and kitesurfing. 
                Professional instructors and top-quality equipment.
              </p>
              <div className="flex items-center gap-2 text-cyan-600">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">All Resorts</span>
              </div>
            </div>

            {/* Spa & Wellness */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Spa & Wellness</h3>
              <p className="text-gray-700 mb-4">
                Award-winning spas offering traditional Maldivian treatments, 
                couples massages, and holistic wellness programs 
                overlooking the pristine Indian Ocean.
              </p>
              <div className="flex items-center gap-2 text-green-600">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Luxury Spas</span>
              </div>
            </div>

            {/* Underwater Dining */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Utensils className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Underwater Dining</h3>
              <p className="text-gray-700 mb-4">
                Experience world's first underwater restaurants 
                with 360-degree views of marine life. 
                Fine dining with sharks, rays, and tropical fish.
              </p>
              <div className="flex items-center gap-2 text-purple-600">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Unique Experience</span>
              </div>
            </div>

            {/* Diving & Snorkeling */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Fish className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Diving & Snorkeling</h3>
              <p className="text-gray-700 mb-4">
                Explore vibrant coral reefs, manta rays, whale sharks, 
                and countless tropical fish. PADI certification 
                courses and guided dives available.
              </p>
              <div className="flex items-center gap-2 text-teal-600">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Marine Paradise</span>
              </div>
            </div>

            {/* Sunset Cruises */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Sunset Cruises</h3>
              <p className="text-gray-700 mb-4">
                Romantic sunset cruises on traditional dhoni boats, 
                dolphin watching, and private beach dinners 
                under the stars with champagne service.
              </p>
              <div className="flex items-center gap-2 text-orange-600">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Romantic Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BOOKING CTA ================= */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Book Your Maldives Paradise</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Exclusive luxury packages for the ultimate tropical island experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center">
              <Clock className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Flexible Duration</h3>
              <p className="text-3xl font-bold text-yellow-400 mb-2">4-7 Days</p>
              <p className="text-blue-100">Custom packages available</p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center">
              <Users className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Group Size</h3>
              <p className="text-3xl font-bold text-yellow-400 mb-2">2-10 People</p>
              <p className="text-blue-100">Couples & families</p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center">
              <DollarSign className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Starting From</h3>
              <p className="text-3xl font-bold text-yellow-400 mb-2">₹35,999</p>
              <p className="text-blue-100">Per person</p>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-white text-blue-800 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Ready for Tropical Heaven?</h3>
              <p className="text-gray-700 mb-6">
                Contact us for exclusive luxury packages to the world's most beautiful tropical paradise
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition">
                  Call Now: +91 98765 43210
                </button>
                <button className="bg-cyan-600 text-white px-8 py-3 rounded-full font-bold hover:bg-cyan-700 transition">
                  Email: info@bengaltourism.com
                </button>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                For more pictures, offers & reviews, visit our Facebook Page
              </p>
              <div className="mt-6 bg-blue-100 p-4 rounded-lg">
                <p className="text-blue-800 font-bold text-center mb-2">
                  🏝️ Discover Tropical Heaven
                </p>
                <p className="text-sm text-blue-700 text-center">
                  Experience luxury overwater villas, pristine beaches, and world-class diving
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
