"use client"

import Image from 'next/image'
import { MapPin, Calendar, Users, Star, Clock, Camera, Sun, Home, IndianRupee, Award, Compass, Utensils, Building, Trees, Ship, Sparkles, Train, ShoppingBag, Book, Mountain, Waves, Fish, Bird, Tent, Flame, PartyPopper, Heart, Sprout, Coffee, Leaf, TreePine, Stethoscope, HeartPulse, Shield, Globe, Phone, Mail, CheckCircle, AlertCircle, Activity, Brain, Bone, Eye, User, Bed, Wifi, Car, Utensils as UtensilsIcon, Wind, Building as Temple, Waves as WavesIcon, Compass as CompassIcon } from 'lucide-react'
import ContactCTA from '@/components/ContactCTA'
import PackagePricing from '@/components/PackagePricing'

export default function OdishaTourismPage() {
  return (
    <main className="text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/Odhisha.jpeg"
            alt="Puri Golden Beach with Konark Sun Temple in background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-orange-900/80 via-amber-800/60 to-orange-900/80"></div>
        </div>

        <div className="relative h-full flex items-center justify-center text-white px-6">
          <div className="max-w-4xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Temple className="w-6 h-6 text-yellow-400" />
              <span className="text-yellow-400 font-semibold tracking-wide">ODISHA TOURISM</span>
            </div>
            
            <h1 className="text-5xl text-center md:text-7xl font-bold mb-6 leading-tight">
              Visit & Explore Odisha
              <span className="block text-3xl md:text-5xl mt-2 text-orange-300">
                Puri • Bhubaneswar • Konark • Chilika • Chandipur • Gopalpur
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-center mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Experience the golden beaches, ancient temples, and rich cultural heritage 
              of Odisha with special tailor-made combination packages
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-yellow-400 transition transform hover:scale-105">
                Explore Packages
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-orange-800 transition transform hover:scale-105">
                Book Now
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">Discover Ancient Heritage</span>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PURI PACKAGE ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Golden Beach Puri</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With Konark, Chilika & Bhubaneswar - 4N/5D
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 shadow-xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="space-y-6">
                  {/* Day 1 */}
                  <div className="border-l-4 border-orange-500 pl-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="w-5 h-5 text-orange-600" />
                      <h3 className="text-xl font-bold">Day 1: Arrival & Puri</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Our representative will receive you at Bhubaneswar Airport / Puri Station in the morning. 
                      Drive to Puri and check into Hotel/Resort. Visit Lord Jagannath Temple to offer prayer to the Lord of the Universe. 
                      Return to Hotel. Hit the Golden Beach for a bath. Laze around on the beach. Evening free to visit local market. 
                      Dinner & Overnight at Hotel/Resort at Puri.
                    </p>
                  </div>

                  {/* Day 2 */}
                  <div className="border-l-4 border-orange-500 pl-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="w-5 h-5 text-orange-600" />
                      <h3 className="text-xl font-bold">Day 2: Chilika Lake Excursion</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Wake up early to spend time on the Golden Beach. After breakfast, proceed towards Chilika around 11.00 am. 
                      Excursion to Satpada on Chilika Lake to spot Irrawady Dolphins at the confluence of Bay of Bengal & Asia's second largest brackish water lake. 
                      Every year from mid-December to mid-April, birds from Siberia & Australia migrate to this lake for breeding. 
                      Lunch at Chilika local hotels for famed Odiya cuisine. Return by early evening. 
                      Dinner & Overnight in Hotel/Resort at Puri.
                    </p>
                  </div>

                  {/* Day 3 */}
                  <div className="border-l-4 border-orange-500 pl-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="w-5 h-5 text-orange-600" />
                      <h3 className="text-xl font-bold">Day 3: Konark Sun Temple</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Early morning, watch sunrise over the sea. Offer prayers at Jagannath Dham if not done earlier. 
                      Back to hotel for breakfast. Proceed towards Konark to marvel at the Sun Temple, one of the World Heritage sites, 
                      built in the form of a Chariot - the culmination of Orissan Temple Architecture in 13th Century AD. 
                      The life-size figures depicting social, royal, cultural life on the Temple wall made Rabindranath Tagore express his feelings as 
                      'Language of Man is defeated by Language of Stone at Konark'. Also famed Kamasutra carvings. 
                      Lunch en-route. Visit 64 Yogini Temple at Heerapur, Pipli Appliqué work village & Raghurajpur Artisan's Village. 
                      Return in evening. Dinner & Overnight at Hotel/Resort at Puri.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="space-y-6">
                  {/* Day 4 */}
                  <div className="border-l-4 border-orange-500 pl-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="w-5 h-5 text-orange-600" />
                      <h3 className="text-xl font-bold">Day 4: Udaigiri & Khandagiri</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      After breakfast, visit Nandan Kanan zoo. The Caves of Udaigiri & Khandagiri dating back to 3rd Century BC 
                      are worth visiting for their sculptures depicting social life of people of that age. 
                      On the way visit Muketeshwar Temple, Dhauli Sanchi Stupa, Lingaraja Temple, Bramheswara Temple. 
                      Lunch en-route. Drop to Bhubaneshwar Airport / Railway Station or back to Puri. 
                      Dinner & Overnight at Hotel/Resort at Puri.
                    </p>
                  </div>

                  {/* Day 5 */}
                  <div className="border-l-4 border-orange-500 pl-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="w-5 h-5 text-orange-600" />
                      <h3 className="text-xl font-bold">Day 5: Departure</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      After breakfast, Check-out (10.00 am) of Hotel. On return journey, visit some local places of interest if you have missed earlier. 
                      Drop to Bhubaneswar Airport / Bhubaneswar / Puri Station in AC vehicle & drop at your point before 06.00pm for your forwarding journey. 
                      Tour ends.
                    </p>
                  </div>

                  <div className="bg-orange-100 rounded-xl p-6 mt-8">
                    <h4 className="font-bold text-orange-800 mb-3">Package Highlights</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-600" />
                        <span className="text-gray-700">Golden Beach experience</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-600" />
                        <span className="text-gray-700">Lord Jagannath Temple visit</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-600" />
                        <span className="text-gray-700">Chilika Lake Dolphin watching</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-600" />
                        <span className="text-gray-700">Konark Sun Temple - UNESCO World Heritage</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ADDITIONAL PACKAGES ================= */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Additional Odisha Packages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore more destinations with add-on packages
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* BHITARKANIKA */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-6 text-white">
                <Bird className="w-8 h-8 mb-2" />
                <h3 className="text-xl font-bold">BHITARKANIKA</h3>
                <p className="text-green-100">With Gahirmatha - 2N/3D</p>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  UNESCO World Heritage Site, home to largest population of salt water crocodiles in India. 
                  Experience lush green mangroves, migrating birds and turtles.
                </p>
                <div className="space-y-2 text-sm">
                  <p className="font-bold">Day 1: Arrival at Bhadrak</p>
                  <p className="font-bold">Day 2: Bhitarkanika National Park</p>
                  <p className="font-bold">Day 3: Departure</p>
                </div>
                <button className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition mt-4">
                  Book Now
                </button>
              </div>
            </div>

            {/* CHANDIPUR */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-6 text-white">
                <WavesIcon className="w-8 h-8 mb-2" />
                <h3 className="text-xl font-bold">CHANDIPUR</h3>
                <p className="text-blue-100">Sea Beach - 2N/3D</p>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  Enjoy serene sea beach with early morning sunrise views and peaceful environment 
                  perfect for relaxation and beach activities.
                </p>
                <div className="space-y-2 text-sm">
                  <p className="font-bold">Day 1: Arrival at Chandipur Sea Beach</p>
                  <p className="font-bold">Day 2: Nilagiri & Panchelingeswar visit</p>
                  <p className="font-bold">Day 3: Departure</p>
                </div>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition mt-4">
                  Book Now
                </button>
              </div>
            </div>

            {/* SIMLIPAL */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-6 text-white">
                <Trees className="w-8 h-8 mb-2" />
                <h3 className="text-xl font-bold">SIMLIPAL</h3>
                <p className="text-green-100">Forest - 2N/3D</p>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  Experience thrilling jungle safari in Simlipal National Park with 
                  beautiful waterfalls and rich wildlife.
                </p>
                <div className="space-y-2 text-sm">
                  <p className="font-bold">Day 1: Arrival at Simlipal</p>
                  <p className="font-bold">Day 2: Jungle Safari & Waterfalls</p>
                  <p className="font-bold">Day 3: Departure</p>
                </div>
                <button className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition mt-4">
                  Book Now
                </button>
              </div>
            </div>

            {/* GOPALPUR */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-6 text-white">
                <WavesIcon className="w-8 h-8 mb-2" />
                <h3 className="text-xl font-bold">GOPALPUR</h3>
                <p className="text-orange-100">On-Sea Beach - 2N/3D</p>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  Beautiful sea beach destination with Taptapani hot springs, 
                  Dhabaleshwar temple and lighthouse visits.
                </p>
                <div className="space-y-2 text-sm">
                  <p className="font-bold">Day 1: Arrival at Gopalpur</p>
                  <p className="font-bold">Day 2: Local Sightseeing</p>
                  <p className="font-bold">Day 3: Departure</p>
                </div>
                <button className="w-full bg-orange-600 text-white py-2 rounded-lg font-semibold hover:bg-orange-700 transition mt-4">
                  Book Now
                </button>
              </div>
            </div>

            {/* DARINGBADI */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 text-white">
                <Mountain className="w-8 h-8 mb-2" />
                <h3 className="text-xl font-bold">DARINGBADI</h3>
                <p className="text-purple-100">Kashmir of the East - 2N/3D</p>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  Hill station with coffee gardens, pine jungles, waterfalls and 
                  stunning sunrise views from viewpoints.
                </p>
                <div className="space-y-2 text-sm">
                  <p className="font-bold">Day 1: Arrival at Daringbadi</p>
                  <p className="font-bold">Day 2: Hill View & Nature Park</p>
                  <p className="font-bold">Day 3: Sunrise & Departure</p>
                </div>
                <button className="w-full bg-purple-600 text-white py-2 rounded-lg font-semibold hover:bg-purple-700 transition mt-4">
                  Book Now
                </button>
              </div>
            </div>

            {/* SATKOSIA */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="bg-gradient-to-r from-red-500 to-orange-500 p-6 text-white">
                <Trees className="w-8 h-8 mb-2" />
                <h3 className="text-xl font-bold">SATKOSIA TIGER RESERVE</h3>
                <p className="text-red-100">Playland of the Tigers - 2N/3D</p>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  Thrilling tiger reserve with jungle safari, trekking, night safari 
                  and boat ride on Mahanadi river.
                </p>
                <div className="space-y-2 text-sm">
                  <p className="font-bold">Day 1: Arrival at Satkosia</p>
                  <p className="font-bold">Day 2: Jungle Safari & Trek</p>
                  <p className="font-bold">Day 3: Departure</p>
                </div>
                <button className="w-full bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition mt-4">
                  Book Now
                </button>
              </div>
            </div>

            {/* CHANDRABHAGA */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-6 text-white">
                <WavesIcon className="w-8 h-8 mb-2" />
                <h3 className="text-xl font-bold">CHANDRABHAGA</h3>
                <p className="text-cyan-100">Konark Water Sports - 2N/3D</p>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  Beach destination near Konark with various water sports activities 
                  and Swiss tent accommodation options.
                </p>
                <div className="space-y-2 text-sm">
                  <p className="font-bold">Day 1: Arrival at Chandrabhaga</p>
                  <p className="font-bold">Day 2: Water Sports Activities</p>
                  <p className="font-bold">Day 3: Departure</p>
                </div>
                <button className="w-full bg-cyan-600 text-white py-2 rounded-lg font-semibold hover:bg-cyan-700 transition mt-4">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ODISHA HIGHLIGHTS ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Odisha Highlights</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key attractions and experiences in the land of temples
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <Temple className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Ancient Temples</h3>
              <p className="text-sm text-gray-600">Lord Jagannath Temple, Konark Sun Temple, Lingaraja Temple</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <WavesIcon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Golden Beaches</h3>
              <p className="text-sm text-gray-600">Puri Golden Beach, Chandipur, Gopalpur, Chandrabhaga</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <Bird className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Wildlife Sanctuaries</h3>
              <p className="text-sm text-gray-600">Chilika Lake, Bhitarkanika, Simlipal, Satkosia Tiger Reserve</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <Mountain className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Hill Stations</h3>
              <p className="text-sm text-gray-600">Daringbadi - Kashmir of the East, with coffee gardens</p>
            </div>
          </div>
        </div>
      </section>

   
     <PackagePricing 
        title="Odisha Tour Packages"
        subtitle="Choose your perfect cultural and coastal adventure"
      />

       
    <ContactCTA />
    </main>
  )
}
