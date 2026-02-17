"use client"

import Image from 'next/image'
import { MapPin, Calendar, Users, Star, Clock, Camera, Sun, Home, IndianRupee, Award, Compass, Utensils, Building, Trees, Ship, Sparkles, Train, ShoppingBag, Book, Mountain, Waves, Fish, Bird, Tent, Flame, PartyPopper, Heart, Sprout } from 'lucide-react'
import PackagePricing from '@/components/PackagePricing'
import ContactCTA from '@/components/ContactCTA'

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

 <div className="bg-gray-50 py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* HEADER */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-orange-600">
            Bali Tour Itinerary
          </h1>
          <p className="text-gray-600">
            4 Days – Leisure, Culture & Scenic Experience
          </p>
        </div>

        {/* GRID LAYOUT */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* LEFT COLUMN */}
          <div className="space-y-12">

            {/* DAY 1 */}
            <div className="bg-white shadow-xl rounded-3xl p-8 border-l-4 border-orange-500">
              <h2 className="text-2xl font-semibold text-orange-600 mb-4">
                Day – 1 : Arrival in Bali
              </h2>
              <p className="text-gray-700 leading-8">
                Morning after breakfast departure for Bali by connecting flight from Singapore Airport. 
                The flight journey is around 3.30 hrs and on arrival at the International Airport of Ngurah Rai, Bali, clearing Immigration, collect the bags and go through custom, meet & greet by our local people and transfer to respective hotel. 
                Tour Guide then heading to your hotel. This day is free and can be arranged based on flight timings. 
                Evening can be enjoyed on the Bali Sea beach.
              </p>
            </div>

            {/* DAY 2 */}
            <div className="bg-white shadow-xl rounded-3xl p-8 border-l-4 border-green-500">
              <h2 className="text-2xl font-semibold text-green-600 mb-4">
                Day – 2 : Kintamani & Ubud Tour
              </h2>
              <p className="text-gray-700 leading-8">
                Morning after breakfast the local tour combines arts and amazing views. 
                First stop is TOHPATI village famous for colorful Batik fabrics and woven clothes. 
                Passing BATUBULAN village known for stone carving. 
                Proceed to KEMENUH village – home of talented woodcarvers and traditional Balinese house compound.
              </p>
              <p className="text-gray-700 leading-8 mt-4">
                Drive to KINTAMANI for magnificent crater view with Mt. Batur and Lake Batur. 
                Visit Agriculture to see Bali spices and herbal and test Bali coffee & tea. 
                Visit TAMPAK SIRING – Tirta Empul holy spring water temple. 
                Continue to TEGALALANG rice terraces and UBUD art village. Back to hotel.
              </p>
            </div>

          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-12">

            {/* DAY 3 */}
            <div className="bg-white shadow-xl rounded-3xl p-8 border-r-4 border-purple-500">
              <h2 className="text-2xl font-semibold text-purple-600 mb-4">
                Day – 3 : Bedugul & Tanah Lot Tour
              </h2>
              <p className="text-gray-700 leading-8">
                Morning after breakfast city tour covers TAMAN AYUN Royal Family Temple in Mengwi. 
                Drive to BEDUGUL mountain resort (1100 meters above sea level). 
                Visit tropical market and Lake Beratan with floating Ulun Danu Temple.
              </p>
              <p className="text-gray-700 leading-8 mt-4">
                Proceed to TANAH LOT – spectacular temple built in the 17th century on top of rock offshore. 
                The whole compound turns into wonderful silhouette during sunset. 
                Back to hotel for accommodation.
              </p>
            </div>

            {/* DAY 4 */}
            <div className="bg-white shadow-xl rounded-3xl p-8 border-r-4 border-red-500">
              <h2 className="text-2xl font-semibold text-red-600 mb-4">
                Day – 4 : Departure
              </h2>
              <p className="text-gray-700 leading-8">
                After breakfast, check-out from the hotel, transfer to Bali Airport for connecting flight to Singapore and further flight to respective destination.
              </p>
            </div>

          </div>
        </div>

        {/* EXTENSION SECTION */}
        <div className="bg-orange-50 border border-orange-200 rounded-3xl p-8 text-center shadow-lg">
          <p className="text-gray-700 leading-8">
            (You may extend your tour for 3-4 more days covering Malaysia / Singapore / Indonesia at a minimum cost / free*)
          </p>
        </div>

        {/* RECOMMENDED STAY */}
        <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">
            Recommended Stay
          </h3>
          <p className="text-gray-700 leading-8">
            To stay at a resort of our choice at destination. 
            See some names of Hotels, Resorts, Home Stay where we keep our Guests.
          </p>
        </div>

      </div>
    </div>


<ContactCTA />
    </main>
  )
}
