import React from 'react'
import Link from 'next/link'
import { Mountain, MapPin, Calendar, Users, Star, ArrowRight, Trees, Compass } from 'lucide-react'

export default function OffbeatHills() {
  const hillDestinations = [
    {
      name: "Kalimpong",
      description: "Hidden gem with monasteries and nurseries",
      duration: "3N & 4D",
      price: "₹8,999",
      image: "https://images.unsplash.com/photo-1599106242383-271adeb2e828?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8SGlsbHN8ZW58MHx8MHx8fDA%3D",
      rating: 4.7
    },
    {
      name: "Lava & Lolegaon",
      description: "Remote Himalayan villages with pristine nature",
      duration: "2N & 3D", 
      price: "₹7,499",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SGlsbHN8ZW58MHx8MHx8fDA%3D",
      rating: 4.8
    },
    {
      name: "Rishop",
      description: "Serene hilltop village with Himalayan views",
      duration: "2N & 3D",
      price: "₹6,999", 
      image: "https://images.unsplash.com/photo-1615714843290-8795d8b5d3f0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8SGlsbHN8ZW58MHx8MHx8fDA%3D",
      rating: 4.6
    },
    {
      name: "Samsing",
      description: "Tea gardens and orange orchards paradise",
      duration: "2N & 3D",
      price: "₹5,999",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VGVhJTIwR2FyZGVuc3xlbnwwfHx8fHwxNzAwNDM5NjY5fA%3D%3D",
      rating: 4.5
    },
    {
      name: "Charkhole",
      description: "Unexplored paradise with pine forests",
      duration: "2N & 3D",
      price: "₹5,499",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Rm9yZXN0JTIwUGF0aHxlbnwwfHx8fHwxNzAwNDM5NjY5fA%3D%3D",
      rating: 4.4
    },
    {
      name: "Tinchuley",
      description: "Sunset point with breathtaking views",
      duration: "2N & 3D",
      price: "₹6,499",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8U3Vuc2V0JTIwTW91bnRhaW5zfGVufDB8fDB8fHwxNzAwNDM5NjY5fA%3D%3D",
      rating: 4.7
    }
  ]

  const experiences = [
    {
      icon: Mountain,
      title: "Himalayan Treks",
      description: "Guided treks through unexplored trails"
    },
    {
      icon: Trees,
      title: "Forest Walks",
      description: "Nature walks in pristine pine forests"
    },
    {
      icon: Compass,
      title: "Village Tours",
      description: "Experience local culture and traditions"
    },
    {
      icon: Star,
      title: "Stargazing",
      description: "Clear night skies perfect for astronomy"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-5xl font-bold mb-4">Hills – Off Beat Destinations</h1>
            <p className="text-xl mb-6">Discover the hidden gems of Himalayas where few travelers venture</p>
            <div className="flex gap-4">
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Hidden Hill Paradises</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Escape the crowds and discover pristine Himalayan villages untouched by mass tourism
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hillDestinations.map((destination, index) => (
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
                    <div className="text-xl font-bold text-green-600">{destination.price}</div>
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

      {/* Experiences Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Unique Experiences</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Immerse yourself in authentic Himalayan experiences
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
          <h2 className="text-3xl font-bold mb-4">Ready for an Offbeat Adventure?</h2>
          <p className="text-xl mb-8">
            Let our expert guides help you discover the hidden treasures of the Himalayas
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/book-tour" className="bg-white text-green-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition font-semibold">
              Plan Your Journey
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
