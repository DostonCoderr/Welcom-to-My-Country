"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { FaSun, FaCloud, FaCloudRain, FaSnowflake, FaSmog } from "react-icons/fa"; // Importing icons

const WeatherWidget = () => {
  const [location, setLocation] = useState("Tashkent");
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [airQualityData, setAirQualityData] = useState(null);
  const [error, setError] = useState(null);
  const [isRainy, setIsRainy] = useState(false);
  const [isSnowy, setIsSnowy] = useState(false);
  const [isCloudy, setIsCloudy] = useState(false);
  const [isSunny, setIsSunny] = useState(false);
  const [isSmoke, setIsSmoke] = useState(false);

  const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;

  const fetchWeather = async (query) => {
    if (!API_KEY) {
      setError("API key is missing. Please check your .env.local file.");
      console.log("API key missing");
      return;
    }

    try {
      const response = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather",
        {
          params: {
            q: query,
            appid: API_KEY,
            units: "metric",
          },
        }
      );
      setWeatherData(response.data);
      setIsRainy(response.data.weather[0].main === "Rain");
      setIsSnowy(response.data.weather[0].main === "Snow");
      setIsCloudy(response.data.weather[0].main === "Clouds");
      setIsSunny(response.data.weather[0].main === "Clear");
      setIsSmoke(response.data.weather[0].main === "Smoke");

      const forecastResponse = await axios.get(
        "https://api.openweathermap.org/data/2.5/forecast",
        {
          params: {
            q: query,
            appid: API_KEY,
            units: "metric",
          },
        }
      );
      setForecastData(forecastResponse.data);

      const airQualityResponse = await axios.get(
        "https://api.openweathermap.org/data/2.5/air_pollution",
        {
          params: {
            lat: response.data.coord.lat,
            lon: response.data.coord.lon,
            appid: API_KEY,
          },
        }
      );
      setAirQualityData(airQualityResponse.data);
      setError(null);
    } catch (err) {
      setError("Location not found or API key is invalid.");
      setWeatherData(null);
      setForecastData(null);
      setAirQualityData(null);
    }
  };

  useEffect(() => {
    fetchWeather(location);
  }, [location]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (location) fetchWeather(location);
  };

  const convertToUzbekistanTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: false,
    };
    return date.toLocaleString("en-US", {
      ...options,
      timeZone: "Asia/Tashkent",
    });
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const options = { month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  // Function to get the next 5 days' dates
  const getNextFiveDays = () => {
    const today = new Date();
    const nextFiveDays = [];
    for (let i = 0; i < 5; i++) {
      const nextDay = new Date(today);
      nextDay.setDate(today.getDate() + i); // increment by i days
      nextFiveDays.push(nextDay);
    }
    return nextFiveDays;
  };

  const getBackgroundStyle = () => {
    if (!weatherData) return {};
    switch (weatherData.weather[0].main) {
      case "Rain":
        return {
          backgroundImage: "url('/images/Wheathers/Rayning.avif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          height: "100vh",
          minHeight: "100vh",
        };
      case "Clouds":
        return {
          backgroundImage: "url('/images/Wheathers/Cloudly.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          height: "100vh",
          minHeight: "100vh",
        };
      case "Clear":
        return {
          backgroundImage: "url('/images/Wheathers/Sunny.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          height: "100vh",
          minHeight: "100vh",
        };
      case "Snow":
        return {
          backgroundImage: "url('/images/Wheathers/Snow.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          height: "100vh",
          minHeight: "100vh",
        };
      case "Smoke":
        return {
          backgroundImage: "url('/images/Wheathers/Smoke.webp')",  // Smoke image
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          height: "100vh",
          minHeight: "100vh",
        };
      default:
        return {
          height: "100vh",
          minHeight: "100vh",
        };
    }
  };

  const getAirQualityLevel = (aqi) => {
    switch (aqi) {
      case 1:
        return (
          <span className="text-green-500">
            <span role="img" aria-label="good">🌱</span> Good
          </span>
        );
      case 2:
        return (
          <span className="text-yellow-500">
            <span role="img" aria-label="fair">☁️</span> Fair
          </span>
        );
      case 3:
        return (
          <span className="text-orange-500">
            <span role="img" aria-label="moderate">🌫️</span> Moderate
          </span>
        );
      case 4:
        return (
          <span className="text-red-500">
            <span role="img" aria-label="poor">😷</span> Poor
          </span>
        );
      case 5:
        return (
          <span className="text-purple-600">
            <span role="img" aria-label="very-poor">💨</span> Very Poor
          </span>
        );
      default:
        return <span>Unknown</span>;
    }
  };

  const getWeatherIcon = (weather) => {
    if (!weather) return null;
    const main = weather.main;
    if (main === "Clear") return <FaSun size={30} className="text-yellow-400" />;
    if (main === "Rain") return <FaCloudRain size={30} className="text-blue-400" />;
    if (main === "Snow") return <FaSnowflake size={30} className="text-blue-600" />;
    if (main === "Clouds") return <FaCloud size={30} className="text-gray-600" />;
    if (main === "Smoke") return <FaSmog size={30} className="text-gray-700" />;
    return null;
  };

  return (
    <div style={getBackgroundStyle()} className="text-white h-full w-full p-6">
      <audio
        src={isRainy ? "/images/Wheathers/Rayning1.mp3" :
             isSnowy ? "/images/Wheathers/Snow.mp3" :
             isCloudy ? "/images/Wheathers/Cloud.mp3" :
             isSunny ? "/images/Wheathers/Sunny.mp3" :
             isSmoke ? "/images/Wheathers/Smoke.mp3" : null}
        autoPlay={isRainy || isSnowy || isCloudy || isSunny || isSmoke}
        loop={isRainy || isSnowy || isCloudy || isSunny || isSmoke}
      />
      <div className="flex justify-center items-center flex-col space-y-6">
        <div className="flex justify-center items-center space-x-4 text-black">
          <input
            type="text"
            placeholder="Enter city name"
            className="p-2 rounded-md"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="bg-blue-500 text-white py-2 px-4 rounded-md"
          >
            Search
          </button>
        </div>
        <div className="text-center">
          {weatherData ? (
            <>
              <h2 className="text-4xl font-semibold">{weatherData.name}</h2>
              <div className="text-2xl font-light">{weatherData.weather[0].description}</div>
              <div className="flex justify-center items-center space-x-4 text-xl">
                {getWeatherIcon(weatherData.weather[0])}
                <span>{Math.round(weatherData.main.temp)}°C</span>
              </div>
              <div className="mt-4">
                <div>
                  <strong>Air Quality:</strong> {getAirQualityLevel(airQualityData?.list[0]?.main.aqi)}
                </div>
                <div>
                  <strong>Humidity:</strong> {weatherData.main.humidity}%
                </div>
                <div>
                  <strong>Wind Speed:</strong> {weatherData.wind.speed} m/s
                </div>
                <div>
                  <strong>Sunrise:</strong> {convertToUzbekistanTime(weatherData.sys.sunrise)}
                </div>
                <div>
                  <strong>Sunset:</strong> {convertToUzbekistanTime(weatherData.sys.sunset)}
                </div>
              </div>
            </>
          ) : (
            <div>Loading weather...</div>
          )}
        </div>
      </div>
      {forecastData && (
        <div className="mt-6">
          <h3 className="text-2xl font-semibold mb-4">Next 5 Days Forecast</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {forecastData.list.slice(0, 5).map((forecast, index) => (
              <div key={index} className="bg-white text-black p-4 rounded-md shadow-md">
                <h4 className="text-xl font-semibold">{formatDate(forecast.dt)}</h4>
                <div className="flex items-center">
                  {getWeatherIcon(forecast.weather[0])}
                  <span className="ml-2">{Math.round(forecast.main.temp)}°C</span>
                </div>
                <div>{forecast.weather[0].description}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherWidget;
