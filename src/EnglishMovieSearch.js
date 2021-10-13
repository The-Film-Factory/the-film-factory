import { useEffect, useState} from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import MovieCard from "./MovieCard";

//First call to get userInput in English name and make the call to get user search
//once we received usersearch, we stored in moviePicked state
const EnglishMovieSearch = () => {
  const [searchValue, setSearchValue] = useState("");
  // create state to store selection
  const [moviesPicked, setMoviesPicked] = useState([]);
  const [movieResults, setMovieResults] = useState([]);
  const [currentMovie, setCurrentMovie] = useState("");
  const [dropdownVisiblity, setDropdownVisibility] = useState(true);
  let history = useHistory("");

  //useeffect instead of a function
  useEffect(
    function () {
      //if statement just checks if there's a value in searchvalue, if there isn't then it doesn't make a call (the api hates empty strings)
      if (searchValue) {
        axios({
          url: `https://api.themoviedb.org/3/search/movie/`,
          method: "GET",
          dataResponse: "json",
          params: {
            api_key: "686f4b568f616a8066ae90d21c06dffe",
            query: searchValue,
          },
        }).then((res) => {
          setMovieResults(res.data.results);
        });
      }
    },
    [searchValue]
  );

  //unaltered, except I removed the makeQuery call
  const getSearch = (query) => {
    if (query !== " ") {
      setSearchValue(query);
      const newObj = movieResults;
      setMoviesPicked(newObj);
      setDropdownVisibility(true);
    } else {
      console.log("no results");
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // do nothing (return nothing) if empty string on submit or if no result returns on submit 
    if (searchValue === '' || moviesPicked.length === 0) {
      return; 
    }else{
        setDropdownVisibility(false);
        setCurrentMovie(moviesPicked[0]);
        // history.push(`/movie/${moviesPicked[0].id}`);
    }
  };

  return (
    <li className="englishMovieSearchContainer">
      {/* on form submit, the selected movie goes to state...*/}
      <form 
        className="dropdownListForm" 
        onSubmit={handleSubmit}>
        <label>
            Search for a movie:
        </label>
        <input
            type="text"
            value={searchValue}
            onChange={(e) => getSearch(e.target.value)}
        />
      </form>

      {/* ...if movie is picked, go to unique id link from the Movie component */}
      <ul className="dropdownListUl">
        {
            dropdownVisiblity === true
            ? 
                (searchValue === ""
                ?
                null
                : 
                    (moviesPicked.length === 0 && searchValue !== '')
                    ? 
                    <li>
                        <p>Movie not found. Please try again.</p>
                    </li>
                    :
                    (
                        moviesPicked.slice(0, 5).map((movie) => {
                            return (
                            <li
                                key={movie.id}
                                className="searchResultLists"
                                onClick={function () {
                                setCurrentMovie(movie);
                                setDropdownVisibility(false);
                                }}
                            >
                                <Link to={`/movie/${movie.id}`}>
                                    <p>{movie.original_title}</p>
                                </Link>
                            </li>
                            );
                        })
                    ) 
                )
            : 
            (
                <Link to={`/movie/${currentMovie.id}`}>
                    <MovieCard
                        //============================================================
                        // These styles are being pushed to the EnglishMovieSearch.scss partial, to specifically style the banner. 
                        //============================================================ 
                        cardClass={"searchBarMovie"}
                        imgClass={"searchBarImageContainer"}
                        cardInformation={"searchBarCardInformation"}
                        key={currentMovie.id}
                        movieTitle={currentMovie.original_title}
                        movieKey={currentMovie.id}
                        movieOgLang={currentMovie.original_language}
                        moviePoster={currentMovie.poster_path}

                    //props that hold the moviecard information
                    />
                </Link>
            )
        }
      </ul>
    </li>
  );
};

export default EnglishMovieSearch;
