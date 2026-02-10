import React from 'react'
import Link from 'next/link'
import { Clock, MapPin, Calendar, Users, Star, ArrowRight, Coffee, Trees, Camera } from 'lucide-react'

export default function ShortBreaks() {
  const shortBreaks = [
    {
      name: "Digha Beach Getaway",
      description: "Perfect beach escape with seafood delights",
      duration: "2N & 3D",
      price: "₹3,999",
      image: "https://images.unsplash.com/photo-1761933810905-ccc35b14d937?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U2hvcnQlMjBCcmVha3N8ZW58MHx8MHx8fDA%3D",
      rating: 4.5,
      distance: "185 km"
    },
    {
      name: "Mandarmani Beach",
      description: "Serene beaches with water sports",
      duration: "2N & 3D",
      price: "₹4,499",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QmVhY2glMjBEZXN0aW5hdGlvbnN8ZW58MHx8MHx8fDA%3D",
      rating: 4.6,
      distance: "180 km"
    },
    {
      name: "Shantiniketan Cultural Tour",
      description: "Tagore's abode with rural charm",
      duration: "2N & 3D",
      price: "₹3,499",
      image: "https://images.unsplash.com/photo-1589822909392-6b9aba4398a9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TW9uYXN0ZXJ5JTIwSW5kaWF8ZW58MHx8MHx8fDA%3D",
      rating: 4.7,
      distance: "160 km"
    },
    {
      name: "Sundarban Wildlife",
      description: "Royal Bengal tiger habitat",
      duration: "2N & 3D",
      price: "₹5,999",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TWFuZ3JvdmUlMjBGb3Jlc3R8ZW58MHx8MHx8fDA%3D",
      rating: 4.8,
      distance: "109 km"
    },
    {
      name: "Bakkhali Beach",
      description: "Quiet beach with pristine beauty",
      duration: "2N & 3D",
      price: "₹2,999",
      image: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8VHJhZGl0aW9uYWwlMjBWaWxsYWdlfGVufDB8fDB8fHwxNzAwNDM5NjY5fA%3D%3D",
      rating: 4.4,
      distance: "130 km"
    },
    {
      name: "Murshidabad Heritage",
      description: "Nawabi palaces and history",
      duration: "2N & 3D",
      price: "₹2,499",
      image: "https://images.unsplash.com/photo-1614850523296-d8c1e4edc8e1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UGFsYWNlJTIwSGVyaXRhZ2V8ZW58MHx8MHx8fDA%3D",
      rating: 4.6,
      distance: "200 km"
    }
  ]

  const breakFeatures = [
    {
      icon: Clock,
      title: "Quick Getaways",
      description: "Perfect for weekend escapes"
    },
    {
      icon: Coffee,
      title: "Local Cuisine",
      description: "Taste authentic regional flavors"
    },
    {
      icon: Trees,
      title: "Nature Retreats",
      description: "Reconnect with nature"
    },
    {
      icon: Camera,
      title: "Photography Spots",
      description: "Capture beautiful memories"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-5xl font-bold mb-4">Short Breaks from Kolkata</h1>
            <p className="text-xl mb-6">Quick weekend getaways to recharge your soul near the City of Joy</p>
            <div className="flex gap-4">
              <Link href="/book-tour" className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition flex items-center gap-2">
                Book Now
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="#destinations" className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition">
                Explore Getaways
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section id="destinations" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Weekend Escapes</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Perfect short breaks within driving distance from Kolkata for quick rejuvenation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {shortBreaks.map((destination, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
                <div className="h-48 relative">
                  <img 
                    src={destination.image} 
                    alt={destination.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{destination.rating}</span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-black/70 px-2 py-1 rounded text-white text-sm">
                    <MapPin className="w-3 h-3 inline mr-1" />
                    {destination.distance} from Kolkata
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{destination.name}</h3>
                  <p className="text-gray-600 mb-4">{destination.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>{destination.duration}</span>
                    </div>
                    <div className="text-xl font-bold text-blue-600">{destination.price}</div>
                  </div>
                  <Link 
                    href="/book-tour" 
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition text-center block"
                  >
                    Book Weekend Trip
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Short Breaks?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Recharge yourself with these perfect weekend getaway options
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {breakFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready for a Quick Escape?</h2>
          <p className="text-xl mb-8">
            Book your perfect weekend getaway and refresh yourself for the week ahead
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/book-tour" className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition font-semibold">
              Plan Weekend Trip
            </Link>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition font-semibold">
              Get Suggestions
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
