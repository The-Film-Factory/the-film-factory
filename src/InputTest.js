import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ErrorComponent from './ErrorComponent';

//First call to get userInput in English name and make the call to get user search
//once we received usersearch, we stored in moviePicked state
const InputTest = () => {
    const [searchValue, setSearchValue] = useState("");
    // const [searchValue, setSearchValue] = useState("harry potter");
    // create state to store selection
    const [moviesPicked, setMoviesPicked] = useState([]);

    const [movieResults, setMovieResults] = useState([]);

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
                // console.log(res.data.results);
                setMovieResults(res.data.results);
            });
            }
            //end if
            //listens for a searchvalue call
        },
        [searchValue]
    );

    //unaltered, except I removed the makeQuery call
    const getSearch = (e) => {
        let errorCatch = e
        if (errorCatch != " "){
            const inputVal = e;
            setSearchValue(inputVal);
            const newObj = movieResults;
            setMoviesPicked( newObj );
        }else{
            console.log("no results");
        }
    };

    // console.log(moviePicked);

    return (
        <>
            {/* on form submit, the selected movie goes to state...*/}
            <form>
                <input
                    type="text"
                    value={searchValue}
                    onChange={(e) => getSearch(e.target.value)}
                />
                <button>gogogogo</button>
            </form>

            {/* ...if movie is picked, go to unique id link from the Movie component */}
            
            <ul>
                {
                    // moviesPicked.slice()
                    moviesPicked.slice(0,5).map( (movie) => {
                        return(
                            <li key = {movie.id} className="searchResultLists">
                                <Link to={`/movie/${movie.id}`}>
                                    <p>{movie.original_title}</p>
                                </Link>
                            </li>
                        )

                    })
                }
            </ul>

            {/* {moviesPicked ? (
            <Link to={`/movie/${moviesPicked.id}`}>{moviesPicked.title} </Link>
            ) : null } */}

        </>
    );
};

export default InputTest;
