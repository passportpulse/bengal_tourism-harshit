"use client"

import Image from 'next/image'
import { MapPin, Calendar, Users, Star, Clock, Camera, Sun, Home, DollarSign, Award, Compass, Utensils, Building, Trees, Ship, Sparkles, Train, ShoppingBag, Book, Mountain, Waves, Fish, Bird, Tent, Flame, PartyPopper, Heart, Sprout, Coffee, Leaf, TreePine, Stethoscope, HeartPulse, Shield, Globe, Phone, Mail, CheckCircle, AlertCircle, Activity, Brain, Bone, Eye, User, Bed, Wifi, Car, Utensils as UtensilsIcon, Wind, Building as Temple, Waves as WavesIcon, Compass as CompassIcon, Snowflake, Trees as TreesIcon } from 'lucide-react'

export default function SikkimTourismPage() {
  return (
    <main className="text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1576096424-5f6e4e1a5?w=1920&h=1080&fit=crop"
            alt="Snowy mountains of Sikkim with Buddhist monastery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-indigo-800/60 to-blue-900/80"></div>
        </div>

        <div className="relative h-full flex items-center justify-center text-white px-6">
          <div className="max-w-4xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Mountain className="w-6 h-6 text-yellow-400" />
              <span className="text-yellow-400 font-semibold tracking-wide">SIKKIM TOURISM</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Visit & Explore Sikkim
              <span className="block text-3xl md:text-5xl mt-2 text-blue-300">
                Gangtok • Nathu La • Lachen • Lachung • Pelling
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Experience the land of monasteries, mystic rituals, and festivals 
              at an altitude of 1670 meters with special tailor-made packages
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-yellow-400 transition transform hover:scale-105">
                Explore Sikkim
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-800 transition transform hover:scale-105">
                Book Now
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">Discover Himalayan Paradise</span>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SIKKIM & GANGTOK MAIN PACKAGE ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Sikkim & Gangtok</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With Changu Lake – Nathu La Pass – Baba Mandir - 5N/6D
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="space-y-6">
                  {/* Day 1 */}
                  <div className="border-l-4 border-blue-500 pl-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="w-5 h-5 text-blue-600" />
                      <h3 className="text-xl font-bold">Day 1: Arrival in Gangtok</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Our representative will receive you at New Jalpaiguri Railway Station (NJP) / Pakyong Airport / Bagdogra Airport. 
                      Transfer to Gangtok, the capital of Sikkim at 1670 meters / 5480 feet height. 
                      Nearly 135 kilometers, 4½ - 5 hours drive. Check into hotel. 
                      Evening free to roam around M G Road (Mall) or local Shopping center. 
                      Dinner & Overnight stay at Hotel in Gangtok.
                    </p>
                  </div>

                  {/* Day 2 */}
                  <div className="border-l-4 border-blue-500 pl-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="w-5 h-5 text-blue-600" />
                      <h3 className="text-xl font-bold">Day 2: Gangtok City Tour</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      After breakfast, visit Ranka Monastery - one of the oldest and most beautiful monasteries of India. 
                      Visit Ban Jhagri Falls, Shanti View Point, Ban Jhagri Falls, Institute of Tibetology, 
                      Ganesh Tok, Cottage Industry, Flower Show, White Hall, Tashi View Point, Hanuman Tok. 
                      Dinner & Overnight at Hotel in Gangtok.
                    </p>
                  </div>

                  {/* Day 3 */}
                  <div className="border-l-4 border-blue-500 pl-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="w-5 h-5 text-blue-600" />
                      <h3 className="text-xl font-bold">Day 3: Gangtok Sightseeing</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      After breakfast, experience full day sightseeing of places like Char Dham, Samdruptse, 
                      at 135 ft high is the tallest statue of "Guru Padmasambhava", also known as Guru Rinpoche & 
                      Siddhesvar Dham, DuDrul Chorten, Temi Tea Garden, Namchi Village. 
                      Lunch en-route. Return to Hotel by evening. Night stay in Hotel/Resort at Gangtok.
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
                      <h3 className="text-xl font-bold">Day 4: Changu Lake & Nathu La Pass</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      After early breakfast, this is nearly 50 km drive and takes nearly 2 hours. 
                      Visit to Tsomgo / Changu Lake and Baba Mandir to experience cool, serene water and picturesque beauty. 
                      Tsomgo lake is one of the holy lakes of the region. 
                      A temple of Lord Shiva is built on the lakeside. 
                      Primula flowers and other alpine plantation provide immaculate beauty to this place. 
                      Till April it is full of snow and lay frozen. 
                      <strong>Nathu La Pass permits have to be arranged the previous night when Voters ID card will be asked for.</strong> 
                      Nathu La Pass (Monday closed) - once booked, amount is not refunded even if trip gets cancelled. 
                      (For Nathula Pass, extra US $100 / Rs. 5,000/- per vehicle with 4-6 PAX has to be paid for permit & to be paid at spot). 
                      Lunch en-route. Without permit, you can only visit Changu Lake & Baba Mandir. 
                      Evening free to stroll around M G Road or Local Market. 
                      Dinner & Overnight stay in Hotel/Resort at Gangtok.
                    </p>
                  </div>

                  {/* Day 5 */}
                  <div className="border-l-4 border-blue-500 pl-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="w-5 h-5 text-blue-600" />
                      <h3 className="text-xl font-bold">Day 5: Rumtek Monastery</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      After breakfast, proceed to visit Rumtek Monastery, Do Drul Chorten, Saramsa Garden, 
                      Enchey Monastery - a must visit when in Sikkim. 
                      Lunch en-route. Return in evening. 
                      Dinner & Overnight at Hotel/Resort in Gangtok.
                    </p>
                  </div>

                  {/* Day 6 */}
                  <div className="border-l-4 border-blue-500 pl-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="w-5 h-5 text-blue-600" />
                      <h3 className="text-xl font-bold">Day 6: Departure</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      After breakfast & Check-out. Lunch en-route. 
                      Drive to Pakyong Airport in Sikkim / Bagdogra Airport in Bengal (IXB) / 
                      New Jalpaiguri Railway Station (NJP), a 3-4 hrs drive in AC vehicle for forwarding journey. 
                      Tour ends...
                    </p>
                  </div>

                  <div className="bg-blue-100 rounded-xl p-6 mt-8">
                    <h4 className="font-bold text-blue-800 mb-3">Package Highlights</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                        <span className="text-gray-700">Gangtok - Capital at 1670 meters</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                        <span className="text-gray-700">Tsomgo Lake & Baba Mandir</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                        <span className="text-gray-700">Nathu La Pass (Permit required)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                        <span className="text-gray-700">Rumtek Monastery visit</span>
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
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Additional Sikkim Packages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore more destinations with add-on packages
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* WEST SIKKIM */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-6 text-white">
                <Mountain className="w-8 h-8 mb-2" />
                <h3 className="text-xl font-bold">WEST SIKKIM</h3>
                <p className="text-green-100">Pelling - Ravangla - 2N/3D</p>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  Visit Pemayangsha Monastery, Sangachoely, Kanchenjongha Falls, 
                  Singshore Bridge, Pelling Skywalk and more.
                </p>
                <div className="space-y-2 text-sm">
                  <p className="font-bold">Day 1: Transfer to Pelling/Ravangla</p>
                  <p className="font-bold">Day 2: Pelling sightseeing</p>
                  <p className="font-bold">Day 3: Departure</p>
                </div>
                <button className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition mt-4">
                  Book Now
                </button>
              </div>
            </div>

            {/* NORTH SIKKIM */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-6 text-white">
                <Snowflake className="w-8 h-8 mb-2" />
                <h3 className="text-xl font-bold">NORTH SIKKIM</h3>
                <p className="text-blue-100">Lachen - Lachung - 2N/3D</p>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  Experience Gurudongmar Lake at 11,800 feet, Yumthang Valley, 
                  and the cold desert till Tibet border.
                </p>
                <div className="space-y-2 text-sm">
                  <p className="font-bold">Day 1: Transfer to Lachen (135 km drive)</p>
                  <p className="font-bold">Day 2: Gurudongmar Lake & transfer to Lachung</p>
                  <p className="font-bold">Day 3: Yumthang & transfer to Gangtok</p>
                </div>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition mt-4">
                  Book Now
                </button>
              </div>
            </div>

            {/* SILK ROUTE */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 text-white">
                <TreesIcon className="w-8 h-8 mb-2" />
                <h3 className="text-xl font-bold">SILK ROUTE</h3>
                <p className="text-purple-100">Sillery - Zuluk - Aritar - Reshikhola - 4N/5D</p>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  Journey through the famed Silk Route Trail with Thambi View Point, 
                  Lunghthung, Nathang Valley, and Kupup.
                </p>
                <div className="space-y-2 text-sm">
                  <p className="font-bold">Day 1: Transfer to Sillery Gaon</p>
                  <p className="font-bold">Day 2: Proceed to Zuluk via Rongli</p>
                  <p className="font-bold">Day 3: Silk Route Trail & Zuluk sightseeing</p>
                  <p className="font-bold">Day 4: Aritar/Reshikhola</p>
                  <p className="font-bold">Day 5: Departure via NJP/Bagdogra</p>
                </div>
                <button className="w-full bg-purple-600 text-white py-2 rounded-lg font-semibold hover:bg-purple-700 transition mt-4">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SIKKIM HIGHLIGHTS ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Sikkim Highlights</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key attractions and experiences in the land of monasteries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <Building className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Ancient Monasteries</h3>
              <p className="text-sm text-gray-600">Rumtek, Ranka, Pemayangtse, Enchey Monasteries</p>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <WavesIcon className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Sacred Lakes</h3>
              <p className="text-sm text-gray-600">Tsomgo Lake, Gurudongmar Lake, Lampokhri Lake</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <Mountain className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Mountain Passes</h3>
              <p className="text-sm text-gray-600">Nathu La Pass, Jeelep-La Pass, Zero Point Yumesamdong</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <TreesIcon className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Silk Route</h3>
              <p className="text-sm text-gray-600">Historic trade route with Zuluk, Aritar, Reshikhola</p>
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
                <h3 className="font-bold text-gray-800 mb-2">Nathu La Pass Information</h3>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Permits must be arranged the previous night</li>
                  <li>• Voters ID card required</li>
                  <li>• Monday closed</li>
                  <li>• Extra US $100 / Rs. 5,000/- per vehicle (4-6 PAX)</li>
                  <li>• Amount non-refundable once booked</li>
                </ul>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Snowflake className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Best Time to Visit</h3>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• March to June: Clear views, blooming flowers</li>
                  <li>• October to December: Snow-covered landscapes</li>
                  <li>• December to April: Snow at higher altitudes</li>
                  <li>• Avoid monsoon (July-September) for clear views</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BOOKING CTA ================= */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Book Your Sikkim Journey</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Special tailor-made combination packages designed on request
            </p>
          </div>

          <div className="bg-white text-blue-800 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Explore Sikkim?</h3>
            <p className="text-gray-700 mb-6">
              Contact us for personalized Sikkim tourism packages with flexible duration and custom itineraries
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition">
                <Phone className="w-4 h-4 inline mr-2" />
                Call: +91 98765 43210
              </button>
              <button className="bg-indigo-600 text-white px-8 py-3 rounded-full font-bold hover:bg-indigo-700 transition">
                <Mail className="w-4 h-4 inline mr-2" />
                Email: sikkim@bengaltourism.com
              </button>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              For more pictures, offers & reviews, visit our Facebook Page
            </p>
            <div className="mt-6 bg-blue-100 p-4 rounded-lg">
              <p className="text-blue-800 font-bold text-center mb-2">
                🏔️ Discover Himalayan Paradise
              </p>
              <p className="text-sm text-blue-700 text-center">
                Experience the mystical monasteries, sacred lakes, and mountain passes of Sikkim
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
