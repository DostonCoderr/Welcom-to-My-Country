// pages/provinces/tashkent/page.jsx
"use client";

import React from 'react';

const Tashkent = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Tashkent</h1>
      <div className="flex flex-col items-center">
        <img src="/images/provinces/tashkent.jpg" alt="Tashkent" className="w-96 h-64 object-cover rounded-lg mb-6" />
        <p className="text-gray-600 text-xl">
          The capital city, a hub of culture and history.
        </p>
      </div>
    </div>
  );
};

export default Tashkent;
