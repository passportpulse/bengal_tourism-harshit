"use client"

import Image from 'next/image'
import { MapPin, Calendar, Users, Star, Clock, Camera, Sun, Home, IndianRupee, Award, Compass, Utensils, Building, Trees, Ship, Sparkles, Train, ShoppingBag, Book, Mountain, Waves, Fish, Bird, Tent, Flame, PartyPopper, Heart, Sprout, TreePalm } from 'lucide-react'
import TourPricingSection from "@/components/TourPricingSection"
import ContactCTA from '@/components/ContactCTA'

export default function IndonesiaPage() {
  return (
    <main className="text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1501179691627-eeaa65ea017c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8SW5kb25lc2lhfGVufDB8fDB8fHww"
            alt="Beautiful Indonesia with tropical beaches and temples"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-yellow-900/80 via-green-800/60 to-yellow-900/80"></div>
        </div>

        <div className="relative h-full flex items-center justify-center text-center text-white px-6">
          <div className="max-w-4xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <TreePalm className="w-6 h-6 text-yellow-400" />
              <span className="text-yellow-400 font-semibold tracking-wide">Island Paradise</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Indonesia
              <span className="block text-3xl md:text-5xl mt-2 text-yellow-300">
                Bali • Jakarta • Lombok • Yogyakarta
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Experience tropical islands, vibrant culture, and breathtaking landscapes
              with pristine beaches, ancient temples, and warm hospitality
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-yellow-400 transition transform hover:scale-105">
                Explore Indonesia
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-green-800 transition transform hover:scale-105">
                Book Island Journey
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">Discover the Emerald Archipelago</span>
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
            <h1 className="text-4xl md:text-5xl font-bold text-green-700">
              Visit and Explore Indonesia
            </h1>
            <p className="text-lg text-gray-700">
              Bali, Jakarta, Lombok, Yogyakarta, Temples with Bengal Tourism
            </p>
            <p className="text-gray-600">
              Special Tailor made Combination Package, Number of Days & Cost can be designed on Request.
            </p>
          </div>

          {/* MAIN CIRCUIT TITLE */}
          <SectionTitle
            title="INDONESIA"
            subtitle="Island Paradise With BALI – JAKARTA – LOMBOK-"
          />

          {/* MAIN DAY WISE */}
          <div className=" grid  gap-10 grid-col-1">
            <DayCard title="Day – 1">
              Arrival in Bali: Our representative will be there to receive you at Ngurah Rai International Airport, Denpasar. Transfer to hotel in Kuta/Seminyak. Check-in and relax. Evening visit Tanah Lot Temple for sunset. Dinner at local restaurant. Overnight stay at Bali hotel.
            </DayCard>

            <DayCard title="Day – 2">
              Bali Cultural Tour: After breakfast, proceed for full day Bali cultural tour. Visit Tirta Empul Temple, Tegallalang Rice Terraces, and Ubud Art Market. Lunch at local restaurant. Evening visit Uluwatu Temple for Kecak Fire Dance performance. Dinner & Overnight stay at Bali.
            </DayCard>

            <DayCard title="Day – 3">
              Bali Beach Day: After breakfast, enjoy water sports at Tanjung Benoa. Visit Nusa Dua Beach for relaxation. Lunch at beachfront restaurant. Evening explore Seminyak area and enjoy sunset at Double Six Beach. Dinner & Overnight stay at Bali.
            </DayCard>

            <DayCard title="Day – 4">
              Bali - Jakarta: After breakfast, transfer to airport for flight to Jakarta. Check-in at Jakarta hotel. Visit National Monument (Monas) and Istiqlal Mosque. Lunch en-route. Evening explore Jakarta Old Town (Kota Tua). Dinner & Overnight stay at Jakarta.
            </DayCard>

            <DayCard title="Day – 5">
              Jakarta City Tour: After breakfast, visit Taman Mini Indonesia Indah (Beautiful Indonesia Miniature Park). Continue to Ancol Dreamland and Sea World. Lunch en-route. Evening shopping at Grand Indonesia Mall. Dinner & Overnight stay at Jakarta.
            </DayCard>

            <DayCard title="Day – 6">
              Jakarta - Lombok: After breakfast, transfer to airport for flight to Lombok. Check-in at Senggigi hotel. Visit Senggigi Beach and Nipah Beach for sunset. Lunch en-route. Evening free for leisure. Dinner & Overnight stay at Lombok.
            </DayCard>

            <DayCard title="Day – 7">
              Departure: After breakfast, check-out and transfer to Lombok International Airport for onward journey with unforgettable memories of Indonesia. Tour Ends.
            </DayCard>
          </div>

          {/* ADD-ON SECTIONS */}
          <AddOnSection
            title="YOGYAKARTA"
            subtitle="Add-on (or) Separately From JAKARTA"
          />
          <div className=" grid  gap-10 grid-col-1">
            <DayCard title="Day – 1  ">
              Jakarta - Yogyakarta: After breakfast, take morning flight to Yogyakarta. Check-in at hotel. Visit Borobudur Temple (UNESCO World Heritage Site). Lunch en-route. Evening visit Prambanan Temple. Dinner & Overnight stay at Yogyakarta.
            </DayCard>
            <DayCard title="Day –  2 ">
              Yogyakarta City Tour: After breakfast, visit Sultan's Palace (Kraton) and Water Castle. Continue to Kota Gede (silver village). Lunch en-route. Evening shopping at Malioboro Street. Dinner & Overnight stay at Yogyakarta.
            </DayCard>
            <DayCard title="Day – 3 ">
              Yogyakarta - Jakarta: After breakfast, visit Mount Merapi viewpoint. Transfer to airport for flight back to Jakarta. Lunch en-route. Evening free for last-minute shopping. Dinner & Overnight stay at Jakarta.
            </DayCard>
          </div>

        </div>
      </div>
        <TourPricingSection
     title="Indonesia Island Paradise Packages"
subtitle="Experience the Emerald Archipelago with curated journeys"
    
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
    <div className="bg-white shadow-xl rounded-3xl p-8 border-l-4 border-green-600">
      <h3 className="text-2xl font-semibold text-green-700 mb-4">{title}</h3>
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
