import React, { useEffect, useState } from "react";
import Nav from "../components/nav";
import { Link } from "react-router-dom";
const MovieDetailes = ({ match }) => {
  const [movieInfo, setMovieInfo] = useState({});
  const [imdb, setImdb] = useState("");
  const APP_KEY = "19e233398390f3df83538dff1bb54357";
  const imdbLink = `https://www.imdb.com/title/${imdb}/?ref_=nv_sr_1?ref_=nv_sr_1`;
  useEffect(() => {
    getMovie();
  }, []);
  const getMovie = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${APP_KEY}&language=en-US&query=${match.params.id}&page=1&include_adult=false`
      );
      const data = await response.json();
      setMovieInfo(data.results[0]);

      console.log(data);
    } catch (error) {
      console.log("error:", error);
      //   setInfo("INFORAMTION NOT FOUND");
    }
  };
  useEffect(() => {
    getID();
  }, [getMovie]);
  const getID = async () => {
    const response2 = await fetch(
      `https://api.themoviedb.org/3/movie/${movieInfo.id}/external_ids?api_key=${APP_KEY}`
    );
    const data2 = await response2.json();

    setImdb(data2.imdb_id);
  };

  return (
    <>
      <Nav />
      <div className="movie-info-container">
        <div className="movie-info-img">
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`}
            />
          </div>
          <div className="movie-info-title">
            <div className="date-flex">
              <h1>{movieInfo.title}</h1> <h4>({movieInfo.release_date})</h4>{" "}
            </div>

            <div className="imdb">
              <a href={imdbLink} style={{ textDecoration: "none" }}>
                <h1>IMDb </h1>
              </a>
            </div>

            <div>
              <p>{movieInfo.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetailes;
