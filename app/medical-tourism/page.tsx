"use client"

import Image from 'next/image'
import { MapPin, Calendar, Users, Star, Clock, Camera, Sun, Home, DollarSign, Award, Compass, Utensils, Building, Trees, Ship, Sparkles, Train, ShoppingBag, Book, Mountain, Waves, Fish, Bird, Tent, Flame, PartyPopper, Heart, Sprout, Coffee, Leaf, TreePine, Stethoscope, HeartPulse, Shield, Globe, Phone, Mail, CheckCircle, AlertCircle, Activity, Brain, Bone, Eye, User } from 'lucide-react'

export default function MedicalTourismPage() {
  return (
    <main className="text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1745420052490-285dbfa1cf4d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVkaWNhbCUyMHRvdXJpc218ZW58MHx8MHx8fDA%3D"
            alt="Modern hospital facility with medical professionals"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-cyan-800/60 to-blue-900/80"></div>
        </div>

        <div className="relative h-full flex items-center justify-center text-white px-6">
          <div className="max-w-4xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Stethoscope className="w-6 h-6 text-yellow-400" />
              <span className="text-yellow-400 font-semibold tracking-wide">MEDICAL TOURISM</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl text-center font-bold mb-6 leading-tight">
              Get Well Soon in Bengal
              <span className="block text-3xl md:text-5xl mt-2 text-blue-300">
                World-Class Healthcare • Expert Doctors • Affordable Treatment
              </span>
            </h1>

            <p className="text-xl text-center md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Experience world-class medical treatment with expert practitioners 
              and international standard facilities in West Bengal
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-yellow-400 transition transform hover:scale-105">
                Find Hospitals
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-800 transition transform hover:scale-105">
                Book Consultation
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">Discover Quality Healthcare</span>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MEDICAL TOURISM OVERVIEW ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Medical Tourism in Bengal?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fast emerging as a Medical Tourism hotspot with world-class facilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Cost Advantage */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 text-center hover:shadow-xl transition">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Reduced Cost</h3>
              <p className="text-gray-700">
                Treatment costs start at around a tenth of the price of comparable treatment in America or Britain
              </p>
            </div>

            {/* International Standards */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 text-center hover:shadow-xl transition">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">International Standards</h3>
              <p className="text-gray-700">
                Latest international standard medical technologies and treatment facilities
              </p>
            </div>

            {/* Expert Doctors */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 text-center hover:shadow-xl transition">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <HeartPulse className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Practitioners</h3>
              <p className="text-gray-700">
                Highly experienced medical practitioners with great credibility in their respective fields
              </p>
            </div>

            {/* Linguistic Advantage */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 text-center hover:shadow-xl transition">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Linguistic Advantage</h3>
              <p className="text-gray-700">
                Unparalleled linguistic advantage making patients from European, Balkan and African countries comfortable
              </p>
            </div>

            {/* Hospitality */}
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 text-center hover:shadow-xl transition">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Famed Hospitality</h3>
              <p className="text-gray-700">
                World-renowned Bengali hospitality combined with moderate budget options
              </p>
            </div>

            {/* Recuperation */}
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 text-center hover:shadow-xl transition">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sun className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Natural Recuperation</h3>
              <p className="text-gray-700">
                Option to recuperate at acclaimed natural health resorts unique to Bengal
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= POPULAR TREATMENTS ================= */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Popular Treatments</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Most sought-after medical treatments by international patients
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Alternative Medicine */}
            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Leaf className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-bold mb-2">Alternative Medicine</h3>
              <p className="text-sm text-gray-600">Traditional & holistic healing approaches</p>
            </div>

            {/* Bone Marrow Transplant */}
            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition">
              <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Bone className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="font-bold mb-2">Bone Marrow Transplant</h3>
              <p className="text-sm text-gray-600">Advanced transplant procedures</p>
            </div>

            {/* Cardiac Surgery */}
            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition">
              <div className="bg-pink-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <HeartPulse className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="font-bold mb-2">Cardiac Surgery</h3>
              <p className="text-sm text-gray-600">Coronary Heart Bypass & cardiac care</p>
            </div>

            {/* Oncology */}
            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Activity className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-bold mb-2">Oncology</h3>
              <p className="text-sm text-gray-600">Comprehensive cancer treatment</p>
            </div>

            {/* Eye Surgery */}
            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Eye className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-bold mb-2">Eye Surgery</h3>
              <p className="text-sm text-gray-600">Advanced ophthalmic procedures</p>
            </div>

            {/* Nephrology */}
            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition">
              <div className="bg-cyan-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <HeartPulse className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="font-bold mb-2">Nephrology</h3>
              <p className="text-sm text-gray-600">Kidney care & dialysis services</p>
            </div>

            {/* Joint Replacement */}
            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition">
              <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Bone className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-bold mb-2">Joint Replacement</h3>
              <p className="text-sm text-gray-600">Hip & Joint Replacement & Resurfacing</p>
            </div>

            {/* Neurology */}
            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition">
              <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Brain className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="font-bold mb-2">Neurology</h3>
              <p className="text-sm text-gray-600">Advanced neurological treatments</p>
            </div>

            {/* Cosmetic Surgery */}
            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition">
              <div className="bg-pink-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <User className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="font-bold mb-2">Cosmetic Surgery</h3>
              <p className="text-sm text-gray-600">Aesthetic enhancement procedures</p>
            </div>

            {/* Dental */}
            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition">
              <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <User className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="font-bold mb-2">Dental Care</h3>
              <p className="text-sm text-gray-600">Oral & Facial Restructuring clinics</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TOP HOSPITALS ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Top Hospitals in Kolkata</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              World-class medical facilities with international standards
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Tata Memorial Hospital */}
            <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="bg-gradient-to-r from-red-500 to-pink-500 p-6 text-white">
                <Award className="w-8 h-8 mb-2" />
                <h3 className="text-xl font-bold">TOP CANCER HOSPITAL</h3>
                <p className="text-2xl font-bold mt-2">TATA MEMORIAL HOSPITAL</p>
                <p className="text-sm opacity-90">KOLKATA</p>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  Premier cancer treatment center with world-class oncology services and research facilities
                </p>
                <button className="w-full bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition">
                  Enquire Now
                </button>
              </div>
            </div>

            {/* Apollo Gleneagles */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-6 text-white">
                <DollarSign className="w-8 h-8 mb-2" />
                <h3 className="text-xl font-bold">HIGHEST BILLING HOSPITAL</h3>
                <p className="text-2xl font-bold mt-2">APOLLO GLENEAGLES</p>
                <p className="text-sm opacity-90">KOLKATA</p>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  Premium multi-specialty hospital with international healthcare standards and advanced technology
                </p>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
                  Enquire Now
                </button>
              </div>
            </div>

            {/* NH Rabindranath Tagore */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-6 text-white">
                <HeartPulse className="w-8 h-8 mb-2" />
                <h3 className="text-xl font-bold">TOP CARDIOLOGY HOSPITAL</h3>
                <p className="text-2xl font-bold mt-2">NH RABINDRANATH TAGORE</p>
                <p className="text-sm opacity-90">MUKUNDAPUR</p>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  Leading cardiac care center with expert cardiologists and state-of-the-art heart treatment facilities
                </p>
                <button className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition">
                  Enquire Now
                </button>
              </div>
            </div>

            {/* RN Tagore Hospital - Neurosurgery */}
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="bg-gradient-to-r from-purple-500 to-indigo-500 p-6 text-white">
                <Brain className="w-8 h-8 mb-2" />
                <h3 className="text-xl font-bold">BEST NEUROSURGERY HOSPITAL</h3>
                <p className="text-2xl font-bold mt-2">RN TAGORE HOSPITAL</p>
                <p className="text-sm opacity-90">KOLKATA</p>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  Excellence in neurosurgery and neurological treatments with advanced surgical techniques
                </p>
                <button className="w-full bg-purple-600 text-white py-2 rounded-lg font-semibold hover:bg-purple-700 transition">
                  Enquire Now
                </button>
              </div>
            </div>

            {/* NH Rabindranath Tagore - Orthopedic */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 p-6 text-white">
                <Bone className="w-8 h-8 mb-2" />
                <h3 className="text-xl font-bold">BEST ORTHOPEDIC HOSPITAL</h3>
                <p className="text-2xl font-bold mt-2">NH RABINDRANATH TAGORE</p>
                <p className="text-sm opacity-90">KOLKATA</p>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  Specialized orthopedic care with advanced joint replacement and trauma surgery facilities
                </p>
                <button className="w-full bg-orange-600 text-white py-2 rounded-lg font-semibold hover:bg-orange-700 transition">
                  Enquire Now
                </button>
              </div>
            </div>

            {/* Desun Hospital */}
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="bg-gradient-to-r from-teal-500 to-cyan-500 p-6 text-white">
                <Building className="w-8 h-8 mb-2" />
                <h3 className="text-xl font-bold">TOP MULTISPECIALITY HOSPITAL</h3>
                <p className="text-2xl font-bold mt-2">DESUN HOSPITAL</p>
                <p className="text-sm opacity-90">EM Bypass</p>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  Comprehensive multi-specialty healthcare with 24/7 emergency services and advanced medical care
                </p>
                <button className="w-full bg-teal-600 text-white py-2 rounded-lg font-semibold hover:bg-teal-700 transition">
                  Enquire Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SPECIALIZED SERVICES ================= */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Specialized Medical Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert care across various medical specialties
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Nephrology */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition">
              <HeartPulse className="w-12 h-12 text-cyan-600 mb-4" />
              <h3 className="text-lg font-bold mb-2">BEST NEPHROLOGY HOSPITAL</h3>
              <p className="text-gray-700 mb-3">NH Rabindranath Tagore Hospital</p>
              <p className="text-sm text-gray-600">Kolkata</p>
            </div>

            {/* Dental Clinic */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition">
              <User className="w-12 h-12 text-teal-600 mb-4" />
              <h3 className="text-lg font-bold mb-2">BEST DENTAL CLINIC</h3>
              <p className="text-gray-700 mb-3">Advertise Your Brand Here</p>
              <p className="text-sm text-gray-600">Kolkata</p>
            </div>

            {/* Air Ambulance */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition">
              <Ship className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-lg font-bold mb-2">TOP AIR AMBULANCE SERVICE</h3>
              <p className="text-gray-700 mb-3">BENGAL AIR AMBULANCE [24x7]</p>
              <p className="text-sm text-gray-600">Kolkata-North East-Odisha</p>
            </div>

            {/* Free Heart Treatment */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition">
              <HeartPulse className="w-12 h-12 text-pink-600 mb-4" />
              <h3 className="text-lg font-bold mb-2">FREE HEART TREATMENT</h3>
              <p className="text-gray-700 mb-3">Sathya Sai Institute</p>
              <p className="text-sm text-gray-600">Higher Medical Science</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROCESS & ASSISTANCE ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">How Medical Tourism Works</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Find Optimal Doctor-Hospital Combination</h3>
                    <p className="text-gray-600">Get assistance from facilitators like Bengal Tourism & Surgery Assistance India</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Receive Treatment</h3>
                    <p className="text-gray-600">Undergo medical treatment with expert practitioners</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Choose Recuperation Option</h3>
                    <p className="text-gray-600">Recover in hospital, nearby accommodation, or natural health resorts</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Telemedicine Follow-up</h3>
                    <p className="text-gray-600">Continue care through telemedicine services</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Medical Tourism Assistance</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Doctor-Hospital matching</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Treatment coordination</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Accommodation arrangement</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Travel assistance</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Language support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= DISCLAIMER ================= */}
      <section className="py-12 bg-yellow-50 border-y border-yellow-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-gray-800 mb-2">Important Disclaimer</h3>
              <p className="text-gray-700 leading-relaxed">
                Bengal Tourism does not endorse the services of the Establishments featured here but limited to general information & advertisement purpose only. 
                Services are matter of solicitation by the service provider only.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* ================= LANGUAGE SUPPORT ================= */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Multi-Language Support</h3>
            <p className="text-gray-600">We assist patients in multiple languages for better communication</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {['Spanish Español', 'French Français', 'German Deutsch', 'Italian Italiano', 'Portuguese Portugues', 'Russian Russian', 'Japanese Japanese', 'Korean Korean', 'Chinese Chinese', 'Swedish', 'Hungarian', 'Arab'].map((lang) => (
              <span key={lang} className="bg-white px-4 py-2 rounded-full text-sm shadow-sm hover:shadow-md transition">
                {lang}
              </span>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}
