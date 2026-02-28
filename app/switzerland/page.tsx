"use client"

import Image from 'next/image'
import { MapPin, Calendar, Users, Star, Clock, Camera, Sun, Home, IndianRupee, Award, Compass, Utensils, Building, Trees, Ship, Sparkles, Train, ShoppingBag, Book, Mountain, Waves, Fish, Bird, Tent, Flame, PartyPopper, Heart, Sprout, Mountain as MountainIcon } from 'lucide-react'
import TourPricingSection from "@/components/TourPricingSection"
import ContactCTA from '@/components/ContactCTA'

export default function SwitzerlandPage() {
  return (
    <main className="text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1594069758873-e79e9075eb7d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3dpdHplcmxhbmR8ZW58MHx8MHx8fDA%3D"
            alt="Beautiful Switzerland with Alps and lakes"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/80 via-teal-800/60 to-emerald-900/80"></div>
        </div>

        <div className="relative h-full flex items-center justify-center text-center text-white px-6">
          <div className="max-w-4xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MountainIcon className="w-6 h-6 text-emerald-400" />
              <span className="text-emerald-400 font-semibold tracking-wide">Alpine Paradise</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Switzerland
              <span className="block text-3xl md:text-5xl mt-2 text-emerald-300">
                Zurich • Lucerne • Interlaken • Geneva
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Witness breathtaking Alpine scenery, serene lakes, and charming towns
              with snow-capped peaks, chocolate, and pristine nature
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="bg-emerald-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-emerald-400 transition transform hover:scale-105">
                Explore Switzerland
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-teal-800 transition transform hover:scale-105">
                Book Alpine Journey
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">Discover the Alpine Paradise</span>
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
            <h1 className="text-4xl md:text-5xl font-bold text-emerald-700">
              Visit and Explore Switzerland
            </h1>
            <p className="text-lg text-gray-700">
              Zurich, Lucerne, Interlaken, Geneva, Alps with Bengal Tourism
            </p>
            <p className="text-gray-600">
              Special Tailor made Combination Package, Number of Days & Cost can be designed on Request.
            </p>
          </div>

          {/* MAIN CIRCUIT TITLE */}
          <SectionTitle
            title="SWITZERLAND"
            subtitle="Alpine Paradise With ZURICH – LUCERNE – INTERLAKEN-"
          />

          {/* MAIN DAY WISE */}
          <div className=" grid  gap-10 grid-col-1">
            <DayCard title="Day – 1">
              Arrival in Zurich: Our representative will be there to receive you at Zurich Airport. Transfer to hotel. Check-in and relax. Evening walking tour of Old Town (Altstadt). Visit Lake Zurich and Grossmünster Church. Dinner at local restaurant. Overnight stay at Zurich hotel.
            </DayCard>

            <DayCard title="Day – 2">
              Zurich City Tour: After breakfast, proceed for full day Zurich city tour. Visit Swiss National Museum and Kunsthaus Zurich. Take Lake Zurich cruise. Lunch en-route. Evening visit Uetliberg Mountain for city views. Dinner & Overnight stay at Zurich.
            </DayCard>

            <DayCard title="Day – 3">
              Zurich - Lucerne: After breakfast, take train to Lucerne. Check-in at hotel. Visit Chapel Bridge (Kapellbrücke) and Lion Monument. Lunch en-route. Evening walk around Lake Lucerne. Dinner & Overnight stay at Lucerne.
            </DayCard>

            <DayCard title="Day – 4">
              Mount Titlis: After breakfast, full day excursion to Mount Titlis. Take rotating cable car to summit. Visit Ice Grotto and Glacier Park. Lunch at mountain restaurant. Evening return to Lucerne. Dinner & Overnight stay at Lucerne.
            </DayCard>

            <DayCard title="Day – 5">
              Lucerne - Interlaken: After breakfast, take scenic train to Interlaken. Check-in at hotel. Visit Höhematte Park and Lake Thun. Lunch en-route. Evening explore Interlaken town. Dinner & Overnight stay at Interlaken.
            </DayCard>

            <DayCard title="Day – 6">
              Jungfraujoch: After breakfast, full day excursion to Jungfraujoch (Top of Europe). Take cogwheel railway through Eiger and Mönch. Visit Ice Palace and Sphinx Observatory. Lunch at mountain restaurant. Evening return to Interlaken. Dinner & Overnight stay at Interlaken.
            </DayCard>

            <DayCard title="Day – 7">
              Departure: After breakfast, check-out and transfer to Zurich Airport for onward journey with unforgettable memories of Switzerland. Tour Ends.
            </DayCard>
          </div>

          {/* ADD-ON SECTIONS */}
          <AddOnSection
            title="GENEVA"
            subtitle="Add-on (or) Separately From INTERLAKEN"
          />
          <div className=" grid  gap-10 grid-col-1">
            <DayCard title="Day – 1  ">
              Interlaken - Geneva: After breakfast, take train to Geneva. Check-in at hotel. Visit Jet d'Eau and St. Pierre Cathedral. Lunch en-route. Evening walk around Lake Geneva. Dinner & Overnight stay at Geneva.
            </DayCard>
            <DayCard title="Day –  2 ">
              Geneva City Tour: After breakfast, visit United Nations Office and Red Cross Museum. Continue to Palais des Nations. Lunch en-route. Evening visit Carouge district. Dinner & Overnight stay at Geneva.
            </DayCard>
            <DayCard title="Day – 3 ">
              Montreux & Chillon: After breakfast, day trip to Montreux. Visit Chillon Castle and Freddie Mercury statue. Lunch en-route. Evening return to Geneva. Dinner & Overnight stay at Geneva.
            </DayCard>
          </div>

        </div>
      </div>
        <TourPricingSection
     title="Switzerland Alpine Paradise Packages"
subtitle="Experience the Alpine Paradise with curated journeys"
    
      packages={[
        { label: "recommended for extended duration", days: "6N / 7D", price: 65000 },
        { label: "highly recommended", days: "5N / 6D", price: 55000 },
        { label: "most popular", days: "4N / 5D", price: 45000 },
         { label: "Group 20+", days: "3N / 4D", price: 35000 },
        { label: "", days: "2N / 3D", price: 25000},
        { label: "Not Feasible", days: "1N / 2D", price: 12000, disabled: true },
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
    <div className="bg-white shadow-xl rounded-3xl p-8 border-l-4 border-emerald-600">
      <h3 className="text-2xl font-semibold text-emerald-700 mb-4">{title}</h3>
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
