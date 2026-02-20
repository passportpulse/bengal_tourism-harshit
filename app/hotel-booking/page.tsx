"use client"

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { MapPin, Calendar, Users, Star, Clock, Camera, Sun, Home, IndianRupee, Award, Compass, Utensils, Building, Trees, Ship, Sparkles, Train, ShoppingBag, Book, Mountain, Waves, Fish, Bird, Tent, Flame, PartyPopper, Heart, Sprout, Coffee, Leaf, TreePine, Stethoscope, HeartPulse, Shield, Globe, Phone, Mail, CheckCircle, AlertCircle, Activity, Brain, Bone, Eye, User, Bed, Wifi, Car, Utensils as UtensilsIcon, Wind } from 'lucide-react'

export default function HotelBookingPage() {
  const router = useRouter()

  const handleBookNow = () => {
    router.push('/book-hotel')
  }

  const hotelData = [
    {
      id: 1,
      place: "DARJEELING",
      region: "NORTH BENGAL",
      image: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?w=800&h=400&fit=crop",
      rooms: [
        { type: "Deluxe Dbl Bed [Valley View]", meals: "[Free Breakfast]", price: "Rs. 2800/-" },
        { type: "Super Dlx Dbl Bed [Hill View]", meals: "[Free Breakfast]", price: "Rs. 3700/-" },
        { type: "Deluxe Package [2 Persons]", meals: "[Breakfast + Dinner]", price: "Rs. 5500/-" },
        { type: "Executive Package [2 Persons]", meals: "[Breakfast + Lunch + Dinner]", price: "Rs. 6400/-" }
      ],
      hotels: ["Anand Palace", "Ascot", "Broadway", "Bellevue Heritage", "Central Heritage", "Cedar Inn", "Crystal Palace", "Central Nirvana", "Dolphin", "Dreamland", "Dakeling", "Elgin", "Fairmount", "Golden Height Enclave", "Glenary", "Hermitage", "Krishna Residency", "Mayfair Resorts", "Maple", "Mt. Royal", "Mt. View", "North Star", "Oasis", "Pineridge", "Pinetree", "Pink Mountain", "Princess", "Palbheu", "R J Resort", "Rhododendron", "Spring Burn", "Sunflower", "Seven Seventeen", "Shangri-La", "Sonar Bangla", "Sinclairs / Swiss Hotel", "Sterling Snow Lion", "Travellers Inn", "Yuma", "Viceroy", "Windamare"]
    },
    {
      id: 2,
      place: "JALDAPARA",
      region: "DOOARS - LATAGURI - MURTI",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop",
      rooms: [
        { type: "AC Dlx Dbl Bed", meals: "[Free Breakfast]", price: "Rs. 2800/-" },
        { type: "AC Super Dlx Dbl Bed Cottage", meals: "[Free Breakfast]", price: "Rs. 3700/-" },
        { type: "AC Deluxe Package [2 Persons]", meals: "[Breakfast + Dinner]", price: "Rs. 5500/-" },
        { type: "AC Executive Package [2 Persons]", meals: "[Breakfast + Lunch + Dinner]", price: "Rs. 6400/-" }
      ],
      hotels: ["Aranyak Resort", "Bamboo Trail", "Bonani", "Chatakpur Eco Hut", "Dooars Mountain", "Dreamland", "Debrani", "Elephanta Forest", "Forest Inn", "Gorumara", "Green Touch Resort", "Green Lagoon", "Golden Resort", "Green Heaven", "Hatihana Green Castle", "Hollong Tourist Lodge", "Hatari Resort", "Heaven Inn", "Jungle Inn", "Jaldapara Resort", "Jungle Resort", "Jaldapara Inn", "Jaldapara Tourist Lodge", "Kadambini Resort", "Kontiki Resort", "Khairibari Forest Hut", "Lake View", "Murti Tourist Lodge", "Murti River Resort", "Natures Hut", "Neora River Resort", "Pagoda Inn", "Prime Murti", "Pagoda", "Rhino Resort", "Riverwood Forest", "Rovers Inn", "Wild Hut", "Sinclairs Hotel", "Tusker Den"]
    },
    {
      id: 3,
      place: "KALIMPONG",
      region: "DEOLO - KURSEONG - MIRIK",
      image: "https://images.unsplash.com/photo-1605639691523-eb2b8c9b4db7?w=800&h=400&fit=crop",
      rooms: [
        { type: "Deluxe Double Bed [Valley View]", meals: "[Free Breakfast]", price: "Rs. 2800/-" },
        { type: "Super Dlx Dbl Bed (Hill View)", meals: "[Free Breakfast]", price: "Rs. 3700/-" },
        { type: "Deluxe Package [2 Persons]", meals: "[Breakfast + Dinner]", price: "Rs. 5500/-" },
        { type: "Executive Package [2 Persons]", meals: "[Breakfast + Lunch + Dinner]", price: "Rs. 6400/-" }
      ],
      hotels: ["Amarjeet", "Bethleham", "Blue Pine", "Cochrane Place", "Central", "Central Nirvana", "Deolo Cliff", "Deolo Tourist Lodge", "Eagle Resort", "Hill Top Tourist Lodge", "Komfort Inn", "Mayfair Himalaya", "Morgan House", "Monarch", "Mirik Tourist Lodge", "Mountain View", "New Sonar Bangla", "Neora Valley Resort", "Lava Hotel", "Lovely Resort", "Pine View", "Penesha", "Park Hotel", "Rishyap Inn", "Silver Oak", "Soods Garden", "Summit Barsana", "Tres Teli", "White Orchid", "Yankee Resort"]
    },
    {
      id: 4,
      place: "DIGHA",
      region: "UDAIPUR / TAJPUR / MANDARMONI",
      image: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?w=800&h=400&fit=crop",
      rooms: [
        { type: "AC Deluxe Room [Beach Front/Non Sea Face]", meals: "[Free Breakfast]", price: "Rs. 2800/-" },
        { type: "AC Super Dlx Room (Sea Face + Balcony)", meals: "[Free Breakfast]", price: "Rs. 3700/-" },
        { type: "AC Superior Room [Front Sea View]", meals: "[Free Breakfast]", price: "Rs. 4600/-" },
        { type: "AC Executive Room [Sea View + Swimming Pool + Balcony]", meals: "[Free Breakfast]", price: "Rs. 5500/-" }
      ],
      hotels: ["Asha International", "Ambalika", "Blue View", "Dolphin", "Digha Tourist Lodge", "Jai Ram Hi Tide", "JP Hotel", "Garden Retreat", "Gitanjali", "Greenland Inn", "M Plaza", "Ownland Resort", "Peeku's Inn", "Sea View", "Seagull", "Pearl International", "Rajeet", "Reelook", "Sea Green", "Sea Bird", "Sonar Bangla", "Sea Hawk", "Sea Coast", "Sun View Resort", "Sea Sand", "Sea Star Resort"]
    },
    {
      id: 5,
      place: "PURI",
      region: "ODISHA - GOPALPUR - CHANDIPUR - DARINGBADI",
      image: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?w=800&h=400&fit=crop",
      rooms: [
        { type: "AC Deluxe Room [Beach Front/Non Sea Face]", meals: "[Free Breakfast]", price: "Rs. 2800/-" },
        { type: "AC Super Dlx Room [Sea Face + Balcony]", meals: "[Free Breakfast]", price: "Rs. 3700/-" },
        { type: "AC Superior Room [Front Sea View]", meals: "[Free Breakfast]", price: "Rs. 4600/-" },
        { type: "AC Executive Room [Sea View + Swimming Pool + Balcony]", meals: "[Free Breakfast]", price: "Rs. 5500/-" }
      ],
      hotels: ["Asian Inn", "Atithi Heritage", "Balaji International", "Blue Lily", "Camellia", "Chariot", "Dolphin", "Dreamland", "Diamond Palace", "Empires", "East West", "Gajapati", "Golden Beach Resort", "Gold Coast Beach Resort", "Golden Palace", "Hans Coco Palm", "Holiday Resort", "Mayfair Waves", "Mayfair Beach Resort", "Marina Beach Resort", "Mahabodhi", "BNR", "Nayak Beach Resort", "Naren Palace", "Niladri", "New Sea Hawk", "Lucky India", "Puri Hotel", "Puri Beach Resort", "Pulin Puri", "Park Beach", "Prabhupada", "Raj Hotel", "Sree Hari", "Hotel Swimming", "Sea Coast", "Sonar Bangla", "Sea View", "Surya Beach", "Suv Palace", "Sagarika", "Sapphire Beach", "Sonali", "Sterling Resorts", "Sandy Villa", "Toshali / Tara Palace", "Victoria Club", "Zamindars Palace"]
    },
    {
      id: 6,
      place: "GANGTOK",
      region: "SIKKIM - RAVANGLA - PELLING",
      image: "https://images.unsplash.com/photo-1605639691523-eb2b8c9b4db7?w=800&h=400&fit=crop",
      rooms: [
        { type: "Deluxe Double Bed [Valley View]", meals: "[Free Breakfast]", price: "Rs. 3700/-" },
        { type: "Super Dlx Dbl Bed [Hill View]", meals: "[Free Breakfast]", price: "Rs. 4600/-" },
        { type: "Deluxe Package [2 Persons]", meals: "[Breakfast + Dinner]", price: "Rs. 6400/-" },
        { type: "AC Executive Package [2 Persons - Spa Resort]", meals: "[Breakfast + Dinner]", price: "Rs. 19000/-" }
      ],
      hotels: ["Apple Orchard", "Anola", "Bamboo Grove", "Central Heritage", "Chumbi Residency", "Coral Inn", "Central Hotel", "Cherry Guest House", "Casino Mahjong", "Doma Palace", "Doma Residency", "Fortuna", "Juniper", "Mayfair Resorts & Spa", "Maya Inn", "Mist Tree Mountain", "Oakridge Retreat", "The Oriental", "Riccasa", "Rendezvous", "Royal Plaza", "Sonam Delek", "Silk Route Residency", "Sai Kripa", "Summit Spa", "Tamarind", "Terrace Valley", "Tres Teli", "Tara Palace", "Tashi Delek / Tashi Thendup", "Tashiling", "Tibet", "White Conch"]
    },
    {
      id: 7,
      place: "LAMAHATTA",
      region: "TEEN CHULEY - SILK ROUTE - RESHIKHOLA - LACHEN - LACHUNG",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop",
      rooms: [
        { type: "Deluxe Double Bedroom [Valley View]", meals: "[Free Breakfast]", price: "Rs. 2800/-" },
        { type: "Super Dlx Dbl Bedroom [Hill View]", meals: "[Free Breakfast]", price: "Rs. 3700/-" },
        { type: "Deluxe Package [2 Persons]", meals: "[Breakfast + Lunch + Dinner]", price: "Rs. 4600/-" },
        { type: "Executive Package [2 Persons]", meals: "[Breakfast + Lunch + Dinner]", price: "Rs. 5500/-" }
      ],
      hotels: ["Apple Valley Inn", "Aranya Regency", "Blue Sky Hotel / Babumoshai", "Blue Spring", "Chulyang", "Chinthang", "Grand Lachen", "Golden Fish", "Himalayan Residency", "Kongchen Tashi", "Lachung Continental", "Mt Narsing", "Norbu Ghang", "Ravangla Star", "Rabong Resort", "Sonar Bangla", "Sonam Chem", "Sai Kripa", "Snow White", "Snow Lion", "TresTeli", "Tashi Gang Resort", "Tashi Yangkel", "Yangla", "Yarlam"]
    },
    {
      id: 8,
      place: "BAKKHALI",
      region: "SUNDARBAN - GADIARA - GOENKHALI - DEULTI",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop",
      rooms: [
        { type: "AC Dlx Dbl Bed", meals: "[Free Breakfast]", price: "Rs. 2800/-" },
        { type: "AC Super Dlx Dbl Bed / Cottage [River Front]", meals: "[Free Breakfast]", price: "Rs. 3700/-" },
        { type: "AC Deluxe Package [2 Persons]", meals: "[Breakfast + Dinner]", price: "Rs. 5500/-" },
        { type: "AC Executive Package [2 Persons]", meals: "[Breakfast + Lunch + Dinner]", price: "Rs. 6400/-" }
      ],
      hotels: ["Apanjan", "Banani", "Eco Resort", "Mainak", "Mangrove Retreat", "River Side", "Royal Bengal Resort", "Riverwood", "Riverside Holiday", "Sajnekhali Tourist Lodge", "Solitary Nook", "Sudarban Gateway Resort", "Suranjana Resort", "Hotel S-21", "Tiger Camp", "Tiger View Resort", "United 21", "Amrabati", "Bakkhali Tourist Lodge", "Bay View", "Dolphin", "Deepak", "Girish", "Punyalaksmi", "Seagull"]
    },
    {
      id: 9,
      place: "MUKUTMANIPUR",
      region: "AYODHYA PAHAR - SANTINIKETAN - BOLPUR - BISHNUPUR - TARAPITH",
      image: "https://images.unsplash.com/photo-1605000793129-f6e2e4a5e2c?w=800&h=400&fit=crop",
      rooms: [
        { type: "AC Dlx Dbl Bed", meals: "[Free Breakfast]", price: "Rs. 2800/-" },
        { type: "AC Super Dlx Dbl Bed / Cottage", meals: "[Free Breakfast]", price: "Rs. 3700/-" },
        { type: "AC Deluxe Package [2 Persons]", meals: "[Breakfast + Dinner]", price: "Rs. 5500/-" },
        { type: "AC Executive Package [2 Persons]", meals: "[Breakfast + Lunch + Dinner]", price: "Rs. 6400/-" }
      ],
      hotels: ["Various Heritage Properties", "Cultural Guest Houses", "Temple View Accommodations", "Art Village Stays"]
    },
    {
      id: 10,
      place: "HOME STAY",
      region: "BENGAL / SIKKIM - ECO VILLAGE STAY",
      image: "https://images.unsplash.com/photo-1605000793129-f6e2e4a5e2c?w=800&h=400&fit=crop",
      rooms: [
        { type: "Standard Room - Non View [2 Persons]", meals: "[Free Breakfast]", price: "Rs. 2000/-" },
        { type: "Deluxe Room - Valley View [2 Persons]", meals: "[Free Breakfast]", price: "Rs. 3000/-" },
        { type: "Super Dlx Room Package - Mountain View [2 Persons]", meals: "[With Breakfast + Lunch/Dinner]", price: "Rs. 4000/-" },
        { type: "Executive Room Package [2 Persons]", meals: "[With Breakfast + Lunch + Dinner]", price: "Rs. 5000/-" }
      ],
      hotels: ["Bagora Diki House", "Bird's View @ Kalimpong", "Chumerin", "Chatakpur Eco Resort", "Cherry Village @ Pelling", "Druk @ Lamahatta", "Deki Lodge", "Dzongu Himalayan", "Dawaipani", "Dheu Puri", "Dadul Guest House", "Everest Hut @ Lamahatta", "Fulbari", "Gurashey Forest", "Gurung Guest House @ Teenchuley", "Gompus @ Kalimpong", "Icchey Forest", "Kettle Valley", "Khushi Farm @ M", "Kinara", "Khawas Guest House", "Ratnagiri @ Mirik", "Reshikhola", "Mintokling Guest House", "Mukhiya Homestay", "Mangwa Farm", "Nidipa", "Nayachar", "Pedong", "Pakhrin @ Lepchghat", "Pudung Heritage", "Pastin Kaman", "Suden @ Aritar", "Snow Lion @ Zuluk", "Sillery Gaon", "Rodhighar @ Mirik", "Ratnagiri @ Mirik", "Taranga", "Tinchuley Homestay"]
    },
    {
      id: 12,
      place: "MANDARMONI",
      region: "SHANKARPUR - TAJPUR",
      image: "https://images.unsplash.com/photo-1608459209172-7a6ecbb78e1f?w=800&h=400&fit=crop",
      rooms: [
        { type: "AC Deluxe Room [Beach Front]", meals: "[Free Breakfast]", price: "Rs. 2800/-" },
        { type: "AC Super Dlx Room [Sea Face + Balcony]", meals: "[Free Breakfast]", price: "Rs. 3700/-" },
        { type: "AC Superior Room [Front Sea View]", meals: "[Free Breakfast]", price: "Rs. 4600/-" },
        { type: "AC Executive Room [Sea View + Swimming Pool]", meals: "[Free Breakfast]", price: "Rs. 5500/-" }
      ],
      hotels: ["Aqua Marine", "Anutri", "Bombay Beach Resort", "Coastal View", "Debraj Resort", "Debjani", "J P Resort", "Junput Resort", "Golden Beach Resort", "Kings Crown", "Mandarmoni Village", "The Nest", "Silicon Valley", "Sun City", "Sana Beach Resort", "Sea Star", "Sana Beach Resort", "Tajpur Nature Camp", "United 21 Beach Resort", "Victoria Beach", "Youshna"]
    },
    {
      id: 13,
      place: "RISHYAP",
      region: "NEORA VALLEY",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop",
      rooms: [
        { type: "Dlx Dbl Bed [Valley View]", meals: "[Free Breakfast]", price: "Rs. 2800/-" },
        { type: "Super Dlx Dbl Room/Cottage [Hill View]", meals: "[Free Breakfast]", price: "Rs. 3700/-" },
        { type: "Deluxe Package [2 Persons]", meals: "[Breakfast + Lunch + Dinner]", price: "Rs. 4600/-" },
        { type: "Executive Package [2 Persons]", meals: "[Breakfast + Lunch + Dinner]", price: "Rs. 5500/-" }
      ],
      hotels: ["Neora Valley Resort", "Lava Hotel", "Lovely Resort", "Pine View", "Rishyap Inn", "Silver Oak", "Summit Barsana", "White Orchid"]
    }
  ]

  const extraPersonCharges = [
    { type: "Child (1-4 years) Without Bed", description: "[Sharing with Parents]", price: "Rs. Free/-" },
    { type: "2nd Child / Person with Bed/Mattress", description: "[Free Breakfast]", price: "Rs. 750/-" },
    { type: "Extra Person / Bed", description: "[Breakfast + Dinner]", price: "Rs. 1500/-" },
    { type: "Extra Person / Bed", description: "[Breakfast + Lunch + Dinner]", price: "Rs. 2000/-" }
  ]

  return (
    <main className="text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1576096424-5f6e4e1a5?w=1920&h=1080&fit=crop"
            alt="Luxury hotel resort with swimming pool and mountain view"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/80 via-pink-800/60 to-purple-900/80"></div>
        </div>

        <div className="relative h-full flex items-center justify-center text-white px-6">
          <div className="max-w-4xl">
            <div className="flex items-center text-center justify-center gap-2 mb-4">
              <Building className="w-6 h-6 text-yellow-400" />
              <span className="text-yellow-400 font-semibold tracking-wide">HOTEL BOOKING</span>
            </div>
            
            <h1 className="text-5xl  text-center md:text-7xl font-bold mb-6 leading-tight">
              Best Discounted Hotels
              <span className="block text-3xl md:text-5xl mt-2 text-purple-300">
                Guest Houses • Home Stays • All Tourist Locations
              </span>
            </h1>

            <p className="text-xl  text-center md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Well-appointed accommodations across Bengal, Odisha, Sikkim and other destinations
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-yellow-400 transition transform hover:scale-105">
                View Hotels
              </button>
              <button onClick={handleBookNow} className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-purple-800 transition transform hover:scale-105">
                Book Now
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">Find Your Perfect Stay</span>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

   

      {/* ================= HOTEL LISTINGS ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Hotel Room Rates</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Affiliated Hotels & Resorts at Prominent Tourist Locations
            </p>
          </div>

          <div className="space-y-12">
            {hotelData.map((location) => (
              <div key={location.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition">
                {/* Image Section - Full Width */}
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <img
                    src={location.image}
                    alt={`${location.place} hotels and resorts`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl md:text-3xl font-bold mb-1">{location.place}</h3>
                    <p className="text-sm md:text-base opacity-90">{location.region}</p>
                  </div>
                </div>
                
                {/* Content Section - Below Image */}
                <div className="p-6 md:p-8">
                  {/* Room Cards */}
                  <div className="mb-8">
                    <h4 className="text-xl font-bold mb-4 text-gray-800 flex items-center gap-2">
                      <Bed className="w-5 h-5 text-blue-600" />
                      Available Room Types
                    </h4>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {location.rooms.map((room, index) => (
                        <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-all hover:scale-105 border border-blue-100">
                          <div className="flex items-start justify-between mb-2">
                            <Bed className="w-4 h-4 text-blue-600 flex-shrink-0" />
                            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-semibold">Available</span>
                          </div>
                          <h4 className="font-bold text-sm mb-2 text-gray-800 leading-tight">{room.type}</h4>
                          <p className="text-xs text-gray-600 mb-2">{room.meals}</p>
                          <p className="text-xl font-bold text-blue-600 mb-3">{room.price}</p>
                          <button onClick={handleBookNow} className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg text-sm font-semibold hover:from-blue-700 hover:to-purple-700 transition">
                            Book Now
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Hotels List */}
                  <div className="border-t pt-6">
                    <h4 className="text-xl font-bold mb-4 text-gray-800 flex items-center gap-2">
                      <Building className="w-5 h-5 text-blue-600" />
                      Affiliated Hotels & Resorts
                    </h4>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex flex-wrap gap-2">
                        {location.hotels.slice(0, 12).map((hotel, index) => (
                          <span key={index} className="bg-white px-3 py-1 rounded-full text-sm shadow-sm border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition">
                            {hotel}
                          </span>
                        ))}
                        {location.hotels.length > 12 && (
                          <span className="bg-blue-100 px-3 py-1 rounded-full text-sm text-blue-700 font-medium">
                            +{location.hotels.length - 12} more...
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= EXTRA PERSON CHARGES ================= */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Extra Person Charges</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Additional charges for extra persons (to be charged separately)
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {extraPersonCharges.map((charge, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition">
                <Users className="w-12 h-12 text-orange-600 mb-4" />
                <h3 className="font-bold mb-2">{charge.type}</h3>
                <p className="text-sm text-gray-600 mb-3">{charge.description}</p>
                <p className="text-2xl font-bold text-orange-600">{charge.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= HOME STAY FACILITIES ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Home Stay Facilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience authentic local hospitality with our recommended home stays
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-green-800">Support Local Communities</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  When it comes to boasting the richness of Indian Bio-diversity, North Bengal's Heritage Forests & Hills are nature lover's heaven. 
                  West Bengal's potential to attract nature lovers can certainly create economical, ecological and social relations with the environment.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Eco-tourism is the best example where all feasible conditions are met following environmental rules stringently, 
                  further improving it with the inclusion of "community development".
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Sustainable income opportunities for locals</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Authentic cultural experiences</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Unexplored natural beauty</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h4 className="font-bold mb-4 text-green-800">Featured Home Stays</h4>
                <div className="grid grid-cols-2 gap-3">
                  {["Bagora Diki House", "Bird's View @ Kalimpong", "Cherry Village @ Pelling", "Druk @ Lamahatta", 
                    "Everest Hut @ Lamahatta", "Gurung Guest House", "Khushi Farm", "Mangwa Farm", 
                    "Sillery Gaon", "Snow Lion @ Zuluk", "Tinchuley Homestay"].map((stay, index) => (
                    <div key={index} className="bg-green-50 p-3 rounded-lg text-sm">
                      <Home className="w-4 h-4 text-green-600 mb-1" />
                      <span className="text-gray-700">{stay}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BOOKING DISCLAIMER ================= */}
      <section className="py-12 bg-yellow-50 border-y border-yellow-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-gray-800 mb-2">Important Booking Information</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                Booking of Hotel Room/Accommodation in Hotel, Resorts, Lodge, Guest House, Home Stay is subject matter of Solicitation. 
                Bengal Tourism will guarantee booking of your accommodation in your preferred Hotel/Guest House but reserves the right 
                to allot you accommodation in any property in the same location with similar or upgraded facilities.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Off Season Discounts / High Peak Season Rates shall apply & charged separately.
              </p>
            </div>
          </div>
        </div>
      </section>


 

    </main>
  )
}
