import GlobalAPI from "../Services/GlobalAPI.js";
import {useEffect} from "react";
export default function MovieList({genreId}){
    useEffect(() => {
        getMovieByGenreId();
    },[])

    const getMovieByGenreId = () => {
        GlobalAPI.getMovieByGenreId(genreId).then((resp) => {
            console.log(resp.data.results)    
        })
    }
    return <div>Movie List Component</div>;
}