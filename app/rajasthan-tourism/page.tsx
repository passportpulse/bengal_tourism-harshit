"use client"

import Image from 'next/image'
import { MapPin, Calendar, Users, Star, Clock, Camera, Sun, Home, IndianRupee, Award, Compass, Utensils, Building, Trees, Ship, Sparkles, Train, ShoppingBag, Book, Mountain, Waves, Fish, Bird, Tent, Flame, PartyPopper, Heart, Sprout, Coffee, Leaf, TreePine, Stethoscope, HeartPulse, Shield, Globe, Phone, Mail, CheckCircle, AlertCircle, Activity, Brain, Bone, Eye, User, Bed, Wifi, Car, Utensils as UtensilsIcon, Wind, Building as Temple, Waves as WavesIcon, Compass as CompassIcon, Trees as TreesIcon, Camera as CameraIcon, Ship as ShipIcon, Snowflake } from 'lucide-react'
import PackagePricing from '@/components/PackagePricing'
import ContactCTA from '@/components/ContactCTA'

export default function RajasthanTourismPage() {
  return (
    <main className="text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/Rajasthan.jpeg"
            alt="Beautiful Rajasthan desert with camels and forts"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-orange-900/80 via-amber-800/60 to-orange-900/80"></div>
        </div>

        <div className="relative h-full flex items-center justify-center text-white px-6">
          <div className="max-w-4xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Building className="w-6 h-6 text-yellow-400" />
              <span className="text-yellow-400 font-semibold tracking-wide">RAJASTHAN TOURISM</span>
            </div>

            <h1 className="text-5xl text-center md:text-7xl font-bold mb-6 leading-tight">
              Land of Kings
              <span className="block text-3xl md:text-5xl mt-2 text-orange-300">
                Jaipur • Jodhpur • Udaipur • Bikaner • Mount Abu
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-center mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Experience the royal heritage with special tailor-made
              combination packages designed on request
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-yellow-400 transition transform hover:scale-105">
                Explore Rajasthan
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-orange-800 transition transform hover:scale-105">
                Book Now
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">Discover Land of Kings</span>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= JAIPUR MAIN PACKAGE ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Rajasthan Circuit Package</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Jodhpur - Udaipur - Jaipur - Mt. Abu
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 shadow-xl">
            <div className="">
              <div>
                <div className="space-y-6 grid md:grid-cols-2 gap-8">
                  {/* Day 1 */}
                  <div className="border-l-4 border-orange-500 pl-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="w-5 h-5 text-orange-600" />
                      <h3 className="text-xl font-bold">Day 1: Arrival in Jodhpur</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Our representative will be there to receive the Guest on your arrival at morning Jodhpur Station / Airport.
                      Drive over to Jodhpur. Check into Hotel.
                      Lunch & rest. Post lunch, visit local sightseeing of Umaid Bhawan and Meheran Garh Fort.
                      Return in evening. Free to explore local area.
                      Dinner & Overnight at Hotel/Resort/Haveli in Jodhpur.
                    </p>
                  </div>

                  {/* Day 2 */}
                  <div className="border-l-4 border-orange-500 pl-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="w-5 h-5 text-orange-600" />
                      <h3 className="text-xl font-bold">Day 2: Jaisalmer Exploration</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      After breakfast, proceed towards Jaisalmer.
                      On the way visit, Sonar Kella, Patwa Haveli and Gadisar lake.
                      After that go to Sam Desert. Lunch en-route.
                      Check into Desert Camp. Experience sunset point on a Desert Safari on Jeep.
                      Enjoy evening with live local Folk Dance & cultural show.
                      Dinner & Overnight at Tent in Jaisalmer.
                    </p>
                  </div>

                  {/* Day 3 */}
                  <div className="border-l-4 border-orange-500 pl-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="w-5 h-5 text-orange-600" />
                      <h3 className="text-xl font-bold">Day 3: Udaipur</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Early morning; you can enjoy a Camel Safari (your cost).
                      Back to tent for breakfast. Then check out & proceed towards Udaipur via Sonar Kella (if you have not visited on earlier day).
                      Lunch en route. Return in evening.
                      Free to explore local area.
                      Dinner & Overnight at Hotel/Resort/Haveli in Udaipur.
                    </p>
                  </div>

                  {/* Day 4 */}
                  <div className="border-l-4 border-orange-500 pl-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="w-5 h-5 text-orange-600" />
                      <h3 className="text-xl font-bold">Day 4: Mount Abu</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      After breakfast, visit local sightseeing at Udaipur like City Palace, Fate Sagar Lake, Pichola Lake & Rope way.
                      Return to Hotel in evening. Lunch en-route.
                      Evening free to explore local area.
                      Dinner & Overnight at Hotel/Resort/Haveli in Udaipur (or) you can proceed towards Mount Abu (extra cost).
                      Reach Mt. Abu & check-in at Hotel.
                      Evening free to explore local area.
                      Dinner & Overnight at Hotel/Resort in Mount Abu.
                    </p>
                  </div>

                  {/* Day 5 */}
                  <div className="border-l-4 border-orange-500 pl-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="w-5 h-5 text-orange-600" />
                      <h3 className="text-xl font-bold">Day 5: Towards Jaipur</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      After breakfast in the morning, check-out & visit Puskar via Chittor & Ajmer Sharif.
                      Lunch en-route. Night Stay at Puskar (or) proceed straight to Jaipur.
                      Check into Hotel.
                      Evening free to explore local area.
                      Dinner & Overnight at Hotel/Resort/Haveli in Jaipur.
                    </p>
                  </div>

                  {/* Day 6 */}
                  <div className="border-l-4 border-orange-500 pl-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="w-5 h-5 text-orange-600" />
                      <h3 className="text-xl font-bold">Day 6: Jaipur Local Sightseeing</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      After breakfast visit local sight-seeing like Amer Fort, City Palace, Jantar Mantar, Hawa Mahal, Pink City, etc.
                      Lunch en-route.
                      Evening free to explore local area.
                      Dinner & Overnight at Hotel/Resort/Haveli in Jaipur.
                    </p>
                  </div>

                  {/* Day 7 */}
                  <div className="border-l-4 border-orange-500 pl-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="w-5 h-5 text-orange-600" />
                      <h3 className="text-xl font-bold">Day 7: Departure</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Breakfast & check-out from Hotel.
                      Visit Johuree Bazaar if time permits.
                      Then leave to drop-off at Jaipur Airport / Station for your onward / return train journey flight to Kolkata as per your departure timing.
                      Tour ends...
                    </p>
                  </div>

                  <div className="bg-orange-100 rounded-xl p-6 mt-8">
                    <h4 className="font-bold text-orange-800 mb-3">Package Highlights</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-600" />
                        <span className="text-gray-700">Pink City - Jaipur</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-600" />
                        <span className="text-gray-700">City Palace & Jantar Mantar</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-600" />
                        <span className="text-gray-700">Desert Safari & Camel Rides</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-600" />
                        <span className="text-gray-700">Mount Abu Hill Station</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BIKANER ADD-ON ================= */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-6">


          <div className="flex justify-between  items-center mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Bikaner Add-on</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Mandwa - Sanbhar Salt Lake -
              </p>
            </div>
            <a href="/book-tour" className='bg-red-600 font-semibold shadow-md rounded-full text-white px-3 py-3'>
              Book Now For  2N/3D
            </a>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="">
              <div>
                <div className="space-y-6 grid md:grid-cols-2 gap-8">
                  {/* Day 1 */}
                  <div className="border-l-4 border-blue-500 pl-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="w-5 h-5 text-blue-600" />
                      <h3 className="text-xl font-bold">Day 1: Arrival in Bikaner</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Our representative will receive you at Jodhpur Airport / Bikaner Railway Station (or) on your arrival from Jaipur.
                      Check into Hotel. Lunch break.
                      Post lunch, visit Junagarh Fort & Laalgarh Palace.
                      Evening free to explore local area.
                      Dinner & Overnight at Hotel/Resort/Haveli in Bikaner.
                    </p>
                  </div>

                  {/* Day 2 */}
                  <div className="border-l-4 border-blue-500 pl-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="w-5 h-5 text-blue-600" />
                      <h3 className="text-xl font-bold">Day 2: Bikaner Sightseeing</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      After breakfast, proceed to explore Bikaner.
                      Visit Bhansagar Jain Temple, Shiv Bari & Camel Breeding centre.
                      Lunch en-route. Post Lunch, you may visit Deshnoke Temple (Rat Temple) where one can see 100s of rats manning to deity.
                      Evening free to explore local area.
                      Dinner & Overnight at Hotel/Resort/Haveli in Bikaner.
                    </p>
                  </div>

                  {/* Day 3 */}
                  <div className="border-l-4 border-blue-500 pl-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="w-5 h-5 text-blue-600" />
                      <h3 className="text-xl font-bold">Day 3: Mandwa</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                    
                      Breakfast & check-out from Hotel.
                      On route, you stop-over at Sanbhar Salt Lake (extra cost) and if time permits.
                      Lunch en-route.
                      Then drop-off at Jodhpur Airport / Nearest Railway Station for your onward / return Train journey (or) Flight as per your departure timing.
                      Tour ends...
                    </p>
                  </div>

                

                  <div className="bg-blue-100 rounded-xl p-6 mt-8">
                    <h4 className="font-bold text-blue-800 mb-3">Bikaner Highlights</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                        <span className="text-gray-700">Junagarh Fort & Laalgarh Palace</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                        <span className="text-gray-700">Bhansagar Jain Temple</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                        <span className="text-gray-700">Camel Breeding Centre</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= RANTHAMBORE ADD-ON ================= */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between  items-center mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Ranthambore Add-on</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Wildlife Safari - Tiger Reserve
              </p>
            </div>
            <a href="/book-tour" className='bg-red-600 font-semibold shadow-md rounded-full text-white px-3 py-3'>
              Book Now For 2N/3D
            </a>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="">
              <div>
                <div className="space-y-6 grid md:grid-cols-2 gap-8">
                  {/* Day 1 */}
                  <div className="border-l-4 border-green-500 pl-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="w-5 h-5 text-green-600" />
                      <h3 className="text-xl font-bold">Day 1: Arrival in Ranthambore</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Our representative will receive you at Sawai Madhopur Railway Station / Airport.
                      Transfer to hotel & check-in.
                      Lunch & rest. Post lunch, visit Ranthambore Fort.
                      Evening free to explore local area.
                      Dinner & Overnight at Hotel/Resort in Ranthambore.
                    </p>
                  </div>

                  {/* Day 2 */}
                  <div className="border-l-4 border-green-500 pl-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="w-5 h-5 text-green-600" />
                      <h3 className="text-xl font-bold">Day 2: Wildlife Safari</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Early morning jeep safari into Ranthambore National Park.
                      Return to hotel for breakfast.
                      Post lunch, afternoon jeep safari for tiger spotting.
                      Evening free for leisure.
                      Dinner & Overnight at Hotel/Resort in Ranthambore.
                    </p>
                  </div>

                  {/* Day 3 */}
                  <div className="border-l-4 border-green-500 pl-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="w-5 h-5 text-green-600" />
                      <h3 className="text-xl font-bold">Day 3: Departure</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Breakfast & check-out from Hotel.
                      Visit local markets if time permits.
                      Then drop-off at Sawai Madhopur Railway Station / Airport for your onward journey.
                      Tour ends...
                    </p>
                  </div>

                
                  <div className="bg-green-100 rounded-xl p-6 mt-8">
                    <h4 className="font-bold text-green-800 mb-3">Ranthambore Highlights</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-gray-700">Tiger Safari in National Park</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-gray-700">Ranthambore Fort Visit</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-gray-700">Wildlife Photography</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= RAJASTHAN HIGHLIGHTS ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Rajasthan Highlights</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key attractions and experiences in the land of kings
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <Building className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Royal Palaces</h3>
              <p className="text-sm text-gray-600">City Palace, Amer Fort, Hawa Mahal</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <Mountain className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Desert Safari</h3>
              <p className="text-sm text-gray-600">Camel rides, desert camps, sunset points</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <CameraIcon className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Heritage Sites</h3>
              <p className="text-sm text-gray-600">Jantar Mantar, Junagarh Fort, Laalgarh Palace</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <TreesIcon className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Sacred Temples</h3>
              <p className="text-sm text-gray-600">Deshnoke Temple, Bhansagar Jain Temple</p>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <Sun className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Hill Stations</h3>
              <p className="text-sm text-gray-600">Mount Abu, Udaipur lakes, Pichola Lake</p>
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
                <h3 className="font-bold text-gray-800 mb-2">Best Time to Visit</h3>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• October to March: Pleasant weather, clear skies</li>
                  <li>• November to February: Cool weather, perfect for sightseeing</li>
                  <li>• April to June: Hot weather, indoor attractions recommended</li>
                  <li>• Avoid monsoon (July-September) for outdoor activities</li>
                </ul>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Calendar className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Travel Tips</h3>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Book accommodations in advance during peak season (October-March)</li>
                  <li>• Carry light cotton clothing and sun protection</li>
                  <li>• Stay hydrated during desert safaris</li>
                  <li>• Respect local customs and traditions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>


      <PackagePricing
        title="Rajasthan Tour Packages"
        subtitle="Choose your perfect desert and palace adventure"
      />


      <ContactCTA />
    </main>
  )
}
