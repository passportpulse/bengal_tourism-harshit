"use client"

import { Check, X, Users } from "lucide-react"

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
  return (
    <section className={`py-24 bg-white ${className}`}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        {/* ================= TOP ROW (2 CARDS) ================= */}
        <div className="grid md:grid-cols-2 gap-8 mb-10">

          {/* 5N/6D - Highlight */}
          <div className="bg-white rounded-3xl shadow-2xl p-10 flex flex-col justify-between hover:shadow-3xl transition">
            <div>
              <span className="bg-orange-500 text-white text-xs px-4 py-1 rounded-full">
                Highly Recommended
              </span>

              <h3 className="text-4xl font-bold mt-6">5N / 6D</h3>
              <p className="text-3xl font-bold text-orange-600 mt-2">₹ 14500</p>

              <ul className="mt-6 space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" /> Accommodation
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" /> Breakfast Included
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" /> Sightseeing
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" /> Transportation
                </li>
              </ul>
            </div>

            <button className="mt-8 bg-orange-500 text-white py-3 rounded-xl font-semibold hover:bg-orange-600 transition">
              Book Now
            </button>
          </div>

          {/* 4N/5D */}
          <div className="bg-white rounded-3xl shadow-xl p-10 flex flex-col justify-between hover:shadow-2xl transition">
            <div>
              <span className="bg-blue-500 text-white text-xs px-4 py-1 rounded-full">
                Recommended
              </span>

              <h3 className="text-4xl font-bold mt-6">4N / 5D</h3>
              <p className="text-3xl font-bold text-blue-600 mt-2">₹ 12700</p>

              <ul className="mt-6 space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" /> Accommodation
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" /> Breakfast Included
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" /> Sightseeing
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" /> Transportation
                </li>
              </ul>
            </div>

            <button className="mt-8 bg-blue-500 text-white py-3 rounded-xl font-semibold hover:bg-blue-600 transition">
              Book Now
            </button>
          </div>

        </div>

        {/* ================= BOTTOM ROW (3 CARDS) ================= */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* 3N/4D */}
          <div className="bg-white rounded-3xl shadow-lg p-8 flex flex-col justify-between hover:shadow-xl transition">
            <div>
              <h3 className="text-2xl font-bold">3N / 4D</h3>
              <p className="text-2xl font-semibold text-gray-800 mt-2">₹ 9100</p>
            </div>
            <button className="mt-6 bg-gray-900 text-white py-2 rounded-lg hover:bg-black transition">
              Book Now
            </button>
          </div>

          {/* 2N/3D */}
          <div className="bg-white rounded-3xl shadow-lg p-8 flex flex-col justify-between hover:shadow-xl transition">
            <div>
              <h3 className="text-2xl font-bold">2N / 3D</h3>
              <p className="text-2xl font-semibold text-gray-800 mt-2">₹ 6400</p>

              <div className="flex items-center gap-2 text-sm text-gray-500 mt-3">
                <Users className="w-4 h-4" />
                Group of 20+ persons
              </div>
            </div>

            <button className="mt-6 bg-gray-900 text-white py-2 rounded-lg hover:bg-black transition">
              Book Now
            </button>
          </div>

          {/* 1N/2D */}
          <div className="bg-gray-100 rounded-3xl p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-gray-500">1N / 2D</h3>
              <p className="text-2xl font-semibold text-gray-400 mt-2">₹ 3700</p>

              <div className="flex items-center gap-2 text-sm text-red-500 mt-3">
                <X className="w-4 h-4" />
                Not Feasible
              </div>
            </div>

            <button
              disabled
              className="mt-6 bg-gray-300 text-gray-500 py-2 rounded-lg cursor-not-allowed"
            >
              Not Available
            </button>
          </div>

        </div>

      </div>
    </section>
  )
}
