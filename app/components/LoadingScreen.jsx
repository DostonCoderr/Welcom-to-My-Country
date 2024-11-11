// components/LoadingScreen.js
import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-r from-teal-500 to-cyan-600 flex flex-col justify-center items-center text-white text-center z-50 space-y-8 px-6">
      {/* Title Section with Animation */}
      <div className="animate-fadeIn">
        <h1 className="text-5xl font-extrabold tracking-wider shadow-md drop-shadow-lg">
          Welcome to Uzbekistan
        </h1>
        <p className="text-lg mt-2 font-light opacity-90 italic">
          Discover the hidden gems of Central Asia
        </p>
      </div>

      {/* Animated Flag with Frame and Rotation */}
      <div className="relative">
        <div className="absolute inset-0 w-full h-full border-4 border-white rounded-full transform rotate-45 animate-spin-slow"></div>
        <img
          src="/images/Uzbekistan.gif" // Path to the GIF in the public folder
          alt="Uzbekistan Flag Loading"
          className="w-56 h-56 rounded-full shadow-2xl border-4 border-white transform transition duration-500 hover:scale-105"
        />
      </div>

      {/* Tourist Welcome Message */}
      <p className="text-lg max-w-lg">
        Join us in exploring ancient cities, breathtaking landscapes, and rich
        cultural heritage. We’re glad you’re here!
      </p>

      {/* Enhanced Loading Dots Animation */}
      <div className="flex space-x-3 mt-4">
        <div className="w-5 h-5 bg-white rounded-full animate-bounce delay-100"></div>
        <div className="w-5 h-5 bg-white rounded-full animate-bounce delay-200"></div>
        <div className="w-5 h-5 bg-white rounded-full animate-bounce delay-300"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
