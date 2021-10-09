import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Dummy from './Dummy'

import Movie from './Movie.js';
import InputTest from './InputTest.js';

function App() {

    

    return (
        <Router>
            <div className="App">
                <header>
                    <h1>The Film Factory</h1>
                    <h2>Popular Movies to Watch</h2>
                </header>
                <Route path="/movie/:movieID">
                    <Movie  />
                </Route>
                <footer>
                    <p>
                    Copyright © 2021 <a href='https://junocollege.com/'> Juno College of Technology</a> (formerly HackerYou)
                    </p>
                    <p>
                    Data courtesy of <a href='https://opentdb.com/'> Open Trivia DB</a>
                    </p>
                </footer>
                <InputTest  />
                <Route path="/dummy/:movieID">
                    <Dummy />
                </Route>
            </div>
        </Router>
    );
}

export default App;
        