export const WatchedMovie = ({ movie, onRemoveMovieWatched }) => {
  return (
    <li className="relative grid grid-cols-[4rem,auto] grid-rows-[auto,auto] gap-x-2 border-b border-b-slate-800 ">
      <img
        src={movie.poster}
        alt={`${movie.title} poster`}
        className="row-start-1 row-end-3 h-12"
      />
      <h3 className="text-white font-semibold">{movie.Title}</h3>
      <div className="flex gap-4 text-white justify-between col-start-2 py-4">
        <p>
          <span>⭐️</span>
          <span>{movie.imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{movie.userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{movie.runtime} min</span>
        </p>
        <div
          className="w-6 h-6 rounded-full bg-red-700 text-black font-normal align-middle text-center cursor-pointer "
          onClick={() => onRemoveMovieWatched(movie.imdbID)}
        >
          X
        </div>
      </div>
    </li>
  );
};
