import React from "react";
import movies from "./../../movies.js";

import { Link } from "react-router-dom";

const MovieList = () => {
  return (
    <nav className="movie-list">
      <h1>Movies</h1>
      <ul>
        {movies.map((movie) => (
          <li>
            <Link to={`/movies/${movie.id}`} key={movie.id}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MovieList;
