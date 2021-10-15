import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import MovieCard from "./MovieCard";

// first call to get userInput in English name and make the call to get user search
// once we received usersearch, we stored in moviePicked state
const EnglishMovieSearch = (props) => {
  // these props are passed in to control the rendering conditions of the main dropdowns
  const { toggleBanner, bannerMovieVisibile, sendToTopFunction } = props;

  const [searchValue, setSearchValue] = useState("");
  // create state to store selection
  const [moviesPicked, setMoviesPicked] = useState([]);
  const [movieResults, setMovieResults] = useState([]);
  const [currentMovie, setCurrentMovie] = useState("");
  const [dropdownVisiblity, setDropdownVisibility] = useState(true);
  let history = useHistory("");

  const [errorMessage, setErrorMessage] = useState(false);

  // useEffect instead of a function
  useEffect(
    function () {
      // if statement just checks if there's a value in searchvalue => if there isn't then, it doesn't make a call (the api hates empty strings)
      if (searchValue) {
        axios({
          url: `https://api.themoviedb.org/3/search/movie`,
          method: "GET",
          dataResponse: "json",
          params: {
            api_key: "686f4b568f616a8066ae90d21c06dffe",
            query: searchValue,
          },
        })
          .then((res) => {
            setMovieResults(res.data.results);
          })
          // axios to throw error and run .catch() instead of .then ()
          .catch((error) => {
            setErrorMessage(error);
          });
      }
    },
    [searchValue]
  );
  

  const getSearch = (query) => {
    if (query !== " ") {
      const newObj = movieResults;
      setSearchValue(query);
      setMoviesPicked(newObj);
      // toggles the visibility of the overal nav and main movie so they for sure appear
      toggleBanner(true);
      // toggles the visilibility of the dropdown to ensure it shows up when typing
      setDropdownVisibility(true);
      sendToTopFunction();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // do nothing (return nothing) if empty string on submit or if no result returns on submit
    if (searchValue === "" || moviesPicked.length === 0) {
      return;
    } else {
      setDropdownVisibility(false);
      setCurrentMovie(moviesPicked[0]);
      history.push(`/movie/${moviesPicked[0].id}`);
      setSearchValue("");
    }
  };

  return (
    <>
      <li className="englishMovieSearchContainer">
        {/* on form submit, the selected movie goes to state...*/}
        <form className="dropdownListForm" onSubmit={handleSubmit}>
          <label className="sr-only">Search for a movie:</label>
          <input
            placeholder="Search for a movie..."
            type="text"
            value={searchValue}
            onChange={(e) => getSearch(e.target.value)}
          />
        </form>

        {/* ...if movie is picked, go to unique id link from the Movie component */}
        <ul className="dropdownListUl">
          {bannerMovieVisibile !== true ? null : dropdownVisiblity === true ? (
            searchValue === "" ? null : errorMessage ? ( // display error message when api fails/is down
              <li>
                <p>
                  The page is temporarily unavailable due to scheduled
                  maintenance. Please check back later.
                </p>
              </li>
            ) : // display error message when no results return based on user input
            moviesPicked.length === 0 && searchValue !== "" ? (
              <li>
                <p>No results found. Please try a different search.</p>
              </li>
            ) : (
              moviesPicked.slice(0, 5).map((movie) => {
                return (
                  <li
                    key={movie.id}
                    className="searchResultLists"
                    onClick={function () {
                      // these make things stop rendering once we make a query
                      setCurrentMovie(movie);
                      setDropdownVisibility(false);
                      setSearchValue("");
                    }}
                  >
                    <Link to={`/movie/${movie.id}`}>
                      <p>{movie.original_title}</p>
                    </Link>
                  </li>
                );
              })
            )
          ) : (
            <Link to={`/movie/${currentMovie.id}`}>
              <MovieCard
                // ============================================================
                // these styles are being pushed to the EnglishMovieSearch.scss partial, to specifically style the banner
                // ============================================================
                // props that hold the moviecard information
                cardClass={"searchBarMovie"}
                imgClass={"searchBarImageContainer"}
                cardInformation={"searchBarCardInformation"}
                key={currentMovie.id}
                movieTitle={currentMovie.original_title}
                movieKey={currentMovie.id}
                movieOgLang={currentMovie.original_language}
                showOgLang={false}
                moviePoster={currentMovie.poster_path}
                movieReleaseDate={currentMovie.release_date}
                showMovieReleaseDate={true}
                movieDescription={currentMovie.overview}
                showMovieDescription={true}
              />
            </Link>
          )}
        </ul>
      </li>
    </>
  );
};

export default EnglishMovieSearch;
