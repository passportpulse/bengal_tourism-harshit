"use client"

import Image from 'next/image'
import { MapPin, Calendar, Users, Star, Clock, Camera, Sun, Home, DollarSign, Award, Compass, Utensils, Building, Trees, Ship, Sparkles, Train, ShoppingBag, Book, Mountain, Waves, Fish, Bird, Tent, Flame, PartyPopper, Heart, Sprout, Coffee, Leaf, TreePine, Stethoscope, HeartPulse, Shield, Globe, Phone, Mail, CheckCircle, AlertCircle, Activity, Brain, Bone, Eye, User, Bed, Wifi, Car, Utensils as UtensilsIcon, Wind, Building as Temple, Waves as WavesIcon, Compass as CompassIcon, Trees as TreesIcon, Camera as CameraIcon, Ship as ShipIcon } from 'lucide-react'
import PackagePricing from '@/components/PackagePricing'

export default function GoaTourismPage() {
  return (
    <main className="text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/Goa.jpeg"
            alt="Beautiful Goan beach with palm trees and golden sand"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-cyan-800/60 to-blue-900/80"></div>
        </div>

        <div className="relative h-full flex items-center justify-center text-white px-6">
          <div className="max-w-4xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <WavesIcon className="w-6 h-6 text-yellow-400" />
              <span className="text-yellow-400 font-semibold tracking-wide">GOA TOURISM</span>
            </div>
            
            <h1 className="text-5xl text-center md:text-7xl font-bold mb-6 leading-tight">
              Goa Beach Budget Tour
              <span className="block text-3xl md:text-5xl mt-2 text-blue-300">
                Calangute • Anjuna • Dona Paula • Beach Paradise
              </span>
            </h1>

            <p className="text-xl text-center md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Experience the perfect blend of beaches, nightlife, and Portuguese heritage 
              with special tailor-made budget packages
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-yellow-400 transition transform hover:scale-105">
                Explore Goa
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-800 transition transform hover:scale-105">
                Book Now
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">Discover Beach Paradise</span>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= GOA CIRCUIT PACKAGE ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Goa Beach Circuit</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Anjuna - Calangute - Baga - 4N/5D
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="space-y-6">
                  {/* Day 1 */}
                  <div className="border-l-4 border-blue-500 pl-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="w-5 h-5 text-blue-600" />
                      <h3 className="text-xl font-bold">Day 1: Arrival & Beach Relaxation</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      On arrival at Dabolim Airport / Madgaon Railway Station, you will be transferred to Hotel. 
                      Check in and relax for a while. Lunch break. 
                      Spend a leisurely time on beaches near you, sampling some delicious Goan cuisine. 
                      Soak in the pulsating night-life on Goan Beaches. 
                      Dinner & Overnight at Hotel/Resort at Anjuna / Calangute / Goa.
                    </p>
                  </div>

                  {/* Day 2 */}
                  <div className="border-l-4 border-blue-500 pl-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="w-5 h-5 text-blue-600" />
                      <h3 className="text-xl font-bold">Day 2: North Goa Exploration</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      After a delicious breakfast, go on a full-Day Tour of North Goa. 
                      Go for a Dolphin sight-seeing Tour. Lunch en-route. 
                      Visit Fort Aguada, Calangute Beach, Anjuna Beach, Baga Beach and Coco Beach. 
                      Lunch en-route. Return in evening. 
                      Soak in the pulsating night-life on Goan Beaches. 
                      Overnight at Hotel/Resort at Anjuna / Calangute / Goa.
                    </p>
                  </div>

                  {/* Day 3 */}
                  <div className="border-l-4 border-blue-500 pl-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="w-5 h-5 text-blue-600" />
                      <h3 className="text-xl font-bold">Day 3: South Goa Sightseeing</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Savour a delectable breakfast and get ready to explore South Goa. 
                      Visit temples like Shri Manguesh, Shantadurga and Kavlem, at Priol. 
                      Explore churches of old Goa like Basilica of Bom Jesus and Se Cathedral. 
                      Lunch en-route. After lunch, visit Dona Paula Bay and Miramar Beach. 
                      Afterwards, spend some time at Panjim Market and indulge in some shopping. 
                      Soak in the pulsating night-life on Goan Beaches. 
                      Overnight at Hotel/Resort at Baga / Palolem / Goa.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="space-y-6">
                  {/* Day 4 */}
                  <div className="border-l-4 border-blue-500 pl-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="w-5 h-5 text-blue-600" />
                      <h3 className="text-xl font-bold">Day 4: Leisure Day</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Wake up late after late night revelry. After a hearty breakfast, 
                      hit the beach for some Water Sports activity on your own. 
                      Have your Lunch in any of the Shacks dotting the sea-shore. 
                      Return to your Hotel. Take an afternoon siesta. 
                      Evening free for your last minute shopping & another last visit to Beach. 
                      Overnight at Hotel/Resort at Baga / Palolem / Goa.
                    </p>
                  </div>

                  {/* Day 5 */}
                  <div className="border-l-4 border-blue-500 pl-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="w-5 h-5 text-blue-600" />
                      <h3 className="text-xl font-bold">Day 5: Departure</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      After breakfast, check-out & transfer to Dabolim Airport / Madgaon Railway Station 
                      for your return journey on your departure time. 
                      Tour ends...
                    </p>
                  </div>

                  <div className="bg-blue-100 rounded-xl p-6 mt-8">
                    <h4 className="font-bold text-blue-800 mb-3">Package Highlights</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                        <span className="text-gray-700">Dolphin Sight-seeing Tour</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                        <span className="text-gray-700">North & South Goa Exploration</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                        <span className="text-gray-700">Beach Activities & Water Sports</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                        <span className="text-gray-700">Pulsating Night-life</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CASINO & ENTERTAINMENT ================= */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Entertainment & Casino Options</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Optional activities with extra cost
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-4 mb-4">
                <ShipIcon className="w-12 h-12 text-purple-600" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Casino on Floating Ship</h3>
                  <p className="text-gray-600">Try your luck at the casino</p>
                </div>
              </div>
              <div className="bg-purple-100 rounded-xl p-6">
                <h4 className="font-bold text-purple-800 mb-3">What's Included</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600" />
                    <span className="text-gray-700">Entry permit included</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600" />
                    <span className="text-gray-700">Free-flowing drinks</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600" />
                    <span className="text-gray-700">Buffet dinner</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600" />
                    <span className="text-gray-700">Optional activity</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-4 mb-4">
                <Sun className="w-12 h-12 text-orange-600" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Beach Activities</h3>
                  <p className="text-gray-600">Water sports and beach fun</p>
                </div>
              </div>
              <div className="bg-orange-100 rounded-xl p-6">
                <h4 className="font-bold text-orange-800 mb-3">Available Activities</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-600" />
                    <span className="text-gray-700">Parasailing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-600" />
                    <span className="text-gray-700">Jet skiing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-600" />
                    <span className="text-gray-700">Banana boat rides</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-600" />
                    <span className="text-gray-700">Beach volleyball</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= GOA HIGHLIGHTS ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Goa Highlights</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key attractions and experiences in beach paradise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <WavesIcon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Beautiful Beaches</h3>
              <p className="text-sm text-gray-600">Anjuna, Calangute, Baga, Coco, Palolem</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <ShipIcon className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Dolphin Tours</h3>
              <p className="text-sm text-gray-600">Dolphin sightseeing in Arabian Sea</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <Building className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Historic Churches</h3>
              <p className="text-sm text-gray-600">Basilica of Bom Jesus, Se Cathedral</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <TreesIcon className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Ancient Temples</h3>
              <p className="text-sm text-gray-600">Shri Manguesh, Shantadurga, Kavlem</p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <CameraIcon className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Nightlife</h3>
              <p className="text-sm text-gray-600">Pulsating beach parties & clubs</p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <Mountain className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Fort Aguada</h3>
              <p className="text-sm text-gray-600">Historic fort with panoramic views</p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <ShoppingBag className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Panjim Market</h3>
              <p className="text-sm text-gray-600">Shopping & local handicrafts</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= IMPORTANT INFORMATION ================= */}
      <section className="py-12 bg-yellow-50 border-y border-yellow-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Beach Safety Tips</h3>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Avoid swimming during monsoon (June-September)</li>
                  <li>• Carry sunscreen and hats for beach activities</li>
                  <li>• Stay hydrated during water sports</li>
                  <li>• Respect local customs and dress codes</li>
                </ul>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Calendar className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Best Time to Visit</h3>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• November to February: Pleasant weather, fewer crowds</li>
                  <li>• March to May: Perfect beach weather, water sports</li>
                  <li>• September to October: Post-monsoon beauty</li>
                  <li>• December: Christmas and New Year celebrations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PACKAGE PRICING ================= */}
      <PackagePricing 
        title="Goa Tour Packages"
        subtitle="Choose your perfect beach paradise duration"
      />

    

    </main>
  )
}
