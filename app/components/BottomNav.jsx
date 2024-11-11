import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FaHome, FaBuilding, FaCarSide, FaMapMarkedAlt, FaUserAlt, FaHotel, FaTaxi, FaUtensils } from 'react-icons/fa';

const BottomNav = ({ name }) => {
  const router = useRouter();
  const [activeTabs, setActiveTabs] = useState(name);
  const [showServices, setShowServices] = useState(false);

  useEffect(() => {
    switch (activeTabs) {
      case 'home':
        router.push('/');
        break;
      case 'about':
        router.push('/about');
        break;
      case 'tour':
        router.push('/tour');
        break;
      case 'saved':
        router.push('/saved');
        break;
      case 'account':
        router.push('/account');
        break;
      default:
        router.push('/');
        break;
    }
  }, [activeTabs, router]);

  const toggleServices = () => {
    setShowServices(!showServices);
  };

  const navigateToService = (service) => {
    router.push(`/services${service}`);
    setShowServices(false);
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 flex justify-around bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg h-16 z-50 text-white">
      {/* Home Tab */}
      <div
        onClick={() => setActiveTabs('home')}
        className="flex flex-col items-center justify-center w-1/5 h-full cursor-pointer"
      >
        <FaHome
          size={25}
          className={`${activeTabs === 'home' ? 'text-red-500' : 'text-gray-300'} transition-colors duration-300`}
        />
        <span className="text-sm mt-1">Home</span>
      </div>

      {/* About Tab */}
      <div
        onClick={() => setActiveTabs('about')}
        className="flex flex-col items-center justify-center w-1/5 h-full cursor-pointer"
      >
        <FaBuilding
          size={25}
          className={`${activeTabs === 'about' ? 'text-red-500' : 'text-gray-300'} transition-colors duration-300`}
        />
        <span className="text-sm mt-1">About</span>
      </div>

      {/* Services Tab with Animated Dropdown */}
      <div className="relative flex flex-col items-center justify-center w-1/5 h-full cursor-pointer">
        <div
          className={`${
            activeTabs === 'services' ? 'bg-red-500' : 'bg-transparent'
          } p-2 rounded-full transition-all duration-300 transform hover:scale-110`}
          onClick={toggleServices}
        >
          <FaCarSide
            size={25}
            className={`${
              activeTabs === 'services' ? 'text-white' : 'text-gray-300'
            } transition-colors duration-300`}
          />
        </div>
        <span className="text-sm mt-1">Services</span>

        {showServices && (
          <div className="absolute bottom-16 w-52 bg-gradient-to-r from-indigo-800 to-purple-800 bg-opacity-95 border border-gray-300 rounded-lg shadow-xl p-4 flex items-center justify-around space-x-6 animate-expand">
            <div
              onClick={() => navigateToService('/hotel')}
              className="flex flex-col items-center space-y-1 hover:text-indigo-300 cursor-pointer transition-all duration-200 ease-in-out transform hover:scale-110"
            >
              <FaHotel size={24} />
              <span className="text-sm">Hotels</span>
            </div>
            <div
              onClick={() => navigateToService('/taxi')}
              className="flex flex-col items-center space-y-1 hover:text-indigo-300 cursor-pointer transition-all duration-200 ease-in-out transform hover:scale-110"
            >
              <FaTaxi size={24} />
              <span className="text-sm">Taxi</span>
            </div>
            <div
              onClick={() => navigateToService('/restaurants')}
              className="flex flex-col items-center space-y-1 hover:text-indigo-300 cursor-pointer transition-all duration-200 ease-in-out transform hover:scale-110"
            >
              <FaUtensils size={24} />
              <span className="text-sm">Restaurant</span>
            </div>
          </div>
        )}
      </div>

      {/* Tour Tab */}
      <div
        onClick={() => setActiveTabs('tour')}
        className="flex flex-col items-center justify-center w-1/5 h-full cursor-pointer"
      >
        <FaMapMarkedAlt
          size={25}
          className={`${activeTabs === 'tour' ? 'text-red-500' : 'text-gray-300'} transition-colors duration-300`}
        />
        <span className="text-sm mt-1">Tickets</span>
      </div>

      {/* Account Tab */}
      <div
        onClick={() => setActiveTabs('account')}
        className="flex flex-col items-center justify-center w-1/5 h-full cursor-pointer"
      >
        <FaUserAlt
          size={25}
          className={`${activeTabs === 'account' ? 'text-red-500' : 'text-gray-300'} transition-colors duration-300`}
        />
        <span className="text-sm mt-1">Account</span>
      </div>
    </div>
  );
};

export default BottomNav;
