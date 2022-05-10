import React from "react";
import { movies } from "../data";

function Movies() {
  
  const movieList = movies.map((movie) => (
    <div key={movie.title}>
    <h3>{movie.title}</h3>
    <p>Time: {movie.time} minutes</p>
    <ul>
      {movie.genres.map((genre) => (
        <li key={genre}>{genre}</li>
      ))}
    </ul>
    </div>
  ));


  return (
    <div>
      <h1>Movies Page</h1>
      {movieList}
    </div>
  );
}

export default Movies;
