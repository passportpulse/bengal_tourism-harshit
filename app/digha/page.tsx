"use client"

import Image from 'next/image'
import { Waves, MapPin, Calendar, Users, Star, Clock, Camera, Sun, Home, DollarSign, Award, Compass, Utensils, Fish, Beer, TreePine, Ship } from 'lucide-react'
import PackagePricing from '@/components/PackagePricing'

export default function DighaPage() {
  return (
    <main className="text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&h=1080&fit=crop"
            alt="Digha sea beach with golden sand and blue waters"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-blue-800/60 to-blue-900/80"></div>
        </div>

        <div className="relative h-full flex items-center justify-center text-center text-white px-6">
          <div className="max-w-4xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Waves className="w-6 h-6 text-yellow-400" />
              <span className="text-yellow-400 font-semibold tracking-wide">Golden Beaches of Bengal</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Digha & Sea Beaches
              <span className="block text-3xl md:text-5xl mt-2 text-blue-300">
                Mandarmoni • Tajpur • Shankarpur • Udaipur
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Experience the pristine golden sands, gentle waves, and coastal charm of West Bengal's 
              most beloved beach destinations - perfect for romance, adventure, and relaxation
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-yellow-400 transition transform hover:scale-105">
                Book Your Beach Holiday
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-800 transition transform hover:scale-105">
                Explore Beach Packages
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">Discover coastal paradise</span>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= QUICK FACTS ================= */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Waves className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">25km Coastline</h3>
              <p className="text-gray-600 text-sm">Pristine beach stretch</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Sun className="w-10 h-10 text-orange-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Year-round</h3>
              <p className="text-gray-600 text-sm">Perfect beach weather</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Fish className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Fresh Seafood</h3>
              <p className="text-gray-600 text-sm">Daily catch delicacies</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Camera className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Water Sports</h3>
              <p className="text-gray-600 text-sm">Adventure activities</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TOUR PACKAGES ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Beach Tour Packages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Special tailor-made combination packages designed for your perfect coastal getaway
            </p>
          </div>

          {/* Sea Beach Circuit - 4N/5D */}
          <div className="mb-8">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6 rounded-t-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Sea Beach Circuit - Complete Coastal Experience</h3>
                  <p className="text-blue-100">Digha • Mandarmoni • Tajpur • Shankarpur • Udaipur</p>
                  <p className="text-blue-100">4 Nights / 5 Days</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold">₹12,000</div>
                  <div className="text-blue-100">Per Person</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white border-2 border-blue-600 border-t-0 rounded-b-2xl p-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-blue-600" />
                    <h4 className="font-bold">Day 1</h4>
                  </div>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Depart from Kolkata (7-8 AM)</li>
                    <li>• Breakfast at Kolaghat</li>
                    <li>• Reach Digha (1-2 PM)</li>
                    <li>• Hotel check-in & lunch</li>
                    <li>• Evening local market visit</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-blue-600" />
                    <h4 className="font-bold">Day 2</h4>
                  </div>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Early morning sunrise experience</li>
                    <li>• Old Digha/New Digha beach</li>
                    <li>• Udaipur (Odisha border) option</li>
                    <li>• Water sports & rides</li>
                    <li>• Fresh coconut & beach beer</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-blue-600" />
                    <h4 className="font-bold">Day 3</h4>
                  </div>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Check-out (10-11 AM)</li>
                    <li>• En-route Mohona visit</li>
                    <li>• Mandarmoni check-in</li>
                    <li>• Rolling beach exploration</li>
                    <li>• Evening bonfire & BBQ</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-blue-600" />
                    <h4 className="font-bold">Day 4</h4>
                  </div>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Shankarpur & Tajpur day tour</li>
                    <li>• Beach activities</li>
                    <li>• Local seafood lunch</li>
                    <li>• Spicy crab curry special</li>
                    <li>• Country chicken fry</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-blue-600" />
                    <h4 className="font-bold">Day 5</h4>
                  </div>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Sunrise with morning tea</li>
                    <li>• Beach stroll</li>
                    <li>• Sea bath</li>
                    <li>• Check-out (11 AM)</li>
                    <li>• Return to Kolkata</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Weekend Packages Grid */}
        <PackagePricing 
                title="Digha Beach Packages"
                subtitle="Choose your perfect beach getaway duration"
              />
        </div>
      </section>

      {/* ================= BEACH DESTINATIONS ================= */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Beach Destinations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the diverse coastal beauties of West Bengal
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <Waves className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Digha</h3>
                <p className="text-gray-700 mb-4">Most popular beach destination with old and new beach areas, perfect for families</p>
                <div className="flex items-center gap-2 text-blue-600">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">East Midnapore</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center">
                <Sun className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Mandarmoni</h3>
                <p className="text-gray-700 mb-4">Romantic beach with rolling waves and pristine golden sands</p>
                <div className="flex items-center gap-2 text-pink-600">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">East Midnapore</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-green-400 to-teal-500 flex items-center justify-center">
                <Camera className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Tajpur</h3>
                <p className="text-gray-700 mb-4">Serene and secluded beach perfect for solitude seekers</p>
                <div className="flex items-center gap-2 text-green-600">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">East Midnapore</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                <Fish className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Shankarpur</h3>
                <p className="text-gray-700 mb-4">Quiet beach destination with excellent seafood options</p>
                <div className="flex items-center gap-2 text-orange-600">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">East Midnapore</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center">
                <TreePine className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Udaipur</h3>
                <p className="text-gray-700 mb-4">Beach at Odisha border with unique cultural blend</p>
                <div className="flex items-center gap-2 text-purple-600">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Odisha Border</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center">
                <Home className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Monchasha Eco Village</h3>
                <p className="text-gray-700 mb-4">Sustainable tourism with local village experience</p>
                <div className="flex items-center gap-2 text-teal-600">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Contai</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WATER SPORTS & ACTIVITIES ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Water Sports & Activities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Thrilling adventures and relaxing beach activities for everyone
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 text-center hover:shadow-xl transition">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Ship className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Speed Boat Rides</h3>
              <p className="text-gray-600 text-sm mb-3">Thrilling ocean adventures</p>
              <p className="text-blue-600 font-semibold">All Beaches</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-6 text-center hover:shadow-xl transition">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Fish className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Parasailing</h3>
              <p className="text-gray-600 text-sm mb-3">Bird's eye ocean view</p>
              <p className="text-green-600 font-semibold">Mandarmoni</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-6 text-center hover:shadow-xl transition">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Waves className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Jet Ski</h3>
              <p className="text-gray-600 text-sm mb-3">High-speed water fun</p>
              <p className="text-orange-600 font-semibold">Digha New Beach</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 text-center hover:shadow-xl transition">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Beach Photography</h3>
              <p className="text-gray-600 text-sm mb-3">Capture golden moments</p>
              <p className="text-purple-600 font-semibold">Sunrise/Sunset</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CUISINE SECTION ================= */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Beach Cuisine</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Savor the flavors of the sea with fresh coastal delicacies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Spicy Crab Curry", icon: "🦀", desc: "Fresh local crabs in spicy gravy", price: "Must try" },
              { name: "Country Chicken Fry", icon: "🍗", desc: "Traditional Bengali preparation", price: "Popular" },
              { name: "Fresh Fish Fry", icon: "🐟", desc: "Daily catch from the sea", price: "Specialty" },
              { name: "Prawn Malai Curry", icon: "🦐", desc: "Creamy prawn delicacy", price: "Delicious" },
              { name: "Coconut Water", icon: "🥥", desc: "Fresh tender coconuts", price: "Refreshing" },
              { name: "Beach BBQ", icon: "🍖", desc: "Evening bonfire grills", price: "Romantic" },
              { name: "Seafood Platter", icon: "🦞", desc: "Mixed seafood delights", price: "Recommended" },
              { name: "Local Beer", icon: "🍺", desc: "Chilled by the beach", price: "Perfect" }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-xl transition group">
                <div className="text-4xl mb-3 group-hover:scale-110 transition">{item.icon}</div>
                <h4 className="font-bold text-lg mb-1">{item.name}</h4>
                <p className="text-gray-600 text-sm mb-2">{item.desc}</p>
                <p className="text-orange-600 font-semibold">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= OFFBEAT DESTINATIONS ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Offbeat Destinations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover hidden gems away from the crowds
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <TreePine className="w-8 h-8 text-green-600" />
                <h3 className="text-2xl font-bold">Baguran Jalpai</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Pristine beach destination with Bankiput exploration. Perfect for those seeking solitude and untouched natural beauty. 
                Experience authentic coastal village life with sustainable tourism practices.
              </p>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold mb-2">Package Highlights</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Beach camping options</li>
                  <li>• Local village tours</li>
                  <li>• Traditional fishing experiences</li>
                  <li>• Eco-friendly stays</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Home className="w-8 h-8 text-blue-600" />
                <h3 className="text-2xl font-bold">Monchasha Eco Village</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Sustainable tourism destination promoting self-sufficient village life. Experience Bengali culture, 
                folk programs, and eco-friendly practices in harmony with nature.
              </p>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold mb-2">Eco Experience</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Traditional Bengali meals</li>
                  <li>• Village exploration</li>
                  <li>• Cultural folk programs</li>
                  <li>• Sustainable practices</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SPECIAL OFFERS ================= */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Special Offers</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Exclusive deals for your perfect beach vacation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center">
              <Award className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Book 7 Nights</h3>
              <p className="text-3xl font-bold text-yellow-400 mb-2">Get 8th Day FREE</p>
              <p className="text-blue-100">Extended beach paradise</p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center">
              <Users className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Book & Refer</h3>
              <p className="text-3xl font-bold text-yellow-400 mb-2">Cash Back</p>
              <p className="text-blue-100">Up to ₹2.50 lakh</p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center">
              <Star className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Early Bird</h3>
              <p className="text-3xl font-bold text-yellow-400 mb-2">20% OFF</p>
              <p className="text-blue-100">Book 30 days in advance</p>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-white text-blue-800 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Ready for Beach Paradise?</h3>
              <p className="text-gray-700 mb-6">
                Contact us for special tailor-made packages designed according to your preferences
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
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
