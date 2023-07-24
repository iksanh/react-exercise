import { useEffect, useRef, useState } from "react";
import { Loading } from "./Loading";
import { StarRating } from "./start_rating.component";

const MovieDetail = ({
  selectedId,
  onCloseMovie,
  KEY,
  onWatchedMovie,
  watched,
}) => {
  const [movie, setMovie] = useState({});
  const [isloading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState(null);
  const [avgRating, setAvgRating] = useState(0);

  const countRef = useRef(0);

  useEffect(() => {
    if (userRating) countRef.current++;
  }, [userRating]);

  const isWatched = watched.map((movie) => movie.imdbID).includes(selectedId);
  const watchedUserRating = watched.find(
    (movie) => movie.imdbID === selectedId
  )?.userRating;

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;

  useEffect(() => {
    const callback = (e) => {
      if (e.code === "Escape") {
        onCloseMovie();
        // console.log("Closing");
      }
    };
    document.addEventListener("keydown", callback);
    return () => {
      document.removeEventListener("keydown", callback);
    };
  }, [onCloseMovie]);

  useEffect(() => {
    const getDataDetail = async () => {
      setIsLoading(true);
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
      );
      const data = await res.json();
      setMovie(data);
      setIsLoading(false);
      // console.log(data);
    };
    getDataDetail();
  }, [selectedId]);

  const isTop = imdbRating > 8;
  const handleAddMovie = () => {
    const newWatchedMovie = {
      imdbID: selectedId,
      title,
      year,
      poster,
      runtime: Number(runtime.split(" ").at(0)),
      imdbRating: Number(imdbRating),
      userRating,
      countRatingDecision: countRef.current,
    };

    onWatchedMovie(newWatchedMovie);

    setAvgRating(Number(imdbRating));
    setAvgRating((avgRating) => (avgRating + userRating) / 2);
  };

  useEffect(() => {
    document.title = `Movie | ${title}`;

    // effect unmount component
    return () => {
      document.title = "Popcorn";
      // console.log(`Clean up effect for movie ${title}`);
    };
  }, [title]);
  return (
    <div className=" text-white">
      {isloading ? (
        <Loading />
      ) : (
        <>
          <header className="flex gap-8 bg-slate-600 shadow-sm rounded-lg">
            <button
              className="absolute bg-white text-black rounded-full w-8 h-8 top-1 left-1 font-bold text-lg flex justify-center shadow-lg"
              onClick={() => onCloseMovie()}
            >
              &larr;
            </button>
            <img
              src={poster}
              alt={`Poster of movie ${movie} movie`}
              className="w-1/3"
            />
            <div className="flex flex-col gap-1 w-full pt-6">
              <h2 className="font-extrabold">{title}</h2>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>
              <p>
                <span>⭐</span>
                {imdbRating} IMDb rating
              </p>
            </div>
          </header>
          <section className="mt-6 mx-6">
            {/* <p>{isTop && avgRating}</p> */}
            <div className="bg-slate-600 my-6 py-3 px-4 flex flex-col justify-center rounded-sm">
              {!isWatched ? (
                <>
                  <StarRating
                    maxRating={10}
                    size={24}
                    onSetRating={setUserRating}
                    className="gap-2 px-2 justify-center items-center"
                  />
                  {userRating > 0 && (
                    <button
                      className="bg-violet-700 px-1 py-1 rounded-full"
                      onClick={handleAddMovie}
                    >
                      + Add to List
                    </button>
                  )}
                </>
              ) : (
                <p>You Rated with movie {watchedUserRating} ⭐ </p>
              )}
            </div>
            <p className="mb-3">
              <em>{plot}</em>
            </p>
            <p className="mb-3">Staring actor {actors}</p>
            <p>Directed by {director}</p>
          </section>

          {/* <div className="text-white text-center">{selectedId}</div> */}
        </>
      )}
    </div>
  );
};

export default MovieDetail;
