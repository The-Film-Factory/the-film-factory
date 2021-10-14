import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "./MovieCard";
import axios from "axios";
import { Link } from 'react-router-dom';

import { handlePushToFirebase } from "./ourDbFunctions.js";

const MovieMatch = () => {
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

  return viewMatch === true ? (
    <div className="matchedMovieSection">
      <h3>You've made a recommendation!</h3>
      <ul className="matchedMovieContainer">
        <MovieCard
          key={englishFilmRes.id}
          movieKey={englishFilmRes.id}
          cardClass={"movieMatchEnglishCard"}
          imgClass={"imgContainer"}
          movieOgLang={englishFilmRes.original_language}
          movieTitle={englishFilmRes.title}
          moviePoster={englishFilmRes.poster_path}
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
          key={foreignFilmRes.id}
          movieKey={foreignFilmRes.id}
          cardClass={"movieMatchForeignCard"}
          imgClass={"imgContainer"}
          movieOgLang={foreignFilmRes.original_language}
          movieTitle={foreignFilmRes.title}
          moviePoster={foreignFilmRes.poster_path}
        />
      </ul>
    </div>
  ) : (
      <h3>Saved!</h3>
            </div>
            :
            <>
              <h3>Saved!</h3>
              
              <Link className="linkButton" to={`/movie/${movieID}`}>Choose another recommendation for this film</Link>
              <Link className="linkButton" to={'/watchlist'}>View this match among others in the public match list</Link>
    
            </>
  );
};
export default MovieMatch;
