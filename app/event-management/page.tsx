"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, Calendar, Users, Star, Clock, Check, Heart, Building, Briefcase, Film, GraduationCap, Phone, Mail, Award, Target, Handshake, Megaphone } from "lucide-react";
import ContactCTA from "@/components/ContactCTA";
import PackagePricing from "@/components/PackagePricing";

const serviceCategories = [
  {
    icon: Briefcase,
    title: "Corporate Events",
    description: "Conferences, Seminars, Product Launches, Dealers Meet",
    color: "from-blue-600 to-purple-600"
  },
  {
    icon: Film,
    title: "Film Production",
    description: "Film Shoots, Location Management, Production Support",
    color: "from-red-600 to-orange-600"
  },
  {
    icon: GraduationCap,
    title: "Educational Tours",
    description: "Study Tours, Excursions, College Events, School Trips",
    color: "from-green-600 to-teal-600"
  },
  {
    icon: Users,
    title: "Social Events",
    description: "Get-togethers, Weddings, Parties, Cultural Events",
    color: "from-pink-600 to-rose-600"
  }
];

const servicePackages = [
  {
    name: "Normal",
    price: "On Request",
    features: ["Basic event management", "Standard venues", "Essential services", "Basic catering"],
    recommended: false
  },
  {
    name: "Deluxe", 
    price: "On Request",
    features: ["Premium event management", "Better venues", "Enhanced services", "Gourmet catering", "Professional staff"],
    recommended: true
  },
  {
    name: "Luxury",
    price: "On Request", 
    features: ["VIP event management", "Luxury venues", "Full concierge", "Fine dining", "Expert team", "Personalized service"],
    recommended: false
  }
];

const corporateClients = [
  "AXIS Bank", "24 Ghonta", "Panacea", "Lupin", "Piramal Healthcare", "Sun Pharma", "Amul", 
  "Glaxo SmithKline", "Life Medical", "Ipca Laboratories", "Abbot", "USV Limited", 
  "Dr. Reddy's", "Himalaya", "Procter & Gamble", "Godrej", "Reliance Industries", "SAIL", 
  "State Bank of India", "TISCO", "Lemongrass", "Rolta", "ONGC", "NTPC", "Bridge & Roof", 
  "Birla Tyres", "Britannia", "Nestle", "Sahara", "Ener Vision", "National Insurance", 
  "Tata Tea", "Maruti", "Hyundai", "Tata Motors", "Anjali Jewellers", "Herbalife", "Amway", 
  "Hindusthan Lever", "Airtel", "Vodafone", "Samsung", "LG", "NOKIA"
];

const educationalClients = [
  "Heritage School", "Delhi Public School", "St. Xaviers' College", "Gokhale Memorial", 
  "La Martiniere", "Indo English School", "St. Pauls", "St. Thomas' School", 
  "Carmel School", "Shree Shikshayatan"
];

const otherClients = [
  "Balaji Films", "Tata Memorial Hospital", "Medica Superspeciality Hospital", 
  "Desun Hospital", "SBI", "HDFC Bank", "Indian Oil", "Essar", "HT", 
  "Times of India", "Toyota", "Yash Raj Films", "Academy of Cultural Arts", 
  "Kolkata Marathon"
];

const includedServices = [
  "Logistic Management",
  "Boarding & Lodging", 
  "All Meals",
  "Location Selection",
  "Picnic Arrangements",
  "Hostess & Escorts",
  "Transportation",
  "Security Services",
  "Technical Support",
  "Event Coordination"
];

export default function EventManagementPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showClientModal, setShowClientModal] = useState(false);

  const filteredClients = [
    ...corporateClients,
    ...educationalClients, 
    ...otherClients
  ];

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZXZlbnR8ZW58MHx8MHx8fDA%3D"
            alt="Event Management & Concierge"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-purple-900/40"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-6 py-3 mb-8">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white font-medium text-sm">Premium Services</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Event Management &
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent relative">
                Concierge Facility
                <svg className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-3/4 h-4" viewBox="0 0 300 16" fill="none">
                  <path d="M10 8 Q 75 4, 150 8 T 290 8" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#9333EA" />
                      <stop offset="50%" stopColor="#EC4899" />
                      <stop offset="100%" stopColor="#EF4444" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
              West Bengal, India with Bengal Tourism • Trusted by Leading Brands
            </p>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">100+</div>
                <div className="text-white/80 text-sm">Corporate Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">20+</div>
                <div className="text-white/80 text-sm">Educational Institutes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">15+</div>
                <div className="text-white/80 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
                <div className="text-white/80 text-sm">Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
          </div>
        </div>
      </section>
