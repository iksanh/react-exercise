import { useState, useEffect } from "react";

const KEY = "a5e14362";
// const useMovies = (query, callback) => {
const useMovies = (query) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // callback?.();
    const controller = new AbortController();
    const getData = async () => {
      setIsLoading(true);
      setError("");
      try {
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
          { signal: controller.signal }
        );

        if (!res.ok) throw new Error("Failed get Data");
        const data = await res.json();

        if (data.Response === "False") throw new Error("Movie Not Found");
        setMovies(data.Search);
        setError("");
      } catch (error) {
        console.log(error.message);

        if (error.message !== "AbortError") {
          setError(error.message);
        }
      } finally {
        setIsLoading(false);
      }

      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }
    };
    // handleCloseMovie();
    getData();

    return () => {
      controller.abort();
    };
  }, [query]);
  return { movies, isLoading, error };
};

export { useMovies };
