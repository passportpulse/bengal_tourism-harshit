"use client"

import Image from 'next/image'
import { MapPin, Calendar, Users, Star, Clock, Camera, Sun, Home, IndianRupee, Award, Compass, Utensils, Building, Trees, Ship, Sparkles, Train, ShoppingBag, Book, Mountain, Waves, Fish, Bird, Tent, Flame, PartyPopper, Heart, Sprout, Castle } from 'lucide-react'
import TourPricingSection from "@/components/TourPricingSection"
import ContactCTA from '@/components/ContactCTA'

export default function GermanyPage() {
  return (
    <main className="text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1601589313026-80a82ae92920?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fEdlcm1hbnl8ZW58MHx8MHx8fDA%3D"
            alt="Beautiful Germany with castles and cities"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-slate-800/60 to-gray-900/80"></div>
        </div>

        <div className="relative h-full flex items-center justify-center text-center text-white px-6">
          <div className="max-w-4xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Castle className="w-6 h-6 text-gray-400" />
              <span className="text-gray-400 font-semibold tracking-wide">European Heritage</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Germany
              <span className="block text-3xl md:text-5xl mt-2 text-gray-300">
                Berlin • Munich • Frankfurt • Heidelberg
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Experience fairy-tale castles, vibrant cities, and rich European heritage
              with modern culture, historic landmarks, and Bavarian traditions
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="bg-gray-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-gray-600 transition transform hover:scale-105">
                Explore Germany
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-slate-800 transition transform hover:scale-105">
                Book European Journey
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">Discover the Heart of Europe</span>
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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-700">
              Visit and Explore Germany
            </h1>
            <p className="text-lg text-gray-700">
              Berlin, Munich, Frankfurt, Heidelberg, Castles with Bengal Tourism
            </p>
            <p className="text-gray-600">
              Special Tailor made Combination Package, Number of Days & Cost can be designed on Request.
            </p>
          </div>

          {/* MAIN CIRCUIT TITLE */}
          <SectionTitle
            title="GERMANY"
            subtitle="European Heritage With BERLIN – MUNICH – FRANKFURT-"
          />

          {/* MAIN DAY WISE */}
          <div className=" grid  gap-10 grid-col-1">
            <DayCard title="Day – 1">
              Arrival in Berlin: Our representative will be there to receive you at Berlin Brandenburg Airport. Transfer to hotel. Check-in and relax. Evening visit Brandenburg Gate and Reichstag Building. Dinner at local restaurant. Overnight stay at Berlin hotel.
            </DayCard>

            <DayCard title="Day – 2">
              Berlin City Tour: After breakfast, proceed for full day Berlin city tour. Visit Berlin Wall Memorial, Checkpoint Charlie, and Museum Island. Lunch en-route. Evening visit Potsdamer Platz. Dinner & Overnight stay at Berlin.
            </DayCard>

            <DayCard title="Day – 3">
              Berlin - Munich: After breakfast, take flight to Munich. Check-in at hotel. Visit Marienplatz and New Town Hall. Lunch en-route. Evening visit Hofbräuhaus for Bavarian experience. Dinner & Overnight stay at Munich.
            </DayCard>

            <DayCard title="Day – 4">
              Munich & Neuschwanstein: After breakfast, day trip to Neuschwanstein Castle (fairy-tale castle). Visit Hohenschwangau Castle. Lunch en-route. Evening return to Munich. Visit English Garden. Dinner & Overnight stay at Munich.
            </DayCard>

            <DayCard title="Day – 5">
              Munich - Frankfurt: After breakfast, take train to Frankfurt. Check-in at hotel. Visit Römerberg (Old Town) and St. Bartholomew's Cathedral. Lunch en-route. Evening explore Zeil shopping street. Dinner & Overnight stay at Frankfurt.
            </DayCard>

            <DayCard title="Day – 6">
              Heidelberg Day Trip: After breakfast, full day excursion to Heidelberg. Visit Heidelberg Castle and Old Bridge. Explore University Town. Lunch en-route. Evening return to Frankfurt. Farewell dinner. Overnight stay at Frankfurt.
            </DayCard>

            <DayCard title="Day – 7">
              Departure: After breakfast, check-out and transfer to Frankfurt Airport for onward journey with unforgettable memories of Germany. Tour Ends.
            </DayCard>
          </div>

          {/* ADD-ON SECTIONS */}
          <AddOnSection
            title="RHINE VALLEY"
            subtitle="Add-on (or) Separately From FRANKFURT"
          />
          <div className=" grid  gap-10 grid-col-1">
            <DayCard title="Day – 1  ">
              Frankfurt - Rhine Valley: After breakfast, day trip to Rhine Valley. Take Rhine River cruise passing castles. Visit Lorelei Rock. Lunch en-route. Evening return to Frankfurt. Dinner & Overnight stay at Frankfurt.
            </DayCard>
            <DayCard title="Day –  2 ">
              Cologne & Bonn: After breakfast, day trip to Cologne. Visit Cologne Cathedral and Chocolate Museum. Continue to Bonn (former capital). Lunch en-route. Evening return to Frankfurt. Dinner & Overnight stay at Frankfurt.
            </DayCard>
            <DayCard title="Day – 3 ">
              Stuttgart & Black Forest: After breakfast, day trip to Stuttgart. Visit Mercedes-Benz Museum. Continue to Black Forest region. Lunch en-route. Evening return to Frankfurt. Farewell dinner. Overnight stay at Frankfurt.
            </DayCard>
          </div>

        </div>
      </div>
        <TourPricingSection
     title="Germany European Heritage Packages"
subtitle="Experience the Heart of Europe with curated journeys"
    
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
    <div className="bg-white shadow-xl rounded-3xl p-8 border-l-4 border-gray-600">
      <h3 className="text-2xl font-semibold text-gray-700 mb-4">{title}</h3>
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
