"use client"

import { Check, X, Users } from 'lucide-react'

interface PricingTier {
  duration: string
  price: string
  recommendation: string
  bookable: boolean
  description?: string
}

interface PackagePricingProps {
  title?: string
  subtitle?: string
  className?: string
}

const pricingTiers: PricingTier[] = [
  {
    duration: "5N/6D",
    price: "₹ 14500",
    recommendation: "Highly recommended",
    bookable: true
  },
  {
    duration: "4N/5D",
    price: "₹ 12700",
    recommendation: "Recommended",
    bookable: true
  },
  {
    duration: "3N/4D",
    price: "₹ 9100",
    recommendation: "",
    bookable: true
  },
  {
    duration: "2N/3D",
    price: "₹ 6400",
    recommendation: "Recommended only in group of 20+ persons",
    bookable: true
  },
  {
    duration: "1N/2D",
    price: "₹ 3700",
    recommendation: "Not feasible",
    bookable: false
  }
]

export default function PackagePricing({ 
  title = "Package Pricing", 
  subtitle = "Choose your perfect duration",
  className = "" 
}: PackagePricingProps) {
  return (
    <section className={`py-16 bg-gradient-to-br from-orange-50 to-yellow-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {pricingTiers.map((tier, index) => (
            <div
              key={tier.duration}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                tier.recommendation.includes("Highly") ? 'ring-2 ring-orange-500 ring-offset-2' : ''
              }`}
            >
              {/* Header */}
              <div className={`p-6 text-center ${
                tier.recommendation.includes("Highly") 
                  ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white' 
                  : tier.recommendation.includes("Recommended") 
                  ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white'
                  : 'bg-gray-50 text-gray-800'
              }`}>
                <h3 className="text-2xl font-bold mb-2">{tier.duration}</h3>
                <div className="text-3xl font-bold mb-2">{tier.price}</div>
                {tier.recommendation && (
                  <div className={`text-sm font-medium ${
                    tier.recommendation.includes("Highly") || tier.recommendation.includes("Recommended")
                      ? 'text-white/90'
                      : 'text-gray-600'
                  }`}>
                    {tier.recommendation.includes("Highly") && (
                      <span className="flex items-center justify-center gap-1">
                        <Check className="w-4 h-4" />
                        {tier.recommendation}
                      </span>
                    )}
                    {tier.recommendation.includes("Recommended") && !tier.recommendation.includes("Highly") && (
                      <span className="flex items-center justify-center gap-1">
                        <Check className="w-4 h-4" />
                        {tier.recommendation}
                      </span>
                    )}
                    {tier.recommendation.includes("Not feasible") && (
                      <span className="flex items-center justify-center gap-1">
                        <X className="w-4 h-4" />
                        {tier.recommendation}
                      </span>
                    )}
                    {tier.recommendation.includes("group") && (
                      <span className="flex items-center justify-center gap-1">
                        <Users className="w-4 h-4" />
                        {tier.recommendation}
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Accommodation</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Daily Breakfast</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Sightseeing</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Transportation</span>
                  </div>
                </div>

                {/* Book Button */}
                {tier.bookable ? (
                  <button 
                    className={`w-full py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
                      tier.recommendation.includes("Highly")
                        ? 'bg-orange-500 text-white hover:bg-orange-600 shadow-lg'
                        : tier.recommendation.includes("Recommended")
                        ? 'bg-blue-500 text-white hover:bg-blue-600'
                        : 'bg-gray-800 text-white hover:bg-gray-900'
                    }`}
                    onClick={() => {
                      // Handle booking logic here
                      console.log(`Booking ${tier.duration} package`)
                    }}
                  >
                    Book this Package
                  </button>
                ) : (
                  <button 
                    className="w-full py-3 px-4 rounded-xl font-semibold bg-gray-200 text-gray-400 cursor-not-allowed"
                    disabled
                  >
                    Not Available
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-12 bg-white rounded-2xl p-8 shadow-xl">
          <h3 className="text-xl font-bold mb-4 text-center">Important Information</h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-600">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">What's Included:</h4>
              <ul className="space-y-1">
                <li>• Accommodation in standard hotels</li>
                <li>• Daily breakfast at hotel</li>
                <li>• All transfers and sightseeing</li>
                <li>• Driver allowance and fuel charges</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">What's Excluded:</h4>
              <ul className="space-y-1">
                <li>• Airfare/Train fare</li>
                <li>• Lunch and dinner</li>
                <li>• Entry fees and monuments</li>
                <li>• Personal expenses</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
