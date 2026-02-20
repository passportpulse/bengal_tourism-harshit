"use client"

import { Check } from "lucide-react"
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
    <section className={`py-24 bg-gray-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">

          {/* 1N/2D - Premium Hotel & Resort */}
          <div className="bg-white border-2 border-yellow-400 rounded-3xl p-8 shadow-lg hover:shadow-xl hover:-translate-y-2 transition duration-300 flex flex-col justify-between">

            <div>
              <span className="text-yellow-600 text-xs py-1 rounded-full font-semibold">
                Premium Hotel & Resort
              </span>

              <h3 className="text-2xl font-bold mt-6 text-gray-900">1N / 2D</h3>
              <p className="text-3xl font-bold text-yellow-600 mt-3">
                ₹ 31,000
              </p>
              <p className="text-sm text-gray-600 mt-2">with buffet breakfast</p>

                   <ul className="mt-6 space-y-3 text-gray-600 text-sm">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-yellow-600" /> Premium Hotel/Resort Accommodation
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-yellow-600" /> Buffet Breakfast Included
                </li>
                 <li className="flex items-center gap-2">  <Check className="w-4 h-4 text-yellow-600" /> Luxury Amenities
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-yellow-600" /> Premium Hospitality Services
                </li>
               
              </ul>
            </div>

             <button
              onClick={handleBookNow}
              className="mt-8 bg-yellow-500 text-black py-3 rounded-xl font-semibold hover:bg-yellow-600 transition"
            >
              Book Now
            </button>
          </div>

          {/* Other packages - disabled */}
          <div className="bg-gray-100 border border-gray-200 rounded-3xl p-8 flex flex-col justify-between opacity-50">

            <div>
              <span className="text-gray-500 text-xs py-1 rounded-full">
                Not Available
              </span>

              <h3 className="text-2xl font-bold text-gray-400 mt-6">Other Packages</h3>
              <p className="text-2xl font-semibold text-gray-400 mt-3">
                Contact for Details
              </p>
                  <ul className="mt-6 space-y-3 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-gray-400" /> Custom Packages Available
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-gray-400" /> Multiple Duration Options
                </li>
                 <li className="flex items-center gap-2">  <Check className="w-4 h-4 text-gray-400" /> Premium Services
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-gray-400" /> Customizable Itineraries
                </li>
               
              </ul>
            </div>

            <button
              disabled
              className="mt-8 bg-gray-300 text-gray-500 py-3 rounded-xl cursor-not-allowed"
            >
              Contact Us
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}
