import { Link, Route, Routes, Router } from "react-router-dom";
import TravelList from "./components/TravelList";
import Accordion1 from "./exercise/accordion/accordion1";
import Exercise from "./exercise/exercise";
import Navigation from "./route/navigation.component";
import Steps from "./exercise/steps/steps.component";
import Accordion2 from "./exercise/accordion/accordion2";
import Chalange from "./chalange/chalange.component";
import Calculator from "./chalange/calculator/calculator.component";

import StarRating from "./exercise/popcorn/start_rating.component";
import RatingComponent from "./exercise/popcorn/start_rating.component";
import TextExpander from "./chalange/textexpander/textexpander.component";
import AppTextExpander from "./chalange/textexpander/textexpander.component";
import CurrencyConverterApp from "./chalange/currencyconverter/CurrencyConverterApp";
import AppPopCorn from "./exercise/popcorn/PopCornApp";
import GeolocationApp from "./chalange/geolocation/GeolocationApp";
import WeatherApp from "./exercise/weatherapp/WeatherApp";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charge", quantity: 1, packed: false },
];
const Home = () => {
  return (
    <section className="text-gray-600 mx-20 body-font ">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Be a Professional Human who is Always
            <br class="hidden lg:inline-block" />
            <p className="italic">Grateful, Strives, and Benefits others</p>
          </h1>
          <p class="mb-8 leading-relaxed">
            As a Professional Human, I always have a positive and grateful
            attitude. I work hard to do my best in everything I do and
            continuously improve myself. My main focus is on helping and
            benefiting others in any way I can. I treat everyone with respect
            and integrity, and I believe in empowering and inspiring those
            around me. I embrace diversity and change, staying adaptable and
            resilient in the face of challenges. My goal is to create a positive
            impact and make a difference in the lives of others.
          </p>

          {/* <div class="flex justify-center">
            <button class="inline-flex text-white bg-brand border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Button
            </button>
            <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Button
            </button>
          </div> */}
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            class="object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x600"
          />
        </div>
      </div>
    </section>
  );
};
const NoMatch = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-7xl">Your Request is Not Found </h1>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="travel-list" element={<TravelList />} />
        <Route path="accordion" element={<Accordion1 />} />
        <Route path="exercise">
          <Route index element={<Exercise />} />
          <Route path="accordion" element={<Accordion1 />} />
          <Route path="accordion2" element={<Accordion2 />} />
          <Route path="steps" element={<Steps />} />
          <Route path="popcorn" element={<AppPopCorn />} />
          <Route path="rating" element={<RatingComponent />} />
          <Route path="weatherapp" element={<WeatherApp />} />
        </Route>
        <Route path="chalange">
          <Route index element={<Chalange />} />
          <Route path="calculator" element={<Calculator />} />
          <Route path="textexpander" element={<AppTextExpander />} />
          <Route path="currency" element={<CurrencyConverterApp />} />
          <Route path="geolocationApp" element={<GeolocationApp />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
};

export default App;
