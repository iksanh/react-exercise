export const Movie = ({ movie, onSelectedMovie }) => {
  return (
    <li
      key={movie.imdbID}
      className="relative grid grid-cols-[4rem,auto] grid-rows-[auto,auto] gap-x-2 border-b border-b-slate-800 py-[1rem] pr-[3.2rem] cursor-pointer "
      onClick={() => onSelectedMovie(movie.imdbID)}
    >
      <img
        src={movie.Poster}
        alt={`${movie.Title} poster`}
        className="row-span-2 h-16 w-12"
      />
      <h3 className="text-white font-semibold">{movie.Title}</h3>
      <div className="">
        <p className="flex gap-2">
          <span>🗓</span>
          <span className="text-white">{movie.Year}</span>
        </p>
      </div>
    </li>
  );
};
