import { WatchedMovie } from "./WatchedMovie";

export const WatchedMovieList = ({ watched, onRemoveMovieWatched }) => {
  return (
    <ul className="flex flex-col gap-4 px-5 mt-4">
      {watched.map((movie) => (
        <WatchedMovie
          movie={movie}
          key={movie.imdbID}
          onRemoveMovieWatched={onRemoveMovieWatched}
        />
      ))}
    </ul>
  );
};
