"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {Star} from "lucide-react";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  message: string;
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rahul Verma",
    role: "Travel Blogger",
    message:
      "Bengal Tourism made my journey smooth and unforgettable. Everything was perfectly planned.",
    avatar: "https://i.pravatar.cc/100?img=11",
  },
  {
    id: 2,
    name: "Ananya Sharma",
    role: "Corporate Professional",
    message:
      "Hotels, transport and guides were top-notch. Very professional experience overall.",
    avatar: "https://i.pravatar.cc/100?img=47",
  },
  {
    id: 3,
    name: "Vikram Singh",
    role: "Photographer",
    message:
      "Perfect itineraries and beautiful locations. I captured some of my best shots here.",
    avatar: "https://i.pravatar.cc/100?img=32",
  },
  {
    id: 4,
    name: "Priya Mehta",
    role: "Entrepreneur",
    message:
      "Support team was always responsive. Everything felt premium and well managed.",
    avatar: "https://i.pravatar.cc/100?img=56",
  },
];

const TestimonialsInteractive: React.FC = () => {
  const [active, setActive] = useState(testimonials[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prevActive) => {
        const currentIndex = testimonials.findIndex(t => t.id === prevActive.id);
        const nextIndex = (currentIndex + 1) % testimonials.length;
        return testimonials[nextIndex];
      });
    }, 5000); // Change every 5 seconds

    return () => {
      clearInterval(interval);
    };
  }, [testimonials.length]);

  return (
    <section className="relative bg-[#111] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <p className="text-[#FBFAB9] font-medium mb-3">Go & Discover</p>
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">
            What’s Our Client’s <br /> Words
          </h2>
          <p className="text-gray-400 max-w-md mb-8">
            Real stories from Indian travelers who explored Bengal with us.
          </p>
          <button className="bg-[#FBFAB9] hover:bg-teal-500 text-black font-semibold px-8 py-3 rounded-lg">
            VIEW MORE
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex justify-center items-center w-[460px] h-[460px] mx-auto">

          {/* ORANGE SHAPE */}
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: "var(--theme-color, #EA3323)",
              outline: "1px solid var(--theme-color, #EA3323)",
              outlineOffset: "15px",
              borderRadius: "40% 40% 40% 40% / 40% 40% 40% 40%",
              transform: "rotate(45deg) scale(0.91)",
            }}
          />

          {/* CONTENT (counter-rotated) */}
          <div className="relative z-10 flex flex-col items-center text-center px-10 ">

            <div className="text-white text-6xl mb-3"><img src="/partners/quote1.png" alt="" /></div>

            <div className="flex gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-white"><Star className="w-6 h-6" /></span>
              ))}
            </div>

            <p className="text-white text-sm mb-6">
              {active.message}
            </p>

            <div className="bg-white p-1 rounded-xl mb-3">
              <img
                src={active.avatar}
                alt={active.name}
                className="w-20 h-20 rounded-xl object-cover"
              />
            </div>

            <h4 className="text-white font-semibold text-lg">
              {active.name}
            </h4>
            <p className="text-white/80 text-sm">{active.role}</p>
          </div>

          {/* CLICKABLE AVATARS */}
          {testimonials.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setActive(item)}
              className={`absolute w-14 h-14 rounded-full bg-white p-1 transition
                ${getAvatarPosition(index)}
                ${active.id === item.id ? "ring-4 ring-teal-400 scale-110" : "opacity-80 hover:opacity-100"}
              `}
            >
              <img
                src={item.avatar}
                alt={item.name}
                className="w-full h-full rounded-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsInteractive;

/* Avatar Positions */
function getAvatarPosition(index: number) {
  switch (index) {
    case 0:
      return "top-10 left-10";
    case 1:
      return "top-10 right-10";
    case 2:
      return "bottom-10 left-10";
    case 3:
      return "bottom-10 right-10";
    default:
      return "";
  }
}
