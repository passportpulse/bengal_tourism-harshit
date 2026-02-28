
import { Metadata } from 'next'
import WhyChooseBengal from '@/components/WhyChooseBengal'
import TestimonialsInteractive from '@/components/TestimonialsInteractive'
import BreathtakingCities from '@/components/BreathtakingCities'
import HeroSection from "@/components/HeroSection"
import PackagesHorizontalSlider from "@/components/PackagesHorizontalSlider"
import CTASection from '@/components/CTASection'
import TailorMadeBentoGrid from '@/components/TailorMadeBentoGrid'
import AboutTrusted from '@/components/AboutTrusted'
import RandomPackageSections from '@/components/RandomPackageSections'
import HotelBookingSection from '@/components/HotelBookingSection'
import LoginPage from '@/components/LoginPage'
import VideoLandingSection from '@/components/VideoLandingSection'



export const metadata: Metadata = {
  metadataBase: new URL("https://bengaltourism.in"),

  title: {
    default: "Bengal Tourism | West Bengal Tour Packages, Darjeeling, Sundarbans",
    template: "%s | Bengal Tourism"
  },

  description:
    "Explore West Bengal tourism with curated tour packages to Darjeeling, Sundarbans, Kolkata, Digha & Dooars. Book hotels, wildlife safaris & cultural trips with Bengal Tourism.",

  keywords: [
    "West Bengal Tourism",
    "Bengal Tour Packages",
    "Darjeeling Tour Package",
    "Sundarbans Tour",
    "Kolkata Tourism",
    "Digha Beach Tour",
    "Dooars Package",
    "Bengal Travel Guide",
    "Hotel Booking West Bengal",
    "Wildlife Safari Sundarbans"
  ],

  alternates: {
    canonical: "https://bengaltourism.in"
  },

  openGraph: {
    title: "West Bengal Tourism | Darjeeling, Sundarbans & Kolkata Tours",
    description:
      "Book West Bengal tour packages covering Darjeeling hills, Sundarbans mangroves, Kolkata heritage & Digha beaches.",
    url: "https://bengaltourism.in",
    siteName: "Bengal Tourism",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200",
        width: 1200,
        height: 630,
        alt: "West Bengal Tourism - Darjeeling Hills & Sundarbans",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "West Bengal Tourism | Darjeeling & Sundarbans Packages",
    description:
      "Discover Darjeeling, Sundarbans, Kolkata & Digha with curated Bengal tour packages.",
    images: [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200",
    ],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    google: "PASTE_REAL_GOOGLE_SEARCH_CONSOLE_CODE_HERE",
  },

  category: "travel",
};

export default function HomePage() {
  return (
    <>
      <main className="text-gray-800">

        <HeroSection />
        <PackagesHorizontalSlider />
        
        {/* ================= VIDEO LANDING SECTION ================= */}
        
        {/* ================= HOTEL BOOKING SECTION ================= */}
        <HotelBookingSection />
        <TailorMadeBentoGrid />
     
        <AboutTrusted />
        <LoginPage />
  <RandomPackageSections />

        <BreathtakingCities />
        <TestimonialsInteractive />

        <WhyChooseBengal />
        {/* ================= FEATURES SECTION ================= */}

        <CTASection />

      </main>
    </>
  )
}
