import EnglishMovieSearch from "./EnglishMovieSearch.js";
import logo from "./assets/logo512.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navigation = () => {
  const [bannerMovieVisibile, setBannerMovieVisible] = useState(false);

  // This function sets the visibility of the dropdown menu and banner movie, which we want to turn off on the homepage
  // It's disabled when the logo is clicked, and is passed as a prop into the search componentn
  //======================================================
  const toggleBannerVisibility = function (toggle) {
    if (toggle === true) {
      setBannerMovieVisible(true);
    } else {
      setBannerMovieVisible(false);
    }
  };

  return (
    <>
      <nav>
        <ul className="navigationContainer">
          <Link
            to={`/`}
            onClick={function () {
              setBannerMovieVisible(false);
            }}
          >
            <li className="logoContainer">
              <img className="logo" src={logo} alt="The Film Factory logo" />
            </li>
          </Link>
          <li className="navFilmFactory">The Film Factory</li>
          <EnglishMovieSearch
            toggleBanner={toggleBannerVisibility}
            bannerMovieVisibile={bannerMovieVisibile}
          />
        </ul>
      </nav>
      {/* <h1>The Film Factory</h1> */}
    </>
  );
};

export default Navigation;
