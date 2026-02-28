"use client"

import Image from 'next/image'
import { MapPin, Calendar, Users, Star, Clock, Camera, Sun, Home, IndianRupee, Award, Compass, Utensils, Building, Trees, Ship, Sparkles, Train, ShoppingBag, Book, Mountain, Waves, Fish, Bird, Tent, Flame, PartyPopper, Heart, Sprout, CarFront } from 'lucide-react'
import TourPricingSection from "@/components/TourPricingSection"
import ContactCTA from '@/components/ContactCTA'

export default function JapanPage() {
  return (
    <main className="text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8SmFwYW58ZW58MHx8MHx8fDA%3D"
            alt="Beautiful Japan with cherry blossoms and traditional temples"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-pink-900/80 via-purple-800/60 to-pink-900/80"></div>
        </div>

        <div className="relative h-full flex items-center justify-center text-center text-white px-6">
          <div className="max-w-4xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <CarFront className="w-6 h-6 text-pink-400" />
              <span className="text-pink-400 font-semibold tracking-wide">Tradition Meets Future</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Japan
              <span className="block text-3xl md:text-5xl mt-2 text-pink-300">
                Tokyo • Kyoto • Osaka • Mount Fuji
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Experience the perfect blend of ancient traditions and cutting-edge technology
              with cherry blossoms, temples, and vibrant cities
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="bg-pink-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-pink-400 transition transform hover:scale-105">
                Explore Japan
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-pink-800 transition transform hover:scale-105">
                Book Japanese Journey
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">Discover the Land of Rising Sun</span>
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
            <h1 className="text-4xl md:text-5xl font-bold text-pink-700">
              Visit and Explore Japan
            </h1>
            <p className="text-lg text-gray-700">
              Tokyo, Kyoto, Osaka, Mount Fuji, Cherry Blossoms with Bengal Tourism
            </p>
            <p className="text-gray-600">
              Special Tailor made Combination Package, Number of Days & Cost can be designed on Request.
            </p>
          </div>

          {/* MAIN CIRCUIT TITLE */}
          <SectionTitle
            title="JAPAN"
            subtitle="Land of the Rising Sun With TOKYO – KYOTO – OSAKA-"
          />

          {/* MAIN DAY WISE */}
          <div className=" grid  gap-10 grid-col-1">
            <DayCard title="Day – 1">
              Arrival in Tokyo: Our representative will be there to receive you at Narita/Haneda Airport. Transfer to hotel in Tokyo. Check-in and relax. Evening free for leisure. Dinner at local restaurant. Overnight stay at Tokyo hotel.
            </DayCard>

            <DayCard title="Day – 2">
              Tokyo City Tour: After breakfast, proceed for full day Tokyo city tour. Visit Tokyo Tower, Imperial Palace, Asakusa Kannon Temple, and Nakamise Shopping Street. Lunch at local restaurant. Evening visit Shibuya Crossing and Harajuku district. Dinner & Overnight stay at Tokyo.
            </DayCard>

            <DayCard title="Day – 3">
              Tokyo - Mount Fuji - Hakone: After breakfast, proceed to Mount Fuji 5th Station (subject to weather conditions). Visit Fuji Visitor Center. Continue to Hakone for Lake Ashi cruise and Mount Komagatake Ropeway. Lunch en-route. Return to Tokyo in evening. Dinner & Overnight stay at Tokyo.
            </DayCard>

            <DayCard title="Day – 4">
              Tokyo - Kyoto: After breakfast, take Shinkansen (bullet train) to Kyoto. Check-in at Kyoto hotel. Visit Kinkaku-ji Temple (Golden Pavilion), Ryoan-ji Temple (Zen garden), and Kiyomizu-dera Temple. Lunch en-route. Evening explore Gion district. Dinner & Overnight stay at Kyoto.
            </DayCard>

            <DayCard title="Day – 5">
              Kyoto Sightseeing: After breakfast, visit Fushimi Inari Shrine with thousands of torii gates. Continue to Nara to visit Todai-ji Temple and Nara Park with deer. Lunch en-route. Return to Kyoto. Evening free for shopping. Dinner & Overnight stay at Kyoto.
            </DayCard>

            <DayCard title="Day – 6">
              Kyoto - Osaka: After breakfast, transfer to Osaka. Visit Osaka Castle and Shitenno-ji Temple. Explore Dotonbori area for shopping and entertainment. Lunch en-route. Evening visit Umeda Sky Building. Dinner & Overnight stay at Osaka.
            </DayCard>

            <DayCard title="Day – 7">
              Departure: After breakfast, check-out and transfer to Kansai International Airport for onward journey with unforgettable memories of Japan. Tour Ends.
            </DayCard>
          </div>

          {/* ADD-ON SECTIONS */}
          <AddOnSection
            title="HIROSHIMA"
            subtitle="Add-on (or) Separately From OSAKA"
          />
          <div className=" grid  gap-10 grid-col-1">
            <DayCard title="Day – 1  ">
              Osaka - Hiroshima: After breakfast, take Shinkansen to Hiroshima. Visit Peace Memorial Park, Atomic Bomb Dome, and Peace Memorial Museum. Lunch en-route. Check-in at Hiroshima hotel. Evening free. Dinner & Overnight stay at Hiroshima.
            </DayCard>
            <DayCard title="Day –  2 ">
              Hiroshima - Miyajima: After breakfast, take ferry to Miyajima Island. Visit Itsukushima Shrine with floating torii gate. Mount Misen cable car ride for panoramic views. Lunch en-route. Return to Hiroshima. Dinner & Overnight stay at Hiroshima.
            </DayCard>
            <DayCard title="Day – 3 ">
              Hiroshima - Osaka: After breakfast, visit Hiroshima Castle and Shukkeien Garden. Take Shinkansen back to Osaka. Lunch en-route. Evening free for last-minute shopping. Dinner & Overnight stay at Osaka.
            </DayCard>
          </div>

        </div>
      </div>
        <TourPricingSection
     title="Japan Culture & Technology Packages"
subtitle="Experience the Land of the Rising Sun with curated journeys"
    
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
    <div className="bg-white shadow-xl rounded-3xl p-8 border-l-4 border-pink-600">
      <h3 className="text-2xl font-semibold text-pink-700 mb-4">{title}</h3>
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
