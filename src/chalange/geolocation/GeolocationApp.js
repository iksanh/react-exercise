import { useState } from "react";

const useGeolocation = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [position, setPosition] = useState({});
  const [error, setError] = useState(null);

  function getPosition() {
    if (!navigator.geolocation)
      return setError("Your browser does not support geolocation");

    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setIsLoading(false);
      },
      (error) => {
        setError(error.message);
        setIsLoading(false);
      }
    );
  }
  return { isLoading, position, error, getPosition };
};

const GeoLocationApp = () => {
  const [countClicks, setCountClicks] = useState(0);
  const {
    isLoading,
    position: { lat, lng },
    error,
    getPosition,
  } = useGeolocation();

  const handleClick = () => {
    setCountClicks((count) => count + 1);
    getPosition();
  };

  return (
    <div className="mx-24 h-screen w-full flex flex-col gap-3 items-center justify-center">
      <button
        onClick={handleClick}
        disabled={isLoading}
        className="border-gray-300 border-2 px-3 rounded-md shadow-sm"
      >
        Get my position
      </button>

      {isLoading && <p>Loading position...</p>}
      {error && <p>{error}</p>}
      {!isLoading && !error && lat && lng && (
        <p>
          Your GPS position:{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://www.openstreetmap.org/#map=16/${lat}/${lng}`}
          >
            {lat}, {lng}
          </a>
        </p>
      )}

      <p>You requested position {countClicks} times</p>
    </div>
  );
};
export default GeoLocationApp;
