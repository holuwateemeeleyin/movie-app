import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './Pages/Header';
import FrontPage from './Pages/FrontPage';
import SearchBox from './Pages/Search-box';
import Movie from './Pages/Movie';
function App() {
  const [movies, setMovies]= useState([])
  const [searchInput, setSearchInput] = useState('')
  const [carts, setCarts] = useState('')
  // const url=`http://www.omdbapi.com/?s=?${searchInput}&apikey=b8b2a730`
  
  const fetchMovies=(searchInput)=>{
    axios.get(`https://www.omdbapi.com/?s=${searchInput}&apikey=b8b2a730`)
      .then(res => {
        setMovies(res.data.Search)
        console.log(res.data.Search);
      })
  }
  useEffect(()=> {
    fetchMovies(searchInput)
  }, [searchInput])

  const addToCarts = (movie)=> {
    const addCart = [...carts, movie]
    setCarts(addCart)
  }

  return (
    <div className='app'>
      <Header/>
      <FrontPage/>
      <SearchBox searchInput={searchInput} setSearchInput={setSearchInput}/>
      <Movie movies={movies} carts={carts} cartHandler={addToCarts}/>
    </div>
  );
}

export default App;