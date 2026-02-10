import React from 'react'
import Link from 'next/link'
import { MapPin, Calendar, Users, Star, ArrowRight, Trees, Camera, Wind } from 'lucide-react'

export default function OffbeatPlains() {
  const plainDestinations = [
    {
      name: "Bishnupur",
      description: "Terracotta temple town with rich heritage",
      duration: "2N & 3D",
      price: "₹4,999",
      image: "https://images.unsplash.com/photo-1651678938586-affccc71c270?q=80&w=2274&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4.6
    },
    {
      name: "Murshidabad",
      description: "Historic Nawabi capital with palaces",
      duration: "2N & 3D",
      price: "₹5,499",
      image: "https://images.unsplash.com/photo-1614850523296-d8c1e4edc8e1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UGFsYWNlJTIwSGVyaXRhZ2V8ZW58MHx8MHx8fDA%3D",
      rating: 4.7
    },
    {
      name: "Cooch Behar",
      description: "Royal kingdom with magnificent palaces",
      duration: "2N & 3D",
      price: "₹4,499",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Um95YWwlMjBQYWxhY2V8ZW58MHx8MHx8fDA%3D",
      rating: 4.5
    },
    {
      name: "Malda",
      description: "Ancient capital with mango orchards",
      duration: "2N & 3D",
      price: "₹3,999",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VGVhJTIwR2FyZGVuc3xlbnwwfHx8fHwxNzAwNDM5NjY5fA%3D%3D",
      rating: 4.4
    },
    {
      name: "Bankura",
      description: "Tribal culture and unique terracotta art",
      duration: "2N & 3D",
      price: "₹3,499",
      image: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8VmlsbGFnZSUyMExpZmV8ZW58MHx8MHx8fDA%3D",
      rating: 4.3
    },
    {
      name: "Purulia",
      description: "Tribal heartland with natural springs",
      duration: "2N & 3D",
      price: "₹4,499",
      image: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8VHJhZGl0aW9uYWwlMjBWaWxsYWdlfGVufDB8fDB8fHwxNzAwNDM5NjY5fA%3D%3D",
      rating: 4.5
    }
  ]

  const experiences = [
    {
      icon: Camera,
      title: "Heritage Photography",
      description: "Capture ancient temples and palaces"
    },
    {
      icon: Trees,
      title: "Rural Village Walks",
      description: "Experience authentic village life"
    },
    {
      icon: Wind,
      title: "Folk Culture Shows",
      description: "Enjoy traditional music and dance"
    },
    {
      icon: MapPin,
      title: "Archaeological Tours",
      description: "Explore ancient ruins and monuments"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-5xl font-bold mb-4">Plains – Off Beat Destinations</h1>
            <p className="text-xl mb-6">Explore the hidden cultural treasures of Bengal's countryside</p>
            <div className="flex gap-4">
              <Link href="/book-tour" className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition flex items-center gap-2">
                Book Now
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="#destinations" className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-amber-600 transition">
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Hidden Cultural Gems</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the rich heritage and authentic rural experiences of Bengal's plains
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plainDestinations.map((destination, index) => (
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
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{destination.name}</h3>
                  <p className="text-gray-600 mb-4">{destination.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>{destination.duration}</span>
                    </div>
                    <div className="text-xl font-bold text-amber-600">{destination.price}</div>
                  </div>
                  <Link 
                    href="/book-tour" 
                    className="w-full bg-amber-600 text-white py-2 rounded-lg hover:bg-amber-700 transition text-center block"
                  >
                    Book This Trip
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Cultural Experiences</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Immerse yourself in the rich traditions and rural life of Bengal
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

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Discover Rural Bengal?</h2>
          <p className="text-xl mb-8">
            Let us take you on a journey through the cultural heartland of Bengal
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/book-tour" className="bg-white text-amber-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition font-semibold">
              Plan Your Journey
            </Link>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-amber-600 transition font-semibold">
              Talk to Expert
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
