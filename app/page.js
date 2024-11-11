// app/page.jsx

import AboutSection from "./components/About";
import CurrencyConverter from "./components/CurrencyConverter";
import Hero from "./components/Hero";
import HotelsSection from "./components/HotelsSection";
import NewsSection from "./components/NewsSection";
import PeopleSection from "./components/PeopleSection";
import PlacesSection from "./components/Place";
import PopularitySection from "./components/PopularitySection";


export default function HomePage() {
  return (
    <div>
      <Hero/>
      <PopularitySection/>
      <AboutSection/>
      <PlacesSection/>
      <HotelsSection/>
      <NewsSection/>
      <PeopleSection/>
      <CurrencyConverter/>
    </div>
  );
}
