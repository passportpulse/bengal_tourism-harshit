"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, Calendar, Users, Star, Clock, Check, Heart, Navigation, Camera, Utensils, Trees, Fish, Waves, Mountain, Building, Tent, Shield, Sun } from "lucide-react";

const highlights = [
  {
    icon: Waves,
    title: "White Water Rafting",
    description: "From calm waters to roaring rapids for all skill levels"
  },
  {
    icon: Tent,
    title: "Camping Adventures",
    description: "Modern tents with hygienic facilities in scenic locations"
  },
  {
    icon: Mountain,
    title: "Himalayan Rivers",
    description: "Teesta, Rangeet, Ganga, and Alaknanda river experiences"
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Well-trained guides and quality equipment for safe adventures"
  }
];

const raftingLocations = [
  {
    name: "Teesta River",
    location: "Darjeeling, Kalimpong",
    difficulty: "All Levels",
    duration: "1.5 - 3 hours",
    bestFor: "Beginners to Experts"
  },
  {
    name: "Rangeet River",
    location: "Chitrey",
    difficulty: "Moderate to Advanced",
    duration: "2 - 3 hours",
    bestFor: "Experienced Rafters"
  },
  {
    name: "Ganga River",
    location: "Rishikesh, Uttarakhand",
    difficulty: "Beginner Friendly",
    duration: "2 - 4 hours",
    bestFor: "First-timers & Families"
  },
  {
    name: "Alaknanda River",
    location: "Uttarakhand",
    difficulty: "Challenging",
    duration: "Full Day",
    bestFor: "Experienced Rafters"
  }
];

const recommendedGear = [
  "Set of dry clothes",
  "Extra pair of sneakers or footwear",
  "Sunscreen lotion and shorts",
  "Raincoats",
  "Waterproof bags",
  "Personal medication"
];

const experiences = [
  {
    icon: Navigation,
    title: "Non-Swimmers Options",
    description: "Melli to 29th Mile (1.5 hours) and Melli to Kalijhora (3 hours)",
    difficulty: "Easy"
  },
  {
    icon: Waves,
    title: "Swimmers Options",
    description: "Tarkhola to Malli (2 hours) and Tarkhola to 29 Mile (3 hours)",
    difficulty: "Moderate"
  },
  {
    icon: Tent,
    title: "Camping Experience",
    description: "Modern tents with all facilities in scenic riverside locations",
    difficulty: "Easy"
  }
];

