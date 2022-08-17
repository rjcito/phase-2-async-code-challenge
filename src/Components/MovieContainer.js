import React from "react";
import MovieCard from "./MovieCard";
import Filter from "./Filter";
import Search from "./Search";

function MovieContainer({ movies }) {
  


  return (
    <div>
      <h1>Watchlist</h1>
      <Search /><br/>
      <Filter />
      {/*Render movies here using map */} 
    </div>
  );
}

export default MovieContainer;
