import { useEffect, useState } from 'react';
import axios from 'axios';


function Movie(props) {


    const [ movie, setMovie ] = useState([]);
    const movie_id = "550";
    // const newArray = [];

    useEffect(() => {
        //new Array(5) is to create an array of 5 //
        //fill method is basically just to fill the new array with 3 empty array within it, in our case was to fill it with each call from the api (so 3 x res.data.results)
        // the "_" means to skip the key and only push the value into this new object
        const promises = new Array(5).fill().map((_, i) =>
          axios({
            url: `https://api.themoviedb.org/3/movie/${movie_id}/similar`,
            method: "GET",
            dataResponse: "json",
            params: {
              api_key: "686f4b568f616a8066ae90d21c06dffe",
              page: i + 1,
            },
          })
        );
        Promise.all(promises).then((res) => {
          //after all data from 3 pages coming back from the api, then I store it in the movie result and use a method called flat map
          //it's like a spread operator and kind of mapping an object into array so sth like: {[1,2,3,4][5,6,7,8]} into [1,2,3,4,5,6,7]
          const movieResults = res.flatMap((movie) => {
            //this is [1,2,3,4,5,6,7]
            return movie.data.results;
          });
          //then i used a filter just like rob if statement
          const foreignMovies = movieResults.filter(
            (movie) => movie.original_language !== "en"
          );
          setMovie(foreignMovies);
        });
      }, []);

    
    // const { foreignLanguageMovies } = props;

    // console.log(foreignLanguageMovies, "this is the foreign language movie prop");

    return (
        <section className='movieContainer'>
            <p>hi?</p>
            {
                movie.map(function(movie){
                    return(
                        <>
                        <p>--</p>
                        <p>TITLE: {movie.title}</p>
                        <p>ORIGINAL LANGUAGE: {movie.original_language}</p>
                        </>
                    )
                })
            }
        </section>
    )
}

export default Movie;