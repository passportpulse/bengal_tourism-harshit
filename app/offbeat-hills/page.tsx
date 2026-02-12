import React from 'react'
import Link from 'next/link'
import { Mountain, MapPin, Calendar, Users, Star, ArrowRight, Trees, Compass } from 'lucide-react'

export default function OffbeatHills() {
  const hillDestinations = [
    { name: "RISHYAP", location: "LAVA & NEORA VALLY", duration: "2N/3D", type: "Himalayan Views", altitude: "8500 Ft" },
    { name: "JORPOKHRI", location: "PEDONG", duration: "2N/3D", type: "Mountain Views", altitude: "7200 Ft" },
    { name: "SITTONG", location: "AHALDATRA", duration: "2N/3D", type: "Orange Valley", altitude: "4000 Ft" },
    { name: "CHATAKPUR", location: "DAWAIPANI", duration: "2N/3D", type: "Switzerland of East", altitude: "7800 ft" },
    { name: "TINCHULEY", location: "TAKDAH - RAMDHURA", duration: "2N/3D", type: "Sunset Point", altitude: "5800 Ft" },
    { name: "SANDAKPHU", location: "MANEBHANJAN – TUMLING/PHALUT", duration: "2N/3D", type: "Trekkers Paradise", altitude: "13,000 Ft" }
  ]

  const experiences = [
    {
      icon: Mountain,
      title: "Fresh Mountain Air",
      description: "Abundant space for fresh air and unpolluted environment"
    },
    {
      icon: Trees,
      title: "Organic Living",
      description: "Home cooked meals with organic & locally grown vegetables"
    },
    {
      icon: Compass,
      title: "Local Culture",
      description: "Learn about local cultures and everyday living"
    },
    {
      icon: Star,
      title: "Sustainable Tourism",
      description: "Support less privileged communities and reduce carbon footprint"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-white max-w-3xl text-center">
            <h1 className="text-5xl font-bold mb-4">OFFBEAT TOUR – Hills</h1>
            <p className="text-xl mb-6">Special Tailor made Combination Package, Number of Days & Cost can be designed on Request</p>
            <div className="flex gap-4 justify-center">
              <Link href="/book-tour" className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition flex items-center gap-2">
                Book Now
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="#destinations" className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-green-600 transition">
                Explore Destinations
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section id="destinations" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">HILLS - OFF BEAT DESTINATIONS</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get back to Nature. Contribute to reduce the Carbon footprint & make Earth a better place for our Generation.
              Support the less privileged community to earn a sustainable income.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hillDestinations.map((destination, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-900">{destination.name}</h3>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                      {destination.type}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <MapPin className="w-4 h-4" />
                    <span>{destination.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <Mountain className="w-4 h-4" />
                    <span>{destination.altitude}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>{destination.duration}</span>
                  </div>
                  <Link 
                    href="/book-tour" 
                    className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition text-center block"
                  >
                    Book This Trip
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
              Detailed information about your offbeat hills journey experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Day – 1: Start of tour</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Our representative will receive you at NJP Railway Station / Bagdogra Airport (IXB) / Tenzing Norgay Bus Stand</li>
                <li>• Transfer to your destination (8500-13000 Ft altitude)</li>
                <li>• Check-in at Hotel/Homestay</li>
                <li>• Lunch & rest</li>
                <li>• Evening free to roam around local area & shopping centre on your own</li>
                <li>• Dinner & Overnight stay at Hotel/Resort/Homestay</li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Day – 2: Local sightseeing</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Early morning sunrise over the Kanchenjunga from your Hotel</li>
                <li>• Early breakfast and start for whole day tour excursion</li>
                <li>• Visit places of interest (Tiffin Dara, Changey Falls, Lava, Kolakham, etc.)</li>
                <li>• Lunch en-route or back to Hotel</li>
                <li>• Rest & evening free</li>
                <li>• Dinner & Overnight stay at Hotel/Resort/Homestay</li>
              </ul>
            </div>

            <div className="bg-amber-50 rounded-xl p-6 md:col-span-2">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Day – 3: Return Journey</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• After breakfast, Check-out (10.00 am) from Hotel</li>
                <li>• On the return journey, visit Mirik, Gopal Dhara View Point & Pashupati Market in Nepal</li>
                <li>• Lunch at Mirik</li>
                <li>• Proceed towards Bagdogra Airport (IXB) / New Jalpaiguri Railway Station (NJP)</li>
                <li>• 3-4 hrs drive in AC vehicle & drop at your point before (06.00pm)</li>
                <li>• Tour ends...</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Special Note Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Special Notes</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Important information for your offbeat hills experience
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg">
            <p className="text-gray-700 mb-4">
              <strong>Recommended to stay in the tea estates to undertake Tea Tourism & experience the Tea Planters everyday life.</strong>
            </p>
            <p className="text-gray-700">
              Some more of Off-Beat Destinations & Eco-Tourism facilities in the Plains on offer are Plains-Off Beat Destinations.
            </p>
          </div>
        </div>
      </section>

      {/* Inclusions/Exclusions Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Package Details</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              What's included and excluded in your offbeat hills tour package
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Offbeat Hills Tourism?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience authentic Himalayan living with sustainable tourism
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {experiences.map((experience, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <experience.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{experience.title}</h3>
                <p className="text-gray-600">{experience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Back to Nature?</h2>
          <p className="text-xl mb-8">
            Join us in supporting sustainable tourism and reducing carbon footprint while experiencing authentic Himalayan living
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/book-tour" className="bg-white text-green-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition font-semibold">
              Plan Your Offbeat Journey
            </Link>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-green-600 transition font-semibold">
              Talk to Expert
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
