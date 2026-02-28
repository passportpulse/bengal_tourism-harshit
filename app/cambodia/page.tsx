"use client"

import Image from 'next/image'
import { MapPin, Calendar, Users, Star, Clock, Camera, Sun, Home, IndianRupee, Award, Compass, Utensils, Building, Trees, Ship, Sparkles, Train, ShoppingBag, Book, Mountain, Waves, Fish, Bird, Tent, Flame, PartyPopper, Heart, Sprout, Church } from 'lucide-react'
import TourPricingSection from "@/components/TourPricingSection"
import ContactCTA from '@/components/ContactCTA'

export default function CambodiaPage() {
  return (
    <main className="text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1599283787923-51b965a58b05?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2FtYm9kaWF8ZW58MHx8MHx8fDA%3D"
            alt="Beautiful Cambodia with Angkor Wat temple"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-orange-900/80 via-red-800/60 to-orange-900/80"></div>
        </div>

        <div className="relative h-full flex items-center justify-center text-center text-white px-6">
          <div className="max-w-4xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Church className="w-6 h-6 text-orange-400" />
              <span className="text-orange-400 font-semibold tracking-wide">Ancient Kingdom</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Cambodia
              <span className="block text-3xl md:text-5xl mt-2 text-orange-300">
                Siem Reap • Phnom Penh • Angkor Wat
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Discover ancient temples, rich history, and vibrant local culture
              with magnificent Angkor Wat and warm Khmer hospitality
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="bg-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-orange-400 transition transform hover:scale-105">
                Explore Cambodia
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-red-800 transition transform hover:scale-105">
                Book Ancient Journey
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">Discover the Kingdom of Wonder</span>
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
            <h1 className="text-4xl md:text-5xl font-bold text-orange-700">
              Visit and Explore Cambodia
            </h1>
            <p className="text-lg text-gray-700">
              Siem Reap, Phnom Penh, Angkor Wat, Temples with Bengal Tourism
            </p>
            <p className="text-gray-600">
              Special Tailor made Combination Package, Number of Days & Cost can be designed on Request.
            </p>
          </div>

          {/* MAIN CIRCUIT TITLE */}
          <SectionTitle
            title="CAMBODIA"
            subtitle="Ancient Kingdom With SIEM REAP – PHNOM PENH-"
          />

          {/* MAIN DAY WISE */}
          <div className=" grid  gap-10 grid-col-1">
            <DayCard title="Day – 1">
              Arrival in Siem Reap: Our representative will be there to receive you at Siem Reap International Airport. Transfer to hotel. Check-in and relax. Evening visit Pub Street and local markets. Dinner at local restaurant. Overnight stay at Siem Reap hotel.
            </DayCard>

            <DayCard title="Day – 2">
              Angkor Wat Sunrise: Early morning visit to Angkor Wat for spectacular sunrise. Return to hotel for breakfast. Continue to Angkor Thom City including Bayon Temple and Baphuon Temple. Lunch at local restaurant. Evening visit Ta Prohm Temple (Tomb Raider location). Dinner & Overnight stay at Siem Reap.
            </DayCard>

            <DayCard title="Day – 3">
              Banteay Srei & Grand Circuit: After breakfast, visit Banteay Srei Temple (Citadel of Women). Continue to Grand Circuit including Pre Rup, East Mebon, and Ta Som. Lunch en-route. Evening visit Phnom Bakheng for sunset views. Dinner & Overnight stay at Siem Reap.
            </DayCard>

            <DayCard title="Day – 4">
              Siem Reap - Phnom Penh: After breakfast, transfer to airport for flight to Phnom Penh. Check-in at hotel. Visit Royal Palace and Silver Pagoda. Lunch en-route. Evening visit Wat Phnom and Independence Monument. Dinner & Overnight stay at Phnom Penh.
            </DayCard>

            <DayCard title="Day – 5">
              Phnom Penh City Tour: After breakfast, visit Tuol Sleng Genocide Museum (S21) and Choeung Ek Killing Fields. Lunch en-route. Afternoon visit National Museum and Central Market. Evening sunset cruise on Mekong River. Dinner & Overnight stay at Phnom Penh.
            </DayCard>

            <DayCard title="Day – 6">
              Phnom Penh Exploration: After breakfast, visit Oudong Mountain (ancient capital). Continue to Silk Island for traditional silk weaving demonstration. Lunch en-route. Evening free for shopping at Russian Market. Dinner & Overnight stay at Phnom Penh.
            </DayCard>

            <DayCard title="Day – 7">
              Departure: After breakfast, check-out and transfer to Phnom Penh International Airport for onward journey with unforgettable memories of Cambodia. Tour Ends.
            </DayCard>
          </div>

          {/* ADD-ON SECTIONS */}
          <AddOnSection
            title="TONLE SAP LAKE"
            subtitle="Add-on (or) Separately From SIEM REAP"
          />
          <div className=" grid  gap-10 grid-col-1">
            <DayCard title="Day – 1  ">
              Siem Reap - Tonle Sap: After breakfast, proceed to Tonle Sap Lake (largest freshwater lake in Southeast Asia). Take boat trip to visit floating villages and Kompong Phluk. Lunch en-route. Evening return to Siem Reap. Dinner & Overnight stay at Siem Reap.
            </DayCard>
            <DayCard title="Day –  2 ">
              Kulen Mountain: After breakfast, visit Phnom Kulen National Park (sacred mountain). Visit Reclining Buddha, waterfall, and River of a Thousand Lingas. Lunch en-route. Evening visit local handicraft village. Dinner & Overnight stay at Siem Reap.
            </DayCard>
            <DayCard title="Day – 3 ">
              Beng Mealea & Koh Ker: After breakfast, visit Beng Mealea Temple (jungle temple). Continue to Koh Ker archaeological site with pyramid temple. Lunch en-route. Evening visit local market. Dinner & Overnight stay at Siem Reap.
            </DayCard>
          </div>

        </div>
      </div>
        <TourPricingSection
     title="Cambodia Ancient Kingdom Packages"
subtitle="Experience the Kingdom of Wonder with curated journeys"
    
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
    <div className="bg-white shadow-xl rounded-3xl p-8 border-l-4 border-orange-600">
      <h3 className="text-2xl font-semibold text-orange-700 mb-4">{title}</h3>
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
