import { useEffect, useState } from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';

function Movie() {
    const { movieID } = useParams();

    const [ movie, setMovie ] = useState([]);
    // const movie_id = "501";
    

    useEffect(function () {
        const newArray = [];
        for (let pageNum = 1; pageNum < 5; pageNum++){
            axios({
                url: `https://api.themoviedb.org/3/movie/${movieID}/similar`,
                method: "GET",
                dataResponse: "json",
                params: {
                    api_key: "686f4b568f616a8066ae90d21c06dffe",
                    page: pageNum
            },
            }).then((res) => {
                let movieResults = res.data.results;
                
                movieResults.forEach(function(movie){
                    if (movie.original_language !== "en"){
                        newArray.push(movie);
                    }
                })
                // move newArray into useEffect and set a conditional to set state at the end of the loop 
                if(pageNum === 4) {
                    setMovie(newArray);
                }
            });
        }
    // set dependency array to the useParams value 
    }, [movieID]);
    
    // props no longer needed to pass into .map since state is directly being passed 
    return (
        <section className='movieContainer'>
            <ul>
            {
                movie.map(function(currentmovie){
                    console.log(currentmovie);
                    return(
                        <>
                        <li>
                            <div className='textContainer'>
                                <h2>{currentmovie.title}</h2>
                                <p>Language: {currentmovie.original_language}</p> 
                            </div>
                            <div className='imgContainer'>
                                <img
                                src={`https://image.tmdb.org/t/p/w500/${currentmovie.poster_path}`}
                                alt={`Poster for '${currentmovie.title}'`}
                                / >
                            </div>
                        </li>
                        </>
                        )
                })
            }
            </ul>
        </section>
    )
}

export default Movie;