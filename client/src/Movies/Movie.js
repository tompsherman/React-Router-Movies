import React, { useState, useEffect } from 'react';
import {useRouteMatch, useParams} from "react-router-dom"
import axios from 'axios';

export default function Movie(props) {
  const [movie, setMovie] = useState();
  const {url, path} = useRouteMatch()
  const { id } = useParams()

  console.log("url:", url)
  console.log("path:", path)
  console.log("the id:", id)

  let foo = useParams();
  let bar = foo.id
  // Change ^^^ that line and use a hook to obtain the :id parameter from the URL
  console.log("foo:", foo)
  console.log("bar:", bar)


  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/movies/${bar}`) // Study this endpoint with Postman
      .then(response => {

        console.log("movie response:", response)
        console.log("movie response.data:", response.data)
        // Study this response with a breakpoint or log statements
        // and set the response data as the 'movie' slice of state
        setMovie(response.data)
      })
      .catch(error => {
        console.error(error);
      });
    // This effect should run every time time
    // the `id` changes... How could we do this?
  }, [bar]);

  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = evt => { }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  const { title, director, metascore, stars } = movie;

  return (
    <div className="save-wrapper">
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
      <div className="save-button">Save</div>
    </div>
  );
}
