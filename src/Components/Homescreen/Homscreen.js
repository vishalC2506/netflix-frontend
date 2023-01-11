import React from "react";
import Nav from "./Nav/Nav";
import "./Homescreen.css";
import Banner from "./Banner/Banner";
import requests from "../../firebase/axios/Request";
import Row from "../Row/Row";
const Homscreen = () => {
  return (
    <div>
      <Nav />
      <Banner />
      <Row
        title="NETFLIX_ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorroMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
};

export default Homscreen;
