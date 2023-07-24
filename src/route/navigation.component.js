import { Link, Outlet } from "react-router-dom";
const Navigation = () => {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap px-24 py-6 flex-col md:flex-row items-center">
          <div className="text-brand-dark font-semibold">IKSAN HARIJI</div>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center gap-5">
            <Link to="/" className="hover:text-gray-900 ">
              Home
            </Link>
            <Link to="travel-list">TravelList</Link>
            <Link to="exercise">Exercise</Link>
            <Link to="chalange">Chalange</Link>
            <Link to="start_rating">component</Link>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Navigation;
