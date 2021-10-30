import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";

const MoviePair = ({ match }) => {
  const [matchData, setMatchData] = useState([]);

  useEffect(() => {
    async function apiCallID(URL) {
      const dbCall = await axios({
        url: URL,
        method: "GET",
        dataResponse: "json",
        params: {
          api_key: "686f4b568f616a8066ae90d21c06dffe",
        },
      });
      const dbResults = await dbCall;

      return dbResults;
    }

    // create empty array and fill array with movies (promises)
    let newArray = [];

    newArray.push(apiCallID(`https://api.themoviedb.org/3/movie/${match.englishMovie}`));
    newArray.push(apiCallID(`https://api.themoviedb.org/3/movie/${match.foreignMovie}`));

        // callback to run when all promises are fulfilled (once movies have returned)
        Promise.all(newArray).then((allResponses) => {
          const promiseArray = [];
          allResponses.forEach((response) => {
            promiseArray.push(response.data);
          });
          setMatchData(promiseArray)
        })
      }, [match]);

      return (
        <>
          {matchData.length > 0 ? (
              <div className="pairContainer">
                <MovieCard
                    cardClass={"moviePairListEnglishCard"}
                    imgClass={"imgContainer"}
                    cardInformation={"moviePairListEnglishCardInfo"}
                    key={matchData[0].id}
                    movieTitle={matchData[0].original_title}
                    movieKey={matchData[0].id}
                    movieOgLang={matchData[0].original_language}
                    showOgLang={false}
                    moviePoster={matchData[0].poster_path}
                    movieReleaseDate={matchData[0].release_date}
                    showMovieReleaseDate={false}
                    movieDescription={matchData[0].overview}
                    showMovieDescription={false}
                />
    
                <div className="likeThis">
                  <p>If you like this...
                    <span className="arrow" aria-label="english film">↩</span>
                    <span className="youMay">...you might like this</span>
                    <span className="arrow" aria-label="foreign film">↪</span>
                  </p>
                </div>
                
                <MovieCard
                    cardClass={"moviePairListForeignCard"}
                    imgClass={"imgContainer"}
                    cardInformation={"moviePairListForeignCardInfo"}
                    key={matchData[1].id}
                    movieTitle={matchData[1].original_title}
                    movieKey={matchData[1].id}
                    movieOgLang={matchData[1].original_language}
                    showOgLang={false}
                    moviePoster={matchData[1].poster_path}
                    movieReleaseDate={matchData[1].release_date}
                    showMovieReleaseDate={false}
                    movieDescription={matchData[1].overview}
                    showMovieDescription={false}
                />
              </div>
          ) : null}
        </>
      );
    };

export default MoviePair;