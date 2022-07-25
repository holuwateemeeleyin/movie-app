import React from 'react'
import './Movies.css'
export default function MovieLists({movie}) {
    return (
        <div className='movie-card'>
            <img src={movie.Poster} alt={movie.title} width='100%'/>
        </div>
    )
}
