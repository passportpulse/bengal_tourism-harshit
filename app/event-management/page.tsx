"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, Calendar, Users, Star, Clock, Check, Heart, Building, Briefcase, Film, GraduationCap, Phone, Mail, Award, Target, Handshake, Megaphone } from "lucide-react";

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
            src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
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

      {/* ================= SERVICE CATEGORIES ================= */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-6">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete event management solutions for all occasions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{category.title}</h3>
                <p className="text-gray-600">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PRICING ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-6">Service Packages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect package for your event
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicePackages.map((pkg, index) => (
              <div key={index} className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                pkg.recommended ? "ring-4 ring-purple-500 ring-offset-2" : ""
              }`}>
                {pkg.recommended && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      RECOMMENDED
                    </span>
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <p className="text-3xl font-bold text-purple-600 mb-6">{pkg.price}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-6 rounded-xl font-semibold transition ${
                    pkg.recommended
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }`}>
                    Get Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CLIENTS ================= */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-6">Our Valued Clients</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by leading corporations, educational institutions, and organizations
            </p>
          </div>

          {/* Corporate Clients */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <Building className="w-8 h-8 text-purple-600 mr-3" />
              Corporate & Business Clients
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {corporateClients.map((client, index) => (
                <div key={index} className="bg-white rounded-lg p-4 text-center shadow hover:shadow-lg transition-all">
                  <p className="font-semibold text-gray-800 text-sm">{client}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Educational Clients */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <GraduationCap className="w-8 h-8 text-green-600 mr-3" />
              Educational Institutions
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {educationalClients.map((client, index) => (
                <div key={index} className="bg-white rounded-lg p-4 text-center shadow hover:shadow-lg transition-all">
                  <p className="font-semibold text-gray-800 text-sm">{client}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Other Clients */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <Award className="w-8 h-8 text-orange-600 mr-3" />
              Healthcare, Media & Other Clients
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {otherClients.map((client, index) => (
                <div key={index} className="bg-white rounded-lg p-4 text-center shadow hover:shadow-lg transition-all">
                  <p className="font-semibold text-gray-800 text-sm">{client}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= INCLUDED SERVICES ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-6">All-Inclusive Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete event management with logistic, boarding, and more
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {includedServices.map((service, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white mr-4 flex-shrink-0">
                    <Check className="w-6 h-6" />
                  </div>
                  <span className="text-gray-800 font-semibold">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= EVENT TYPES ================= */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-6">Event Types We Manage</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From corporate conferences to film shoots, we handle it all
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Corporate Events</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Conferences & Seminars</li>
                <li>• Product Launches</li>
                <li>• Dealers Meet</li>
                <li>• Team Building</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                <Film className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Film Production</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Film Shoots</li>
                <li>• Location Management</li>
                <li>• Production Support</li>
                <li>• Equipment Rental</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl flex items-center justify-center mb-6">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Educational Events</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Study Tours</li>
                <li>• Excursions</li>
                <li>• College Events</li>
                <li>• School Trips</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-600 to-rose-600 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Social Events</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Get-togethers</li>
                <li>• Weddings</li>
                <li>• Parties</li>
                <li>• Cultural Events</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Special Events</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Marathons</li>
                <li>• Sports Events</li>
                <li>• Cultural Arts</li>
                <li>• Community Events</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <Megaphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Marketing Events</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Brand Activations</li>
                <li>• Product Demos</li>
                <li>• Road Shows</li>
                <li>• Promotional Events</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-white mb-6">Plan Your Next Event With Us</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-12">
            Let our experienced team handle every detail of your event
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="px-8 py-3 bg-white text-purple-600 font-bold rounded-xl hover:bg-gray-100 transition flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              Contact Us
            </a>
            <a href="/book-tour" className="px-8 py-3 bg-white text-purple-600 font-bold rounded-xl hover:bg-gray-100 transition flex items-center">
              <Mail className="w-5 h-5 mr-2" />
              Get Quote
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
