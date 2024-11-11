import Image from 'next/image';

export default function HotelsSection() {
  return (
    <section className="py-20 bg-gray-100">
      <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
        Top Hotels in Uzbekistan
      </h2>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Hotel 1 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-500 ease-in-out">
          <Image
            src="/images/Hotels/Hotel1.jpg"
            alt="Hotel Uzbekistan"
            width={500} // Specify the width of the image
  height={300} // Specify the height of the image
  priority // Optional: Add this prop to prioritize image loading
            className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-blue-800 mb-3">Hotel Uzbekistan</h3>
            <p className="text-gray-600 mb-4">
              A luxurious hotel located in the heart of Tashkent, offering exceptional service and modern amenities.
            </p>
            <a
              href="#"
              className="inline-block mt-2 px-6 py-2 bg-red-600 text-white rounded-lg text-lg font-semibold transition duration-300 hover:bg-red-700"
            >
              Book Now
            </a>
          </div>
        </div>

        {/* Hotel 2 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-500 ease-in-out">
        <Image
            src="/images/Hotels/Hotel2.jpg"
            alt="Hotel Uzbekistan"
            width={500} // Specify the width of the image
  height={300} // Specify the height of the image
  priority // Optional: Add this prop to prioritize image loading
            className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-blue-800 mb-3">Samarkand Hotel</h3>
            <p className="text-gray-600 mb-4">
              Located near the famous Registan Square, Samarkand Hotel combines history and luxury in a beautiful setting.
            </p>
            <a
              href="#"
              className="inline-block mt-2 px-6 py-2 bg-red-600 text-white rounded-lg text-lg font-semibold transition duration-300 hover:bg-red-700"
            >
              Book Now
            </a>
          </div>
        </div>

        {/* Hotel 3 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-500 ease-in-out">
        <Image
            src="/images/Hotels/Hotel3.jpg"
            alt="Hotel Uzbekistan"
            width={500} // Specify the width of the image
  height={300} // Specify the height of the image
  priority // Optional: Add this prop to prioritize image loading
            className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-blue-800 mb-3">Bukhara Inn</h3>
            <p className="text-gray-600 mb-4">
              A charming boutique hotel located in Bukhara, offering a blend of traditional Uzbek architecture and modern comforts.
            </p>
            <a
              href="#"
              className="inline-block mt-2 px-6 py-2 bg-red-600 text-white rounded-lg text-lg font-semibold transition duration-300 hover:bg-red-700"
            >
              Book Now
            </a>
          </div>
        </div>

        {/* Hotel 4 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-500 ease-in-out">
        <Image
            src="/images/Hotels/Hotel4.jpg"
            alt="Hotel Uzbekistan"
            width={500} // Specify the width of the image
  height={300} // Specify the height of the image
  priority // Optional: Add this prop to prioritize image loading
            className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-blue-800 mb-3">Bukhara Inn</h3>
            <p className="text-gray-600 mb-4">
              A charming boutique hotel located in Bukhara, offering a blend of traditional Uzbek architecture and modern comforts.
            </p>
            <a
              href="#"
              className="inline-block mt-2 px-6 py-2 bg-red-600 text-white rounded-lg text-lg font-semibold transition duration-300 hover:bg-red-700"
            >
              Book Now
            </a>
          </div>
        </div>

        {/* Hotel 5 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-500 ease-in-out">
        <Image
            src="/images/Hotels/Hotel5.jpg"
            alt="Hotel Uzbekistan"
            width={500} // Specify the width of the image
  height={300} // Specify the height of the image
  priority // Optional: Add this prop to prioritize image loading
            className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-blue-800 mb-3">Bukhara Inn</h3>
            <p className="text-gray-600 mb-4">
              A charming boutique hotel located in Bukhara, offering a blend of traditional Uzbek architecture and modern comforts.
            </p>
            <a
              href="#"
              className="inline-block mt-2 px-6 py-2 bg-red-600 text-white rounded-lg text-lg font-semibold transition duration-300 hover:bg-red-700"
            >
              Book Now
            </a>
          </div>
        </div>

        {/* Hotel 6 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-500 ease-in-out">
        <Image
            src="/images/Hotels/Hotel6.jpg"
            alt="Hotel Uzbekistan"
            width={500} // Specify the width of the image
  height={300} // Specify the height of the image
  priority // Optional: Add this prop to prioritize image loading
            className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-blue-800 mb-3">Bukhara Inn</h3>
            <p className="text-gray-600 mb-4">
              A charming boutique hotel located in Bukhara, offering a blend of traditional Uzbek architecture and modern comforts.
            </p>
            <a
              href="https://www.booking.com/hotel/uz/hotel-uzbekistan-tashkent.html?aid=303948&label=tashkent-PW4SL%2AHVsWheGcrCFNQkfwS544246989008%3Apl%3Ata%3Ap145%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-140016636%3Alp9198787%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9Yf5EcukO1MOGLSSAuId8ToA&sid=532649913b5e4fdfb946087da2824769&dest_id=-2579372;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=1;hpos=1;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1731051216;srpvid=a8c83520c1ce00b1;type=total;ucfs=1&"
              className="inline-block mt-2 px-6 py-2 bg-red-600 text-white rounded-lg text-lg font-semibold transition duration-300 hover:bg-red-700"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
