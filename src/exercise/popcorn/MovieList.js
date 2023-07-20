import { Movie } from "./Movie";

export const MovieList = ({ movies, onSelectedMovie }) => {
  return (
    <ul className="flex flex-col gap-6 px-6 pt-3">
      {movies?.map((movie) => (
        <Movie
          movie={movie}
          key={movie.imdbID}
          onSelectedMovie={onSelectedMovie}
        />
      ))}
    </ul>
  );
};
