import EnglishMovieSearch from "./EnglishMovieSearch.js";
import logo from "./assets/ff.svg";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav>
        <ul className="navigationContainer">
          <Link to={`/`}>
            <li className="logoContainer">
              <img className="logo" src={logo} alt="film factory initial" />
            </li>
          </Link>
          <li className="navFilmFactory">The Film Factory</li>
          <EnglishMovieSearch />
        </ul>
      </nav>
      {/* <h1>The Film Factory</h1> */}
    </>
  );
};

export default Navigation;
