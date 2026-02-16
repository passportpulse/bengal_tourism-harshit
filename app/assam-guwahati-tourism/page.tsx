"use client"

import Image from 'next/image'
import { MapPin, Calendar, Users, Star, Clock, Camera, Sun, Home, IndianRupee, Award, Compass, Utensils, Building, Trees, Ship, Sparkles, Train, ShoppingBag, Book, Mountain, Waves, Fish, Bird, Tent, Flame, PartyPopper, Heart, Sprout, Coffee, Leaf, TreePine, Stethoscope, HeartPulse, Shield, Globe, Phone, Mail, CheckCircle, AlertCircle, Activity, Brain, Bone, Eye, User, Bed, Wifi, Car, Utensils as UtensilsIcon, Wind, Building as Temple, Waves as WavesIcon, Compass as CompassIcon, Trees as TreesIcon, Camera as CameraIcon, Ship as ShipIcon, Snowflake } from 'lucide-react'
import PackagePricing from '@/components/PackagePricing'
import ContactCTA from '@/components/ContactCTA'

export default function AssamGuwahatiTourismPage() {
  return (
    <main className="text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/Assam.jpeg"
            alt="Beautiful Assam tea gardens with Brahmaputra river and mountains"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-green-900/80 via-emerald-800/60 to-green-900/80"></div>
        </div>

        <div className="relative h-full flex items-center justify-center text-white px-6">
          <div className="max-w-4xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Trees className="w-6 h-6 text-yellow-400" />
              <span className="text-yellow-400 font-semibold tracking-wide">ASSAM TOURISM</span>
            </div>
            
            <h1 className="text-5xl text-center md:text-7xl font-bold mb-6 leading-tight">
              Land of Tea Gardens
              <span className="block text-3xl md:text-5xl mt-2 text-green-300">
                Guwahati • Kaziranga • Majuli • Sivasagar • Tezpur
              </span>
            </h1>

            <p className="text-center text-xl text-center text-green-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Discover the pristine beauty of Assam - from world-famous tea gardens to one-horned rhinos, 
              from ancient temples to the mighty Brahmaputra river.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6">
              <button className="bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-green-500 transition transform hover:scale-105">
                Explore Wildlife
              </button>

              <button className="border-2 border-green-400 text-green-400 px-8 py-4 rounded-full font-bold text-lg hover:bg-green-400 hover:text-green-900 transition transform hover:scale-105">
                Tea Garden Tour
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= QUICK FACTS ================= */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Trees className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">800+ Tea Gardens</h3>
              <p className="text-gray-600 text-sm">World's finest tea</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Bird className="w-10 h-10 text-emerald-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">One-Horned Rhino</h3>
              <p className="text-gray-600 text-sm">Kaziranga National Park</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Waves className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Brahmaputra River</h3>
              <p className="text-gray-600 text-sm">Mighty river lifeline</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Temple className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Ancient Temples</h3>
              <p className="text-gray-600 text-sm">Kamakhya & more</p>
            </div>
          </div>
        </div>
      </section>

     {/* ================= BUDGET TOUR PACKAGE ================= */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Shillong, Guwahati, Kaziranga, Cherrapunjee, Kamakhya Temple</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Budget tour package with Bengal Tourism
            </p>
            <div className="mt-4 inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full">
              <Sparkles className="w-5 h-5" />
              <span className="font-semibold">Special Tailor made Combination Package</span>
            </div>
            <p className="text-lg text-gray-700 mt-4">
              Number of Days & Cost can be designed on Request
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Package Header */}
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-8">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-3xl font-bold mb-2">North-East Budget Tour</h3>
                  <p className="text-green-100">6 Days / 5 Nights Complete Package</p>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-bold mb-2">Budget Friendly</div>
                  <div className="text-green-100">Customizable Cost</div>
                </div>
              </div>
            </div>

            {/* Detailed Itinerary */}
            <div className="p-8 space-y-8">
              
              {/* Day 1 */}
              <div className="border-l-4 border-green-500 pl-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-green-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900">Arrival at Guwahati and Transfer to Shillong</h4>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Meet your driver on arrival at Guwahati Railway station or Airport and start your journey towards Shillong which is also known as "Scotland of East". 
                  On the way if time permits you can enjoy at Umium lake which is situated in a pristine surrounding. In the lake you can enjoy boating (your cost). 
                  Check-in to hotel upon arrival in Shillong. Rest of the day free to explore the market on your own. Overnight stay at Hotel / Shillong.
                </p>
              </div>

              {/* Day 2 */}
              <div className="border-l-4 border-blue-500 pl-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900">Day tour to Cherrapunjee</h4>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  After breakfast, start your day tour of Cherapunjee which is famous as the wettest place with highest rainfall on earth. 
                  You will be visiting Mawkadok View Point, Wakabha Falls, Noh Kali Kai Falls, Eco Park, Mawsami Cave and the famous 
                  Noh Sngithiang Falls (Seven Sister Falls) which is one of the highest waterfall in India. 
                  Evening return back to Shillong. Overnight stay at Hotel / Shillong.
                </p>
              </div>

              {/* Day 3 */}
              <div className="border-l-4 border-purple-500 pl-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-purple-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900">Visit Mawllynnong Village</h4>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Early morning we will visit the cleanest village in India that is nearly 28 kms from Shillong. 
                  Just close to the scenic village, there are interesting sights like the Living Roots Bridge and a beautiful sight of boulders 
                  balancing on another rock. In the afternoon we will return back to Shillong by evening. Overnight stay at Hotel / Shillong.
                </p>
              </div>

              {/* ADD ON Day */}
              <div className="border-l-4 border-orange-500 pl-6 bg-orange-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-orange-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                    +
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900">ADD ON (Extra 1 Day): Kaziranga Forest</h4>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Get up early for elephant safari into the forest. Our representative will take you to the elephant riding point by jeeps. 
                  Here we will be carried through the tall grass. Meanwhile the morning mists will slowly lift leading to an experience that one cannot forget easily. 
                  The elephant safari is the best mean for wildlife viewing as the wild animals are not afraid of the elephants and it is possible to observe them from very closely.
                  Return to the resort for breakfast. After breakfast, we will go for jeep safari in the national park for wildlife viewing in the central zone. 
                  Later return to the resort for unwinding yourself and having lunch. After lunch we will go on our second jeep safari of the day, this time we will visit the Western zone of the national park. 
                  One can also spend some time at the Donga view point, situated in western zone. Overnight stay at Resort / Kaziranga.
                </p>
              </div>

              {/* Day 4 */}
              <div className="border-l-4 border-teal-500 pl-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-teal-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                    4
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900">Shillong Local sightseeing</h4>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  After breakfast we will go for exploring Shillong visiting Shillong Peak, Elephant Falls, Lady Hyderi Park, Golf Course, 
                  Cathedral Church, State Museum, Don Bosco Museum and Ward's Lake where you can enjoy boating on direct payment. 
                  In the evening you are free to explore the market of Shillong on your own. Overnight at Hotel / Shillong.
                </p>
              </div>

              {/* Day 5 */}
              <div className="border-l-4 border-indigo-500 pl-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-indigo-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                    5
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900">Transfer to Guwahati</h4>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  After breakfast we will start our journey towards Guwahati, which is also known as "Gateway of North-East". 
                  Upon arrival check-in to hotel and later go for local sightseeing visiting Kalakshetra, Balaji Temple, Vasist Temple 
                  and Umanad, which is a temple on an island on the might Brahmaputra. In the evening we will be going for a River cruise (your cost) or Kamakhya Temple. 
                  Overnight at Hotel / Guwahati.
                </p>
              </div>

              {/* Day 6 */}
              <div className="border-l-4 border-red-500 pl-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-red-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                    6
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900">Visit Kamakhya Temple</h4>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  After breakfast, we will be visiting Kamakhya Temple which is one of the important and famous Shakti Pith Temple in India 
                  before boarding train or flight for your return journey. Tour Ends...
                </p>
              </div>

            </div>


          </div>
        </div>
      </section>
      {/* ================= WILDLIFE SANCTUARIES ================= */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Wildlife Sanctuaries</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the rich biodiversity and wildlife sanctuaries of Assam
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center">
                <Bird className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Kaziranga National Park</h3>
                <p className="text-gray-700 mb-4">Home to two-thirds of world's one-horned rhinoceros population</p>
                <div className="flex items-center gap-2 text-green-600">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Golaghat, Nagaon</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                <Trees className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Manas National Park</h3>
                <p className="text-gray-700 mb-4">Project Tiger reserve with elephants, wild buffaloes and golden langur</p>
                <div className="flex items-center gap-2 text-orange-600">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Baksa, Chirang</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                <Bird className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Pobitora Wildlife Sanctuary</h3>
                <p className="text-gray-700 mb-4">Highest density of one-horned rhinos in the world</p>
                <div className="flex items-center gap-2 text-blue-600">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Morigaon district</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TEA GARDENS ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Famous Tea Gardens</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visit the world-renowned tea gardens of Assam and experience tea plantation life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 text-center hover:shadow-xl transition group">
              <div className="bg-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition">
                <Leaf className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Jorhat Tea Gardens</h3>
              <p className="text-gray-600 text-sm mb-3">Tea capital of India</p>
              <div className="text-green-600 font-semibold">Must Visit</div>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-green-100 rounded-2xl p-6 text-center hover:shadow-xl transition group">
              <div className="bg-emerald-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition">
                <Coffee className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Dibrugarh Tea Estates</h3>
              <p className="text-gray-600 text-sm mb-3">Premium quality tea</p>
              <div className="text-emerald-600 font-semibold">Famous</div>
            </div>

            <div className="bg-gradient-to-br from-lime-50 to-green-50 rounded-2xl p-6 text-center hover:shadow-xl transition group">
              <div className="bg-lime-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition">
                <Sprout className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Assam Tea Gardens</h3>
              <p className="text-gray-600 text-sm mb-3">Historic plantations</p>
              <div className="text-lime-600 font-semibold">Heritage</div>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl p-6 text-center hover:shadow-xl transition group">
              <div className="bg-teal-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition">
                <TreePine className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Tinsukia Gardens</h3>
              <p className="text-gray-600 text-sm mb-3">Organic tea production</p>
              <div className="text-teal-600 font-semibold">Organic</div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CULTURAL HERITAGE ================= */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Cultural Heritage</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the rich cultural tapestry and ancient traditions of Assam
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Temple className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">Ancient Temples</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600" />
                  <span>Kamakhya Temple - Guwahati</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600" />
                  <span>Umananda Temple - Peacock Island</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600" />
                  <span>Navagraha Temple - Guwahati</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600" />
                  <span>Sukreswar Temple - Guwahati</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <PartyPopper className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">Festivals</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-pink-600" />
                  <span>Bihu - Harvest Festival</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-pink-600" />
                  <span>Ambubachi Mela - Kamakhya</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-pink-600" />
                  <span>Ali Ai Ligang - Tribal Festival</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-pink-600" />
                  <span>Me-Dum-Me-Phi - Ahom Festival</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Book className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">Arts & Crafts</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-indigo-600" />
                  <span>Muga Silk - Golden Silk</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-indigo-600" />
                  <span>Assam Handloom</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-indigo-600" />
                  <span>Brass & Bell Metal</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-indigo-600" />
                  <span>Terra Cotta Crafts</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ADVENTURE ACTIVITIES ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Adventure Activities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Thrilling adventures and exciting experiences in Assam
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transition border-2 border-green-200">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Wildlife Safari</h3>
              <p className="text-gray-600 text-sm mb-3">Jeep & elephant safaris</p>
              <p className="text-green-600 font-semibold">Kaziranga, Manas</p>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transition border-2 border-blue-200">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Waves className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">River Cruises</h3>
              <p className="text-gray-600 text-sm mb-3">Brahmaputra river cruises</p>
              <p className="text-blue-600 font-semibold">Guwahati, Dibrugarh</p>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transition border-2 border-purple-200">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mountain className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Trekking</h3>
              <p className="text-gray-600 text-sm mb-3">Hills & forest trails</p>
              <p className="text-purple-600 font-semibold">Hills of Assam</p>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transition border-2 border-orange-200">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bird className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Bird Watching</h3>
              <p className="text-gray-600 text-sm mb-3">Rare migratory birds</p>
              <p className="text-orange-600 font-semibold">Deepor Beel, Pobitora</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BEST TIME TO VISIT ================= */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Best Time to Visit</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Plan your Assam trip according to the best seasons
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-2xl p-8 text-center">
              <Sun className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Winter (Oct - Feb)</h3>
              <p className="text-green-100 mb-4">Pleasant weather, perfect for sightseeing</p>
              <ul className="text-left space-y-2 text-green-100">
                <li>• Wildlife safaris</li>
                <li>• Tea garden visits</li>
                <li>• Temple tours</li>
                <li>• River cruises</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-yellow-500 to-orange-600 text-white rounded-2xl p-8 text-center">
              <Sun className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Spring (Mar - Apr)</h3>
              <p className="text-yellow-100 mb-4">Festive season, blooming flowers</p>
              <ul className="text-left space-y-2 text-yellow-100">
                <li>• Rongali Bihu</li>
                <li>• Nature walks</li>
                <li>• Photography</li>
                <li>• Cultural events</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-2xl p-8 text-center">
              <Sun className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Monsoon (May - Sep)</h3>
              <p className="text-blue-100 mb-4">Lush green landscapes, fewer tourists</p>
              <ul className="text-left space-y-2 text-blue-100">
                <li>• Tea plantation tours</li>
                <li>• Waterfalls visit</li>
                <li>• Indoor activities</li>
                <li>• Budget travel</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

   

      {/* ================= TRAVEL TIPS ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Travel Tips</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Essential information for your Assam journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
                <h3 className="text-2xl font-bold text-green-700">What to Pack</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• Light cotton clothes for summer</li>
                <li>• Warm woolens for winter</li>
                <li>• Raincoat/umbrella for monsoon</li>
                <li>• Comfortable walking shoes</li>
                <li>• Camera & binoculars</li>
                <li>• Insect repellent</li>
              </ul>
            </div>

            <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="w-8 h-8 text-blue-600" />
                <h3 className="text-2xl font-bold text-blue-700">Important Notes</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• Carry ID proof for national parks</li>
                <li>• Book safaris in advance</li>
                <li>• Respect local customs</li>
                <li>• Try local Assamese cuisine</li>
                <li>• Buy authentic Assam tea</li>
                <li>• Learn basic Assamese phrases</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PACKAGE PRICING ================= */}
      <PackagePricing 
        title="Assam & Guwahati Tour Packages"
        subtitle="Choose your perfect Northeast India adventure duration"
      />
      <ContactCTA />
      

    </main>
  )
}
