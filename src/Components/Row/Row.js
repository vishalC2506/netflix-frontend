import React, { useEffect, useState } from "react";
import axios from "../../firebase/axios/axios";
import "./Row.css";
const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [Movie, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  console.log(Movie);
  return (
    <>
      <div className="Row">
        <h2>{title}</h2>
        <div className="row_posters">
          {Movie.map(
            (movie) =>
              ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
                <img
                  className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                  key={movie.id}
                  src={`${base_url}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                  }`}
                  alt={movie.name}
                />
              ))
          }
        </div>
      </div>
    </>
  );
};

export default Row;
