import React from "react";
import { Link, useRouteMatch, useHistory } from "react-router-dom";
import Movie from "./Movie"
export default function MovieList(props) {
  const { url } = useRouteMatch();

  return (
    <div className="movie-list">
      {props.movies.map((movie) => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore, id } = props.movie;
  const { url } = useRouteMatch();
  const history = useHistory()

  const routeToDetails = () => {
    history.push(`/movies/${id}`)
  }

  return (
          <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        
          <button onClick={routeToDetails}>get details</button>
      </div>
  );
}
