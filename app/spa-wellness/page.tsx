"use client"

import Image from 'next/image'
import { MapPin, Calendar, Users, Star, Clock, Camera, Sun, Home, DollarSign, Award, Compass, Utensils, Building, Trees, Ship, Sparkles, Train, ShoppingBag, Book, Mountain, Waves, Fish, Bird, Tent, Flame, PartyPopper, Heart, Sprout } from 'lucide-react'

export default function SpaWellnessPage() {
  return (
    <main className="text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1576096424-5f6e4e1a5?w=1920&h=1080&fit=crop"
            alt="Luxury spa resort with swimming pool and wellness facilities"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/80 via-pink-800/60 to-purple-900/80"></div>
        </div>

        <div className="relative h-full flex items-center justify-center text-white px-6">
          <div className="max-w-4xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Heart className="w-6 h-6 text-yellow-400" />
              <span className="text-yellow-400 font-semibold tracking-wide">Spa & Wellness</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Wellness & Rejuvenation
              <span className="block text-3xl md:text-5xl mt-2 text-purple-300">
                Ayurvedic Treatments • Yoga • Meditation • Spa Therapies
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Experience ultimate wellness and rejuvenation with ancient Ayurvedic wisdom, 
              yoga, meditation, and spa therapies in the Himalayan foothills
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-yellow-400 transition transform hover:scale-105">
                Discover Wellness
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-purple-800 transition transform hover:scale-105">
                Book Wellness Retreat
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">Find Inner Peace</span>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= AYURVEDIC TREATMENTS ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Ayurvedic Treatments</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Authentic Ayurvedic treatments with ancient wisdom and modern wellness practices
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Panchakarma */}
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-green-400 to-teal-500 flex items-center justify-center">
                <Sprout className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Panchakarma</h3>
                <p className="text-gray-700 mb-4">
                  Traditional detoxification and purification therapies using natural herbs 
                  and oils. Experience the ancient wisdom of Ayurvedic healing.
                </p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-green-600 font-semibold">Ancient Healing</span>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>

            {/* Shirodhara */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                <Waves className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Shirodhara</h3>
                <p className="text-gray-700 mb-4">
                  Oil massage therapies with herbal medicated oils for deep relaxation 
                  and muscle rejuvenation. Experience the healing power of touch.
                </p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-blue-600 font-semibold">Deep Relaxation</span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>

            {/* Abhyanga */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                <Flame className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Abhyanga</h3>
                <p className="text-gray-700 mb-4">
                  Specialized massage using warm herbal oils for detoxification 
                  and purification. Experience the ancient art of therapeutic touch.
                </p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-orange-600 font-semibold">Therapeutic Touch</span>
                  <button className="bg-orange-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-orange-700 transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>

            {/* Herbal Treatments */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
                <Trees className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Herbal Treatments</h3>
                <p className="text-gray-700 mb-4">
                  Natural herbal remedies and formulations for various health conditions. 
                  Experience traditional healing wisdom passed down through generations.
                </p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-purple-600 font-semibold">Natural Healing</span>
                  <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700 transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= YOGA & MEDITATION ================= */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Yoga & Meditation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ancient practices for mind-body harmony and spiritual enlightenment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Yoga */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sun className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Hatha Yoga</h3>
                <p className="text-gray-700 mb-4">
                  Traditional Hatha yoga practices for physical health and mental clarity. 
                  Morning and evening sessions with experienced instructors.
                </p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-orange-600 font-semibold">Physical Harmony</span>
                  <button className="bg-orange-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-orange-700 transition">
                    Book Now
                  </button>
                </div>
            </div>

            {/* Meditation */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mountain className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Meditation</h3>
                <p className="text-gray-700 mb-4">
                  Guided meditation and mindfulness practices for inner peace and stress reduction. 
                  Experience deep relaxation and spiritual awareness in serene Himalayan settings.
                </p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-green-600 font-semibold">Inner Peace</span>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition">
                    Book Now
                  </button>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MASSAGE & SPA FACILITIES ================= */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Massage & Spa Facilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Luxury spa facilities with experienced therapists and modern equipment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Luxury Spa */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Luxury Spa</h3>
                <p className="text-gray-700 mb-4">
                  Premium massage therapies, steam rooms, sauna, and jacuzzi facilities. 
                  Experienced therapists trained in various international wellness techniques.
                </p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-pink-600 font-semibold">Premium Care</span>
                  <button className="bg-pink-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-pink-700 transition">
                    Book Now
                  </button>
                </div>
            </div>

            {/* Wellness Cuisine */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Utensils className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Wellness Cuisine</h3>
                <p className="text-gray-700 mb-4">
                  Nutritious Ayurvedic meals and herbal teas designed for optimal health. 
                  Fresh, organic ingredients sourced from local Himalayan gardens.
                </p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-teal-600 font-semibold">Healthy Dining</span>
                  <button className="bg-teal-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-teal-700 transition">
                    Book Now
                  </button>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WELLNESS PACKAGES ================= */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Wellness Packages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Holistic wellness programs designed for complete rejuvenation and balance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* 3-Day Rejuvenation */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                <Clock className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">3-Day Rejuvenation</h3>
                <p className="text-gray-700 mb-4">
                  Complete wellness program with Ayurvedic treatments, yoga, meditation, 
                  and spa therapies. Perfect for stress relief and rejuvenation.
                </p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-orange-600 font-semibold">Complete Balance</span>
                  <button className="bg-orange-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-orange-700 transition">
                    Book Now
                  </button>
                </div>
            </div>

            {/* 5-Day Detox */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                <Sparkles className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">5-Day Detox</h3>
                <p className="text-gray-700 mb-4">
                  Intensive detoxification program with Panchakarma, herbal treatments, 
                  and specialized diet. Experience complete body purification and renewal.
                </p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-blue-600 font-semibold">Deep Cleanse</span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition">
                    Book Now
                  </button>
                </div>
            </div>

            {/* 7-Day Wellness Retreat */}
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-green-400 to-teal-500 flex items-center justify-center">
                <Star className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">7-Day Wellness Retreat</h3>
                <p className="text-gray-700 mb-4">
                  Ultimate wellness experience combining all treatments, yoga, meditation, 
                  spa therapies, and healthy cuisine. Perfect for complete transformation.
                </p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-green-600 font-semibold">Ultimate Transformation</span>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition">
                    Book Now
                  </button>
                </div>
            </div>
          </div>
        </div> </div> </div></div>
      </section>

      {/* ================= BOOKING CTA ================= */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Book Your Wellness Journey</h2>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Begin your journey to complete wellness and rejuvenation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center">
              <Clock className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Flexible Duration</h3>
              <p className="text-3xl font-bold text-yellow-400 mb-2">3-7 Days</p>
              <p className="text-emerald-100">Custom programs available</p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center">
              <Users className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Group Size</h3>
              <p className="text-3xl font-bold text-yellow-400 mb-2">2-10 People</p>
              <p className="text-emerald-100">Private & group programs</p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center">
              <DollarSign className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Starting From</h3>
              <p className="text-3xl font-bold text-yellow-400 mb-2">₹15,000</p>
              <p className="text-emerald-100">Per person</p>
            </div>

            <div className="text-center">
            <div className="bg-white text-emerald-800 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Ready for Wellness Journey?</h3>
              <p className="text-gray-700 mb-6">
                Contact us for personalized wellness programs designed according to your health goals
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-emerald-600 text-white px-8 py-3 rounded-full font-bold hover:bg-emerald-700 transition">
                  Call Now: +91 98765 43210
                </button>
                <button className="bg-purple-600 text-white px-8 py-3 rounded-full font-bold hover:bg-purple-700 transition">
                  Email: info@bengaltourism.com
                </button>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                For more pictures, offers & reviews, visit our Facebook Page
              </p>
              <div className="mt-6 bg-emerald-100 p-4 rounded-lg">
                <p className="text-emerald-800 font-bold text-center mb-2">
                  🧘‍♀️ Find Inner Balance
                </p>
                <p className="text-sm text-emerald-700 text-center">
                  Experience ancient wisdom and modern wellness in the Himalayas
                </p>
              </div>
            </div>
          </div>
        </div>   </div>
      </section>

    </main>
  )
}
