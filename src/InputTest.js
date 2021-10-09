import {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

const InputTest = () => {
    const [searchValue, setSearchValue] = useState("");
    // const [searchValue, setSearchValue] = useState("harry potter");
    const [movieResults, setMovieResults] = useState([]);

    const [moviePicked, setMoviePicked] = useState({})



    //useeffect instead of a function
    useEffect(function(){
        //if statement just checks if there's a value in searchvalue, if there isn't then it doesn't make a call (the api hates empty strings)
        if (searchValue){
            axios({
                url: `https://api.themoviedb.org/3/search/movie/`,
                method: "GET",
                dataResponse: "json",
                params: {
                    api_key: "686f4b568f616a8066ae90d21c06dffe",
                    query: searchValue
                },
            }).then((res) => {
                console.log(res.data.results);
                setMovieResults(res.data.results)
            });
        }
        //end if
    //listens for a searchvalue call
    },[searchValue]);
  
    //unaltered, except I removed the makeQuery call
    const getSearch = (e) => {
        const inputVal = e;
        setSearchValue(inputVal);
    }

    //bestMatch() looks for the first result from the query so far when we hit submit.
    const bestMatch = function(e){
        e.preventDefault();
        const newObj = movieResults[0];
        
        setMoviePicked({...newObj})
        console.log(movieResults[0]);
    }

    return(
      <>  
        
        <form onSubmit={ bestMatch }>
            <input type="text" value={searchValue} onChange={(e) => getSearch(e.target.value)} />
            <button>gogogogo</button>
        </form>

        {moviePicked ?
        <Link to={`/movie/${moviePicked.id}`}>{moviePicked.title} </Link>
        : null
        
        }
      
      </>  
    )
}

export default InputTest;