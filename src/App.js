import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Movie from './Movie.js';
import InputTest from './InputTest.js';

function App() {

    const [ movie, setMovie ] = useState([]);
    const movie_id = "501";
    const newArray = [];

    useEffect(function () {
        for (let pageNum = 1; pageNum < 5; pageNum++){
            axios({
                url: `https://api.themoviedb.org/3/movie/${movie_id}/similar`,
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
            });
        }
        setMovie(newArray);
    }, []);

    return (
        <div className="App">
            <header>
                <h1>The Film Factory</h1>
                <h2>Popular Movies to Watch</h2>
            </header>
            <main>
                <Movie foreignLanguageMovies={movie} />
            </main>
            <footer>
                <p>
                Copyright © 2021 <a href='https://junocollege.com/'> Juno College of Technology</a> (formerly HackerYou)
                </p>
                <p>
                Data courtesy of <a href='https://opentdb.com/'> Open Trivia DB</a>
                </p>
            </footer>
            <InputTest  />
        </div>
    );
}

export default App;