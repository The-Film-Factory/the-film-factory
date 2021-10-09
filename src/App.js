import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Movie from './Movie.js';
import InputTest from './InputTest.js';

function App() {



    return (
        <div className="App">
            <header>
                <h1>The Film Factory</h1>
                <h2>Popular Movies to Watch</h2>
            </header>
            <main>
                <Movie />
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