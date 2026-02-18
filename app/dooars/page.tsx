"use client"

import Image from 'next/image'
import { Trees, MapPin, Calendar, Users, Star, Clock, Camera, Eye, Bird, Truck, Mountain, Car, Home, IndianRupee, AlertCircle, CheckCircle, Compass } from 'lucide-react'
import PackagePricing from '@/components/PackagePricing'
import ContactCTA from '@/components/ContactCTA'

export default function DooarsPage() {
  return (
    <main className="text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-gradient-to-br from-white to-orange-50 py-24 overflow-hidden">
        {/* Decorative Image - Touching top and right */}
        <img
          src="/Decore.png"
          alt="Decorative elements"
          className="absolute top-0 right-0 w-auto h-full object-contain"
        />

        <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* ---------- LEFT CONTENT ---------- */}
          <div>
            <div className="flex items-center  gap-2 mb-4">
              <Trees className="w-6 h-6 text-yellow-400" />
              <span className="text-yellow-400 font-semibold tracking-wide">Wildlife Paradise</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6 relative">
              Dooars
              <span className="block text-3xl md:text-5xl mt-2 text-orange-300">
                Where Nature Meets Adventure
              </span>
            </h1>

            <p className="text-gray-600 text-lg mb-10 max-w-md">
              Explore lush forests, wildlife sanctuaries, and tea gardens of Dooars
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <button className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-yellow-400 transition transform hover:scale-105">
                Explore Wildlife
              </button>

              <button className="border-2 border-yellow-600 text-yellow-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-600 hover:text-white transition transform hover:scale-105">
                Book Safari
              </button>
            </div>
          </div>
             <div className="flex justify-center md:justify-end">
            <img
              src="/Jaldapara-elephant-safari-in-Jaldapara-National-Park.jpeg"
              alt="Jaldapara National Park elephant safari"
              className="w-full max-w-md md:max-w-lg lg:max-w-xl rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* ================= QUICK FACTS ================= */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Truck className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">200+ Elephants</h3>
              <p className="text-gray-600 text-sm">Majestic wildlife</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Eye className="w-10 h-10 text-orange-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">One-Horned Rhino</h3>
              <p className="text-gray-600 text-sm">Star attraction</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Trees className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">5 National Parks</h3>
              <p className="text-gray-600 text-sm">Pristine forests</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Mountain className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Tea Gardens</h3>
              <p className="text-gray-600 text-sm">Scenic plantations</p>
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
              Special tailor-made combination packages designed for your perfect Dooars experience
            </p>
          </div>

          {/* Jungle Circuit - 5N/6D */}
          <div className="mb-8">
            <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6 rounded-t-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Jungle Circuit - Jaldapara, Gorumara, Murti</h3>
                  <p className="text-green-100">5 Nights / 6 Days</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold">₹15,400</div>
                  <div className="text-green-100">Per Person</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white border-2 border-green-600 border-t-0 rounded-b-2xl p-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-green-600" />
                    <h4 className="font-bold">Day 1</h4>
                  </div>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• NJP/Bagdogra pickup</li>
                    <li>• Drive to Jaldapara (120km/3.5hrs)</li>
                    <li>• Via Coronation Bridge</li>
                    <li>• Bengal Safari Park (if time permits)</li>
                    <li>• Check-in & Elephant Safari booking</li>
                    <li>• Breakfast & Dinner included</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-green-600" />
                    <h4 className="font-bold">Day 2</h4>
                  </div>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Elephant Safari (1.5hrs)</li>
                    <li>• Jayanti & Buxa Fort visit</li>
                    <li>• Mahakal Temple trek</li>
                    <li>• Tiger Rehabilitation Centre</li>
                    <li>• Sikiyajhora evening</li>
                    <li>• Breakfast & Dinner included</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-green-600" />
                    <h4 className="font-bold">Day 3</h4>
                  </div>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Chilapata Forest</li>
                    <li>• Cooch Behar Rajbari</li>
                    <li>• Madan Mohan Temple</li>
                    <li>• Phuntsholing (Bhutan)</li>
                    <li>• Zangthoo Pelri Lhakhang</li>
                    <li>• Breakfast & Dinner included</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-green-600" />
                    <h4 className="font-bold">Day 4</h4>
                  </div>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Jhalong & Bindu visit</li>
                    <li>• Murti River exploration</li>
                    <li>• Scenic beauty of hills</li>
                    <li>• Transfer to Lataguri</li>
                    <li>• Check-in at resort</li>
                    <li>• Breakfast & Dinner included</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-green-600" />
                    <h4 className="font-bold">Day 5</h4>
                  </div>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Gorumara Jeep Safari</li>
                    <li>• Samsing & Suntalekhola</li>
                    <li>• Rocky Island visit</li>
                    <li>• Jatraposad Watch Tower</li>
                    <li>• Cultural program evening</li>
                    <li>• Breakfast & Dinner included</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-green-600" />
                    <h4 className="font-bold">Day 6</h4>
                  </div>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Breakfast & checkout</li>
                    <li>• Gajoldoba visit (if time permits)</li>
                    <li>• Drive to NJP/Bagdogra</li>
                    <li>• Drop for onward journey</li>
                    <li>• Breakfast & Dinner included</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        
        </div>
      </section>

      {/* ================= WILDLIFE SANCTUARIES ================= */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Wildlife Sanctuaries</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the pristine national parks and wildlife sanctuaries of Dooars
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                <Truck className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Jaldapara National Park</h3>
                <p className="text-gray-700 mb-4">Famous for one-horned rhinoceros and elephant safaris</p>
                <div className="flex items-center gap-2 text-green-600">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Alipurduar District</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                <Eye className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Gorumara National Park</h3>
                <p className="text-gray-700 mb-4">Home to Indian bison, leopards, and diverse birdlife</p>
                <div className="flex items-center gap-2 text-orange-600">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Jalpaiguri District</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                <Trees className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Buxa Tiger Reserve</h3>
                <p className="text-gray-700 mb-4">Historic fort and diverse wildlife with trekking opportunities</p>
                <div className="flex items-center gap-2 text-blue-600">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Alipurduar District</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                <Bird className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Chapramari Wildlife Sanctuary</h3>
                <p className="text-gray-700 mb-4">Birdwatcher's paradise with elephants and bison</p>
                <div className="flex items-center gap-2 text-yellow-600">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Jalpaiguri District</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-teal-400 to-green-500 flex items-center justify-center">
                <Mountain className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Neora Valley National Park</h3>
                <p className="text-gray-700 mb-4">Pristine tropical forest with endangered species</p>
                <div className="flex items-center gap-2 text-teal-600">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Kalimpong District</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
                <Camera className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Mahananda Wildlife Sanctuary</h3>
                <p className="text-gray-700 mb-4">Elephant corridor with stunning Himalayan views</p>
                <div className="flex items-center gap-2 text-purple-600">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Darjeeling District</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= KEY DESTINATIONS ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Key Destinations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the main hubs and attractions of Dooars tourism
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 text-center hover:shadow-xl transition group">
              <div className="bg-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition">
                <Home className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Jaldapara</h3>
              <p className="text-gray-600 text-sm mb-3">Elephant safari hub with rhino sightings</p>
              <div className="text-green-600 font-semibold">Main Attraction</div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 text-center hover:shadow-xl transition group">
              <div className="bg-orange-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition">
                <Trees className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Lataguri</h3>
              <p className="text-gray-600 text-sm mb-3">Gateway to Gorumara National Park</p>
              <div className="text-orange-600 font-semibold">Tourist Center</div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 text-center hover:shadow-xl transition group">
              <div className="bg-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition">
                <Compass className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Murti</h3>
              <p className="text-gray-600 text-sm mb-3">Scenic river beauty amidst hills</p>
              <div className="text-blue-600 font-semibold">Nature Spot</div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 text-center hover:shadow-xl transition group">
              <div className="bg-purple-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition">
                <Mountain className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Chalsa</h3>
              <p className="text-gray-600 text-sm mb-3">Tea garden paradise with scenic views</p>
              <div className="text-purple-600 font-semibold">Tea Hub</div>
            </div>
          </div>

          {/* Additional Destinations */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "Jayanti", "Bindu", "Jhalong", "Samsing", "Suntalekhola", "Rocky Island",
              "Lava", "Lolegaon", "Rishyap", "Neora Valley", "Chilapata", "Phuntsholing"
            ].map((place, index) => (
              <div key={index} className="bg-white border border-gray-200 p-4 rounded-xl text-center hover:bg-green-50 transition cursor-pointer">
                <MapPin className="w-6 h-6 text-green-600 mx-auto mb-2" />
                <p className="text-sm font-medium">{place}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SAFARI ACTIVITIES ================= */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Safari & Adventure</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Thrilling wildlife experiences and adventure activities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transition">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Elephant Safari</h3>
              <p className="text-gray-600 text-sm mb-3">1.5 hour jungle ride</p>
              <p className="text-orange-600 font-semibold">Jaldapara</p>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transition">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Jeep Safari</h3>
              <p className="text-gray-600 text-sm mb-3">Morning & evening trips</p>
              <p className="text-green-600 font-semibold">Gorumara</p>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transition">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mountain className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Trekking</h3>
              <p className="text-gray-600 text-sm mb-3">Buxa Fort & Mahakal</p>
              <p className="text-blue-600 font-semibold">Buxa</p>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transition">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bird className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Bird Watching</h3>
              <p className="text-gray-600 text-sm mb-3">300+ species</p>
              <p className="text-purple-600 font-semibold">All Parks</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= IMPORTANT INFORMATION ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Important Information</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Essential details for your Dooars jungle safari
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="w-8 h-8 text-red-600" />
                <h3 className="text-2xl font-bold text-red-700">Forest Closure Notice</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Forest Entry / Safari is closed from <strong>15th June to 15th September</strong> annually 
                due to monsoon season and wildlife breeding period.
              </p>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Best Time to Visit:</strong> October to March
                </p>
              </div>
            </div>

            <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
                <h3 className="text-2xl font-bold text-green-700">Safari Booking</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Guests can book Safari Tickets at their own discretion through official portal
              </p>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-sm font-mono text-blue-600">
                  www.wbsfda.org/safari
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Additional Information</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-2">Transportation</h4>
                <ul className="space-y-1 text-blue-100">
                  <li>• AC vehicles available for all tours</li>
                  <li>• Pickup from NJP/Bagdogra Airport</li>
                  <li>• Extra vehicle cost: ₹2500 per vehicle (4-6 PAX)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-2">What's Included</h4>
                <ul className="space-y-1 text-blue-100">
                  <li>• Accommodation in hotels/resorts</li>
                  <li>• Daily breakfast and dinner</li>
                  <li>• All transfers and sightseeing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

   

      {/* ================= PACKAGE PRICING ================= */}
      <PackagePricing 
        title="Dooars Tour Packages"
        subtitle="Choose your perfect wilderness adventure duration"
      />

<ContactCTA />
    </main>
  )
}
