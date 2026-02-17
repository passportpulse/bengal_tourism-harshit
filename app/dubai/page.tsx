"use client"

import Image from 'next/image'
import { MapPin, Calendar, Users, Star, Clock, Camera, Sun, Home, IndianRupee, Award, Compass, Utensils, Building, Trees, Ship, Sparkles, Train, ShoppingBag, Book, Mountain, Waves, Fish, Bird, Tent, Flame, PartyPopper, Heart, Sprout, Car } from 'lucide-react'
import PackagePricing from '@/components/PackagePricing'
import ContactCTA from '@/components/ContactCTA'

export default function DubaiPage() {
  return (
    <main className="text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZHViYWl8ZW58MHx8MHx8fDA%3D"
            alt="Dubai skyline with Burj Khalifa and modern architecture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-purple-800/60 to-blue-900/80"></div>
        </div>

        <div className="relative h-full flex items-center justify-center text-center text-white px-6">
          <div className="max-w-4xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Building className="w-6 h-6 text-yellow-400" />
              <span className="text-yellow-400 font-semibold tracking-wide">Dubai Luxury Tours</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Dubai
              <span className="block text-3xl md:text-5xl mt-2 text-blue-300">
                Desert Safari • Ferrari World • Luxury Shopping
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Experience the ultimate luxury destination with world-class attractions, 
              desert adventures, and premium shopping experiences
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-yellow-400 transition transform hover:scale-105">
                Explore Dubai Luxury
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-800 transition transform hover:scale-105">
                Book Premium Experience
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">Discover luxury Dubai</span>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

        <div className="bg-gray-50 py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* HEADER */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-600">
            Visit Dubai with Bengal Tourism
          </h1>
          <p className="text-gray-700 text-lg">
            Special Tailor made Combination Package
          </p>
          <p className="text-gray-600">
            Number of Days & Cost can be designed on Request.
          </p>
        </div>

        {/* CIRCUIT TITLE */}
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold text-gray-800">DUBAI</h2>
          <p className="font-semibold text-gray-700">
            Circuit with [BURJ KHALIFA – DESERT SAFARI -6N/7D]
          </p>
        </div>

        {/* DAY CARDS */}
        <div className="space-y-10 grid md:grid-cols-2 gap-10 grid-col-1">

          <DayCard title="Day – 1">
            Start of Tour: Board Flight from Kolkata / Delhi / Mumbai Airport. Arrival at Dubai Airport Terminal around (05-06 pm). Transfer to Hotel. Check-in. Evening free. Dinner & Overnight at Hotel Grand Excelsior / Similar in Dubai.
          </DayCard>

          <DayCard title="Day – 2">
            Desert Safari: After breakfast in the Hotel around (07-09 am) – 9:00 am. Then for a 02 Hrs Limo Ride (optional). Lunch en-route or at Restaurant of your choice.Then proceed for Desert Safari on Hummer with BBQ Dinner included.  Return to Hotel. Overnight at Hotel Grand Excelsior / Similar at Dubai.
          </DayCard>

          <DayCard title="Day – 3">
            Dhow Cruise: After breakfast in the Hotel around (07:09 am). Morning free for yourself for shopping on your own. Lunch en-route or at Restaurant of your choice. In the Evening, proceed for the Dhow Cruise with Dinner included. Return to Hotel. Overnight At Hotel Grand Excelsior / Similar at Dubai.
          </DayCard>

          <DayCard title="Day – 4">
            Ferrari World: After breakfast in the Hotel around (07:09 am). Proceed for Abu Dhabi City Tour with Ferrari World. Lunch en-route or at Restaurant of your choice. Return in the evening. Free for Shopping. Dinner & Overnight at Hotel Grand Excelsior / Similar at Dubai.
          </DayCard>

          <DayCard title="Day – 5">
            Burj Khalifa & Dubai Mall: After breakfast in the Hotel around (07:09 am). Proceed for Dolphin Show with entry ticket with Pvt. transfer. Visit Ski Dubai entry ticket with Pvt. Transfer. Lunch en-route or at Restaurant of your choice. Return to Hotel. Pick-up for tour of Burj Khalifa around (05:00pm) from Hotel for Dubai Mall & Fountain Show. Return transfer will be arranged by Guest themselves. Dinner & Overnight stay at Hotel Grand Excelsior / Similar at Dubai.
          </DayCard>

          <DayCard title="Day – 5 (Alternatively)">
            ALTERNATIVELY: After breakfast in the Hotel around (07:09 am). Full day activity as per your special requirement or choice. Change of Hotel to Atlantis / Similar if requested can be arranged at (Extra Cost). Lunch en-route or at Restaurant/Hotel of your choice; say Atlantis. Dinner & Overnight at Hotel Atlantis / Similar at Dubai.
          </DayCard>

          <DayCard title="Day – 6">
            After breakfast in the Hotel around (07:09 am). Free access to Aqua- Venture & Lost Chamber. Lunch en-route or at Restaurant of your choice & free for leisure, shopping on your own. Overnight at Hotel Atlantis (Extra Cost) / Similar at Dubai.
          </DayCard>

          <DayCard title="Day – 7">
            Check-out: After breakfast in the Hotel around (07:09 am). Check-out by 11am-12:00 pm. Departure for the Airport & drop 4 Hrs prior to your flight timing. Have Lunch of your choice at the Airport Terminal. Tour ends.
          </DayCard>

        </div>

      </div>
    </div>



 
<ContactCTA />
    </main>
  )
}


/* Reusable Day Card Component */
function DayCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white shadow-xl rounded-3xl p-8 border-l-4 border-amber-500">
      <h2 className="text-2xl font-semibold text-amber-600 mb-4">
        {title}
      </h2>
      <p className="text-gray-700 leading-8 whitespace-pre-line">
        {children}
      </p>
    </div>
  )
}