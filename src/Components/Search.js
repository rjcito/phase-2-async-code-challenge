import React from 'react'

function Search({ searchInput, onSearchChange }) {
  function handleSearchChange(event){
    onSearchChange(event.target.value)
  }

  return (
    <div>
        <input type="text" placeholder="Search for movie by title" style={{width: '250px'}} value={searchInput} onChange={handleSearchChange}/>
    </div>
  )
}

export default Search;
