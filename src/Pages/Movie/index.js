import React from 'react'
import MovieLists from './MovieLists'
import './Movies.css'
export default function Movie({ movies, carts, cartHandler }) {
    console.log(carts);
    return (
        <div className='movie-container'>
            <div className='movie-header'>
                Movies
            </div>
            <div className='movie-list'>
                    {movies ? movies.map(movie => (
                        <MovieLists key={movie.imdbID} movie={movie} cartHandler={cartHandler}/>
                    )): 'Use the SearchBox to view Movies'}
            </div>
            <div className='movie-header'>
                Carts
            </div>
            <div className='movie-list'>
            {
                    carts ? carts.map(movie =>(
                        <MovieLists key={movie.imdbID} movie={movie}/>
                    )) :'No Movie Added to Carts yet'
                }
            </div>
        </div>
    )
}
