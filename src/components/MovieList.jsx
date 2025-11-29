import GlobalAPI from "../Services/GlobalAPI.js";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard.jsx";
export default function MovieList({ genreId }) {
  useEffect(() => {
    getMovieByGenreId();
  }, []);

  const [movieList, setMovieList] = useState([]);

  const getMovieByGenreId = () => {
    GlobalAPI.getMovieByGenreId(genreId).then((resp) => {
      // console.log(resp.data.results)
      setMovieList(resp.data.results);
    });
  };
  return (
    <div>
      <div
        className="flex overflow-x-auto gap-8 scrollbar-hide
                py-5 px-3"
      >
        {movieList.map((item, index) => (
          <MovieCard movie={item} />
        ))}
      </div>
    </div>
  );
}
