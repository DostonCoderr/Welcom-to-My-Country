"use client";

import React, { useState } from "react";
import { Button, Input, Listbox, ListboxItem } from "@nextui-org/react";
import { FaCalendarAlt, FaSearch } from "react-icons/fa";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Import useRouter from next/navigation

const Search = () => {
  const [searchLocation, setSearchLocation] = useState("");
  const [dates, setDates] = useState(() => {
    // Get today's date in YYYY-MM-DD format
    const today = new Date();
    return today.toISOString().split("T")[0];
  });
  const [cities, setCities] = useState([]);

  const router = useRouter(); // Use the router hook

  const handleSearch = () => {
    if (searchLocation && dates) {
      router.push(`/trips?city=${searchLocation}&dates=${dates}`); // Now router is available
    }
  };

  const searchCities = async (searchQuery) => {
    const response = await fetch(
      `https://secure.geonames.org/searchJSON?q=${searchQuery}&maxRows=5&country=UZ&username=kishan&style=SHORT`
    );
    const parsed = await response.json();
    setCities(parsed?.geonames.map((city) => city.name) ?? []);
  };

  const activities = [
    { name: "Tashkent", icon: "/images/Tashkent.jpg" },
    { name: "Samarkand", icon: "/images/Samarkand.jpg" },
    { name: "City Tours", icon: "/images/Bukhara.jpg" },
    { name: "Motor Sports", icon: "/images/Khiva.jpg" },
    { name: "Restaurant Tour", icon: "/images/Tashkent.jpg" },
    { name: "Shops Tour", icon: "/images/Tashkent.jpg" },
    { name: "Landshaft Tour", icon: "/images/Tashkent.jpg" },
    { name: "Parks Tour", icon: "/images/Tashkent.jpg" },
  ];

  return (
    <>
      <div className="h-[80vh] flex items-center justify-center relative overflow-hidden">
        <div className="absolute left-0 top-0 h-[100vh] w-[100vw] max-w-[100vw]">
          {/* Background Image with dynamic overlay */}
          <Image
            src="/images/Tashkent.jpg"
            alt="Search"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="opacity-60 transition-all duration-700"
          />
        </div>

        <div className="absolute inset-0 flex flex-col justify-center items-center gap-8 bg-gradient-to-b from-black/80 to-transparent p-8">
          <div className="text-center text-white">
            <h3 className="text-3xl font-semibold text-shadow-lg">
              Best Tour made for you
            </h3>
            <h2 className="text-4xl md:text-6xl font-extrabold leading-tight text-shadow-xl">
              Explore the exotic world.
            </h2>
          </div>

          {/* Form */}
          <div className="w-full max-w-[800px] flex flex-col gap-6 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Search Location Input */}
              <div className="relative">
                <Input
                  color="primary"
                  variant="bordered"
                  placeholder="Search Location"
                  startContent={<FaSearch />}
                  aria-label="Search Location"
                  className="text-white placeholder:text-white px-6 py-4 rounded-xl shadow-lg
                            border-2 border-transparent bg-transparent focus:ring-2 focus:ring-blue-500
                            hover:border-blue-500 focus:outline-none focus:border-blue-500 transition-all duration-300 
                            hover:scale-105"
                  contentLeftStyling={false}
                  value={searchLocation}
                  onChange={(e) => {
                    setSearchLocation(e.target.value);
                    searchCities(e.target.value);
                  }}
                />
                {cities.length > 0 && (
                  <div className="absolute left-0 top-full mt-2 w-full max-w-[315px] rounded-xl border-2 border-blue-500 bg-white shadow-lg z-10">
                    <Listbox
                      aria-label="City Selection"
                      onAction={(key) => {
                        setSearchLocation(key);
                        setCities([]);
                      }}
                      className="rounded-xl"
                    >
                      {cities.map((city, index) => (
                        <ListboxItem
                          key={`${city}-${index}`}
                          className="text-black px-4 py-2 hover:bg-blue-100 cursor-pointer"
                        >
                          {city}
                        </ListboxItem>
                      ))}
                    </Listbox>
                  </div>
                )}
              </div>

              {/* Date Input */}
              <Input
                type="date"
                variant="bordered"
                color="primary"
                placeholder="Select Date"
                startContent={<FaCalendarAlt />}
                aria-label="Select Date"
                className="text-white placeholder:text-white px-6 py-4 rounded-xl shadow-lg
                          border-2 border-transparent bg-transparent focus:ring-2 focus:ring-blue-500
                          hover:border-blue-500 focus:outline-none focus:border-blue-500 transition-all duration-300 
                          hover:scale-105"
                contentLeftStyling={false}
                value={dates}
                onChange={(e) => setDates(e.target.value)}
              />

              {/* Find Tours Button */}
              <Button
                auto
                color="gradient"
                className="px-10 py-4 rounded-xl shadow-xl hover:scale-105 transition-all duration-500 text-white"
                onClick={handleSearch}
              >
                Find Tours
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Tour Categories Section */}
      <div className="container mx-auto my-12 px-4">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          Tour Categories
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-r from-blue-400 via-green-400 to-yellow-500 p-6 rounded-3xl shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              {/* Image and Overlay */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <Image
                  src={activity.icon}
                  alt={activity.name}
                  layout="fill"
                  objectFit="cover"
                  className="transform scale-110 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-black/60 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white text-lg font-semibold shadow-lg">
                    Explore
                  </p>
                </div>
              </div>

              {/* Activity Text */}
              <h3 className="text-lg sm:text-xl font-bold text-white mt-4 text-center drop-shadow-md">
                {activity.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Search;
