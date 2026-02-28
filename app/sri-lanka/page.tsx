"use client"

import Image from 'next/image'
import { MapPin, Calendar, Users, Star, Clock, Camera, Sun, Home, IndianRupee, Award, Compass, Utensils, Building, Trees, Ship, Sparkles, Train, ShoppingBag, Book, Mountain, Waves, Fish, Bird, Tent, Flame, PartyPopper, Heart, Sprout, Waves as WaveIcon } from 'lucide-react'
import TourPricingSection from "@/components/TourPricingSection"
import ContactCTA from '@/components/ContactCTA'

export default function SriLankaPage() {
  return (
    <main className="text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1612862862126-865765df2ded?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U3JpJTIwTGFua2F8ZW58MHx8MHx8fDA%3D"
            alt="Beautiful Sri Lanka with beaches and tea plantations"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/80 via-teal-800/60 to-cyan-900/80"></div>
        </div>

        <div className="relative h-full flex items-center justify-center text-center text-white px-6">
          <div className="max-w-4xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <WaveIcon className="w-6 h-6 text-cyan-400" />
              <span className="text-cyan-400 font-semibold tracking-wide">Pearl of the Indian Ocean</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Sri Lanka
              <span className="block text-3xl md:text-5xl mt-2 text-cyan-300">
                Colombo • Kandy • Bentota • Sigiriya
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Enjoy lush landscapes, wildlife safaris, and pristine beaches
              with ancient cities, tea plantations, and warm hospitality
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="bg-cyan-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-cyan-400 transition transform hover:scale-105">
                Explore Sri Lanka
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-teal-800 transition transform hover:scale-105">
                Book Island Journey
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">Discover the Teardrop Island</span>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PACKAGE PRICING ================= */}
      <div className="bg-gray-50 py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-20">

          {/* HEADER */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-cyan-700">
              Visit and Explore Sri Lanka
            </h1>
            <p className="text-lg text-gray-700">
              Colombo, Kandy, Bentota, Sigiriya, Tea Plantations with Bengal Tourism
            </p>
            <p className="text-gray-600">
              Special Tailor made Combination Package, Number of Days & Cost can be designed on Request.
            </p>
          </div>

          {/* MAIN CIRCUIT TITLE */}
          <SectionTitle
            title="SRI LANKA"
            subtitle="Pearl of the Indian Ocean With COLOMBO – KANDY – BENTOTA-"
          />

          {/* MAIN DAY WISE */}
          <div className=" grid  gap-10 grid-col-1">
            <DayCard title="Day – 1">
              Arrival in Colombo: Our representative will be there to receive you at Bandaranaike International Airport. Transfer to hotel in Colombo. Check-in and relax. Evening city tour of Colombo. Visit Independence Square and Galle Face Green. Dinner at local restaurant. Overnight stay at Colombo hotel.
            </DayCard>

            <DayCard title="Day – 2">
              Colombo - Kandy: After breakfast, proceed to Kandy. En route visit Pinnawala Elephant Orphanage. Continue to Kandy and check-in at hotel. Visit Temple of the Sacred Tooth Relic. Lunch en-route. Evening cultural show with traditional Kandyan dances. Dinner & Overnight stay at Kandy.
            </DayCard>

            <DayCard title="Day – 3">
              Kandy - Sigiriya: After breakfast, proceed to Sigiriya. Visit Sigiriya Rock Fortress (UNESCO World Heritage Site). Climb the rock for panoramic views. Lunch en-route. Evening visit Dambulla Cave Temple. Dinner & Overnight stay at Sigiriya/Habarana.
            </DayCard>

            <DayCard title="Day – 4">
              Sigiriya - Polonnaruwa: After breakfast, proceed to Polonnaruwa Ancient City. Visit ruins of ancient kingdom including Royal Palace and Gal Vihara. Lunch en-route. Evening jeep safari at Minneriya National Park (subject to season). Dinner & Overnight stay at Sigiriya.
            </DayCard>

            <DayCard title="Day – 5">
              Sigiriya - Nuwara Eliya: After breakfast, proceed to Nuwara Eliya via Ramboda Pass. Visit a tea plantation and tea factory. Lunch en-route. Check-in at hotel in Nuwara Eliya. Evening city tour of Little England. Dinner & Overnight stay at Nuwara Eliya.
            </DayCard>

            <DayCard title="Day – 6">
              Nuwara Eliya - Bentota: After breakfast, proceed to Bentota. En route visit Devon and St. Clair's waterfalls. Check-in at beach hotel in Bentota. Lunch at hotel. Evening relax at beach. Dinner & Overnight stay at Bentota.
            </DayCard>

            <DayCard title="Day – 7">
              Departure: After breakfast, check-out and transfer to Bandaranaike International Airport for onward journey with unforgettable memories of Sri Lanka. Tour Ends.
            </DayCard>
          </div>

          {/* ADD-ON SECTIONS */}
          <AddOnSection
            title="GALLE"
            subtitle="Add-on (or) Separately From BENTOTA"
          />
          <div className=" grid  gap-10 grid-col-1">
            <DayCard title="Day – 1  ">
              Bentota - Galle: After breakfast, proceed to Galle. Visit Galle Fort (UNESCO World Heritage Site). Explore Dutch Reformed Church and Maritime Museum. Lunch en-route. Evening relax at Unawatuna Beach. Dinner & Overnight stay at Galle.
            </DayCard>
            <DayCard title="Day –  2 ">
              Galle City Tour: After breakfast, visit Martin Wickramasinghe Folk Museum. Continue to Koggala for stilt fishermen watching. Lunch en-route. Evening visit Sea Turtle Hatchery. Dinner & Overnight stay at Galle.
            </DayCard>
            <DayCard title="Day – 3 ">
              Galle - Colombo: After breakfast, proceed to Colombo. En route visit Mask Museum in Ambalangoda. Lunch en-route. Evening free for last-minute shopping in Colombo. Dinner & Overnight stay at Colombo.
            </DayCard>
          </div>

        </div>
      </div>
        <TourPricingSection
     title="Sri Lanka Island Paradise Packages"
subtitle="Experience the Teardrop Island with curated journeys"
    
       packages={[
          { label: "recommended for extended duration", days: "6N / 7D", price: 22600 },
          { label: "highly recommended", days: "5N / 6D", price: 19000 },
          { label: "most popular", days: "4N / 5D", price: 15400 },
          { label: "Group 20+", days: "3N / 4D", price: 12700 },
          { label: "", days: "2N / 3D", price: 9100 },
          { label: "Not Feasible", days: "1N / 2D", price: 3700, disabled: true },
        ]}
    />

      <ContactCTA />
    </main>
  )
}

/* COMPONENTS */

function SectionTitle({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="flex flex-col space-y-2">
      <div className='flex  gap-5 items-center'>
      <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
       <a href='/book-tour' className='bg-red-500 px-4 py-4 text-white rounded-full'>
        Book now For 6N/7D
      </a>
      </div>
      <p className="font-semibold text-gray-700">{subtitle}</p>
     
    </div>
  )
}

function DayCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white shadow-xl rounded-3xl p-8 border-l-4 border-cyan-600">
      <h3 className="text-2xl font-semibold text-cyan-700 mb-4">{title}</h3>
      <p className="text-gray-700 leading-8 whitespace-pre-line">{children}</p>
    </div>
  )
}

function AddOnSection({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="flex flex-col  space-y-2">
      

           <div className='flex gap-5 items-center'> 
      <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
       <a href='/book-tour' className='bg-red-500 px-4 py-4 text-white rounded-full'>
        Book now For 2N/3D
      </a>
      
      </div>
     <p className="font-semibold text-gray-700">{subtitle}</p>
    </div>
  )
}
