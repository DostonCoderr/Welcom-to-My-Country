"use client";

import React from 'react';
import Link from 'next/link';

const TaxiPage = () => {
  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/taxi-background.jpg')" }}>
      <div className="bg-black bg-opacity-60 min-h-screen py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-center text-white mb-12 drop-shadow-md">Explore the City with Our Taxi Service</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Taxi Info Section */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">Fast, Reliable, Affordable</h2>
              <p className="text-lg text-gray-600 mb-6">
                Whether you&apos;re a tourist exploring the city or a local, our taxi service is always available to take you wherever you need to go.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our drivers are friendly and knowledgeable, ensuring that your journey is smooth and safe. Book your ride today and enjoy the convenience!
              </p>
            </div>

            {/* Features Section */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Us?</h3>
              <ul className="list-disc pl-6 text-lg text-gray-600 space-y-4">
                <li className="flex items-center space-x-3">
                  <span className="text-green-500">🚖</span>
                  <span>24/7 Availability</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-green-500">👨‍👩‍👧‍👦</span>
                  <span>Family-friendly rides</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-green-500">💸</span>
                  <span>Affordable rates with no hidden charges</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-green-500">📱</span>
                  <span>Easy booking via mobile app</span>
                </li>
              </ul>
            </div>

            {/* Image Section */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Book Your Ride Now!</h3>
              <p className="text-lg text-gray-600 mb-6">
                Click below to book a taxi and start your adventure around the city. We promise a pleasant ride and friendly service.
              </p>
              {/* Link to external taxi website */}
              <Link href="https://www.welcomepickups.com/tashkent/airport-taxi/" target="_blank">
                <button className="px-6 py-3 bg-blue-600 text-white rounded-full w-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
                  Book a Taxi Now
                </button>
              </Link>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-6">Explore More Tourist Attractions</h3>
            <p className="text-lg text-white mb-8">Visit the most popular tourist spots in the city. Our taxi service is your gateway to an unforgettable adventure!</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                <img src="/images/tourist-spot1.jpg" alt="Tourist Spot 1" className="w-full h-40 object-cover rounded-lg mb-4" />
                <h4 className="text-lg font-semibold text-gray-800">Landmark 1</h4>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                <img src="/images/tourist-spot2.jpg" alt="Tourist Spot 2" className="w-full h-40 object-cover rounded-lg mb-4" />
                <h4 className="text-lg font-semibold text-gray-800">Landmark 2</h4>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                <img src="/images/tourist-spot3.jpg" alt="Tourist Spot 3" className="w-full h-40 object-cover rounded-lg mb-4" />
                <h4 className="text-lg font-semibold text-gray-800">Landmark 3</h4>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                <img src="/images/tourist-spot4.jpg" alt="Tourist Spot 4" className="w-full h-40 object-cover rounded-lg mb-4" />
                <h4 className="text-lg font-semibold text-gray-800">Landmark 4</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxiPage;
