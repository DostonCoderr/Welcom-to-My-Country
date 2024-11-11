"use client";

import {
  FaFlag,
  FaMapMarkedAlt,
  FaGlobe,
  FaCalendar,
  FaUserTie,
  FaHandshake,
} from "react-icons/fa";
import Image from "next/image";
import "leaflet/dist/leaflet.css"; // Don't forget to include Leaflet CSS

export default function AboutSection() {
  return (
    <section className="bg-gradient-to-r from-green-100 to-white py-16 px-4 sm:px-8">
      {/* Hero Section */}
      <div
        className="relative h-[350px] sm:h-[450px] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/Logo.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex justify-center items-center text-center text-white">
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight drop-shadow-lg">
            Welcome to the Republic of Uzbekistan
          </h1>
        </div>
      </div>

      {/* About Heading */}
      <div className="text-center mb-8 sm:mb-12 mt-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-green-800 mb-4">
          About Uzbekistan
        </h2>
        <p className="max-w-3xl mx-auto text-gray-700 text-base sm:text-lg">
          Uzbekistan, officially the Republic of Uzbekistan, is a country in
          Central Asia. It has a rich cultural history, with ancient cities like
          Samarkand and Bukhara playing key roles in the Silk Road. While a
          secular state, it embraces a modern approach to government and
          governance with significant reforms under President Shavkat
          Mirziyoyev.
        </p>
      </div>

      {/* Key Information Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mb-16">
        {/* Flag & Anthem Card */}
        <div className="flex flex-col items-center text-center bg-white p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl">
          <FaFlag className="text-green-700 text-5xl sm:text-6xl mb-4" />
          <h3 className="text-lg sm:text-xl font-semibold text-green-800 mb-2">
            Flag & Anthem
          </h3>
          <p className="text-gray-600 mb-4 text-sm sm:text-base">
            The Flag of Uzbekistan symbolizes the country&apos;s unity and pride. The
            national anthem, State Anthem of the Republic of Uzbekistan, is a
            symbol of national independence.
          </p>
          <Image
            src="/images/Flag.jpg"
            alt="Flag of Uzbekistan"
            width={200}
            height={150}
            className="rounded-lg mb-4"
          />
        </div>

        {/* Capital & Population Card */}
        <div className="flex flex-col items-center text-center bg-white p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl">
          <FaMapMarkedAlt className="text-green-700 text-5xl sm:text-6xl mb-4" />
          <h3 className="text-lg sm:text-xl font-semibold text-green-800 mb-2">
            Capital & Population
          </h3>
          <p className="text-gray-600 mb-4 text-sm sm:text-base">
            The capital city of Uzbekistan is Tashkent, the largest city, with a
            population of over 37 million people as of 2024.
          </p>
          <Image
            src="/images/Tashkent.jpg"
            alt="Tashkent City Skyline"
            width={200}
            height={150}
            className="rounded-lg mb-4"
          />
        </div>

        {/* Government & Leadership Card */}
        <div className="flex flex-col items-center text-center bg-white p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl">
          <FaGlobe className="text-green-700 text-5xl sm:text-6xl mb-4" />
          <h3 className="text-lg sm:text-xl font-semibold text-green-800 mb-2">
            Government & Leadership
          </h3>
          <p className="text-gray-600 mb-4 text-sm sm:text-base">
            Uzbekistan is a unitary semi-presidential republic. President
            Shavkat Mirziyoyev has spearheaded significant reforms in the
            government, emphasizing modern governance and regional diplomacy.
          </p>
          <Image
            src="/images/President.jpg"
            alt="President Shavkat Mirziyoyev"
            width={200}
            height={150}
            className="rounded-lg mb-4"
          />
        </div>
      </div>

      {/* Demographics & Diversity Section */}
      <div className="bg-white p-8 sm:p-12 shadow-lg rounded-lg mb-16">
        <h3 className="text-2xl sm:text-3xl font-semibold text-green-800 mb-6 text-center">
          Population Demographics
        </h3>
        <p className="text-base sm:text-lg text-gray-700 mb-4 text-center">
          Uzbekistan is a diverse country with a mix of ethnic groups, the
          majority being Uzbeks, followed by smaller communities of Tajiks,
          Kazakhs, and others. The diversity of Uzbekistan&apos;s population is an
          important part of its cultural richness.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 mb-4">
          <div className="text-center">
            <div className="text-xl sm:text-2xl font-bold text-green-800">
              Uzbeks
            </div>
            <div className="text-lg sm:text-xl text-gray-600">84.6%</div>
          </div>
          <div className="text-center">
            <div className="text-xl sm:text-2xl font-bold text-green-800">
              Tajiks
            </div>
            <div className="text-lg sm:text-xl text-gray-600">4.8%</div>
          </div>
          <div className="text-center">
            <div className="text-xl sm:text-2xl font-bold text-green-800">
              Kazakhs
            </div>
            <div className="text-lg sm:text-xl text-gray-600">2.3%</div>
          </div>
          <div className="text-center">
            <div className="text-xl sm:text-2xl font-bold text-green-800">
              Russians
            </div>
            <div className="text-lg sm:text-xl text-gray-600">2.1%</div>
          </div>
        </div>
      </div>

      {/* Key Milestones Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mb-16">
        <div className="flex flex-col items-center text-center bg-white p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl">
          <FaCalendar className="text-green-700 text-5xl sm:text-6xl mb-4" />
          <h3 className="text-lg sm:text-xl font-semibold text-green-800 mb-2">
            Historic Milestones
          </h3>
          <p className="text-gray-600 mb-4 text-sm sm:text-base">
            Uzbekistan declared independence from the Soviet Union on 1
            September 1991, marking a new era for the country. This day is
            celebrated annually as Independence Day.
          </p>
          <Image
            src="/images/inda.jpg"
            alt="Independence Day"
            width={200}
            height={150}
            className="rounded-lg mb-4"
          />
        </div>

        <div className="flex flex-col items-center text-center bg-white p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl">
          <FaUserTie className="text-green-700 text-5xl sm:text-6xl mb-4" />
          <h3 className="text-lg sm:text-xl font-semibold text-green-800 mb-2">
            Leadership of Shavkat Mirziyoyev
          </h3>
          <p className="text-gray-600 mb-4 text-sm sm:text-base">
            Shavkat Mirziyoyev, the second president of Uzbekistan, has been a
            driving force behind the country&apos;s economic reforms and diplomatic
            initiatives, improving relations with neighboring nations.
          </p>
        </div>

        <div className="flex flex-col items-center text-center bg-white p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl">
          <FaHandshake className="text-green-700 text-5xl sm:text-6xl mb-4" />
          <h3 className="text-lg sm:text-xl font-semibold text-green-800 mb-2">
            Diplomatic Relations
          </h3>
          <p className="text-gray-600 mb-4 text-sm sm:text-base">
            Uzbekistan plays a vital role in Central Asia, fostering diplomatic
            ties with many countries. The government has prioritized economic
            development and regional stability.
          </p>
        </div>
      </div>


    </section>
  );
}
