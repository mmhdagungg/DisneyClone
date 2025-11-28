import GenresList from "../constant/GenresList.jsx";

export default function GenreMovieList(){
    return <div>
        {GenresList.genere.map((item, index) => index <= 4&&(
            <div className="p-8 px-8 md:px-16" >
                <h2 className="text-[20px] 
                font-bold text-white">{item.name}</h2>   
            </div>    
        ))}
    </div>;
}