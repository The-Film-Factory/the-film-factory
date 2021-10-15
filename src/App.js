import "./styles/App.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ForeignMovie from "./ForeignMovie.js";
import Navigation from "./Navigation.js";
import MovieMatch from "./MovieMatch";
import DisplayList from "./DisplayList";
import HomePage from "./HomePage";
import { useRef } from "react";

function App() {
  const topReference = useRef(null);
  const botReference = useRef(null);

  const sendToTopFunction = function () {
    topReference.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const sendToBotFunction = function () {
    botReference.current.scrollIntoView({ behavior: "smooth", block: "end" });
  };

  return (
    <Router>
      <div className="App">
        <div ref={topReference}></div>
        <header>
          <Navigation sendToTopFunction={sendToTopFunction} />
        </header>
        <Route exact path="/">
          <HomePage />
        </Route>

        <main>
          <Route path="/movie/:movieID">
            <ForeignMovie />
          </Route>

          <Route path="/movie/:movieID/:foreignMovieID">
            <MovieMatch sendToBotFunction={sendToBotFunction} />
          </Route>

          <Route path="/watchlist">
            <DisplayList />
          </Route>
        </main>

        <footer ref={botReference}>
          <p>
            Copyright © 2021
            <a href="https://junocollege.com/">Juno College of Technology</a>
            (formerly HackerYou)
          </p>
          <p>
            Data courtesy of
            <a href="https://www.themoviedb.org/">Movie Database</a>
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
