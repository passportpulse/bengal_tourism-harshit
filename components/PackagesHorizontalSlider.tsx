"use client";

import { useState } from "react";
import Image from "next/image";
import { Calendar, Clock, Star, MapIcon, MapPinCheck, ArrowRight, Trees, Building, Waves, Mountain, Compass } from "lucide-react";
import Link from "next/link";

// Package categories with their respective packages
const packageCategories = {

    "BENGAL BECKONS": [
        {
            slug: "darjeeling-queen-hills",
            title: "Darjeeling",
            subtitle: "Queen of the Hills",
            tag: "Himalayan Paradise",
            duration: "5N & 6D",
            price: "₹12,999",
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
            price: "₹8,999",
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
            price: "₹9,999",
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
            price: "₹7,999",
            desc: "A serene coastal escape with pristine beaches and swaying palms.",
            locations: "Bakkhali, Henry Island, Jambudwip, Frasergunj",
            image: "https://images.unsplash.com/photo-1736782487579-79f9cfc5570a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8QmFra2hhbGl8ZW58MHx8MHx8fDA%3D",
            icon: Waves,
            iconColor: "text-cyan-500",
            route: "/bakkhali",
            showBookNow: true,
        },
    ],
    "HOT SPOTS": [
        {
            slug: "darjeeling-kalimpong",
            title: "Darjeeling & Kalimpong",
            subtitle: "Hill Station Paradise",
            tag: "Mountain Escape",
            duration: "4N & 5D",
            price: "₹11,999",
            desc: "Experience the breathtaking beauty of Himalayan hills with tea gardens and mountain views.",
            locations: "Darjeeling, Kalimpong, Gangtok",
            image: "https://images.unsplash.com/photo-1696426886039-a3b5c8774e3d?q=80&w=2274&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            icon: Mountain,
            iconColor: "text-red-500",
            route: "/darjeeling-kalimpong",
            showBookNow: true,
        },
        {
            slug: "dooars-lataguri-jaldapara",
            title: "Dooars - Lataguri & Jaldapara",
            subtitle: "Wildlife Paradise",
            tag: "Forest Safari",
            duration: "3N & 4D",
            price: "₹9,999",
            desc: "Explore the lush forests and wildlife sanctuaries of North Bengal.",
            locations: "Lataguri, Jaldapara, Gorumara",
            image: "https://images.unsplash.com/photo-1669514463894-0475a3e062ff?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            icon: Trees,
            iconColor: "text-emerald-500",
            route: "/dooars-tour",
            showBookNow: true,
        },
        {
            slug: "digha-mandarmoni",
            title: "Digha & Mandarmoni",
            subtitle: "Beach Paradise",
            tag: "Coastal Retreat",
            duration: "3N & 4D",
            price: "₹8,999",
            desc: "Relax on the pristine beaches of Bengal's most popular coastal destinations.",
            locations: "Digha, Mandarmoni, Shankarpur",
            image: "https://media-cdn.tripadvisor.com/media/photo-s/12/45/4d/69/mandarmani-sea-beach.jpg",
            icon: Waves,
            iconColor: "text-blue-500",
            route: "/digha-mandarmoni",
            showBookNow: true,
        },
        {
            slug: "bakkhali-beach",
            title: "Bakkhali",
            subtitle: "Serene Beach Escape",
            tag: "Beach Paradise",
            duration: "2N & 3D",
            price: "₹7,999",
            desc: "Discover the tranquil beaches and coastal beauty of South Bengal.",
            locations: "Bakkhali, Henry Island, Frasergunj",
            image: "https://images.unsplash.com/photo-1736782487536-0193bb1e853e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8QmFra2hhbGl8ZW58MHx8MHx8fDA%3D",
            icon: Waves,
            iconColor: "text-cyan-500",
            route: "/bakkhali",
            showBookNow: true,
        },
        {
            slug: "kolkata-city",
            title: "Kolkata",
            subtitle: "Cultural Capital",
            tag: "Heritage Tour",
            duration: "2N & 3D",
            price: "₹6,999",
            desc: "Immerse yourself in the rich culture, history, and flavors of the City of Joy.",
            locations: "Kolkata, Howrah, Belur Math",
            image: "https://images.unsplash.com/photo-1603813507806-0d311a6eecd1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8S29sa2F0YXxlbnwwfHwwfHx8MA%3D%3D",
            icon: Building,
            iconColor: "text-purple-500",
            route: "/kolkata",
            showBookNow: true,
        },
        {
            slug: "regional-bengal",
            title: "Regional Bengal",
            subtitle: "Complete Bengal Experience",
            tag: "Cultural Tour",
            duration: "6N & 7D",
            price: "₹15,999",
            desc: "A comprehensive tour covering the diverse landscapes and cultures of Bengal.",
            locations: "Kolkata, Sundarban, Digha, Darjeeling",
            image: "https://images.unsplash.com/photo-1760344654401-43c9fac457ff?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFJlZ2lvbmFsJTIwQmVuZ2FsfGVufDB8fDB8fHww",
            icon: Compass,
            iconColor: "text-orange-500",
            route: "/regional-bengal",
            showBookNow: true,
        },
    ],
   
    "EXCLUSIVE": [
        {
            slug: "medical-tourism",
            title: "Medical Tourism",
            subtitle: "Healthcare Journey",
            tag: "Wellness & Health",
            duration: "Custom",
            price: "Contact for Price",
            desc: "Access world-class medical facilities and expert healthcare services for your treatment needs.",
            locations: "Kolkata, Delhi, Mumbai, Chennai",
            image: "https://images.unsplash.com/photo-1745420052490-285dbfa1cf4d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVkaWNhbCUyMHRvdXJpc218ZW58MHx8MHx8fDA%3D",
            icon: Building,
            iconColor: "text-blue-500",
            route: "/medical-tourism",
            showBookNow: true,
        },
        {
            slug: "air-ambulance",
            title: "Air Ambulance Service",
            subtitle: "Emergency Medical Transport",
            tag: "Emergency Service",
            duration: "24/7 Service",
            price: "Contact for Price",
            desc: "Rapid and reliable air ambulance services for critical medical emergencies.",
            locations: "Pan India Service",
            image: "https://images.unsplash.com/photo-1696243144343-56a235858dce?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fEFpciUyMEFtYnVsYW5jZSUyMFNlcnZpY2V8ZW58MHx8MHx8fDA%3D",
            icon: Compass,
            iconColor: "text-red-600",
            route: "/air-ambulance",
            showBookNow: true,
        },
        {
            slug: "wellness-tourism",
            title: "Wellness Tourism",
            subtitle: "Spa-Massage-Yoga",
            tag: "Relaxation & Rejuvenation",
            duration: "3N & 4D",
            price: "₹15,999",
            desc: "Rejuvenate your mind, body, and soul with premium spa treatments and yoga sessions.",
            locations: "Rishikesh, Kerala, Goa",
            image: "https://ik.imgkit.net/3vlqs5axxjf/TW-Asia/ik-seo/uploadedImages/Industry/Travel_Trends/GettyImages-599463782/Wellness-tourism-takes-the-spotlight-for-2022-trav.jpg?tr=w-780%2Ch-440%2Cfo-auto",
            icon: Trees,
            iconColor: "text-green-500",
            route: "/wellness-tourism",
            showBookNow: true,
        },
        {
            slug: "tea-tourism",
            title: "Tea Tourism",
            subtitle: "Tea Garden Experience",
            tag: "Cultural Experience",
            duration: "2N & 3D",
            price: "₹8,999",
            desc: "Explore lush tea gardens, learn tea processing, and enjoy authentic tea tasting sessions.",
            locations: "Darjeeling, Assam, Munnar",
            image: "https://images.unsplash.com/photo-1723214520491-7f90eeda2cdd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VGVhJTIwVG91cmlzbSUyMnxlbnwwfHwwfHx8MA%3D%3D",
            icon: Mountain,
            iconColor: "text-emerald-600",
            route: "/tea-tourism",
            showBookNow: true,
        },
        {
            slug: "hotel-resort",
            title: "Hotel-Resort-Guest House",
            subtitle: "Premium Accommodation",
            tag: "Luxury Stay",
            duration: "Flexible",
            price: "Contact for Price",
            desc: "Exclusive accommodations ranging from luxury resorts to cozy guest houses across India.",
            locations: "Pan India",
            image: "https://images.unsplash.com/photo-1761470371217-a4de0ff0e8df?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SG90ZWwtUmVzb3J0LUd1ZXN0JTIwSG91c2V8ZW58MHx8MHx8fDA%3D",
            icon: Building,
            iconColor: "text-purple-500",
            route: "/hotel-resort",
            showBookNow: true,
        },
    ],
    "FOREIGN TOURS": [
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
            route: "/bhutan-tour",
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
            route: "/dubai-tour",
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
            route: "/nepal-tour",
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
            route: "/thailand-tour",
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
            route: "/lakshadweep-tour",
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
            route: "/singapore-tour",
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
            route: "/malaysia-tour",
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
            route: "/bali-tour",
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
            route: "/maldives-tour",
            showBookNow: true,
        },
    ],
    
