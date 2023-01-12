import axios from 'axios';
import React, { useEffect, useState } from 'react';
import requests from '../Requests';

const Main = () => {
    const [movies, setMovies] = useState([]);

    const movie = movies[Math.floor(Math.random() * movies.length)]

    useEffect(() => {
        axios.get(requests.fetchTrending).then((response) => {
            setMovies(response.data.results);
        });
    }, []);

    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n - 1) + '...' : str;
    }

    return (
        <div className='w-fu;; h-[550px] text-white'>
            <div className='w-full h-full'>
                <div className='absolute w-full h-[550px] bg-gradient-to-t from-black'></div>
                <img
                    className='w-full h-full object-cover'
                    src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
                    alt="{movie?.title}" />
                <div className='absolute w-full top-[20%] p-4 md:p-8'>
                    <h1 className='text-3xl md:text-6xl font-bold'>{movie?.title || movie?.name || movie?.original_name}</h1>
                    <div className='my-4'>
                        <button className='border bg-gray-400 text-black border-gray-400 py-2 px-5 ml-4'>Play</button>
                        <button className='border text-white border-gray-400 py-2 px-5'>Watch Latert</button>
                    </div>
                    <p className='text-gray-400 text-sm'>Released: {movie?.release_date}</p>
                    <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-300'>{truncate(movie?.overview, 100)}</p>
                </div>
            </div>
        </div>
    );
}

export default Main;
