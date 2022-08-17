import React, {useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import MovieContainer from './MovieContainer'


export default function Home() {
  const [movies, setMovies] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3001/movies')
      .then(response => response.json())
      .then(data => 
        setMovies(data))


  },[])






  return (
    <div>
        <h1>Welcome to Watchlist!</h1>
        <MovieContainer movies={movies}/>
        <Link to="/movies">Movies</Link><br/>
        <Link to ="/movies/new">New Movie</Link>
    </div>
    
  )
}
