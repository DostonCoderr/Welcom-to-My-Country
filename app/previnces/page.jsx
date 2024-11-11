"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

const provinces = [
  { name: 'Tashkent', image: '/images/Tashkent.jpg', description: 'The capital city, a hub of culture and history.' },
  { name: 'Samarkand', image: '/images/Samarkand.jpg', description: 'A city known for its historical landmarks and architecture.' },
  { name: 'Bukhara', image: '/images/Bukhara.jpg', description: 'Famous for its ancient mosques and vibrant bazaars.' },
  { name: 'Khiva', image: '/images/Khiva.jpg', description: 'A scenic province with rich traditions and fertile land.' },
  { name: 'Fergana', image: '/images/provinces/khiva.jpg', description: 'A UNESCO World Heritage city with ancient structures.' },
  { name: 'Andijan', image: '/images/provinces/andijan.jpg', description: 'A city known for its beautiful landscapes and history.' },
  { name: 'Namangan', image: '/images/provinces/namangan.jpg', description: 'A province filled with history, nature, and architecture.' },
  { name: 'Nukus', image: '/images/provinces/nukus.jpg', description: 'A city with unique art and rich culture.' },
  { name: 'Syrdarya', image: '/images/provinces/syrdarya.jpg', description: 'Known for its river, agriculture, and picturesque views.' },
  { name: 'Jizzakh', image: '/images/provinces/jizzakh.jpg', description: 'A province rich in nature, culture, and history.' },
  { name: 'Kashkadarya', image: '/images/provinces/kashkadarya.jpg', description: 'A region known for its natural beauty and ancient heritage.' },
  { name: 'Surkhandarya', image: '/images/provinces/surkhandarya.jpg', description: 'A historical and cultural province located in the south.' },
];

const Provinces = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-indigo-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center text-gray-800 mb-12">Explore the Provinces</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {provinces.map((province, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              <img src={province.image} alt={province.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">{province.name}</h2>
                <p className="text-gray-600 mb-6">{province.description}</p>
                <button
                  className="px-4 py-2 bg-blue-600 text-white rounded-full w-full hover:bg-blue-700 transition-all duration-300"
                  onClick={() => router.push(`/provinces/${province.name.toLowerCase()}`)}
                >
                  Explore {province.name}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Provinces;
