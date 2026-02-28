"use client"

import Image from 'next/image'
import { MapPin, Calendar, Users, Star, Clock, Camera, Sun, Home, IndianRupee, Award, Compass, Utensils, Building, Trees, Ship, Sparkles, Train, ShoppingBag, Book, Mountain, Waves, Fish, Bird, Tent, Flame, PartyPopper, Heart, Sprout, Sailboat } from 'lucide-react'
import TourPricingSection from "@/components/TourPricingSection"
import ContactCTA from '@/components/ContactCTA'

export default function AustraliaPage() {
  return (
    <main className="text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QXVzdHJhbGlhfGVufDB8fDB8fHww"
            alt="Beautiful Australia with Sydney Opera House and beaches"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-cyan-800/60 to-blue-900/80"></div>
        </div>

        <div className="relative h-full flex items-center justify-center text-center text-white px-6">
          <div className="max-w-4xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sailboat className="w-6 h-6 text-blue-400" />
              <span className="text-blue-400 font-semibold tracking-wide">Down Under Paradise</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Australia
              <span className="block text-3xl md:text-5xl mt-2 text-blue-300">
                Sydney • Melbourne • Gold Coast • Great Barrier Reef
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Discover stunning beaches, iconic landmarks, and vibrant cities across Australia
              with unique wildlife, natural wonders, and laid-back lifestyle
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="bg-blue-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-blue-400 transition transform hover:scale-105">
                Explore Australia
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-cyan-800 transition transform hover:scale-105">
                Book Australian Journey
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">Discover the Land Down Under</span>
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
            <h1 className="text-4xl md:text-5xl font-bold text-blue-700">
              Visit and Explore Australia
            </h1>
            <p className="text-lg text-gray-700">
              Sydney, Melbourne, Gold Coast, Great Barrier Reef with Bengal Tourism
            </p>
            <p className="text-gray-600">
              Special Tailor made Combination Package, Number of Days & Cost can be designed on Request.
            </p>
          </div>

          {/* MAIN CIRCUIT TITLE */}
          <SectionTitle
            title="AUSTRALIA"
            subtitle="Down Under Paradise With SYDNEY – MELBOURNE – GOLD COAST-"
          />

          {/* MAIN DAY WISE */}
          <div className=" grid  gap-10 grid-col-1">
            <DayCard title="Day – 1">
              Arrival in Sydney: Our representative will be there to receive you at Sydney Kingsford Smith Airport. Transfer to hotel. Check-in and relax. Evening visit Darling Harbour and Sydney Aquarium. Dinner at local restaurant. Overnight stay at Sydney hotel.
            </DayCard>

            <DayCard title="Day – 2">
              Sydney City Tour: After breakfast, proceed for full day Sydney city tour. Visit Sydney Opera House, Harbour Bridge, and Bondi Beach. Lunch en-route. Evening visit Royal Botanic Gardens. Dinner & Overnight stay at Sydney.
            </DayCard>

            <DayCard title="Day – 3">
              Blue Mountains: After breakfast, full day excursion to Blue Mountains. Visit Scenic World, Three Sisters, and Jenolan Caves. Lunch en-route. Evening return to Sydney. Dinner & Overnight stay at Sydney.
            </DayCard>

            <DayCard title="Day – 4">
              Sydney - Melbourne: After breakfast, take flight to Melbourne. Check-in at hotel. Visit Federation Square and Flinders Street Station. Lunch en-route. Evening explore Queen Victoria Market. Dinner & Overnight stay at Melbourne.
            </DayCard>

            <DayCard title="Day – 5">
              Melbourne City Tour: After breakfast, visit Melbourne Cricket Ground and Royal Botanic Gardens. Continue to St. Kilda Beach. Lunch en-route. Evening visit Crown Casino. Dinner & Overnight stay at Melbourne.
            </DayCard>

            <DayCard title="Day – 6">
              Melbourne - Gold Coast: After breakfast, take flight to Gold Coast. Check-in at hotel. Visit Surfers Paradise Beach. Lunch en-route. Evening explore Cavill Avenue. Dinner & Overnight stay at Gold Coast.
            </DayCard>

            <DayCard title="Day – 7">
              Departure: After breakfast, visit Sea World or Movie World. Transfer to Gold Coast Airport for onward journey with unforgettable memories of Australia. Tour Ends.
            </DayCard>
          </div>

          {/* ADD-ON SECTIONS */}
          <AddOnSection
            title="GREAT BARRIER REEF"
            subtitle="Add-on (or) Separately From GOLD COAST"
          />
          <div className=" grid  gap-10 grid-col-1">
            <DayCard title="Day – 1  ">
              Gold Coast - Cairns: After breakfast, take flight to Cairns. Check-in at hotel. Visit Cairns Esplanade and Night Markets. Lunch en-route. Evening relax at hotel pool. Dinner & Overnight stay at Cairns.
            </DayCard>
            <DayCard title="Day –  2 ">
              Great Barrier Reef: After breakfast, full day Great Barrier Reef cruise. Snorkeling and diving at reef. Lunch on boat. Evening return to Cairns. Dinner & Overnight stay at Cairns.
            </DayCard>
            <DayCard title="Day – 3 ">
              Kuranda Rainforest: After breakfast, visit Kuranda via Skyrail Rainforest Cableway. Explore Kuranda Village and Butterfly Sanctuary. Return via Scenic Railway. Lunch en-route. Evening return to Cairns. Dinner & Overnight stay at Cairns.
            </DayCard>
          </div>

        </div>
      </div>
        <TourPricingSection
     title="Australia Down Under Paradise Packages"
subtitle="Experience the Land Down Under with curated journeys"
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
    <div className="bg-white shadow-xl rounded-3xl p-8 border-l-4 border-blue-600">
      <h3 className="text-2xl font-semibold text-blue-700 mb-4">{title}</h3>
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
