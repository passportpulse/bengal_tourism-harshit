"use client"

import Image from 'next/image'
import { MapPin, Calendar, Users, Star, Clock, Camera, Sun, Home, DollarSign, Award, Compass, Utensils, Building, Trees, Ship, Sparkles, Train, ShoppingBag, Book, Mountain, Waves, Fish, Bird, Tent, Flame, PartyPopper, Heart, Sprout } from 'lucide-react'

export default function AirAmbulancePage() {
  return (
    <main className="text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1576096424-5f6e4e1a5?w=1920&h=1080&fit=crop"
            alt="Medical helicopter with emergency medical team and equipment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-red-900/80 via-orange-800/60 to-red-900/80"></div>
        </div>

        <div className="relative h-full flex items-center justify-center text-white px-6">
          <div className="max-w-4xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Heart className="w-6 h-6 text-yellow-400" />
              <span className="text-yellow-400 font-semibold tracking-wide">Air Ambulance Service</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Emergency Medical Services
              <span className="block text-3xl md:text-5xl mt-2 text-orange-300">
                Charter Flights • Medical Team • Patient Care
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Professional air ambulance services with experienced medical teams, 
              specialized aircraft, and comprehensive patient care for critical situations
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-yellow-400 transition transform hover:scale-105">
                Emergency Services
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-red-800 transition transform hover:scale-105">
                Book Charter Flight
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">24/7 Emergency Support</span>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= AIRCRAFT CHARTER SERVICES ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Aircraft Charter Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Private aircraft charter services for urgent medical and time-sensitive situations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Helicopter Services */}
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-red-400 to-orange-500 flex items-center justify-center">
                <Ship className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Helicopter Charter</h3>
                <p className="text-gray-700 mb-4">Rapid medical evacuation with experienced medical teams</p>
                <div className="bg-red-100 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Emergency Response</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• 24/7 availability</li>
                    <li>• ICU/CCU specialists</li>
                    <li>• Advanced life support systems</li>
                    <li>• Experienced pilots</li>
                  </ul>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-red-600 font-semibold">Critical Care</span>
                  <button className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-700 transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>

            {/* Private Jets */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                <Ship className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Private Jet Charter</h3>
                <p className="text-gray-700 mb-4">Luxury private jets for VIP medical transport</p>
                <div className="bg-blue-100 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Premium Service</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Turbo prop jets</li>
                    <li>• Mid-size jets</li>
                    <li>• Super mid-size jets</li>
                    <li>• Heavy jets</li>
                    <li>• Business class seating</li>
                  </ul>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-blue-600 font-semibold">VIP Transport</span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>

            {/* Medical Aircraft */}
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-green-400 to-teal-500 flex items-center justify-center">
                <Building className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Medical Aircraft</h3>
                <p className="text-gray-700 mb-4">Specialized medical aircraft with ICU facilities</p>
                <div className="bg-green-100 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Medical Care</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• King Air B-200</li>
                    <li>• Platus PC-12</li>
                    <li>• Lear Jets</li>
                    <li>• Gulfstream GIII</li>
                    <li>• Piaggio P180</li>
                  </ul>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-green-600 font-semibold">Medical Transport</span>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MEDICAL TEAM ================= */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Medical Team & Equipment</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced medical professionals with advanced equipment and training
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Medical Team */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Medical Team</h3>
              <p className="text-gray-700 mb-4">
                Highly qualified doctors, paramedics, and medical assistants with years 
                of experience in emergency care and rescue operations.
              </p>
              <div className="flex items-center gap-2 text-orange-600">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">24/7 Available</span>
              </div>
            </div>

            {/* Advanced Equipment */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Advanced Equipment</h3>
              <p className="text-gray-700 mb-4">
                State-of-the-art medical equipment including ICU/CCU facilities, 
                advanced life support systems, oxygen supplies, and specialized 
                medical equipment for critical care situations.
              </p>
              <div className="flex items-center gap-2 text-green-600">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Advanced Care</span>
              </div>
            </div>

            {/* Safety Record */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Perfect Safety</h3>
              <p className="text-gray-700 mb-4">
                Perfect safety record with zero accidents. Our trained professionals 
                undergo rigorous training for emergency operations and flight safety.
              </p>
              <div className="flex items-center gap-2 text-teal-600">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Safety First</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SPECIAL SERVICES ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Special Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive medical services with specialized care and support
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Bed-to-Bed Service */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Bed-to-Bed Transfer</h3>
              <p className="text-gray-700 mb-4">
                Complete bed-to-bed patient transfer service with trained medical escort. 
                Our team ensures safe and comfortable transfer with proper medical 
                supervision throughout the journey.
              </p>
              <div className="flex items-center gap-2 text-purple-600">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Complete Care</span>
              </div>
            </div>

            {/* Medical Escort */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Medical Escort</h3>
              <p className="text-gray-700 mb-4">
                Trained medical professionals accompany patients during transfer. 
                Special arrangements for wheelchairs, oxygen supplies, and other medical needs.
              </p>
              <div className="flex items-center gap-2 text-orange-600">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Escort Service</span>
              </div>
            </div>

            {/* Ground Transportation */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Train className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Ground Transport</h3>
              <p className="text-gray-700 mb-4">
                Ambulance-equipped ground transportation with stretcher facilities. 
                Special arrangements for wheelchairs and mobility assistance.
              </p>
              <div className="flex items-center gap-2 text-blue-600">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Ground Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BOOKING CTA ================= */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Book Emergency Medical Transport</h2>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              Immediate response for critical medical situations with experienced teams
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center">
              <Clock className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">24/7 Emergency</h3>
              <p className="text-3xl font-bold text-yellow-400 mb-2">Always Available</p>
              <p className="text-red-100">Round-the-clock emergency response</p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center">
              <Users className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Experienced Team</h3>
              <p className="text-3xl font-bold text-yellow-400 mb-2">Highly Qualified</p>
              <p className="text-red-100">Seasoned professionals</p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center">
              <DollarSign className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Competitive Pricing</h3>
              <p className="text-3xl font-bold text-yellow-400 mb-2">Quality Without Compromise</p>
              <p className="text-red-100">Transparent pricing</p>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-white text-red-800 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Emergency Medical Transport?</h3>
              <p className="text-gray-700 mb-6">
                Contact us immediately for critical medical transport services
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-red-600 text-white px-8 py-3 rounded-full font-bold hover:bg-red-700 transition">
                  Call Now: +91 7003796250
                </button>
                <button className="bg-orange-600 text-white px-8 py-3 rounded-full font-bold hover:bg-orange-700 transition">
                  WhatsApp: +91 7003796250
                </button>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                For more information, visit our Facebook Page
              </p>
              <div className="mt-6 bg-red-100 p-4 rounded-lg">
                <p className="text-red-800 font-bold text-center mb-2">
                  🚑 Professional Medical Transport
                </p>
                <p className="text-sm text-red-700 text-center">
                  Experienced teams, advanced equipment, and comprehensive care
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
