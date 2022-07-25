import React from 'react'
import MovieLists from './MovieLists'
import './Movies.css'
export default function Movie({ movies }) {
    return (
        <div className='movie-container'>
            <div className='movie-header'>
                Movies
            </div>
            <div className='movie-list'>
                    {movies ? movies.map(movie => (
                        <MovieLists key={movie.imdbID} movie={movie}/>
                    )): 'Use the SearchBox to view Movies'}
            </div>
            <div className='movie-header'>
                Cart
            </div>
        </div>
    )
}
