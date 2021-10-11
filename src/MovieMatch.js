import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "./MovieCard";
import axios from "axios";

import { handlePushToFirebase } from './ourDbFunctions.js';  

const MovieMatch = () => {

  const [englishFilmRes, setEnglishFilmRes] = useState([]);
  const [foreignFilmRes, setForeignFilmRes] = useState([]);
  const { movieID, foreignMovieID } = useParams();

  useEffect(function () {
    const apiCallID = function (URL, setPath) {
      axios({
        url: URL,
        method: "GET",
        dataResponse: "json",
        params: {
          api_key: "686f4b568f616a8066ae90d21c06dffe",
        },
      }).then((res) => {
        console.log(res);
        setPath(res.data);
      });
    }

    apiCallID(`https://api.themoviedb.org/3/movie/${movieID}`, setEnglishFilmRes)
    apiCallID(`https://api.themoviedb.org/3/movie/${foreignMovieID}`, setForeignFilmRes)

  }, [foreignMovieID]);

  return (
    <div>
      <h2>Path to foreign film</h2>
      <div className="matchedMovieContainer">
        <MovieCard
          key={englishFilmRes.id}
          movieKey={englishFilmRes.id}
          cardClass={"movieMatchEnglishCard"}
          imgClass={"imgContainer"}
          movieOgLang={englishFilmRes.original_language}
          movieTitle={englishFilmRes.title}
          moviePoster={englishFilmRes.poster_path}
        />
        <MovieCard
          key={foreignFilmRes.id}
          movieKey={foreignFilmRes.id}
          cardClass={"movieMatchForeignCard"}
          imgClass={"imgContainer"}
          movieOgLang={foreignFilmRes.original_language}
          movieTitle={foreignFilmRes.title}
          moviePoster={foreignFilmRes.poster_path}
        />
      </div>
      {/* push englishMovieID and foreignMovieID into firebase */} 
      <button onClick={() => handlePushToFirebase(movieID, foreignMovieID)}>
        Save to my List
      </button>
    </div>
  );
};
export default MovieMatch;