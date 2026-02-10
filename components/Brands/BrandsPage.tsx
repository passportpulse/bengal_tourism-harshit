"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, MapPin, Phone, Mail, Globe, Heart, Award, TrendingUp, Users, Check, ExternalLink, Search, X } from "lucide-react";

const brands = [
  {
    id: 1,
    name: "BEST JEWELLERY STORE",
    location: "KOLKATA",
    category: "jewellery",
    price: null,
    action: "Order on-line",
    featured: true,
    image: "/partners/Final Logo_2018-02-26-18-12-39.jpg",
    description: "Premium jewellery collection with traditional and modern designs",
    rating: 4.8,
    reviews: 156
  },
  {
    id: 2,
    name: "BEST BENGALI CUISINE",
    location: "KOLKATA",
    category: "food",
    price: "Starting INR 800/- for 2 Person",
    action: null,
    featured: true,
    image: "/partners/374654-bhojohori-manna_2016-05-11-17-51-12.jpg",
    description: "Authentic Bengali cuisine serving traditional dishes and delicacies",
    rating: 4.9,
    reviews: 289
  },
  {
    id: 3,
    name: "BEST TANGAIL SAREE",
    location: "FULIA",
    category: "handloom",
    price: "INR 1500/- piece",
    action: null,
    featured: false,
    image: "/partners/Tangail Saree_2017-11-13-12-27-21.jpg",
    description: "Traditional Tangail sarees with intricate designs and patterns",
    rating: 4.7,
    reviews: 98
  },
  {
    id: 4,
    name: "BEST DIAMOND JEWELLERY STORE",
    location: "KOLKATA",
    category: "jewellery",
    price: null,
    action: null,
    featured: true,
    image: "/partners/Final Logo_2018-02-26-18-12-39.jpg",
    description: "Exquisite diamond jewellery and precious gemstones",
    rating: 4.9,
    reviews: 203
  },
  {
    id: 5,
    name: "BEST DARJEELING TEA",
    location: "DARJEELING",
    category: "food",
    price: null,
    action: "Publish YOUR Brand here",
    featured: true,
    image: "/partners/darjeeling20logo1_2016-05-13-07-49-05.jpg",
    description: "Premium Darjeeling tea from the finest tea gardens",
    rating: 4.8,
    reviews: 167
  },
  {
    id: 6,
    name: "BEST ROSOGOLLA STORE",
    location: "KOLKATA",
    category: "food",
    price: "INR 750/- kg",
    action: null,
    featured: false,
    image: "/partners/Rosogolla_2016-07-03-19-56-22.jpg",
    description: "Famous Bengali sweet shop serving fresh rosogollas",
    rating: 4.6,
    reviews: 134
  },
  {
    id: 7,
    name: "BEST PATACHITRA CRAFTS",
    location: "MIDNAPORE",
    category: "crafts",
    price: "INR 1500/- piece",
    action: null,
    featured: false,
    image: "/partners/Patachitra_2017-11-13-12-02-04.jpg",
    description: "Traditional Patachitra paintings and folk art",
    rating: 4.7,
    reviews: 89
  },
  {
    id: 8,
    name: "BEST JUTE PRODUCTS",
    location: "HOOGLY",
    category: "crafts",
    price: null,
    action: null,
    featured: true,
    image: "/partners/Jute-1_2018-02-26-18-36-58.jpg",
    "description": "Eco-friendly jute products and handicrafts",
    rating: 4.5,
    reviews: 112
  },
  {
    id: 9,
    name: "BEST TOURISM PARTNER",
    location: "BENGAL - ODISHA - SIKKIM",
    category: "travel",
    price: null,
    action: "Contact for Tour Packages & Hotel Rooms",
    featured: true,
    image: "/partners/BT-Logo Image_2021-06-08-10-08-33.jfif",
    description: "Complete tourism solutions for multiple destinations",
    rating: 4.9,
    reviews: 278
  },
  {
    id: 10,
    name: "BEST KANTHA EMBROIDERY",
    location: "RURAL BENGAL",
    category: "crafts",
    price: "Rs. 2500/- piece",
    action: null,
    featured: false,
    image: "/partners/Kantha Stich_2017-11-13-12-14-21.jpg",
    description: "Traditional Kantha embroidered textiles and fabrics",
    rating: 4.8,
    reviews: 76
  },
  {
    id: 11,
    name: "BEST DOKRA ARTEFACTS",
    location: "BANKURA",
    category: "crafts",
    price: null,
    action: null,
    featured: true,
    image: "/partners/Dokra_2017-11-13-11-51-13.jpg",
    description: "Traditional Dokra metal crafts and tribal art",
    rating: 4.6,
    reviews: 94
  },
  {
    id: 12,
    name: "BEST DHAKAI SAREE",
    location: "WEST BENGAL",
    category: "handloom",
    price: "INR 5000/- piece",
    action: null,
    featured: false,
    image: "/partners/Dhakai Saree_2017-11-13-12-20-25.jpg",
    description: "Fine Dhakai sarees with traditional weaving patterns",
    rating: 4.7,
    reviews: 103
  },
  {
    id: 13,
    name: "BEST JAMDANI SAREE",
    location: "SANTIPUR",
    category: "handloom",
    price: "INR 7500/- Piece",
    action: null,
    featured: true,
    image: "/partners/Dhakai Saree_2017-11-13-12-20-25.jpg",
    description: "Premium Jamdani sarees with intricate designs",
    rating: 4.9,
    reviews: 187
  },
  {
    id: 14,
    name: "BEST PRAWN MALAI CURRY",
    location: "KOLKATA",
    category: "food",
    price: "INR 450/- Portion",
    action: null,
    featured: false,
    image: "/partners/Bengali THali_2018-02-26-18-54-37.jpg",
    description: "Delicious Prawn Malai Curry, a Bengali delicacy",
    rating: 4.8,
    reviews: 156
  },
  {
    id: 15,
    name: "BEST HILSA (ILISH) DISHES",
    location: "KOLKATA",
    category: "food",
    price: "INR 500/- portion",
    action: null,
    featured: false,
    image: "/partners/Bengali THali_2018-02-26-18-54-37.jpg",
    description: "Fresh Hilsa fish preparations, Bengali specialty",
    rating: 4.7,
    reviews: 198
  },
  {
    id: 16,
    name: "BEST TRAVEL PARTNER",
    location: "KOLKATA - INDIA",
    category: "travel",
    price: null,
    action: "Watch Video",
    featured: true,
    image: "/partners/BT-Logo Image_2021-06-08-10-08-33.jfif",
    description: "Travel services with video testimonials",
    rating: 4.8,
    reviews: 145
  },
  {
    id: 17,
    name: "BEST BELL METAL / KAANSHA PRODUCTS",
    location: "BURDWAN",
    category: "crafts",
    price: "INR 5000/- Set",
    action: null,
    featured: false,
    image: "/partners/Bell utensils_2016-05-20-10-44-33.jfif",
    description: "Traditional bell metal crafts and utensils",
    rating: 4.5,
    reviews: 67
  },
  {
    id: 18,
    name: "BEST TERRACOTTA PRODUCTS",
    location: "BANKURA",
    category: "crafts",
    price: "INR 750/- pair",
    action: null,
    featured: false,
    image: "/partners/Teracota_2016-05-20-10-56-17.jfif",
    description: "Handcrafted terracotta pottery and art pieces",
    rating: 4.6,
    reviews: 89
  },
  {
    id: 19,
    name: "BEST CLAY MODELS",
    location: "KRISHNANAGAR",
    category: "crafts",
    price: "INR 300/- pair",
    action: null,
    featured: false,
    image: "/partners/Clay Models_2016-05-20-10-57-32.jfif",
    description: "Traditional clay models and figurines from Krishnanagar",
    rating: 4.4,
    reviews: 56
  },
  {
    id: 20,
    name: "BEST MASK / MUKHOSH",
    location: "PURULIA",
    category: "crafts",
    price: "INR 1500/- piece",
    action: null,
    featured: false,
    image: "/partners/Wooden Mask_2018-02-26-18-43-14.jpg",
    description: "Traditional Purulia masks and folk art",
    rating: 4.7,
    reviews: 78
  },
  {
    id: 21,
    name: "BEST BALUCHARI SAREE",
    location: "MURSHIDABAD",
    category: "handloom",
    price: "INR 7500/- Piece",
    action: null,
    featured: false,
    image: "/partners/Baluchari Saree-1_2017-11-13-12-06-41.jpg",
    description: "Baluchari sarees with mythological themes",
    rating: 4.8,
    reviews: 92
  },
  {
    id: 22,
    name: "BEST WOODEN / GAMIRA PRODUCTS",
    location: "DINAJPUR",
    category: "crafts",
    price: "INR 5000/- piece",
    action: null,
    featured: false,
    image: "/partners/Wooden Mask_2018-02-26-18-43-14.jpg",
    description: "Wooden crafts and Gamira products from Dinajpur",
    rating: 4.5,
    reviews: 71
  },
  {
    id: 23,
    name: "TOP ELECTRONIC SHOP",
    location: "KOLKATA",
    category: "electronics",
    price: null,
    action: "Shop & Order Online",
    featured: true,
    image: "/partners/Final Logo_2018-02-26-18-12-39.jpg",
    description: "Latest electronics and gadgets at best prices",
    rating: 4.6,
    reviews: 234
  },
  {
    id: 24,
    name: "DERAJ - TREASURE TROVE",
    location: "BENGAL HANDLOOMS",
    category: "handloom",
    price: null,
    action: "Shop & Order Online",
    featured: true,
    image: "/partners/Deraj Logo_2021-05-06-22-38-48.jpg",
    description: "Premium handloom products and traditional textiles",
    rating: 4.9,
    reviews: 167
  },
  {
    id: 25,
    name: "BEST BENGALI THALI MEALS",
    location: "KOLKATA",
    category: "food",
    price: "Starting INR 1500/- Thali",
    action: null,
    featured: false,
    image: "/partners/Bengali THali_2018-02-26-18-54-37.jpg",
    description: "Complete Bengali thali meals with variety",
    rating: 4.8,
    reviews: 189
  },
  {
    id: 26,
    name: "BEST FOOD HOME DELIVERY",
    location: "KOLKATA",
    category: "food",
    price: null,
    action: "KHICHRI BHOG",
    featured: false,
    image: "/partners/374654-bhojohori-manna_2016-05-11-17-51-12.jpg",
    description: "Home delivery of authentic Bengali food",
    rating: 4.5,
    reviews: 123
  },
  {
    id: 26,
    name: "BEST FOOD HOME DELIVERY",
    location: "KOLKATA",
    category: "food",
    price: null,
    action: "KHICHRI BHOG",
    featured: false,
    image: "/partners/374654-bhojohori-manna_2016-05-11-17-51-12.jpg",
    description: "Home delivery of authentic Bengali food",
    rating: 4.5,
    reviews: 123
  },
  {
    id: 27,
    name: "MAYFAIR RESORTS & SPA",
    location: "DARJEELING",
    category: "hotels",
    price: "Room starting Rs.12,000/-",
    action: null,
    featured: true,
    image: "/partners/Mayfa_ir-Darj_2021-11-15-11-35-13.jpg",
    description: "Luxury resort with spa facilities in Darjeeling",
    rating: 4.9,
    reviews: 267
  },
  {
    id: 28,
    name: "MAYFAIR RESORT & CASINO",
    location: "GANGTOK",
    category: "hotels",
    price: "Room starting Rs.28000/-",
    action: null,
    featured: true,
    image: "/partners/Mayfa_ir-Gangtok-1_2021-11-15-11-42-25.jpg",
    description: "Premium resort with casino in Gangtok",
    rating: 4.8,
    reviews: 198
  },
  {
    id: 29,
    name: "MAYFAIR HERITAGE & WAVES",
    location: "PURI",
    category: "hotels",
    "price": "Room starting Rs.12000/-",
    action: null,
    featured: true,
    image: "/partners/Mayfa_ir-Puri-1_2021-11-15-11-43-43.jpg",
    description: "Heritage beach resort in Puri, Odisha",
    rating: 4.7,
    reviews: 189
  },
  {
    id: 30,
    name: "MAYFAIR HIMALAYAN",
    location: "KALIMPONG",
    category: "hotels",
    price: "Room starting Rs.12,000/-",
    action: null,
    featured: true,
    image: "/partners/Mayfa_ir-Darj-2_2021-11-15-11-55-18.jpg",
    description: "Mountain resort with Himalayan views",
    rating: 4.8,
    reviews: 176
  },
  {
    id: 31,
    name: "BEST BIRIYANI HOUSE",
    location: "KOLKATA",
    category: "food",
    price: null,
    action: "Advertise YOUR Brand Here",
    featured: false,
    image: "/partners/Bengali THali_2018-02-26-18-54-37.jpg",
    description: "Authentic Bengali biryani and Mughlai cuisine",
    rating: 4.7,
    reviews: 145
  },
  {
    id: 32,
    name: "BEST ELECTRONIC SHOP",
    location: "HOOGLY",
    category: "electronics",
    price: null,
    action: null,
    featured: false,
    image: "/partners/Final Logo_2018-02-26-18-12-39.jpg",
    description: "Electronics and gadgets store in Hooghly",
    rating: 4.4,
    reviews: 98
  }
];

