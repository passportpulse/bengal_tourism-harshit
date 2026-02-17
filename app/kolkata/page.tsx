"use client"

import Image from 'next/image'
import { MapPin, Calendar, Users, Star, Clock, Camera, Sun, Home, IndianRupee, Award, Compass, Utensils, Building, Trees, Ship, Sparkles, Train, ShoppingBag, Book, Archive, Church } from 'lucide-react'
import PackagePricing from '@/components/PackagePricing'
import ContactCTA from '@/components/ContactCTA'

export default function KolkataPage() {
  return (
    <main className="text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-gradient-to-br from-white to-orange-50 py-24 overflow-hidden">
        {/* Decorative Image - Touching top and right */}
        <img
          src="/Decore.png"
          alt="Decorative elements"
          className="absolute top-0 right-0 w-auto h-full object-contain"
        />

        <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* ---------- LEFT CONTENT ---------- */}
          <div>
            <div className="flex items-center  gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-yellow-400" />
              <span className="text-yellow-400 font-semibold tracking-wide">The City of Joy</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6 relative">
              Kolkata
              <span className="block text-3xl md:text-5xl mt-2 text-orange-300">
                Heritage • Culture • Cuisine • Arts
              </span>
            </h1>

            <p className="text-gray-600 text-lg mb-10 max-w-md">
              Experience the vibrant heart of Bengal - where colonial grandeur meets 
              cultural richness in every corner of this historic metropolis
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <button className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-yellow-400 transition transform hover:scale-105">
                Explore City of Joy
              </button>

              <button className="border-2 border-yellow-600 text-yellow-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-600 hover:text-white transition transform hover:scale-105">
                Taste Bengalicious
              </button>
            </div>
          </div>

          {/* ---------- RIGHT IMAGE ---------- */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/kolkata-DIY.avif"
              alt="Kolkata Victoria Memorial Hall at sunset with city skyline"
              className="w-full max-w-md md:max-w-lg lg:max-w-xl rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* ================= QUICK FACTS ================= */}
      <section className="py-16 bg-gradient-to-r from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Building className="w-10 h-10 text-orange-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">300+ Years</h3>
              <p className="text-gray-600 text-sm">Rich history</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Archive className="w-10 h-10 text-red-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Heritage Sites</h3>
              <p className="text-gray-600 text-sm">15+ monuments</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Utensils className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Bengali Cuisine</h3>
              <p className="text-gray-600 text-sm">1000+ dishes</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Camera className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Art & Culture</h3>
              <p className="text-gray-600 text-sm">Tollywood hub</p>
            </div>
          </div>
        </div>
      </section>

<div className="bg-gray-50 text-gray-800 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* INTRO SECTION */}
        <section className=" space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold border-b-4 border-white inline-block pb-3">
            Visit & Explore Kolkata
          </h1>

          <p className="leading-8">
            Formerly known as Calcutta, 1st Capital of India of the British Rule before it was shifted to New Delhi. Also known as City of Joy. Bastions & remains of the ancient British & French settlements, boasts of a mini China Town within itself, continuing the Bengali Babu culture and witnessing Bengal Renaissance. A truly Heritage City with many diversity where culture & arts gets its true recognition. Where again Food & Football shares the same frenzy as Jazz & Jatras. Where world Politics are equally debated with Global warming. Where you can savor a Mc. Donald’s & Coke together with a Kati roll & Chai in a clay cup. What Thames is to London – Hooghly is to Kolkata and more…
          </p>

          <p className="leading-8">
            Kolkata – known as Calcutta till 1991 - is the Capital City of Bengal State in India. is located in the world’s largest River Delta – the ‘Ganges Delta’, which stretches between River Hooghly on the West and River Meghna on the East and a host of other smaller rivers zigzag through the Ganges Delta which merge and flow into the Bay of Bengal Sea. And the world’s thirteenth most populous urban area with 14.2 million people residing in its urban core and suburbs.
          </p>

          <p className="leading-8">
            Before the establishment of the city of Calcutta – the Anglicized name of ‘Kolkata’, three villages existed in the same area – Kalikata, Govindapur and Sutanuti. Kolkata derives its name from the Kalikata village – which literally means ‘the land of Goddess Kali’. Post the British Imperial Period in 1947, India embarked upon the process of renaming its cities which had to be approved by the Central Government. And thus Calcutta was renamed Kolkata in 2001.
          </p>
        </section>

        {/* CULTURE & HISTORY */}
        <section className=" space-y-6">
          <p className="leading-8">
            Kolkata, having been gripped by the British politics and culture for centuries and having also been a seat and hub of Indian culture and art and religion, is a mammoth sized entity of a city that influenced the rest of the country towards political, educational, religious, artistic and general lifestyle reforms which is evident in its history and visible in its vibrant culture and myriad traditions.
          </p>
        </section>

        {/* ARCHITECTURE */}
        <section className="  space-y-6">
          <h2 className="text-3xl font-semibold border-b-2 border-white inline-block pb-2">
            City of Palaces & Bridges
          </h2>

          <p className="leading-8">
            Kolkata is a City of Palaces - owing to the numerous palatial mansions dotting the Kolkata cityscape – most constructed during the British colonial era in Bengal when Kolkata was made the Capital of British India. Their architecture is influenced by and emanates a mix of Neo-classical, neo-Gothic, Baroque, Islamic, Oriental and predominantly European (British, French and Portuguese) schools of design.
          </p>

          <p className="leading-8">
            Apart from the colossal and opulent constructions, Kolkata is home to some structural and technological marvels such as the world’s busiest and the 6th longest suspension type balanced Cantilever Bridge – the Howrah Bridge India’s longest Cable-stayed bridge – the Vidyasagar Setu; a multispan steel bridge – Vivekananda Setu and the Nivedita Setu – another cable-stayed bridge – all on one single river – Hooghly which spines through the city of Kolkata. Nothing short of being glorified, the Howrah Bridge was made the symbol of Kolkata.
          </p>
        </section>

        {/* NOTABLE PERSONALITIES */}
        <section className=" space-y-6">
          <p className="leading-8">
            Kolkata is also home to or has been a stepping stone for Nobel Prize winning Exponents such as Gurudev Rabindranath Tagore (Literature, 1913); Sir Ronald Ross (Medicine, 1902); C. V. Raman (Physics, 1930); Mother Teresa ( Peace, 1979); Amartya Sen (Economics, 1998); the ‘Oscar for Lifetime achievement’ awardee – Satyajit Ray and multi-time Grammy Winner – Pandit Ravi Shankar.
          </p>

          <p className="leading-8">
            Apart from these, there are scrolls of world- renowned and generations of statesmen, freedom fighters, social reformers, poets, scientists, historians, writers, orators, philosophers, linguists, sportsmen, fine artists, theatre artistes, film artistes, musicians, dancers, photographers, magicians, film makers and businessmen.
          </p>
        </section>

        {/* ADDa & FOOD */}
        <section className="  space-y-6">
          <p className="leading-8">
            Call it a passion or obsession or maybe they are just wired that way but the gregarious Bengalis are all about boisterous and deep conversations, soul-stirring music, writing at the drop of a hat and food – both experimenting and eating. Visit the Coffee House at College Street in Kolkata and you can see what I mean. You will be amazed by the ‘Adda’ culture (having long-drawn and hearty conversations over hot cuppa tea) that’s in your face when you enter the Coffee House.
          </p>

          <p className="leading-8">
            Food is central to the Bengalis because of which the popular Bengali saying – ‘machhey bhate bangali’ (meaning fish and rice make a Bengali) has come into existence. One may not know a Bengali or not know where their sweets come from but the sweets made by the Bengalis are relished by domestic and foreign sweet-toothies all over.
          </p>
        </section>

        {/* PLACES OF INTEREST */}
        <section className="  space-y-6">
          <h2 className="text-3xl font-semibold border-b-2 border-white inline-block pb-2">
            Places of Interest
          </h2>

          <p className="leading-8">
            Victoria Memorial • Dakhineshwar Kali • Kalighat Temple • Missionaries of Charity • Banks of the river (Hooghly) Ganges • River Cruise • Indian Museum • St. Paul’s Cathedrae • The Last Supper (original painting) • Zoological Gardens • Botanical Gardens • Town Hall • Kumartuli • Marble Palace • Water World • Heritage Buildings • Night Clubs • Sir. Stuart’s Hog’s (New) Market • Tram Ride • Horse Drawn Carriage • Durga Puja festival (held once every year) • invitation to a Bengali marriage ceremony & more…
          </p>
        </section>

        {/* NEARBY */}
        <section className=" space-y-6">
          <h2 className="text-3xl font-semibold border-b-2 border-white inline-block pb-2">
            At a Short Distance
          </h2>

          <p className="leading-8">
            Krishnanagar (Clay models) • Santiniketan ( all about Rabindranath Tagore & Kantha embroidery) • Bolpur (Baul Singers) • Mayapur (ISKCON - Hare Krishna Temple) • Navadwip • Bakreswar (9 Hot Springs) • Tarapeeth (Goddess Tara Ma) • Murshidabad ( Palaces of the erstwhile Nawabs of Bengal) • Chadernagore • Serampore (remains of French bastions) • Fulia (Handloom Weavers) & more…
          </p>
        </section>

        {/* CUISINE */}
        <section className=" space-y-6">
          <h2 className="text-3xl font-semibold border-b-2 border-white inline-block pb-2">
            Must Try Cuisine
          </h2>

          <p className="leading-8">
            Highly recommended authentic Bengali in Fish – Crab – Prawn – Lamb curries & Vegetable preparations & Rice, Rosogolla, Mishti Doi & Sondesh. See Local Cuisine. Also all other Indian regional & International speciality cuisines like Chinese / Continental / Oriental / Lebanese / Thai / Japanese / European are there to pick from. You ask, we present!
          </p>
        </section>

      </div>
    </div>
      {/* ================= MAJOR ATTRACTIONS ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Major Attractions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Iconic landmarks and must-visit destinations in the City of Joy
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                <Building className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Victoria Memorial Hall</h3>
                <p className="text-gray-700 mb-4">Magnificent marble monument built in memory of Queen Victoria (1921)</p>
                <div className="flex items-center gap-2 text-orange-600">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Maidan</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center">
                <Ship className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Howrah Bridge</h3>
                <p className="text-gray-700 mb-4">Iconic cantilever bridge over Hooghly River, engineering marvel</p>
                <div className="flex items-center gap-2 text-blue-600">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Howrah</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-green-400 to-teal-500 flex items-center justify-center">
                <Archive className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Indian Museum</h3>
                <p className="text-gray-700 mb-4">Largest museum in India, founded in 1814, housing rare artifacts</p>
                <div className="flex items-center gap-2 text-green-600">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Jawaharlal Nehru Road</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
                <Church className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">St. Paul's Cathedral</h3>
                <p className="text-gray-700 mb-4">Gothic Revival style cathedral, built in 1847, architectural gem</p>
                <div className="flex items-center gap-2 text-purple-600">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm"> Cathedral Road</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                <Trees className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Botanical Gardens</h3>
                <p className="text-gray-700 mb-4">World's largest banyan tree, 273-acre paradise of flora</p>
                <div className="flex items-center gap-2 text-yellow-600">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Shyambazar</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center">
                <Train className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Tram Museum</h3>
                <p className="text-gray-700 mb-4">History of tram cars in India, vintage transportation heritage</p>
                <div className="flex items-center gap-2 text-teal-600">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Esplanade</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= HERITAGE SITES ================= */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Heritage & Historical Sites</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Journey through centuries of history in these magnificent monuments
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Marble Palace", year: "1835", desc: "House of Raja Rajendra Mullick", icon: "🏛️" },
              { name: "Town Hall", year: "1853", desc: "Roman Doric style architecture", icon: "🏛️" },
              { name: "Rani Rashmoni House", year: "1805", desc: "Built in neo-classical style", icon: "🏛️" },
              { name: "Shovabazar Rajbari", year: "1737-97", desc: "House of Raja Nabakrishna Deb", icon: "🏛️" },
              { name: "National Library", year: "1936", desc: "Largest library in India", icon: "📚" },
              { name: "Wax Museum", year: "New", desc: "Life-like wax statues", icon: "🎭" },
              { name: "Mother's House", year: "1953", desc: "House of Mother Teresa", icon: "⛪" },
              { name: "North Calcutta", year: "Colonial", desc: "Old Calcutta heritage", icon: "📸" }
            ].map((site, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition group">
                <div className="text-3xl mb-3 group-hover:scale-110 transition">{site.icon}</div>
                <h3 className="font-bold text-lg mb-1">{site.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{site.desc}</p>
                <p className="text-orange-600 font-semibold">{site.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BENGALI CUISINE ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Bengali Cuisine</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Taste the authentic flavors of Bengal - #Bengalicious #BengaliCuisine
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-green-50 to-yellow-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-green-700">Bhaja or Fry</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600">•</span>
                  <span>Posto Bora/Bata, Daal-er Bora, Aloo/Begun/Ucchey/Borboti/Koraishutir/Kochuri</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">•</span>
                  <span>Radha Ballabhi & more crispy delights</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">•</span>
                  <span>Served with Kasundi or Kagji Lebu</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-orange-700">Bhaat or Steamed Rice</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-orange-600">•</span>
                  <span>Basanti Polao, Basmati, Dhenki Kota, Gobindo Bhog</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600">•</span>
                  <span>Khichuri Bhog, Radhunipagal, Tulaipanji/Badshabhog</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600">•</span>
                  <span>Bengal's own rice brands</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-blue-700">Macch or Fish</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Bhetki/Ilish paturi in Kolkapata/Banana leaves</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Ilish/Hilsa in Sorshey or Mustard sauce/Doi/Fry/Bhapa</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Golda Chingri, Bagda Chingri, Chingri/Shrimp Bharta</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Daal or Lentils", items: "Chhola/BhajaMoong/Moshur/Orol/Kolai", icon: "🍲" },
              { name: "Saak or Greens", items: "Notey/Palank/Paat/Lau/Lall/Kochu", icon: "🥬" },
              { name: "Torkari or Vegetables", items: "Shukto/Kochur loti/Mochar/Banana flower", icon: "🍆" },
              { name: "Mangsho or Meat", items: "Mete Chochcori/Koshi Panthar Jhol", icon: "🍖" },
              { name: "Chatni", items: "Kancha Aam/Pepe/Tomato Chutney", icon: "🥭" },
              { name: "Mishti or Sweets", items: "Gurer Payesh/Rosogolla/Sondesh", icon: "🍮" },
              { name: "Street Food", items: "Kati Roll/Fuchka/Jhaal Muri", icon: "🌮" },
              { name: "Home-made Breads", items: "Luchi/Porota/Hatt o Tawar Rooti", icon: "🫓" }
            ].map((category, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition group">
                <div className="text-2xl mb-3 group-hover:scale-110 transition">{category.icon}</div>
                <h4 className="font-bold text-lg mb-2">{category.name}</h4>
                <p className="text-sm text-gray-600">{category.items}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CULTURAL EXPERIENCES ================= */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Cultural Experiences</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Immerse yourself in the vibrant cultural tapestry of Kolkata
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center">
                <Book className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">College Street</h3>
                <p className="text-gray-700 mb-4">Book lovers paradise with academic charm and intellectual atmosphere</p>
                <div className="flex items-center gap-2 text-pink-600">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">North Calcutta</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                <Sparkles className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Park Street</h3>
                <p className="text-gray-700 mb-4">Vibrant nightlife with street food, entertainment, and cultural shows</p>
                <div className="flex items-center gap-2 text-yellow-600">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Park Circus Area</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-green-400 to-teal-500 flex items-center justify-center">
                <Train className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Tram Museum</h3>
                <p className="text-gray-700 mb-4">Preserved heritage of Kolkata's iconic tram transportation system</p>
                <div className="flex items-center gap-2 text-green-600">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Esplanade</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                <Camera className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">North Calcutta</h3>
                <p className="text-gray-700 mb-4">Heritage trails and photographer's delight with colonial architecture</p>
                <div className="flex items-center gap-2 text-blue-600">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Old Calcutta</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                <ShoppingBag className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Tollywood</h3>
                <p className="text-gray-700 mb-4">Hub of Bengali film industry and shooting locations</p>
                <div className="flex items-center gap-2 text-orange-600">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Tollygunge</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SHOPPING & MARKETS ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Shopping & Markets</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore bustling markets and shopping destinations in Kolkata
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <ShoppingBag className="w-8 h-8 text-orange-600" />
                <h3 className="text-2xl font-bold">New Market</h3>
              </div>
              <p className="text-gray-700 mb-4">
                One of Kolkata's oldest and busiest markets offering everything from textiles to electronics. 
                Experience the vibrant chaos and bargaining culture of traditional Bengali markets.
              </p>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold mb-2">What to Buy</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Traditional textiles & sarees</li>
                  <li>• Bengali sweets & snacks</li>
                  <li>• Electronics & gadgets</li>
                  <li>• Handicrafts & souvenirs</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <ShoppingBag className="w-8 h-8 text-purple-600" />
                <h3 className="text-2xl font-bold">Mullick Bazaar</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Also known as Chor Bazaar, this historic market offers authentic Bengali items, 
                spices, and traditional crafts. A paradise for those seeking genuine local products.
              </p>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold mb-2">Specialties</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Traditional brassware</li>
                  <li>• Bengali confectionery</li>
                  <li>• Spices & dry fruits</li>
                  <li>• Religious items</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
     <PackagePricing 
        title="Kolkata Tour Packages"
        subtitle="Choose your perfect cultural and colonial heritage adventure"
      />

       
    <ContactCTA />
    </main>
  )
}
