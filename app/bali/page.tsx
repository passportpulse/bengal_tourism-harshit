"use client"

import Image from 'next/image'
import { MapPin, Calendar, Users, Star, Clock, Camera, Sun, Home, IndianRupee, Award, Compass, Utensils, Building, Trees, Ship, Sparkles, Train, ShoppingBag, Book, Mountain, Waves, Fish, Bird, Tent, Flame, PartyPopper, Heart, Sprout } from 'lucide-react'
import PackagePricing from '@/components/PackagePricing'

export default function BaliPage() {
  return (
    <main className="text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=1200"
            alt="Tropical Bali beach with palm trees and traditional Balinese temple"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-purple-800/60 to-blue-900/80"></div>
        </div>

        <div className="relative h-full flex items-center justify-center text-white px-6">
          <div className="max-w-4xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sun className="w-6 h-6 text-yellow-400" />
              <span className="text-yellow-400 font-semibold tracking-wide">Bali Island of Gods</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-center mb-6 leading-tight">
              Bali
              <span className="block text-3xl md:text-5xl mt-2 text-blue-300">
                Cultural Tours • Temple Visits • Mountain Resorts
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-center mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Experience the ultimate tropical paradise with rich cultural heritage, 
              stunning temples, and breathtaking mountain landscapes
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-yellow-400 transition transform hover:scale-105">
                Explore Bali
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-800 transition transform hover:scale-105">
                Book Island Paradise
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">Discover the Island of Gods</span>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Bali Tour Packages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Special tailor-made packages designed for your perfect island adventure
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Bali Cultural Tour */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                <Building className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Bali Cultural Tour</h3>
                <p className="text-gray-700 mb-4">4 Nights / 5 Days exploring rich Balinese culture</p>
                <div className="bg-orange-100 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Cultural Experience</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Tohpati village - Batik fabrics & woodcarving</li>
                    <li>• Batubulan village - Stone carving & traditional houses</li>
                    <li>• Kintamani village - Woodcarving & art compounds</li>
                    <li>• Agriculture visits - Spices & herbal testing</li>
                    <li>• Traditional Balinese house compounds</li>
                  </ul>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-orange-600 font-semibold">Cultural Immersion</span>
                  <button className="bg-orange-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-orange-700 transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>

            {/* Mountain Resort Experience */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                <Mountain className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Bedugul Mountain Resort</h3>
                <p className="text-gray-700 mb-4">1 Night / 2 Days of mountain paradise</p>
                <div className="bg-blue-100 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Mountain Experience</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• 1100m above sea level</li>
                    <li>• Tropical market & rice terraces</li>
                    <li>• Lake Batur views & crater</li>
                    <li>• Mt. Batur smoky crater views</li>
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

      {/* ================= TEMPLE & VILLAGE EXPERIENCES ================= */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Temple & Village Experiences</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ancient temples, traditional villages, and authentic Balinese culture
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Royal Temple */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Taman Ayun Royal Temple</h3>
              <p className="text-gray-700 mb-4">
                Spectacular temple built in 17th century, dedicated to the goddess of water. 
                Experience the magical power that keeps the young and witness the temple's 
                magnificent silhouette against the sunset.
              </p>
              <div className="flex items-center gap-2 text-orange-600">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Mengwi</span>
              </div>
            </div>

            {/* Floating Temple */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Ulun Danu Temple</h3>
              <p className="text-gray-700 mb-4">
                Holy spring water temple believed to possess magical powers. 
                The temple is dedicated to the goddess of water dwelling and is a place 
                of spiritual significance for Balinese Hindus.
              </p>
              <div className="flex items-center gap-2 text-purple-600">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Bedugul</span>
              </div>
            </div>

            {/* Traditional Villages */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Utensils className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Traditional Villages</h3>
              <p className="text-gray-700 mb-4">
                Experience authentic Balinese village life with traditional crafts, 
                cultural performances, and local cuisine. Visit artisan workshops 
                and learn about ancient techniques passed down through generations.
              </p>
              <div className="flex items-center gap-2 text-green-600">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">All Villages</span>
              </div>
            </div>

            {/* Art & Craft */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Art & Craft Workshops</h3>
              <p className="text-gray-700 mb-4">
                Visit traditional craft workshops specializing in Batik fabrics, 
                woodcarving, silver work, and traditional Balinese art. Purchase 
                authentic handmade souvenirs directly from skilled artisans.
              </p>
              <div className="flex items-center gap-2 text-teal-600">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Art Villages</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ================= PACKAGE PRICING ================= */}
      <PackagePricing 
        title="Bali Tour Packages"
        subtitle="Choose your perfect Island of Gods getaway duration"
      />

    </main>
  )
}
