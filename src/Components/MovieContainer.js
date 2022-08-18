import React from "react";
import MovieCard from "./MovieCard";
import Filter from "./Filter";
import Search from "./Search";

function MovieContainer({ movies }) {
  
console.log(movies)

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
