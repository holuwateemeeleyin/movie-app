import React from 'react'
import './Movies.css'
export default function MovieLists({movie, cartHandler, removeCart}) {
    return (
        <div className='movie-card'>
            <img src={movie.Poster} alt={movie.title} width='100%'/>
            <div className='movie-title'>{movie.Title}</div>
            <div className='cart' onClick={()=>{cartHandler(movie)}}>Add To Cart </div>
            <div className='remove-cart' onClick={()=>{removeCart(movie)}}>Remove Cart</div>
        </div>
    )
}
