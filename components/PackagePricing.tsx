"use client"

import { Check, X, Users } from "lucide-react"
import { useRouter } from "next/navigation"

interface PackagePricingProps {
  title?: string
  subtitle?: string
  className?: string
}

export default function PackagePricing({
  title = "Darjeeling Tour Packages",
  subtitle = "Choose your perfect Himalayan duration",
  className = "",
}: PackagePricingProps) {
  const router = useRouter()

  const handleBookNow = () => {
    router.push('/book-tour')
  }

  return (
    <section className={`py-24 bg-white ${className}`}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        {/* ================= ALL 5 CARDS IN ONE ROW ================= */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">

          {/* 5N/6D - Highlight */}
          <div className="bg-white rounded-2xl shadow-2xl p-6 flex flex-col justify-between hover:shadow-3xl transition h-full">
            <div>
              <span className="bg-orange-500 text-white text-xs px-3 py-1 rounded-full">
                Most popular
              </span>

              <h3 className="text-xl md:text-2xl font-bold mt-4">5N / 6D</h3>
              <p className="text-xl md:text-2xl font-bold text-orange-600 mt-2">₹ 15400</p>

              <ul className="mt-4 space-y-2 text-gray-600 text-sm">
                <li className="flex items-center gap-2">
                  <Check className="w-3 h-3 text-green-500" /> Accommodation
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3 h-3 text-green-500" /> Breakfast
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3 h-3 text-green-500" /> Sightseeing
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3 h-3 text-green-500" /> Transport
                </li>
              </ul>
            </div>

            <button 
              onClick={handleBookNow}
              className="mt-4 bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition text-sm"
            >
              Book this
            </button>
          </div>

          {/* 4N/5D */}
          <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col justify-between hover:shadow-2xl transition h-full">
            <div>
              <span className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full">
                Recommended
              </span>

              <h3 className="text-xl md:text-2xl font-bold mt-4">4N / 5D</h3>
              <p className="text-xl md:text-2xl font-bold text-blue-600 mt-2">₹ 12700</p>

              <ul className="mt-4 space-y-2 text-gray-600 text-sm">
                <li className="flex items-center gap-2">
                  <Check className="w-3 h-3 text-green-500" /> Accommodation
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3 h-3 text-green-500" /> Breakfast
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3 h-3 text-green-500" /> Sightseeing
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3 h-3 text-green-500" /> Transport
                </li>
              </ul>
            </div>

            <button 
              onClick={handleBookNow}
              className="mt-4 bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition text-sm"
            >
              Book this
            </button>
          </div>

          {/* 3N/4D */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:shadow-xl transition h-full">
            <div>
              <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full">
                Recommended for short breaks
              </span>
              <h3 className="text-xl md:text-2xl font-bold mt-4">3N / 4D</h3>
              <p className="text-xl md:text-2xl font-semibold text-gray-800 mt-2">₹ 9100</p>
            </div>
            <button 
              onClick={handleBookNow}
              className="mt-4 bg-gray-900 text-white py-2 rounded-lg hover:bg-black transition text-sm"
            >
              Book this
            </button>
          </div>

          {/* 2N/3D */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:shadow-xl transition h-full">
            <div>
              <span className="bg-purple-500 text-white text-xs px-3 py-1 rounded-full">
                Recommended only for group of 20+ persons
              </span>
              <h3 className="text-xl md:text-2xl font-bold mt-4">2N / 3D</h3>
              <p className="text-xl md:text-2xl font-semibold text-gray-800 mt-2">₹ 6400</p>
            </div>

            <button 
              onClick={handleBookNow}
              className="mt-4 bg-gray-900 text-white py-2 rounded-lg hover:bg-black transition text-sm"
            >
              Book this
            </button>
          </div>

          {/* 1N/2D */}
          <div className="bg-gray-100 rounded-2xl p-6 flex flex-col justify-between h-full">
            <div>
              <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full">
                Not feasible
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-gray-500 mt-4">1N / 2D</h3>
              <p className="text-xl md:text-2xl font-semibold text-gray-400 mt-2">₹ 3700</p>
            </div>

            <button
              disabled
              className="mt-4 bg-gray-300 text-gray-500 py-2 rounded-lg cursor-not-allowed text-sm"
            >
              Not Available
            </button>
          </div>

        </div>

      </div>
    </section>
  )
}
