const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
export default function MovieCard({ movie }) {
  return (
    <>
      <img
        src={IMAGE_BASE_URL + movie.poster_path}
        className="w-[110px] md:w-[200px] 
            hover:border-[3px] hover:scale-110 border-gray-300 rounded-lg 
            transition-all duration-150 ease-in"
      />
    </>
  );
}
