import { Metadata } from 'next'
import AboutPage from "@/components/about/AboutPage";
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'About Bengal Tourism - Our Story, Mission & Vision | Official Tourism Portal',
  description: 'Learn about Bengal Tourism - our journey since 2008, mission to showcase Bengal beauty, commitment to sustainable tourism, and the team dedicated to providing exceptional travel experiences across West Bengal.',
  keywords: 'About Bengal Tourism, Bengal Tourism story, Bengal Tourism mission, West Bengal tourism team, sustainable tourism Bengal, Bengal tourism history',
  openGraph: {
    title: 'About Bengal Tourism - Our Story & Mission',
    description: 'Learn about Bengal Tourism - our journey since 2008, mission to showcase Bengal beauty, and commitment to sustainable tourism.',
    type: 'website',
    url: 'https://bengaltourism.com/about',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1200',
        width: 1200,
        height: 630,
        alt: 'About Bengal Tourism - Our story and team',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Bengal Tourism - Our Story & Mission',
    description: 'Learn about Bengal Tourism - our journey since 2008 and commitment to showcasing Bengal beauty.',
    images: ['https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1200'],
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
}

export default function About() {

  return (
    <>
     <AboutPage/>
<ContactCTA />

    </>
  );
}