"PACKAGES": [

        {
            slug: "darjeeling",
            title: "Darjeeling",
            subtitle: "Queen of the Hills",
            tag: "Himalayan Paradise",
            duration: "5N & 6D",
            price: "₹12,999",
            desc: "A refreshing hill getaway with misty mountains, tea gardens, and colonial charm.",
            locations: "Darjeeling, Kalimpong, Kurseong, Mirik",
            image: "https://images.unsplash.com/photo-1661169118679-1e1d6d40813a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TWlyaWt8ZW58MHx8MHx8fDA%3D",
            icon: Mountain,
            iconColor: "text-red-500",
            route: "/darjeeling",
            showBookNow: false,
        },
        {
            slug: "digha",
            title: "Digha",
            subtitle: "Beach Paradise",
            tag: "Beach Paradise",
            duration: "4N & 5D",
            price: "₹8,999",
            desc: "A relaxing coastal retreat with serene beaches and scenic sunsets.",
            locations: "Digha, Mandarmoni, Shankarpur, Tajpur",
            image: "https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?w=1200",
            icon: Waves,
            iconColor: "text-blue-500",
            route: "/digha",
        },
        {
            slug: "kolkata",
            title: "Kolkata",
            subtitle: "City of Joy",
            tag: "Cultural Heritage",
            duration: "Custom",
            price: "₹6,999",
            desc: "Discover art, culture, history, and flavors in India's cultural capital.",
            locations: "Kolkata",
            image: "https://images.unsplash.com/photo-1728156615964-5228939b9e31?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fENpdHklMjBvZiUyMEpveXxlbnwwfHwwfHx8MA%3D%3D",
            icon: Building,
            iconColor: "text-purple-500",
            route: "/kolkata",
        },
        {
            slug: "sundarban",
            title: "Sundarban",
            subtitle: "Mangrove Forest",
            tag: "Mangrove Forest",
            duration: "3N & 4D",
            price: "₹9,999",
            desc: "A thrilling mangrove adventure through rivers, creeks, and wildlife habitats.",
            locations: "Sundarban, Sajnekhali, Godkhali, Kakdwip",
            image: "https://images.unsplash.com/photo-1701006516207-20e961e92aa5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8R29ka2hhbGl8ZW58MHx8MHx8fDA%3D",
            icon: Trees,
            iconColor: "text-emerald-500",
            route: "/sundarban",
        },
        {
            slug: "puri-konark",
            title: "Puri & Konark",
            subtitle: "Spiritual Journey",
            tag: "Temple Tour",
            duration: "5N & 6D",
            price: "₹11,999",
            desc: "A soulful journey through ancient temples and coastal spirituality.",
            locations: "Puri, Bhubaneswar, Konark, Chilika, Gopalpur",
            image: "https://images.unsplash.com/photo-1718696070982-20e85093bca4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q2hpbGlrYXxlbnwwfHwwfHx8MA%3D%3D",
            icon: Building,
            iconColor: "text-orange-500",
            route: "/odisha-tourism",
        },
        {
            slug: "sikkim-gangtok",
            title: "Sikkim & Gangtok",
            subtitle: "Himalayan Beauty",
            tag: "Mountain Escape",
            duration: "5N & 6D",
            price: "₹13,999",
            desc: "Explore pristine landscapes, monasteries, and snow-clad mountains.",
            locations: "Sikkim, Gangtok, Pelling, Lachen, Lachung",
            image: "https://images.unsplash.com/photo-1724600457405-a7eeabcff6b5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UGVsbGluZ3xlbnwwfHwwfHx8MA%3D%3D",
            icon: Mountain,
            iconColor: "text-indigo-500",
            route: "/sikkim-tourism",
        },
        {
            slug: "bakkhali",
            title: "Bakkhali",
            subtitle: "Beach Paradise",
            tag: "Beach Paradise",
            duration: "4N & 5D",
            price: "₹7,999",
            desc: "A serene coastal escape with pristine beaches and swaying palms.",
            locations: "Bakkhali, Henry Island, Jambudwip, Frasergunj",
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32de4?w=1200",
            icon: Waves,
            iconColor: "text-cyan-500",
            route: "/bakkhali",
        },
        {
            slug: "murshidabad",
            title: "Murshidabad",
            subtitle: "Historical City",
            tag: "Heritage Tour",
            duration: "3N & 4D",
            price: "₹8,999",
            desc: "Explore the rich history and cultural heritage of this ancient city.",
            locations: "Murshidabad, Hazardwari Palace, Katra Mosque",
            image: "https://images.unsplash.com/photo-1528709673176-3c6c1e8f1c3e?w=1200",
            icon: Building,
            iconColor: "text-amber-600",
            route: "/murshidabad",
        },
        {
            slug: "bhutan-paro",
            title: "Bhutan & Paro",
            subtitle: "Land of Thunder Dragon",
            tag: "Temple Tour",
            duration: "4N & 5D",
            price: "₹15,999",
            desc: "A peaceful escape into Bhutan's spiritual culture and scenic valleys.",
            locations: "Paro, Thimphu, Punakha, Lhuentse, Lhakhang",
            image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=1200",
            icon: Mountain,
            iconColor: "text-pink-500",
            route: "/bhutan-tour",
        },
        {
            slug: "andaman-nicobar-tourism",
            title: "Andaman & Nicobar",
            subtitle: "Island Paradise",
            tag: "Beach & Adventure",
            duration: "5N & 6D",
            price: "₹18,999",
            desc: "Discover pristine beaches, coral reefs, and tropical island adventures.",
            locations: "Port Blair, Havelock, Neil Island, Ross Island",
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32de4?w=1200",
            icon: Waves,
            iconColor: "text-teal-500",
            route: "/andaman-nicobar-tourism",
        },
        {
            slug: "bangkok-pattaya",
            title: "Bangkok & Pattaya",
            subtitle: "Thai Adventure",
            tag: "City & Beach",
            duration: "4N & 5D",
            price: "₹18,999",
            desc: "Experience vibrant nightlife, beaches, temples, and Thai culture.",
            locations: "Bangkok, Pattaya, Ayutthaya, Chiang Mai, Chiang Rai",
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32de4?w=1200",
            icon: Compass,
            iconColor: "text-teal-500",
            route: "/thailand-tour",
        },
        {
            slug: "nepal-kathmandu",
            title: "Nepal / Kathmandu",
            subtitle: "Himalayan Kingdom",
            tag: "Mountain Escape",
            duration: "4N & 5D",
            price: "₹14,999",
            desc: "A classic Himalayan journey blending culture, nature, and adventure.",
            locations: "Kathmandu, Pokhara, Chitwan, Lhasa",
            image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200",
            icon: Mountain,
            iconColor: "text-red-500",
            route: "/nepal-tour",
        },
    ],
     "OTHERS": [
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
            showBookNow: true,
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
            showBookNow: true,
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
            showBookNow: true,
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
            showBookNow: true,
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
            showBookNow: true,
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
            showBookNow: true,
        },
    ],
};

