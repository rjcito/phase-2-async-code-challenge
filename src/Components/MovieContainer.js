import React from "react";
import MovieCard from "./MovieCard";
import Filter from "./Filter";
import Search from "./Search";

function MovieContainer() {
  return (
    <div>
      <h1>Watchlist</h1>
      <Search /><br/>
      <Filter />
      {/* render a list of <MovieCard> components in here */} 
    </div>
  );
}

export default MovieContainer;