export default function CampingAdventurePage() {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [activeTab, setActiveTab] = useState("westbengal");

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Camping & Adventure Tours"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-green-900/40"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-6 py-3 mb-8">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white font-medium text-sm">Adventure Tourism</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Camping &
              <span className="block bg-gradient-to-r from-green-400 via-blue-400 to-teal-400 bg-clip-text text-transparent relative">
                Adventure Tours
                <svg className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-3/4 h-4" viewBox="0 0 300 16" fill="none">
                  <path d="M10 8 Q 75 4, 150 8 T 290 8" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#10B981" />
                      <stop offset="50%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#14B8A6" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
              West Bengal & Uttarakhand, India with Bengal Tourism • Special Tailor Made Packages
            </p>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">Custom</div>
                <div className="text-white/80 text-sm">Package Design</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">All</div>
                <div className="text-white/80 text-sm">Skill Levels</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">Safe</div>
                <div className="text-white/80 text-sm">Equipment</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">Expert</div>
                <div className="text-white/80 text-sm">Guides</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* ================= PACKAGE DESCRIPTION ================= */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-6">Special Tailor Made Combination Package</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Number of Days & Cost can be designed on Request
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">White Water Rafting Adventures</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  There is a wide range in the intensity of the rapids making it adequate for all, 
                  the young and the aged to enjoy the spectacular sport and the scenery while 
                  leisurely floating down the rivers here in West Bengal.
                </p>
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h4 className="font-bold text-green-900 mb-3">Adventure Highlights:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Well-trained members and quality equipment</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Safe and pleasant ride guaranteed</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Government authorized rafting agencies</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Accomplished guides for all levels</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative h-96 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                  alt="River Rafting Adventure"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= LOCATION TABS ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-6">Rafting Locations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose your adventure destination
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-full bg-gray-100 p-1">
              <button
                onClick={() => setActiveTab("westbengal")}
                className={`px-6 py-2 rounded-full font-semibold transition ${
                  activeTab === "westbengal" 
                    ? "bg-gradient-to-r from-green-600 to-blue-600 text-white" 
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                West Bengal
              </button>
              <button
                onClick={() => setActiveTab("uttarakhand")}
                className={`px-6 py-2 rounded-full font-semibold transition ${
                  activeTab === "uttarakhand" 
                    ? "bg-gradient-to-r from-green-600 to-blue-600 text-white" 
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Uttarakhand
              </button>
            </div>
          </div>

          {activeTab === "westbengal" && (
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">West Bengal Rafting Adventures</h3>
                
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Chitrey & Rangeet</h4>
                  <p className="text-gray-700 mb-4">
                    White water rafting in Chitrey is the most sought after adventure for most tourists 
                    in this region. Water adventure to explore the uniqueness of Darjeeling natural diversity.
                  </p>
                  <p className="text-gray-700">
                    The famous Teesta and Rangeet rivers offer first class rafting and canoeing adventures. 
                    According to tourist experience and interest, guests can either glide along calm blue waters 
                    with magnificent scenery, or rush through roaring white rapids.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6">
                    <h4 className="font-bold text-gray-900 mb-3">Best Time to Visit</h4>
                    <p className="text-gray-600">Avoid monsoon or just after monsoon. Rest of the period is comparatively safe.</p>
                  </div>
                  <div className="bg-white rounded-xl p-6">
                    <h4 className="font-bold text-gray-900 mb-3">Nearby Destinations</h4>
                    <p className="text-gray-600">Darjeeling, Kalimpong, Tinchuley, Baramangua, ReshiKhola</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "uttarakhand" && (
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Uttarakhand Rafting Adventures</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Rishikesh - Ganga River</h4>
                    <p className="text-gray-700 mb-4">
                      The Ganga in Uttarakhand is one of India's major and holiest of rivers. With a location 
                      close to Delhi, it is a popular choice for first-timers, non-swimmers and families.
                    </p>
                    <p className="text-gray-700">
                      It is also the hub of white-water rafting in India. It combines an action-packed trip 
                      with the best rapids, float sections and wilderness.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Alaknanda River</h4>
                    <p className="text-gray-700 mb-4">
                      The Alaknanda is the second major tributary of the Ganga. It drains through the big 
                      mountains of Garhwal and has numerous mighty tributaries.
                    </p>
                    <p className="text-gray-700">
                      Apart from challenging white water the river offers some spectacular scenery. 
                      A self-contained trip is a great introduction to expedition rafting.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ================= RAFTING OPTIONS ================= */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-6">Rafting Options</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the right adventure based on your skill level
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {raftingLocations.map((location, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
                <div className="flex items-center mb-4">
                  <Waves className="w-8 h-8 text-blue-600 mr-3" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{location.name}</h3>
                    <p className="text-sm text-gray-600">{location.location}</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Difficulty:</span>
                    <span className="font-semibold text-gray-900">{location.difficulty}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-semibold text-gray-900">{location.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Best For:</span>
                    <span className="font-semibold text-gray-900">{location.bestFor}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CAMPING & GEAR ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-6">Camping & Required Gear</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay in modern camps with all facilities
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Camping Experience</h3>
              <p className="text-gray-700 mb-6">
                Recommended to stay in makeshift Tents / Camps but with all modern & hygienic facilities. 
                Experience the thrill of outdoor adventure with comfort and safety.
              </p>
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h4 className="font-bold text-green-900 mb-3">Camping Features:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-600 mr-2 mt-1" />
                    <span>Modern tents with comfortable bedding</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-600 mr-2 mt-1" />
                    <span>Hygienic toilet and shower facilities</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-600 mr-2 mt-1" />
                    <span>Campfire and evening entertainment</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-600 mr-2 mt-1" />
                    <span>Meals prepared by experienced cooks</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Required Gear</h3>
              <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                <h4 className="font-bold text-orange-900 mb-3">Essential Items:</h4>
                <ul className="space-y-2">
                  {recommendedGear.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-orange-600 mr-2">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-6 bg-red-50 border border-red-200 rounded-xl p-6">
                <h4 className="font-bold text-red-900 mb-3">Important Note:</h4>
                <p className="text-gray-700">
                  Foreign Tourists are required to produce their passport & photos for safety and security purposes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= EXPERIENCES ================= */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-green-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-6">Adventure Experiences</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose your perfect adventure based on skill level
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {experiences.map((experience, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-green-600 rounded-2xl flex items-center justify-center mb-6">
                  <experience.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{experience.title}</h3>
                <p className="text-gray-700 mb-4">{experience.description}</p>
                <div className="bg-gray-100 rounded-lg px-4 py-2 inline-block">
                  <span className="text-sm font-semibold text-gray-800">Difficulty: {experience.difficulty}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-white mb-6">Ready for Your Adventure?</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-12">
            Experience the thrill of white water rafting and camping in the Himalayas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/book-tour" className="px-8 py-3 bg-white text-green-600 font-bold rounded-xl hover:bg-gray-100 transition">
              Book Adventure
            </a>
            <a href="/contact" className="px-8 py-3 bg-white text-green-600 font-bold rounded-xl hover:bg-gray-100 transition">
              Custom Package
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
