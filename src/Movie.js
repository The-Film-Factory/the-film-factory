import { useEffect, useState } from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';


function Movie() {
    const { movieID } = useParams();

    const [ movie, setMovie ] = useState([]);
    // const movie_id = "501";
    

    useEffect(function () {
        const newArray = [];
        for (let pageNum = 1; pageNum < 10; pageNum++){
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
                
                if(pageNum === 9) {
                    setMovie(newArray);
                }
            });
        }
        
    }, [movieID]);
    
    
    return (
        <section className='movieContainer'>
            
            {
                movie.map(function(currentmovie){
                    console.log(currentmovie);
                    return(
                        <p>{currentmovie.title}</p>
                        )
                })
            }
        </section>
    )
}

export default Movie;