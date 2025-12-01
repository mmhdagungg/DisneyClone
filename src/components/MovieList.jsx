import GlobalAPI from "../Services/GlobalAPI.js";
import { useEffect, useState, useRef } from "react";
import MovieCard from "./MovieCard.jsx";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
export default function MovieList({ genreId }) {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef();
  useEffect(() => {
    getMovieByGenreId();
  }, []);

  const getMovieByGenreId = () => {
    GlobalAPI.getMovieByGenreId(genreId).then((resp) => {
      // console.log(resp.data.results)
      setMovieList(resp.data.results);
    });
  };
  const slideRight = () => {
    elementRef.current.scrollTo({
      left: elementRef.current.scrollLeft + 500,
      behavior: "smooth",
    });
  };

  const slideLeft = () => {
    elementRef.current.scrollTo({
      left: elementRef.current.scrollLeft - 500,
      behavior: "smooth",
    });
  };
  return (
    <div className="relative">
      <IoChevronBackOutline
        onClick={slideLeft}
        className="text-[50px] text-white p-2 z-10 cursor-pointer
        hidden md:block absolute mt-[150px]"
      />
      <div
        className="flex overflow-x-auto gap-8 scrollbar-hide
                py-5 px-3"
        ref={elementRef}
      >
        {movieList.map((item, index) => (
          <MovieCard movie={item} />
        ))}
      </div>
      <IoChevronForwardOutline
        onClick={slideRight}
        className="text-[50px] text-white hidden md:block p-2 z-10 top-0
         absolute mt-[150px] right-0 cursor-pointer"
      />
    </div>
  );
}
