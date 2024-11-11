"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";  // Swiper core styles
import "swiper/css/navigation";  // Swiper navigation styles
import { Navigation } from "swiper";  // Import Navigation module

export default function PopularitySection() {
  const popularDestinations = [
    {
      name: "Tashkent",
      description: "Tashkent, the capital city, offers a beautiful blend of ancient and modern architecture, with charming markets and parks.",
      tourLink: "#",
      imageUrl: "/images/Tashkent.jpg", // Add an image for Tashkent
      size: "1,455 km²",
      historicalSignificance: "Tashkent has a rich history as a major stop on the ancient Silk Road.",
    },
    {
      name: "Samarkand",
      description: "Samarkand is famous for its mesmerizing architecture and rich cultural heritage.",
      tourLink: "#",
      imageUrl: "/images/Samarkand.jpg", // Add an image for Samarkand
      size: "123.5 km²",
      historicalSignificance: "Samarkand is home to the Registan, one of the most iconic architectural ensembles in Central Asia.",
    },
    {
      name: "Bukhara",
      description: "Bukhara boasts a stunning collection of ancient monuments, including mosques, madrassas, and the historic Ark Fortress.",
      tourLink: "#",
      imageUrl: "/images/Bukhara.jpg", // Add an image for Bukhara
      size: "400 km²",
      historicalSignificance: "Bukhara was once a major center of trade and culture along the Silk Road.",
    },
    {
      name: "Khiva",
      description: "Khiva is a hidden gem known for its well-preserved ancient city walls and beautiful, intricate architecture.",
      tourLink: "#",
      imageUrl: "/images/Khiva.jpg", // Add an image for Khiva
      size: "427 km²",
      historicalSignificance: "Khiva is known for its ancient walled city, Ichan Kala, a UNESCO World Heritage Site.",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">Popular Destinations in Uzbekistan</h2>
        <p className="text-lg sm:text-xl md:text-2xl mb-12">Explore the most beloved locations with a rich history and breathtaking landscapes.</p>

        {/* Swiper Container */}
        <Swiper
          spaceBetween={30} // Space between slides
          slidesPerView={1} // Default to one slide visible
          navigation={true}  // Enable Swiper navigation
          modules={[Navigation]}  // Apply Navigation module to Swiper
          breakpoints={{
            640: {
              slidesPerView: 2, // Show 2 slides on smaller devices
            },
            768: {
              slidesPerView: 3, // Show 3 slides on medium-sized devices
            },
            1024: {
              slidesPerView: 4, // Show 4 slides on large devices
            },
          }}
          className="mySwiper"
        >
          {/* Swiper Slides */}
          {popularDestinations.map((destination, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition duration-500 group">
                {/* Image */}
                <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96">
                  <img
                    src={destination.imageUrl}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-indigo-800 mb-2">{destination.name}</h3>
                  <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-4">{destination.description}</p>
                  
                  <div className="text-gray-400 mb-4">
                    <p><strong>Size:</strong> {destination.size}</p>
                    <p><strong>Historical Significance:</strong> {destination.historicalSignificance}</p>
                  </div>

                  {/* Learn More Button */}
                  <a
                    href={destination.tourLink}
                    className="inline-block mt-4 px-6 py-3 bg-red-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-red-700 transition duration-300"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
