import { Link, Outlet } from "react-router-dom";
const Navigation = () => {
  return (
    <>
      <header className="bg-white py-4 drop-shadow-sm mb-2">
        <nav className="flex justify-between px-20">
          <div>Logo</div>
          <ul className="flex justify-between space-x-10">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="travel-list">TravelList</Link>
            </li>
            <li>
              <Link to="exercise">Exercise</Link>
            </li>
            <li>
              <Link to="chalange">Chalange</Link>
            </li>
            <li>
              <Link to="start_rating">component</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Navigation;
