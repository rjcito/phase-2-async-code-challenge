import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import Filter from "./Filter";
import Search from "./Search";

function MovieContainer() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/movies")
      .then(response => response.json())
      .then(data => setMovies(data))
      


  },[])
  


  return (
    <div>
      <h1>Watchlist</h1>
      <Search /><br/>
      <Filter />
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
        />
      ))} 
    </div>
  );
}

export default MovieContainer;