<div className="bg-gray-50 py-16 px-6 md:px-12 text-gray-800">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* HEADER */}
        <section className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-700">
            Event Management & Concierge Facility
          </h1>
          <p className="text-lg text-gray-600">
            in West Bengal, India with Bengal Tourism
          </p>

          <div className="bg-white shadow-md rounded-2xl inline-block px-8 py-4 mt-4">
            <p className="text-lg font-semibold">
              Prices / Day on Request
            </p>
            <p className="mt-2">
              • Normal &nbsp; • Deluxe &nbsp; • Luxury
            </p>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section className="bg-white rounded-3xl shadow-xl p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-semibold text-indigo-600 border-b-2 border-indigo-500 inline-block pb-2">
            Group Booking & Corporate Services
          </h2>

          <p className="leading-8">
            Contact us for any Group Booking for Film Shoots, Conference, Seminars,
            Get-togethers, Excursions, Study tours, Product launch, Getaway, etc.
            (all inclusive of Logistic + Boarding & Lodging + all Meals +
            Location selection + Picnic + Hostess & Escorts + Others).
          </p>

          <p className="leading-8">
            Our services are being retained by many Pvt. Entities, Corporate houses,
            School & Colleges, to manage their Events, Study tours, Excursions,
            Seminars, Conferences, Dealers meet, Product launches, etc.
          </p>
        </section>

        {/* CLIENTS SECTION */}
        <section className="bg-white rounded-3xl shadow-xl p-8 md:p-12 space-y-10">
          <h2 className="text-3xl font-semibold text-indigo-600 border-b-2 border-indigo-500 inline-block pb-2">
            Our Esteemed Clients
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center text-sm md:text-base font-medium">
            <div>AXIS Bank</div>
            <div>24 Ghonta</div>
            <div>Panacea</div>
            <div>Lupin</div>
            <div>Piramal Healthcare</div>
            <div>Sun Pharma</div>
            <div>Amul</div>
            <div>Glaxo SmithKline</div>
            <div>Life Medical</div>
            <div>Ipca Laboratories</div>
            <div>Abbot</div>
            <div>USV Limited</div>
            <div>Dr. Reddy’s</div>
            <div>Himalaya</div>
            <div>Procter & Gamble</div>
            <div>Godrej</div>
            <div>Reliance Industries</div>
            <div>SAIL</div>
            <div>State Bank of India</div>
            <div>TISCO</div>
            <div>Lemongrass</div>
            <div>Rolta</div>
            <div>ONGC</div>
            <div>NTPC</div>
            <div>Bridge & Roof</div>
            <div>Birla Tyres</div>
            <div>Britannia</div>
            <div>Nestle</div>
            <div>Sahara</div>
            <div>Ener Vision</div>
            <div>National Insurance</div>
            <div>Tata Tea</div>
            <div>Maruti</div>
            <div>Hyundai</div>
            <div>Tata Motors</div>
            <div>Anjali Jewellers</div>
            <div>Herbalife</div>
            <div>Amway</div>
            <div>Hindusthan Lever</div>
            <div>Airtel</div>
            <div>Vodafone</div>
            <div>Samsung</div>
            <div>LG</div>
            <div>NOKIA</div>
            <div>Heritage School</div>
            <div>Delhi Public School</div>
            <div>St. Xaviers’ College</div>
            <div>Gokhale Memorial</div>
            <div>La Martiniere</div>
            <div>Indo English School</div>
            <div>St. Pauls</div>
            <div>St. Thomas’ School</div>
            <div>Carmel School</div>
            <div>Shree Shikshayatan</div>
            <div>Balaji Films</div>
            <div>Tata Memorial Hospital</div>
            <div>Medica Superspeciality Hospital</div>
            <div>Desun Hospital</div>
            <div>SBI</div>
            <div>HDFC Bank</div>
            <div>Indian Oil</div>
            <div>Essar</div>
            <div>HT</div>
            <div>Times of India</div>
            <div>Toyota</div>
            <div>Yash Raj Films</div>
            <div>Academy of Cultural Arts</div>
            <div>Kolkata Marathon</div>
            <div>And more..</div>
          </div>
        </section>

      </div>
    </div>
      {/* ================= SERVICE CATEGORIES ================= */}
    
       <PackagePricing 
           title="Event Management Packages"
           subtitle="Choose your perfect event management duration"
         />
   <ContactCTA />
    </>
  );
}
