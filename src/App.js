import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Movie from './Movie.js';
import InputTest from './InputTest.js';

function App() {

    return (
        <Router>
            <div className="App">
                <header>
                    <h1>The Film Factory</h1>
                </header>
                <InputTest />
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
            </div>
        </Router>
    );
}

export default App;
        