"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, MapPin, Clock, DollarSign, Briefcase, Users, Building, GraduationCap, Award, TrendingUp, Heart, Mail, Phone, Send } from "lucide-react";

const jobCategories = [
  { id: "all", name: "All Opportunities", icon: "💼" },
  { id: "tours", name: "Tours & Travels", icon: "✈️" },
  { id: "networking", name: "Networking", icon: "🌐" },
  { id: "marketing", name: "Marketing & Sales", icon: "📢" },
  { id: "telecalling", name: "Tele-Calling", icon: "☎️" },
  { id: "backoffice", name: "Back-Office", icon: "🏢" },
  { id: "entrepreneur", name: "Entrepreneur", icon: "�" }
];

const jobOpenings = [
  {
    id: 1,
    title: "Tour Manager & Organizer",
    department: "tours",
    location: "Work from Home/Office",
    type: "Full-time/Part-time",
    experience: "No bar",
    salary: "Great Earnings Potential",
    featured: true,
    description: "Organize and manage tours for Bengal Tourism destinations",
    requirements: ["Passion for tourism", "Good communication skills", "Leadership qualities"]
  },
  {
    id: 2,
    title: "Networking Professional",
    department: "networking",
    location: "Work from Home",
    type: "Part-time & Full-time",
    experience: "No experience required",
    salary: "Performance-based Earnings",
    featured: true,
    description: "Build network and promote Bengal Tourism services",
    requirements: ["Networking skills", "Self-motivated", "People person"]
  },
  {
    id: 3,
    title: "Marketing & Sales Executive",
    department: "marketing",
    location: "Flexible",
    type: "Full-time",
    experience: "Age & Qualification no bar",
    salary: "Commission-based",
    featured: true,
    description: "Marketing and sales of tourism packages and services",
    requirements: ["Sales skills", "Marketing knowledge", "Target driven"]
  },
  {
    id: 4,
    title: "Tele-Caller (Ladies)",
    department: "telecalling",
    location: "Work from Home",
    type: "Part-time",
    experience: "No experience required",
    salary: "Fixed + Incentives",
    featured: false,
    description: "Handle customer calls and provide tour information",
    requirements: ["Good communication", "Pleasant voice", "Basic computer skills"]
  },
  {
    id: 5,
    title: "Merchandiser & Back-Office (Ladies)",
    department: "backoffice",
    location: "Home/Office",
    type: "Flexible",
    experience: "No bar",
    salary: "Performance-based",
    featured: false,
    description: "Handle merchandise and back-office operations",
    requirements: ["Organizational skills", "Computer knowledge", "Attention to detail"]
  },
  {
    id: 6,
    title: "Hostess & Customer Relations",
    department: "backoffice",
    location: "Various Locations",
    type: "Part-time",
    experience: "No bar",
    salary: "Fixed + Tips",
    featured: false,
    description: "Customer service and hostess responsibilities",
    requirements: ["Good personality", "Communication skills", "Customer service orientation"]
  }
];

const benefits = [
  { icon: TrendingUp, title: "Sustainable Income", description: "Great earnings potential with flexible work options" },
  { icon: Users, title: "No Experience Required", description: "Join us regardless of age or qualification" },
  { icon: Heart, title: "Work from Home", description: "Flexible work from home or office options" },
  { icon: Award, title: "Zero Investment", description: "Start your business with no investment required" },
  { icon: Clock, title: "Part-time & Full-time", description: "Choose your working hours and schedule" },
  { icon: GraduationCap, title: "Training & Support", description: "Complete training and ongoing support provided" }
];

