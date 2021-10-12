import EnglishMovieSearch from "./EnglishMovieSearch.js";
import logo from "./assets/ff.svg";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav>
        <ul>
          <li></li>
          <Link exact to={`/`}>
            <img className="logo" src={logo} alt="film factory initial" />
          </Link>
        </ul>
      </nav>
      <h1>The Film Factory</h1>
      <EnglishMovieSearch />
    </>
  );
};

export default Navigation;
