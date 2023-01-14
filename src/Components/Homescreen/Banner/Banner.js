import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "../../../firebase/axios/axios";
import requests from "../../../firebase/axios/Request";
const Banner = () => {
  const [movie, setMovie] = useState([]);
  function truncate(string, n) {
    return string?.length > n ? string.substring(0, n - 1) + "..." : string;
  }
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * [request.data.results.length - 1])
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  console.log(movie);
  return (
    <>
      <header
        className="Banner_main"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(
            "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
          )`,

          backgroundPosition: "center center ",
        }}
      >
        <div className="Banner_main-container">
          <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
          <div className="Banner_main-container-button">
            <button className="Banner_button">Play</button>
            <button className="Banner_button">My List</button>
          </div>
          <h4>{truncate(movie?.overview, 155)}</h4>
        </div>
        <div className="bottom_div"></div>
      </header>
    </>
  );
};

export default Banner;
