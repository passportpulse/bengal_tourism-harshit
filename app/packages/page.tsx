"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Calendar, Users, DollarSign, ArrowRight, Clock, Star } from "lucide-react";

const tourPackages = [
  {
    id: 1,
    name: "DARJEELING HILL Circuit",
    subtitle: "Queen of the Hills",
    days: "5N / 6D",
    priceINR: 15400,
    priceUSD: 225,
    minMaxPax: "02 / Customised",
    schedule: "Any Day",
    pickup: "NJP / Bagdogra",
    category: "Hills"
  },
  {
    id: 2,
    name: "KALIMPONG + DEOLO / MIRIK + TABAKOSHI",
    subtitle: "Land of Orchids & Mists",
    days: "3N / 4D",
    priceINR: 9100,
    priceUSD: 150,
    minMaxPax: "02 / Customised",
    schedule: "Any Day",
    pickup: "NJP / NJP/Bagdogra",
    category: "Hills"
  },
  {
    id: 3,
    name: "CHATAKPUR /-SITTONG-/ AHALDARA",
    subtitle: "Switzerland of East / Orange Valley",
    days: "2N / 3D",
    priceINR: 6400,
    priceUSD: 95,
    minMaxPax: "04 / Customised",
    schedule: "Any Day",
    pickup: "NJP / NJP/Bagdogra",
    category: "Hills"
  },
  {
    id: 4,
    name: "SANDAKPHU & MANEBHANJAN",
    subtitle: "Trekkers Paradise",
    days: "2N / 3D",
    priceINR: 6400,
    priceUSD: 95,
    minMaxPax: "04 / Customised",
    schedule: "Any Day",
    pickup: "NJP / Bagdogra",
    category: "Hills"
  },
  {
    id: 5,
    name: "OFF BEAT DESTINATIONS - Hills",
    subtitle: "Explore the Himalayan Range of Bengal",
    days: "2N / 3D",
    priceINR: 6400,
    priceUSD: 95,
    minMaxPax: "04 / Customised",
    schedule: "Any Day",
    pickup: "NJP / Bagdogra",
    category: "Hills"
  },
  {
    id: 6,
    name: "DOOARS / DUARS FOREST Circuit",
    subtitle: "National Wildlife Sanctuary",
    days: "5N / 6D",
    priceINR: 15400,
    priceUSD: 225,
    minMaxPax: "02 / Customised",
    schedule: "Any Day",
    pickup: "NJP / NJP/ Bagdogra",
    category: "Wildlife"
  },
  {
    id: 7,
    name: "GORUMARA (or) JALDAPARA",
    subtitle: "Jeep Safari & Elephant Safari",
    days: "3N / 4D",
    priceINR: 9100,
    priceUSD: 150,
    minMaxPax: "02 / Customised",
    schedule: "Any Day",
    pickup: "NJP / Bagdogra",
    category: "Wildlife"
  },
  {
    id: 8,
    name: "RISHYAP - JHANDI - LAVA - LONGCHU - CHIBBO",
    subtitle: "Kolakham - Neora Valley - Change Falls - Gorubathan",
    days: "2N / 3D",
    priceINR: 6400,
    priceUSD: 95,
    minMaxPax: "04 / Customised",
    schedule: "Any Day",
    pickup: "NJP / Bagdogra",
    category: "Hills"
  },
  {
    id: 9,
    name: "SHORT BREAKS from KOLKATA",
    subtitle: "From Kolkata to a Place of your Choice",
    days: "0N / 1D",
    priceINR: 3700,
    priceUSD: 75,
    minMaxPax: "06 / Curated",
    schedule: "Any Day",
    pickup: "Kolkata",
    category: "Day Tour"
  },
  {
    id: 10,
    name: "REGIONAL DESTINATION in BENGAL",
    subtitle: "The Diversity & Cultures of Bengal",
    days: "2N / 3D",
    priceINR: 6400,
    priceUSD: 95,
    minMaxPax: "04 / Customised",
    schedule: "Any Day",
    pickup: "Kolkata / Local Station",
    category: "Cultural"
  },
  {
    id: 11,
    name: "OFF BEAT DESTINATIONS - Plains",
    subtitle: "Explore the Bengal Countryside",
    days: "1N / 2D",
    priceINR: 3700,
    priceUSD: 75,
    minMaxPax: "06 / Curated",
    schedule: "Any Day",
    pickup: "Kolkata / Local Station",
    category: "Cultural"
  },
  {
    id: 12,
    name: "PILGRIMAGE & RELIGIOUS Tours",
    subtitle: "Shakti Peetha's in Bengal & Other",
    days: "1N / 2D",
    priceINR: 3700,
    priceUSD: 75,
    minMaxPax: "06 / Curated",
    schedule: "Any Day",
    pickup: "Kolkata",
    category: "Pilgrimage"
  },
  {
    id: 13,
    name: "DIGHA SEA BEACH Circuit",
    subtitle: "Sea Beach Destination of the East",
    days: "4N / 5D",
    priceINR: 12700,
    priceUSD: 175,
    minMaxPax: "02 / Customised",
    schedule: "Any Day/Weekends",
    pickup: "Kolkata",
    category: "Beach"
  },
  {
    id: 14,
    name: "MANDARMONI & TAJPUR Sea Beach",
    subtitle: "Lover's Paradise",
    days: "3N / 4D",
    priceINR: 9100,
    priceUSD: 150,
    minMaxPax: "02 / Customised",
    schedule: "Any Day",
    pickup: "Kolkata",
    category: "Beach"
  },
  {
    id: 15,
    name: "BAKKHALI - MOUSUNI Island's",
    subtitle: "Weekend Destination by the Sea",
    days: "2N / 3D",
    priceINR: 6400,
    priceUSD: 95,
    minMaxPax: "04 / Customised",
    schedule: "Any Day / Weekends",
    pickup: "Kolkata",
    category: "Beach"
  }
];

