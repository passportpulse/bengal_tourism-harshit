"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, Star, MapPinCheck, ArrowRight, Trees, Building, Waves, Mountain, Compass } from "lucide-react";

// Foreign tours packages data
const foreignTourPackages = [
   {
            slug: "bhutan-thimpu-paro",
            title: "Bhutan-Thimpu & Paro",
            subtitle: "Land of Thunder Dragon",
            tag: "Mountain Kingdom",
            duration: "5N & 6D",
            price: "₹18,999",
            desc: "Explore the serene beauty and spiritual culture of Bhutan's Himalayan kingdom.",
            locations: "Thimphu, Paro, Punakha, Phobjikha",
            image: "https://images.unsplash.com/photo-1532008779255-4b4dd2668c84?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Qmh1dGFuLVRoaW1wdXxlbnwwfHwwfHx8MA%3D%3D",
            icon: Mountain,
            iconColor: "text-pink-500",
            route: "/bhutan",
            showBookNow: true,
        },
        {
            slug: "dubai-tour",
            title: "Dubai",
            subtitle: "City of Gold",
            tag: "Luxury & Adventure",
            duration: "4N & 5D",
            price: "₹25,999",
            desc: "Experience ultra-modern architecture, luxury shopping, and desert adventures.",
            locations: "Dubai, Abu Dhabi, Sharjah",
            image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8RHViYWl8ZW58MHx8MHx8fDA%3D",
            icon: Building,
            iconColor: "text-amber-500",
            route: "/dubai",
            showBookNow: true,
        },
        {
            slug: "nepal-kathmandu",
            title: "Nepal & Kathmandu",
            subtitle: "Himalayan Kingdom",
            tag: "Mountain Escape",
            duration: "4N & 5D",
            price: "₹14,999",
            desc: "A classic Himalayan journey blending culture, nature, and adventure.",
            locations: "Kathmandu, Pokhara, Chitwan, Nagarkot",
            image: "https://images.unsplash.com/photo-1720811970882-70a5196ee37e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TmVwYWwlMjAlMjYlMjBLYXRobWFuZHV8ZW58MHx8MHx8fDA%3D",
            icon: Mountain,
            iconColor: "text-red-500",
            route: "/nepal",
            showBookNow: true,
        },
        {
            slug: "thailand-bangkok",
            title: "Thailand & Bangkok",
            subtitle: "Land of Smiles",
            tag: "Tropical Paradise",
            duration: "5N & 6D",
            price: "₹22,999",
            desc: "Discover vibrant nightlife, beaches, temples, and Thai culture.",
            locations: "Bangkok, Pattaya, Phuket, Krabi",
            image: "https://images.unsplash.com/photo-1712487650909-2aaf5c5eac36?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8VGhhaWxhbmQlMjAlMjYlMjBCYW5na29rfGVufDB8fDB8fHww",
            icon: Waves,
            iconColor: "text-teal-500",
            route: "/thailand",
            showBookNow: true,
        },
        {
            slug: "lakshadweep",
            title: "Lakshadweep",
            subtitle: "Coral Paradise",
            tag: "Island Escape",
            duration: "4N & 5D",
            price: "₹20,999",
            desc: "Explore pristine coral islands, crystal clear waters, and marine life.",
            locations: "Kavaratti, Agatti, Bangaram, Kadmat",
            image: "https://images.unsplash.com/photo-1572025310208-2fd6b91764c1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TGFrc2hhZHdlZXB8ZW58MHx8MHx8fDA%3D",
            icon: Waves,
            iconColor: "text-blue-500",
            route: "/lakshadweep",
            showBookNow: true,
        },
        {
            slug: "singapore-tour",
            title: "Singapore",
            subtitle: "Lion City",
            tag: "Modern Metropolis",
            duration: "4N & 5D",
            price: "₹24,999",
            desc: "Experience futuristic architecture, gardens, and multicultural attractions.",
            locations: "Singapore City, Sentosa, Marina Bay",
            image: "https://images.unsplash.com/photo-1496939376851-89342e90adcd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8U2luZ2Fwb3JlfGVufDB8fDB8fHww",
            icon: Building,
            iconColor: "text-red-600",
            route: "/singapore",
            showBookNow: true,
        },
        {
            slug: "malaysia-tour",
            title: "Malaysia",
            subtitle: "Truly Asia",
            tag: "Cultural Fusion",
            duration: "5N & 6D",
            price: "₹21,999",
            desc: "Discover diverse cultures, modern cities, and tropical rainforests.",
            locations: "Kuala Lumpur, Penang, Langkawi, Genting",
            image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200",
            icon: Compass,
            iconColor: "text-blue-600",
            route: "/malaysia",
            showBookNow: true,
        },
        {
            slug: "bali-tour",
            title: "Bali",
            subtitle: "Island of Gods",
            tag: "Tropical Paradise",
            duration: "5N & 6D",
            price: "₹23,999",
            desc: "Experience spiritual temples, rice terraces, and pristine beaches.",
            locations: "Ubud, Kuta, Seminyak, Nusa Dua",
            image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=1200",
            icon: Trees,
            iconColor: "text-green-600",
            route: "/bali",
            showBookNow: true,
        },
        {
            slug: "maldives-tour",
            title: "Maldives",
            subtitle: "Tropical Heaven",
            tag: "Luxury Islands",
            duration: "5N & 6D",
            price: "₹35,999",
            desc: "Relax in overwater villas with crystal clear waters and coral reefs.",
            locations: "Male, Atolls, Resort Islands",
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32de4?w=1200",
            icon: Waves,
            iconColor: "text-cyan-600",
            route: "/maldives",
            showBookNow: true,
        },
];

