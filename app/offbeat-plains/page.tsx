import React from 'react'
import Link from 'next/link'
import { MapPin, Calendar, Users, Star, ArrowRight, Trees, Camera, Wind } from 'lucide-react'
import ContactCTA from '@/components/ContactCTA'
import PackagePricing from '@/components/PackagePricing'

export default function OffbeatPlains() {
  const plainDestinations = [
    { name: "ASAN NAGAR Farm House", location: "NADIA", duration: "1N/2D", type: "Farm House" },
    { name: "BARANTI", location: "PURULIA", duration: "1N/2D", type: "Nature" },
    { name: "BALLAVPUR Forest", location: "BIRBHUM", duration: "1N/2D", type: "Forest" },
    { name: "BETHUADUARI", location: "NADIA", duration: "1N/2D", type: "Heritage" },
    { name: "BELUN Gram", location: "KATWA", duration: "1N/2D", type: "Village" },
    { name: "BANDH NABAGRAM Eco Village", location: "KATWA", duration: "1N/2D", type: "Eco Village" },
    { name: "BINURIA Farm House", location: "Birbhum", duration: "1N/2D", type: "Farm House" },
    { name: "DASHGHARA", location: "CHINSURA", duration: "1N/2D", type: "Heritage" },
    { name: "DUARSINI", location: "BARDHAMAN", duration: "1N/2D", type: "Nature" },
    { name: "DARANDA Farm House", location: "BIRBHUM", duration: "1N/2D", type: "Farm House" },
    { name: "DEBANANDAPUR Village Resort", location: "BOLPUR", duration: "1N/2D", type: "Village Resort" },
    { name: "DHANGI KUSUM / NAKAT", location: "JHARGRAM", duration: "1N/2D", type: "Tribal" },
    { name: "DOLADANGA Tribal Hamlet", location: "PURULIA", duration: "1N/2D", type: "Tribal" },
    { name: "GARPACHKOT Tent House", location: "PURULIA", duration: "1N/2D", type: "Tent House" },
    { name: "GANGANI Grand Canyon", location: "GARBETA", duration: "2N/3D", type: "Nature" },
    { name: "GARH Jungle", location: "DURGAPUR", duration: "1N/2D", type: "Jungle" },
    { name: "HADAL Narayanpur", location: "BANKURA", duration: "1N/2D", type: "Heritage" },
    { name: "HENRY'S Island", location: "BAKKHALI ISLAND", duration: "2N/3D", type: "Island" },
    { name: "JUNPUT", location: "MIDNAPORE", duration: "1N/2D", type: "Beach" },
    { name: "JOYPUR Forest", location: "BANKURA", duration: "1N/2D", type: "Forest" },
    { name: "JHARGRAM Rahbari", location: "JHARGRAM", duration: "1N/2D", type: "Heritage" },
    { name: "KATWA Jol Bari", location: "BURDWAN", duration: "1N/2D", type: "Heritage" },
    { name: "LAL KAKRA Beach", location: "24-PARHANAS", duration: "1N/2D", type: "Beach" },
    { name: "MURUGUMA", location: "PURULIA", duration: "1N/2D", type: "Nature" },
    { name: "MINAKHAN Farm House", location: "BASIRHAT", duration: "1N/2D", type: "Farm House" },
    { name: "MURSHIDABAD Raj Bari", location: "MURSHUDABAD", duration: "1N/2D", type: "Heritage" },
    { name: "MONCHASHA Eco Tourism", location: "MIDNAPORE", duration: "1N/2D", type: "Eco Tourism" },
    { name: "MOUSUNI Island", location: "24-PARHANAS", duration: "1N/2D", type: "Island" },
    { name: "MATHABURU Tribal Hamlet", location: "Purulia", duration: "1N/2D", type: "Tribal" },
    { name: "MANGALKUNG Haunted", location: "Purulia", duration: "1N/2D", type: "Adventure" },
    { name: "MACHRANGA Island", location: "HASNABAD", duration: "1N/2D", type: "Island" },
    { name: "MUNDIRA Gram", location: "KATWA", duration: "1N/2D", type: "Village" },
    { name: "PIYALI Island", location: "SUNDARBAN", duration: "1N/2D", type: "Island" },
    { name: "PINGLA Patachitra Hub", location: "WEST MIDNAPORE", duration: "1N/2D", type: "Art & Culture" },
    { name: "ROHINI Gram", location: "JHARGRAM", duration: "1N/2D", type: "Village" },
    { name: "SAMSERNAGAR", location: "24-PARHANAS", duration: "1N/2D", type: "Heritage" },
    { name: "SUNDARGRAM", location: "SOUTH 24-PARGANAS", duration: "1N/2D", type: "Village" },
    { name: "SANTINIKETAN Eco Hut", location: "SANTINIKETAN", duration: "1N/2D", type: "Eco Stay" },
    { name: "SONAJHURI", location: "AYODHHA PAHAR & GARPANCHAKOT", duration: "1N/2D", type: "Nature" },
    { name: "SIULIBONA Gram", location: "PURULIA-SUNIA PAHAR", duration: "1N/2D", type: "Village" },
    { name: "TAJPUR Eco Resort", location: "MIDNAPORE", duration: "1N/2D", type: "Eco Resort" },
    { name: "TAJPUR Village Hut", location: "MIDNAPORE", duration: "1N/2D", type: "Village Hut" },
    { name: "MORE To be added", location: "xxxx", duration: "1N/2D", type: "Coming Soon" }
  ]

  const experiences = [
    {
      icon: Trees,
      title: "Fresh Air & Nature",
      description: "Abundant space for fresh air and unpolluted environment"
    },
    {
      icon: Camera,
      title: "Local Culture Experience",
      description: "Learn about local cultures and everyday living"
    },
    {
      icon: Wind,
      title: "Organic Living",
      description: "Home cooked meals with organic & locally grown vegetables"
    },
    {
      icon: MapPin,
      title: "Sustainable Tourism",
      description: "Support less privileged communities and reduce carbon footprint"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Hero Section */}
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

  {/* Background Image */}
  <img
    src="/img/Offbeat.jpeg"
    alt="Offbeat Plains Scenic Beauty"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-amber-700/60 to-orange-600/70"></div>

  {/* Content */}
  <div className="relative z-10 max-w-4xl text-center px-6 text-white">
    
    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
      OFFBEAT TOUR – Plains
    </h1>

    <p className="text-lg md:text-xl mb-8 text-gray-200">
      Special tailor-made combination packages.  
      Number of days & pricing can be customized on request.
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center">

      <Link
        href="/book-tour"
        className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-full font-semibold transition duration-300 flex items-center justify-center gap-2 shadow-lg"
      >
        Book Now
        <ArrowRight className="w-4 h-4" />
      </Link>

      <Link
        href="#destinations"
        className="border-2 border-white hover:bg-white hover:text-amber-700 px-8 py-3 rounded-full font-semibold transition duration-300"
      >
        Explore Destinations
      </Link>

    </div>

  </div>
</section>

      {/* Destinations Grid */}
      <section id="destinations" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">PLAINS - OFF BEAT DESTINATIONS</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get back to Nature. Contribute to reduce the Carbon footprint & make Earth a better place for our Generation.
              Support the less privileged community to earn a sustainable income.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {plainDestinations.map((destination, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-900">{destination.name}</h3>
                    <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full">
                      {destination.type}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <MapPin className="w-4 h-4" />
                    <span>{destination.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>{destination.duration}</span>
                  </div>
                  <Link 
                    href="/book-tour" 
                    className="w-full bg-amber-600 text-white py-2 rounded-lg hover:bg-amber-700 transition text-center block"
                  >
                    Book for {destination.duration}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tour Information Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Tour Itinerary</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Detailed information about your offbeat journey experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-amber-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Day – 1: Start of tour</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Pick up from Respective Local Station on your arrival (or) from Kolkata at (05-06 am) by Car (extra charge)</li>
                <li>• Breakfast en-route</li>
                <li>• Check-in after arrival. Rest</li>
                <li>• Lunch at respective place of halt</li>
                <li>• Evening free</li>
                <li>• Bon-fire, Bar-B-Queue & Local Tribal Dance/Music on request can be arranged with extra charge</li>
                <li>• Dinner & Overnight at Resort/Farmhouse/Homestay at Respective Destinations</li>
              </ul>
            </div>

            <div className="bg-orange-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Day – 2: Return Journey</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Early morning Bed Tea</li>
                <li>• Explore the local area on your own</li>
                <li>• Breakfast at Hotel</li>
                <li>• After having breakfast, Check-out & start for your return journey</li>
                <li>• Sightseeing en-route if any</li>
                <li>• Drop to Respective Local Station</li>
                <li>• Proceed towards Kolkata by Car (extra charge) at your destination around (09-10pm)</li>
                <li>• Tour ends…..</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Inclusions/Exclusions Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Package Details</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              What's included and excluded in your offbeat tour package
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-green-700 mb-4">✓ Includes</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Pick-up & Drop</li>
                <li>• Accommodation in Resort/Farmhouse/Homestay with Bed Tea</li>
                <li>• Breakfast</li>
                <li>• Lunch/Picnic Basket</li>
                <li>• Evening Tea & Snacks</li>
                <li>• Dinner</li>
                <li>• All Sight-seeing</li>
                <li>• Pvt. Transfer</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-red-700 mb-4">✗ Excludes</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• AC Accommodation where available</li>
                <li>• Price of Air Travel</li>
                <li>• AC Train Fare</li>
                <li>• Exclusive Non Sharing Car/ Vehicle extra if availed</li>
                <li>• Anything not mentioned in Tour Itinerary</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Offbeat Tourism?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience authentic rural Bengal with sustainable tourism
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {experiences.map((experience, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <experience.icon className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{experience.title}</h3>
                <p className="text-gray-600">{experience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

         <PackagePricing 
            title="Offbeat Plains Tour Packages"
            subtitle="Choose your perfect rural Bengal adventure"
          />
    
           
        <ContactCTA />
    </div>
  )
}
