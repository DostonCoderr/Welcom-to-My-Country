"use client";
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function CurrencyConverter() {
  const [usdToUzs, setUsdToUzs] = useState(null);
  const [usd, setUsd] = useState(1);
  const [uzs, setUzs] = useState(null);

  // Fetching exchange rate once when the component mounts
  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await axios.get(`https://api.currencyfreaks.com/latest?apikey=0c12455fd385409eb2ce0268a27afb6c&symbols=UZS`);
        const uzsRate = response.data.rates.UZS;
        setUsdToUzs(parseFloat(uzsRate).toFixed(2));  // Store the exchange rate
      } catch (error) {
        console.error("Error fetching currency data", error);
      }
    };

    fetchExchangeRate();
  }, []);

  // Calculate UZS value when USD or exchange rate changes
  useEffect(() => {
    if (usdToUzs) {
      setUzs((usd * usdToUzs).toFixed(2));
    }
  }, [usd, usdToUzs]);

  // Handle USD input change
  const handleUsdChange = (e) => {
    setUsd(e.target.value);
  };

  // Format numbers with commas and decimals
  const formatNumber = (num) => {
    return new Intl.NumberFormat('en-US', {
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(num);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-4">
          USD to UZS Exchange Rate
        </h2>
        <p className="text-center text-lg text-gray-500 mb-8">
          Stay updated with the latest exchange rates.
        </p>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition duration-500 relative p-6 mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">1 USD = {usdToUzs ? formatNumber(usdToUzs) : '...'} UZS</h3>

          <div className="relative mb-6">
            <input
              type="number"
              value={usd}
              onChange={handleUsdChange}
              className="w-full p-4 border-2 border-gray-300 rounded-xl text-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter USD"
            />
          </div>

          <p className="text-xl font-bold text-gray-800">
            <span className="font-bold">{formatNumber(usd)} USD</span> = <span className="font-bold">{uzs ? formatNumber(uzs) : '...'}</span> UZS
          </p>

          <div className="mt-6 text-gray-500">
            <p className="text-lg italic">Exchange rates fluctuate, check back for the latest rates!</p>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold shadow-md hover:bg-blue-700 transition">
            Refresh Rates
          </button>
        </div>
      </div>
    </section>
  );
}