export default function ForeignToursPackagesPage() {
    return (
        <main className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="relative h-[60vh] overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=2070&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="International Tourism"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-red-900/70 via-orange-800/50 to-yellow-900/40"></div>
                </div>
                
                <div className="relative z-10 h-full flex items-center justify-center px-6">
                    <div className="text-center max-w-5xl mx-auto">
                        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-6 py-3 mb-8">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            <span className="text-white font-medium text-sm">International Adventures</span>
                        </div>
                        
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                            Foreign
                            <span className="block bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                                Tour Packages
                            </span>
                        </h1>
                        
                        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
                            Explore exotic destinations worldwide with our curated international tour packages
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/packages" className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/30 transition-all">
                                <ArrowRight className="w-5 h-5 rotate-180" />
                                Back to All Packages
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Packages Grid Section */}
            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Popular <span className="text-red-600">Foreign</span> Tour Packages
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            From Southeast Asia to Middle East, discover world's most amazing destinations
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {foreignTourPackages.map((item, i) => (
                            <div
                                key={item.slug}
                                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col group"
                            >
                                {/* Image */}
                                <div className="relative h-56 overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        priority={i < 3}
                                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                    
                                    {/* Title overlay */}
                                    <div className="absolute top-4 left-4">
                                        <h3 className="inline-flex items-center gap-2 bg-white text-black text-sm font-medium px-3 py-2 rounded-lg shadow">
                                            <MapPinCheck className="w-4 h-4" />
                                            <span>{item.title}</span>
                                        </h3>
                                    </div>
                                    
                                    {/* Locations overlay */}
                                    <div className="absolute bottom-0 left-0 right-0 p-4">
                                        <div className="overflow-hidden">
                                            <div className="flex items-center gap-1 whitespace-nowrap">
                                                {item.locations.split(',').map((location, index) => (
                                                    <div key={index} className="flex items-center">
                                                        <span className="text-sm text-white font-medium">{location.trim()}</span>
                                                        {index < item.locations.split(',').length - 1 && (
                                                            <ArrowRight className="w-3 h-3 text-white shrink-0 mx-1" />
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Content */}
                                <div className="p-6 flex flex-col flex-1">
                                    {/* Badge */}
                                    <div className="flex items-center gap-2 mb-3">
                                        <item.icon className={`w-4 h-4 ${item.iconColor}`} />
                                        <span className="text-xs font-medium text-gray-600">International Tour</span>
                                    </div>

                                    {/* Title and Subtitle */}
                                    <div className="mb-4">
                                        <h3 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h3>
                                        <p className="text-sm text-gray-600">{item.subtitle}</p>
                                    </div>

                                    {/* Tag and Duration */}
                                    <div className="grid grid-cols-2 gap-3 mb-4">
                                        <div className="flex items-center gap-2 text-sm text-gray-600">
                                            <Compass className="w-4 h-4 text-gray-400" />
                                            <span>{item.tag}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-gray-600">
                                            <Calendar className="w-4 h-4 text-gray-400" />
                                            <span>{item.duration}</span>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <div className="mb-4">
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>

                                    {/* Price */}
                                    <div className="mt-auto mb-4">
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-sm text-gray-500">Starting from</span>
                                            <span className="text-2xl font-bold text-red-600">
                                                {item.price}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex gap-2">
                                        <Link
                                            href="/book-tour"
                                            className="flex-1 flex items-center justify-center gap-2 bg-red-600 text-white py-3 rounded-xl text-sm font-semibold hover:bg-red-700 transition-colors"
                                        >
                                            Book Now
                                        </Link>
                                        <Link href={item.route} className="flex items-center justify-center gap-2 border border-red-600 text-red-600 px-4 py-3 rounded-xl text-sm font-semibold hover:bg-red-50 transition-colors">
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
