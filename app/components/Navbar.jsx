"use client";

import Link from 'next/link';
import { useState } from 'react';
import { FaChevronDown, FaTaxi, FaUtensils, FaHotel } from 'react-icons/fa';
import BottomNav from './BottomNav';

export default function Navbar() {
  const [isServiceOpen, setServiceOpen] = useState(false);
  const [isTourOpen, setTourOpen] = useState(false);
  const [isFlightOpen, setFlightOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-3xl font-extrabold">
          <Link href="/" className="hover:text-yellow-300 transition duration-300">
            Uzbekistan Explorer
          </Link>
        </h1>

        <div className="hidden md:flex space-x-6 items-center text-lg font-medium">
          <Link href="/about" className="hover:text-yellow-300 transition duration-300">About</Link>
          <Dropdown title="Services" isOpen={isServiceOpen} setOpen={setServiceOpen} items={[
            { href: '/services/taxi', label: 'Taxi', icon: <FaTaxi className="inline mr-2" /> },
            { href: '/services/restaurants', label: 'Restaurants', icon: <FaUtensils className="inline mr-2" /> },
            { href: '/services/hotels', label: 'Hotels', icon: <FaHotel className="inline mr-2" /> },
          ]} />
          <Dropdown title="Tour" isOpen={isTourOpen} setOpen={setTourOpen} items={[
            { href: '/tour/uzbekistan', label: 'Tour All Uzbekistan' },
            { href: '/tour/tashkent', label: 'Tour in Tashkent' },
          ]} />
          <Dropdown title="Flight" isOpen={isFlightOpen} setOpen={setFlightOpen} items={[
            { href: '/ticketBillet', label: 'Ticket Booking' },
          ]} />
          <Link href="/weather" className="hover:text-yellow-300 transition duration-300">Weather</Link>
          <Link href="/provinces" className="hover:text-yellow-300 transition duration-300">Provinces</Link>
          <Link href="/register" className="hover:text-yellow-300 transition duration-300">Register</Link>
        </div>
      </div>

      <BottomNav />
    </nav>
  );
}

function Dropdown({ title, isOpen, setOpen, items }) {
  return (
    <div className="relative">
      <button onClick={() => setOpen(!isOpen)} className="flex items-center gap-1 hover:text-yellow-300">
        {title} <FaChevronDown className="text-sm" />
      </button>
      {isOpen && (
        <div className="absolute mt-2 w-48 bg-white text-blue-900 rounded-lg shadow-lg py-2 z-20">
          {items.map(item => (
            <Link key={item.href} href={item.href} className="block px-4 py-2 hover:bg-blue-50 flex items-center">
              {item.icon} {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
