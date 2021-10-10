import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import MovieCard from "./MovieCard.js";

function Movie() {
  const { movieID } = useParams();

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function getSimilarMovies(pageNumber) {
      const dbCall = await axios({
        url: `https://api.themoviedb.org/3/movie/${movieID}/similar`,
        method: "GET",
        dataResponse: "json",
        params: {
          api_key: "686f4b568f616a8066ae90d21c06dffe",
          page: pageNumber,
        },
      });
      const movieResults = await dbCall;
      return movieResults;
    }

    const promiseArray = [];
    const newArray = [];

    for (let i = 1; i <= 5; i++) {
      newArray.push(getSimilarMovies(i));
    }

    Promise.all(newArray).then((allResponses) => {
      allResponses.forEach((response) => {
        //use spread operator to make it into a big array of 100 films for filter
        promiseArray.push(...response.data.results);
      });

      //filter on foreginMovies
      const foreignMovies = promiseArray.filter(
        (movie) => movie.original_language !== "en"
      );
      //========================== FILTERS OUT THE DUPLICATES???
      // const foreignMoviesNoDuplicates = foreignMovies.filter((v, i, a) => a.indexOf(v) === i);
      // const foreignMoviesNoDuplicates = [...new Set(foreignMovies)];
      // console.log(foreignMovies, foreignMoviesNoDuplicates);
      //==========================

      //LONG FORM
      //   function removeDuplicates(array, id) {
      //     var newArray = [];
      //     var lookupObject = {};
      //     for (var i in array) {
      //       lookupObject[array[i][id]] = array[i];
      //     }
      //     for (i in lookupObject) {
      //       newArray.push(lookupObject[i]);
      //     }
      //     return newArray;
      //   }

      //   const uniqueArray = removeDuplicates(foreignMovies, "id");

      const uniqMovies = {};
      var uniqueArray = foreignMovies.filter(
        (movie) => !uniqMovies[movie.id] && (uniqMovies[movie.id] = true)
      );
      setMovie(uniqueArray);
    });
  }, [movieID]);

  // ids no longer needed to pass into .map since state is directly being passed
  return (
    <section className="movieContainer">
      <ul>
        {movie.map((currentMovie) => {
          return (
            <MovieCard
              key={currentMovie.id}
              movieKey={currentMovie.id}
              cardClass={"textContainer"}
              imgClass={"imgContainer"}
              movieOgLang={currentMovie.original_language}
              movieTitle={currentMovie.title}
              moviePoster={currentMovie.poster_path}
            />
          );
        })}
      </ul>
    </section>
  );
}

export default Movie;
