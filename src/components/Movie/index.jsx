import React from "react";
import movies from "./../../movies.js";
import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";

const Movie = () => {
  const { id } = useParams();

  const nazev = movies.find((ele) => ele.id == id).title;
  const popis = movies.find((ele) => ele.id == id).storyline;
  const obrazek = movies.find((ele) => ele.id == id).poster;

  return (
    <div className="movie">
      <h1>{nazev}</h1>
      <img src={`../assets/${obrazek}`} alt={nazev} />

      <p>
        <small>Popis:</small>
      </p>
      <p>{popis}</p>
      <Link to="/">Zpět na úvodní stránku</Link>
    </div>
  );
};

export default Movie;