export default function PackagesHorizontalSlider() {
    const [activeCategory, setActiveCategory] = useState<keyof typeof packageCategories>("BENGAL BECKONS");
const categories = Object.keys(packageCategories) as Array<
  keyof typeof packageCategories
>;

    return (
        <section className="relative bg-gray-50 py-24">
            {/* HEADING */}
            <div className="max-w-7xl mx-auto px-6">
                <div className=" mb-12">
                    <div className="flex  gap-2 mb-3 ">
                        <span className="text-red-600 font-semibold">
                            Popular Packages
                        </span>
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900">
                        Explore Our <span className="text-red-600">Tour Packages</span>
                    </h2>
                </div>
            </div>

            {/* TABS */}
     <div className="max-w-7xl mx-auto px-6 mb-8">

  {/* ===== MOBILE DROPDOWN ===== */}
  <div className="block md:hidden">
    <select
      value={activeCategory}
      onChange={(e) =>
        setActiveCategory(e.target.value as keyof typeof packageCategories)
      }
      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500"
    >
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  </div>

  {/* ===== DESKTOP TABS ===== */}
  <div className="hidden md:block">
    <div className="flex gap-2 border-b border-gray-200">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`px-6 py-3 text-sm font-medium transition-colors
            ${
              activeCategory === category
                ? "text-red-600 border-b-2 border-red-600"
                : "text-gray-600 hover:text-red-600 border-b-2 border-transparent"
            }`}
        >
          {category}
        </button>
      ))}
    </div>
  </div>

