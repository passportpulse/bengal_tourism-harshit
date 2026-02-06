"use client";

import { useState } from "react";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, Building, User, FileText } from "lucide-react";

const contactMethods = [
  {
    icon: Phone,
    title: "Phone Support",
    details: ["+91 98043 33779", "+91 98364 33779"],
    description: "Available 24/7 for urgent queries"
  },
  {
    icon: Mail,
    title: "Email Support", 
    details: ["info@bengaltourism.com", "support@bengaltourism.com"],
    description: "We respond within 24 hours"
  },
  {
    icon: MapPin,
    title: "Office Address",
    details: ["Kolkata, West Bengal", "India"],
    description: "Visit us for personal consultation"
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon - Sat: 9:00 AM - 6:00 PM", "Sunday: 10:00 AM - 4:00 PM"],
    description: "Extended hours for members"
  }
];

const departments = [
  { name: "Membership Support", email: "membership@bengaltourism.com", phone: "+91 98043 33779" },
  { name: "DP Growth Plan", email: "dp@bengaltourism.com", phone: "+91 98364 33779" },
  { name: "Tour Booking", email: "tours@bengaltourism.com", phone: "+91 98043 33779" },
  { name: "Hotel Booking", email: "hotels@bengaltourism.com", phone: "+91 98043 33779" },
  { name: "Career Opportunities", email: "careers@bengaltourism.com", phone: "+91 98043 33779" },
  { name: "General Inquiry", email: "info@bengaltourism.com", phone: "+91 98043 33779" }
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    department: "",
    message: ""
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    setShowSuccess(true);
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <Send className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-4xl font-black text-gray-900 mb-4">Message Sent Successfully!</h1>
          <p className="text-xl text-gray-600 mb-8">
            Thank you for contacting us. We'll get back to you within 24 hours.
          </p>
          <button 
            onClick={() => setShowSuccess(false)}
            className="px-8 py-3 bg-gradient-to-r from-red-600 to-orange-600 text-white font-bold rounded-xl hover:from-red-700 hover:to-orange-700 transition"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Contact Bengal Tourism"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-red-900/40"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-6 py-3 mb-8">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white font-medium text-sm">Get in Touch</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Contact
              <span className="block bg-gradient-to-r from-red-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent relative">
                Bengal Tourism
                <svg className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-3/4 h-4" viewBox="0 0 300 16" fill="none">
                  <path d="M10 8 Q 75 4, 150 8 T 290 8" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#EF4444" />
                      <stop offset="50%" stopColor="#F59E0B" />
                      <stop offset="100%" stopColor="#F97316" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
              We're here to help • 24/7 Support • Expert guidance
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT INFO ================= */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-6">Get in Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple ways to reach us. Choose what works best for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{method.title}</h3>
                <div className="space-y-2 mb-4">
                  {method.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-700 font-medium">{detail}</p>
                  ))}
                </div>
                <p className="text-sm text-gray-600">{method.description}</p>
              </div>
            ))}
          </div>

          {/* Departments */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-black text-gray-900 mb-8 text-center">Contact by Department</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {departments.map((dept, index) => (
                <div key={index} className="border border-gray-200 rounded-xl p-6 hover:border-red-300 transition-colors">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Building className="w-5 h-5 text-red-600" />
                    {dept.name}
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="w-4 h-4 text-gray-400" />
                      <a href={`mailto:${dept.email}`} className="text-red-600 hover:text-red-700">
                        {dept.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="w-4 h-4 text-gray-400" />
                      <a href={`tel:${dept.phone}`} className="text-red-600 hover:text-red-700">
                        {dept.phone}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT FORM ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-6">Send Us a Message</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-2xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="+91 98765 43210"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Department
                  </label>
                  <select
                    value={formData.department}
                    onChange={(e) => handleInputChange("department", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="">Select Department</option>
                    {departments.map((dept, index) => (
                      <option key={index} value={dept.name}>{dept.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => handleInputChange("subject", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="How can we help you?"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Tell us more about your inquiry..."
                  required
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="px-12 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-bold rounded-xl hover:from-red-700 hover:to-orange-700 transition flex items-center mx-auto"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-bold text-gray-900 mb-3">How do I join the DP growth plan?</h3>
              <p className="text-gray-700">You can join by registering on our membership page with a fee of Rs.1500/- and start building your team.</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-bold text-gray-900 mb-3">What are the payment methods available?</h3>
              <p className="text-gray-700">We accept bank transfers, UPI payments, PhonePe, Google Pay, and cash deposits.</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-bold text-gray-900 mb-3">How long does it take to process membership?</h3>
              <p className="text-gray-700">Membership is usually processed within 24-48 hours after successful payment verification.</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-bold text-gray-900 mb-3">Can I contact support for help?</h3>
              <p className="text-gray-700">Yes, our support team is available 24/7 via phone, email, and the contact form on this page.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MAP ================= */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-white mb-6">Visit Our Office</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Come visit us for personal consultation and tour planning
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8">
            <div className="aspect-video bg-gray-100 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Kolkata Office</h3>
                <p className="text-gray-600">West Bengal, India</p>
                <p className="text-sm text-gray-500 mt-2">Interactive map loading...</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
