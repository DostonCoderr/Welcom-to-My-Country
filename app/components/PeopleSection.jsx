// components/PeopleSection.jsx
export default function PeopleSection() {
    return (
      <section className="py-20 bg-gradient-to-b from-blue-50 to-blue-100">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">Notable People of Uzbekistan</h2>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          
          {/* Person 1 */}
          <div className="group relative bg-white shadow-xl rounded-lg overflow-hidden transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-2xl">
            <div className="relative w-40 h-40 mx-auto mt-6 rounded-full overflow-hidden border-4 border-blue-600">
              <img
                src="/images/People/AlisherNavoi.jpg"
                alt="Alisher Navoi"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-full"></div>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold text-blue-800 mb-1">Alisher Navoi</h3>
              <p className="text-gray-600 font-medium">Poet</p>
              <p className="text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-3">
                Leading reforms to modernize Uzbekistan and enhance its global presence.
              </p>
            </div>
          </div>
  
          {/* Person 2 */}
          <div className="group relative bg-white shadow-xl rounded-lg overflow-hidden transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-2xl">
            <div className="relative w-40 h-40 mx-auto mt-6 rounded-full overflow-hidden border-4 border-blue-600">
              <img
                src="/images/People/Zahiridin Bobur.jpg"
                alt="Zahiriddin muhammad bobur"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-full"></div>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold text-blue-800 mb-1">Zahiriddin muhammad bobur</h3>
              <p className="text-gray-600 font-medium">National Poet</p>
              <p className="text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-3">
                Revered as a national poet, known for his contributions to Persian literature.
              </p>
            </div>
          </div>
  
          {/* Person 3 */}
          <div className="group relative bg-white shadow-xl rounded-lg overflow-hidden transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-2xl">
            <div className="relative w-40 h-40 mx-auto mt-6 rounded-full overflow-hidden border-4 border-blue-600">
              <img
               src="/images/People/AmirTemur.jpg"
                alt="Amir Timur"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-full"></div>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold text-blue-800 mb-1">Amir Timur</h3>
              <p className="text-gray-600 font-medium">Historical Figure</p>
              <p className="text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-3">
                A legendary conqueror, Amir Timur shaped Central Asia’s history.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  