import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ErrorComponent from "./ErrorComponent";
import MovieCard from "./MovieCard";

//First call to get userInput in English name and make the call to get user search
//once we received usersearch, we stored in moviePicked state
const InputTest = () => {
  const [searchValue, setSearchValue] = useState("");
  // create state to store selection
  const [moviesPicked, setMoviesPicked] = useState([]);
  const [movieResults, setMovieResults] = useState([]);
  const [currentMovie, setCurrentMovie] = useState("");
  const [dropdownVisiblity, setDropdownVisibility] = useState(true);

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
      //end if
      //listens for a searchvalue call
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
    setDropdownVisibility(false);
    setCurrentMovie(moviesPicked[0])
  };

  return (
    <>
      {/* on form submit, the selected movie goes to state...*/}
      <form onSubmit={handleSubmit}>
        {/* nest input inside label */}
        <label>Search for a movie:
          <input
          type="text"
          value={searchValue}
          onChange={(e) => getSearch(e.target.value)}
          />
        
          </label>

      </form>

      {/* ...if movie is picked, go to unique id link from the Movie component */}
      <ul>

        {
            dropdownVisiblity 
            ?
            moviesPicked.slice(0, 5).map((movie) => {
                
              return (
                    <li key={movie.id} className="searchResultLists" onClick={function(){
                        setCurrentMovie(movie);
                        setDropdownVisibility(false);
                    }}>
                    <Link 
                    to={`/movie/${movie.id}`}
                    >
                    <p>{movie.original_title}</p>
                    </Link>
                </li>
                );
            })
            :
            null   
        }


        <MovieCard 
        //change these classes to style for this card specifically
            cardClass={"mainTextContainer"} 
            imgClass={"imgContainer"} 

            movieTitle={currentMovie.original_title} 
            movieKey={currentMovie.id} 
            movieOgLang={currentMovie.original_language} 
            movieTitle={currentMovie.title} 
            moviePoster={currentMovie.poster_path}
        //props that hold the moviecard information
        />    
      </ul>
    </>
  );
};

export default InputTest;
