"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, Star, MapPinCheck, ArrowRight, Trees, Building, Waves, Mountain, Compass } from "lucide-react";

// Bengal Beckons packages data
const bengalPackages = [
    {
        slug: "darjeeling-queen-hills",
        title: "Darjeeling",
        subtitle: "Queen of the Hills",
        tag: "Himalayan Paradise",
        duration: "5N & 6D",
        price: "₹ 14500",
        desc: "A refreshing hill getaway with misty mountains, tea gardens, and colonial charm.",
        locations: "Darjeeling, Kalimpong, Kurseong, Mirik",
        image: "https://images.unsplash.com/photo-1698753864905-a447aa362ec9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRhcmplZWxpbmd8ZW58MHx8MHx8fDA%3D",
        icon: Mountain,
        iconColor: "text-red-500",
        route: "/darjeeling",
        showBookNow: true,
    },
    {
        slug: "digha-sea-sand",
        title: "Digha",
        subtitle: "Sea & Sand of the East",
        tag: "Beach Paradise",
        duration: "4N & 5D",
        price: "₹ 12700",
        desc: "A relaxing coastal retreat with serene beaches and scenic sunsets.",
        locations: "Digha, Mandarmoni, Shankarpur, Tajpur",
        image: "https://images.unsplash.com/photo-1657282928361-ec9de3f2bc74?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        icon: Waves,
        iconColor: "text-blue-500",
        route: "/digha",
        showBookNow: true,
    },
    {
        slug: "sundarban-wildlife",
        title: "Sundarban",
        subtitle: "Largest Mangrove of the World",
        tag: "Wildlife Forest & Jungle Safari",
        duration: "3N & 4D",
        price: "₹ 9100",
        desc: "A thrilling mangrove adventure through rivers, creeks, and wildlife habitats.",
        locations: "Sundarban, Sajnekhali, Godkhali, Kakdwip",
        image: "https://images.unsplash.com/photo-1706459671568-9809c9d13430?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U3VuZGFyYmFufGVufDB8fDB8fHww",
        icon: Trees,
        iconColor: "text-emerald-500",
        route: "/sundarban",
        showBookNow: true,
    },
    {
        slug: "kolkata-city-joy",
        title: "Kolkata",
        subtitle: "City of Joy",
        tag: "Cultural Heritage",
        duration: "Custom",
        price: "₹6,999",
        desc: "Discover art, culture, history, and flavors in India's cultural capital.",
        locations: "Kolkata",
        image: "https://images.unsplash.com/photo-1647102208648-5f3175091dda?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8S29sa2F0YXxlbnwwfHwwfHx8MA%3D%3D",
        icon: Building,
        iconColor: "text-purple-500",
        route: "/kolkata",
        showBookNow: true,
    },
    {
        slug: "bakkhali-beach",
        title: "Bakkhali",
        subtitle: "Serene Beach Escape",
        tag: "Beach Paradise",
        duration: "4N & 5D",
        price: "₹ 12700",
        desc: "A serene coastal escape with pristine beaches and swaying palms.",
        locations: "Bakkhali, Henry Island, Jambudwip, Frasergunj",
        image: "https://images.unsplash.com/photo-1736782487579-79f9cfc5570a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8QmFra2hhbGl8ZW58MHx8MHx8fDA%3D",
        icon: Waves,
        iconColor: "text-cyan-500",
        route: "/bakkhali",
        showBookNow: true,
    },
    {
        slug: "darjeeling-kalimpong",
        title: "Darjeeling & Kalimpong",
        subtitle: "Hill Station Paradise",
        tag: "Mountain Escape",
        duration: "4N & 5D",
        price: "₹ 12700",
        desc: "Experience the breathtaking beauty of Himalayan hills with tea gardens and mountain views.",
        locations: "Darjeeling, Kalimpong, Gangtok",
        image: "https://images.unsplash.com/photo-1696426886039-a3b5c8774e3d?q=80&w=2274&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        icon: Mountain,
        iconColor: "text-red-500",
        route: "/darjeeling",
        showBookNow: true,
    },
    {
        slug: "dooars-lataguri-jaldapara",
        title: "Dooars - Lataguri & Jaldapara",
        subtitle: "Wildlife Paradise",
        tag: "Forest Safari",
        duration: "3N & 4D",
        price: "₹ 9100",
        desc: "Explore the lush forests and wildlife sanctuaries of North Bengal.",
        locations: "Lataguri, Jaldapara, Gorumara",
        image: "https://images.unsplash.com/photo-1669514463894-0475a3e062ff?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        icon: Trees,
        iconColor: "text-emerald-500",
        route: "/dooars",
        showBookNow: true,
    },
    {
        slug: "digha-mandarmoni",
        title: "Digha & Mandarmoni",
        subtitle: "Beach Paradise",
        tag: "Coastal Retreat",
        duration: "3N & 4D",
        price: "₹ 9100",
        desc: "Relax on the pristine beaches of Bengal's most popular coastal destinations.",
        locations: "Digha, Mandarmoni, Shankarpur",
        image: "https://media-cdn.tripadvisor.com/media/photo-s/12/45/4d/69/mandarmani-sea-beach.jpg",
        icon: Waves,
        iconColor: "text-blue-500",
        route: "/digha",
        showBookNow: true,
    },
    {
        slug: "regional-bengal",
        title: "Regional Bengal",
        subtitle: "Complete Bengal Experience",
        tag: "Cultural Tour",
        duration: "6N & 7D",
        price: "₹ 14500",
        desc: "A comprehensive tour covering the diverse landscapes and cultures of Bengal.",
        locations: "Kolkata, Sundarban, Digha, Darjeeling",
        image: "https://images.unsplash.com/photo-1760344654401-43c9fac457ff?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFJlZ2lvbmFsJTIwQmVuZ2FsfGVufDB8fDB8fHww",
        icon: Compass,
        iconColor: "text-orange-500",
        route: "/religious-pilgrimage",
        showBookNow: true,
    },
];

export default function BengalBeckonsPackagesPage() {
    return (
        <main className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="relative h-[60vh] overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1593696140826-c58b021acf8b?w=2070&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Bengal Tourism"
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
                            <span className="text-white font-medium text-sm">Explore Beautiful Bengal</span>
                        </div>
                        
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                            Bengal
                            <span className="block bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                                Beckons
                            </span>
                        </h1>
                        
                        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
                            Discover the diverse landscapes, rich culture, and warm hospitality of West Bengal
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
                            Popular <span className="text-red-600">Bengal</span> Tour Packages
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            From the Himalayan foothills to the Bay of Bengal, experience the best of West Bengal
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {bengalPackages.map((item, i) => (
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
                                        <span className="text-xs font-medium text-gray-600">Bengal Tour</span>
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
