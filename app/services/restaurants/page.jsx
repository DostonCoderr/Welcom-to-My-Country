"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Restaurants = () => {
  // Example restaurant data with image, description, and rating
  const restaurants = [
    { 
      id: 1, 
      name: 'Oq Tepa - Lavash', 
      location: 'Tashkent', 
      image: '/images/Foods/Oqtepa.png', 
      description: 'A cozy restaurant serving delicious food, perfect for a quick lunch or dinner.', 
      rating: 4.5, 
      link: 'https://oqtepalavash.uz/'
    },
    { 
      id: 2, 
      name: 'Restaurant 2', 
      location: 'Samarkand', 
      image: '/images/Foods/Oqtepa.png', 
      description: 'Known for its historical ambiance and tasty dishes, a must-visit spot for tourists.', 
      rating: 4.0,
      link: '/restaurants/restaurant-2'
    },
    { 
      id: 3, 
      name: 'Kfc', 
      location: 'Tashkent', 
      image: '/images/Foods/Kfc.png', 
      description: 'Specializing in traditional local cuisine, perfect for food lovers.', 
      rating: 4.2,
      link: 'https://kfc.com.uz/'
    },
    { 
      id: 4, 
      name: 'Feed Up', 
      location: 'Tashkent', 
      image: '/images/Foods/FeedUp.png', 
      description: 'A modern place with a variety of cuisines, offering something for everyone.', 
      rating: 4.8,
      link: 'https://feedup.uz/'
    },
    { 
      id: 5, 
      name: 'Restaurant 5', 
      location: 'Samarkand', 
      image: 'https://via.placeholder.com/500x300', 
      description: 'A perfect place for family gatherings, with a friendly atmosphere and excellent service.', 
      rating: 4.3,
      link: '/restaurants/restaurant-5'
    },
    { 
      id: 6, 
      name: 'Restaurant 6', 
      location: 'Bukhara', 
      image: 'https://via.placeholder.com/500x300', 
      description: 'Traditional dishes with a modern twist, ideal for a unique dining experience.', 
      rating: 4.7,
      link: '/restaurants/restaurant-6'
    },
  ];

  // State to track the selected location
  const [selectedLocation, setSelectedLocation] = useState(null);

  // Router for navigation
  const router = useRouter();

  // Filter restaurants based on the selected location
  const filteredRestaurants = selectedLocation 
    ? restaurants.filter((restaurant) => restaurant.location === selectedLocation)
    : [];

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-indigo-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-800 mb-8 sm:mb-12">Discover Amazing Restaurants</h1>

        {/* Location filter */}
        {!selectedLocation ? (
          <div className="flex flex-wrap justify-center space-x-6 mb-12">
            <button
              className="px-8 py-3 sm:px-8 sm:py-4 bg-blue-600 text-white rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
              onClick={() => setSelectedLocation('Tashkent')}
            >
              Tashkent
            </button>
            <button
              className="px-8 py-3 sm:px-8 sm:py-4 bg-blue-600 text-white rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
              onClick={() => setSelectedLocation('Samarkand')}
            >
              Samarkand
            </button>
            <button
              className="px-8 py-3 sm:px-8 sm:py-4 bg-blue-600 text-white rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
              onClick={() => setSelectedLocation('Bukhara')}
            >
              Bukhara
            </button>
          </div>
        ) : (
          <button
            className="px-8 py-3 bg-gray-500 text-white rounded-full mb-12 transform hover:scale-105 transition-all duration-300"
            onClick={() => setSelectedLocation(null)}
          >
            Back to Location Filter
          </button>
        )}

        {/* List of filtered restaurants */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredRestaurants.length > 0 ? (
            filteredRestaurants.map((restaurant) => (
              <div
                key={restaurant.id}
                className="bg-white shadow-xl rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <img src={restaurant.image} alt={restaurant.name} className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-t-lg" />
                <div className="p-4 sm:p-6">
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">{restaurant.name}</h2>
                  <p className="text-gray-600 text-sm sm:text-base mb-4">{restaurant.description}</p>
                  <div className="flex items-center text-yellow-400 mb-4">
                    {/* Render stars based on rating */}
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        fill={i < Math.round(restaurant.rating) ? 'currentColor' : 'none'}
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 17.25l-6.312 3.319a1 1 0 01-1.494-1.073l1.205-7.085-5.112-5.049a1 1 0 01.557-1.705l7.091-1.03 3.175-6.544a1 1 0 011.8 0l3.175 6.544 7.091 1.03a1 1 0 01.557 1.705l-5.112 5.049 1.205 7.085a1 1 0 01-1.494 1.073L12 17.25z"
                        />
                      </svg>
                    ))}
                    <span className="ml-2 text-gray-600">{restaurant.rating}</span>
                  </div>
                  <button
                    className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-all duration-300"
                    onClick={() => router.push(restaurant.link)}  // Navigate to the restaurant's page
                  >
                    Explore
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600 col-span-4">No restaurants found in {selectedLocation}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Restaurants;
