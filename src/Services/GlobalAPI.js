import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const apiKey = "1b8afa85c8a315ad8df01aa8bd9e7c05";
const movieByGenreBaseUrl = "https://api.themoviedb.org/3/discover/movie";
const getTrendingVideos = () => {
    return axios.get(
        movieBaseUrl + '/trending/all/day?api_key=' + apiKey
    );
}
const getMovieByGenreId = (genreId) => {
    return axios.get(
         movieByGenreBaseUrl + '?api_key=' + apiKey + '&with_genres=' + genreId
    )
}
export default {
    getTrendingVideos,
    getMovieByGenreId
}
