import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard.js";

function ForeignMovie() {
  const { movieID } = useParams();

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    // to allow us to write asynchronous logic
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

    // create empty array and fill array with movies (promises)
    const newArray = [];

    for (let i = 1; i <= 15; i++) {
      newArray.push(getSimilarMovies(i));
    }

    // callback to run when all promises are fulfilled (once movies have returned)
    Promise.all(newArray).then((allResponses) => {
      allResponses.forEach((response) => {
        // use spread operator to make it into a big array of 100 films for filter
        promiseArray.push(...response.data.results);
      });

      // filter on foreignMovies
      const foreignMovies = promiseArray.filter(
        (movie) => movie.original_language !== "en"
      );

      const uniqMovies = {};
      const uniqueArray = foreignMovies.filter(
        (movie) => !uniqMovies[movie.id] && (uniqMovies[movie.id] = true)
      );
      setMovie(uniqueArray);
    });
  }, [movieID]);

  // id's no longer needed to pass into .map since state is directly being passed
  return (
    <section className="movieContainer">
      <h3>
        Similar foreign films based on your search...
      </h3>

      {/* <div className='scrollContainer'> */}
        <ul>
          {movie.map((currentMovie) => {
            return (
              <Link
              to={`/movie/${movieID}/${currentMovie.id}`}
              key={currentMovie.id}
              >

                <MovieCard
                key={currentMovie.id}
                movieKey={currentMovie.id}
                cardClass={"textContainer"}
                imgClass={"imgContainer"}
                cardInformation={""}
                movieTitle={currentMovie.title}
                moviePoster={currentMovie.poster_path}
                showOgLang={true}
                movieOgLang={currentMovie.original_language}
                movieReleaseDate={currentMovie.release_date}
                showMovieReleaseDate={true}
                movieDescription={currentMovie.overview}
                showMovieDescription={false}
                />

              </Link>
            );
          })}
        </ul>
      {/* </div> */}
    </section>
  );
}

export default ForeignMovie;