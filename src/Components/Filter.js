import React from 'react'

function Filter({genre, onGenreChange}) {
  function handleGenreChange(event){
    onGenreChange(event.target.value)
  }
  

  return (
    <div>
        <select onChange={handleGenreChange}>
            <option selected>All</option>
            <option>Action</option>
            <option>Horror</option>
            <option>Drama</option>
            <option>Comedy</option>
        </select>
    </div>
  )
}

export default Filter;
