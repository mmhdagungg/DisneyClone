import React, { useRef } from 'react'
import { useEffect, useState } from 'react'
import GlobalAPI from '../Services/GlobalAPI'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
export default function Slider(){
    const [movieList, setMovieList] = useState([]);
    const elementRef = useRef();

    useEffect(() =>{
        getTrendingVideos()
    }, [])

    const getTrendingVideos = () => {
        GlobalAPI.getTrendingVideos().then(resp => {
            console.log(resp.data.results)
            setMovieList(resp.data.results)
        }).catch(err => console.log(err))
    }

    return(
        <div>
            <HiChevronLeft className='hidden md:block text-white text-[30px] absolute mx-8 mt-[150px]'/>
            <HiChevronRight className='hidden md:block text-white text-[30px] absolute right-0 mx-8 mt-[150px]'/>
            <div className='flex overflow-x-auto px-16 py-4 scrollbar-hide' ref={elementRef}>
                {movieList.map((item) => (
                    <img src={IMAGE_BASE_URL + item.backdrop_path}
                    className='min-w-full md:h-[310px] object-cover 
                    object-left-top mr-5 rounded-md'/>
                ))}
            </div>
        </div>
    )
}