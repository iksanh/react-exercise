import { Link, Route, Routes, Router } from "react-router-dom";
import TravelList from "./components/TravelList";
import Accordion1 from "./exercise/accordion/accordion1";
import Exercise from "./exercise/exercise";
import Navigation from "./route/navigation.component";
import Steps from "./exercise/steps/steps.component";
import Accordion2 from "./exercise/accordion/accordion2";
import Chalange from "./chalange/chalange.component";
import Calculator from "./chalange/calculator/calculator.component";
import Popcorn from "./exercise/popcorn/popcorn.component";
import StarRating from "./exercise/popcorn/start_rating.component";
import RatingComponent from "./exercise/popcorn/start_rating.component";
import TextExpander from "./chalange/textexpander/textexpander.component";
import AppTextExpander from "./chalange/textexpander/textexpander.component";
import CurrencyConverterApp from "./chalange/currencyconverter/CurrencyConverterApp";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charge", quantity: 1, packed: false },
];
const Home = () => {
  return (
    <div className="px-20">
      <h1>Home Pagekdkdk</h1>
    </div>
  );
};
const NoMatch = () => {
  return (
    <div className="px-20">
      <h1 className="text-7xl">URL NOT FOUND</h1>
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
          <Route path="popcorn" element={<Popcorn />} />
          <Route path="rating" element={<RatingComponent />} />
        </Route>
        <Route path="chalange">
          <Route index element={<Chalange />} />
          <Route path="calculator" element={<Calculator />} />
          <Route path="textexpander" element={<AppTextExpander />} />
          <Route path="currency" element={<CurrencyConverterApp />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
};

export default App;
