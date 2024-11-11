"use client";

import React, { useState } from 'react';
import { FaUtensils, FaStar } from 'react-icons/fa';
import 'swiper/swiper-bundle.min.css';

export default function PlacesSection() {
  const [selectedCity, setSelectedCity] = useState('All');

  const restaurants = [
    {
      name: "Tashkent Restaurant",
      city: "Tashkent",
      icon: <FaUtensils className="text-blue-700 text-3xl mb-3" />,
      image: "/images/Tashkent/Tashkent1.jpg",
      description: "Experience traditional Uzbek cuisine in a stunning, historic setting.",
      rating: 4.5,
      cuisine: "Uzbek",
      price: "$$",
      status: "Open now",
      buttonText: "Book a Table",
    },
    {
        name: "Samarkand Restaurant",
        city: "Samarkand",
        icon: <FaUtensils className="text-blue-700 text-3xl mb-3" />,
        image: "/images/Tashkent/Tashkent2.jpg",
        description: "Experience traditional Uzbek cuisine in a stunning, historic setting.",
        rating: 4.5,
        cuisine: "Uzbek",
        price: "$$",
        status: "Open now",
        buttonText: "Book a Table",
      },
      {
        name: "Samarkand Restaurant",
        city: "Samarkand",
        icon: <FaUtensils className="text-blue-700 text-3xl mb-3" />,
        image: "/images/Tashkent/Tashkent3.jpg",
        description: "Experience traditional Uzbek cuisine in a stunning, historic setting.",
        rating: 4.5,
        cuisine: "Uzbek",
        price: "$$",
        status: "Open now",
        buttonText: "Book a Table",
      },
      {
        name: "Tashkent Restaurant",
        city: "Tashkent",
        icon: <FaUtensils className="text-blue-700 text-3xl mb-3" />,
        image: "/images/Tashkent/Tashkent4.jpg",
        description: "Experience traditional Uzbek cuisine in a stunning, historic setting.",
        rating: 4.5,
        cuisine: "Uzbek",
        price: "$$",
        status: "Open now",
        buttonText: "Book a Table",
      },
      {
        name: "Samarkand Restaurant",
        city: "Samarkand",
        icon: <FaUtensils className="text-blue-700 text-3xl mb-3" />,
        image: "/images/Tashkent/Tashkent5.jpg",
        description: "Experience traditional Uzbek cuisine in a stunning, historic setting.",
        rating: 4.5,
        cuisine: "Uzbek",
        price: "$$",
        status: "Open now",
        buttonText: "Book a Table",
      },
      {
        name: "Tashkent Restaurant",
        city: "Tashkent",
        icon: <FaUtensils className="text-blue-700 text-3xl mb-3" />,
        image: "/images/Tashkent/Tashkent6.jpg",
        description: "Experience traditional Uzbek cuisine in a stunning, historic setting.",
        rating: 4.5,
        cuisine: "Uzbek",
        price: "$$",
        status: "Open now",
        buttonText: "Book a Table",
      },

    // Add other restaurants here...
  ];

  const filteredRestaurants = selectedCity === 'All' ? restaurants : restaurants.filter(restaurant => restaurant.city === selectedCity);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-4">
          Restaurants in Uzbekistan
        </h2>
        <p className="text-center text-lg text-gray-500 mb-8">
          Discover the finest dining experiences across cities.
        </p>

        {/* City Filter */}
        <div className="flex justify-center items-center mb-8 gap-4">
          <select
            onChange={(e) => setSelectedCity(e.target.value)}
            value={selectedCity}
            className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-lg font-semibold shadow-md focus:outline-none focus:border-blue-500"
          >
            <option value="All">All Cities</option>
            <option value="Tashkent">Tashkent</option>
            <option value="Samarkand">Samarkand</option>
            {/* Add other cities here */}
          </select>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold shadow-md hover:bg-blue-700 transition"
          >
            Search
          </button>
        </div>

        {/* Restaurant Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRestaurants.map((restaurant, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition duration-500 relative">
              <img
                src={restaurant.image}
                alt={restaurant.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                {restaurant.icon}
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{restaurant.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{restaurant.description}</p>
                <div className="flex items-center justify-between text-gray-500 text-sm mb-4">
                  <span className="flex items-center gap-1">
                    <FaStar className="text-yellow-500" /> {restaurant.rating}
                  </span>
                  <span>{restaurant.cuisine}</span>
                  <span>{restaurant.price}</span>
                </div>
                <div className="absolute top-4 right-4 bg-green-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
                  {restaurant.status}
                </div>
                <a
                  href="#"
                  className="block mt-4 px-4 py-2 bg-red-600 text-white text-center rounded-lg hover:bg-red-700 transition duration-300"
                >
                  {restaurant.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