export default function PackagesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Bengal Tourism Packages"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-red-900/40"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-6 py-3 mb-8">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white font-medium text-sm">Premium Tour Packages</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Bengal Tourism's
              <span className="block bg-gradient-to-r from-red-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent relative">
                Tariff
                <svg className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-3/4 h-4" viewBox="0 0 300 16" fill="none">
                  <path d="M10 8 Q 75 4, 150 8 T 290 8" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#EF4444" />
                      <stop offset="50%" stopColor="#F59E0B" />
                      <stop offset="100%" stopColor="#F97316" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
              SOME OF OUR PRE-SCHEDULED & POPULAR TOUR PACKAGES
            </p>
          </div>
        </div>
      </section>

      {/* Packages Grid Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tourPackages.map((pkg) => (
              <div key={pkg.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white p-4">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-2xl font-bold">#{pkg.id}</span>
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                      {pkg.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-1">{pkg.name}</h3>
                  <p className="text-white/90 text-sm">{pkg.subtitle}</p>
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-2 text-gray-700">
                    <Clock className="w-4 h-4 text-red-600" />
                    <span className="text-sm font-medium">{pkg.days}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-gray-700">
                    <Users className="w-4 h-4 text-red-600" />
                    <span className="text-sm font-medium">{pkg.minMaxPax}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-gray-700">
                    <Calendar className="w-4 h-4 text-red-600" />
                    <span className="text-sm font-medium">{pkg.schedule}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-gray-700">
                    <MapPin className="w-4 h-4 text-red-600" />
                    <span className="text-sm font-medium">{pkg.pickup}</span>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-3">
                      <div>
                        <p className="text-2xl font-bold text-gray-900">₹{pkg.priceINR.toLocaleString()}</p>
                        <p className="text-sm text-gray-600">per person</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold text-gray-900">${pkg.priceUSD}</p>
                        <p className="text-sm text-gray-600">per person</p>
                      </div>
                    </div>
                    
                    <Link href="/book-tour">
                      <button className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2">
                        BOOK NOW
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Terms & Conditions Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Terms & Conditions
          </h2>
          
          <div className="bg-white rounded-xl shadow-lg p-8 space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">ALL INCLUSIVE PRICE:</h3>
              <p className="text-gray-700 leading-relaxed">
                All transfer in Deluxe Car/Bus/Coach/Train Seats/Berth as booked. Accommodation in 2* Dlx Hotels / Resort with Spacious Deluxe Rooms with Satellite TV, essential Toiletries, attached Bath (hot/cold running water) on Double / Triple sharing basis with children. All meals in MAP plan includes Bed Tea, Breakfast, Lunch/Dinner (All meals in Home Stays) Evening Tea/Coffee with bottled Drinking water, Tea / Coffee Maker (where available) in Rooms as inclusive & Complementary Welcome Drinks with all Local sight-seeing as per Itinerary in (SIC).
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">CHILD POLICY:</h3>
              <p className="text-gray-700 leading-relaxed">
                1 CHILD below 4 years Free. 2nd Child and/or above 4 years but below 8 years @ 50% of price in sharing accommodation with parents. Extra Bed & separate Bus/Train seat will be provided to child above 4 years.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">UPGRADE OPTIONS:</h3>
              <p className="text-gray-700 leading-relaxed">
                Upgrade to AC Dlx Rooms / Cottage / Superior View Room / Haveli (@ $10 / Rs.500/-) per person/day (or) to Premium Star Category Hotels / Resorts / Bungalows (@ USD $100 / Rs.7,000/-) per person/day where available. Also upgrade to Non Sharing & Exclusive AC Car/Vehicle (@ $25 / Rs.2500/-) per day (Compulsory if less than 6 PAX / Exclusive - non sharing/Peak Season surcharge).
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">BOOKING & CONFIRMATION:</h3>
              <p className="text-gray-700 leading-relaxed">
                For confirmed price, booking has to be made at least 60 days prior to start of tour/journey with 50% advance payment made to our Bank only through (online transfer / bank deposit / remittance through debit / credit card) via secured banking. Use only the Booking Form. Money receipt will be generated online. Balance will be paid before start of the journey / tour (or) on arrival at destination. Bengal Tourism promises & guarantees NO other extra charges or any un-declared cost.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">CANCELLATION POLICY:</h3>
              <p className="text-gray-700 leading-relaxed">
                100% Refund if cancelled before 45 days. 50% refund if cancelled before 15 days of start of journey / tour date. No refunds will be made if cancelled any days after that (or) for cancellation or no-show for tours booked for and during Peak seasons / Black-out Days / Festival dates & Express Tour.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">FOREIGNERS:</h3>
              <p className="text-gray-700 leading-relaxed">
                Encashment certificate is required for Foreigners visiting India and valid passports, visas, photographs, and related documents are also necessary for smooth operations. In some states there are provisions of Restricted Area Permit and Protected Area Permits for foreigners.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">EXCLUDES:</h3>
              <p className="text-gray-700 leading-relaxed">
                Air travel (actual), 4-5 Star Premium Hotels / Resorts / Haveli / Tea Estates boarding & facilities as per itinerary. Charges for Safari / Entry Fees / Cruises / Shows / Exclusive non-sharing Vehicle (surface transfer) / Recreational activities not included in the Itinerary. Extra Beverages / Drinks, Porter charges, Non-Sharing Vehicle, Entry fees, Recreational rides, Tips, Laundry, Phone bills, Room heaters & anything not specifically mentioned & taxes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
