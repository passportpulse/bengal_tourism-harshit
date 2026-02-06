"use client"

import Image from 'next/image'

export default function HomePage() {
  return (
    <main className="text-gray-800">

      {/* ================= HERO ================= */}
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
            <p className="text-red-600 font-bold text-sm mb-3 tracking-wide">
              Bengal Tourism Welcomes You
            </p>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6 relative">
              Explore, <span className="relative">Experience
                <img
                  src="/Decore.svg"
                  alt="Decorative element"
                  className="absolute -bottom-2 left-0 w-full h-auto"
                />
              </span> & Expect more than your expectation !
            </h1>

            <p className="text-gray-600 text-lg mb-10 max-w-md">
             From history and heritage to food, festivals and modern life, Bengal welcomes you with stories that stay forever.
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <button className="bg-yellow-500 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:bg-yellow-600 transition">
                Find out more
              </button>

              <button className="flex items-center gap-4 text-yellow-600 font-semibold hover:opacity-90 border border-yellow-600 px-8 py-3 rounded-full transition">
                Contact Us
              </button>
            </div>
          </div>

          {/* ---------- RIGHT IMAGE ---------- */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/hero.png"
              alt="Traveler with backpack"
              className="w-full max-w-md md:max-w-lg lg:max-w-xl"
            />
          </div>

        </div>
      </section>

      {/* ================= PACKAGES ================= */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular <span className="text-red-600">Packages</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Explore our carefully crafted tour packages with the best destinations and experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Darjeeling Package */}
            <div className="group relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
              <div className="relative h-56 overflow-hidden flex-shrink-0">
                <Image 
                  src="https://images.unsplash.com/photo-1596445856538-8e8a1d8c3a5e?w=400&h=300&fit=crop" 
                  alt="Darjeeling Himalayas"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-red-600 font-bold text-sm">5N & 6D</span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white text-3xl font-bold mb-1">Darjeeling</h3>
                  <p className="text-white/80 text-sm">Queen of the Hills</p>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <p className="text-gray-700 font-medium">Himalayan Paradise</p>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed flex-1">
                  Experience majestic Himalayas, tea gardens, and the famous toy train ride through misty mountains
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <div>
                    <p className="text-sm text-gray-500">Starting from</p>
                    <p className="text-2xl font-bold text-red-600">₹12,999</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                      </svg>
                    </button>
                    <button className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-red-700 hover:to-red-800 transition shadow-lg">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Dooars Package */}
            <div className="group relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
              <div className="relative h-56 overflow-hidden flex-shrink-0">
                <Image 
                  src="https://images.unsplash.com/photo-1548013146-72479768bada?w=400&h=300&fit=crop" 
                  alt="Dooars Forest"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-red-600 font-bold text-sm">5N & 6D</span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white text-3xl font-bold mb-1">Dooars</h3>
                  <p className="text-white/80 text-sm">Wildlife Paradise</p>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <p className="text-gray-700 font-medium">Himalayan Paradise</p>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed flex-1">
                  Explore lush forests, wildlife sanctuaries, and tea gardens of Dooars
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <div>
                    <p className="text-sm text-gray-500">Starting from</p>
                    <p className="text-2xl font-bold text-red-600">₹10,999</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                      </svg>
                    </button>
                    <button className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-red-700 hover:to-red-800 transition shadow-lg">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Digha Package */}
            <div className="group relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
              <div className="relative h-56 overflow-hidden flex-shrink-0">
                <Image 
                  src="https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?w=400&h=300&fit=crop" 
                  alt="Digha Beach"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-red-600 font-bold text-sm">4N & 5D</span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white text-3xl font-bold mb-1">Digha</h3>
                  <p className="text-white/80 text-sm">Beach Paradise</p>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <p className="text-gray-700 font-medium">Himalayan Paradise</p>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed flex-1">
                  Relax at the beautiful beaches of Digha with stunning sunsets and seafood
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <div>
                    <p className="text-sm text-gray-500">Starting from</p>
                    <p className="text-2xl font-bold text-red-600">₹8,999</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                      </svg>
                    </button>
                    <button className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-red-700 hover:to-red-800 transition shadow-lg">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Kolkata Package */}
            <div className="group relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1594736797933-d0301a9c8e78?w=400&h=300&fit=crop" 
                  alt="Kolkata City"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-red-600 font-bold text-sm">Custom</span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white text-3xl font-bold mb-1">Kolkata</h3>
                  <p className="text-white/80 text-sm">City of Joy</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <p className="text-gray-700 font-medium">Cultural Heritage</p>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Discover rich culture, heritage, and culinary delights of Kolkata
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Starting from</p>
                    <p className="text-2xl font-bold text-red-600">₹6,999</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                      </svg>
                    </button>
                    <button className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-red-700 hover:to-red-800 transition shadow-lg">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Sundarban Package */}
            <div className="group relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1580655653885-65763b2597d0?w=400&h=300&fit=crop" 
                  alt="Sundarban Mangrove"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-red-600 font-bold text-sm">3N & 4D</span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white text-3xl font-bold mb-1">Sundarban</h3>
                  <p className="text-white/80 text-sm">Mangrove Forest</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <p className="text-gray-700 font-medium">Cultural Heritage</p>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  World's largest mangrove forest, home to the Royal Bengal Tiger
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Starting from</p>
                    <p className="text-2xl font-bold text-red-600">₹9,999</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                      </svg>
                    </button>
                    <button className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-red-700 hover:to-red-800 transition shadow-lg">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Puri & Konark Package */}
            <div className="group relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1602941525421-8f8b81d6d77c?w=400&h=300&fit=crop" 
                  alt="Puri Beach Temple"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-red-600 font-bold text-sm">5N & 6D</span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white text-3xl font-bold mb-1">Puri & Konark</h3>
                  <p className="text-white/80 text-sm">Spiritual Journey</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <p className="text-gray-700 font-medium">Temple Tour</p>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Visit sacred Jagannath Temple and magnificent Sun Temple at Konark
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Starting from</p>
                    <p className="text-2xl font-bold text-red-600">₹11,999</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                      </svg>
                    </button>
                    <button className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-red-700 hover:to-red-800 transition shadow-lg">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Sikkim & Gangtok Package */}
            <div className="group relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop" 
                  alt="Sikkim Mountains"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-red-600 font-bold text-sm">5N & 6D</span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white text-3xl font-bold mb-1">Sikkim & Gangtok</h3>
                  <p className="text-white/80 text-sm">Himalayan Beauty</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                  <p className="text-gray-700 font-medium">Mountain Escape</p>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Explore pristine beauty of Sikkim with monasteries and mountain views
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Starting from</p>
                    <p className="text-2xl font-bold text-red-600">₹13,999</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                      </svg>
                    </button>
                    <button className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-red-700 hover:to-red-800 transition shadow-lg">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Bhutan & Paro Package */}
            <div className="group relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=400&h=300&fit=crop" 
                  alt="Bhutan Monastery"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-red-600 font-bold text-sm">4N & 5D</span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white text-3xl font-bold mb-1">Bhutan & Paro</h3>
                  <p className="text-white/80 text-sm">Land of Thunder Dragon</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <p className="text-gray-700 font-medium">Temple Tour</p>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Experience mystical beauty and Buddhist culture of Bhutan
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Starting from</p>
                    <p className="text-2xl font-bold text-red-600">₹15,999</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                      </svg>
                    </button>
                    <button className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-red-700 hover:to-red-800 transition shadow-lg">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Bangkok & Pattaya Package */}
            <div className="group relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop" 
                  alt="Bangkok Temple"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-red-600 font-bold text-sm">4N & 5D</span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white text-3xl font-bold mb-1">Bangkok & Pattaya</h3>
                  <p className="text-white/80 text-sm">Thai Adventure</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <p className="text-gray-700 font-medium">Mountain Escape</p>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Enjoy vibrant city life, temples, and beautiful beaches of Thailand
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Starting from</p>
                    <p className="text-2xl font-bold text-red-600">₹18,999</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                      </svg>
                    </button>
                    <button className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-red-700 hover:to-red-800 transition shadow-lg">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Nepal/Kathmandu Package */}
            <div className="group relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=300&fit=crop" 
                  alt="Nepal Mountains"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-red-600 font-bold text-sm">4N & 5D</span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white text-3xl font-bold mb-1">Nepal/Kathmandu</h3>
                  <p className="text-white/80 text-sm">Himalayan Kingdom</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <p className="text-gray-700 font-medium">Mountain Escape</p>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Discover ancient temples, stunning mountains, and rich Nepalese culture
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Starting from</p>
                    <p className="text-2xl font-bold text-red-600">₹14,999</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                      </svg>
                    </button>
                    <button className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-red-700 hover:to-red-800 transition shadow-lg">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES SECTION ================= */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-red-600">Bengal Tourism</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We provide exceptional travel experiences with our trusted services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature Card 1 */}
            <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-200 transition">
                <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Best Price Guarantee</h3>
              <p className="text-gray-600 leading-relaxed">
                We offer competitive prices with no hidden charges. Get the best value for your money.
              </p>
            </div>

            {/* Feature Card 2 */}
            <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">24/7 Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Our dedicated team is available round the clock to assist you with any queries.
              </p>
            </div>

            {/* Feature Card 3 */}
            <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042.133-2.052.382-3.016.679z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Safe & Secure</h3>
              <p className="text-gray-600 leading-relaxed">
                Your safety is our priority. We follow all safety protocols and guidelines.
              </p>
            </div>

            {/* Feature Card 4 */}
            <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 text-center">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-200 transition">
                <svg className="w-10 h-10 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Guides</h3>
              <p className="text-gray-600 leading-relaxed">
                Professional local guides who know the destinations inside out for better experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS SECTION ================= */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our <span className="text-red-600">Travelers Say</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Real experiences from real travelers who explored with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118-2.034l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.5-1.838 1.279-1.118 2.034l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.381-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "Amazing experience! The tour was well-organized and the guide was very knowledgeable. 
                Bengal's beauty is truly breathtaking. Highly recommend!"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Rahul Sharma</h4>
                  <p className="text-sm text-gray-600">Delhi</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118-2.034l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.5-1.838 1.279-1.118 2.034l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.381-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "Perfect family vacation! Everything was taken care of, from transport to accommodation. 
                The kids loved the activities. Will definitely book again!"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Priya Patel</h4>
                  <p className="text-sm text-gray-600">Mumbai</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118-2.034l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.5-1.838 1.279-1.118 2.034l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.381-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "Incredible journey through Bengal! The cultural experiences and local cuisine were amazing. 
                Our guide made the trip truly memorable. Thank you!"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Amit Kumar</h4>
                  <p className="text-sm text-gray-600">Bangalore</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
