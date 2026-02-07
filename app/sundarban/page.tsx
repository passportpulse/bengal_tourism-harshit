"use client"

import Image from 'next/image'
import { Trees, Waves, MapPin, Calendar, Users, Star, Clock, Camera, Anchor, Eye, Bird, Fish, Trees as TreeIcon, Home, Ship, DollarSign, Award, Compass } from 'lucide-react'

export default function SundarbanPage() {
  return (
    <main className="text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1540206395-68808572332f?w=1920&h=1080&fit=crop"
            alt="Sundarban mangrove forest with waterways"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-green-900/80 via-green-800/60 to-green-900/80"></div>
        </div>

        {/* Hero Content */}
        <div className="relative h-full flex items-center justify-center text-center text-white px-6">
          <div className="max-w-4xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Trees className="w-6 h-6 text-yellow-400" />
              <span className="text-yellow-400 font-semibold tracking-wide">UNESCO World Heritage Site</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Sundarban
              <span className="block text-3xl md:text-5xl mt-2 text-green-300">
                Land of the Royal Bengal Tiger
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Explore the world's largest mangrove forest, home to majestic tigers, 
              diverse wildlife, and the unique ecosystem of West Bengal
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-yellow-400 transition transform hover:scale-105">
                Book Your Safari
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-green-800 transition transform hover:scale-105">
                Explore Tour Packages
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">Discover the wilderness</span>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= QUICK FACTS ================= */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Trees className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">10,000 km²</h3>
              <p className="text-gray-600 text-sm">World's largest mangrove</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Eye className="w-10 h-10 text-orange-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">100+ Tigers</h3>
              <p className="text-gray-600 text-sm">Royal Bengal Tigers</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Bird className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">300+ Species</h3>
              <p className="text-gray-600 text-sm">Birds & Wildlife</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Award className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">UNESCO Site</h3>
              <p className="text-gray-600 text-sm">Since 1987</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TOUR PACKAGES ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Tour Packages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Special tailor-made combination packages designed for your perfect Sundarban experience
            </p>
          </div>

          {/* Circuit I - 2N/3D */}
          <div className="mb-12">
            <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6 rounded-t-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Circuit I - Mangrove Forest & Royal Bengal Tiger</h3>
                  <p className="text-green-100">2 Nights / 3 Days</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold">₹12,000</div>
                  <div className="text-green-100">Per Person</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white border-2 border-green-600 border-t-0 rounded-b-2xl p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-green-50 p-6 rounded-xl">
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="w-5 h-5 text-green-600" />
                    <h4 className="font-bold text-lg">Day 1</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Pick up from Science City (8:30 AM)</li>
                    <li>• Arrival at Godhkhali (120 km/3 hrs)</li>
                    <li>• Launch journey to resort</li>
                    <li>• Check-in & lunch at resort</li>
                    <li>• Evening: Jotirampur Bird Watching</li>
                    <li>• Cultural program (optional)</li>
                    <li>• Dinner & overnight stay</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-6 rounded-xl">
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="w-5 h-5 text-green-600" />
                    <h4 className="font-bold text-lg">Day 2</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Early morning tea & breakfast</li>
                    <li>• Do-Banki Tiger Reserve cruise</li>
                    <li>• Gazikhali, Pirkhali Creeks</li>
                    <li>• Panchamukhi River crossing</li>
                    <li>• Visit 3 Watch Towers: Netidhopani, Dobanki, Sajnekhali</li>
                    <li>• Canopy Walk & Museum visit</li>
                    <li>• Cultural program (optional)</li>
                    <li>• Dinner & overnight stay</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-6 rounded-xl">
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="w-5 h-5 text-green-600" />
                    <h4 className="font-bold text-lg">Day 3</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Early morning tea & breakfast</li>
                    <li>• Village tour on foot</li>
                    <li>• Experience local life</li>
                    <li>• Visit Rabindranath's Heritage Bungalow</li>
                    <li>• OR Sudhanyakhali watch tower</li>
                    <li>• Lunch on boat</li>
                    <li>• Return to Godhkhali</li>
                    <li>• Drop at Kolkata Science City (6-7 PM)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Customise Options */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 border-2 border-blue-200">
              <div className="flex items-center gap-3 mb-4">
                <Home className="w-8 h-8 text-blue-600" />
                <h3 className="text-2xl font-bold">Premium 5* Resort</h3>
              </div>
              <p className="text-gray-700 mb-4">Luxury stay at premium 5-star resort in Sundarban</p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-600">Minimum 10-15 PAX</span>
                <span className="text-2xl font-bold text-blue-600">₹19,000</span>
              </div>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                Book Premium Resort
              </button>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-200">
              <div className="flex items-center gap-3 mb-4">
                <Anchor className="w-8 h-8 text-purple-600" />
                <h3 className="text-2xl font-bold">AC House Boat</h3>
              </div>
              <p className="text-gray-700 mb-4">Overnight stay on AC houseboat anchored on the river</p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-600">Minimum 10-15 PAX</span>
                <span className="text-2xl font-bold text-purple-600">₹19,000</span>
              </div>
              <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition">
                Book House Boat
              </button>
            </div>
          </div>

          {/* Circuit III - Extended */}
          <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-2xl overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Circuit III - Extended Mangrove Experience</h3>
                  <p className="text-orange-100">4 Days / 3 Nights with Additional Areas</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold">₹15,000</div>
                  <div className="text-orange-100">Per Person</div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                <h4 className="font-bold mb-2">Day 4 Special Features:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Deep creek exploration</li>
                  <li>• Burir Dabri Watch Tower & Mud Walk</li>
                  <li>• Kumirmari Watch Tower</li>
                  <li>• Morich Jhapi & Bonnie Camp</li>
                  <li>• Raimongal View Point</li>
                  <li>• Special permission required (₹1000 extra)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WATCH TOWERS & ATTRACTIONS ================= */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Watch Towers & Attractions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic viewpoints for wildlife spotting and experiencing the mangrove ecosystem
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
                <Eye className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Sajnekhali Watch Tower</h3>
                <p className="text-gray-700 mb-4">Main tourist hub with museum, crocodile park, and turtle sanctuary</p>
                <div className="flex items-center gap-2 text-green-600">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Tiger Project Area</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                <Trees className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Dobanki Watch Tower</h3>
                <p className="text-gray-700 mb-4">Famous for canopy walk through mangrove forest</p>
                <div className="flex items-center gap-2 text-orange-600">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Do-Banki Tiger Reserve</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
                <Camera className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Netidhopani Watch Tower</h3>
                <p className="text-gray-700 mb-4">Historical site with ruins and excellent tiger spotting</p>
                <div className="flex items-center gap-2 text-purple-600">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Deep Forest Area</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-green-500 flex items-center justify-center">
                <Bird className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Sudhanyakhali Watch Tower</h3>
                <p className="text-gray-700 mb-4">Prime location for tiger and deer sightings</p>
                <div className="flex items-center gap-2 text-blue-600">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Core Tiger Area</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                <Compass className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Burir Dabri Watch Tower</h3>
                <p className="text-gray-700 mb-4">Mud walk and mangrove cage trail to Raimongal View Point</p>
                <div className="flex items-center gap-2 text-yellow-600">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Extended Area (Special Permit)</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center">
                <Fish className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Kumirmari Watch Tower</h3>
                <p className="text-gray-700 mb-4">Exciting jungle views and rustic market experience</p>
                <div className="flex items-center gap-2 text-teal-600">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Village Area</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WILDLIFE & NATURE ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Wildlife & Nature</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the incredible biodiversity of the Sundarban mangrove ecosystem
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-green-700">Royal Bengal Tiger</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                The majestic apex predator of Sundarban, uniquely adapted to mangrove habitat. 
                These magnificent tigers are excellent swimmers and have developed special behaviors 
                to thrive in the delta region.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-bold text-orange-700 mb-2">Population</h4>
                  <p className="text-2xl font-bold text-orange-600">100+</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-bold text-green-700 mb-2">Best Season</h4>
                  <p className="text-lg font-semibold text-green-600">Nov - Mar</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=600&h=400&fit=crop"
                alt="Royal Bengal Tiger in Sundarban"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: "Spotted Deer", icon: "🦌", count: "30,000+" },
              { name: "Crocodiles", icon: "🐊", count: "500+" },
              { name: "Wild Boar", icon: "🐗", count: "10,000+" },
              { name: "Monkeys", icon: "🐒", count: "40,000+" },
              { name: "Kingfishers", icon: "🦜", count: "50+ species" },
              { name: "Mangrove Trees", icon: "🌳", count: "60+ species" },
              { name: "Dolphins", icon: "🐬", count: "Ganges River" },
              { name: "Turtles", icon: "🐢", count: "5+ species" }
            ].map((animal, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 text-center hover:shadow-lg transition">
                <div className="text-4xl mb-3">{animal.icon}</div>
                <h4 className="font-bold text-lg mb-1">{animal.name}</h4>
                <p className="text-green-600 font-semibold">{animal.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= LOCATIONS ================= */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Key Locations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the main hubs of Sundarban tourism
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transition group">
              <div className="bg-gradient-to-br from-green-400 to-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition">
                <MapPin className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Sajnekhali</h3>
              <p className="text-gray-600 text-sm mb-3">Main tourist hub with watch tower and museum</p>
              <div className="text-green-600 font-semibold">Tourist Center</div>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transition group">
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition">
                <Home className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Pakhiralay</h3>
              <p className="text-gray-600 text-sm mb-3">Resort area with accommodation facilities</p>
              <div className="text-blue-600 font-semibold">Stay Hub</div>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transition group">
              <div className="bg-gradient-to-br from-orange-400 to-orange-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition">
                <Anchor className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Gosaba</h3>
              <p className="text-gray-600 text-sm mb-3">Gateway to Sundarban with launch services</p>
              <div className="text-orange-600 font-semibold">Gateway</div>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transition group">
              <div className="bg-gradient-to-br from-purple-400 to-purple-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition">
                <Ship className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Godhkhali</h3>
              <p className="text-gray-600 text-sm mb-3">Main boarding point for Sundarban cruises</p>
              <div className="text-purple-600 font-semibold">Boarding Point</div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CULTURAL EXPERIENCES ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Cultural Experiences</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Immerse yourself in the rich local culture and traditions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-8 h-8 text-orange-600" />
                <h3 className="text-2xl font-bold">Village Life Experience</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Guided village tours to experience authentic rural life</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Interaction with local fishermen and honey collectors</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Visit to local markets and handicraft centers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Traditional fishing techniques demonstration</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Star className="w-8 h-8 text-purple-600" />
                <h3 className="text-2xl font-bold">Folk Cultural Programs</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>Traditional village folk dance performances</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>Local music and storytelling sessions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>Bonfire evenings with cultural activities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>Traditional cuisine cooking demonstrations</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Heritage Sites</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-2">Rabindranath Tagore's Heritage Bungalow</h4>
                <p className="text-green-100">Visit the historic bungalow where the Nobel laureate stayed during his Sundarban visits</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Hamilton's Bungalow</h4>
                <p className="text-green-100">Explore the colonial-era heritage site with rich historical significance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BOOKING INFORMATION ================= */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Book Your Sundarban Adventure</h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Ready to explore the mystical mangrove forest? Book your unforgettable journey today!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center">
              <Clock className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Best Time to Visit</h3>
              <p className="text-green-100">November to March</p>
              <p className="text-sm text-green-200 mt-2">Pleasant weather, maximum wildlife sightings</p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center">
              <Users className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Group Size</h3>
              <p className="text-green-100">Minimum 6-15 PAX</p>
              <p className="text-sm text-green-200 mt-2">Custom packages available for groups</p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center">
              <DollarSign className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Starting From</h3>
              <p className="text-green-100">₹12,000</p>
              <p className="text-sm text-green-200 mt-2">Per person for 2N/3D package</p>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-white text-green-800 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Ready to Book?</h3>
              <p className="text-gray-700 mb-6">
                Contact us for special tailor-made packages designed according to your preferences
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-green-600 text-white px-8 py-3 rounded-full font-bold hover:bg-green-700 transition">
                  Call Now: +91 98765 43210
                </button>
                <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition">
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