export default function CareerPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    message: ""
  });

  const filteredJobs = selectedCategory === "all" 
    ? jobOpenings 
    : jobOpenings.filter(job => job.department === selectedCategory);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Career application submitted:", formData);
  };

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Career at Bengal Tourism"
          fill
          className="object-cover scale-110"
          priority
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

        <div className="relative z-10 text-center max-w-5xl px-6">
          <span className="inline-block mb-6 px-6 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white font-semibold tracking-wide">
            🚀 Join Our Team
          </span>

          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
            Career & Business
            <span className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              Opportunity with Bengal Tourism
            </span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Work from home or office for sustainable income & earnings in tourism industry.
            We don't promise salary BUT we assure great earnings.
          </p>

          <div className="mt-8 text-white/90 max-w-3xl mx-auto">
            <p className="text-lg font-semibold mb-4">Join us to be a part of a success story as...</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm">Tour Managers</span>
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm">Networkers</span>
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm">Marketing & Sales</span>
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm">Tele-Callers</span>
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm">Entrepreneurs</span>
            </div>
          </div>

          <div className="mt-10 flex gap-4 justify-center flex-wrap">
            <button className="px-8 py-3 rounded-xl bg-white text-red-600 font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl">
              View Openings
            </button>
            <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-red-600 to-orange-600 text-white font-bold hover:from-red-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-xl">
              Join Talent Pool
            </button>
          </div>
        </div>
      </section>

      {/* ================= WHY JOIN US ================= */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-6">Why Join Bengal Tourism?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Be part of a team that's showcasing the beauty of Bengal to the world
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= JOB OPENINGS ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-6">Current Openings</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find your perfect role in our growing team
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {jobCategories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-5 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-red-600 to-orange-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category.icon} {category.name}
              </button>
            ))}
          </div>

          {/* Job Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredJobs.map(job => (
              <div key={job.id} className={`bg-white rounded-2xl border-2 p-8 hover:shadow-2xl transition-all duration-300 ${
                job.featured ? "border-red-500 shadow-xl" : "border-gray-200"
              }`}>
                {job.featured && (
                  <div className="inline-block mb-4">
                    <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      ⭐ Featured Position
                    </span>
                  </div>
                )}

                <h3 className="text-2xl font-black text-gray-900 mb-3">{job.title}</h3>
                <p className="text-gray-600 mb-6">{job.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center text-gray-700">
                    <MapPin className="w-4 h-4 mr-2 text-red-600" />
                    <span className="text-sm">{job.location}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Briefcase className="w-4 h-4 mr-2 text-red-600" />
                    <span className="text-sm">{job.type}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Clock className="w-4 h-4 mr-2 text-red-600" />
                    <span className="text-sm">{job.experience}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <DollarSign className="w-4 h-4 mr-2 text-red-600" />
                    <span className="text-sm">{job.salary}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-2">Key Requirements:</h4>
                  <ul className="space-y-1">
                    {job.requirements.map((req, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-start">
                        <span className="text-red-600 mr-2">•</span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold py-3 rounded-xl transition-all duration-300 transform hover:scale-105">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= APPLICATION FORM ================= */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-black text-gray-900 mb-4">Can't Find What You're Looking For?</h2>
              <p className="text-lg text-gray-600">
                Join our talent pool and we'll reach out when suitable positions open up
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="+91 98765 43210"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Preferred Position
                  </label>
                  <input
                    type="text"
                    value={formData.position}
                    onChange={(e) => handleInputChange("position", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="e.g. Marketing Manager"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Tell us about yourself <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Share your experience, skills, and why you want to join Bengal Tourism..."
                  required
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-12 py-4 rounded-xl font-bold text-lg shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center mx-auto"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ================= ENTREPRENEUR OPPORTUNITIES ================= */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-6">Entrepreneur Opportunities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join as budding Entrepreneurs or Self-Employed with zero investment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-3">Area Agency</h3>
              <p className="text-gray-600 mb-4">Become our Area Partner and manage tour bookings in your region</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Zero investment</li>
                <li>• Small office/home setup</li>
                <li>• Internet connection required</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-3">Franchisee</h3>
              <p className="text-gray-600 mb-4">Complete franchise support with training and brand backing</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Only Rs. 6000/- investment</li>
                <li>• Complete training provided</li>
                <li>• Up to 2.5 Lakh earning potential</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-3">Team Leader</h3>
              <p className="text-gray-600 mb-4">Lead and manage your own team of tourism professionals</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Build your network</li>
                <li>• Leadership role</li>
                <li>• Unlimited earning potential</li>
              </ul>
            </div>
          </div>

          {/* Financial Partners Section */}
          <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-3xl p-12 text-white text-center">
            <h3 className="text-3xl font-black mb-6">Financial Partners & Stake Holders</h3>
            <p className="text-xl mb-8 max-w-4xl mx-auto">
              Partner with us in various tourism ventures and be part of Bengal's growing tourism industry
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-bold mb-2">Tour Operation</h4>
                <p className="text-sm opacity-90">Invest in tour packages and operations</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-bold mb-2">Medical Tourism</h4>
                <p className="text-sm opacity-90">Healthcare tourism partnerships</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-bold mb-2">Water Sports</h4>
                <p className="text-sm opacity-90">Adventure sports activities</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-bold mb-2">Transport Services</h4>
                <p className="text-sm opacity-90">Car, bus & helicopter rentals</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CSR INITIATIVES ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-6">Our CSR Initiatives</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Corporate Social Responsibility programs for sustainable tourism
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🌳</span>
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-3">Tree Plantation</h3>
              <p className="text-gray-600">Plant 3 Trees for each member who joins us to support environmental conservation</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🚫</span>
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-3">No Plastic Zone</h3>
              <p className="text-gray-600">Ban plastic carry bags and promote digital communication to save forests</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-3">Local Commitment</h3>
              <p className="text-gray-600">Support local economy by generating income for unemployed youths</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">💼</span>
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-3">Local Employment</h3>
              <p className="text-gray-600">Hire local unemployed youths and support their professional development</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-white mb-8">Have Questions?</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto">
            Our HR team is here to help you with your career journey at Bengal Tourism
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:careers@bengaltourism.com" className="flex items-center justify-center px-6 py-3 bg-white text-gray-900 rounded-xl font-bold hover:bg-gray-100 transition">
              <Mail className="w-5 h-5 mr-2" />
              careers@bengaltourism.com
            </a>
            <a href="tel:+916289783779" className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-xl font-bold hover:from-red-700 hover:to-orange-700 transition">
              <Phone className="w-5 h-5 mr-2" />
              +91 98043 33779
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
