import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <div>
      <h3> Welcome to </h3>
      <h2>The Film Factory</h2>
      <h4>How to use us:</h4>
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
        <Link to="/watchlist">view our list of suggested movie pairings</Link>
      </p>
    </div>
  );
};

export default HomePage;
