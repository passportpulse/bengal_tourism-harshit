"use client"

import Image from 'next/image'
import { MapPin, Calendar, Users, Star, Clock, Camera, Sun, Home, DollarSign, Award, Compass, Utensils, Building, Trees, Ship, Sparkles, Train, ShoppingBag, Book, Mountain, Waves, Fish, Bird, Tent, Flame, PartyPopper, Heart, Sprout } from 'lucide-react'

export default function NepalPage() {
  return (
    <main className="text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1544736655-e9d6a0b8e1a?w=1920&h=1080&fit=crop"
            alt="Himalayan mountains with ancient temple and prayer flags"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-green-900/80 via-emerald-800/60 to-green-900/80"></div>
        </div>

        <div className="relative h-full flex items-center justify-center text-center text-white px-6">
          <div className="max-w-4xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Mountain className="w-6 h-6 text-yellow-400" />
              <span className="text-yellow-400 font-semibold tracking-wide">Nepal Himalayan Paradise</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Nepal
              <span className="block text-3xl md:text-5xl mt-2 text-green-300">
                Kathmandu • Patan • Bhaktapur • Nagarkot
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Experience the mystical Himalayan kingdom with ancient temples, 
              cultural heritage, and breathtaking mountain views
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-yellow-400 transition transform hover:scale-105">
                Explore Nepal
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-green-800 transition transform hover:scale-105">
                Book Himalayan Journey
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">Discover the Himalayas</span>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Nepal Tour Packages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Special tailor-made packages designed for your perfect Himalayan adventure
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Kathmandu Valley Tour */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                <Building className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Kathmandu Valley Tour</h3>
                <p className="text-gray-700 mb-4">4 Nights / 5 Days exploring cultural heart of Nepal</p>
                <div className="bg-green-100 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Package Highlights</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Pashupatinath Temple visit</li>
                    <li>• Boudhanath Stupa exploration</li>
                    <li>• Royal Palace & Durbar Square</li>
                    <li>• Local market shopping</li>
                    <li>• Cultural activities</li>
                  </ul>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-green-600 font-semibold">Budget Package</span>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>

            {/* Patan & Bhaktapur Tour */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                <Building className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Patan & Bhaktapur Tour</h3>
                <p className="text-gray-700 mb-4">3 Nights / 4 Days of ancient cities and temples</p>
                <div className="bg-blue-100 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Heritage Sites</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Ancient city exploration</li>
                    <li>• Temple visits</li>
                    <li>• Traditional craft workshops</li>
                    <li>• Cultural performances</li>
                  </ul>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-blue-600 font-semibold">Heritage Experience</span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MOUNTAIN DESTINATIONS ================= */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Mountain Destinations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Breathtaking Himalayan destinations with spectacular views and spiritual significance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Nagarkot */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mountain className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Nagarkot</h3>
              <p className="text-gray-700 mb-4">2195m elevation with stunning Himalayan views</p>
              <div className="bg-orange-100 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Experience</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Panoramic mountain views</li>
                    <li>• Sunrise & sunset viewpoints</li>
                    <li>• Photography spots</li>
                    <li>• Spiritual atmosphere</li>
                  </ul>
                </div>
              <div className="flex items-center justify-between mt-4">
                <span className="text-orange-600 font-semibold">2N/3D Package</span>
                <button className="bg-orange-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-orange-700 transition">
                    Book Now
                  </button>
                </div>
            </div>

            {/* Chitwan */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trees className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Chitwan National Park</h3>
              <p className="text-gray-700 mb-4">Wildlife sanctuary with jungle adventures</p>
              <div className="bg-green-100 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Wildlife Experience</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Jungle safari</li>
                    <li>• Bird watching</li>
                    <li>• Nature trails</li>
                    <li>• Wildlife photography</li>
                  </ul>
                </div>
              <div className="flex items-center justify-between mt-4">
                <span className="text-green-600 font-semibold">2N/3D Package</span>
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition">
                    Book Now
                  </button>
                </div>
            </div>

            {/* Sarangkot */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sun className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Sarangkot Hill Station</h3>
              <p className="text-gray-700 mb-4">Scenic hill station with sunrise views and mountain access</p>
              <div className="bg-purple-100 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Hill Experience</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Sunrise mountain views</li>
                    <li>• Mount Annapurna range</li>
                    <li>• Snow-capped peaks</li>
                    <li>• Spiritual atmosphere</li>
                  </ul>
                </div>
              <div className="flex items-center justify-between mt-4">
                <span className="text-purple-600 font-semibold">2N/3D Extension</span>
                  <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700 transition">
                    Book Extension
                  </button>
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
              Immerse yourself in Nepal's rich cultural heritage and spiritual traditions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Temple Visits */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition">
              <div className="flex items-center gap-3 mb-4">
                <Building className="w-8 h-8 text-orange-600" />
                <h3 className="text-xl font-bold">Temple Visits</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Visit sacred Hindu temples including Pashupatinath (holiest site), Boudhanath Stupa, 
                and ancient temples with intricate architecture and spiritual significance.
              </p>
              <div className="flex items-center gap-2 text-orange-600">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Kathmandu Valley</span>
              </div>
            </div>

            {/* Royal Heritage */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-8 h-8 text-purple-600" />
                <h3 className="text-xl font-bold">Royal Heritage</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Explore royal palaces, durbar squares, and ancient seats of Malla kings. 
                Experience the grandeur of Nepal's medieval history and royal traditions.
              </p>
              <div className="flex items-center gap-2 text-purple-600">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Patan & Bhaktapur</span>
              </div>
            </div>

            {/* Traditional Crafts */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition">
              <div className="flex items-center gap-3 mb-4">
                <ShoppingBag className="w-8 h-8 text-green-600" />
                <h3 className="text-xl font-bold">Traditional Crafts</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Visit traditional craft workshops and learn ancient techniques in pottery, 
                metalwork, thangka painting, and textile making. Purchase authentic handmade souvenirs.
              </p>
              <div className="flex items-center gap-2 text-green-600">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Bhaktapur</span>
              </div>
            </div>

            {/* Mountain Life */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition">
              <div className="flex items-center gap-3 mb-4">
                <Mountain className="w-8 h-8 text-blue-600" />
                <h3 className="text-xl font-bold">Mountain Life</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Experience traditional mountain village life, farming communities, 
                and spiritual practices in Himalayan settings. Participate in local festivals and ceremonies.
              </p>
              <div className="flex items-center gap-2 text-blue-600">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">All Mountain Areas</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BOOKING CTA ================= */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Book Your Himalayan Adventure</h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Special tailor-made packages designed for your perfect Nepal experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center">
              <Clock className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Flexible Duration</h3>
              <p className="text-3xl font-bold text-yellow-400 mb-2">4-7 Days</p>
              <p className="text-green-100">Custom packages available</p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center">
              <Users className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Group Size</h3>
              <p className="text-3xl font-bold text-yellow-400 mb-2">2-15 People</p>
              <p className="text-green-100">Private & group tours</p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center">
              <DollarSign className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Starting From</h3>
              <p className="text-3xl font-bold text-yellow-400 mb-2">₹15,000</p>
              <p className="text-green-100">Per person</p>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-white text-green-800 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Ready for Himalayan Adventure?</h3>
              <p className="text-gray-700 mb-6">
                Contact us for special tailor-made packages designed according to your preferences
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-green-600 text-white px-8 py-3 rounded-full font-bold hover:bg-green-700 transition">
                  Call Now: +91 98765 43210
                </button>
                <button className="bg-emerald-600 text-white px-8 py-3 rounded-full font-bold hover:bg-emerald-700 transition">
                  Email: info@bengaltourism.com
                </button>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                For more pictures, offers & reviews, visit our Facebook Page
              </p>
              <div className="mt-6 bg-green-100 p-4 rounded-lg">
                <p className="text-green-800 font-bold text-center mb-2">
                  🏔️ Discover Himalayan Kingdom
                </p>
                <p className="text-sm text-green-700 text-center">
                  Experience ancient temples, cultural heritage, and breathtaking mountain views
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
