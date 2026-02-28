"use client"

import Image from 'next/image'
import { MapPin, Calendar, Users, Star, Clock, Camera, Sun, Home, IndianRupee, Award, Compass, Utensils, Building, Trees, Ship, Sparkles, Train, ShoppingBag, Book, Mountain, Waves, Fish, Bird, Tent, Flame, PartyPopper, Heart, Sprout, TreePalm as PalmTree } from 'lucide-react'
import TourPricingSection from "@/components/TourPricingSection"
import ContactCTA from '@/components/ContactCTA'

export default function AfricaPage() {
  return (
    <main className="text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1731994634956-94a42f6b6290?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWZyaWNhLXdpbGRsaWZlfGVufDB8fDB8fHww"
            alt="Beautiful Africa with wildlife and savanna"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-green-900/80 via-yellow-800/60 to-green-900/80"></div>
        </div>

        <div className="relative h-full flex items-center justify-center text-center text-white px-6">
          <div className="max-w-4xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <PalmTree className="w-6 h-6 text-green-400" />
              <span className="text-green-400 font-semibold tracking-wide">Wildlife Paradise</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Africa Wildlife Adventures
              <span className="block text-3xl md:text-5xl mt-2 text-green-300">
                Kenya • Tanzania • South Africa • Safari
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Explore the vast savannas, witness the Big Five, and experience thrilling safari adventures
              with exotic wildlife, tribal cultures, and breathtaking landscapes
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-green-500 transition transform hover:scale-105">
                Explore Africa
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-yellow-800 transition transform hover:scale-105">
                Book Safari Journey
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">Discover the Wild Heart of Africa</span>
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
              Visit and Explore Africa
            </h1>
            <p className="text-lg text-gray-700">
              Kenya, Tanzania, South Africa, Safari, Wildlife with Bengal Tourism
            </p>
            <p className="text-gray-600">
              Special Tailor made Combination Package, Number of Days & Cost can be designed on Request.
            </p>
          </div>

          {/* MAIN CIRCUIT TITLE */}
          <SectionTitle
            title="AFRICA WILDLIFE ADVENTURES"
            subtitle="Wildlife Paradise With KENYA – TANZANIA – SOUTH AFRICA-"
          />

          {/* MAIN DAY WISE */}
          <div className=" grid  gap-10 grid-col-1">
            <DayCard title="Day – 1">
              Arrival in Nairobi: Our representative will be there to receive you at Jomo Kenyatta International Airport. Transfer to hotel. Check-in and relax. Evening visit Giraffe Centre and Karen Blixen Museum. Dinner at local restaurant. Overnight stay at Nairobi hotel.
            </DayCard>

            <DayCard title="Day – 2">
              Nairobi - Masai Mara: After breakfast, drive to Masai Mara Game Reserve. Check-in at lodge. Lunch at lodge. Afternoon game drive to spot Big Five. Evening return to lodge. Dinner & Overnight stay at Masai Mara.
            </DayCard>

            <DayCard title="Day – 3">
              Masai Mara Safari: Full day game drives in Masai Mara. Optional hot air balloon safari. Visit Maasai village. Lunch at lodge. Evening game drive. Dinner & Overnight stay at Masai Mara.
            </DayCard>

            <DayCard title="Day – 4">
              Masai Mara - Serengeti: After breakfast, drive to Serengeti National Park (Tanzania). Cross border at Isebania. Check-in at lodge. Lunch en-route. Evening game drive. Dinner & Overnight stay at Serengeti.
            </DayCard>

            <DayCard title="Day – 5">
              Serengeti Safari: Full day game drives in Serengeti. Witness Great Migration (seasonal). Visit Ngorongoro Crater rim. Lunch at lodge. Evening game drive. Dinner & Overnight stay at Serengeti.
            </DayCard>

            <DayCard title="Day – 6">
              Serengeti - Cape Town: After breakfast, transfer to airport for flight to Cape Town. Check-in at hotel. Visit V&A Waterfront. Lunch en-route. Evening Table Mountain cable car. Dinner & Overnight stay at Cape Town.
            </DayCard>

            <DayCard title="Day – 7">
              Departure: After breakfast, Cape Peninsula tour including Cape of Good Hope and Boulders Beach (penguin colony). Transfer to Cape Town International Airport for onward journey with unforgettable memories of Africa. Tour Ends.
            </DayCard>
          </div>

          {/* ADD-ON SECTIONS */}
          <AddOnSection
            title="VICTORIA FALLS"
            subtitle="Add-on (or) Separately From CAPE TOWN"
          />
          <div className=" grid  gap-10 grid-col-1">
            <DayCard title="Day – 1  ">
              Cape Town - Victoria Falls: After breakfast, fly to Victoria Falls (Zimbabwe/Zambia). Check-in at hotel. Visit Victoria Falls Bridge. Lunch en-route. Evening sunset cruise on Zambezi River. Dinner & Overnight stay at Victoria Falls.
            </DayCard>
            <DayCard title="Day –  2 ">
              Victoria Falls Tour: After breakfast, guided tour of Victoria Falls. Visit Devil's Pool (seasonal). Lunch en-route. Evening cultural show. Dinner & Overnight stay at Victoria Falls.
            </DayCard>
            <DayCard title="Day – 3 ">
              Chobe National Park: After breakfast, day trip to Chobe National Park (Botswana). Game drive and boat safari. Lunch en-route. Evening return to Victoria Falls. Dinner & Overnight stay at Victoria Falls.
            </DayCard>
          </div>

        </div>
      </div>
        <TourPricingSection
     title="Africa Wildlife Adventure Packages"
subtitle="Experience the Wild Heart of Africa with curated journeys"
    
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