export default function BrandsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState<any>(null);

  const categories = [
    { id: "all", name: "All Categories", icon: "🏪" },
    { id: "jewellery", name: "Jewellery", icon: "💎" },
    { id: "food", name: "Food & Cuisine", icon: "🍽️" },
    { id: "handloom", name: "Handloom & Sarees", icon: "🧵" },
    { id: "crafts", name: "Handicrafts", icon: "🎨" },
    { id: "hotels", name: "Hotels & Resorts", icon: "🏨" },
    { id: "electronics", name: "Electronics", icon: "📱" },
    { id: "travel", name: "Travel & Tourism", icon: "✈️" }
  ];

  const filteredBrands = brands.filter(brand => {
    const matchesCategory = selectedCategory === "all" || brand.category === selectedCategory;
    const matchesSearch = brand.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         brand.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Brand Bengal"
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
              <span className="text-white font-medium text-sm">Brand Bengal</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Best Brands,
              <span className="block bg-gradient-to-r from-red-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent relative">
                Affiliates, Partners
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
              Discover the finest products, services, and experiences from Bengal's most trusted brands
            </p>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">32</div>
                <div className="text-white/80 text-sm">Featured Brands</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">100%</div>
                <div className="text-white/80 text-sm">Verified</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold textwhite mb-2">4.8★</div>
                <div className="text-white/80 text-sm">Avg Rating</div>
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

      {/* ================= SEARCH & FILTER ================= */}
      {/* <section className="py-16 bg-white sticky top-0 z-40 shadow-lg border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search brands by name or location..."
                  className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <Search className="w-5 h-5 text-gray-400" />
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-red-600 to-orange-600 text-white shadow-lg ring-2 ring-red-500 ring-offset-2"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200 shadow-sm hover:shadow-md"
                  }`}
                >
                  <span className="flex items-center">
                    <span className="text-lg mr-2">{category.icon}</span>
                    <span className="text-sm">{category.name}</span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* ================= BRANDS GRID ================= */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredBrands.map(brand => (
              <div
                key={brand.id}
                className={`group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100 h-full flex flex-col ${
                  brand.featured ? "ring-2 ring-red-500 ring-offset-2" : ""
                }`}
              >
               
                
                {/* Image Section */}
                <div className="relative h-56 overflow-hidden flex-shrink-0">
                  <Image
                    src={brand.image}
                    alt={brand.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%236b7280' font-family='Arial' font-size='14'%3EImage Not Available%3C/text%3C/svg%3E";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Location Badge */}
                  <div className="absolute bottom-3 left-3">
                    <div className="flex items-center bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                      <MapPin className="w-4 h-4 mr-1 text-red-600" />
                      <span className="text-xs font-semibold text-gray-800">{brand.location}</span>
                    </div>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="p-5 flex-1 flex flex-col">
                  <div className="mb-3 flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight group-hover:text-red-600 transition-colors line-clamp-2">
                      {brand.name}
                    </h3>
                    
                    {/* Rating & Reviews */}
                    <div className="flex items-center gap-4 mb-3">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                        ))}
                        <span className="text-sm text-gray-600 ml-1">{brand.rating}</span>
                      </div>
                      <span className="text-xs text-gray-500">({brand.reviews} reviews)</span>
                    </div>
                    
                    {/* Category Badge */}
                    <div className="inline-block">
                      <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full font-medium">
                        {categories.find(cat => cat.id === brand.category)?.icon} {categories.find(cat => cat.id === brand.category)?.name}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{brand.description}</p>
                  
                  {brand.price && (
                    <div className="bg-green-50 border border-green-200 rounded-xl p-3 mb-3">
                      <p className="text-green-700 font-bold">{brand.price}</p>
                    </div>
                  )}
                  
                  <div className="mt-auto">
                    {brand.action ? (
                      <button 
                        onClick={() => {
                          setSelectedBrand(brand);
                          setShowModal(true);
                        }}
                        className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold py-2 px-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg text-sm"
                      >
                        {brand.action}
                      </button>
                    ) : (
                      <div className="text-center py-2 px-3 bg-gray-50 rounded-xl">
                        <p className="text-gray-500 text-sm font-medium">Contact for details</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BRAND MODAL ================= */}
      {showModal && selectedBrand && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative h-64 overflow-hidden">
              <Image
                src={selectedBrand.image}
                alt={selectedBrand.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
            
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{selectedBrand.name}</h3>
                  <p className="text-gray-600 flex items-center mt-1">
                    <MapPin className="w-4 h-4 mr-1 text-red-600" />
                    {selectedBrand.location}
                  </p>
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                    <span className="font-semibold">{selectedBrand.rating}</span>
                    <span className="text-gray-500 text-sm">({selectedBrand.reviews} reviews)</span>
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed">{selectedBrand.description}</p>
                
                {selectedBrand.price && (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                    <p className="text-green-700 font-bold text-lg">{selectedBrand.price}</p>
                  </div>
                )}
                
                <div className="flex gap-4">
                  <button className="flex-1 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold py-3 px-4 rounded-xl transition">
                    Contact Brand
                  </button>
                  <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl transition">
                    Visit Website
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= CTA ================= */}
      <section className="py-20 bg-gradient-to-br from-red-600 to-orange-600">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-white mb-6">Partner With Us</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-12">
            Join Brand Bengal and showcase your products to thousands of potential customers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="px-8 py-3 bg-white text-red-600 font-bold rounded-xl hover:bg-gray-100 transition">
              Become a Partner
            </a>
            <a href="/membership" className="px-8 py-3 bg-white text-red-600 font-bold rounded-xl hover:bg-gray-100 transition">
              Join as Member
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
