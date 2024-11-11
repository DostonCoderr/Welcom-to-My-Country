import { FaGlobeAsia, FaMonument, FaMapMarkedAlt } from "react-icons/fa";

export default function AboutSection() {
  return (
    <section className="bg-gradient-to-r from-blue-100 to-white py-16 px-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-900 mb-4">About Uzbekistan</h2>
        <p className="max-w-2xl mx-auto text-gray-700 text-lg md:text-xl">
          Uzbekistan, located in Central Asia, is known for its rich history and cultural heritage. Famous for its ancient cities, Silk Road monuments, and breathtaking landscapes, Uzbekistan offers visitors a unique blend of tradition and modernity.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {/* Cultural Heritage Card */}
        <div className="flex flex-col items-center text-center bg-white p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl">
          <FaGlobeAsia className="text-blue-700 text-6xl mb-4 transition-transform transform hover:scale-125 sm:text-5xl md:text-6xl" />
          <h3 className="text-xl font-semibold text-blue-900 mb-2 text-lg sm:text-xl md:text-2xl">Cultural Heritage</h3>
          <p className="text-gray-600 mb-4 text-sm sm:text-base md:text-lg">
            Explore the diverse cultural traditions of Uzbekistan, from vibrant textiles to traditional music and dance.
          </p>
          <a
            href="#"
            className="inline-block px-6 py-2 bg-blue-600 text-white text-lg font-semibold rounded-lg transition duration-300 hover:bg-blue-700"
          >
            Learn More
          </a>
        </div>

        {/* Historical Landmarks Card */}
        <div className="flex flex-col items-center text-center bg-white p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl">
          <FaMonument className="text-blue-700 text-6xl mb-4 transition-transform transform hover:scale-125 sm:text-5xl md:text-6xl" />
          <h3 className="text-xl font-semibold text-blue-900 mb-2 text-lg sm:text-xl md:text-2xl">Historical Landmarks</h3>
          <p className="text-gray-600 mb-4 text-sm sm:text-base md:text-lg">
            Visit ancient Silk Road cities like Samarkand and Bukhara, home to stunning architecture and historic monuments.
          </p>
          <a
            href="#"
            className="inline-block px-6 py-2 bg-blue-600 text-white text-lg font-semibold rounded-lg transition duration-300 hover:bg-blue-700"
          >
            Learn More
          </a>
        </div>

        {/* Tourist Attractions Card */}
        <div className="flex flex-col items-center text-center bg-white p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl">
          <FaMapMarkedAlt className="text-blue-700 text-6xl mb-4 transition-transform transform hover:scale-125 sm:text-5xl md:text-6xl" />
          <h3 className="text-xl font-semibold text-blue-900 mb-2 text-lg sm:text-xl md:text-2xl">Tourist Attractions</h3>
          <p className="text-gray-600 mb-4 text-sm sm:text-base md:text-lg">
            Discover beautiful mosques, madrassas, and mausoleums that showcase the art and history of Uzbekistan.
          </p>
          <a
            href="#"
            className="inline-block px-6 py-2 bg-blue-600 text-white text-lg font-semibold rounded-lg transition duration-300 hover:bg-blue-700"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
