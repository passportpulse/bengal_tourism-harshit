"use client"

import Image from 'next/image'
import { MapPin, Calendar, Users, Star, Clock, Camera, Sun, Home, DollarSign, Award, Compass, Utensils, Building, Trees, Ship, Sparkles, Train, ShoppingBag, Book, Mountain, Waves, Fish, Bird, Tent, Flame, PartyPopper, Heart, Sprout } from 'lucide-react'

export default function BhutanPage() {
  return (
    <main className="text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1544736655-e9d6a0b8e1a?w=1920&h=1080&fit=crop"
            alt="Beautiful Bhutan valley with mountains and traditional monastery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-purple-800/60 to-blue-900/80"></div>
        </div>

        <div className="relative h-full flex items-center justify-center text-center text-white px-6">
          <div className="max-w-4xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Mountain className="w-6 h-6 text-yellow-400" />
              <span className="text-yellow-400 font-semibold tracking-wide">Land of Thunder Dragon</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Bhutan
              <span className="block text-3xl md:text-5xl mt-2 text-blue-300">
                Paro • Thimpu • Punakha • Tiger Nest
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Experience the mystical Himalayan kingdom with ancient monasteries, 
              sacred temples, and breathtaking mountain passes
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-yellow-400 transition transform hover:scale-105">
                Explore Bhutan
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-800 transition transform hover:scale-105">
                Book Himalayan Journey
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">Discover the Thunder Dragon</span>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Bhutan Tour Packages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Special tailor-made packages designed for your perfect Himalayan adventure
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Thimpu-Punakha Package */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                <Mountain className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Thimpu - Punakha Circuit</h3>
                <p className="text-gray-700 mb-4">6 Nights / 7 Days exploring the spiritual heart of Bhutan</p>
                <div className="bg-blue-100 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Package Highlights</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Thimpu city tour & Memorial Chorten</li>
                    <li>• Buddha Dordenma statue visit</li>
                    <li>• National Animal Sanctuary</li>
                    <li>• National Library & Folk Heritage Museum</li>
                    <li>• Traditional Paper Making Factory</li>
                    <li>• Thirteen Arts & Craft School</li>
                  </ul>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-blue-600 font-semibold">Starting from ₹45,000</span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>

            {/* Paro-Thimpu Package */}
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-green-400 to-teal-500 flex items-center justify-center">
                <Building className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Paro - Thimpu Valley Tour</h3>
                <p className="text-gray-700 mb-4">6 Nights / 7 Days through beautiful valleys and ancient dzongs</p>
                <div className="bg-green-100 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Package Highlights</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Paro Dzong visit (1644 fortress)</li>
                    <li>• Ta Dzong hilltop temple</li>
                    <li>• National Museum with 3000+ art treasures</li>
                    <li>• Kyichu Lhakhang ancient temple</li>
                    <li>• Annual Paro Tshechu festival</li>
                  </ul>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-green-600 font-semibold">Starting from ₹42,000</span>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ADVENTURE ACTIVITIES ================= */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Adventure Activities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Thrilling adventures and spiritual experiences in the Himalayan kingdom
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Tiger Nest */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mountain className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Tiger Nest Monastery</h3>
              <p className="text-gray-700 mb-4">Sacred meditation site where Guru Rinpoche meditated in cave</p>
              <div className="bg-orange-100 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Experience</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Sacred cave meditation</li>
                  <li>• Historical significance</li>
                  <li>• Spectacular cliff views</li>
                  <li>• Spiritual atmosphere</li>
                </ul>
                <div className="mt-4">
                  <span className="text-orange-600 font-semibold">900m elevation</span>
                  <p className="text-sm text-gray-600">2-hour strenuous hike</p>
                </div>
              </div>
            </div>

            {/* Dochu La Pass */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Waves className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Dochu La Pass</h3>
              <p className="text-gray-700 mb-4">Highest motorable pass with stunning Himalayan views</p>
              <div className="bg-blue-100 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Experience</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• 4265 feet elevation</li>
                  <li>• Mt. Chomolhari views</li>
                  <li>• Pho Chhu & Mo Chhu confluence</li>
                  <li>• Winter seat of Je Khenpo</li>
                </ul>
                <div className="mt-4">
                  <span className="text-blue-600 font-semibold">Spiritual Place</span>
                  <p className="text-sm text-gray-600">Popular with locals & tourists</p>
                </div>
              </div>
            </div>

            {/* Chele La Pass */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Chele La Pass</h3>
              <p className="text-gray-700 mb-4">Watch tower at 10065 feet with panoramic valley views</p>
              <div className="bg-purple-100 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Features</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Former watch tower</li>
                    <li>• National Museum</li>
                    <li>• 3000+ art treasures</li>
                    <li>• Panoramic valley views</li>
                  </ul>
                </div>
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
              Immerse yourself in Bhutan's rich Buddhist culture and traditional heritage
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Traditional Arts */}
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition">
              <div className="flex items-center gap-3 mb-4">
                <PartyPopper className="w-8 h-8 text-red-600" />
                <h3 className="text-xl font-bold">Traditional Arts & Crafts</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Visit Thirteen Arts and Crafts School to learn traditional Bhutanese painting, 
                sculpture, and textile making. Experience the preservation of ancient artistic techniques.
              </p>
              <div className="flex items-center gap-2 text-red-600">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Thimpu</span>
              </div>
            </div>

            {/* Religious Festivals */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-8 h-8 text-blue-600" />
                <h3 className="text-xl font-bold">Religious Festivals</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Experience the vibrant Paro Tshechu festival, the most important religious celebration 
                attracting thousands of visitors. Witness traditional ceremonies, mask dances, and community gatherings.
              </p>
              <div className="flex items-center gap-2 text-blue-600">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Spring season</span>
              </div>
            </div>

            {/* Monastery Life */}
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition">
              <div className="flex items-center gap-3 mb-4">
                <Building className="w-8 h-8 text-green-600" />
                <h3 className="text-xl font-bold">Monastery Life</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Experience daily life in Buddhist monasteries, observe monk prayers, 
                and learn about meditation practices. Participate in traditional ceremonies and rituals.
              </p>
              <div className="flex items-center gap-2 text-green-600">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">All major monasteries</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ADDITIONAL DESTINATIONS ================= */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Additional Destinations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore more hidden gems and sacred sites across the Himalayan kingdom
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Phobjikha Valley */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
                <Bird className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Phobjikha Valley</h3>
                <p className="text-gray-700 mb-4">Valley of Cranes with subtropical forests and glacial valleys</p>
                <div className="bg-purple-100 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Highlights</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Crane watching</li>
                    <li>• Subtropical forests</li>
                    <li>• Glacial valleys</li>
                    <li>• Gangtey Gonpa visit</li>
                  </ul>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-purple-600 font-semibold">3N/4D Package</span>
                  <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700 transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>

            {/* Bumthang & Gantey Valley */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition">
              <div className="h-48 bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                <Sun className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Bumthang & Gantey Valley</h3>
                <p className="text-gray-700 mb-4">200km journey to Haa Valley with royal family celebrations</p>
                <div className="bg-orange-100 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Experience</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Royal family celebrations</li>
                    <li>• Ancient temple visits</li>
                    <li>• Traditional ceremonies</li>
                    <li>• Cultural immersion</li>
                  </ul>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-orange-600 font-semibold">Add ₹5,000</span>
                  <button className="bg-orange-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-orange-700 transition">
                    Book Extension
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BOOKING CTA ================= */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Book Your Bhutan Adventure</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Special tailor-made packages designed for your perfect Himalayan journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center">
              <Clock className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Flexible Duration</h3>
              <p className="text-3xl font-bold text-yellow-400 mb-2">6-10 Days</p>
              <p className="text-blue-100">Custom packages available</p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center">
              <Users className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Group Size</h3>
              <p className="text-3xl font-bold text-yellow-400 mb-2">2-15 People</p>
              <p className="text-blue-100">Private & group tours</p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center">
              <DollarSign className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Starting From</h3>
              <p className="text-3xl font-bold text-yellow-400 mb-2">₹42,000</p>
              <p className="text-blue-100">Per person</p>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-white text-blue-800 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Ready for Himalayan Adventure?</h3>
              <p className="text-gray-700 mb-6">
                Contact us for special tailor-made packages designed according to your preferences
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition">
                  Call Now: +91 98765 43210
                </button>
                <button className="bg-purple-600 text-white px-8 py-3 rounded-full font-bold hover:bg-purple-700 transition">
                  Email: info@bengaltourism.com
                </button>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                For more pictures, offers & reviews, visit our Facebook Page
              </p>
              <div className="mt-6 bg-blue-100 p-4 rounded-lg">
                <p className="text-blue-800 font-bold text-center mb-2">
                  🏔 Discover the Thunder Dragon Kingdom
                </p>
                <p className="text-sm text-blue-700 text-center">
                  Experience the mystical Himalayan kingdom with ancient monasteries and sacred mountains
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
