"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1600",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1600",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1600",
];

export default function HeroSection() {
    const [active, setActive] = useState(0);

    useEffect(() => {
        const i = setInterval(() => {
            setActive((p) => (p + 1) % images.length);
        }, 5000);
        return () => clearInterval(i);
    }, []);

    return (
        <section className="relative bg-[#f6efe6] overflow-hidden py-24">
            {/* <img
                    src="/Decore.png"
                    alt="Decorative elements"
                    className="absolute top-0 right-0 w-auto h-full object-contain"
                /> */}
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

                {/* LEFT CONTENT (UNCHANGED) */}
                <div>
                    <p className="text-yellow-500 font-semibold mb-4">
                        ✨ Bengal Tourism Welcomes You
                    </p>

                    <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
                        Explore, Experience <br /> & Expect More Than <br /> Your Expectation.
                    </h1>

                    <p className="text-gray-600 max-w-md mb-10">
                        From history and heritage to food, festivals and modern life,
                        Bengal welcomes you with stories that stay forever.
                    </p>



                    <div className="flex flex-wrap items-center gap-6">
                        <button className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-yellow-400 transition transform hover:scale-105">
                            Find out more
                        </button>

                        <button className="border-2 border-yellow-600 text-yellow-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-600 hover:text-white transition transform hover:scale-105">
                            Contact Us
                        </button>
                    </div>

                </div>

                {/* RIGHT IMAGE */}
                <div className="relative h-[520px] lg:h-[640px]">

                    {/* IMAGE SLIDER */}
                    {images.map((img, i) => (
                        <div
                            key={i}
                            className={`absolute inset-0 transition-all duration-1000 ease-out
                ${i === active ? "opacity-100 scale-100" : "opacity-0 scale-105"}
              `}
                        >
                            <Image
                                src={img}
                                alt="Travel"
                                fill
                                className="object-cover "
                                priority={i === 0}
                            />
                        </div>
                    ))}

                    {/* 🔥 DIAGONAL CUT SHAPE */}
                    <div className="absolute -bottom-30 -right-30 w-54 h-54 bg-[#f6efe6] rotate-45" />

                    {/* 🌊 PARALLAX OVERLAY */}

                    {/* 🔄 ARROWS - Bottom Right Corner */}
                    <button
                        onClick={() => setActive((active - 1 + images.length) % images.length)}
                        className="absolute -bottom-10 -right-5 w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center bg-white/80 hover:bg-white transition"
                    >
                        <ChevronLeft />
                    </button>

                    <button
                        onClick={() => setActive((active + 1) % images.length)}
                        className="absolute -bottom-10 -right-20 w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center bg-white/80 hover:bg-white transition"
                    >
                        <ChevronRight />
                    </button>

                </div>
            </div>

            {/* ✈️ PLANE DOTTED ANIMATION */}
            <div className="absolute inset-6 border border-dashed border-black/10 pointer-events-none" />


        </section>
    );
}




