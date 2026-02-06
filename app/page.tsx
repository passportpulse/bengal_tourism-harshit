"use client"

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
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 relative">
                <img 
                  src="https://images.unsplash.com/photo-1596445856538-8e8a1d8c3a5e?w=400&h=300&fit=crop" 
                  alt="Darjeeling Himalayas"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                  <h3 className="text-white text-2xl font-bold">Darjeeling</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-red-600 font-semibold">Queen of the Hills</span>
                  <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold">5N & 6D</span>
                </div>
                <p className="text-gray-600 mb-4">Experience the majestic Himalayas, tea gardens, and the famous toy train ride</p>
                <button className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition">
                  Book Now
                </button>
              </div>
            </div>

            {/* Dooars Package */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 relative">
                <img 
                  src="https://images.unsplash.com/photo-1548013146-72479768bada?w=400&h=300&fit=crop" 
                  alt="Dooars Forest"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                  <h3 className="text-white text-2xl font-bold">Dooars</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-red-600 font-semibold">Wildlife Paradise</span>
                  <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold">5N & 6D</span>
                </div>
                <p className="text-gray-600 mb-4">Explore the lush forests, wildlife sanctuaries, and tea gardens of Dooars</p>
                <button className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition">
                  Book Now
                </button>
              </div>
            </div>

            {/* Digha Package */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 relative">
                <img 
                  src="https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?w=400&h=300&fit=crop" 
                  alt="Digha Beach"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                  <h3 className="text-white text-2xl font-bold">Digha</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-red-600 font-semibold">Beach Paradise</span>
                  <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold">4N & 5D</span>
                </div>
                <p className="text-gray-600 mb-4">Relax at the beautiful beaches of Digha with stunning sunsets and sea food</p>
                <button className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition">
                  Book Now
                </button>
              </div>
            </div>

            {/* Kolkata Package */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 relative">
                <img 
                  src="https://images.unsplash.com/photo-1594736797933-d0301a9c8e78?w=400&h=300&fit=crop" 
                  alt="Kolkata City"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                  <h3 className="text-white text-2xl font-bold">Kolkata</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-red-600 font-semibold">City of Joy</span>
                  <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold">Custom</span>
                </div>
                <p className="text-gray-600 mb-4">Discover the rich culture, heritage, and culinary delights of Kolkata</p>
                <button className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition">
                  Book Now
                </button>
              </div>
            </div>

            {/* Sundarban Package */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 relative">
                <img 
                  src="https://images.unsplash.com/photo-1580655653885-65763b2597d0?w=400&h=300&fit=crop" 
                  alt="Sundarban Mangrove"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                  <h3 className="text-white text-2xl font-bold">Sundarban</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-red-600 font-semibold">Mangrove Forest</span>
                  <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold">3N & 4D</span>
                </div>
                <p className="text-gray-600 mb-4">World's largest mangrove forest, home to the Royal Bengal Tiger</p>
                <button className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition">
                  Book Now
                </button>
              </div>
            </div>

            {/* Puri & Konark Package */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 relative">
                <img 
                  src="https://images.unsplash.com/photo-1602941525421-8f8b81d6d77c?w=400&h=300&fit=crop" 
                  alt="Puri Beach Temple"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                  <h3 className="text-white text-2xl font-bold">Puri & Konark</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-red-600 font-semibold">Spiritual Journey</span>
                  <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold">5N & 6D</span>
                </div>
                <p className="text-gray-600 mb-4">Visit the sacred Jagannath Temple and the magnificent Sun Temple at Konark</p>
                <button className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition">
                  Book Now
                </button>
              </div>
            </div>

            {/* Sikkim & Gangtok Package */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 relative">
                <img 
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop" 
                  alt="Sikkim Mountains"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                  <h3 className="text-white text-2xl font-bold">Sikkim & Gangtok</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-red-600 font-semibold">Himalayan Beauty</span>
                  <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold">5N & 6D</span>
                </div>
                <p className="text-gray-600 mb-4">Explore the pristine beauty of Sikkim with monasteries and mountain views</p>
                <button className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition">
                  Book Now
                </button>
              </div>
            </div>

            {/* Bhutan & Paro Package */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 relative">
                <img 
                  src="https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=400&h=300&fit=crop" 
                  alt="Bhutan Monastery"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                  <h3 className="text-white text-2xl font-bold">Bhutan & Paro</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-red-600 font-semibold">Land of Thunder Dragon</span>
                  <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold">4N & 5D</span>
                </div>
                <p className="text-gray-600 mb-4">Experience the mystical beauty and Buddhist culture of Bhutan</p>
                <button className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition">
                  Book Now
                </button>
              </div>
            </div>

            {/* Bangkok & Pattaya Package */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 relative">
                <img 
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop" 
                  alt="Bangkok Temple"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                  <h3 className="text-white text-2xl font-bold">Bangkok & Pattaya</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-red-600 font-semibold">Thai Adventure</span>
                  <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold">4N & 5D</span>
                </div>
                <p className="text-gray-600 mb-4">Enjoy vibrant city life, temples, and beautiful beaches of Thailand</p>
                <button className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition">
                  Book Now
                </button>
              </div>
            </div>

            {/* Nepal/Kathmandu Package */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 relative">
                <img 
                  src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=300&fit=crop" 
                  alt="Nepal Mountains"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                  <h3 className="text-white text-2xl font-bold">Nepal/Kathmandu</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-red-600 font-semibold">Himalayan Kingdom</span>
                  <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold">4N & 5D</span>
                </div>
                <p className="text-gray-600 mb-4">Discover ancient temples, stunning mountains, and rich Nepalese culture</p>
                <button className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
