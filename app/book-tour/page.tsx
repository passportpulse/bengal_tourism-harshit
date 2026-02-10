"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Users, MapPin, Phone, Mail, CreditCard, Percent, User, Home, Clock, DollarSign } from "lucide-react";
const payments = [
  {
    title: "BANK TRANSFER / CASH DEPOSIT",
    img: "/payments/sbi.png",
    details: (
      <>
        <p><b>Beneficiary:</b></p>
        <p className="text-pink-700 font-semibold">Bengal Tourism</p>
        <p>State Bank of India</p>
        <p>A/C No. <b>33530363411</b></p>
        <p>IFSC: <b>SBIN0014534</b></p>
      </>
    ),
  },
  {
    title: "PAY THROUGH BHARAT - UPI",
    img: "/payments/bhim.jpg",
    details: (
      <>
        <p><b>UPI:</b> bengaltourism@upi</p>
        <p><b>Mobile UPI:</b> 9804333779@upi</p>
      </>
    ),
  },
  {
    title: "PHONEPE WALLET / UPI",
    img: "/payments/phonepe.jpg",
    details: (
      <>
        <p><b>UPI:</b> bengaltourism@ybl</p>
        <p><b>Phone:</b> 9804333779</p>
      </>
    ),
  },
  {
    title: "AXIS PAY - UPI",
    img: "/payments/axispay.png",
    details: (
      <>
        <p><b>UPI:</b> bengaltourism@axl</p>
        <p><b>Phone:</b> 9804333779</p>
      </>
    ),
  },
  {
    title: "PAYMENT GATEWAY",
    img: "/payments/gpay.png",
    details: (
      <>
        <p><b>UPI:</b> bengaltourism@okaxis</p>
        <p><b>Phone:</b> 9804333779</p>
      </>
    ),
  },
  {
    title: "INTERNATIONAL FUND TRANSFER",
    img: "/payments/paypal.png",
    details: (
      <>
        <p><b>Email:</b> bengaltourism@gmail.com</p>
        <p><b>Mobile:</b> 9804333779</p>
      </>
    ),
  },
];
export default function BookingPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    countryCode: "+91",
    phone: "",
    address: "",
    pinCode: "",
    destination: "",
    adults: 1,
    children: 0,
    specialInfo: "",
    promoCode: "",
    membershipNo: "",
    checkIn: "",
    checkOut: "",
    pickupPlace: "",
    dropPlace: "",
    costPerAdult: "",
    costPerChildren: "",
    totalNights: "",
    estimatedCost: "",
    bookingAmount: "",
    paymentType: "full"
  });

  const handleInputChange = (field: string, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const calculateTotals = () => {
    const adultCost = parseFloat(formData.costPerAdult) * formData.adults;
    const childrenCost = parseFloat(formData.costPerChildren || "0") * formData.children;
    const total = adultCost + childrenCost;
    const bookingAmount = formData.paymentType === "full" ? total : total * 0.5;

    setFormData(prev => ({
      ...prev,
      estimatedCost: total.toString(),
      bookingAmount: bookingAmount.toString()
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking submitted:", formData);
    // Handle booking submission
  };

  return (
    <main className="min-h-screen">
      {/* ================= MODERN HERO SECTION ================= */}
      <section className="relative h-[70vh] overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Luxury Travel Booking"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-red-900/40"></div>
        </div>

        {/* Floating Animated Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-red-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-yellow-500/20 rounded-full blur-3xl animate-pulse delay-75"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/10 rounded-full blur-2xl animate-pulse delay-150"></div>
        </div>

    

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <div className="text-center max-w-5xl mx-auto">
            {/* Badge */}
          

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Book Your
              <span className="block bg-gradient-to-r from-red-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent relative">
                Dream Journey
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

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
              Experience the magic of Bengal with our seamless booking process. 
              Your perfect adventure starts here.
            </p>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">100%</div>
                <div className="text-white/80 text-sm">Secure Booking</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
                <div className="text-white/80 text-sm">Customer Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
                <div className="text-white/80 text-sm">Happy Travelers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">5★</div>
                <div className="text-white/80 text-sm">Rated Service</div>
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

      {/* ================= BOOKING FORM SECTION ================= */}
      <section id="booking-form" className="bg-gradient-to-br from-slate-50 to-slate-100 py-16 px-4">
        <div className="max-w-6xl mx-auto">

          <div className="bg-white rounded-b-xl shadow-lg p-6 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-8">

              {/* Personal Information Section */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <User className="text-red-600" />
                  Personal Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange("fullName", e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition text-gray-600"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      E-mail ID <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition text-gray-600"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Mobile No. (With country code) <span className="text-red-500">*</span>
                    </label>
                    <div className="flex gap-3">
                      <input
                        type="text"
                        value={formData.countryCode}
                        onChange={(e) => handleInputChange("countryCode", e.target.value)}
                        className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition text-gray-600"
                        placeholder="+91"
                      />
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition text-gray-600"
                        placeholder="Enter 10 digit mobile number"
                        maxLength={10}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Address with Pin/Zip Code <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.address}
                      onChange={(e) => handleInputChange("address", e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition text-gray-600"
                      placeholder="Enter your complete address"
                      required
                    />
                    <input
                      type="text"
                      value={formData.pinCode}
                      onChange={(e) => handleInputChange("pinCode", e.target.value)}
                      className="w-full mt-3 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition text-gray-600"
                      placeholder="Enter PIN/Zip Code"
                      maxLength={6}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Tour Details Section */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <MapPin className="text-red-600" />
                  Tour Details
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Tour Destination (Name of Place) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.destination}
                      onChange={(e) => handleInputChange("destination", e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition text-gray-600"
                      placeholder="Enter your destination"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      No. of Adult PAX <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      value={formData.adults}
                      onChange={(e) => handleInputChange("adults", parseInt(e.target.value) || 0)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition text-gray-600"
                      min="1"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      No. of Children (5–10 yrs)
                    </label>
                    <input
                      type="number"
                      value={formData.children}
                      onChange={(e) => handleInputChange("children", parseInt(e.target.value) || 0)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition text-gray-600"
                      min="0"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Special Information / Requirement
                    </label>
                    <textarea
                      value={formData.specialInfo}
                      onChange={(e) => handleInputChange("specialInfo", e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition text-gray-600"
                      rows={4}
                      placeholder="Extra cost for non-sharing car, premium room, food habits, etc."
                    />
                  </div>
                </div>
              </div>

              {/* Travel Dates Section */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Calendar className="text-red-600" />
                  Travel Dates
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Check-in / Start Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      value={formData.checkIn}
                      onChange={(e) => handleInputChange("checkIn", e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition text-gray-600"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Check-out / End Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      value={formData.checkOut}
                      onChange={(e) => handleInputChange("checkOut", e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition text-gray-600"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Place of Start / Pick-up
                    </label>
                    <input
                      type="text"
                      value={formData.pickupPlace}
                      onChange={(e) => handleInputChange("pickupPlace", e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition text-gray-600"
                      placeholder="Enter pickup location"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Place of End / Drop
                    </label>
                    <input
                      type="text"
                      value={formData.dropPlace}
                      onChange={(e) => handleInputChange("dropPlace", e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition text-gray-600"
                      placeholder="Enter drop location"
                    />
                  </div>
                </div>
              </div>

              {/* Pricing Section */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <DollarSign className="text-red-600" />
                  Pricing Details
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Cost per Adult <span className="text-red-500">*</span>
                    </label>
                    <div className="flex gap-2">
                      <select className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition">
                        <option>INR</option>
                      </select>
                      <input
                        type="number"
                        value={formData.costPerAdult}
                        onChange={(e) => {
                          handleInputChange("costPerAdult", e.target.value);
                          setTimeout(calculateTotals, 100);
                        }}
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition text-gray-600"
                        placeholder="See Tariff Section"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Cost per Children @ 50%
                    </label>
                    <div className="flex gap-2">
                      <select className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition">
                        <option>INR</option>
                      </select>
                      <input
                        type="number"
                        value={formData.costPerChildren}
                        onChange={(e) => {
                          handleInputChange("costPerChildren", e.target.value);
                          setTimeout(calculateTotals, 100);
                        }}
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition text-gray-600"
                        placeholder="0 if no children"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Total No. of Nights <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      value={formData.totalNights}
                      onChange={(e) => {
                        handleInputChange("totalNights", e.target.value);
                        setTimeout(calculateTotals, 100);
                      }}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition text-gray-600"
                      placeholder="Number of nights"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Estimated Cost <span className="text-red-500">*</span>
                    </label>
                    <div className="flex gap-2">
                      <select className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition">
                        <option>INR</option>
                      </select>
                      <input
                        type="number"
                        value={formData.estimatedCost}
                        readOnly
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-600"
                        placeholder="Auto-calculated"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Booking Confirmation (50% of Estimated Cost) <span className="text-red-500">*</span>
                    </label>
                    <div className="flex gap-2">
                      <select className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition">
                        <option>INR</option>
                      </select>
                      <input
                        type="number"
                        value={formData.bookingAmount}
                        readOnly
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-600"
                        placeholder="Auto-calculated"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Promotional Section */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Percent className="text-red-600" />
                  Promotional Offers
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Promotional Code No. (Discount / Offer)
                    </label>
                    <input
                      type="text"
                      value={formData.promoCode}
                      onChange={(e) => handleInputChange("promoCode", e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition text-gray-600"
                      placeholder="Enter promo code if any"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Unit / Membership No. (For Members only)
                    </label>
                    <input
                      type="text"
                      value={formData.membershipNo}
                      onChange={(e) => handleInputChange("membershipNo", e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition text-gray-600"
                      placeholder="Enter membership number"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Type */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <CreditCard className="text-red-600" />
                  Payment Type <span className="text-red-500">*</span>
                </h2>
                <div className="flex gap-8">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="payment"
                      value="full"
                      checked={formData.paymentType === "full"}
                      onChange={(e) => {
                        handleInputChange("paymentType", e.target.value);
                        setTimeout(calculateTotals, 100);
                      }}
                      className="w-4 h-4 text-red-600 focus:ring-red-500"
                    />
                    <span className="font-medium text-gray-700">Full Payment</span>
                  </label>
                 
                </div>
              </div>

              {/* Terms and Submit */}
              <div className="bg-gray-50 rounded-lg p-6">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 w-4 h-4 text-red-600 focus:ring-red-500 rounded"
                  />
                  <span className="text-sm text-gray-700 leading-relaxed">
                    I accept: Submission without successful payment is not valid. Please remember to save the acknowledgement after you hit Submit Button (&/or) payment confirmation from Bank. In case of manual submission of Booking Form via e-mail, we will send the confirmation of receipt & booking details via e-mail after we acknowledge receipt of valid payment at our Bank. I also agree to accept any similar hotel rooms provided by you and be liable to pay for any extra cost as per your special instructions, extra provision required, extra person/bed (1 child under 4 yrs free & other person above 4 Yrs chargeable) to be provided (&) Service Charges/GST will be calculated & paid later on acceptance & as per final invoice/bill.
                  </span>
                </label>
              </div>

              {/* Top Note */}
              <div className="bg-red-700 text-white text-center py-2 text-sm font-semibold">
                Proceed to PAY using any mode given below. Earn Cash-Back upto Rs.10000/-
              </div>

              {/* Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 border-t">
                {payments.map((item, i) => (
                  <div
                    key={i}
                    className="border-r border-b last:border-r-0 p-4 text-center"
                  >
                    <div className="flex justify-center mb-3">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="h-20 object-contain"
                      />
                    </div>

                    <h3 className="text-sm font-bold text-pink-700 mb-3">
                      {item.title}
                    </h3>

                    <div className="text-xs text-gray-800 space-y-1">
                      {item.details}
                    </div>
                  </div>
                ))}
</div>
                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-12 py-4 rounded-xl font-bold text-lg shadow-lg transform hover:scale-105 transition-all duration-200"
                  >
                    SUBMIT after PAYMENT
                  </button>
                </div>

            </form>
          </div>
        </div>
      </section>

    </main>
  );
}
