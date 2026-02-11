"use client";

import { useState } from "react";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, Building, User, FileText, ChevronDown, ChevronUp } from "lucide-react";

const faqData = [
  {
    id: 1,
    question: "How can I book a tour package with Bengal Tourism?",
    answer:
      "You can book a tour package by calling our tour booking team directly or by sending us a message on WhatsApp. Our travel experts will guide you through the complete booking process."
  },
  {
    id: 2,
    question: "What payment methods do you accept?",
    answer:
      "We accept UPI payments, bank transfers, PhonePe, Google Pay, and cash deposits. Payment details are shared after confirming your booking."
  },
  {
    id: 3,
    question: "How long does it take to confirm a booking?",
    answer:
      "Bookings are usually confirmed within 24 to 48 hours after successful payment verification."
  },
  {
    id: 4,
    question: "Can I get assistance for planning my trip?",
    answer:
      "Yes, our travel experts are available to help you with destination planning, itineraries, hotel selection, and transport arrangements."
  },
  {
    id: 5,
    question: "Which destinations do you offer tours for?",
    answer:
      "We offer tour packages across West Bengal, all major destinations in India, and selected international destinations, along with seasonal and exclusive travel offers."
  },
  {
    id: 6,
    question: "Do you provide hotel booking services?",
    answer:
      "Yes, we provide hotel booking services for both domestic and international destinations. You can contact our hotel booking team for best available options."
  },
  {
    id: 7,
    question: "Is customer support available after booking?",
    answer:
      "Absolutely. Our support team is available before, during, and after your trip to ensure a smooth and comfortable travel experience."
  },
  {
    id: 8,
    question: "Where is your office located?",
    answer:
      "Our office is located at AG-209, Flat No. 402, Kestopur, Kolkata – 700101, West Bengal, India."
  }
];




const contactMethods = [
  {
    icon: Phone,
    title: "Tour Booking",
    value: "+91 62897 83779",
    action: "tel:+916289783779",
    button: "Call Now",
    color: "text-red-600"
  },
  {
    icon: Phone,
    title: "Hotel Booking",
    value: "+91 90079 95888",
    action: "tel:+919007995888",
    button: "Call Now",
    color: "text-orange-600"
  },
  {
    icon: MessageSquare,
    title: "WhatsApp – Tour",
    value: "+91 62897 83779",
    action: "https://wa.me/916289783779",
    button: "Chat on WhatsApp",
    color: "text-green-600"
  },
  {
    icon: MessageSquare,
    title: "WhatsApp – Hotel",
    value: "+91 90079 95888",
    action: "https://wa.me/919007995888",
    button: "Chat on WhatsApp",
    color: "text-green-600"
  }
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
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    setShowSuccess(true);
  };

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
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

   <section className="py-24 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">

      {/* ================= LEFT SIDE ================= */}
      <div>
        <h2 className="text-4xl font-black text-gray-900 mb-4">
          Contact Bengal Tourism
        </h2>
        <p className="text-gray-600 mb-10 max-w-md">
          Speak with our travel experts for tour planning, hotel booking and support.
        </p>

        <div className="space-y-5">
          {contactMethods.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-white border rounded-xl p-5 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center">
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{item.title}</p>
                  <p className="text-gray-600 text-sm">{item.value}</p>
                </div>
              </div>

              <a
                href={item.action}
                target="_blank"
                className="px-4 py-2 text-sm font-semibold rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition"
              >
                {item.button}
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* ================= RIGHT SIDE FORM ================= */}
      <div className="bg-white rounded-2xl shadow-xl p-10">
        <h3 className="text-2xl font-black text-gray-900 mb-6">
          Send Us a Message
        </h3>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Your Name"
              className="w-full pl-12 py-4 border rounded-lg text-gray-800 focus:ring-2 focus:ring-red-500 outline-none"
              required
            />
          </div>

          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full pl-12 py-4 border rounded-lg text-gray-800 focus:ring-2 focus:ring-red-500 outline-none"
              required
            />
          </div>

          <div className="relative">
            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full pl-12 py-4 border rounded-lg text-gray-800 focus:ring-2 focus:ring-red-500 outline-none"
              required
            />
          </div>

          <textarea
            rows={4}
            placeholder="Write your message..."
            className="w-full p-4 border rounded-lg text-gray-800 focus:ring-2 focus:ring-red-500 outline-none"
            required
          />

          <button className="w-full py-4 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition flex items-center justify-center gap-2">
            <Send className="w-5 h-5" />
            Send Message
          </button>

        </form>
      </div>

    </div>
  </div>
</section>


      {/* ================= FAQ & MAP ================= */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className=" mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl ">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* FAQ Section */}
            <div className="space-y-4">
              {faqData.map((faq) => (
                <div key={faq.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="font-bold text-gray-900 pr-4">{faq.question}</h3>
                    <div className="flex-shrink-0">
                      {openFAQ === faq.id ? (
                        <ChevronUp className="w-5 h-5 text-gray-500" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500" />
                      )}
                    </div>
                  </button>
                  
                  {openFAQ === faq.id && (
                    <div className="px-6 pb-5">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Map Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8 h-fit">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Visit Our Office</h3>
              <div className="aspect-video rounded-xl overflow-hidden mb-6">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.3894846438584!2d88.42254547661936!3d22.601926379470875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02758dc2e6727b%3A0x173b02f3660ee938!2sAc-119%2F1%20Prafulla%20Kanaan%20Kestopur!5e0!3m2!1sen!2sin!4v1770727437400!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Office Address</h4>
                    <p className="text-gray-700">AG-209, Flat No. 402</p>
                    <p className="text-gray-700">Kestopur, Kolkata – 700101</p>
                    <p className="text-gray-600">West Bengal, India</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Contact Numbers</h4>
                    <p className="text-gray-700">Tour Booking: 6289783779</p>
                    <p className="text-gray-700">Hotel Booking: 9007995888</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-700">bengaltourism@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      </>
  );
}
