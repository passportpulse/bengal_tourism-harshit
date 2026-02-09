"use client"

import Image from 'next/image'
import { MapPin, Calendar, Users, Star, Clock, Camera, Sun, Home, DollarSign, Award, Compass, Utensils, Building, Trees, Ship, Sparkles, Train, ShoppingBag, Book, Mountain, Waves, Fish, Bird, Tent, Flame, PartyPopper, Heart, Sprout, Coffee, Leaf, TreePine, Stethoscope, HeartPulse, Shield, Globe, Phone, Mail, CheckCircle, AlertCircle, Activity, Brain, Bone, Eye, User, Bed, Wifi, Car, Wind, Building as Temple, Waves as WavesIcon, Compass as CompassIcon, Trees as TreesIcon, Camera as CameraIcon, Ship as ShipIcon, Snowflake } from 'lucide-react'
import WhyChooseBengal from '@/components/WhyChooseBengal'
import TestimonialsInteractive from '@/components/TestimonialsInteractive'
import BreathtakingCities from '@/components/BreathtakingCities'
import HeroSection from "@/components/HeroSection"
import PackagesHorizontalSlider from "@/components/PackagesHorizontalSlider"
import CTASection from '@/components/CTASection'
import TailorMadeBentoGrid from '@/components/TailorMadeBentoGrid'
import AboutTrusted from '@/components/AboutTrusted'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <main className="text-gray-800">

       <HeroSection />
        <AboutTrusted/>

<PackagesHorizontalSlider />

<BreathtakingCities/>
   <WhyChooseBengal />
      {/* ================= FEATURES SECTION ================= */}
  
<TestimonialsInteractive />
     <TailorMadeBentoGrid/>

<CTASection/>
    
    </main>
    </>
  )
}
