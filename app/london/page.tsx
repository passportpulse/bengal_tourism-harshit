"use client"

import Image from 'next/image'
import { MapPin, Calendar, Users, Star, Clock, Camera, Sun, Home, IndianRupee, Award, Compass, Utensils, Building, Trees, Ship, Sparkles, Train, ShoppingBag, Book, Mountain, Waves, Fish, Bird, Tent, Flame, PartyPopper, Heart, Sprout, Crown } from 'lucide-react'
import TourPricingSection from "@/components/TourPricingSection"
import ContactCTA from '@/components/ContactCTA'

export default function LondonPage() {
  return (
    <main className="text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bG9uZG9ufGVufDB8fDB8fHww"
            alt="Beautiful London with Tower Bridge and city skyline"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/80 via-blue-800/60 to-purple-900/80"></div>
        </div>

        <div className="relative h-full flex items-center justify-center text-center text-white px-6">
          <div className="max-w-4xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Crown className="w-6 h-6 text-purple-400" />
              <span className="text-purple-400 font-semibold tracking-wide">Royal Capital</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              London
              <span className="block text-3xl md:text-5xl mt-2 text-purple-300">
                London • Windsor • Oxford • Stonehenge
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Explore royal palaces, iconic landmarks, and vibrant city life
              with rich history, world-class museums, and British culture
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="bg-purple-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-purple-400 transition transform hover:scale-105">
                Explore London
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-800 transition transform hover:scale-105">
                Book Royal Journey
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">Discover the Royal City</span>
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
            <h1 className="text-4xl md:text-5xl font-bold text-purple-700">
              Visit and Explore London
            </h1>
            <p className="text-lg text-gray-700">
              London, Windsor, Oxford, Stonehenge, Museums with Bengal Tourism
            </p>
            <p className="text-gray-600">
              Special Tailor made Combination Package, Number of Days & Cost can be designed on Request.
            </p>
          </div>

          {/* MAIN CIRCUIT TITLE */}
          <SectionTitle
            title="LONDON"
            subtitle="Royal Capital With LONDON – WINDSOR – OXFORD-"
          />

          {/* MAIN DAY WISE */}
          <div className=" grid  gap-10 grid-col-1">
            <DayCard title="Day – 1">
              Arrival in London: Our representative will be there to receive you at Heathrow/Gatwick Airport. Transfer to hotel. Check-in and relax. Evening visit Leicester Square and Covent Garden. Dinner at local restaurant. Overnight stay at London hotel.
            </DayCard>

            <DayCard title="Day – 2">
              London City Tour: After breakfast, proceed for full day London city tour. Visit Tower of London, Tower Bridge, and St. Paul's Cathedral. Lunch en-route. Evening visit London Eye for panoramic city views. Dinner & Overnight stay at London.
            </DayCard>

            <DayCard title="Day – 3">
              Royal London: After breakfast, visit Buckingham Palace (Changing of Guard), Westminster Abbey, and Houses of Parliament. Lunch en-route. Afternoon visit British Museum. Evening show in West End. Dinner & Overnight stay at London.
            </DayCard>

            <DayCard title="Day – 4">
              Windsor Castle: After breakfast, day trip to Windsor. Visit Windsor Castle (Queen's residence) and St. George's Chapel. Lunch in Windsor. Continue to Eton College. Evening return to London. Dinner & Overnight stay at London.
            </DayCard>

            <DayCard title="Day – 5">
              Oxford & Stonehenge: After breakfast, full day excursion to Oxford and Stonehenge. Visit Stonehenge first, then proceed to Oxford. Visit Oxford University and Christ Church College. Lunch en-route. Evening return to London. Dinner & Overnight stay at London.
            </DayCard>

            <DayCard title="Day – 6">
              Museums & Shopping: After breakfast, visit Natural History Museum and Victoria & Albert Museum. Lunch en-route. Evening shopping at Oxford Street and Regent Street. Farewell dinner. Overnight stay at London.
            </DayCard>

            <DayCard title="Day – 7">
              Departure: After breakfast, check-out and transfer to Heathrow/Gatwick Airport for onward journey with unforgettable memories of London. Tour Ends.
            </DayCard>
          </div>

          {/* ADD-ON SECTIONS */}
          <AddOnSection
            title="CAMBRIDGE"
            subtitle="Add-on (or) Separately From LONDON"
          />
          <div className=" grid  gap-10 grid-col-1">
            <DayCard title="Day – 1  ">
              London - Cambridge: After breakfast, day trip to Cambridge. Visit King's College Chapel and Cambridge University. Take punting on River Cam. Lunch en-route. Explore Mathematical Bridge and Trinity College. Evening return to London. Dinner & Overnight stay at London.
            </DayCard>
            <DayCard title="Day –  2 ">
              Bath & Cotswolds: After breakfast, visit Bath city (UNESCO World Heritage). Visit Roman Baths and Bath Abbey. Continue to Cotswolds villages. Lunch en-route. Evening return to London. Dinner & Overnight stay at London.
            </DayCard>
            <DayCard title="Day – 3 ">
              Canterbury & Leeds Castle: After breakfast, visit Canterbury Cathedral. Continue to Leeds Castle. Lunch en-route. Evening return to London. Farewell dinner. Overnight stay at London.
            </DayCard>
          </div>

        </div>
      </div>
        <TourPricingSection
     title="London Royal Capital Packages"
subtitle="Experience the Royal City with curated journeys"
    
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
    <div className="bg-white shadow-xl rounded-3xl p-8 border-l-4 border-purple-600">
      <h3 className="text-2xl font-semibold text-purple-700 mb-4">{title}</h3>
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
