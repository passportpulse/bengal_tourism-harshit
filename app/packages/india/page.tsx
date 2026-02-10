"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, Star, MapPinCheck, ArrowRight, Trees, Building, Waves, Mountain, Compass } from "lucide-react";

// India packages data
const indiaPackages = [
      {
            slug: "puri-odisha",
            title: "Puri & Odisha",
            subtitle: "Temple Paradise",
            tag: "Spiritual Journey",
            duration: "4N & 5D",
            price: "₹11,999",
            desc: "Explore ancient temples, beaches, and rich cultural heritage of Odisha.",
            locations: "Puri, Bhubaneswar, Konark, Chilika",
            image: "https://images.unsplash.com/photo-1629723248038-8b3bc1ecce29?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHVyaS1vZGlzaGF8ZW58MHx8MHx8fDA%3D",
            icon: Building,
            iconColor: "text-orange-500",
            route: "/odisha-tourism",
            showBookNow: false,
        },
        {
            slug: "sikkim-gangtok",
            title: "Sikkim & Gangtok",
            subtitle: "Himalayan Beauty",
            tag: "Mountain Escape",
            duration: "5N & 6D",
            price: "₹13,999",
            desc: "Discover pristine landscapes, monasteries, and snow-clad mountains.",
            locations: "Sikkim, Gangtok, Pelling, Lachen",
            image: "https://images.unsplash.com/photo-1635346537940-9d51faeb6e32?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U2lra2ltJTIwJTI2JTIwR2FuZ3Rva3xlbnwwfHwwfHx8MA%3D%3D",
            icon: Mountain,
            iconColor: "text-indigo-500",
            route: "/sikkim-tourism",
            showBookNow: false,
        },
        {
            slug: "silk-route",
            title: "Silk Route",
            subtitle: "Ancient Trade Path",
            tag: "Mountain Adventure",
            duration: "6N & 7D",
            price: "₹14,999",
            desc: "Journey through the historic Silk Route with breathtaking mountain views.",
            locations: "Gangtok, Zuluk, Nathula, Tsomgo Lake",
            image: "https://plus.unsplash.com/premium_photo-1671639169260-18cec0fa6a51?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8U2lsayUyMFJvdXRlfGVufDB8fDB8fHww",
            icon: Compass,
            iconColor: "text-amber-600",
            route: "/silk-route-tour",
            showBookNow: false,
        },
        {
            slug: "goa-beaches",
            title: "Goa",
            subtitle: "Beach Paradise",
            tag: "Coastal Fun",
            duration: "4N & 5D",
            price: "₹12,999",
            desc: "Experience vibrant beaches, nightlife, and Portuguese heritage.",
            locations: "North Goa, South Goa, Panjim, Old Goa",
            image: "https://images.unsplash.com/photo-1587922546307-776227941871?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEdvYXxlbnwwfHwwfHx8MA%3D%3D",
            icon: Waves,
            iconColor: "text-teal-500",
            route: "/goa-tour",
            showBookNow: false,
        },
        {
            slug: "himachal-tour",
            title: "Himachal",
            subtitle: "Land of Gods",
            tag: "Hill Station",
            duration: "5N & 6D",
            price: "₹13,999",
            desc: "Explore scenic hill stations, temples, and adventure activities.",
            locations: "Shimla, Manali, Dharamshala, Kullu",
            image: "https://images.unsplash.com/photo-1503265192943-9d7eea6fc77a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8SGltYWNoYWx8ZW58MHx8MHx8fDA%3D",
            icon: Mountain,
            iconColor: "text-green-600",
            route: "/himachal-tourism",
            showBookNow: false,
        },
        {
            slug: "jammu-kashmir",
            title: "Jammu & Kashmir",
            subtitle: "Paradise on Earth",
            tag: "Heavenly Beauty",
            duration: "6N & 7D",
            price: "₹16,999",
            desc: "Experience the breathtaking valleys, lakes, and Mughal gardens.",
            locations: "Srinagar, Gulmarg, Pahalgam, Sonamarg",
            image: "https://plus.unsplash.com/premium_photo-1697730426664-f04d9916f700?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8SmFtbXUlMjAlMjYlMjBLYXNobWlyfGVufDB8fDB8fHww",
            icon: Mountain,
            iconColor: "text-blue-600",
            route: "/kashmir-tour",
            showBookNow: false,
        },
];

export default function IndiaPackagesPage() {
    return (
        <main className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="relative h-[60vh] overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1524492412937-b28074a5607e?w=2070&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="India Tourism"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-800/50 to-orange-900/40"></div>
                </div>
                
                <div className="relative z-10 h-full flex items-center justify-center px-6">
                    <div className="text-center max-w-5xl mx-auto">
                        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-6 py-3 mb-8">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            <span className="text-white font-medium text-sm">Discover Incredible India</span>
                        </div>
                        
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                            India
                            <span className="block bg-gradient-to-r from-orange-400 via-yellow-400 to-red-400 bg-clip-text text-transparent">
                                Tourism Packages
                            </span>
                        </h1>
                        
                        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
                            Explore the diverse landscapes, cultures, and heritage of incredible India
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
                            Popular <span className="text-orange-600">India</span> Tour Packages
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            From the Himalayas to the beaches, discover the best of India with our curated tour packages
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {indiaPackages.map((item, i) => (
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
                                        <span className="text-xs font-medium text-gray-600">Exclusive Tour</span>
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
                                            <span className="text-2xl font-bold text-orange-600">
                                                {item.price}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex gap-2">
                                        <Link
                                            href="/book-tour"
                                            className="flex-1 flex items-center justify-center gap-2 bg-orange-600 text-white py-3 rounded-xl text-sm font-semibold hover:bg-orange-700 transition-colors"
                                        >
                                            Book Now
                                        </Link>
                                        <Link href={item.route} className="flex items-center justify-center gap-2 border border-orange-600 text-orange-600 px-4 py-3 rounded-xl text-sm font-semibold hover:bg-orange-50 transition-colors">
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
