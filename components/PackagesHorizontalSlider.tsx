"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    Compass,
    Mountain,
    Trees,
    Waves,
    Building,
    Heart,
    MapPin,
    Users,
    Calendar,
    Clock,
    Star,
    MapIcon,
    MapPinCheck,
    ArrowRight,
} from "lucide-react";
import Link from "next/link";
export const packages = [
  {
    slug: "darjeeling",
    title: "Darjeeling",
    subtitle: "Queen of the Hills",
    tag: "Himalayan Paradise",
    duration: "5N & 6D",
    price: "₹12,999",
    desc: "A refreshing hill getaway with misty mountains, tea gardens, and colonial charm.",
    locations: "Darjeeling, Kalimpong, Kurseong, Mirik",
    image: "https://images.unsplash.com/photo-1596445856538-8e8a1d8c3a5e?w=1200",
    icon: Mountain,
    iconColor: "text-red-500",
    route: "/darjeeling",
  },
  {
    slug: "dooars",
    title: "Dooars",
    subtitle: "Wildlife Paradise",
    tag: "Wildlife Paradise",
    duration: "5N & 6D",
    price: "₹10,999",
    desc: "An immersive nature escape through dense forests, rivers, and wildlife zones.",
    locations: "Dooars, Jaldapara, Buxa, Chalsa",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=1200",
    icon: Trees,
    iconColor: "text-green-500",
    route: "/dooars",
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
    desc: "Discover art, culture, history, and flavors in India’s cultural capital.",
    locations: "Kolkata",
    image: "https://images.unsplash.com/photo-1594736797933-d0301a9c8e78?w=1200",
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
    image: "https://images.unsplash.com/photo-1580655653885-65763b2597d0?w=1200",
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
    image: "https://images.unsplash.com/photo-1602941525421-8f8b81d6d77c?w=1200",
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
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200",
    icon: Mountain,
    iconColor: "text-indigo-500",
    route: "/sikkim-tourism",
  },
  {
    slug: "bhutan-paro",
    title: "Bhutan & Paro",
    subtitle: "Land of Thunder Dragon",
    tag: "Temple Tour",
    duration: "4N & 5D",
    price: "₹15,999",
    desc: "A peaceful escape into Bhutan’s spiritual culture and scenic valleys.",
    locations: "Paro, Thimphu, Punakha, Lhuentse, Lhakhang",
    image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=1200",
    icon: Compass,
    iconColor: "text-pink-500",
    route: "/bhutan-tour",
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
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200",
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
];


gsap.registerPlugin(ScrollTrigger);




export default function PackagesHorizontalSlider() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const section = sectionRef.current!;
        const track = trackRef.current!;


        const getScrollAmount = () =>
            track.scrollWidth - window.innerWidth;

        const tween = gsap.to(track, {
            x: () => -getScrollAmount(),
            ease: "power1.out",
        });


        ScrollTrigger.create({
            trigger: section,
            start: "top top",
            end: () => `+=${getScrollAmount()}`,
            pin: true,
            scrub: 1.5,
            anticipatePin: 1,
            animation: tween,
            invalidateOnRefresh: true,
        });


        const onResize = () => ScrollTrigger.refresh();
        window.addEventListener("resize", onResize);

        return () => {
            window.removeEventListener("resize", onResize);
            ScrollTrigger.getAll().forEach(st => st.kill());
        };

    }, []);

    return (
        <section ref={sectionRef} className="relative h-screen bg-gray-50 overflow-hidden">
            {/* HEADING */}
            <div className="max-w-7xl mx-auto px-6 pt-24 pb-10">
                <div className="">
                    <div className="flex  gap-2 mb-3">
                        <span className="text-red-600 font-semibold">
                            Popular Packages
                        </span>
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900">
                        Explore Our <span className="text-red-600">Tour Packages</span>
                    </h2>
                </div>
            </div>

            {/* HORIZONTAL TRACK */}
            <div className="relative">
                <div
                    ref={trackRef}
                    className="
            flex gap-6
            pl-[max(1.5rem,calc((100vw-80rem)/2))]
            pr-6
          "
                >
                    {packages.map((item, i) => {
                        return (
                            <div
                                key={item.slug}
                                className="
                  w-[450px] h-[600px]
                  bg-white rounded-lg transition-all duration-300 transform \
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

                                        {/* Locations at bottom of image */}
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

                                    </div>
                                </div>
                                {/* CONTENT */}
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
                                            <Heart className="w-4 h-4" />
                                            Book Now
                                        </Link>
                                        <Link href={item.route} className="flex items-center justify-center gap-2 border border-red-600 text-red-600 px-4 py-3 rounded-xl text-sm font-semibold hover:bg-red-50 transition-colors">
                                            <Compass className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}