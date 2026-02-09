// "use client";

// import { motion } from "framer-motion";

// export default function HeroSection() {
//   return (
//     <section
//       className="relative min-h-[80vh] flex items-center"
//       style={{
//         backgroundImage:
//           "url(https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1600)",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black/40" />

//       {/* CONTENT */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9, ease: "easeOut" }}
//           className="max-w-xl"
//         >
//           <p className="text-yellow-400 font-semibold mb-4">
//             ✨ Bengal Tourism Welcomes You
//           </p>

//           <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
//             Explore, Experience <br /> & Expect More
//           </h1>

//           <p className="text-white/90 text-lg mb-10">
//             From history and heritage to food, festivals and modern life,
//             Bengal welcomes you with stories that stay forever.
//           </p>

//           <div className="flex flex-wrap gap-6">
//             <button className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-yellow-400 transition">
//               Find out more
//             </button>

//             <button className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 hover:text-black transition">
//               Contact Us
//             </button>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const bgImages = [
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1600",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1600",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1600",
];

export default function HeroSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % bgImages.length);
    }, 5000); // change every 5 sec

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      
      {/* 🔁 BACKGROUND IMAGES */}
      <AnimatePresence>
        <motion.div
          key={active}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${bgImages[active]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </AnimatePresence>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40 z-[1]" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-xl"
        >
          <p className="text-yellow-400 font-semibold mb-4">
            ✨ Bengal Tourism Welcomes You
          </p>

          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Explore, Experience <br /> & Expect More
          </h1>

          <p className="text-white/90 text-lg mb-10">
            From history and heritage to food, festivals and modern life,
            Bengal welcomes you with stories that stay forever.
          </p>

          <div className="flex flex-wrap gap-6">
            <button className="bg-yellow-500 text-black px-4 py-2 rounded-full font-bold text-base shadow-lg hover:bg-yellow-400 transition">
              Find out more
            </button>

            <button className="border-2 border-yellow-400 text-yellow-400 px-4 py-2 rounded-full font-bold text-base hover:bg-yellow-400 hover:text-black transition">
              Contact Us
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
