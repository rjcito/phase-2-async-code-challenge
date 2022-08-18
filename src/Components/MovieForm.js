import React, { useState } from "react";




function MovieForm() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [genre, setGenre] = useState("")
  const [watched, setWatched] = useState(false)
  const [image, setImage] = useState("")
  
  
  function handleSubmit(event){
    event.preventDefault()
    const formData = {
      title: title,
      description: description,
      genre: genre,
      watched: watched,
      image: image,
    };
    fetch("http://localhost:3001/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((newItem => console.log(newItem)))

    
  }
  
  



  return (
    <form onSubmit ={handleSubmit} className="new-movie-form">
        <h3>Add Movie</h3>
      <input 
        placeholder="Title" 
        name="title" 
        value={title}
        onChange = {e => setTitle(e.target.value)}
      /><br/>
      <select 
        name="genre" value = {genre} onChange = {e => setGenre(e.target.value)}>
        <option value="" disabled selected>Select Genre:</option>
      <option>Action</option>
      <option>Horror</option>
      <option>Drama</option>
      <option>Comedy</option>
      </select><br/>
      <label>Watched?
      <input type="checkbox" name="genre" checked ={watched} onChange= {e => setWatched(e.target.checked)}/>
      </label><br/>
      <input placeholder="Image" name="image" value = {image} onChange = {e => setImage(e.target.value)}/><br/>
      <textarea placeholder="Description" rows={10} name="description" value={description} onChange = {e => setDescription(e.target.value)}/><br/>
      <input type="submit" value="Add Movie" />
    </form>
  );
}

export default MovieForm;
