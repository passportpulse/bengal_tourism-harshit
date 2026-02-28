"use client"

import Image from 'next/image'
import { MapPin, Calendar, Users, Star, Clock, Camera, Sun, Home, IndianRupee, Award, Compass, Utensils, Building, Trees, Ship, Sparkles, Train, ShoppingBag, Book, Mountain, Waves, Fish, Bird, Tent, Flame, PartyPopper, Heart, Sprout, Landmark } from 'lucide-react'
import TourPricingSection from "@/components/TourPricingSection"
import ContactCTA from '@/components/ContactCTA'

export default function ItalyPage() {
  return (
    <main className="text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1549893072-4bc678117f45?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEl0YWx5fGVufDB8fDB8fHww"
            alt="Beautiful Italy with Colosseum and Venice canals"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-yellow-900/80 via-green-800/60 to-yellow-900/80"></div>
        </div>

        <div className="relative h-full flex items-center justify-center text-center text-white px-6">
          <div className="max-w-4xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Landmark className="w-6 h-6 text-yellow-400" />
              <span className="text-yellow-400 font-semibold tracking-wide">Romantic Heritage</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Italy
              <span className="block text-3xl md:text-5xl mt-2 text-yellow-300">
                Rome • Venice • Florence • Milan
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Walk through ancient ruins, enjoy world-class cuisine, and explore romantic cities
              with Renaissance art, Mediterranean charm, and Italian passion
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="bg-yellow-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-yellow-500 transition transform hover:scale-105">
                Explore Italy
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-green-800 transition transform hover:scale-105">
                Book Romantic Journey
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">Discover the Land of Romance</span>
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
            <h1 className="text-4xl md:text-5xl font-bold text-yellow-700">
              Visit and Explore Italy
            </h1>
            <p className="text-lg text-gray-700">
              Rome, Venice, Florence, Milan, Vatican with Bengal Tourism
            </p>
            <p className="text-gray-600">
              Special Tailor made Combination Package, Number of Days & Cost can be designed on Request.
            </p>
          </div>

          {/* MAIN CIRCUIT TITLE */}
          <SectionTitle
            title="ITALY"
            subtitle="Romantic Heritage With ROME – VENICE – FLORENCE-"
          />

          {/* MAIN DAY WISE */}
          <div className=" grid  gap-10 grid-col-1">
            <DayCard title="Day – 1">
              Arrival in Rome: Our representative will be there to receive you at Fiumicino Airport. Transfer to hotel. Check-in and relax. Evening walking tour of Trastevere district. Dinner at local trattoria. Overnight stay at Rome hotel.
            </DayCard>

            <DayCard title="Day – 2">
              Ancient Rome Tour: After breakfast, visit Colosseum, Roman Forum, and Palatine Hill. Lunch en-route. Afternoon visit Pantheon and Piazza Navona. Evening Trevi Fountain and Spanish Steps. Dinner & Overnight stay at Rome.
            </DayCard>

            <DayCard title="Day – 3">
              Vatican City: After breakfast, full day Vatican tour. Visit St. Peter's Basilica, Vatican Museums, and Sistine Chapel. Lunch en-route. Evening explore Castel Sant'Angelo. Dinner & Overnight stay at Rome.
            </DayCard>

            <DayCard title="Day – 4">
              Rome - Florence: After breakfast, take high-speed train to Florence. Check-in at hotel. Visit Duomo (Cathedral) and Baptistery. Lunch en-route. Evening walk across Ponte Vecchio. Dinner & Overnight stay at Florence.
            </DayCard>

            <DayCard title="Day – 5">
              Florence Art Tour: After breakfast, visit Uffizi Gallery and Accademia Gallery (David). Continue to Pitti Palace and Boboli Gardens. Lunch en-route. Evening explore Oltrarno district. Dinner & Overnight stay at Florence.
            </DayCard>

            <DayCard title="Day – 6">
              Florence - Venice: After breakfast, take train to Venice. Check-in at hotel. Visit St. Mark's Square and Basilica. Lunch en-route. Evening gondola ride through canals. Dinner & Overnight stay at Venice.
            </DayCard>

            <DayCard title="Day – 7">
              Departure: After breakfast, visit Doge's Palace and Rialto Bridge. Transfer to Venice Marco Polo Airport for onward journey with unforgettable memories of Italy. Tour Ends.
            </DayCard>
          </div>

          {/* ADD-ON SECTIONS */}
          <AddOnSection
            title="MILAN"
            subtitle="Add-on (or) Separately From VENICE"
          />
          <div className=" grid  gap-10 grid-col-1">
            <DayCard title="Day – 1  ">
              Venice - Milan: After breakfast, take train to Milan. Check-in at hotel. Visit Duomo di Milano and Galleria Vittorio Emanuele II. Lunch en-route. Evening visit La Scala Opera House. Dinner & Overnight stay at Milan.
            </DayCard>
            <DayCard title="Day –  2 ">
              Milan & Lake Como: After breakfast, day trip to Lake Como. Visit Bellagio and take boat tour. Lunch en-route. Evening return to Milan. Visit Brera Art Gallery. Dinner & Overnight stay at Milan.
            </DayCard>
            <DayCard title="Day – 3 ">
              Milan Fashion District: After breakfast, visit Milan Fashion District (Quadrilatero della Moda). Continue to Sforza Castle. Lunch en-route. Evening shopping at Corso Buenos Aires. Dinner & Overnight stay at Milan.
            </DayCard>
          </div>

        </div>
      </div>
        <TourPricingSection
     title="Italy Romantic Heritage Packages"
subtitle="Experience the Land of Romance with curated journeys"
    
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
       <a href='/book-tour' className='bg-yellow-500 px-4 py-4 text-white rounded-full'>
        Book now For 6N/7D
      </a>
      </div>
      <p className="font-semibold text-gray-700">{subtitle}</p>
     
    </div>
  )
}

function DayCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white shadow-xl rounded-3xl p-8 border-l-4 border-yellow-600">
      <h3 className="text-2xl font-semibold text-yellow-700 mb-4">{title}</h3>
      <p className="text-gray-700 leading-8 whitespace-pre-line">{children}</p>
    </div>
  )
}

function AddOnSection({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="flex flex-col  space-y-2">
      

           <div className='flex gap-5 items-center'> 
      <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
       <a href='/book-tour' className='bg-yellow-500 px-4 py-4 text-white rounded-full'>
        Book now For 2N/3D
      </a>
      
      </div>
     <p className="font-semibold text-gray-700">{subtitle}</p>
    </div>
  )
}
