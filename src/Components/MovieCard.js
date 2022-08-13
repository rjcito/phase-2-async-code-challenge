import React from "react";
import { useState } from 'react'
import Comments from './Comments'

function MovieCard() {
  const [comments, setComments] = useState([])
  return (
    <div>
      <h3>Title</h3>
      <p>Genre</p>
      <p>
        <strong>Description</strong>
      </p>
      <button>Mark as watched</button>
      <Comments comments={comments} setComments={setComments}/>
    </div>
  );
}

export default MovieCard;