"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Facebook, Instagram, MessageCircle, Phone } from "lucide-react"

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false)
    const [tourSidebarOpen, setTourSidebarOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50">
            {/* Tour Packages Sidebar */}
            {tourSidebarOpen && (
                <div className="fixed inset-0 z-50 flex">
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-black/50"
                        onClick={() => setTourSidebarOpen(false)}
                    />

                    {/* Sidebar */}
                    <div className="fixed left-0 top-0 h-full w-80 bg-white shadow-xl overflow-y-auto">
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-bold text-gray-900">Tour Packages</h2>
                                <button
                                    onClick={() => setTourSidebarOpen(false)}
                                    className="text-gray-500 hover:text-gray-700"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            {/* Tour Categories */}
                            <div className="space-y-6">
                                {/* BENGAL BECKONS */}
                                <div>
                                    <h3 className="font-bold text-red-600 mb-3">BENGAL BECKONS</h3>
                                    <ul className="space-y-2">
                                        <li><a href="#" className="text-gray-700 hover:text-red-600 block py-1">Queen of the Hills</a></li>
                                        <li><a href="#" className="text-gray-700 hover:text-red-600 block py-1">Sea & Sand of the East</a></li>
                                        <li><a href="#" className="text-gray-700 hover:text-red-600 block py-1">Wildlife Forest & Jungle Safari</a></li>
                                        <li><a href="#" className="text-gray-700 hover:text-red-600 block py-1">City of Joy</a></li>
                                        <li><a href="#" className="text-gray-700 hover:text-red-600 block py-1">Largest Mangrove of the World</a></li>
                                    </ul>
                                </div>

                                {/* HOT SPOTS */}
                                <div>
                                    <h3 className="font-bold text-red-600 mb-3">HOT SPOTS</h3>
                                    <ul className="space-y-2">
                                             <li><a href="#" className="text-gray-700 hover:text-red-600 block py-1">Darjeeling & Kalimpong Pkj</a></li>
                                        <li><a href="#" className="text-gray-700 hover:text-red-600 block py-1">Dooars - Lataguri & Jaldapara Pkj</a></li>
                                        <li><a href="#" className="text-gray-700 hover:text-red-600 block py-1">Digha & Mandarmoni Pkj</a></li>
                                        <li><a href="#" className="text-gray-700 hover:text-red-600 block py-1">Bakkhali Pkj</a></li>
                                        <li><a href="#" className="text-gray-700 hover:text-red-600 block py-1">Kolkata Pkj</a></li>
                                        <li><a href="#" className="text-gray-700 hover:text-red-600 block py-1">Regional Bengal Pkj</a></li>
                                        <li><a href="#" className="text-gray-700 hover:text-red-600 block py-1">Sundarban Pkj</a></li>
                                    </ul>
                                </div>

                                {/* TAILOR MADE */}
                                <div>
                                    <h3 className="font-bold text-red-600 mb-3">TAILOR MADE</h3>
                                    <ul className="space-y-2">
                                       
                                        <li><a href="/boat-stay" className="text-gray-700 hover:text-red-600 block py-1">Boat Cruise & Stay</a></li>
                                        <li><a href="/camping-adventure" className="text-gray-700 hover:text-red-600 block py-1">Camping & Tenting</a></li>
                                        <li><a href="/event-management" className="text-gray-700 hover:text-red-600 block py-1">Event Management</a></li>
                                        <li><a href="/film-shooting" className="text-gray-700 hover:text-red-600 block py-1">Film Shooting</a></li>
                                        <li><a href="/heritage-tour" className="text-gray-700 hover:text-red-600 block py-1">Heritage Tour & Walks</a></li>
                                        <li><a href="#" className="text-gray-700 hover:text-red-600 block py-1">Hills - Off Beat Destinations</a></li>
                                        <li><a href="/jungle-safari" className="text-gray-700 hover:text-red-600 block py-1">Jungle Safari</a></li>
                                        <li><a href="/village-offbeat" className="text-gray-700 hover:text-red-600 block py-1">Plains - Off Beat Destinations</a></li>
                                        <li><a href="/religious-pilgrimage" className="text-gray-700 hover:text-red-600 block py-1">Religious & Pilgrimage Tour</a></li>
                                        <li><a href="/river-rafting" className="text-gray-700 hover:text-red-600 block py-1">River Rafting</a></li>
                                        <li><a href="#" className="text-gray-700 hover:text-red-600 block py-1">Short Breaks from Kolkata</a></li>
                                        <li><a href="/trekking-trails" className="text-gray-700 hover:text-red-600 block py-1">Trekking</a></li>
                                    </ul>
                                </div>

                                {/* OTHERS */}
                                <div>
                                    <h3 className="font-bold text-red-600 mb-3">OTHERS</h3>
                                    <ul className="space-y-2">
                                        <li><a href="#" className="text-gray-700 hover:text-red-600 block py-1">Puri & Odisha Pkj</a></li>
                                        <li><a href="#" className="text-gray-700 hover:text-red-600 block py-1">Sikkim & Gangtok</a></li>
                                        <li><a href="#" className="text-gray-700 hover:text-red-600 block py-1">Silk Route Pkj</a></li>
                                        <li><a href="#" className="text-gray-700 hover:text-red-600 block py-1">Goa Pkj</a></li>
                                        <li><a href="#" className="text-gray-700 hover:text-red-600 block py-1">Himachal Pkj</a></li>
                                        <li><a href="#" className="text-gray-700 hover:text-red-600 block py-1">Jammu & Kashmir Pkj</a></li>
                                        <li><a href="#" className="text-gray-700 hover:text-red-600 block py-1">Andaman & Nicobar Pkj</a></li>
                                        <li><a href="#" className="text-gray-700 hover:text-red-600 block py-1">Assam & Guwahati Pkj</a></li>
                                        <li><a href="#" className="text-gray-700 hover:text-red-600 block py-1">Rajasthan & Jaipur Pkj</a></li>
                                        <li><a href="#" className="text-gray-700 hover:text-red-600 block py-1">Kerala & Munnar Pkj</a></li>
                                    </ul>
                                </div>

                                {/* EXCLUSIVE */}
                                <div>
                                    <h3 className="font-bold text-red-600 mb-3">EXCLUSIVE</h3>
                                    <ul className="space-y-2">
                                        <li><a href="#" className="text-gray-700 hover:text-red-600 block py-1">Medical Tourism</a></li>
                                        <li><a href="#" className="text-gray-700 hover:text-red-600 block py-1">Air Ambulance Service</a></li>
                                        <li><a href="#" className="text-gray-700 hover:text-red-600 block py-1">Wellness Tourism -Spa-Massage-Yoga</a></li>
                                        <li><a href="#" className="text-gray-700 hover:text-red-600 block py-1">Tea Tourism</a></li>
                                        <li><a href="#" className="text-gray-700 hover:text-red-600 block py-1">Hotel-Resort-Guest House</a></li>
                                    </ul>
                                </div>

                                {/* FOREIGN TOURS */}
                                <div>
                                    <h3 className="font-bold text-red-600 mb-3">FOREIGN TOURS</h3>
                                    <ul className="space-y-2">
                                        <li><a href="#" className="text-gray-700 hover:text-red-600 block py-1">Bhutan - Thimpu & Paro</a></li>
                                        <li><a href="#" className="text-gray-700 hover:text-red-600 block py-1">Dubai</a></li>
                                        <li><a href="#" className="text-gray-700 hover:text-red-600 block py-1">Nepal & Kathmandu</a></li>
                                        <li><a href="#" className="text-gray-700 hover:text-red-600 block py-1">Thailand & Bangkok</a></li>
                                        <li><a href="#" className="text-gray-700 hover:text-red-600 block py-1">Lakshadweep</a></li>
                                        <li><a href="#" className="text-gray-700 hover:text-red-600 block py-1">Singapore</a></li>
                                        <li><a href="#" className="text-gray-700 hover:text-red-600 block py-1">Malaysia</a></li>
                                        <li><a href="#" className="text-gray-700 hover:text-red-600 block py-1">Bali</a></li>
                                        <li><a href="#" className="text-gray-700 hover:text-red-600 block py-1">Maldives</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Main Navigation */}
            <div className="bg-white border-b">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex h-20 items-center justify-between">

                        {/* Tour Packages Hamburger - Top Left */}
                        <button
                            onClick={() => setTourSidebarOpen(true)}
                            className="flex items-center gap-2 text-red-600 hover:text-red-700 transition p-2 rounded-lg hover:bg-red-50"
                        >
                            <Menu size={24} />
                        </button>

                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-3">
                            <img
                                src="/logo.png"
                                alt="Bengal Tourism Logo"
                                className="h-12 w-auto"
                            />
                            <div>

                            </div>
                        </Link>

                        {/* Desktop Nav */}
                        <nav className="hidden lg:flex items-center gap-8">
                            <Link href="/" className="text-amber-700 font-semibold hover:text-red-600 transition">
                                HOME
                            </Link>
                            <Link href="/about" className="text-gray-700 font-semibold hover:text-red-600 transition">
                                About Us
                            </Link>
                            <Link href="/earn" className="text-gray-700 font-semibold hover:text-red-600 transition">
                                Earn With Us
                            </Link>
                            <Link href="/career" className="text-gray-700 font-semibold hover:text-red-600 transition">
                                Career
                            </Link>
                            <Link href="/package-cost" className="text-gray-700 font-semibold hover:text-red-600 transition">
                                Package Cost
                            </Link>
                            <Link href="/brands" className="text-gray-700 font-semibold hover:text-red-600 transition">
                                Brands
                            </Link>
                            <Link
                                href="/book-tour"
                                className="bg-red-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-700 transition"
                            >
                                BOOK NOW
                            </Link>
                            <Link href="/contact" className="text-gray-700 font-semibold hover:text-red-600 transition">
                                CONTACT PAGE
                            </Link>
                        </nav>

                        {/* Mobile Button */}
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="lg:hidden text-gray-700"
                        >
                            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="lg:hidden bg-white border-t">
                    <div className="max-w-7xl mx-auto px-4 py-4 space-y-3">
                        <Link
                            href="/"
                            className="block py-2 text-amber-700 font-semibold"
                            onClick={() => setMobileOpen(false)}
                        >
                            HOME
                        </Link>
                        <Link
                            href="/about"
                            className="block py-2 text-gray-700 font-semibold"
                            onClick={() => setMobileOpen(false)}
                        >
                            About Us
                        </Link>
                        <Link
                            href="/earn"
                            className="block py-2 text-gray-700 font-semibold"
                            onClick={() => setMobileOpen(false)}
                        >
                            Earn With Us
                        </Link>
                        <Link
                            href="/career"
                            className="block py-2 text-gray-700 font-semibold"
                            onClick={() => setMobileOpen(false)}
                        >
                            Career
                        </Link>
                        <Link
                            href="/package-cost"
                            className="block py-2 text-gray-700 font-semibold"
                            onClick={() => setMobileOpen(false)}
                        >
                            Package Cost
                        </Link>
                        <Link
                            href="/brands"
                            className="block py-2 text-gray-700 font-semibold"
                            onClick={() => setMobileOpen(false)}
                        >
                            Brands
                        </Link>
                        <Link
                            href="/book-tour"
                            className="block py-2 bg-red-600 text-white px-6 py-2 rounded-full font-semibold text-center"
                            onClick={() => setMobileOpen(false)}
                        >
                            BOOK NOW
                        </Link>
                        <Link
                            href="/contact"
                            className="block py-2 text-gray-700 font-semibold"
                            onClick={() => setMobileOpen(false)}
                        >
                            CONTACT PAGE
                        </Link>
                    </div>
                </div>
            )}
        </header>
    )
}
