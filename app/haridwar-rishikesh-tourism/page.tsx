"use client"

import Image from 'next/image'
import { MapPin, Calendar, Users, Star, Clock, Camera, Sun, Home, IndianRupee, Award, Compass, Utensils, Building, Trees, Ship, Sparkles, Train, ShoppingBag, Book, Mountain, Waves, Fish, Bird, Tent, Flame, PartyPopper, Heart, Sprout, Coffee, Leaf, TreePine, Stethoscope, HeartPulse, Shield, Globe, Phone, Mail, CheckCircle, AlertCircle, Activity, Brain, Bone, Eye, User, Bed, Wifi, Car, Utensils as UtensilsIcon, Wind, Building as Temple, Waves as WavesIcon, Compass as CompassIcon, Trees as TreesIcon, Camera as CameraIcon, Ship as ShipIcon, Droplets, Church, Trees as TreeIcon, Snowflake, Binoculars } from 'lucide-react'
import PackagePricing from '@/components/PackagePricing'
import ContactCTA from '@/components/ContactCTA'

export default function HaridwarRishikeshTourismPage() {
  return (
    <main className="text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/Haridwar.jpeg"
            alt="Sacred Ganges river with ghats and temples in Haridwar"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-orange-900/80 via-amber-800/60 to-orange-900/80"></div>
        </div>

        <div className="relative h-full flex items-center justify-center text-white px-6">
          <div className="max-w-4xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Temple className="w-6 h-6 text-yellow-400" />
              <span className="text-yellow-400 font-semibold tracking-wide">UTTARAKHAND SPIRITUAL TOUR</span>
            </div>
            
            <h1 className="text-5xl text-center md:text-7xl font-bold mb-6 leading-tight">
              Haridwar - Rishikesh
              <span className="block text-3xl md:text-5xl mt-2 text-orange-300">
                Gateway to the Divine • Yoga Capital • Sacred Ganges
              </span>
            </h1>

            <p className="text-xl text-center md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Experience the perfect blend of spirituality, adventure, and natural beauty 
              with special tailor-made packages for divine seekers
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-yellow-400 transition transform hover:scale-105">
                Explore Spiritual Journey
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-orange-800 transition transform hover:scale-105">
                Book Now
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">Discover Spiritual Bliss</span>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= HARIDWAR-RISHIKESH CIRCUIT PACKAGE ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Haridwar - Rishikesh Spiritual Circuit</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Har Ki Pauri • Mansa Devi • Ganga Aarti • Laxman Jhula • Parmarth Niketan
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 shadow-xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="space-y-6">
                  {/* Day 1 */}
                  <div className="border-l-4 border-orange-500 pl-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="w-5 h-5 text-orange-600" />
                      <h3 className="text-xl font-bold">Day 1: Arrival in Haridwar</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      On arrival at Haridwar Railway Station / Jolly Grant Airport, you will be transferred to Hotel. 
                      Check in and relax for a while. Lunch break. 
                      Evening visit to Har Ki Pauri for the mesmerizing Ganga Aarti ceremony. 
                      Explore the local markets and have dinner. 
                      Breakfast & Dinner included. Overnight at Hotel in Haridwar.
                    </p>
                  </div>

                  {/* Day 2 */}
                  <div className="border-l-4 border-orange-500 pl-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="w-5 h-5 text-orange-600" />
                      <h3 className="text-xl font-bold">Day 2: Haridwar Sightseeing</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      After breakfast, visit Mansa Devi Temple via cable car, then Chandi Devi Temple. 
                      Visit Maya Devi Temple and Daksha Mahadev Temple. 
                      Lunch at local restaurant. 
                      Evening free for personal activities and shopping. 
                      Breakfast & Dinner included. Overnight at Hotel in Haridwar.
                    </p>
                  </div>

                  {/* Day 3 */}
                  <div className="border-l-4 border-orange-500 pl-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="w-5 h-5 text-orange-600" />
                      <h3 className="text-xl font-bold">Day 3: Transfer to Rishikesh</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      After breakfast, check-out and transfer to Rishikesh (20 km). 
                      Check in to hotel and relax. 
                      Visit Laxman Jhula and Ram Jhula suspension bridges. 
                      Explore Parmarth Niketan Ashram and attend evening Ganga Aarti. 
                      Lunch en-route. 
                      Breakfast & Dinner included. Overnight at Hotel in Rishikesh.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="space-y-6">
                  {/* Day 4 */}
                  <div className="border-l-4 border-orange-500 pl-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="w-5 h-5 text-orange-600" />
                      <h3 className="text-xl font-bold">Day 4: Rishikesh Exploration</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      After breakfast, visit Beatles Ashram and Neelkanth Mahadev Temple. 
                      Explore yoga and meditation centers. 
                      Optional adventure activities like river rafting and bungee jumping. 
                      Lunch at local cafe. 
                      Evening visit to local markets. 
                      Breakfast & Dinner included. Overnight at Hotel in Rishikesh.
                    </p>
                  </div>

                  {/* Day 5 */}
                  <div className="border-l-4 border-orange-500 pl-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="w-5 h-5 text-orange-600" />
                      <h3 className="text-xl font-bold">Day 5: Yoga & Departure</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Early morning yoga session by the Ganges. 
                      After breakfast, check-out & transfer to Haridwar Railway Station / Jolly Grant Airport 
                      for your return journey on your departure time. 
                      Breakfast included. Tour ends...
                    </p>
                  </div>

                  <div className="bg-orange-100 rounded-xl p-6 mt-8">
                    <h4 className="font-bold text-orange-800 mb-3">Package Highlights</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-600" />
                        <span className="text-gray-700">Divine Ganga Aarti at Har Ki Pauri</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-600" />
                        <span className="text-gray-700">Cable car ride to Mansa Devi Temple</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-600" />
                        <span className="text-gray-700">Yoga & Meditation in Rishikesh</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-600" />
                        <span className="text-gray-700">Adventure Sports (Optional)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        {/* ================= ADD-ON DESTINATIONS ================= */}
      <div className="bg-gray-50 py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-20">

          {/* PAGE TITLE */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-teal-700">
              Sikkim Add-On Tour Packages
            </h1>
            <p className="text-gray-600">
              Explore Wildlife, Beaches & Eco Tourism Destinations
            </p>
          </div>

          {/* DESTINATIONS */}
 
<Destination
  title="Nainital Sightseeing  Tour"
  cta="Book Now for 2N/3D"
  subtitle="Lake District of India – Scenic Hill Escape"
  content={[
`Nainital is one of the most popular hill stations in Uttarakhand, known as the Lake District of India. Surrounded by lush hills and pristine lakes, Nainital offers boating, shopping at Mall Road, and panoramic Himalayan views.`,

`Day 1: Arrival in Nainital
Meal Plan: Dinner
Arrival and hotel check-in. Evening walk at Mall Road. Enjoy local markets and lakeside views. Overnight stay in Nainital.`,

`Day 2: Nainital Local Sightseeing
Meal Plan: Breakfast & Dinner
Visit Naini Lake for boating, Naina Devi Temple, Snow View Point and Tiffin Top. Optional visit to Bhimtal, Sattal and Naukuchiatal. Overnight stay in Nainital.`,

`Day 3: Departure
Meal Plan: Breakfast
After breakfast, check-out and proceed for onward journey with beautiful hill memories.`  
  ]}
/>
<Destination
  title="Dehradun Sightseeing Tour"
  cta="Book Now for 2N/3D"
  subtitle="Capital of Uttarakhand – Nature & Heritage"
  content={[
`Dehradun, the capital city of Uttarakhand, is surrounded by the Shivalik hills and known for its pleasant climate, caves, waterfalls and colonial heritage buildings. It serves as the gateway to Mussoorie and Char Dham.`,

`Day 1: Arrival in Dehradun
Meal Plan: Dinner
Arrival and transfer to hotel. Evening at leisure. Overnight stay in Dehradun.`,

`Day 2: Dehradun Local Sightseeing
Meal Plan: Breakfast & Dinner
Visit Robber’s Cave (Guchhupani), Sahastradhara sulphur springs, Forest Research Institute and Tapkeshwar Temple. Overnight stay in Dehradun.`,

`Day 3: Departure
Meal Plan: Breakfast
After breakfast, check-out and transfer to railway station/airport for onward journey.`  
  ]}
/>



<Destination
            title="Nainital dehradun Haridwar"
            cta='Book Now for 6N/7D'
            subtitle="Add-on (or) Separately with Haridwar - rishikesh-nanital-dehradun-Haridwar"
            content={[
              `Day –1 :Haridwar Pickup – Rishikesh
Meal Plan: Dinner Only
Night Stay: Upon arrival at Haridwar Railway Station, you will be picked up
and transferred to Rishikesh, known as the “Yoga Capital of the World.” After
check-in and freshening up, proceed for local exploration. Visit the iconic
suspension bridges Laxman Jhula and Ram Jhula. Explore nearby temples
and cafes along the Ganga river. In the evening, attend the divine Ganga Aarti
at Triveni Ghat and visit Parmarth Niketan for spiritual ambiance. Overnight
stay in Rishikesh.`,

              `Day – 2 : Rishikesh Local Sightseeing
Meal Plan: Breakfast & Dinner
Night Stay: After breakfast, proceed for full-day sightseeing in Rishikesh. Visit
Neelkanth Mahadev Temple, located amidst scenic hills. Explore The Beatles
Ashram (Chaurasi Kutia), famous for its artistic graffiti and meditation cells.
You may also enjoy optional adventure activities such as river rafting in the
Ganga, zip-lining, cliff jumping, or bungee jumping (at your own cost).
Overnight stay in Rishikesh.`,

              `Day – 3 :Rishikesh – Nainital
Meal Plan: Breakfast & Dinner
Night Stay: After breakfast, check out and drive to Nainital, known as the
“Lake District of India.” Enjoy scenic hill views during the journey. Upon
arrival, check-in to your hotel and relax. In the evening, you can enjoy a
leisurely walk at The Mall Road and explore local shops. Overnight stay in
Nainital.`,

              `Day – 4 :Nainital Local Sightseeing
Meal Plan: Breakfast & Dinner
Night Stay: After breakfast, proceed for full-day sightseeing of Nainital. Start
with boating at Naini Lake, followed by a visit to the sacred Naina Devi
Temple. Visit popular viewpoints like Snow View Point and Tiffin Top for
panoramic Himalayan views. You may also explore nearby lakes such as
Bhimtal Lake, Sattal, and Naukuchiatal (optional). Overnight stay in Nainital.`,

              `Day –5 : Nainital – Dehradun
Meal Plan: Breakfast & Dinner
Night Stay: After breakfast, check out and drive to Dehradun, the capital city
of Uttarakhand surrounded by scenic hills. Upon arrival, check-in to the hotel
and relax. Overnight stay in Dehradun.`,
              `Day –6 : Dehradun Local Sightseeing
Meal Plan: Breakfast & Dinner
Night Stay: After breakfast, proceed for sightseeing in Dehradun. Visit
Robber's Cave (Guchhupani), a natural cave formation with flowing stream.
Explore Sahastradhara, known for its sulphur springs. Visit the grand colonial
building of Forest Research Institute and the sacred Tapkeshwar Temple.
Return to hotel. Overnight stay in Dehradun.`,
              `Day –7 :Dehradun – Haridwar Drop
Meal Plan: Breakfast Only
Night Stay: After breakfast, check out from the hotel and drive back to
Haridwar. Upon arrival, you will be dropped at Railway Station for your onward
journey with beautiful memories of Uttarakhand.`
            ]}
          /> 

        </div>
      </div>


      {/* ================= ADVENTURE ACTIVITIES ================= */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Adventure Activities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Optional activities with extra cost
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Waves className="w-10 h-10 text-blue-600" />
                <h3 className="text-lg font-bold">River Rafting</h3>
              </div>
              <p className="text-gray-600 mb-4">White water rafting in Ganges</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Bird className="w-10 h-10 text-green-600" />
                <h3 className="text-lg font-bold">Bungee Jumping</h3>
              </div>
              <p className="text-gray-600 mb-4">India's highest bungee platform</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Compass className="w-10 h-10 text-purple-600" />
                <h3 className="text-lg font-bold">Trekking</h3>
              </div>
              <p className="text-gray-600 mb-4">Guided trekking in Himalayan foothills</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SPIRITUAL HIGHLIGHTS ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Spiritual Highlights</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key attractions and spiritual experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <Temple className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Har Ki Pauri</h3>
              <p className="text-sm text-gray-600">Sacred bathing ghats & Ganga Aarti</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <Droplets className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Ganga Aarti</h3>
              <p className="text-sm text-gray-600">Evening prayer ceremony</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <TreeIcon className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Yoga Centers</h3>
              <p className="text-sm text-gray-600">World's yoga capital</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <Church className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Ashrams</h3>
              <p className="text-sm text-gray-600">Parmarth Niketan & Beatles Ashram</p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <Mountain className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Laxman Jhula</h3>
              <p className="text-sm text-gray-600">Iconic suspension bridge</p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <CameraIcon className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Mansa Devi</h3>
              <p className="text-sm text-gray-600">Cable car temple ride</p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <Heart className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Meditation</h3>
              <p className="text-sm text-gray-600">Spiritual wellness centers</p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <Sun className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Neelkanth Temple</h3>
              <p className="text-sm text-gray-600">Ancient Shiva temple</p>
            </div>
          </div>
        </div>
      </section>

    
      {/* ================= IMPORTANT INFORMATION ================= */}
      <section className="py-12 bg-yellow-50 border-y border-yellow-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Spiritual Visit Tips</h3>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Dress modestly when visiting temples</li>
                  <li>• Remove shoes before entering temples</li>
                  <li>• Carry offerings like flowers and prasad</li>
                  <li>• Respect local customs and traditions</li>
                </ul>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Calendar className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Best Time to Visit</h3>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• October to March: Pleasant weather for sightseeing</li>
                  <li>• July to September: Monsoon season (avoid)</li>
                  <li>• April to June: Summer months (hot but good for rafting)</li>
                  <li>• Festival times: Kumbh Mela special celebrations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PACKAGE PRICING ================= */}
      <PackagePricing 
        title="Haridwar-Rishikesh Tour Packages"
        subtitle="Choose your perfect spiritual journey duration"
      />

       
    <ContactCTA />

    </main>
  )
}


function Destination({ title, subtitle, content, cta }: { title: string; subtitle: string; content: string[]; cta: string; }) {
  return (
    <div className="bg-white shadow-xl rounded-3xl p-10 space-y-6">
       <div className="flex gap-5 items-center mt-8">
   
      <h2 className="text-3xl font-bold text-indigo-700">{title}</h2>
        <a 
          href="/book-tour" 
          className="bg-red-600 text-white px-8 py-3 rounded-full font-bold hover:bg-indigo-700 transition-all transform hover:scale-105 shadow-lg"
        >
          {cta}
        </a>
       </div>
  
        <p className="font-semibold text-gray-700">{subtitle}</p>
    

      <div className="space-y-6">
        {content.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-2xl p-6 border-l-4 border-indigo-500"
          >
            <p className="text-gray-700 leading-8 whitespace-pre-line">
              {item}
            </p>
          </div>
        ))}
      </div>
      
     
     
    </div>
  )
} 