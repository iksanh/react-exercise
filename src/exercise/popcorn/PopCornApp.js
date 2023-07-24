import { useEffect, useState } from "react";
import { Search } from "./Search";
import { Navbar } from "./Navbar";
import { MovieList } from "./MovieList";
import { Box } from "./Box";
import { WatchedSummary } from "./WatchedSummary";
import { WatchedMovieList } from "./WatchedMovieList";
import MovieDetail from "./MovieDetail";
import { Main } from "./Main";
import { Loading } from "./Loading";
import { ErrorMessage } from "./ErrorMessage";
import { useMovies } from "./useMovies";
import { useLocalStorageState } from "./useLocalStorageState";
// import "./index.css";

const KEY = "a5e14362";
export const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

const NumResult = ({ movies }) => {
  return (
    <p className="text-white text-lg">
      Found <strong>{movies.length}</strong> results
    </p>
  );
};

const AppPopCorn = () => {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  // const [watched, setWatched] = useState([]);
  const [watched, setWatched] = useLocalStorageState([], "watched");

  const { movies, isLoading, error } = useMovies(query, handleCloseMovie);

  const tempQuery = "interstellar";

  // useEffect(() => {
  //   localStorage.setItem("watched", JSON.stringify(watched));
  // }, [watched]);

  const handleSelectedMovie = (id) => {
    setSelectedId((selectedId) => (selectedId === id ? null : id));
  };

  function handleCloseMovie() {
    setSelectedId(null);
  }

  const handleAddWatched = (movie) => {
    setWatched((watched) => [...watched, movie]);
    handleCloseMovie();
  };

  const handleRemoveWatched = (selectedId) => {
    const watchedMovie = watched.filter((movie) => movie.imdbID !== selectedId);
    setWatched(watchedMovie);
  };
  return (
    <div className="bg-slate-800 min-h-screen px-4  py-4">
      <Navbar>
        <Search query={query} setQuery={setQuery} />
        <NumResult movies={movies} />
      </Navbar>
      <Main>
        <Box>
          {isLoading && <Loading />}
          {!isLoading && !error && (
            <MovieList movies={movies} onSelectedMovie={handleSelectedMovie} />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>
        <Box>
          {selectedId ? (
            <MovieDetail
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              KEY={KEY}
              onWatchedMovie={handleAddWatched}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMovieList
                watched={watched}
                onRemoveMovieWatched={handleRemoveWatched}
              />
            </>
          )}
        </Box>
      </Main>
    </div>
  );
};

export default AppPopCorn;
