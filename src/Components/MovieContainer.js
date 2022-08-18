import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import Filter from "./Filter";
import Search from "./Search";



function MovieContainer() {
  const [movies, setMovies] = useState([])
  const [searchInput, setSearchInput] = useState("")
  const [genre, setGenre] = useState("All")

  useEffect(() => {
    fetch("http://localhost:3001/movies")
      .then(response => response.json())
      .then(data => setMovies(data))
      
  },[])

  const moviesToDisplay = movies 
    //genre
    .filter(
      (movie) => genre === "All" || movie.genre === genre
    )
    // search input
    .filter((movie) => movie.title.toLowerCase().includes(searchInput.toLowerCase()));


  
  return (
    <div>
      <h1>Watchlist</h1>
      <Search searchInput={searchInput}  onSearchChange={setSearchInput}/><br/>
      <Filter genre ={genre} onGenreChange= {setGenre}/>
      {moviesToDisplay.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          
        />
      ))} 
    </div>
  );
}

export default MovieContainer;
