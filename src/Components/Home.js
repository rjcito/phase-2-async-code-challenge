import React, {useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import MovieContainer from './MovieContainer'


export default function Home() {
  






  return (
    <div>
        <h1>Welcome to Watchlist!</h1>
        <Link to="/movies">Movies</Link><br/>
        <Link to ="/movies/new">New Movie</Link>
        
        
    </div>
    
  )
}
