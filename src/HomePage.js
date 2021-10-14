import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="homePage">
      <h2>
        Welcome to <span className="title neon">The Film Factory</span>
      </h2>
      <h4>How to use us:</h4>
      <div className="instructionContainer">
        <p>Search for an English language movie</p>

        <p>
          Based on your selection, you'll be presented with foreign language
          movies that might be similar
        </p>
        <p>
          Other visitors will be able to view your pairing recommendation and
          you'll be able to view theirs!
        </p>
        <p> Pick one and set it as a match </p>
        <p>
          If you just want to browse,
          <span className="watchlist">
            <Link to="/watchlist">
              View our list of suggested movie pairings
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default HomePage;
