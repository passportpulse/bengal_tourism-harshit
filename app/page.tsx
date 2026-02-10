
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

export const metadata: Metadata = {
  title: 'Bengal Tourism - Explore the Beauty of West Bengal | Official Tourism Portal',
  description: 'Discover the magic of Bengal with our curated tours and travel packages. Explore Kolkata, Darjeeling, Sundarbans, Digha and more. Book hotels, tours and experience the rich culture, heritage and natural beauty of West Bengal.',
  keywords: 'Bengal Tourism, West Bengal Tourism, Kolkata Tourism, Darjeeling Tours, Sundarbans, Digha Beach, Bengal Travel, Tour Packages, Hotel Booking, Travel Guide',
  openGraph: {
    title: 'Bengal Tourism - Explore the Beauty of West Bengal',
    description: 'Discover the magic of Bengal with our curated tours and travel packages. Explore Kolkata, Darjeeling, Sundarbans and more.',
    type: 'website',
    url: 'https://bengaltourism.com',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200',
        width: 1200,
        height: 630,
        alt: 'Bengal Tourism - Beautiful landscapes of West Bengal',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bengal Tourism - Explore West Bengal',
    description: 'Discover the magic of Bengal with our curated tours and travel packages.',
    images: ['https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function HomePage() {
  return (
    <>
      <main className="text-gray-800">

        <HeroSection />
       <RandomPackageSections />
        <AboutTrusted />

        <PackagesHorizontalSlider />

        <BreathtakingCities />
        <WhyChooseBengal />
        {/* ================= FEATURES SECTION ================= */}

        <TestimonialsInteractive />
        <TailorMadeBentoGrid />

        <CTASection />

      </main>
    </>
  )
}
