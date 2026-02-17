"use client"

import Image from 'next/image'
import { Trees, Waves, MapPin, Calendar, Users, Star, Clock, Camera, Anchor, Eye, Bird, Fish, Trees as TreeIcon, Home, Ship, IndianRupee, Award, Compass } from 'lucide-react'
import ContactCTA from '@/components/ContactCTA'
import PackagePricing from '@/components/PackagePricing'

export default function SundarbanPage() {
  return (
    <main className="text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1540206395-68808572332f?w=1920&h=1080&fit=crop"
            alt="Sundarban mangrove forest with waterways"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-green-900/80 via-green-800/60 to-green-900/80"></div>
        </div>

        {/* Hero Content */}
        <div className="relative h-full flex items-center justify-center text-center text-white px-6">
          <div className="max-w-4xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Trees className="w-6 h-6 text-yellow-400" />
              <span className="text-yellow-400 font-semibold tracking-wide">UNESCO World Heritage Site</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Sundarban
              <span className="block text-3xl md:text-5xl mt-2 text-green-300">
                Land of the Royal Bengal Tiger
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Explore the world's largest mangrove forest, home to majestic tigers, 
              diverse wildlife, and the unique ecosystem of West Bengal
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-yellow-400 transition transform hover:scale-105">
                Book Your Safari
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-green-800 transition transform hover:scale-105">
                Explore Tour Packages
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">Discover the wilderness</span>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= QUICK FACTS ================= */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Trees className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">10,000 km²</h3>
              <p className="text-gray-600 text-sm">World's largest mangrove</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Eye className="w-10 h-10 text-orange-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">100+ Tigers</h3>
              <p className="text-gray-600 text-sm">Royal Bengal Tigers</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Bird className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">300+ Species</h3>
              <p className="text-gray-600 text-sm">Birds & Wildlife</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Award className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">UNESCO Site</h3>
              <p className="text-gray-600 text-sm">Since 1987</p>
            </div>
          </div>
        </div>
      </section>
<div className="bg-green-50 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* Hero Section */}
        <section className="bg-white shadow-xl rounded-3xl p-8 md:p-12 space-y-6">
          <h2 className="text-4xl font-bold text-green-700 border-b-4 border-green-500 inline-block pb-2">
            Visit & Explore Dooars with Bengal Tourism
          </h2>

          <p className="text-gray-700 leading-8">
            Bengal’s favoured playground starts as you head east of Jalpaiguri & enter that land of river, mountain, tea & forest called the Dooars, you are first greeted by the paddy fields & tea gardens. And just when that get a tad monotonous, you arrive at the forests of Gorumara. The flat greenery gives way to vegetation so thick, sometimes you can barely see through it. When your skin breaks into those pleasure globules called goosebumps at the sight of mystifying foliage, you know you have reached your destination. Home of the famous One Horned Rhino, Indian Elephants & other wildlife’s natural habitat in the rain forests and more…
          </p>
        </section>

        {/* Jaldapara & Chilapata */}
        <section className="bg-white shadow-xl rounded-3xl p-8 md:p-12 space-y-6">
          <h3 className="text-3xl font-bold text-emerald-600 border-b-4 border-emerald-500 inline-block pb-2">
            Jaldapara & Chilapata
          </h3>

          <p className="text-gray-700 leading-8">
            The Rhino country as Jaldapara teems with plant & animal life. It is home to about 60-80 rhinoceros. But the awe-aspiring aspect here is the forest itself. Looking at the dence foliage & tall trees that seem to close in upon you, you feel the shiver down your spine – of excitement mixed with some amount of trepidation. The canopy of trees are so dense that hardly any sunlight fell on the forest floors. One can also enjoy the Chilapata forest nearby, where you can spot elephants & leopards.
          </p>
        </section>

        {/* Buxa Tiger Reserve */}
        <section className="bg-white shadow-xl rounded-3xl p-8 md:p-12 space-y-6">
          <h3 className="text-3xl font-bold text-lime-700 border-b-4 border-lime-600 inline-block pb-2">
            Buxa Tiger Reserve
          </h3>

          <p className="text-gray-700 leading-8">
            The famous Buxa Tiger Reserve in an area of about 760 sq.km is another paradise in the region of Dooars. The whole landscape is criss-crossed by many big & small rivers and springs & has innumerable watering holes for its animal population. Home to elephants, bisons, sambar, barking, hog & chital deer, wild boar, will buffaloes, leopards & mony more smaller cats and reptiles. About 30-35 Royal Bengal Tigers live in this park. This place is most suitable for hardcore wildlifers. Many treks also run through this jungle.
          </p>
        </section>

        {/* Teesta & Mahananda */}
        <section className="bg-white shadow-xl rounded-3xl p-8 md:p-12 space-y-6">
          <h3 className="text-3xl font-bold text-teal-700 border-b-4 border-teal-600 inline-block pb-2">
            Teesta & Mahananda
          </h3>

          <p className="text-gray-700 leading-8">
            Just stand on the forested ridge at sunset & watch the army of sal & segun trees descend in nimble steps to the sandy banks of the Teesta, and you won’t want to move any further down that highway. As you stand transfixed by the sublime beauty of the forests and the Teesta, you’ll hear the shrill whistle of a railway engine about the enter the Mahananda Santuary or chugging its way through the deep forests towards Alipurduar.
          </p>

          <p className="text-gray-700 leading-8">
            And as the first rays of the sun softly caress your eyes, look out from your room to an age-old jungle with many species of flora & fauna as yet undiscovered.
          </p>
        </section>

        {/* Tea Gardens & Mongpong */}
        <section className="bg-white shadow-xl rounded-3xl p-8 md:p-12 space-y-6">
          <h3 className="text-3xl font-bold text-green-800 border-b-4 border-green-700 inline-block pb-2">
            Tea Gardens & Mongpong
          </h3>

          <p className="text-gray-700 leading-8">
            The serpentine mud-tracks vanishing into the deep woods beckon you on a voyage of discovery, as a moisture laden cool breezes with the fragrance of the forest & countless flowers uplift you. This channel around Mongpong & the Teesta is also an ideal breeding ground for migratory birds. The green encounter set in the western Dooars at Damdim & the rows of lush green tea bushes, line of taller trees shading them & a deep blue sky lording over it all. Even if you do not approve of colonial-style living, for the sheer closeness to nature that living near a tea garden provides & the scent of fresh tea pervading the air, it is worth prioritising privilege over principle at least for this one holiday.
          </p>
        </section>

        {/* Suntalekhola & Neora Valley */}
        <section className="bg-white shadow-xl rounded-3xl p-8 md:p-12 space-y-6">
          <h3 className="text-3xl font-bold text-emerald-700 border-b-4 border-emerald-600 inline-block pb-2">
            Suntalekhola & Neora Valley
          </h3>

          <p className="text-gray-700 leading-8">
            The fairytale setting of Suntalekhola will elevate you to far greater heights than the altimeter’s reading of 2475 ft. Lovingly girdled by a gurgling brook & surrounded on all sides by towering mountains in varying shades of green, this place is connected to the civilized world only by a hanging footbridge that shakes every time you take a step. And the Neora Valley with its dense forests, colourful wild orchids, broad medley of butterflies & meandering mountain streams is one of the few remaining virgin forests in the country. The recent discovery of the Royal Bengal tiger here has prompted the administration to include it in the list of sensitive wildlife zones. With no access to mails & cell phones going dead, there’s no escaping the meeting with the inner you.
          </p>

          <p className="text-gray-700 leading-8">
            A little magic awaits you in Jaldhaka.
          </p>
        </section>

        {/* Safaris */}
        <section className="bg-white shadow-xl rounded-3xl p-8 md:p-12 space-y-6">
          <h3 className="text-3xl font-bold text-lime-700 border-b-4 border-lime-600 inline-block pb-2">
            Jungle Safaris & Watchtowers
          </h3>

          <p className="text-gray-700 leading-8">
            There are number of watchtowers inside the jungles from where one can spot animals from a safe distance, and without disturbing the natural sequence of events within their habitats. If you live in certain parts of the Gorumara, Buxa, Lataguri, Murti, Chapramari, Chalsa & other parks, elephant or jeep safaris are also available.
          </p>
        </section>

        {/* Places of Interest */}
        <section className="bg-white shadow-xl rounded-3xl p-8 md:p-12 space-y-6">
          <h3 className="text-2xl font-bold text-purple-700 border-b-4 border-purple-500 inline-block pb-2">
            Places of Interest
          </h3>

          <p className="text-gray-700 leading-8">
            Jaldapara Wildlife Sanctuary • Gorumara National Park • Chapramari forests • Buxa Tiger reserve • Buxa Duar • Neora valley • Jayanti • Rajabhatkhawa • Bindu • Jaldhaka • Samsing • SantaleyKhola • Suntalekhola • Rasikbill • Cooch Behar • Toto Para • Dhupjhora • Chilapata • Raimatang • Bhutan Ghat • Bodaganj • Ambari • Kathambari • Kranti and Odlabari • Sikiajhora • Tashigaon • Chuna Bhatti • Lepchakha • Rovers Point • Mahakal cave & more…
          </p>
        </section>

        {/* Nearby Destinations */}
        <section className="bg-white shadow-xl rounded-3xl p-8 md:p-12 space-y-6">
          <h3 className="text-2xl font-bold text-red-600 border-b-4 border-red-500 inline-block pb-2">
            At a Short Distance
          </h3>

          <p className="text-gray-700 leading-8">
            Darjeeling (Queen of the Hills) • Mirik (Divine Lake) • Kurseong (land of the White Orchid) • Kalimpong • Lava (Abode of the Gods) • Rishap (Misty magic) • Loleygaon • Tinchuley, Sandaphu (Trekkers delight) • Lepchajagat • Sikkim • Gangtok • Rumtek • Pelling • Yuksom • Ravangla • Aritar Reshi • Rongli • Nathang Valley • Rinchenpong • Legship • Norbugang Tsomgo lake • Nathula Pass • Baba Mandir • Lachen • Gurudongmar Lake • Tso Lhamu Lake • Lachung • Yumthang • Mangan • Singhik • Thangu • Uttarey • Bhutan • Paro • Thimpu • Phuentsholing • Trongsa • Bumathang • Punakha • Samdrup • Jongkhar • Lhuntse • Ura Valley • Trashigang & more…
          </p>
        </section>

        {/* Cuisine & Note */}
        <section className="bg-white shadow-xl rounded-3xl p-8 md:p-12 space-y-4">
          <h3 className="text-2xl font-bold text-orange-600 border-b-4 border-orange-500 inline-block pb-2">
            Must Try Cuisine
          </h3>

          <p className="text-gray-700 leading-8">
            Authentic north Bengal’s regional (Fish / Crab / Prawn - curry & Rice) preparations
          </p>

          <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-lg">
            <p className="text-gray-800 font-medium">
              Please Note: Jungle safaris remains closed from 15th June till 15th September as per Govt. rules.
            </p>
          </div>
        </section>

      </div>
    </div>
      {/* ================= TOUR PACKAGES ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Tour Packages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Special tailor-made combination packages designed for your perfect Sundarban experience
            </p>
          </div>

          {/* Circuit I - 2N/3D */}
          <div className="mb-12">
            <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6 rounded-t-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Circuit I - Mangrove Forest & Royal Bengal Tiger</h3>
                </div>
                
              </div>
            </div>
            
            <div className="bg-white border-2 border-green-600 border-t-0 rounded-b-2xl p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-green-50 p-6 rounded-xl">
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="w-5 h-5 text-green-600" />
                    <h4 className="font-bold text-lg">Day 1</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Pick up from Science City (8:30 AM)</li>
                    <li>• Arrival at Godhkhali (120 km/3 hrs)</li>
                    <li>• Launch journey to resort</li>
                    <li>• Check-in & lunch at resort</li>
                    <li>• Evening: Jotirampur Bird Watching</li>
                    <li>• Cultural program (optional)</li>
                    <li>• Breakfast & Dinner included</li>
                    <li>• Dinner & overnight stay</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-6 rounded-xl">
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="w-5 h-5 text-green-600" />
                    <h4 className="font-bold text-lg">Day 2</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Early morning tea & breakfast</li>
                    <li>• Do-Banki Tiger Reserve cruise</li>
                    <li>• Gazikhali, Pirkhali Creeks</li>
                    <li>• Panchamukhi River crossing</li>
                    <li>• Visit 3 Watch Towers: Netidhopani, Dobanki, Sajnekhali</li>
                    <li>• Canopy Walk & Museum visit</li>
                    <li>• Cultural program (optional)</li>
                    <li>• Breakfast & Dinner included</li>
                    <li>• Dinner & overnight stay</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-6 rounded-xl">
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="w-5 h-5 text-green-600" />
                    <h4 className="font-bold text-lg">Day 3</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Early morning tea & breakfast</li>
                    <li>• Village tour on foot</li>
                    <li>• Experience local life</li>
                    <li>• Visit Rabindranath's Heritage Bungalow</li>
                    <li>• OR Sudhanyakhali watch tower</li>
                    <li>• Lunch on boat</li>
                    <li>• Breakfast & Dinner included</li>
                    <li>• Return to Godhkhali</li>
                    <li>• Drop at Kolkata Science City (6-7 PM)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

    

          {/* Circuit III - Extended */}
          <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-2xl overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Circuit III - Extended Mangrove Experience</h3>
                </div>
              
              </div>
              
              <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                <h4 className="font-bold mb-2">Day 4 Special Features:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Deep creek exploration</li>
                  <li>• Burir Dabri Watch Tower & Mud Walk</li>
                  <li>• Kumirmari Watch Tower</li>
                  <li>• Morich Jhapi & Bonnie Camp</li>
                  <li>• Raimongal View Point</li>
                  <li>• Special permission required (₹1000 extra)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WATCH TOWERS & ATTRACTIONS ================= */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Watch Towers & Attractions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic viewpoints for wildlife spotting and experiencing the mangrove ecosystem
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
                <Eye className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Sajnekhali Watch Tower</h3>
                <p className="text-gray-700 mb-4">Main tourist hub with museum, crocodile park, and turtle sanctuary</p>
                <div className="flex items-center gap-2 text-green-600">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Tiger Project Area</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                <Trees className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Dobanki Watch Tower</h3>
                <p className="text-gray-700 mb-4">Famous for canopy walk through mangrove forest</p>
                <div className="flex items-center gap-2 text-orange-600">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Do-Banki Tiger Reserve</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
                <Camera className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Netidhopani Watch Tower</h3>
                <p className="text-gray-700 mb-4">Historical site with ruins and excellent tiger spotting</p>
                <div className="flex items-center gap-2 text-purple-600">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Deep Forest Area</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-green-500 flex items-center justify-center">
                <Bird className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Sudhanyakhali Watch Tower</h3>
                <p className="text-gray-700 mb-4">Prime location for tiger and deer sightings</p>
                <div className="flex items-center gap-2 text-blue-600">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Core Tiger Area</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                <Compass className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Burir Dabri Watch Tower</h3>
                <p className="text-gray-700 mb-4">Mud walk and mangrove cage trail to Raimongal View Point</p>
                <div className="flex items-center gap-2 text-yellow-600">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Extended Area (Special Permit)</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center">
                <Fish className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Kumirmari Watch Tower</h3>
                <p className="text-gray-700 mb-4">Exciting jungle views and rustic market experience</p>
                <div className="flex items-center gap-2 text-teal-600">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Village Area</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WILDLIFE & NATURE ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Wildlife & Nature</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the incredible biodiversity of the Sundarban mangrove ecosystem
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-green-700">Royal Bengal Tiger</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                The majestic apex predator of Sundarban, uniquely adapted to mangrove habitat. 
                These magnificent tigers are excellent swimmers and have developed special behaviors 
                to thrive in the delta region.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-bold text-orange-700 mb-2">Population</h4>
                  <p className="text-2xl font-bold text-orange-600">100+</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-bold text-green-700 mb-2">Best Season</h4>
                  <p className="text-lg font-semibold text-green-600">Nov - Mar</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=600&h=400&fit=crop"
                alt="Royal Bengal Tiger in Sundarban"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: "Spotted Deer", icon: "🦌", count: "30,000+" },
              { name: "Crocodiles", icon: "🐊", count: "500+" },
              { name: "Wild Boar", icon: "🐗", count: "10,000+" },
              { name: "Monkeys", icon: "🐒", count: "40,000+" },
              { name: "Kingfishers", icon: "🦜", count: "50+ species" },
              { name: "Mangrove Trees", icon: "🌳", count: "60+ species" },
              { name: "Dolphins", icon: "🐬", count: "Ganges River" },
              { name: "Turtles", icon: "🐢", count: "5+ species" }
            ].map((animal, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 text-center hover:shadow-lg transition">
                <div className="text-4xl mb-3">{animal.icon}</div>
                <h4 className="font-bold text-lg mb-1">{animal.name}</h4>
                <p className="text-green-600 font-semibold">{animal.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= LOCATIONS ================= */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Key Locations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the main hubs of Sundarban tourism
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transition group">
              <div className="bg-gradient-to-br from-green-400 to-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition">
                <MapPin className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Sajnekhali</h3>
              <p className="text-gray-600 text-sm mb-3">Main tourist hub with watch tower and museum</p>
              <div className="text-green-600 font-semibold">Tourist Center</div>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transition group">
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition">
                <Home className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Pakhiralay</h3>
              <p className="text-gray-600 text-sm mb-3">Resort area with accommodation facilities</p>
              <div className="text-blue-600 font-semibold">Stay Hub</div>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transition group">
              <div className="bg-gradient-to-br from-orange-400 to-orange-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition">
                <Anchor className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Gosaba</h3>
              <p className="text-gray-600 text-sm mb-3">Gateway to Sundarban with launch services</p>
              <div className="text-orange-600 font-semibold">Gateway</div>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transition group">
              <div className="bg-gradient-to-br from-purple-400 to-purple-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition">
                <Ship className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Godhkhali</h3>
              <p className="text-gray-600 text-sm mb-3">Main boarding point for Sundarban cruises</p>
              <div className="text-purple-600 font-semibold">Boarding Point</div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CULTURAL EXPERIENCES ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Cultural Experiences</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Immerse yourself in the rich local culture and traditions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-8 h-8 text-orange-600" />
                <h3 className="text-2xl font-bold">Village Life Experience</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Guided village tours to experience authentic rural life</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Interaction with local fishermen and honey collectors</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Visit to local markets and handicraft centers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Traditional fishing techniques demonstration</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Star className="w-8 h-8 text-purple-600" />
                <h3 className="text-2xl font-bold">Folk Cultural Programs</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>Traditional village folk dance performances</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>Local music and storytelling sessions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>Bonfire evenings with cultural activities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>Traditional cuisine cooking demonstrations</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Heritage Sites</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-2">Rabindranath Tagore's Heritage Bungalow</h4>
                <p className="text-green-100">Visit the historic bungalow where the Nobel laureate stayed during his Sundarban visits</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Hamilton's Bungalow</h4>
                <p className="text-green-100">Explore the colonial-era heritage site with rich historical significance</p>
              </div>
            </div>
          </div>
        </div>
      </section>



      <PackagePricing
        title="Sundarban Tour Packages"
        subtitle="Choose your perfect mangrove adventure duration"
      />

      <ContactCTA />

    </main>
  )
}
