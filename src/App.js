import "./styles/App.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ForeignMovie from "./ForeignMovie.js";
import Navigation from "./Navigation.js";
import MovieMatch from "./MovieMatch";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/">
          <header>
            <Navigation />
          </header>
        </Route>

        <main>
          <Route path="/movie/:movieID">
            <ForeignMovie />
          </Route>
          <Route path="/movie/:movieID/:foreignMovieID">
            <MovieMatch />
          </Route>
        </main>

        <footer>
          <p>
            Copyright © 2021
            <a href="https://junocollege.com/">
              {" "}
              Juno College of Technology
            </a>{" "}
            (formerly HackerYou)
          </p>
          <p>
            Data courtesy of <a href="https://opentdb.com/"> Open Trivia DB</a>
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
