import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "./MovieCard";
import axios from "axios";
import { Link } from 'react-router-dom';

import { handlePushToFirebase } from "./ourDbFunctions.js";

const MovieMatch = (props) => {
  const { sendToBotFunction, toggleBannerVisibility } = props;
  const [englishFilmRes, setEnglishFilmRes] = useState([]);
  const [foreignFilmRes, setForeignFilmRes] = useState([]);
  const [viewMatch, setViewMatch] = useState(true);
  const { movieID, foreignMovieID } = useParams();

  useEffect(
    function () {
      const apiCallID = function (URL, setPath) {
        axios({
          url: URL,
          method: "GET",
          dataResponse: "json",
          params: {
            api_key: "686f4b568f616a8066ae90d21c06dffe",
          },
        }).then((res) => {
          setPath(res.data);
        });
      };

      apiCallID(
        `https://api.themoviedb.org/3/movie/${movieID}`,
        setEnglishFilmRes
      );
      apiCallID(
        `https://api.themoviedb.org/3/movie/${foreignMovieID}`,
        setForeignFilmRes
      );
    },
    [movieID, foreignMovieID]
  );

  useEffect(function(){
    sendToBotFunction();
  })

  return (
    viewMatch === true ?
      <div className="matchedMovieSection">
        <h3>You've made a recommendation!</h3>
        <ul className="matchedMovieContainer">
          <MovieCard
            cardClass={"movieMatchEnglishCard"}
            imgClass={"movieMatchImgContainer"}
            cardInformation={"movieMatchCardInformation"}
            key={englishFilmRes.id}
            movieTitle={englishFilmRes.original_title}
            movieKey={englishFilmRes.id}
            movieOgLang={englishFilmRes.original_language}
            showOgLang={true}
            moviePoster={englishFilmRes.poster_path}
            movieReleaseDate={englishFilmRes.release_date}
            showMovieReleaseDate={true}
            movieDescription={englishFilmRes.overview}
            showMovieDescription={true}
          />

          {/* push englishMovieID and foreignMovieID into firebase */}
          <button
            onClick={() => {
              handlePushToFirebase(movieID, foreignMovieID);
              setViewMatch(false);
            }}
          >
            Save as a public match
          </button>

          <MovieCard
            cardClass={"movieMatchForeignCard"}
            imgClass={"movieMatchImgContainer"}
            cardInformation={"movieMatchCardInformation"}
            key={foreignFilmRes.id}
            movieTitle={foreignFilmRes.original_title}
            movieKey={foreignFilmRes.id}
            movieOgLang={foreignFilmRes.original_language}
            showOgLang={true}
            moviePoster={foreignFilmRes.poster_path}
            movieReleaseDate={foreignFilmRes.release_date}
            showMovieReleaseDate={true}
            movieDescription={foreignFilmRes.overview}
            showMovieDescription={true}
          />
        </ul>
      </div>
      : 
      <>
        <h3>Saved!</h3>
        <div className="linkContainer">
          <Link className="linkButton" to={`/movie/${movieID}`}>Choose another recommendation for this film</Link>
          <Link className="linkButton" to={'/watchlist'} onClick={() => toggleBannerVisibility(false)}>View this match among others in the public match list</Link>
        </div>

      </>
  );
};
export default MovieMatch;
      
            
            
