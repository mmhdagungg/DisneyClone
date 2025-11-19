import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const apiKey = "1b8afa85c8a315ad8df01aa8bd9e7c05";

const getTrendingVideos = axios.get(this.movieBaseUrl + 
    "/trending/all/day?api_key"+apiKey);

export default {
    getTrendingVideos
}