</div>

            {/* PACKAGES GRID */}
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                    {packageCategories[activeCategory].slice(0, 6).map((item, i) => {
                        return (
                            <div
                                key={item.slug}
                                className="
                  max-w-[400px]
                  bg-white rounded-lg transition-all duration-300 transform 
                  overflow-hidden flex-shrink-0
                  flex flex-col group 
                "
                            >
                                <div className="p-4">
                                    {/* IMAGE */}
                                    <div className="relative h-56 overflow-hidden bg-gray-200 rounded-t-base">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            priority={i < 3}
                                            className="
                      object-cover
                      transition-transform duration-700 ease-out
                      group-hover:scale-105
                      brightness-95 contrast-105
                    "
                                        />
                                        {/* White overlay for better text readability */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent opacity-50"></div>

                                        {/* Title overlay on top of image */}
                                        <div className="absolute top-2 left-2">
                                            <h3 className="inline-flex items-center gap-2 w-fit bg-white text-black text-sm font-medium px-3 py-2 rounded-lg shadow">
                                                <MapPinCheck className="w-4 h-4 shrink-0" />
                                                <span>{item.title}</span>
                                            </h3>
                                        </div>

                                        {/* Locations at bottom of image - Hide for all categories except PACKAGES */}
                                        {activeCategory === "PACKAGES" && (
                                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-black/50 p-3">
                                                <div className="overflow-hidden">
                                                    <div
                                                        className="flex items-center gap-1 whitespace-nowrap transition-transform duration-700 ease-in-out"
                                                        onMouseEnter={(e) => {
                                                            const target = e.currentTarget;
                                                            target.style.transform = 'translateX(-20%)';
                                                            target.style.transition = 'transform 0.7s ease-in-out';
                                                        }}
                                                        onMouseLeave={(e) => {
                                                            const target = e.currentTarget;
                                                            target.style.transform = 'translateX(0)';
                                                            target.style.transition = 'transform 0.7s ease-in-out';
                                                        }}
                                                    >
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
                                        )}

                                    </div>
                                </div>
                                {/* CONTENT */}
                                <div className="p-6 flex flex-col flex-1">
                                    {/* Badge */}
                                    <div className="flex items-center gap-2 mb-3">

                                        <item.icon className={`w-4 h-4 ${item.iconColor}`} />
                                        <span className="text-xs font-medium text-gray-600">Exclusive Tour</span>
                                    </div>

                                    {/* Title and Subtitle - Hide subtitle for all categories except PACKAGES */}
                                    <div className="mb-4">
                                        <h3 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h3>
                                        {activeCategory === "PACKAGES" && (
                                            <p className="text-sm text-gray-600">{item.subtitle}</p>
                                        )}
                                    </div>

                                    {/* Tag and Duration - Hide duration for all categories except PACKAGES */}
                                    <div className="grid grid-cols-2 gap-3 mb-4">
                                        <div className="flex items-center gap-2 text-sm text-gray-600">
                                            <Compass className="w-4 h-4 text-gray-400" />
                                            <span>{item.tag}</span>
                                        </div>
                                        {activeCategory === "PACKAGES" && (
                                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                                <Calendar className="w-4 h-4 text-gray-400" />
                                                <span>{item.duration}</span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Description */}
                                    <div className="mb-4">
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>

                                    {/* Price - Hide for all categories except PACKAGES */}
                                    {activeCategory === "PACKAGES" && (
                                        <div className="mt-auto mb-4">
                                            <div className="flex items-baseline gap-2">
                                                <span className="text-sm text-gray-500">Starting from</span>
                                                <span className="text-2xl font-bold text-red-600">
                                                    {item.price}
                                                </span>
                                            </div>
                                        </div>
                                    )}

                                    {/* Action Buttons */}
                                    <div className="flex gap-2">
                                        {activeCategory === "PACKAGES" ? (
                                            <>
                                                <Link
                                                    href="/book-tour"
                                                    className="flex-1 flex items-center justify-center gap-2 bg-red-600 text-white py-3 rounded-xl text-sm font-semibold hover:bg-red-700 transition-colors"
                                                >
                                                    Book Now
                                                </Link>
                                                <Link href={item.route} className="flex items-center justify-center gap-2 border border-red-600 text-red-600 px-4 py-3 rounded-xl text-sm font-semibold hover:bg-red-50 transition-colors">
                                                    View Details
                                                </Link>
                                            </>
                                        ) : (
                                            <Link href={item.route} className="flex-1 flex items-center justify-center gap-2 bg-red-600 text-white px-4 py-3 rounded-xl text-sm font-semibold hover:bg-red-700 transition-colors">
                                                Explore
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* EXPLORE ALL BUTTON */}
                <div className="text-center mt-12">
                    <Link
                        href="/packages"
                        className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-700 transition transform hover:scale-105"
                    >
                        Explore All Packages
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
}