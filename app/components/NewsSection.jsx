export default function NewsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-blue-100">
      <h2 className="text-4xl font-bold text-center text-blue-900 mb-10">Latest News for Tourists</h2>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        
        {/* News Item 1 */}
        <div className="bg-white shadow-xl rounded-lg overflow-hidden transform hover:scale-105 transition duration-500 ease-in-out hover:shadow-2xl">
          <img
            src="/images/News/News1.jpg"
            alt="Uzbekistan Hosts International Summit"
            className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
          />
          <div className="p-6">
            <div className="text-xs font-semibold text-gray-500 uppercase mb-2">Tashkent, Uzbekistan • Nov 2024</div>
            <h3 className="text-2xl font-semibold text-blue-800 mb-3">Uzbekistan Hosts International Summit</h3>
            <p className="text-gray-700 mb-4">
              Uzbekistan has become the focal point of global diplomacy, hosting an international summit focused on economic development and trade partnerships.
            </p>
            <a
              href="#"
              className="inline-block mt-4 px-6 py-2 bg-red-600 text-white rounded-full text-lg font-semibold transition duration-300 hover:bg-red-700"
            >
              Read More
            </a>
          </div>
        </div>

        {/* News Item 2 */}
        <div className="bg-white shadow-xl rounded-lg overflow-hidden transform hover:scale-105 transition duration-500 ease-in-out hover:shadow-2xl">
          <img
             src="/images/News/News2.jpg"
            alt="New Tourism Policy Boosts Uzbekistan Economy"
            className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
          />
          <div className="p-6">
            <div className="text-xs font-semibold text-gray-500 uppercase mb-2">Samarkand, Uzbekistan • Nov 2024</div>
            <h3 className="text-2xl font-semibold text-blue-800 mb-3">New Tourism Policy Boosts Uzbekistan Economy</h3>
            <p className="text-gray-700 mb-4">
              The new tourism policy has opened up new opportunities with an increase in tourists coming from around the world, boosting the country&apos;s economy.
            </p>
            <a
              href="#"
              className="inline-block mt-4 px-6 py-2 bg-red-600 text-white rounded-full text-lg font-semibold transition duration-300 hover:bg-red-700"
            >
              Read More
            </a>
          </div>
        </div>

        {/* News Item 3 */}
        <div className="bg-white shadow-xl rounded-lg overflow-hidden transform hover:scale-105 transition duration-500 ease-in-out hover:shadow-2xl">
          <img
              src="/images/News/News3.jpg"
            alt="Uzbekistan Launches Green Energy Initiative"
            className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
          />
          <div className="p-6">
            <div className="text-xs font-semibold text-gray-500 uppercase mb-2">Bukhara, Uzbekistan • Nov 2024</div>
            <h3 className="text-2xl font-semibold text-blue-800 mb-3">Uzbekistan Launches Green Energy Initiative</h3>
            <p className="text-gray-700 mb-4">
              A new initiative has been launched in Uzbekistan to promote green energy, aiming to reduce carbon emissions and promote sustainability.
            </p>
            <a
              href="#"
              className="inline-block mt-4 px-6 py-2 bg-red-600 text-white rounded-full text-lg font-semibold transition duration-300 hover:bg-red-700"
            >
              Read More
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mt-12">
        <a
          href="#"
          className="inline-block px-8 py-3 bg-blue-900 text-white text-lg font-semibold rounded-full transition duration-300 hover:bg-blue-700 shadow-lg"
        >
          See All News
        </a>
      </div>
    </section>
  );
}
